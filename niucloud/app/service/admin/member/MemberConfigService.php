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

use app\model\member\Member;
use app\service\admin\BaseAdminService;
use app\service\core\member\CoreMemberConfigService;
use extend\exception\AdminException;
use think\db\exception\DbException;

/**
 * 会员设置
 * Class MemberConfigService
 * @package app\service\admin\member
 */
class MemberConfigService extends BaseAdminService
{
    /**
     * 获取注册与登录设置
     */
    public function getLoginConfig(){

        return (new CoreMemberConfigService())->getLoginConfig($this->site_id);
    }

    /**
     * 注册登录设置
     * @param $data
     */
    public function setLoginConfig(array $data){
        return (new CoreMemberConfigService())->setLoginConfig($this->site_id, $data);
    }
    /**
     * 获取提现设置
     */
    public function getWithdrawConfig(){

        return (new CoreMemberConfigService())->getWithdrawConfig($this->site_id);
    }

    /**
     * 提现设置
     * @param $data
     */
    public function setWithdrawConfig(array $data){
        return (new CoreMemberConfigService())->setWithdrawConfig($this->site_id, $data);
    }
}