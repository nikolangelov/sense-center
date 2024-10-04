import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../../layouts/Head";
import Layout from "../../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Professional carpet steam cleaning services in London",
  description: "Professional carpet steam cleaning services, deep into the fibers of the carpet. Effective removal of dirt, stains and allergens.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
