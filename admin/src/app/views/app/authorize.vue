<template>
    <div class="main main-container min-w-[1000px] min-h-[650px]" v-loading="loading">
        <el-card class="box-card !border-none" shadow="never" v-if="!loading">
            <div class="flex items-center">
                <span class="text-[20px]">{{ pageName }}</span>
                <span v-if="authinfo" class="text-[14px] ml-[20px] block"> {{ t('authCode') }}： {{ authinfo.auth_code }}
                    <span class="cursor-pointer text-primary" @click="authEvent">{{ t('updateCode') }}</span> </span>
            </div>
            <div v-if="authinfo" class="mt-[50px]">
                <el-row>
                    <el-col :span="8" class="mb-[20px]">
                        <div class="flex mt-[15px]">
                            <span class="text-[14px] w-[130px] text-right mr-[20px]">{{ t('companyName') }}</span>
                            <span class="text-[14px] text-[#666666]">{{ authinfo.company_name }}</span>
                        </div>
                    </el-col>
                    <el-col :span="8" class="mb-[20px]">
                        <div class="mt-[15px]">
                            <div class="flex">
                                <span class="text-[14px] w-[130px] text-right mr-[20px]">{{ t('siteAddress') }}</span>
                                <span class="text-[14px] text-[#666666]">{{ authinfo.site_address }}</span>
                            </div>
                            <div class="flex" v-if="!authinfo.address_type">
                                <span class="text-[14px] min-w-[130px] text-right mr-[20px]"></span>
                                <span class="text-[14px] text-[#f10b0b] cursor-pointer" @click="authEvent">{{ t('siteAddressTips') }}</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" class="mb-[20px]">
                        <div class="flex mt-[15px]">
                            <span class="text-[14px] w-[130px] text-right mr-[20px]">{{ t('contactName') }}</span>
                            <span class="text-[14px] text-[#666666]">{{ authinfo.contact_name }}</span>
                        </div>
                    </el-col>
                    <el-col :span="8" class="mb-[20px]">
                        <div class="flex mt-[15px]">
                            <span class="text-[14px] w-[130px] text-right mr-[20px]">{{ t('authCode') }}</span>
                            <span class="text-[14px] text-[#666666]">{{ authinfo.auth_code }}</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div v-else>
                <el-form :model="formData" label-width="0" ref="formRef" :rules="formRules"
                    class="page-form mx-auto w-[340px] mt-[100px]" v-loading="loading">
                    <el-card class="box-card !border-none" shadow="never">
                        <el-form-item prop="auth_code">
                            <el-input v-model="formData.auth_code" :placeholder="t('authCodePlaceholder')" class="input-width" clearable size="large" />
                        </el-form-item>

                        <div class="mt-[20px]">
                            <el-form-item prop="auth_secret">
                                <el-input v-model="formData.auth_secret" clearable :placeholder="t('authSecretPlaceholder')" class="input-width" size="large" />
                            </el-form-item>
                        </div>

                        <div class="text-sm mt-[10px] text-info">{{ t('authInfoTips') }}</div>

                        <div class="mt-[20px]">
                            <el-button type="primary" class="w-full" size="large" :loading="saveLoading" @click="save(formRef)">{{ t('confirm') }}</el-button>
                        </div>

                        <div class="mt-[10px] text-right">
                            <el-button type="primary" link @click="market">{{ t('notHaveAuth') }}</el-button>
                        </div>
                    </el-card>
                </el-form>

            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { t } from '@/lang'
import { getAuthinfo, setAuthinfo, getAdminAuthinfo } from '@/app/api/module'
import { FormInstance, FormRules } from 'element-plus'
import { useRoute } from 'vue-router'

const route = useRoute()
const pageName = route.meta.title

const authinfo = ref('')
const loading = ref(true)
const saveLoading = ref(false)
const checkAppMange = () => {
    getAuthinfo().then(res => {
        loading.value = false
        if (res.data.data && res.data.data.length != 0) {
            authinfo.value = res.data.data
        }
    }).catch(() => {
        loading.value = false
    })
}
checkAppMange()

const formData = reactive<Record<string, string>>({
    auth_code: '',
    auth_secret: ''
})
const formRef = ref<FormInstance>()

// 表单验证规则
const formRules = reactive<FormRules>({
    auth_code: [
        { required: true, message: t('authCodePlaceholder'), trigger: 'blur' }
    ],
    auth_secret: [
        { required: true, message: t('authSecretPlaceholder'), trigger: 'blur' }
    ]
})

const setFormData = async () => {
    const data = await (await getAdminAuthinfo()).data
    Object.keys(formData).forEach((key: string) => {
        if (data[key] != undefined) formData[key] = data[key]
    })
}
setFormData()

const save = async (formEl: FormInstance | undefined) => {
    if (saveLoading.value || !formEl) return

    await formEl.validate(async (valid) => {
        if (valid) {
            saveLoading.value = true

            setAuthinfo(formData).then(() => {
                saveLoading.value = false
                checkAppMange()
            }).catch(() => {
                saveLoading.value = false
            })
        }
    })
}

const authEvent = () => {
    authinfo.value = ''
}

const market = () => {
    window.open('https://www.niucloud.com/product')
}
</script>

<style lang="scss" scoped>
.app-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
}

.main {
    background-color: var(--el-bg-color-overlay);
}

.app-item {
    // box-shadow: 0px 6px 18px 0px rgba(82,129,187,0.1);
}
</style>
