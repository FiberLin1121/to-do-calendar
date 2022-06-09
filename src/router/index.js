//載入官方元件
import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

//載入自定義分頁元件
import Index from "@/components/pages/index";
import InnerPage from "@/components/pages/innerPage";
import Notes from "@/components/tabs/notes";
import TodoLists from "@/components/tabs/todoLists";
import HabitTracker from "@/components/tabs/habitTracker";

//啟用 VueRouter 元件
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: "active",
  routes: [
    {
      path: "*",
      redirect: "/",
    },
    {
      name: "index",
      path: "/",
      component: Index,
    },
    {
      name: "innerPage",
      path: "/innerPage",
      component: InnerPage,
      meta: {
        requireAuth: true,
      },
      children: [
        {
          name: "todoLists",
          path: "todoLists",
          component: TodoLists,
          meta: {
            requireAuth: true,
          },
        },
        {
          name: "habitTracker",
          path: "habitTracker",
          component: HabitTracker,
          meta: {
            requireAuth: true,
          },
        },
        {
          name: "notes",
          path: "notes",
          component: Notes,
          meta: {
            requireAuth: true,
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (sessionStorage.getItem("token")) {
      store.commit("isLoading", true);
      setTimeout(() => {
        next();
      }, 1000);
    } else {
      store.commit("isLoginModalOpen", true);
      console.log("router commit : isLoginModalOpen = true");
      next("/");
    }
  } else {
    store.commit("isLoading", true);
    setTimeout(() => {
      next();
    }, 1000);
  }
});

router.afterEach(function (to) {
  store.commit("isLoading", false);
});

//匯出到 main.js
export default router;
