import "solid-slider/slider.css";
import range from "lodash/range";
import { AnimatedComponent } from "../../components/AnimateOnView";
import { createResource, createSignal, JSX, onCleanup, onMount } from "solid-js";
import { BeforeAfterSlider, BeforeAfterSliderContainer, DotsUnderSlider } from "../../components/BeforeAfterSlider";
import { H2WithImage } from "../../components/H2WithImage";
import { Slider, SliderButton, SliderProvider } from "solid-slider";
import RiPlayMiniLine from '~icons/ri/play-mini-line';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';
import { cn } from "../../utils/cn";
import RiDoubleQuotesL from '~icons/ri/double-quotes-l';
import RiDoubleQuotesR from '~icons/ri/double-quotes-r';
import { ServiceContaner } from '../../components/ServiceContainer';
import { FacebookLikeGallery } from "../../components/FacebookLikeGallery";

export const ImageWithFrameReviewSlider = ({ children, buttonClass, ...props }: { children: JSX.Element | JSX.Element[], buttonClass?: string, services: { title: string }[] }) => {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<SliderProvider>
			{isDesktop() ? (
				<div class="max-w-1000px mx-auto position-relative hidden md:block mb-0 pt-5">
					<Slider options={{ loop: true, slides: { perView: 1, spacing: 15 } }}>
						{children}
					</Slider>
					<SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
						<RiPlayReverseMiniLine class={cn(`lg:mr-15 xl:-mr-2 font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment`, buttonClass)} />
					</SliderButton>
					<SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
						<RiPlayMiniLine class={cn(`lg:ml-15 xl:-ml-2 font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment`, buttonClass)} />
					</SliderButton>
				</div>
			) : (
				<div class="max-w-900px m-auto position-relative md:hidden block mx-4">
					<Slider options={{ loop: true, slides: { perView: 1, spacing: 10 } }}>
						{children}
					</Slider>
				</div>
			)}
			<DotsUnderSlider services={props.services} />
		</SliderProvider>
	);
};

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

function ImageWithFrameReview(props: { text: string | JSX.Element; src: string; date: string; service: string; style?: string; hrefGoogleReview: string; }) {
	return (
		<a target="_blank" rel="noopener" href={props.hrefGoogleReview}>
			<div class="max-w-600px sm:max-w-900px mx-auto flex justify-center items-center relative gap-2 sm:gap-6 md:gap-10 overflow-hidden">
				<div class="relative w-auto">
					<div class="w-auto h-auto max-h-230px sm:max-h-400px">
						<img class="w-auto h-auto max-h-230px sm:max-h-400px" style={props.style} src={props.src} alt="profile" />
						<div class="absolute inset-0 pointer-events-none">
							<span class={`before:absolute before:content-empty before:bg-[#f2f2f2] before:z-[1] before:w-[2px] before:h-[80%] before:top-[1rem]  before:left-[1rem] 
								after:absolute after:content-empty after:bg-[#f2f2f2] after:z-[1] after:h-[2px] after:w-[72%] after:top-[1rem] after:left-[1rem]
								before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out 
								before:h-[calc(100%-4rem)] md:before:h-[calc(100%-6rem)] after:w-[calc(100%-6rem)]" : ""}`}>
							</span>
							<span class={`before:absolute before:content-empty before:bg-[#f2f2f2] before:z-[1] before:w-[2px] before:h-[80%] before:bottom-[1rem]  before:right-[1rem] 
								after:absolute after:content-empty after:bg-[#f2f2f2] after:z-[1] after:h-[2px] after:w-[72%] after:right-[1rem] after:bottom-[1rem]
								before:transition-all before:duration-700 before:ease-in-out after:transition-all after:duration-700 after:ease-in-out 
								before:h-[calc(100%-4rem)] md:before:h-[calc(100%-6rem)] after:w-[calc(100%-6rem)]" : ""}`}>
							</span>
						</div>
					</div>
				</div>
				<div class="w-1/2 pl-1 flex flex-col justify-evenly items-start">
					<div>
						<h3 class="c-paper text-left important-mb-1 md:mb-3 important-sm:font-size-24px important-font-size-20px">{props.service}</h3>
						<div class="flex justify-start items-center gap-1">
							<img class="w-4 h-4" src="/assets/output-onlinepngtools.png" />
							<img class="w-4 h-4" src="/assets/output-onlinepngtools.png" />
							<img class="w-4 h-4" src="/assets/output-onlinepngtools.png" />
							<img class="w-4 h-4" src="/assets/output-onlinepngtools.png" />
							<img class="w-4 h-4" src="/assets/output-onlinepngtools.png" />
						</div>
					</div>
					<div>
						<p class="c-paper mb-1 md:mb-2 leading-5.3 sm:leading-8 font-size-15px sm:font-size-19px">{props.text}</p>
						<p class="c-paper mt-0 mb-0 font-100 font-size-15px" style="font-family:'Roboto', sans-serif !important;">{props.date}</p>
					</div>
				</div>
			</div>
		</a>
	);
}

export const QuotationReviewsSlider = ({ children, buttonClass, ...props }: { children: JSX.Element | JSX.Element[], buttonClass?: string, services: { title: string }[] }) => {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	return (
		<SliderProvider>
			{isDesktop() ? (
				<div class="max-w-1100px mx-auto position-relative hidden md:block mb-0 pt-5">
					<Slider options={{ loop: true, slides: { perView: 2.3, spacing: 15 } }}>
						{children}
					</Slider>
					<SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
						<RiPlayReverseMiniLine class={cn(`lg:mr-15 xl:-mr-2 font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment`, buttonClass)} />
					</SliderButton>
					<SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
						<RiPlayMiniLine class={cn(`lg:ml-15 xl:-ml-2 font-size-10 b-solid b-3px p-1 c-paper bg-brand-compliment hover-bg-transparent hover-b-brand-compliment transition-colors b-brand-compliment hover-c-brand-compliment`, buttonClass)} />
					</SliderButton>
				</div>
			) : (
				<div class="max-w-1000px m-auto position-relative md:hidden block mx-4">
					<Slider options={{ loop: true, slides: { perView: 1.2, spacing: 10 } }}>
						{children}
					</Slider>
				</div>
			)}
			<DotsUnderSlider services={props.services} />
		</SliderProvider>
	);
};

function QuotationReview(props: { text: string | JSX.Element; name: string; profile: string; hrefGoogleReview: string; }) {
	return (
		<a class="max-w-900px flex relative bg-paper p-7 md:p-8 lg:p-10" target="_blank" rel="noopener" href={props.hrefGoogleReview}>
			<div>
				<div class="flex flex-col justify-between items-start">
					<div>
						<RiDoubleQuotesL class="font-size-10 md:font-size-20 c-brand-compliment" />
						<p class="my-0 leading-4.8 md:leading-5.2 lg:leading-6 px-4 md:px-5 lg:font-size-17px md:font-size-15px font-size-14px">{props.text}</p>
						<div class="flex justify-end">
							<RiDoubleQuotesR class="font-size-10 md:font-size-20 c-brand-compliment" />
						</div>
						<div class="flex justify-start items-center gap-3 ml-4 mb-6 md:ml-6">
							<img class="w-11 h-11 md:w-13 md:h-13" src={props.profile} />
							<p class="mt-0 mb-0 font-100 font-size-4 md:font-size-5">{props.name}</p>
						</div>
					</div>
				</div>
				<span class="bottom-0 right-0
				before:absolute before:content-[''] before:bg-brand-compliment before:z-[1] 
				before:w-[1px] before:h-[calc(18%)] md:before:h-[calc(25%)] before:top-[1.5rem] before:right-[1.5rem]
				after:absolute after:content-[''] after:bg-brand-compliment after:z-[1] 
				after:h-[1px] after:w-[30%] after:top-[1.5rem] after:right-[1.5rem]
				before:transition-all before:duration-700 before:ease-in-out 
				after:transition-all after:duration-700 after:ease-in-out">
				</span>
				<span class="top-0 left-0
				before:absolute before:content-[''] before:bg-brand-compliment before:z-[1] 
				before:w-[1px] before:h-[calc(18%)] md:before:h-[calc(25%)] before:bottom-[1.5rem] before:left-[1.5rem]
				after:absolute after:content-[''] after:bg-brand-compliment after:z-[1] 
				after:h-[1px] after:w-[30%] after:bottom-[1.5rem] after:left-[1.5rem]
				before:transition-all before:duration-700 before:ease-in-out 
				after:transition-all after:duration-700 after:ease-in-out">
				</span>
			</div>
		</a>
	);
}

function SquareImageReview(props: { text: string; src: string; date: string; service: string; hrefGoogleReview: string; }) {
	return (
		<a target="_blank" rel="noopener" href={props.hrefGoogleReview}>
			<div class="max-w-1300px flex items-center justify-center relative gap-4 md:gap-5 md:pl-5 md:pr-10">
				<div class="relative w-auto">
					<div class="w-auto h-auto">
						<img class="w-auto h-auto max-h-150px md:max-h-200px" src={props.src} alt="profile" />
					</div>
				</div>
				<div class="w-1/2 pl-1 md:pl-4 flex flex-col justify-center items-center">
					<div class="flex flex-col justify-center">
						<p class="c-paper mb-2 mt-0 leading-5.6 md:leading-6 italic font-size-15px md:font-size-4.5">"{props.text}"</p>
						<div class="text-left h-1px w-[calc(100%-1em)] bg-brand my-6px md:my-20px"></div>
						<p class="c-paper mt-0 mb-0 font-100 md:font-size-17px font-size-15px">{props.date}</p>
					</div>
				</div>
			</div>
		</a>
	);
}

export default function Page() {
	return (
		<>
			<section class="lg-pt-50 pb-20 pt-30 px-2 md:px-4 w-full">
				<div class="flex justify-center items-center mt-10 bg-paper-inv max-w-320px mx-auto">
					<p class="font-500 c-paper my-2">4,8</p>
					<div class="flex justify-center items-center gap-1 mx-2 mb-1">
						<img class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
						<img class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
						<img class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
						<img class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
						<img class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
					</div>
					<p class="font-500 c-paper my-2">(607 отзива)</p>
				</div>
				<h1 class="uppercase pt-0 mt-10 mb-4 font-size-100px max-w-1200px mx-auto">Виж защо 600+ мъже ни оценяват с 5 звезди</h1>
				<h2 class="font-400 lg:pb-6">Увери се сам</h2>
				{/* <div class="flex flex-col items-center justify-center gap-20 md:gap-20 mx-2 md:mx-20 lg:mx-10 xl:mx-45">
						{reviews.loading && <p>Loading reviews...</p>}
						{reviews.error && <p>Error loading reviews: {reviews.error.message}</p>}
  
						{reviews() && reviews().length > 0 ? (
			  				reviews().map((review: any, index: number) => (
							<StarReview
				  			src={review.src}
							reviewText={review.reviewText}
							name={review.name}
							date={review.date}
							stars={review.stars}
							hrefGoogleReview={review.hrefGoogleReview}
							/>
						))
						) : (
						<p>No reviews available.</p>
						)}
					</div> */}
				<BeforeAfterSlider
					services={[
						{ title: "Мъжко подстригване" },
						{ title: "Бръснене на глава с бръснач" },
						{ title: "Мъжко подстригване" },
						{ title: "Бръснене на глава с бръснач" },
						{ title: "Мъжко подстригване" },
						{ title: "Бръснене на глава с бръснач" },
						{ title: "Мъжко подстригване" },
						{ title: "Бръснене на глава с бръснач" },
					]}>
					<BeforeAfterSliderContainer
						before="/assets/otzivi/men_s-haircut-and-beard-before.webp"
						after="/assets/otzivi/men_s-haircut-and-beard-after.webp"
					/>
					<BeforeAfterSliderContainer
						before="/assets/otzivi/мъжко-подстригване-и-оформяне-на-брада-преди.webp"
						after="/assets/otzivi/мъжко-подстригване-и-оформяне-на-брада-след.webp"
					/>
					<BeforeAfterSliderContainer
						before="/assets/otzivi/мокро-бръснене-преди.webp"
						after="/assets/otzivi/мокро-бръснене-след.webp"
					/>
					<BeforeAfterSliderContainer
						before="/assets/otzivi/мъжко-подстригване-софия-преди.webp"
						after="/assets/otzivi/мъжко-подстригване-софия-след.webp"
					/>
					<BeforeAfterSliderContainer
						before="/assets/otzivi/детско-подстригване-момче-преди (1).webp"
						after="/assets/otzivi/детско-подстригване-момче-след (1).webp"
					/>
					<BeforeAfterSliderContainer
						before="/assets/otzivi/детско-подстригване-преди.webp"
						after="/assets/otzivi/детско-подстригване-след.webp"
					/>
					<BeforeAfterSliderContainer
						before="/assets/otzivi/мъжко-подстригване-преди.webp"
						after="/assets/otzivi/мъжко-подстригване-след.webp"
					/>
					<BeforeAfterSliderContainer
						before="/assets/otzivi/buzz-cut-and-beard-before.webp"
						after="/assets/otzivi/buzz-cut-and-beard-after.webp"
					/>
				</BeforeAfterSlider>
			</section>

			<section class="pb-20" style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Над 25 000 мъже ни се довериха" />
				<ImageWithFrameReviewSlider
					services={[
						{ title: "Мъжко подстригване" },
						{ title: "Мъжко подстригване" },
						{ title: "Мъжко подстригване" },
						{ title: "Мъжко подстригване" },
						{ title: "Мъжко подстригване" },
						{ title: "Мъжко подстригване" },
					]}>

					<ImageWithFrameReview
						hrefGoogleReview="https://maps.app.goo.gl/MFgb7yr9u2GwzyFj6"
						src="https://lh3.googleusercontent.com/geougc-cs/AIHozJKvrDzJpa_uGWCit98-T5hkTC9qffYLdrZDf6Vu8V0whlaPemo5DoifMygjzWjJugF-rId0VgNNnhNJiZtuYRNf5KucaUtmzAWVjfAffVZg-BNW1SLQNkelpG3A6ZQGGFA603id=w300-h450-p"
						service="Мъжко подстригване"
						text={
							<>
								За първи път посещавам The Barber Shop. Крис ме изслуша и след това подстрига с изключително внимание към детайла и моите предпочитания. Атмосферата е много приятна, а за резултатите можете да прецените сами.<br />
								С ръка на сърцето мога да кажа, че това е най-добрата бръснарница в София от тези, които съм посетил.
							</>
						}
						date="Октомври 2024"
					/>
					<ImageWithFrameReview
						hrefGoogleReview="https://maps.app.goo.gl/E3BJm1q3Fj3j51Bh7"
						style="filter: brightness(1.1); filter: saturate(1.1);"
						src="/assets/otzivi/mazhko-podstrigvane-otzivi.png"
						service="Подстригване и оформяне на брада"
						text="Чудесна обстановка. Млади момчета със завидни умения. Горещо препоръчвам !"
						date="Септември 2022"
					/>
					<ImageWithFrameReview
						hrefGoogleReview="https://maps.app.goo.gl/2qfKt276thdqUeKV9"
						style="filter: brightness(1.2); filter: saturate(1.3);"
						src="/assets/otzivi/podstrigvane-barbershop-otzivi.jpg"
						service="Подстригване и оформяне на брада"
						text={
							<>
								The Barber Shop е страхотно място! Най-обикновени неща като оформяне на брада, при тях е цяло изживяване. Кристиян Митов е ТОП бръснар! Евала момчета. Keep it going!<br />
								Силно препоръчвам бръснарницата!!!
							</>
						}
						date="Април 2020"
					/>
					<ImageWithFrameReview
						hrefGoogleReview="https://maps.app.goo.gl/NjWquoiBcNHEHHzC9"
						style="filter: brightness(1.1); filter: saturate(1.1);"
						src="/assets/otzivi/detska-pricheska-otzivi.jpg"
						service="Детско подстригване"
						text="супер за мъжко подстригване! любими!"
						date="Март 2020"
					/>
					<ImageWithFrameReview
						hrefGoogleReview="https://maps.app.goo.gl/te9fL5NdeUBiGoia7"
						style="filter: saturate(1.3);"
						src="/assets/otzivi/barbershop-mazhko-podstrigvane-otzivi.png"
						service="Мъжко подстригване"
						text="Страхотна бръснарница. След няколко погрешни опита намерих точното място. Вниманието към клиента е на високо ниво. От вратата те посрещат с нещо за пиене кафе, вода, безалкохолно или Bullet бърбън. Вайба е чудесен, музиката не е прекалено силна или натрапваща. Всичко е уникално. Отидохме с няколко момчета и всички останахме очаровани. Крис беше нашия бръснар и силно го препоръчвам в момента и на други приятели."
						date="Август 2024"
					/>
					<ImageWithFrameReview
						hrefGoogleReview="https://maps.app.goo.gl/vLrS9ffAGBgeZ6xf9"
						style="filter: saturate(1.3);"
						src="/assets/otzivi/barbershop-podstrigvane-otzivi.jpg"
						service="Мъжко подстригване"
						text={
							<>
								Put the “bar” in barber. 🥃<br />
								Cool place and great work.
							</>
						}
						date="Юни 2024"
					/>
				</ImageWithFrameReviewSlider>
			</section>

			<section class="pb-20">
				<H2WithImage title="Истинският стил не остарява" />
				<QuotationReviewsSlider
					services={[
						{ title: "Ivo Stoilov" },
						{ title: "Atanas Todorov" },
						{ title: "Boyan Kushev" },
						{ title: "Владислав Кръстев" },
						{ title: "Emil Petrov" },
						{ title: "kwphoto (kaiwphoto)" },
						{ title: "Сергей Тодоров" },
						{ title: "Stanislav Radnev" },
						{ title: "Milen Stoychev" },
						{ title: "Asen Milushev" },
						{ title: "Peter Porcsin" },
					]}>
					<QuotationReview
						hrefGoogleReview="https://maps.app.goo.gl/KBUVDZYnpP5LVvvV9"
						profile="https://lh3.googleusercontent.com/a/ACg8ocLWnMywRvuwLG7VQ139JpqiZ6wPoPXsTsqwFfPSiCwgRtJaUQ=w60-h60-p-rp-mo-ba4-br100"
						name="Ivo Stoilov"
						text="Професионално изпълнена услуга без нищо излишно. Горещо препоръчвам на онези, които се колебаят."
					/>
					<QuotationReview
						hrefGoogleReview="https://maps.app.goo.gl/XZXwyFAayeZytLyw7"
						profile="https://lh3.googleusercontent.com/a/ACg8ocJ_KKHOzZE4Ftt0W8DLSyBKEax5yf70TschrH7TeFjbB9L0Lewf=w60-h60-p-rp-mo-ba4-br100"
						name="Atanas Todorov"
						text={
							<>
								Страхотен и приветлив салон.<br />
								Пълен с професионалисти!<br />
								Винаги си тръгвам доволен и определено препоръчвам Крис!
							</>
						}
					/>
					<QuotationReview
						hrefGoogleReview="https://maps.app.goo.gl/94QfkBnJtyiCdZyy7"
						profile="https://lh3.googleusercontent.com/a-/ALV-UjUhQYeQnFgrsAMbQarajSe_IJCdyJMpaetviwsOTST7tBzT5YbHEA=w60-h60-p-rp-mo-ba2-br100"
						name="Boyan Kushev"
						text="Excellent service, very nice and clean place! Definitely recommended 🤟🤟🤟"
					/>
					<QuotationReview
						hrefGoogleReview="https://maps.app.goo.gl/bjzxPpPaPNJREgWX7"
						profile="https://lh3.googleusercontent.com/a-/ALV-UjXHkShzrEvrn1Msl-90BRv6kr0QGUE9lZfnJMVgR3rwUpDH8x0F=w60-h60-p-rp-mo-br100"
						name="Владислав Кръстев"
						text="Жестоко обслужване, останах впечатлен от колектива🔥"
					/>
					<QuotationReview
						hrefGoogleReview="https://maps.app.goo.gl/BspTBGPhpDrx6dW88"
						profile="https://lh3.googleusercontent.com/a/ACg8ocJ1zjYvAOS79Z60hlPT9tWl46x1tM6IaSF4QHT__nqvhCODnw=w60-h60-p-rp-mo-br100"
						name="Emil Petrov"
						text="Топ обслужване! Топ чистота! Топ професионалисти! Препоръчвам ГОРЕЩО!!"
					/>
					<QuotationReview
						hrefGoogleReview="https://maps.app.goo.gl/qUyHy2FyXvYmSTbD8"
						profile="https://lh3.googleusercontent.com/a-/ALV-UjX3u2X5QdDO4v7TUP7exT8ozRWLW4yt1YFPMkjypWtHr90dyiGz9w=w60-h60-p-rp-mo-ba3-br100"
						name="kwphoto (kaiwphoto)"
						text="Great friendly service and excellent haircut, highly recommend!"
					/>
					<QuotationReview
						hrefGoogleReview="https://maps.app.goo.gl/Y7ajmTmu2VnNR8626"
						profile="https://lh3.googleusercontent.com/a-/ALV-UjVBq5stDsmvj2NzlYeLZPQ8_CZXIeShUqBOMFxjtWsxfUS_QSbr=w60-h60-p-rp-mo-ba4-br100"
						name="Сергей Тодоров"
						text="С Крис прическата винаги е топ!"
					/>
					<QuotationReview
						hrefGoogleReview="https://maps.app.goo.gl/Xb4ZVyjj6gBee3yk6"
						profile="https://lh3.googleusercontent.com/a/ACg8ocLDzToQ_w571qNxKr2Bcc3SV5kCpqLqB43eGDZmyn0bUhCShQ=w60-h60-p-rp-mo-br100"
						name="Stanislav Radnev"
						text={
							<>
								I have been going there for the last 7 years and the service is impeccable.<br />
								Would recommend to everyone.
							</>
						}
					/>
					<QuotationReview
						hrefGoogleReview="https://maps.app.goo.gl/gBoXpqFRDBN7WHnh8"
						profile="https://lh3.googleusercontent.com/a/ACg8ocKv-zkwq_FEtAeVKkzw1R6PofmnSjtBbIb0fqPiHTkFZNOOHA=w60-h60-p-rp-mo-ba4-br100"
						name="Milen Stoychev"
						text="Работят добре и се грижат клиента да се чувства удобно"
					/>
					<QuotationReview
						hrefGoogleReview="https://maps.app.goo.gl/U8reoTq5zDHnu4fw9"
						profile="https://lh3.googleusercontent.com/a/ACg8ocL-dqaTsWyJG5MpcbqdPJL69PxxtxOnezmEvyrGs56AwUHPbQ=w60-h60-p-rp-mo-ba2-br100"
						name="Asen Milushev"
						text="Най-доброто подстригване, съчетано с перфектен experience и приятни разговори. 10/10"
					/>
					<QuotationReview
						hrefGoogleReview="https://maps.app.goo.gl/JMqfb2ZeC8QM7Y3b9"
						profile="https://lh3.googleusercontent.com/a-/ALV-UjX-kRra9VJsAQ--TuBQuRTgk5QVlb28ko4j0PxNESFoPleqeleJ=w60-h60-p-rp-mo-ba3-br100"
						name="Peter Porcsin"
						text={
							<>
								I am very satisfied.<br />
								I can only recommend it, after trimming my beard I got two new girlfriends. ;)
							</>
						}
					/>
				</QuotationReviewsSlider>
			</section>

			{/* <section class="pb-20" style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Най-добрите знаят къде да отидат" />
				<div class="flex flex-col justify-center items-center gap-15 px-4 md:px-6">
					<SquareImageReview
						hrefGoogleReview=""
						src="/assets/example-photo.jpg"
						service="Top Service"
						text="Като бивш и настоящ гангстер, за мен визията е изкл. важна за да мога да съм представителен пред враговете ми."
						date="Ивайло Иванов"
					/>
					<SquareImageReview
						hrefGoogleReview=""
						src="/assets/example-photo.jpg"
						service="Top Service"
						text="Като бивш и настоящ гангстер, за мен визията е изкл. важна за да мога да съм представителен пред враговете ми."
						date="Ивайло Иванов"
					/>
				</div>
			</section> */}

			<section class="pb-20" style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Открий своя стил" />
				<div class="flex flex-wrap flex-justify-center lg-gap-15 gap-15 px-5">
					<ServiceContaner
						img="/assets/home/stylish-buzz-cuts.webp"
						alt="stylish buzz cuts"
						title="Мъжко подстригване"
						href="/uslugi/mazhko-podstrigvane"
					/>
					<ServiceContaner
						img="/assets/home/оформяне-на-брада.webp"
						alt="оформяне на брада"
						title="Оформяне на брада"
						href="/uslugi/oformiane-na-brada"
					/>
					<ServiceContaner
						img="/assets/home/buzz-cut-and-beard.webp"
						alt="buzz cut and beard"
						title="Подстригване и оформяне на брада"
						href="/uslugi/mazhko-podstrigvane-i-oformiane-na-brada"
					/>
					<ServiceContaner
						img="/assets/home/мокро-бръснене.webp"
						alt="мокро бръснене"
						title="Класическо мокро бръснене"
						href="/uslugi/klasichesko-mokro-brasnene"
					/>
					<ServiceContaner
						img="/assets/tonirane-na-kosa/барбър-шоп-тониране-на-сиви-коси.webp"
						alt="тониране на сиви коси"
						title="Тониране на сиви коси"
						href="/uslugi/klasichesko-mokro-brasnene"
					/>
					<ServiceContaner
						img="/assets/brasnene-na-glava-s-brasnach/бръснене-на-глава-с-бръснач-в-бръснарница.webp"
						alt="бръснене на глава с бръснач"
						title="Бръснене на глава с бръснач"
						href="/uslugi/brasnene-na-glava-s-brasnach"
					/>
					<ServiceContaner
						img="/assets/home/детско-подстригване.webp"
						alt="детско подстригване"
						title="Детско подстригване"
						href="/uslugi/detsko-podstrigvane-momche"
					/>
					<ServiceContaner
						img="/assets/bashta-i-sin/подстригване-на-баща-и-син.webp"
						alt="подстригване на баща и син"
						title="Подстригване на баща и син"
						href="/uslugi/podstrigvane-na-bashta-i-sin"
					/>
				</div>
			</section>

			{/* <section class="pb-14 md:pb-18" style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Виж защо 600+ мъже ни оценяват с 5 звезди" />
				<div class="max-w-900px m-auto px-5">
					<FacebookLikeGallery imgs={[
						{
							src: "/assets/example-photo.jpg",
							alt: "1-dry-organic-carpet-cleaning",
							name: "Atanas Todorov",
							reviewtext: "Като бивш и настоящ гангстер, за мен визията е изкл. важна за да мога да съм представителен пред враговете ми.Професионалистите от Барбършоп винаги знаят какъв е най-добрия стил за мен."
						},
						{
							src: "/assets/example-photo.jpg",
							alt: "1-dry-organic-carpet-cleaning",
							name: "Atanas Todorov",
							reviewtext: "важна за да мога да съм представителен пред враговете ми.Професионалистите от Барбършоп винаги знаят какъв е най-добрия стил за мен."
						},
						{
							src: "/assets/example-photo.jpg",
							alt: "1-dry-organic-carpet-cleaning",
							name: "Atanas Todorov",
							reviewtext: "Като бивш и настоящ гангстер, за мен визията е изкл. важна за да мога да съм представителен пред враговете ми.Професионалистите от Барбършоп винаги знаят какъв е най-добрия стил за мен."
						},
					]} />
				</div>
			</section> */}

			{/* <section class="pb-20">
				<H2WithImage title="Какво казват клиентите за нас" />
				<div class="bg-paper w-63 m-auto p-2">
					<div class="b-solid b-4 b-brand">
						<p class="text-center font-700 font-size-14 mt-8 mb-6.5"
							style="font-family:'Oswald', sans-serif !important;">
							4,8
						</p>
						<div class="flex justify-center items-center gap-1 mx-2 mb-6.5">
							<img class="w-8 h-8" src="/assets/output-onlinepngtools.png" />
							<img class="w-8 h-8" src="/assets/output-onlinepngtools.png" />
							<img class="w-8 h-8" src="/assets/output-onlinepngtools.png" />
							<img class="w-8 h-8" src="/assets/output-onlinepngtools.png" />
							<img class="w-8 h-8" src="/assets/output-onlinepngtools.png" />
						</div>
					</div>
				</div>
				<div>
					<p class="text-center font-700 font-size-8 mt-4"
						style="font-family:'Oswald', sans-serif !important;">
						607 отзива
					</p>
				</div>
			</section> */}
		</>
	);
}

