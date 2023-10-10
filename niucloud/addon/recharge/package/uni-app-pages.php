<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
		{
			"path": "{{addon_name}}/pages/recharge",
			"style": {
				"navigationBarTitleText": "%{{addon_name}}.pages.recharge%"
			},
            "needLogin": true
		},
		{
			"path": "{{addon_name}}/pages/recharge_record",
			"style": {
				"navigationBarTitleText": "%{{addon_name}}.pages.recharge_record%"
			},
            "needLogin": true
		},
		{
			"path": "{{addon_name}}/pages/recharge_record_detail",
			"style": {
				"navigationBarTitleText": "%{{addon_name}}.pages.recharge_record_detail%"
			},
            "needLogin": true
		}
        // PAGE_END
EOT
];