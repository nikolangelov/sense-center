import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Международна изложба Изкуството на Джън-Шан-Жен",
  description: "Изложбата „Изкуството на Джън-Шан-Жен” е създадена през 2004 г. и се състои от близо 40 произведения.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
