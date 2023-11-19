
ALTER TABLE `{{prefix}}pay_refund` CHANGE COLUMN money money DECIMAL(10, 2) NOT NULL DEFAULT 0.00 COMMENT '退款金额';

ALTER TABLE `{{prefix}}pay_refund` CHANGE COLUMN voucher voucher VARCHAR(255) NOT NULL DEFAULT '' COMMENT '退款凭证';

ALTER TABLE `{{prefix}}pay_refund` ADD COLUMN trade_type VARCHAR(255) NOT NULL COMMENT '业务类型';

ALTER TABLE `{{prefix}}pay_refund` ADD COLUMN trade_id VARCHAR(50) NOT NULL DEFAULT '' COMMENT '业务关联id';

ALTER TABLE `{{prefix}}pay_refund` ADD COLUMN refund_type VARCHAR(255) NOT NULL DEFAULT '' COMMENT '退款方式';

ALTER TABLE `{{prefix}}pay_refund` ADD COLUMN main_type VARCHAR(255) NOT NULL DEFAULT '' COMMENT '操作人类型';

ALTER TABLE `{{prefix}}pay_refund` ADD COLUMN main_id INT(11) NOT NULL DEFAULT 0 COMMENT '操作人';

ALTER TABLE `{{prefix}}member_address` ADD COLUMN address_name VARCHAR(255) NOT NULL DEFAULT '';

ALTER TABLE `{{prefix}}member_address` MODIFY address_name VARCHAR(255) NOT NULL DEFAULT '' AFTER address;
