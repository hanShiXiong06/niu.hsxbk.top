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

namespace app\validate\site;

use think\Validate;

/**
 * 站点验证
 * Class Site
 * @package app\validate\site
 */
class Site extends Validate
{


    protected $rule = [
        'site_name' => 'require|max:20',

    ];

    protected $message = [
        'site_name.require' => 'validate_site.site_name_require',
        'site_name.max' => 'validate_site.site_name_max',
    ];

    protected $scene = [
        "edit" => ['site_name']
    ];
}