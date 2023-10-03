import { navbar } from "vuepress-theme-hope";

export const hiNavbar = navbar([
  "/",
  {
    text: "समाधान",
    icon: "creative",
    prefix: "/topics/",
    children: [
      {
        text: "पेय जल",
        icon: "creative",
        prefix: "",
        children: ["drinking-water"],
      },
      {
        text: "ठोस अपशिष्ट",
        icon: "config",
        prefix: "",
        children: ["solid-waste"],
      },
      {
        text: "अपशिष्ट",
        icon: "config",
        prefix: "",
        children: ["wastewater-and-sewage"],
      },
      {
        text: "जैविक अपशिष्ट एवं प्लास्टिक",
        icon: "config",
        prefix: "",
        children: ["plastic"],
      },
      {
        text: "खाद्य वन",
        icon: "config",
        prefix: "",
        children: ["food-forests"],
      },
      {
        text: "सांस्कृतिक जागरूकता",
        icon: "config",
        prefix: "",
        children: ["culture"],
      },
      {
        text: "आशा",
        icon: "config",
        prefix: "",
        children: ["hope"],
      },
    ],
  },
 {
    text: "परियोजनाओं",
    icon: "creative",
    prefix: "/topics/ecoops/",
    children: [
      {
        text: "Eco Ops NFTs",
        icon: "creative",
        prefix: "",
        children: ["Eco-Ops-NFT"],
      },
      {
        text: "जलवायु",
        icon: "config",
        prefix: "",
        children: ["climate"],
      },
      {
        text: "जैव विविधता श्रेय",
        icon: "config",
        prefix: "",
        children: ["biodiversity-credits"],
      },
      {
        text: "सत्यापन प्रशिक्षण",
        icon: "config",
        prefix: "",
        children: ["verifier"],
      },
      {
        text: "क्रियाविधि",
        icon: "config",
        prefix: "",
        children: ["methodology"],
      },
      {
        text: "बैठक",
        icon: "config",
        prefix: "",
        children: ["meetings"],
      },
    ],
  },
 {
    text: "कार्यक्रमों",
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
