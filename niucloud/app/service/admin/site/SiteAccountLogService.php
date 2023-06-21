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

namespace app\service\admin\site;

use app\dict\sys\AppTypeDict;
use app\model\site\Site;
use app\model\site\SiteAccountLog;
use app\service\admin\sys\MenuService;
use app\service\admin\user\UserService;
use core\base\BaseAdminService;
use core\exception\AdminException;
use Exception;
use think\facade\Cache;
use think\facade\Db;

/**
 * 站点账单服务层
 * Class SiteAccountLogService
 * @package app\service\admin\site
 */
class SiteAccountLogService extends BaseAdminService
{

    public function __construct()
    {
        parent::__construct();
        $this->model = new SiteAccountLog();
    }

    /**
     * 获取账单列表
     * @param array $where
     * @param string $order
     * @return mixed
     */
    public function getPage(array $where = [])
    {

        $field = 'id, site_id, type, money, trade_no, create_time';
        $search_model = $this->model->where([ [ 'site_id', '=', $this->site_id ] ])->withSearch([ 'create_time', 'type' ], $where)->field($field)->append([ 'type_name', 'pay_info', 'money' ])->order('create_time desc');
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取账单详情
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id, site_id, type, money, trade_no, create_time';
        return $this->model->where([ [ 'site_id', '=', $this->site_id ], ['id', '=', $id]])->field($field)->append([ 'type_name', 'pay_info' ])->findOrEmpty()->toArray();

    }

    /**
     * 统计数据
     * @return array
     */
    public function stat()
    {
        return [
            'pay' => $this->model->where([[ 'site_id', '=', $this->site_id ], ['type', '=', 'pay']])->sum("money")*1,
            'refund' => $this->model->where([[ 'site_id', '=', $this->site_id ], ['type', '=', 'refund']])->sum("money")*-1,
            'transfer' => $this->model->where([[ 'site_id', '=', $this->site_id ], ['type', '=', 'transfer']])->sum("money")*-1,
        ];
    }

}