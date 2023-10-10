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

namespace app\model\member;

use core\base\BaseModel;

/**
 * 会员收货地址模型
 * Class Address
 * @package app\model\address
 */
class Address extends BaseModel
{
    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'member_address';

    /**
     * 搜索器:会员收货地址
     * @param $value
     * @param $data
     */
    public function searchIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("id", $value);
        }
    }

    /**
     * 搜索器:会员收货地址会员id
     * @param $value
     * @param $data
     */
    public function searchMemberIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("member_id", $value);
        }
    }

    /**
     * 搜索器:会员收货地址用户姓名
     * @param $value
     * @param $data
     */
    public function searchNameAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("name", $value);
        }
    }

    /**
     * 搜索器:会员收货地址手机
     * @param $value
     * @param $data
     */
    public function searchMobileAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("mobile", $value);
        }
    }

    /**
     * 搜索器:会员收货地址省id
     * @param $value
     * @param $data
     */
    public function searchProvinceIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("province_id", $value);
        }
    }

    /**
     * 搜索器:会员收货地址市id
     * @param $value
     * @param $data
     */
    public function searchCityIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("city_id", $value);
        }
    }

    /**
     * 搜索器:会员收货地址区县id
     * @param $value
     * @param $data
     */
    public function searchDistrictIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("district_id", $value);
        }
    }

    /**
     * 搜索器:会员收货地址地址信息
     * @param $value
     * @param $data
     */
    public function searchAddressAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("address", $value);
        }
    }

    /**
     * 搜索器:会员收货地址详细地址信息
     * @param $value
     * @param $data
     */
    public function searchFullAddressAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("full_address", $value);
        }
    }

    /**
     * 搜索器:会员收货地址经度
     * @param $value
     * @param $data
     */
    public function searchLngAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("lng", $value);
        }
    }

    /**
     * 搜索器:会员收货地址纬度
     * @param $value
     * @param $data
     */
    public function searchLatAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("lat", $value);
        }
    }

    /**
     * 搜索器:会员收货地址是否是默认地址
     * @param $value
     * @param $data
     */
    public function searchIsDefaultAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("is_default", $value);
        }
    }

    /**
     * 搜索器:会员收货地址地址类型  1 普通地址  2 定位地址
     * @param $value
     * @param $data
     */
    public function searchTypeAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("type", $value);
        }
    }

}
