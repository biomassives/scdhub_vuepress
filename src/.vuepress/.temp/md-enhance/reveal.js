import { reveal, revealMarkdown, revealHighlight, revealMath, revealSearch, revealNotes, revealZoom } from "/home/greg/cesium/scdhub_vuepress/node_modules/vuepress-plugin-md-enhance/lib/client/reveal/index.js";

export const useReveal = () => [reveal(), revealMarkdown(), revealHighlight(), revealMath(), revealSearch(), revealNotes(), revealZoom()];
