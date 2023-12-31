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

namespace app\service\admin\weapp;

use app\model\sys\SysConfig;
use app\service\core\weapp\CoreWeappConfigService;
use core\base\BaseAdminService;
use think\Model;

/**
 * 微信小程序设置
 * Class WeappConfigService
 * @package app\service\admin\weapp
 */
class WeappConfigService extends BaseAdminService
{
    /**
     * 获取配置信息
     * @return array|null
     */
    public function getWeappConfig()
    {
        $config_info = (new CoreWeappConfigService())->getWeappConfig();
        return array_merge($config_info, $this->getWeappStaticInfo());

    }

    /**
     * 设置配置
     * @param array $data
     * @return SysConfig|bool|Model
     */
    public function setWeappConfig(array $data){
        return (new CoreWeappConfigService())->setWeappConfig( $data);
    }

    /**
     *查询微信小程序需要的静态信息
     * @return array
     */
    public function getWeappStaticInfo(){
        $domain = request()->domain();
        return [
            'serve_url' => (string)url('/api/weapp/serve/', [],'',true),
            'request_url' => $domain,
            'socket_url'   => "wss://".request()->host(),
            'upload_url'  => $domain,
            'download_url'   => $domain,
            'upload_ip' => '8.140.96.55'
        ];
    }
}
