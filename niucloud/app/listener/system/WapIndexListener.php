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

namespace app\listener\system;

/**
 * 【默认暂时废弃】手机端首页加载事件
 */
class WapIndexListener
{
    public function handle()
    {
        return [
            [
                'key' => 'app',
                "title" => get_lang("dict_wap_index.system"),
                'desc' => get_lang("dict_wap_index.system_desc"),
                "url" => "/app/pages/index/index"
            ]
        ];
    }
}