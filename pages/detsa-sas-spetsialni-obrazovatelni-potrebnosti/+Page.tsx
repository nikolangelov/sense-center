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
import { GradientFooter } from "../../components/GradientFooter";

export default function Page() {
	return (
		<>
			<div class="[background-color:#fcfcfc]">
				<div
					class="mb-20 mx-[0px] relative h-[100vh] bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3)),url(/assets/SOP/дете-соп-мобилно.webp)] md:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3)),url(/assets/SOP/дете-соп.webp)] bg-[position:right_100%_bottom_80%] md:bg-[position:right_100%_bottom_50%] bg-no-repeat bg-cover [mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.8)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)]" role="img" aria-label="Деца със СОП"></div>
			</div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="flex flex-col justify-center items-center left-0 right-0 px-3 my-0 mx-auto absolute top-78% lg-top-75% text-center w-full" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="c-paper mb-3 md:mb-7 md:px-0 px-5">Деца със СОП</h1>
							</AnimatedComponent>
							<AnimatedComponent class="important-delay-300 font-300 c-paper text-center mb-0 font-size-4.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 leading-5.5">Какво да очакваме и как да подкрепим детето</AnimatedComponent>

							<AnimatedComponent class="important-delay-600 mt-9 md:mt-10 float-left md:pr-5px relative text-center max-w-1240px">
								<PuzzleButton />
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="md:pb-10 lg:px-30">
				<H2Echo
					maintitle="Какво са специални образователни способности (СОП)"
					title="способности"
					bgImage="/assets/SOP/ограмотяване-деца-специални-образователни-потребности.webp"
					bgSize="350%"
					bgPosition="right 10% top 100%"
				/>
			</div>

			<section class="max-w-1500px md:pt-10 xl:mx-auto mx-20px flex md:flex-row flex-col justify-center items-center md:gap-8">
				<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
					<AnimatedComponent>
						<div class="w-full h-full">
							<div class="bg-paper mx-auto">
								<div class="">
									<div class="mx--20px">
										<img src="/assets/SOP/ограмотяване-деца-специални-образователни-потребности.webp" alt="Ограмотяване на деца със специални образователни потребности." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
									</div>
									<div class="flex flex-col items-center gap-1 relative md:hidden">
										<h2 class="text-transparent bg-clip-text bg-[url(/assets/SOP/ограмотяване-деца-специални-образователни-потребности.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
											способности
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
							Специалните образователни потребности (СОП) възникват при деца с физически, когнитивни или емоционални затруднения. Те се нуждаят от индивидуален подход и специализирана програма за работа с деца със СОП, които подпомагат тяхното развитие и обучение по най-добрия начин.
						</p>
						<p class="">
							С помощта на различни специалисти като психолог, логопед и др. се идентифицират конкретните индивидуални нужди на детето със СОП. Изготвят се персонализирани програми и разработени уроци за деца със СОП, които предоставят възможност на всички деца да се развиват и учат в среда, която е съобразена с техните нужди. Това е в основата на приобщаващото образование за деца със СОП.
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
							<H3Blue title="Най-често срещани признаци на специални образователни потребности" />
							<h4 class="font-600 text-left pb-2">Когнитивни и езикови затруднения:</h4>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "1" },
										{ name: "2" },
										{ name: "3" },
									]}
								>
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										title="Забавяне в развитието на речта и езиковите умения"
										text="По-късно проговаряне от връстниците си или използва ограничен речников запас."
										img="/assets/SOP/ограмотяване-деца-със-специални-образователни-потребности.webp"
										alt="Дете със специални образователни потребности."
									/>
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Проблем с ученето и концентрацията"
										text="Трудности с фокусирането, следването на инструкции или запомнянето на информация."
										img="/assets/SOP/обучение-деца-специални-образователни-потребности.webp"
										alt="Обучение на деца със специални образователни потребности."
									/>
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Проблеми с фината и грубата моторика"
										text="Затруднения при дейности като рисуване, закопчаване на копчета или тичане и скачане."
										img="/assets/SOP/проблеми-фината-моторика.webp"
										alt="Проблеми с фината и грубата моторика на дете със соп."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/3">
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										title="Забавяне в развитието на речта и езиковите умения"
										text="По-късно проговаряне от връстниците си или използва ограничен речников запас."
										img="/assets/SOP/ограмотяване-деца-със-специални-образователни-потребности.webp"
										alt="Дете със специални образователни потребности."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Проблем с ученето и концентрацията"
										text="Трудности с фокусирането, следването на инструкции или запомнянето на информация."
										img="/assets/SOP/обучение-деца-специални-образователни-потребности.webp"
										alt="Обучение на деца със специални образователни потребности."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Проблеми с фината и грубата моторика"
										text="Затруднения при дейности като рисуване, закопчаване на копчета или тичане и скачане."
										img="/assets/SOP/проблеми-фината-моторика.webp"
										alt="Проблеми с фината и грубата моторика на дете със соп."
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
							<h4 class="font-600 text-left pb-2">Емоционални и поведенчески предизвикателства:</h4>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "1" },
										{ name: "2" },
										{ name: "3" },
									]}
								>
									<ContainerBox
										style="background-color:#742C8F;"
										title="Социални затруднения"
										text="Избягва контакт с връстници или изпитва трудности при създаване на приятелства."
										img="/assets/SOP/решаване-казуси-деца-соп.webp"
										alt="Социални затруднения и решаване на казуси за деца със соп."
									/>
									<ContainerBox
										style="background-color:#742C8F;"
										title="Поведенчески проблеми"
										text="Проявява хиперактивност, агресия или чести избухвания без видима причина."
										img="/assets/SOP/упражнения-деца-соп.webp"
										alt="Упражнения за деца със соп и поведенчески проблеми."
									/>
									<ContainerBox
										style="background-color:#742C8F;"
										title="Емоционална нестабилност и тревожност"
										text="Изпитва чести промени в настроението, страхове или силна чувствителност към стрес."
										img="/assets/SOP/приобщаващо-образование-деца-соп.webp"
										alt="Емоционална нестабилност и тревожност при деца със соп."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/3">
									<ContainerBox
										style="background-color:#742C8F;"
										title="Социални затруднения"
										text="Избягва контакт с връстници или изпитва трудности при създаване на приятелства."
										img="/assets/SOP/решаване-казуси-деца-соп.webp"
										alt="Социални затруднения и решаване на казуси за деца със соп."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										style="background-color:#742C8F;"
										title="Поведенчески проблеми"
										text="Проявява хиперактивност, агресия или чести избухвания без видима причина."
										img="/assets/SOP/упражнения-деца-соп.webp"
										alt="Упражнения за деца със соп и поведенчески проблеми."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										style="background-color:#742C8F;"
										title="Емоционална нестабилност и тревожност"
										text="Изпитва чести промени в настроението, страхове или силна чувствителност към стрес."
										img="/assets/SOP/приобщаващо-образование-деца-соп.webp"
										alt="Емоционална нестабилност и тревожност при деца със соп."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<DoodleDecor variant="blue2" />

				<AnimatedComponent class="max-w-1500px mx-auto">
					<p>Наличието на тези признаци може да бъде индикация, но не е категорично доказателство, че детето има СОП.  В случай, че ги забележите при Вашето дете Ви препоръчваме да се консултирате със специалист.</p>
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 md:px-10 py-2 pd:py-4">
						<div class="flex justify-center items-center gap-4">
							<img src="/assets/exclamation-mark-icon.webp" class="w-10 h-10" />
							<p class="font-[MYRIADPRO-Semibold] c-paper uppercase font-size-17px lg:font-size-21px">80-90% от мозъка на детето се развива до 7-годишна възраст</p>
						</div>
						<p class="font-size-15px lg:font-size-18px c-paper mt-2">Ето защо колкото по-рано бъде започната терапия или програма за работа с деца със СОП, толкова по-голяма е възможността за видимо подобрение на актуалното състояние и напредване в развитието.</p>
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
							img="/assets/SOP/програми-деца-специални-образователни-потребности.webp"
							alt="Програми за деца със соп и забавено когнитивно развитие."
							title="Забавено когнитивно развитие"
							description="Децата със СОП често изпитват затруднения в процеса на обучение. Липсата на терапия и специализирано обучение за деца със специални образователни потребности може да ограничи способността им да развиват основни когнитивни умения като четене, писане, математика и други основни учебни дейности, което води до трайни затруднения в академичен план."
						/>
						<ServiceContaner
							link=""
							img="/assets/SOP/социална-изолация-деца-соп.webp"
							alt="Социална изолация при деца със соп."
							title="Социална изолация"
							description="Трудностите в общуването и социализацията, които много деца със СОП изпитват, могат да се задълбочат. Без подходяща подкрепа, трудностите в комуникацията могат да отдалечат детето от връстниците му, да понижат самочувствието му и да го изолират от социалната среда."
						/>
						<ServiceContaner
							link=""
							img="/assets/SOP/поведенчески-проблеми-деца-соп.webp"
							alt="Поведенчески проблеми при деца със соп."
							title="Поведенчески проблеми"
							description="Неотработените затруднения често водят до емоционален дискомфорт, който може да се прояви като агресия, тревожност или депресия. Навременната помощ и интеграцията на деца със специални образователни потребности предотвратяват задълбочаването на тези състояния."
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
							bgImage="/assets/SOP/разпознаване-специални-образователни-потребности.webp"
							bgSize="250%"
							bgPosition="right 100% top 70%"
						/>
					</div>
				</AnimatedComponent>
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2">
						<div class="mx--20px">
							<img src="/assets/SOP/разпознаване-специални-образователни-потребности.webp" alt="Правилно разпознаване на специални образователни потребности." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
						</div>
					</AnimatedComponent>
					<AnimatedComponent class="flex flex-col items-center gap-1 relative mb-2 md:hidden">
						<h2 class="text-transparent bg-clip-text bg-[url(/assets/SOP/разпознаване-специални-образователни-потребности.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
							разпознаване
						</h2>
					</AnimatedComponent>

					<div class="md:hidden block">
						<DoodleDecor variant="purple" />
					</div>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<H3Pink title="Как да разберем дали диагнозата “СОП” е правилна" />
						<AnimatedComponent>
							<BackgroundIcons />
							<p class="mt--5 pb-5">
								Установяването на специални образователни потребности (СОП) изисква мултидисциплинарен подход, включващ логопеди, психолози и социални педагози. Специалистите използват различни тестове и инструменти, за да оценят когнитивното, емоционалното и социалното развитие на детето. Процесът включва и разговор с родителите относно ранното развитие и актуалното здравословно състояние на детето. Наблюдава се и поведението му в различни ситуации, за да се установи как се справя с ежедневни дейности, комуникация и социални взаимодействия.
							</p>
							<PuzzleButton />
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="relative md:pb-30 xl:px-30 mx-20px">
				<H3Blue title="Първична оценка при съмнение за специални образователни потребности" />
				<div class="flex flex-col justify-center items-center max-w-1500px mx-auto px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:py-10 py-5 bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
						<p class="c-paper mb-1">
							В Sense Center предлагаме първична оценка за деца със съмнение за специални образователни потребности.
						</p>
						<p class="c-paper">
							По време на консултацията се извършва обследване на развитието, поведението и способностите на детето, като се използват утвърдени диагностични методи и се обсъждат възможностите за адаптация на деца със СОП към учебната и социална среда.
						</p>
						<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Първична оценка при съмнение за соп." class="my-5 w-full h-auto object-cover rounded shadow" />
						<p class="c-paper mb-1">
							Едновременно с това специалистите интервюират родителите за техните наблюдения и за училищното представяне на детето.
						</p>
						<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Резултат от безплатна първична оценка при соп." class="mt-5 w-full h-auto object-cover rounded shadow" />
						<p class="c-paper italic font-300 mt-1 op-90%" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
							Препоръчително е да донесете всички налични медицински документи, които могат да бъдат от полза за изясняване на актуалното състояние.</p>
						<div class="pt-10 flex md:flex-row flex-col justify-center items-center gap-2">
							<PuzzleButton />
							<PuzzleButton2
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
								<img class="w-full h-full" src="/assets/SOP/малки-стъпки-всеки-ден.webp" alt="Малки стъпки всеки ден при деца със соп." />
							</div>
							<div class="w-full py-20px text-center">
								<div class="flex flex-col gap-1">
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Малки стъпки всеки ден
									</h4>
									<p class="text-left mt-2">
										Ако нямате достъп до терапевт, опитайте с рутинни дейности у дома. Визуални графици, игри за развитие на фината моторика и ролеви ситуации могат да помогнат значително. Упражнения за деца със СОП, адаптирани към конкретните им затруднения, могат да окажат положителен ефект. Вниманието и подкрепата Ви са ключови за развитието на детето.
									</p>
									<div class="my-5">
										<img class="w-full h-full" src="/assets/SOP/търсене-надеждна-информация-деца-соп.webp" alt="Търсене на надеждна информация от достоверни източници за деца със соп." />
									</div>
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Потърсете надеждна информация от достоверни източници
									</h4>
									<p class="text-left mt-2">
										Четете материали от утвърдени терапевтични центрове, медицински платформи и организации, които са специализирани в работата с деца със СОП. Знанието ще Ви даде спокойствие и по-ясна перспектива.
									</p>
									<p class="text-left mt-0">
										В случай на съмнение е препоръчително да запишете час за консултация с професионалист, който да изкаже експертното си мнение относно актуалното състояние на детето.
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
					bgImage="/assets/SOP/методи-работа-деца-соп.webp"
					bgSize="350%"
					bgPosition="right 80% top 80%"
				/>

				<section class="max-w-1500px md:pt-10 xl:mx-auto md:mx-20px mx--20px flex md:flex-row flex-col justify-center items-center md:gap-8">
					<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
						<AnimatedComponent>
							<div class="w-full h-full">
								<div class="bg-paper mx-auto">
									<div class="">
										<div class="mx--20px">
											<img src="/assets/SOP/методи-работа-деца-соп.webp" alt="Методи за работа с деца със соп." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
										</div>
										<div class="flex flex-col items-center gap-1 relative md:hidden">
											<h2 class="text-transparent bg-clip-text bg-[url(/assets/SOP/методи-работа-деца-соп.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
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
									Специалните образователни потребности не могат да бъдат "излекувани" в традиционния смисъл, тъй като те не са заболяване, а поведенческо състояние.
								</p>
								<p class="text-left mt-2">
									Вместо това, чрез верните подходи, терапии и индивидуални програми децата със СОП могат да развият своите умения и да се интегрират по-добре в обществото и образователната система.
								</p>
								<p class="text-left mt-2">
									Прогресът зависи от интензивността и качеството на подбраните методи за работа с деца със СОП, както и от индивидуалните възможности на детето.
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
						<p class="md:px-10 xl:px-5 md:mb-5 mb-2 mt-0 c-gray-700 leading-5 font-size-14px font-400 italic tracking" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.3px;">Препоръчват се от 8 до 24 занимания за деца с аутизъм седмично за оптимални резултати</p>
					</AnimatedComponent>
					<div class="flex md:flex-row flex-col flex-wrap gap-5 md:gap-0 justify-center items-center">
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/звукова-стимулация.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Звукова стимулация"
							description="Подпомага сензорната и слуховата обработка, намалява тревожността и хиперактивността и стимулира езиковото развитие"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.6)),url(/assets/home/детски-логопед.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Детски логопед"
							description="Терапията подобрява разбирането и изпълнението на команди, формирането на самостоятелни изречения и умението за водене на диалог"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6)),url(/assets/sindrom-na-daun/детски-психолог.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Детски психолог"
							description="Подкрепя развитието на умения за организиране, планиране и решаване на проблеми, както и за емоционална саморегулация и адаптация към различни ситуации"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/SOP/развитие-емоционална-интелигентност.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Развитие на емоционална интелигентност"
							description="Помага на децата със СОП да разпознават и управляват емоциите си, развива емпатия и социални умения, изгражда увереност и усещане за сигурност"
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
							name="Когнитивно-поведенческа терапия"
							description="Помага на децата да разберат и променят негативните си мисли и поведение, за да се справят по-добре с емоциите и отношенията с другите"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Игрова терапия за деца"
							description="Подобрява емоционалната регулация, развива социални, когнитивни и двигателни умения и намалява тревожността в сигурна и подкрепяща среда"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Психологически групи за деца"
							description="Подкрепят децата в развитието на емоционална регулация, социални умения и увереност, като им помагат да изразяват чувствата си и да общуват по-лесно"
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
							<img class="mb-7" src="/assets/SOP/подобрение-терапия-деца-соп.webp" alt="Подобрение след терапия на дете със соп." />
							<p class="text-left mt-2 mb-12">
								Ранната терапевтична подкрепа носи множество ползи за развитието на детето. Тя подпомага по-бързото развитие на речта и комуникативните умения. Значително се подобряват и двигателните и когнитивните способности, като детето придобива нови физически умения и развива логическо мислене. Чрез участие в групови терапии се насърчава социалната интеграция и се изграждат важни умения за бъдещата училищна среда. Терапиите в Sense Center са съобразени с индивидуалните нужди на всяко дете, извършваме и консултиране на родители на деца със СОП по време на целия процес. Освен това специалистите помагат за идентифициране и справяне със съпътстващи затруднения, като проблеми с храненето или други здравословни състояния.
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
									img="https://lh3.googleusercontent.com/a/ACg8ocLecieh51BhVA1lSYcJqzeaqum4eyEQj0AOS8QNyZf5dbFA5g=w36-h36-p-rp-mo-br100"
									reviewText={
										<>
											Искам да изкажа огромната си благодарност на терапевтите в Сенс Център. Синът ми посещава центъра от април 2025г.В начолото не можеше да говори и не разбираше какво ние му обясняваме. Благодарение на различните видове терапии които посещава звукова, ерготерапия, речева, тъмна стая има голям напредък. Препоръчвам центъра, защото всичко в него е на ниво и синът ми се чувства щастлив.
										</>
									}
									name="Ирена Бакалова"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/cPVrFd7uFVysA38L8"
									class="important-h-570px important-sm:h-850px important-lg:h-670px important-xl:h-700px googlereview-container-in-page"
								/>
								<GoogleStarReview
									img="https://lh3.googleusercontent.com/a-/ALV-UjUw--VXvh3mXJ52gJotSRt8wzAZYH46rT4jeTXZR0AyKLrsJkNmKw=w36-h36-p-rp-mo-br100"
									reviewText={<>Сенс Център е най-доброто място в София за работа с деца!<br />
										Когато синът ми беше на 3 години и половина, той не говореше. Започна да посещава Сенс Център още от самото му създаване и само след няколко месеца проговори! Опасенията ми се оказаха неоснователни, а днес той е едно прекрасно, лъчезарно и уверено дете - рецитира песнички и стихотворения с радост!<br />
										Сестра му също посещава центъра и ефектът върху тях е невероятен. Връзката им се заздрави, станаха по-емпатични един към друг и по-уверени в себе си.<br />
										Препоръчвам с цялото си сърце - място, което променя животи!
									</>}
									name="Alexander Soklev"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/8u8YezkPQ8491CrdA"
									class="important-h-570px important-sm:h-850px important-lg:h-670px important-xl:h-700px googlereview-container-in-page"
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
									class="important-h-570px important-sm:h-850px important-lg:h-670px important-xl:h-700px googlereview-container-in-page"
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
									class="important-h-570px important-sm:h-850px important-lg:h-670px important-xl:h-700px googlereview-container-in-page"
								/>
								<GoogleStarReview
									img="https://lh3.googleusercontent.com/a/ACg8ocLjT2QCxtoR7d8rU0bdx9FD68rHT9mNGdz4LLMUjIVxDN2Y1A=w72-h72-p-rp-mo-br100"
									reviewText={
										<>
											Детето ми посещава центъра вече 5 месеца и има значителен напредък.Има интерес към всичко около него,очен контакт,опитва се да говори.Препоръпвам с две ръце центъра.Страхотни хора и професионалисти!
										</>
									}
									name="Лилия Жекова"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/yKeftA9frZsnGrSX8"
									class="important-h-570px important-sm:h-850px important-lg:h-670px important-xl:h-700px googlereview-container-in-page"
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
									class="important-lg:h-570px important-h-580px"
									puzzleclass="c-brand w-6 mr-2"
									img="/assets/SOP/стимулиране-речта-чрез-ежедневна-комуникация.webp"
									alt="Стимулиране на речта чрез ежедневна комуникация при деца със соп."
									title="Стимулиране на речта чрез ежедневна комуникация"
									desc="Говорете често с детето, назовавайте предмети и действия, използвайте кратки и ясни изречения. Насърчавайте го да изразява желанията си с думи или жестове. Това е важна част от ограмотяването на деца със специални образователни потребности."
								/>
								<PuzzleIconReview
									style="background-color:#E11172;"
									class="important-lg:h-570px important-h-580px"
									puzzleclass="c-brand-purple w-6 mr-2"
									img="/assets/SOP/развиване-двигателни-когнитивни-умения-чрез-игра.webp"
									alt="Развиване на двигателни и когнитивни умения чрез игра за деца със соп."
									title="Развиване на двигателни и когнитивни умения чрез игра"
									desc="Практикувайте ежедневни упражнения за деца със СОП като игри с подреждане, сортиране, строене и рисуване. Те подпомагат фината моторика, координацията и логическото мислене."
								/>
								<PuzzleIconReview
									style="background-color:#088F9D;"
									class="important-lg:h-570px important-h-580px"
									puzzleclass="c-brand-orange w-6 mr-2"
									img="/assets/SOP/насърчаване-социални-умения-семейна-среда.webp"
									alt="Насърчаване на социални умения в семейна среда на деца със соп."
									title="Насърчаване на социални умения в семейна среда"
									desc="Играйте заедно, редувайте се, задавайте въпроси и стимулирайте взаимодействието дори обикновените семейни игри могат да подкрепят адаптацията на деца със СОП."
								/>
								<PuzzleIconReview
									style="background-color:#FA7402;"
									class="important-lg:h-570px important-h-580px"
									puzzleclass="c-brand-blue w-6 mr-2"
									img="/assets/SOP/предсказуема-спокойна-среда-дете-соп.webp"
									alt="Създаване на предсказуема и спокойна среда за деца със соп."
									title="Създаване на предсказуема и спокойна среда"
									desc="Ясната последователност от действия през деня дава сигурност и улеснява обучението на деца със специални образователни потребности. Използвайте визуални графици или картинки, които да помагат на детето да се ориентира в ежедневието."
								/>
							</ReviewSlider>
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
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Целенасочени усилия</p>
								<p class="c-paper">Процесът изисква значително време и усилия, както за подготовка така и за практика от страна на родителите. За постигане на добър ефект са необходими няколко часа на ден за разработени уроци за деца със СОП у дома като образователни игри или четене.</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-brand-blue px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Търпение и последователност</p>
								<p class="c-paper">Заредете се с постоянство и търпение в обучението, защото може да отнеме седмици или месеци преди да забележите резултати. Бъдете търпеливи и постоянни. Всяко малко постижение е стъпка напред, празнувайте го и запазете позитивната нагласа.</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-#F7871D px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Инвестиция на време и ресурси</p>
								<p class="c-paper">Подходът със собствени сили често е по-бюджетен, но прогресът може да бъде бавен без наличието на професионална подкрепа и насоки.  За по-добър ефект можете да използвате сензорни играчки и специализирани учебни пособия, които изискват допълнителна инвестиция.</p>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<div class="relative">
					<BackgroundIcons />
					<div class="gap-12 pb-0 pt-50px xl:px-30 mx-20px mx-auto">
						<H3Blue title="Резултати от терапията в домашни условия" />
						<h4>Какъв резултат можете да очаквате?</h4>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start ">
								<p class="mt-0">С верния подход децата със СОП могат да постигнат видими успехи в образованието и в развитието си. Ежедневно вложените усилия в образователни занимания могат да доведат до постепенно подобрение в комуникативните и двигателните умения, независимо изпълнение на ежедневни дейности и социализиране.</p>
								<p>Важно е да се има предвид, че без професионална подкрепа резултатите може да се появяват по-бавно и да бъдат по-ограничени.</p>
							</div>
						</AnimatedComponent>
					</div>

					<DoodleDecor variant="pink" />

					<section class="mb-70px max-w-1500px px-20px mx-auto pt-10 md:pt-20">
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
												Прекрасно място за децата и родителите!<br />
												Sense Center е истинско съкровище! Всичко е организирано професионално, а обстановката е толкова уютна и приветлива. Уверена съм, че детето ми е в най-добрите ръце.
											</>}
											name="An-Mari Petkova"
											hrefGoogleReview="https://maps.app.goo.gl/nEvL5m6BfSxpvHNr8"
											class="important-h-350px important-sm:h-150px important-md:h-500px important-lg:h-400px important-xl:h-400px"
										/>
										<StarReview
											reviewText={<>
												Великолепно отношение и професионализъм! Детето ми се чувства прекрасно там, винаги ходи с огромно желание и отбелязва значителен напредък, благодарение на този млад и отдаден екип.
											</>}
											name="Elena Todorova"
											hrefGoogleReview="https://maps.app.goo.gl/FFvXGZ89PWqwouys8"
											class="important-h-350px important-sm:h-150px important-md:h-500px important-lg:h-400px important-xl:h-400px"
										/>
										<StarReview
											reviewText={<>
												Детето ни посещава център SENSE от три месеца- ходи с желание и се чувства добре. Компетентен и отзивчив екип с чудесна грижа за децата.
											</>}
											name="Мария Георгиева"
											hrefGoogleReview="https://maps.app.goo.gl/xfxnK7Fzobi6Z2WZ8"
											class="important-h-350px important-sm:h-150px important-md:h-500px important-lg:h-400px important-xl:h-400px"
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
											class="important-h-350px important-sm:h-150px important-md:h-500px important-lg:h-400px important-xl:h-400px"
										/>
										<StarReview
											reviewText={<>
												Екип от професионалисти, позитивизъм и топло отношение към децата ни.<br />
												Много сме им благодарни, тъй като детето ни демонстрира видим напредък само за няколко месеца! ❤️
											</>}
											name="Даниел Иванов"
											hrefGoogleReview="https://maps.app.goo.gl/bCeoZptFpRybrbWbA"
											class="important-h-350px important-sm:h-150px important-md:h-500px important-lg:h-400px important-xl:h-400px"
										/>
									</ReviewSlider>
								</AnimatedComponent>
							</div>
						</div>
					</section>
				</div>
			</section>
			<GradientFooter />
		</>
	);
}
