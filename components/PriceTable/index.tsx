import { For, JSX } from "solid-js";

type TTableEntry = {
	label: string,
	value: string,
}

export function PriceTable(props: { title: string, items: TTableEntry[], children?: HTMLHeadingElement }) {

	return (
		<div>
			<div class="w-full flex flex-col flex-justify-center b-rd-2 b-solid b-2px b-#2e5c47 mt-15" style="box-shadow: 0px 20px 20px 1px rgb(84 89 95 / 10%);">
				<div class="w-full flex flex-row flex-justify-center">
					<div class="w-full font-sans c-paper bg-#2e5c47 font-size-7 pl-5 h-20 flex-content-center"><strong>{props.title}</strong></div>
					<div class="w-full font-sans c-paper bg-#2e5c47 font-size-7 pl-5 h-20 flex-content-center w-70%"><strong>Price</strong></div>
				</div>
				<For each={props.items}>
					{(entry) => <div class="w-full flex flex-row font-sans">
						<div class="w-full bg-paper pl-5 py-2 font-600 b-2px b-#f3f3f3" style="border-style: none solid solid none;">{entry.label}</div>
						<div class="w-full bg-paper pl-5 py-2 font-600 b-2px b-#f3f3f3 w-70%" style="border-style: none none solid none;">{entry.value}</div>
					</div>
					}
				</For>
				<div class="w-full bg-#2e5c47"><p class="font-size-3.5 md-font-size-4 px-3 md-my-2 c-paper md-line-height-5 line-height-5 word-spacing-0.5 text-left">*We also offer performing services out of working hours and at night, which will be included in the final price.<br></br>**Minimum charge £65</p></div>
			</div>
		</div>
	);
}