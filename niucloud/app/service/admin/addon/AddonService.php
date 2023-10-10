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

namespace app\service\admin\addon;


use app\dict\addon\AddonDict;
use app\model\addon\Addon;
use app\service\core\addon\CoreAddonCloudService;
use app\service\core\addon\CoreAddonDownloadService;
use app\service\core\addon\CoreAddonInstallService;
use app\service\core\addon\CoreAddonService;
use core\base\BaseAdminService;
use think\Response;


/**
 * 消息管理服务层
 */
class AddonService extends BaseAdminService
{
    public static $cache_tag_name = 'addon_cache_tag';

    public function __construct()
    {
        parent::__construct();
        $this->model = new Addon();

    }

    public function getList()
    {
        return ( new CoreAddonService() )->getLocalAddonList();
    }

    /**
     * 获取当前站点消息
     * @return array
     */
    public function getLocalAddonList()
    {
        return ( new CoreAddonService() )->getLocalAddonList();
    }

    /**
     * 安装插件
     * @param string $addon
     * @return Response
     */
    public function install(string $addon)
    {
        return ( new CoreAddonInstallService($addon) )->install();
    }

    /**
     * 云安装插件
     * @param string $addon
     * @return Response
     */
    public function cloudInstall(string $addon)
    {
        return ( new CoreAddonInstallService($addon) )->install('cloud');
    }

    /**
     * 云安装日志
     * @param string $addon
     * @return null
     */
    public function cloudInstallLog(string $addon)
    {
        return ( new CoreAddonCloudService() )->getBuildLog($addon);
    }

    /**
     * 获取安装任务
     * @return mixed
     */
    public function getInstallTask()
    {
        return ( new CoreAddonInstallService('') )->getInstallTask();
    }

    /**
     * 安装插件检测安装环境
     * @param string $addon
     * @return Response
     */
    public function installCheck(string $addon)
    {
        $data = ( new CoreAddonInstallService($addon) )->installCheck();
        return success('SUCCESS', $data);
    }

    /**
     * 卸载插件
     * @param string $addon
     * @return true
     */
    public function uninstall(string $addon)
    {
        return CoreAddonInstallService::instance($addon)->uninstall();
    }

    /**
     * 获取插件列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        return ( new CoreAddonService() )->getPage($where);
    }

    /**
     * 获取插件信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        return ( new CoreAddonService() )->getInfo($id);
    }

    /**
     * 设置插件状态
     * @param int $id
     * @param int $status
     * @return null
     */
    public function setStatus(int $id, int $status)
    {
        return ( new CoreAddonService() )->setStatus($id, $status);
    }

    /**
     * 下载应用
     * @param string $app_key
     * @return true
     */
    public function download(string $app_key, string $version)
    {
        return ( new CoreAddonDownloadService() )->download($app_key, $version);
    }

    /**
     * 更新应用
     * @param string $app_key
     * @return null
     */
    public function upgrade(string $app_key)
    {
        return ( new CoreAddonDownloadService() )->upgrade($app_key);
    }


    /**
     * 查询已安装的有效的应用
     * @return array
     */
    public function getInstallAddonList($where)
    {
        $field = 'title, icon, key, desc, status, is_star, type, support_app';
        if(!empty($where['support_app']))
        {
            return $this->model->where([ [ 'status', '=', AddonDict::ON ],['support_app','in',['',$where['support_app']]] ])->withSearch([ 'title' ], $where)->field($field)->append([ 'status_name' ])->order('create_time desc')->select()->toArray();
        }else{
            return $this->model->where([ [ 'status', '=', AddonDict::ON ] ])->withSearch([ 'title' ], $where)->field($field)->append([ 'status_name' ])->order('create_time desc')->select()->toArray();

        }
    }

    /**
     * 查询已安装的有效的应用
     * @return array
     */
    public function getInstallStarAddonList($where)
    {
        $field = 'title, icon, key, desc, status, is_star, type, support_app';
        if(!empty($where['support_app']))
        {
            return $this->model->where([ [ 'status', '=', AddonDict::ON ], [ 'is_star', '=', 2 ],['support_app','in',['',$where['support_app']]]])->withSearch([ 'title' ], $where)->field($field)->append([ 'status_name' ])->order('create_time desc')->select()->toArray();
        }else{
            return $this->model->where([ [ 'status', '=', AddonDict::ON ], [ 'is_star', '=', 2 ] ])->withSearch([ 'title' ], $where)->field($field)->append([ 'status_name' ])->order('create_time desc')->select()->toArray();
        }
    }

    /**
     * 应用key缓存
     * @param $keys
     * @return mixed|string
     * @throws DbException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getAddonListByKeys($keys, $where)
    {
//        sort($keys);
//        $cache_name = 'addon_list'.implode('_', $keys);
//        return cache_remember(
//            $cache_name,
//            function () use ($keys) {
//                $where = [
//                    ['key', 'in', $keys],
//                    ['status', '=', AddonDict::ON]
//                ];
//                return $this->model->where($where)->field('title, icon, key, desc, status, cover')->select()->toArray();
//
//            },
//            self::$cache_tag_name
//        );

        if(!empty($where['support_app']))
        {
            $data = [
                [ 'key', 'in', $keys ],
                [ 'status', '=', AddonDict::ON ],
                ['support_app','in',['',$where['support_app']]]
            ];
        }else{
            $data = [
                [ 'key', 'in', $keys ],
                [ 'status', '=', AddonDict::ON ]
            ];
        }
        return $this->model->where($data)->withSearch([ 'title' ], $where)->field('title, icon, key, desc, status, cover, is_star, type, support_app')->select()->toArray();

    }


    /**
     * 设置关注插件
     */
    public function setAddonStat($key)
    {
        $info = $this->model->where([ [ 'key', '=', $key ] ])->field("is_star")->findOrEmpty()->toArray();
        if (!empty($info)) {
            if ($info[ 'is_star' ] != 2) $this->model->where([ [ 'key', '=', $key ] ])->update([ 'is_star' => 2 ]);
            if ($info[ 'is_star' ] == 2) $this->model->where([ [ 'key', '=', $key ] ])->update([ 'is_star' => 1 ]);
        }
        return true;
    }

    /**
     * 应用key缓存
     * @param $keys
     * @return mixed|string
     * @throws DbException
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getStatAddonLists($keys, $where)
    {
        if(!empty($where['support_app']))
        {
            $data = [
                [ 'key', 'in', $keys ],
                [ 'status', '=', AddonDict::ON ],
                [ 'is_star', '=', 2 ],
                ['support_app','in',['',$where['support_app']]]
            ];
        }else{
            $data = [
                [ 'key', 'in', $keys ],
                [ 'status', '=', AddonDict::ON ],
                [ 'is_star', '=', 2 ]
            ];
        }

        return $this->model->where($data)->withSearch([ 'title' ], $where)->field('title, icon, key, desc, status, cover, type, support_app')->select()->toArray();

    }

    /**
     * 获取插件信息
     * @param int $id
     * @return array
     */
    public function getInfoByKey(string $key)
    {
        return $this->model->where([ [ 'key', '=', $key ] ])->field('title, icon, key, desc, status, cover')->findOrEmpty()->toArray();
    }
}
