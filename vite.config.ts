import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/cv.pdf",
          dest: "", // à la racine de dist
        },
      ],
    }),
  ],
  base: "/quiz-cpam/",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
