import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,svg}"],
      },
      manifest: {
        icons: [
          {
            src: "/icon.svg",
            sizes: "256x256",
            type: "image/svg+xml",
          },
        ],
        theme_color: "#000000",
      },
    }),
  ],
});
