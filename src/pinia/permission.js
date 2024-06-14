import { defineStore } from 'pinia'
import router, { constantRoutes, asyncRoutes } from '@/router'
import { postPermissions, postAuthPermission } from '@/api/permission'

export const usePermissionStore = defineStore('permission', {
  state: () => ({
    permissions: [], // 用户权限
    accessRoutes: constantRoutes, // 可访问路由集合
    routes: constantRoutes, // 所有路由集合
    authedRoutes: []
  }),
  actions: {
    setPermission() {
      postPermissions({}).then((res) => {
        this.permission = res.data.permissions
      })
    },
    // TODO:之后改改这块，动态路由的添加
    // 异步接口请求，动态添加路由
    getPermissonRoutes(payload) {
      // api request
      const data = {
        roleName: payload.roleName
      }
      // 后端根据角色名称，查询授权菜单
      postAuthPermission(data).then((res) => {
        const { authedRoutes } = res.data
        this.setAuthedRoutes(authedRoutes)
        // 过滤只显示授权菜单
        const accessedRoutes = []

        for (const path of authedRoutes) {
          for (const item of asyncRoutes) {
            if (item.path === path) {
              accessedRoutes.push(item)
            }
          }
        }
        // 动态添加路由
        router.isReady().then(() => {
          accessedRoutes.forEach((route) => {
            const routeName = route.name
            if (!router.hasRoute(routeName)) {
              router.addRoute(route)
            }
          })
          router.options.routes = constantRoutes.concat(asyncRoutes)
          this.accessRoutes = constantRoutes.concat(accessedRoutes)
        })
      })
    },
    setAuthedRoutes(authedRoutes) {
      this.authedRoutes = authedRoutes
      localStorage.setItem('authedRoutes', JSON.stringify(authedRoutes))
    },
    // 动态添加可访问路由表
    getRoutes() {
      // api request
      if (localStorage.getItem('authedRoutes')) {
        const authedRoutes = JSON.parse(localStorage.getItem('authedRoutes'))
        const accessedRoutes = []
        for (const path of authedRoutes) {
          for (const item of asyncRoutes) {
            if (item.path === path) {
              accessedRoutes.push(item)
            }
          }
        }
        accessedRoutes.forEach((route) => {
          const routeName = route.name
          if (!router.hasRoute(routeName)) {
            router.addRoute(route)
          }
        })
      }
      this.routes = constantRoutes.concat(asyncRoutes)
    },
  }
})