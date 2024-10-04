import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../layouts/Head";
import Layout from "../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Layout,
  Head,
  // <title>
  title: "Fine Carpet Cleaning",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
