import { createSignal, onCleanup, onMount } from "solid-js";

export const App = () => {
  let headingRef: HTMLHeadingElement | undefined;
  const [isVisible, setIsVisible] = createSignal(false);

  const handleScroll = () => {
    if (headingRef) {
      const headingPosition = headingRef.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (headingPosition < screenPosition) {
        setIsVisible(true);
      }
    }
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div style={{ height: "10vh" }}> {/* To enable scrolling */}
      <h2
        ref={headingRef}
        class={`animated-heading ${isVisible() ? "visible" : ""}`}
      >
        The process of our antiviral sanitisation services:
      </h2>
    </div>
  );
};