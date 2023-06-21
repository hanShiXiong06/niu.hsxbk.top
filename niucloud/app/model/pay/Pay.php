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

namespace app\model\pay;

use app\dict\pay\PayDict;
use core\base\BaseModel;

/**
 * 订单模型
 * Class Order
 * @package app\model\order
 */
class Pay extends BaseModel
{


    // 关闭自动写入update_time字段
    protected $updateTime = false;
    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'pay';

    //类型
    protected $type = [
        'pay_time'     =>  'timestamp',
        'close_time'  =>  'timestamp',
    ];

    protected $json = ['allow_type'];

    protected $jsonAssoc = true;
    /**
     * 状态字段转化
     * @param $value
     * @return mixed
     */
    public function getStatusNameAttr($value, $data)
    {
        if(empty($data['status']))
            return '';
        return PayDict::getStatus()[$data['status']] ?? '';
    }
    /**
     * 支付方式字段转化
     * @param $value
     * @return mixed
     */
    public function getTypeNameAttr($value, $data)
    {
        if(empty($data['type']))
            return '';
        $temp = PayDict::getPayType()[$data['type']] ?? [];
        return $temp['name'] ?? '';
    }

}
