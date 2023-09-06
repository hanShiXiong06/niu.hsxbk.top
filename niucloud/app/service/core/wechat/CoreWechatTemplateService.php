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
use EasyWeChat\Kernel\Exceptions\InvalidArgumentException;
use EasyWeChat\Kernel\Exceptions\InvalidConfigException;
use EasyWeChat\Kernel\Support\Collection;
use EasyWeChat\OfficialAccount\TemplateMessage\Client;
use GuzzleHttp\Exception\GuzzleException;
use Psr\Http\Message\ResponseInterface;

/**
 * easywechat主体提供
 * Class CoreWechatTemplateService
 * @package app\service\core\wechat
 */
class CoreWechatTemplateService extends BaseCoreService
{
    /**
     * 获取模板消息业务对象
     * @return Client
     */
    public function template()
    {
        return CoreWechatService::app()->template_message;
    }

    /**
     * 发送模板消息
     * @param string $open_id
     * @param string $wechat_template_id
     * @param array $data
     * @param string $first
     * @param string $remark
     * @param string $url
     * @param string $miniprogram
     * @return array|Collection|object|ResponseInterface|string
     * @throws InvalidArgumentException
     * @throws InvalidConfigException
     * @throws GuzzleException
     */
    public function send(string $open_id, string $wechat_template_id, array $data, string $first, string $remark, string $url = '', $miniprogram = '')
    {
        if (!empty($first)) $data[ 'first' ] = $first;
        if (!empty($remark)) $data[ 'remark' ] = $remark;

        return $this->template()->send([
            'touser' => $open_id,
            'template_id' => $wechat_template_id,
            'url' => $url,
            'miniprogram' => $miniprogram,
            'data' => $data,
        ]);

    }

    /**
     * 删除
     * @param string $templateId
     * @return array|Collection|object|ResponseInterface|string
     * @throws GuzzleException
     * @throws InvalidConfigException
     */
    public function deletePrivateTemplate(string $templateId)
    {
        return $this->template()->deletePrivateTemplate($templateId);
    }

    /**
     * 添加
     * @param string $shortId
     * @param string $keyword_name_list
     * @return array|Collection|object|ResponseInterface|string
     * @throws GuzzleException
     * @throws InvalidConfigException
     */
    public function addTemplate(string $shortId, string $keyword_name_list)
    {
        return $this->template()->addTemplate($shortId, $keyword_name_list);
    }

}