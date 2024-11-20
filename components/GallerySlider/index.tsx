import { createSlider, Slider, SliderButton, SliderProvider } from "solid-slider";
import { createSignal, JSX, onCleanup, onMount } from "solid-js";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';

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
      <div class="max-w-1100px m-auto position-relative hidden md:block">
        <Slider options={{ loop: true, slides: { perView: 3, spacing: 20 } }}>
          {children}
        </Slider>
        <SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
          <RiPlayReverseMiniLine class="-ml-2 font-size-10 b-solid b-3px p-1 hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" />
        </SliderButton>
        <SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
          <RiPlayMiniLine class="-mr-2 font-size-10 b-solid b-3px p-1 hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" />
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
      <div class="max-w-1100px m-auto position-relative md:hidden block mx-4">
        <Slider options={{ loop: true }}>
          {children}
        </Slider>
        <SliderButton class="cursor-pointer position-absolute top-45% left-0 bg-transparent b-none" prev>
          <RiPlayReverseMiniLine class="-ml-1 font-size-7 b-solid b-2px p-1 c-#d19d64 b-#d19d64 hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" />
        </SliderButton>
        <SliderButton class="cursor-pointer position-absolute top-45% right-0 bg-transparent b-none" next>
          <RiPlayMiniLine class="-mr-1 font-size-7 b-solid b-2px p-1 c-#d19d64 b-#d19d64 hover-c-paper hover-bg-#d19d64 hover-b-#d19d64 transition-colors" />
        </SliderButton>
      </div>
    </SliderProvider>
  );
};