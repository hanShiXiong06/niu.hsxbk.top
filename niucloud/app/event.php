<?php

use core\dict\DictLoader;

$system_event = [
    //文件执行序列号
    'file_sort' => 1,
    'bind' => [
    ],
    'listen' => [
        /**
         * 系统事件
         */
        'AppInit' => ['app\listener\system\AppInitListener'],
        'HttpRun' => [],
        'HttpEnd' => [],
        'LogLevel' => [],
        'LogWrite' => [],
        /**
         * 会员相关事件
         */
        //会员注册事件
        'MemberRegister' => ['app\listener\member\MemberRegisterListener'],
        //会员登录事件
        'MemberLogin' => ['app\listener\member\MemberLoginListener'],
        //会员账户变化事件
        'MemberAccount' => ['app\listener\member\MemberAccountListener'],
        //扫码事件
        'Scan' => ['app\listener\scan\ScanListener'],
        /**
         * 支付相关事件
         */
        'PayCreate' => ['app\listener\pay\PayCreateListener'],
        //支付成功
        'PaySuccess' => ['app\listener\pay\PaySuccessListener'],
        //退款成功
        'RefundSuccess' => ['app\listener\pay\RefundSuccessListener'],
        //转账成功
        'TransferSuccess' => ['app\listener\pay\TransferSuccessListener'],
        //针对订单业务支持的支付方式再处理
        'AllowPayTypeByTrade' => [],
        // 任务失败统一回调,有四种定义方式
        'queue_failed' => [
            ['app\listener\job\QueueFailedLoggerListener', 'report'],
        ],
        //系统应用管理加载
        'AppManage' => [
            'app\listener\system\AppManageListener'
        ],

        //平台首页加载
        'AdminIndex' => [
            'app\listener\system\AdminIndexListener'
        ],
        // 手机端首页加载
        'WapIndex' => [
//            'app\listener\system\WapIndexListener'
        ],
        //消息模板数据内容
        'NoticeData' => [
            'app\listener\notice_template\VerifyCode',//手机验证码
            'app\listener\notice_template\MemberVerifySuccess',//
        ],
        //全场景消息发送
        'Notice' => [
            'app\listener\notice\Sms',//短信
            'app\listener\notice\Wechat',//公众号模板消息
            'app\listener\notice\Weapp',//小程序订阅消息
        ],
        //小程序包替换
        'AppletReplace' => [
            'app\listener\applet\WeappListener',//微信小程序
        ]
    ],
    'subscribe' => [
    ],
];
return (new DictLoader("Event"))->load($system_event);
