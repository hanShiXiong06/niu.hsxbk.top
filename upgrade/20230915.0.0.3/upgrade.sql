
ALTER TABLE `{{prefix}}sys_menu` ADD COLUMN menu_attr VARCHAR(50) NOT NULL DEFAULT '' COMMENT '菜单属性 common 公共 system 系统';

CREATE TABLE `{{prefix}}sys_dict` (
  id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'id',
  name VARCHAR(50) NOT NULL DEFAULT '' COMMENT '字典名称',
  `key` VARCHAR(100) NOT NULL DEFAULT '' COMMENT '字典关键词',
  dictionary TEXT NOT NULL COMMENT '字典数据',
  memo VARCHAR(255) NOT NULL DEFAULT '',
  create_time INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  update_time INT(11) NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT = '数据字典表';

ALTER TABLE `{{prefix}}pay_channel` CHANGE COLUMN config config TEXT DEFAULT NULL COMMENT '支付配置';

ALTER TABLE `{{prefix}}generate_table` ADD COLUMN synchronous_number INT(11) NOT NULL DEFAULT 0 COMMENT '同步次数';

ALTER TABLE `{{prefix}}generate_column` ADD COLUMN validate_type VARCHAR(255) DEFAULT '' COMMENT '验证类型';

ALTER TABLE `{{prefix}}generate_column` MODIFY validate_type VARCHAR(255) DEFAULT '' COMMENT '验证类型' AFTER dict_type;
