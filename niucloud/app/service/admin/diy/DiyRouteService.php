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

namespace app\service\admin\diy;

use app\dict\diy\LinkDict;
use app\model\diy\DiyRoute;
use core\base\BaseAdminService;

/**
 * 自定义路由表服务层
 * Class DiyRouteService
 * @package app\service\admin\diy
 */
class DiyRouteService extends BaseAdminService
{

    public function __construct()
    {
        parent::__construct();
        $this->model = new DiyRoute();
    }

    /**
     * 获取自定义路由列表
     * @param array $where
     * @return array
     */
    public function getList(array $where = [])
    {
        $link = LinkDict::getLink();
        $diy_route_list = [];
        $sort = 0;
        foreach ($link as $k => $v) {
            if (!empty($v[ 'child_list' ])) {
                foreach ($v[ 'child_list' ] as $ck => $cv) {
                    if (!empty($cv[ 'url' ])) {
                        if (empty($where[ 'title' ]) || ( !empty($where[ 'title' ]) && str_contains($cv[ 'title' ], $where[ 'title' ]) )) {
                            $diy_route_list[] = [
                                'key' => $v[ 'key' ] ?? '',
                                'addon_title' => $v[ 'addon_title' ] ?? '',
                                'title' => $cv[ 'title' ],
                                'name' => $cv[ 'name' ],
                                'page' => $cv[ 'url' ],
                                'is_share' => $cv[ 'is_share' ],
                                'action' => $cv[ 'action' ] ?? '',
                                'sort' => ++$sort
                            ];
                        }
                    }
                }
            }
        }
        return $diy_route_list;
    }

    /**
     * 获取自定义路由表列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,title,name,page,share,is_share,sort';
        $order = '';

        $search_model = $this->model->withSearch([ "title" ], $where)->field($field)->order($order);
        return $this->pageQuery($search_model);
    }

    /**
     * 获取自定义路由表信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'title,name,page,share,is_share,sort';

        return $this->model->field($field)->where([ [ 'id', '=', $id ] ])->findOrEmpty()->toArray();
    }

    /**
     * 获取自定义路由表信息
     * @param string $name
     * @return array
     */
    public function getInfoByName(string $name)
    {
        $field = 'id,title,name,page,share,is_share,sort';
        return $this->model->field($field)->where([ [ 'name', '=', $name ] ])->findOrEmpty()->toArray();
    }

    /**
     * 添加自定义路由表
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $res = $this->model->create($data);
        return $res->id;
    }

    /**
     * 自定义路由表编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {
        $this->model->where([ [ 'id', '=', $id ] ])->update($data);
        return true;
    }

    /**
     * 删除自定义路由表
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        return $this->model->where([ [ 'id', '=', $id ] ])->delete();
    }

    /**
     * 修改分享内容
     * @param $data
     * @return bool
     */
    public function modifyShare($data)
    {
        $field = 'id';
        $info = $this->model->field($field)->where([ [ 'name', '=', $data[ 'name' ] ] ])->findOrEmpty()->toArray();
        if (!empty($info)) {
            $this->model->where([ [ 'id', '=', $info[ 'id' ] ] ])->update([ 'share' => $data[ 'share' ] ]);
        } else {
            $this->model->create($data);
        }
        return true;
    }

}