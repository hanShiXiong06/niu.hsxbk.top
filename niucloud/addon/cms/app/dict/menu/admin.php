<?php
return [
    [
        'menu_name' => '微官网',
        'menu_key' => 'cms',
        'menu_type' => 0,
        'icon' => 'element-Tickets',
        'api_url' => '',
        'router_path' => 'cms',
        'view_path' => '',
        'methods' => '',
        'sort' => 100,
        'status' => 1,
        'is_show' => 1,
        'children' => [
            [
                'menu_name' => '文章管理',
                'menu_short_name' => '文章',
                'menu_key' => 'cms_article',
                'menu_type' => 0,
                'icon' => 'iconfont-iconwenzhangguanli1',
                'api_url' => '',
                'router_path' => 'article',
                'view_path' => '',
                'methods' => '',
                'sort' => 98,
                'status' => 1,
                'is_show' => 1,
                'children' => [
                    [
                        'menu_name' => '文章列表',
                        'menu_key' => 'cms_article_list',
                        'menu_type' => 1,
                        'icon' => 'element-ChatDotSquare',
                        'api_url' => 'cms/article',
                        'router_path' => 'list',
                        'view_path' => 'article/list',
                        'methods' => 'get',
                        'sort' => 100,
                        'status' => 1,
                        'is_show' => 1,
                    ],
                    [
                        'menu_name' => '文章添加/编辑',
                        'menu_key' => 'cms_article_edit',
                        'menu_type' => 1,
                        'icon' => '',
                        'api_url' => 'cms/article',
                        'router_path' => 'edit',
                        'view_path' => 'article/edit',
                        'methods' => 'post',
                        'sort' => 90,
                        'status' => 1,
                        'is_show' => 0,
                    ],
                    [
                        'menu_name' => '文章栏目',
                        'menu_key' => 'cms_article_category',
                        'menu_type' => 1,
                        'icon' => 'element-CollectionTag',
                        'api_url' => 'article/category',
                        'router_path' => 'category',
                        'view_path' => 'article/category',
                        'methods' => 'get',
                        'sort' => 80,
                        'status' => 1,
                        'is_show' => 1,
                    ],
                ]
            ]
        ]
    ]
];