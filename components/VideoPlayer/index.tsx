import { createSignal, onCleanup, onMount } from "solid-js";

type VideoSource =
  | { type: "youtube"; youtubeId: string }
  | { type: "file"; src: string; poster?: string };

export const VideoPlayer = (props: {
  desktopSource: VideoSource;
  mobileSource: VideoSource;
  desktopThumbnail?: string;
  mobileThumbnail?: string;
  desktopGif?: string;
  mobileGif?: string;
  isPlaying: boolean;
  onPlay: () => void;
}) => {
  const [isMobile, setIsMobile] = createSignal(false);

  onMount(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    onCleanup(() => mq.removeEventListener("change", handler));
  });

  return (
    <div
      class="relative flex justify-center items-center mt-0 lg:mt-20 max-w-[1100px] mx-auto cursor-pointer"
      onClick={props.onPlay}
    >
      {props.isPlaying ? (
        <>
          {!isMobile() && props.desktopSource.type === "youtube" && (
            <iframe
              class="rounded-[10px] w-full h-[600px] lg:h-[600px] xl:h-[600px] bg-black object-cover"
              src={`https://www.youtube.com/embed/${props.desktopSource.youtubeId}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          )}
          {!isMobile() && props.desktopSource.type === "file" && (
            <video
              class="rounded-[10px] w-full h-[600px] lg:h-[600px] xl:h-[600px] bg-black object-cover"
              src={props.desktopSource.src}
              poster={props.desktopSource.poster ?? props.desktopThumbnail}
              autoplay
              controls
            />
          )}
          {isMobile() && props.mobileSource.type === "youtube" && (
            <iframe
              class="rounded-[10px] w-full h-[650px] sm:h-[750px] bg-black object-cover"
              src={`https://www.youtube.com/embed/${props.mobileSource.youtubeId}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          )}
          {isMobile() && props.mobileSource.type === "file" && (
            <video
              class="rounded-[10px] w-full h-[650px] sm:h-[750px] bg-black object-cover"
              src={props.mobileSource.src}
              poster={props.mobileSource.poster ?? props.mobileThumbnail}
              autoplay
              controls
            />
          )}
        </>
      ) : (
        <>
          {props.desktopGif || props.mobileGif ? (
            <video
              src={isMobile() ? props.mobileGif : props.desktopGif}
              class="w-full h-full object-cover h-[600px] lg:h-[600px] xl:h-[600px] rounded-[10px]"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
            />
          ) : (
            <img
              src={isMobile() ? props.mobileThumbnail : props.desktopThumbnail}
              class="w-full h-full object-cover rounded-[10px]"
              alt="Video thumbnail"
            />
          )}
          <div
            class="h-16 w-16 flex justify-center items-center absolute z-20 text-brand-purple bg-[#f0f0f0] hover:bg-white rounded-[10px] transition-all duration-200"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              "pointer-events": "none",
            }}
          >
            ▶
          </div>
        </>
      )}
    </div>
  );
};
