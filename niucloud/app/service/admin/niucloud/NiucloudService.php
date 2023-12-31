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

namespace app\service\admin\niucloud;

use app\dict\sys\ConfigKeyDict;
use app\service\core\niucloud\CoreAuthService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use core\exception\CommonException;
use core\util\niucloud\BaseNiucloudClient;

/**
 * 消息管理服务层
 */
class NiucloudService extends BaseAdminService
{
    public $core_config_service;

    public function __construct()
    {
        parent::__construct();
        $this->core_config_service = new CoreConfigService();

    }

    /**
     * 设置 授权信息
     * @param $data
     * @return \app\model\sys\SysConfig|bool|\think\Model
     */
    public function setAuthorize($data){

        $data = [
            'auth_code' => $data['auth_code'],
            'auth_secret' => $data['auth_secret']
        ];
        $auth_info = (new CoreAuthService($data['auth_code'], $data['auth_secret']))->getAuthInfo()['data'] ?? [];
        if (empty($auth_info)) throw new CommonException('AUTH_NOT_EXISTS');
        //清除access_token缓存
        (new BaseNiucloudClient())->clearAccessToken();
        return $this->core_config_service->setConfig(ConfigKeyDict::NIUCLOUD_CONFIG, $data);
    }

    /**
     * 获取授权信息
     * @return mixed|string[]
     */
    public function getAuthorize(){
        $info = $this->core_config_service->getConfig(ConfigKeyDict::NIUCLOUD_CONFIG);
        if(empty($info))
        {
            $info = [];
            $info['value'] = [
                'auth_code' => '',
                'auth_secret' => ''
            ];
        }
        return $info['value'];
    }

}