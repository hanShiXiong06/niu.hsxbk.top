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


use app\enum\pay\PayEnum;
use app\model\pay\PayChannel;
use core\base\BaseCoreService;
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
    public function find(int $site_id, array $where){
        $where['site_id'] = $site_id;
        return $this->model->where($where)->findOrEmpty();
    }
    /**
     * 通过渠道获取支持的支付方式(专属用于支付业务)
     * @param int $site_id
     * @param string $channel
     * @param array $pay_type_list 外部业务支付类型限制
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getAllowPayTypeByCahnnel(int $site_id, string $channel, array $pay_type_limit_list = []){
        $channel_pay_list = $this->model->where([['site_id', '=', $site_id], ['channel', '=', $channel], ['status', '=', 1]])->field('type')->order('sort asc')->select()->toArray();
        if(!empty($channel_pay_list)){
            $temp_channel_pay_list = array_column($channel_pay_list, 'type');
            if($pay_type_limit_list) $temp_channel_pay_list = array_intersect($temp_channel_pay_list, $pay_type_limit_list);
            $pay_type_list = PayEnum::getPayType($temp_channel_pay_list);
            $allow_pay_type_list = [];
            foreach($channel_pay_list as $v){
                $allow_pay_type_list[] = $pay_type_list[$v['type']];
            }
        }
        return $allow_pay_type ?? [];

    }

    /**
     * 通过渠道和支付方式获取支付配置
     * @param int $site_id
     * @param string $channel
     * @param string $type
     * @return array|mixed
     */
    public function getConfigByChannelAndType(int $site_id, string $channel, string $type){
        $pay_channel = $this->model->where([['site_id', '=', $site_id], ['channel', '=', $channel], ['type', '=', $type]])->field('config')->findOrEmpty();
        if(!$pay_channel->isEmpty()) return $pay_channel->config;
        return [];
    }
}