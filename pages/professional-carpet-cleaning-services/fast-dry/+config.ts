import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../../layouts/Head";
import Layout from "../../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Fast dry carpet cleaning services in London - Fine carpet cleaning",
  description: "Complete cleaning, by Fast dry carpet cleaning services in London. Quick and easy stain removal and odor elimination. Call us today!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
