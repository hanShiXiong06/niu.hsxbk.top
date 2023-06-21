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

namespace app\dict\schedule;

class ScheduleDict
{

    const CRON = 'cron';//定时任务
    const CROND = 'crond';//周期任务

    const ON = 1;
    const OFF = 2;
    /**
     * 任务模式
     * @return array
     */
    public static function getType(){
        return [
            self::CRON => get_lang('dict_schedule.type_cron'),//定时任务
            self::CROND  => get_lang('dict_schedule.type_crond'),//周期任务
        ];
    }

    /**
     * 任务启用状态
     * @return array
     */
    public static function getStatus(){
        return [
            self::ON => get_lang('dict_schedule.on'),//启用
            self::OFF  => get_lang('dict_schedule.off'),//关闭
        ];
    }
}