import { For, createSignal, onMount } from "solid-js";
import { AnimatedComponent } from "../AnimateOnView";

type Icon = {
  id: number;
  src: string;
  topPx: number;
  leftPx: number;
  size: number;
  opacity: number;
  rotation: number;
};

const iconPool = [
  "/assets/bg-puzzle-1.svg",
  "/assets/bg-puzzle-2.svg",
  "/assets/bg-puzzle-3.svg",
  "/assets/bg-puzzle-4.svg",
  "/assets/bg-puzzle-5.svg",
  "/assets/bg-puzzle-6.svg",
  "/assets/bg-puzzle-7.svg",
];

export function BackgroundIcons() {
  const [icons, setIcons] = createSignal<Icon[]>([]);

  onMount(() => {
    const generatedIcons: Icon[] = [];
    const iconCount = 10;
    const maxAttempts = 1000;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let attempts = 0;

    while (generatedIcons.length < iconCount && attempts < maxAttempts) {
      const size = Math.floor(Math.random() * 80) + 60;
      const leftPx = Math.floor(Math.random() * (vw - size));
      const topPx = Math.floor(Math.random() * (vh - size));

      const newIcon: Icon = {
        id: generatedIcons.length,
        src: iconPool[Math.floor(Math.random() * iconPool.length)],
        topPx,
        leftPx,
        size,
        opacity: Math.random() * 0.2 + 0.1,
        rotation: Math.floor(Math.random() * 360),
      };

      const newBox = {
        left: newIcon.leftPx,
        right: newIcon.leftPx + newIcon.size,
        top: newIcon.topPx,
        bottom: newIcon.topPx + newIcon.size,
      };

      const hasOverlap = generatedIcons.some((icon) => {
        const box = {
          left: icon.leftPx,
          right: icon.leftPx + icon.size,
          top: icon.topPx,
          bottom: icon.topPx + icon.size,
        };

        return !(
          newBox.right < box.left ||
          newBox.left > box.right ||
          newBox.bottom < box.top ||
          newBox.top > box.bottom
        );
      });

      if (!hasOverlap) {
        generatedIcons.push(newIcon);
      }

      attempts++;
    }

    setIcons(generatedIcons);
  });

  return (
    <AnimatedComponent class="relative inset-0 top-0 pointer-events-none z-0">
      <For each={icons()}>
        {(icon) => (
          <img
            src={icon.src}
            alt=""
            class="absolute icon-fade-in"
            style={{
              top: `${icon.topPx}px`,
              left: `${icon.leftPx}px`,
              width: `${icon.size}px`,
              height: `${icon.size}px`,
              opacity: icon.opacity.toString(),
              transform: `rotate(${icon.rotation}deg)`,
            }}
          />
        )}
      </For>
    </AnimatedComponent>
  );
}
