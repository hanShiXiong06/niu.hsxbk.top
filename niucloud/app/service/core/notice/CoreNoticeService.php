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

namespace app\service\core\notice;


use app\dict\notice\NoticeDict;
use app\model\sys\SysNotice;
use core\base\BaseCoreService;
use core\exception\NoticeException;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;


/**
 * 短信配置服务层
 * Class SmsService
 * @package app\service\admin\message
 */
class CoreNoticeService extends BaseCoreService
{

    public function __construct()
    {
        parent::__construct();
        $this->model = new SysNotice();
    }


    /**
     * 获取当前站点消息
     * @param array $keys
     * @return array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function getList(array $keys = [])
    {
        $list = $this->model->select()->toArray();
        if (!empty($list)) {
            $list_key = array_column($list, 'key');
            $list = array_combine($list_key, $list);
        }
        $notice = NoticeDict::getNotice();
        foreach ($notice as $k => $v) {
            if (!empty($keys) && !in_array($v[ 'key' ], $keys)) {
                unset($notice[ $k ]);
                continue;
            }
            if (array_key_exists($k, $list)) {
                $notice[ $k ] = array_merge($v, $list[ $k ]);
            } else {
                $data = [
                    'sms_content' => '',
                    'is_wechat' => 0,
                    'is_weapp' => 0,
                    'is_sms' => 0,
                    'wechat_template_id' => '',
                    'weapp_template_id' => '',
                    'sms_id' => '',
                    'wechat_first' => '',
                    'wechat_remark' => ''
                ];
                $notice[ $k ] = array_merge($v, $data);
            }
        }
        return $notice;
    }

    /**
     * 获取消息内容(可以做缓存)
     * @param string $key
     * @return array
     */
    public function getInfo(string $key)
    {
        if (!array_key_exists($key, NoticeDict::getNotice())) throw new NoticeException('NOTICE_TYPE_NOT_EXIST');
        $info = $this->model->where([ [ 'key', '=', $key ] ])->findOrEmpty()->toArray();
        if (!empty($info)) {
            $notice = array_merge(NoticeDict::getNotice($key), $info);
        } else {
            $data = [
                'sms_content' => '',
                'is_wechat' => 0,
                'is_weapp' => 0,
                'is_sms' => 0,
                'wechat_template_id' => '',
                'weapp_template_id' => '',
                'sms_id' => '',
                'wechat_first' => '',
                'wechat_remark' => ''
            ];
            $notice = array_merge(NoticeDict::getNotice($key), $data);

        }
        return $notice;
    }

    public function find(string $key)
    {
        return $this->model->where([ [ 'key', '=', $key ] ])->findOrEmpty();
    }

    /**
     * 消息公共编辑
     * @param string $key
     * @param array $data
     * @return bool
     */
    public function edit(string $key, array $data)
    {
        $notice = $this->find($key);
        if ($notice->isEmpty()) {
            $notice_template = NoticeDict::getNotice($key);
            $wechat = $notice_template[ 'wechat' ] ?? [];
            $this->model->create(array_merge([
                'key' => $key,
                'sms_content' => $notice_template[ 'sms_default_content' ] ?? '',
                'wechat_first' => $data[ 'wechat_first' ] ?? ( $wechat[ 'first' ] ?? '' ),
                'wechat_remark' => $data[ 'wechat_remark' ] ?? ( $wechat[ 'remark' ] ?? '' ),
            ], $data));
        } else {
            $notice->save($data);
        }
        return true;

    }

}