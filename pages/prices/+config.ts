import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../layouts/Head";
import Layout from "../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Prices of cleaning services - Fine carpet cleaning",
  description: "Machine washing of carpets, at competitive prices. We serve clients across London.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
