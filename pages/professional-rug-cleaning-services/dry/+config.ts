import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../../layouts/Head";
import Layout from "../../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Dry rug cleaning services in London - Fine Carpet Cleaning",
  description: "Discover the convenience and efficiency of carpet dry cleaning with our professional services. Contact us today and discover the differences for yourself.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
