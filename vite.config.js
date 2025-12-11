import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.[jt]sx?$/,
    jsx: "automatic",
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress warnings about /*#__PURE__*/ comments in node_modules
        if (warning.message && warning.message.includes("/*#__PURE__*/")) {
          return;
        }
        warn(warning);
      },
    },
  },
});

