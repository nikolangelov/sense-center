import {createSignal, JSX, onCleanup, onMount} from 'solid-js';
import range from "lodash/range"
import {Slider, SliderButton, SliderProvider} from "solid-slider";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';

export const ReviewSlider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <SliderProvider>
            {isDesktop() ? (
                <div class="max-w-900px mx-auto position-relative hidden md:block my-0">
                    <Slider options={{ loop: true, slides: { perView: 2, spacing: 10 } }}>
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
                <div class="max-w-1000px m-auto position-relative md:hidden block">
                    <Slider options={{ loop: true }}>
                        {children}
                    </Slider>
                    <SliderButton class="cursor-pointer position-absolute top-45% left-0 bg-transparent b-none" prev>
                        <RiPlayReverseMiniLine class="-ml-2 font-size-9 b-solid b-3px p-1 hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-45% right-0 bg-transparent b-none" next>
                        <RiPlayMiniLine class="-mr-2 font-size-9 b-solid b-3px p-1 hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" />
                    </SliderButton>
                </div>
            )}
        </SliderProvider>
    );
};

export function StarReview(props: { src: string; stars: number; hrefGoogleReview: string; name: string; date: string; reviewText: string; }) {
    return (
        <a class="my-5 m-auto px-8 py-10 bg-paper" target="_blank" rel="noopener" href={props.hrefGoogleReview}>
        <div class="flex flex-justify-center flex-items-center">
                <div class="flex flex-col flex-justify-center flex-items-center">
                    <div class="flex flex-justify-center flex-items-center">
                            <img class="w-12 h-12 mx-auto" src={props.src} alt="profile" />
                    </div>
                    <div class="important-text-center py-7 font-300 font-size-4.5 md-font-size-4.5" style="font-family:'Roboto', sans-serif; text-align: left;">{props.reviewText}</div>
                    <div class="">
                        {range(props.stars).map((_: any) => <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star" />)}
                        {range(5 - props.stars).map((_: any) => <img class="w-5 m-r-2" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star" />)}
                    </div>
                    <p class="flex flex-col flex-justify-center flex-items-center mb-0 mt-0"><b>{props.name}</b>{props.date}</p>
                </div>
        </div>
        </a>
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