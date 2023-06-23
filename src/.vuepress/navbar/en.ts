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
    prefix: "/topics/ecoops/",
    children: [
      {
        text: "ESM NFTs",
        icon: "creative",
        prefix: "",
        children: ["ESM-NFT"],
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
        children: ["biodiversity-credits"],
      },
      {
        text: "Verification Training",
        icon: "config",
        prefix: "",
        children: ["verifier"],
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
 {
    text: "Programs",
    icon: "creative",
    prefix: "/topics/programs/",
    children: [
      {
        text: "Sutainable Solutions Database",
        icon: "creative",
        prefix: "",
        children: ["solutions-database"],
      },
      {
        text: "SCD Hub Forum",
        icon: "config",
        prefix: "",
        children: ["mylunch"],
      },
      {
        text: "Eco Ops App",
        icon: "config",
        prefix: "",
        children: ["biodiversity-credits"],
      },
      {
        text: "Project Portal",
        icon: "config",
        prefix: "",
        children: ["eccity-projects-portal"],
      },
    ],
  },  
]);
