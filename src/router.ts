import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import TestPage from "./pages/TestPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/test", component: TestPage },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
