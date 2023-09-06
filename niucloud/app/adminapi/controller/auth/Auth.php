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

namespace app\adminapi\controller\auth;

use app\service\admin\auth\AuthService;
use core\base\BaseAdminController;
use think\Response;


class Auth extends BaseAdminController
{

    /**
     * 登录用户菜单列表的接口
     */
    public function authMenuList()
    {
        $data = $this->request->params([
            ['addon', 'all'],
        ]);
        return success((new AuthService())->getAuthMenuList(1, $data['addon']));
    }

    /**
     * 获取授权应用
     * @return void
     */
    public function getAuthAddonList(){
        $data = $this->request->params([
            ['type', ''],
            ['title', ''],
        ]);

        return success((new AuthService())->getAuthAddonList($data));
    }

    /**
     * 获取登录用户信息
     * @return Response
     */
    public function get()
    {
        return success((new AuthService())->getAuthInfo());
    }


    /**
     * 修改登录用户信息
     * @param $field
     * @return Response
     */
    public function modify($field)
    {
        $data = $this->request->params([
            ['value', ''],
            ['field', $field]
        ]);
//        $this->validate($data, 'app\validate\sys\User.modify');
        (new AuthService())->modifyAuth($field, $data['value']);
        return success('MODIFY_SUCCESS');
    }


    /**
     * 更新用户
     */
    public function edit()
    {
        $data = $this->request->params([
            ['real_name', ''],
            ['head_img', ''],
            ['password', ''],
            ['original_password', '']
        ]);
        (new AuthService())->editAuth($data);
        return success('MODIFY_SUCCESS');
    }

    /**
     * 授权应用加星
     */
    public function setStar(){
        $data = $this->request->params([
            ['key', ''],
        ]);
        (new AuthService())->setAddonStat($data['key']);
        return success('SUCCESS');
    }
}
