<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\adminapi\controller\sys;

use app\dict\sys\DateDict;
use core\base\BaseAdminController;

/**
 * 公共数据字典
 */
class Common extends BaseAdminController
{
    /**
     * 月份
     * @return \think\Response
     */
    public function getMonth(){
        return success((new DateDict())->getMonth());
    }

    /**
     * 星期
     * @return \think\Response
     */
    public function getWeek(){
        return success((new DateDict())->getWeek());
    }


}
