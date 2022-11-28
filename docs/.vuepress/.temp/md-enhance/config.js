import { defineClientConfig } from "@vuepress/client";
import CodeDemo from "C:/Users/15757/Desktop/其他/UI/Vint/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    
  },
});
