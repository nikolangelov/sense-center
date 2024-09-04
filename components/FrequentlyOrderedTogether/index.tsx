import { JSX, onMount } from 'solid-js';
import { Slider, createSlider, SliderButton, SliderProvider } from "solid-slider";
import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import { createSignal, onCleanup } from "solid-js";

export const FOTSlider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const options = { duration: 1000 };
    const [slider, { current, next, prev, moveTo }] = createSlider(options);

    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <SliderProvider>
            {isDesktop() ? (
                <div class="max-w-1000px mx-auto position-relative hidden md:block my-0">
                    <Slider options={{ loop: true, slides: { perView: 3, spacing: 20 } }}>
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
                        <RiArrowLeftSLine class="-ml-1.5 font-size-7 c-brand-second-action hover-c-brand transition-colors" />
                    </SliderButton>
                    <SliderButton class="cursor-pointer position-absolute top-45% right-0 bg-transparent b-none" next>
                        <RiArrowRightSLine class="-mr-1.5 font-size-7 c-brand-second-action hover-c-brand transition-colors" />
                    </SliderButton>
                </div>
            )}
        </SliderProvider>
    );
};

export function FOTSliderContainer(props: { img: string, alt: string, title: string, href: string, description: string }) {
    return (
        <a href={props.href} class="p-7 md-p-4 pt-8.5 md-pt-6 bg-paper b-rd-2 flex flex-justify-center border-style-solid b-brand-second-action b-3" style="box-shadow: 0px 0px 10px 1px rgb(84 89 95 / 20%);">
            <div>
                <img class="mt--2 mx-auto block max-w-full" src={props.img} alt={props.alt} />
                <h3 class="flex flex-justify-center flex-content-center flex-wrap flex-items-center md-mt-6 md-mb-1 mb-1 text-center font-size-6 md-font-size-7 pb-2" style="letter-spacing: -0.5px;">{props.title}</h3>
            <div class="font-size-17.5px line-height-30px p-2" style="letter-spacing:0.5px; font-family:'Roboto'">{props.description}</div>
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