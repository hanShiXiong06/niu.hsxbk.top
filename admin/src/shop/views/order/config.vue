<template>
    <div class="main-container pt-[20px]">
        <div class="flex ml-[18px] justify-between items-center">
            <span class="text-[20px]">{{ pageName }}</span>
        </div>
        <el-form :model="formData" label-width="95" ref="formRef" :rules="rules" class="page-form" v-loading="loading">
            <el-card class="box-card !border-none" shadow="never">
                <h3 class="panel-title !text-sm pl-[15px]">{{ t('closeOrderInfo') }}</h3>
                <el-form-item prop="close_length">
                    <div>
                        <p class="!text-sm"><span>{{ t('closeOrderInfoLeft') }}</span><el-input
                                v-model="formData.close_length" class="!w-[120px] mx-[10px]"
                                onkeyup="this.value = this.value.replace(/[^\d]/g,'');" clearable /><span>{{
                                    t('closeOrderInfoRight') }}</span></p>
                        <p class="text-[12px] text-[#a9a9a9] leading-normal  mt-[5px]">{{ t('closeOrderInfoBottom') }}</p>
                    </div>
                </el-form-item>
                <el-form-item prop="is_close">
                    <el-checkbox v-model="formData.is_close" :label="t('isClose')" true-label="1" false-label="2" />
                </el-form-item>
            </el-card>
            <el-card class="box-card !border-none" shadow="never">
                <h3 class="panel-title !text-sm pl-[15px]">{{ t('confirm') }}</h3>
                <el-form-item prop="finish_length">
                    <div>
                        <p class="!text-sm"><span>{{ t('confirmLeft') }}</span><el-input v-model="formData.finish_length"
                                class="!w-[120px] mx-[10px]" onkeyup="this.value = this.value.replace(/[^\d]/g,'');"
                                clearable /><span>{{ t('confirmRight') }}</span></p>
                        <p class="text-[12px] text-[#a9a9a9] leading-normal  mt-[5px]">{{ t('confirmBottom') }}</p>
                    </div>
                </el-form-item>
                <el-form-item prop="is_finish">
                    <el-checkbox v-model="formData.is_finish" :label="t('isFinish')" true-label="1" false-label="2" />
                </el-form-item>
            </el-card>
            <el-card class="box-card !border-none" shadow="never">
                <h3 class="panel-title !text-sm pl-[15px]">{{ t('refund') }}</h3>
                <el-form-item prop="refund_length">
                    <div>
                        <p class="!text-sm"><span>{{ t('refundLeft') }}</span><el-input v-model="formData.refund_length"
                                class="!w-[120px] mx-[10px]" onkeyup="this.value = this.value.replace(/[^\d]/g,'');"
                                clearable /><span>{{ t('refundRight') }}</span></p>
                        <p class="text-[12px] text-[#a9a9a9] leading-normal  mt-[5px]">{{ t('refundBottom') }}</p>
                    </div>
                </el-form-item>
                <el-form-item prop="no_allow_refund">
                    <el-checkbox v-model="formData.no_allow_refund" :label="t('noAllowRefund')" true-label="1"
                        false-label="2" />
                </el-form-item>
            </el-card>
			<el-card class="box-card !border-none" shadow="never">
			    <h3 class="panel-title !text-sm pl-[15px]">{{ t('evaluate') }}</h3>
			    <el-form-item prop="refund_length">
			        <span>{{ t('isEvaluate') }}</span>
			        <el-radio-group class="mx-[10px]" v-model="formData.is_evaluate">
						<el-radio :label="1">{{ t('isEvaluateOpen') }}</el-radio>
			            <el-radio :label="0">{{ t('isEvaluateClose') }}</el-radio>
			        </el-radio-group>
			    </el-form-item>
				<el-form-item prop="refund_length">
				    <span>{{ t('evaluateIsToExamine') }}</span>
				    <el-radio-group class="mx-[10px]" v-model="formData.evaluate_is_to_examine">
						<el-radio :label="1">{{ t('isEvaluateOpen') }}</el-radio>
				        <el-radio :label="0">{{ t('isEvaluateClose') }}</el-radio>
				    </el-radio-group>
				</el-form-item>
			    <el-form-item prop="refund_length">
			        <span>{{ t('evaluateIsShow') }}</span>
			        <el-radio-group class="mx-[10px]" v-model="formData.evaluate_is_show">
			    		<el-radio :label="1">{{ t('isEvaluateOpen') }}</el-radio>
			            <el-radio :label="0">{{ t('isEvaluateClose') }}</el-radio>
			        </el-radio-group>
			    </el-form-item>
			</el-card>
            <el-card class="box-card !border-none" shadow="never">
                <h3 class="panel-title !text-sm pl-[15px]">{{ t('invoice') }}</h3>
                <el-form-item>
                    <span>{{ t('isInvoice') }}</span>
                    <el-radio-group class="mx-[10px]" v-model="formData.is_invoice">
                        <el-radio label="2">{{ t('isInvoiceClose') }}</el-radio>
                        <el-radio label="1">{{ t('isInvoiceOpen') }}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item prop="invoice_content">
                    <div class="flex">
                        <div>{{ t('invoiceContent') }}</div>
                        <div class="mx-[10px]">
                            <div v-for="(item, index) in formData.invoice_content"
                                :class="['w-[120px] relative', index ? 'mt-[15px]' : '']" :key="index">
                                <el-input v-model="formData.invoice_content[index]" class="!w-[120px]" clearable />
                                <el-icon v-if="index" color="rgba(0, 0, 0, 0.3)" class="!absolute right-[-6px] top-[-5px]"
                                    @click="clearInvoiceContent(index)">
                                    <CircleCloseFilled />
                                </el-icon>
                            </div>
                        </div>
                        <el-button @click="insertInvoiceContent">{{ t('insert') }}</el-button>
                    </div>
                </el-form-item>
                <el-form-item prop="invoice_type">
                    <span class="mr-[10px]">{{ t('invoiceType') }}</span>
                    <el-checkbox-group v-model="formData.invoice_type">
                        <el-checkbox label="1">{{ t('electronicInvoice') }}</el-checkbox>
                        <el-checkbox label="2">{{ t('paperInvoice') }}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-card>
        </el-form>
        <div class="fixed-footer-wrap" v-if="!loading">
            <div class="fixed-footer">
                <el-button type="primary" @click="onSave(formRef)">{{ t('save') }}</el-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { t } from '@/lang'
import { getConfig, setConfig } from '@/shop/api/order'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageName = route.meta.title
const formData = ref({
    close_length: '10',
    finish_length: '1',
    invoice_content: [''],
    invoice_type: [],
    is_close: '1',
    is_finish: '1',
    is_invoice: '1',
    no_allow_refund: '1',
    refund_length: '1',
    is_evaluate: 1,
    evaluate_is_to_examine: 1,
    evaluate_is_show: 1
})
const validCloseLength = (rule, value, callback) => {
    if (formData.value.is_close != '2') {
        if (value == '') {
            return callback(new Error(t('CloseLengthPlaceholder')))
        } else if (Number(value) >= 10 && Number(value) <= 1440) {
            return callback()
        } else {
            return callback(new Error(t('closeOrderInfoBottom')))
        }
    } else {
        return callback()
    }
}
const validFinishLength = (rule, value, callback) => {
    if (formData.value.is_finish != '2') {
        if (value == '') {
            return callback(new Error(t('finishLengthPlaceholder')))
        } else if (Number(value) >= 1 && Number(value) <= 30) {
            return callback()
        } else {
            return callback(new Error(t('confirmBottom')))
        }
    } else {
        return callback()
    }
}
const validRefundLength = (rule, value, callback) => {
    if (formData.value.no_allow_refund != '2') {
        if (value == '') {
            return callback(new Error(t('validRefundLengthPlaceholder')))
        } else if (Number(value) >= 1 && Number(value) <= 30) {
            return callback()
        } else {
            return callback(new Error(t('refundBottom')))
        }
    } else {
        return callback()
    }
}
const validInvoiceContent = (rule, value, callback) => {
    if (formData.value.is_invoice === '1') {
        if (value.some(el => el === '')) {
            return callback(new Error(t('invoicePlaceholder1')))
        } else {
            return callback()
        }
    } else {
        return callback()
    }
}
const validInvoiceType = (rule, value, callback) => {
    if (formData.value.is_invoice === '1') {
        if (!value.length) {
            return callback(new Error(t('invoiceTypePlaceholder')))
        } else {
            return callback()
        }
    } else {
        return callback()
    }
}
const rules = ref({
    close_length: [
        { validator: validCloseLength, trigger: 'blur' }
    ],
    finish_length: [
        { validator: validFinishLength, trigger: 'blur' }
    ],
    refund_length: [
        { validator: validRefundLength, trigger: 'blur' }
    ],
    invoice_content: [
        { validator: validInvoiceContent, trigger: 'blur' }
    ],
    invoice_type: [
        { validator: validInvoiceType, trigger: 'change' }
    ]
})
const loading = ref(false)
const getConfigFn = () => {
    loading.value = true
    getConfig().then(res => {
        Object.values(res.data).forEach(el => {
            formData.value = Object.assign(formData.value, el)
        })
        if (!formData.value.invoice_content.length) formData.value.invoice_content.push('')
        loading.value = false
    }).catch(() => {
        loading.value = false
    })
}
const insertInvoiceContent = () => {
    formData.value.invoice_content.push('')
}
const clearInvoiceContent = (index) => {
    formData.value.invoice_content.splice(index, 1)
}
getConfigFn()
const formRef = ref()

const onSave = async (formEl: any) => {
    await formEl.validate(async (valid) => {
        if (valid) {
            loading.value = true
            setConfig(formData.value).then(res => {
                getConfigFn()
            }).catch(() => {
                loading.value = false
            })
        }
    })
}
</script>
<style lang="scss" scoped></style>
