<template>
  <div class="main-container w-full bg-white" v-loading="loading">
    <el-card class="box-card !border-none" shadow="never" v-if="applyList.list.length">
      <div class="flex justify-between items-center">
        <span class="text-[20px]">应用管理</span>
      </div>
      <div class="flex flex-wrap plug-list pb-10 plug-large">
        <!-- <div v-for="(item, index) in applyList.list" :key="index + 'b'"
                    class="app-item cursor-pointer mr-4 mt-[20px] pb-2 bg-[#f7f7f7]" @click="toLink(item.key)">
                    <div class="flex justify-center items-center">
                        <el-image class="w-[240px] h-[120px]" :src="img(item.icon)" fit="contain">
                            <template #error>
                                <div class="image-slot">
                                    <img class="w-[240px] h-[120px]"
                                        src="@/app/assets/images/app_store/app_store_default.png" />
                                </div>
                            </template>
                        </el-image>
                    </div>
                    <div class="flex w-[240px] h-[46px]">
                        <div class="text-left mt-2 w-[190px]">
                            <p class="app-text text-[14px] text-[#222] pl-2">{{ item.title }}</p>
                            <p class="app-text text-[12px] text-[#999] pl-2">{{ item.desc }}</p>
                        </div>
                    </div>
                </div> -->
        <div v-for="(item, index) in applyList.list" :key="index + 'b'">
            <div v-if="appLink[item.key]" class="relative app-item cursor-pointer px-4 mr-4 mt-[20px] bg-[#f7f7f7] border-[1px] hover:border-primary">
                <div @click="toLink(item.key)">
                    <div class="flex py-5 items-center">
                        <div class="flex justify-center items-center">
                            <el-image class="w-[50px] h-[50px]" :src="img(item.icon)" fit="contain">
                                <template #error>
                                    <div class="image-slot">
                                        <img class="w-[50px] h-[50px]" src="@/app/assets/images/app_store/app_store_default.png"/>
                                    </div>
                                </template>
                            </el-image>
                        </div>
                        <div class="flex flex-col justify-between text-left w-[190px]">
                            <p class="app-text w-[190px] text-[17px] text-[#222] pl-3">
                                {{ item.title }}
                            </p>
                        </div>
                    </div>
                    <div class="border-t-[1px] border-[#e8e9eb] py-3">
                        <p class="app-text text-[14px] text-[#999] w-[200px]">
                            {{ item.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </el-card>
    <div class="empty flex items-center justify-center" v-if="!loading && !applyList.list.length">
        <el-empty :description="t('emptyData')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { getApply } from "@/app/api/apply";
import { img } from "@/utils/common";
import { findFirstValidRoute } from "@/router/routers";
import useUserStore from "@/stores/modules/user";
import { useRouter } from "vue-router";
import { t } from '@/lang'
const userStore = useUserStore();
const router = useRouter();
const applyList = reactive({
  list: [],
});
let loading = ref(true);
const getApplelist = async () => {
  const res = await getApply({ type: "tart" });
  applyList.list = res.data;
  loading.value = false;
};
getApplelist();

const appLink = ref({});
const getAppLink = () => {
  userStore.routers.forEach((item, index) => {
    if (item.meta.app != "") {
      if (item.children && item.children.length) {
        appLink.value[item.meta.app] = findFirstValidRoute(item.children);
      } else {
        appLink.value[item.meta.app] = item.name;
      }
    }
  });
};
getAppLink();

const toLink = (addon: string) => {
  let data = userStore.appMenuList;
  if (!data.length) {
    data.push(addon);
  } else if (!data.includes(addon)) {
    data.push(addon);
  }
  userStore.setAppMenuList(data);
  router.push({ name: appLink.value[addon] });
};
</script>

<style lang="scss" scoped>
.main-container,
.empty {
  min-height: calc(100vh - 84px);
}

.app-text {
  overflow: hidden;
  /* 超出部分隐藏 */
  white-space: nowrap;
  /* 禁止文本换行 */
  text-overflow: ellipsis;
  /* 显示省略号 */
}
.app-item:hover .with-ite {
  display: block;
}
</style>
