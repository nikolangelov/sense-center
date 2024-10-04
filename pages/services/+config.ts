import vikeSolid from "vike-solid/config";
import type { Config } from "vike/types";
import Head from "../../layouts/HeadNoRobots";

// Default config (can be overridden by pages)
export default {
  Head,
  // <title>
  title: "All carpet cleaning services - Fine carpet cleaning",
  description: "Fine carpet cleaning specializes in cleaning carpets, upholstery and stains. We serve clients across London.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
