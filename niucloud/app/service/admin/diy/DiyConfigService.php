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

namespace app\service\admin\diy;

use app\model\sys\SysConfig;
use app\service\core\diy\CoreDiyConfigService;
use core\base\BaseAdminService;
use think\Model;

/**
 * 自定义页面相关配置服务层
 * Class DiyConfigService
 * @package app\service\admin\diy
 */
class DiyConfigService extends BaseAdminService
{

    /**
     * 设置底部导航配置
     * @param $data
     * @return SysConfig|bool|Model
     */
    public function setBottomConfig($data)
    {
        return ( new CoreDiyConfigService() )->setBottomConfig($data);
    }

    /**
     * 获取底部导航配置
     * @return array
     */
    public function getBottomConfig()
    {
        return ( new CoreDiyConfigService() )->getBottomConfig();
    }

    /**
     * 设置启动页
     * @param $data
     * @return SysConfig|bool|Model
     */
    public function setStartUpPageConfig($data)
    {
        return ( new CoreDiyConfigService() )->setStartUpPageConfig($data);
    }

    /**
     * 获取启动页配置
     * @param $name
     * @return array
     */
    public function getStartUpPageConfig($name)
    {
        return ( new CoreDiyConfigService() )->getStartUpPageConfig($name);
    }

}