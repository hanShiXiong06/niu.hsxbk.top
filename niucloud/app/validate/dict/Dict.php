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

namespace app\validate\dict;
use core\base\BaseValidate;
/**
 * 数据字典验证器
 * Class Dict
 * @package addon\app\validate\dict
 */
class Dict extends BaseValidate
{

       protected $rule = [
            'name' => 'require',
            'key' => 'require',
            'data' => 'require',
            'memo' => 'require',
        ];

       protected $message = [
            'name.require' => ['common_validate.require', ['name']],
            'key.require' => ['common_validate.require', ['key']],
            'data.require' => ['common_validate.require', ['data']],
            'memo.require' => ['common_validate.require', ['memo']],
        ];

       protected $scene = [
            "add" => ['name', 'key', 'data', 'memo'],
            "edit" => ['name', 'key', 'data', 'memo']
        ];

}
