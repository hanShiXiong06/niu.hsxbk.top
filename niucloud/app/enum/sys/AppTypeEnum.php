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

namespace app\enum\sys;

class AppTypeEnum
{

    const ADMIN = 'admin';//平台管理端

    const SITE = 'site';//站点管理端
    const API = 'api';//手机网页端

    /**
     * 附件类型
     * @return array
     */
    public static function getAppType(){
        return [
            self::ADMIN => get_lang('enum_app.type_admin'),//平台管理端
            self::SITE  => get_lang('enum_app.type_site'),//站点管理端
            self::API  => get_lang('enum_app.type_api'),//客户端
        ];
    }


}