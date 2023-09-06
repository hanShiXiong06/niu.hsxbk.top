<?php

namespace core\util\niucloud;


use core\util\niucloud\http\HasHttpRequests;

/**
 * niucloud云服务
 */
class CloudService
{
    use HasHttpRequests;

    private $baseUri = 'http://8.140.96.55:8888/';

    public function httpPost(string $url, array $options = []) {
        return $this->toRequest($url, 'POST', $options);
    }

    public function httpGet(string $url, array $options = []) {
        return $this->toRequest($url, 'GET', $options);
    }
}
