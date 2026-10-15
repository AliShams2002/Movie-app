import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "firebase-vendor": [
            "firebase/app",
            "firebase/auth",
            "firebase/firestore",
            "firebase/storage",
          ],
          "motion-vendor": ["framer-motion"],
          "swiper-vendor": ["swiper", "swiper/react"],
        },
      },
    },
    chunkSizeWarningLimit: 600, // اختیاری — warning threshold
  },
});
