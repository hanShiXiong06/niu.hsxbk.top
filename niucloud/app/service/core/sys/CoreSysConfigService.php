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

namespace app\service\core\sys;

use core\base\BaseCoreService;

/**
 * 配置服务层
 * Class BaseService
 * @package app\service
 */
class CoreSysConfigService extends BaseCoreService
{
    public function __construct()
    {
        parent::__construct();

    }

    /**
     * 暂用于单站点业务(不适用于命令行模式)
     * @return array
     */
    public function getSceneDomain()
    {
        $wap_domain = !empty(env("system.wap_domain")) ? preg_replace('#/$#', '', env("system.wap_domain")) : request()->domain();
        $web_domain = !empty(env("system.web_domain")) ? preg_replace('#/$#', '', env("system.web_domain")) : request()->domain();

        return [
            'wap_url' => $wap_domain . "/wap/",
            'web_url' => $web_domain . "/web/"
        ];
    }

    /**
     * 获取版权信息(网站整体，不按照站点设置)
     * @return array|mixed
     */
    public function getCopyright()
    {
        $info = ( new CoreConfigService() )->getConfig(0, 'COPYRIGHT');
        if (empty($info)) {
            $info = [];
            $info[ 'value' ] = [
                'icp' => '',
                'gov_record' => '',
                'gov_url' => '',
                'market_supervision_url' => '',
                'logo' => '',
                'company_name' => '',
                'copyright_link' => '',
                'copyright_desc' => ''
            ];
        }
        return $info[ 'value' ];
    }

    /**
     * 获取手机端首页列表
     * @param array $data
     * @return array
     */
    public function getWapIndexList($data = [])
    {
        $result = event("WapIndex");
        $index_list = [];
        foreach ($result as $v) {
            $index_list = empty($index_list) ? $v : array_merge($index_list, $v);
        }

//        $app = [];
        foreach ($index_list as $k => $v) {
            if (!empty($data[ 'key' ]) && !in_array($v[ 'key' ], explode(',', $data[ 'key' ]))) {
                unset($index_list[ $k ]);
                continue;
            }
//            if ($v[ 'key' ] == 'app') {
//                $app = $index_list[ $k ];
//                $app[ 'icon' ] = 'static/resource/images/system/icon.png';
//                unset($index_list[ $k ]);
//            } else {
//            }
            $index_list[ $k ][ 'icon' ] = addon_resource($v[ 'key' ], 'icon.png');
        }

        $index_list = array_values($index_list);

        // 框架首页排到第一位
//        array_unshift($index_list,$app);

        return $index_list;
    }
}