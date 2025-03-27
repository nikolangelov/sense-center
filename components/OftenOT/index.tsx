import { createSignal, JSX, onCleanup, onMount, Component } from 'solid-js';
import { Slider, SliderButton, SliderProvider } from "solid-slider";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';
import MdiScissors from '~icons/mdi/scissors?width=24px&height=24px';
import { AnimatedComponent } from '../AnimateOnView';

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
                        <RiPlayReverseMiniLine class="md-ml-14 c-brand-compliment b-brand-compliment lg--ml-2 font-size-10 b-solid b-3px p-1 important-hover-c-paper hover-bg-brand-compliment hover-b-brand-compliment transition-colors" style={style} />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
                        <RiPlayMiniLine class="md-mr-14 c-brand-compliment b-brand-compliment lg--mr-2 font-size-10 b-solid b-3px p-1 important-hover-c-paper hover-bg-brand-compliment hover-b-brand-compliment transition-colors" style={style} />
                    </SliderButton>
                </div>
            ) : (
                <div class="max-w-1000px m-auto position-relative md:hidden block mx-4">
                    <Slider options={{ loop: true }}>
                        {children}
                    </Slider>
                    <SliderButton class="cursor-pointer position-absolute top-47% left-0 bg-transparent b-none" prev>
                        <RiPlayReverseMiniLine class="-ml-1 font-size-7 b-solid b-2px p-1 c-brand b-brand important-hover-c-paper hover-bg-brand hover-b-brand transition-colors" style={style} />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-47% right-0 bg-transparent b-none" next>
                        <RiPlayMiniLine class="-mr-1 font-size-7 b-solid b-2px p-1 c-brand b-brand important-hover-c-paper hover-bg-brand hover-b-brand transition-colors" style={style} />
                    </SliderButton>
                </div>
            )}
        </SliderProvider>
    );
};

export const ElementInOftenOT: Component<{ href: string, title: string, desc: string, img: string, alt: string }> = (props) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [arrowWidth, setArrowWidth] = createSignal(50);
    const [isVisible, setIsVisible] = createSignal(false);
    let containerRef: HTMLDivElement | undefined;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setArrowWidth(150);
                        setIsVisible(true);
                    } else {
                        setArrowWidth(50);
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (containerRef) observer.observe(containerRef);
        onCleanup(() => observer.disconnect());
    });

    return (
        <div class="block h-500px relative flex flex-col justify-end group">
            {isDesktop() ? (
                <a href={props.href}>
                    <div
                        class="block h-full relative flex flex-col justify-end group overflow-hidden h-500px"
                        style={{
                            "background-image": `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${props.img})`,
                            "background-position": "center",
                            "background-repeat": "no-repeat",
                            "background-size": "cover",
                        }}
                        role="img" aria-label={props.alt}>
                        <span class="before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] before:w-[1px] before:h-[80%] before:top-[1rem] before:left-[1rem] after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] after:h-[1px] after:w-[80%] after:top-[1rem] after:left-[1rem] group-hover:before:h-[calc(100%-2rem)] group-hover:after:w-[calc(100%-2rem)] before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out">
                        </span>
                        <span class="before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] before:w-[1px] before:h-[80%] before:bottom-[1rem] before:right-[1rem] after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] after:h-[1px] after:w-[80%] after:right-[1rem] after:bottom-[1rem] group-hover:before:h-[calc(100%-2rem)] group-hover:after:w-[calc(100%-2rem)] before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out">
                        </span>
                        <div class="relative z-10 px-8 pb-8 flex flex-col items-center">
                            <div class="flex flex-col items-center text-center bottom-8 transition-all duration-700 ease-in-out group-hover:bottom-[33%]">
                                <MdiScissors class="c-paper mx-auto rotate-[270deg] w-8" />
                                <div class="w-300px">
                                    <h3 class="c-paper mt-2 mb-1">{props.title}</h3>
                                </div>
                                <div class="h-[1px] w-[100px] group-hover:w-[300px] transition-all duration-900 ease-in-out bg-brand mb-4"></div>
                            </div>
                            <div class="flex flex-col flex-items-center pb-2">
                                <div class="bg-none c-paper b-solid b-1px b-paper hover-b-brand hover-bg-brand transition-colors mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</div>
                            </div>
                        </div>
                    </div>
                </a>
            ) : (
                <div
                    ref={containerRef}
                    class="block h-500px relative flex flex-col justify-end group"
                    style={{
                        "background-image": `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${props.img})`,
                        "background-position": "center",
                        "background-repeat": "no-repeat",
                        "background-size": "cover",
                    }}
                    role="img" aria-label={props.alt}>
                    <span class={`before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] before:w-[1px] before:h-[80%] before:top-[1rem] before:left-[1rem] 
          after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] after:h-[1px] after:w-[80%] after:top-[1rem] after:left-[1rem]
          before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out 
          ${isVisible() ? "before:h-[calc(100%-2rem)] after:w-[calc(100%-2rem)]" : ""}`}>
                    </span>
                    <span class={`before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] before:w-[1px] before:h-[80%] before:bottom-[1rem] before:right-[1rem] 
          after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] after:h-[1px] after:w-[80%] after:right-[1rem] after:bottom-[1rem]
          before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out 
          ${isVisible() ? "before:h-[calc(100%-2rem)] after:w-[calc(100%-2rem)]" : ""}`}>
                    </span>
                    <div class="relative z-10 px-8 pb-8 flex flex-col items-center justify-end h-full">
                        <div class="flex flex-col items-center text-center transition-all duration-700 ease-in-out ">
                            <MdiScissors class="c-paper mx-auto rotate-[270deg] w-8" />
                            <div class="w-250px">
                                <h3 class="c-paper mt-1 important-mb-1">{props.title}</h3>
                            </div>
                            <div class="h-[1px] transition-all duration-900 ease-in-out bg-brand mb-20px"
                                style={{ width: `${arrowWidth()}px` }}>
                            </div>
                            <div class="flex flex-col flex-items-center">
                                <div class="bg-none c-paper b-solid b-1px b-paper hover-b-brand hover-bg-brand transition-colors mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
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