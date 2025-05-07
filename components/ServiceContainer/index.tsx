import { createSignal, JSX, Show } from "solid-js";
import { AnimatedComponent } from "../AnimateOnView";
import RiCloseLargeLine from '~icons/ri/close-large-line';

export function ServiceContaner(props: { title: string, img: string, alt: string, author: string, description: string | JSX.Element}) {
	const [open, setOpen] = createSignal(false);
	const [currentIndex, setCurrentIndex] = createSignal(0);

	const openGallery = (index: number) => {
		setCurrentIndex(index);
		setOpen(true);
	};

	return (
		<div>
			<AnimatedComponent class="max-w-400px sm:w-400px flex flex-col max-w-full relative overflow-hidden" style="flex: 0 0 auto;">
				<div>
					<div class="-mb-3">
						<img class="w-full h-full" src={props.img} alt={props.alt} onClick={() => openGallery(0)} />
					</div>

					<div class="w-full p-20px text-center bg-white">
						<div class="flex flex-col gap-1">
							<p class="italic font-size-15px my-3" style="font-family: 'Abel', sans-serif !important;">
								{props.author}
							</p>
							<h4 class="relative font-size-20px important-line-height-8.5 my-0 py-0 text-left" style="font-family: 'Abel', sans-serif !important;">
								{props.title}
							</h4>
							<p class="">
								{props.description}
							</p>
						</div>
					</div>
				</div>
			</AnimatedComponent>

			<Show when={open()}>
				<div class="facebook-like-gallery fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-85 z-9999">
					<div class="flex items-center justify-center h-full w-full">
						<img class="max-w-full max-h-full" src={props.img} alt={props.alt} />
					</div>
					<button onClick={() => setOpen(false)}>
						<RiCloseLargeLine class="hover:rotate-90 transition-transform z-2 w-10 h-10 md:w-13 md:h-13 absolute top-0 right-0 mr-8 md:mr-12 mt-8 p-2 text-white bg-transparent color-paper cursor-pointer hover-color-gray-400:hover transition-colors" />
					</button>
				</div>
			</Show>
		</div>
	)
}