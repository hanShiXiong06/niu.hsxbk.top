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

use app\dict\sys\FileDict;
use core\base\BaseAdminController;
use app\service\admin\weapp\WeappPackageService;

class Package extends BaseAdminController
{
    /**
     * 版本列表
     * @return Response
     */
    public function lists()
    {
        $data = $this->request->params([
        ]);
        return success((new WeappPackageService())->getPage($data));
    }

    /**
     * 版本详情
     * @param int $id
     * @return Response
     */
    public function info(int $id)
    {
        return success((new WeappPackageService())->getInfo($id));
    }

    /**
     * 添加版本
     * @return Response
     */
    public function add()
    {
        $data = $this->request->params([
            ['code', ''],
            ['path', ''],
            ['content', '']
        ]);

        $id = (new WeappPackageService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 文件上传(默认不上云)
     * @return Response
     */
    public function document()
    {
        $data = $this->request->params([
            ['file', 'file'],
        ]);
        $upload_service = new WeappPackageService();
        return success($upload_service->document($data['file'], FileDict::APPLET));
    }
}
