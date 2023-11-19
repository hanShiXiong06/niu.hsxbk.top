<?php
/**
 * UpdatedAuthenticationDetails
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
 * UpdatedAuthenticationDetails Class Doc Comment
 *
 * @category Class
 * @package  Alipay\OpenAPISDK
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class UpdatedAuthenticationDetails implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'UpdatedAuthenticationDetails';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'authenticationMechanisms' => 'string[]',
        'nonce' => 'string',
        'partialTransactionDetailsSignature' => 'string',
        'pinFormat' => 'string',
        'signingKeyMaterial' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'authenticationMechanisms' => null,
        'nonce' => null,
        'partialTransactionDetailsSignature' => null,
        'pinFormat' => null,
        'signingKeyMaterial' => null
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
        'authenticationMechanisms' => 'authentication_mechanisms',
        'nonce' => 'nonce',
        'partialTransactionDetailsSignature' => 'partial_transaction_details_signature',
        'pinFormat' => 'pin_format',
        'signingKeyMaterial' => 'signing_key_material'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'authenticationMechanisms' => 'setAuthenticationMechanisms',
        'nonce' => 'setNonce',
        'partialTransactionDetailsSignature' => 'setPartialTransactionDetailsSignature',
        'pinFormat' => 'setPinFormat',
        'signingKeyMaterial' => 'setSigningKeyMaterial'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'authenticationMechanisms' => 'getAuthenticationMechanisms',
        'nonce' => 'getNonce',
        'partialTransactionDetailsSignature' => 'getPartialTransactionDetailsSignature',
        'pinFormat' => 'getPinFormat',
        'signingKeyMaterial' => 'getSigningKeyMaterial'
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
        $this->container['authenticationMechanisms'] = $data['authenticationMechanisms'] ?? null;
        $this->container['nonce'] = $data['nonce'] ?? null;
        $this->container['partialTransactionDetailsSignature'] = $data['partialTransactionDetailsSignature'] ?? null;
        $this->container['pinFormat'] = $data['pinFormat'] ?? null;
        $this->container['signingKeyMaterial'] = $data['signingKeyMaterial'] ?? null;
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
     * Gets authenticationMechanisms
     *
     * @return string[]|null
     */
    public function getAuthenticationMechanisms()
    {
        return $this->container['authenticationMechanisms'];
    }

    /**
     * Sets authenticationMechanisms
     *
     * @param string[]|null $authenticationMechanisms 鉴权机制
     *
     * @return self
     */
    public function setAuthenticationMechanisms($authenticationMechanisms)
    {
        $this->container['authenticationMechanisms'] = $authenticationMechanisms;

        return $this;
    }

    /**
     * Gets nonce
     *
     * @return string|null
     */
    public function getNonce()
    {
        return $this->container['nonce'];
    }

    /**
     * Sets nonce
     *
     * @param string|null $nonce 随机数
     *
     * @return self
     */
    public function setNonce($nonce)
    {
        $this->container['nonce'] = $nonce;

        return $this;
    }

    /**
     * Gets partialTransactionDetailsSignature
     *
     * @return string|null
     */
    public function getPartialTransactionDetailsSignature()
    {
        return $this->container['partialTransactionDetailsSignature'];
    }

    /**
     * Sets partialTransactionDetailsSignature
     *
     * @param string|null $partialTransactionDetailsSignature 交易签名信息
     *
     * @return self
     */
    public function setPartialTransactionDetailsSignature($partialTransactionDetailsSignature)
    {
        $this->container['partialTransactionDetailsSignature'] = $partialTransactionDetailsSignature;

        return $this;
    }

    /**
     * Gets pinFormat
     *
     * @return string|null
     */
    public function getPinFormat()
    {
        return $this->container['pinFormat'];
    }

    /**
     * Sets pinFormat
     *
     * @param string|null $pinFormat 6位密码或者长密码
     *
     * @return self
     */
    public function setPinFormat($pinFormat)
    {
        $this->container['pinFormat'] = $pinFormat;

        return $this;
    }

    /**
     * Gets signingKeyMaterial
     *
     * @return string|null
     */
    public function getSigningKeyMaterial()
    {
        return $this->container['signingKeyMaterial'];
    }

    /**
     * Sets signingKeyMaterial
     *
     * @param string|null $signingKeyMaterial 签名秘钥
     *
     * @return self
     */
    public function setSigningKeyMaterial($signingKeyMaterial)
    {
        $this->container['signingKeyMaterial'] = $signingKeyMaterial;

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

