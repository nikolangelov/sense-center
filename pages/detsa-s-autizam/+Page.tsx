import "solid-slider/slider.css";
import { AuthorContainer, GoogleStarReview, PuzzleIconReview, ReviewersImageReview, ReviewSlider, ReviewSlider2, StarReview } from '../../components/ReviewSlider';
import { VideoPlayer } from '../../components/VideoPlayer';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink } from '../../components/H2WithImage';
import { ServiceContaner } from '../../components/ServiceContainer';
import { ContainerBox, ContainerSlider } from "../../components/ContainerSlider";
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
import { GallerySlider2 } from "../../components/GallerySlider";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { WorkProcess } from "../../components/WorkProcess";
import { createSignal } from "solid-js";
import { VideoHero } from "../../components/HeroVideo";

const [isPlayingHero, setIsPlayingHero] = createSignal(false);
const [isPlayingPlayer, setIsPlayingPlayer] = createSignal(false);

export default function Page() {
	return (
		<>
			<div class="relative w-full">
				<VideoHero
					videoSrc="/assets/detsa-s-autizam/Sense-Center-Autism-Desktop-Hero.mp4"
					gifPreview="/assets/detsa-s-autizam/Sense-Center-Autism-Desktop.mp4"
					gifPreviewMobile="/assets/detsa-s-autizam/Sense-Center-Autism-Mobile.mp4"
					isPlaying={isPlayingHero()}
					onPlay={() => setIsPlayingHero(true)}
				/>

				<div class="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-end pb-18 md:pb-10 text-center px-4 text-white">
					<div class={`absolute ${isPlayingHero() ? 'top-32% sm:top-95% lg:top-100% mt-30' : 'top-60% md:top-60% mt-0'}`}>
						<div>
							<h1
								class={`mb-4 md:mb-7 transition-colors duration-500 ${isPlayingHero()
									? 'inline-block pb-[0.2em] bg-gradient-to-r from-[#E11172] to-[#FFAE01] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
									: 'text-white'
									}`}
							>
								Деца с аутизъм
							</h1>
						</div>

						<div
							class={`important-delay-300 font-400 text-center mb-0 important-font-size-4.5 important-lg-font-size-5.5 tracking-0.15 sm-px-0 px-5 important-md:leading-7 important-leading-6 transition-colors duration-500 important-font-[MYRIADPRO-Light] ${isPlayingHero()
								? 'text-brand'
								: 'text-white'
								}`}
						>
							Какво да очакваме и как<br />да подкрепим детето
						</div>

						<div
							class={`important-delay-600 mt-8 md:mt-10 relative text-center ${isPlayingHero() ? 'md:pb-30' : 'md:pb-0'
								}`}
						>
							<div class="flex md:flex-row flex-col justify-center items-center gap-3 pointer-events-auto">
								<PuzzleButton />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class={`md:pb-10 pt-30 md:pt-40 ${isPlayingHero() ? 'mt-20 sm:mt-90 md:mt-110 lg:mt-120' : 'mt-0'}`}>
				<H2Echo
					maintitle="Какво е детски аутизъм"
					title="аутизъм"
					bgImage="/assets/detsa-s-autizam/деца-с-аутизъм.webp"
					bgSize="300%"
					bgPosition="right 20% top 100%"
				/>
			</div>

			<section class="max-w-1500px md:pt-10 xl:mx-auto mx-20px flex md:flex-row flex-col justify-center items-center md:gap-8">
				<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
					<AnimatedComponent>
						<div class="w-full h-full">
							<div class="bg-paper mx-auto">
								<div class="">
									<div class="mx--20px">
										<img src="/assets/detsa-s-autizam/деца-с-аутизъм.webp" alt="Дете с аутизъм играе" class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
									</div>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</section>

				<section class="md:w-1/2">
					<AnimatedComponent class="w-full md:px-3 my-auto">
						<p class="mt-10 md:mt-0">
							Аутизмът е неврологично разстройство, което оказва влияние върху езика, общуването, социалните умения, сетивните системи и поведението. Обикновено може да бъде диагностицирано в ранна детска възраст, когато се забелязват нарушения в:
						</p>
						<ul style="list-style-type: none;">
							<li>
								<div class="flex items-center gap-2">
									<img class="max-w-25px md:max-w-30px m-0" src="/assets/sense-logo-30px.webp" />
									<p class="font-600 my-2">социалното взаимодействие</p>
								</div>
							</li>
							<li>
								<div class="flex items-center gap-2">
									<img class="max-w-25px md:max-w-30px m-0" src="/assets/sense-logo-30px.webp" />
									<p class="font-600 my-2">комуникацията</p>
								</div>
							</li>
							<li>
								<div class="flex items-center gap-2">
									<img class="max-w-25px md:max-w-30px m-0" src="/assets/sense-logo-30px.webp" />
									<p class="font-600 my-2">поведението</p>
								</div>
							</li>
						</ul>
					</AnimatedComponent>
				</section>
			</section>

			<div>
				<AnimatedComponent class="mt-15 md:mt-30 mx-20px md:mx-0">
					<VideoPlayer
						desktopSource={{ type: "file", src: "/assets/home/Филип-Sense-Center.mp4", poster: "/thumbs/desktop.jpg" }}
						mobileSource={{ type: "file", src: "/assets/home/Филип-Sense-Center-Short.mp4" }}
						desktopGif="/assets/home/Sense-Center-Autism-Desktop.mp4"
						mobileGif="/assets/home/Sense-Center-Autism-Mobile.mp4"
						isPlaying={isPlayingPlayer()}
						onPlay={() => setIsPlayingPlayer(true)}
					/>
				</AnimatedComponent>
			</div>

			<DoodleDecor variant="pink" />

			<section class="py-10">
				<div class="pb-50px xl:px-30">
					<div class="">
						<AnimatedComponent>
							<H3Blue title="Най-често срещани признаци на детски аутизъм" />
							<h4 class="font-600 text-left pb-2 mt-3 md:px-10">Поведенчески нарушения при деца с аутизъм</h4>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "Review 1" },
										{ name: "Review 2" },
										{ name: "Review 3" },
									]}
								>
									<ContainerBox
										class2="important-xl:h-40 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-37"
										style="background-color:#FA7402;"
										title="Избухвания без видима причина"
										text="Проявява внезапни и силни емоции като плач и гняв, без видима причина."
										img="/assets/detsa-s-autizam/деца-аутизъм-избухвания-без-причина.webp"
										alt="Дете с аутизъм се справя с агресия"
									/>
									<ContainerBox
										class2="important-xl:h-40 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-37"
										style="background-color:#FA7402;"
										style2=""
										title="Често повтарящи се движения"
										text="Размахване на ръце, поклащане, въртене в кръг и др. често се наблюдават при деца с аутизъм"
										img="/assets/detsa-s-autizam/често-повтарящи-движения-деца-с-аутизъм.webp"
										alt="Често повтарящи се движения от деца с аутизъм"
									/>
									<ContainerBox
										class2="important-xl:h-40 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-37"
										style="background-color:#FA7402;"
										style2=""
										title="Трудна адаптация към промени"
										text="Детето се чувства силно разстроено или притеснено, когато рутината му се променя."
										img="/assets/detsa-s-autizam/трудна-адаптация-детски-аутизъм.webp"
										alt="Дете с детски аутизъм играе с топка"
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 md:px-10">
								<div class="w-1/3">
									<ContainerBox
										class2="important-xl:h-40 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-35"
										style="background-color:#FA7402;"
										title="Избухвания без видима причина"
										text="Проявява внезапни и силни емоции като плач и гняв, без видима причина."
										img="/assets/detsa-s-autizam/деца-аутизъм-избухвания-без-причина.webp"
										alt="Дете с аутизъм се справя с агресия"
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										class2="important-xl:h-40 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-35"
										style="background-color:#FA7402;"
										style2=""
										title="Често повтарящи се движения"
										text="Размахване на ръце, поклащане, въртене в кръг и др. често се наблюдават при деца с аутизъм"
										img="/assets/detsa-s-autizam/често-повтарящи-движения-деца-с-аутизъм.webp"
										alt="Често повтарящи се движения от деца с аутизъм"
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										class2="important-xl:h-40 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-35"
										style="background-color:#FA7402;"
										style2=""
										title="Трудна адаптация към промени"
										text="Детето се чувства силно разстроено или притеснено, когато рутината му се променя."
										img="/assets/detsa-s-autizam/трудна-адаптация-детски-аутизъм.webp"
										alt="Дете с детски аутизъм играе с топка"
									/>
								</div>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<DoodleDecor variant="pink" />

				<div class="pb-50px xl:px-30">
					<div class="">
						<AnimatedComponent>
							<h4 class="font-600 text-left pb-2 md:px-10">Социални затруднения при деца с аутизъм</h4>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "Review 1" },
										{ name: "Review 2" },
										{ name: "Review 3" },
										{ name: "Review 4" },
									]}
								>
									<ContainerBox
										class2="important-xl:h-40 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-43"
										style="background-color:#742C8F;"
										style2="filter: saturate(130%);"
										title="Забавено развитие на речта"
										text="По-късно проговаряне или употреба на ограничен брой думи и изрази са типичен пример за езикови нарушения при деца с аутизъм."
										img="/assets/detsa-s-autizam/дете-с-аутизъм-не-отговаря-на-името-си.webp"
										alt="Дете с аутизъм не отговаря на името си"
									/>
									<ContainerBox
										class2="important-xl:h-40 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-37"
										style="background-color:#742C8F;"
										style2="filter: saturate(130%);"
										title="Трудности в комуникацията"
										text="Детето изпитва затруднения при разбирането на жестове и мимики, рядко участва в разговори."
										img="/assets/detsa-s-autizam/забавено-развитие-на-речта-при-аутизъм.webp"
										alt="Забавено развитие на речта при аутизъм"
									/>
									<ContainerBox
										class2="important-xl:h-40 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-37"
										style="background-color:#742C8F;"
										style2="filter: brightness(130%);"
										title="Липса на очен контакт"
										text="Детето избягва да гледа другите в очите, дори по време на разговор или игра."
										img="/assets/detsa-s-autizam/аутизъм-липса-на-очен-контакт.webp"
										alt="Дете с аутизъм с липса на очен контакт"
									/>
									<ContainerBox
										class2="important-xl:h-40 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-37"
										style="background-color:#742C8F;"
										title="Детето не отговаря на името си"
										text="При повикване не реагира или изглежда, сякаш не чува."
										img="/assets/detsa-s-autizam/трудности-в-комуникацията-деца-аутизъм.webp"
										alt="Трудности в комуникацията при деца с аутизъм"
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:grid mx-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch md:px-10">
								<ContainerBox
									class2="important-xl:h-60 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-37"
									style="background-color:#742C8F;"
									style2="filter: saturate(130%);"
									title="Забавено развитие на речта"
									text="По-късно проговаряне или употреба на ограничен брой думи и изрази са типичен пример за езикови нарушения при деца с аутизъм."
									img="/assets/detsa-s-autizam/дете-с-аутизъм-не-отговаря-на-името-си.webp"
									alt="Дете с аутизъм не отговаря на името си"
								/>
								<ContainerBox
									class2="important-xl:h-60 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-37"
									style="background-color:#742C8F;"
									style2="filter: saturate(130%);"
									title="Трудности в комуникацията"
									text="Детето изпитва затруднения при разбирането на жестове и мимики, рядко участва в разговори."
									img="/assets/detsa-s-autizam/забавено-развитие-на-речта-при-аутизъм.webp"
									alt="Забавено развитие на речта при аутизъм"
								/>
								<ContainerBox
									class2="important-xl:h-60 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-37"
									style="background-color:#742C8F;"
									style2="filter: brightness(130%);"
									title="Липса на очен контакт"
									text="Детето избягва да гледа другите в очите, дори по време на разговор или игра."
									img="/assets/detsa-s-autizam/аутизъм-липса-на-очен-контакт.webp"
									alt="Дете с аутизъм с липса на очен контакт"
								/>
								<ContainerBox
									class2="important-xl:h-60 important-lg:h-40 important-md:h-37 important-sm:h-35 important-h-37"
									style="background-color:#742C8F;"
									title="Детето не отговаря на името си"
									text="При повикване не реагира или изглежда, сякаш не чува."
									img="/assets/detsa-s-autizam/трудности-в-комуникацията-деца-аутизъм.webp"
									alt="Трудности в комуникацията при деца с аутизъм"
								/>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<DoodleDecor variant="blue2" />

				<AnimatedComponent class="max-w-800px mx-auto">
					<p class="font-600 pb-4">В случай, че забележите някои от признаците на аутизъм при деца да се проявяват при Вашето дете Ви препоръчваме да се консултирате със специалист.</p>
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 md:px-10 py-2 pd:py-4">
						<div class="flex justify-center items-center gap-4">
							<img src="/assets/exclamation-mark-icon.webp" class="w-10 h-10" />
							<p class="font-[MYRIADPRO-Semibold] c-paper uppercase font-size-17px">80% - 90% от мозъка на детето се развива до 7-годишна възраст</p>
						</div>
						<p class="font-size-15px c-paper mt-2">Ето защо колкото по-рано бъде започнато лечение за аутизма толкова по-голяма е възможността за видимо подобрение на актуалното състояние и напредване в развитието.</p>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px">
				<AnimatedComponent>
					<H3Pink title="Какво следва, ако не предприемем действие" />
					<div class="flex flex-col lg:flex-row justify-center gap-10 xl:gap-0">
						<ServiceContaner
							img="/assets/detsa-s-autizam/комуникационни-затруднения-дете-аутизъм.webp"
							alt="Комуникационни затруднения при дете с аутизъм"
							title="Комуникационни затруднения"
							description="Забавена реч, липса на зрителен контакт или трудности в разбирането на социални знаци. Ако не се предприемат действия, тези трудности могат да продължат и в зряла възраст, затруднявайки взаимоотношенията и професионалния успех. Затова е важно родителите и преподавателите да разпознаят навременно ранните симптоми на аутизъм при деца и да потърсят професионална помощ от център за работа с деца с аутизъм."
						/>
						<ServiceContaner
							img="/assets/detsa-s-autizam/социална-изолация-дете-аутизъм.webp"
							alt="Социална изолация при дете с аутизъм"
							title="Социална изолация"
							description="Без терапия, децата с аутизъм обикновено изпитват трудности при създаването на приятелства и участие в социални дейности. Социалната изолация, често предизвика депресия и тревожност, които водят до сериозни последици за психичното здраве. За да се предотвратят тези последствия, е важно да се започне навременно обучение на деца с аутизъм, съобразено с техните индивидуални потребности"
						/>
						<ServiceContaner
							img="/assets/detsa-s-autizam/поведенчески-проблеми-дете-аутизъм.webp"
							alt="Поведенчески проблеми при дете с аутизъм"
							title="Поведенчески проблеми"
							description="Един от рисковете, свързани с неотработения аутизъм, е самонараняващото се поведение, то обикновено е в резултат на чувство за неудовлетвореност, сензорно претоварване или трудност при комуникиране на  нуждите и емоциите. Без подходяща подкрепа и професионална намеса, тези поведения могат да продължат и дори да се влошат с течение на времето."
						/>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="pink" />

			<section class="md:pb-30 pt-10">
				<AnimatedComponent>
					<div class="md:pb-10 xl:px-30 mx-20px">
						<H2Echo
							maintitle={
								<>
									Правилно разпознаване<br />на детски аутизъм
								</>
							}
							title="аутизъм"
							bgImage="/assets/detsa-s-autizam/поставяне-диагноза-дете-аутизъм.webp"
							bgSize="450%"
							bgPosition="right 0% top 80%"
						/>
					</div>
				</AnimatedComponent>
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2">
						<img src="/assets/detsa-s-autizam/поставяне-диагноза-дете-аутизъм.webp" alt="Поставяне на оценка от различни специалисти" class="w-full h-auto object-cover rounded shadow" />
					</AnimatedComponent>

					<div class="md:hidden block pt-10">
						<DoodleDecor variant="purple" />
					</div>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<H3Pink title="Как да разберем дали диагнозата “аутизъм” е правилна" />
						<AnimatedComponent>
							<BackgroundIcons />
							<p class="md:mt--5">
								Наличието на някои от горепосочените признаци, не означава задължително диагноза аутизъм, а е предупредителен знак, който изисква повишено внимание. Диагнозата детски аутизъм не се поставя с един поглед. Това е внимателен процес, който включва оценка от различни специалисти – детски психиатър, психолог, логопед. Провежда се тест за деца с аутизъм, като се използват утвърдени методики, които дават обективна представа за развитието на детето. Това включва проговаряне, моторни умения и игрово поведение, за да се идентифицират потенциални забавяния или особености.
							</p>
							<p class="font-[MYRIADPRO-Bold] pb-5">
								В случай, че имате съмнение най-доброто решение е да потърсите специалист.<br />
								Точната и навременна оценка е ключова за ранното стартиране на подходяща терапия, подкрепяща развитието на детето.
							</p>
							<PuzzleButton />
						</AnimatedComponent>
					</div>
				</div>
			</section >

			<DoodleDecor variant="purple" />

			<section class="relative xl:px-30 mx-20px">
				<H3Blue title="Първична оценка при съмнение за аутизъм" />
				<div class="flex flex-col justify-center items-center mx-auto md:px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:pb-10 md:pt-4 py-5 md:bg-gradient-to-t lg:from-paper lg:to-paper bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
						<div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
							<div class="xl:w-1/2 w-full md:pl-7">
								<p class="c-paper lg:c-paper-inv mb-1">
									В Sense Center предлагаме <strong class="font-[MYRIADPRO-Bold]">първична оценка</strong> за деца със съмнение за аутизъм.
								</p>
								<p class="c-paper lg:c-paper-inv">
									По време на консултацията се проследяват причините за аутизъм, извършва се обследване на поведението и актуалното състояние на детето.
								</p>
								<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Наблюдение на дете с нарушения в развитието" class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv mb-1">
									С помощта на тест за аутизъм се оценяват уменията на детето за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси.								</p>
								<p class="c-paper lg:c-paper-inv">
									Едновременно с това специалистите интервюират родителите за техните наблюдения и за училищното представяне на детето.
								</p>
								<div class="pt-8 flex md:flex-row flex-col justify-center items-center">
									<PuzzleButton />
								</div>
							</div>
							<div class="xl:w-1/2 w-full">
								<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Семейство на дете с нарушения в развитието" class="mt-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv italic font-300 mt-2 leading-5 lg:leading-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.5px;">
									Препоръчително е да донесете всички налични медицински документи, които могат да бъдат от полза за изясняване на актуалното състояние.
								</p>
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="relative md:pb-30 xl:px-30 mx-20px">
				<div class="gap-12 pt-10 xl:px-30">
					<div class="">
						<AnimatedComponent>
							<div class="block xl:hidden">
								<ReviewSlider
									variant="dots3"
									reviews={[
										{ name: "1" },
										{ name: "2" },
										{ name: "3" },
									]}>
									<ReviewersImageReview
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/3.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Тук ще срещнете подкрепа, тук ще срещнете разбиране. Децата ще живеят един по-хубав живот.”"
										name="Александър Соклев"
										date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
									/>
									<ReviewersImageReview
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Някак си още с първото идване, на обследването на детето, те създадоха едно доверие в мен. И съм, мога да кажа, много доволна!”"
										name="Калина Митрева"
										date="майка на Филип, 5 г., съмнение за Аутизъм"
									/>
									<ReviewersImageReview
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/2.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Винаги знам, че винаги мога да разчитам на тях. Те са доста отзивчиви, откликват веднага на нашите въпроси.”"
										name="Станимира Миленова"
										date="майка на Самуил, 6 г. разстройство на речта"
									/>
								</ReviewSlider>
							</div>

							<div class="hidden xl:grid mx-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch">
								<ReviewersImageReview
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/3.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Тук ще срещнете подкрепа, тук ще срещнете разбиране. Децата ще живеят един по-хубав живот.”"
									name="Александър Соклев"
									date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
								/>
								<ReviewersImageReview
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Някак си още с първото идване, на обследването на детето, те създадоха едно доверие в мен. И съм, мога да кажа, много доволна!”"
									name="Калина Митрева"
									date="майка на Филип, 5 г., съмнение за Аутизъм"
								/>
								<ReviewersImageReview
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/2.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Винаги знам, че винаги мога да разчитам на тях. Те са доста отзивчиви, откликват веднага на нашите въпроси.”"
									name="Станимира Миленова"
									date="майка на Самуил, 6 г. разстройство на речта"
								/>
							</div>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink2" />

			<section class="relative md:pb-30 xl:px-30 mx-20px">
				<div class="pt-10 mx-auto">
					<H3Blue title="Какво да правим, ако нямаме достъп до терапевт" />
					<AnimatedComponent class="px-5 max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<div class="">
								<img class="w-full h-full" src="/assets/detsa-s-autizam/наблюдение-дете-аутизъм.webp" alt="Наблюдение на дете с аутизъм" />
							</div>
							<div class="w-full py-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="relative font-600 my-0 pt-3 pb-0 text-left" style="font-family: 'Abel', sans-serif !important;">
										Наблюдение на поведението на деца с аутизъм
									</p>
									<p class="text-left mt-2">
										Родителите, учителите и медицинските специалисти могат да забележат характерни за аутизма симптоми, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие. Наблюдението може да разкрие ранни признаци на детски аутизъм, включително речеви нарушения при деца с аутизъм, трудности в адаптацията и сензорно претоварване.
									</p>
									<p class="relative font-600 my-0 pt-3 pb-0 text-left" style="font-family: 'Abel', sans-serif !important;">
										Потърсете надеждна информация от достоверни източници
									</p>
									<p class="text-left mt-2">
										Избягвайте форумите и непроверените съвети. Вместо това се доверете на утвърдени източници като медицински платформи, организации с опит в работата с деца с аутизъм и доказали се центрове за деца с аутизъм като нашият център за деца с аутизъм в София. Много от тези места прилагат утвърдени подходи, включително приложен поведенчески анализ, който се използва в специализирани центрове по приложен поведенчески анализ за деца с аутизъм, подобни на Sense Center. Този метод осигурява структурирана, индивидуална подкрепа, която помага на децата да развиват социални, комуникационни и поведенчески умения.
									</p>
									<div class="my-5">
										<img class="w-full h-full" src="/assets/detsa-s-autizam/следене-признаци-дете-аутизъм.webp" alt="Следене на признаци за аутизъм на дете" />
									</div>
									<p class="text-left mt-3">
										Освен терапевтични услуги, много центрове за работа с деца с аутизъм предлагат и допълнителни ресурси за обучение на деца с аутизъм – образователни видеа за деца с аутизъм, както и полезни насоки за работа с родители на деца с аутизъм. Достъпът до такава информация ще ви даде повече яснота, спокойствие и увереност в следващите стъпки.
									</p>
									<p class="text-left mt-2 c-brand font-[MYRIADPRO-Semibold]">
										В случай на съмнение е препоръчително да запишете час за консултация с професионалист в сферата на разстройствата от аутистичния спектър, който да изкаже експертното си мнение относно актуалното състояние на детето и да Ви информира за разнообразните възможности за обучение на деца с аутизъм.
									</p>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</div>
				<div class="flex justify-center">
					<PuzzleButton />
				</div>
			</section>

			<section class="py-20">
				<H2Echo
					maintitle="Методи за терапия"
					title="терапия"
					bgImage="/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp"
					bgSize="300%"
					bgPosition="right 0% top 90%"
				/>

				<section class="max-w-1500px md:pt-10 xl:mx-auto mx--20px flex md:flex-row flex-col justify-center items-center md:gap-8">
					<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
						<AnimatedComponent>
							<div class="w-full h-full">
								<div class="bg-paper mx-auto">
									<div class="">
										<div class="mx--20px">
											<img src="/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp" alt="Терапевт и дете с аутизъм по време на терапия" class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" style="filter:brightness(120%);" />
										</div>
									</div>
								</div>
							</div>
						</AnimatedComponent>
					</section>

					<section class="md:w-1/2 mt-15 md:mt-0">
						<AnimatedComponent class="w-full md:px-3 my-auto">
							<H3Blue title="Какво можем да очакваме" />
							<div class="relative px-5 md:px-1">
								<BackgroundIcons />
								<p class="text-left font-size-15px mt--5 font-400">
									Въпреки, че няма известно лечение за аутизъм, има различни терапии, които ако бъдат започнати навреме могат да подобрят поведението и да подпомогнат развитието на детето.
								</p>
								<p class="text-left font-size-15px mt-2 font-400">
									Специализираното обучение на деца с аутизъм в комбинация с професионална подкрепа ще позволят на детето да развие максимално уменията си и да разгърне пълния си потенциал.
								</p>
								<p class="text-left font-size-15px mt-2 font-400">
									Терапията за деца с аутизъм е насочена към подпомагане на тяхното социално, комуникационно и поведенческо развитие, както и към изграждане на умения за самостоятелност и адаптация.
								</p>
							</div>
						</AnimatedComponent>
					</section>
				</section>

				<div class="hidden md:block">
					<DoodleDecor variant="blue" />
				</div>

				<div class="xl:px-60 mx-auto md:pt-0 pt-10">
					<H3Pink title="Някои от най-ефективните терапии" />
					<AnimatedComponent>
						<p class="md:mb-5 mb-2 mt-0 c-gray-700 leading-5 font-size-14px font-400 italic tracking" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.3px;">Препоръчват се от 8 до 24 занимания за деца с аутизъм седмично за оптимални резултати</p>
					</AnimatedComponent>
					<div class="gap-12 md:pt-5 pb-5 md:pb-0">
						<div class="">
							<ReviewSlider2
								variant="dots0"
								reviews={[
									{ name: "1" },
									{ name: "2" },
									{ name: "3" },
									{ name: "4" },
									{ name: "5" },
									{ name: "6" },
									{ name: "7" },
									{ name: "8" },
									{ name: "9" },
									{ name: "10" },
									{ name: "11" },

								]}
							>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Практически занимания за деца с аутизъм"
									description="Развиват слуха, комуникацията, моториката и емоционалната регулация, като подобряват концентрацията, самостоятелността и социалната адаптация"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/home/детски-логопед.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Детски логопед"
									description="Терапията подобрява разбирането и изпълнението на команди, езиковото и речевото развитие на деца с аутизъм"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/ерготерапия-деца.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Ерготерапия"
									description="Ерготерапията при деца с аутизъм подобрява координацията и прецизността на ръцете и пръстите, което е ключово за писане, рисуване и работа с малки предмети"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/звукова-стимулация.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Звукова стимулация"
									description="Подпомага сензорната и слуховата обработка, намалява тревожността и хиперактивността и стимулира езиковото развитие"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(/assets/umstvena-izostanalost/обучение-концентрация-внимание-деца.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Обучение за концентрация и внимание"
									description="Помага на детето с фокусирането и запаметяването, като го учи да задържа вниманието си по-дълго и да следва инструкции"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Тъмна сензорна стая"
									description="Използва сензорно стимулиране при деца с аутизъм, което подобрява концентрацията, визуалното възприятие и двигателните умения"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/психомоторика.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Психомоторика"
									description="Подобрява контрола при ходене, бягане и скачане, както и подпомага развитието на фината моторика при деца със аутизъм"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/многофункционална-стая.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Многофункционална стая"
									description="Стимулира имитационни умения, подпомага изпълнението на инструкции, развива фината моторика"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Когнитивно-поведенческа терапия"
									description="Помага на децата с аутизъм да разберат и променят негативните си мисли и поведение, за да се справят по-добре с емоциите и отношенията с другите"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Консултация с хомеопат"
									description="Подпомага цялостното здраве и емоционално равновесие на детето, като подкрепя организма по естествен начин и допринася за по-добро ежедневно функциониране"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Игрова терапия"
									description="Подобрява емоционалната регулация, развива социални, когнитивни и двигателни умения и намалява тревожността в сигурна и подкрепяща среда."
								/>
							</ReviewSlider2>
						</div>
					</div>
				</div>

				<DoodleDecor variant="pink" />

				<div class="pt-10 md:pt-20 xl:px-30 mx-20px mx-auto">
					<H3Pink title="Какъв е процесът на работа" />
					<WorkProcess />
				</div>

				<DoodleDecor variant="purple" />

				<div class="xl:px-30 mx-20px mx-auto">
					<H3Blue title="Резултати от терапията" />
					<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto px-5" style="flex: 0 0 auto;">
						<AnimatedComponent class="flex flex-col gap-1">
							<p class="text-left mt-2">
								Професионалната терапия осигурява забележим напредък в развитието на деца с аутизъм. Чрез постоянство и подкрепа се постигат значителни резултати, като развитие на социални, комуникативни, езиково-говорни, двигателни умения.
							</p>
							<div class="my-5">
								<GallerySlider2
									imgs={[
										{ src: "/assets/detsa-s-autizam/подобрение-деца-аутизъм.webp", alt: "Подобрение на дете с аутизъм" },
										{ src: "/assets/detsa-s-autizam/напредък-дете-аутизъм.webp", alt: "Напредък в развитието на дете с аутизъм" },
										{ src: "/assets/detsa-s-autizam/връзка-терапевт-дете-аутизъм.webp", alt: "Силна връзка между терапевтите и децата" },
									]}
								/>
							</div>
							<p class="text-left mt-2">
								Терапевтите използват утвърдени методи и персонализирани програми, занимания за деца с аутизъм, които обогатяват речниковия запас и формират умения за редуване, изчакване и споделена игра. С времето детето започва да удължава продължителността на очния контакт, да разбира и изпълнява прости инструкции.
							</p>
							<p class="text-left mt-2 font-[MYRIADPRO-Semibold] mb-12">
								В дългосрочен план, децата с аутизъм често успяват да подобрят своето взаимодействие с околните и да се справят по-добре в социалната среда, което подобрява цялостния им начин на живот.
							</p>
							<PuzzleButton />
						</AnimatedComponent>
					</div>
				</div>

				<AnimatedComponent class="xl:px-30 pt-30">
					<H3Pink title="Първите симптоми на аутизъм, които не бива да игнорирате" />
				</AnimatedComponent>

				<section class="mb-70px max-w-1500px mx-auto">
					<div class="xl:px-30">
						<div>
							<AnimatedComponent>
								<ReviewSlider
									variant="dots2"
									reviews={[
										{ name: "1" },
										{ name: "2" },
										{ name: "3" },
										{ name: "4" },
										{ name: "5" },
									]}>
									<StarReview
										reviewText={<>
											Изключително сме благодарни на целият екип от професионалисти в Sense Center!<br />
											Невероятно мили, сърдечни, квалифицирани млади специалисти, които видимо обичат работата си!<br />
											Напредъкът при Теди е осезаем, продължаваме смело напред и сме сигурни, че ще постигнем още положителни резултати!!! ❤️❤️❤️
										</>}
										name="Karina Stoqnova"
										hrefGoogleReview="https://maps.app.goo.gl/cAVdFNqLJmRJA3bv7"
										class="important-h-400px important-sm:h-250px important-md:h-370px important-lg:h-350px important-xl:h-450px"
									/>
									<StarReview
										reviewText={<>
											Детски център Sense върна усмивките на нашите лица. В центъра се излекува нашият син Марин. Благодаря ви от сърце за професионализма и отдадеността. Вечно благодарни: семейство Марковски
										</>}
										name="Philip Markovski"
										hrefGoogleReview="https://maps.app.goo.gl/pTAjYzFwjVY2EuxB6"
										class="important-h-400px important-sm:h-250px important-md:h-370px important-lg:h-350px important-xl:h-450px"
									/>
									<StarReview
										reviewText={<>
											Много уютно място, съобразено с всички нужди и предпоставки за един полезен и приятен престой за всички деца. Персонала от специалисти е много добре подбран и обучен, и влагат много желание и енергия в работата си. С подкрепата и съдействието им, с напредъка в развитието, уменията и знанията, които получават децата ни, са и видимо щастливи след заниманията в центъра! Препоръчвам!
										</>}
										name="Monika Marinova"
										hrefGoogleReview="https://maps.app.goo.gl/kBpxxDo3jojNvQTv9"
										class="important-h-400px important-sm:h-250px important-md:h-370px important-lg:h-350px important-xl:h-450px"
									/>
									<StarReview
										reviewText={<>
											Препоръчвам на всички родители, които имат притеснения да отидат. Безплатната консултация беше много полезна, продължи достатъчно време, за да ни зададат всички въпроси и обясненията бяха много полезни - без бързане, в спокойна атмосфера. Взеха малкия за половин час и като се върна, беше щастлив и усмихнат. Останахме с впечатление за висок професионализъм и невероятно отношение към децата...
										</>}
										name="Stefan Yordanov"
										hrefGoogleReview="https://maps.app.goo.gl/SqxSzB83DW5dKqDs8"
										class="important-h-400px important-sm:h-250px important-md:h-370px important-lg:h-350px important-xl:h-450px"
									/>
									<StarReview
										reviewText={<>
											Великолепно отношение и професионализъм! Детето ми се чувства прекрасно там, винаги ходи с огромно желание и отбелязва значителен напредък, благодарение на този млад и отдаден екип.
										</>}
										name="Elena Todorova"
										hrefGoogleReview="https://maps.app.goo.gl/FFvXGZ89PWqwouys8"
										class="important-h-400px important-sm:h-250px important-md:h-370px important-lg:h-350px important-xl:h-450px"
									/>
								</ReviewSlider>
							</AnimatedComponent>
						</div>
					</div>
				</section>

				<DoodleDecor variant="purple" />

				<div class="gap-12 pb-8 md:pb-20 xl:px-30 mx-20px mx-auto">
					<H3Blue title="Терапия в домашни условия" />
					<div class="md:pb-0 pb-10">
						<AnimatedComponent>
							<ReviewSlider
								variant="dots2"
								reviews={[
									{ name: "1" },
									{ name: "2" },
									{ name: "3" },
									{ name: "4" },
								]}>
								<PuzzleIconReview
									class="important-h-530px important-sm:h-580px important-md:h-500px important-lg:h-510px"
									style="background-color:#742C8F;"
									puzzleclass="c-brand w-6 mr-2"
									img="/assets/detsa-s-autizam/визуални-помощни-средства-детски-аутизъм.webp"
									alt="Използване на визуални помощни средства за детски с аутизъм"
									title="Използване на визуални помощни средства"
									desc="Карти, таблици и схеми улесняват разбирането на информация и подкрепят комуникацията. Визуалната терапия при деца с аутизъм подпомага ориентирането в ежедневните задачи."
								/>
								<PuzzleIconReview
									class="important-h-530px important-sm:h-580px important-md:h-500px important-lg:h-510px"
									style="background-color:#E11172;"
									puzzleclass="c-brand-purple w-6 mr-2"
									img="/assets/detsa-s-autizam/използване-на-визуални-помощни-средства-за-детски-с-аутизъм.webp"
									alt="Въвеждане на сензорни активности при детски аутизъм"
									title="Въвеждане на сензорни активности"
									desc="Активности като игра с пясък, вода, пластилин активират сензорното стимулиране при деца с аутизъм, развиват сетивата и насърчават спокойствието."
								/>
								<PuzzleIconReview
									class="important-h-530px important-sm:h-580px important-md:h-500px important-lg:h-510px"
									style="background-color:#088F9D;"
									puzzleclass="c-brand-orange w-6 mr-2"
									img="assets/detsa-s-autizam/изграждане-рутинни-действия-аутизъм.webp"
									alt="Изграждане на рутинни действия на деца с аутизъм"
									title="Изграждане на рутинни действия"
									desc="Рутините осигуряват предсказуемост, която помага на децата с аутизъм да се чувстват по-сигурни и спокойни. Например, създайте последователност в сутрешната подготовка или времето за игра."
								/>
								<PuzzleIconReview
									class="important-h-530px important-sm:h-580px important-md:h-500px important-lg:h-510px"
									style="background-color:#FA7402;"
									puzzleclass="c-brand-blue w-6 mr-2"
									img="/assets/detsa-s-autizam/игрови-методи-деца-аутизъм.webp"
									alt="Използване на игрови методи за деца с аутизъм"
									title="Използване на игрови методи"
									desc="Включете ролеви или настолни игри, които развиват социалните умения и емоционалната интелигентност при деца с аутизъм."
								/>
							</ReviewSlider>
						</AnimatedComponent>
					</div>
				</div>

				<DoodleDecor variant="blue2" />

				<section class="md:mx-20px pt-25 md:pt-10 md:px-5">
					<h3 class="xl:px-30 font-600 text-left pb-2 important-font-size-26px important-leading-30px">Необходими ресурси</h3>
					<div class="gap-12 md:pt-10 xl:px-30">
						<div class="block md:hidden">
							<ReviewSlider2
								variant="dots0"
								reviews={[
									{ name: "1" },
									{ name: "2" },
									{ name: "3" },
								]}
							>
								<div class="bg-brand b-rd-12px px-7 py-5">
									<p class="font-[MYRIADPRO-Semibold] c-paper font-size-20px">Знания и умения</p>
									<p class="font-300 c-paper md:leading-7 leading-6.3 font-size-16px font-[MYRIADPRO-Light]">Научете повече за особеностите на аутизма и подходящите методи за работа с деца в аутистичния спектър.<br />
										Използвайте визуални помощни средства и техники за управление на поведението.</p>
								</div>
								<div class="bg-brand-blue b-rd-12px px-7 py-5">
									<p class="font-[MYRIADPRO-Semibold] c-paper font-size-20px">Търпение и последователност</p>
									<p class="font-300 c-paper md:leading-7 leading-6.3 font-size-16px font-[MYRIADPRO-Light]">Необходимо е ежедневно да отделяте време за работа с детето. Постоянството и ангажираността на родителите играят ключова роля в постигането на напредък.</p>
								</div>
								<div class="bg-brand-orange b-rd-12px px-7 py-5">
									<p class="font-[MYRIADPRO-Semibold] c-paper font-size-20px">Инвестиция</p>
									<p class="font-300 c-paper md:leading-7 leading-6.3 font-size-16px font-[MYRIADPRO-Light]">Употребата на помощни средства като визуални карти, книги, образователни играчки и приложения, специално разработени за деца с аутизъм, може значително да подобри резултатите.</p>
								</div>
							</ReviewSlider2>
						</div>
						<div class="hidden md:flex gap-3 xl:gap-5 px-1 mx-auto">
							<div class="bg-brand b-rd-12px px-7 py-5 w-1/3">
								<p class="font-[MYRIADPRO-Bold] c-paper font-size-22px">Знания и умения</p>
								<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-17px">Научете повече за особеностите на аутизма и подходящите методи за работа с деца в аутистичния спектър.<br />
									Използвайте визуални помощни средства и техники за управление на поведението.</p>
							</div>
							<div class="bg-brand-blue b-rd-12px px-7 py-5 w-1/3">
								<p class="font-[MYRIADPRO-Bold] c-paper font-size-22px">Търпение и последователност</p>
								<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-17px">Необходимо е ежедневно да отделяте време за работа с детето. Постоянството и ангажираността на родителите играят ключова роля в постигането на напредък.</p>
							</div>
							<div class="bg-brand-orange b-rd-12px px-7 py-5 w-1/3">
								<p class="font-[MYRIADPRO-Bold] c-paper font-size-22px">Инвестиция</p>
								<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-17px">Употребата на помощни средства като визуални карти, книги, образователни играчки и приложения, специално разработени за деца с аутизъм, може значително да подобри резултатите.</p>
							</div>
						</div>
					</div>
				</section>

				<div class="relative">
					<BackgroundIcons />
					<div class="gap-12 pb-0 pt-50px xl:px-30 mx-20px mx-auto">
						<H3Blue title="Резултати от терапията в домашни условия" />
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start ">
								<p class="font-size-15px font-400 mt-0">Резултатите от терапията със собствени сили варират. Някои деца показват подобрение в ежедневните си умения, комуникация и социализация. При постоянство и отдаденост се постигат положителни резултати, макар и по-бавно, особено в ранните етапи на терапията. Въпреки това, липсата на професионална подкрепа ограничава напредъка в определени области.</p>
							</div>
						</AnimatedComponent>
					</div>
					<DoodleDecor variant="pink" />
					<div class="mt-20 gap-12 pb-8 md:pb-20 pt-50px xl:px-30 bg-brand-blue -mx-20px">
						<div class="mx-20px">
							<AnimatedComponent>
								<ReviewSlider
									variant="dots2"
									reviews={[
										{ name: "1" },
										{ name: "2" },
										{ name: "3" },
										{ name: "4" },
										{ name: "5" },
									]}>
									<GoogleStarReview
										img="https://lh3.googleusercontent.com/a/ACg8ocIZRpc48TQsa_KBvFTmJvD-hLjEWf6LX9fXZ4p1hajsvQRcxg=w72-h72-p-rp-mo-br100"
										reviewText={
											<>
												Изключително сме благодарни на целият екип от професионалисти в Sense Center!<br />
												Невероятно мили, сърдечни, квалифицирани млади специалисти, които видимо обичат работата си!<br />
												Напредъкът при Теди е осезаем, продължаваме смело напред и сме сигурни, че ще постигнем още положителни резултати!!! ❤️❤️❤️

											</>
										}
										name="Karina Stoqnova"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/XQGtSmVyfGM2xrYT7"
										class="important-h-370px important-sm:h-650px important-lg:h-470px important-xl:h-500px"
									/>
									<GoogleStarReview
										img="https://lh3.googleusercontent.com/a/ACg8ocJOv6-6inqTacvSZTKuVzDy01uZiWrkJ0IIwwRV4RSqvem3SM8=w72-h72-p-rp-mo-ba2-br100"
										reviewText={
											<>
												Детски център Sense върна усмивките на нашите лица. В центъра се излекува нашият син Марин. Благодаря ви от сърце за професионализма и отдадеността. Вечно благодарни: семейство Марковски
											</>
										}
										name="Philip Markovski"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/27QWVocYje4TASND8"
									/>
									<GoogleStarReview
										img="https://lh3.googleusercontent.com/a/ACg8ocJUDpm4pRLN7nQpE4UqZqdpR6P2ttscgRBo5SIXU1tQorvXuQ=w72-h72-p-rp-mo-br100"
										reviewText={
											<>
												Много уютно място, съобразено с всички нужди и предпоставки за един полезен и приятен престой за всички деца. Персонала от специалисти е много добре подбран и обучен, и влагат много желание и енергия в работата си. С подкрепата и съдействието им, с напредъка в развитието, уменията и знанията, които получават децата ни, са и видимо щастливи след заниманията в центъра! Препоръчвам!
											</>
										}
										name="Monika Marinova"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/h6oBtE5uRsFxoD2j9"
									/>
									<GoogleStarReview
										img="https://lh3.googleusercontent.com/a-/ALV-UjXzjMfCsv8tbms0bZKQY3xik42Ub4GBtMqtDi1h7qiI72O5g-Zq=w72-h72-p-rp-mo-br100"
										reviewText={
											<>
												Препоръчвам на всички родители, които имат притеснения да отидат. Безплатната консултация беше много полезна, продължи достатъчно време, за да ни зададат всички въпроси и обясненията бяха много полезни - без бързане, в спокойна атмосфера. Взеха малкия за половин час и като се върна, беше щастлив и усмихнат. Останахме с впечатление за висок професионализъм и невероятно отношение към децата. Винаги бихме се обърнали отново за подкрепа и това би бил първият ни избор, ако имаме нужда. Благодарим от сърце!
											</>
										}
										name="Stefan Yordanov"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/KUBpWYT8YmcRsDFYA"
									/>
									<GoogleStarReview
										img="https://lh3.googleusercontent.com/a-/ALV-UjXNDMsG5OUiJGd1LM9erKE5VNkTw48t7eeVN5Podk9V-RDbz_UM=w72-h72-p-rp-mo-br100"
										reviewText={
											<>
												Великолепно отношение и професионализъм! Детето ми се чувства прекрасно там, винаги ходи с огромно желание и отбелязва значителен напредък, благодарение на този млад и отдаден екип.
											</>
										}
										name="Elena Todorova"
										stars={5}
										hrefGoogleReview="https://maps.app.goo.gl/qu9agxG4vrrMb94t7"
										class="important-h-300px important-sm:h-350px important-lg:h-350px important-xl:h-400px"
									/>
								</ReviewSlider>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
