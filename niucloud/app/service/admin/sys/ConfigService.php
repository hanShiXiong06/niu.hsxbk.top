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

namespace app\service\admin\sys;

use app\service\core\sys\CoreConfigService;
use app\service\core\sys\CoreSysConfigService;
use core\base\BaseAdminService;
use core\exception\AdminException;

/**
 * 配置服务层
 * Class ConfigService
 * @package app\service\core\sys
 */
class ConfigService extends BaseAdminService
{
    //系统配置文件
    public $core_config_service;

    public function __construct()
    {
        parent::__construct();
        $this->core_config_service = new CoreConfigService();
    }

    /**
     * 获取版权信息(网站整体，不按照站点设置)
     * @return array|mixed
     */
    public function getCopyright()
    {
        return ( new CoreSysConfigService() )->getCopyright();
    }

    /**
     * 设置版权信息(整体设置，不按照站点)
     * @param array $value
     * @return bool
     */
    public function setCopyright(array $value)
    {
        $data = [
            'icp' => $value[ 'icp' ],
            'gov_record' => $value[ 'gov_record' ],
            'gov_url' => $value[ 'gov_url' ],
            'market_supervision_url' => $value[ 'market_supervision_url' ],
            'logo' => $value[ 'logo' ],
            'company_name' => $value[ 'company_name' ],
            'copyright_link' => $value[ 'copyright_link' ],
            'copyright_desc' => $value[ 'copyright_desc' ]
        ];
        return $this->core_config_service->setConfig('COPYRIGHT', $data);
    }

    /**
     * 获取网站信息
     * @return array
     */
    public function getWebSite()
    {
        $info = ( new CoreConfigService() )->getConfig('WEB_SITE_INFO');
        if (empty($info)) {
            $info = [];
            $info[ 'value' ] = [
                'site_name' => '',
                'logo' => '',
                'desc' => '',
                'latitude' => '',
                'longitude' => '',
                'province_id' => 0,
                'city_id' => 0,
                'district_id' => 0,
                'address' => '',
                'full_address' => '',
                'phone' => '',
                'business_hours' => '',
                'front_end_name' => '',
                'front_end_logo' => '',
                'icon' => '',
            ];
        }
        return $info[ 'value' ];

    }

    /**
     * 设置网站信息
     * @return bool
     */
    public function setWebSite($data)
    {
        return $this->core_config_service->setConfig('WEB_SITE_INFO', $data);
    }

    /**
     * 获取前端域名
     * @return array|string[]
     */
    public function getSceneDomain()
    {
        return ( new CoreSysConfigService() )->getSceneDomain();
    }

    /**
     * 设置地图key
     * @param array $value
     * @return bool
     */
    public function setMap(array $value)
    {
        $data = [
            'key' => $value[ 'key' ],
        ];
        return $this->core_config_service->setConfig('MAPKEY', $data);
    }

    /**
     * 获取地图key
     */
    public function getMap()
    {
        $info = ( new CoreConfigService() )->getConfig('MAPKEY');
        if (empty($info)) {
            $info = [];
            $info[ 'value' ] = [
                'key' => 'IZQBZ-3UHEU-WTCVD-2464U-I5N4V-ZFFU3',
            ];
        }
        return $info[ 'value' ];
    }

    /**
     * 设置站点快捷菜单
     * @param $data
     * @return bool
     */
    public function setShortcutMenu($data)
    {
        ( new CoreConfigService() )->setConfig('shortcut_menu', $data);
        return true;
    }

    /**
     * 获取站点快捷菜单
     * @return array|mixed
     */
    public function getShortcutMenu()
    {
        $config = ( new CoreConfigService() )->getConfig('shortcut_menu');
        $menu = $config[ 'value' ] ?? [];
        if (!empty($menu)) {
            $menu_service = new MenuService();
            foreach ($menu as $k => &$v) {
                $menu_key = $v[ 'menu_key' ] ?? '';
                if ($menu_key != '') {
                    $item_router_path = $menu_service->getFullRouterPath($menu_key);
                    if (empty($item_router_path)) {
                        unset($v[ $k ]);
                    } else {
                        $v[ 'router_path' ] = $item_router_path;
                    }
                }
            }
        }
        return $menu;
    }

    /**
     * 获取平台主页配置
     * @return mixed|string[]
     */
    public function getAdminIndexConfig()
    {
        $config = ( new CoreConfigService() )->getConfig("admin_index");
        if (empty($config)) {
            $config[ 'value' ] = [
                'view_path' => 'index/index'
            ];
        } else {
            $result = event("AdminIndex");
            $index_list = [];
            foreach ($result as $v) {
                $index_list = empty($index_list) ? $v : array_merge($index_list, $v);
            }
            $tag = 0;
            $view_path = $config[ 'value' ][ 'view_path' ];
            foreach ($index_list as $v) {
                $v_view_path = $v[ 'view_path' ] ?? '';
                if ($view_path == $v_view_path) {
                    $tag = 1;
                    break;
                }
            }
            if ($tag == 0) {
                $config[ 'value' ] = [
                    'view_path' => 'index/index'
                ];
            }

        }
        return $config[ 'value' ][ 'view_path' ];
    }

    /**
     * 站点主页配置
     * @param $data
     * @return true
     */
    public function setAdminIndexConfig($data)
    {
        $config = [
            'view_path' => $data[ 'view_path' ],
        ];
        //检测是否路劲一个异常
        $index_list = $this->getAdminIndexList();
        $check_tag = 0;
        foreach ($index_list as $v) {
            if ($v[ 'view_path' ] == $data[ 'view_path' ]) {
                $check_tag = 1;
            }
        }
        if ($check_tag == 0) throw new AdminException('ADMIN_INDEX_VIEW_PATH_NOT_EXIST');
        ( new CoreConfigService() )->setConfig("admin_index", $config);
        return true;
    }

    /**
     * 获取站点配置的首页列表
     * @return array
     */
    public function getAdminIndexList()
    {
        $result = event("AdminIndex");
        $index_list = [];
        foreach ($result as $v) {
            $index_list = empty($index_list) ? $v : array_merge($index_list, $v);
        }
        $view_path = $this->getAdminIndexConfig();
        foreach ($index_list as $k => $v) {
            $v_view_path = $v[ 'view_path' ] ?? '';
            $index_list[ $k ][ 'is_use' ] = ( $v_view_path == $view_path ) ? 1 : 0;
        }
        return $index_list;
    }

    /**
     * 获取手机端首页列表
     * @param $data
     * @return array
     */
    public function getWapIndexList($data)
    {
        return ( new CoreSysConfigService() )->getWapIndexList($data);
    }
}
