<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2023-02-17
 * Time: 15:58
 */

namespace extend\driver\file\storage;

use Exception;
use extend\exception\UploadFileException;
use extend\driver\file\Storage;
use Qcloud\Cos\Client;

/**
 * 腾讯云存储引擎 (COS)
 * Class Qiniu
 * @package app\common\library\storage\engine
 */
class Qcloud extends Storage
{


    /**
     * 构造方法
     * Qcloud constructor.
     * @param $config
     */
    public function __construct(private $config)
    {
        parent::__construct();

    }
    /**
     * 获取服务主体
     * @return Client
     */
    public function client(){
        $secret_id = $this->config['access_key']; //替换为用户的 secretId，请登录访问管理控制台进行查看和管理，https://console.tencentcloud.com/cam/capi
        $secret_key = $this->config['secret_key']; //替换为用户的 secretKey，请登录访问管理控制台进行查看和管理，https://console.tencentcloud.com/cam/capi
        $region = $this->config['region']; //替换为用户的 region，已创建桶归属的region可以在控制台查看，https://console.tencentcloud.com/cos5/bucket

        return new Client(
            array(
                'region' => $region,
//                'schema' => 'https', //协议头部，默认为http
                'credentials' => array(
                    'secretId' => $secret_id,
                    'secretKey' => $secret_key)
            )
        );
    }


    /**
     * 执行上传
     * @param $save_dir (保存路径)
     * @return bool|mixed
     */
    public function upload(string $dir)
    {
        $bucket = $this->config['bucket'];
        try {
            $result = $this->app()->putObject(array(
                'Bucket' => $bucket, //存储桶名称，由BucketName-Appid 组成，可以在COS控制台查看 https://console.tencentcloud.com/cos5/bucket
                'Key' => $this->getFullPath(),
                'Body' => fopen($this->getRealPath(), 'rb'),
            ));
            // 请求成功
            return true;
        } catch ( Exception $e ) {
            throw new UploadFileException($e->getMessage());
        }
    }

    /**
     * notes: 抓取远程资源(最大支持上传5G文件)
     * @param $url
     * @param null $key
     * @return mixed|void
     */
    public function fetch(string $url, ?string $key = null)
    {

        $bucket = $this->config['bucket'];
        try {
            $result = $this->app()->putObject(array(
                'Bucket' => $bucket, //存储桶名称，由BucketName-Appid 组成，可以在COS控制台查看 https://console.tencentcloud.com/cos5/bucket
                'Key' => $key,
                'Body' => fopen($url, 'rb'),
            ));
            // 请求成功
            return true;
        } catch ( Exception $e ) {
            throw new UploadFileException($e->getMessage());
        }
    }

    /**
     * 删除一个简单对象
     * @param $file_name
     * @return bool|mixed
     */
    public function delete(string $file_name)
    {
        $bucket = $this->config['bucket'];
        try {
            $this->app()->deleteObject(array(
                'Bucket' => $bucket,
                'Key' => $file_name
            ));
            return true;
        } catch ( Exception $e ) {
            throw new UploadFileException($e->getMessage());
        }
    }

}
