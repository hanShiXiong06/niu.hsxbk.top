<?php
declare (strict_types = 1);

namespace addon\shop\app\listener\notice_template;

use addon\shop\app\service\core\order\CoreOrderService;
use app\listener\notice_template\BaseNoticeTemplate;

/**
 * 订单支付通知
 */
class OrderPay extends BaseNoticeTemplate
{
    private $key = 'shop_order_pay';

    public function handle(array $params)
    {
        if ($this->key == $params['key']) {
            $order = (new CoreOrderService())->getInfo($params['order_id']);
            if (!$order->isEmpty()) {
                $wap_domain = !empty(env("system.wap_domain")) ? preg_replace('#/$#', '', env("system.wap_domain")) : request()->domain();
                return $this->toReturn(
                    [
                        '__wechat_page' =>'/shop/pages/order/detail?order_id=' . $order['order_id'],//模板消息链接
                        '__weapp_page' => 'shop/pages/order/detail?order_id=' . $order['order_id'],//小程序链接
                        'body' => $order['body'],
                        'order_no' => $order['order_no'],
                        'order_money' => $order['order_money'], //交易流水号
                        'pay_time' => $order['pay_time'],
                        'url' => $wap_domain . '/shop/pages/order/detail?order_id=' . $order['order_id']
                    ],
                    [
                        'member_id' => $order['member_id']
                    ]
                );
            }
        }
    }
}
