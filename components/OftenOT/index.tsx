import { createSignal, JSX, onCleanup, onMount } from 'solid-js';
import range from "lodash/range"
import { Slider, SliderButton, SliderProvider } from "solid-slider";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';

export const OftenOT = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <SliderProvider>
            {isDesktop() ? (
                <div class="max-w-900px mx-auto position-relative hidden md:block my-0">
                    <Slider options={{ loop: true, slides: { perView: 2, spacing: 15 } }}>
                        {children}
                    </Slider>
                    <SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
                        <RiPlayReverseMiniLine class="-ml-2 font-size-10 b-solid b-3px p-1 hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
                        <RiPlayMiniLine class="-mr-2 font-size-10 b-solid b-3px p-1 hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" />
                    </SliderButton>
                </div>
            ) : (
                <div class="max-w-1000px m-auto position-relative md:hidden block mx-4">
                    <Slider options={{ loop: true }}>
                        {children}
                    </Slider>
                    <SliderButton class="cursor-pointer position-absolute top-47% left-0 bg-transparent b-none" prev>
                        <RiPlayReverseMiniLine class="-ml-1 font-size-7 b-solid b-2px p-1 c-#d19d64 b-#d19d64 hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-47% right-0 bg-transparent b-none" next>
                        <RiPlayMiniLine class="-mr-1 font-size-7 b-solid b-2px p-1 c-#d19d64 b-#d19d64 hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" />
                    </SliderButton>
                </div>
            )}
        </SliderProvider>
    );
};

export function ElementInOftenOT(props: { desc: string; title: string; }) {
    return (
        <div class="block h-500px relative flex flex-col flex-justify-end" style="background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) ), url(/assets/about3.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
            <div class="absolute bottom-0 left-0 right-0 top-0 h-100%"></div>
            <div class="px-8">
                <h3 class="c-paper">{props.title}</h3>
                <div class="mx-auto h-1px w-150px hover-w-250px transition-all bg-brand text-left mb-6"></div>
                <div class="c-paper text-center font-size-4 line-height-8 mb-7">{props.desc}</div>
            </div>
        </div>
    );
}

function useMediaQuery(query: string) {
    const [matches, setMatches] = createSignal(false);

    onMount(() => {
        if (typeof window !== "undefined") {
            const mediaQueryList = window.matchMedia(query);
            setMatches(mediaQueryList.matches);

            const handleChange = (event: MediaQueryListEvent) => {
                setMatches(event.matches);
            };

            mediaQueryList.addEventListener('change', handleChange);

            onCleanup(() => {
                mediaQueryList.removeEventListener('change', handleChange);
            });
        }
    });

    return matches;
}