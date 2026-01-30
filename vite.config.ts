import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build:{
    chunkSizeWarningLimit: 1000, // Increase the limit to 1 MB new
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@widgets": path.resolve("src/widgets"),
      "@features": path.resolve("src/features"),
      "@entities": path.resolve("src/entities"),
      "@common": path.resolve("src/app/common"),
      "@assets": path.resolve("src/assets"),
    },
  },
});
