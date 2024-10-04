import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../layouts/Head";
import Layout from "../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Professional stain removal services in London - Fine Carpet Cleaning",
  description: "Fine Carpet Cleaning performs Professional Stain Removal Services. Attention to detail and commitment to excellence, we guarantee complete stain removal.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
