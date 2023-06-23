import { defineUserConfig } from "vuepress";
import { searchPlugin } from '@vuepress/plugin-search'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "SCD Hub",
      description: "Sustainable Community Development Hub",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "Sustainable Community Development Hub 可持續社區發展中心",
    },
  },
  plugins: [
    searchPlugin({
      // options
    }),
  ],

  theme,

  shouldPrefetch: false,
});
