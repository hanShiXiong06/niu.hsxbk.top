<template>
    <el-dialog v-model="showDialog" :title="t('detail')" width="800px" :destroy-on-close="true">
        <el-scrollbar height="400px" v-loading="loading">
            <el-descriptions :column="2">
                <el-descriptions-item :label="t('headerName')" label-align="right">{{ logData.header_name }}</el-descriptions-item>
                <el-descriptions-item :label="t('headTypeName')" label-align="right">{{ logData.header_type_name }}</el-descriptions-item>
                <el-descriptions-item :label="t('name')" label-align="right">{{ logData.name }}</el-descriptions-item>
                <el-descriptions-item :label="t('invoiceNumber')" label-align="right">{{ logData.invoice_number }}</el-descriptions-item>
                <el-descriptions-item :label="t('typeName')" label-align="right">{{ logData.type_name }}</el-descriptions-item>
                <el-descriptions-item :label="t('taxNumber')" label-align="right">{{ logData.tax_number}}</el-descriptions-item>
                <el-descriptions-item :label="t('money')" label-align="right">{{ logData.money }}</el-descriptions-item>
                <el-descriptions-item :label="t('invoiceTime')" label-align="right">{{ logData.invoice_time === 0 ? '' : logData.invoice_time }}</el-descriptions-item>
                <el-descriptions-item :label="t('invoiceVoucher')" label-align="right">
					<span>
                        <img class="w-[50px] h-[50px] inline-block" v-if="logData.invoice_voucher" :src="logData.invoice_voucher" alt="" >
                    </span>
                </el-descriptions-item>
                <el-descriptions-item :label="t('bankTame')" label-align="right">{{ logData.bank_name }}</el-descriptions-item>
                <el-descriptions-item :label="t('bankCardNumber')" label-align="right">{{ logData.bank_card_number }}</el-descriptions-item>
                <el-descriptions-item :label="t('address')" label-align="right">{{ logData.address }}</el-descriptions-item>
                <el-descriptions-item :label="t('telephone')" label-align="right">{{ logData.telephone }}</el-descriptions-item>
                <el-descriptions-item :label="t('email')" label-align="right">{{ logData.email }}</el-descriptions-item>
                <el-descriptions-item :label="t('mobile')" label-align="right">{{ logData.mobile }}</el-descriptions-item>
                <el-descriptions-item :label="t('createTime')" label-align="right">{{ logData.create_time }}</el-descriptions-item>
                <el-descriptions-item :label="t('remark')" label-align="right">{{ logData.remark }}</el-descriptions-item>
            </el-descriptions>
        </el-scrollbar>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showDialog = false">{{ t('cancel') }}</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'
import { getInvoiceDetail } from '@/shop/api/order'

const showDialog = ref(false)
const loading = ref(false)

const logData = ref([])
const getInvoiceDetailList = async () => {
    logData.value = await (await getInvoiceDetail(id)).data
    loading.value = false
}

let id = 0
const setFormData = async (row: any = null) => {
    loading.value = true
    if (row) {
        id = row.id
        getInvoiceDetailList()
    }
}

defineExpose({
    showDialog,
    setFormData
})
</script>

<style lang="scss" scoped></style>
