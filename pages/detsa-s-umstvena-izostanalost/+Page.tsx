import "solid-slider/slider.css";
import { AuthorContainer, GoogleStarReview, PuzzleIconReview, ReviewersImageReview, ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink } from '../../components/H2WithImage';
import { ServiceContaner } from '../../components/ServiceContainer';
import { ContainerBox, ContainerSlider } from "../../components/ContainerSlider";
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
import { GallerySlider2 } from "../../components/GallerySlider";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { WorkProcess } from "../../components/WorkProcess";

export default function Page() {
	return (
		<>
			<div class="[background-color:#fcfcfc]">
				<div
					class="mb-20 mx-[0px] relative h-[100vh] bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/umstvena-izostanalost/деца-умствена-изостаналост_-мобилно.webp)] md:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/umstvena-izostanalost/деца-умствена-изостаналост_.webp)] bg-[position:right_60%_bottom_80%] bg-no-repeat bg-cover [mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.8)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)]" role="img" aria-label="деца с умствена изостаналост"></div>
			</div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="flex flex-col justify-center items-center left-0 right-0 px-3 my-0 mx-auto absolute top-75% lg-top-75% text-center w-full" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="c-paper mb-2 md:mb-7 md:px-0 px-5">Деца с умствена изостаналост</h1>
							</AnimatedComponent>
							<AnimatedComponent class="important-delay-300 font-300 c-paper text-center mb-0 font-size-4.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 leading-5.5">Какво да очакваме и как да подкрепим детето</AnimatedComponent>

							<AnimatedComponent class="important-delay-600 mt-10 md:mt-10 float-left md:pr-5px relative text-center max-w-1240px">
								<PuzzleButton />
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="md:pb-10 lg:px-30">
				<H2Echo
					maintitle="Какво е умствена изостаналост при деца"
					title="изостаналост"
					bgImage="/assets/umstvena-izostanalost/психично-развитие-обучение-деца-умствена-изостаналост.webp"
					bgSize="250%"
					bgPosition="right 20% top 10%"
				/>
			</div>

			<section class="max-w-1500px md:pt-10 xl:mx-auto mx-20px flex md:flex-row flex-col justify-center items-center md:gap-8">
				<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
					<AnimatedComponent>
						<div class="w-full h-full">
							<div class="bg-paper mx-auto">
								<div class="">
									<div class="mx--20px">
										<img src="/assets/umstvena-izostanalost/психично-развитие-обучение-деца-умствена-изостаналост.webp" alt="Pсихично развитие и обучение на деца с умствена изостаналост." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
									</div>
									<div class="flex flex-col items-center gap-1 relative md:hidden">
										<h2 class="text-transparent bg-clip-text bg-[url(/assets/umstvena-izostanalost/психично-развитие-обучение-деца-умствена-изостаналост.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
											изостаналост
										</h2>
									</div>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</section>

				<section class="md:w-1/2">
					<AnimatedComponent class="w-full md:px-3 my-auto">
						<p class="mt-1">
							Умствената изостаналост е състояние, при което интелектуалното функциониране е значително под средното ниво. Децата с умствена изостаналост изпитват трудности при изпълнението на ежедневни дейности като общуване, грижа за себе си, учене и социални взаимодействия, може да бъде причинено от различни генетични или биологични фактори.
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
							<H3Blue title="Най-често срещани признаци на умствена изостаналост" />
							<h4 class="font-600 text-left pb-2">Когнитивни и езикови затруднения:</h4>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "Review 1" },
										{ name: "Review 2" },
										{ name: "Review 3" },
									]}
								>
									<ContainerBox
										link=""
										class2="important-h-55"
										style="background-color:#FA7402;"
										title="Забавено развитие на речта"
										text="По-късно проговаряне от връстниците си и ограничен речников запас. Това е сред най-честите комуникативни нарушения при деца с умствена изостаналост"
										img="/assets/umstvena-izostanalost/комуникативни-нарушения-деца-умствена-изостаналост.webp"
										alt="Комуникативни нарушения при деца с умствена изостаналост."
									/>
									<ContainerBox
										link=""
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Трудности при учене и запомняне"
										text="Запомнянето на нова информация и овладяването на нови умения отнемат повече време и усилия"
										img="/assets/umstvena-izostanalost/деца-умствени-забавяния.webp"
										alt="Дете с умствено забавяне."
									/>
									<ContainerBox
										link=""
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Проблеми с логическото мислене"
										text="Затруднения при установяване на причинно-следствена връзка или решаване на елементарни задачи"
										img="/assets/umstvena-izostanalost/умствена-изостаналост-деца.webp"
										alt="Умствена изостаналост при дете."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/3">
									<ContainerBox
										link=""
										class2="important-h-55"
										style="background-color:#FA7402;"
										title="Забавено развитие на речта"
										text="По-късно проговаряне от връстниците си и ограничен речников запас. Това е сред най-честите комуникативни нарушения при деца с умствена изостаналост"
										img="/assets/umstvena-izostanalost/комуникативни-нарушения-деца-умствена-изостаналост.webp"
										alt="Комуникативни нарушения при деца с умствена изостаналост."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										link=""
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Трудности при учене и запомняне"
										text="Запомнянето на нова информация и овладяването на нови умения отнемат повече време и усилия"
										img="/assets/umstvena-izostanalost/деца-умствени-забавяния.webp"
										alt="Дете с умствено забавяне."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										link=""
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Проблеми с логическото мислене"
										text="Затруднения при установяване на причинно-следствена връзка или решаване на елементарни задачи"
										img="/assets/umstvena-izostanalost/умствена-изостаналост-деца.webp"
										alt="Умствена изостаналост при дете."
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
							<h4 class="font-600 text-left pb-2">Социални и поведенчески затруднения:</h4>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "Review 1" },
										{ name: "Review 2" },
										{ name: "Review 3" },
									]}
								>
									<ContainerBox
										link=""
										style="background-color:#742C8F;"
										title="Затруднена социална адаптация"
										text="Социализацията на деца с умствена изостаналост е предизвикателство. Те често се чувстват неуверени в нова среда и трудно се включват в групови дейности."
										img="/assets/umstvena-izostanalost/социализация-деца-умствена-изостаналост.webp"
										alt="Социализация на деца с умствена изостаналост."
									/>
									<ContainerBox
										link=""
										style="background-color:#742C8F;"
										title="Забавено развитие на двигателните умения"
										text="При някои деца с умствени забавяния ходенето, хващането на предмети и координираните движения се случват по-бавно."
										img="/assets/umstvena-izostanalost/работа-деца-умствена-изостаналост_.webp"
										alt="работа с деца с умствена изостаналост​."
									/>
									<ContainerBox
										link=""
										style="background-color:#742C8F;"
										title="Трудности при следване на инструкции"
										text="Детето не успява да изпълни указания, особено ако са сложни или неясно формулирани"
										img="/assets/umstvena-izostanalost/деца-лека-умствена-изостаналост.webp"
										alt="Деца с лека умствена изостаналост."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/3">
									<ContainerBox
										link=""
										style="background-color:#742C8F;"
										title="Затруднена социална адаптация"
										text="Социализацията на деца с умствена изостаналост е предизвикателство. Те често се чувстват неуверени в нова среда и трудно се включват в групови дейности."
										img="/assets/umstvena-izostanalost/социализация-деца-умствена-изостаналост.webp"
										alt="Социализация на деца с умствена изостаналост."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										link=""
										style="background-color:#742C8F;"
										title="Забавено развитие на двигателните умения"
										text="При някои деца с умствени забавяния ходенето, хващането на предмети и координираните движения се случват по-бавно."
										img="/assets/umstvena-izostanalost/работа-деца-умствена-изостаналост_.webp"
										alt="работа с деца с умствена изостаналост​."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										link=""
										style="background-color:#742C8F;"
										title="Трудности при следване на инструкции"
										text="Детето не успява да изпълни указания, особено ако са сложни или неясно формулирани"
										img="/assets/umstvena-izostanalost/деца-лека-умствена-изостаналост.webp"
										alt="Деца с лека умствена изостаналост."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<DoodleDecor variant="blue2" />

				<AnimatedComponent class="max-w-1500px mx-auto">
					<p>Наличието на тези признаци може да бъде индикация, но не е категорично доказателство за умствена изостаналост. В случай, че ги забележите при Вашето дете Ви препоръчваме да се консултирате със специалист.</p>
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 md:px-10 py-2 pd:py-4">
						<div class="flex justify-center items-center gap-4">
							<img src="/assets/exclamation-mark-icon.webp" class="w-10 h-10" />
							<p class="font-[MYRIADPRO-Semibold] c-paper uppercase font-size-17px lg:font-size-21px">80-90% от мозъка на детето се развива до 7-годишна възраст</p>
						</div>
						<p class="font-size-15px lg:font-size-18px c-paper mt-2">Колкото по-рано започне терапията, толкова по-големи са шансовете за напредък в психичното развитие и обучението на деца с умствена изостаналост.</p>
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
					<div class="flex flex-col lg:flex-row justify-center gap-10 xl:gap-20">
						<ServiceContaner
							link=""
							img="/assets/umstvena-izostanalost/дете-умствена-изостаналост_.webp"
							alt="Дете с умствена изостаналост."
							title="Ограничено когнитивно развитие"
							description="Без подходяща терапия, умствената изостаналост може да доведе до значителни трудности в развитието на когнитивните способности. Детето може да среща постоянни препятствия в усвояването на основни концепции, които са важни за ежедневието и образованието."
						/>
						<ServiceContaner
							link=""
							img="/assets/umstvena-izostanalost/социална-изолация-трудности-комуникацията.webp"
							alt="Социална изолация и трудности в комуникацията при дете с умствена изостаналост."
							title="Социална изолация и трудности в комуникацията"
							description="Децата с умствена изостаналост често изпитват затруднения в социалните взаимодействия. Липсата на подкрепа може да доведе до чувство за изолация, особено ако детето не може ефективно да общува с връстниците си. Това може да затрудни създаването на приятелства и участието в групови дейности."
						/>
						<ServiceContaner
							link=""
							img="/assets/umstvena-izostanalost/поведение-деца-умствена-изостаналост.webp"
							alt="Поведение на деца с умствена изостаналост."
							title="Ниско самочувствие и емоционални проблеми"
							description="Поведението на деца с умствена изостаналост може да се промени в резултат на фрустрация. Понякога се наблюдава агресивно поведение при деца с умствена изостаналост, което е сигнал за вътрешно напрежение и нужда от психотерапевтична подкрепа."
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
							bgImage="/assets/umstvena-izostanalost/разпознаване-деца-лека-умствена-изостаналост.webp"
							bgSize="250%"
							bgPosition="right 70% top 70%"
						/>
					</div>
				</AnimatedComponent>
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2">
						<img src="/assets/umstvena-izostanalost/разпознаване-деца-лека-умствена-изостаналост.webp" alt="Правилно разпознаване на деца с лека умствена изостаналост." class="w-full h-auto object-cover rounded shadow" />
					</AnimatedComponent>
					<AnimatedComponent class="flex flex-col items-center gap-1 relative mb-2 md:hidden">
						<h2 class="text-transparent bg-clip-text bg-[url(/assets/umstvena-izostanalost/разпознаване-деца-лека-умствена-изостаналост.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
							разпознаване
						</h2>
					</AnimatedComponent>

					<div class="md:hidden block">
						<DoodleDecor variant="purple" />
					</div>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<H3Pink title="Как да разберем дали диагнозата “умствена изостаналост” е правилна" />
						<AnimatedComponent>
							<BackgroundIcons />
							<p class="mt--5 pb-5">
								Диагностицирането на умствена изостаналост изисква комплексна оценка от специалисти, които използват наблюдение, интервюта и специализирани тестове. Процесът включва внимателно проследяване на поведението на деца с умствена изостаналост в различни ситуации, за да се оцени мисленето, комуникацията, социалните и адаптивните умения. Провежда се и разговор с родителите, чрез който се събира информация за развитието и ежедневието на детето. Важна част от диагностиката е и изключването на други възможни причини за трудностите като сензорни, неврологични или емоционални проблеми.
							</p>
							<PuzzleButton />
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="relative md:pb-30 xl:px-30 mx-20px">
				<H3Blue title="Първична оценка при съмнение за умствена изостаналост" />
				<div class="flex flex-col justify-center items-center max-w-1500px mx-auto px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:py-10 py-5 bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
						<p class="c-paper mb-1">
							В Sense център за деца и младежи с умствена изостаналост предлагаме първична оценка при съмнение за умствена изостаналост при деца.
						</p>
						<p class="c-paper">
							По време на консултацията се извършва анализ на психичното развитие и обучението на деца с умствена изостаналост.
						</p>
						<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Първична оценка при съмнение за умствена изостаналост." class="my-5 w-full h-auto object-cover rounded shadow" />
						<p class="c-paper mb-1">
							Специалистите оценяват уменията му за справяне с ежедневни задачи, способностите му за учене, социализация и адаптация.
						</p>
						<p class="c-paper">
							Едновременно с това се провежда интервю с родителите, за да се съберат наблюдения относно развитието на детето и предизвикателствата, с които то се сблъсква. Целта на този процес е да се разберат индивидуалните нужди и да се определят най-подходящите стъпки за подкрепа на развитието.
						</p>
						<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Резултат от първична оценка при съмнение за умствена изостаналост." class="mt-5 w-full h-auto object-cover rounded shadow" />
						<p class="c-paper italic font-300 mt-1 op-90%" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
							Препоръчително е да донесете всички налични медицински документи, които могат да бъдат от полза за изясняване на актуалното състояние.</p>
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
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/umstvena-izostanalost/родител-дете-умствено-изоставане-5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Много се развиха уменията на децата откъм моторика, откъм междуличностни взаимоотношения, емоционалната интелигентност е изключително развита откакто работят тук.”"
										name="Александър Соклев"
										date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
									/>
									<ReviewersImageReview
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/umstvena-izostanalost/родител-дете-умствено-изоставане-5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="““Изключително грижовни, изключително отдадени, хора, подбрани наистина с огромна любов към децата. Хора, които ги е грижа. Винаги, когато сме имали нужда от някаква подкрепа сме я срещали тук.”"
										name="Александър Соклев"
										date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
									/>
									<ReviewersImageReview
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Някак си още с първото идване, на обследването на детето, те създадоха едно доверие в мен. И съм, мога да кажа, много доволна!”"
										name="Калина Митрева"
										date="майка на Филип, 5 г., съмнение за Аутизъм"
									/>
								</ReviewSlider>
							</div>

							<div class="hidden xl:grid mx-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch">
								<ReviewersImageReview
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/umstvena-izostanalost/родител-дете-умствено-изоставане-5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Много се развиха уменията на децата откъм моторика, откъм междуличностни взаимоотношения, емоционалната интелигентност е изключително развита откакто работят тук.”"
									name="Александър Соклев"
									date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
								/>
								<ReviewersImageReview
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/umstvena-izostanalost/родител-дете-умствено-изоставане-5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="““Изключително грижовни, изключително отдадени, хора, подбрани наистина с огромна любов към децата. Хора, които ги е грижа. Винаги, когато сме имали нужда от някаква подкрепа сме я срещали тук.”"
									name="Александър Соклев"
									date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
								/>
								<ReviewersImageReview
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Някак си още с първото идване, на обследването на детето, те създадоха едно доверие в мен. И съм, мога да кажа, много доволна!”"
									name="Калина Митрева"
									date="майка на Филип, 5 г., съмнение за Аутизъм"
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
								<img class="w-full h-full" src="/assets/umstvena-izostanalost/подкрепяща-домашна-среда-дете-умствено-изоставане.webp" alt="Подкрепяща домашна среда дете и дядо." />
							</div>
							<div class="w-full py-20px text-center">
								<div class="flex flex-col gap-1">
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Изградете подкрепяща домашна среда
									</h4>
									<p class="text-left mt-2">
										Децата с умствена изостаналост се развиват най-добре в среда, която е спокойна, предвидима и обогатена с възможности за учене. Създайте рутина и включвайте в нея образователни игри, практични дейности и задачи, които развиват самостоятелността. Насърчавайте всеки малък напредък - обличане, подреждане на играчки, повтаряне на думи, броене. Повтаряйте упражненията спокойно и търпеливо, постоянството е ключът към успеха.
									</p>
									<div class="my-5">
										<img class="w-full h-full" src="/assets/umstvena-izostanalost/търсене-надеждна-информация-достоверни-източници.webp" alt="Търсене на надеждна информация от достоверни източници." />
									</div>
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Потърсете надеждна информация от достоверни източници
									</h4>
									<p class="text-left mt-2">
										Четете материали от утвърдени центрове за деца и младежи с умствена изостаналост, медицински платформи и организации, които работят с деца с умствена изостаналост. Информираността ще Ви помогне да избирате правилни подходи и да се чувствате по-уверени в грижата за детето.
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
					bgImage="/assets/umstvena-izostanalost/поведение-дете-умствена-изостаналост.webp"
					bgSize="250%"
					bgPosition="right 50% top 10%"
				/>

				<section class="max-w-1500px md:pt-10 xl:mx-auto md:mx-20px mx--20px flex md:flex-row flex-col justify-center items-center md:gap-8">
					<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
						<AnimatedComponent>
							<div class="w-full h-full">
								<div class="bg-paper mx-auto">
									<div class="">
										<div class="mx--20px">
											<img src="/assets/umstvena-izostanalost/поведение-дете-умствена-изостаналост.webp" alt="Поведение на дете с умствена изостаналост." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
										</div>
										<div class="flex flex-col items-center gap-1 relative md:hidden">
											<h2 class="text-transparent bg-clip-text bg-[url(/assets/umstvena-izostanalost/поведение-дете-умствена-изостаналост.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
												терапия
											</h2>
										</div>
									</div>
								</div>
							</div>
						</AnimatedComponent>
					</section>

					<section class="md:w-1/2 pt-10 md:pt-0">
						<AnimatedComponent class="w-full md:px-3 my-auto flex flex-col justify-center items-center w-full md:pl-7 md:pr-0 px-3 mt--10 z-10">
							<H3Blue title="Какво можем да очакваме" />
							<div class="relative mt--10">
								<BackgroundIcons />
								<p class="text-left">
									Умствената изостаналост не може да бъде напълно излекувана, тъй като е резултат от трайни изменения в мозъчната функция.
								</p>
								<p class="text-left mt-2">
									Въпреки това, с подходяща терапия и подкрепа, децата с умствена изостаналост могат значително да подобрят уменията си, да развият повече самостоятелност и да живеят пълноценен живот. Целта на терапията е да се подпомогне напредъкът в развитието на детето, следвайки неговото собствено темпо, като се работи за подобряване на познавателните, социалните и адаптивните му способности.
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
					<div class="flex md:flex-row flex-col flex-wrap gap-5 md:gap-0 justify-center items-center">
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/звукова-стимулация.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Звукова стимулация"
							description="Подпомага сензорната и слуховата обработка, намалява тревожността и хиперактивността и стимулира езиковото развитие"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.6)),url(/assets/sindrom-na-daun/детски-логопед.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Детски логопед"
							description="Терапията подобрява разбирането и изпълнението на команди, формирането на самостоятелни изречения и умението за водене на диалог"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/многофункционална-стая.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Многофункционална стая"
							description="Стимулира имитационни умения, подпомага изпълнението на инструкции, развива фината моторика"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/ерготерапия-деца.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Ерготерапия"
							description="Подобрява координацията и прецизността на ръцете и пръстите, което е ключово за писане, рисуване и работа с малки предмети"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/психомоторика.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Психомоторика"
							description="Подобрява контрола при ходене, бягане и скачане, както и координацията на ръцете и пръстите за по-прецизно писане и рисуване"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6)),url(/assets/umstvena-izostanalost/обучение-концентрация-внимание-деца.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Обучение за концентрация и внимание"
							description="Помага на детето с фокусирането и запаметяването, като го учи да задържа вниманието си по-дълго и да следва инструкции"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Консултация с хомеопат"
							description="Подпомага цялостното здраве и емоционално равновесие на детето, като подкрепя организма по естествен начин и допринася за по-добро ежедневно функциониране"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Игрова терапия"
							description="Подобрява емоционалната регулация, развива социални, когнитивни и двигателни умения и намалява тревожността в сигурна и подкрепяща среда"
						/>
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
							<div class="my-5">
								<GallerySlider2
									imgs={[
										{ src: "/assets/umstvena-izostanalost/резултат-терапия-дете-играе.webp", alt: "Резултат от терапия дете играе щастливо." },
										{ src: "/assets/umstvena-izostanalost/резултат-терапия-дете-тича.webp", alt: "Резултат от терапия дете тича щастливо." },
										{ src: "/assets/umstvena-izostanalost/резултат-терапия-дете-комуникира.webp", alt: "Резултат от терапия дете комуникира щастливо." },
									]}
								/>
							</div>
							<p class="text-left mt-2 mb-12">
								Професионалната работа с деца с умствена изостаналост се персонализира според  индивидуалните им потребности и темпо на развитие. При постоянна подкрепа и правилен подход, може да се постигне значително подобрение в комуникацията, ученето, социалните умения и самостоятелността. С времето децата с лека умствена изостаналост често стават по-уверени, справят се по-добре в ежедневието и се интегрират по-успешно в училищната и социалната среда.
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
									img="https://lh3.googleusercontent.com/a/ACg8ocL6Jql8c8fOskwX1lIX4mAwsDrK8z_tuQtUiwoEJcdfaMn39g=w72-h72-p-rp-mo-br100"
									reviewText={
										<>
											Момченцето ни имаше проблем с проговарянето, за няколко месеца работа със специалистите в центъра показа страхотен напредък. Изключително доволни сме със съпруга ми от резултатите, отношението към детето и подхода.

										</>
									}
									name="Silvya Manikatova"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/QAbt2GjzcT3ygJkQA"
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
									img="https://lh3.googleusercontent.com/a/ACg8ocKyVR84ZTkrR6fnjzFSpCT5L2pucRnxrEkzy_iRWwDzqsrvHw=w72-h72-p-rp-mo-br100"
									reviewText={
										<>
											Синът ни посещава центъра от почти половин година и за този период наблюдаваме изключителен напредък по отношение на когнитивните му умения.<br />
											Започна да проявява интерес към много неща у дома и значително подобри очния контакт.<br />
											Много сме благодарни на целия екип за разбирането и позитивизма, с който се отнасят към децата и техните родители.<br />
											Чувстваме се подкрепени! ❤️

										</>
									}
									name="Estel Dimova"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/hmy1FLLTd1seSbPe8"
								/>
								<GoogleStarReview
									img="https://lh3.googleusercontent.com/a/ACg8ocKwdE846kNYlyEQi8Mkt34a21LAbrveRIECBWbPHmB5xr7g8w=w72-h72-p-rp-mo-br100"
									reviewText={
										<>
											Детето ми посещава центъра от около 9 месеца. За този период има значителен напредък и посещава центъра с голямо желание. Обогати речника и уменията си за общуване, благодарение на екипа от професионалисти работещи с него. Изключително добронамерно отношение към децата и родителите.

										</>
									}
									name="Евелина Стоянова"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/nPMJW3cWVaY37Jyy7"
								/>
								<GoogleStarReview
									img="https://lh3.googleusercontent.com/a/ACg8ocIrefUansvDQ6KIsaeD-RoR2AxZr2XQfbP9KdXwZ-OLpIQKxm0=w72-h72-p-rp-mo-br100"
									reviewText={
										<>
											Детето ми посещава центъра от 4 месеца. Забелязваме напредък в комуникативните умения и изпълнението на ежедневни дейности. Препоръчвам силно, най-вече заради екипът от специалисти, които са винаги топли и приветливи❤️. Посрещнаха ни с много разбиране.<br />
											Благодарим Ви!
										</>
									}
									name="Божана Михайлова"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/1zy2Sq4Sf4QZf1qb6"
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
									variant="dots2"
									reviews={[
										{ name: "1" },
										{ name: "2" },
										{ name: "3" },
									]}>
									<PuzzleIconReview
										style="background-color:#742C8F;"
										class="important-lg:h-470px important-h-480px"
										puzzleclass="c-brand w-6 mr-2"
										img="/assets/umstvena-izostanalost/създаване-дневна-рутина-дете-умствена-изостаналост.webp"
										alt="Създаване на дневна рутинана дете с умствена изостаналост."
										href="/za-nas/blago/"
										title="Създаване на рутина"
										desc="Структурирането на ежедневните дейности ще улесни разбирането и изпълнението им. Осигурете обстановка, в която детето се чувства сигурно и прието. Избягвайте внезапни промени, които могат да създадат тревожност."
									/>
									<PuzzleIconReview
										style="background-color:#E11172;"
										class="important-lg:h-470px important-h-480px"
										puzzleclass="c-brand-purple w-6 mr-2"
										img="/assets/umstvena-izostanalost/объркано-дете-комуникира.webp"
										alt="Объркано дете се опитва да комуникира."
										href="/za-nas/blago/"
										title="Работа върху социалните умения"
										desc="Насърчавайте детето да изразява нуждите си с думи или жестове. Можете да организирате съвместни дейности под формата на игра като четене на книги, пеене или ролеви игри, които изграждат социални умения."
									/>
									<PuzzleIconReview
										style="background-color:#088F9D;"
										class="important-lg:h-470px important-h-480px"
										puzzleclass="c-brand-orange w-6 mr-2"
										img="/assets/umstvena-izostanalost/учене-чрез-ежедневни-дейности.webp"
										alt="Учене чрез ежедневни дейности на дете с умствена изостаналост."
										href="/za-nas/blago/"
										title="Учене чрез ежедневни дейности"
										desc="Включвайте детето в задачи като подреждане на играчки, сервиране на масата или грижа за домашните любимци. Можете да използвате пъзели и образователни игри за развиване на моторните и когнитивните умения."
									/>
								</ReviewSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="lg:w-1/3">
									<PuzzleIconReview
										style="background-color:#742C8F;"
										class="important-lg:h-550px important-h-480px"
										puzzleclass="c-brand w-6 mr-2"
										img="/assets/umstvena-izostanalost/създаване-дневна-рутина-дете-умствена-изостаналост.webp"
										alt="Игри с различни текстури и предмети."
										href="/za-nas/blago/"
										title="Създаване на рутина"
										desc="Структурирането на ежедневните дейности ще улесни разбирането и изпълнението им. Осигурете обстановка, в която детето се чувства сигурно и прието. Избягвайте внезапни промени, които могат да създадат тревожност."
									/>
								</div>
								<div class="lg:w-1/3">
									<PuzzleIconReview
										style="background-color:#E11172;"
										class="important-lg:h-550px important-h-480px"
										puzzleclass="c-brand-purple w-6 mr-2"
										img="/assets/umstvena-izostanalost/объркано-дете-комуникира.webp"
										alt="Групиране на предмети по цветове и форми."
										href="/za-nas/blago/"
										title="Работа върху социалните умения"
										desc="Насърчавайте детето да изразява нуждите си с думи или жестове. Можете да организирате съвместни дейности под формата на игра като четене на книги, пеене или ролеви игри, които изграждат социални умения."
									/>
								</div>
								<div class="lg:w-1/3">
									<PuzzleIconReview
										style="background-color:#088F9D;"
										class="important-lg:h-550px important-h-480px"
										puzzleclass="c-brand-orange w-6 mr-2"
										img="/assets/umstvena-izostanalost/учене-чрез-ежедневни-дейности.webp"
										alt="Четене на книжки с картинки при деца със синдром на Даун."
										href="/za-nas/blago/"
										title="Учене чрез ежедневни дейности"
										desc="Включвайте детето в задачи като подреждане на играчки, сервиране на масата или грижа за домашните любимци. Можете да използвате пъзели и образователни игри за развиване на моторните и когнитивните умения."
									/>
								</div>
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
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Знания и умения</p>
								<p class="c-paper">Важно е да се запознаете с характеристиките на децата с умствени забавяния. Проучете най-ефективните методи за психично развитие и обучение на деца с умствена изостаналост.</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-brand-blue px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Търпение и последователност</p>
								<p class="c-paper">Подкрепяйте всеки малък успех. Помнете, че похвалите и насърчаването играят ключова роля за изграждането на самочувствие. Прогресът може да е бавен, но е важно да бъдете последователни и позитивни.</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-#F7871D px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Инвестиция</p>
								<p class="c-paper">За постигане на добри резултати е важно да отделите време и средства за образователни материали и адаптирани игри, които стимулират когнитивното и социалното развитие. Играчки, пъзели и илюстрирани книги подпомагат концентрацията, мисленето и речта.</p>
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
								<p class="mt-0">Домашната терапия при деца с умствена изостаналост може да доведе до напредък в когнитивните, социалните и адаптивните умения. С постоянна практика детето постепенно подобрява ежедневните си навици и общуване. Макар и с по-бавни резултати в сравнение с професионалната терапия, този подход създава стабилна основа за развитие и по-лесна интеграция.</p>
							</div>
						</AnimatedComponent>
					</div>

					<DoodleDecor variant="pink" />

					<AnimatedComponent class="xl:px-30 mx-20px">
						<H3Pink title="Първите сигнали на умствена изостаналост, които не бива да игнорирате" />
					</AnimatedComponent>

					<section class="mb-70px max-w-1500px px-20px mx-auto">
						<div class="xl:px-30">
							<div class="">
								<AnimatedComponent>
									<ReviewSlider
										variant="dots3"
										reviews={[
											{ name: "1" },
											{ name: "2" },
											{ name: "3" },
											{ name: "4" },
											{ name: "5" },
										]}>
										<StarReview
											reviewText={<>
												Великолепно отношение и професионализъм! Детето ми се чувства прекрасно там, винаги ходи с огромно желание и отбелязва значителен напредък, благодарение на този млад и отдаден екип.
											</>}
											name="Elena Todorova"
											hrefGoogleReview="https://maps.app.goo.gl/FFvXGZ89PWqwouys8"
											class="important-h-350px important-sm:h-150px important-md:h-600px important-lg:h-500px important-xl:h-500px"
										/>
										<StarReview
											reviewText={<>
												Детето ни посещава център SENSE от три месеца- ходи с желание и се чувства добре. Компетентен и отзивчив екип с чудесна грижа за децата.
											</>}
											name="Мария Георгиева"
											hrefGoogleReview="https://maps.app.goo.gl/xfxnK7Fzobi6Z2WZ8"
											class="important-h-350px important-sm:h-150px important-md:h-600px important-lg:h-500px important-xl:h-500px"
										/>
										<StarReview
											reviewText={
												<>
													Уютно и вдъхновяващо място!<br />
													Sense Center е перфектното място за децата ми! Персоналът е изключително внимателен и ангажиран, а програмите са едновременно забавни и образователни. Винаги си тръгваме с усмивка и желание да се върнем отново!
												</>
											}
											name="Viktoriya Nikolova"
											hrefGoogleReview="https://maps.app.goo.gl/z5h7wjaaxazyoB479"
											class="important-h-350px important-sm:h-150px important-md:h-600px important-lg:h-500px important-xl:h-500px"
										/>
										<StarReview
											reviewText={<>
												Детето ми посещава центъра от месец и половина! Важното за мен е, че той ходи с желание там и намира приятели! Ние сме в началото на нашия път в Sense център, но имам огромно доверие на екипа и вярвам, че ще постигнем заедно най-доброто за нашето дете! Препоръчвам центъра, това е едно добро място за нашите деца в което могат да се учат, играят и да се чувстват спокойни и обичани!
											</>}
											name="Stanimira Milenova"
											hrefGoogleReview="https://maps.app.goo.gl/MZrttCtS4MRmFGPX8"
											class="important-h-350px important-sm:h-150px important-md:h-600px important-lg:h-500px important-xl:h-500px"
										/>
										<StarReview
											reviewText={<>
												Много приятно място, детето ни ходи с много голямо желание, има доста добра промяна и напредък него 😊😊
											</>}
											name="Elica Mustachkova"
											hrefGoogleReview="https://maps.app.goo.gl/DzCrfjQkhau9sKfi6"
											class="important-h-350px important-sm:h-150px important-md:h-600px important-lg:h-500px important-xl:h-500px"
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
