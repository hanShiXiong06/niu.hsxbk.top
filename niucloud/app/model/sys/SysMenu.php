<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\model\sys;

use app\dict\sys\MenuDict;
use app\dict\sys\MenuTypeDict;
use core\base\BaseModel;
use think\model\concern\SoftDelete;

/**
 * 菜单模型
 * Class SysMenu
 * @package app\model\sys
 */
class SysMenu extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'sys_menu';
    /**
     * 追加字段
     * @var array
     */
    protected $append = ['status_name', 'menu_type_name'];


    /**
     * 菜单类型
     * @param $value
     * @param $data
     * @return string
     */
    public function getMenuTypeNameAttr($value, $data)
    {
        if (empty($data['menu_type']))
            return '';
        return MenuTypeDict::getMenuType()[$data['menu_type']] ?? '';
    }

    /**
     * 菜单类型
     * @param $value
     * @param $data
     * @return string
     */
    public function getMenuShortNameAttr($value, $data)
    {
        if (empty($data['menu_short_name']))
            return $data['menu_name'];
        return $data['menu_short_name'];
    }

    /**
     * 菜单状态
     * @param $value
     * @param $data
     * @return string
     */
    public function getStatusNameAttr($value, $data)
    {
        if (empty($data['status']))
            return '';
        return MenuDict::getStatus()[$data['status']] ?? '';
    }
}
