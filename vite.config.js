import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(() => {
  // const env = process?.env || {};
  return {
    plugins: [react()],

    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          additionalData: `@import "./src/scss/variables.scss";`,
        },
      },
    },

    // base url should be /RedCards/ for gh-pages and / for development
    // base: env.VITE_APP_ENV === "production" ? "/RedCards/" : "/",
  };
});
