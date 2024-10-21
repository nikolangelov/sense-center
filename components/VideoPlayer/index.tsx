import { onCleanup, onMount } from "solid-js";

export const VideoPlayer = (props: { src: string;}) => {
  let iframeRef: HTMLIFrameElement | undefined;

  const sendMessageToIframe = (message: any) => {
    if (iframeRef?.contentWindow) {
      iframeRef.contentWindow.postMessage(
        JSON.stringify(message),
        "*"
      );
    }
  };

  onMount(() => {
    // Initialize the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Send play message when iframe is in view
            sendMessageToIframe({ event: "command", func: "playVideo" });
          } else {
            // Send pause message when iframe is out of view
            sendMessageToIframe({ event: "command", func: "pauseVideo" });
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the video is in view
    );

    if (iframeRef) {
      observer.observe(iframeRef);
    }

    // Cleanup the observer on component unmount
    onCleanup(() => {
      if (iframeRef) {
        observer.unobserve(iframeRef);
      }
    });
  });

  return (
    <div class="flex flex-justify-center flex-items-center mt-20">
      <iframe
        ref={iframeRef}
        class="mt-10 b-rd-3 h-200px md-h-500px"
        style="width: 100%;"
        src={props.src}
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};
