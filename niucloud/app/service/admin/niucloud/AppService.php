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

use app\service\core\niucloud\CoreAppService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;

/**
 * 官网引用服务层
 */
class AppService extends BaseAdminService
{
    public $core_config_service;

    public function __construct()
    {
        parent::__construct();
        $this->core_config_service = new CoreConfigService();

    }

    /**
     * 校验key是否被占用
     * @param $key
     * @return \app\model\sys\SysConfig|bool|\think\Model
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function checkKey($key)
    {
        return ( new CoreAppService() )->checkKey($key);
    }


}