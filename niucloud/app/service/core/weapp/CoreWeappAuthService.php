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

namespace app\service\core\weapp;

use core\base\BaseCoreService;
use EasyWeChat\Kernel\Exceptions\DecryptException;
use EasyWeChat\Kernel\Exceptions\InvalidConfigException;
use EasyWeChat\Kernel\Support\Collection;
use GuzzleHttp\Exception\GuzzleException;
use Psr\Http\Message\ResponseInterface;

/**
 * 微信小程序服务提供
 * Class CoreWeappAuthService
 * @package app\service\core\weapp
 */
class CoreWeappAuthService extends BaseCoreService
{


    /**
     * 网页授权
     * @param string|null $code
     * @return string
     * @throws InvalidConfigException
     */
    public function session(?string $code)
    {
        return CoreWeappService::app()->auth->session($code);
    }

    /**
     * 开发者后台校验与解密开放数据
     * @param string $session
     * @param string $iv
     * @param string $encrypted_data
     * @return array
     * @throws DecryptException
     */
    public function decryptData(string $session, string $iv, string $encrypted_data){
        return CoreWeappService::app()->encryptor->decryptData($session, $iv, $encrypted_data);
    }

    /**
     * 获取小程序手机号
     * @param string $code
     * @return array|Collection|object|ResponseInterface|string
     * @throws InvalidConfigException
     * @throws GuzzleException
     */
    public function getUserPhoneNumber(string $code){
        return CoreWeappService::app()->phone_number->getUserPhoneNumber($code);
    }
}