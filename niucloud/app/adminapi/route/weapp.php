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
 * 路由
 */
Route::group('weapp', function () {

    /***************************************************** 微信配置 ****************************************************/
    Route::get('config', 'weapp.Config/get');
    //设置微信配置
    Route::put('config', 'weapp.Config/set');

    /***************************************************** 订阅消息 ****************************************************/
    //同步订阅消息
    Route::put('template/sync', 'weapp.Template/sync');
    Route::get('template', 'weapp.Template/lists');

    //上传版本包
    Route::post('upload', 'weapp.Version/document');
    //添加版本
    Route::post('version', 'weapp.Version/add');
    //版本列表
    Route::get('version', 'weapp.Version/lists');
    //版本 提交审核
    Route::post('examine', 'weapp.Version/examine');
    //获取预览码
    Route::get('preview', 'weapp.Version/preview');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
