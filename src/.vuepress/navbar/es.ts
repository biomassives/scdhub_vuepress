import { navbar } from "vuepress-theme-hope";

export const esNavbar = navbar([
  "/",
  {
    text: "Soluciones",
    icon: "creative",
    prefix: "/topics/",
    children: [
      {
        text: "Agua potable",
        icon: "creative",
        prefix: "",
        children: ["drinking-water"],
      },
      {
        text: "Residuo sólido",
        icon: "config",
        prefix: "",
        children: ["solid-waste"],
      },
      {
        text: "Aguas residuales",
        icon: "config",
        prefix: "",
        children: ["wastewater-and-sewage"],
      },
      {
        text: "Residuos Orgánicos y Plásticos",
        icon: "config",
        prefix: "",
        children: ["plastic"],
      },
      {
        text: "Bosques de alimentos",
        icon: "config",
        prefix: "",
        children: ["food-forests"],
      },
      {
        text: "Conciencia cultural",
        icon: "config",
        prefix: "",
        children: ["culture"],
      },
      {
        text: "Esperanza",
        icon: "config",
        prefix: "",
        children: ["hope"],
      },
    ],
  },
 {
    text: "Proyectos",
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
        text: "Clima",
        icon: "config",
        prefix: "",
        children: ["climate"],
      },
      {
        text: "Crédito de Biodiversidad",
        icon: "config",
        prefix: "",
        children: ["biodiversity-credits"],
      },
      {
        text: "Capacitación de verificación",
        icon: "config",
        prefix: "",
        children: ["verifier"],
      },
      {
        text: "Metodología",
        icon: "config",
        prefix: "",
        children: ["methodology"],
      },
      {
        text: "Reuniones",
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
