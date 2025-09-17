import { JSX } from "solid-js";
import { AnimatedComponent } from "../AnimateOnView";

export function ServiceContaner(props: { title: string, img: string, alt: string, description: string | JSX.Element }) {

	return (
			<AnimatedComponent class="max-w-300px sm:w-300px xl:w-350px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
				<div>
					<div class="">
						<img class="w-full h-full" src={props.img} alt={props.alt} />
					</div>
					<div class="w-full py-20px text-center md:px-2">
						<div class="flex flex-col gap-1 px-5">
							<h4 class="relative font-size-24px important-line-height-7.5 my-0 pt-3 pb-0 text-left important-font-[MYRIADPRO-Semibold]">
								{props.title}
							</h4>
							<p class="text-left font-size-17px leading-6.7 mt-2">
								{props.description}
							</p>
						</div>
					</div>
				</div>
			</AnimatedComponent>
	)
}