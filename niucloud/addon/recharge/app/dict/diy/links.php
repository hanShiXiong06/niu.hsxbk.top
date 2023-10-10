<?php

return [
    'RECHARGE_LINK' => [
        'key' => 'recharge',
        'addon_title' => get_lang('dict_diy.recharge_title'),
        'title' => get_lang('dict_diy.recharge_link'),
        'child_list' => [
            [
                'name' => 'RECHARGE_INDEX',
                'title' => get_lang('dict_diy.recharge_index'),
                'url' => '/recharge/pages/recharge',
                'is_share' => 1,
                'action' => ''
            ]
        ]
    ],
];
