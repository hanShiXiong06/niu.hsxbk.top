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

namespace addon\cms\app\listener;

/**
 * 手机端首页加载事件
 */
class WapIndexListener
{
    public function handle()
    {
        return [
            [
                'key' => 'cms',
                "title" => get_lang("dict_wap_index.cms"),
                'desc' => get_lang("dict_wap_index.cms_desc"),
                "url" => "/cms/pages/list",
                'icon'=>'addon/cms/icon.png'
            ],
        ];
    }
}