<template>
    <el-container :class="['w-full h-screen bg-page login-wrap']">
        <!-- 平台端登录 -->
        <el-main class="login-main items-center justify-center" v-if="!imgLoading">
            <div class="flex rounded-2xl overflow-hidden">
                <div class="login-main-left w-[450px] flex flex-wrap justify-center">
                    <el-image v-if="loginConfig.bg" class="w-[450px] h-[400px]" :src="img(loginConfig.bg)" fit="cover" />
                    <img v-else src="@/app/assets/images/login/login_index_left.png" alt="">
                </div>
                <div class="login flex flex-col w-[400px] h-[400px] p-[40px]">
                    <h3 class="text-center text-lg font-bold mb-[10px]">{{ webSite.site_name || t('siteTitle') }}</h3>
                    <h3 class="text-center text-2xl font-bold mb-[26px]">{{ t('platform') }}</h3>

                    <el-form :model="form" ref="formRef" :rules="formRules">
                        <el-form-item prop="username">
                            <el-input v-model="form.username" :placeholder="t('userPlaceholder')"
                                @keyup.enter="handleLogin(formRef)" class="h-[40px] input-with-select">
                                <template #prepend>
                                    <icon name="element-User" />
                                </template>
                            </el-input>
                        </el-form-item>

                        <el-form-item prop="password">
                            <el-input v-model="form.password" :placeholder="t('passwordPlaceholder')" type="password"
                                @keyup.enter="handleLogin(formRef)" :show-password="true"
                                class="h-[40px] input-with-select">
                                <template #prepend>
                                    <icon name="element-Lock" />
                                </template>
                            </el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" class="mt-[30px] h-[40px] w-full" @click="handleLogin(formRef)"
                                :loading="loading">{{ loading ? t('logging') : t('login') }}</el-button>
                        </el-form-item>

                    </el-form>
                </div>
            </div>
        </el-main>

        <!-- 验证组件 -->
        <verify @success="success" :mode="pop" captchaType="blockPuzzle" :imgSize="{ width: '330px', height: '155px' }"
            ref="verifyRef"></verify>
        <!-- <el-footer></el-footer> -->
    </el-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { t } from '@/lang'
import storage from '@/utils/storage'
import { getLoginConfig } from '@/app/api/auth'
import useUserStore from '@/stores/modules/user'
import { setWindowTitle, img, getAppType } from '@/utils/common'
import { getWebConfig } from '@/app/api/sys'

const loading = ref(false)
const imgLoading = ref(false)
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

route.redirectedFrom && (route.query.redirect = route.redirectedFrom.path)

const webSite = ref([])
const setFormData = async (id: number = 0) => {
    webSite.value = await (await getWebConfig()).data
    storage.set({ key: 'siteInfo', data: webSite.value })
}
const routerList = ref({
    tourism: "/tourism/index", vipcard: "/vipcard/index", cms: "/cms/article/list", shop: "/shop/hello_world"
})
setFormData()
setWindowTitle(t('adminLogin'))

// 验证码 - start
const verifyRef = ref(null)
const success = (params) => {
    loginFn({ captcha_code: params.captchaVerification })
}
// 验证码 - end

const form = reactive({
    username: '',
    password: ''
})

// 获取登录配置信息
const loginConfig = ref({})
const getLoginConfigFn = async (id: number = 0) => {
    imgLoading.value = true
    const data = await (await getLoginConfig()).data
    loginConfig.value = data
    imgLoading.value = false
}
getLoginConfigFn()

const formRef = ref<FormInstance>()

const formRules = reactive<FormRules>({
    username: [
        { required: true, message: t('userPlaceholder'), trigger: 'blur' }
    ],
    password: [
        { required: true, message: t('passwordPlaceholder'), trigger: 'blur' }
    ]
})

const handleLogin = async (formEl: FormInstance | undefined) => {
    if (loading.value || !formEl) return

    await formEl.validate((valid, fields) => {
        if (valid) {
            if (parseInt(loginConfig.value.is_captcha)) { verifyRef.value.show() } else { loginFn() }
        }
    })
}

// data 验证码
const loginFn = (data = {}) => {
    loading.value = true
    userStore.login({ username: form.username, password: form.password, ...data }).then(res => {
        // const { query: { redirect } } = route
        // const path = typeof redirect === 'string' ? redirect : '/'
        let key = storage.get('menuAppStorage')
        if(!key) storage.set({key:'menuAppStorage',data:'tourism'})
        let path = key&&key!=''?routerList.value[key]:'/tourism/index'
        router.push(path)
    }).catch(() => {
        loading.value = false
    })
}
</script>

<style lang="scss">
.login-wrap {
    background-image: url("@/app/assets/images/login/login_index_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
}

.login-site-main {
    padding: 0 !important;
}

.input-with-select .el-input-group__prepend {
    background-color: var(--el-fill-color-blank);
    padding: 0 15px;
}

.login-main {
    display: flex !important;
}

.login {
    background: var(--el-bg-color);
}

.admin_name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
}

@media only screen and (max-width: 750px) {
    .login-main-left {
        display: none;
    }
}</style>
