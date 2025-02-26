import "solid-slider/slider.css";
import { AnimatedComponent } from '../../components/AnimateOnView';
import MdiBank from '~icons/mdi/bank';
import MdiPhoneClassic from '~icons/mdi/phone-classic';
import RiTimerFill from '~icons/ri/timer-fill';
import MdiScissors from '~icons/mdi/scissors?width=24px&height=24px';
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

const cursor = document.querySelector('.cursor') as HTMLDivElement;
const trail = document.querySelector('.cursor-trail') as HTMLDivElement;

document.addEventListener('mousemove', (event: MouseEvent) => {
	const { clientX: x, clientY: y } = event;

	// Smoothly move cursor
	cursor.style.transform = `translate(${x}px, ${y}px)`;

	// Slight delay for trailing effect
	setTimeout(() => {
		trail.style.transform = `translate(${x}px, ${y}px)`;
	}, 50);
});


function ServiceContainer(props: { href: string, title: string, desc: string, price?: string, time?: string, img: string, alt: string }) {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<>
			<AnimatedComponent class="max-w-400px w-full h-450px md-w-400px md-h-550px">
				{isDesktop() ? (
					<a href={props.href}>
						<div
							class="block h-full relative flex flex-col justify-end group overflow-hidden"
							style={{
								"background-image": `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${props.img})`,
								"background-position": "center",
								"background-repeat": "no-repeat",
								"background-size": "cover",
							}}
							role="img" aria-label={props.alt}>
							<span class="before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] before:w-[1px] before:h-[80%] before:top-[1rem] before:left-[1rem] after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] after:h-[1px] after:w-[80%] after:top-[1rem] after:left-[1rem] group-hover:before:h-[calc(100%-2rem)] group-hover:after:w-[calc(100%-2rem)] before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out">
							</span>
							<span class="before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] before:w-[1px] before:h-[80%] before:bottom-[1rem] before:right-[1rem] after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] after:h-[1px] after:w-[80%] after:right-[1rem] after:bottom-[1rem] group-hover:before:h-[calc(100%-2rem)] group-hover:after:w-[calc(100%-2rem)] before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out">
							</span>
							<div class="relative z-10 px-8 pb-8 flex flex-col items-center h-full">
								<div class="flex flex-col items-center text-center absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out group-hover:bottom-[33%]">
									<MdiScissors class="c-paper mx-auto rotate-[270deg] w-8" />
									<div class="w-300px">
										<h3 class="c-paper mt-2 mb-3">{props.title}</h3>
									</div>
									<div class="h-[1px] w-[100px] group-hover:w-[300px] transition-all duration-900 ease-in-out bg-brand"></div>
									<div class="c-paper mt-3">{props.price} лв. │ {props.time}</div>
								</div>
								<div class="c-paper text-center my-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out text-lg leading-8 mt-auto">
									{props.desc}
								</div>
							</div>
						</div>
					</a>
				) : (
					<div
						class="block h-full relative flex flex-col justify-end group overflow-hidden"
						style={{
							"background-image": `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${props.img})`,
							"background-position": "center",
							"background-repeat": "no-repeat",
							"background-size": "cover",
						}}
						role="img" aria-label={props.alt}>
						<span class="before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] before:w-[1px] before:h-[80%] before:top-[1rem] before:left-[1rem] after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] after:h-[1px] after:w-[80%] after:top-[1rem] after:left-[1rem] group-hover:before:h-[calc(100%-2rem)] group-hover:after:w-[calc(100%-2rem)] before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out">
						</span>
						<span class="before:absolute before:content-empty before:bg-[#bbbbbb] before:z-[1] before:w-[1px] before:h-[80%] before:bottom-[1rem] before:right-[1rem] after:absolute after:content-empty after:bg-[#bbbbbb] after:z-[1] after:h-[1px] after:w-[80%] after:right-[1rem] after:bottom-[1rem] group-hover:before:h-[calc(100%-2rem)] group-hover:after:w-[calc(100%-2rem)] before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out">
						</span>
						<div class="relative z-10 px-8 pb-8 flex flex-col items-center h-full">
							<div class="flex flex-col items-center text-center absolute bottom-25 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out group-hover:bottom-[44%]">
								<MdiScissors class="c-paper mx-auto rotate-[270deg] w-8" />
								<div class="w-250px">
									<h3 class="c-paper mt-1 mb-3">{props.title}</h3>
								</div>
								<div class="h-[1px] w-[100px] group-hover:w-[200px] transition-all duration-900 ease-in-out bg-brand"></div>
								<div class="c-paper mt-2">{props.price} лв. │ {props.time}</div>
							</div>
							<div class="c-paper text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out text-3.7 leading-6 mt-auto">
								{props.desc}
							</div>

							<div class="flex flex-col flex-items-center pt-4 pb-2">
								<a href={props.href} class="bg-brand c-black b-solid b-2px b-brand uppercase font-size-3.5 font-500 px-6 py-1.3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
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
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5) ), url(assets/The_Barber_Shop-144-2_17.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;" class="md-h-50vh h-30vh"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-19% lg-top-30% text-center w-full max-w-800px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Кои сме ние</h1>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<section class="lg-pb-25 pb-20 md-pt-40 pt-25" style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
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

			<div class="" style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;">
				<div class="px-2 gap-15 lg-h-80vh h-100% lg-py-0 py-15 flex flex-col flex-justify-center flex-items-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(/assets/20.jpg); background-position: 50% 50% ; background-repeat: no-repeat; background-size: cover;" role="img" aria-label="">
					<AnimatedComponent class="flex flex-col flex-justify-center">
						<h2 class="c-paper important-my-0">Свържете се с нас</h2>
						<img class="mx-auto pt-2" src="/assets/heading-ic.png" />
					</AnimatedComponent>

					<div class="flex lg-flex-row flex-col lg-gap-0 gap-10 w-full flex-justify-center">
						<AnimatedComponent class="flex flex-col text-center lg-w-25%">
							<MdiBank class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 pl-2.3 mx-auto lg-mb-6 mb-3" />
							<div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Адрес:
							</div>
							<div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								София, ул. "Николай Хайтов" 2
							</div>
						</AnimatedComponent>

						<AnimatedComponent class="flex flex-col text-center lg-w-25%">
							<RiTimerFill class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 mx-auto lg-mb-6 mb-3" />
							<div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Работно време:
							</div>
							<div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Понеделник - Петък: 09.00 - 17.00
							</div>
						</AnimatedComponent>

						<AnimatedComponent class="flex flex-col text-center lg-w-25%">
							<MdiPhoneClassic class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 mx-auto lg-mb-6 mb-3" />
							<div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Телефон:
							</div>
							<div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								0882 820 331
							</div>
						</AnimatedComponent>
					</div>

					<AnimatedComponent class="flex flex-justify-evenly lg-flex-justify-center lg-mt-10 w-full lg-gap-15 max-w-90% lg-max-w-1200px border-t-solid b-paper b-1px pt-16 lg-pt-22">
						<a href="/" class="text-center w-32 lg-w-42 bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">За нас</a>
						<a href="/" class="text-center w-32 lg-w-42 bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Отзиви</a>
					</AnimatedComponent>
				</div>
			</div>
		</>
	);
}
