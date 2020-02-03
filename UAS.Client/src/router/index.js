import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import Summary from "@/views/Summary.vue";
import Match from "@/views/Match.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    children: [
      {
        path: "",
        name: "summary",
        component: Summary
      },
      {
        path: "match",
        name: "match",
        component: Match
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
