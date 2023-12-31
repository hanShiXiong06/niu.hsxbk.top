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

namespace app\service\admin\upload;

use app\dict\sys\FileDict;
use app\dict\sys\StorageDict;
use app\service\core\upload\CoreStorageService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use core\exception\AdminException;

/**
 * 用户服务层
 * Class BaseService
 * @package app\service
 */
class StorageConfigService extends BaseAdminService
{

    /**
     * 获取云存储列表
     * @return array
     */
    public function getStorageList()
    {
        return (new CoreStorageService())->getStorageList();
    }

    /**
     * 获取存储配置
     * @param string $storage_type
     * @return array
     */
    public function getStorageConfig(string $storage_type)
    {
        $storage_type_list = StorageDict::getType();
        if(!array_key_exists($storage_type, $storage_type_list)) throw new AdminException('OSS_TYPE_NOT_EXIST');
        $info = (new CoreConfigService())->getConfig( 'STORAGE');
        if(empty($info))
        {
            $config_type = ['default' => ''];//初始化
        }else
            $config_type = $info['value'];

        $data = [
            'storage_type' => $storage_type,
            'is_use' => $storage_type == $config_type['default'] ? StorageDict::ON : StorageDict::OFF,
            'name'   => $storage_type_list[$storage_type]['name'],
        ];
        foreach ($storage_type_list[$storage_type]['params'] as $k_param => $v_param)
        {
            $data['params'][$k_param] = [
                'name' => $v_param,
                'value' => $config_type[$storage_type][$k_param] ?? ''
            ];
        }
        return $data;

    }

    /**
     * 云存储配置
     * @param string $storage_type
     * @param array $data
     * @return bool
     */
    public function setStorageConfig(string $storage_type, array $data)
    {
        if($data['is_use'] == 0)
        {
            $list = (new CoreStorageService())->getStorageList();
            $is_use = [];
            foreach ($list as $value)
            {
                if($value['storage_type'] != $storage_type)
                {
                    $is_use[] = $value['is_use'];
                }
            }
            $use = in_array('1',$is_use);
            if(!$use)
            {
                throw new AdminException('至少启用一种存储方式');
            }
        }
        $storage_type_list = StorageDict::getType();
        if(!array_key_exists($storage_type, $storage_type_list)) throw new AdminException('OSS_TYPE_NOT_EXIST');
        if($storage_type != FileDict::LOCAL){
            $domain = $data['domain'];
            if (!str_contains($domain, 'http://') && !str_contains($domain, 'https://')){
                throw new AdminException('STORAGE_NOT_HAS_HTTP_OR_HTTPS');
            }
        }
        $info = (new CoreConfigService())->getConfig( 'STORAGE');

        if(empty($info))
        {
            $config['default'] = '';

        }else{
            $config = $info['value'];
        }
        //初始化数据
        if($data['is_use'])
        {
            $config['default'] = $storage_type;
        }else{
            if(empty($info))
            {
                $config['default'] = '';

            }else{
                $config['default'] = $info['value']['default'];
            }
        }
        foreach ($storage_type_list[$storage_type]['params'] as $k_param => $v_param)
        {
            $config[$storage_type][$k_param] = $data[$k_param] ?? '';
        }
        return (new CoreConfigService())->setConfig('STORAGE', $config);
    }



}
