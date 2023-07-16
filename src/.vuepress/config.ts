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
      description: "सतत सामुदायिक विकास केंद्र",
    },
    "/ne/": {
      lang: ne-NE",
      title: "नेपाली",
      description: "दिगो सामुदायिक विकास हब",
    },
    "/es/": {
      lang: es-MX",
      title: "नेपाली",
      description: "दिगो सामुदायिक विकास हब",
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
