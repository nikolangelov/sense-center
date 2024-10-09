import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../../layouts/Head";
import Layout from "../../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Professional sofa cleaning services in London",
  description: "Restore the beauty of your sofa with our professional cleaning services in London. We guarantee thorough cleaning without compromise.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
