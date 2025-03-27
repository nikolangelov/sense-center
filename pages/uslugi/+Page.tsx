import "solid-slider/slider.css";
import { AnimatedComponent } from '../../components/AnimateOnView';
import MdiScissors from '~icons/mdi/scissors';
import { createSignal, onCleanup, onMount } from "solid-js";

function useMediaQuery(query: string) {
	const [matches, setMatches] = createSignal(false);

	onMount(() => {
		if (typeof window !== "undefined") {
			const mediaQueryList = window.matchMedia(query);
			setMatches(mediaQueryList.matches);

			const handleChange = (event: MediaQueryListEvent) => {
				setMatches(event.matches);
			};

			mediaQueryList.addEventListener('change', handleChange);

			onCleanup(() => {
				mediaQueryList.removeEventListener('change', handleChange);
			});
		}
	});

	return matches;
}



function ServiceContainer(props: { href: string, title: string, desc: string, price?: string, time?: string, img: string, alt: string }) {
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const [arrowWidth, setArrowWidth] = createSignal(50);
	const [isVisible, setIsVisible] = createSignal(false);
	let containerRef: HTMLDivElement | undefined;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setArrowWidth(150);
						setIsVisible(true);
					} else {
						setArrowWidth(50);
						setIsVisible(false);
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (containerRef) observer.observe(containerRef);
		onCleanup(() => observer.disconnect());
	});

	return (
		<>
			<AnimatedComponent class="max-w-400px w-full h-500px md-w-400px md-h-550px">
				{isDesktop() ? (
					<a href={props.href}>
						<div
							class="block h-full relative flex flex-col justify-end group overflow-hidden"
							style={{
								"background-image": `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${props.img})`,
								"background-position": "center",
								"background-repeat": "no-repeat",
								"background-size": "cover",
							}}
							role="img" aria-label={props.alt}>
							<span class="before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] before:w-[1px] before:h-[80%] before:top-[1rem] before:left-[1rem] after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] after:h-[1px] after:w-[80%] after:top-[1rem] after:left-[1rem] group-hover:before:h-[calc(100%-2rem)] group-hover:after:w-[calc(100%-2rem)] before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out">
							</span>
							<span class="before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] before:w-[1px] before:h-[80%] before:bottom-[1rem] before:right-[1rem] after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] after:h-[1px] after:w-[80%] after:right-[1rem] after:bottom-[1rem] group-hover:before:h-[calc(100%-2rem)] group-hover:after:w-[calc(100%-2rem)] before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out">
							</span>
							<div class="relative z-10 px-8 pb-8 flex flex-col items-center">
								<div class="flex flex-col items-center text-center bottom-8 transition-all duration-700 ease-in-out group-hover:bottom-[33%]">
									<MdiScissors class="c-paper mx-auto rotate-[270deg] w-8" />
									<div class="w-300px">
										<h3 class="c-paper mt-2 mb-1">{props.title}</h3>
									</div>
									<div class="h-[1px] w-[100px] group-hover:w-[300px] transition-all duration-900 ease-in-out bg-brand mb-4"></div>
								</div>
								<div class="c-paper text-left mb-4 px-4 text-lg leading-7 mt-auto">
									{props.desc}
								</div>
								<div class="flex flex-col flex-items-center pb-2">
									<div class="bg-none c-paper b-solid b-1px b-paper hover-b-brand hover-bg-brand transition-colors mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</div>
								</div>
							</div>
						</div>
					</a>
				) : (
					<div
						ref={containerRef}
						class="block h-full relative flex flex-col justify-end group overflow-hidden"
						style={{
							"background-image": `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${props.img})`,
							"background-position": "center",
							"background-repeat": "no-repeat",
							"background-size": "cover",
						}}
						role="img" aria-label={props.alt}>
						<span class={`before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] before:w-[1px] before:h-[80%] before:top-[1rem] before:left-[1rem] 
                  after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] after:h-[1px] after:w-[80%] after:top-[1rem] after:left-[1rem]
                  before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out 
                  ${isVisible() ? "before:h-[calc(100%-2rem)] after:w-[calc(100%-2rem)]" : ""}`}>
						</span>
						<span class={`before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] before:w-[1px] before:h-[80%] before:bottom-[1rem] before:right-[1rem] 
                  after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] after:h-[1px] after:w-[80%] after:right-[1rem] after:bottom-[1rem]
                  before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out 
                  ${isVisible() ? "before:h-[calc(100%-2rem)] after:w-[calc(100%-2rem)]" : ""}`}>
						</span>
						<div class="relative z-10 px-8 pb-8 flex flex-col items-center justify-end h-full">
							<div class="flex flex-col items-center text-center transition-all duration-700 ease-in-out ">
								<MdiScissors class="c-paper mx-auto rotate-[270deg] w-8" />
								<div class="w-250px">
									<h3 class="c-paper mt-1 important-mb-1">{props.title}</h3>
								</div>
								<div class="h-[1px] transition-all duration-900 ease-in-out bg-brand"
									style={{ width: `${arrowWidth()}px` }}>
								</div>
								<div class="c-paper text-left pt-4 px-4 text-lg leading-7 mt-auto">
									{props.desc}
								</div>
								<div class="flex flex-col flex-items-center pt-4">
									<div class="bg-none c-paper b-solid b-1px b-paper hover-b-brand hover-bg-brand transition-colors mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</AnimatedComponent>
		</>
	)
}

export default function Page() {
	return (
		<>
			<div class="max-w-1240px mx-auto">
				<div class="flex flex-justify-center">
					<div class="px-3 my-0 mx-auto text-center w-full">
						<AnimatedComponent>
							<h1 class="uppercase mt-30 md:mt-65 text-center">Всички наши услуги</h1>
						</AnimatedComponent>
					</div>
				</div>
			</div>

			<section class="pb-17 md-pt-35 pt-15">
				<div class="container-in-services flex md-flex-row flex-col flex-justify-center flex-items-center flex-wrap mb-5 gap-15 lg-gap-25 lg-px-10 px-5">
					<ServiceContainer
						img="/assets/uslugi/мъжко-подстригване-1-mobile.webp"
						alt="мъжко подстригване"
						href=""
						title="Мъжко подстригване"
						desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба"
						price="50"
						time="1 ч."
					/>
					<ServiceContainer
						img="/assets/uslugi/оформяне-на-брада-1-mobile.webp"
						alt="оформяне на брада"
						href=""
						title="Оформяне на брада"
						desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба"
						price="50"
						time="1 ч."
					/>
					<ServiceContainer
						img="/assets/uslugi/подстригване-и-оформяне-на-брада-mobile.webp"
						alt="подстригване и оформяне на брада"
						href=""
						title="Подстригване и оформяне на брада"
						desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба"
						price="50"
						time="1 ч."
					/>
					<ServiceContainer
						img="/assets/uslugi/класическо-мокро-бръснене-mobile.webp"
						alt="класическо мокро бръснене"
						href=""
						title="Класическо мокро бръснене"
						desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба"
						price="50"
						time="1 ч."
					/>
					<ServiceContainer
						img="/assets/about3.jpg"
						alt=""
						href=""
						title="Услуга"
						desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба"
						price="50"
						time="1 ч."
					/>
					<ServiceContainer
						img="/assets/uslugi/бръснене-на-глава-с-бръснач-2-mobile.webp"
						alt="бръснене на глава с бръснач"
						href=""
						title="Бръснене на глава с бръснач"
						desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба"
						price="50"
						time="1 ч."
					/>

					<ServiceContainer
						img="/assets/uslugi/бръснене-на-глава-с-бръснач-1-mobile.webp"
						alt="бръснене на глава с бръснач"
						href=""
						title="Детско подстригване"
						desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба"
						price="50"
						time="1 ч."
					/>
					<ServiceContainer
						img="/assets/about3.jpg"
						alt="детско подстригване София"
						href=""
						title="Услуга"
						desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба"
						price="50"
						time="1 ч."
					/>
				</div>
			</section>
		</>
	);
}
