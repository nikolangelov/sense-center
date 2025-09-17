import { createSignal, JSXElement } from "solid-js";
import MdiKeyboardArrowRight from '~icons/mdi/keyboard-arrow-right';

export function Collapse(props: { title: string; desc: string; children?: JSXElement }) {
	const [isExpanded, setIsExpanded] = createSignal(false);

	return (
		<div class="relative b-rd-10px overflow-hidden z-1 FAQ-wrapper w-full mx-auto">
			<div
				class={`relative z-1 transition-all duration-600 important-outline-none w-full ${isExpanded() ? 'b-none bg-transparent' : ''}`}
				style={isExpanded() ? 'transition: all 0.3s ease-in-out;' : ''}
			>
				<button
					onClick={() => setIsExpanded(!isExpanded())}
					class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full font-semibold text-lg md:py-3 md:px-6 focus:outline-none transition-all duration-700 ${isExpanded() ? 'bg-transparent' : 'bg-transparent'}`}
				>
					<div class="flex items-center justify-between w-full py-5 px-3 bg-gradient-to-r from-brand to-brand-orange b-rd-12px">
						<div class="flex items-center justify-between">
							<span class="ml-5 w-full md-max-w-full leading-5.2 c-paper font-size-16px md-font-size-20px transition-colors font-[MYRIADPRO-Semibold] lg:font-[MYRIADPRO-Bold]">
								{props.title}
							</span>
						</div>
						<div class="flex flex-self-center flex-justify-center">
							<MdiKeyboardArrowRight class={`text-paper w-8 h-8 transition-transform duration-700 mx-2 ${isExpanded() ? 'rotate-90deg' : ''}`} />
						</div>
					</div>
				</button>
				<div
					class={`mt-0 px-2 md:px-6 text-gray-600 leading-relaxed bg-transparent overflow-hidden transition-all duration-700 w-full ${isExpanded() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
				>
					<p class="mt-3 w-full md:ml-5 mx-3">
						{props.desc}
						{props.children}
					</p>
				</div>
			</div>
		</div>
	);
}