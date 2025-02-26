import { createSignal, JSX, onCleanup, onMount, Component } from 'solid-js';
import { Slider, SliderButton, SliderProvider } from "solid-slider";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';
import MdiScissors from '~icons/mdi/scissors?width=24px&height=24px';

export const OftenOT = ({ children, style }: { children: JSX.Element | JSX.Element[], style?: string }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <SliderProvider>
            {isDesktop() ? (
                <div class="max-w-900px mx-auto position-relative hidden md:block my-0">
                    <Slider options={{ loop: true, slides: { perView: 2, spacing: 15 } }}>
                        {children}
                    </Slider>
                    <SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
                        <RiPlayReverseMiniLine class="md-ml-14 md-c-brand md-b-brand lg-c-black lg-b-black lg--ml-2 font-size-10 b-solid b-3px p-1 important-hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" style={style} />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
                        <RiPlayMiniLine class="md-mr-14 md-c-brand md-b-brand lg-c-black lg-b-black lg--mr-2 font-size-10 b-solid b-3px p-1 important-hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" style={style} />
                    </SliderButton>
                </div>
            ) : (
                <div class="max-w-1000px m-auto position-relative md:hidden block px-7">
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

export const ElementInOftenOT: Component<{ desc: string; title: string; href: string }> = (props) => {
    return (
        <a href={props.href}>
            <div
                class="block h-500px relative flex flex-col justify-end group"
                style={{
                    "background-image": "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(/assets/about3.jpg)",
                    "background-position": "center",
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                }}
            >
                <span class="
                    before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] 
                    before:w-[1px] before:h-[80%] before:top-[1rem] before:left-[1rem]
                    after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] 
                    after:h-[1px] after:w-[80%] after:top-[1rem] after:left-[1rem]
                    group-hover:before:h-[calc(100%-2rem)] 
                    group-hover:after:w-[calc(100%-2rem)] 
                    before:transition-all before:duration-500 before:ease-linear
                    after:transition-all after:duration-500 after:ease-linear"></span>

                <span class="
                    before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] 
                    before:w-[1px] before:h-[80%] before:bottom-[1rem] before:right-[1rem]
                    after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] 
                    after:h-[1px] after:w-[80%] after:right-[1rem] after:bottom-[1rem]
                    group-hover:before:h-[calc(100%-2rem)] 
                    group-hover:after:w-[calc(100%-2rem)] 
                    before:transition-all before:duration-500 before:ease-linear
                    after:transition-all after:duration-500 after:ease-linear"></span>

                <div class="absolute inset-0 h-100%"></div>

                <div class="relative z-10 px-8 pb-8">
                    <div class="transform translate-y-30 group-hover:-translate-y-2 transition-all duration-500 flex flex-col flex-justify-center">
                        <MdiScissors class="c-paper mx-auto transform-rotate--0.25turn w-8" />
                        <h3 class="c-paper text-center mt-3">{props.title}</h3>
                        <div class="mx-auto h-1px w-100px group-hover:w-300px transition-all duration-900 bg-brand text-left"></div>
                    </div>
                    <div class="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mt-4">
                        <div class="c-paper text-center font-size-4 line-height-8">{props.desc}</div>
                    </div>
                </div>
            </div>
        </a>
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