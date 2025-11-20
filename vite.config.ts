import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/saroj-lamichhane/",   // 👈 REQUIRED FOR GitHub Pages
  server: {
    host: "localhost",
    port: 5173,
    open: true,
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
