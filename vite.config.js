import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/sparta-todo/",
  plugins: [react()],
  resolve: {
    alias: {
      "@shadcn-ui": path.resolve(__dirname, "./src/@shadcn/ui"),
      "@shadcn-lib": path.resolve(__dirname, "./src/@shadcn/lib"),
      "@shadcn-app": path.resolve(__dirname, "./src/@shadcn/app"),
      components: path.resolve(__dirname, "./src/components"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
});
