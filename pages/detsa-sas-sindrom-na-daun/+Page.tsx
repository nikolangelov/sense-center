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
					class="
					mb-20
					mx-[-21px]
					relative 
					h-[100vh] 
					bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/дете-синдром-даун-мобилно.webp)] 
					md:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/дете-синдром-даун.webp)] 
					bg-[position:right_30%_bottom_80%] 
					bg-no-repeat 
					bg-cover 
					[mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.8)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)] 
					[-webkit-mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)]
					"
					role="img"
					aria-label=""
				></div>
			</div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="flex flex-col justify-center items-center left-0 right-0 px-3 my-0 mx-auto absolute top-75% lg-top-75% text-center w-full" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="c-paper mb-3 md:mb-7 md:px-0 px-5">Деца със Синдром на Даун</h1>
							</AnimatedComponent>
							<AnimatedComponent class="important-delay-300 font-300 c-paper text-center mb-0 font-size-4.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 leading-5.5">Какво да очакваме и как да подкрепим детето</AnimatedComponent>

							<AnimatedComponent class="important-delay-600 mt-10 float-left md:pr-5px relative text-center max-w-1240px">
								<PuzzleButton />
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="md:pb-10 lg:px-30">
				<H2Echo
					maintitle="Какво е Синдром на Даун"
					title="Синдром на Даун"
					bgImage="/assets/sindrom-na-daun/деца-синдром-даун.webp"
					bgSize="250%"
					bgPosition="right 50% top 100%"
				/>
			</div>

			<section class="max-w-1500px md:pt-10 xl:mx-auto mx-20px flex md:flex-row flex-col justify-center items-center md:gap-8">
				<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
					<AnimatedComponent>
						<div class="w-full h-full">
							<div class="bg-paper mx-auto">
								<div class="">
									<div class="mx--20px">
										<img src="/assets/sindrom-na-daun/деца-синдром-даун.webp" alt="Деца със синдром на Даун" class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
									</div>
									<div class="flex flex-col items-center gap-1 relative md:hidden">
										<h2 class="text-transparent bg-clip-text bg-[url(/assets/sindrom-na-daun/деца-синдром-даун.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
											Синдром на Даун
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
							Синдромът на Даун е генетично състояние, причинено от наличието на допълнителна хромозома в 21-вата хромозомна двойка, известно като Тризомия 21. Вместо нормалните 46 хромозоми, хората със Синдром на Даун имат 47. Това е най-често срещаната генетична аномалия, срещаща се при приблизително 1 на 700 раждания, независимо от страна, раса или социална група.
						</p>
						<p class="">
							В ежедневието можете да чуете изразът "слънчеви деца", когато се говори за деца със синдром на Даун, заради тяхната емоционалност, топлота и чистосърдечност.
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
							<h4 class="font-600 text-left pb-2">Физически белези:</h4>
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
										class2="important-h-55"
										style="background-color:#FA7402;"
										title="Бадемовидни очи"
										text="Очите на слънчевите деца със Синдром на Даун са с характерна форма и лек наклон нагоре."
										img="/assets/sindrom-na-daun/бадемовидни-очи-даун.webp"
										alt="Бадемовидни очи синдром на Даун."
									/>
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Малка глава"
										text="Главата може да е по-малка от обичайното за възрастта, което се забелязва още при раждането"
										img="/assets/sindrom-na-daun/дете-малка-глава-даун.webp"
										alt="Дете с малка глава синдром на Даун."
									/>
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Понижен мускулен тонус и забавяне на моторното развитие"
										text="Децата със Синдром на Даун често се движат по-бавно и имат отпусната мускулатура, което влияе на способността им да пълзят, ходят или стоят стабилно."
										img="/assets/sindrom-na-daun/живот-синдром-даун.webp"
										alt="Живот със синдром на Даун."
									/>
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Проблеми с фината моторика"
										text="Задачи, изискващи прецизни движения като хващане на молив или закопчаване може да са предизвикателство за тях."
										img="/assets/sindrom-na-daun/синдром-даун-деца.webp"
										alt="Синдром на даун при деца."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/4">
									<ContainerBox
										class2="important-h-65"
										style="background-color:#FA7402;"
										title="Бадемовидни очи"
										text="Очите на слънчевите деца със Синдром на Даун са с характерна форма и лек наклон нагоре."
										img="/assets/sindrom-na-daun/бадемовидни-очи-даун.webp"
										alt="Бадемовидни очи синдром на Даун."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-h-65"
										style="background-color:#FA7402;"
										style2=""
										title="Малка глава"
										text="Главата може да е по-малка от обичайното за възрастта, което се забелязва още при раждането"
										img="/assets/sindrom-na-daun/дете-малка-глава-даун.webp"
										alt="Дете с малка глава синдром на Даун."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-h-65"
										style="background-color:#FA7402;"
										style2=""
										title="Понижен мускулен тонус и забавяне на моторното развитие"
										text="Децата със Синдром на Даун често се движат по-бавно и имат отпусната мускулатура, което влияе на способността им да пълзят, ходят или стоят стабилно."
										img="/assets/sindrom-na-daun/живот-синдром-даун.webp"
										alt="Живот със синдром на Даун."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-h-65"
										style="background-color:#FA7402;"
										style2=""
										title="Проблеми с фината моторика"
										text="Задачи, изискващи прецизни движения като хващане на молив или закопчаване може да са предизвикателство за тях."
										img="/assets/sindrom-na-daun/синдром-даун-деца.webp"
										alt="Синдром на даун при деца."
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
							<h4 class="font-600 text-left pb-2">Интелектуални нарушения при деца със Синдром на Даун:</h4>
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
										title="Забавено развитие на речта"
										text="Късно проговаряне, трудности с артикулацията и формирането на сложни изречения са често срещани при деца със Синдром на Даун"
										img="/assets/sindrom-na-daun/забавено-развитие-речта-даун.webp"
										alt="Забавено развитие на речта синдром на Даун."
									/>
									<ContainerBox
										style="background-color:#742C8F;"
										title="Слаба или никаква концентрация"
										text="Краткотрайната концентрация и лесното разсейване са типични за децата със Синдром на Даун"
										img="/assets/sindrom-na-daun/слаба-концентрация-синдром-даун.webp"
										alt="Слаба концентрация при синдром Даун."
									/>
									<ContainerBox
										style="background-color:#742C8F;"
										title="Проблеми с научаването на нови неща"
										text="Децата със Синдром на Даун учат по-бавно и имат нужда от повече повторения, визуални помощни средства и индивидуална подкрепа"
										img="/assets/sindrom-na-daun/проблеми-ученето-синдром-даун.webp"
										alt="Проблеми с научаването на нови неща синдром на Даун."
									/>
									<ContainerBox
										style="background-color:#742C8F;"
										title="Трудности с координацията"
										text="Забавено развитие на двигателните умения, което затруднява самообслужването, четенето и писането"
										img="/assets/sindrom-na-daun/трудности-координация-синдром-даун.webp"
										alt="Трудности с координацията синдром."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#742C8F;"
										title="Забавено развитие на речта"
										text="Късно проговаряне, трудности с артикулацията и формирането на сложни изречения са често срещани при деца със Синдром на Даун"
										img="/assets/sindrom-na-daun/забавено-развитие-речта-даун.webp"
										alt="Забавено развитие на речта синдром на Даун."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#742C8F;"
										title="Слаба или никаква концентрация"
										text="Краткотрайната концентрация и лесното разсейване са типични за децата със Синдром на Даун"
										img="/assets/sindrom-na-daun/слаба-концентрация-синдром-даун.webp"
										alt="Слаба концентрация при синдром Даун."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#742C8F;"
										title="Проблеми с научаването на нови неща"
										text="Децата със Синдром на Даун учат по-бавно и имат нужда от повече повторения, визуални помощни средства и индивидуална подкрепа"
										img="/assets/sindrom-na-daun/проблеми-ученето-синдром-даун.webp"
										alt="Проблеми с научаването на нови неща синдром на Даун."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#742C8F;"
										title="Трудности с координацията"
										text="Забавено развитие на двигателните умения, което затруднява самообслужването, четенето и писането"
										img="/assets/sindrom-na-daun/трудности-координация-синдром-даун.webp"
										alt="Трудности с координацията синдром."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<DoodleDecor variant="blue2" />

				<AnimatedComponent class="max-w-1500px mx-auto">
					<p>В случай, че детето Ви има Синдром на Даун при Ви препоръчваме да се консултирате със специалист.</p>
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 md:px-10 py-2 pd:py-4">
						<div class="flex justify-center items-center gap-4">
							<img src="/assets/exclamation-mark-icon.webp" class="w-10 h-10" />
							<p class="font-[MYRIADPRO-Semibold] c-paper uppercase font-size-17px lg:font-size-21px">80-90% от мозъка на детето се развива до 7-годишна възраст</p>
						</div>
						<p class="font-size-15px lg:font-size-18px c-paper mt-2">Ето защо колкото по-рано бъде започната терапия, толкова по-голяма е възможността за напредък в развитието и видими резултати при Синдром на Даун.</p>
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
							img="/assets/sindrom-na-daun/забавяне-комуникативните-умения.webp"
							alt="Забавяне в развитието на речта и комуникативните умения."
							title="Значително забавяне в развитието на речта и комуникативните умения"
							description="Без подходяща терапия, децата със Синдром на Даун могат да изпитват сериозни затруднения в развитието на речта и езика, което води до ограничена способност за изразяване на нуждите и желанията им, както и до трудности в разбирането на околните. В резултат, те могат да се чувстват фрустрирани и да развият поведенчески проблеми често наблюдавани в живота със Синдром на Даун без специализирана помощ."
						/>
						<ServiceContaner
							link=""
							img="/assets/sindrom-na-daun/трудности-самостоятелността-синдром-даун.webp"
							alt="Трудности в социалната интеграция и самостоятелността."
							title="Трудности в социалната интеграция и самостоятелността"
							description="Липсата на целенасочено обучение в ежедневни умения може да ограничи тяхната способност да се грижат за себе си и да затрудни живота на хора със Синдром на Даун. Това води до продължителна зависимост от грижите на други хора и ограничени възможности за пълноценен и независим живот. Те изпитват трудности при създаването и поддържането на приятелства, което предизвиква социална изолация и ниско самочувствие."
						/>
						<ServiceContaner
							link=""
							img="/assets/sindrom-na-daun/риск-свързани-здравословни-проблеми.webp"
							alt="Повишен риск от свързани здравословни проблеми."
							title="Повишен риск от свързани здравословни проблеми"
							description="Синдромът на Даун при деца често е свързан с редица здравословни усложнения, които имат нужда от допълнителни грижи. Без редовно медицинско наблюдение и помощ, хората със Синдром на Даун са изложени на по-висок риск от сърдечни заболявания, проблеми със зрението и слуха, респираторни инфекции и хормонални нарушения. Редовните медицински прегледи и ранната интервенция са ключови за минимизиране на тези рискове."
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
							bgImage="/assets/sindrom-na-daun/синдром-даун-резултати.webp"
							bgSize="250%"
							bgPosition="right 100% top 65%"
						/>
					</div>
				</AnimatedComponent>
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2">
						<img src="/assets/sindrom-na-daun/синдром-даун-резултати.webp" alt="Правилно разпознаване на синдром на Даун." class="w-full h-auto object-cover rounded shadow" />
					</AnimatedComponent>
					<AnimatedComponent class="flex flex-col items-center gap-1 relative mb-2 md:hidden">
						<h2 class="text-transparent bg-clip-text bg-[url(/assets/sindrom-na-daun/синдром-даун-резултати.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
							разпознаване
						</h2>
					</AnimatedComponent>

					<div class="md:hidden block">
						<DoodleDecor variant="purple" />
					</div>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<H3Pink title="Как да разберем дали диагнозата “Синдром на Даун” е правилна" />
						<AnimatedComponent>
							<BackgroundIcons />
							<p class="font-[MYRIADPRO-Semibold] mt--5">
								Синдромът на Даун може да бъде установен още по време на бременността чрез пренатални изследвания. След раждането диагнозата се потвърждава с преглед и генетично изследване за тризомия 21. Наличието на Синдром на Даун може да бъде установено чрез:
							</p>
							<ul style="list-style-type: none;">
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-25px md:max-w-30px m-0" src="/assets/sense-logo-30px.webp" />
										<p class="my-2"><span class="font-[MYRIADPRO-Semibold]">Пренатални изследвания</span> – Те включват неинвазивни скринингови тестове като биохимични изследвания и ултразвук.</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-25px md:max-w-30px m-0" src="/assets/sense-logo-30px.webp" />
										<p class="my-2"><span class="font-[MYRIADPRO-Semibold]">Физически признаци след раждането</span> – Лекарите забелязват характерни черти, като специфичната форма на очите, по-нисък мускулен тонус и малките уши.</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-25px md:max-w-30px m-0" src="/assets/sense-logo-30px.webp" />
										<p class="my-2"><span class="font-[MYRIADPRO-Semibold]">Генетичен анализ</span> – Провеждане на изследвания след раждането, с които се потвърждава наличието на допълнителна хромозома 21.</p>
									</div>
								</li>
							</ul>
							<p class="pb-5">
								Съществуват и други генетични състояния с подобни характеристики като тези на Синдром на Даун. Например като синдром на чупливата Х хромозома, който също води до интелектуални затруднения. При съмнение за синдром на чупливата Х хромозома, консултацията със специалист е задължителна.
							</p>
							<PuzzleButton />
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="relative md:pb-30 xl:px-30 mx-20px">
				<H3Blue title="Първична оценка при деца със синдром на Даун" />
				<div class="flex flex-col justify-center items-center max-w-1500px mx-auto px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:py-10 py-5 bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
						<p class="c-paper mb-1">
							В Sense Center предлагаме първична оценка за деца със Синдром на Даун.
						</p>
						<p class="c-paper">
							По време на консултацията се извършва обследване на поведението и актуалното състояние на детето.
						</p>
						<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="" class="my-5 w-full h-auto object-cover rounded shadow" />
						<p class="c-paper mb-1">
							Отбелязват се дефицитите в развитието и аспектите, които имат нужда от подкрепа.
						</p>
						<p class="c-paper">
							Едновременно с това специалистите интервюират родителите за техните наблюдения върху поведението и развитието на детето.
						</p>
						<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="" class="mt-5 w-full h-auto object-cover rounded shadow" />
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
										reviewText="“Винаги знам, че винаги мога да разчитам на тях. Те са доста отзивчиви, откликват веднага на нашите въпроси. ” "
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
									reviewText="“Винаги знам, че винаги мога да разчитам на тях. Те са доста отзивчиви, откликват веднага на нашите въпроси. ” "
									name="Станимира Миленова"
									date="майка на Самуил, 6 г. разстройство на речта"
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
								<img class="w-full h-full" src="/assets/sindrom-na-daun/насърчаване-учене-чрез-игра.webp" alt="Насърчавайте на ежедневното учене чрез игра" />
							</div>
							<div class="w-full py-20px text-center">
								<div class="flex flex-col gap-1">
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Насърчавайте ежедневното учене чрез игра
									</h4>
									<p class="text-left mt-2">
										Играта е мощен инструмент за развитие. Пейте заедно, подреждайте кубчета, сортирайте цветове или рисувайте. Такива занимания развиват речта, фината моторика и социалните умения на децата със Синдром на Даун по естествен начин.
									</p>
									<div class="my-5">
										<img class="w-full h-full" src="/assets/sindrom-na-daun/търсене-надеждна информация-синдром-даун.webp" alt="Търсене на надеждна информация за синдром на Даун" />
									</div>
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Потърсете надеждна информация от достоверни източници
									</h4>
									<p class="text-left mt-2">
										В интернет има безплатни упражнения, видеа и съвети от специалисти, които могат да Ви помогнат да подкрепите слънчевите деца със Синдром на Даун у дома. Присъединяването към родителски групи също дава полезни насоки, подкрепа и усещането, че не сте сами.
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
					bgImage="/assets/detsa-s-autizam/различни-методи-терапии.webp"
					bgSize="300%"
					bgPosition="right 80% top 100%"
				/>

				<section class="max-w-1500px md:pt-10 xl:mx-auto md:mx-20px mx--20px flex md:flex-row flex-col justify-center items-center md:gap-8">
					<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
						<AnimatedComponent>
							<div class="w-full h-full">
								<div class="bg-paper mx-auto">
									<div class="">
										<div class="mx--20px">
											<img src="/assets/detsa-s-autizam/различни-методи-терапии.webp" alt="Различни методи за терапия." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
										</div>
										<div class="flex flex-col items-center gap-1 relative md:hidden">
											<h2 class="text-transparent bg-clip-text bg-[url(/assets/detsa-s-autizam/различни-методи-терапии.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
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
									Синдромът на Даун не може да бъде излекуван, тъй като това е генетично състояние.  Въпреки това с необходимата подкрепа децата, родени със Синдром на Даун, могат да живеят пълноценен и независим живот. Те разполагат с потенциал за учене и развитие, особено при практическо участие в различни дейности, като грижа за животни или помощ у дома. Търпението и спокойствието, които притежават, им позволяват да се занимават продължително време с едно и също нещо. Затова е важно да бъдат активно ангажирани и насърчавани от най-ранна възраст.
								</p>
								<p class="text-left mt-2">
									Специализираното обучение и професионалната подкрепа им помагат да развият своите способности и да разгърнат пълния си потенциал в ежедневието и общуването.
								</p>
								<p class="text-left mt-2">
									Терапевтичната програма е насочена към развитие на речта, фината и грубата моторика, социалните умения и самостоятелността, така че детето да се адаптира по-лесно към заобикалящата го среда. Това е основата за един качествен и щастлив живот със Синдром на Даун.
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
						<p class="md:px-10 md:mb-5 mb-2 mt-0 c-gray-700 leading-5 font-size-14px font-400 italic tracking md:pl-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.3px;">Препоръчват се от 8 до 24 сесии седмично за оптимални резултати</p>
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
							style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/ерготерапия-деца.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Ерготерапия"
							description="Подобрява координацията и прецизността на ръцете и пръстите, което е ключово за писане, рисуване и работа с малки предмети"
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
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/многофункционална-стая.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Многофункционална стая"
							description="Стимулира имитационни умения, подпомага изпълнението на инструкции, развива фината моторика"
						/>

						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Когнитивно-поведенческа терапия"
							description="Помага на децата да разберат и променят негативните си мисли и поведение, за да се справят по-добре с емоциите и отношенията с другите"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Консултация с хомеопат"
							description="Подпомага цялостното здраве и емоционално равновесие на детето, като подкрепя организма по естествен начин и допринася за по-добро ежедневно функциониране"
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Игрова терапия"
							description="Подобрява емоционалната регулация, развива социални, когнитивни и двигателни умения и намалява тревожността в сигурна и подкрепяща среда."
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
										{ src: "/assets/sindrom-na-daun/деца-синдром-чупливата-х-хромозома.webp", alt: "Деца със синдром на чупливата х хромозома." },
										{ src: "/assets/sindrom-na-daun/хора-синдром-даун.webp", alt: "Хора със синдром на даун." },
										{ src: "/assets/sindrom-na-daun/синдром-чупливата-х-хромозома.webp", alt: "Синдром на чупливата х хромозома." },
									]}
								/>
							</div>
							<p class="text-left mt-2 mb-12">
								Професионалната терапия за дете със Синдром на Даун се адаптира спрямо индивидуалните му нужди и възможности. Чрез постоянство и подкрепа могат да се постигнат значителни резултати, като подобряване на социалните умения, речево развитие и формиране на умения за отговор на въпрос. Терапевтите използват утвърдени методи и персонализирани програми, които подобряват комуникативните умения при взаимодействие с връстници при групова работа. С времето детето обогатява речниковия си запас и значително подобрява социалните си умения.
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
									{ name: "Karina Stoqnova" },
									{ name: "Philip Markovski" },
									{ name: "Monika Marinova" },
									{ name: "Ivailo Zhekov" },
									{ name: "Viktoria Simeonova" },
								]}>
								<GoogleStarReview
									img="/assets/GoogleLogoPNGImage.webp"
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
								/>
								<GoogleStarReview
									img="/assets/GoogleLogoPNGImage.webp"
									reviewText={
										<>
											Детски център Sense върна усмивките на нашите лица. В центъра се излекува нашият син Марин. Благодаря ви от сърце за професионализма и отдадеността. Вечно благодарни: семейство Марковски
										</>
									}
									name="Philip Markovski"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
								/>
								<GoogleStarReview
									img="/assets/GoogleLogoPNGImage.webp"
									reviewText={
										<>
											Много уютно място, съобразено с всички нужди и предпоставки за един полезен и приятен престой за всички деца. Персонала от специалисти е много добре подбран и обучен, и влагат много желание и енергия в работата си. С подкрепата и съдействието им, с напредъка в развитието, уменията и знанията, които получават децата ни, са и видимо щастливи след заниманията в центъра! Препоръчвам!
										</>
									}
									name="Monika Marinova"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
								/>
								<GoogleStarReview
									img="/assets/GoogleLogoPNGImage.webp"
									reviewText={
										<>
											Развитие и забавление в едно!<br />
											Моето дете обожава заниманията в Sense Center! Откакто посещаваме центъра, виждам значителен напредък в неговите социални и творчески умения. Програмите са разнообразни и поднесени по много достъпен начин.

										</>
									}
									name="Viktoria Lybomir"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
								/>
								<GoogleStarReview
									img="/assets/GoogleLogoPNGImage.webp"
									reviewText={
										<>
											Дъщеря ми посещава центъра от почти 3 месеца . При първото ни посещение ни направи впечатление колко много специалисти има и колко много терапии предлагат . След прегледа се установи , че тя е за Звукова и Речева терапия . Напредъка до момента е огромен .
										</>
									}
									name="Atanaska Beleva"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
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
									class="important-lg:h-450px important-h-480px"
									puzzleclass="c-brand w-6 mr-2"
									img="/assets/sindrom-na-daun/игри-различни-текстури-предмети.webp"
									alt="Игри с различни текстури и предмети."
									title="Игри с различни текстури и предмети"
									desc="Осигурете на детето предмети с различни форми, текстури и звуци за докосване и изследване."
								/>
								<PuzzleIconReview
									style="background-color:#E11172;"
									class="important-lg:h-450px important-h-480px"
									puzzleclass="c-brand-purple w-6 mr-2"
									img="/assets/sindrom-na-daun/групиране-предмети-цветове-форми.webp"
									alt="Групиране на предмети по цветове и форми."
									title="Групиране на предмети по цветове и форми"
									desc="Научете детето да обобщава и групира предмети по цветове или по вид."
								/>
								<PuzzleIconReview
									style="background-color:#088F9D;"
									class="important-lg:h-450px important-h-480px"
									puzzleclass="c-brand-orange w-6 mr-2"
									img="/assets/sindrom-na-daun/четене-книжки-картинки-синдром-даун.webp"
									alt="Четене на книжки с картинки  при деца със синдром на Даун."
									title="Четене на книжки с картинки"
									desc="Давайте на детето книжки с ярки и ясни илюстрации и стимулирайте имитация на звуци и действия."
								/>
								<PuzzleIconReview
									style="background-color:#FA7402;"
									class="important-lg:h-450px important-h-480px"
									puzzleclass="c-brand-blue w-6 mr-2"
									img="/assets/sindrom-na-daun/имитиране-движения-звуци.webp"
									alt="Имитиране на движения и звуци при деца със синдром на Даун."
									title="Имитиране на движения и звуци"
									desc="Играйте игри с прости звуци и движения, като духане на балони, гримаси, и игри с пръсти."
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
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Знания и самообучение</p>
								<p class="c-paper">Отделете време да се запознаете с особеностите на Синдрома на Даун и с добрите практики за подкрепа в домашна среда. Четете, гледайте обучителни видеа и се информирайте за съвременни подходи.
								</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-brand-blue px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Търпение и постоянство</p>
								<p class="c-paper">Работата изисква ежедневни усилия. Напредъкът при деца със Синдром на Даун  може да е бавен, но системното повтаряне, окуражаване и търпеливото отношение са в основата на развитието на детето.</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-#F7871D px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Ресурси и емоционална подкрепа</p>
								<p class="c-paper">Инвестицията в образователни материали, книги и развиващи играчки може да бъде значителна и често е съпроводена с емоционално натоварване, затова е важно и Вие, като родител да получавате нужната подкрепа, за да се справяте с трудностите и да запазите вътрешния си баланс.</p>
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
								<p class="mt-0">С постоянство и търпение Вашите усилия могат да допринесат за развитие на речта, двигателните и социалните умения на детето, както и за по-голяма самостоятелност в ежедневието.</p>
								<p class="">Напредъкът може да бъде по-бавен и по-слабо изразен в сравнение с резултатите от професионална терапия, тъй като всяко дете се развива индивидуално и със собствено темпо. Ако с времето не забелязвате подобрение, е добре да се консултирате със специалист.</p>
							</div>
						</AnimatedComponent>
					</div>

					<DoodleDecor variant="pink" />

					<AnimatedComponent class="xl:px-30 mx-20px">
						<H3Pink title="Първите сигнали на Синдром на Даун" />
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
												Прекрасно място за децата и родителите!<br />
												Sense Center е истинско съкровище! Всичко е организирано професионално, а обстановката е толкова уютна и приветлива. Уверена съм, че детето ми е в най-добрите ръце.
											</>}
											name="An-Mari Petkova"
											hrefGoogleReview="https://maps.app.goo.gl/nEvL5m6BfSxpvHNr8"
											class="important-h-350px important-sm:h-150px important-md:h-600px important-lg:h-500px important-xl:h-500px"
										/>
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
