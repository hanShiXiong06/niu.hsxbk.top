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

use app\adminapi\middleware\AdminCheckRole;
use app\adminapi\middleware\AdminCheckToken;
use app\adminapi\middleware\AdminLog;
use think\facade\Route;

/**
 * 应用插件相关路由
 */
Route::group(function () {
    //获取本地插件
    Route::get('addon/local', 'addon.Addon/getLocalAddonList');
    //获取插件列表
    Route::get('addon', 'addon.Addon/lists');
    //获取插件详情
    Route::get('addon/:id', 'addon.Addon/info');
    //获取插件详情
    Route::get('addon/addon_by_key/:key', 'addon.Addon/getAddonByKey');

    Route::put('addon/status/:id/:status', 'addon.Addon/setStatus');
    //安装插件
    Route::post('addon/install/:addon', 'addon.Addon/install');
    //插件安装检测安装环境
    Route::get('addon/install/check/:addon', 'addon.Addon/installCheck');
    // 执行安装
    Route::post('addon/install/execute/:addon', 'addon.Addon/execute');
    //插件安装状态
    Route::get('addon/install/:addon/status/:key', 'addon.Addon/getInstallState');
    //下载插件
    Route::post('addon/download/:addon', 'addon.Addon/download');
    //插件类型
    Route::get('addontype', 'addon.Addon/getType');

    //卸载插件
    Route::post('addon/uninstall/:addon', 'addon.Addon/uninstall');
    //应用列表(...)
    Route::get('app/list', 'addon.App/getAppList');
    //已安装有效应用
    Route::get('app/getAddonList', 'addon.Addon/getAddonList');

    /******************************************************************开发插件 *******************************************************/
    //开发插件列表
    Route::get('addon_develop', 'addon.AddonDevelop/lists');
    //查询插件
    Route::get('addon_develop/:key', 'addon.AddonDevelop/info');
    //新增插件
    Route::post('addon_develop/:key', 'addon.AddonDevelop/add');
    //编辑插件
    Route::put('addon_develop/:key', 'addon.AddonDevelop/edit');
    //删除插件
    Route::delete('addon_develop/:key', 'addon.AddonDevelop/del');

    Route::delete('addon_develop/:key', 'addon.AddonDevelop/del');
    //校验是否存在
    Route::get('addon_develop/check/:key', 'addon.AddonDevelop/checkKey');
    //打包插件
    Route::post('addon_develop/build/:key', 'addon.AddonDevelop/build');
    //下载插件
    Route::post('addon_develop/download/:key', 'addon.AddonDevelop/download');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
