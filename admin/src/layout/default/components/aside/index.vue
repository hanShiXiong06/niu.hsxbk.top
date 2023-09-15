<template>
    <div :class="['flex', { 'two-type': sidebar == 'twoType' }, { 'three-type': sidebar == 'threeType' }]" v-if="aaa">

        <div class="w-[65px] overflow-hidden" v-if="!floatMenuStyle">
            <el-aside
                :class="['h-screen layout-aside w-[65px] pb-[30px] bg-[#F7F8FA] ease-in duration-200', { 'bright': !dark }]">
                <!-- 一级菜单 -->
                <div class="h-full flex flex-col pt-2 relative">
                    <!-- <el-header class="logo-wrap h-auto mb-[10px]">
                        <div class="logo flex items-center m-auto max-w-[210px] h-[60px] justify-center"#19233C>
                            <span class="iconfont iconyun text-[#999] !text-[36px]"></span>
                        </div>
                    </el-header> -->

                    <!-- <template v-for="(item, index) in applyList" :key="index">
                        <div v-if="item.type == 'app'" @click="appToLink(item.key)"
                            class=" flex items-center justify-center h-[45px] mb-[5px] cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] menu-item hover:text-color whitespace-nowrap">
                            <img :src="img(item.icon)" class="w-[35px] h-[35px] rounded-full" alt="" :title="item.title">
                        </div>
                    </template> -->
                    <div class=" flex items-center justify-center h-[45px] mb-[5px] cursor-pointer cut-style" @click="floatActive=!floatActive">
                        <span class="iconfont icontuodong !text-[30px] "></span>
                    </div>
                    <div class="mb-[20px]">
                        <template v-for="(item, index) in menus" :key="index">
                            <div v-if="item.meta.app == '' && item.meta.attr == 'common'" @click="toLink(item)"
                                :class="['flex items-center justify-center h-[56px] cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] menu-item hover:text-color whitespace-nowrap', { 'bg-[#f1f2f6] text-color menu-item-active ': (item.path == currentRoute.path || (currentRoute.path == '/admin' && item.path == '/index') || (currentRoute.meta.app && item.path == '/index')) }]">
                                <icon v-if="item.meta.icon" :name="item.meta.icon" class="!w-auto" size="24px"
                                    :title="item.meta.title" />
                            </div>
                        </template>
                    </div>
                    <a href="javascript:;"
                        class="absolute -bottom-[20px] left-[50%] cut-style iconfont icongengduo !text-[30px] qx"
                        @click="cutMenuStyleFn" title="切换"></a>
                </div>
            </el-aside>
        </div>
        <!-- 浮动样式的应用菜单 -->
        <div v-if="!floatMenuStyle&&floatActive"
            class="flex absolute bg-[#fff] w-[640px] px-[28px] py-[20px] flex-wrap left-0 top-[65px] z-10 box-border shadow-lg">
            <template v-for="(item, index) in applyList" :key="index">
                <div v-if="item.type == 'app'" @click="appToLink(item.key)"
                    class="flex items-center cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] whitespace-nowrap py-[10px] px-[15px]">
                    <img :src="img(item.icon)" class="w-[44px] h-[44px] rounded-full mr-[5px]" alt="" :title="item.title">
                    <span>{{ item.title }}</span>
                </div>
            </template>
        </div>
        <!-- 二级菜单 -->
        <template v-for="(item, index) in menus" :key="index">
            <div v-if="isTwoMenuFn(item)" class="w-[189px] box-border border-r-[1px] border-solid second-menu">
                <div
                    class="group flex flex-col items-center justify-center h-[64px] border-b-[1px] border-solid second-head cursor-pointer relative">
                    <div class="flex items-center">
                        <template v-if="floatMenuStyle">
                            <img v-if="appInfo.icon" :src="img(appInfo.icon)" class="w-[40px] h-[40px] mr-[8px]" alt="">
                            <div class="flex items-center justify-center w-[30px] h-[30px]"
                                v-else-if="Object.keys(appInfo).length">
                                <icon v-if="item.meta.icon" :name="item.meta.icon" class="!w-auto" size="24px" />
                            </div>
                        </template>
                        <span>{{ item.meta.app ? appInfo.title : item.meta.title }}</span>
                    </div>
                    <!-- 浮动样式的应用菜单 -->
                    <div v-if="floatMenuStyle"
                        class="hidden group-hover:flex absolute bg-[#fff] w-[640px] px-[28px] py-[20px] flex-wrap left-0 top-[65px] z-10 box-border shadow-lg">
                        <template v-for="(item, index) in applyList" :key="index">
                            <div v-if="item.type == 'app'" @click="appToLink(item.key)"
                                class="flex items-center justify-center cursor-pointer text-[#6d7278] hover:bg-[#f1f2f6] whitespace-nowrap py-[10px] px-[15px]">
                                <img :src="img(item.icon)" class="w-[44px] h-[44px] rounded-full mr-[5px]" alt=""
                                    :title="item.title">
                                <span>{{ item.title }}</span>
                            </div>
                        </template>
                    </div>
                </div>

                <el-scrollbar class="overflow-y-auto menus-wrap">
                    <el-menu class="apply-menu !border-0" :router="true" unique-opened="true"
                        :default-active="String(route.name)">
                        <template v-for="(twoMenu, twoIndex) in item.children">
                            <el-sub-menu :index="String(twoMenu.meta.title)" v-if="twoMenu.children && twoMenu.meta.show">
                                <template #title>
                                    <div class="w-[16px] h-[16px] relative flex items-center">
                                        <icon v-if="twoMenu.meta.icon" :name="twoMenu.meta.icon" class="absolute !w-auto"
                                            size="18px" />
                                    </div>
                                    <span class="ml-[11px] text-[15px]">{{ twoMenu.meta.title }}</span>
                                </template>
                                <template v-for="(threeMenu, threeIndex) in twoMenu.children" :key="threeIndex">
                                    <!-- 三级菜单 -->
                                    <el-sub-menu :index="String(threeMenu.meta.title)" class="three-menu"
                                        v-if="threeMenu.children && threeMenu.meta.show">
                                        <template #title>
                                            <div class="w-[16px] h-[16px] relative flex items-center">
                                                <icon v-if="threeMenu.meta.icon && floatMenuStyle"
                                                    :name="threeMenu.meta.icon" class="absolute !w-auto" size="18px" />
                                                <span v-if="!floatMenuStyle" class="iconfont icondian !text-[25px]"></span>
                                            </div>
                                            <span class="ml-[11px] text-[15px]">{{ threeMenu.meta.title }}</span>
                                        </template>
                                        <template v-for="(fourMenu, fourIndex) in threeMenu.children" :key="fourIndex">
                                            <el-sub-menu :index="String(fourMenu.meta.title)"
                                                v-if="fourMenu.children && fourMenu.meta.show">
                                                <template #title>
                                                    <div
                                                        class="w-[16px] h-[16px] relative flex items-center justify-center">
                                                        <span class="iconfont icondian !text-[25px]"></span>
                                                    </div>
                                                    <span class="ml-[11px] text-[15px]">{{ fourMenu.meta.title }}</span>
                                                </template>
                                                <template v-for="(fiveMenu, fiveIndex) in fourMenu.children"
                                                    :key="fiveIndex">
                                                    <el-menu-item v-if="fiveMenu.meta.show" class="!h-[52px] !pl-[55px]"
                                                        :index="String(fiveMenu.name)" @click="toLink(fiveMenu)">
                                                        <template #title>
                                                            <span class="text-[14px]">{{ fiveMenu.meta.title }}</span>
                                                        </template>
                                                    </el-menu-item>
                                                </template>
                                            </el-sub-menu>
                                            <el-menu-item v-else-if="fourMenu.meta.show" class="!h-[52px] !pl-[35px]"
                                                :index="String(fourMenu.name)" @click="toLink(fourMenu)">
                                                <template #title>
                                                    <span class="text-[14px]">{{ fourMenu.meta.title }}</span>
                                                </template>
                                            </el-menu-item>
                                        </template>
                                    </el-sub-menu>

                                    <!-- 二级菜单 -->
                                    <el-menu-item v-else-if="threeMenu.meta.show" class="!h-[52px] !pl-[52px]"
                                        :index="String(threeMenu.name)" @click="toLink(threeMenu)">
                                        <template #title>
                                            <span class="text-[14px]">{{ threeMenu.meta.title }}</span>
                                        </template>
                                    </el-menu-item>
                                </template>

                            </el-sub-menu>

                            <el-menu-item v-else-if="twoMenu.meta.show && twoMenu.meta.key != 'official_market'"
                                class="!pl-[25px] text-[#333]" :index="String(twoMenu.name)" @click="toLink(twoMenu)">
                                <template #title>
                                    <div v-if="twoMenu.meta.icon" class="w-[16px] h-[16px] relative flex items-center">
                                        <icon v-if="twoMenu.meta.icon" :name="twoMenu.meta.icon" class="absolute !w-auto"
                                            size="18px" />
                                    </div>
                                    <span class="ml-[11px] text-[15px]">{{ twoMenu.meta.title }}</span>
                                </template>
                            </el-menu-item>
                            <div class="flex items-center !px-[25px] h-[56px] cursor-pointer text-[#333] el-menu-item"
                                v-else-if="twoMenu.meta.show && twoMenu.meta.key == 'official_market'"
                                @click="toLink(twoMenu)">
                                <div v-if="twoMenu.meta.icon" class="w-[16px] h-[16px] relative flex items-center">
                                    <icon v-if="twoMenu.meta.icon" :name="twoMenu.meta.icon" class="absolute !w-auto"
                                        size="18px" />
                                </div>
                                <span class="ml-[11px] text-[15px]">{{ twoMenu.meta.title }}</span>
                            </div>
                        </template>

                        <!-- 系统菜单 -->
                        <template
                            v-if="applyTypeList.includes(localMenuKey) || otherTypeList.includes(localMenuKey) || floatMenuStyle">
                            <div class="!border-0 !border-t-[1px] border-solid mx-[25px] bg-[#f7f7f7] my-[5px]"></div>
                            <template v-for="(twoMenu, twoIndex) in menus">
                                <el-sub-menu :index="String(twoMenu.meta.title)"
                                    v-if="twoMenu.meta.attr == 'system' && !twoMenu.meta.app && twoMenu.children">
                                    <template #title>
                                        <div class="w-[16px] h-[16px] relative flex items-center">
                                            <icon v-if="twoMenu.meta.icon" :name="twoMenu.meta.icon"
                                                class="absolute !w-auto" size="18px" />
                                        </div>
                                        <span class="ml-[11px] text-[15px]">{{ twoMenu.meta.title }}</span>
                                    </template>
                                    <template v-for="(threeMenu, threeIndex) in twoMenu.children" :key="threeIndex">
                                        <el-sub-menu :index="String(threeMenu.meta.title)"
                                            v-if="threeMenu.meta.app && threeMenu.children">
                                            <template #title>
                                                <div class="w-[16px] h-[16px] relative flex items-center">
                                                    <icon v-if="threeMenu.meta.icon" :name="threeMenu.meta.icon"
                                                        class="absolute !w-auto" size="18px" />
                                                </div>
                                                <span class="ml-[11px] text-[15px]">{{ threeMenu.meta.title }}</span>
                                            </template>
                                            <template v-for="(fourMenu, fourIndex) in threeMenu.children" :key="fourIndex">
                                                <!-- 三级菜单 -->
                                                <el-sub-menu :index="String(fourMenu.meta.title)"
                                                    v-if="fourMenu.children && fourMenu.meta.show">
                                                    <template #title>
                                                        <div
                                                            class="w-[16px] h-[16px] relative flex items-center justify-center">
                                                            <span class="iconfont icondian !text-[25px]"></span>
                                                        </div>
                                                        <span class="ml-[11px] text-[15px]">{{ fourMenu.meta.title }}</span>
                                                    </template>
                                                    <template v-for="(fiveMenu, fiveIndex) in fourMenu.children"
                                                        :key="fiveIndex">
                                                        <el-menu-item v-if="fiveMenu.meta.show" class="!h-[52px] !pl-[55px]"
                                                            :index="String(fiveMenu.name)" @click="toLink(fiveMenu)">
                                                            <template #title>
                                                                <span class="text-[14px]">{{ fiveMenu.meta.title }}</span>
                                                            </template>
                                                        </el-menu-item>
                                                    </template>
                                                </el-sub-menu>
                                                <el-menu-item v-else-if="fourMenu.meta.show"
                                                    class="!ml-[30px] !h-[52px] !pl-[35px]" :index="String(fourMenu.name)"
                                                    @click="toLink(fourMenu)">
                                                    <template #title>
                                                        <span class="text-[14px]">{{ fourMenu.meta.title }}</span>
                                                    </template>
                                                </el-menu-item>
                                            </template>
                                        </el-sub-menu>
                                        <el-menu-item v-if="threeMenu.meta.show" class="!h-[52px] !pl-[52px]"
                                            :index="String(threeMenu.name)" @click="toLink(threeMenu)">
                                            <template #title>
                                                <span class="text-[14px]">{{ threeMenu.meta.title }}</span>
                                            </template>
                                        </el-menu-item>
                                    </template>
                                    <!-- 插件菜单 -->
                                    <template v-if="otherTypeList.includes(localMenuKey) && plugMenuType">
                                        <template v-for="(twoMenu, twoIndex) in menus">
                                            <el-sub-menu :index="String(twoMenu.meta.title)"
                                                v-if="twoMenu.meta.app && twoMenu.meta.app == plugMenuType && twoMenu.children">
                                                <template #title>
                                                    <div class="w-[16px] h-[16px] relative flex items-center">
                                                        <icon v-if="twoMenu.meta.icon" :name="twoMenu.meta.icon"
                                                            class="absolute !w-auto" size="18px" />
                                                    </div>
                                                    <span class="ml-[11px] text-[15px]">{{ twoMenu.meta.title }}</span>
                                                </template>
                                                <template v-for="(threeMenu, threeIndex) in twoMenu.children"
                                                    :key="threeIndex">
                                                    <!-- 三级菜单 -->
                                                    <el-sub-menu :index="String(threeMenu.meta.title)"
                                                        v-if="threeMenu.children && threeMenu.meta.show">
                                                        <template #title>
                                                            <div
                                                                class="w-[16px] h-[16px] relative flex items-center justify-center">
                                                                <span class="iconfont icondian !text-[25px]"></span>
                                                            </div>
                                                            <span class="ml-[11px] text-[15px]">{{ threeMenu.meta.title
                                                            }}</span>
                                                        </template>
                                                        <template v-for="(fourMenu, fourIndex) in threeMenu.children"
                                                            :key="fourIndex">
                                                            <el-menu-item v-if="fourMenu.meta.show"
                                                                class="!h-[52px] !pl-[55px]" :index="String(fourMenu.name)"
                                                                @click="toLink(fourMenu)">
                                                                <template #title>
                                                                    <span class="text-[14px]">{{ fourMenu.meta.title
                                                                    }}</span>
                                                                </template>
                                                            </el-menu-item>
                                                        </template>
                                                    </el-sub-menu>
                                                    <el-menu-item v-else-if="threeMenu.meta.show"
                                                        class="!ml-[30px] !h-[52px] !pl-[35px]"
                                                        :index="String(threeMenu.name)" @click="toLink(threeMenu)">
                                                        <template #title>
                                                            <span class="text-[14px]">{{ threeMenu.meta.title }}</span>
                                                        </template>
                                                    </el-menu-item>
                                                </template>
                                            </el-sub-menu>
                                            <el-menu-item v-else-if="twoMenu.meta.app && twoMenu.meta.app == plugMenuType"
                                                class="!pl-[25px] text-[#333]" :index="String(twoMenu.name)"
                                                @click="toLink(twoMenu)">
                                                <template #title>
                                                    <div v-if="twoMenu.meta.icon"
                                                        class="w-[16px] h-[16px] relative flex items-center">
                                                        <icon v-if="twoMenu.meta.icon" :name="twoMenu.meta.icon"
                                                            class="absolute !w-auto" size="18px" />
                                                    </div>
                                                    <span class="ml-[11px] text-[15px]">{{ twoMenu.meta.title }}</span>
                                                </template>
                                            </el-menu-item>
                                        </template>
                                    </template>
                                </el-sub-menu>
                                <el-menu-item v-else-if="twoMenu.meta.attr == 'system' && !twoMenu.meta.app"
                                    class="!pl-[25px] text-[#333]" :index="String(twoMenu.name)" @click="toLink(twoMenu)">
                                    <template #title>
                                        <div v-if="twoMenu.meta.icon" class="w-[16px] h-[16px] relative flex items-center">
                                            <icon v-if="twoMenu.meta.icon" :name="twoMenu.meta.icon"
                                                class="absolute !w-auto" size="18px" />
                                        </div>
                                        <span class="ml-[11px] text-[15px]">{{ twoMenu.meta.title }}</span>
                                    </template>
                                </el-menu-item>
                            </template>
                        </template>

                        <!-- 浮动样式 -->
                        <template v-if="floatMenuStyle">
                            <div class="!border-0 !border-t-[1px] border-solid mx-[25px] bg-[#f7f7f7] my-[5px]"></div>
                            <template v-for="(twoMenu, twoIndex) in menus">
                                <el-sub-menu :index="String(twoMenu.meta.title)"
                                    v-if="twoMenu.meta.attr == 'common' && !twoMenu.meta.app && twoMenu.children">
                                    <template #title>
                                        <div class="w-[16px] h-[16px] relative flex items-center">
                                            <icon v-if="twoMenu.meta.icon" :name="twoMenu.meta.icon"
                                                class="absolute !w-auto" size="18px" />
                                        </div>
                                        <span class="ml-[11px] text-[15px]">{{ twoMenu.meta.title }}</span>
                                    </template>
                                    <template v-for="(threeMenu, threeIndex) in twoMenu.children" :key="threeIndex">
                                        <el-sub-menu :index="String(threeMenu.meta.title)"
                                            v-if="threeMenu.children && threeMenu.meta.show">
                                            <template #title>
                                                <div class="w-[16px] h-[16px] relative flex items-center">
                                                    <icon v-if="threeMenu.meta.icon" :name="threeMenu.meta.icon"
                                                        class="absolute !w-auto" size="18px" />
                                                </div>
                                                <span class="ml-[11px] text-[15px]">{{ threeMenu.meta.title }}</span>
                                            </template>
                                            <template v-for="(fourMenu, fourIndex) in threeMenu.children" :key="fourIndex">
                                                <el-sub-menu :index="String(fourMenu.meta.title)"
                                                    v-if="fourMenu.children && fourMenu.meta.show">
                                                    <template #title>
                                                        <div
                                                            class="w-[16px] h-[16px] relative flex items-center justify-center">
                                                            <span class="iconfont icondian !text-[25px]"></span>
                                                        </div>
                                                        <span class="ml-[11px] text-[15px]">{{ fourMenu.meta.title }}</span>
                                                    </template>
                                                    <template v-for="(fiveMenu, fiveIndex) in threeMenu.children"
                                                        :key="fiveIndex">
                                                        <el-menu-item v-if="fiveMenu.meta.show" class="!h-[52px] !pl-[55px]"
                                                            :index="String(fiveMenu.name)" @click="toLink(fiveMenu)">
                                                            <template #title>
                                                                <span class="text-[14px]">{{ fiveMenu.meta.title }}</span>
                                                            </template>
                                                        </el-menu-item>
                                                    </template>
                                                </el-sub-menu>
                                                <el-menu-item v-else-if="fourMenu.meta.show" class="!h-[52px] !pl-[55px]"
                                                    :index="String(fourMenu.name)" @click="toLink(fourMenu)">
                                                    <template #title>
                                                        <span class="text-[14px]">{{ fourMenu.meta.title }}</span>
                                                    </template>
                                                </el-menu-item>
                                            </template>
                                        </el-sub-menu>

                                        <el-menu-item
                                            v-else-if="threeMenu.meta.show && threeMenu.meta.key != 'official_market'"
                                            class="!h-[52px] !pl-[52px]" :index="String(threeMenu.name)"
                                            @click="toLink(threeMenu)">
                                            <template #title>
                                                <span class="text-[14px]">{{ threeMenu.meta.title }}</span>
                                            </template>
                                        </el-menu-item>
                                        <div class="flex items-center !px-[52px] h-[56px] cursor-pointer text-[#333] el-menu-item"
                                            v-else-if="threeMenu.meta.show && threeMenu.meta.key == 'official_market'"
                                            @click="toLink(threeMenu)">
                                            <span class="text-[15px]">{{ twoMenu.meta.title }}</span>
                                        </div>
                                    </template>
                                </el-sub-menu>
                                <el-menu-item v-else-if="twoMenu.meta.attr == 'common'" class="!pl-[35px] text-[#333]"
                                    :index="String(twoMenu.name)" @click="toLink(twoMenu)">
                                    <template #title>
                                        <div v-if="twoMenu.meta.icon" class="w-[16px] h-[16px] relative flex items-center">
                                            <icon v-if="twoMenu.meta.icon" :name="twoMenu.meta.icon"
                                                class="absolute !w-auto" size="18px" />
                                        </div>
                                        <span class="ml-[11px] text-[15px]">{{ twoMenu.meta.title }}</span>
                                    </template>
                                </el-menu-item>
                            </template>
                        </template>
                    </el-menu>
                </el-scrollbar>
            </div>
        </template>
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
import { getApply } from '@/app/api/apply'

const userStore = useUserStore()
const systemStore = useSystemStore()
const route = useRoute()
const router = useRouter()
let globalAppKey = ref('') //菜单类型
let localMenuKey = ref('') //菜单类型
globalAppKey.value = storage.get('menuAppStorage')
localMenuKey.value = storage.get('menuAppStorage')

// 应用跳转 start
let applyList = ref([]);
let applyTypeList = ref([]);
let otherTypeList = ref([]); // 存着插件\会员\应用管理
let aaa = ref(false)
const getApplelist = async () => {
    const res = await getApply()
    applyList.value = applyList.value.concat(res.data)
    applyList.value.forEach((item, index) => {
        if (item.type == 'app')
            applyTypeList.value.push(item.key)
        if (item.type == 'addon')
            otherTypeList.value.push(item.key)
    })
    otherTypeList.value = otherTypeList.value.concat(['member', 'overview'])
    aaa.value = true;
}
getApplelist()
const floatActive = ref(false)
const appLink = ref({})
const getAppLink = () => {
    userStore.routers.forEach((item, index) => {
        if (item.meta.app != '') {
            if (item.children && item.children.length) {
                appLink.value[item.meta.app] = findFirstValidRoute(item.children)
            } else {
                appLink.value[item.meta.app] = item.name
            }
        }
    })
}
getAppLink()
const appToLink = (addon: string) => {
    globalAppKey.value = addon;
    localMenuKey.value = addon;

    storage.set({ key: 'menuAppStorage', data: addon })
    storage.set({ key: 'plugMenuTypeStorage', data: '' })

    let data = userStore.appMenuList
    if (!data.length) {
        data.push(addon)
    } else if (!data.includes(addon)) {
        data.push(addon)
    }

    userStore.setAppMenuList(data)
    floatActive.value = false
    router.push({ name: appLink.value[addon] })
    
}
// 应用跳转 end


const menus = computed(() => {
    const menus = []
    userStore.routers.forEach((item, index) => {
        if (item.children && item.children.length) {
            item.name = findFirstValidRoute(item.children)
            menus.push(item)
        } else {
            menus.push(item)
        }
    })
    return menus
})

const dark = computed(() => {
    return systemStore.dark
})

// 获取应用详情
const appInfo = ref({})
const getAppInfo = (type) => {
    getAddonByKey(type).then(res => {
        appInfo.value = res.data
    })
}

let currMetaAppType = "";
let plugMenuType = ref(''); //插件类型
let currentRoute = ref(''); // 当前路由
watch(route, () => {
    plugMenuType.value = storage.get('plugMenuTypeStorage')

    let data = route.matched[1]
    currentRoute.value = route.matched[1];
    localMenuKey.value = data.meta.key;

    data.meta.app = !data.meta.app && !data.meta.attr ? 'member' : data.meta.app;

    // 等待applist加载完成
    setTimeout(() => {
        // 获取应用详情
        if (data.meta.app && (!currMetaAppType || currMetaAppType != data.meta.app)) {
            appInfo.value = {};
            currMetaAppType = data.meta.app;
            let appInfoKey = otherTypeList.value.includes(data.meta.app) ? globalAppKey.value : data.meta.app;
            getAppInfo(appInfoKey)
        }
    }, 800);

    systemStore.$patch(state => {
        state.menuDrawer = false
    })
}, { immediate: true })


// 跳转链接
const toLink = (data) => {
    if (data.meta.key != 'official_market') {
        router.push({ name: data.name })
    } else {
        window.open('https://www.niucloud.com/product/', '_blank')
    }
}

// 主题风格
const sidebar = computed(() => {
    return systemStore.sidebar
})

// 切换风格
let floatMenuStyle = ref(false);
floatMenuStyle.value = storage.get('floatMenuStyle') || false;
const cutMenuStyleFn = () => {
    floatMenuStyle.value = true;
    storage.set({ key: 'floatMenuStyle', data: true });
    location.reload();
}


// 控制二级菜单的显示
const isTwoMenuFn = (item) => {
    let bool = (otherTypeList.value.includes(localMenuKey.value) && globalAppKey.value == item.meta.app)
        || (floatMenuStyle.value && !applyTypeList.value.includes(localMenuKey.value) && !otherTypeList.value.includes(localMenuKey.value) && globalAppKey.value == item.meta.app)
        || (floatMenuStyle.value && applyTypeList.value.includes(localMenuKey.value) && (item.meta.key == localMenuKey.value || item.meta.app == localMenuKey.value))
        || (!floatMenuStyle.value && !otherTypeList.value.includes(localMenuKey.value) && (item.meta.key == localMenuKey.value || item.meta.app == localMenuKey.value))
    return bool;
}
</script>

<style lang="scss">
.layout-aside {
    // border-right: 1px solid var(--el-border-color-lighter);

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

.second-menu .el-sub-menu .el-sub-menu__title {
    padding-left: 25px !important;
    padding-right: 25px !important;

    .el-icon.el-sub-menu__icon-arrow {
        right: 25px;
        font-weight: bolder;
        font-size: 14px;
    }
}

.three-menu.el-sub-menu .el-sub-menu__title {
    padding-left: 45px !important;
}

.text-color {
    color: var(--el-color-primary);
}

.aside-drawer {
    .el-drawer__body {
        padding: 0px !important;
    }
}

.cut-style {
    color: #6d7278;
    
}
.cut-style.qx {
    transform: translateX(-50%);
}
// 主题二
.two-type {
    .logo-wrap {
        .logo span {
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

    .layout-aside {
        // background-color: #12192D;
        background-color: #2b303b;

        .menu-item {
            color: #fff;

            &.menu-item-active,
            &:hover {
                background-color: var(--el-color-primary);
                color: #fff;
            }
        }
    }

    .second-menu {
        background-color: #F5F7F9;

        .el-menu {
            background-color: transparent;

            .el-menu-item:hover {
                background-color: #fff;
                color: var(--el-color-primary);
            }

            .el-menu-item.is-active {
                background-color: #fff;
            }
        }

        .el-sub-menu__title:hover {
            background-color: #fff;
            color: var(--el-color-primary);
        }
    }

    .cut-style {
        color: #FFF;
    }
}


// 主题三
.three-type {
    .logo-wrap {
        .logo span {
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

    .layout-aside {
        background-color: #2b303b;

        .menu-item {
            color: #fff;

            &.menu-item-active,
            &:hover {
                background-color: #303848;
                color: var(--el-color-primary);
            }
        }
    }

    .second-menu {
        background-color: #303848;

        .second-head {
            color: #fff;
            border-color: #364059;
        }

        .el-menu {
            background-color: transparent;

            .el-menu-item {
                color: #fff;
            }

            .el-menu-item:hover,
            .el-menu-item.is-active {
                background-color: var(--el-color-primary);
            }
        }

        .el-sub-menu__title:hover {
            background-color: var(--el-color-primary);
            ;
        }

        .el-sub-menu__title {
            color: #fff;
        }
    }

    .cut-style {
        color: #FFF;
    }
}

.menus-wrap {
    height: calc(100vh - 64px);
}
</style>
