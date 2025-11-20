import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/saroj-lamichhane/",   // your repo name — important!
  server: {
    host: "localhost",
    port: 5173,
    open: true,
  },
  plugins: [
    react(),
    // componentTagger() // keep commented
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
