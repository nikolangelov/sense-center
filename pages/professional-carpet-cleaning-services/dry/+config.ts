import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../../layouts/Head";
import Layout from "../../../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "Dry carpet cleaning services in London - Fine carpet cleaning",
  description: "Revitalize your carpets with our dry carpet cleaning services. Еffective stain removal and odor elimination.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
