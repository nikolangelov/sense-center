
import { createSignal, JSX } from "solid-js";
import { onMount } from "solid-js";
import { createEffect } from "solid-js";

type AnimateOnViewOptions = {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number | number[];
	animateClass?: string;
};

export function useAnimateOnView(options: AnimateOnViewOptions = {}) {
	const { root = null, rootMargin = "0px", threshold = 0.1, animateClass = "animate" } = options;

	const [observer, setObserver] = createSignal<IntersectionObserver | null>(null);

	createEffect(() => {
		const observerInstance = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(animateClass);
				} else {
					entry.target.classList.remove(animateClass);
				}
			});
		}, { root, rootMargin, threshold });

		setObserver(observerInstance);

		return () => observerInstance.disconnect();
	});

	const observe = (element: Element) => {
		observer()?.observe(element);
	};

	const unobserve = (element: Element) => {
		observer()?.unobserve(element);
	};

	return { observe, unobserve };
}

export const AnimatedComponent = (props: { children: JSX.Element, class?: string, style?: string }) => {
	let element!: HTMLDivElement;

	const { observe, unobserve } = useAnimateOnView({ animateClass: "animate" });

	onMount(() => {
		if (element) {
			observe(element);
		}
		return () => {
			if (element) {
				unobserve(element);
			}
		};
	});

	return (
		<div ref={(el) => (element = el)} data-observed class={props.class} style={props.style}>
			{props.children}
		</div>
	);
};