import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "sign_up",
      path: "/signup",

      component: () => import("@/views/SignUp")
    },
    {
      name: "sign_in",
      path: "/signin",
      component: () => import("@/views/SignIn")
    },
    {
      name: "home",
      path: "/",

      component: () => import("@/views/Home")
    },
    {
      name: "user_posts",
      path: "/user/posts",

      component: () => import("@/views/UserPosts")
    },
    {
      name: "profile_edit",
      path: "/user/:username/edit",

      component: () => import("@/views/ProfileEdit")
    },
    {
      name: "profile",
      path: "/user/:username",

      component: () => import("@/views/Profile")
    },

    {
      name: "Post",
      path: "/post/:post/edit",

      component: () => import("@/views/PostEdit")
    },
    {
      name: "Post",
      path: "/post/:post",

      component: () => import("@/views/Post")
    },
    {
      name: "Categories",
      path: "/categories",

      component: () => import("@/views/Categories")
    }
  ]
});
