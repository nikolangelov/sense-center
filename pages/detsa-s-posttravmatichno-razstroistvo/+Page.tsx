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
					class="mb-20 mx-[-20px] relative h-[100vh] bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3)),url(/assets/posttravmatichno-razstr/дете-посттравматично-разстройство-мобилно.webp)] md:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3)),url(/assets/posttravmatichno-razstr/дете-посттравматично-разстройство.webp)] bg-[position:right_30%_bottom_80%] md:bg-[position:right_100%_bottom_70%] bg-no-repeat bg-cover [mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.8)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)]" role="img" aria-label="Дете с посттравматично разстройство по време на терапия."></div>
			</div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="flex flex-col justify-center items-center left-0 right-0 px-3 my-0 mx-auto absolute top-78% lg-top-75% text-center w-full" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="c-paper mb-3 md:mb-7 md:px-0 px-5">Деца с посттравматично разстройство</h1>
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
					class="important-font-size-40px important-leading-50px important-md:font-size-4.5rem important-md:leading-5.3rem"
					maintitle="Какво е посттравматично разстройство"
					title="посттравматично разстройство"
					bgImage="/assets/posttravmatichno-razstr/посттравматично-стресово-разстройство.webp"
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
										<img src="/assets/posttravmatichno-razstr/посттравматично-стресово-разстройство.webp" alt="Дете с посттравматично стресово разстройство." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
									</div>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</section>

				<section class="md:w-1/2">
					<AnimatedComponent class="w-full md:px-3 my-auto">
						<p class="mt-10 md:mt-0">
							Посттравматичното стресово разстройство (ПТСР) представлява тревожно разстройство, което може да се развие при деца, преживели или станали свидетели на травматично събитие, свързано със сериозни наранявания, заплаха за физическата им безопасност или смърт. Такива преживявания могат да включват природни бедствия, злополуки, насилие, войни, загуба на близък човек или други ситуации, които причиняват силен страх и стрес.
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
							<H3Blue title="Първите симптоми при деца с посттравматично разстройство, които не бива да игнорирате" />
							<h4 class="font-600 text-left pb-2">Най-често срещани признаци на посттравматично разстройство:</h4>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "1" },
										{ name: "2" },
										{ name: "3" },
										{ name: "4" },
									]}
								>
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										title="Повторно преживяване на травмата"
										text="Чести кошмари, натрапващи спомени или силни физически реакции при напомняне за преживяното."
										img="/assets/posttravmatichno-razstr/посттравматично-разстройство.webp"
										alt="Дете с посттравматично разстройство."
									/>
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Избягване на асоциации"
										text="Избягване на места, хора или ситуации, които напомнят за травмата, както и разговори или мисли, свързани с нея."
										img="/assets/posttravmatichno-razstr/посттравматично-стресово-разстройство-симптоми.webp"
										alt="Посттравматично стресово разстройство симптоми при дете."
									/>
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Повишена възбудимост"
										text="Проблеми със заспиването, раздразнителност, лесна уплаха, проблеми с концентрацията."
										img="/assets/posttravmatichno-razstr/повишена-възбудимост-посттравматично-разстройство.webp"
										alt="Повишена възбудимост при посттравматично разстройство."
									/>
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Промени в мисленето и настроението"
										text="Чувство на вина, срам, отчуждение, песимистични мисли за бъдещето могат да бъдат сигнали за развиващо се посттравматично разстройство."
										img="/assets/posttravmatichno-razstr/посттравматично-стресово-разстройство-терапия.webp"
										alt="Посттравматично стресово разстройство терапия."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/4">
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										title="Повторно преживяване на травмата"
										text="Чести кошмари, натрапващи спомени или силни физически реакции при напомняне за преживяното."
										img="/assets/posttravmatichno-razstr/посттравматично-разстройство.webp"
										alt="Дете с посттравматично разстройство."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Избягване на асоциации"
										text="Избягване на места, хора или ситуации, които напомнят за травмата, както и разговори или мисли, свързани с нея."
										img="/assets/posttravmatichno-razstr/посттравматично-стресово-разстройство-симптоми.webp"
										alt="Посттравматично стресово разстройство симптоми при дете."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Повишена възбудимост"
										text="Проблеми със заспиването, раздразнителност, лесна уплаха, проблеми с концентрацията."
										img="/assets/posttravmatichno-razstr/повишена-възбудимост-посттравматично-разстройство.webp"
										alt="Повишена възбудимост при посттравматично разстройство."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-h-55"
										style="background-color:#FA7402;"
										style2=""
										title="Промени в мисленето и настроението"
										text="Чувство на вина, срам, отчуждение, песимистични мисли за бъдещето могат да бъдат сигнали за развиващо се посттравматично разстройство."
										img="/assets/posttravmatichno-razstr/посттравматично-стресово-разстройство-терапия.webp"
										alt="Посттравматично стресово разстройство терапия."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</div>
				</div>

				<DoodleDecor variant="blue2" />

				<AnimatedComponent class="max-w-1500px mx-auto">
					<p>В случай, че забележите някои от симптомите на посттравматично разстройство да се проявяват при Вашето дете Ви препоръчваме да се консултирате със специалист.</p>
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand max-w-800px mx-auto px-6 md:px-10 py-2 pd:py-4">
						<div class="flex justify-center items-center gap-4">
							<img src="/assets/exclamation-mark-icon.webp" class="w-10 h-10" />
							<p class="font-[MYRIADPRO-Semibold] c-paper uppercase font-size-17px lg:font-size-21px">80-90% от мозъка на детето се развива до 7-годишна възраст</p>
						</div>
						<p class="font-size-15px lg:font-size-18px c-paper mt-2">Ето защо колкото по-рано бъде започната терапия за посттравматично стресово разстройство, толкова по-голяма е възможността за видимо подобрение на актуалното състояние и напредване в развитието.</p>
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
							img="/assets/posttravmatichno-razstr/посттравматично-генерализирано-тревожно-разстройство.webp"
							alt="Посттравматично генерализирано тревожно разстройство."
							title="Хронична тревожност и депресия"
							description="Липсата на лечение на посттравматично стресово разстройство може да доведе до трайни състояния на тревожност, депресия и паник атаки. Без навременна терапия, това често води негативни последствия за тялото като проблеми със съня, хронична умора, главоболия и стомашни оплаквания. Ако не се вземат мерки, тези физически симптоми могат да се задълбочат и да доведат до трайни здравословни усложнения."
						/>
						<ServiceContaner
							img="/assets/posttravmatichno-razstr/затруднения-училище-посттравматично-разстройство.webp"
							alt="Затруднения в училище при посттравматично разстройство."
							title="Затруднения в училище"
							description="Травмите и силният емоционален стрес нарушават концентрацията, паметта и способността за организиране на задачите. Без подходяща помощ, децата често носят със себе си последиците от посттравматичното стресово разстройство като затруднения с ученето и силно чувство за неуспех, което може да доведе до избягване на училището."
						/>
						<ServiceContaner
							img="/assets/posttravmatichno-razstr/социална-изолация-посттравматично-разстройство.webp"
							alt="Социална изолация посттравматично разстройство."
							title="Социална изолация"
							description="Децата с посттравматично разстройство често страдат от трудности в комуникацията, срамежливост или липса на увереност, които им пречат в изграждането на приятелства и участие в групови дейности. При липса на подкрепа, тези деца често се изолират, което увеличава риска от емоционални и поведенчески разстройства, ниско самочувствие и самота в по-късна възраст."
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
							bgImage="/assets/posttravmatichno-razstr/посттравматично-разстройство-симптоми.webp"
							bgSize="250%"
							bgPosition="right 10% top 60%"
						/>
					</div>
				</AnimatedComponent>
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2">
						<div class="mx--20px">
							<img src="/assets/posttravmatichno-razstr/посттравматично-разстройство-симптоми.webp" alt="Разпознаване на симптомите на посттравматично разстройство." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
						</div>
					</AnimatedComponent>

					<div class="md:hidden block pt-15">
						<DoodleDecor variant="purple" />
					</div>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<H3Pink title="Как да разберем дали диагнозата “посттравматично разстройство” е правилна" />
						<AnimatedComponent>
							<BackgroundIcons />
							<p class="mt--5 pb-5">
								Наличието на някой от тези признаци може да бъде индикация, но не е категорично доказателство за посттравматично разстройство. За оценка на актуалното състояние се използва комплексен подход. Диагностицирането на ПТСР при деца изисква консултация с квалифицирани специалисти – детски психолог, психиатър, понякога и невропсихолог. Изследването на посттравматично стресово разстройство включва цялостна оценка на емоционалното състояние и поведението на детето чрез стандартизирани методики, разговори с родителите и тест за посттравматично стресово разстройство.
							</p>
							<p>
								<span class="font-[MYRIADPRO-Semibold]">В случай, че имате съмнение най-доброто решение е да потърсите специалист.</span>
							</p>
							<p>
								<span class="font-[MYRIADPRO-Semibold]">Точната и навременна оценка е ключова за ранното стартиране на подходяща терапия, подкрепяща развитието на детето.</span>
							</p>
							<PuzzleButton />
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="relative md:pb-30 xl:px-30 mx-20px">
				<H3Blue title="Първоначална психологическа консултация при съмнение за посттравматично разстройство" />
				<div class="flex flex-col justify-center items-center mx-auto px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:pb-10 md:pt-4 py-5 md:bg-gradient-to-t lg:from-paper lg:to-paper bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
						<div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
							<div class="xl:w-1/2 w-full md:pl-7">
								<p class="c-paper lg:c-paper-inv mb-1">
									В Sense Center предлагаме <strong class="font-[MYRIADPRO-Bold]">първоначална психологическа консултация</strong> за деца със съмнение за посттравматично разстройство.
								</p>
								<p class="c-paper lg:c-paper-inv">
									По време на консултацията се извършва обстойно изследване на посттравматично стресово разстройство, което включва наблюдение на поведението и актуалното състояние на детето.
								</p>
								<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Безплатна първична оценка при съмнение за посттравматично разстройство." class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv mb-1">
									Наблюдават се емоциите и реакциите на детето свързани с травматичното преживяване.
								</p>
								<p class="c-paper lg:c-paper-inv">
									Едновременно с това специалистите интервюират родителите за техните наблюдения относно начина, по който травмата влияе на живота на детето.
								</p>
								<p class="c-paper lg:c-paper-inv">
									Целта на този процес е да се разберат нуждите на детето и да се определят следващите стъпки за справяне с травмата и подкрепа.
								</p>
								<div class="pt-8 flex md:flex-row flex-col justify-center items-center">
									<PuzzleButton />
								</div>
							</div>
							<div class="xl:w-1/2 w-full">
								<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Резултат след първичната оценка при съмнение за посттравматично разстройство." class="mt-5 w-full h-auto object-cover rounded shadow" />
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
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Някак си още с първото идване, на обследването на детето, те създадоха едно доверие в мен. И съм, мога да кажа, много доволна!”"
										name="Калина Митрева"
										date="майка на Филип, 5 г., съмнение за Аутизъм"
									/>
									<ReviewersImageReview
										style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/umstvena-izostanalost/родител-дете-умствено-изоставане-5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
										reviewText="“Тук ще срещнете подкрепа, тук ще срещнете разбиране. Децата ще живеят един по-хубав живот”"
										name="Александър Соклев"
										date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
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
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Някак си още с първото идване, на обследването на детето, те създадоха едно доверие в мен. И съм, мога да кажа, много доволна!”"
									name="Калина Митрева"
									date="майка на Филип, 5 г., съмнение за Аутизъм"
								/>
								<ReviewersImageReview
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)),url(/assets/umstvena-izostanalost/родител-дете-умствено-изоставане-5.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
									reviewText="“Тук ще срещнете подкрепа, тук ще срещнете разбиране. Децата ще живеят един по-хубав живот”"
									name="Александър Соклев"
									date="баща на Елисавета, 7г., в норма, и Александър, 5 г., съмнение за аутизъм"
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

				<DoodleDecor variant="pink2" />

				<div class="pt-10 mx-auto">
					<H3Blue title="Какво да правим, ако нямаме достъп до терапевт" />
					<AnimatedComponent class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<div class="">
								<img class="w-full h-full" src="/assets/posttravmatichno-razstr/създаване-сигурна-среда.webp" alt="Осигуряване на сигурна среда за дете с посттравматично разстройство." />
							</div>
							<div class="w-full py-20px text-center">
								<div class="flex flex-col gap-1">
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Създайте сигурна и предвидима среда
									</h4>
									<p class="text-left mt-2">
										Децата с посттравматично разстройство се нуждаят от усещане за безопасност, стабилност и предвидимост. Поддържайте рутината и показвайте последователност в поведението си. Спокойният тон, внимателното изслушване и валидирането на чувствата им помагат да изградят доверие и да се чувстват разбрани.
									</p>
									<div class="my-5">
										<img class="w-full h-full" src="/assets/posttravmatichno-razstr/емоционална-подкрепа-посттравматично-разстройство.webp" alt="Емоционална подкрепа при посттравматично разстройство." />
									</div>
									<h4 class="relative my-0 pt-3 pb-0 text-left">
										Подкрепете емоционалното им изразяване
									</h4>
									<p class="text-left mt-2">
										Окуражавайте детето да изразява чувствата си чрез думи, рисунки, игра или музика. Избягвайте да настоявате да разказва за травмата, но бъдете на разположение, когато има нужда да сподели. Прекарването на качествено време заедно и проявата на разбиране могат да действат като терапия при посттравматично стресово разстройство.
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
					bgImage="/assets/posttravmatichno-razstr/различни-методи-на-терапия.webp"
					bgSize="400%"
					bgPosition="right 60% top 40%"
				/>

				<section class="max-w-1500px md:pt-10 xl:mx-auto md:mx-20px mx--20px flex md:flex-row flex-col justify-center items-center md:gap-8">
					<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
						<AnimatedComponent>
							<div class="w-full h-full">
								<div class="bg-paper mx-auto">
									<div class="">
										<div class="mx--20px">
											<img src="/assets/posttravmatichno-razstr/различни-методи-на-терапия.webp" alt="Различни методи за терапия." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
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
									Посттравматичното разстройство не е състояние, което изчезва спонтанно, но с подходяща терапия и подкрепа може да бъде значително облекчено.
								</p>
								<p class="text-left mt-2">
									Децата с посттравматично стресово разстройство могат да се научат да управляват симптомите си и да възвърнат емоционалното си благополучие.
								</p>
								<p class="text-left mt-2">
									Важно е да се осигури адекватна терапевтична намеса и среда на подкрепа, за да се постигнат дългосрочни положителни резултати и да се намали риска от развитие на посттравматично генерализирано тревожно разстройство.
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
						<p class="xl:px-5 md:mb-5 mb-2 mt-0 c-gray-700 leading-5 font-size-14px font-400 italic tracking" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.3px;">Препоръчват се от 4 до 6 сесии седмично за оптимални резултати</p>
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

								]}>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6)),url(/assets/sindrom-na-daun/детски-психолог.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Детски психолог"
									description="Подпомага преодоляването на травматични преживявания и стресови ситуации, като помага на детето да се справя с трудностите по-лесно."
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/SOP/развитие-емоционална-интелигентност.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Развитие на емоционална интелигентност"
									description="Помага на децата да разпознават и разбират своите емоции, като развива тяхната емоционална осъзнатост и способност за саморегулация."
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/психомоторика.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Психомоторика"
									description="Помага на децата да разпознават, изразяват и управляват емоциите си чрез движение и игра."
								/>
								<AuthorContainer
									href=""
									style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
									name="Когнитивно-поведенческа терапия"
									description="Помага на децата да разберат и променят негативните си мисли и поведение, за да се справят по-добре с емоциите и отношенията с другите."
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

				<div class="pt-10 md:pt-20 xl:px-30 mx-20px mx-auto">
					<H3Pink title="Какъв е процесът на работа" />
					<WorkProcess />
				</div>

				<DoodleDecor variant="purple" />

				<div class="xl:px-30 md:mx-20px md:mx-auto">
					<H3Blue title="Резултати от терапията" />
					<div class="w-full sm:w-300px md:w-700px flex flex-col max-w-full relative md:mx-auto">
						<AnimatedComponent class="flex flex-col gap-1">
							<img class="mb-7" src="/assets/posttravmatichno-razstr/резултат-терапия.webp" alt="Резултати от терапията на деца с посттравматично разстройство." />
							<p class="text-left mt-2">
								Терапията при деца с посттравматично разстройство води до значително намаляване на тревожността и страха, като овладява честите кошмари и натрапчиви мисли. С времето децата придобиват повече увереност и спокойствие в социални ситуации, което улеснява общуването им с връстници и учители. Освен това, терапевтичната подкрепа ги учи да разпознават и контролират емоциите си, като редуцира резките промени в настроението и раздразнителността.
							</p>
							<p class="text-left mt-2">
								Важно е да се отбележи, че резултатите варират при всяко дете. Прогресът зависи от индивидуалните нужди и степента на предоставената подкрепа.
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
									hrefGoogleReview="https://maps.app.goo.gl/WZeidGA2n9qQDeRE9"
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
									img="https://lh3.googleusercontent.com/a/ACg8ocL8FzRUcI-wvBMBi8H20qvDkOhTHrirdSuqFsf1RHh-bEaMYA=w72-h72-p-rp-mo-br100"
									reviewText={
										<>
											Дъщеря ми посещава центъра от почти 3 месеца . При първото ни посещение ни направи впечатление колко много специалисти има и колко много терапии предлагат . След прегледа се установи , че тя е за Звукова и Речева терапия . Напредъка до момента е огромен .
										</>
									}
									name="Atanaska Beleva"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/cKzcT7asgGbPuGvw7"
									class="important-h-370px important-sm:h-650px important-lg:h-470px important-xl:h-500px"
								/>
								<GoogleStarReview
									img="https://lh3.googleusercontent.com/a-/ALV-UjWMiKvLIDqVE5Uk32BJCO9UtpbeUGsDpYpd2FfzcnGaT5F4P0s=w72-h72-p-rp-mo-br100"
									reviewText={
										<>
											Горещо препоръчвам. Дъщеря ми имаше почти хроничен запек с много болка и плач. Две седмици по-късно вече ходеше самичка до тоалетна, съвсем редовно.
										</>
									}
									name="Adriana Sarieva"
									stars={5}
									hrefGoogleReview="https://maps.app.goo.gl/peZLNUEaybbMrcLN8"
									class="important-h-370px important-sm:h-650px important-lg:h-470px important-xl:h-500px"
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
									hrefGoogleReview="https://maps.app.goo.gl/xexN5iGdYiCo6cQFA"
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
									variant="dots2"
									reviews={[
										{ name: "1" },
										{ name: "2" },
										{ name: "3" },
									]}>
									<PuzzleIconReview
										style="background-color:#742C8F;"
										class="important-lg:h-570px important-h-580px"
										puzzleclass="c-brand w-6 mr-2"
										img="/assets/posttravmatichno-razstr/успокояващи-ритуали-посттравматично-разстройство.webp"
										alt="Успокояващи ритуали при деца с посттравматично разстройство."
										title="Успокояващи ритуали"
										desc="Повтарящи се действия като четене на приказки или слушане на успокояваща музика създават усещане за безопасност и предвидимост, което е особено важно за децата с посттравматично разстройство."
									/>
									<PuzzleIconReview
										style="background-color:#E11172;"
										class="important-lg:h-570px important-h-580px"
										puzzleclass="c-brand-purple w-6 mr-2"
										img="/assets/posttravmatichno-razstr/творческо-изразяване-посттравматично-разстройство.webp"
										alt="Творческо изразяване на дете с посттравматично разстройство."
										title="Творческо изразяване на емоции"
										desc="Изкуството е естествен начин за справяне с емоционалните симптоми на посттравматично разстройство. Рисуване, моделиране с глина или водене на дневник дава възможност на детето да изрази своите страхове и преживявания чрез творчество."
									/>
									<PuzzleIconReview
										style="background-color:#088F9D;"
										class="important-lg:h-570px important-h-580px"
										puzzleclass="c-brand-orange w-6 mr-2"
										img="/assets/posttravmatichno-razstr/релаксация-дете-посттравматично-разстройство.webp"
										alt="Релаксация на дете с посттравматично разстройство."
										title="Практики за релаксация"
										desc="Леки дихателни упражнения, йога за деца, разходки сред природата или арт терапия, подпомагат редуцирането на тревожността и напрежението."
									/>
								</ReviewSlider>
							</div>

							<div class="hidden xl:grid mx-auto grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch">
								<PuzzleIconReview
									style="background-color:#742C8F;"
									class="important-lg:h-570px important-h-580px"
									puzzleclass="c-brand w-6 mr-2"
									img="/assets/posttravmatichno-razstr/успокояващи-ритуали-посттравматично-разстройство.webp"
									alt="Стимулиране на речта чрез ежедневна комуникация при деца със соп."
									title="Успокояващи ритуали"
									desc="Повтарящи се действия като четене на приказки или слушане на успокояваща музика създават усещане за безопасност и предвидимост, което е особено важно за децата с посттравматично разстройство."
								/>
								<PuzzleIconReview
									style="background-color:#E11172;"
									class="important-lg:h-570px important-h-580px"
									puzzleclass="c-brand-purple w-6 mr-2"
									img="/assets/posttravmatichno-razstr/творческо-изразяване-посттравматично-разстройство.webp"
									alt="Развиване на двигателни и когнитивни умения чрез игра за деца със соп."
									title="Творческо изразяване на емоции"
									desc="Изкуството е естествен начин за справяне с емоционалните симптоми на посттравматично разстройство. Рисуване, моделиране с глина или водене на дневник дава възможност на детето да изрази своите страхове и преживявания чрез творчество."
								/>
								<PuzzleIconReview
									style="background-color:#088F9D;"
									class="important-lg:h-570px important-h-580px"
									puzzleclass="c-brand-orange w-6 mr-2"
									img="/assets/posttravmatichno-razstr/релаксация-дете-посттравматично-разстройство.webp"
									alt="Насърчаване на социални умения в семейна среда на деца със соп."
									title="Практики за релаксация"
									desc="Леки дихателни упражнения, йога за деца, разходки сред природата или арт терапия, подпомагат редуцирането на тревожността и напрежението."
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
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Знания и умения</p>
								<p class="c-paper">Информирайте се за симптомите на посттравматично стресово разстройство при деца, както и за подходящи стратегии за справяне със стреса и тревожността. Проучете различни техники за успокояване и оказване на емоционална подкрепа.</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-brand-blue px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Търпение и последователност</p>
								<p class="c-paper">Препоръчително е редовно да прекарвате качествено време с детето. Бъдете търпеливи и ангажирани с процеса и осигурете необходимото внимание и емоционална подкрепа на детето.</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="mb-10">
							<div class="flex flex-col justify-center items-start b-rd-12px bg-#F7871D px-10 py-4">
								<p class="font-size-22px c-paper mb-0 font-[MYRIADPRO-Semibold]">Инвестиция</p>
								<p class="c-paper">При нужда, можете да си набавите подходящи книги, играчки или приложения, полезни за работа със стресови състояния.</p>
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
								<p class="mt-0">При регулярна подкрепа у дома, децата с посттравматично разстройство постепенно развиват усещане за сигурност, намаляват тревожността и подобряват съня си. Чрез ежедневни ритуали, творчески занимания и спокойна комуникация се укрепват емоционалната стабилност и доверието, което подпомага възстановяването и връщането към по-пълноценно ежедневие.</p>
							</div>
						</AnimatedComponent>
					</div>

					<DoodleDecor variant="pink" />

					<section class="mb-70px max-w-1500px xl:px-20px mx-auto pt-10 md:pt-20">
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
												Детето ми посещава центъра от 4 месеца. Забелязваме напредък в комуникативните умения и изпълнението на ежедневни дейности. Препоръчвам силно, най-вече заради екипът от специалисти, които са винаги топли и приветливи❤️. Посрещнаха ни с много разбиране.<br />
												Благодарим Ви!
											</>}
											name="Божана Михайлова"
											hrefGoogleReview="https://maps.app.goo.gl/tBn7hWZeLrESwaap7"
											class="important-h-450px important-sm:h-250px important-md:h-700px important-lg:h-600px important-xl:h-600px"
										/>
										<StarReview
											reviewText={<>
												Мишо посещава детски център SENSE от 6 месеца с голямо желание и нетърпение, за това време започна да говори много повече, да се обръща персонално по име към човека, с който иска да общува , започна да се шегува и да играе повече самостоятелно вкъщи. Другите дечица навън започнаха да му правят впечатление. Впечатленията са за много приятна среда за децата, любезно отношение от терапевтите и чести обратни връзки, свързани с развитието и промените в детето.
											</>}
											name="Gergana Berberova"
											hrefGoogleReview="https://maps.app.goo.gl/wGmNCnRdQCHBU22p8"
											class="important-h-450px important-sm:h-250px important-md:h-700px important-lg:h-600px important-xl:h-600px"
										/>
										<StarReview
											reviewText={<>
												Синът ми посещава центъра от около 9 месеца.За този период има сериозен напредък в емоционално,социално и когнитивно развитие.Обогати речника и подобри значително говора,благодарение на екипа от професионалисти работещи с него.
											</>}
											name="Ина Светомирова"
											hrefGoogleReview="https://maps.app.goo.gl/SZrQk55if3tKDYP6A"
											class="important-h-450px important-sm:h-250px important-md:h-700px important-lg:h-600px important-xl:h-600px"
										/>
										<StarReview
											reviewText={
												<>
													Посещаваме Сенс вече трети месец и за краткото време виждаме задоволителни резултати при дъщеря ни.<br />
													Тя е все по- комуникативна и самостоятелна при изпълнение на ежедневите домашни дейности.<br />
													Цените не са ниски, но смятаме, че отговарят на качеството на предоставяната услуга.<br />
													Всички служители са много усмихнати, което е плюс в това сиво ежедневие. 🍀
												</>
											}
											name="Zhulven Salim"
											hrefGoogleReview="https://maps.app.goo.gl/6ozJxjYo69nK2J437"
											class="important-h-450px important-sm:h-250px important-md:h-700px important-lg:h-600px important-xl:h-600px"
										/>
										<StarReview
											reviewText={
												<>
													Нашето детенце посещава детският център от 4 месеца, забелязваме напредък в комуникацията и очният контакт, детето излиза весел и игрив от всяка сесия
												</>
											}
											name="Botyo"
											hrefGoogleReview="https://maps.app.goo.gl/b3CvBAczP6ikRgFs8"
											class="important-h-450px important-sm:h-250px important-md:h-700px important-lg:h-600px important-xl:h-600px"
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
