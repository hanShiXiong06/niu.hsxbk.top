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

namespace app\service\admin\member;

use app\model\member\MemberCashOut;
use app\service\core\member\CoreMemberCashOutService;
use core\base\BaseAdminService;

/**
 * 会员提现服务层
 */
class MemberCashOutService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new MemberCashOut();
    }

    /**
     * 会员提现列表
     * @param array $where
     * @return mixed
     */
    public function getPage(array $where = [])
    {

        $field = 'id,site_id,cash_out_no,member_id,account_type,transfer_type,transfer_realname,transfer_mobile,transfer_bank,transfer_account,transfer_fail_reason,transfer_status,transfer_time,apply_money,rate,service_money,money,audit_time,status,remark,create_time,refuse_reason,transfer_no';
        $search_model = $this->model->where([['site_id', '=', $this->site_id]])->withSearch(['member_id','status', 'create_time'],$where)->with(['memberInfo', 'transfer'])->field($field)->order('create_time desc')->append(['status_name', 'transfer_status_name', 'transfer_type_name', 'account_type_name']);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 提现详情
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,site_id,cash_out_no,member_id,account_type,transfer_type,transfer_realname,transfer_mobile,transfer_bank,transfer_account,transfer_fail_reason,transfer_status,transfer_time,apply_money,rate,service_money,money,audit_time,status,remark,create_time,refuse_reason,transfer_no';
        return $this->model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->with(['memberInfo', 'transfer'])->field($field)->append(['status_name', 'transfer_status_name', 'transfer_type_name', 'account_type_name'])->findOrEmpty()->toArray();
    }

    /**
     * @param int $id
     * @param $data
     * @return void
     */
    public function audit(int $id, string $action, $data){
        $core_member_cash_out_service = new CoreMemberCashOutService();
        return $core_member_cash_out_service->audit($this->site_id, $id, $action, $data);
    }


    /**
     * 转账
     * @param $id
     * @param $data
     * @return true
     */
    public function transfer(int $id, array $data){
        $core_member_cash_out_service = new CoreMemberCashOutService();
        return $core_member_cash_out_service->transfer($this->site_id, $id, $data);
    }

}