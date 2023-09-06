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
use EasyWeChat\Kernel\Exceptions\BadRequestException;
use EasyWeChat\Kernel\Exceptions\InvalidArgumentException;
use EasyWeChat\Kernel\Exceptions\InvalidConfigException;
use Overtrue\Socialite\Contracts\UserInterface;
use ReflectionException;
use Symfony\Component\HttpFoundation\Response;

/**
 * 微信服务提供
 * Class CoreWechatServeService
 * @package app\service\core\wechat
 */
class CoreWechatServeService extends BaseCoreService
{


    /**
     * 网页授权
     * @param string $url
     * @param string $scopes
     * @return string
     */
    public function authorization(string $url = '', string $scopes = 'snsapi_base')
    {
        $oauth = CoreWechatService::app()->oauth;
        return $oauth->scopes([ $scopes ])->redirect($url);
    }

    /**
     * 处理授权回调
     * @param string $code
     * @return UserInterface
     */
    public function userFromCode(string $code)
    {
        $oauth = CoreWechatService::app()->oauth;
        return $oauth->userFromCode($code);
    }

    public function getUser($user)
    {
        $user->getId(); //对应微信的 openid
        $user->getNickname(); //对应微信的 nickname
        $user->getName(); //对应微信的 nickname
        $user->getAvatar(); //头像地址
        $user->getRaw(); //原始 API 返回的结果
        $user->getAccessToken(); //access_token
        $user->getRefreshToken(); //refresh_token
        $user->getExpiresIn(); //expires_in，Access Token 过期时间
        $user->getTokenResponse(); //返回 access_token 时的响应值
        //user中没有openid,  可以用id取
        return $user;
    }

    /**
     * 事件推送
     * @return Response
     * @throws BadRequestException
     * @throws InvalidArgumentException
     * @throws ReflectionException
     * @throws InvalidConfigException
     */
    public function serve()
    {

        $app = CoreWechatService::app();
        $app->server->push(function($message) {
            return ( new CoreWechatMessageService )->message($message);
            // ...
        });
        $response = $app->server->serve();
        return $response->send();
    }

    public function jssdkConfig(string $url = '')
    {
        $jssdk = CoreWechatService::app()->jssdk;
        return $jssdk->setUrl($url)->buildConfig([], false, false, false);
    }

    public function scan(string $key, int $expire_seconds = 6 * 24 * 3600)
    {
        $result = CoreWechatService::app()->qrcode->temporary($key, $expire_seconds);
        return $result[ 'url' ];
    }
}