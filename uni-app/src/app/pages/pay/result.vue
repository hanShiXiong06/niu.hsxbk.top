<template>
    <view class="w-screen bg-[#fff] flex flex-col items-center" v-if="payInfo">
        <view class="flex-1 flex flex-col items-center w-full pt-[100rpx]">
			<image v-if="payInfo.status==2" class="max-w-[144rpx] max-h-[88rpx]" :src="img('static/resource/images/result/pay_succeed.png')"/>
			<image v-else class="max-w-[144rpx] max-h-[88rpx]" :src="img('static/resource/images/result/pay_error.png')"/>
            <view class=" text-[32rpx] font-bold mt-[22rpx]">{{ payInfo.status == 2 ? t('pay.paySuccess') : t('pay.payFail') }}</view>
            <view class="text-[40rpx] font-bold mt-[40rpx] text-[#FF4646]">
                <text class="text-base">{{ t('currency') }}</text>
                <text>{{ moneyFormat(payInfo.money) }}</text>
            </view>
        </view>
        <view class="pb-[80rpx] pt-[40rpx] w-[240rpx]">
            <u-button type="primary" :text="payInfo.status == 2 ? t('complete') : t('close')"
                :plain="true" @click="complete"></u-button>
        </view>
    </view>
    <u-modal :show="loading" :showCancelButton="true" :confirmText="t('pay.completePay')"
        :cancelText="t('pay.incompletePay')" @cancel="complete">
        <view class="py-[20rpx]">
            <u-loading-icon :text="t('pay.getting')" textSize="16" mode="circle" :vertical="true"></u-loading-icon>
        </view>
    </u-modal>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { onLoad } from '@dcloudio/uni-app'
    import { getPayInfo as getPayInfoApi } from '@/app/api/pay'
    import { t } from '@/locale'
    import { redirect, img, moneyFormat } from '@/utils/common'
    import { getFirstPage } from '@/utils/pages'

    const payInfo = ref<AnyObject | null>(null)
    const loading = ref(false)
    let tradeType = ''
    let tradeId = 0
    let requestNum = 0

    onLoad((data : any) => {
        tradeType = data.trade_type
        tradeId = data.trade_id
        getPayInfo()
    })

    /**
     * 获取支付信息
     */
    const getPayInfo = () => {
        getPayInfoApi(tradeType, tradeId)
            .then((res : responseResult) => {
                if (!uni.$u.test.isEmpty(res.data)) {
                    if (res.data.status == 1 && requestNum < 5) {
                        loading.value = true
                        requestNum++
                        setTimeout(() => {
                            getPayInfo()
                        }, 1000)
                        return
                    }
                    payInfo.value = res.data
                    loading.value = false
                    uni.setNavigationBarTitle({
                        title: payInfo.value.status == 2 ? t('pay.paySuccess') : t('pay.payFail')
                    })
                }
            }).catch(() => {

            })
    }

    const complete = () => {
        const payReturn = decodeURIComponent(uni.getStorageSync('payReturn'))
        if (payReturn) redirect({ url: payReturn, mode: 'redirectTo' })
        else redirect({ url: getFirstPage(), param: { code: payInfo.value?.out_trade_no }, mode: 'redirectTo' })
    }
</script>

<style lang="scss" scoped>
	body{
		background-color: #F7F7F7;
	}
</style>