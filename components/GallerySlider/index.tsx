import { createSlider, Slider, SliderButton, SliderProvider } from "solid-slider";
import { createSignal, JSX, onCleanup, onMount, Show } from "solid-js";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';
import RiCloseFill from '~icons/ri/close-fill';

export const GallerySlider = (props: { style?: string | string; imgs: { src: string, alt: string }[] }) => {
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
        <GallerySliderDesktop imgs={props.imgs} style={props.style} />
      ) : (
        <GallerySliderMobile imgs={props.imgs} style={props.style} />
      )}
    </>
  );
};

const GallerySliderDesktop = (props: { style?: string | string; imgs: { src: string, alt: string }[] }) => {
  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);
  let sliderRef;

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <SliderProvider>
        <div class="max-w-1100px m-auto position-relative hidden md:block cursor-pointer">
          <Slider
            ref={sliderRef}
            options={{ loop: true, initial: currentIndex(), slides: { perView: 3, spacing: 20 } }}
          >
            {props.imgs.map((e, index) => (
              <img
                src={e.src}
                alt={e.alt}
                class="object-contain w-full h-full"
                onClick={() => openGallery(index)}
              />
            ))}
          </Slider>

          <SliderButton class="cursor-pointer position-absolute top-45% left-0 lg-left--15 bg-transparent b-none" prev>
            <RiPlayReverseMiniLine class="-ml-2 font-size-10 b-solid b-3px p-1 important-hover-c-paper hover-bg-brand hover-b-brand transition-colors lg-c-black lg-b-black md-c-brand md-b-brand" style={props.style} />
          </SliderButton>

          <SliderButton class="cursor-pointer position-absolute top-45% right-0 lg-right--15 bg-transparent b-none" next>
            <RiPlayMiniLine class="-mr-2 font-size-10 b-solid b-3px p-1 important-hover-c-paper hover-bg-brand hover-b-brand transition-colors lg-c-black lg-b-black md-c-brand md-b-brand" style={props.style}/>
          </SliderButton>
        </div>
      </SliderProvider>

      <Show when={open()}>
        <SliderProvider>
          <div class="bg-black bg-opacity-85 z-9999 hidden md:block fixed">
            <div class="fixed top-0 left-0 w-full h-full m-auto bg-black px-10 flex flex-justify-center">
              <Slider ref={sliderRef} options={{ loop: true, initial: currentIndex() }}> 
                {props.imgs.map((e) => (
                  <img src={e.src} alt={e.alt} class="object-contain w-full h-full" />
                ))}
              </Slider>

              <RiCloseFill onClick={() => setOpen(false)} class="hover:rotate-90 transition-all z-2 w-16 h-16 absolute top-0 right-0 mr-8 mt-8 p-2 bg-transparent c-brand cursor-pointer hover-color-paper:hover" />

              <SliderButton class="cursor-pointer position-absolute top-50% left-20 bg-transparent b-none" prev>
                <RiPlayReverseMiniLine class=" font-size-10 b-solid b-3px p-1 c-brand b-brand hover-c-paper hover-bg-brand hover-b-brand transition-colors" />
              </SliderButton>

              <SliderButton class="cursor-pointer position-absolute top-50% right-20 bg-transparent b-none" next>
                <RiPlayMiniLine class=" font-size-10 b-solid b-3px p-1 c-brand b-brand hover-c-paper hover-bg-brand hover-b-brand transition-colors" />
              </SliderButton>
            </div>
          </div>
        </SliderProvider>
      </Show>
    </>
  );
};

const GallerySliderMobile = (props: { style?: string | string; imgs: { src: string, alt: string }[] }) => {
  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);
  let sliderRef;

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <SliderProvider>
        <div class="max-w-1100px m-auto position-relative md:hidden block mx-4">
          <Slider ref={sliderRef} options={{ loop: true, initial: currentIndex() }}>
            {props.imgs.map((e, index) => (
              <img
                src={e.src}
                alt={e.alt}
                class="object-contain w-full h-full"
                onClick={() => openGallery(index)} // Pass the clicked image index
              />
            ))}
          </Slider>

          <SliderButton class="cursor-pointer position-absolute top-47% left-0 bg-transparent b-none" prev>
            <RiPlayReverseMiniLine
              class="-ml-1 font-size-7 b-solid b-2px p-1 c-brand b-brand important-hover-c-paper hover-bg-brand hover-b-brand transition-colors"
              style={props.style}
            />
          </SliderButton>

          <SliderButton class="cursor-pointer position-absolute top-47% right-0 bg-transparent b-none" next>
            <RiPlayMiniLine
              class="-mr-1 font-size-7 b-solid b-2px p-1 c-brand b-brand important-hover-c-paper hover-bg-brand hover-b-brand transition-colors"
              style={props.style}
            />
          </SliderButton>
        </div>
      </SliderProvider>

      <Show when={open()}>
        <SliderProvider>
          <div class="bg-black bg-opacity-85 z-9999 h-full md:hidden block fixed">
            <div class="fixed top-0 left-0 w-full h-full m-auto bg-black px-5 flex flex-items-center flex-justify-center">
              <Slider ref={sliderRef} options={{ loop: true, initial: currentIndex() }}>
                {props.imgs.map((e) => (
                  <img src={e.src} alt={e.alt} class="object-contain w-full h-full" />
                ))}
              </Slider>

              <RiCloseFill
                onClick={() => setOpen(false)}
                class="hover:rotate-90 transition-all z-2 w-12 h-12 absolute top-0 right-0 mr-2 mt-10 p-2 bg-transparent c-brand cursor-pointer hover-color-paper:hover"
              />

              <SliderButton class="cursor-pointer position-absolute top-50% left-0 bg-transparent b-none" prev>
                <RiPlayReverseMiniLine class="ml-4 font-size-7 b-solid b-2px p-1 c-brand b-brand hover-c-paper hover-bg-brand hover-b-brand transition-colors" />
              </SliderButton>

              <SliderButton class="cursor-pointer position-absolute top-50% right-0 bg-transparent b-none" next>
                <RiPlayMiniLine class="mr-4 font-size-7 b-solid b-2px p-1 c-brand b-brand hover-c-paper hover-bg-brand hover-b-brand transition-colors" />
              </SliderButton>
            </div>
          </div>
        </SliderProvider>
      </Show>
    </>
  );
};
