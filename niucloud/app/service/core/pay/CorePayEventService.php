<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\service\core\pay;

use app\enum\common\ChannelEnum;
use app\enum\pay\PayEnum;
use app\enum\pay\TransferEnum;
use core\base\BaseCoreService;
use core\exception\PayException;
use core\pay\PayDriver;
use core\pay\PayLoader;
use Yansongda\Supports\Collection;

/**
 * 支付服务层
 * Class CorePayEventService
 * @package app\service\core\pay
 */
class CorePayEventService extends BaseCoreService
{

    private $site_id;//站点id
    private $config;//支付配置
    private $type;//支付类型
    private $channel;//支付渠道  (特殊点,转账也算是一种)

    public function __construct()
    {
        parent::__construct();
    }


    /**
     * 支付引擎外置触点初始化
     * @param int $site_id
     * @param string $channel
     * @param string $type
     * @return $this
     */
    public function init(int $site_id, string $channel = '', string $type = ''){
        $this->site_id = $site_id;
        $this->channel = $channel;
        $this->type = $type;
        $this->config = (new CorePayChannelService())->getConfigByChannelAndType($this->site_id, $this->channel, $this->type);
        return $this;
    }
    /**
     * 获取实例化应用
     * @param $site_id
     * @return \core\pay\PayDriver
     */
    public function app(string $action = 'query')
    {
        $notify_url = (string)url("/api/pay/notify/$this->site_id/$this->channel/$this->type/$action", [], '', true);//异步回调通知地址
        $this->config['notify_url'] = $notify_url;
        return new PayLoader($this->type, $this->config);
    }


    /**
     * 去支付
     * @param $out_trade_no
     * @param $money
     * @param $boby
     * @param $refund_url
     * @param $quit_url
     * @param $buyer_id
     * @return mixed
     */
    public function pay(string $out_trade_no, float $money, string $boby, string $refund_url = '', string $quit_url = '', string $buyer_id = '', string $openid = '')
    {
        $pay_fun = '';

        $params = array(
            'out_trade_no' => $out_trade_no,
            'money' => $money,
            'boby' => $boby,
            'channel' => $this->channel,
            'refund_url' => $refund_url,
            'quit_url' => $quit_url,
            'buyer_id' => $buyer_id,
            'openid' => $openid
        );
        switch($this->type){
            case PayEnum::WECHATPAY:
                $params['money'] = $params['money'] * 100;

                switch ($this->channel) {
                    case ChannelEnum::H5://h5
                        $pay_fun = 'wap';
                        break;
                    case ChannelEnum::WECHAT://公众号
                        $pay_fun = 'mp';

                        break;
                    case ChannelEnum::WEAPP://微信小程序
                        $pay_fun = 'mini';
                        break;

                    case ChannelEnum::PC://pc
                        $pay_fun = 'scan';//扫码支付
                        break;
                    case ChannelEnum::APP://app
                        $pay_fun = 'app';
                        break;
                }

                break;
            case PayEnum::ALIPAY:
                switch ($this->channel) {
                    case ChannelEnum::H5://h5
                        $pay_fun = 'wap';
                        break;
                    case ChannelEnum::PC://pc
                        $pay_fun = 'web';
                        break;
                    case ChannelEnum::APP://app
                        $pay_fun = 'app';
                        break;
                    case ChannelEnum::WECHAT://wap
                        $pay_fun = 'wap';
                        break;
                }
        }
        if(empty($pay_fun)) throw new PayException('PAYMENT_METHOD_NOT_SCENE');
        return $this->app('pay')->$pay_fun($params);
    }


    /**
     * 转账
     * @param $site_id
     * @param $from_no
     * @param $product_code 支付宝用
     * @param $scene
     * @param $to_no
     * @param $to_type 支付宝用
     * @param $to_name
     * @return mixed|Collection
     */
    public function transfer(float $money, string $transfer_no,string  $to_no, string $to_name, string $remark, array $transfer_list = [], string $to_type = '', string $product_code = '', string $scene = '')
    {
        $transfer_type = TransferEnum::getPayTypeByTransfer($this->type);
        switch($transfer_type){
            case PayEnum::WECHATPAY:
                $money = $money * 100;
                break;
            case PayEnum::ALIPAY:

        }
        return $this->app('transfer')->transfer([
            'transfer_no' => $transfer_no,
            'money' => $money,
            'product_code' => $product_code,
            'scene' => $scene,
            'to_no' => $to_no,
            'to_type' => $to_type,
            'to_name' => $to_name,
            'remark' => $remark,
            'transfer_list' => $transfer_list
        ]);
    }

    /**
     * 关闭支付
     * @param string $out_trade_no
     * @return null
     */
    public function close(string $out_trade_no)
    {
        return $this->app('close')->close($out_trade_no);
    }

    /**
     * 退款
     * @param $site_id
     * @param $out_trade_no
     * @param $money
     * @return void
     */
    public function refund(string $out_trade_no, float $money, float $total, string $refund_no)
    {
        return $this->app('refund')->refund([
            'out_trade_no' => $out_trade_no,
            'out_trade_no' => $money,
            'out_trade_no' => $total,
            'out_trade_no' => $refund_no
        ]);
    }

    /**
     * 支付异步通知
     * @return void
     */
    public function notify(Callable $callback)
    {
        return $this->app()->notify($callback);
    }

    /**
     * 查询普通支付订单
     * @param $out_trade_no
     * @return null
     */
    public function getOrder(string $out_trade_no)
    {
        return $this->app()->getOrder(['out_trade_no' => $out_trade_no]);
    }

    /**
     * 查询退款订单
     * @param $out_trade_no
     * @param $refund_no
     * @return null
     */
    public function getRefund(string $out_trade_no, string $refund_no)
    {
        return $this->app()->getRefund($out_trade_no, $refund_no);
    }

    /**
     * 查询转账订单
     * @param $transfer_no
     * @return null
     */
    public function getTransfer(string $transfer_no)
    {
        return $this->app()->getTransfer($transfer_no);
    }


    /**
     * 取消订单
     * 支付宝接口    权限极高  支付交易返回失败或支付系统超时，调用该接口撤销交易。如果此订单用户支付失败，支付宝系统会将此订单关闭；如果用户支付成功，支付宝系统会将此订单资金退还给用户。
     * 注意：只有发生支付系统超时或者支付结果未知时可调用撤销，其他正常支付的单如需实现相同功能请调用申请退款API。提交支付交易后调用【查询订单API】，没有明确的支付结果再调用【撤销订单API】。
     * @return void
     */
    public function cancel()
    {

    }


}