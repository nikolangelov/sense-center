import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../../layouts/Head";
import Layout from "../../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Residential carpet cleaning services in London - Fine Carpet Cleaning ",
  description: "Fine Carpet Cleaning carry out residential carpet cleaning services throughout London. Call us today!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
