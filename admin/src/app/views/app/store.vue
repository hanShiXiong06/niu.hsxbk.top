<template>
    <div class="main-container h-[500px] w-full p-5 bg-white" v-loading="loading">

        <div class="flex mb-4">
            <div class="border rounded-sm switch-btn active px-4 py-1 cursor-pointer flex items-center	">
                <img src="@/app/assets/images/app_store/local_icon_select.png" class="mr-1.5 w-3.5 h-3.5 mb-0.5">
                {{ t('localAppText') }}
            </div>
        </div>
        <div class="relative">
            <div class="absolute right-0 top-[2px] flex items-center cursor-pointer z-20 border	border-inherit">
                <div class="flex item-center justify-center px-[6px] py-[4px]"
                    :class="{ 'bg-slate-200': showType == 'small' }" @click="showType = 'small'">
                    <img src="@/app/assets/images/app_store/switch_icon_1.png" class=" w-[16px] h-[16px]">
                </div>
                <div class="flex item-center justify-center px-[6px] py-[4px]"
                    :class="{ 'bg-slate-200': showType == 'large' }" @click="showType = 'large'">
                    <img src="@/app/assets/images/app_store/switch_icon_2.png" class="w-[16px] h-[16px] ">
                </div>
            </div>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">

                <el-tab-pane :label="installLabel" name="installed">
                    <div class="flex flex-wrap px-2 plug-list pb-10">
                        <div v-for="(item, index) in localList.installed" :key="index + 'a'"
                            class="flex items-center cursor-pointer  w-[295px] relative plug-item mr-4 mb-4"
                            @click="getAddonDetialFn(item)" v-if="showType == 'small'">
                            <div class="p-3">
                                <img class="w-[44px] h-[44px] rounded-sm" v-if="item.icon" :src="item.icon" alt="">
                                <img class="w-[44px] h-[44px] rounded-sm" v-else src="@/app/assets/images/icon-addon.png"
                                    alt="">
                            </div>
                            <div class="flex items-center w-[220px] border-b py-3 justify-between">
                                <div class="flex flex-col">
                                    <span class="text-[14px] truncate w-[160px]">{{ item.title }}</span>
                                    <span class="text-xs text-gray-400 truncate w-[160px] mt-[4px]">{{ item.desc }}</span>
                                </div>
                                <el-button size="small" round class="!text-primary !border-primary !bg-transparent"
                                    @click.stop="uninstallAddonFn(item.key)">{{ t('unload')
                                    }}</el-button>
                            </div>
                        </div>

                        <div class="flex flex-wrap plug-list pb-10 plug-large" v-if="showType == 'large'">
                            <div class="app-item cursor-pointer mr-4 mt-[20px] pb-2 bg-[#f7f7f7]"
                                v-for="(item, index) in localList.installed" :key="index + 'a'"
                                @click="getAddonDetialFn(item)">
                                <div class="flex justify-center items-center">
                                    <img class="w-[240px] h-[120px]" v-if="item.cover" :src="item.cover" />
                                    <img v-else class="w-[240px] h-[120px]"
                                        src="@/app/assets/images/app_store/app_store_default.png" />
                                </div>
                                <div class="flex w-[240px] h-[46px]">
                                    <div class="text-left mt-2 w-[190px]">
                                        <p class="app-text text-[14px] text-[#222] pl-2">{{ item.title }}</p>
                                        <p class="app-text text-[12px] text-[#999] pl-2">{{ item.desc }}</p>
                                    </div>
                                    <div class="flex items-center pr-2">
                                        <el-button size="small" round class="!text-primary !border-primary !bg-transparent"
                                            @click.stop="uninstallAddonFn(item.key)">{{ t('unload')
                                            }}</el-button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <el-empty :description="t('noPlug')" v-if="!localList.installed.length && !loading"
                            class="mx-auto" />
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="uninstalledLabel" name="uninstalled">
                    <div class="flex flex-wrap px-2 plug-list pb-10">

                        <div v-for="(item, index) in localList.uninstalled" :key="index + 'a'"
                            class="flex items-center cursor-pointer  w-[295px] relative plug-item mr-4 mb-4"
                            @click="getAddonDetialFn(item)" v-if="showType == 'small'">
                            <div class="p-3">
                                <img v-if="item.icon" class="w-[44px] h-[44px] rounded-sm" :src="img(item.icon)" alt="">
                                <img v-else class="w-[44px] h-[44px] rounded-sm" src="@/app/assets/images/icon-addon.png"
                                    alt="">
                            </div>
                            <div class="flex items-center w-[220px] border-b py-3 justify-between">
                                <div class="flex flex-col">
                                    <span class="text-[14px] truncate w-[160px]">{{ item.title }}</span>
                                    <span class="text-xs text-gray-400 truncate w-[160px] mt-[4px]">{{ item.desc }}</span>
                                </div>
                                <el-button v-if="item.is_download" size="small" round
                                    class="!text-primary !border-primary !bg-transparent"
                                    @click.stop="installAddonFn(item.key)">{{ t('install')
                                    }}</el-button>
                                <el-button v-else size="small" :loading="downloading == item.key"
                                    :disabled="downloading != ''" round
                                    class="!text-primary !border-primary !bg-transparent" @click.stop="downEvent(item)">{{
                                        t('down') }}</el-button>
                            </div>
                        </div>

                        <div class="flex flex-wrap plug-list pb-10 plug-large" v-if="showType == 'large'">
                            <div class="app-item cursor-pointer mr-4 mt-[20px] pb-2 bg-[#f7f7f7]"
                                v-for="(item, index) in localList.uninstalled" :key="index + 'a'"
                                @click="getAddonDetialFn(item)">
                                <div class="flex justify-center items-center">
                                    <img v-if="item.cover && !item.is_download" class="w-[240px] h-[120px]"
                                        :src="img(item.cover)" />
                                    <img v-else-if="item.cover && item.is_download" class="w-[240px] h-[120px]"
                                        :src="item.cover" />
                                    <img v-else class="w-[240px] h-[120px]"
                                        src="@/app/assets/images/app_store/app_store_default.png" />
                                </div>
                                <div class="flex w-[240px] h-[46px]">
                                    <div class="text-left mt-2 w-[190px]">
                                        <p class="app-text text-[14px] text-[#222] pl-2">{{ item.title }}</p>
                                        <p class="app-text text-[12px] text-[#999] pl-2">{{ item.desc }}</p>
                                    </div>
                                    <div class="flex items-center pr-2">
                                        <el-button v-if="item.is_download" size="small" round
                                            class="!text-primary !border-primary !bg-transparent"
                                            @click.stop="installAddonFn(item.key)">{{ t('install')
                                            }}</el-button>
                                        <el-button v-else size="small" :loading="downloading == item.key"
                                            :disabled="downloading != ''" round
                                            class="!text-primary !border-primary !bg-transparent"
                                            @click.stop="downEvent(item)">{{ t('down') }}</el-button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <el-empty :description="t('noPlug')" v-if="!localList.uninstalled.length && !loading"
                            class="mx-auto" />
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="allLabel" name="buy">
                    <div class="flex flex-wrap px-2 plug-list pb-10">

                        <div v-for="(item, index) in localList.all" :key="index + 'a'"
                            class="flex items-center cursor-pointer  w-[295px] relative plug-item mr-4 mb-4"
                            @click="getAddonDetialFn(item)" v-if="showType == 'small'">
                            <div class="p-3">
                                <img v-if="item.icon" class="w-[44px] h-[44px] rounded-sm" :src="img(item.icon)" alt="">
                                <img v-else class="w-[44px] h-[44px] rounded-sm" src="@/app/assets/images/icon-addon.png"
                                    alt="">
                            </div>
                            <div class="flex items-center w-[220px] border-b py-3 justify-between">
                                <div class="flex flex-col">
                                    <span class="text-[14px] truncate w-[160px]">{{ item.title }}</span>
                                    <span class="text-xs text-gray-400 truncate w-[160px] mt-[4px]">{{ item.desc }}</span>
                                </div>
                                <el-button v-if="item.install_info && Object.keys(item.install_info)?.length" size="small"
                                    round class="!text-primary !border-primary !bg-transparent"
                                    @click.stop="uninstallAddonFn(item.key)">{{ t('unload')
                                    }}</el-button>
                                <el-button v-else-if="item.is_download && item.install_info <= 0" size="small" round
                                    class="!text-primary !border-primary !bg-transparent"
                                    @click.stop="installAddonFn(item.key)">{{ t('install')
                                    }}</el-button>
                                <el-button v-else size="small" :loading="downloading == item.key"
                                    :disabled="downloading != ''" round
                                    class="!text-primary !border-primary !bg-transparent" @click.stop="downEvent(item)">{{
                                        t('down') }}</el-button>
                            </div>
                        </div>

                        <div class="flex flex-wrap plug-list pb-10 plug-large" v-if="showType == 'large'">
                            <div class="app-item cursor-pointer mr-4 mt-[20px] pb-2 bg-[#f7f7f7]"
                                v-for="(item, index) in localList.all" :key="index + 'a'" @click="getAddonDetialFn(item)">
                                <div class="flex justify-center items-center">
                                    <img v-if="item.icon && !item.is_download" class="w-[240px] h-[120px]"
                                        :src="img(item.icon)" />
                                    <img v-else-if="item.icon && item.is_download" class="w-[240px] h-[120px]"
                                        :src="item.icon" />
                                    <img v-else class="w-[240px] h-[120px]"
                                        src="@/app/assets/images/app_store/app_store_default.png" />
                                </div>
                                <div class="flex w-[240px] h-[46px]">
                                    <div class="text-left mt-2 w-[190px]">
                                        <p class="app-text text-[14px] text-[#222] pl-2">{{ item.title }}</p>
                                        <p class="app-text text-[12px] text-[#999] pl-2">{{ item.desc }}</p>
                                    </div>
                                    <div class="flex items-center pr-2">
                                        <el-button v-if="item.install_info && Object.keys(item.install_info)?.length"
                                            size="small" round class="!text-primary !border-primary !bg-transparent"
                                            @click.stop="uninstallAddonFn(item.key)">{{ t('unload')
                                            }}</el-button>
                                        <el-button v-else-if="item.is_download && item.install_info <= 0" size="small" round
                                            class="!text-primary !border-primary !bg-transparent"
                                            @click.stop="installAddonFn(item.key)">{{ t('install')
                                            }}</el-button>
                                        <el-button v-else size="small" round :loading="downloading == item.key"
                                            :disabled="downloading != ''"
                                            class="!text-primary !border-primary !bg-transparent"
                                            @click.stop="downEvent(item)">{{ t('down') }}</el-button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <el-empty :description="t('noPlug')" v-if="!localList.all.length && !loading" class="mx-auto" />
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

        <!-- 详情 -->
        <el-dialog v-model="appStoreShowDialog" :title="t('plugDetail')" width="500px" :destroy-on-close="true">
            <el-form :model="appStoreInfo" label-width="120px" ref="formRef" class="page-form">
                <el-form-item :label="t('title')">
                    <div class="input-width"> {{ appStoreInfo.title }} </div>
                </el-form-item>
                <el-form-item :label="t('desc')">
                    <div class="input-width"> {{ appStoreInfo.desc }} </div>
                </el-form-item>
                <el-form-item :label="t('author')">
                    <div class="input-width"> {{ appStoreInfo.author }} </div>
                </el-form-item>
                <el-form-item :label="t('version')">
                    <div class="input-width"> {{ appStoreInfo.version }} </div>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="appStoreShowDialog = false">{{ t('confirm') }}</el-button>
                </span>
            </template>
        </el-dialog>

        <!-- 安装弹窗 -->
        <el-dialog v-model="installShowDialog" :title="t('addonInstall')" width="850px" :close-on-click-modal="false"
            :close-on-press-escape="false" :before-close="installShowDialogClose">
            <el-steps :space="200" :active="installStep" finish-status="success" align-center>
                <el-step :title="t('envCheck')" class="flex-1" />
                <el-step :title="t('installProgress')" class="flex-1" />
                <el-step :title="t('installComplete')" class="flex-1" />
            </el-steps>
            <div v-show="installStep == 1" v-loading="!installCheckResult.dir">
                <el-scrollbar max-height="50vh">
                    <div class="min-h-[150px]">
                        <div class="bg-[#fff] my-3" v-if="installCheckResult.dir">
                            <p class="pt-[20px] pl-[20px] ">{{ t('dirPermission') }}</p>
                            <div class="px-[20px] pt-[10px] text-[14px]">
                                <el-row class="py-[10px] items table-head-bg pl-[15px] mb-[10px]">
                                    <el-col :span="12">
                                        <span>{{ t('path') }}</span>
                                    </el-col>
                                    <el-col :span="6">
                                        <span>{{ t('demand') }}</span>
                                    </el-col>
                                    <el-col :span="6">
                                        <span>{{ t('status') }}</span>
                                    </el-col>
                                </el-row>
                                <el-row class="pb-[10px] items pl-[15px]"
                                    v-for="item in installCheckResult.dir.is_readable">
                                    <el-col :span="12">
                                        <span>{{ item.dir }}</span>
                                    </el-col>
                                    <el-col :span="6">
                                        <span>{{ t('readable') }}</span>
                                    </el-col>
                                    <el-col :span="6">
                                        <span v-if="item.status"><el-icon color="green"><Select /></el-icon></span>
                                        <span v-else>
                                            <el-icon color="red">
                                                <CloseBold />
                                            </el-icon>
                                        </span>
                                    </el-col>
                                </el-row>
                                <el-row class="pb-[10px] items pl-[15px]" v-for="item in installCheckResult.dir.is_write">
                                    <el-col :span="12">
                                        <span>{{ item.dir }}</span>
                                    </el-col>
                                    <el-col :span="6">
                                        <span>{{ t('write') }}</span>
                                    </el-col>
                                    <el-col :span="6">
                                        <span v-if="item.status"><el-icon color="green"><Select /></el-icon></span>
                                        <span v-else>
                                            <el-icon color="red">
                                                <CloseBold />
                                            </el-icon>
                                        </span>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </div>
                </el-scrollbar>
                <div class="flex justify-end">
                    <el-tooltip effect="dark" :content="t('installTips')" placement="top">
                        <el-button type="default" :disabled="!installCheckResult.is_pass || cloudInstalling"
                            :loading="localInstalling" @click="handleInstall">{{
                                t('localInstall')
                            }}</el-button>
                    </el-tooltip>
                    <el-tooltip effect="dark" :content="t('cloudInstallTips')" placement="top">
                        <el-button type="primary" :disabled="!installCheckResult.is_pass || localInstalling"
                            :loading="cloudInstalling" @click="handleCloudInstall">{{
                                t('cloudInstall')
                            }}</el-button>
                    </el-tooltip>
                </div>
            </div>
            <div v-show="installStep == 2" class="h-[50vh] mt-[20px]">
                <terminal name="my-terminal" :context="currAddon" :init-log="null" :show-header="false"
                    :show-log-time="true" />
            </div>
            <div v-show="installStep == 3" class="h-[50vh] mt-[20px] flex flex-col">
                <!-- 提示信息 -->
                <div v-for="item in installWarning" class="mb-[10px]">
                    <el-alert :title="item" type="warning" :closable="false" />
                </div>
                <el-result icon="success" :title="t('addonInstallSuccess')"></el-result>
            </div>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed, h } from 'vue'
import { t } from '@/lang'
import { getAddonLocal, uninstallAddon, installAddon, preInstallCheck, cloudInstallAddon, getAddonInstalltask, getAddonCloudInstallLog } from '@/app/api/addon'
import { downloadVersion, getAuthinfo } from '@/app/api/module'
import { TabsPaneContext, ElMessageBox, ElNotification } from 'element-plus'
import { img } from '@/utils/common'
import { Terminal, api as terminalApi } from 'vue-web-terminal'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeName = ref('installed')
const loading = ref<Boolean>(false)
const showType = ref('large')
const downloading = ref('')

const downEvent = (param: Record<string, any>) => {
    if (downloading.value) return
    downloading.value = param.key

    downloadVersion({ addon: param.key, version: param.version }).then(() => {
        installAddonFn(param.key)
        localListFn()
        downloading.value = ''
    }).catch(() => {
        downloading.value = ''
    })
}

const installLabel = computed(() => {
    let text = t('installLabel')
    localList.value.installed.length && (text += ` (${localList.value.installed.length})`)
    return text
})

const uninstalledLabel = computed(() => {
    let text = t('uninstalledLabel')
    localList.value.uninstalled.length && (text += ` (${localList.value.uninstalled.length})`)
    return text
})

const allLabel = computed(() => {
    let text = t('buyLabel')
    localList.value.all.length && (text += ` (${localList.value.all.length})`)
    return text
})

const authCode = ref('')
getAuthinfo().then(res => {
    if (res.data.data && res.data.data.auth_code) {
        authCode.value = res.data.data.auth_code
    }
}).catch(() => {
})

/**
 * 本地下载的插件列表
 */
const localList = ref({
    installed: [],
    uninstalled: [],
    all: [],
    error: ''
})
const localListFn = () => {
    loading.value = true
    getAddonLocal({}).then(res => {
        const data = res.data.list
        localList.value.error = res.data.error
        localList.value.installed = []
        localList.value.uninstalled = []
        localList.value.all = []
        for (const i in data) {
            if (data[i].is_local == false) localList.value.all.push(data[i])

            if (data[i].install_info && Object.keys(data[i].install_info)?.length) {
                localList.value.installed.push(data[i])
            } else {
                if (data[i].is_download == true) localList.value.uninstalled.push(data[i])
            }
        }

        loading.value = false
    }).catch(() => {
        loading.value = false
    })
}
localListFn()

const handleClick = (tab: TabsPaneContext, event: Event) => {
    if (tab.paneName == 'buy' && localList.value.error != '') {
        ElMessage({
            message: localList.value.error,
            grouping: true,
            type: 'error'
        })
    }
}

const currAddon = ref('')
// 安装面板弹窗
const installShowDialog = ref(false)
// 安装步骤
const installStep = ref(1)
// 安装检测结果
const installCheckResult = ref({})
// 安装警告
const installWarning = ref<string[]>([])

/**
 * 安装
 * @param key
 */
const installAddonFn = (key: string) => {
    currAddon.value = key
    installStep.value = 1
    installWarning.value = []
    installShowDialog.value = true

    preInstallCheck(key).then(res => {
        installCheckResult.value = res.data
    }).catch(() => { })
}

/**
 * 获取正在进行的安装任务
 */
let notificationEl = null
const getInstallTask = (first: boolean = true) => {
    getAddonInstalltask().then(res => {
        if (res.data) {
            if (first) {
                installLog = []
                currAddon.value = res.data.addon
                if (!installShowDialog.value) {
                    notificationEl = ElNotification.success({
                        title: t('warning'),
                        dangerouslyUseHTMLString: true,
                        message: h('div', {}, [
                            t('installingTips'),
                            h('span', { class: 'text-primary cursor-pointer', onClick: checkInstallTask }, [t('installPercent')])
                        ]),
                        duration: 0,
                        showClose: false
                    })
                }
            }
            if (res.data.error) {
                return
            }
            if (res.data.mode == 'cloud') {
                getCloudInstallLog()
            }
            setTimeout(() => {
                getInstallTask(false)
            }, 2000)
        } else {
            if (!first) {
                installStep.value = 3
                localListFn()
                notificationEl.close()
            }
        }
    })
}
getInstallTask()

const checkInstallTask = () => {
    installShowDialog.value = true
    installStep.value = 2
}

const localInstalling = ref(false)
/**
 * 安装插件
 */
const handleInstall = () => {
    if (!installCheckResult.value.is_pass || localInstalling.value) return
    localInstalling.value = true

    installAddon({ addon: currAddon.value }).then(res => {
        installStep.value = 3
        localListFn()
        localInstalling.value = false
    }).catch((res) => {
        localInstalling.value = false
    })
}

const cloudInstalling = ref(false)
/**
 * 云安装插件
 */
const handleCloudInstall = () => {
    if (!authCode.value) {
        authElMessageBox()
        return
    }

    if (!installCheckResult.value.is_pass || cloudInstalling.value) return
    cloudInstalling.value = true

    cloudInstallAddon({ addon: currAddon.value }).then(res => {
        installStep.value = 2
        terminalApi.execute('my-terminal', 'clear')
        terminalApi.pushMessage('my-terminal', { content: '开始安装插件', class: 'info' })
        getInstallTask()
        cloudInstalling.value = false
    }).catch((res) => {
        cloudInstalling.value = false
    })
}

const authElMessageBox = () => {
    ElMessageBox.confirm(
        t('authTips'),
        t('warning'),
        {
            distinguishCancelAndClose: true,
            confirmButtonText: t('toBind'),
            cancelButtonText: t('toNiucloud')
        }
    ).then(() => {
        router.push({ path: '/app/authorize' })
    }).catch((action: string) => {
        if (action === 'cancel') {
            window.open('https://www.niucloud.com/product')
        }
    })
}

let installLog: string[] = []
const getCloudInstallLog = () => {
    getAddonCloudInstallLog(currAddon.value)
        .then(res => {
            const data = res.data.data ?? []
            if (data[0] && data[0].length && installShowDialog.value == true) {
                data[0].forEach(item => {
                    if (!installLog.includes(item.action)) {
                        terminalApi.pushMessage('my-terminal', { content: `正在执行：${item.action}` })
                        installLog.push(item.action)

                        if (item.code == 0) {
                            terminalApi.pushMessage('my-terminal', { content: item.msg, class: 'error' })
                        }
                    }
                })
            }
        })
        .catch(() => {
            notificationEl?.close()
        })
}

watch(currAddon, (nval) => {
    installCheckResult.value = {}
})

/**
 * 卸载
 * @param key
 */
const uninstallAddonFn = (key: string) => {
    uninstallAddon({ addon: key }).then(res => {
        localListFn()
        loading.value = false
    }).catch(() => {
        loading.value = false
    })
}

const market = () => {
    window.open('https://www.niucloud.com/product')
}

/**
 * 安装弹窗关闭提示
 * @param done
 */
const installShowDialogClose = (done: () => {}) => {
    if (installStep.value == 2) {
        ElMessageBox.confirm(
            t('installShowDialogCloseTips'),
            t('warning'),
            {
                confirmButtonText: t('confirm'),
                cancelButtonText: t('cancel'),
                type: 'warning'
            }
        ).then(() => {
            done()
        }).catch(() => { })
    } else done()
}

// 插件详情
const appStoreShowDialog = ref(false)
const appStoreInfo = ref<AnyObject>({})
const getAddonDetialFn = (data: AnyObject) => {
    appStoreShowDialog.value = true
    appStoreInfo.value = data
}
</script>

<style lang="scss" scoped>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.plug-item {
    .plug-item-operate {
        color: var(--el-color-primary);
        border-color: var(--el-color-primary);
        font-size: var(--el-font-size-extra-small);
    }
}

:deep(.t-container) {
    box-shadow: none !important;

    .t-window {
        padding: 10px 20px !important;
    }
}

.switch-btn.active {
    border-color: var(--el-color-primary);
    color: #fff;
    background-color: var(--el-color-primary);
}

.plug-large {
    .plug-item-operate {
        color: var(--el-color-primary);
        border-color: var(--el-color-primary);
        font-size: var(--el-font-size-extra-small);
    }
}

.app-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
}

// 插件安装-弹窗-表格样式
.table-head-bg {
    background: #f5f7f9;
}

html.dark .table-head-bg {
    background: #141414;
}
</style>
