<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\service\core\applet;

use app\dict\applet\AppletlDict;
use app\service\core\applet\CoreAppletVersionService;
use core\base\BaseCoreService;
use core\exception\CommonException;

/**
 * 小程序包下载
 */
class CoreAppletDownloadService extends BaseCoreService
{
    protected $replace;//替换文件以及替换的文本变量
    protected $version;//版本号
    protected $version_id;//版本id
    protected $type;//小程序类型
    protected $path;
    protected $root_path = 'upload';
    public function __construct(string $version_id)
    {
        parent::__construct();
        //查询这个版本的信息
        $version_info = (new CoreAppletVersionService())->getInfo($version_id);
        if(empty($version_info)) throw new CommonException();//不存在的版本
        $this->version_id = $version_id;
        $this->version = $version_info['version'];
        $this->type = $version_info['type'];
        $this->path = $version_info['path'];
    }

    public function setReplace($replace)
    {
        $this->replace = $replace;
//        [
//            [
//                'path' => '',
//                'variable' => [
//                    'site_name' => '牛'
//                ]
//            ]
//        ];
        return $this;
    }

    /**
     * 下载小程序包
     * @param int $site_id
     * @return \think\response\File
     */
    public function download(int $site_id)
    {
        $zip = new \ZipArchive;
        $file_name = $site_id.'.zip';
        $dir = $this->root_path .'/applet/'.  $this->type.'/'.$this->version.'/';
        //新生成一个当前站点这个版本的压缩包,如果已存在就直接下载
        $file = $dir.$file_name;
        if(!file_exists($file)){
            if(!copy($this->path, $file)) throw new CommonException();//文件拷贝失败
            if ($zip->open($file) === true) {
                //编译
                $this->compile($zip);
                //关闭
                $zip->close();
            } else {
                throw new CommonException();
            }
        }
        //新增下载记录
        (new CoreAppletSiteVersionService())->add($site_id, $this->version_id, AppletlDict::DOWNLOAD);
        return download($file, $this->version);
    }

    /**
     * 编译替换
     * @param $zip
     * @return void
     */
    public function compile($zip)
    {
        foreach ($this->replace as $k => $v) {
            $item_path = $v['path'];
            $item_variable = $v['variable'];
            //Read contents into memory
            $old_contents = $zip->getFromName($item_path);
            //Modify contents:
            foreach($item_variable as $variable_k => $variable_v){
                $new_contents = str_replace($variable_k, $variable_v, $old_contents);
            }
            //Delete the old...
            $zip->deleteName($item_path);
            //Write the new...
            $zip->addFromString($item_path, $new_contents);
        }
    }
}