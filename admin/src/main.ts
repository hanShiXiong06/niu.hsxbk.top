import { createApp } from 'vue'
import App from './App.vue'
import roter from './router'
import ElementPlus from 'element-plus'
import pinia from './stores'
import lang from './lang'
import '@/styles/index.scss'
import { useElementIcon } from './utils/common'

// import 'highlight.js/styles/github.css'

import 'highlight.js/styles/stackoverflow-light.css';
import hljs from 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
window.hl =hljs
//window.hl =hljs hljs需打印或者其它方式赋值，否则代码预览时无法展示代码色彩
//报错请执行
// npm install highlight.js
//npm install @highlightjs/vue-plugin@2.1.0
async function run() {
    const app = createApp(App)
    app.use(pinia)
    app.use(lang)
    app.use(roter)
    app.use(ElementPlus)
    app.use(hljsVuePlugin)
    useElementIcon(app)
    app.mount('#app')
}

run()
