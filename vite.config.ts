import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "lib", // 指定输出路径
    // https://cn.vitejs.dev/config/build-options.html#build-lib
    lib: {
      entry: resolve(__dirname, "packages/index.ts"),
      name: "vint",
      // the proper extensions will be added
      fileName: "vint",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
