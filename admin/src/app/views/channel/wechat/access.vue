<template>
    <!-- <div class="w-full p-5 bg-white">
        <div class="flex justify-between items-center mb-[20px]">
            <span class="text-[16px]">{{ t('wechatAccessFlow') }}</span>
        </div>
        <div>
            <ul class="progress-wrap flex items-center text-center min-h-[120px]">
                <li class="progress-point ">
                    <div
                        class="progress-point-pic list-none inline-block w-[30px] h-[30px] leading-[30px] text-center mt-[10px] mb-[20px]">
                        <img class="max-w-[100%] max-h-[100%]" src="@/app/assets/images/register.png" alt="">
                    </div>
                    <p class=" text-[14px]">{{ t('wechatAttestation') }}</p>
					<el-button link type="primary" @click="linkEvent('https://mp.weixin.qq.com/')">{{ t('clickAccess') }}</el-button>
                </li>

                <li class="progress-point-arrow list-none">
                    <img src="@/app/assets/images/arrow.png" alt="">
                </li>
                <li class="progress-point ">
                    <div
                        class="progress-point-pic list-none inline-block w-[30px] h-[30px] leading-[30px] text-center mt-[10px] mb-[20px]">
                        <img class="max-w-[100%] max-h-[100%]" src="@/app/assets/images/config_info.png" alt="">
                    </div>
                    <p class=" text-[14px]" >{{ t('wechatSetting') }}</p>
					<el-button link type="primary" @click="router.push('/website/channel/wechat/config')">{{ t('settingInfo') }}</el-button>
                </li>

                <li class="progress-point-arrow list-none">
                    <img src="@/app/assets/images/arrow.png" alt="">
                </li>
                <li class="progress-point ">
                    <div
                        class="progress-point-pic list-none inline-block w-[30px] h-[30px] leading-[30px] text-center mt-[10px] mb-[20px]">
                        <img class="max-w-[100%] max-h-[100%]" src="@/app/assets/images/public_number.png" alt="">
                    </div>
                    <p class=" text-[14px]">{{ t('wechatAccess') }}</p>
					<el-button link type="primary" @click="router.push('/website/channel/wechat/course')">{{ t('releaseCourse') }}</el-button>
                </li>

                <li class="progress-point-arrow list-none">
                    <img src="@/app/assets/images/arrow.png" alt="">
                </li>
                <li class="progress-point ">
                    <div
                        class="progress-point-pic list-none inline-block w-[30px] h-[30px] leading-[30px] text-center mt-[10px] mb-[20px]">
                        <img class="max-w-[100%] max-h-[100%]" src="@/app/assets/images/complete.png" alt="">
                    </div>
                    <p class=" text-[14px]">{{ t('completeAccess') }}</p>
                </li>
            </ul>
        </div>
      
        <div class="flex justify-between items-center mt-[40px]">
            <span class="text-[16px]">{{ t('wechatInlet') }}</span>
        </div>
        <div class="flex flex-wrap p-5">
            <div class="w-[280px] h-[70px] flex bg-[#f7f8fa] items-center my-[20px] mr-[20px] cursor-pointer" @click="router.push('/website/channel/wechat/config')">
                <img class="w-[40px] h-[40px] mr-[10px] ml-[20px]" src="@/app/assets/images/wechat_icon.png" alt="">
                <div class="flex flex-col h-[40px] justify-around">
                    <p class="text-[#666] text-[14px]">{{ t('wechatSet') }}</p>
                    <p class="text-[#999] text-[12px]">{{ t('wechatSet') }}</p>
                </div>
            </div>
            <div class="w-[280px] h-[70px] flex bg-[#f7f8fa] items-center my-[20px] mr-[20px] cursor-pointer" @click="router.push('/website/channel/wechat/menu')">
                <img class="w-[40px] h-[40px] mr-[10px] ml-[20px]" src="@/app/assets/images/wechat_icon.png" alt="">
                <div class="flex flex-col h-[40px] justify-around">
                    <p class="text-[#666] text-[14px]">{{ t('customMenu') }}</p>
                    <p class="text-[#999] text-[12px]">{{ t('customMenu') }}</p>
                </div>
            </div>
            <div class="w-[280px] h-[70px] flex bg-[#f7f8fa] items-center my-[20px] mr-[20px] cursor-pointer" @click="router.push('/website/channel/wechat/message')">
                <img class="w-[40px] h-[40px] mr-[10px] ml-[20px]" src="@/app/assets/images/wechat_icon.png" alt="">
                <div class="flex flex-col h-[40px] justify-around">
                    <p class="text-[#666] text-[14px]">{{ t('wechatTemplate') }}</p>
                    <p class="text-[#999] text-[12px]">{{ t('wechatTemplate') }}</p>
                </div>
            </div>
            
        </div>

    </div> -->
    <div class="w-full p-5 bg-white">
        <div class="flex justify-between items-center mb-[20px]">
            <span class="text-[20px]">{{ t('title') }}</span>
        </div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleClick">
            <el-tab-pane :label="t('wechatAccessFlow')" name="/website/channel/wechat" />
            <el-tab-pane :label="t('customMenu')" name="/website/channel/wechat/menu" />
            <el-tab-pane :label="t('wechatTemplate')" name="/website/channel/wechat/message" />
        </el-tabs>
        <div class="p-[20px]">
            <p class="text-[16px] mb-[20px]">{{ t("wechatInlet") }}</p>
            <el-row>
                <el-col :span="20">
                    <el-steps direction="vertical">
                        <el-step>
                            <template #icon v-if="active > 1">
                                <el-icon size="25px" class="text-color">
                                    <CircleCheckFilled />
                                </el-icon>
                            </template>
                            <template #icon v-else-if="active == 1">
                                <div class="w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center">
                                    <div class="h-[12px] w-[12px] bg-color rounded-full"></div>
                                </div>
                            </template>
                            <template #icon v-else>
                                <div class="w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full">1</div>
                            </template>
                            <template #title>
                                <p class=" text-[14px] text-[#303133] font-[700]">
                                    {{ t("wechatAttestation") }}
                                </p>
                            </template>
                            <template #description>
                                <span class="text-[#999]">{{ t("wechatAttestation1") }}</span>
                                <div class="mt-[20px] mb-[40px] h-[32px]">
                                    <el-button type="primary" @click="linkEvent('https://mp.weixin.qq.com/')">{{t("clickAccess") }}</el-button>
                                </div>
                            </template>
                        </el-step>
                        <el-step>
                            <template #icon v-if="active > 2">
                                <el-icon size="25px">
                                    <CircleCheckFilled />
                                </el-icon>
                            </template>
                            <template #icon v-else-if="active == 2">
                                <div class="w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center">
                                    <div class="h-[12px] w-[12px] bg-color rounded-full"></div>
                                </div>
                            </template>
                            <template #icon v-else>
                                <div class="w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full">2</div>
                            </template>
                            <template #title>
                                <p class=" text-[14px] text-[#303133] font-[700]">
                                    {{ t("wechatSetting") }}
                                </p>
                            </template>
                            <template #description>
                                <span class="text-[#999]">{{ t("wechatSetting1") }}</span>
                                <div class="mt-[20px] mb-[40px] h-[32px]">
                                    <el-button type="primary" plain
                                        @click="router.push('/website/channel/wechat/config')">{{t("settingInfo") }}</el-button>
                                </div>
                            </template>
                        </el-step>
                        <el-step>
                            <template #icon v-if="active > 3">
                                <el-icon size="25px">
                                    <CircleCheckFilled />
                                </el-icon>
                            </template>
                            <template #icon v-else-if="active == 3">
                                <div class="w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center">
                                    <div class="h-[12px] w-[12px] bg-color rounded-full"></div>
                                </div>
                            </template>
                            <template #icon v-else>
                                <div class="w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full">3</div>
                            </template>
                            <template #title>
                                <p class=" text-[14px] text-[#303133] font-[700]">
                                    {{ t("wechatAccess") }}
                                </p>
                            </template>
                            <template #description>
                                <span class="text-[#999]">{{ t("wechatAccess") }}</span>
                                <div class="mt-[20px] mb-[40px] h-[32px]">
                                    <el-button type="primary" plain
                                        @click="router.push('/website/channel/wechat/course')">{{t("releaseCourse") }}</el-button>
                                </div>
                            </template>
                        </el-step>
                        <!-- <el-step>
                            <template #icon v-if="active > 4">
                                <el-icon size="25px">
                                    <CircleCheckFilled />
                                </el-icon>
                            </template>
                            <template #icon v-else-if="active == 4">
                                <div
                                    class="w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center">
                                    <div class="h-[12px] w-[12px] bg-color rounded-full"></div>
                                </div>
                            </template>
                            <template #icon v-else>
                                <div
                                    class="w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full">
                                    4
                                </div>
                            </template>
                            <template #title>
                                <p class=" text-[14px] text-[#303133] font-[700]">
                                    {{ t("completeAccess") }}
                                </p>
                            </template>
                            <template #description>
                                <span class="text-[#999]">{{ t("completeAccess") }}</span>
                                <div class="mt-[20px] mb-[40px]">
                                    <el-button type="primary" plain>{{
                                        t("wechatAccessBtn") }}</el-button>
                                </div>
                            </template>
                        </el-step> -->
                    </el-steps>
                </el-col>
                <el-col :span="4">
                    <div class="flex justify-center">
                        <el-image class="w-[180px] h-[180px]"  :src="qr_code?img(qr_code):''">
                            <template #error>
                                <div class="w-[100%] h-[100%] flex items-center  justify-center bg-[#f5f7fa]">
                                    <span>{{ qr_code?t('fileErr'):t('emptyQrCode') }}</span>
                                </div>
                            </template>
                        </el-image>
                    </div>
                    <div class="mt-[22px] text-center">
                        <p class=" text-[14px] text-[#303133] font-[700]">{{ t('clickAccess2') }}</p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from 'vue-router'
import { t } from '@/lang'
import {img} from '@/utils/common'
import { getWechatConfig } from '@/app/api/wechat'
const router = useRouter()
let activeName = ref("/website/channel/wechat");
let active = ref(2);
let qr_code = ref('')
onMounted(async () => {
    let res = await getWechatConfig()
    qr_code.value = res.data.qr_code
})
const linkEvent = (url) => {
    window.open(url, "_blank")
}
const handleClick = (val: any) => {
    router.push({ path: activeName.value });
};
</script>

<style lang="scss" scoped>
.progress-point {
    flex-grow: 1;
    list-style: none;
}

.border-color {
    border-color: var(--el-color-primary);
}

.bg-color {
    background-color: var(--el-color-primary);
}

.text-color {
    color: var(--el-color-primary);
}

.bg-color1 {
    background-color: var(--el-color-info-light-8);
}

:deep(.el-tabs__item:hover) {
    border-bottom: 2px solid var(--el-color-primary);
}

:deep(.el-tabs__item) {
    padding: 0;
}

:deep(.el-tabs__item+.el-tabs__item) {
    margin-right: 20px;
    margin-left: 20px;
    // border-bottom: 2px solid var(--el-color-primary);
}

:deep(.el-tabs--top) {
	.el-tabs__active-bar {
		display: none;
	}

	.el-tabs__item.is-active {
		border-bottom: 2px solid var(--el-color-primary);
	}

	.el-tabs__item.is-top:nth-child(2) {
		margin-right: 20px;
	}

}

:deep(.el-step.is-vertical .el-step__icon.is-icon) {
    padding: 8px 0;
    height: 40px;
    background-color: #fff;
}

:deep(.el-step__title) {
    height: 40px;
    line-height: 40px !important;
}</style>