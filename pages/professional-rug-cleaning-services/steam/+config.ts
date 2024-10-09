import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../../layouts/Head";
import Layout from "../../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Rug steam cleaning services in London - Fine Carpet Cleaning",
  description: "Fine Carpet Cleaning provides Rug steam cleaning services in London. Trust us to handle your carpets with care and expertise. Contact us today.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
