import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../../layouts/Head";
import Layout from "../../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Eco friendly carpet cleaning services in London - Fine Carpet Cleaning",
  description: "Fine Carpet Cleaning provides eco-friendly carpet cleaning services in London. Perfect hygiene without extra costs.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
