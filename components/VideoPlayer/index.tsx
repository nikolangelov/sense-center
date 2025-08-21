import { createSignal } from "solid-js";

export const VideoPlayer = (props: { youtubeId: string; thumbnail: string }) => {
  const [isPlaying, setIsPlaying] = createSignal(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div
      class="relative flex justify-center items-center mt-0 lg:mt-20 max-w-[1500px] mx-auto cursor-pointer"
      onClick={handlePlay}
    >
      {isPlaying() ? (
        <iframe
          class="rounded-[10px] w-full h-[250px] sm:h-[400px] md:h-[600px] lg:h-[700px] xl:h-[750px] bg-black object-cover"
          src={`https://www.youtube.com/embed/${props.youtubeId}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      ) : (
        <>
          <img
            src={props.thumbnail}
            alt="Video thumbnail"
            class="absolute w-full h-full object-cover z-10 pointer-events-none rounded-[10px]"
          />
          <div
            class="h-16 w-16 font-size-8 pl-1 flex justify-center items-center absolute z-20 text-brand-purple bg-[#f0f0f0] hover:bg-white rounded-[10px] transition-all duration-200"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              "pointer-events": "none",
            }}
          >
            ▶
          </div>
          <div class="rounded-[10px] w-full h-[250px] sm:h-[400px] md:h-[600px] lg:h-[700px] xl:h-[750px] bg-black" />
        </>
      )}
    </div>
  );
};
