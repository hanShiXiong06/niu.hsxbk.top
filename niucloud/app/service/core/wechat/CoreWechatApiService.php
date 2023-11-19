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

namespace app\service\core\wechat;

use core\base\BaseCoreService;
use EasyWeChat\Kernel\Exceptions\InvalidConfigException;
use GuzzleHttp\Exception\GuzzleException;

/**
 * 微信服务api提供
 * Class CoreWechatApiService
 * @package app\service\core\wechat
 */
class CoreWechatApiService extends BaseCoreService
{
    /**
     * 获取用户信息
     */
    public function userInfo(string $openid)
    {
        return CoreWechatService::app()->user->get($openid);
    }

    /**
     * 批量获取用户基本信息
     * @param array $openids
     * @param string $lang
     * @return mixed
     * @throws GuzzleException
     * @throws InvalidConfigException
     */
    public function userInfoBatchget(array $openids, string $lang = 'zh_CN')
    {
        return CoreWechatService::app()->user->select($openids);
    }
    
    /**
     * 用户列表(可以再外部设计一个递归查询全部的函数)  返回的是 openid
     */
    public function userGet(?string $next_openid = '')
    {
        return CoreWechatService::app()->user->list($next_openid);
    }


    /**
     * 创建菜单按钮接口
     * @param array $buttons
     * @param array $match_rule
     * @return mixed
     * @throws GuzzleException
     * @throws InvalidConfigException
     */
    public function menuCreate(array $buttons, array $match_rule = [])
    {

//        CoreWechatService::app()->menu->current();
        return CoreWechatService::app()->menu->create($buttons, $match_rule);
    }


}