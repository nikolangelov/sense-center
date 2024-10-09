import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../layouts/Head";
import Layout from "../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Professional rug cleaning services in London",
  description: "Fine Carpet Cleaning provides Professional rug cleaning services in London.Trust us to handle your carpets carefully, quickly and expertly.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
