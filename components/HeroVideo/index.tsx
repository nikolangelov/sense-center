export const VideoHero = (props: {
  youtubeId: string;
  gifPreview: string;
  gifPreviewMobile: string;
  isPlaying: boolean;
  onPlay: () => void;
}) => {
  return (
    <div
      class="relative w-full h-100vh important-rounded-[0px] overflow-hidden"
      onClick={props.onPlay}
    >
      {props.isPlaying ? (
        <div class="relative w-full aspect-[16/9] b-none sm:h-full sm:aspect-auto z-10 bg-white md:mt-0px mt-100px">
          <iframe
            class="absolute top-0 left-0 w-full h-full b-none"
            src={`https://www.youtube.com/embed/${props.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
            title="YouTube video player"
            allow="autoplay; fullscreen; encrypted-media"
            allowfullscreen
          />
        </div>
      ) : (
        <button
          class="w-full h-full relative b-none px-0 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            props.onPlay();
          }}
          aria-label="Play video"
        >
          <div class="absolute inset-0 bg-white z-0" />
          <video
            src={props.gifPreview}
            class="hidden md:block w-full h-full object-cover z-10 relative important-rounded-[0px]"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            style={`
              -webkit-mask-image: linear-gradient(to bottom, white 80%, transparent 100%);
              mask-image: linear-gradient(to bottom, white 80%, transparent 100%);
            `}
          />
          <video
            src={props.gifPreviewMobile}
            class="block md:hidden w-full h-full object-cover z-10 relative important-rounded-[0px]"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            style={`
              -webkit-mask-image: linear-gradient(to bottom, white 80%, transparent 100%);
              mask-image: linear-gradient(to bottom, white 80%, transparent 100%);
            `}
          />
          <div
            class="md:top-50% top-36% h-15 w-15 md:h-18 md:w-18 pl-1.5 text-3xl md:text-4xl flex justify-center items-center absolute z-30 text-brand bg-paper hover:bg-[#f0f0f0] rounded-[100px] transition-all duration-200"
            style={{
              left: "50%",
              transform: "translate(-50%, -50%)",
              "pointer-events": "none",
            }}
          >
            ▶
          </div>
        </button>
      )}
    </div>
  );
};

export const GifHero = (props: { gifPreview: string; }) => {
  return (
    <div class="relative w-full h-100vh important-rounded-[0px] overflow-hidden">
      <video
        src={props.gifPreview}
        class="w-full h-full object-cover z-10 relative important-rounded-[0px]"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        style={`
              -webkit-mask-image: linear-gradient(to bottom, white 80%, transparent 100%);
              mask-image: linear-gradient(to bottom, white 80%, transparent 100%);
            `}
      />
    </div>
  );
};