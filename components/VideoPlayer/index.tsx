import { onCleanup, onMount } from "solid-js";

export const VideoPlayer = (props: { src: string; }) => {
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sendMessageToIframe({ event: "command", func: "playVideo" });
          } else {
            sendMessageToIframe({ event: "command", func: "pauseVideo" });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (iframeRef) {
      observer.observe(iframeRef);
    }

    onCleanup(() => {
      if (iframeRef) {
        observer.unobserve(iframeRef);
      }
    });
  });

  return (
      <div class="flex flex-justify-center flex-items-center mt-0 lg-mt-20 max-w-1140px mx-auto">
        <iframe
          ref={iframeRef}
          class="b-none w-full bg-paper h-217px md-h-600px"
          src={props.src}
          allow="autoplay; encrypted-media"
          style={{
            border: 'none'
          }}
        ></iframe>
      </div>
  );
};
