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

namespace app\service\api\diy;

use app\service\core\diy\CoreDiyConfigService;
use core\base\BaseApiService;

/**
 * 自定义页面相关配置服务层
 * Class DiyConfigService
 * @package app\service\admin\diy
 */
class DiyConfigService extends BaseApiService
{

    /**
     * 获取底部导航配置
     * @return array
     */
    public function getBottomConfig()
    {
        return ( new CoreDiyConfigService() )->getBottomConfig();
    }

    /**
     * 获取启动页配置
     * @return array
     */
    public function getStartUpPageConfig($type)
    {
        return ( new CoreDiyConfigService() )->getStartUpPageConfig($type);
    }

}