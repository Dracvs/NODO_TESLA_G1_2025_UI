import { vitePlugin as remix } from "@remix-run/dev";
<<<<<<< HEAD
//import tailwindcss from "@tailwindcss/vite";
=======
>>>>>>> 77b7f1b (Initial commit from create-remix)
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
<<<<<<< HEAD
    //tailwindcss(),
=======
>>>>>>> 77b7f1b (Initial commit from create-remix)
    tsconfigPaths(),
  ],
});
