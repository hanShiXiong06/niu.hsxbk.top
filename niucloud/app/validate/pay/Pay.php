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

namespace app\validate\pay;

use app\enum\pay\PayEnum;
use think\Validate;

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2023-01-07
 * Time: 18:08
 */
class Pay extends Validate
{

    //用户名或密码的规范可能是从数据库中获取的
    protected $rule = [
        //支付宝
        'app_id' => 'requireIf:type,'.PayEnum::ALIPAY,
        'app_secret_cert' => 'requireIf:type,'.PayEnum::ALIPAY,
        'app_public_cert_path' => 'requireIf:type,'.PayEnum::ALIPAY,
        'alipay_public_cert_path' => 'requireIf:type,'.PayEnum::ALIPAY,
        'alipay_root_cert_path' => 'requireIf:type,'.PayEnum::ALIPAY,

        //微信
        'mch_id' => 'requireIf:type,'.PayEnum::WECHATPAY,
        'mch_secret_key' => 'requireIf:type,'.PayEnum::WECHATPAY,
        'mch_secret_cert' => 'requireIf:type,'.PayEnum::WECHATPAY,
        'mch_public_cert_path' => 'requireIf:type,'.PayEnum::WECHATPAY,

        //支付方式
        'type' => 'require|checkPayType',
    ];

    protected $message = [
        'app_id.requireIf' => 'validate_pay.app_id_requireif',
        'app_secret_cert.requireIf' => 'validate_pay.app_secret_cert_requireif',
        'app_public_cert_path.requireIf' => 'validate_pay.app_public_cert_path_requireif',
        'alipay_public_cert_path.requireIf' => 'validate_pay.alipay_public_cert_path_requireif',
        'alipay_root_cert_path.requireIf' => 'validate_pay.alipay_root_cert_path_requireif',
        
        'mch_id.requireIf' => 'validate_pay.mch_id_requireif',
        'mch_secret_key.requireIf' => 'validate_pay.mch_secret_key_requireif',
        'mch_secret_cert.requireIf' => 'validate_pay.mch_secret_cert_requireif',
        'mch_public_cert_path.requireIf' => 'validate_pay.mch_public_cert_path_requireif',
        
    ];

    protected $scene = [
        'set' => [
            'app_id', 'app_secret_cert', 'app_public_cert_path', 'alipay_public_cert_path', 'alipay_root_cert_path',
            'mch_id','mch_secret_key','mch_secret_cert','mch_public_cert_path',
            'type',
        ],
    ];

    /**
     * 自定义验证 支付类型
     * @param $value
     * @param $rule
     * @param array $data
     * @return bool|string
     */
    protected function checkPayType($value, $rule, $data = [])
    {
        return isset(   PayEnum::getPayType()[$value]) ? true : get_lang("validate_pay.not_exit_pay_type");
    }

}