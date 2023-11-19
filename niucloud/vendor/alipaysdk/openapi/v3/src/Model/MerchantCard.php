<?php
/**
 * MerchantCard
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  Alipay\OpenAPISDK
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * 支付宝开放平台API
 *
 * 支付宝开放平台v3协议文档
 *
 * The version of the OpenAPI document: 2023-10-25
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 6.2.1
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Alipay\OpenAPISDK\Model;

use \ArrayAccess;
use \Alipay\OpenAPISDK\ObjectSerializer;

/**
 * MerchantCard Class Doc Comment
 *
 * @category Class
 * @package  Alipay\OpenAPISDK
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class MerchantCard implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'MerchantCard';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'balance' => 'string',
        'bizCardNo' => 'string',
        'customAssets' => 'string',
        'externalCardNo' => 'string',
        'frontImageId' => 'string',
        'frontTextList' => '\Alipay\OpenAPISDK\Model\CardFrontTextDTO[]',
        'level' => 'string',
        'mdcodeInfo' => '\Alipay\OpenAPISDK\Model\MdCodeInfoDTO',
        'openDate' => 'string',
        'point' => 'string',
        'templateId' => 'string',
        'validDate' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'balance' => null,
        'bizCardNo' => null,
        'customAssets' => null,
        'externalCardNo' => null,
        'frontImageId' => null,
        'frontTextList' => null,
        'level' => null,
        'mdcodeInfo' => null,
        'openDate' => null,
        'point' => null,
        'templateId' => null,
        'validDate' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'balance' => 'balance',
        'bizCardNo' => 'biz_card_no',
        'customAssets' => 'custom_assets',
        'externalCardNo' => 'external_card_no',
        'frontImageId' => 'front_image_id',
        'frontTextList' => 'front_text_list',
        'level' => 'level',
        'mdcodeInfo' => 'mdcode_info',
        'openDate' => 'open_date',
        'point' => 'point',
        'templateId' => 'template_id',
        'validDate' => 'valid_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'balance' => 'setBalance',
        'bizCardNo' => 'setBizCardNo',
        'customAssets' => 'setCustomAssets',
        'externalCardNo' => 'setExternalCardNo',
        'frontImageId' => 'setFrontImageId',
        'frontTextList' => 'setFrontTextList',
        'level' => 'setLevel',
        'mdcodeInfo' => 'setMdcodeInfo',
        'openDate' => 'setOpenDate',
        'point' => 'setPoint',
        'templateId' => 'setTemplateId',
        'validDate' => 'setValidDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'balance' => 'getBalance',
        'bizCardNo' => 'getBizCardNo',
        'customAssets' => 'getCustomAssets',
        'externalCardNo' => 'getExternalCardNo',
        'frontImageId' => 'getFrontImageId',
        'frontTextList' => 'getFrontTextList',
        'level' => 'getLevel',
        'mdcodeInfo' => 'getMdcodeInfo',
        'openDate' => 'getOpenDate',
        'point' => 'getPoint',
        'templateId' => 'getTemplateId',
        'validDate' => 'getValidDate'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['balance'] = $data['balance'] ?? null;
        $this->container['bizCardNo'] = $data['bizCardNo'] ?? null;
        $this->container['customAssets'] = $data['customAssets'] ?? null;
        $this->container['externalCardNo'] = $data['externalCardNo'] ?? null;
        $this->container['frontImageId'] = $data['frontImageId'] ?? null;
        $this->container['frontTextList'] = $data['frontTextList'] ?? null;
        $this->container['level'] = $data['level'] ?? null;
        $this->container['mdcodeInfo'] = $data['mdcodeInfo'] ?? null;
        $this->container['openDate'] = $data['openDate'] ?? null;
        $this->container['point'] = $data['point'] ?? null;
        $this->container['templateId'] = $data['templateId'] ?? null;
        $this->container['validDate'] = $data['validDate'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets balance
     *
     * @return string|null
     */
    public function getBalance()
    {
        return $this->container['balance'];
    }

    /**
     * Sets balance
     *
     * @param string|null $balance 资金卡余额，单位：元，精确到小数点后两位。
     *
     * @return self
     */
    public function setBalance($balance)
    {
        $this->container['balance'] = $balance;

        return $this;
    }

    /**
     * Gets bizCardNo
     *
     * @return string|null
     */
    public function getBizCardNo()
    {
        return $this->container['bizCardNo'];
    }

    /**
     * Sets bizCardNo
     *
     * @param string|null $bizCardNo 支付宝业务卡号  说明：  1、开卡成功后返回该参数，需要保存留用；  2、开卡/更新/删卡/查询卡接口请求中不需要传该参数；
     *
     * @return self
     */
    public function setBizCardNo($bizCardNo)
    {
        $this->container['bizCardNo'] = $bizCardNo;

        return $this;
    }

    /**
     * Gets customAssets
     *
     * @return string|null
     */
    public function getCustomAssets()
    {
        return $this->container['customAssets'];
    }

    /**
     * Sets customAssets
     *
     * @param string|null $customAssets 会员卡自定义资产值，只供特定业务使用，通常接入无需关注
     *
     * @return self
     */
    public function setCustomAssets($customAssets)
    {
        $this->container['customAssets'] = $customAssets;

        return $this;
    }

    /**
     * Gets externalCardNo
     *
     * @return string|null
     */
    public function getExternalCardNo()
    {
        return $this->container['externalCardNo'];
    }

    /**
     * Sets externalCardNo
     *
     * @param string|null $externalCardNo 商户外部会员卡卡号  说明：  1、会员卡开卡接口，如果卡类型为外部会员卡，请求中则必须提供该参数；  2、更新、查询、删除等接口，请求中则不需要提供该参数值；
     *
     * @return self
     */
    public function setExternalCardNo($externalCardNo)
    {
        $this->container['externalCardNo'] = $externalCardNo;

        return $this;
    }

    /**
     * Gets frontImageId
     *
     * @return string|null
     */
    public function getFrontImageId()
    {
        return $this->container['frontImageId'];
    }

    /**
     * Sets frontImageId
     *
     * @param string|null $frontImageId 卡面展示图片的图片ID，通过接口（alipay.offline.material.image.upload）上传图片    这里预期展示的是个人照片；  图片说明：1M以内，格式bmp、png、jpeg、jpg、gif；  图片尺寸为230*295px，可等比放大；
     *
     * @return self
     */
    public function setFrontImageId($frontImageId)
    {
        $this->container['frontImageId'] = $frontImageId;

        return $this;
    }

    /**
     * Gets frontTextList
     *
     * @return \Alipay\OpenAPISDK\Model\CardFrontTextDTO[]|null
     */
    public function getFrontTextList()
    {
        return $this->container['frontTextList'];
    }

    /**
     * Sets frontTextList
     *
     * @param \Alipay\OpenAPISDK\Model\CardFrontTextDTO[]|null $frontTextList 卡面文案列表，1项对应1行文案，最多只能传入4行文案；  单行文案展现分为左右两部分，左边对应label字段，右边对应value；  形如： 学院    新闻学院
     *
     * @return self
     */
    public function setFrontTextList($frontTextList)
    {
        $this->container['frontTextList'] = $frontTextList;

        return $this;
    }

    /**
     * Gets level
     *
     * @return string|null
     */
    public function getLevel()
    {
        return $this->container['level'];
    }

    /**
     * Sets level
     *
     * @param string|null $level 会员卡等级（由商户自定义，并可以在卡模板创建时，定义等级信息）
     *
     * @return self
     */
    public function setLevel($level)
    {
        $this->container['level'] = $level;

        return $this;
    }

    /**
     * Gets mdcodeInfo
     *
     * @return \Alipay\OpenAPISDK\Model\MdCodeInfoDTO|null
     */
    public function getMdcodeInfo()
    {
        return $this->container['mdcodeInfo'];
    }

    /**
     * Sets mdcodeInfo
     *
     * @param \Alipay\OpenAPISDK\Model\MdCodeInfoDTO|null $mdcodeInfo mdcodeInfo
     *
     * @return self
     */
    public function setMdcodeInfo($mdcodeInfo)
    {
        $this->container['mdcodeInfo'] = $mdcodeInfo;

        return $this;
    }

    /**
     * Gets openDate
     *
     * @return string|null
     */
    public function getOpenDate()
    {
        return $this->container['openDate'];
    }

    /**
     * Sets openDate
     *
     * @param string|null $openDate 会员卡开卡时间，格式为yyyy-MM-dd  HH:mm:ss。会员卡更新时，该时间不支持修改，请传入调用开卡接口时传入的card_ext_info.open_date时间。
     *
     * @return self
     */
    public function setOpenDate($openDate)
    {
        $this->container['openDate'] = $openDate;

        return $this;
    }

    /**
     * Gets point
     *
     * @return string|null
     */
    public function getPoint()
    {
        return $this->container['point'];
    }

    /**
     * Sets point
     *
     * @param string|null $point 会员卡积分，积分必须为数字型（可为浮点型，带2位小数点）
     *
     * @return self
     */
    public function setPoint($point)
    {
        $this->container['point'] = $point;

        return $this;
    }

    /**
     * Gets templateId
     *
     * @return string|null
     */
    public function getTemplateId()
    {
        return $this->container['templateId'];
    }

    /**
     * Sets templateId
     *
     * @param string|null $templateId 会员卡更换不同的卡模板（该参数仅用在会员卡更新接口中）
     *
     * @return self
     */
    public function setTemplateId($templateId)
    {
        $this->container['templateId'] = $templateId;

        return $this;
    }

    /**
     * Gets validDate
     *
     * @return string|null
     */
    public function getValidDate()
    {
        return $this->container['validDate'];
    }

    /**
     * Sets validDate
     *
     * @param string|null $validDate 会员卡有效期，格式为yyyy-MM-dd  HH:mm:ss。会员卡更新时，该时间不支持修改，请传入调用开卡接口时传入的card_ext_info.valid_date时间。
     *
     * @return self
     */
    public function setValidDate($validDate)
    {
        $this->container['validDate'] = $validDate;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}

