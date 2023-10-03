import { navbar } from "vuepress-theme-hope";

export const swNavbar = navbar([
  "/",
  {
    text: "Ufumbuzi",
    icon: "creative",
    prefix: "/topics/",
    children: [
      {
        text: "Maji ya kunywa",
        icon: "creative",
        prefix: "",
        children: ["drinking-water"],
      },
      {
        text: "Taka ngumu",
        icon: "config",
        prefix: "",
        children: ["solid-waste"],
      },
      {
        text: "Maji machafu",
        icon: "config",
        prefix: "",
        children: ["wastewater-and-sewage"],
      },
      {
        text: "Taka za Kikaboni na Plastiki",
        icon: "config",
        prefix: "",
        children: ["plastic"],
      },
      {
        text: "Misitu ya Chakula",
        icon: "config",
        prefix: "",
        children: ["food-forests"],
      },
      {
        text: "Uelewa wa Utamaduni",
        icon: "config",
        prefix: "",
        children: ["culture"],
      },
      {
        text: "Tumaini",
        icon: "config",
        prefix: "",
        children: ["hope"],
      },
    ],
  },
 {
    text: "Miradi",
    icon: "creative",
    prefix: "/topics/ecoops/",
    children: [
      {
        text: "Eco Ops NFTs",
        icon: "creative",
        prefix: "",
        children: ["ESM-NFT"],
      },
      {
        text: "Hali ya hewa",
        icon: "config",
        prefix: "",
        children: ["climate"],
      },
      {
        text: "Mikopo ya Bioanuwai",
        icon: "config",
        prefix: "",
        children: ["biodiversity-credits"],
      },
      {
        text: "Mafunzo ya Uthibitishaji",
        icon: "config",
        prefix: "",
        children: ["verifier"],
      },
      {
        text: "Mbinu",
        icon: "config",
        prefix: "",
        children: ["methodology"],
      },
      {
        text: "Mikutano",
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
        children: ["ecoops-mastodon"],
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
        children: ["ecocity-projects-portal"],
      },     
      {
        text: "All Nations Center",
        icon: "config",
        prefix: "",
        children: ["all-nations-center"],
      },
    ],
  },  
]);
