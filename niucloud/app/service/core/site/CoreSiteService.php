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

namespace app\service\core\site;

use app\model\site\Site;
use app\service\api\login\BaseApiService;
use core\base\BaseCoreService;
use think\facade\Cache;

/**
 * 站点服务层
 * Class Site
 * @package app\service\admin\site
 */
class CoreSiteService extends BaseCoreService
{
    public static $cache_tag_name = 'site_cash';
    public function __construct()
    {
        parent::__construct();
        $this->model = new Site();
    }



    /**
     * 获取授权当前站点信息(用做缓存)
     * @return mixed
     */
    public function getSiteCache(int $site_id){
        $cache_name = 'site_info_cache';
        return Cache::tag(self::$cache_tag_name.$site_id)->remember($cache_name.$site_id, function () use ($site_id) {
            $where = [
                ['site_id', '=', $site_id],
            ];
            $site = $this->model->where($where)->field('app_type,site_name,logo,group_id, status, expire_time')->findOrEmpty();
            if(!$site->isEmpty()){
                $site->append(['status_name']);
            }
            return $site->toArray();
        });
    }

}