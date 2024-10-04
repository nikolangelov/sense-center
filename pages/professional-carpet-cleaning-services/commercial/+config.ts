import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../../layouts/Head";
import Layout from "../../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Commercial carpet cleaning services - Fine carpet cleaning",
  description: "Commercial carpet cleaning services in London. The best, fast and efficient services at low prices. Call us today!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
