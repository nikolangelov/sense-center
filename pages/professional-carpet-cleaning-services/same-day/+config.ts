import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../../layouts/Head";
import Layout from "../../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Same day carpet cleaning in London - Fine carpet cleaning",
  description: "Need a quick and efficient solution to your carpet cleaning problems? Our same day carpet cleaning service is here to save the day!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
