import "solid-slider/slider.css";
import { DotsUnderSlider3, GoogleStarReview, KidSlider, PuzzleIconReview2, ReviewersImageReview, ReviewSlider, StarReview, useMediaQuery } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H3Blue, H3Pink } from '../../components/H2WithImage';
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { VideoHero } from "../../components/HeroVideo";
import { createSignal, JSX } from 'solid-js';
import { VideoPlayer } from "../../components/VideoPlayer";
import { Slider, SliderProvider } from "solid-slider";
import { GradientFooter } from "../../components/GradientFooter";

export const StaffSlider = (props: {
	reviews: { name: string }[];
	children: JSX.Element | JSX.Element[];
	variant?: "dots1" | "dots2" | "dots3";
	class?: string | JSX.CSSProperties;
	onReady?: (instance: any) => void;
}) => {
	const { reviews, children } = props;
	const isDesktop = useMediaQuery("(min-width: 768px)");

	let sliderInstance: any;

	const setSlider = (slider: any) => {
		sliderInstance = slider;
		props.onReady?.(slider);
	};

	return (
		<SliderProvider>
			{isDesktop() ? (
				<div
					class={`max-w-700px mx-auto position-relative hidden md:block my-0 ${props.class ?? ""}`}
				>
					<Slider
						options={{
							loop: true,
							slides: { perView: 1, spacing: 15 },
							created: setSlider,
						}}
					>
						{children}
					</Slider>
				</div>
			) : (
				<div class="m-auto position-relative md:hidden block mb-5">
					<Slider
						options={{
							loop: true,
							slides: { perView: 1, spacing: 10 },
							created: setSlider,
						}}
					>
						{children}
					</Slider>
				</div>
			)}
			<DotsUnderSlider3 reviews={reviews} />
		</SliderProvider>
	);
};


const [isPlaying, setIsPlaying] = createSignal(false);

export default function Page() {
	let mySlider: any;

	return (
		<>
			<div class="relative w-full">
				<VideoHero
					youtubeId="R1kPm_q7vCc"
					gifPreview="/assets/home/2025-07-08 10-35-35.mp4"
					gifPreviewMobile=""
					isPlaying={isPlaying()}
					onPlay={() => setIsPlaying(true)}
				/>

				<div class="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-end pb-18 md:pb-10 text-center px-4 text-white">
					<AnimatedComponent>
						<div>
							<h1
								class={`mb-4 md:mb-7 transition-colors duration-500 ${isPlaying()
									? 'text-black md:text-white md:hidden'
									: 'text-white md:text-white md:block'
									}`}>
								Присъединете се към екип, който вярва в потенциала на всяко дете
							</h1>
						</div>
					</AnimatedComponent>

					<AnimatedComponent
						class={`important-delay-600 mt-8 md:mt-10 relative text-center ${isPlaying() ? 'md:pb-30' : 'md:pb-0'
							}`}
					>
						<div class="flex md:flex-row flex-col justify-center items-center gap-3 pointer-events-auto">
							<PuzzleButton />
						</div>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="pink" />

			<section class="gap-12 pb-8 md:pb-20 xl:px-30 pt-20">
				<H3Blue variant="h2" title="Смислена работа с реално въздействие върху децата" />
				<div class="md:pb-0 pb-10">
					<AnimatedComponent>
						<div class="block md:hidden">
							<ReviewSlider
								variant="dots2"
								reviews={[
									{ name: "1" },
									{ name: "2" },
									{ name: "3" },
								]}>
								<PuzzleIconReview2
									exp="Б.С., 3г. и 6 месеца"
									class="bg-brand"
									title="Преди терапията"
									secondtitle="Първи признаци"
									img="/assets/Mending-the-Cosmos.webp"
									alt="Puzzle"
									puzzleclass="text-blue-500"
									div={[
										{ puzzleclass: "c-brand-purple", text: "Смислена работа с реално въздействие върху децата" },
										{ puzzleclass: "c-brand-purple", text: "Смислена работа с реално въздействие върху децата" },
										{ puzzleclass: "c-brand-purple", text: "Смислена работа с реално въздействие върху децата" }
									]}
								/>
								<PuzzleIconReview2
									exp="Б.С., 3г. и 6 месеца"
									class="bg-brand-purple"
									title="Преди терапията"
									secondtitle="Първи признаци"
									img="/assets/Mending-the-Cosmos.webp"
									alt="Puzzle"
									puzzleclass="text-blue-500"
									div={[
										{ puzzleclass: "c-brand", text: "Смислена работа с реално въздействие върху децата" },
										{ puzzleclass: "c-brand", text: "Смислена работа с реално въздействие върху децата" },
										{ puzzleclass: "c-brand", text: "Смислена работа с реално въздействие върху децата" }
									]}
								/>
								<PuzzleIconReview2
									exp="Б.С., 3г. и 6 месеца"
									class="bg-brand-blue"
									title="Преди терапията"
									secondtitle="Първи признаци"
									img="/assets/Mending-the-Cosmos.webp"
									alt="Puzzle"
									puzzleclass="text-blue-500"
									div={[
										{ puzzleclass: "c-brand-orange", text: "Смислена работа с реално въздействие върху децата" },
										{ puzzleclass: "c-brand-orange", text: "Смислена работа с реално въздействие върху децата" },
										{ puzzleclass: "c-brand-orange", text: "Смислена работа с реално въздействие върху децата" }
									]}
								/>
							</ReviewSlider>
						</div>
						<div class="hidden md:flex gap-3 xl:gap-5 max-w-1400px mx-auto">
							<PuzzleIconReview2
								exp="Б.С., 3г. и 6 месеца"
								class="bg-brand"
								title="Преди терапията"
								secondtitle="Първи признаци"
								img="/assets/Mending-the-Cosmos.webp"
								alt="Puzzle"
								puzzleclass="text-blue-500"
								div={[
									{ puzzleclass: "c-brand-purple", text: "Смислена работа с реално въздействие върху децата" },
									{ puzzleclass: "c-brand-purple", text: "Смислена работа с реално въздействие върху децата" },
									{ puzzleclass: "c-brand-purple", text: "Смислена работа с реално въздействие върху децата" }
								]}
							/>
							<PuzzleIconReview2
								exp="Б.С., 3г. и 6 месеца"
								class="bg-brand-purple"
								title="Преди терапията"
								secondtitle="Първи признаци"
								img="/assets/Mending-the-Cosmos.webp"
								alt="Puzzle"
								puzzleclass="text-blue-500"
								div={[
									{ puzzleclass: "c-brand", text: "Смислена работа с реално въздействие върху децата" },
									{ puzzleclass: "c-brand", text: "Смислена работа с реално въздействие върху децата" },
									{ puzzleclass: "c-brand", text: "Смислена работа с реално въздействие върху децата" }
								]}
							/>
							<PuzzleIconReview2
								exp="Б.С., 3г. и 6 месеца"
								class="bg-brand-blue"
								title="Преди терапията"
								secondtitle="Първи признаци"
								img="/assets/Mending-the-Cosmos.webp"
								alt="Puzzle"
								puzzleclass="text-blue-500"
								div={[
									{ puzzleclass: "c-brand-orange", text: "Смислена работа с реално въздействие върху децата" },
									{ puzzleclass: "c-brand-orange", text: "Смислена работа с реално въздействие върху децата" },
									{ puzzleclass: "c-brand-orange", text: "Смислена работа с реално въздействие върху децата" }
								]}
							/>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<AnimatedComponent class="xl:px-30 mx-20px">
				<H3Pink title="Първите сигнали на аутизъм, които не бива да игнорирате" />
			</AnimatedComponent>

			<section class="mb-70px max-w-1500px px-20px mx-auto">
				<div class="xl:px-30">
					<div class="">
						<AnimatedComponent>
							<ReviewSlider
								variant="dots2"
								reviews={[
									{ name: "Karl Stirner" },
									{ name: "Ann Panillo" },
									{ name: "Peter Hughes" },
									{ name: "Peter Hughes" },
								]}>
								<StarReview
									reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
									name="Iliyan Asenov"
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
								/>
								<StarReview
									reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
									name="Iliyan Asenov"
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
								/>
								<StarReview
									reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
									name="Iliyan Asenov"
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
								/>
								<StarReview
									reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
									name="Iliyan Asenov"
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
								/>
							</ReviewSlider>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px md:mb--55px">
				<H3Blue title="Първите сигнали на аутизъм, които не бива да игнорирате" />
			</AnimatedComponent>

			{/* <div>
				<AnimatedComponent class="mx-20px md:mx-0 mb-20">
					<VideoPlayer
						youtubeId="PUYw2e-X-Vw"
						thumbnail="/assets/Fulfilling-Vows.webp"
					/>
				</AnimatedComponent>
			</div> */}

			<DoodleDecor variant="blue" />

			<section class="gap-12 pb-8 md:pb-20 xl:px-30">
				<H3Pink variant="h2" title="Смислена работа с реално въздействие върху децата" />
				<div class="md:pb-0 pb-10">
					<AnimatedComponent>
						<div class="block md:hidden">
							<ReviewSlider
								variant="dots2"
								reviews={[
									{ name: "1" },
									{ name: "2" },
									{ name: "3" },
								]}>
								<PuzzleIconReview2
									exp="Б.С., 3г. и 6 месеца"
									class="bg-brand"
									title="Преди терапията"
									secondtitle="Първи признаци"
									img="/assets/Mending-the-Cosmos.webp"
									alt="Puzzle"
									puzzleclass="text-blue-500"
									div={[
										{ puzzleclass: "c-brand-purple", text: "Смислена работа с реално въздействие върху децата" },
										{ puzzleclass: "c-brand-purple", text: "Смислена работа с реално въздействие върху децата" },
										{ puzzleclass: "c-brand-purple", text: "Смислена работа с реално въздействие върху децата" }
									]}
								/>
								<PuzzleIconReview2
									exp="Б.С., 3г. и 6 месеца"
									class="bg-brand-purple"
									title="Преди терапията"
									secondtitle="Първи признаци"
									img="/assets/Mending-the-Cosmos.webp"
									alt="Puzzle"
									puzzleclass="text-blue-500"
									div={[
										{ puzzleclass: "c-brand", text: "First Puzzle" },
										{ puzzleclass: "c-brand", text: "Second Puzzle" },
										{ puzzleclass: "c-brand", text: "Third Puzzle" }
									]}
								/>
								<PuzzleIconReview2
									exp="Б.С., 3г. и 6 месеца"
									class="bg-brand-blue"
									title="Преди терапията"
									secondtitle="Първи признаци"
									img="/assets/Mending-the-Cosmos.webp"
									alt="Puzzle"
									puzzleclass="text-blue-500"
									div={[
										{ puzzleclass: "c-brand-orange", text: "First Puzzle" },
										{ puzzleclass: "c-brand-orange", text: "Second Puzzle" },
										{ puzzleclass: "c-brand-orange", text: "Third Puzzle" }
									]}
								/>
							</ReviewSlider>
						</div>
						<div class="hidden md:flex gap-3 xl:gap-5 max-w-1400px mx-auto">
							<PuzzleIconReview2
								exp="Б.С., 3г. и 6 месеца"
								class="bg-brand"
								title="Преди терапията"
								secondtitle="Първи признаци"
								img="/assets/Mending-the-Cosmos.webp"
								alt="Puzzle"
								puzzleclass="text-blue-500"
								div={[
									{ puzzleclass: "c-brand-purple", text: "Смислена работа с реално въздействие върху децата" },
									{ puzzleclass: "c-brand-purple", text: "Смислена работа с реално въздействие върху децата" },
									{ puzzleclass: "c-brand-purple", text: "Смислена работа с реално въздействие върху децата" }
								]}
							/>
							<PuzzleIconReview2
								exp="Б.С., 3г. и 6 месеца"
								class="bg-brand-purple"
								title="Преди терапията"
								secondtitle="Първи признаци"
								img="/assets/Mending-the-Cosmos.webp"
								alt="Puzzle"
								puzzleclass="text-blue-500"
								div={[
									{ puzzleclass: "c-brand", text: "First Puzzle" },
									{ puzzleclass: "c-brand", text: "Second Puzzle" },
									{ puzzleclass: "c-brand", text: "Third Puzzle" }
								]}
							/>
							<PuzzleIconReview2
								exp="Б.С., 3г. и 6 месеца"
								class="bg-brand-blue"
								title="Преди терапията"
								secondtitle="Първи признаци"
								img="/assets/Mending-the-Cosmos.webp"
								alt="Puzzle"
								puzzleclass="text-blue-500"
								div={[
									{ puzzleclass: "c-brand-orange", text: "First Puzzle" },
									{ puzzleclass: "c-brand-orange", text: "Second Puzzle" },
									{ puzzleclass: "c-brand-orange", text: "Third Puzzle" }
								]}
							/>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<section class="gap-12 pt-10 xl:px-30 relative">
				<BackgroundIcons />
				<div class="relative">
					<AnimatedComponent>
						<h3 class="c-brand">
							Първите сигнали на аутизъм, които не бива да игнорирате
						</h3>
					</AnimatedComponent>
					<AnimatedComponent>
						<ReviewSlider
							variant="dots3"
							reviews={[
								{ name: "1" },
								{ name: "2" },
								{ name: "3" },
								{ name: "4" },
							]}>
							<ReviewersImageReview
								style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8)),url(/assets/барбер-шоп.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
								reviewText="“В Sense Center най-много ми харесва възможността за професионално и личностно израстване, богатият опит в следствие от разнообразните случаи. Личната мотивираност за развитие и желанието да помагам на децата.”"
								name="Сали Младенова"
								date="Рехабилитатор-ерготерапевт"
							/>
							<ReviewersImageReview
								style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8)),url(/assets/барбер-шоп.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
								reviewText="“Работя в екип от хора, които са не само позитивни, но и дълбоко отговорни към това, което правят. Сплотеността, професионализмът и стремежът на всеки един да твори добро за децата създават среда, в която се чувствам вдъхновен и подкрепен.”"
								name="Александър Ганев"
								date="Клиничен психолог"
							/>
							<ReviewersImageReview
								style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8)),url(/assets/барбер-шоп.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
								reviewText="“Харесва ми това, че се работи с различни нарушения и мога да трупам опит и да се уча на различен подход към всяко дете.”"
								name="Искра Ангелова"
								date="Детски логопед"
							/>
							<ReviewersImageReview
								style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8)),url(/assets/барбер-шоп.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
								reviewText="“Харесва ми как всички се подкрепяме взаимно и колко естествено се допълваме. Вдъхновяващо е, когато виждаш как всеки дава най-доброто от себе си в името на общата ни кауза.”"
								name="Яница Дочева"
								date="Психолог"
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink" />
			<section class="gap-12 pt-10 xl:px-30 relative">
				<BackgroundIcons />
				<div class="relative">
					<AnimatedComponent>
						<H3Blue variant="h2" title="Смислена работа с реално въздействие върху децата" />
						<p class="text-center">Вижте случая на:</p>
						<div class="mx-auto flex md:flex-row flex-col justify-center items-center gap-2 mb-10 md:mb-15 md:mt-5">
							<div class="flex gap-2">
								<div onClick={() => mySlider?.moveToIdx(0)} class="cursor-pointer bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper b-rd-12px px-7 py-3">
									Светлин
								</div>
								<div onClick={() => mySlider?.moveToIdx(1)} class="cursor-pointer bg-brand-orange hover:bg-brand-orange-hover transition-all c-paper b-rd-12px px-7 py-3">
									Емма
								</div>
							</div>
							<div class="flex gap-2">
								<div onClick={() => mySlider?.moveToIdx(2)} class="cursor-pointer block md:hidden bg-brand-orange hover:bg-brand-orange-hover transition-all c-paper b-rd-12px px-7 py-3">
									Никол
								</div>
								<div onClick={() => mySlider?.moveToIdx(3)} class="cursor-pointer block md:hidden bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper b-rd-12px px-7 py-3">
									Даниел
								</div>
								<div onClick={() => mySlider?.moveToIdx(2)} class="cursor-pointer hidden md:block bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper b-rd-12px px-7 py-3">
									Даниел
								</div>
								<div onClick={() => mySlider?.moveToIdx(3)} class="cursor-pointer hidden md:block bg-brand-orange hover:bg-brand-orange-hover transition-all c-paper b-rd-12px px-7 py-3">
									Никол
								</div>
							</div>
						</div>
					</AnimatedComponent>
					<AnimatedComponent>
						<StaffSlider
							class="important-max-w-1500px mx-auto"
							variant="dots3"
							reviews={[
								{ name: "1" },
								{ name: "2" },
								{ name: "3" },
								{ name: "4" },
							]}
							onReady={(instance) => (mySlider = instance)}
						>
							<KidSlider
								class="bg-brand-blue"
								title="Преди терапията"
								secondtitle="Преди терапията"
								paragraphtitle="Преди терапията"
								img="/assets/home/вход-към-sense-center.webp"
								alt="Puzzle"
								div={[
									{ puzzleclass: "c-brand-orange", text: "Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси." },
									{ puzzleclass: "c-brand-orange", text: "Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси." },
									{ puzzleclass: "c-brand-orange", text: "Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси." }
								]}
							/>
							<KidSlider
								class="bg-brand-blue"
								title="Преди терапията"
								secondtitle="Преди терапията"
								paragraphtitle="Преди терапията"
								img="/assets/home/вход-към-sense-center.webp"
								alt="Puzzle"
								div={[
									{ puzzleclass: "c-brand-orange", text: "Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси." },
									{ puzzleclass: "c-brand-orange", text: "Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси." },
									{ puzzleclass: "c-brand-orange", text: "Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси." }
								]}
							/>
							<KidSlider
								class="bg-brand-blue"
								title="Преди терапията"
								secondtitle="Преди терапията"
								paragraphtitle="Преди терапията"
								img="/assets/home/вход-към-sense-center.webp"
								alt="Puzzle"
								div={[
									{ puzzleclass: "c-brand-orange", text: "Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси." },
									{ puzzleclass: "c-brand-orange", text: "Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси." },
									{ puzzleclass: "c-brand-orange", text: "Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси." }
								]}
							/>
							<KidSlider
								class="bg-brand-blue"
								title="Преди терапията"
								secondtitle="Преди терапията"
								paragraphtitle="Преди терапията"
								img="/assets/home/вход-към-sense-center.webp"
								alt="Puzzle"
								div={[
									{ puzzleclass: "c-brand-orange", text: "Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси." },
									{ puzzleclass: "c-brand-orange", text: "Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси." },
									{ puzzleclass: "c-brand-orange", text: "Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси. Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси." }
								]}
							/>
						</StaffSlider>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<div class="mt-20 gap-12 pb-8 md:pb-20 pt-50px px-30px xl:px-30 md:mb-0 mb-10 bg-brand-purple -mx-20px">
				<div class="px-20px md:px-0px md:mx-20px md:mx-0px">
					<AnimatedComponent>
						<ReviewSlider
							variant="dots2"
							reviews={[
								{ name: "Karl Stirner" },
								{ name: "Ann Panillo" },
								{ name: "Peter Hughes" },
								{ name: "Peter Hughes" },
							]}>
							<GoogleStarReview
								img="/assets/GoogleLogoPNGImage.webp"
								reviewText={
									<>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									</>
								}
								name="Georgi Pleshkov"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
							/>
							<GoogleStarReview
								img="/assets/GoogleLogoPNGImage.webp"
								reviewText={
									<>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									</>
								}
								name="Georgi Pleshkov"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
							/>
							<GoogleStarReview
								img="/assets/GoogleLogoPNGImage.webp"
								reviewText={
									<>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									</>
								}
								name="Georgi Pleshkov"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
							/>
							<GoogleStarReview
								img="/assets/GoogleLogoPNGImage.webp"
								reviewText={
									<>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									</>
								}
								name="Georgi Pleshkov"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px md:mb--55px">
				<H3Pink title="Първите сигнали на аутизъм, които не бива да игнорирате" />
			</AnimatedComponent>

			{/* <div>
				<AnimatedComponent class="mx-20px md:mx-0 mb-40 md:mb-50">
					<VideoPlayer
						youtubeId="PUYw2e-X-Vw"
						thumbnail="/assets/Fulfilling-Vows.webp"
					/>
				</AnimatedComponent>
			</div> */}

			<section class="relative md:pb-30 xl:px-30 mx-20px">
				<H3Blue title="Първична оценка при съмнение за аутизъм" />
				<div class="flex flex-col justify-center items-center max-w-1500px mx-auto px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:py-10 py-5 bg-gradient-to-t from-brand-purple to-brand-blue b-rd-12px flex flex-col">
						<p class="c-paper mb-1">
							В Sense Center предлагаме <strong class="font-900">първична оценка (тест за аутизъм)</strong> за деца със съмнение за аутизъм.
						</p>
						<p class="c-paper">
							По време на консултацията се извършва обследване на поведението и състоянието на детето.
						</p>
						<img src="/assets/Fulfilling-Vows.webp" alt="" class="my-5 w-full h-auto object-cover rounded shadow" />
						<p class="c-paper mb-1">
							Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси.
						</p>
						<p class="c-paper">
							Едновременно с това специалистите интервюират родителите за техните наблюдения и за училищното представяне на детето.
						</p>
						<img src="/assets/Fulfilling-Vows.webp" alt="" class="mt-5 w-full h-auto object-cover rounded shadow" />
						<p class="c-paper italic font-300 mt-1 op-90%" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
							Препоръчително е да донесете всички налични медицински документи, които могат да бъдат от полза за изясняване на състоянието.
						</p>
						<div class="pt-10 flex md:flex-row flex-col justify-center items-center gap-2">
							<PuzzleButton />
							<PuzzleButton2
								style2="padding-left:0px !important; font-weight:600; font-size:16px !important;"
								img="/assets/sense-orange-puzzle-piece.svg"
								href=""
								text="+ 359 879 800 013"
							/>
						</div>
					</AnimatedComponent>
				</div>
			</section>
			<GradientFooter />
		</>
	);
}
