<template>
    <scroll-view scroll-y="true" v-if="!loading">
        <view class="border-0 !border-b !border-[#eee] border-solid">
            <u-tabs :list="tabs" @click="switchTab" :current="current" itemStyle="width:50%;height:88rpx;box-sizing: border-box;"></u-tabs>
        </view>
        <view class="p-[30rpx]" v-show="current == 0">
            <view v-for="item in addressList" class="border-0 !border-b !border-[#f5f5f5] border-solid pb-[30rpx] flex items-center">
                <view class="flex-1">
                    <view class="text-xs text-gray-subtitle">{{ item.full_address.replace(item.address, '') }}</view>
                    <view class="font-bold my-[10rpx]">{{ item.address }}</view>
                    <view class="text-sm">{{ item.name }} <text class="text-[26rpx] text-gray-subtitle">{{ mobileHide(item.mobile) }}</text></view>
                </view>
                <text class="iconfont iconbianji" @click="editAddress(item.id)"></text>
            </view>
            <view v-if="!addressList.length" class="pt-[20vh]">
                <u-empty mode="address" :icon="img('/static/resource/images/empty.png')"/>
            </view>
        </view>
        <view class="p-[30rpx]" v-show="current == 1">
            <view v-for="item in locationAddressList" class="border-0 !border-b !border-[#f5f5f5] border-solid pb-[30rpx] flex items-center">
                <view class="flex-1">
                    <view class="text-xs text-gray-subtitle">{{ item.full_address.replace(item.address, '') }}</view>
                    <view class="font-bold my-[10rpx]">{{ item.address }}</view>
                    <view class="text-sm">{{ item.name }} <text class="text-[26rpx] text-gray-subtitle">{{ mobileHide(item.mobile) }}</text></view>
                </view>
                <text class="iconfont iconbianji" @click="editAddress(item.id)"></text>
            </view>
            <view v-if="!locationAddressList.length" class="pt-[15vh]">
                <u-empty mode="address" :icon="img('/static/resource/images/empty.png')"/>
            </view>
        </view>
        <u-tabbar :fixed="true" :safeAreaInsetBottom="true" :border="false">
            <view class="p-[24rpx] pt-0 w-full">
                <u-button type="primary" shape="circle" :text="t('createAddress')" @click="addAddress"></u-button>
            </view>
        </u-tabbar>
    </scroll-view>
</template>

<script setup lang="ts">
    import { ref, reactive, computed, watch } from 'vue'
    import { redirect, img } from '@/utils/common'
    import { getAddressList } from '@/app/api/member'
    import { t } from '@/locale'
    
    const loading = ref(true)
    const current = ref(0)
    const tabs = ref([
        { name: t('address'), key: 'address' },
        { name: t('locationAddress'), key: 'location_address' }
    ])
    const addressList = ref<object[]>([])
    const locationAddressList = ref<object[]>([])
    
    getAddressList({})
        .then(({ data }) => {
            const address = [], locationAddress = []
            data.forEach(item => { 
                item.type == 'address' ? address.push(item) : locationAddress.push(item)
            })
            addressList.value = address
            locationAddressList.value = locationAddress
            loading.value = false
        })
        .catch(() => {
            loading.value = false
        })
    
    const switchTab = (event)=> {
        current.value = event.index
    }
    
    const addAddress = ()=> {
        const url = `/app/pages/member/${tabs.value[ current.value ].key}_edit`
        redirect({ url })
    }
    
    const editAddress = (id: number)=> {
        const url = `/app/pages/member/${tabs.value[ current.value ].key}_edit`
        redirect({ url, param: { id } })
    }
    
    const mobileHide = (mobile: string) => {
        return mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    }
</script>

<style lang="scss" scoped>
    :deep(.u-tabs__wrapper__nav__line) {
        bottom: 0;
    }
</style>