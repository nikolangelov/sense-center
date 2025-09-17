import "solid-slider/slider.css";
import { AuthorContainer, GoogleStarReview, PuzzleIconReview, ReviewersImageReview, ReviewSlider, ReviewSlider2, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink } from '../../components/H2WithImage';
import { ServiceContaner } from '../../components/ServiceContainer';
import { ContainerBox, ContainerSlider } from "../../components/ContainerSlider";
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
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
					bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/disleksia/деца-дислексия-мобилно.webp)] 
					md:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.4)),url(/assets/disleksia/деце-дислексия.webp)] 
					bg-[position:right_40%_bottom_60%]
					md:bg-[position:right_30%_bottom_70%] 
					bg-no-repeat 
					bg-cover 
					[mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)] 
					[-webkit-mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)]
					"
					role="img"
					aria-label="Деце с дислексия участва в логопедична терапия."
				></div>
			</div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="flex flex-col justify-center items-center left-0 right-0 px-3 my-0 mx-auto absolute top-71% lg-top-75% text-center w-full" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="c-paper mb-2 md:mb-7 md:px-0 px-5">Деца с дислексия</h1>
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
					maintitle="Какво е дислексия"
					title="дислексия"
					bgImage="/assets/disleksia/обучение-деца-дислексия.webp"
					bgSize="400%"
					bgPosition="right 50% top 70%"
				/>
			</div>

			<section class="max-w-1500px md:pt-10 xl:mx-auto mx-20px flex md:flex-row flex-col justify-center items-center md:gap-8">
				<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
					<AnimatedComponent>
						<div class="w-full h-full">
							<div class="bg-paper mx-auto">
								<div class="">
									<div class="mx--20px">
										<img src="/assets/disleksia/обучение-деца-дислексия.webp" alt="Обучение на деца с дислексия в детски сенс център." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
									</div>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</section>

				<section class="md:w-1/2">
					<AnimatedComponent class="w-full md:px-3 my-auto">
						<p class="mt-10 md:mt-0">
							Дислексията е специфично нарушение, което засяга уменията за четене и писане и оказва влияние върху уменията за учене. Децата с дислексия често изпитват затруднения при разбирането на текстове, имат проблеми с четенето и писането, което може да повлияе негативно на самочувствието им и на мотивацията за учене.
						</p>
						<p>
							Важно е да се подчертае, че дислексията не е свързана с нивото на интелигентност и не е резултат от лошо обучение или липса на мотивация за учене.
						</p>
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
							<h4 class="font-600 text-left pb-2">Най-често срещани симптоми на дислексия</h4>
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
										class2="important-h-52"
										style="background-color:#FA7402;"
										title="Трудности при разпознаване на думи"
										text="Детето изпитва затруднение дори с често срещани и познати думи, независимо колко пъти ги е виждало"
										img="/assets/disleksia/работа-деца-дислексия.webp"
										alt="Работа с деца с дислексия при трудности с разпознаването на думи."
									/>
									<ContainerBox
										class2="important-h-52"
										style="background-color:#FA7402;"
										style2=""
										title="Разместване на буквите и звуковете"
										text="Често разменя буквите при четене или писане, което води до объркване и грешки - често наблюдавано при всички видове дислексия"
										img="/assets/disleksia/дислексия-симптоми.webp"
										alt="Симптоми на дете - размества буквите и звуковете."
									/>
									<ContainerBox
										class2="important-h-52"
										style="background-color:#FA7402;"
										style2=""
										title="Затруднения с паметта"
										text="Трудно запомняне на последователности от числа, букви или инструкции"
										img="/assets/disleksia/причини-дислексия-затруднения-паметта.webp"
										alt="Причини за дислексия и затруднения с паметта."
									/>
									<ContainerBox
										class2="important-h-52"
										style="background-color:#FA7402;"
										style2=""
										title="Проблеми с концентрацията и вниманието"
										text="Лесно разсейване, затруднения при фокусиране върху задача, което допълнително затруднява обучението на деца с дислексия"
										img="/assets/disleksia/програма-дислексия-проблем-концентрация.webp"
										alt="Програма за дислексия при проблеми с концентрацията и вниманието."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/4">
									<ContainerBox
										class2="important-h-52"
										style="background-color:#FA7402;"
										title="Трудности при разпознаване на думи"
										text="Детето изпитва затруднение дори с често срещани и познати думи, независимо колко пъти ги е виждало"
										img="/assets/disleksia/работа-деца-дислексия.webp"
										alt="Работа с деца с дислексия при трудности с разпознаването на думи."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-h-52"
										style="background-color:#FA7402;"
										style2=""
										title="Разместване на буквите и звуковете"
										text="Често разменя буквите при четене или писане, което води до объркване и грешки - често наблюдавано при всички видове дислексия"
										img="/assets/disleksia/дислексия-симптоми.webp"
										alt="Симптоми на дете - размества буквите и звуковете."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-h-52"
										style="background-color:#FA7402;"
										style2=""
										title="Затруднения с паметта"
										text="Трудно запомняне на последователности от числа, букви или инструкции"
										img="/assets/disleksia/причини-дислексия-затруднения-паметта.webp"
										alt="Причини за дислексия и затруднения с паметта."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-h-52"
										style="background-color:#FA7402;"
										style2=""
										title="Проблеми с концентрацията и вниманието"
										text="Лесно разсейване, затруднения при фокусиране върху задача, което допълнително затруднява обучението на деца с дислексия"
										img="/assets/disleksia/програма-дислексия-проблем-концентрация.webp"
										alt="Програма за дислексия при проблеми с концентрацията и вниманието."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<AnimatedComponent class="xl:px-30">
					<p class="font-[MYRIADPRO-Semibold] pb-4">В случай, че забележите някои от симптомите на дислексия да се проявяват при Вашето дете Ви препоръчваме да се консултирате със специалист.</p>
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
					<div class="flex flex-col lg:flex-row justify-center gap-10 xl:gap-20">
						<ServiceContaner
							img="/assets/disleksia/трудности-училище-деца-дислексия.webp"
							alt="Трудности в училище при деца с дислексия."
							title="Трудности в училище"
							description="На първо място, липсата на професионална подкрепа ще задълбочи трудностите с четенето, писането и разбирането на текстове, което ще доведе до трайни трудности в училище за децата с дислексия и ще намали мотивацията за учене."
						/>
						<ServiceContaner
							img="/assets/disleksia/социална-изолация-деца-дислексия.webp"
							alt="Социална изолация при деца с дислексия."
							title="Социална изолация"
							description="Децата с дислексия често изпитват тревожност и ниска самооценка, тъй като не успяват да се справят наравно със своите връстници. Това може да доведе до отдръпване от социални ситуации, тревожност и ниска самооценка."
						/>
						<ServiceContaner
							img="/assets/disleksia/ограничени-възможности-деца-дислексия.webp"
							alt="Ограничени възможности при деца с дислексия."
							title="Ограничени възможности"
							description="В дългосрочен план, неотработена дислексия може да ограничи академичните и професионалните възможности на детето. Трудностите с четенето и писането могат да направят усвояването на нови знания и придобиването на важни умения по-трудни, което потенциално ограничава успеха в бъдеще."
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
							bgImage="/assets/disleksia/специалист-дислексия.webp"
							bgSize="200%"
							bgPosition="right 0% top 70%"
						/>
					</div>
				</AnimatedComponent>
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2">
						<img src="/assets/disleksia/специалист-дислексия.webp" alt="Правилно разпознаване от специалист по дислексия." class="w-full h-auto object-cover rounded shadow" />
					</AnimatedComponent>

					<div class="md:hidden block pt-10">
						<DoodleDecor variant="purple" />
					</div>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<H3Pink title="Как да разберем дали диагнозата “дислексия” е правилна" />
						<AnimatedComponent>
							<BackgroundIcons />
							<p>
								<span class="font-[MYRIADPRO-Semibold]">Наличието на някой от горепосочените признаци може да бъде индикация, но не е категорично доказателство за дислексия.</span> Установяването на състоянието се случва след 7-годишна възраст, когато детето започне училище. Изисква професионална оценка от специалисти като логопед и психолог, който провеждат тест за деца с дислексия. Често се извършват поредица от тестове, които оценяват уменията на детето за четене, писане, разбиране и слухово възприемане.
							</p>
							<p class="pb-5">
								Важно е дислексията да бъде открита навреме и да бъде приложено ефективно лечение за дислексия, за да се минимизират негативните ефекти и детето да развие своя пълен потенциал.
							</p>
							<PuzzleButton />
						</AnimatedComponent>
					</div>
				</div>
			</section >

			<DoodleDecor variant="purple" />

			<section class="relative md:pb-30 xl:px-30 mx-20px">
				<H3Blue title="Първоначална логопедична консултация при съмнение за дислексия" />

				<div class="flex flex-col justify-center items-center mx-auto px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:pb-10 md:pt-4 py-5 md:bg-gradient-to-t lg:from-paper lg:to-paper bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
						<div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
							<div class="xl:w-1/2 w-full md:pl-7">
								<p class="c-paper lg:c-paper-inv mb-1">
									В Sense Center предлагаме <strong class="font-[MYRIADPRO-Bold]">първоначална логопедична консултация</strong> за деца със съмнение за дислексия.
								</p>
								<p class="c-paper lg:c-paper-inv">
									По време на първоначалната логопедична оценка на деца с дислексия в Sense Center специалистът тест за дислексия, като наблюдава как детето чете и разбира текстове, както и уменията му за визуална и слухова преработка на информация.
								</p>
								<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Наблюдение на дете с нарушения в развитието" class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv mb-1">
									Оценяват се затрудненията при разпознаването на думи и структурирането на текст.
								</p>
								<p class="c-paper lg:c-paper-inv">
									Едновременно с това специалистите интервюират родителите за техните наблюдения и за училищното представяне на детето.
								</p>
								<p class="c-paper lg:c-paper-inv">
									Целта на този процес е да се разберат нуждите на детето и да се определят следващите стъпки за подкрепа по време на логопедичната работа с деца с дислексия.
								</p>
								<div class="pt-8 flex md:flex-row flex-col justify-center items-center">
									<PuzzleButton />
								</div>
							</div>
							<div class="xl:w-1/2 w-full">
								<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Семейство на дете с нарушения в развитието" class="mt-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv italic font-300 mt-2 leading-5 lg:leading-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
									Препоръчително е да донесете всички налични медицински документи (в случай на предишна проверка за дислексия), които могат да бъдат от полза за изясняване на актуалното състояние.
								</p>
							</div>
						</div>
					</AnimatedComponent>
				</div>

				<DoodleDecor variant="purple2" />

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
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/umstvena-izostanalost/родител-дете-умствено-изоставане-5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Изключително грижовни, изключително отдадени, хора, подбрани наистина с огромна любов към децата. Хора, които ги е грижа. Винаги, когато сме имали нужда от някаква подкрепа сме я срещали тук.”"
										name="Александър Соклев"
										date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
									/>
									<ReviewersImageReview
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/SOP/петя-дунчева.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Децата не се разбираха добре, постоянно се караха и бяха в страхотна конкуренция. След терапията децата се разбират много добре. Комуникират добре чувствата си, когато са ядосани, вместо да се карат и бият”"
										name="Петя Дунчева"
										date="майка на Луиза 6 г. и Максин 4 г., в норма, имат конфликт помежду си"
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
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/umstvena-izostanalost/родител-дете-умствено-изоставане-5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Изключително грижовни, изключително отдадени, хора, подбрани наистина с огромна любов към децата. Хора, които ги е грижа. Винаги, когато сме имали нужда от някаква подкрепа сме я срещали тук.”"
									name="Александър Соклев"
									date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
								/>
								<ReviewersImageReview
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/SOP/петя-дунчева.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Децата не се разбираха добре, постоянно се караха и бяха в страхотна конкуренция. След терапията децата се разбират много добре. Комуникират добре чувствата си, когато са ядосани, вместо да се карат и бият”"
									name="Петя Дунчева"
									date="майка на Луиза 6 г. и Максин 4 г., в норма, имат конфликт помежду си"
								/>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<DoodleDecor variant="pink2" />

				<div class="pt-10 mx-auto">
					<H3Blue title="Какво да правим, ако нямаме достъп до терапевт" />
					<AnimatedComponent class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<div class="">
								<img class="w-full h-full" src="/assets/disleksia/упражнения-деца-дислексия.webp" alt="Упражнения за деца с дислексия." />
							</div>
							<div class="w-full py-20px text-center">
								<div class="flex flex-col gap-1">
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Подкрепете детето у дома с практични упражнения
									</h4>
									<p class="text-left mt-2">
										Ако нямате възможност да посетите специалист, можете да подпомогнете детето чрез ежедневни упражнения за деца с дислексия, които развиват уменията за четене и писане. Игри със срички, рими и звукове, писане на кратки думи с помощта на шаблони или използване на цветни маркери за визуално разграничаване на букви и срички могат да бъдат особено полезни.
									</p>
									<div class="my-5">
										<img class="w-full h-full" src="/assets/disleksia/логопедична-работа-деца-дислексия.webp" alt="Логопедична работа с деца с дислексия." />
									</div>
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Използвайте адаптирани ресурси
									</h4>
									<p class="text-left mt-2">
										Потърсете онлайн материали, книги с увеличен шрифт и приложения и специално създадени програми за деца с дислексия специално за деца с дислексия. Аудиокнигите също са отличен начин за развитие на речниковия запас и разбиране на текст, дори когато четенето е затруднено.
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
					bgImage="/assets/disleksia/логопедична-работа-дете-дислексия.webp"
					bgSize="450%"
					bgPosition="right 0% top 40%"
				/>

				<section class="max-w-1500px md:pt-10 xl:mx-auto md:mx-20px mx--20px flex md:flex-row flex-col justify-center items-center md:gap-8">
					<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
						<AnimatedComponent>
							<div class="w-full h-full">
								<div class="bg-paper mx-auto">
									<div class="">
										<div class="mx--20px">
											<img src="/assets/disleksia/логопедична-работа-дете-дислексия.webp" alt="Логопедична работа с дете с дислексия." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
										</div>
									</div>
								</div>
							</div>
						</AnimatedComponent>
					</section>

					<section class="md:w-1/2 pt-25 md:pt-0">
						<AnimatedComponent class="w-full md:px-3 my-auto flex flex-col justify-center items-center w-full md:pl-7 md:pr-0 px-3 mt--10 z-10">
							<H3Blue title="Какво можем да очакваме" />
							<div class="relative mt--10">
								<BackgroundIcons />
								<p class="text-left">
									Дислексията не може да бъде напълно "излекувана", тъй като е дългосрочно състояние, но с вярната терапия и индивидуална програма за дислексия, децата могат значително да подобрят своите умения за четене, писане и разбиране.
								</p>
								<p class="text-left mt-2">
									С помощта на редовни упражнения за деца с дислексия, е възможно детето да се справи с предизвикателствата, които симптомите на дислексия създават, и да достигне пълния си потенциал в училище и извън него.
								</p>
							</div>
						</AnimatedComponent>
					</section>
				</section>

				<div class="hidden md:block">
					<DoodleDecor variant="blue" />
				</div>

				<div class="xl:px-30 mx-auto md:pt-0 pt-10">
					<H3Pink title="Някои от най-ефективните терапии" />
					<AnimatedComponent>
						<p class="md:mb-5 mb-2 mt-0 c-gray-700 leading-5 font-size-14px font-400 italic tracking md:pl-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.3px; ">Препоръчват се от 4 до 8 сесии седмично за оптимални резултати</p>
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

								]}
							>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/звукова-стимулация.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Звукова стимулация"
									description="Подпомага сензорната и слуховата обработка, намалява тревожността и хиперактивността и стимулира езиковото развитие"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.4)),url(/assets/home/детски-логопед.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Детски логопед"
									description="Логопедичната работа с деца с дислексия подобрява разбирането и изпълнението на команди, формирането на самостоятелни изречения и умението за водене на диалог"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Обучение за концентрация и внимание"
									description="Помага на детето с фокусирането и запаметяването, като го учи да задържа вниманието си по-дълго и да следва инструкции"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6)),url(/assets/sindrom-na-daun/детски-психолог.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Детски психолог"
									description="Подкрепя развитието на умения за организиране, планиране и решаване на проблеми, както и за емоционална саморегулация и адаптация към различни ситуации"
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

				<div class="xl:px-30 md:mx-20px md:mx-auto">
					<H3Blue title="Резултати от терапията" />
					<div class="w-full sm:w-300px md:w-700px flex flex-col max-w-full relative md:mx-auto">
						<AnimatedComponent class="flex flex-col gap-1">
							<p class="text-left mt-2">
								Специалистите по дислексия адаптират методите спрямо нуждите на детето, което води до по-бърз и устойчив напредък. След провеждане на професионално лечение на дислексия можете да очаквате значителни подобрения в уменията за четене, писане и разпознаване на звуци. Децата, преминали през индивидуална работа с деца с дислексия, често показват по-голяма увереност в учебния процес и намаляване на фрустрацията, свързана с четенето. В резултат детето може да развие по-добри езикови и комуникационни умения, както и да подобри цялостната си академична успеваемост.
							</p>
							<img class="mb-7" src="/assets/disleksia/резултат-терапия-дислексия.webp" alt="Резултати от терапията за дислексия." />
							<p class="text-left mt-2 mb-12">
								Успехът зависи от нивото на сътрудничество между семейството и терапевтите, както и от постоянството в работата.
							</p>
							<PuzzleButton />
						</AnimatedComponent>
					</div>
				</div>

				<div class="mt-20 gap-12 pb-8 md:pb-20 pt-50px xl:px-30 bg-brand-blue -mx-20px">
					<h3 class="c-brand-yellow px-5 md:px-0">Какво можем да очакваме</h3>
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
									hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
									class="important-h-370px important-sm:h-650px important-lg:h-470px important-xl:h-500px"
								/>
								<GoogleStarReview
									img="https://lh3.googleusercontent.com/a/ACg8ocJ-d8gjlkboTx4M2-40mGVmZBoc7Uv8NOPzfK28REcWfBCNUQ=w72-h72-p-rp-mo-br100"
									reviewText={
										<>
											Развитие и забавление в едно!<br />
											Моето дете обожава заниманията в Sense Center! Откакто посещаваме центъра, виждам значителен напредък в неговите социални и творчески умения. Програмите са разнообразни и поднесени по много достъпен начин.

										</>
									}
									name="Viktoria Lybomir"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/RwY6U2Y9XkxSC5CW7"
									class="important-h-370px important-sm:h-650px important-lg:h-470px important-xl:h-500px"
								/>
								<GoogleStarReview
									img="https://lh3.googleusercontent.com/a/ACg8ocKq8NAnmw7wca9LQEY15myV_1zWHkmnHtj6ulL1vg9KEPJ3cg=w36-h36-p-rp-mo-br100"
									reviewText={
										<>
											Синът ми посещава центъра от около 9 месеца.За този период има сериозен напредък в емоционално,социално и когнитивно развитие.Обогати речника и подобри значително говора,благодарение на екипа от професионалисти работещи с него.
										</>
									}
									name="Ина Светомирова"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/AT5iuZMxfYMZDh1x7"
									class="important-h-370px important-sm:h-650px important-lg:h-470px important-xl:h-500px"
								/>
								<GoogleStarReview
									img="https://lh3.googleusercontent.com/a/ACg8ocIw-JuOYAiJaGXkRnGPYeVywNQOjvr-kRYLBB8xDYTDdYq3Zw=w72-h72-p-rp-mo-br100"
									reviewText={
										<>
											Нашето детенце посещава детският център от 4 месеца, забелязваме напредък в комуникацията и очният контакт, детето излиза весел и игрив от всяка сесия
										</>
									}
									name="Botyo"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/b3CvBAczP6ikRgFs8"
									class="important-h-370px important-sm:h-650px important-lg:h-470px important-xl:h-500px"
								/>
								<GoogleStarReview
									img="https://lh3.googleusercontent.com/a/ACg8ocLmXj3tTeW2vUI_iPFFwA3VMR_feVxTQ1FjFaSNvlkK8cs2Xw=w72-h72-p-rp-mo-br100"
									reviewText={
										<>
											Ванеса посещава център Сенс от 3 месеца много съм доволна от начина на общуване и комуникационни умения от страна на специалистите много е важно с любов да се подхожда да се изгражда доверие между детето и специалиста прекрасни са...При Ванеса се наблюдава изключително желание за комуникация макар и с жестове също така и очен контакт
										</>
									}
									name="Милица Иванова"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/VS68Sztz1V69vJSB8"
									class="important-h-370px important-sm:h-650px important-lg:h-470px important-xl:h-500px"
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
							<div class="block xl:hidden">
								<ReviewSlider
									variant="dots3"
									reviews={[
										{ name: "1" },
										{ name: "2" },
										{ name: "3" },
									]}>
									<PuzzleIconReview
										style="background-color:#742C8F;"
										puzzleclass="c-brand w-6 mr-2"
										img="/assets/disleksia/дете-показва-силните-страни.webp"
										alt="Дете с дислексия показва силните си страни по време на терапия."
										title="Открийте силните страни на детето"
										desc="Децата с дислексия имат креативно мислене. Подкрепете ги чрез участие в творчески дейности, които развиват въображението и изграждат самоувереност чрез успехи."
									/>
									<PuzzleIconReview
										style="background-color:#E11172;"
										puzzleclass="c-brand-purple w-6 mr-2"
										img="/assets/disleksia/родител-помага-дете-структура.webp"
										alt="Дете с дислексия участва в дейност, която структурира ежедневието му."
										title="Структурирайте ежедневието му"
										desc="Въведете ясен дневен режим с време за учене, игра и почивка. Това подпомага процеса на обучение на деца с дислексия и намалява стреса"
									/>
									<PuzzleIconReview
										style="background-color:#088F9D;"
										puzzleclass="c-brand-orange w-6 mr-2"
										img="/assets/disleksia/родител-подкрепя-дете.webp"
										alt="Родител показва емоционална подкрепа на дете с дислексия."
										title="Покажете емоционална подкрепа"
										desc="Подкрепяйте, насърчавайте детето и споделяйте дейностите с него. При грешки подхождайте с разбиране – това укрепва връзката ви и създава спокойна учебна среда."
									/>
								</ReviewSlider>
							</div>

							<div class="hidden xl:grid mx-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch">
								<PuzzleIconReview
									style="background-color:#742C8F;"
									puzzleclass="c-brand w-6 mr-2"
									img="/assets/disleksia/дете-показва-силните-страни.webp"
									alt="Дете с дислексия показва силните си страни по време на терапия."
									title="Открийте силните страни на детето"
									desc="Децата с дислексия имат креативно мислене. Подкрепете ги чрез участие в творчески дейности, които развиват въображението и изграждат самоувереност чрез успехи."
								/>
								<PuzzleIconReview
									style="background-color:#E11172;"
									puzzleclass="c-brand-purple w-6 mr-2"
									img="/assets/disleksia/родител-помага-дете-структура.webp"
									alt="Дете с дислексия участва в дейност, която структурира ежедневието му."
									title="Структурирайте ежедневието му"
									desc="Въведете ясен дневен режим с време за учене, игра и почивка. Това подпомага процеса на обучение на деца с дислексия и намалява стреса"
								/>
								<PuzzleIconReview
									style="background-color:#088F9D;"
									puzzleclass="c-brand-orange w-6 mr-2"
									img="/assets/disleksia/родител-подкрепя-дете.webp"
									alt="Родител показва емоционална подкрепа на дете с дислексия."
									title="Покажете емоционална подкрепа"
									desc="Подкрепяйте, насърчавайте детето и споделяйте дейностите с него. При грешки подхождайте с разбиране – това укрепва връзката ви и създава спокойна учебна среда."
								/>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<DoodleDecor variant="blue2" />

				<div class="gap-12 pb-8 md:pb-20 xl:px-30 mx-20px mx-auto">
					<H3Pink title="Необходими ресурси" />
					<div class="relative md:mx-10">
						<BackgroundIcons />
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-brand px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Знания и обучение</p>
								<p class="c-paper">Необходимо е родителите да се информират за същността на дислексията и причините за дислексия, за да разбират по-добре нуждите на детето си. Обучения и книги за работа с деца с дислексия са отлична отправна точка.
								</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-brand-blue px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Време и търпение</p>
								<p class="c-paper">Ще е нужно ежедневно практикуване на различни упражнения. Постоянството и емоционалната подкрепа са ключови за подобряване на уменията на детето. Родителите трябва да бъдат търпеливи и последователни, за да помогнат на детето да изгради увереност.</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-#F7871D px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Инвестиция в материали</p>
								<p class="c-paper">За постигане на по-добри резултати можете да използвате карти с букви, книги с едър шрифт, приложения и специализирани ресурси, препоръчани от център за деца с дислексия, могат значително да подпомогнат процеса.</p>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<div class="relative">
					<BackgroundIcons />
					<div class="gap-12 pb-0 pt-50px xl:px-30 mx-20px mx-auto">
						<H3Blue title="Резултати от терапията в домашни условия" />
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start ">
								<p class="mt-0">Резултатите от терапията в домашни условия варират в зависимост от консистентността и качеството на работа. При по-леките видове дислексия е възможно значително подобрение на способностите за четене и писане на детето. Трябва да се има предвид, но професионалната помощ в център за деца с дислексия дава по-бързи и устойчиви резултати.</p>
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
												Детски център Sense върна усмивките на нашите лица. В центъра се излекува нашият син Марин. Благодаря ви от сърце за професионализма и отдадеността. Вечно благодарни: семейство Марковски
											</>}
											name="Philip Markovski"
											hrefGoogleReview="https://maps.app.goo.gl/pTAjYzFwjVY2EuxB6"
											class="important-h-450px important-sm:h-250px important-md:h-700px important-lg:h-600px important-xl:h-600px"
										/>
										<StarReview
											reviewText={<>
												Много уютно място, съобразено с всички нужди и предпоставки за един полезен и приятен престой за всички деца. Персонала от специалисти е много добре подбран и обучен, и влагат много желание и енергия в работата си. С подкрепата и съдействието им, с напредъка в развитието, уменията и знанията, които получават децата ни, са и видимо щастливи след заниманията в центъра! Препоръчвам!
											</>}
											name="Monika Marinova"
											hrefGoogleReview="https://maps.app.goo.gl/kBpxxDo3jojNvQTv9"
											class="important-h-450px important-sm:h-250px important-md:h-700px important-lg:h-600px important-xl:h-600px"
										/>
										<StarReview
											reviewText={<>
												Искам да изкажа огромната си благодарност на терапевтите в Сенс Център. Те са професионалисти с отношение както към децата, така и към родителите. Препоръчвам не само за деца с различни дефицити, но и за деца в норма. Децата имат какво да получат и да надградят в този Център. Оценките им са точни и програмата им е методична, което дава страхотни резултати, особено за деца в аутистичния спектър.<br />
												Продължавайте да бъдете все така всеотдайни в работата си и да сбъдвате и нашите надежди.

											</>}
											name="Kalina Ivanova"
											hrefGoogleReview="https://maps.app.goo.gl/4TXB8ykbsV9hqFMw7"
											class="important-h-450px important-sm:h-200px important-md:h-750px important-lg:h-600px important-xl:h-600px"
										/>
										<StarReview
											reviewText={<>
												В център Сенс са най-компетентните специалисти, с които съм се срещала, след като имаше съмнение за диагноза аутизъм на едното ми дете. Имам им огромно доверие, че ще са точни при диагностицирането на проблема , подхождат изключително адекватно и положителните резултати са видими след няколкоседмична работа с децата. В разгръщащата се област на детското психологично развитие този център е несравнимо богатство и ресурс! На мен като майка работата с тях ми носи голямо спокойствие, увереност и облекчение
											</>}
											name="Srebrina Sokleva"
											hrefGoogleReview="https://maps.app.goo.gl/FoYKdmnFZzceLQvK7"
											class="important-h-450px important-sm:h-200px important-md:h-750px important-lg:h-600px important-xl:h-600px"
										/>
										<StarReview
											reviewText={<>
												Възхитен съм от професионализма на всички терапевти! Искам да изкажа огромни благодарности към г-жа Йорданова, която създаде 6-месечен терапевтичен план, специално предназначен за специфичните нужди на нашето дете. Цените определено оправдават качеството на услугата!
											</>}
											name="Martin Ivanov"
											hrefGoogleReview="https://maps.app.goo.gl/Trd6cP7wrDdCyXTq9"
											class="important-h-450px important-sm:h-200px important-md:h-750px important-lg:h-600px important-xl:h-600px"
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
