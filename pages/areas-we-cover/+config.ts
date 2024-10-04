import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../layouts/Head";
import Layout from "../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "The best carpet cleaning services in London - Fine carpet cleaning",
  description: "No matter where you are, our services come to you. Call us today!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
