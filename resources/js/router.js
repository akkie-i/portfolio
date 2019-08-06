import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import topPage from './pages/topPage.vue'
//import Login from './pages/Login.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: topPage
  },
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
    mode: 'history', // ★ 追加
    routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router