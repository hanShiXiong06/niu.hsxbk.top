<template>
	<view v-if="showPop">
		<view class="privacy-mask">
			<view class="privacy-wrap">
				<view class="privacy-title">{{ t('wxPrivacyPopup.title') }}</view>
				<view class="privacy-desc">
					<text>{{ t('wxPrivacyPopup.descBefore')}}</text>
					<text class="privacy-link" @tap="openPrivacyContract">{{privacyContractName}}</text>，
					<text>{{ t('wxPrivacyPopup.descAfter') }}</text>
				</view>
				<view class="privacy-button-flex">
					<button class="privacy-button-btn bg-disagree"
						@tap="handleDisagree">{{ t('wxPrivacyPopup.disagree') }}</button>
					<button id="agree-btn" class="privacy-button-btn bg-agree" open-type="agreePrivacyAuthorization"
						@agreeprivacyauthorization="handleAgree">
						{{ t('wxPrivacyPopup.agree') }}
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { ref, reactive, computed, onMounted } from 'vue'
	import { t } from '@/locale'

	const emit = defineEmits(['agree', 'disagree'])

	const agree = ref(false)
	const showPop = ref(false)
	const privacyAuthorization = ref(null)
	const privacyContractName = ref(t('wxPrivacyPopup.contractName'))

	// 监听何时需要提示用户阅读隐私政策
	const init = () => {
		if (wx.onNeedPrivacyAuthorization) {
			wx.onNeedPrivacyAuthorization((resolve) => {
				if (typeof privacyAuthorization.value === 'function') {
					privacyAuthorization.value(resolve)
				}
			})
		}
	}

	// 初始化监听程序
	const curPageShow = () => {
		privacyAuthorization.value = resolve => {
			// 打开弹窗
			popUp()
		}
	}

	const proactive = () => {
		if (wx.getPrivacySetting) {
			wx.getPrivacySetting({
				success: (res) => {
					// console.log(res)
					if (res.needAuthorization) {
						popUp()
					} else {
						emit('agree')
					}
				},
			});
		} else {
			emit('agree')
		}
	}

	//打开隐私协议
	const openPrivacyContract = () => {
		wx.openPrivacyContract({
			success(res) {
				// console.log('打开隐私协议', res);
			},
			fail(err) {
				// console.error('打开隐私协议失败', err)
			}
		});
	}

	// 不同意
	const handleDisagree = () => {

		// 关闭弹窗
		disPopUp()

		// 退出小程序
		uni.showModal({
			content: t('wxPrivacyPopup.disagreeDesc'),
			success: () => {
				emit('disagree')
			}
		})
	}

	// 同意并继续
	const handleAgree = () => {
		//关闭弹窗
		disPopUp()
		emit('agree')
	}

	//打开弹窗
	const popUp = () => {
		if (showPop.value === false) {
			showPop.value = true
		}
	}

	//关闭弹窗
	const disPopUp = () => {
		if (showPop.value === true) {
			showPop.value = false
		}
	}

	onMounted(() => {
		try {
			wx.getPrivacySetting({
				success(res) {
					// console.log('隐私政策信息', res);
					// console.log(res.privacyContractName);
					privacyContractName.value = res.privacyContractName
				}
			});
			init();
			curPageShow();
		} catch (e) {
			// console.log("=========低版本基础库==========", e)
		}

	})
</script>

<style lang="scss" scoped>
	.privacy-mask {
		position: fixed;
		z-index: 5000;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.privacy-wrap {
		width: 632rpx;
		padding: 48rpx 30rpx;
		box-sizing: border-box;
		background: #fff;
		border-radius: 16rpx;
	}

	.privacy-title {
		padding: 0rpx 30rpx 40rpx 30rpx;
		font-weight: 700;
		font-size: 36rpx;
		text-align: center;
	}

	.privacy-desc {
		font-size: 30rpx;
		color: #555;
		line-height: 2;
		text-align: left;
		padding: 0 40rpx;
	}

	.privacy-link {
		color: #2f80ed;
	}

	.privacy-button-flex {
		display: flex;
		padding: 20rpx 40rpx;
	}

	.privacy-button-btn {
		color: #FFF;
		font-size: 30rpx;
		font-weight: 500;
		line-height: 100rpx;
		text-align: center;
		height: 100rpx;
		border-radius: 20rpx;
		border: none;
		background: #07c160;
		flex: 1;
		margin-right: 30rpx;
		justify-content: center;
	}

	.privacy-button-btn::after {
		border: none;
	}

	.bg-disagree {
		color: #07c160;
		background: #f2f2f2;
	}

	.bg-agree {
		margin-right: 0rpx;
	}
</style>