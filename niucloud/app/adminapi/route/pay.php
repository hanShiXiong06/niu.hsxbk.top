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
 * 支付相关路由
 */
Route::group('pay', function () {

    /***************************************************** 支付渠道 *************************************************/
    //渠道列表
    Route::get('channel/lists', 'pay.PayChannel/lists');
    //渠道设置
    Route::post('channel/set/:channel/:type', 'pay.PayChannel/set');
    //通过渠道获取支付配置
    Route::get('channel/lists/:channel', 'pay.PayChannel/getListByChannel');
    //转账设置
    Route::post('channel/set/transfer', 'pay.PayChannel/setTransfer');
    //多渠道设置
    Route::post('channel/set/all', 'pay.PayChannel/setAll');
    // 线下支付审核
    Route::get('audit', 'pay.Pay/audit');
    // 线下审核通过
    Route::put('pass/:out_trade_no', 'pay.Pay/pass');
    // 线下审核拒绝
    Route::put('refuse/:out_trade_no', 'pay.Pay/refuse');
    // 支付单据详情
    Route::get('detail/:id', 'pay.Pay/detail');
    /***************************************************** 账单 *************************************************/
    //账单列表
    Route::get('account', 'pay.Account/lists');
    //账单详情
    Route::get('account/:id', 'pay.Account/info');
    //账单统计
    Route::get('account/stat', 'pay.Account/stat');
    //账单类型
    Route::get('account/type', 'pay.Account/accountType');
    /***************************************************** 退款 *************************************************/
    //退款列表
    Route::get('refund', 'pay.PayRefund/pages');
    //退款详情
    Route::get('refund/:refund_no', 'pay.PayRefund/detail');
    //退款方式
    Route::get('refund/type', 'pay.PayRefund/getRefundType');
    //退款转账
    Route::post('refund/transfer', 'pay.PayRefund/transfer');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);