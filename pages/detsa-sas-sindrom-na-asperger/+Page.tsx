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
					class="mb-20 mx-[0px] relative h-[100vh] md:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3)),url(/assets/asperger/синдром-аспергер.webp)] bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3)),url(/assets/asperger/синдром-аспергер-мобилно.webp)] bg-[position:right_100%_bottom_80%] md:bg-[position:right_100%_bottom_50%] bg-no-repeat bg-cover [mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.8)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)]" role="img" aria-label="Деца със синдром на Аспергер"></div>
			</div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="flex flex-col justify-center items-center left-0 right-0 px-3 my-0 mx-auto absolute top-78% lg-top-75% text-center w-full" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="c-paper mb-3 md:mb-7 md:px-0 px-5">Деца със синдром на Аспергер</h1>
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
					maintitle="Какво е синдром на Аспергер"
					title="Аспергер"
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
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</section>

				<section class="md:w-1/2">
					<AnimatedComponent class="w-full md:px-3 my-auto">
						<p class="mt-10 md:mt-0">
							Аутизъм, синдром на Аспергер и др. са психични разстройства от аутистичния спектър, които се характеризират със значителни трудности в социалното взаимодействие и невербалното общуване. Нарича се още “синдром на малкия професор”, тъй като децата със синдром на Аспергер обичат да говорят за любимите си предмети или интереси с най-малки подробности.
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
							<H3Blue title="Най-често срещани признаци при деца със синдром на Аспергер" />
							<h4 class="font-600 text-left pb-2">Социално поведение и комуникация:</h4>
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
										title="Трудности при разпознаване на емоции"
										text="Дете със синдром на Аспергер често не разпознава интонация, мимики и жестове, което затруднява разчитането на емоциите на другите."
										img="/assets/SOP/ограмотяване-деца-със-специални-образователни-потребности.webp"
										alt="Дете със специални образователни потребности."
									/>
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Затруднено общуване с връстници"
										text="Изпитва трудности да започва или поддържа разговор и предпочита да играе само."
										img="/assets/SOP/обучение-деца-специални-образователни-потребности.webp"
										alt="Обучение на деца със специални образователни потребности."
									/>
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Нетипична употреба на езика"
										text="Детето със синдром на Аспергер може да бъде многословно, да прави резки преходи в разговора и да не разбира нюансите в речта на другите."
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
										title="Трудности при разпознаване на емоции"
										text="Дете със синдром на Аспергер често не разпознава интонация, мимики и жестове, което затруднява разчитането на емоциите на другите."
										img="/assets/SOP/ограмотяване-деца-със-специални-образователни-потребности.webp"
										alt="Дете със специални образователни потребности."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Затруднено общуване с връстници"
										text="Изпитва трудности да започва или поддържа разговор и предпочита да играе само."
										img="/assets/SOP/обучение-деца-специални-образователни-потребности.webp"
										alt="Обучение на деца със специални образователни потребности."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Нетипична употреба на езика"
										text="Детето със синдром на Аспергер може да бъде многословно, да прави резки преходи в разговора и да не разбира нюансите в речта на другите."
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
							<h4 class="font-600 text-left pb-2">Когнитивни и поведенчески особености:</h4>
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
										title="Силен интерес към конкретна тема"
										text="Фокусира се върху една област – например карти, числа или космос и говори само за нея."
										img="/assets/SOP/решаване-казуси-деца-соп.webp"
										alt="Социални затруднения и решаване на казуси за деца със соп."
									/>
									<ContainerBox
										style="background-color:#742C8F;"
										title="Слабо развита координация на движенията"
										text="Детето със синдром на Аспергер може да има затруднения при спорт, писане или други дейности, изискващи фина моторика."
										img="/assets/SOP/упражнения-деца-соп.webp"
										alt="Упражнения за деца със соп и поведенчески проблеми."
									/>
									<ContainerBox
										style="background-color:#742C8F;"
										title="Повишена чувствителност към сетивни стимули"
										text="Много деца болни от синдром на Аспергер реагират силно на звуци, ярка светлина или определени текстури на дрехи и предмети."
										img="/assets/SOP/приобщаващо-образование-деца-соп.webp"
										alt="Емоционална нестабилност и тревожност при деца със соп."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/3">
									<ContainerBox
										style="background-color:#742C8F;"
										title="Силен интерес към конкретна тема"
										text="Фокусира се върху една област – например карти, числа или космос и говори само за нея."
										img="/assets/SOP/решаване-казуси-деца-соп.webp"
										alt="Социални затруднения и решаване на казуси за деца със соп."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										style="background-color:#742C8F;"
										title="Слабо развита координация на движенията"
										text="Детето със синдром на Аспергер може да има затруднения при спорт, писане или други дейности, изискващи фина моторика."
										img="/assets/SOP/упражнения-деца-соп.webp"
										alt="Упражнения за деца със соп и поведенчески проблеми."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										style="background-color:#742C8F;"
										title="Повишена чувствителност към сетивни стимули"
										text="Много деца болни от синдром на Аспергер реагират силно на звуци, ярка светлина или определени текстури на дрехи и предмети."
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
					<p>Наличието на тези признаци може да бъде индикация, но не е категорично доказателство за синдром на Аспергер. <span class="font-[MYRIADPRO-Semibold]">В случай, че забележите някои от тях да се проявяват при Вашето дете Ви препоръчваме да се консултирате със специалист.</span></p>
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand max-w-800px mx-auto px-6 md:px-10 py-2 pd:py-4">
						<div class="flex justify-center items-center gap-4">
							<img src="/assets/exclamation-mark-icon.webp" class="w-10 h-10" />
							<p class="font-[MYRIADPRO-Semibold] c-paper uppercase font-size-17px lg:font-size-21px">80 - 90% от мозъка на детето се развива до 7-годишна възраст</p>
						</div>
						<p class="font-size-15px lg:font-size-18px c-paper mt-2">Ето защо ранната грижа за деца със синдром на Аспергер е решаваща, колкото по-рано бъде започната терапия, толкова по-голяма е възможността за видимо подобрение на актуалното състояние и напредване в развитието.</p>
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
							img="/assets/SOP/програми-деца-специални-образователни-потребности.webp"
							alt="Програми за деца със соп и забавено когнитивно развитие."
							title="Затруднена социална интеграция"
							description="Без подходящи методи при работа с деца със синдром на Аспергер, децата изпитват трудности в създаването на приятелства, разчитането на социални сигнали и участието в разговори. Това често води до изолация, ниско самочувствие, депресия и тревожност."
						/>
						<ServiceContaner
							img="/assets/SOP/социална-изолация-деца-соп.webp"
							alt="Социална изолация при деца със соп."
							title="Поведенчески и емоционални затруднения"
							description="Липсата на подходяща психологическа работа при дете със синдром на Аспергер може да доведе до чести изблици на гняв, тревожност, депресивни състояния или самонараняващо поведение. Тези реакции обикновено са свързани с невъзможността за ефективно изразяване на нужди и емоции."
						/>
						<ServiceContaner
							img="/assets/SOP/поведенчески-проблеми-деца-соп.webp"
							alt="Поведенчески проблеми при деца със соп."
							title="Трудности в образованието и кариерата"
							description="Ако не се осигури индивидуална подкрепа и логопедична терапия при деца със синдром на Аспергер, се появяват проблеми в училище и липса на самостоятелност, които в дългосрочен план водят до ограничени професионални перспективи."
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

					<div class="md:hidden block pt-15">
						<DoodleDecor variant="purple" />
					</div>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<H3Pink title="Как да разберем дали диагнозата “синдром на Аспергер” е правилна" />
						<AnimatedComponent>
							<BackgroundIcons />
							<p class="mt--5 pb-5">
								<span class="font-[MYRIADPRO-Semibold]">Наличието на някои от горепосочените признаци на синдром на Аспергер при малки деца, не означава задължително потвърждение на диагнозата,</span> а е предупредителен знак, който изисква повишено внимание. При съмнение за синдром на Аспергер се препоръчва консултация със специалист в областта на детската психология, който използва специализирани тестове за целта.
							</p>
							<p>
								Процесът включва подробно събеседване с родителите относно техните наблюдения, както и прилагане на специализирани тестове за оценка на когнитивни и комуникативни умения. Целта е да се установят типичните особености на състоянията от аутистичния спектър, които може да не са очевидни на пръв поглед.
							</p>
							<p>
								Ако имате съмнения, не отлагайте консултацията със специалист. Навременната и точна оценка е от решаващо значение за стартиране на ефективна терапия за деца със синдром на Аспергер и подкрепа.
							</p>
							<PuzzleButton />
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="relative md:pb-30 xl:px-30 mx-20px">
				<H3Blue title="Първична оценка при съмнение за синдром на Аспергер" />
				<div class="flex flex-col justify-center items-center mx-auto px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:pb-10 md:pt-4 py-5 md:bg-gradient-to-t lg:from-paper lg:to-paper bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
						<div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
							<div class="xl:w-1/2 w-full md:pl-7">
								<p class="c-paper lg:c-paper-inv mb-1">
									В Sense Center предлагаме <strong class="font-[MYRIADPRO-Bold]">първична оценка</strong> за деца при съмнение за забавяне в развитието.
								</p>
								<p class="c-paper lg:c-paper-inv">
									По време на консултацията се извършва обследване на поведението и актуалното състояние на детето.
								</p>
								<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Първична оценка при съмнение за соп." class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv mb-1">
									Оценяват се социалните умения и невербалното общуване.
								</p>
								<p class="c-paper lg:c-paper-inv">
									Едновременно с това специалистите интервюират родителите за техните наблюдения и притеснения.
								</p>
								<div class="pt-8 flex md:flex-row flex-col justify-center items-center">
									<PuzzleButton />
								</div>
							</div>
							<div class="xl:w-1/2 w-full">
								<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Първична оценка при съмнение за соп." class="mt-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv italic font-300 mt-2 leading-5 lg:leading-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
									Препоръчително е да донесете всички налични медицински документи, които могат да бъдат от полза за изясняване на актуалното състояние.
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
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/umstvena-izostanalost/родител-дете-умствено-изоставане-5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Изключително грижовни, изключително отдадени, хора, подбрани наистина с огромна любов към децата. Хора, които ги е грижа. Винаги, когато сме имали нужда от някаква подкрепа сме я срещали тук.”"
										name="Александър Соклев"
										date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
									/>
									<ReviewersImageReview
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“ Обясниха ми много подробно, много разбираемо за какво става въпрос, пътят, по който ще минем и така успешно вървим и до днес.”"
										name="Калина Митрева"
										date="майка на Филип, 5 г., съмнение за Аутизъм"
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
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/umstvena-izostanalost/родител-дете-умствено-изоставане-5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Изключително грижовни, изключително отдадени, хора, подбрани наистина с огромна любов към децата. Хора, които ги е грижа. Винаги, когато сме имали нужда от някаква подкрепа сме я срещали тук.”"
									name="Александър Соклев"
									date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
								/>
								<ReviewersImageReview
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“ Обясниха ми много подробно, много разбираемо за какво става въпрос, пътят, по който ще минем и така успешно вървим и до днес.”"
									name="Калина Митрева"
									date="майка на Филип, 5 г., съмнение за Аутизъм"
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
										Потърсете надеждна информация и осигурете спокойна среда
									</h4>
									<p class="text-left mt-2">
										Четете достъпна и проверена информация, която да Ви помогне да разберете по-добре какви са потребностите при деца със синдром на Аспергер. Създайте у дома спокойна, сигурна и предвидима среда, която намалява стреса и улеснява ежедневието. Това е основата, върху която да градите допълнителна подкрепа.
									</p>
									<div class="my-5">
										<img class="w-full h-full" src="/assets/SOP/търсене-надеждна-информация-деца-соп.webp" alt="Търсене на надеждна информация от достоверни източници за деца със соп." />
									</div>
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Използвайте практически занимания
									</h4>
									<p class="text-left mt-2">
										Използвайте визуални помощни средства като графици и илюстрации, които улесняват разбирането и самостоятелната работа. Подпомагайте интересите и силните страни на детето чрез игри и занимания за изграждане на социални умения при деца със синдром на Аспергер.
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
									Синдромът на Аспергер е нарушение в развитието, което влияе на мозъчната функция и поради тази причина не може да бъде „излекувано“. Въпреки това, с подходяща психологическа работа при дете със синдром на Аспергер, може да се постигне значителен напредък.
								</p>
								<p class="text-left mt-2">
									С нужното време и търпение децата със синдром на Аспергер могат да усвоят основни умения, които да им помогнат в изпълнението на ежедневните дейности.
								</p>
								<p class="text-left mt-2">
									Целенасочената грижа за деца със синдром на Аспергер помага на детето да развие максимално уменията си и да разгърне пълния си потенциал.
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
						<p class="xl:px-5 md:mb-5 mb-2 mt-0 c-gray-700 leading-5 font-size-14px font-400 italic tracking" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.3px;">Препоръчват се от 6 до 12 сесии седмично за оптимални резултати</p>
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
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/психомоторика.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Психомоторика"
									description="Подобрява контрола при ходене, бягане и скачане, както и координацията на ръцете и пръстите за по-прецизно писане и рисуване"
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/ерготерапия-деца.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Ерготерапия"
									description="Подобрява координацията и прецизността на ръцете и пръстите, което е ключово за писане, рисуване и работа с малки предмети"
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
							<img class="mb-7" src="/assets/SOP/подобрение-терапия-деца-соп.webp" alt="Подобрение след терапия на дете със соп." />
							<p class="text-left mt-2">
								С подходяща логопедична терапия при деца със синдром на Аспергер се развиват значително социалните и емоционалните умения. Те започват по-уверено да разпознават социални сигнали, да участват в разговори и да изграждат взаимоотношения.
							</p>
							<p class="text-left mt-2">
								Комуникацията също се подобрява, децата със синдром на Аспергер се учат да изразяват по-ясно своите нужди и емоции, което намалява напрежението и води до по-спокойно взаимодействие с околните.
							</p>
							<p class="text-left mt-2">
								Постепенно се развиват умения за самостоятелно справяне с ежедневни ситуации и управление на емоциите, което подпомага адаптацията както у дома, така и в социална среда.
							</p>
							<p class="text-left mt-2 mb-12">
								Важно е да се отбележи, че всяко дете е уникално и прогресът при всяко е различен. Някои деца могат да покажат бързи подобрения, докато при други процесът може да е по-бавен. Ключът за терапията на деца със синдром на Аспергер е в постоянството и сътрудничеството между родители, специалисти и самото дете.
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
									img="/assets/GoogleLogoPNGImage.webp"
									reviewText={
										<>
											Марти постъпи в център Sense преди два месеца, без да може да говори и разбира, без навици дори. Днес той е съвсем различно дете, общува, пее песни и ни разбира, дори в детската градина ни съобщиха, че вече всичко е в норма при него. Препоръчвам с две ръце центъра, защото всичко в него е на ниво и най-вече детето обожава да ходи в него. Разбира се, продължаваме, но вече много по-спокойни.
										</>
									}
									name="yt-2007"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/9u3gHoJAR32khXGa7"
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
									img="/assets/GoogleLogoPNGImage.webp"
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
									img="/assets/GoogleLogoPNGImage.webp"
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
									title="Изготвяне на структура и рутина"
									desc="Предвидимата рутина е важна част от техники за работа с дете със синдром на Аспергер. Създаването на ясен дневен режим носи спокойствие и сигурност на детето."
								/>
								<PuzzleIconReview
									style="background-color:#E11172;"
									class="important-lg:h-570px important-h-580px"
									puzzleclass="c-brand-purple w-6 mr-2"
									img="/assets/SOP/развиване-двигателни-когнитивни-умения-чрез-игра.webp"
									alt="Развиване на двигателни и когнитивни умения чрез игра за деца със соп."
									title="Визуализация"
									desc="Използвайте картинки, графики и списъци, за да обясните задачи и да помогнете на детето да организира мислите си. Тези методи често се използват в професионалната логопедична терапия на деца със синдром на Аспергер."
								/>
								<PuzzleIconReview
									style="background-color:#088F9D;"
									class="important-lg:h-570px important-h-580px"
									puzzleclass="c-brand-orange w-6 mr-2"
									img="/assets/SOP/насърчаване-социални-умения-семейна-среда.webp"
									alt="Насърчаване на социални умения в семейна среда на деца със соп."
									title="Упражнения върху социални умения"
									desc="Ролевите игри са ефективен метод за изграждане на социална комуникация и емпатия. Това е ключова част от ежедневната грижа за дете със синдром на Аспергер в домашна среда."
								/>
								<PuzzleIconReview
									style="background-color:#FA7402;"
									class="important-lg:h-570px important-h-580px"
									puzzleclass="c-brand-blue w-6 mr-2"
									img="/assets/SOP/предсказуема-спокойна-среда-дете-соп.webp"
									alt="Създаване на предсказуема и спокойна среда за деца със соп."
									title="Подкрепа"
									desc="Подкрепете интересите на детето и му помогнете да намери начини да ги развива. Много деца с аутизъм и синдром на Аспергер имат специфични силни страни Развиването на тези умения им носи самоувереност и мотивация."
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
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Знания и умения</p>
								<p class="c-paper">Разберете какви са ключовите предизвикателства на състоянието, като социална комуникация или сензорна чувствителност. Проучете различни техники за работа с дете със синдром на Аспергер, които развиват социални умения и подкрепят  обучението.</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-brand-blue px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Търпение и последователност</p>
								<p class="c-paper">Работата с дете със синдром на Аспергер изисква ежедневна практика и последователност. Приложете ролеви игри за подобряване на социалните умения. Изграждането на умения става постепенно и е важно да бъдете търпеливи и подкрепящи.</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-#F7871D px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Инвестиция</p>
								<p class="c-paper">За постигане на по-добри резултати ще е необходимо инвестиране на време и ресурси за специализирани помощни материали, като визуални карти, игри или приложения, които помагат за разпознаване на емоции и развиване на комуникативни умения.</p>
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
								<p class="mt-0">При редовно прилагане на терапия в домашни условия, много деца със синдром на Аспергер постигат напредък в изграждането на самостоятелност, развитие на социални и комуникативни умения, както и по-добро справяне със сензорната чувствителност. Резултатите обаче са индивидуални и зависят от постоянството и предоставената подкрепа. В много случаи е препоръчително домашната терапия да бъде съчетана с професионална помощ за по-добри и устойчиви резултати.</p>
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
												Изключително сме благодарни на целият екип от професионалисти в Sense Center!<br />
												Невероятно мили, сърдечни, квалифицирани млади специалисти, които видимо обичат работата си!<br />
												Напредъкът при Теди е осезаем, продължаваме смело напред и сме сигурни, че ще постигнем още положителни резултати!!! ❤️❤️❤️
											</>}
											name="Karina Stoqnova"
											hrefGoogleReview="https://maps.app.goo.gl/cAVdFNqLJmRJA3bv7"
											class="important-h-450px important-sm:h-250px important-md:h-700px important-lg:h-600px important-xl:h-600px"
										/>
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
												Мишо посещава детски център SENSE от 6 месеца с голямо желание и нетърпение, за това време започна да говори много повече, да се обръща персонално по име към човека, с който иска да общува , започна да се шегува и да играе повече самостоятелно вкъщи. Другите дечица навън започнаха да му правят впечатление. Впечатленията са за много приятна среда за децата, любезно отношение от терапевтите и чести обратни връзки, свързани с развитието и промените в детето.
											</>}
											name="Gergana Berberova"
											hrefGoogleReview="https://maps.app.goo.gl/wGmNCnRdQCHBU22p8"
											class="important-h-350px important-sm:h-150px important-md:h-500px important-lg:h-400px important-xl:h-400px"
										/>
										<StarReview
											reviewText={<>
												Синът ми посещава центъра от около 9 месеца.За този период има сериозен напредък в емоционално,социално и когнитивно развитие.Обогати речника и подобри значително говора,благодарение на екипа от професионалисти работещи с него.
											</>}
											name="Ина Светомирова"
											hrefGoogleReview="https://maps.app.goo.gl/SZrQk55if3tKDYP6A"
											class="important-h-350px important-sm:h-150px important-md:h-500px important-lg:h-400px important-xl:h-400px"
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
