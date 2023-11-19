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

namespace app\api\controller\weapp;

use app\service\api\notice\NoticeService;
use app\service\api\weapp\WeappAuthService;
use app\service\api\weapp\AliappAuthService;
use core\base\BaseApiController;
use think\Response;
use Alipay\OpenAPISDK\Util\Model\AlipayConfig;

use Alipay\OpenAPISDK\Util\AlipayConfigUtil;
use Alipay\OpenAPISDK\Api\AlipayTradeApi;
use Alipay\OpenAPISDK\Model\AlipayTradePayModel;

class Weapp extends BaseApiController
{

    /**
     * 授权登录
     * @return Response
     */
    public function login(){
        $data = $this->request->params([['code', '']]);
        $weapp_auth_service = new WeappAuthService();
        return success($weapp_auth_service->login($data['code']));
    }
    
    /*
    */ 
     public function airlogin(){
    {
        // 获取支付宝授权登录的 code 参数
        $code = $this->request->param('code');
        
        // 创建 CoreWeappAuthService 的实例
        $weapp_auth_service = new AliappAuthService();

        // // 调用服务层的方法并传递 code 参数
        $result = $weapp_auth_service->alipaySession($code);

        // // 处理服务层返回的结果，返回相应的响应
        if ($result) {
            return success($result);
        } else {
            return success('授权登录失败');
        }
    }
        
     }
  
    /**
     * 注册
     * @return Response
     */
    public function register(){
        $data = $this->request->params([
            ['openid', ''],
            ['mobile_code', ''],
            ['mobile', ''],
        ]);

        $weapp_auth_service = new WeappAuthService();
        return success($weapp_auth_service->register($data['openid'], $data['mobile'], $data['mobile_code']));
    }


    public function subscribeMessage(){
        $data = $this->request->params([ ['keys', ''] ]);
        return success((new NoticeService())->getWeappNoticeTemplateId($data['keys']));
    }
}
