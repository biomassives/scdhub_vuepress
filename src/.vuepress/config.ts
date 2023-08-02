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
    "/hi/": {
      lang: "hi-IN",
      title: "हिंदी",
      description: "SCD Hub सतत सामुदायिक विकास केंद्र",
    },
    "/ne/": {
      lang: "ne-NE",
      title: "नेपाली",
      description: "SCD Hub दिगो सामुदायिक विकास हब",
    },
    "/es/": {
      lang: "es-MX",
      title: "नेपाली",
      description: "SCD Hub Centro de desarrollo comunitario sostenible",
    },
    "/sw/": {
      lang: "sw-KE",
      title: "Swahili",
      description: "SCD Hub  Kitovu cha Maendeleo Endelevu ya Jamii",
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
