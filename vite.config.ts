import { defineConfig } from "vite"
import vike from "vike/plugin";
import vikeSolid from "vike-solid/vite";

import { fileURLToPath, URL } from "node:url"
import Icons from "unplugin-icons/vite"
import UnoCSS from 'unocss/vite'

import solidPlugin from 'vite-plugin-solid';

const isProduction = process.env.NODE_ENV === "production"

export default defineConfig({
	server: {
		host: true,
		port: 4002,
	},
	envPrefix: "PUBLIC_",

	plugins: [
		solidPlugin(),
		UnoCSS({
			theme:
			{
				colors: {
					brand: "#1A6142",
					"brand-dark": "#09321d",
					"brand-action": "#edb339",
					"brand-action-hover": "#ebbc59",
					"brand-second-action": "#228057",
					"brand-second-action-hover": "#01874c",
					"paper-link": "#56B665",
					"paper-link-hover": "#268c5f",

					"brand-light": "#007faf",
					"brand-inv": "#eee",
					"paper": "#fff",
					"paper-inv": "#07111c",
					"paper-border": "#e7e7e7",
				},
				fonts: {
					letter: "font-family:'Roboto', sans-serif;"
				}
			}
		}),
		vike({ prerender: true }),
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
		rollupOptions: {
			external: ['solid-meta'], // Add solid-meta to external
		},
		// target is es2022 to support top level await
		// https://caniuse.com/?search=top%20level%20await
		target: "es2022",
		minify: isProduction,
	},
})
