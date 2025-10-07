import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ fixes broken assets & 404 on Vercel
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
