import { ViteSSG } from "vite-ssg";
import Main from "./Main.vue";
import { routes } from "./router.js";
import "./style.css";

const firebaseConfig = {
  // apiKey: "...",
  // authDomain: "...",
  // projectId: "...",
  // ...
};

export const createApp = ViteSSG(Main, { routes }, ({ router, isClient }) => {
  if (isClient) {
    router.afterEach(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});