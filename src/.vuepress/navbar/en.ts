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
        children: ["solid-waste"],
      },
      {
        text: "Wastewater",
        icon: "config",
        prefix: "",
        children: ["wastewater-and-sewage"],
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
 {
    text: "Projects",
    icon: "creative",
    prefix: "/projects/",
    children: [
      {
        text: "ESM NFTs",
        icon: "creative",
        prefix: "",
        children: ["esm-nft"],
      },
      {
        text: "Climate",
        icon: "config",
        prefix: "",
        children: ["climate"],
      },
      {
        text: "Biodiversity Credit",
        icon: "config",
        prefix: "",
        children: ["biodiversity-credit"],
      },
      {
        text: "Verification Training",
        icon: "config",
        prefix: "",
        children: ["verification-training"],
      },
      {
        text: "Methodology",
        icon: "config",
        prefix: "",
        children: ["methodology"],
      },
      {
        text: "Meetings",
        icon: "config",
        prefix: "",
        children: ["meetings"],
      },

    ],
  },

]);
