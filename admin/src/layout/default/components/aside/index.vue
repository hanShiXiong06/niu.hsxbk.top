<template>
    <div :class="['flex',{'two-type': sidebar == 'twoType'},{'three-type': sidebar == 'threeType'}]">
        <div class="w-[72px] overflow-hidden">
            <el-aside :class="['h-screen layout-aside w-[93px] pr-[20px] pb-[30px] bg-[#F7F8FA] ease-in duration-200', { 'bright': !dark }]">
                <!-- 一级菜单 -->
                <div class="">
                    <el-header class="logo-wrap h-auto">
                        <div class="logo flex items-center m-auto max-w-[210px] h-[60px] justify-center">
                            <!-- <img class="w-[35px] h-[35px] rounded-full" src="@/app/assets/images/login_logo_ico.png" alt=""> -->
                            <span class="iconfont iconyun text-[#999] !text-[30px]"></span>
                        </div>
                    </el-header>

                    <div class="menu-wrap">
                        <template v-for="(item, index) in menus" :key="index">
                            <div v-if="item.meta.show" @click="toLink(item)"
                                :class="['flex items-center justify-center h-[56px] cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] menu-item hover:text-color whitespace-nowrap', { 'bg-[#f1f2f6] text-color menu-item-active ': (item.path == matched.path || (matched.path == '/admin' && item.path == '/index') || (matched.meta.app && item.path == '/index')) }]">
                                <icon v-if="item.meta.icon" :name="item.meta.icon" class="!w-auto" size="24px" :title="item.meta.title" />
                            </div>
                        </template>
                    </div>
                </div>
            </el-aside>
        </div>

        <!-- 二级菜单 -->
        <div v-if="matched.children.length" class="w-[189px] box-border border-r-[1px] border-solid second-menu">
            <div class="flex flex-col items-center justify-center h-[108px] border-b-[1px] border-solid second-head mx-[10px]">
                <div class="flex items-center justify-center w-[30px] h-[30px]" v-if="!matched.meta.app">
                    <icon v-if="matched.meta.icon" :name="matched.meta.icon" class="!w-auto" size="24px" />
                </div>
                <img v-else-if="matched.meta.app && appInfo.icon" :src="img(appInfo.icon)" class="w-[40px] h-[40px]" alt="">
                <!-- <img v-else-if="matched.meta.app && !appInfo.icon" src="@/app/assets/images/login_logo_ico.png"  class="w-[40px] h-[40px] rounded-full" alt=""> -->
                <div class="flex items-center">
                    <span class=" mt-[2px]">{{ matched.meta.app ? appInfo.title : matched.meta.title }}</span>
                    <span class="text-color ml-2 !text-[20px] cursor-pointer iconfont iconqiehuan2"  v-if="matched.meta.app && appInfo.icon" @click="switchAppFn()"></span>
                </div>
            </div>
            <el-menu class="system-menu !border-0" :router="true" unique-opened="true" :default-active="String(route.name)">
                <template v-for="(twoMenu, twoIndex) in matched.children">
                    <el-sub-menu :index="String(twoMenu.meta.title)" v-if="twoMenu.children && twoMenu.meta.show">
                        <template #title>
                            <div class="w-[16px] h-[16px] relative flex items-center">
                                <icon v-if="twoMenu.meta.icon" :name="twoMenu.meta.icon" class="absolute !w-auto" size="18px" />
                            </div>
                            <span class="ml-[11px] text-[15px]">{{ twoMenu.meta.title }}</span>
                        </template>
                        <template v-for="(threeMenu, threeIndex) in twoMenu.children" :key="threeIndex">
                            <el-menu-item v-if="threeMenu.meta.show" class="!h-[52px] !pl-[64px]" :index="String(threeMenu.name)" @click="toLink(threeMenu)">
                                <template #title>
                                    <span class="text-[14px]">{{ threeMenu.meta.title }}</span>
                                </template>
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
					
                    <el-menu-item v-else-if="twoMenu.meta.show && twoMenu.meta.key != 'official_market'" class="!pl-[35px] text-[#333]" :index="String(twoMenu.name)" @click="toLink(twoMenu)">
                        <template #title>
                            <div v-if="twoMenu.meta.icon" class="w-[16px] h-[16px] relative flex items-center">
                                <icon v-if="twoMenu.meta.icon" :name="twoMenu.meta.icon" class="absolute !w-auto" size="18px" />
                            </div>
                            <span class="ml-[11px] text-[15px]">{{ twoMenu.meta.title }}</span>
                        </template>
                    </el-menu-item>
					<div class="flex items-center !px-[35px] h-[56px] cursor-pointer text-[#333] el-menu-item" v-else-if="twoMenu.meta.show && twoMenu.meta.key == 'official_market'" @click="toLink(twoMenu)">
						<div v-if="twoMenu.meta.icon" class="w-[16px] h-[16px] relative flex items-center">
						    <icon v-if="twoMenu.meta.icon" :name="twoMenu.meta.icon" class="absolute !w-auto" size="18px"/>
						</div>
						<span class="ml-[11px] text-[15px]">{{ twoMenu.meta.title }}</span>
					</div>
                </template>
            </el-menu>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import side from './side.vue'
import { img } from '@/utils/common'
import useSystemStore from '@/stores/modules/system'
import useUserStore from '@/stores/modules/user'
import storage from '@/utils/storage'
import { CollectionTag } from '@element-plus/icons-vue'
import { findFirstValidRoute } from '@/router/routers'
import { getAddonByKey } from '@/app/api/addon'

const userStore = useUserStore()
const systemStore = useSystemStore()
const route = useRoute()
const router = useRouter()

const menus = computed(() => {
    const menus = []
    userStore.routers.forEach((item, index) => {
        if (item.meta.app == '') {
            if (item.children && item.children.length) {
                item.name = findFirstValidRoute(item.children)
                menus.push(item)
            } else {
                menus.push(item)
            }
        }
    })
    return menus
})

let currMetaAppType = "";
const matched = computed(() => {
    const data = route.matched[1]
    if (data.meta.app && (!currMetaAppType || currMetaAppType != data.meta.app)){
        appInfo.value = {};
        currMetaAppType = data.meta.app;
        getAppInfo(data.meta.app)
    }
    return route.matched[1]
})

const dark = computed(() => {
    return systemStore.dark
})

watch(route, () => {
    systemStore.$patch(state => {
        state.menuDrawer = false
    })
})

// 跳转链接
const toLink = (data) => {
    if (data.meta.key != 'official_market') {
        router.push({ name: data.name })
    } else {
        window.open('https://www.niucloud.com/product/', '_blank')
    }
}

// 切换应用
const switchAppFn = () => {
    router.push({ path: '/index/index' })
}

// 获取应用详情
const appInfo = ref({})
const getAppInfo = (type) => {
    getAddonByKey(type).then(res => {
        appInfo.value = res.data
    })
}

// 主题风格
const sidebar = computed(() => {
    return systemStore.sidebar
})
</script>

<style lang="scss">
.layout-aside {
    border-right: 1px solid var(--el-border-color-lighter);

    &.bright {
        background-color: #F5F7F9;

        li {
            background-color: #F5F7F9;

            &.is-active:not(.is-opened) {
                position: relative;
                color: #333;
                background-color: #fff;

                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: 2px;
                    background-color: var(--el-menu-active-color);
                }
            }
        }
    }

    .menu-item:hover {
        color: var(--el-color-primary);
    }
}

.second-menu .el-sub-menu .el-sub-menu__title{
    padding-left: 35px !important;
    .el-icon.el-sub-menu__icon-arrow{
        right: 35px;
        font-weight: bolder;
        font-size: 14px;
    }
}

.text-color {
    color: var(--el-color-primary);
}

.aside-drawer {
    .el-drawer__body {
        padding: 0px !important;
    }
}

// 主题二
.two-type{
    .logo-wrap{
        .logo span{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: #F5F7F9;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #273de3;
            font-size: 25px !important;
        }
    }
    .layout-aside{
        background-color: #12192D;
        .menu-item{
            color: #fff;
            &.menu-item-active, &:hover{
                background-color: var(--el-color-primary);
                color: #fff;
            }
        }
    }
    .second-menu{
        background-color: #F5F7F9;
        .el-menu{
            background-color: transparent;
            .el-menu-item:hover {
                background-color: #fff;
                color: var(--el-color-primary);
            }
            .el-menu-item.is-active {
                background-color: #fff;
            }
        }
        .el-sub-menu__title:hover{
            background-color: #fff;
            color: var(--el-color-primary);
        }
    }
}


// 主题三
.three-type{
    .logo-wrap{
        .logo span{
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: #F5F7F9;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #2E7BFD;
            font-size: 25px !important;
        }
    }
    .layout-aside{
        background-color: #12192D;
        .menu-item{
            color: #fff;
            &.menu-item-active, &:hover{
                background-color: #19233C;
                color: var(--el-color-primary);
            }
        }
    }
    .second-menu{
        background-color: #19233C;
        .second-head{
            color: #fff;
            border-color: #364059;
        }
        .el-menu{
            background-color: transparent;
            .el-menu-item{
                color: #fff;
            }
            .el-menu-item:hover, .el-menu-item.is-active {
                background-color: var(--el-color-primary);
            }
        }
        .el-sub-menu__title:hover{
            background-color: var(--el-color-primary);;
        }
        .el-sub-menu__title{
            color: #fff;
        }
    }
}

</style>
