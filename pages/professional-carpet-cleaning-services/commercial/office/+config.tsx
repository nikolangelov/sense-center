import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Office carpet cleaning services in London  - Fine Carpet Cleaning",
  description: "Removing dirt and allergens from your office, through Office carpet cleaning services. A healthier indoor environment for your employees and customers.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
