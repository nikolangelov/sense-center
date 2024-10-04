import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../../layouts/Head";
import Layout from "../../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Mattress cleaning services in London  - Fine Carpet Cleaning",
  description: "Fine carpet cleaning performs the mattress cleaning service. Cleaner and healthier sleep. Call us today!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
