<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\service\core\pay;


use app\dict\pay\PayDict;
use app\model\pay\PayChannel;
use app\service\core\weapp\CoreWeappConfigService;
use app\service\core\wechat\CoreWechatConfigService;
use core\base\BaseCoreService;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\Model;


/**
 * 支付渠道服务层
 */
class CorePayChannelService extends BaseCoreService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new PayChannel();

    }

    /**
     * 查询实例
     * @param array $where
     * @return PayChannel|array|mixed|Model
     */
    public function find(array $where)
    {
        return $this->model->where($where)->findOrEmpty();
    }

    /**
     * 通过渠道获取支持的支付方式(专属用于支付业务)
     * @param string $channel
     * @param string $trade_type
     * @return array|array[]
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function getAllowPayTypeByChannel(string $channel, string $trade_type = '')
    {
        $channel_pay_list = $this->model->where([ [ 'channel', '=', $channel ], [ 'status', '=', 1 ] ])->field('type,config')->order('sort asc')->select()->toArray();
        $pay_type_list = [];
        if (!empty($channel_pay_list)) {
            $temp_channel_pay_list = array_column($channel_pay_list, 'type');
            $pay_type_list = PayDict::getPayType($temp_channel_pay_list);
        }

        $pay_type_list = array_values(array_filter(event('AllowPayTypeByTrade', [ 'channel' => $channel, 'trade_type' => $trade_type, 'pay_type_list' => $pay_type_list ])))[ 0 ] ?? $pay_type_list;
        // 线下支付做处理
        if (!empty($pay_type_list) && isset($pay_type_list[ PayDict::OFFLINEPAY ])) {
            $temp_channel_pay_list = array_column($channel_pay_list, null, 'type');
            $pay_type_list[ PayDict::OFFLINEPAY ][ 'config' ] = $temp_channel_pay_list[ PayDict::OFFLINEPAY ][ 'config' ];
        }
        return $pay_type_list ?? [];

    }

    /**
     * 通过渠道和支付方式获取支付配置
     * @param string $channel
     * @param string $type
     * @return array|mixed
     */
    public function getConfigByChannelAndType(string $channel, string $type)
    {
        $pay_channel = $this->model->where([ [ 'channel', '=', $channel ], [ 'type', '=', $type ] ])->field('config')->findOrEmpty();
        if (!$pay_channel->isEmpty()) {
            if ($type == PayDict::WECHATPAY) {
                $pay_channel->config = array_merge($pay_channel->config, $this->getWechatPayFullConfig());
            }
            return $pay_channel->config;
        }
        return [];
    }


    /**
     * 获取完整的微信支付配置(根据场景)
     * @return array
     */
    public function getWechatPayFullConfig()
    {
        //TODO 先判断是否是开放平台授权,然后再决定使用什么appid
        //查询公众号配置
        $core_wechat_config_service = new CoreWechatConfigService();
        $mp_app_id = $core_wechat_config_service->getWechatConfig()[ 'app_id' ];//公众号appid
        //查询公众号配置
        $core_weapp_config_service = new CoreWeappConfigService();
        $mini_app_id = $core_weapp_config_service->getWeappConfig()[ 'app_id' ];//小程序appid
        //todo  查询微信小程序 appid  .  应用appid.....
        return [
            'mp_app_id' => $mp_app_id,
            'mini_app_id' => $mini_app_id
            //............
        ];
    }
}