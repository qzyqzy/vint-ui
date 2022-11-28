import { defaultTheme } from "vuepress";
import { demoblockPlugin } from "vuepress-plugin-demoblock-plus";
export default {
  lang: "zh-CN",
  title: "您好！",
  plugins: [demoblockPlugin()],
  theme: defaultTheme({
    navbar: [
      { text: "Home", link: "/" },
      { text: "Github", link: "https://github.com/qzyqzy/deft-ui" },
      { text: "Npm", link: "https://www.npmjs.com/package/deft-ui" },
    ],
    sidebar: [
      "/",
      {
        text: "CSS 组件",
        collapsible: false,
        children: ["/md/cssComponents/button"],
      },
    ],
  }),
};
