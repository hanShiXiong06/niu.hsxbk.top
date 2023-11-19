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

namespace app\service\admin\stat;

use addon\recharge\app\model\RechargeOrder;
use core\base\BaseAdminService;
use think\db\exception\DbException;


/**
 * 站点统计服务层
 * Class StatService
 * @package app\service\admin\stat
 */
class SiteStatService extends BaseAdminService
{

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * 订单金额
     * @param $start_time
     * @param $end_time
     * @return float
     */
    public function orderMoney($start_time, $end_time)
    {
        $where[] = [
            ['order_status', '>', 0],
            ['create_time', 'between', [$start_time, $end_time]]
        ];
        return (new RechargeOrder())->where($where)->sum('order_money');
    }

    /**
     * 订单数量
     * @param $start_time
     * @param $end_time
     * @return int
     * @throws DbException
     */
    public function orderCount($start_time, $end_time)
    {
        $where[] = [
            ['order_status', '>', 0],
            ['create_time', 'between', [$start_time, $end_time]]
        ];
        return (new RechargeOrder())->where($where)->count('order_id');
    }






}
