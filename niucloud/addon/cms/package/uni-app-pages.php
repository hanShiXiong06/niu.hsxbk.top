<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
		{
			"path": "{{addon_name}}/pages/list",
			"style": {
				"navigationBarTitleText": "%{{addon_name}}.pages.list%"
			}
		},
		{
			"path": "{{addon_name}}/pages/detail",
			"style": {
				"navigationBarTitleText": "%{{addon_name}}.pages.detail%"
			}
		}
        // PAGE_END
EOT
];