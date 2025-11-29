import NotFound from "./pages/NotFound.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/home.vue"),
  },
  {
    path: "/studio",
    name: "Studio",
    component: () => import("./pages/studio.vue"),
  },
  {
    path: "/oscarstudio",
    name: "OscarStudioArticle",
    component: () => import("./pages/oscarstudio.vue"),
  },
  {
    path: "/akinet",
    name: "Akinet",
    component: () => import("./pages/akinet.vue"),
  },
  {
    path: "/akiworkflow",
    name: "AkiWorkflow",
    component: () => import("./pages/akiworkflow.vue"),
  },
  {
    path: "/lamnhac",
    name: "LamNhac",
    component: () => import("./pages/lamnhac.vue"),
  },
  {
    path: "/tachnhac",
    name: "TachNhac",
    component: () => import("./pages/tachnhac.vue"),
  },
  {
    path: "/akiapp",
    name: "AkiApp",
    component: () => import("./pages/akiapp.vue"),
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("./pages/posts.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];
