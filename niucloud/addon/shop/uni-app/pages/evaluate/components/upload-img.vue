<template>
    <view class="flex flex-wrap">
        <view v-for="(item, index) in value" :class="['mb-[18rpx] relative', (index + 1) % 3 === 0 ? '' : 'mr-[18rpx]']">
            <u--image class="rounded-[10rpx] overflow-hidden" width="204rpx" height="204rpx" :src="img(item || '')"
                model="aspectFill">
                <template #error>
                    <u-icon name="photo" color="#999" size="50"></u-icon>
                </template>
            </u--image>
            <text class="iconguanbi iconfont absolute top-0 right-[5rpx] text-[#fff] bg-[#888] rounded-bl-[16rpx]" @click.stop="deleteImg(index)"></text>
        </view>
        <view class="w-[204rpx] h-[204rpx]">
            <u-upload @afterRead="afterRead" :maxCount="maxCount">
                <view
                    class="flex items-center justify-center w-[204rpx] h-[204rpx] border-[2rpx] border-dashed border-[#ebebec] text-center text-[#888]">
                    <view>
                        <view class="iconfont iconzhaoxiangji text-[50rpx]"></view>
                        <view class=" text-[24rpx] mt-[10rpx]">{{ value.length }}/{{ maxCount }}</view>
                    </view>
                </view>
            </u-upload>
        </view>
    </view>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { img } from '@/utils/common';
import { uploadImage } from '@/app/api/system'

const prop = defineProps({
    modelValue: {
        type: String || Array,
    },
    maxCount: {
        type: Number,
        default: 6
    }
})
const value = computed({
    get() {
        return prop.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})
const maxCount = computed(() => {
    return prop.maxCount
})
const afterRead = (event) => {
    if (value.value?.length >= maxCount.value) {
        uni.showToast({ title: `最大上传${maxCount.value}张图片`, icon: 'none' })
        return false
    }
    uploadImage({
        filePath: event.file.url,
        name: 'file'
    }).then(res => {
        value.value.push(res.data.url)
    }).catch(() => {
    })
}
const deleteImg = (index:number)=>{
    value.value.splice(index,1)
}
</script>