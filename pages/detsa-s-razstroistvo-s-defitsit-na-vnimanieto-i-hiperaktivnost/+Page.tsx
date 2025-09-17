import "solid-slider/slider.css";
import { AuthorContainer, GoogleStarReview, PuzzleIconReview, ReviewersImageReview, ReviewSlider, ReviewSlider2, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink } from '../../components/H2WithImage';
import { ServiceContaner } from '../../components/ServiceContainer';
import { ContainerBox, ContainerSlider } from "../../components/ContainerSlider";
import { PuzzleButton } from "../../components/PuzzleButton";
import { GallerySlider2 } from "../../components/GallerySlider";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { WorkProcess } from "../../components/WorkProcess";

export default function Page() {
	return (
		<>
			<div class="[background-color:#fcfcfc]">
				<div
					class="
					mb-20
					mt--10px
					md:mt-0
					mx-[0px]
					relative 
					h-[100vh] 
					bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/HADV/диагностика-на-хадв.png)] 
					md:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.4)),url(/assets/HADV/диагностика-на-хадв.png)] 
					bg-[position:right_65%_bottom_80%]
					md:bg-[position:right_30%_bottom_70%] 
					bg-no-repeat 
					bg-cover 
					[mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)] 
					[-webkit-mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)]
					"
					role="img"
					aria-label=""
				></div>
			</div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="flex flex-col justify-center items-center left-0 right-0 px-3 my-0 mx-auto absolute top-71% lg-top-75% text-center w-full" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="c-paper mb-2 md:mb-7 md:px-0 px-5">Деца с разстройство с дефицит на вниманието и хиперактивност (ХАДВ)</h1>
							</AnimatedComponent>
							<AnimatedComponent class="important-delay-300 font-300 c-paper text-center mb-0 font-size-4.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 leading-5.5">Какво да очакваме и как да подкрепим детето</AnimatedComponent>

							<AnimatedComponent class="important-delay-600 mt-8 md:mt-10 float-left md:pr-5px relative text-center max-w-1240px">
								<PuzzleButton />
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="md:pb-10 lg:px-30">
				<H2Echo
					maintitle="Какво е разстройство с дефицит на вниманието и хиперактивност"
					title="хиперактивност"
					bgImage="/assets/HADV/разстройство-дефицит-вниманието-.webp"
					bgSize="200%"
					bgPosition="right 0% top 70%"
				/>
			</div>

			<section class="max-w-1500px md:pt-10 xl:mx-auto mx-20px flex md:flex-row flex-col justify-center items-center md:gap-8">
				<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
					<AnimatedComponent>
						<div class="w-full h-full">
							<div class="bg-paper mx-auto">
								<div class="">
									<div class="mx--20px">
										<img src="/assets/HADV/разстройство-дефицит-вниманието-.webp" alt="cc" class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
									</div>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</section>

				<section class="md:w-1/2">
					<AnimatedComponent class="w-full md:px-3 my-auto">
						<p class="mt-10 md:mt-0">
							Хиперактивността с дефицит на внимание (ХАДВ), известно още като ADHD  е емоционално-поведенческо разстройство, свързано с трудности в концентрацията и контрола на импулсите. При засегнатите деца симптомите са постоянни и по-силно изразени от обичайната активност на техните връстници, като вниманието им лесно се разсейва от множество мисли и стимули.
						</p>
						<p class="font-[MYRIADPRO-Semibold]">
							Съществуват 3 форми на разстройството:
						</p>
						<ul style="list-style-type: none;">
							<li>
								<div class="flex items-center gap-2">
									<img class="max-w-25px md:max-w-30px m-0" src="/assets/sense-logo-30px.webp" />
									<p class="font-[MYRIADPRO-Semibold] my-2">дефицит на вниманието</p>
								</div>
							</li>
							<li>
								<div class="flex items-center gap-2">
									<img class="max-w-25px md:max-w-30px m-0" src="/assets/sense-logo-30px.webp" />
									<p class="font-[MYRIADPRO-Semibold] my-2">хиперактивност</p>
								</div>
							</li>
							<li>
								<div class="flex items-center gap-2">
									<img class="max-w-25px md:max-w-30px m-0" src="/assets/sense-logo-30px.webp" />
									<p class="font-[MYRIADPRO-Semibold] my-2">комбинация от хиперактивност с дефицит на вниманието.</p>
								</div>
							</li>
						</ul>
					</AnimatedComponent>
				</section>
			</section>

			{/* <div>
				<AnimatedComponent class="mt-15 md:mt-30 mx-20px md:mx-0">
					<VideoPlayer
						youtubeId="PUYw2e-X-Vw"
						thumbnail="/assets/Fulfilling-Vows.webp"
					/>
				</AnimatedComponent>
			</div> */}

			<DoodleDecor variant="purple" />

			<section class="pb-10">
				<div class="pb-50px xl:px-30">
					<div class="">
						<AnimatedComponent>
							<H3Blue title="Най-често срещани признаци" />
							<div class="md:px-5">
								<h4 class="font-600 text-left pb-2">Симптоми на невнимание</h4>
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
											class2="important-xl:h-55 important-lg:h-45 important-md:h-40 important-sm:h-30 important-h-44"
											style="background-color:#FA7402;"
											title="Бърза загуба на интерес"
											text="Започва дейност с ентусиазъм, но бързо губи фокус и интерес и не я довършва"
											img="/assets/HADV/загуба-интерес-хадв.webp"
											alt=""
										/>
										<ContainerBox
											class2="important-xl:h-55 important-lg:h-45 important-md:h-40 important-sm:h-30 important-h-44"
											style="background-color:#FA7402;"
											style2=""
											title="Трудности със следване на инструкции"
											text="Затруднява се с организиране на задачите и спазване на ред или последователност"
											img="/assets/HADV/разстройство-поведението-хиперкинетични-прояви-негативизъм.webp"
											alt=""
										/>
										<ContainerBox
											class2="important-xl:h-55 important-lg:h-45 important-md:h-40 important-sm:h-30 important-h-44"
											style="background-color:#FA7402;"
											style2=""
											title="Грешки по невнимание"
											text="Допуска чести пропуски и грешки, дори при познати и лесни задачи"
											img="/assets/HADV/хиперкинетично-разстройство-поведението.webp"
											alt=""
										/>
										<ContainerBox
											class2="important-xl:h-55 important-lg:h-45 important-md:h-40 important-sm:h-30 important-h-44"
											style="background-color:#FA7402;"
											style2=""
											title="Често губи вещи"
											text="Губи предмети, необходими за ежедневието – играчки, училищни пособия, дрехи и други"
											img="/assets/HADV/хиперактивно-дете-често-губи-вещи.jpg"
											alt=""
										/>
									</ContainerSlider>
								</div>

								<div class="hidden xl:flex mx-auto gap-4 w-full">
									<div class="w-1/4">
										<ContainerBox
											class2="important-xl:h-55 important-lg:h-45 important-md:h-50 important-sm:h-30 important-h-48"
											style="background-color:#FA7402;"
											title="Бърза загуба на интерес"
											text="Започва дейност с ентусиазъм, но бързо губи фокус и интерес и не я довършва"
											img="/assets/HADV/загуба-интерес-хадв.webp"
											alt=""
										/>
									</div>
									<div class="w-1/4">
										<ContainerBox
											class2="important-xl:h-55 important-lg:h-45 important-md:h-50 important-sm:h-30 important-h-48"
											style="background-color:#FA7402;"
											style2=""
											title="Трудности със следване на инструкции"
											text="Затруднява се с организиране на задачите и спазване на ред или последователност"
											img="/assets/HADV/разстройство-поведението-хиперкинетични-прояви-негативизъм.webp"
											alt=""
										/>
									</div>
									<div class="w-1/4">
										<ContainerBox
											class2="important-xl:h-55 important-lg:h-45 important-md:h-50 important-sm:h-30 important-h-48"
											style="background-color:#FA7402;"
											style2=""
											title="Грешки по невнимание"
											text="Допуска чести пропуски и грешки, дори при познати и лесни задачи"
											img="/assets/HADV/хиперкинетично-разстройство-поведението.webp"
											alt=""
										/>
									</div>
									<div class="w-1/4">
										<ContainerBox
											class2="important-xl:h-55 important-lg:h-45 important-md:h-50 important-sm:h-30 important-h-48"
											style="background-color:#FA7402;"
											style2=""
											title="Често губи вещи"
											text="Губи предмети, необходими за ежедневието – играчки, училищни пособия, дрехи и други"
											img="/assets/HADV/хиперактивно-дете-често-губи-вещи.jpg"
											alt=""
										/>
									</div>
								</div>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<DoodleDecor variant="pink" />

				<div class="pb-50px xl:px-30">
					<div class="">
						<AnimatedComponent>
							<div class="md:px-5">
								<h4 class="font-600 text-left pb-2">Симптоми на хиперактивност</h4>
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
											style="background-color:#742C8F;"
											title="Постоянно движение"
											text="Тича, катери се или се движи непрекъснато, дори на неподходящи места"
											img="/assets/HADV/синдром-хиперактивност-дефицит-внимание-adhd.webp"
											alt=""
										/>
										<ContainerBox
											style="background-color:#742C8F;"
											title="Прекомерно говорене"
											text="Говори без да спира, често прекъсва другите и не изчаква реда си"
											img="/assets/HADV/разстройство-личността-поведението.webp"
											alt=""
										/>
										<ContainerBox
											style="background-color:#742C8F;"
											title="Трудно стои на едно място"
											text="Изпитва затруднение да остане спокойно в седнало положение – например по време на хранене"
											img="/assets/HADV/хиперактивност-деца-хадв.webp"
											alt=""
										/>
										<ContainerBox
											style="background-color:#742C8F;"
											title="Бурно изразяване на емоции"
											text="Реагира с прекомерен гняв, радост или разочарование, често без видима причина"
											img="/assets/HADV/опозиционно-предизвикателно-разстройство.webp"
											alt=""
										/>
									</ContainerSlider>
								</div>

								<div class="hidden xl:flex mx-auto gap-4 w-full">
									<div class="w-1/4">
										<ContainerBox
											style="background-color:#742C8F;"
											title="Постоянно движение"
											text="Тича, катери се или се движи непрекъснато, дори на неподходящи места"
											img="/assets/HADV/синдром-хиперактивност-дефицит-внимание-adhd.webp"
											alt=""
										/>
									</div>
									<div class="w-1/4">
										<ContainerBox
											style="background-color:#742C8F;"
											title="Прекомерно говорене"
											text="Говори без да спира, често прекъсва другите и не изчаква реда си"
											img="/assets/HADV/разстройство-личността-поведението.webp"
											alt=""
										/>
									</div>
									<div class="w-1/4">
										<ContainerBox
											style="background-color:#742C8F;"
											title="Трудно стои на едно място"
											text="Изпитва затруднение да остане спокойно в седнало положение – например по време на хранене"
											img="/assets/HADV/хиперактивност-деца-хадв.webp"
											alt=""
										/>
									</div>
									<div class="w-1/4">
										<ContainerBox
											style="background-color:#742C8F;"
											title="Бурно изразяване на емоции"
											text="Реагира с прекомерен гняв, радост или разочарование, често без видима причина"
											img="/assets/HADV/опозиционно-предизвикателно-разстройство.webp"
											alt=""
										/>
									</div>
								</div>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<DoodleDecor variant="blue2" />

				<AnimatedComponent class="max-w-800px mx-auto">
					<p>Наличието на тези признаци може да бъде индикация, но не е категорично доказателство за синдром на хиперактивност и дефицит на вниманието ADHD. За оценка на актуалното състояние се използва комплексен подход който включва диагностика на ADHD и разграничаване от състояния като разстройство в поведението с хиперкинетични прояви на негативизъм или несоциализирано разстройство на поведението.</p>
					<p class="font-[MYRIADPRO-Semibold] pb-4">В случай, че забележите някои от симптомите на хиперактивност с дефицит на внимание да се проявяват при Вашето дете Ви препоръчваме да се консултирате със специалист.</p>
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand mx-auto px-6 md:px-10 py-2 md:py-4 md:mt-10">
						<div class="flex justify-center items-center gap-4">
							<img src="/assets/exclamation-mark-icon.webp" class="w-10 h-10" />
							<p class="font-[MYRIADPRO-Semibold] c-paper uppercase font-size-17px lg:font-size-21px">80-90% от мозъка на детето се развива до 7-годишна възраст</p>
						</div>
						<p class="font-size-15px lg:font-size-18px c-paper mt-2">Ето защо колкото по-рано бъде започната терапия на ADHD при деца, толкова по-голяма е възможността за видимо подобрение на актуалното състояние и напредване в развитието.</p>
					</div>
				</AnimatedComponent>
				{/* <AnimatedComponent class="mt-10 mx-auto">
					<VideoPlayer
						youtubeId="PUYw2e-X-Vw"
						thumbnail="/assets/Fulfilling-Vows.webp"
					/>
				</AnimatedComponent> */}
			</section>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px">
				<AnimatedComponent>
					<H3Pink title="Какво следва, ако не предприемем действие" />
					<div class="flex flex-col lg:flex-row justify-center gap-10 xl:gap-0">
						<ServiceContaner
							img="/assets/HADV/управление-симптомите-adhd.webp"
							alt="test"
							title="Трудности в образованието"
							description="Децата с разстройство с дефицит на вниманието и хиперактивност често изпитват затруднения в училище, поради невнимание, липса на концентрация, импулсивност и неспособност да завършват задачи. Това може да доведе до липса на мотивация, пропуски в знанията и лоши академични резултати."
						/>
						<ServiceContaner
							img="/assets/HADV/несоциализирано-разстройство-поведението.webp"
							alt="test"
							title="Депресия и ниско самочувствие"
							description="При децата с ХАДВ обикновено се наблюдават повишени нива на стрес и тревожност вследствие на невниманието и липсата на контрол над импулсите, произвеждани от тялото им. В дългосрочен план това може да доведе до понижена самооценка, както и до симптоми на разстройство на личността и поведението."
						/>
						<ServiceContaner
							img="/assets/HADV/рисково-поведение-adhd.webp"
							alt="test"
							title="Рисково поведение"
							description="При липса на контрол и терапевтична подкрепа, импулсивността може да се прояви в опасно поведение – като бързо изтичане на улицата, също така агресивност или склонност към бунт. Това създава рискове както за детето, така и за околните. Нелекуваните случаи могат да преминат в хиперкинетично разстройство на поведението или дори в несоциализирано разстройство на поведението."
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
									Правилно разпознаване
								</>
							}
							title="разпознаване"
							bgImage="/assets/HADV/диагностика-adhd.webp"
							bgSize="200%"
							bgPosition="right 0% top 70%"
						/>
					</div>
				</AnimatedComponent>
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2">
						<img src="/assets/HADV/диагностика-adhd.webp" alt="" class="w-full h-auto object-cover rounded shadow" />
					</AnimatedComponent>

					<div class="md:hidden block pt-15">
						<DoodleDecor variant="purple" />
					</div>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<H3Pink title="Как да разберем дали диагнозата “разстройство с дефицит на вниманието и хиперактивност” е правилна" />
						<AnimatedComponent>
							<BackgroundIcons />
							<p class="font-[MYRIADPRO-Semibold] mt--5">
								Наличието на някои от горепосочените признаци може да бъде индикация, но не е категорично доказателство за синдром на хиперактивност с дефицит на вниманието ADHD.
							</p>
							<p>
								<span class="font-[MYRIADPRO-Semibold]">Диагнозата „разстройство с хиперактивност и дефицит на вниманието“ (ХАДВ)</span> изисква професионално мнение от специалисти като психолог и невролог. Процесът по диагностика на ADHD включва няколко стъпки. Първо е необходимо да се интервюират родителите за техните наблюдения над поведението и потенциални фактори за актуалното състояние като усложнения при раждането или генетична предразположеност. След това се провежда психологическа консултация, на която специалистите използват различни методи и тестове, за да оценят когнитивните функции, вниманието и импулсивността на детето.
							</p>
							<p>
								Правилната оценка изисква добро разбиране на индивидуалните нужди, поведенчески модели и силните страни на детето. Ако сте посещавали различни експерти и всички стигат до сходни заключения, това е знак за потвърждение на актуалното състояние.
							</p>
							<p class="pb-5">
								Психиатър с опит в лечението на опозиционно предизвикателно разстройство и терапия на ADHD при деца може да насочи родителите към най-подходящите методи за подкрепа,  включително управление на симптомите на ADHD.
							</p>
							<PuzzleButton />
						</AnimatedComponent>
					</div>
				</div>
			</section >

			<DoodleDecor variant="purple" />

			<section class="relative xl:px-30 mx-20px">
				<H3Blue title="Първична оценка при съмнение за деца с разстройство с дефицит на вниманието и хиперактивност" />
				<div class="flex flex-col justify-center items-center mx-auto px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:pb-10 md:pt-4 py-5 md:bg-gradient-to-t lg:from-paper lg:to-paper bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
						<div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
							<div class="xl:w-1/2 w-full md:pl-7">
								<p class="c-paper lg:c-paper-inv mb-1">
									В Sense Center предлагаме <strong class="font-[MYRIADPRO-Bold]">първична оценка</strong> за деца със съмнение за разстройство с дефицит на вниманието и хиперактивност.
								</p>
								<p class="c-paper lg:c-paper-inv">
									По време на консултацията се извършва цялостно наблюдение върху поведението и актуалното състояние на детето.
								</p>
								<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Наблюдение на дете с нарушения в развитието" class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv mb-1">
									Оценяват се нивото на концентрация, способността за организиране и изпълнение на задачи, както и проявите на импулсивност и хиперактивност.
								</p>
								<p class="c-paper lg:c-paper-inv">
									Паралелно с това специалистите провеждат интервю с родителите, като се вземат предвид техните наблюдения от ежедневието и училищната среда на детето.
								</p>
								<div class="pt-8 flex md:flex-row flex-col justify-center items-center">
									<PuzzleButton />
								</div>
							</div>
							<div class="xl:w-1/2 w-full">
								<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Семейство на дете с нарушения в развитието" class="mt-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv italic font-300 mt-2 leading-5 lg:leading-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
									Препоръчително е да донесете всички налични медицински документи, които биха помогнали за по-точна преценка на актуалното състояние.
								</p>
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="relative xl:px-30 mx-20px">
				<div class="gap-12 pb-20 pt-10 xl:px-30">
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
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Някак си още с първото идване, на обследването на детето, те създадоха едно доверие в мен. И съм, мога да кажа, много доволна!”"
										name="Калина Митрева"
										date="майка на Филип, 5 г., съмнение за Аутизъм"
									/>
									<ReviewersImageReview
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/2.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Винаги знам, че винаги мога да разчитам на тях. Те са доста отзивчиви, откликват веднага на нашите въпроси. ” "
										name="Станимира Миленова"
										date="майка на Самуил, 6 г. разстройство на речта"
									/>
									<ReviewersImageReview
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/3.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Тук ще срещнете подкрепа, тук ще срещнете разбиране. Децата ще живеят един по-хубав живот.”"
										name="Александър Соклев"
										date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
									/>
								</ReviewSlider>
							</div>

							<div class="hidden xl:grid mx-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch">
								<ReviewersImageReview
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Някак си още с първото идване, на обследването на детето, те създадоха едно доверие в мен. И съм, мога да кажа, много доволна!”"
									name="Калина Митрева"
									date="майка на Филип, 5 г., съмнение за Аутизъм"
								/>
								<ReviewersImageReview
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/2.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Винаги знам, че винаги мога да разчитам на тях. Те са доста отзивчиви, откликват веднага на нашите въпроси. ” "
									name="Станимира Миленова"
									date="майка на Самуил, 6 г. разстройство на речта"
								/>
								<ReviewersImageReview
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/3.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Тук ще срещнете подкрепа, тук ще срещнете разбиране. Децата ще живеят един по-хубав живот.”"
									name="Александър Соклев"
									date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
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
					<AnimatedComponent class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<div class="">
								<img class="w-full h-full" src="/assets/HADV/изграждане-на-дневен-режим.webp" alt="" />
							</div>
							<div class="w-full py-20px text-center">
								<div class="flex flex-col gap-1">
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Създайте ясна, предвидима структура на деня
									</h4>
									<p class="text-left mt-2">
										Децата с разстройство с дефицит на вниманието и хиперактивност се справят по-добре, когато знаят какво да очакват, използвайте визуални графици, разделяйте задачите на малки, изпълними стъпки и насърчавайте кратки периоди на фокусирана работа, последвани от активна почивка.
									</p>
									<div class="my-5">
										<img class="w-full h-full" src="/assets/HADV/търсене-надеждна-информация-достоверни-източници.webp" alt="" />
									</div>
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Потърсете надеждна информация от достоверни източници
									</h4>
									<p class="text-left mt-2">
										Избягвайте форумите и непроверените съвети. Вместо това, четете материали от утвърдени терапевтични центрове, медицински платформи и организации, които работят с деца с ХАДВ. Знанието ще Ви даде спокойствие и по-ясна перспектива за управление на симптомите на ADHD.
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
					bgImage="/assets/HADV/методи-терапия-adhd-деца.webp"
					bgSize="200%"
					bgPosition="right 0% top 60%"
				/>

				<section class="max-w-1500px md:pt-10 xl:mx-auto md:mx-20px mx--20px flex md:flex-row flex-col justify-center items-center md:gap-8">
					<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
						<AnimatedComponent>
							<div class="w-full h-full">
								<div class="bg-paper mx-auto">
									<div class="">
										<div class="mx--20px">
											<img src="/assets/HADV/методи-терапия-adhd-деца.webp" alt="cc" class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
										</div>
									</div>
								</div>
							</div>
						</AnimatedComponent>
					</section>

					<section class="md:w-1/2 pt-25 md:pt-0">
						<AnimatedComponent class="w-full my-auto flex flex-col justify-center items-center w-full md:pr-0 px-3 md:px-3 mt--10 z-10">
							<H3Blue title="Какво можем да очакваме" />
							<div class="relative mt--10">
								<BackgroundIcons />
								<p class="text-left">
									Съществуват ефективни терапевтични подходи, които при навременно стартиране могат значително да подобрят поведението и концентрацията на детето.
								</p>
								<p class="text-left mt-2">
									С подкрепата на специалисти и индивидуален терапевтичен план, децата с разстройство с дефицит на вниманието и хиперактивност могат да развият своите умения, което води до по-успешно справяне в училищната и социалната среда и повишено самочувствие.
								</p>
								<p class="text-left mt-2">
									Терапията на ADHD при деца е насочена към овладяване на импулсивността, подобряване на вниманието, управление на емоциите и изграждане на стратегии за планиране, организация и самоконтрол.
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
						<p class="md:mb-5 mb-2 mt-0 c-gray-700 leading-5 font-size-14px font-400 italic tracking" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.3px; ">Препоръчват се от 8 до 24 сесии седмично за оптимални резултати</p>
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

								]}
							>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/детски-психолог.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Детски психолог"
									description="Подкрепя развитието на умения за организиране, планиране и решаване на проблеми, както и за емоционална саморегулация и адаптация към различни ситуации."
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/психомоторика.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Психомоторика"
									description="Подобрява контрола при ходене, бягане и скачане, както и координацията на ръцете и пръстите за по-прецизно писане и рисуване."
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/звукова-стимулация.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Звукова стимулация"
									description="Тя подпомага сензорната и слуховата обработка, намалява тревожността и хиперактивността и стимулира езиковото развитие."
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Обучение за концентрация и внимание"
									description="Помага на детето с фокусирането и запаметяването, като го учи да задържа вниманието си по-дълго и да следва инструкции."
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Когнитивно-поведенческа терапия за деца"
									description="Помага на децата да разберат и променят негативните си мисли и поведение, за да се справят по-добре с емоциите и отношенията с другите."
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Консултация с хомеопат за деца"
									description="Подпомага цялостното здраве и емоционално равновесие на детето, като подкрепя организма по естествен начин и допринася за по-добро ежедневно функциониране."
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Психологически групи за деца"
									description="Подкрепят децата в развитието на емоционална регулация, социални умения и увереност, като им помагат да изразяват чувствата си и да общуват по-лесно."
								/>
							</ReviewSlider2>
						</div>
					</div>
				</div>

				<DoodleDecor variant="pink" />

				<div class="pt-10 xl:px-30 mx-20px mx-auto">
					<H3Pink title="Какъв е процесът на работа" />
					<WorkProcess />
				</div>

				<DoodleDecor variant="purple" />

				<div class="xl:px-30 md:mx-20px mx-auto">
					<H3Blue title="Резултати от терапията" />
					<div class="w-full sm:w-300px md:w-700px flex flex-col max-w-full relative mx-auto">
						<AnimatedComponent class="flex flex-col gap-1">
							<p class="text-left mt-2">
								Професионалната терапия води до видим напредък при деца с ХАДВ. С постоянство и индивидуален подход могат да се постигнат значителни подобрения в концентрацията, самоконтрола, емоционалната регулация и учебната мотивация.
							</p>
							<div class="my-5">
								<GallerySlider2
									imgs={[
										{ src: "/assets/HADV/резултат-терапия-дете-хадв.webp", alt: "" },
										{ src: "/assets/HADV/резултат-поведенческа терапия-деца-хадв.webp", alt: "" },
										{ src: "/assets/HADV/резултат-поведенческа терапия-деца-ADHD.webp", alt: "" },
									]}
								/>
							</div>
							<p class="text-left mt-2">
								Терапевтите използват доказани методики и индивидуално изготвени програми, които развиват умения за фокусиране, следване на инструкции, организиране на задачите и управление на импулсивното поведение. Чрез игрови и структурирани занимания децата се учат да планират действията си и да контролират емоциите си.
							</p>
							<p class="text-left mt-2 mb-12">
								С времето децата с разстройство с дефицит на вниманието и хиперактивност  започват да се справят по-успешно в училищната среда, да взаимодействат по-лесно с връстници и възрастни, както и да повишават самочувствието си.
							</p>
							<PuzzleButton />
						</AnimatedComponent>
					</div>
				</div>

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
									img="/https://lh3.googleusercontent.com/a/ACg8ocIZRpc48TQsa_KBvFTmJvD-hLjEWf6LX9fXZ4p1hajsvQRcxg=w72-h72-p-rp-mo-br100"
									reviewText={
										<>
											Изключително сме благодарни на целият екип от професионалисти в Sense Center!<br />
											Невероятно мили, сърдечни, квалифицирани млади специалисти, които видимо обичат работата си!<br />
											Напредъкът при Теди е осезаем, продължаваме смело напред и сме сигурни, че ще постигнем още положителни резултати!!! ❤️❤️❤️

										</>
									}
									name="Karina Stoqnova"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/xJ4LJziRro312cev6"
									class="important-h-390px important-sm:h-400px important-lg:h-400px important-xl:h-400px"
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
									hrefGoogleReview="https://maps.app.goo.gl/prUJexPosVAPrrUA8"
									class="important-h-390px important-sm:h-400px important-lg:h-400px important-xl:h-400px"
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
									hrefGoogleReview="https://maps.app.goo.gl/KficMzhYBcT3Wttq6"
									class="important-h-390px important-sm:h-400px important-lg:h-400px important-xl:h-400px"
								/>
								<GoogleStarReview
									img="https://lh3.googleusercontent.com/a/ACg8ocJVqa43Sua1jSX47JdICudARTFAg3NmP5f6VC0kHnykoTvTAA=w72-h72-p-rp-mo-ba2-br100"
									reviewText={
										<>
											Отнасят се изключително професионално и внимателно, както към нас, така и към синът ни. За момента имаме много голям напредък, определено ще продължим да използваме услугите им.
										</>
									}
									name="Ivailo Zhekov"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/GWFYtoAhKN6V58Aj9"
									class="important-h-390px important-sm:h-400px important-lg:h-400px important-xl:h-400px"
								/>
								<GoogleStarReview
									img="https://lh3.googleusercontent.com/a/ACg8ocLLzynuWWgBOo4FmH8i4k62ibKz8EOv30MXRYEA20n7JMCbIA=w72-h72-p-rp-mo-br100"
									reviewText={
										<>
											Много сме доволни!<br />
											Детето ни посещава центъра с голямо желание,и това показва с какъв професионализъм се работи с децата.
										</>
									}
									name="Viktoria Simeonova"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/KUyUvA7qWd4VPWdUA"
									class="important-h-390px important-sm:h-400px important-lg:h-400px important-xl:h-400px"
								/>
							</ReviewSlider>
						</AnimatedComponent>
					</div>
				</div>

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
									style="background-color:#742C8F;"
									puzzleclass="c-brand w-6 mr-2"
									img="/assets/HADV/домашна-терапия-adhd-при-деца.webp"
									alt=""
									title="Използвайте напомнящи бележки и съобщения"
									desc="Те биха помогнали при разсейване и евентуално забравяне на някоя важна задача."
									class="important-h-520px important-sm:h-670px important-md:h-550px important-lg:h-560px"
								/>
								<PuzzleIconReview
									style="background-color:#E11172;"
									puzzleclass="c-brand-purple w-6 mr-2"
									img="/assets/HADV/съвместни-дейности-дете-хадв.webp"
									alt=""
									title="Създайте график съвместно с детето за ежедневните дейности"
									desc="Това би подобрило организацията и дисциплината, както и ще улесни преминаването от една задача към друга."
									class="important-h-520px important-sm:h-670px important-md:h-550px important-lg:h-560px"
								/>
								<PuzzleIconReview
									style="background-color:#088F9D;"
									puzzleclass="c-brand-orange w-6 mr-2"
									img="/assets/HADV/лечение-на-adhd-при-деца.webp"
									alt=""
									title="Давайте кратки и ясни инструкции"
									desc="Избягвайте дълги обяснения и използвайте визуални средства за представяне на информация."
									class="important-h-520px important-sm:h-670px important-md:h-550px important-lg:h-560px"
								/>
								<PuzzleIconReview
									style="background-color:#FA7402;"
									puzzleclass="c-brand-blue w-6 mr-2"
									img="/assets/HADV/хиперкинетично-разстройство-поведението-лечение.webp"
									alt=""
									title="Дайте възможност на детето да изразходва натрупаната енергия"
									desc="Чести паузи между дейностите биха помогнали като постепенно се опитвате да увеличавате продължителността на работния процес и да намалявате времето за почивка."
									class="important-h-520px important-sm:h-670px important-md:h-550px important-lg:h-560px"
								/>
							</ReviewSlider>
						</AnimatedComponent>
					</div>
				</div>

				<DoodleDecor variant="blue2" />

				<div class="gap-12 pb-8 md:pb-20 xl:px-30 mx-20px mx-auto">
					<H3Pink title="Необходими ресурси" />
					<div class="relative gap-12 xl:px-30">
						<BackgroundIcons />
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
									<p class="font-300 c-paper md:leading-7 leading-6.3 font-size-16px font-[MYRIADPRO-Light]">Научете повече за същността на разстройството, за да можете да разберете по-добре нуждите на детето си. Запознайте се с особеностите на ХАДВ и подходящите методи за подкрепа на деца с това състояние. Обърнете внимание на възможните съпътстващи състояния като разстройство в поведението с хиперкинетични прояви на негативизъм.</p>
								</div>
								<div class="bg-brand-blue b-rd-12px px-7 py-5">
									<p class="font-[MYRIADPRO-Semibold] c-paper font-size-20px">Търпение и последователност</p>
									<p class="font-300 c-paper md:leading-7 leading-6.3 font-size-16px font-[MYRIADPRO-Light]">Работата с деца с разстройство с дефицит на вниманието и хиперактивност изисква внимание и последователност в практикуването на разнообразни занимания. Бъдете търпеливи и готови да адаптирате подхода спрямо променящите се нужди на детето.</p>
								</div>
								<div class="bg-brand-orange b-rd-12px px-7 py-5">
									<p class="font-[MYRIADPRO-Semibold] c-paper font-size-20px">Инвестиция</p>
									<p class="font-300 c-paper md:leading-7 leading-6.3 font-size-16px font-[MYRIADPRO-Light]">Специализирани материали като визуални графици, учебни помагала и интерактивни приложения могат да помогнат на детето да развива своите умения.</p>
								</div>
							</ReviewSlider2>
						</div>
						<div class="hidden md:flex gap-3 xl:gap-5 px-1 mx-auto">
							<div class="bg-brand b-rd-12px px-7 py-5 w-1/3">
								<p class="font-[MYRIADPRO-Bold] c-paper font-size-22px">Знания и умения</p>
								<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-17px">Научете повече за същността на разстройството, за да можете да разберете по-добре нуждите на детето си. Запознайте се с особеностите на ХАДВ и подходящите методи за подкрепа на деца с това състояние. Обърнете внимание на възможните съпътстващи състояния като разстройство в поведението с хиперкинетични прояви на негативизъм.</p>
							</div>
							<div class="bg-brand-blue b-rd-12px px-7 py-5 w-1/3">
								<p class="font-[MYRIADPRO-Bold] c-paper font-size-22px">Търпение и последователност</p>
								<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-17px">Работата с деца с разстройство с дефицит на вниманието и хиперактивност изисква внимание и последователност в практикуването на разнообразни занимания. Бъдете търпеливи и готови да адаптирате подхода спрямо променящите се нужди на детето.</p>
							</div>
							<div class="bg-brand-orange b-rd-12px px-7 py-5 w-1/3">
								<p class="font-[MYRIADPRO-Bold] c-paper font-size-22px">Инвестиция</p>
								<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-17px">Специализирани материали като визуални графици, учебни помагала и интерактивни приложения могат да помогнат на детето да развива своите умения.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="relative">
					<BackgroundIcons />
					<div class="gap-12 pb-0 pt-50px xl:px-30 mx-20px mx-auto">
						<H3Blue title="Резултати от терапията в домашни условия" />
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start">
								<p class="mt-0">Работата с дете с ADHD у дома може да подобри уменията му за справяне в ежедневието, комуникацията и социалните му взаимоотношения. Прилагането на утвърдени подходи и стратегии от родителите със сигурност е крачка във вярната посока. Въпреки че приложението на подходите може да бъде полезно, те не са универсално решение за всички деца с разстройство с дефицит на вниманието и хиперактивност. Ако симптомите на детето Ви продължават да създават трудности в ежедневието му, консултирайте се със специалист по лечение на ADHD при деца.</p>
							</div>
						</AnimatedComponent>
					</div>

					<DoodleDecor variant="pink" />

					<AnimatedComponent class="xl:px-30 mx-20px">
						<H3Pink title="Какво можем да очакваме" />
					</AnimatedComponent>

					<section class="mb-70px max-w-1500px xl:px-20px mx-auto">
						<div class="xl:px-30">
							<div class="">
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
												Уютно и вдъхновяващо място!<br />
												Sense Center е перфектното място за децата ми! Персоналът е изключително внимателен и ангажиран, а програмите са едновременно забавни и образователни. Винаги си тръгваме с усмивка и желание да се върнем отново!
											</>}
											name="Viktoriya Nikolova"
											hrefGoogleReview="https://maps.app.goo.gl/z5h7wjaaxazyoB479"
											class="important-h-450px important-sm:h-350px important-sm:h-200px important-md:h-430px important-lg:h-430px important-xl:h-520px"
										/>
										<StarReview
											reviewText={<>
												Детето ми посещава центъра от месец и половина! Важното за мен е, че той ходи с желание там и намира приятели! Ние сме в началото на нашия път в Sense център, но имам огромно доверие на екипа и вярвам, че ще постигнем заедно най-доброто за нашето дете! Препоръчвам центъра, това е едно добро място за нашите деца в което могат да се учат, играят и да се чувстват спокойни и обичани!
											</>}
											name="Stanimira Milenova"
											hrefGoogleReview="https://maps.app.goo.gl/MZrttCtS4MRmFGPX8"
											class="important-h-450px important-sm:h-350px important-sm:h-200px important-md:h-430px important-lg:h-430px important-xl:h-520px"
										/>
										<StarReview
											reviewText={<>
												Искам да изкажа огромната си благодарност на терапевтите в Сенс Център. Те са професионалисти с отношение както към децата, така и към родителите. Препоръчвам не само за деца с различни дефицити, но и за деца в норма. Децата имат какво да получат и да надградят в този Център. Оценките им са точни и програмата им е методична, което дава страхотни резултати, особено за деца в аутистичния спектър...

											</>}
											name="Kalina Ivanova"
											hrefGoogleReview="https://maps.app.goo.gl/4TXB8ykbsV9hqFMw7"
											class="important-h-450px important-sm:h-350px important-sm:h-200px important-md:h-430px important-lg:h-430px important-xl:h-520px"
										/>
										<StarReview
											reviewText={<>
												Възхитен съм от професионализма на всички терапевти! Искам да изкажа огромни благодарности към г-жа Йорданова, която създаде 6-месечен терапевтичен план, специално предназначен за специфичните нужди на нашето дете. Цените определено оправдават качеството на услугата!
											</>}
											name="Martin Ivanov"
											hrefGoogleReview="https://maps.app.goo.gl/Trd6cP7wrDdCyXTq9"
											class="important-h-450px important-sm:h-350px important-sm:h-200px important-md:h-430px important-lg:h-430px important-xl:h-520px"
										/>
										<StarReview
											reviewText={<>
												Препоръчвам на всички родители, които имат притеснения да отидат. Безплатната консултация беше много полезна, продължи достатъчно време, за да ни зададат всички въпроси и обясненията бяха много полезни - без бързане, в спокойна атмосфера. Взеха малкия за половин час и като се върна, беше щастлив и усмихнат. Останахме с впечатление за висок професионализъм и невероятно отношение към децата...
											</>}
											name="Stefan Yordanov"
											hrefGoogleReview="https://maps.app.goo.gl/RZxjcfbus3gU8dFo6"
											class="important-h-450px important-sm:h-350px important-sm:h-200px important-md:h-430px important-lg:h-430px important-xl:h-520px"
										/>
									</ReviewSlider>
								</AnimatedComponent>
							</div>
						</div>
					</section>
				</div>
			</section>
		</>
	);
}
