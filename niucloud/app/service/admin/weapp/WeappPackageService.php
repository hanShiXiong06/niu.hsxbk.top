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

namespace app\service\admin\weapp;

use app\dict\sys\FileDict;
use core\base\BaseAdminService;
use app\dict\sys\StorageDict;
use app\service\core\upload\CoreUploadService;
use core\exception\UploadFileException;
use app\model\weapp\WeappVersion;

/**
 * 小程序包版本发布
 */
class WeappPackageService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new WeappVersion();
    }

    /**
     * 添加小程序版本
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data[ 'create_time' ] = time();
        $res = $this->model->create($data);
        return $res->id;
    }

    /**
     * 获取小程序版本列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id, code, content, create_time, path';
        $order = 'create_time desc';
        $search_model = $this->model->field($field)->order($order);
        return $this->pageQuery($search_model);
    }

    /**
     * 文件上传
     * @param $file
     * @param string $type
     * @return array
     * @throws Exception
     */
    public function document($file, string $type){
        if(!in_array($type, FileDict::getSceneType()))
            throw new UploadFileException('UPLOAD_TYPE_ERROR');
        $dir = 'attachment/document/'.$type.'/'.'/'.date('Ym').'/'.date('d');
        $core_upload_service = new CoreUploadService();
        return $core_upload_service->document($file, $type, $dir, StorageDict::LOCAL);
    }
}