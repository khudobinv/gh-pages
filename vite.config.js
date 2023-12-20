import { defineConfig } from "vite";
import ViteGHPages from "vite-plugin-gh-pages";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteGHPages({ base: "/khudobinv.github.io/" })],
});
