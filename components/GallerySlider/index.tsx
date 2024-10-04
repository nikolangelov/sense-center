import { createSlider, Slider, SliderButton, SliderProvider } from "solid-slider";
import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import { createSignal, onCleanup, onMount, JSX } from "solid-js";

export const GallerySlider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const [isDesktop, setIsDesktop] = createSignal(false);

	onMount(() => {
		const checkMediaQuery = () => setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
		checkMediaQuery();
		window.addEventListener("resize", checkMediaQuery);
		onCleanup(() => window.removeEventListener("resize", checkMediaQuery));
	});

	return (
		<>
			{isDesktop() ? (
				<GallerySliderDesktop>{children}</GallerySliderDesktop>
			) : (
				<GallerySliderMobile>{children}</GallerySliderMobile>
			)}
		</>
	);
};


const GallerySliderDesktop = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const options = { duration: 1000 };
    const [slider, { current, next, prev, moveTo }] = createSlider(options);
  
    return (
      <SliderProvider>
        <div class="max-w-1000px m-auto position-relative hidden md:block">
          <Slider options={{ loop: true, slides: { perView: 3, spacing: 10 } }}>
            {children}
          </Slider>
          <SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
            <RiArrowLeftSLine class="-ml-1 font-size-10 c-brand-second-action hover-c-brand transition-colors" />
          </SliderButton>
          <SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
            <RiArrowRightSLine class="-mr-1 font-size-10 c-brand-second-action hover-c-brand transition-colors" />
          </SliderButton>
          <div class="flex flex-justify-center">
          </div>
        </div>
      </SliderProvider>
    );
  };
  
  const GallerySliderMobile = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const options = { duration: 1000 };
    const [slider, { current, next, prev, moveTo }] = createSlider(options);
  
    return (
      <SliderProvider>
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
      </SliderProvider>
    );
  };