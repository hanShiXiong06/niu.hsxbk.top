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

namespace app\adminapi\controller\niucloud;

use app\service\admin\niucloud\NiucloudService;
use app\service\core\niucloud\CoreAuthService;
use core\base\BaseAdminController;

class Module extends BaseAdminController
{
    public function authorize()
    {
        return success((new CoreAuthService())->getAuthInfo());
    }

    /**
     * 设置 授权信息
     */
    public function setAuthorize()
    {
        $data = $this->request->params([
            ['auth_code', ''],
            ['auth_secret', '']
        ]);
        $this->validate($data, 'app\validate\niucloud\Module.set');
        return success("AUTH_BIND_SUCCESS",  (new NiucloudService())->setAuthorize($data));
    }

    /**
     * 获取 授权信息
     */
    public function getAuthorize()
    {
        return success((new NiucloudService())->getAuthorize());
    }
}
