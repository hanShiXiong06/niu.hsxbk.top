import type { RouterConfig } from '@nuxt/schema'

const routeFiles = import.meta.glob('../**/routes.ts')
const routes = []

for (const key of Object.keys(routeFiles)) {
    await routeFiles[key]().then(res => {
        routes.push(...res.default)
    })
}

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    routes: (_routes) => routes,
    strict: false
}
