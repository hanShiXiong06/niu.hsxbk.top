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

namespace app\model\order;

use app\enum\common\ChannelEnum;
use app\enum\order\OrderTypeEnum;
use app\enum\order\RechargeOrderEnum;
use app\model\BaseModel;
use app\model\member\Member;
use think\db\Query;

/**
 * 订单模型
 * Class Order
 * @package app\model\order
 */
class Order extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'order_id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'order';

    //类型
    protected $type = [
        'pay_time'     =>  'timestamp',
        'close_time'  =>  'timestamp',
    ];

    /**
     * 订单状态名称
     * @param $value
     * @param $data
     * @return mixed|string
     */
    public function getOrderStatusInfoAttr($value, $data)
    {
        if(isset($data['order_type']) && isset($data['order_status']))
        {
            $class = "app\\enum\\order\\". ucfirst($data['order_type']).'OrderEnum';
            return $class::getStatus($data['order_status']);
        }else
            return [];
    }

    /**
     * 登录渠道字段转化
     * @param $value
     * @return mixed
     */
    public function getOrderFromNameAttr($value, $data)
    {
        if(isset($data['order_from']))
        {
            return ChannelEnum::getType()[$data['order_from']] ?? '';
        }

    }

    /**
     * 会员id搜索
     * @param $query
     * @param $value
     * @param $data
     */
    public function searchMemberIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where('member_id', '=', $value);
        }
    }

    /**
     * 订单来源
     * @param $query
     * @param $value
     * @param $data
     */
    public function searchOrderFromAttr($query, $value, $data)
    {
        if ($value) {
            $query->where('order_from', '=', $value);
        }
    }

    /**
     * 订单类型
     * @param $query
     * @param $value
     * @param $data
     */
    public function searchOrderTypeAttr($query, $value, $data)
    {
        if ($value) {
            $query->where('order_type', '=', $value);
        }
    }

    /**
     * 支付流水号
     * @param $query
     * @param $value
     * @param $data
     */
    public function searchOutTradeNoAttr($query, $value, $data)
    {
        if ($value) {
            $query->where('out_trade_no', '=', $value);
        }
    }

    /**
     * 订单状态
     * @param $query
     * @param $value
     * @param $data
     */
    public function searchOrderStatusAttr($query, $value, $data)
    {
        if ($value != '') {
            $query->where('order_status', '=', $value);
        }
    }
    /**
     * 创建时间搜索器
     * @param $value
     */
    public function searchCreateTimeAttr($query, $value, $data)
    {
        $start_time = empty($value[0]) ? 0 : strtotime($value[0]) ;
        $end_time = empty($value[1]) ? 0 : strtotime($value[1]) ;
        if($start_time > 0 && $end_time > 0){
            $query->whereBetweenTime('create_time', $start_time, $end_time);
        }else if($start_time > 0 && $end_time == 0){
            $query->where([['create_time', '>=', $start_time]]);
        }else if($start_time == 0 && $end_time > 0){
            $query->where([['create_time', '<=', $end_time]]);
        }
    }

    /**
     * 订单项目
     * @return \think\model\relation\HasMany
     */
    public function item()
    {
        return $this->hasMany(OrderItem::class,'order_id', 'order_id');
    }

    /**
     * 订单会员
     * @return \think\model\relation\HasOne
     */
    public function member()
    {
        return $this->hasOne(Member::class,'member_id', 'member_id');
    }


}
