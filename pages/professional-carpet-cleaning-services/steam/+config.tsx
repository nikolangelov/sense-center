import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Professional carpet steam cleaning services in London",
  description: "Professional carpet steam cleaning services, deep into the fibers of the carpet. Effective removal of dirt, stains and allergens.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
