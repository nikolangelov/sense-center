import { Slider, SliderButton, SliderContext, SliderProvider } from "solid-slider";
import { createSignal, JSX, onCleanup, onMount, Show, useContext } from "solid-js";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';
import RiCloseFill from '~icons/ri/close-fill';

export const GallerySlider = (props: { buttonClass?: string; imgs: { src: string, alt: string }[] }) => {
  const [isDesktop, setIsDesktop] = createSignal(false);

  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
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
        <GallerySliderDesktop imgs={props.imgs} buttonClass={props.buttonClass} />
      ) : (
        <GallerySliderMobile imgs={props.imgs} buttonClass={props.buttonClass} />
      )}
    </>
  );
};

export const GallerySlider2 = (props: { buttonClass?: string; imgs: { src: string, alt: string, text?: string }[] }) => {
  const [isDesktop, setIsDesktop] = createSignal(false);

  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
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
      <GallerySliderDesktop2 imgs={props.imgs} buttonClass={props.buttonClass} />
    ) : (
      <GallerySliderMobile2 imgs={props.imgs} buttonClass={props.buttonClass} />
    )}
  </>
);
};

export const GallerySlider3 = (props: { buttonClass?: string; imgs: { src: string, alt: string, text?: string }[] }) => {
  const [isDesktop, setIsDesktop] = createSignal(false);

  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
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
      <GallerySliderDesktop3 imgs={props.imgs} buttonClass={props.buttonClass} />
    ) : (
      <GallerySliderMobile3 imgs={props.imgs} buttonClass={props.buttonClass} />
    )}
  </>
);
};

export function DotsUnderSlider(props: { imgs: { src?: string, alt?: string }[] }) {
  const [context] = useContext(SliderContext)
  const [isDesktop, setIsDesktop] = createSignal(false);

  const goToSlide = (index: number) => {
    context().moveTo(index)
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
        <Show when={props.imgs.length > 1}>
          <div class="dots-container relative w-full" style="text-align: center; margin-top: -50px; margin-bottom: 20px;">
            {props.imgs.map((_, index) => (
              <button
                onClick={() => goToSlide(index)}
                class={`dot ${context()?.current() === index ? "active" : ""}`}
                style={{ margin: "0 4px", padding: "5px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#ffffff" : "#d3d3d3cc" }}
              ></button>
            ))}
          </div>
        </Show>
      ) : (
        <Show when={props.imgs.length > 1}>
          <div class="dots-container relative" style="text-align: center; margin-top: -35px; margin-bottom: 20px;">
            {props.imgs.map((_, index) => (
              <button
                onClick={() => goToSlide(index)}
                class={`dot ${context()?.current() === index ? "active" : ""}`}
                style={{ margin: "0 3px", padding: "4px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#ffffff" : "#d3d3d3cc" }}
              ></button>
            ))}
          </div>
        </Show>
      )}
    </>
  )
}

export function DotsUnderSlider2(props: { imgs: { src?: string, alt?: string }[] }) {
  const [context] = useContext(SliderContext)
  const [isDesktop, setIsDesktop] = createSignal(false);

  const goToSlide = (index: number) => {
    context().moveTo(index)
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
        <Show when={props.imgs.length > 1}>
          <div class="dots-container relative w-full" style="text-align: center; margin-top: -50px; margin-bottom: 20px;">
            {props.imgs.map((_, index) => (
              <button
                onClick={() => goToSlide(index)}
                class={`dot ${context()?.current() === index ? "active" : ""}`}
                style={{ margin: "0 4px", padding: "5px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#ffffff" : "#d3d3d3cc" }}
              ></button>
            ))}
          </div>
        </Show>
      ) : (
        <Show when={props.imgs.length > 1}>
          <div class="dots-container relative w-full" style="text-align: center; margin-top: -40px; margin-bottom: 20px;">
            {props.imgs.map((_, index) => (
              <button
                onClick={() => goToSlide(index)}
                class={`dot ${context()?.current() === index ? "active" : ""}`}
                style={{ margin: "0 3px", padding: "4px", cursor: "pointer", border: "none", "border-radius": "50px", background: context()?.current() === index ? "#ffffff" : "#d3d3d3cc" }}
              ></button>
            ))}
          </div>
        </Show>
      )}
    </>
  )
}

const GallerySliderDesktop = (props: { buttonClass?: string; imgs: { src: string, alt: string }[] }) => {
  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <SliderProvider>
        <div class="max-w-full m-auto position-relative hidden md:block cursor-pointer">
          <Slider
            options={{ loop: true, initial: currentIndex(), slides: { perView: 1 } }}
          >
            {props.imgs.map((e, index) => (
              <img
                src={e.src}
                alt={e.alt}
                class="w-full h-auto object-cover important-b-rd-0 important-lg:b-rd-12px"
                onClick={() => openGallery(index)}
              />
            ))}
          </Slider>
        </div>
        <DotsUnderSlider imgs={props.imgs} />
      </SliderProvider>
    </>
  );
};

const GallerySliderMobile = (props: { buttonClass?: string; imgs: { src: string, alt: string }[] }) => {
  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <SliderProvider>
        <div class="max-w-full m-auto position-relative md:hidden block">
          <Slider options={{ loop: true, initial: currentIndex(), slides: { perView: 1 } }}>
            {props.imgs.map((e, index) => (
              <img
                src={e.src}
                alt={e.alt}
                class="w-full h-auto object-cover important-b-rd-0 important-xl:b-rd-12px"
                onClick={() => openGallery(index)}
              />
            ))}
          </Slider>

          <SliderButton next class="hidden bg-transparent b-none cursor-pointer position-absolute top-47% right-0 bg-transparent b-none">
            <RiPlayMiniLine class="-ml-1 font-size-7 b-solid b-2px p-1 c-brand-compliment b-brand-compliment important-hover-c-paper hover-bg-brand-compliment hover-b-brand-compliment transition-colors " />
          </SliderButton>
          <SliderButton prev class="hidden bg-transparent b-none cursor-pointer position-absolute top-47% left-0 bg-transparent b-none">
            <RiPlayReverseMiniLine class="-mr-1 font-size-7 b-solid b-2px p-1 c-brand-compliment b-brand-compliment important-hover-c-paper hover-bg-brand-compliment hover-b-brand-compliment transition-colors" />
          </SliderButton>
        </div>
        <DotsUnderSlider imgs={props.imgs} />
      </SliderProvider>
    </>
  );
};

const GallerySliderDesktop2 = (props: { buttonClass?: string; imgs: { src: string; alt: string; text?: string }[] }) => {
  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <SliderProvider>
        <div class="max-w-300px sm:w-300px md:w-700px max-w-full relative overflow-hidden mx-auto hidden md:flex cursor-pointer">
          <Slider
            options={{ loop: true, initial: currentIndex(), slides: { perView: 1 } }}
          >
            {props.imgs.map((e, index) => (
              <img
                src={e.src}
                alt={e.alt}
                class="w-full h-auto object-cover important-b-rd-0 important-xl:b-rd-12px"
                onClick={() => openGallery(index)}
              />
            ))}
          </Slider>
        </div>
        <DotsUnderSlider imgs={props.imgs} />
      </SliderProvider>
    </>
  );
};

const GallerySliderMobile2 = (props: { buttonClass?: string; imgs: { src: string; alt: string; text?: string }[] }) => {
  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <SliderProvider>
        <div class="w-full sm:w-300px md:w-700px max-w-full relative mx-auto flex cursor-pointer position-relative md:hidden flex">
          <Slider options={{ loop: true, initial: currentIndex(), slides: { perView: 1 } }}>
            {props.imgs.map((e, index) => (
              <img
                src={e.src}
                alt={e.alt}
                class="w-full h-auto object-cover important-b-rd-12px important-xl:b-rd-12px"
                onClick={() => openGallery(index)}
              />
            ))}
          </Slider>

          <SliderButton next class="hidden bg-transparent b-none cursor-pointer position-absolute top-47% right-0 bg-transparent b-none">
            <RiPlayMiniLine class="-ml-1 font-size-7 b-solid b-2px p-1 c-brand-compliment b-brand-compliment important-hover-c-paper hover-bg-brand-compliment hover-b-brand-compliment transition-colors " />
          </SliderButton>
          <SliderButton prev class="hidden bg-transparent b-none cursor-pointer position-absolute top-47% left-0 bg-transparent b-none">
            <RiPlayReverseMiniLine class="-mr-1 font-size-7 b-solid b-2px p-1 c-brand-compliment b-brand-compliment important-hover-c-paper hover-bg-brand-compliment hover-b-brand-compliment transition-colors" />
          </SliderButton>
        </div>
        <DotsUnderSlider imgs={props.imgs} />
      </SliderProvider>
    </>
  );
};

const GallerySliderDesktop3 = (props: { buttonClass?: string; imgs: { src: string; alt: string; text?: string }[] }) => {
  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <SliderProvider>
        <div class="max-w-300px sm:w-300px md:w-700px max-w-full relative overflow-hidden mx-auto hidden md:flex cursor-pointer">
          <Slider
            options={{ loop: true, initial: currentIndex(), slides: { perView: 1 } }}
          >
            {props.imgs.map((e, index) => (
              <div>
                <img
                  src={e.src}
                  alt={e.alt}
                  class="w-full h-auto object-cover important-b-rd-12px"
                  onClick={() => openGallery(index)}
                />
                {e.text && <p class="my-0 lowercase c-gray-700">{e.text}</p>}
              </div>
            ))}
          </Slider>
        </div>
        <DotsUnderSlider2 imgs={props.imgs} />
      </SliderProvider>
    </>
  );
};

const GallerySliderMobile3 = (props: { buttonClass?: string; imgs: { src: string; alt: string; text?: string }[] }) => {
  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <SliderProvider>
        <div class="max-w-300px sm:w-300px md:w-700px max-w-full relative overflow-hidden mx-auto hidden md:flex cursor-pointer position-relative md:hidden flex">
          <Slider options={{ loop: true, initial: currentIndex(), slides: { perView: 1 } }}>
            {props.imgs.map((e, index) => (
              <div>
                <img
                  src={e.src}
                  alt={e.alt}
                  class="w-full h-auto object-cover important-b-rd-12px"
                  onClick={() => openGallery(index)}
                />
                {e.text && <p class="my-0 lowercase c-gray-700 font-size-14px">{e.text}</p>}
              </div>
            ))}
          </Slider>

          <SliderButton next class="hidden bg-transparent b-none cursor-pointer position-absolute top-47% right-0 bg-transparent b-none">
            <RiPlayMiniLine class="-ml-1 font-size-7 b-solid b-2px p-1 c-brand-compliment b-brand-compliment important-hover-c-paper hover-bg-brand-compliment hover-b-brand-compliment transition-colors " />
          </SliderButton>
          <SliderButton prev class="hidden bg-transparent b-none cursor-pointer position-absolute top-47% left-0 bg-transparent b-none">
            <RiPlayReverseMiniLine class="-mr-1 font-size-7 b-solid b-2px p-1 c-brand-compliment b-brand-compliment important-hover-c-paper hover-bg-brand-compliment hover-b-brand-compliment transition-colors" />
          </SliderButton>
        </div>
        <DotsUnderSlider2 imgs={props.imgs} />
      </SliderProvider>
    </>
  );
};