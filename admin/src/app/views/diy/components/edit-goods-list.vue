<template>
	<!-- 内容 -->
	<div class="content-wrap" v-show="diyStore.editTab == 'content'">
		内容
	</div>

	<!-- 样式 -->
	<div class="style-wrap" v-show="diyStore.editTab == 'style'">

		<div class="edit-attr-item-wrap">
			<h3 class="mb-[10px]">{{ t('titleStyle') }}</h3>
			<el-form label-width="80px" class="px-[10px]">
				<el-form-item :label="t('textFontSize')">
					<el-slider v-model="diyStore.editComponent.fontSize" show-input size="small" class="ml-[10px] article-slider" :min="12" :max="20"/>
				</el-form-item>
				<el-form-item :label="t('textFontWeight')">
					<el-radio-group v-model="diyStore.editComponent.fontWeight">
						<el-radio :label="'normal'">{{t('fontWeightNormal')}}</el-radio>
						<el-radio :label="'bold'">{{t('fontWeightBold')}}</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item :label="t('textColor')">
					<el-color-picker v-model="diyStore.editComponent.textColor"/>
				</el-form-item>
			</el-form>
		</div>

		<!-- 组件样式 -->
		<slot name="style"></slot>
	</div>

</template>

<script lang="ts" setup>
    import {t} from '@/lang'
    import useDiyStore from '@/stores/modules/diy'
    import {ref, reactive} from 'vue'

    const diyStore = useDiyStore()
    diyStore.editComponent.ignore = []; // 忽略公共属性

    const showDialog = ref(false)

    const showStyle = () => {
        showDialog.value = true
    }

    const selectStyle = ref(diyStore.editComponent.style)

    const changeStyle = () => {
        switch (selectStyle.value) {
            case 'style-1':
                diyStore.editComponent.subTitle.control = false
				diyStore.editComponent.more.control = false
				diyStore.editComponent.styleName = "风格1"
                break;
            case 'style-2':
                diyStore.editComponent.subTitle.control = true
                diyStore.editComponent.more.control = true
				diyStore.editComponent.styleName = "风格2"
                break;
        }
        diyStore.editComponent.style = selectStyle.value
        showDialog.value = false
    }

    defineExpose({})

</script>

<style lang="scss">
	.horz-blank-slider {
		.el-slider__input {
			width: 100px;
		}
	}
</style>
<style lang="scss" scoped></style>