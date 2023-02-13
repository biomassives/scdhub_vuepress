import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "", 
    
    {
      text: "Topics",
      icon: "discover",
      prefix: "topics/",
      children: "structure",
    },
    {
      text: "Solutions Database",
      icon: "note",
      prefix: "solutions-database/",
      children: "structure",
    },
    "slides",
  ],
});
