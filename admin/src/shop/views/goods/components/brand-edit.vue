<template>
    <el-dialog v-model="showDialog" :title="title" width="500px" class="diy-dialog-wrap"
        :destroy-on-close="true">
        <el-form :model="formData" label-width="120px" ref="formRef" :rules="formRules" class="page-form" v-loading="loading">
                <el-form-item :label="t('brandName')" prop="brand_name">
                    <el-input v-model="formData.brand_name" clearable :placeholder="t('brandNamePlaceholder')" class="input-width" />
                </el-form-item>

                <el-form-item :label="t('logo')">
                    <upload-image v-model="formData.logo" />
                </el-form-item>

                <el-form-item :label="t('desc')" >
                    <el-input v-model="formData.desc" type="textarea" clearable :placeholder="t('descPlaceholder')" class="input-width" />
                </el-form-item>

                <el-form-item :label="t('sort')" >
                    <el-input v-model="formData.sort" clearable :placeholder="t('sortPlaceholder')" class="input-width" onkeyup="this.value = this.value.replace(/[^\d\.]/g,'');"/>
                </el-form-item>

        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showDialog = false">{{ t('cancel') }}</el-button>
                <el-button type="primary" :loading="loading" @click="confirm(formRef)">{{
                    t('confirm')
                }}</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'

import { addBrand, editBrand, getBrandInfo } from '@/shop/api/goods'

const showDialog = ref(false)
const loading = ref(false)
const title = ref('')

/**
 * 表单数据
 */
const initialFormData = {
    brand_id: '',
    brand_name: '',
    logo: '',
    desc: '',
    sort: ''

}
const formData: Record<string, any> = reactive({ ...initialFormData })

const formRef = ref<FormInstance>()

// 表单验证规则
const formRules = computed(() => {
    return {
        brand_name: [
            { required: true, message: t('brandNamePlaceholder'), trigger: 'blur' }
        ]
    }
})

const emit = defineEmits(['complete'])

/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
    if (loading.value || !formEl) return
    const save = formData.brand_id ? editBrand : addBrand

    await formEl.validate(async (valid) => {
        if (valid) {
            loading.value = true

            const data = formData

            save(data).then(res => {
                loading.value = false
                showDialog.value = false
                emit('complete')
            }).catch(err => {
                loading.value = false
            })
        }
    })
}

// 获取字典数据

const setFormData = async (row: any = null) => {
    Object.assign(formData, initialFormData)
    loading.value = true
    if (row) {
        const data = await (await getBrandInfo(row.brand_id)).data
		title.value = t('updateBrand')
        if (data) {
            Object.keys(formData).forEach((key: string) => {
                if (data[key] != undefined) formData[key] = data[key]
            })
        }
    }else{
		title.value = t('addBrand')
	}
    loading.value = false
}

defineExpose({
    showDialog,
    setFormData
})
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.diy-dialog-wrap .el-form-item__label{
    height: auto  !important;
}
</style>
