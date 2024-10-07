import { createSignal, Match, onCleanup, onMount, Switch } from "solid-js";

export const AnimatedH2 = ({props, variant}: { children: string, class?: string, variant: "h1" | "h2" }) => {
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
    <Switch>
          <Match when={variant === "h1"}>
    <h2
      ref={headingRef}
      class={`transition-h1 ${isVisible() ? "visible" : ""} ${props.class || ""}`}
    >
      {props.children}
    </h2>
    </Match>

    <Match when={variant === "h2"}>
    <h2
      ref={headingRef}
      class={`transition-h2 ${isVisible() ? "visible" : "line-height-12 md-line-height-14"} ${props.class || ""}`}
    >
      {props.children}
    </h2>
    </Match>
    </Switch>
  );
};
