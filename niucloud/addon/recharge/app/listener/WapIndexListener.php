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

namespace addon\recharge\app\listener;

/**
 * 手机端首页加载事件
 */
class WapIndexListener
{
    public function handle()
    {
        return [
            [
                'key' => 'recharge',
                "title" => get_lang("dict_wap_index.recharge"),
                'desc' => get_lang("dict_wap_index.recharge_desc"),
                "url" => "/recharge/pages/recharge",
                'icon'=>'addon/recharge/icon.png'
            ],
        ];
    }
}