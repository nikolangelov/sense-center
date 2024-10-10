import {createSignal, JSX, onCleanup, onMount} from 'solid-js';
import range from "lodash/range"
import {Slider, SliderButton, SliderProvider} from "solid-slider";
import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';

export const ReviewSlider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <SliderProvider>
            {isDesktop() ? (
                <div class="max-w-1000px mx-auto position-relative hidden md:block my-0">
                    <Slider options={{ loop: true, slides: { perView: 2, spacing: 10 } }}>
                        {children}
                    </Slider>
                    <SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
                        <RiArrowLeftSLine class="-ml-1 font-size-10 c-brand-second-action hover-c-brand transition-colors" />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
                        <RiArrowRightSLine class="-mr-1 font-size-10 c-brand-second-action hover-c-brand transition-colors" />
                    </SliderButton>
                </div>
            ) : (
                <div class="max-w-1000px m-auto position-relative md:hidden block">
                    <Slider options={{ loop: true }}>
                        {children}
                    </Slider>
                    <SliderButton class="cursor-pointer position-absolute top-45% left-0 bg-transparent b-none" prev>
                        <RiArrowLeftSLine class="-ml-1 font-size-9 c-brand-second-action hover-c-brand transition-colors" />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-45% right-0 bg-transparent b-none" next>
                        <RiArrowRightSLine class="-mr-1 font-size-9 c-brand-second-action hover-c-brand transition-colors" />
                    </SliderButton>
                </div>
            )}
        </SliderProvider>
    );
};

export function StarReview(props: { src: string; stars: number; hrefGoogleReview: string; name: string; date: string; reviewText: string; }) {
    return (
        <a class="m-y-5 w-90% md-w-70% m-auto border-style-solid b-brand-second-action b-2 px-5 b-rd-2 bg-paper" target="_blank" rel="noopener" href={props.hrefGoogleReview}>
        <div>
                <div>
                    <div class="flex flex-justify-between flex-items-center">
                        <div class="flex flex-items-center gap-4">
                            <img class="w-12 h-12" src={props.src} alt="profile" />
                            <p class="flex flex-col"><b>{props.name}</b>{props.date}</p>
                        </div>
                        <img class="w-10 h-10" src="/assets/GoogleLogoPNGImage.png" alt="Google logo" />
                    </div>

                    <div class="p-t-5 p-b-2 pl-7">
                        {range(props.stars).map((_: any) => <img class="m-r-2 w-5" src="/assets/google-star-review-logo-e1706350894182.png" alt="star" />)}
                        {range(5 - props.stars).map((_: any) => <img class="w-5 m-r-2" src="/assets/output-onlinepngtools-e1707480352597.png" alt="star" />)}
                    </div>

                    <div class="p-b-6 font-300 font-size-4.5 md-font-size-5 px-4 md-px-7" style="font-family:'Roboto', sans-serif; text-align: left;">{props.reviewText}</div>
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