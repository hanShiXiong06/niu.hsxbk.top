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

namespace app\service\api\member;

use app\model\member\MemberCollect;
use core\base\BaseAdminService;
use think\Model;

/**
 * 会员设置
 * Class MemberConfigService
 * @package app\service\admin\member
 */
class MemberCollectService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new MemberCollect();
    }


    /**
     * 添加收藏
     */
    public function setMemberCollect($data)
    {
        $data['create_time'] = time();
        $res = $this->model->create($data);
        return $res->id;
    }

    /**
     * 获取收藏信息（单条记录）
     */
    public function getCollectOne($where)
    {
        $field = 'id,member_id,goods_id,type,create_time';
        $info = $this->model->field($field)->where($where)->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 获取收藏信息（全部记录）
     */
    public function getCollectList($where)
    {
        $field = 'id,member_id,goods_id,type,create_time';
        $list= $this->model->field($field)->where($where)->select()->toArray();
        return $list;
    }

    /**
     * 取消收藏
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $res = $this->model->where([['id', '=', $id]])->delete();
        return true;
    }
}
