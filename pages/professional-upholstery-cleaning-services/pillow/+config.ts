import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../../layouts/Head";
import Layout from "../../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Pillow cleaning services in London - Fine Carpet Cleaning",
  description: "Refresh your cushions with our professional cleaning services. Contact us today to enjoy a cleaner and healthier sleeping environment.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
