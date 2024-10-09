import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../layouts/Head";
import Layout from "../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Antiviral sanitisation services in London - Fine Carpet Cleaning",
  description: "Fine Carpet Cleaning carry out Antiviral sanitisation services in London. Our team uses state-of-the-art techniques to destroy harmful viruses and bacteria.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
