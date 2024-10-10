import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Fast dry carpet cleaning services in London - Fine carpet cleaning",
  description: "Complete cleaning, by Fast dry carpet cleaning services in London. Quick and easy stain removal and odor elimination. Call us today!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
