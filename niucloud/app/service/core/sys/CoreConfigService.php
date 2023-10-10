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

namespace app\service\core\sys;

use app\model\sys\SysConfig;
use core\base\BaseCoreService;
use think\facade\Cache;
use think\Model;

/**
 * 配置服务层
 * Class BaseService
 * @package app\service
 */
class CoreConfigService extends BaseCoreService
{
    public static $cache_tag_name = 'config_cache';
    public function __construct()
    {
        parent::__construct();
    }
    /**
     * 获取配置信息
     * @param string $key
     * @return array
     */
    public function getConfig(string $key)
    {
        $cache_name = $key;
        $config_info = cache_remember(
            $cache_name,
            function () use ($key) {
                $where = array(
                    ['config_key', '=', $key],
                );
                $info = (new SysConfig())->where($where)->field('id,config_key,value,create_time,update_time')->findOrEmpty()->toArray();
                if(empty($info))
                {
                    $info = -1;//空数据不会存储数据，防止重复查询
                }
                return $info;
            },
            self::$cache_tag_name
        );
        if($config_info == -1){
            return [];
        }
        return $config_info;
    }

    /**
     * 返回config信息
     * @param string $key
     * @return array|mixed
     */
    public function getConfigValue(string  $key)
    {
        $config_info = $this->getConfig($key);
        if(empty($config_info))
        {
            return [];
        }
        return $config_info['value'];
    }

    /**
     * 设置配置
     * @param string $key
     * @param array $value
     * @return SysConfig|bool|Model
     */
    public function setConfig(string $key, array $value)
    {
        $where = array(
            ['config_key', '=', $key],
        );
        $data = array(
            'config_key' => $key,
            'value' => $value,
        );
        $info = $this->getConfig($key);
        if(empty($info)){
            $data['create_time'] = time();
            $res = (new SysConfig())->create($data);
        }else{
            $data['update_time'] = time();
            $res = (new SysConfig())->where($where)->save($data);
        }
        Cache::tag(CoreConfigService::$cache_tag_name)->set($key, []);
        return $res;
    }
}
