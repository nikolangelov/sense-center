import { createSignal, JSX, JSXElement, onCleanup, onMount, Show, useContext } from 'solid-js';
import range from "lodash/range"
import { Slider, SliderButton, SliderContext, SliderProvider } from "solid-slider";
import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import MdiPuzzle from '~icons/mdi/puzzle';

function DotsUnderSlider(props: { reviews: { name: string }[] }) {
    const [context] = useContext(SliderContext);
    const [isDesktop, setIsDesktop] = createSignal(false);

    const goToSlide = (index: number) => {
        context().moveTo(index);
    };

    onMount(() => {
        const checkMediaQuery = () => setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
        checkMediaQuery();
        window.addEventListener("resize", checkMediaQuery);
        onCleanup(() => window.removeEventListener("resize", checkMediaQuery));
    });

    return (
        <>
            {isDesktop() ? (
                <div class="dots-container relative" style="text-align: center; margin-bottom: 10px;">
                    {props.reviews.map((review, index) => (
                        <button
                            onClick={() => goToSlide(index)}
                            class={`dot ${context()?.current() === index ? "active" : ""}`}
                            style={{ margin: "0 5px", padding: "6px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#E11172" : "#bdbdbd" }}
                            title={review.name}
                        >
                        </button>
                    ))}
                </div>
            ) : (
                <div class="dots-container relative" style="text-align: center; margin-top: 10px;">
                    {props.reviews.map((review, index) => (
                        <button
                            onClick={() => goToSlide(index)}
                            class={`dot ${context()?.current() === index ? "active" : ""}`}
                            style={{ margin: "0 5px", padding: "5.5px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#E11172" : "#d3d3d3cc" }}
                            title={review.name}
                        >
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}

export const ContainerSlider = (props: { reviews: { name: string }[]; children: JSX.Element | JSX.Element[] }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <SliderProvider>
            {isDesktop() ? (
                <div class="max-w-1000px mx-auto position-relative hidden md:block my-0">
                    <Slider options={{ loop: true, slides: { perView: 2.1, spacing: 20 } }}>
                        {props.children}
                    </Slider>
                    <SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
                        <RiArrowLeftSLine class="md-ml-14 c-brand lg--ml-2 font-size-10 hover:c-brand-compliment transition-colors" />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
                        <RiArrowRightSLine class="md-mr-14 c-brand lg--mr-2 font-size-10 hover:c-brand-compliment transition-colors" />
                    </SliderButton>
                </div>
            ) : (
                <div class="max-w-900px m-auto position-relative md:hidden block">
                    <Slider options={{ loop: true, slides: { perView: 1.1, spacing: 10 } }}>
                        {props.children}
                    </Slider>
                    <SliderButton class="hidden cursor-pointer position-absolute top-47% left-0 bg-transparent b-none" prev>
                        <RiArrowLeftSLine class="-ml-1 font-size-7 b-solid b-2px p-1 c-paper b-brand-compliment hover-c-brand-compliment bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors" />
                    </SliderButton>
                    <SliderButton class="hidden cursor-pointer position-absolute top-47% right-0 bg-transparent b-none" next>
                        <RiArrowRightSLine class="-mr-1 font-size-7 b-solid b-2px p-1 c-paper b-brand-compliment hover-c-brand-compliment bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors" />
                    </SliderButton>
                </div>
            )}
            <DotsUnderSlider reviews={props.reviews} />
        </SliderProvider>
    );
};

export function ContainerBox(props: { title: string; text: string; img: string; style: string; link: string; style2?: string; class2?: string; alt: string; }) {
    return (
        <a class="mt-0 m-auto b-rd-12px md:py-10 md:px-6 py-7 px-5 flex flex-col h-full justify-between items-between" style={props.style} target="_blank" rel="noopener" href={props.link}>
            <div class={`xl:h-48 lg:h-45 md:h-50 sm:h-30 h-48 ${props.class2 ?? ''}`}>
                <h4 class="text-left c-paper font-600 my-0 important-leading-7.2">{props.title}</h4>
                <p class="c-paper lg:leading-6 leading-5.5">{props.text}</p>
            </div>
            <img src={props.img} alt={props.alt} class="w-full" style={props.style2} />
        </a>
    );
}

export function ReviewPuzzlePiece(props: { title: string; puzzleclass: string; desc: string | JSXElement; style: string; name: string; condition: string; }) {
    return (
        <div class="">
            <div class="flex flex-col h-full overflow-hidden rounded-[10px]">
                <div
                    class="flex flex-col justify-start flex-grow px-7 py-8"
                    style={props.style}
                >
                    <div class="flex justify-between items-center gap-3 mb-2">
                        <div class="c-paper uppercase italic font-size-4.5 leading-6 font-500 flex items-center">
                            {props.title}
                        </div>
                        <MdiPuzzle class={props.puzzleclass} style="width:35px; height:35px;" />
                    </div>
                    <p class="c-paper font-size-14px leading-6.5 mb-0">{props.desc}</p>
                    <p class="c-paper font-300 font-size-14px leading-6.5 mb-0 ">{props.name}</p>
                    <p class="c-paper font-300 font-size-14px leading-6.5 my-0">{props.condition}</p>
                </div>
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