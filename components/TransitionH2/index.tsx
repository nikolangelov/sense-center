import { createSignal, onCleanup, onMount } from "solid-js";

// H2 Component with transition on scroll
export const AnimatedH2 = (props: {children: string}) => {
  const [isVisible, setIsVisible] = createSignal(false);

  let headingRef: HTMLHeadingElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed (50% visibility in this case)
    );

    if (headingRef) {
      observer.observe(headingRef);
    }

    // Cleanup observer when component unmounts
    onCleanup(() => {
      if (headingRef) {
        observer.unobserve(headingRef);
      }
    });
  });

  return (
    <h2 style=""
      ref={headingRef}
      class={`transition-h2 ${isVisible() ? "visible" : "line-height-12 md-line-height-14"}`}
    >
      {props.children}
    </h2>
  );
};