import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Solutions",
    icon: "creative",
    prefix: "/topics/",
    children: [
      {
        text: "Drinking Water",
        icon: "creative",
        prefix: "",
        children: ["drinking-water"],
      },
      {
        text: "Solid Waste",
        icon: "config",
        prefix: "",
        children: ["municipal-solid-waste"],
      },
      {
        text: "Wastewater",
        icon: "config",
        prefix: "",
        children: ["wastewater-and-sewage"],
      },
      {
        text: "Culture",
        icon: "config",
        prefix: "",
        children: ["culture"],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.press/",
  },
]);
