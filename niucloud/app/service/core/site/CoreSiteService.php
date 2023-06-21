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

use app\dict\site\SiteDict;
use app\model\site\Site;
use core\base\BaseCoreService;
use core\exception\CommonException;

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
     * @param $site_id
     * @return mixed|string
     */
    public function getSiteCache($site_id)
    {
        $cache_name = 'site_info_cache';
        return cache_remember(
            $cache_name . $site_id,
            function() use ($site_id) {
                $where = [
                    [ 'site_id', '=', $site_id ],
                ];
                $site = $this->model->where($where)->field('site_id, app_type,site_name,logo,front_end_name,front_end_logo,group_id, status, expire_time, site_code')->append([ 'status_name' ])->findOrEmpty();
                return $site->toArray();
            },
            self::$cache_tag_name . $site_id
        );
    }

    /**
     * 模型实例
     * @param $site_id
     * @return Site|array|mixed|\think\Model
     */
    public function find($site_id)
    {
        return $this->model->findOrEmpty($site_id);
    }

    /**
     * 获取过期的站点
     * @return void
     */
    public function getExpireSiteList()
    {
        return $this->model->where([
            [ 'status', '<>', SiteDict::EXPIRE ],
            [ 'expire_time', 'between', [ 1, time() ] ],
        ])->field('site_id,status,site_name')->select()->toArray();
    }

    /**
     * 站点到期(计划任务专用,切勿调用)
     * @param $site_id
     * @return bool
     */
    public function expire(int $site_id)
    {
        $site = $this->find($site_id);
        if ($site->isEmpty()) throw new CommonException('SITE_NOT_EXIST');
        if ($site->status == SiteDict::EXPIRE) throw new CommonException('SITE_EXPIRE');
        $this->model->where([ [
            'site_id', '=', $site_id
        ] ])->update(
            [
                'status' => SiteDict::EXPIRE,
            ]
        );
        return true;
    }

    /**
     * 通过站点编号获取站点信息
     * @param $site_code
     * @return mixed|string
     */
    public function getSiteInfoBySiteCode($site_code){
        $cache_name = 'site_id_cache';
        return cache_remember(
            $cache_name . $site_code,
            function() use ($site_code) {
                $site_info = $this->model->where([[
                    'site_code', '=', $site_code
                ]])->findOrEmpty();
                if(!$site_info->isEmpty()){
                    return $site_info->toArray();
                }
                return [];
            }
        );

    }

}