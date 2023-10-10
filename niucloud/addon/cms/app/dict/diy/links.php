<?php

return [
    'CMS_LINK' => [
        'key' => 'cms',
        'addon_title' => get_lang('dict_diy.cms_title'),
        'title' => get_lang('dict_diy.cms_link'),
        'child_list' => [
            [
                'name' => 'ARTICLE_LIST',
                'title' => get_lang('dict_diy.cms_link_article_list'),
                'url' => '/cms/pages/list',
                'is_share' => 1,
                'action' => ''
            ],
        ]
    ],
];