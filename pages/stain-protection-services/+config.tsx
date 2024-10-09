import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../layouts/Head";
import Layout from "../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Safeguard Your Surfaces: Professional Stain Protection Services in London",
  description: "Protect your surfaces from stains with our premium services in London. Whether it's carpets, upholstery or other surfaces, we guarantee long-lasting protection.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
