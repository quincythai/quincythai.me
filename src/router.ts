import { createMemoryHistory, createRouter } from "vue-router";

// import HomePage from "@/pages/HomePage.vue";
import HomePage from "./pages/HomePage.vue";
// import NotFoundPage from "./pages/NotFoundPage.vue";
// import ProjectsPage from "@/pages/ProjectsPage.vue";

const routes = [
  { path: "/", component: HomePage },
  // { path: "/about", component: ProjectsPage },
  // { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
