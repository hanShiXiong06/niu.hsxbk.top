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

namespace app\service\admin\auth;

use app\Request;
use app\service\admin\addon\AddonService;
use app\service\admin\site\SiteUserService;
use app\service\admin\sys\MenuService;
use app\service\admin\sys\RoleService;
use app\service\admin\user\UserService;
use core\base\BaseAdminService;
use core\exception\AuthException;
use Exception;

/**
 * 用户服务层
 * Class AuthService
 * @package app\service\admin\auth
 */
class AuthService extends BaseAdminService
{

    /**
     * 校验权限
     * @param Request $request
     * @return bool
     * @throws Exception
     */
    public function checkRole(Request $request){

        $rule = strtolower(trim($request->rule()->getRule()));
        $method = strtolower(trim($request->method()));

        $menu_service = new MenuService();
        $all_menu_list = $menu_service->getAllApiList();
        //先判断当前访问的接口是否收到权限的限制
        $method_menu_list = $all_menu_list[$method] ?? [];
        if(!in_array($rule, $method_menu_list))
            return true;

        $auth_role_list = $this->getAuthApiList();
        if(!empty($auth_role_list[$method]) && in_array($rule, $auth_role_list[$method]))
            return true;

        throw new AuthException('NO_PERMISSION');

    }

    /**
     * 当前授权用户接口权限
     * @return array
     */
    public function getAuthApiList(){
        $user_info = ( new UserService())->getUserCache($this->uid);
        if(empty($user_info))
            return [];

        $is_admin = $user_info['is_admin'];//是否是超级管理员组
        $menu_service = new MenuService();
        if($is_admin){//查询全部启用的权限
            //获取站点信息
            return  (new MenuService())->getAllApiList(1);
        }else{
            $user_role_ids = $user_info['role_ids'];
            $role_service = new RoleService();
            $menu_keys = $role_service->getMenuKeysByRoleIds($user_role_ids ?? []);
            return $menu_service->getApiListByMenuKeys($menu_keys);
        }
    }

    /**
     * 当前授权用户菜单权限
     * @return array
     */
    public function getAuthMenuList(int $is_tree = 0, string $addon = ''){
        $user_info = ( new UserService())->getUserCache($this->uid);
        if(empty($user_info))
            return [];
        $is_admin = $user_info['is_admin'];//是否是超级管理员组
        $menu_service = new MenuService();
        if($is_admin){//查询全部启用的权限
            return (new MenuService())->getAllMenuList($is_tree, 1, $addon);
        }else{
            $user_role_ids = $user_info['role_ids'];
            $role_service = new RoleService();
            $menu_keys = $role_service->getMenuKeysByRoleIds($user_role_ids ?? []);
            return $menu_service->getMenuListByMenuKeys($menu_keys, $is_tree, $addon);
        }
    }

    /**
     * 获取授权用户信息
     */
    public function getAuthInfo(){
        return ( new UserService())->getUserCache($this->uid);
    }

    /**
     * 修改用户权限
     * @param string $field
     * @param $data
     * @return bool
     */
    public function modifyAuth(string $field, $data){
        return (new SiteUserService())->modify($this->uid, $field, $data);
    }

    /**
     * 修改用户
     * @param array $data
     * @return true
     */
    public function editAuth(array $data){
        if(!empty($data['password'])){
            //检测原始密码是否正确
            $user = (new UserService())->find($this->uid);
            if(!check_password($data['original_password'], $user->password))
                throw new AuthException('OLD_PASSWORD_ERROR');

        }
        return (new UserService())->edit($this->uid, $data);
    }

    /**
     * 获取当前账号授权的应用列表
     * @return array|mixed|string
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getAuthAddonList($data= []){
        $user_info = ( new UserService())->getUserCache($this->uid);
        if(empty($user_info))
            return [];
        $is_admin = $user_info['is_admin'];//是否是超级管理员组
        if($is_admin){//查询全部启用的权限
            if(empty($data['type'])){
                return (new AddonService())->getInstallAddonList($data);
            }else{
                return (new AddonService())->getInstallStarAddonList($data);
            }
        }else{
            $user_role_ids = $user_info['role_ids'];
            $role_service = new RoleService();
            $addon_keys = $role_service->getAddonKeysByRoleIds($user_role_ids ?? []);
            if(empty($data['type'])){
                return (new AddonService())->getAddonListByKeys($addon_keys, $data);
            }else{
                return (new AddonService())->getStatAddonLists($addon_keys, $data);
            }
        }
    }

    /**
     * 应用插件加星
     */
    public function setAddonStat($key){
        return (new AddonService())->setAddonStat($key);
    }
}
