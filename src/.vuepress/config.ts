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
      description: "Sustainable Community Development Hub",
    },
    "/hi/": {
      lang: "hi-IN",
      title: "Hindi",
      description: "Sustainable Community Development Hub",
    },
    "/ne/": {
      lang: "ne-NE",
      title: "Nepali",
      description: "Sustainable Community Development Hub",
    },
    "/es/": {
      lang: "es-MX",
      title: "Español",
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
