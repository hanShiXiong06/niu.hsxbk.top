
ALTER TABLE `{{prefix}}sys_menu` ADD COLUMN menu_short_name VARCHAR(50) NOT NULL DEFAULT '' COMMENT '菜单短标题';

ALTER TABLE `{{prefix}}sys_menu` MODIFY menu_short_name VARCHAR(50) NOT NULL DEFAULT '' COMMENT '菜单短标题' AFTER menu_name;

ALTER TABLE `{{prefix}}sys_config` DROP COLUMN status;

ALTER TABLE `{{prefix}}member_address` DROP COLUMN telephone;

ALTER TABLE `{{prefix}}member_address` DROP COLUMN community_id;

ALTER TABLE `{{prefix}}member_address` CHANGE COLUMN type type VARCHAR(30) NOT NULL DEFAULT '' COMMENT '地址类型  address 普通地址  location_address 定位地址';

ALTER TABLE `{{prefix}}member_address` CHANGE COLUMN longitude lng VARCHAR(255) NOT NULL DEFAULT '' COMMENT '经度';

ALTER TABLE `{{prefix}}member_address` CHANGE COLUMN latitude lat VARCHAR(255) NOT NULL DEFAULT '' COMMENT '纬度';

ALTER TABLE `{{prefix}}member_address` MODIFY is_default TINYINT(4) NOT NULL DEFAULT 0 COMMENT '是否是默认地址' AFTER lat;

ALTER TABLE `{{prefix}}member_address` MODIFY type VARCHAR(30) NOT NULL DEFAULT '' COMMENT '地址类型  address 普通地址  location_address 定位地址' AFTER is_default;

ALTER TABLE `{{prefix}}generate_table` CHANGE COLUMN relations relations TEXT NOT NULL COMMENT '关联配置';
