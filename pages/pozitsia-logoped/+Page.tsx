import "solid-slider/slider.css";
import { PuzzleIconReview, ReviewSlider, StaffSlider } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H3Blue, H3Pink, H3SolidPink } from '../../components/H2WithImage';
import { PuzzleButton2 } from "../../components/PuzzleButton";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { VideoHero } from "../../components/HeroVideo";
import { createSignal } from 'solid-js';
import { ContainerSlider } from "../../components/ContainerSlider";

const [isPlaying, setIsPlaying] = createSignal(false);

export default function Page() {
	return (
		<>
			<div class="relative w-full">
				<VideoHero
					youtubeId="R1kPm_q7vCc"
					gifPreview="/assets/home/2025-07-08 10-35-35.mp4"
					isPlaying={isPlaying()}
					onPlay={() => setIsPlaying(true)}
				/>

				<div class="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-end pb-18 md:pb-10 text-center px-4 text-white">
					<div class={`absolute ${isPlaying() ? 'top-32% sm:top-95% lg:top-100% mt-30' : 'top-46% md:top-60% mt-0'}`}>
						<div>
							<h1
								class={`mb-4 md:mb-7 transition-colors duration-500 ${isPlaying()
									? 'text-brand'
									: 'text-white'
									}`}
							>
								Започни приключението<br />си като детски логопед
							</h1>
						</div>

						<div
							class={`important-delay-300 font-400 text-center mb-0 font-size-4.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 leading-5.5 transition-colors duration-500 ${isPlaying()
								? 'text-brand'
								: 'text-white'
								}`}
						>
							Присъедини се към нашия екип
						</div>

						<div
							class={`important-delay-600 mt-8 md:mt-10 relative text-center ${isPlaying() ? 'md:pb-30' : 'md:pb-0'
								}`}
						>
							<div class="flex md:flex-row flex-col justify-center items-center gap-3 pointer-events-auto">
								<PuzzleButton2
									class="important-bg-brand important-hover:bg-brand-hover"
									style2="font-weight:500; font-size:14px !important;"
									img="/assets/sense-puzzle-piece.svg"
									href=""
									text="Кандидатствайте"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<AnimatedComponent class={`xl:px-30 mx-20px pt-30 md:pt-40 ${isPlaying() ? 'mt-20 sm:mt-90 md:mt-110 lg:mt-120' : 'mt-0'}`}>
				<H3Blue variant="h2" title="Смислена работа с реално въздействие върху децата" />
			</AnimatedComponent>

			<section class="gap-12 pb-8 md:pb-20 xl:px-30">
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
								style="background-color:#742C8F;"
								puzzleclass="c-brand w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								href="/za-nas/blago/"
								title="Позитивна и сплотена среда"
								desc="Вярваме в силата на сплотения екип и работим в подкрепяща среда, където доверието, уважението и взаимопомощта са водещи."
							/>
							<PuzzleIconReview
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								href="/za-nas/blago/"
								title="Обучения и супервизии"
								desc="Осигуряваме регулярна подкрепа и възможности за професионално израстване на всяко ниво от кариерата Ви."
							/>
							<PuzzleIconReview
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								href="/za-nas/blago/"
								title="Разнообразие от случаи и възможности за развитие"
								desc="Работим с деца с различни потребности и възрасти, което Ви позволява да надграждате уменията си и да растете професионално."
							/>
							<PuzzleIconReview
								style="background-color:#FA7402;"
								puzzleclass="c-brand-blue w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								href="/za-nas/blago/"
								title="Смислена работа с реално въздействие"
								desc="Всяка терапевтична сесия е възможност да допринесете за развитието на детето и да почувствате, че работата Ви има значение."
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px">
				<div class="mx-auto px-5">
					<AnimatedComponent>
						<H3SolidPink variant="h2" title="Интервю с екипа на Sense Center" />
					</AnimatedComponent>
					<StaffSlider
						variant="dots1"
						reviews={[
							{ name: "1" },
							{ name: "2" },
							{ name: "3" },
						]}>
						<div class="flex flex-col max-w-full relative overflow-hidden mx-auto">
							<div>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<div class="w-full py-20px text-center">
									<div class="flex flex-col">
										<h4 class="mb-0 important-font-[MYRIADPRO-SEMIBOLDIT]">Ако трябва да опишеш Sense Center с една дума коя би била тя?</h4>
										<p class="text-left mt-0">
											Развитие
										</p>
										<h4 class="mb-0 important-font-[MYRIADPRO-SEMIBOLDIT]">Какво най-много ти харесва в работата?</h4>
										<p class="text-left mt-1">
											Харесва ми това, че се работи с различни нарушения и мога да трупам опит и да се уча на различен подход към всяко дете.
										</p>
										<h4 class="mb-0 important-font-[MYRIADPRO-SEMIBOLDIT]">Какво ти харесва в екипа?</h4>
										<p class="text-left mt-1">
											Това, че са широкоскроени.
										</p>
										<p class="font-size-15px mb-0 font-[MYRIADPRO-Semibold]">Искра Ангелова</p>
										<p class="font-size-15px mt-0">Логопед</p>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-col max-w-full relative overflow-hidden mx-auto">
							<div>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<div class="w-full py-20px text-center">
									<div class="w-full py-20px text-center">
										<div class="flex flex-col">
											<h4 class="mb-0 important-font-[MYRIADPRO-SEMIBOLDIT]">Ако трябва да опишеш Sense Center с една дума коя би била тя?</h4>
											<p class="text-left mt-0">
												Отговор
											</p>
											<h4 class="mb-0 important-font-[MYRIADPRO-SEMIBOLDIT]">Какво най-много ти харесва в работата?</h4>
											<p class="text-left mt-1">
												Отговор
											</p>
											<h4 class="mb-0 important-font-[MYRIADPRO-SEMIBOLDIT]">Какво ти харесва в екипа?</h4>
											<p class="text-left mt-1">
												Отговор
											</p>
											<p class="font-size-15px mb-0 font-[MYRIADPRO-Semibold]">Марчела Йорданова</p>
											<p class="font-size-15px mt-0">Главен Логопед</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-col max-w-full relative overflow-hidden mx-auto">
							<div>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<div class="w-full py-20px text-center">
									<div class="w-full py-20px text-center">
										<div class="flex flex-col">
											<h4 class="mb-0 important-font-[MYRIADPRO-SEMIBOLDIT]">Ако трябва да опишеш Sense Center с една дума коя би била тя?</h4>
											<p class="text-left mt-0">
												Отговор
											</p>
											<h4 class="mb-0 important-font-[MYRIADPRO-SEMIBOLDIT]">Какво най-много ти харесва в работата?</h4>
											<p class="text-left mt-1">
												Отговор
											</p>
											<h4 class="mb-0 important-font-[MYRIADPRO-SEMIBOLDIT]">Какво ти харесва в екипа?</h4>
											<p class="text-left mt-1">
												Отговор
											</p>
											<p class="font-size-15px mb-0 font-[MYRIADPRO-Semibold]">Ваня Витанова</p>
											<p class="font-size-15px mt-0">Логопед</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</StaffSlider>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="xl:px-30 pt-10 max-w-1500px xl:mx-auto">
				<AnimatedComponent class="flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<H3Blue variant="h2" title="За Sense Center" />

					<div class="flex lg:flex-row flex-col lg:gap-10 justify-center items-center">
						<div class="lg:w-1/2 w-full">
							<h3 class=" important-leading-11 important-md:mt-35px font-600 text-left lg:pb-2 important-mb-5 lg:mb-9 important-font-size-30px important-lg:font-size-35px">Заедно по пътя на развитието</h3>
							<div class="w-full text-center">
								<div class="">
									<p class="text-left mt-0 lg:mt-5">
										В Sense Center вярваме, че всяко дете заслужава да бъде разбрано, обичано и подкрепено. Помагаме на деца със затруднения в речта, ученето, поведението и развитието, като работим ръка за ръка със семействата им.
									</p>
									<p class="text-left">
										Предлагаме персонализирана терапия в позитивна, сигурна и насърчаваща среда.
									</p>
								</div>
							</div>

							<h3 class=" important-leading-11 important-mt-35px font-600 text-left lg:pb-2 important-mb-5 lg:mb-9 important-font-size-30px important-lg:font-size-35px">Мисия</h3>
							<div class="w-full text-center">
								<div class="">
									<p class="text-left mt-0 lg:mt-5">
										Центърът е създаден през 2023 г. от д-р Зорница Маркова – терапевт с дългогодишен опит и отдаденост към работата с деца и родители.
									</p>
									<p class="text-left">
										От самото начало мисията ни е ясна: с търпение, внимание и правилна грижа да помогнем на всяко дете да развие потенциала си.
									</p>
								</div>
							</div>

							<h3 class=" important-leading-11 important-mt-35px font-600 text-left lg:pb-2 important-mb-5 lg:mb-9 important-font-size-30px important-lg:font-size-35px">Повече за екипа на Sense Center</h3>
							<div class="w-full text-center">
								<div class="">
									<p class="text-left mt-0 lg:mt-5">
										Екипът ни е съставен от опитни и сърдечни специалисти, обединени от любовта към децата и желанието да правим смислена промяна. Подкрепяме се, учим се и растем заедно – както професионално, така и като хора.
									</p>
								</div>
							</div>
						</div>
						<div class="lg:w-1/2 w-full my-7 md:my-0">
							<img class="w-full h-ful" src="/assets/home/вход-към-sense-center.webp" alt="" />
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="blue" />

			<section>
				<div class="gap-12 pb-5 xl:px-30">
					<H3Pink variant="h2" title="Какви хора търсим" />
					<AnimatedComponent class="px-5 md:px-10 mb-10">
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">
								Търсим логопеди, които обичат работата с деца и вярват, че всяко дете има нужда от внимание, търпение и подход, съобразен с неговите индивидуални нужди. Ако си от тези, които слушат с разбиране, работят с душа и имат желание да бъдат част от екип с мисия – ще се радваме да се запознаем.
							</p>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<section>
				<div class="flex lg:flex-row flex-col justify-start items-start pt-10px md:pt-30px xl:px-30">
					<div class="lg:w-1/2 w-full">
						<div class="gap-12 xl:px-30">
							<AnimatedComponent class="px-5 md:px-10 mb-10">
								<h3 class="text-left mb-5 important-font-size-30px important-lg:font-size-35px important-leading-9 important-md:leading-11">Основните качества, които търсим са:</h3>
								<div class="flex flex-col justify-center items-start">
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/pink-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Енергичност и креативност
										</p>
									</div>
									<div class="flex items-center justify-center gap-3.5">
										<div>
											<img src="/assets/bg-puzzle-5.svg" class="w-11 h-11" alt="" />
										</div>
										<p class="">
											Отговорност и критично мислене
										</p>
									</div>
									<div class="flex items-center justify-center gap-4 ml-1.5">
										<div>
											<img src="/assets/sense-orange-puzzle-piece.svg" class="w-9.5 h-9.5" alt="" />
										</div>
										<p class="">
											Желание за учене и работа с деца с нарушения в развитието
										</p>
									</div>
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/blue-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Емпатия, търпение и адаптивност
										</p>
									</div>
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/yellow-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Работа в екип и комуникативност
										</p>
									</div>
									<div class="flex items-center justify-center gap-4 ml-1.5">
										<div>
											<img src="/assets/sense-puzzle-piece.svg" class="w-9.5 h-9.5" alt="" />
										</div>
										<p class="">
											Вътрешна мотивация да преживяваш работата като мисия и призвание
										</p>
									</div>
									<div class="flex items-center justify-center gap-4 ml-1.5">
										<div>
											<img src="/assets/sense-puzzle-piece.svg" class="w-9.5 h-9.5" alt="" />
										</div>
										<p class="">
											Проактивност и целеустременост
										</p>
									</div>
								</div>
							</AnimatedComponent>
						</div>
					</div>
					<div class="lg:w-1/2 w-full">
						<div class="gap-12 xl:px-30">
							<AnimatedComponent class="px-5 md:px-10 mb-10">
								<h3 class="text-left mb-5 important-font-size-30px important-lg:font-size-35px important-leading-11">Изисквания:</h3>
								<div class="flex flex-col justify-center items-start">
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/pink-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Диплома за завършена бакалавърска или магистърска степен със специалност “Логопедия”
										</p>
									</div>
									<div class="flex items-center justify-center gap-3.5">
										<div>
											<img src="/assets/bg-puzzle-5.svg" class="w-11 h-11" alt="" />
										</div>
										<p class="">
											Добри комуникационни и междуличностни умения за ефективно сътрудничество с членове на екипа и родители
										</p>
									</div>
									<div class="flex items-center justify-center gap-4 ml-1.5">
										<div>
											<img src="/assets/sense-orange-puzzle-piece.svg" class="w-9.5 h-9.5" alt="" />
										</div>
										<p class="">
											Емпатия, търпение и способност за създаване на благоприятна и подкрепяща среда за децата
										</p>
									</div>
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/blue-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Добри организационни умения, умения за управление на времето, приоритизиране на поставените цели и задачи;
										</p>
									</div>
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/yellow-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Желание за професионално развитие и усвояване на нови техники и подходи
										</p>
									</div>
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/yellow-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Базови ИТ умения
										</p>
									</div>
								</div>
							</AnimatedComponent>
						</div>
					</div>
				</div>

				<div class="pb-5 xl:px-30 md:pb-30">
					<H3Pink title="Работим и растем заедно" />
					<AnimatedComponent class="px-5 md:px-10 mb-10">
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">
								Нашият екип е съставен от високо квалифицирани специалисти с опит в работата с деца със специални образователни потребности и трудности в развитието. Вярваме, че професионализмът, любовта към децата и постоянният стремеж към развитие са в основата на ефективната терапия.
							</p>
							<p class="mt-0">
								Ключът към успеха е нашата координирана екипна работа. Терапевтите редовно си комуникират и обменят информация, което ни позволява да работим в синхрон и води до забележителни постижения в развитието на децата като осигурява спокойствие и удовлетворение на родителите.
							</p>
						</div>
					</AnimatedComponent>
				</div>

				<AnimatedComponent class="max-w-800px mx-auto">
					<div class="flex flex-col justify-center items-center b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 md:px-10 py-2 pd:py-4">
						<div class="flex flex-col justify-center items-center gap-4 pt-30px">
							<img src="/assets/exclamation-mark-icon.webp" class="w-13 h-13 lg:w-15 lg:h-15" />
							<p class="font-600 c-paper uppercase font-size-20px font-size-25px mt-0 text-center leading-8">Липсата на опит не е недостатък</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="pink" />

			<section class="pb-40px xl:px-30 mx-20px">
				<H3Blue variant="h2" title="Отговорности на детския логопед" />
				<AnimatedComponent class="mx-auto flex flex-col md:flex-row gap-14">
					<div class="flex flex-col justify-between items-start gap-2 w-full md:px-10 px-5">
						<div class="w-full">
							<ul style="list-style-type: none;" class="flex flex-col gap-2">
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="my-2 leading-6 font-[MYRIADPRO-Semibold]">Прилагане на персонализирани методи за лечение за справяне с поставени конкретни цели и задачи</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="my-2 leading-6 font-[MYRIADPRO-Semibold]">Сътрудничество с мултидисциплинарен екип</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="my-2 leading-6 font-[MYRIADPRO-Semibold]">Участие в ежеседмични групови супервизии за поставяне на общи цели, коригиране плановете за терапия и оптимизиране на резултатите</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="my-2 leading-6 font-[MYRIADPRO-Semibold] md:mb-0">Стимулиране на родителите за подпомагане на напредъка на детето им и насърчаване на пренасянето на умения в домашната среда</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="purple" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-10">
				<H3Pink variant="h2" title="Какво предлагаме" />
			</AnimatedComponent>

			<div class="max-w-1500px md:pt-10 mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "Review 1" },
										{ name: "Review 2" },
										{ name: "Review 3" },
										{ name: "Review 4" },
									]}
								>
									<div class="mt-0 m-auto b-rd-12px md:pb-10 md:px-6 pt-4 pb-7 px-5 flex flex-col h-full justify-between items-between bg-brand-purple">
										<div class="h-32">
											<p class="c-paper lg:leading-6.5 leading-6 font-[MYRIADPRO-Semibold]">Трудов договор на пълен и непълен работен ден (4, 6 или 8ч.)</p>
										</div>
										<img src="/assets/home/дневен-център-за-деца-с-увреждания.webp" alt="" class="w-full" />
									</div>
									<div class="mt-0 m-auto b-rd-12px md:pb-10 md:px-6 pt-4 pb-7 px-5 flex flex-col h-full justify-between items-between bg-brand-purple">
										<div class="h-32">
											<p class="c-paper lg:leading-6.5 leading-6 font-[MYRIADPRO-Semibold]">Стимулиращо възнаграждение + бонуси</p>
										</div>
										<img src="/assets/home/дневен-център-за-деца-с-увреждания.webp" alt="" class="w-full" />
									</div>
									<div class="mt-0 m-auto b-rd-12px md:pb-10 md:px-6 pt-4 pb-7 px-5 flex flex-col h-full justify-between items-between bg-brand-purple">
										<div class="h-32">
											<p class="c-paper lg:leading-6.5 leading-6 font-[MYRIADPRO-Semibold]">Въвеждащо обучение и възможност за допълнителни професионални обучения</p>
										</div>
										<img src="/assets/home/дневен-център-за-деца-с-увреждания.webp" alt="" class="w-full" />
									</div>
									<div class="mt-0 m-auto b-rd-12px md:pb-10 md:px-6 pt-4 pb-7 px-5 flex flex-col h-full justify-between items-between bg-brand-purple">
										<div class="h-32">
											<p class="c-paper lg:leading-6.5 leading-6 font-[MYRIADPRO-Semibold]">Пакет социални придобивки: Мултиспорт карта и Ваучери за храна</p>
										</div>
										<img src="/assets/home/дневен-център-за-деца-с-увреждания.webp" alt="" class="w-full" />
									</div>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/4">
									<div class="mt-0 m-auto b-rd-12px md:pb-10 md:px-6 pt-4 pb-7 px-5 flex flex-col h-full justify-between items-between bg-brand-purple">
										<div class="h-32">
											<p class="c-paper lg:leading-6.5 leading-6 font-[MYRIADPRO-Semibold]">Трудов договор на пълен и непълен работен ден (4, 6 или 8ч.)</p>
										</div>
										<img src="/assets/home/дневен-център-за-деца-с-увреждания.webp" alt="" class="w-full" />
									</div>
								</div>
								<div class="w-1/4">
									<div class="mt-0 m-auto b-rd-12px md:pb-10 md:px-6 pt-4 pb-7 px-5 flex flex-col h-full justify-between items-between bg-brand-purple">
										<div class="h-32">
											<p class="c-paper lg:leading-6.5 leading-6 font-[MYRIADPRO-Semibold]">Стимулиращо възнаграждение + бонуси</p>
										</div>
										<img src="/assets/home/дневен-център-за-деца-с-увреждания.webp" alt="" class="w-full" />
									</div>
								</div>
								<div class="w-1/4">
									<div class="mt-0 m-auto b-rd-12px md:pb-10 md:px-6 pt-4 pb-7 px-5 flex flex-col h-full justify-between items-between bg-brand-purple">
										<div class="h-32">
											<p class="c-paper lg:leading-6.5 leading-6 font-[MYRIADPRO-Semibold]">Въвеждащо обучение и възможност за допълнителни професионални обучения</p>
										</div>
										<img src="/assets/home/дневен-център-за-деца-с-увреждания.webp" alt="" class="w-full" />
									</div>
								</div>
								<div class="w-1/4">
									<div class="mt-0 m-auto b-rd-12px md:pb-10 md:px-6 pt-4 pb-7 px-5 flex flex-col h-full justify-between items-between bg-brand-purple">
										<div class="h-32">
											<p class="c-paper lg:leading-6.5 leading-6 font-[MYRIADPRO-Semibold]">Пакет социални придобивки: Мултиспорт карта и Ваучери за храна</p>
										</div>
										<img src="/assets/home/дневен-център-за-деца-с-увреждания.webp" alt="" class="w-full" />
									</div>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="blue2" />

			<section>
				<div class="gap-12 pb-8 xl:px-30">
					<H3Blue variant="h2" title="Как можете да кандидатствате" />
					<AnimatedComponent class="px-5 md:px-10 mb-10 relative">
						<BackgroundIcons />
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Ако искате да сте част от нашия екип и заедно да помагаме на децата със специални нужди да достигнат пълния си потенциал, ще се радваме да свържете с нас.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">
								<span class="font-[MYRIADPRO-Bold]">Изпратете на имейл своята автобиография и кратко описание на притежаваните от Вас качества.</span>
							</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0 font-[MYRIADPRO-Bold] font-size-20px">
								<a target="_blank" rel="noopener" class="c-brand-purple hover:c-brand-blue transition-all" href="mailto:contact@sense-center.bg">contact@sense-center.bg</a>
							</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Одобрените кандидати ще бъдат потърсени за насрочване на дата за интервю.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Благодарим Ви за проявения интерес и очакваме Вашите кандидатури!</p>
						</div>
					</AnimatedComponent>
					<PuzzleButton2
						class="important-bg-brand important-hover:bg-brand-hover"
						style2="font-weight:500; font-size:14px !important;"
						img="/assets/sense-puzzle-piece.svg"
						href=""
						text="Кандидатствайте"
					/>
				</div>
			</section>

			<DoodleDecor variant="purple" />
		</>
	);
}
