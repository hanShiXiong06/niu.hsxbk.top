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

namespace app\adminapi\controller\weapp;

use app\service\admin\weapp\WeappVersionService;
use core\base\BaseAdminController;
use Exception;
use think\Response;

/**
 * 小程序版本管理控制器
 */
class Version extends BaseAdminController
{
    /**
     * 列表
     * @return Response
     */
    public function lists()
    {
        $data = $this->request->params([

        ]);
        return success((new WeappVersionService())->getPage($data));
    }

    /**
     * 详情
     * @param int $id
     * @return Response
     */
    public function info(int $id)
    {
        return success((new WeappVersionService())->getInfo($id));
    }

    /**
     * 添加
     * @return Response
     */
    public function add()
    {
        $data = $this->request->params([
            ['desc', '']
        ]);
        $id = (new WeappVersionService())->add($data);
        return success('ADD_SUCCESS');
    }

    /**
     * 获取预览码
     * @param int $id
     * @return Response
     */
    public function preview()
    {
        return success(data:(new WeappVersionService())->getPreviewImage());
    }

    /**
     * 删除
     * @param int $id
     * @return Response
     */
    public function del(int $id)
    {
        (new WeappVersionService())->del($id);
        return success('DELETE_SUCCESS');
    }

    /**
     * 设置状态
     * @param int $id
     * @param $status
     * @return Response
     */
    public function setStatus(int $id, $status)
    {
        (new WeappVersionService())->setStatus($id, $status);
        return success('EDIT_SUCCESS');
    }

    /**
     * 小程序包上传
     * @return Response
     * @throws Exception
     */
    public function document()
    {
        $data = $this->request->params([
            ['file', 'file'],
        ]);
        return success(data: (new WeappVersionService())->document($data['file']));
    }

    public function examine()
    {
        $data = $this->request->params([
            ['id', ''],
        ]);
        (new WeappVersionService())->weappExamine($data['id']);
    }
}
