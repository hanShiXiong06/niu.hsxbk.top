<template>
    <component :is="layout" />
</template>

<script lang="ts" setup>
import { ref,computed, watch, markRaw, defineAsyncComponent } from 'vue'
import useSystemStore from '@/stores/modules/system'
const systemStore = useSystemStore()
const modules = import.meta.glob('./*/index.vue')

// 主题样式
let themeStyle = {
    'oneType': 'default',  
    'twoType': 'profession',
    'threeType': 'business'
}

watch(() =>systemStore.sidebarStyle, () => {location.reload();})

const adminLayout = themeStyle[systemStore.sidebarStyle]
const layout = ref<any>(null)
Object.keys(modules).forEach(key => {
    key.indexOf(adminLayout) !== -1 && (layout.value = markRaw(defineAsyncComponent(modules[key])))
})
</script>

<style lang="scss" scoped></style>
