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

namespace app\service\core\niucloud;

use core\util\niucloud\BaseNiucloudClient;
use core\util\niucloud\http\Response;
use GuzzleHttp\Exception\GuzzleException;
use Psr\Http\Message\ResponseInterface;

/**
 * 应用管理服务层
 */
class CoreAppService extends BaseNiucloudClient
{

    /**
     * 校验key是否被占用
     * @param $key
     * @return array|Response|object|ResponseInterface
     * @throws GuzzleException
     */
    public function checkKey($key)
    {
        return $this->httpGet('store/app_check/'.$key, [])['data'] ?? false;
    }
}