import {createSignal, Show} from "solid-js";
import {Slider, SliderButton, SliderProvider} from "solid-slider";
import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import RiCloseFill from '~icons/ri/close-fill';

export function FacebookLikeGallery(props: { imgs: { src: string, alt: string }[] }) {
    const [open, setOpen] = createSignal(false);

    const options = { duration: 1000 };
    return <div class="relative flex flex-col">
        <img src={props.imgs[0].src} alt={props.imgs[0].alt} class="cursor-pointer max-w-full max-h-full flex m-auto" onClick={() => setOpen(true)} />
        <div class="flex flex-gap-1 mt-1">
            <img src={props.imgs[1].src} alt={props.imgs[1].alt} class="cursor-pointer w-33% flex m-auto" onClick={() => setOpen(true)} />
            <img src={props.imgs[2].src} alt={props.imgs[2].alt} class="cursor-pointer w-33% flex m-auto" onClick={() => setOpen(true)} />
            <div class="flex flex-justify-center flex-items-center w-33%">
                <span class="z-1 c-paper font-size-8 md-font-size-12 absolute pointer-events-none font-sans">+{props.imgs.length - 3}</span>
                <img src={props.imgs[3].src} alt={props.imgs[3].alt} class="w-full cursor-pointer flex m-auto filter-brightness-40" onClick={() => setOpen(true)} />
            </div>
        </div>
        <Show when={open()}>
            <div class="facebook-like-gallery fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-85 z-9999">
                <div class="p-5 w-full h-full">
                    <SliderProvider>
                        <Slider options={{ loop: true }}>
                            {props.imgs.map((e) =><img src={e.src} alt={e.alt} class="object-contain w-full h-full" />)}
                        </Slider>
                        <button onClick={() => setOpen(false)}>
                            <RiCloseFill class="z-2 w-16 h-16 absolute top-0 right-0 mr-8 mt-8 p-2 text-white bg-transparent color-paper cursor-pointer hover-color-brand:hover" />
                        </button>
                        <SliderButton class="cursor-pointer position-absolute top-45% left-5 bg-paper-inv bg-op-50 b-rd-bl-1 b-rd-tl-1 b-none px-2 py-1.5" prev>
                            <RiArrowLeftSLine class="-ml-1 font-size-10 c-paper hover-c-brand:hover transition-colors" />
                        </SliderButton>
                        <SliderButton class="cursor-pointer position-absolute top-45% right-5 bg-paper-inv bg-op-50 b-rd-br-1 b-rd-tr-1 b-none px-2 py-1.5" next>
                            <RiArrowRightSLine class="-mr-1 font-size-10 c-paper hover-c-brand:hover transition-colors" />
                        </SliderButton>
                    </SliderProvider>
                </div>
            </div>
        </Show>
    </div>
}

