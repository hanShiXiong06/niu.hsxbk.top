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

namespace app\dict\sys;

/**
 * 日期的字典
 */
class DateDict
{

    const MON = 1;
    const TUE = 2;
    const WED = 3;
    const THUR = 4;
    const FRI = 5;
    const SAT = 6;
    const SUN = 0;


    CONST JAN = 1;
    CONST FEB = 2;
    CONST MAR = 3;
    CONST APR = 4;
    CONST MAY = 5;
    CONST JUN = 6;
    CONST JUL = 7;
    CONST AUG = 8;
    CONST SEPT = 9;
    CONST OCT = 10;
    CONST NOV = 11;
    CONST DEC = 12;
    /**
     * 星期
     * @return array
     */
    public static function getWeek(){
        return [
            self::MON => get_lang('dict_date.mon'),//周一
            self::TUE  => get_lang('dict_date.tue'),//周二
            self::WED => get_lang('dict_date.wed'),//周三
            self::THUR  => get_lang('dict_date.thur'),//周四
            self::FRI => get_lang('dict_date.fri'),//周五
            self::SAT  => get_lang('dict_date.sat'),//周六
            self::SUN => get_lang('dict_date.sun'),//周日
        ];
    }

    /**
     * 月份
     * @return array
     */
    public function getMonth(){
        return [
            self::JAN => get_lang('dict_date.jan'),//1月
            self::FEB  => get_lang('dict_date.feb'),//2月
            self::MAR => get_lang('dict_date.mar'),//3月
            self::APR  => get_lang('dict_date.apr'),//4月
            self::MAY => get_lang('dict_date.may'),//5月
            self::JUN  => get_lang('dict_date.jun'),//6月
            self::JUL => get_lang('dict_date.jul'),//7月
            self::AUG => get_lang('dict_date.aug'),//8月
            self::SEPT => get_lang('dict_date.sept'),//9月
            self::OCT => get_lang('dict_date.oct'),//10月
            self::NOV => get_lang('dict_date.nov'),//11月
            self::DEC => get_lang('dict_date.dec'),//12月
        ];
    }

}