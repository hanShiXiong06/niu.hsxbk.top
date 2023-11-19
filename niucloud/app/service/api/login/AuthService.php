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

namespace app\service\api\login;

use app\model\member\Member;
use app\Request;
use app\service\api\member\MemberService;
use app\service\core\weapp\CoreWeappAuthService;
use core\base\BaseApiService;
use core\exception\ApiException;
use core\exception\AuthException;

/**
 * 登录服务层
 * Class BaseService
 * @package app\service
 */
class AuthService extends BaseApiService
{

    public function __construct()
    {
        parent::__construct();
        $this->model = new Member();
    }

    public function checkAuth(Request $request){
        //如果登录信息非法就报错
        if($this->member_id > 0){
            $member_service = new MemberService();
            $member_info = $member_service->findMemberInfo(['member_id' => $this->member_id]);
            if($member_info->isEmpty())
                throw new AuthException('MEMBER_NOT_EXIST');
        }
        return true;
    }

    /**
     * 绑定手机号
     * @param string $mobile
     * @param string $mobile_code
     * @return true
     */
        public function bindMobile(string $mobile, string $mobile_code){

        if(empty($mobile)){
            $result = (new CoreWeappAuthService())->getUserPhoneNumber($mobile_code);
            if(empty($result)) throw new ApiException('WECHAT_EMPOWER_NOT_EXIST');
            $phone_info = $result['phone_info'];
            $mobile = $phone_info['purePhoneNumber'];
            if(empty($mobile)) throw new ApiException('WECHAT_EMPOWER_NOT_EXIST');
        }else{
            //todo  校验手机号验证码
            (new LoginService())->checkMobileCode($mobile);
        }
        $member_service = new MemberService();
        $member = $member_service->findMemberInfo(['member_id' => $this->member_id]);
        if($member->isEmpty()) throw new AuthException('MEMBER_NOT_EXIST');

        $o_mobile = $member['mobile'];//原始手机号
        if(!empty($o_mobile)) throw new AuthException('MOBILE_IS_BIND_MEMBER');

        $mobile_member = $member_service->findMemberInfo(['mobile' => $mobile]);
        if(!$mobile_member->isEmpty()) throw new AuthException('MOBILE_IS_EXIST');

//        if(empty($mobile)) throw new AuthException('MOBILE_NEEDED');//必须填写
        $member->save([
            'mobile' => $mobile
        ]);
        return true;
    }


}