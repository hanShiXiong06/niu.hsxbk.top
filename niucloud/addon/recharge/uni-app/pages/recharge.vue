<template>
	<u-loading-page :loading="loading" loadingText=""></u-loading-page>
	<view class="account-info-wrap overflow-hidden" v-show="!loading">
		<view class="mx-[24rpx] mt-[30rpx] px-3 pb-4 pt-7 box-border bg-[#fff] rounded-lg">
			<u--input :placeholder="t('rechargeAmountPlaceholder')" v-model="rechargeAmount" border="bottom"
			          type="number" clearable>
			</u--input>
			<view class="top-up-wrap flex flex-wrap justify-around mt-3">
				<view v-for="(item,index) in rechargePackage" :key="index"
				      :class="['top-up-item w-22 box-border border-1 text-center rounded mt-2 py-3 px-4 border-gray-400 border-solid',{'border-primary text-primary':rechargeAmount == item}]"
				      @click="rechargeAmount = item">
					<text>{{item}}{{t('yuan')}}</text>
				</view>
			</view>
			<view class="mt-5 px-2">
				<u-button type="primary" shape="circle" :loading="rechargeLoading" :text="t('clickRecharge')"
				          @click="recharge"></u-button>
			</view>
			<view class="mt-[20rpx] text-center text-sm" @click="redirect({ url: '/recharge/pages/recharge_record' })">
				{{t('rechargeRecord')}}
			</view>
		</view>
		<pay ref="payRef" @close="rechargeLoading = false"></pay>
	</view>
</template>

<script setup lang="ts">
    import {ref, reactive} from 'vue'
    import {t} from '@/locale'
    import {moneyFormat, redirect, img} from '@/utils/common';
    import {createRecharge} from '@/recharge/api/recharge';

    const rechargePackage = ref([20, 30, 50, 100, 200, 300])
    const rechargeAmount = ref<string | number>("");
    const rechargeLoading = ref(false)
    const payRef = ref(null)
    const loading = ref(false);

    /**
     * 发起充值
     */
    const recharge = () => {
        if (uni.$u.test.isEmpty(rechargeAmount.value)) {
            uni.showToast({title: t('rechargeAmountPlaceholder'), icon: 'none'})
            return
        }
        if (!uni.$u.test.amount(rechargeAmount.value) || rechargeAmount.value <= 0) {
            uni.showToast({title: t('rechargeAmountError'), icon: 'none'})
            return
        }
        if (rechargeLoading.value) return
        rechargeLoading.value = true

        createRecharge({recharge_money: rechargeAmount.value}).then(res => {
            payRef.value?.open(res.data.trade_type, res.data.trade_id)
            loading.value = false
            rechargeLoading.value = false
        }).catch(() => {
            rechargeLoading.value = false
            loading.value = false
        })
    }
</script>

<style lang="scss" scoped>
	@import '@/app/styles/account_info.scss';
</style>