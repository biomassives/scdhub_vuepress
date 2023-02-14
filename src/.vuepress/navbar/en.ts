import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Solutions",
    icon: "creative",
    prefix: "/topics/",
    children: [
      {
        text: "Water & Sanitation",
        icon: "creative",
        prefix: "",
        children: [      {
        text: "drinking-water",
        icon: "config",
        prefix: "",
        children: ["drinking-water"],
      },      {
        text: "solid-waste",
        icon: "config",
        prefix: "",
        children: ["solid-waste"],
      },      {
        text: "Wastewater and Sewage",
        icon: "config",
        prefix: "",
        children: ["wastewater-and-sewage"],
      }
              ],
      },
      {
        text: "Organic Waste & Plastics",
        icon: "config",
        prefix: "",
        children: ["plastic"],
      },
      {
        text: "Food Forests",
        icon: "config",
        prefix: "",
        children: ["food-forests"],
      },
      {
        text: "Cultural Awareness",
        icon: "config",
        prefix: "",
        children: ["culture"],
      },
      {
        text: "Hope",
        icon: "config",
        prefix: "",
        children: ["hope"],
      },
    ],
  },
]);
