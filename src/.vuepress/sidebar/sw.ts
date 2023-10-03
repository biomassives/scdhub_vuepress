import { sidebar } from "vuepress-theme-hope";

export const swSidebar = sidebar({
  "/": [
    "", 
    
    {
      text: "Mada Endelevu",
      icon: "discover",
      prefix: "topics/",
      children: "structure",
    },
    {
      text: "Suluhisho Endelevu",
      icon: "note",
      prefix: "solutions-database/",
      children: "structure",
    },
    "slides",
  ],
});
