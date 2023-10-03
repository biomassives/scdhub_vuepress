import { sidebar } from "vuepress-theme-hope";

export const hiSidebar = sidebar({
  "/": [
    "", 
    
    {
      text: "स्थिरता विषय",
      icon: "discover",
      prefix: "topics/",
      children: "structure",
    },
    {
      text: "समाधान डेटाबेस",
      icon: "note",
      prefix: "solutions-database/",
      children: "structure",
    },
    "slides",
  ],
});
