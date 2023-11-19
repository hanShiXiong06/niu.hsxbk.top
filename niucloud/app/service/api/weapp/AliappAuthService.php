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

namespace app\service\api\weapp;

// use app\dict\member\MemberLoginTypeDict;
// use app\dict\member\MemberRegisterTypeDict;
// use app\model\member\Member;
// use app\service\api\login\LoginService;
// use app\service\api\login\RegisterService;
// use app\service\api\member\MemberConfigService;
// use app\service\api\member\MemberService;

// use Alipay\OpenAPISDK\Util\Model\AlipayConfig;
// use Alipay\OpenAPISDK\Util\AlipayConfigUtil;
// use Alipay\OpenAPISDK\Model\AlipaySystemOauthTokenModel;
// use Alipay\OpenAPISDK\Api\AlipayUserInfoShareRequest;
// use Alipay\OpenAPISDK\Util\AlipayEncrypt\AES\AES;
// use Alipay\OpenAPISDK\Util\AlipayEncrypt\AES\Encrypt;
// use Alipay\OpenAPISDK\Util\AlipayEncrypt\AlipayEncrypt;
// use Alipay\OpenAPISDK\Util\AlipayEncrypt\AlipayRSAEncryption;
// use Alipay\OpenAPISDK\Util\AlipayEncrypt\AlipayContentCrypt;
// use Alipay\OpenAPISDK\Api\AlipayTradeApi;
// use Alipay\OpenAPISDK\Api\AlipaySystemOauthApi;
// use GuzzleHttp\Client;

use core\base\BaseApiService;
use core\exception\ApiException;
use core\exception\AuthException;
// use EasyWeChat\Kernel\Exceptions\InvalidArgumentException;
// use EasyWeChat\Kernel\Exceptions\InvalidConfigException;

use Alipay\EasySDK\Kernel\Factory;
use Alipay\EasySDK\Kernel\Config;
use Alipay\EasySDK\Kernel\Util\ResponseChecker;



use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\Model;

// use core\base\BaseCoreService;
// use GuzzleHttp\Exception\GuzzleException;
// use Alipay\OpenAPI\AlipayConfig;
// use Alipay\OpenAPI\AlipayTradeService;
// use Alipay\OpenAPI\Model\AlipaySystemOauthTokenRequest;

/**
 * 微信配置模型
 * Class WechatConfigService
 * @package app\service\core\wechat
 */
class AliappAuthService extends BaseApiService
{

    private $options;

    public function __construct() {
        // 初始化参数
        $this->options = $this->getOptions();
        Factory::setOptions($this->options);
    }


   /**
     * 支付宝授权登录
     * @param string|null $code
     * @return array|bool
    
    public function alipaySession($code)
    {
      
      $apiInstance = new AlipaySystemOauthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new Client()
);
        
        // 根据支付宝SDK的文档，创建支付宝授权登录的逻辑
        // 使用SDK发送请求以获取用户信息
               // 示例代码（需要根据实际情况进行调整）
        // try {
        //     // 创建支付宝配置实例
            $alipayConfig = new AlipayConfig();
        //     // 设置支付宝开放平台的参数
            $alipayConfig->setAppId('2021003175632260');
            $alipayConfig->setPrivateKey($private_key);
            $alipayConfig->setAppCertPath('upload/attachment/document/aliyun/202311/02/appCertPublicKey_2021003175632260.crt');
            $alipayConfig->setAlipayPublicCertPath('upload/attachment/document/aliyun/202311/02/alipayCertPublicKey_RSA2.crt');
            $alipayConfig->setRootCertPath('upload/attachment/document/aliyun/202311/02/alipayRootCert.crt');
            $alipayConfig->setEncryptKey('encrypt_key');
            $alipayConfigUtil = new AlipayConfigUtil($alipayConfig);
            $apiInstance->setAlipayConfigUtil($alipayConfigUtil);
            $alipaySystemOauthTokenModel = new AlipaySystemOauthTokenModel();
            try {
                $result = $apiInstance->token($alipaySystemOauthTokenModel);
                print_r($result);
            } catch (Exception $e) {
                echo 'Exception when calling AlipaySystemOauthApi->token: ', $e->getMessage(), PHP_EOL;
            }
        // } catch (\Exception $e) {
        //     // 处理异常情况
        //     return false;
        // }
    } */
   public function alipaySession(?string $code)
    {
        
       
        try {
            //2. 发起API调用（以支付能力下的统一收单交易创建接口为例）
            $response = Factory::base()->oauth()->getToken($code);
           
            if (isset($response->httpBody)) {
                $accessToken = $response->httpBody;  // 提取 access token
                // 接下来可以使用 $accessToken 进行后续操作
                return ['httpBody'=>$accessToken ];
            } else {
                // 处理错误情况
                $errorMessage = $response->msg;
                return $errorMessage;
                // 可以记录日志或返回错误信息
            }
            // $responseChecker = new ResponseChecker();
            // //3. 处理响应或异常
            // if ($responseChecker->success($result)) {
            //     echo "调用成功". PHP_EOL;
            // } else {
            //     echo "调用失败，原因：". $result->msg."，".$result->subMsg.PHP_EOL;
            // }
        } catch (Exception $e) {
            echo "调用失败，". $e->getMessage(). PHP_EOL;;
        }


    }
    private function getOptions() {
        $options = new Config();
        $options->protocol = 'https';
        $options->gatewayHost = 'openapi.alipay.com';
        $options->signType = 'RSA2';
        $options->method = 'alipay.system.oauth.token';
        $options->appId = '2021003175632260';

        // 为避免私钥随源码泄露，推荐从文件中读取私钥字符串而不是写入源码中
        $options->merchantPrivateKey = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCRF5b+uBYW/SarphkQ0e1M+pM9RQdhA2zCZr/beWA7xHEkw9HXQGbteKQKCYz3DpW0i/Jlt4EVsSmY2f4Gt390gSdjxMt7UVg06Cmm2a81TqIpl8XvG5eA3luPGXOyQCKaD4TtrmSgtV8UuP9UeBp6kweORkxKpBDFRwNVlw5tS+Eii3KVG7dOzMs4LSDElRROZuFNAGgmqGrVcaHzLhsCJiTqCT8vbQUURItpI/ncjPoj9YNuW/s9B6lv6otR2/10oYU957VeZRCjAHpKwCQGYd+LbiCnv6Du1s4Cx4aO1HnGHJ1iJnbcb3J32xScJMTLiFV76kFXLvZGSWbXOt67AgMBAAECggEAW3Oe/NZTNhJCOZbr3ao0BH08KTZFPGTIPJA/BbsvaPycxCuZLC+vsKaF3r2+WEqdGbvMAUj02BNewLVGZD1s3KY7iasVBplzG4XqGvzCbrstg0HixJ+DkvqUg1HrlsLODIUTqCxvyMwJLiqc5UT+i5v4+zhcBf/7gh0MgPpBYamh317SLEZz50q3vtY1Sgnl+FqbSV/gnSBNeRpHis2VN90uPPfsWpfxhr2VRGKHh+Y9J8QOqX/wy5SnUOv7LPrVD0qVq6hCP8UpybWicpME/ZYZn3O9jigw2bKk7e6u8lxdT+s0+6FfLcsuGZIbT1gteo9E1XWlN3bmd6b2SkFBIQKBgQD+MKe2cZUb1C96SQTWFk4atFNYQVkw2l0tHlYwXs2n6UD5jp8KNEZk7vJMn0wkyPL4AxsTXgEFSvc/tv6fqNIVX1k7OoAN+dSGf9XpC0YY0TuiY960xEjnNUz5B2N0NWAPIREao6xhcALSdsCkbqlfBWwo/ArzgZQMpQ/tjF5uvwKBgQCSIBFjLN4Whc2WSQgW60Og3d8oV5zw3XrLuZZx0h7B8X1wAqfM5k0ZE5o1dJf5s0JSW/GTdBd4RC6wCkKIuEvod3NXojGZ6D/dgtUEqoIaX/22kDZr2ht7XiSgGkfnzetoXMGCQWZb1J/Q1bIedn1s2L89/w0ffwPb4XHoPf+LBQKBgQDzH96KJoGUKJNwxz6U9qil6ix9kaOZkoLkkMunYEYcgIHhMIT14aIjEFk46HSQCpQ6m93d3F/ljBqJGqLYW0T1pElY2U96Dqc0LjmPuXTGb/o2DIgLJmMEonqJBoQdtp+2WM5fSIWsfNJ2M5d2r1HYzPrzCIABAMN2hLqDX2tDSQKBgA8kQYj8UjsVPFtxT+RIFqbptsEQaxPOb3YC0iMTOdqw8mWT8N1bk+ugS190qHbYa2vrWRoFcpUkw428Um6mYj9BeXNAPFGNbmi+sOId5QNkpP6w7OK6JBThiXwJnR/ZB6a1zdt4eWnUm4bhTea4MoD/6Lk835g+6iBzuQDuw7cdAoGBANdt1EQzvudxfyZW+HaQEYgx+MUAiirf9Py1bZJKeKqyMr7eF/1D0dmSYAjRrMWULP9mku1AweHMNAa3vZwoEchb91ml120fKH4vMoWZuAkPk4PNvJwZgRfwgGT/s6BsAdpWNLgFfCSc18Yz8HGwCQ/Kf386OcXY+uhVFpeZTkqk';

        $options->alipayCertPath = 'upload/attachment/document/aliyun/202311/02/alipayCertPublicKey_RSA2.crt';
        $options->alipayRootCertPath = 'upload/attachment/document/aliyun/202311/02/alipayRootCert.crt';
        $options->merchantCertPath = 'upload/attachment/document/aliyun/202311/02/appCertPublicKey_2021003175632260.crt';

        // 注：如果采用非证书模式，则无需赋值上面的三个证书路径，改为赋值如下的支付宝公钥字符串即可
        // $options->alipayPublicKey = '<-- 请填写您的支付宝公钥，例如：MIIBIjANBg... -->';

        // 可设置异步通知接收服务地址（可选）
        $options->notifyUrl = "<-- 请填写您的支付类接口异步通知接收服务地址，例如：https://www.test.com/callback -->";

        return $options;
    }
}