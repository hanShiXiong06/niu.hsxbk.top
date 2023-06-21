<template>
    <div class="main-container">
        <el-card class="box-card !border-none" shadow="never">
            <div class="flex justify-between items-center">
                <span class="text-[24px]">{{pageName}}</span>
            </div>
            <div>
                <el-table :data="cronTableData.data" size="large" v-loading="cronTableData.loading">

                    <template #empty>
                        <span>{{ !cronTableData.loading ? t('emptyData') : '' }}</span>
                    </template>
                    
                    <el-table-column prop="name" :label="t('title')" min-width="150" />
					<el-table-column prop="key" :label="t('key')" min-width="150" />
					<el-table-column :label="t('crondType')" min-width="150">
						<template #default="{ row }">
							{{ row.crontab_content }}
						</template>
					</el-table-column>
                </el-table>
                <div class="mt-[16px] flex justify-end">
                    <el-pagination v-model:current-page="cronTableData.page" v-model:page-size="cronTableData.limit"
                        layout="total, sizes, prev, pager, next, jumper" :total="cronTableData.total"
                        @size-change="loadCronList()" @current-change="loadCronList" />
                </div>
            </div>

        </el-card>
        <cron-info ref="cronDialog" @complete="loadCronList" />
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { t } from '@/lang'
import { getCronList,getCronType } from '@/api/sys'
import { ElMessageBox, FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
import CronInfo from '@/views/setting/components/cron-info.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const pageName = route.meta.title;

const cronTableData = reactive({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [],
    searchParam: {
        title: '',
        type:'',
        last_time:''
    }
})
const typeList = ref([])

const searchFormRef = ref<FormInstance>()

const setTypeList = async () => {
    typeList.value = await (await getCronType()).data
}
setTypeList()

/**
 * 获取任务列表
 */
const loadCronList = (page: number = 1) => {
    cronTableData.loading = true
    cronTableData.page = page

    getCronList({
        page: cronTableData.page,
        limit: cronTableData.limit,
        ...cronTableData.searchParam
    }).then(res => {
        cronTableData.loading = false
        cronTableData.data = res.data.data
        cronTableData.total = res.data.total
    }).catch(() => {
        cronTableData.loading = false
    })
}
loadCronList()

const router = useRouter()

const cronDialog: Record<string, any> | null = ref(null)
/**
 * 查看任务
 * @param data
 */
const infoEvent = (data: any) => {
    cronDialog.value.setFormData(data)
    cronDialog.value.showDialog = true
}
 
</script>

<style lang="scss" scoped></style>
