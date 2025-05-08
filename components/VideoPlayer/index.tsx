import { onMount, createSignal } from 'solid-js';

type VideoHeroProps = {
  fallbackImageUrl: string;
  overlayImageUrl?: string;
};

export const VideoHero = (props: VideoHeroProps) => {
  const [shouldLoad, setShouldLoad] = createSignal(false);
  const [showOverlay, setShowOverlay] = createSignal(true);

  const videoUrl = "https://cherrycarpetcleaning.co.uk/wp-content/uploads/2025/05/HeroVideo.mp4";

  onMount(() => {
    setTimeout(() => {
      setShouldLoad(true);
    }, 0);
  });

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("info-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div class="relative w-full h-[55vh] sm:h-screen overflow-hidden bg-black">

      {shouldLoad() ? (
        <video
          src={videoUrl}
          autoplay
          muted
          playsinline
          loop
          class="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img
          src={props.fallbackImageUrl}
          alt="Video preview"
          class="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      <div class="flex flex-col items-center justify-center w-full h-full z-10">
        {props.overlayImageUrl && showOverlay() && (
          <img
            src={props.overlayImageUrl}
            alt="Overlay"
            class="absolute top-1/2 left-1/2 w-80% sm:w-50% lg:w-[35%] mx-auto pb-20 sm:pb-10 transform -translate-x-1/2 -translate-y-1/2 z-2 pointer-events-none"
          />
        )}

        <button
          onClick={scrollToNextSection}
          class="
         cursor-pointer absolute bottom-25 sm:bottom-50 transform -translate-x-1/2 z-30
          w-12 h-12 rounded-full border-2 border-white text-white bg-transparent b-solid
          flex items-center justify-center
          animate-bounce
        "
          aria-label="Scroll down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <noscript>
        <img
          src={props.fallbackImageUrl}
          alt="Video preview"
          class="absolute top-0 left-0 w-full h-full object-cover"
        />
      </noscript>
    </div>
  );
};
