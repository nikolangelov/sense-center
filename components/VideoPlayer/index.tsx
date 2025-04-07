import { onCleanup, onMount } from "solid-js";

export const VideoPlayer = (props: { src: string }) => {
  let videoRef: HTMLVideoElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef?.play();
          } else {
            videoRef?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef) {
      observer.observe(videoRef);
    }

    onCleanup(() => {
      if (videoRef) {
        observer.unobserve(videoRef);
      }
    });
  });

  return (
    <div class="flex justify-center items-center mt-0 lg:mt-20 max-w-[1400px] mx-auto">
      <video
        ref={videoRef}
        class="w-full h-[250px] sm:h-[400px] md:h-[600px] lg:h-[700px] xl:h-[750px] bg-transparent"
        src={props.src}
        controls
        playsinline
        preload="auto"
      />
    </div>
  );
};
