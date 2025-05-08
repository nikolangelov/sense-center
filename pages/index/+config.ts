import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Международна изложба Изкуството на Джън-Шан-Жен",
  description: "Изложба, представяща връзката между човека и божественото, както и репресии от комунистическия режим над хората, които практикуват Фалун Дафа в Китай.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
