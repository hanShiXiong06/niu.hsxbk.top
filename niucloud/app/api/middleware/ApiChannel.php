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

namespace app\api\middleware;

use app\Request;
use app\service\core\site\CoreSiteService;
use Closure;
use core\exception\AuthException;
use Exception;
use think\facade\Log;


/**
 * api渠道处理, 各种渠道的请求, 会在这儿将渠道的公共数据处理好
 */
class ApiChannel
{
    /**
     * @param Request $request
     * @param Closure $next
     * @return mixed
     * @throws Exception
     */
    public function handle(Request $request, Closure $next)
    {
        //微信或支付宝
        $channel_rules = [
            'wechat/serve/<site_id>',
            'pay/notify/<site_id>/<channel>/<type>/<action>'
        ];
        if (in_array($request->rule()->getRule(), $channel_rules)) {
            $site_id = $request->param('site_id', -1);
            if ($site_id != -1) {
                $site_info = (new CoreSiteService())->getSiteCache($site_id);
                if(empty($site_info)) throw new AuthException('SITE_NOT_EXIST');
                $site_code = $site_info['code'] ?? '';
                $request->pushHeader([ system_name('api_site_id_name') => $site_code ]);
            }
        }
        return $next($request);
    }
}
