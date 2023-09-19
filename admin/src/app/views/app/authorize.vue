<template>
  <div
    class="main main-container min-w-[1000px] min-h-[650px]"
    v-loading="loading"
  >
    <el-card class="box-card !border-none" shadow="never" v-if="!loading">
      <div class="flex">
        <div class="left bg-gray-100 mr-[14px] w-[402px] h-[188px]">
          <div class="flex">
            <span class="ml-[32px] mt-[34px] text-[20px] text-[#333333]">版本信息</span>
            <el-button class="ml-[166px] mt-[34px] text-[#DDDDDD]" plain 
              >检测更新</el-button
            >
          </div>
          <div>
            <p class="ml-[32px] mt-[34px] text-[14px] text-[#797979]">
              当前版本 <span class="text-[26px]">1.0.35</span
              ><em class="text-[12px] text-[#797979]">(当前已是最新版本)</em>
            </p>
          </div>
        </div>
        <div class="right flex bg-gray-100 w-[1188px] h-[188px]">
          <div class="left w-[730px]">
            <div class="flex w-[100%]">
              <p class="ml-[30px] mt-[34px] text-[20px]  text-[#333333]">授权信息</p>
              <span class="ml-[30px] mt-[40px] text-[14px] text-[#666666]"
                >杭州数字运动科技有限公司</span
              >
            </div>
            <div class="ml-[70px] mt-[44px] w-[100%]">
              <span class="text-[14px] text-[#797979]"
                >授权域名<em class="ml-[12px] text-[12px] text-[#222222]">sseeee</em></span
              >
              <span class="text-[14px] ml-[84px] text-[#797979]"
                >授权码 <em class="ml-[12px] text-[12px] text-[#222222]">94302</em><el-icon class="text-[12px] ml-[20px]"><View />
                </el-icon><el-icon class="text-[12px] ml-[2px]"><Hide /></el-icon></span
              >
            </div>
          </div>
          <div class="right flex w-[458px] ml-[200px] mt-[70px]" >
            <el-button class="btn1" type="primary" >授权码认证</el-button>
            <el-popover :visible="visible" placement="bottom" :width="478" popper-class="popper1">
              <p class="leading-[32px] w-[418px] h-[96px] text-[18px] mx-[auto] mt-[40px]">您在官方应用市场购买任意一款应用，即可获得授权码。输入正确授权码认证通过后，即可支持在线升级和其它相关服务</p>
              <div style="text-align: right; margin: 0">
               
                <el-button class="btn3 mt-[36px]" size="default" type="plain" @click="visible = false"
                  >去应用市场逛逛</el-button
                >
                <el-button class=" btn4 mt-[36px]" size="default"  type="plain" text @click="visible = false"
                  >关闭</el-button
                >
              </div>
              <template #reference>
                <el-button class="btn2" @click="visible = true">如何获取授权码?</el-button>
              </template>
            </el-popover>
          </div>
        </div>
      </div>
      <!-- <div class="flex items-center">
                <span class="text-[20px]">{{ pageName }}</span>
                <span v-if="authinfo" class="text-[14px] ml-[20px] block"> {{ t('authCode') }}： {{ authinfo.auth_code }}
                    <span class="cursor-pointer text-primary" @click="authEvent">{{ t('updateCode') }}</span> </span>
            </div> -->
      <!-- <div v-if="authinfo" class="mt-[50px]">
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

            </div> -->
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { t } from "@/lang";
import { getAuthinfo, setAuthinfo, getAdminAuthinfo } from "@/app/api/module";
import { FormInstance, FormRules } from "element-plus";
import { useRoute } from "vue-router";

const route = useRoute();
const pageName = route.meta.title;

const authinfo = ref("");
const loading = ref(true);
const saveLoading = ref(false);
const checkAppMange = () => {
  getAuthinfo()
    .then((res) => {
      loading.value = false;
      if (res.data.data && res.data.data.length != 0) {
        authinfo.value = res.data.data;
      }
    })
    .catch(() => {
      loading.value = false;
    });
};
checkAppMange();

const formData = reactive<Record<string, string>>({
  auth_code: "",
  auth_secret: "",
});
const formRef = ref<FormInstance>();

// 表单验证规则
const formRules = reactive<FormRules>({
  auth_code: [
    { required: true, message: t("authCodePlaceholder"), trigger: "blur" },
  ],
  auth_secret: [
    { required: true, message: t("authSecretPlaceholder"), trigger: "blur" },
  ],
});

const setFormData = async () => {
  const data = await (await getAdminAuthinfo()).data;
  Object.keys(formData).forEach((key: string) => {
    if (data[key] != undefined) formData[key] = data[key];
  });
};
setFormData();

const save = async (formEl: FormInstance | undefined) => {
  if (saveLoading.value || !formEl) return;

  await formEl.validate(async (valid) => {
    if (valid) {
      saveLoading.value = true;

      setAuthinfo(formData)
        .then(() => {
          saveLoading.value = false;
          checkAppMange();
        })
        .catch(() => {
          saveLoading.value = false;
        });
    }
  });
};

const authEvent = () => {
  authinfo.value = "";
};

const market = () => {
  window.open("https://www.niucloud.com/product");
};

const visible = ref(false)
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
em{
    font-style:normal
}
:deep(.btn1){
   width: 154px;
   height: 48px;
   border: 1px solid #2454FF;
   border-radius: 4px;
   font-size: 18px;
}
:deep(.btn2){
   width: 154px;
   height: 48px;
   border: 1px solid #2454FF;
   border-radius: 4px;
   font-size: 18px;
   color: #2454FF;
}
:deep(.btn3){
   border: 1px solid #2454FF;
   border-radius: 4px;
   font-size: 18px;
   color: #2454FF;
}
:deep(.btn4){
   border: 1px solid #2454FF;
   border-radius: 4px;
   font-size: 18px;
   color: #2454FF;
}
</style>
