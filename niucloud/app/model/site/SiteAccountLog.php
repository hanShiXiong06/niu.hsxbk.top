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

namespace app\model\site;

use app\dict\site\SiteAccountLogDict;
use app\dict\site\SiteDict;
use app\model\pay\Pay;
use app\model\pay\Refund;
use app\model\pay\Transfer;
use core\base\BaseModel;
use think\db\Query;

/**
 * 站点账单记录
 * Class SiteAccountLog
 * @package app\model\site
 */
class SiteAccountLog extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'site_account_log';


    /**
     * 状态字段转化
     * @param $value
     * @return mixed
     */
    public function getTypeNameAttr($value, $data)
    {
        return SiteAccountLogDict::getType()[$data['type']] ?? '';
    }

    /**
     * 获取相关支付单据信息
     * @param $value
     * @param $data
     */
    public function getPayInfoAttr($value, $data)
    {
        switch ($data['type']){
            case 'pay' :
                return (new Pay())->where([['out_trade_no', '=', $data['trade_no']]])->append(['type_name'])->findOrEmpty()->toArray();
                break;
            case 'refund' :
                return (new Refund())->where([['refund_no', '=', $data['trade_no']]])->findOrEmpty()->toArray();
                break;
            case 'transfer':
                return (new Transfer())->where([['transfer_no', '=', $data['trade_no']]])->findOrEmpty()->toArray();
                break;
            default:
                return [];
        }
    }
    /**
     * 状态字段转化
     * @param $value
     * @return mixed
     */
    public function searchTypeAttr($query, $value, $data)
    {
        if ($value) {
            $query->where('type', '=', $value );
        }
    }

    /**
     * 金额转化
     * @param $value
     * @return mixed
     */
    public function getMoneyAttr($value, $data)
    {
        if(strpos($data['money'], "-") !== false){
            return $data['money'];
        }else{
            return "+".$data['money'];
        }
    }

    /**
     * 创建时间搜索器
     * @param $value
     */
    public function searchCreateTimeAttr(Query $query, $value, $data)
    {
        $start_time = empty($value[ 0 ]) ? 0 : strtotime($value[ 0 ]);
        $end_time = empty($value[ 1 ]) ? 0 : strtotime($value[ 1 ]);
        if ($start_time > 0 && $end_time > 0) {
            $query->whereBetweenTime('create_time', $start_time, $end_time);
        } else if ($start_time > 0 && $end_time == 0) {
            $query->where([ [ 'create_time', '>=', $start_time ] ]);
        } else if ($start_time == 0 && $end_time > 0) {
            $query->where([ [ 'create_time', '<=', $end_time ] ]);
        }
    }


}
