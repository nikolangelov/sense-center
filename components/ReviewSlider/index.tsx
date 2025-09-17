import { createSignal, For, JSX, JSXElement, Match, onCleanup, onMount, Show, Switch, useContext } from 'solid-js';
import range from "lodash/range"
import { Slider, SliderButton, SliderContext, SliderProvider } from "solid-slider";
import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import MdiPuzzle from '~icons/mdi/puzzle';

export function DotsUnderSlider(props: { reviews: { name: string }[] }) {
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
                <div class="dots-container relative" style="text-align: center; margin-top: -60px;">
                    {props.reviews.map((review, index) => (
                        <button
                            onClick={() => goToSlide(index)}
                            class={`dot ${context()?.current() === index ? "active" : ""}`}
                            style={{ margin: "0 3px", padding: "4px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#E11172" : "#bdbdbd" }}
                            title={review.name}
                        >
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}

export function DotsUnderSlider2(props: { reviews: { name: string }[] }) {
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
                            style={{ margin: "0 5px", padding: "6px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#E11172" : "#ebebeb" }}
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
                            style={{ margin: "0 3px", padding: "4px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#E11172" : "#bdbdbd" }}
                            title={review.name}
                        >
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}

export function DotsUnderSlider3(props: { reviews: { name: string }[] }) {
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
                <div class="dots-container relative" style="text-align: center; margin-top: -60px;;">
                    {props.reviews.map((review, index) => (
                        <button
                            onClick={() => goToSlide(index)}
                            class={`dot ${context()?.current() === index ? "active" : ""}`}
                            style={{ margin: "0 3px", padding: "4px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#E11172" : "#bdbdbd" }}
                            title={review.name}
                        >
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}

export const ReviewSlider = (props: {
    reviews: { name: string }[];
    children: JSX.Element | JSX.Element[];
    variant?: "dots1" | "dots2" | "dots3";
}) => {
    const { variant = "dots1", reviews, children } = props;
    const [perView, setPerView] = createSignal(1);
    const [spacing, setSpacing] = createSignal(10);

    onMount(() => {
        const mqSmall = window.matchMedia("(max-width: 767px)");
        const mqMedium = window.matchMedia("(min-width: 768px) and (max-width: 1199px)");

        if (mqMedium.matches) {
            setPerView(2);
            setSpacing(15);
        } else if (mqSmall.matches) {
            setPerView(1);
            setSpacing(10);
        } else {
            setPerView(3);
            setSpacing(15);
        }
    });

    return (
        <SliderProvider>
            <div class="max-w-1500px mx-auto position-relative my-0">
                <Show when={perView()}>
                    {(pv) => (
                        <Slider
                            options={{
                                loop: true,
                                slides: { perView: 1, spacing: 10 },
                                breakpoints: {
                                    "(min-width: 768px)": {
                                        slides: { perView: 2, spacing: 15 },
                                    },
                                    "(min-width: 1200px)": {
                                        slides: { perView: 3, spacing: 15 },
                                    },
                                },
                            }}
                        >
                            {children}
                        </Slider>
                    )}
                </Show>

                <Show when={perView() === 3}>
                    <>
                        <SliderButton
                            class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none"
                            prev
                        >
                            <RiArrowLeftSLine class="c-brand font-size-10 hover:c-brand-compliment transition-colors" />
                        </SliderButton>
                        <SliderButton
                            class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none"
                            next
                        >
                            <RiArrowRightSLine class="c-brand font-size-10 hover:c-brand-compliment transition-colors" />
                        </SliderButton>
                    </>
                </Show>
            </div>
            <Switch>
                <Match when={variant === "dots1"}>
                    <DotsUnderSlider reviews={reviews} />
                </Match>
                <Match when={variant === "dots2"}>
                    <DotsUnderSlider2 reviews={reviews} />
                </Match>
                <Match when={variant === "dots3"}>
                    <DotsUnderSlider3 reviews={reviews} />
                </Match>
            </Switch>
        </SliderProvider>
    );
};

export const StaffSlider = (props: {
    reviews: { name: string }[];
    children: JSX.Element | JSX.Element[];
    variant?: "dots1" | "dots2" | "dots3";
    class?: string | JSX.CSSProperties;
}) => {
    const { variant = "dots1", reviews, children } = props;
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <SliderProvider>
            {isDesktop() ? (
                <div class={`max-w-700px mx-auto position-relative hidden md:block my-0 ${props.class ?? ''}`}>
                    <Slider options={{ loop: true, slides: { perView: 1, spacing: 15 } }}>
                        {children}
                    </Slider>
                    <SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
                        <RiArrowLeftSLine class="md-ml-14 c-brand lg--ml-2 font-size-10 hover:c-brand-compliment transition-colors" />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
                        <RiArrowRightSLine class="md-mr-14 c-brand lg--mr-2 font-size-10 hover:c-brand-compliment transition-colors" />
                    </SliderButton>
                </div>
            ) : (
                <div class="m-auto position-relative md:hidden block">
                    <Slider options={{ loop: true, slides: { perView: 1, spacing: 10 } }}>
                        {children}
                    </Slider>
                    <SliderButton class="hidden cursor-pointer position-absolute top-47% left-0 bg-transparent b-none" prev>
                        <RiArrowLeftSLine class="-ml-1 font-size-7 b-solid b-2px p-1 c-paper b-brand-compliment hover-c-brand-compliment bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors" />
                    </SliderButton>
                    <SliderButton class="hidden cursor-pointer position-absolute top-47% right-0 bg-transparent b-none" next>
                        <RiArrowRightSLine class="-mr-1 font-size-7 b-solid b-2px p-1 c-paper b-brand-compliment hover-c-brand-compliment bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors" />
                    </SliderButton>
                </div>
            )}
            <Switch>
                <Match when={variant === "dots1"}>
                    <DotsUnderSlider reviews={reviews} />
                </Match>
                <Match when={variant === "dots2"}>
                    <DotsUnderSlider2 reviews={reviews} />
                </Match>
                <Match when={variant === "dots3"}>
                    <DotsUnderSlider3 reviews={reviews} />
                </Match>
            </Switch>
        </SliderProvider>
    );
};

export function StaffContainer(props: {
    name: string;
    title: string;
    quote: string;
    paragraphs: string[];
}) {
    return (
        <div
            class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto"
            style={{ flex: "0 0 auto" }}
        >
            <div>
                <h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">
                    {props.name}
                </h4>
                <p class="pb-5 important-font-[MYRIADPRO-Regular]">{props.title}</p>
                <div>
                    <img
                        class="w-full h-full"
                        src="/assets/testing-image.jpg"
                        alt=""
                    />
                </div>
                <p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">
                    {props.quote}
                </p>
                <div class="w-full pb-20px pt-20px md:pt-30px text-center">
                    <div class="flex flex-col gap-1">
                        {props.paragraphs.map((paragraph, index) => (
                            <p class={`text-left ${index === 0 ? "mt-0" : "mt-1"}`}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const ReviewSlider2 = (props: {
    reviews: { name: string }[];
    children: JSX.Element | JSX.Element[];
    variant?: "dots1" | "dots2" | "dots3" | "dots0";
}) => {
    const { variant = "dots1", reviews, children } = props;
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <SliderProvider>
            {isDesktop() ? (
                <div class="max-w-1500px mx-auto position-relative hidden md:block my-0">
                    <Slider options={{ loop: true, slides: { perView: 3.1, spacing: 15 } }}>
                        {children}
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
                        {children}
                    </Slider>
                    <SliderButton class="hidden cursor-pointer position-absolute top-47% left-0 bg-transparent b-none" prev>
                        <RiArrowLeftSLine class="-ml-1 font-size-7 b-solid b-2px p-1 c-paper b-brand-compliment hover-c-brand-compliment bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors" />
                    </SliderButton>
                    <SliderButton class="hidden cursor-pointer position-absolute top-47% right-0 bg-transparent b-none" next>
                        <RiArrowRightSLine class="-mr-1 font-size-7 b-solid b-2px p-1 c-paper b-brand-compliment hover-c-brand-compliment bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors" />
                    </SliderButton>
                </div>
            )}
            <Switch>
                <Match when={variant === "dots0"}>
                    <div></div>
                </Match>
                <Match when={variant === "dots1"}>
                    <DotsUnderSlider reviews={reviews} />
                </Match>
                <Match when={variant === "dots2"}>
                    <DotsUnderSlider2 reviews={reviews} />
                </Match>
                <Match when={variant === "dots3"}>
                    <DotsUnderSlider3 reviews={reviews} />
                </Match>
            </Switch>
        </SliderProvider>
    );
};

export function StarReview(props: { hrefGoogleReview: string; name: string; reviewText: string | JSXElement; title?: string; class?: string; }) {
    return (
        <a class="mb-2 md:mb-5 mt-0 m-auto px-2 md:px-6 pt-10 pb-10 bg-gradient-to-b from-brand-yellow to-brand b-rd-12px" target="_blank" rel="noopener" href={props.hrefGoogleReview}>
            <div class="flex flex-justify-center flex-items-center">
                <div class="flex flex-col flex-justify-center flex-items-center">
                    <div class="flex flex-justify-center flex-items-center">
                        <img class="w-80px h-80px mx-auto" style="filter: saturate(130%);" src="/assets/sense-logo-100px.webp" alt="profile" />
                    </div>
                    <div class={`flex flex-col justify-between items-end h-550px sm:h-300px md:h-850px lg:h-700px xl:h-700px ${props.class ?? ''}`}>
                        <div class="font-400 c-paper pt-7 pb-5 md:px-0 px-3 font-300 font-size-4 md:font-size-3.8 lg:font-size-4 md:line-height-6 lg:line-height-6.5 xl:line-height-7.3" style="font-family:'Roboto', sans-serif; text-align: left;">{props.reviewText}</div>
                        <div class="w-full">
                            <p class="c-paper mb-0 mt-0 md:px-0 px-3">{props.name}</p>
                            <p class="c-paper mb-0 mt-0 md:px-0 px-3">{props.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export function ReviewersImageReview(props: { name: string; date: string; reviewText: string | JSXElement; style: string; }) {
    return (
        <div class="mb-2 md:mb-5 mt-0 m-auto px-2 md:px-8 pt-10 md:pb-8 pb-13 b-rd-12px" style={props.style}>
            <div class="flex flex-justify-center flex-items-end h-400px md:h-500px">
                <div class="flex flex-col flex-justify-end flex-items-end">
                    <div class="font-300 c-paper lg-px-0 pb-4 px-3 line-height-5.4 font-size-13px md:font-size-17px">{props.reviewText}</div>
                    <div class="w-full px-3 md:px-0">
                        <p class="font-size-13px md:font-size-17px c-brand-orange font-[MYRIADPRO-Semibold] mb-0 mt-0">{props.name}</p>
                        <p class="font-size-13px md:font-size-18px leading-5 tracking-0.2 font-400 c-paper mb-0 mt-0 font-[MYRIADPRO-COND]">{props.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function GoogleStarReview(props: { stars: number; hrefGoogleReview: string; name: string; reviewText: string | JSXElement; img: string; class?: string; }) {
    return (
        <a class="mb-2 md:mb-5 mt-0 m-auto px-2 lg:px-8 pt-13 pb-9 bg-paper b-rd-12px" target="_blank" rel="noopener" href={props.hrefGoogleReview}>
            <div class="flex flex-justify-center flex-items-center">
                <div class="flex flex-col flex-justify-center flex-items-center">
                    <div class="flex flex-justify-center flex-items-center mt-5 mb-8">
                        <img class="fixed z-100 w-20 h-20 p-3 bg-paper b-solid b-brand-orange b-3.5px mx-auto" style="filter: saturate(130%); border-radius:50% !important;" src="/assets/GoogleLogoPNGImage.webp" alt="profile" />
                    </div>
                    <div class={`flex flex-col justify-between items-end h-450px sm:h-500px lg:h-500px xl:h-500px ${props.class ?? ''}`}>
                        <div class="important-text-left pb-2 pt-7 lg-px-0 px-4 font-400 font-size-3.7 sm:font-size-3.7 md:font-size-4 line-height-6 md:line-height-6.3" style="font-family:'Roboto', sans-serif; text-align: left;">{props.reviewText}</div>
                        <div class="flex flex-justify-start flex-items-start w-full lg-px-0 px-4">
                            <img class="w-10 h-10 ml-0 mr-3" src={props.img} alt="profile" />
                            <div class="flex flex-col">
                                <div class="flex flex-row">
                                    {range(props.stars).map((_: any) => <img class="ml-0 mr-1 w-5" style="filter: saturate(14);" src="/assets/google-star-review-logo-e1706350894182.png" alt="star" />)}
                                    {range(5 - props.stars).map((_: any) =>
                                        <img class="w-5 m-r-1" style="filter: saturate(14);" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star" />)}
                                </div>
                                <p class="flex flex-col flex-justify-center flex-items-start mb-0 mt-0 font-400">{props.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export function PuzzleIconReview(props: { alt: string; title: string; img: string; desc: string; puzzleclass: string; style: string; class?: string; }) {
    return (
        <div class={`h-520px md:h-700px lg:h-520px ${props.class}`}>
            <div class="flex flex-col h-full overflow-hidden rounded-[10px]">
                <div>
                    <img
                        src={props.img}
                        alt={props.alt}
                        class="w-full object-cover align-top block important-rounded-bl-none important-rounded-br-none"
                    />
                </div>
                <div
                    class="flex flex-col justify-start flex-grow px-7 pt-6 pb-15 rounded-bl-10px rounded-br-10px"
                    style={props.style}
                >
                    <div class="flex items-center gap-3 mb-2">
                        <div class="c-paper font-size-4.8 leading-6 flex items-center important-leading-5 font-[MYRIADPRO-Semibold]">
                            <div>
                                <MdiPuzzle class={`mt-1.5 w-6 h-6 ${props.puzzleclass}`} />
                            </div>
                            {props.title}
                        </div>
                    </div>
                    <p class="c-paper font-size-18px leading-6.5 mb-0 pb-3 font-[MYRIADPRO-Light]">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

export function PuzzleIconReview2(props: {
    exp?: string;
    secondtitle: string;
    alt: string;
    title: string;
    img: string;
    puzzleclass: string;
    thirdtitle?: string;
    class?: string | JSX.CSSProperties;
    div: { puzzleclass: string; text: string }[];
}) {
    return (
        <div class="h-full">
            <p class="c-gray-500">{props.exp}</p>
            <div class="flex flex-col h-full overflow-hidden rounded-[10px]">
                <div>
                    <img
                        src={props.img}
                        alt={props.alt}
                        class="w-full object-cover align-top block important-rounded-bl-none important-rounded-br-none"
                    />
                </div>
                <div
                    class={`flex flex-col justify-start flex-grow px-5 pt-6.5 pb-5 rounded-bl-10px rounded-br-10px ${props.class ?? ''}`}
                >
                    <div class="c-paper font-size-25px font-[MYRIADPRO-Semibold] mb-3">{props.title}</div>
                    <div class="c-paper">{props.secondtitle}</div>
                    <div class="flex gap-3 my-2">
                        <div class="flex flex-col c-paper font-size-4.5 leading-6 font-500 flex gap-0">
                            <For each={props.div}>
                                {(item) => (
                                    <>
                                        <div class="c-paper">{props.thirdtitle}</div>
                                        <div class="flex items-center gap-1 mt-10px">
                                            <div class="flex items-start flex-self-start mt-1">
                                                <MdiPuzzle class={`w-6 mr-2 ${item.puzzleclass ?? ''}`} />
                                            </div>
                                            <p class="c-paper mt-0">{item.text}</p>
                                        </div>
                                    </>
                                )}
                            </For>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function KidSlider(props: {
    alt: string;
    title: string;
    secondtitle: string;
    paragraphtitle: string;
    img: string;
    class?: string | JSX.CSSProperties;
    div: { puzzleclass: string; text: string }[];
}) {
    return (
        <div class="mb-10 flex flex-col lg:flex-row lg:gap-10">
            <div class={`max-h-500px lg:max-h-700px w-full lg:w-1/2 flex flex-col justify-start flex-grow px-5 lg:px-8 pt-6.5 lg:pb-8 mb-5 pb-5 rounded-10px ${props.class ?? ''}`}>
                <div class="c-paper font-size-28px font-[MYRIADPRO-Semibold] mt-3">{props.title}</div>
                <p class="c-paper font-[MYRIADPRO-CONDIT] font-size-20px mt-3">{props.secondtitle}</p>
                <div class="flex flex-col h-full overflow-hidden rounded-[10px]">
                    <div>
                        <img
                            src={props.img}
                            alt={props.alt}
                            class="w-full object-cover align-top block important-rounded-bl-none important-rounded-br-none"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2">
                <div class="flex flex-col c-paper font-size-4.5 leading-6 flex">
                    <For each={props.div}>
                        {(item) => (
                            <>
                                <div class="flex items-center gap-1 mt-10px">
                                    <div class="flex items-start flex-self-start mb-1">
                                        <MdiPuzzle class={`font-size-8 mr-2 ${item.puzzleclass ?? ''}`} />
                                    </div>
                                    <div class="mt-0 font-size-20px lg:font-size-25px font-[MYRIADPRO-Bold]">{props.paragraphtitle}</div>
                                </div>
                                <p class="">{item.text}</p>
                            </>
                        )}
                    </For>
                </div>
            </div>
        </div>
    );
}

export function AuthorContainer(props: {
    href: string;
    style: string;
    name: string;
    description: string | JSX.Element;
}) {
    return (
        <div class="mb-2 md:mb-10 mt-0 m-auto px-2 md:px-5 pt-10 md:pb-5 pb-20 b-rd-12px w-350px h-350px md:w-400px md:h-400px bg-[position:right_50%_bottom_50%] bg-contain" style={props.style}>
            <div class="flex flex-justify-center flex-items-center h-380px md:h-450px">
                <div class="ml-3">
                    <p class="font-size-18px md:font-size-20px uppercase c-paper font-[MYRIADPRO-Bold] mb-2 mt-0">{props.name}</p>
                    <div class=" c-paper px-0 leading-5.5 lg-leading-6 font-size-15px md:font-size-17px pb-3">{props.description}</div>
                    <div class="w-full">
                        <div class="flex justify-start items-center">
                            <a href={props.href}
                                class="group relative rounded-8px shadow-md overflow-hidden text-white text-lg font-[MyriadPro-SemiboldCond] px-7 pb-1.5 pt-2 w-160px h-40px flex justify-center items-center"
                                style={{
                                    "background-image": `url(/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp)`,
                                    "background-size": "cover",
                                    "background-position": "center",
                                }}>
                                <div class="absolute inset-0 bg-brand-orange/80 group-hover-bg-brand-orange-hover/80 transition-all"></div>
                                <div class="flex justify-center items-center c-paper pb-0.4 w-full h-full">
                                    <div class="text-white font-[MyriadPro-SemiboldCond] text-center leading-4 md:leading-4.5 font-size-14px md:font-size-16px tracking-0.2 uppercase">
                                        Научете повече
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function useMediaQuery(query: string) {
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