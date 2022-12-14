import { defaultTheme } from "vuepress";
import { demoblockPlugin } from "vuepress-plugin-demoblock-plus";
export default {
  lang: "zh-CN",
  base: "/vint-ui/",
  title: "Vue3 组件库",
  plugins: [demoblockPlugin()],
  theme: defaultTheme({
    navbar: [
      { text: "Home", link: "/" },
      { text: "Github", link: "https://github.com/qzyqzy/vint-ui" },
      { text: "Npm", link: "https://www.npmjs.com/package/vint-ui" },
    ],
    sidebar: [
      {
        text: "组件库搭建",
        collapsible: true,
        children: ["/md/lib/start", "/md/lib/better"],
      },
      "/",
      {
        text: "CSS 组件",
        collapsible: true,
        children: ["/md/cssComponents/button"],
      },
    ],
  }),
};
