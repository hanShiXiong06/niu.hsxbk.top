<template>
	<u-loading-page :loading="loading" loadingText=""></u-loading-page>
	<view class="account-info-wrap" v-show="!loading">
		<view class="account-info-head"
			:style="{ background: 'url(' + img('static/resource/images/member/balance_bg.png') + ') no-repeat 95% 30% / auto 250rpx, linear-gradient(314deg, #FE7849 0%, #FF1959 100%)'}">
			<view class="name">{{t('balanceInfo')}}</view>
			<view class="content">
				<view class="money">
					{{ memberStore.info ? moneyFormat((parseFloat(memberStore.info.balance) + parseFloat(memberStore.info.money)).toString()) : '0.00' }}
				</view>
				<view class="text">{{t('accountBalance')}}</view>
				<view class="money-wrap">
					<view class="money-item"
						@click="redirect({ url: '/app/pages/member/detailed_account', param: { type : 'balance' } })">
						<view class="money">
							{{ moneyFormat(memberStore.info?.balance)|| '0.00' }}
						</view>
						<view class="text leading-none">{{ t('balance') }}</view>
					</view>
					<view class="money-item"
						@click="redirect({ url: '/app/pages/member/detailed_account', param: { type : 'money' } })">
						<view class="money">
							{{ moneyFormat(memberStore.info?.money)|| '0.00' }}
						</view>
						<view class="text leading-none">{{ t('money') }}</view>
					</view>
				</view>
			</view>
		</view>

		<view class="account-info-btn">
			<!-- <u-button type="primary" shape="circle" class="btn"
				:customStyle="{backgroundColor: '#FE4E50',color: '#fff', borderColor: '#FE4E50',width: 'calc(100vw - 64rpx)'}"
				@click="topUpFn">
				<image class="max-w-[36rpx] max-h-[36rpx] mr-1" :src="img('static/resource/images/member/reset.png')"/>
				<text>{{t('recharge')}}</text>
			</u-button> -->
			<u-button v-if="cashOutConfigObj.is_open == 1" type="primary" :plain="true" shape="circle" class="btn"
				:customStyle="{backgroundColor: '#fff',color: '#FE4E50', borderColor: '#FE4E50',width: 'calc(100vw - 64rpx)'}"
				@click="applyCashOut">
				<image class="max-w-[36rpx] max-h-[36rpx] mr-1"
					:src="img('static/resource/images/member/withdraw_deposit.png')" />
				<text>{{t('cashOut')}}</text>
			</u-button>
		</view>

		<pay ref="payRef" @close="rechargeLoading = false"></pay>
	</view>
</template>

<script setup lang="ts">
	import { ref, reactive } from 'vue'
	import { t } from '@/locale'
	import { moneyFormat, redirect, img } from '@/utils/common';
	import { cashOutConfig } from '@/app/api/member';
	import { onShow } from '@dcloudio/uni-app';
	import useMemberStore from '@/stores/member'

	const memberStore = useMemberStore();

	const rechargeLoading = ref(false)

	const payRef = ref(null)

	const cashOutConfigObj = reactive({
		is_auto_transfer: 0, // 是否自动转账
		is_auto_verify: 0, // 是否自动审核
		is_open: 0, // 是否启用提现
		min: 0, // 最低提现金额
		rate: 0, // 手续费比率
		transfer_type: [] // 提现方式
	})

	const loading = ref(true);

	onShow(() => {
		// h5端检测是否是支付后返回 支付组件必须调用
		// #ifdef H5
		uni.$emit('checkIsReturnAfterPayment')
		// #endif

		cashOutConfig().then((res) => {
			for (let key in res.data) {
				cashOutConfigObj[key] = res.data[key];
			}
			loading.value = false;
		})
	})

	const applyCashOut = () => {
		uni.setStorageSync('cashOutAccountType', 'money')
		redirect({ url: '/app/pages/member/apply_cash_out' })
	}
</script>

<style lang="scss" scoped>
	@import '@/app/styles/account_info.scss';
</style>