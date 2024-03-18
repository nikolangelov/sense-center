import { defineConfig } from "vite"
import vike from "vike/plugin";
import vikeSolid from "vike-solid/vite";

import { fileURLToPath, URL } from "node:url"
import Icons from "unplugin-icons/vite"
import UnoCSS from 'unocss/vite'


const isProduction = process.env.NODE_ENV === "production"

export default defineConfig({
	server: {
		host: true,
		port: 4002,
	},
	envPrefix: "PUBLIC_",
	plugins: [
		UnoCSS({
			theme:
			 {
				colors: {
					brand: "#005c88",
					"brand-light": "#007faf",
					"brand-dark": "#00254b",
					"brand-inv": "#eee",
					"paper": "#fff",
					"paper-inv": "#212529",
					"paper-link": "#005c88",
					"paper-link-hover": "#007faf",
					"paper-border": "#e7e7e7",
				}
			}
		}),
		vike({prerender: true}),
		vikeSolid(),
		// @ts-ignore
		// only https://icon-sets.iconify.design/material-symbols/
		// and https://icon-sets.iconify.design/cib/
		// are installed indicated in the package.json @iconify-json/* packages.
		// use those sites to search for icons.
		Icons({ compiler: "solid" }),
		// markdownHotModuleReload(),
	],
	resolve: {
		alias: {
			// must also be defined in tsconfig!
			"#src": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	build: {
		// target is es2022 to support top level await
		// https://caniuse.com/?search=top%20level%20await
		target: "es2022",
		minify: isProduction,
	},
})
