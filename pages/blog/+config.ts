import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../layouts/Head";
import Layout from "../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Carpet cleaning blog - Fine carpet cleaning",
  description: "Welcome to the Fine Carpet Cleaning blog. Unrivaled service, advice, specialed techniques and premium product recommendations.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
