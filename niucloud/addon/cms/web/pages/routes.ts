export default [
    {
        path: "/cms/article/list",
        component: () => import('~/cms/pages/article/list.vue')
    },
    {
        path: "/cms/article/detail",
        component: () => import('~/cms/pages/article/detail.vue')
    }
]