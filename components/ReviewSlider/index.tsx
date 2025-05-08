import { createSignal, JSX, JSXElement, onCleanup, onMount, Show, useContext } from 'solid-js';
import range from "lodash/range"
import { Slider, SliderButton, SliderContext, SliderProvider } from "solid-slider";
import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import MdiFlowerLotusOutline from '~icons/mdi/flower-lotus-outline';

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
                <div class="dots-container" style="text-align: center; margin-bottom: 40px;">
                    {props.reviews.map((review, index) => (
                        <button
                            onClick={() => goToSlide(index)}
                            class={`dot ${context()?.current() === index ? "active" : ""}`}
                            style={{ margin: "0 7px", padding: "4px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#737373" : "#d6d6d6" }}
                            title={review.name}
                        >
                        </button>
                    ))}
                </div>
            ) : (
                <div class="dots-container" style="text-align: center; margin-bottom: 30px;">
                    {props.reviews.map((review, index) => (
                        <button
                            onClick={() => goToSlide(index)}
                            class={`dot ${context()?.current() === index ? "active" : ""}`}
                            style={{ margin: "0 5px", padding: "4px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#737373" : "#d6d6d6" }}
                            title={review.name}
                        >
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}

export const ReviewSlider = (props: { reviews: { name: string }[]; children: JSX.Element | JSX.Element[] }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <SliderProvider>
            {isDesktop() ? (
                <div class="max-w-1000px mx-auto position-relative hidden md:block my-0">
                    <Slider options={{ loop: true, slides: { perView: 1, spacing: 15 } }}>
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
                <div class="max-w-1000px m-auto position-relative md:hidden block mx-4">
                    <Slider options={{ loop: true, slides: { perView: 1, spacing: 10 } }}>
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

export function StarReview(props: { name: string; date: string; reviewText: string | JSXElement; }) {
    return (
        <div class="mb-2 md:mb-5 mt-0 m-auto px-2 md:px-8 py-10 bg-paper" >
            <div class="flex flex-justify-center flex-items-center">
                <div class="flex flex-col flex-justify-center flex-items-center">
                    <div class="flex flex-justify-center flex-items-center">
                        <img src="/assets/lotus-icon.png" class="w-10 h-10 mx-auto c-brand" />
                    </div>
                    <div class="important-text-center py-7 lg-px-0 px-3 font-300 font-size-4.3 md-font-size-4.5 line-height-7 lg-line-height-8" style="font-family:'Roboto', sans-serif; text-align: left;">{props.reviewText}</div>
                    <p class="flex flex-justify-center flex-items-center mb-0 mt-0"><b>{props.name}</b></p>
                    <p class="flex flex-justify-center flex-items-center mb-0 mt-0 text-center">{props.date}</p>
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