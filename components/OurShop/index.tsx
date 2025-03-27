import { createSignal, JSX, onCleanup, onMount, Component } from 'solid-js';
import { Slider, SliderButton, SliderProvider } from "solid-slider";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';
import MdiScissors from '~icons/mdi/scissors';

export const OurShop = ({ children, style }: { children: JSX.Element | JSX.Element[], style?: string }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <SliderProvider>
            {isDesktop() ? (
                <div class="max-w-1100px mx-auto position-relative hidden md:block my-0">
                    <Slider options={{ loop: true, slides: { perView: 3, spacing: 15 } }}>
                        {children}
                    </Slider>
                    <SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
                        <RiPlayReverseMiniLine class="-ml-2 font-size-10 b-solid b-3px p-1 important-hover-c-paper hover-bg-brand hover-b-brand transition-colors lg-c-paper-inv lg-b-black md-c-brand md-b-brand" />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
                        <RiPlayMiniLine class="-mr-2 font-size-10 b-solid b-3px p-1 important-hover-c-paper hover-bg-brand hover-b-brand transition-colors lg-c-paper-inv lg-b-black md-c-brand md-b-brand" />
                    </SliderButton>
                </div>
            ) : (
                <div class="max-w-1000px m-auto position-relative md:hidden block">
                    <Slider options={{ loop: true }}>
                        {children}
                    </Slider>
                    <SliderButton class="cursor-pointer position-absolute top-47% left-0 bg-transparent b-none" prev>
                        <RiPlayReverseMiniLine class="-ml-1 font-size-6.3 b-solid b-2px p-1 c-#d19d64 b-#d19d64 important-hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" style={style} />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-47% right-0 bg-transparent b-none" next>
                        <RiPlayMiniLine class="-mr-1 font-size-6.3 b-solid b-2px p-1 c-#d19d64 b-#d19d64 important-hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" style={style} />
                    </SliderButton>
                </div>
            )}
        </SliderProvider>
    );
};

export const ElementInOurShop: Component<{ img: string; title: string; href: string, alt: string }> = (props) => {
    return (

        <div class="flex max-w-full relative overflow-hidden" style="flex: 0 0 auto;">
            <img class="w-full h-auto" src={props.img} alt={props.alt} />
            <div class="w-full p-20px absolute bottom-0px text-center" style="background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, .01) 1%, rgba(0, 0, 0, .95) 80%);">
                <div class="flex flex-col gap-1">
                    <h4 class="c-paper relative font-size-27px mb-15px">
                        {props.title}
                    </h4>
                    <div class="text-center h-1px w-60px bg-brand mx-auto mb-20px"></div>
                    <a href={props.href} class="bg-none c-paper b-solid b-1px b-paper hover-b-brand hover-bg-brand transition-colors mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
                </div>
            </div>
        </div>
    );
};

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