<?php

namespace addon\shop;


use app\service\admin\diy\DiyConfigService;
use app\service\admin\diy\DiyService;

/**
 * 插件安装之后单独的插件方法
 */
class Manage
{
    /**
     * 插件安装执行
     */
    public function install()
    {

        $diy_service = new DiyService();

        // 设置 商城 首页 模板
        $index_flag = 'DIY_SHOP_INDEX';
        $index_template_name = 'shop_index';

        $index_template = $diy_service->getTemplate([ 'type' => [ $index_flag ] ]);

        $diy_service->changeTemplate([
            'type' => 'DIY_INDEX',
            'mode' => 'other',
            'template' => $index_template_name,
            'action' => $index_template[ $index_flag ][ 'action' ],
            'title' => $index_template[ $index_flag ][ 'title' ],
            'page' => $index_template[ $index_flag ][ 'page' ]
        ]);

        // 设置 商城 个人中心 模板
        $member_index_flag = 'DIY_SHOP_MEMBER_INDEX';
        $member_index_template_name = 'shop_member_index';
        $member_index_template = $diy_service->getTemplate([ 'type' => [ $member_index_flag ] ]);

        $diy_service->changeTemplate([
            'type' => 'DIY_MEMBER_INDEX',
            'mode' => 'other',
            'template' => $member_index_template_name,
            'action' => $member_index_template[ $member_index_flag ][ 'action' ],
            'title' => $member_index_template[ $member_index_flag ][ 'title' ],
            'page' => $member_index_template[ $member_index_flag ][ 'page' ]
        ]);

        // 设置 商城 底部导航
        $diy_config_service = new DiyConfigService();
        $menu = [
            'backgroundColor' => '#ffffff',
            'textColor' => '#333333',
            'textHoverColor' => '#FF4500',
            'type' => 1,
            'list' => [
                [
                    "text" => "首页",
                    "link" => [
                        "parent" => "SHOP_LINK",
                        "name" => "SHOP_INDEX",
                        "title" => "首页",
                        "url" => "/shop/pages/index"
                    ],
                    "iconPath" => "addon/shop/diy/tabbar/system-home.png",
                    "iconSelectPath" => "addon/shop/diy/tabbar/system-home-selected.png"
                ],
                [
                    "text" => "商品分类",
                    "link" => [
                        "parent" => "SHOP_LINK",
                        "name" => "SHOP_GOODS_CATEGORY",
                        "title" => "商品分类",
                        "url" => "/shop/pages/goods/category"
                    ],
                    "iconPath" => "addon/shop/diy/tabbar/system-category.png",
                    "iconSelectPath" => "addon/shop/diy/tabbar/system-category-selected.png"
                ],
                [
                    "text" => "购物车",
                    "link" => [
                        "parent" => "SHOP_LINK",
                        "name" => "SHOP_GOODS_CART",
                        "title" => "购物车",
                        "url" => "/shop/pages/goods/cart"
                    ],
                    "iconPath" => "addon/shop/diy/tabbar/system-cart.png",
                    "iconSelectPath" => "addon/shop/diy/tabbar/system-cart-selected.png"
                ],
                [
                    "text" => "我的",
                    "link" => [
                        "parent" => "SHOP_LINK",
                        "name" => "SHOP_MEMBER_INDEX",
                        "title" => "个人中心",
                        "url" => "/shop/pages/member/index"
                    ],
                    "iconPath" => "addon/shop/diy/tabbar/system-my.png",
                    "iconSelectPath" => "addon/shop/diy/tabbar/system-my-selected.png"
                ]
            ]
        ];
        $diy_config_service->setBottomConfig($menu);

        return true;
    }

    /**
     * 插件卸载执行
     */
    public function uninstall()
    {

        $diy_service = new DiyService();

        // 还原 首页 模板
        $index_flag = 'DIY_INDEX';
        $index_template_name = 'default_index';

        $index_template = $diy_service->getTemplate([ 'type' => [ $index_flag ] ]);

        $diy_service->changeTemplate([
            'type' => 'DIY_INDEX',
            'mode' => $index_template[ $index_flag ][ 'template' ][ $index_template_name ][ 'mode' ] ?? 'diy',
            'template' => $index_template_name,
            'action' => $index_template[ $index_flag ][ 'action' ],
            'title' => $index_template[ $index_flag ][ 'title' ],
            'page' => $index_template[ $index_flag ][ 'page' ]
        ]);

        // 还原 个人中心 模板
        $member_index_flag = 'DIY_MEMBER_INDEX';
        $member_index_template_name = 'default_member_index_one';
        $member_index_template = $diy_service->getTemplate([ 'type' => [ $member_index_flag ] ]);

        $diy_service->changeTemplate([
            'type' => 'DIY_MEMBER_INDEX',
            'mode' => $member_index_template[ $member_index_flag ][ 'template' ][ $member_index_template_name ][ 'mode' ] ?? 'diy',
            'template' => $member_index_template_name,
            'action' => $member_index_template[ $member_index_flag ][ 'action' ],
            'title' => $member_index_template[ $member_index_flag ][ 'title' ],
            'page' => $member_index_template[ $member_index_flag ][ 'page' ]
        ]);

        // 还原 底部导航
        $diy_config_service = new DiyConfigService();
        $menu = [

            'backgroundColor' => '#ffffff',
            'textColor' => '#606266',
            'textHoverColor' => '#007aff',
            'type' => 1,
            'list' => [
                [
                    "text" => "首页",
                    "link" => [
                        "parent" => "SYSTEM_LINK",
                        "name" => "INDEX",
                        "title" => "首页",
                        "url" => "/app/pages/index/index"
                    ],
                    "iconPath" => "static/resource/images/tabbar/index.png",
                    "iconSelectPath" => "static/resource/images/tabbar/index-selected.png"
                ],
                [
                    "text" => "会员",
                    "link" => [
                        "parent" => "MEMBER_LINK",
                        "name" => "MEMBER_CENTER",
                        "title" => "个人中心",
                        "url" => "/app/pages/member/index"
                    ],
                    "iconPath" => "static/resource/images/tabbar/my.png",
                    "iconSelectPath" => "static/resource/images/tabbar/my-selected.png"
                ]
            ]
        ];
        $diy_config_service->setBottomConfig($menu);
        return true;
    }

    /**
     * 插件升级执行
     */
    public function upgrade()
    {
        return true;
    }

}