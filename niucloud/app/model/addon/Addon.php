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

namespace app\model\addon;

use app\dict\addon\AddonDict;
use app\model\member\Member;
use app\model\sys\SysMenu;
use core\base\BaseModel;
use think\model\relation\HasOne;

/**
 * 插件模型
 * Class CmsArticle
 * @package app\model\article
 */
class Addon extends BaseModel
{
    protected $type = [
        'install_time' => 'timestamp',
        'compile' => 'json'
    ];
    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'addon';


    /**
     * 状态名称
     * @param $value
     * @param $data
     * @return mixed|string
     */
    public function getStatusNameAttr($value, $data)
    {
        return AddonDict::getStatus()[$data['status']] ?? '';
    }

//    /**
//     * logo图
//     * @param $value
//     * @param $data
//     * @return string
//     */
//    public function getIconAttr($value, $data)
//    {
//        return addon_resource($data['key'], 'icon.png');
//    }
//    /**
//     * 封面图
//     * @param $value
//     * @param $data
//     * @return string
//     */
//    public function getCoverAttr($value, $data)
//    {
//        return addon_resource($data['key'], 'cover.png');
//    }

    /**
     * 插件名称搜索器
     * @param $query
     * @param $value
     * @param $data
     */
    public function searchTitleAttr($query, $value, $data)
    {
        if ($value) {
            $query->whereLike('title', '%' . $value . '%');
        }
    }

    /**
     * 插件类型
     * @param $value
     * @param $data
     * @return mixed|string
     */
    public function getTypeNameAttr($value, $data)
    {
        if (empty($data['type']))
            return '';
        return AddonDict::getType()[$data['type']] ?? '';
    }
    /**
     * 菜单
//     * @return HasOne->withField('id, menu_name, menu_key, parent_key, menu_type')
     */
    public function children()
    {
        return $this->hasMany(SysMenu::class, 'addon', 'key');
    }
}
