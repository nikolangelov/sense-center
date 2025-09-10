import "solid-slider/slider.css";
import { GoogleStarReview, PuzzleIconReview, ReviewSlider, StaffSlider, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink } from '../../components/H2WithImage';
import { ContainerBox, ContainerSlider, ReviewPuzzlePiece } from "../../components/ContainerSlider";
import { PuzzleButton2 } from "../../components/PuzzleButton";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { Collapse } from "../../components/FAQ";
import { VideoHero } from "../../components/HeroVideo";
import { createSignal } from "solid-js";
import { GradientFooter } from "../../components/GradientFooter";

const [isPlaying, setIsPlaying] = createSignal(false);

function SingleCollapse() {
	return (
		<>
			<div class="flex flex-col gap-5 md-gap-2 cursor-pointer max-w-1200px mx-auto">
				<Collapse title="1. Какво прави детският психолог?" desc="Работата на детския психолог е свързана с подпомагането на емоционалното, социалното и поведенческото развитие на детето. Един опитен детски психолог помага на децата да разпознават и управляват емоциите си, да развият социални умения и да научат как да се справят със стрес, тревожност, проблеми в училище или семейството.  Осигурява им нужната подкрепа за преодоляване на травматични преживявания и изграждане на самочувствие." />

				<Collapse title="2. Каква е разликата между детски психолог и детски клиничен психолог?" desc="Детският психолог работи основно върху емоционалното, социалното и поведенческото развитие на детето, като използва игрови и терапевтични методи за подкрепа и развитие.">
					<p>
						Детският клиничен психолог, от своя страна, има допълнителна специализация за диагностика и терапия на по-сложни психични състояния, включително при деца с епилепсия, аутизъм, тревожни разстройства или след травматични събития. Ако детето има по-сериозни или дълготрайни затруднения, консултация с детски клиничен психолог в София може да бъде най-подходящият избор.
					</p>
				</Collapse>

				<Collapse title="3. Кога да посетим детски психолог?" desc="Много родители се питат “Кога е необходимо да се работи с детски психолог?” или “Как да подходя към детето?”. Най-добрият момент е при първите тревожни признаци, а не когато проблемът вече се е задълбочил. Ако забележите признаци като чести избухвания, тревожност, затруднения в общуването, проблеми със съня, загуба на интерес към игри или училище, е препоръчително да направите консултация с детски психолог. Ранната терапия с детски психолог е от изключителна важност, защото може да предотврати или намали тежестта на потенциални проблеми в бъдеще." />

				<Collapse title="4. На каква възраст детето може да започне да посещава детски психолог?" desc="Детският психолог може да работи с деца още от 2-годишна възраст. Колкото по-рано се идентифицират и адресират затрудненията, толкова по-ефективна ще бъде терапията." />

				<Collapse title="5. Какви методи използват психолозите при работа с деца?" desc="Детският психолог използва различни подходи, които се адаптират според нуждите на всяко дете. Сред тях са ролеви и диалогични игри, както и рисуване, които помагат на детето да изрази емоциите си и да разбере своите чувства. Детският психолог създава безопасна и подкрепяща среда, в която детето може свободно да споделя своите мисли. Тези методи предоставят пространство за развитие на нови методи за справяне и повишаване на самосъзнанието, което е ключово за емоционалното и психическото благополучие на детето" />

				<Collapse title="6. Колко време продължава една терапевтична сесия с детски психолог?" desc="Обикновено сесиите се провеждат в рамките на 40 минути." />

				<Collapse title="7. Могат ли родителите да присъстват по време на терапията с детски психолог?" desc="В Sense Center препоръчваме родителите да не присъстват на терапевтичните сесии, за да гарантираме ефективността на процеса." >
					<p>
						Присъствието на родител в кабинета по време на терапия с детски психолог може да отклони фокуса на детето, особено при по-малките, които често стават зависими от сигурността на родителската фигура. Това може да ограничи тяхната самостоятелност и активност в терапията. Също така, когато родителят е в стаята, за терапевта е по-трудно да изгради авторитет, което е важно за успешното взаимодействие с детето.
					</p>
					<p>
						Родителите обаче играят ключова роля извън терапевтичните сесии. Затова редовно ги информираме за напредъка на детето и подходите, които могат да приложат у дома, за да подкрепят процеса. Този баланс между терапевтичната работа и родителската подкрепа е ключов за успеха.
					</p>
				</Collapse>

				<Collapse title="8. Може ли терапията с детски психолог да бъде комбинирана с други видове терапевтични подходи?" desc="Да, психологичната терапия може успешно да се съчетава с различни терапии за постигане на оптимални резултати в развитието на Вашето дете. Свържете се със специалистите от Sense Center, за да получите персонализирана консултация и да изберете най-подходящите терапии за нуждите на Вашето дете." />

				<Collapse title="9. Колко често трябва да се посещава детски психолог?" desc="Честотата на посещенията зависи от индивидуалните нужди на детето и тежестта на състоянието." />

				<Collapse title="10. Има ли възможност за психологични сесии онлайн?" desc="Не, към момента не провеждаме терапии онлайн, терапевтичните сесии се извършват на място в нашия кабинет с детски психолог в София на адрес – гр. София, бул. „Никола Петков“ 95a." />

				<Collapse title="11. Какво трябва да носим за първата терапевтична сесия с детски психолог?" desc="Не е необходимо да носите нещо специално. Детският психолог използва разнообразни ресурси под формата на игра, за да направи посещението интересно и приятно за детето." />

				<Collapse title="12. Какво включва първичната оценка на детето?" desc="Първичната оценка с детски психолог обикновено включва:">
					<div>
						<ul class="ml-5">
							<li class="">
								<span class="font-[MYRIADPRO-Bold]">Разговор с родителите</span> относно развитието на детето, поведението и актуалното емоционално състояние, отношенията в семейството и социалната среда.
							</li>
							<li class="">
								<span class="font-[MYRIADPRO-Bold]">Наблюдение на детето</span> – Психологът наблюдава поведението и реакциите на детето, за да идентифицира емоционалните и социалните му нужди.
							</li>
							<li class="">
								<span class="font-[MYRIADPRO-Bold]">Изследване на емоционалните и социалните умения</span> – Използване на психологически инструменти, като тестове за когнитивно развитие, емоционална интелигентност и социална адаптация, за да се определи актуалното състояние на детето.
							</li>
							<li class="">
								<span class="font-[MYRIADPRO-Bold]">Обратна връзка</span> – В края на оценката психологът предоставя на родителите обобщение и препоръки за работа вкъщи, включително подходящ терапевтичен план за подкрепа.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="13. Каква информация трябва да предоставя по време на първичната оценка на детето?" desc="По време на първичната оценка на актуалното състояние е необходимо да споделите:">
					<div>
						<ul class="ml-5">
							<li class="">
								Медицинска документация (ако е поставена диагноза или детето е преминало през консултации с други специалисти);
							</li>
							<li class="">
								Предистория и допълнителна информация относно симптомите и актуалното състояние на детето;
							</li>
							<li class="">
								Вашите очаквания – споделете своите цели и очаквания за съвместната ни работа и развитието на детето.
							</li>
						</ul>
					</div>
					<p>
						Тази информация ще ни помогне да създадем персонализиран и по-ефективен план за терапия за Вашето дете.
					</p>
				</Collapse>

				<Collapse title="14. Какви подобрения могат да се очакват след работата с детски психолог?" desc="">
					<div>
						<ul class="ml-5">
							<li class="">
								Подобряване на емоционалната стабилност;
							</li>
							<li class="">
								По-добро управление на стреса;
							</li>
							<li class="">
								Развитие на социални умения и увереност;
							</li>
							<li class="">
								Справяне с тревожност, страхове и други емоционални предизвикателства.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="15. Има ли дейности или упражнения, които мога да правя с детето си, за да подкрепя напредъка му?" desc="Да, специалист от Sense Center ще Ви предостави подходящи насоки и ресурси за подпомагане на развитието на детето в домашни условия." />
			</div>
		</>
	);
}

export default function Page() {
	return (
		<>
			<div class="relative w-full">
				<VideoHero
					youtubeId="R1kPm_q7vCc"
					gifPreview="/assets/detski-psiholog/сенс-център-детски-психолог.mp4"
					gifPreviewMobile="/assets/detski-psiholog/сенс-център-детски-психолог-мобилно.mp4"
					isPlaying={isPlaying()}
					onPlay={() => setIsPlaying(true)}
				/>

				<div class="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-end pb-18 md:pb-10 text-center px-4 text-white">
					<div class={`absolute ${isPlaying() ? 'top-32% sm:top-95% lg:top-100% mt-30' : 'top-46% md:top-55% mt-0'}`}>
						<div>
							<div
								class={`mb-4 md:mb-6 transition-colors duration-500 important-font-size-45px important-md:font-size-90px important-leading-50px important-md:leading-80px important-font-[MYRIADPRO-Bold] text-center px-10 ${isPlaying()
									? 'text-brand'
									: 'text-white'
									}`}
							>
								Детски психолог в София – подкрепа за щастливо детство и успешно бъдеще
							</div>
						</div>

						<h1
							class={`important-delay-300 font-400 text-center mb-0 font-size-4.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 leading-5.5 transition-colors duration-500 important-font-[MYRIADPRO-Light] ${isPlaying()
								? 'text-brand'
								: 'text-white'
								}`}
						>
							Детски психолог
						</h1>

						<div
							class={`important-delay-600 mt-8 md:mt-10 relative text-center ${isPlaying() ? 'md:pb-30' : 'md:pb-0'
								}`}
						>
							<div class="flex md:flex-row flex-col justify-center items-center gap-3 pointer-events-auto">
								<PuzzleButton2
									class="important-bg-brand important-hover:bg-brand-hover"
									href=""
									text={<>Запазете час за<br />първоначална консултация</>}
								/>
								<PuzzleButton2
									href=""
									text="Вижте успешни истории"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-20">
				<H3Pink title="Работим заедно за изграждане на умения за саморегулация, справяне с трудности и адаптация" />
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
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#742C8F;"
										title="Над 200 деца преодоляха трудностите"
										text="С помощта на много добър детски психолог децата преодоляха страховете си, повишиха увереността си и се научиха да се справят с предизвикателствата в ежедневието."
										img="/assets/detski-psiholog/детски-психолог-страхове.webp"
										alt="Дете преодолло страховете си след терапия."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#E11172;"
										title="Богат опит с различни предизвикателства"
										text="Работим с деца, които преминават през тревожност и стрес, трудности в общуването, адаптацията и контролирането на емоциите си."
										img="/assets/detski-psiholog/детски-психолог-различни-предизвикателства.webp"
										alt="Дете, което преминава през тревожност, стрес и трудности в общуването."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#088F9D;"
										title="Създаваме безопасна и подкрепяща среда"
										text="Използваме методи чрез игра, творчество, ролеви ситуации и интерактивни упражнения, които насърчават развитието на детето и доверието към терапевта."
										img="/assets/detski-psiholog/безопасна-подкрепяща-среда.webp"
										alt="Създаваме безопасна и подкрепяща среда за работа с детски психолог."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#FA7402;"
										title="Персонализиран план за работа"
										text="Всеки план е изготвен от опитен детски психолог според нуждите на детето, като включва конкретни цели и проследяване на напредъка."
										img="/assets/detski-psiholog/изготвяне-персонализиран-план-лечение.webp"
										alt="Персонализиран план за работа с детски психолог."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-67 important-lg:h-52 important-md:h-57 important-sm:h-37 important-h-55"
										style="background-color:#742C8F;"
										title="Над 200 деца преодоляха трудностите"
										text="С помощта на много добър детски психолог децата преодоляха страховете си, повишиха увереността си и се научиха да се справят с предизвикателствата в ежедневието."
										img="/assets/detski-psiholog/детски-психолог-страхове.webp"
										alt="Дете преодолло страховете си след терапия."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-67 important-lg:h-52 important-md:h-57 important-sm:h-37 important-h-55"
										style="background-color:#E11172;"
										title="Богат опит с различни предизвикателства"
										text="Работим с деца, които преминават през тревожност и стрес, трудности в общуването, адаптацията и контролирането на емоциите си."
										img="/assets/detski-psiholog/детски-психолог-различни-предизвикателства.webp"
										alt="Дете, което преминава през тревожност, стрес и трудности в общуването."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-67 important-lg:h-52 important-md:h-57 important-sm:h-37 important-h-55"
										style="background-color:#088F9D;"
										title="Създаваме безопасна и подкрепяща среда"
										text="Използваме методи чрез игра, творчество, ролеви ситуации и интерактивни упражнения, които насърчават развитието на детето и доверието към терапевта."
										img="/assets/detski-psiholog/безопасна-подкрепяща-среда.webp"
										alt="Създаваме безопасна и подкрепяща среда за работа с детски психолог."
									/></div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-67 important-lg:h-52 important-md:h-57 important-sm:h-37 important-h-55"
										style="background-color:#FA7402;"
										title="Персонализиран план за работа"
										text="Всеки план е изготвен от опитен детски психолог според нуждите на детето, като включва конкретни цели и проследяване на напредъка."
										img="/assets/detski-psiholog/изготвяне-персонализиран-план-лечение.webp"
										alt="Персонализиран план за работа с детски психолог."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px pb-10">
				<AnimatedComponent>
					<h3 class="c-brand">
						Над 700 подкрепени семейства
					</h3>
				</AnimatedComponent>

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
									reviewText="Искам да изкажа огромната си благодарност на терапевтите в Сенс Център. Синът ми посещава центъра от април 2025г.В начолото не можеше да говори и не разбираше какво ние му обясняваме. Благодарение на различните видове терапии които посещава звукова, ерготерапия, речева, тъмна стая има голям напредък. Препоръчвам центъра, защото всичко в него е на ниво и синът ми се чувства щастлив"
									name="Ирена Бакалова"
									hrefGoogleReview="https://maps.app.goo.gl/cLwbN14c4QtN7Wmc6"
								/>
								<StarReview
									reviewText={<>
										Сенс Център е най-доброто място в София за работа с деца!<br />
										Когато синът ми беше на 3 години и половина, той не говореше. Започна да посещава Сенс Център още от самото му създаване и само след няколко месеца проговори! Опасенията ми се оказаха неоснователни, а днес той е едно прекрасно, лъчезарно и уверено дете - рецитира песнички и стихотворения с радост!<br />
										Сестра му също посещава центъра и ефектът върху тях е невероятен. Връзката им се заздрави, станаха по-емпатични един към друг и по-уверени в себе си.<br />
										Препоръчвам с цялото си сърце - място, което променя животи!

									</>}
									name="Alexander Soklev"
									hrefGoogleReview="https://maps.app.goo.gl/evAi2iFxo5ELiCFA8"
								/>
								<StarReview
									reviewText="“SENSE centar” отново ни върна усмивките на лицата. Моето дете посещава центърът от 3 месеца,като не се обръщаше на името си, не обръщаше внимание на оклоните,ходеше на пръсти, не изпълняваше команди! За краткото време в което синът ми посещава центъра, благодарение на истинският професияонализъм и специалното отношение на терапевтите към моето дете,виждаме с всяко изминало посещение развитие в детето. Започнал е да изпълнява команди,започнал е да се обръща на името си, започнал е да ходи по-малко на пръсти , определено е по-фокусиран и всичко това се дължи на “SENSE center”. Сърдечно Ви благодарим затова, че давате сили на родителите и помагате на децата. “SENSE center” Благодарим Ви!"
									name="Любомира Ангелова"
									hrefGoogleReview="https://maps.app.goo.gl/gpxkxF2AMNPCecqs8"
								/>
								<StarReview
									reviewText={<>
										Синът ни посещава центъра от почти половин година и за този период наблюдаваме изключителен напредък по отношение на когнитивните му умения.
										Започна да проявява интерес към много неща у дома и значително подобри очния контакт.<br />
										Много сме благодарни на целия екип за разбирането и позитивизма, с който се отнасят към децата и техните родители.<br />
										Чувстваме се подкрепени! ❤️

									</>}
									name="Estel Dimova"
									hrefGoogleReview="https://maps.app.goo.gl/nCtQP96H59S4UuDF7"
								/>
								<StarReview
									reviewText="Мишо посещава детски център SENSE от 6 месеца с голямо желание и нетърпение, за това време започна да говори много повече, да се обръща персонално по име към човека, с който иска да общува , започна да се шегува и да играе повече самостоятелно вкъщи. Другите дечица навън започнаха да му правят впечатление. Впечатленията са за много приятна среда за децата, любезно отношение от терапевтите и чести обратни връзки, свързани с развитието и промените в детето."
									name="Gergana Berberova"
									hrefGoogleReview="https://maps.app.goo.gl/ZVG6mkBW95YA4V9V6"
								/>
							</ReviewSlider>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="pb-40px xl:px-30 xl:px-25 md:ml-5 mx-20px">
				<H3Blue title="Подпомагаме развитието на всяко дете" />
				<div class="md:px-10 xl:px-0 flex xl:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="xl:w-1/2 w-full">
						<div class="flex flex-col gap-2">
							<img src="/assets/detski-psiholog/консултация-опитен-детски-психолог.webp" alt="Консултация с опитен детски психолог в Sense Center." class="object-[0%_15%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/detski-psiholog/терапията-детски-психолог.webp" alt="След терапията с детски психолог." class="object-[0%_40%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/detski-psiholog/детски-психолог-подпомагаме-развитието.webp" alt="Подпомагаме развитието на всяко дете." class="object-[0%_5%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
						</div>
					</AnimatedComponent>

					<div class="relative w-full px-3 sm:px-0 xl:px-3 xl:w-1/2 xl:pl-7">
						<AnimatedComponent>
							<div class="pt-6 md:py-0">
								<p class="xl:mt--5">
									При нас идват деца, които срещат емоционални, социални или поведенчески затруднения. Предлагаме консултация с детски психолог, съобразена с нуждите на всяко дете – при тревожност, страхове, ниска самооценка, социални затруднения, поведенчески предизвикателства, преживени травматични събития и други емоционални трудности. Вярваме, че с индивидуален подход и подкрепата на опитен детски психолог всяко дете може да развие увереност и да се чувства разбрано.
								</p>
								<p class="important-font-[MYRIADPRO-Bold] tracking-0.2px">
									Терапията с детски психолог се препоръчва при:
								</p>
							</div>
							<AnimatedComponent class="mx-auto flex flex-col justify-center items-center gap-2 mb-2 md:mb-3 md:mt-5">
								<div class="flex flex-col md:flex-row gap-2">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover:bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-41 h-16">
											Деца със СОП
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand md:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-33 h-16">
											Умствена<br />изостаналост
										</a>
									</div>
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-47 xl:w-36 h-16">
											Синдром<br />на Даун
										</a>
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-37 xl:w-33 h-16">
											Заекване
										</a>
									</div>
								</div>

								<div class="flex flex-col md:flex-row gap-2">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-46 xl:w-43 h-16">
											Посттравматично разстройство
										</a>
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-38 xl:w-36 h-16">
											Синдром<br />на Аспергер
										</a>
									</div>
									<div class="flex gap-2">
										<a href="/" class="flex justify-center items-center md:bg-brand md:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											Дислексия
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover-bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											Дискалкулия
										</a>
									</div>
								</div>

								<div class="flex flex-col md:flex-row gap-2">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover-bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											Дисграфия
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand md:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											Диспраксия
										</a>
									</div>
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-41 h-16">
											Мускулна<br />дистрофия
										</a>
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-38 h-16">
											Синдром<br />на Турет
										</a>
									</div>
								</div>

								<div class="flex flex-row gap-2 flex-wrap justify-center">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover-bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											ХАДВ
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand md:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											Селективен мутизъм
										</a>
									</div>
									<a href="/" class="flex justify-center items-center bg-brand-blue hover-bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
										Епилепсия
									</a>
								</div>

							</AnimatedComponent>
							<PuzzleButton2
								class="important-mt-25px"
								href=""
								text="Вижте всички състояния"
							/>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="pb-40px xl:px-30 mx-20px">
				<H3Pink title="Какво следва, ако не предприемем действие" />
				<AnimatedComponent class="max-w-1500px mx-auto flex flex-col md:flex-row gap-14">
					<div class="flex flex-col justify-between items-start gap-2 w-full md:w-2/3 px-5">
						<div class="w-full">
							<p class="pb-0 mb-5 md:mt-0">Ако не се обърне внимание на емоционалните и поведенческите затруднения в ранна възраст, те могат да оставят траен отпечатък върху живота на детето. Нелекуваните проблеми често водят до:</p>
						</div>
						<div class="w-full">
							<ul style="list-style-type: none;" class="flex flex-col gap-2">
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">затруднения в училище, понижен успех и липса на мотивация</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">ниско самочувствие и усещане за изолация</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">проблеми в общуването с връстници и възрастни</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">повишена тревожност, раздразнителност или агресия</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6 md:mb-0">затруднена адаптация в нова среда</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 md:px-10 xl:px-8 py-2 pd:py-4 w-full md:w-1/3">
						<div class="flex justify-center items-center gap-4">
							<img src="/assets/exclamation-mark-icon.webp" class="w-12 h-12" />
							<p class="font-[MYRIADPRO-Semibold] c-paper uppercase font-size-17px">80% - 90% от мозъка на детето се развива до 7-годишна възраст</p>
						</div>
						<p class="font-size-15px c-paper mt-2">Ето защо колкото по-рано бъде започната терапия с детски психолог, толкова по-голяма е възможността за трайно подобрение в емоционалното и социалното развитие.</p>
					</div>
				</AnimatedComponent>
			</section>

			<section class="relative md:pt-10 xl:px-30 mx-20px">
				<H3Pink variant="h2" title="Превръщаме предизвикателствата във възможности" />
				<BackgroundIcons />
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px mb-2">
						<img src="/assets/detski-psiholog/добър-детски-психолог-софия.webp" alt="Превръщаме предизвикателствата във възможности с добър детски психолог в София." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt--2">
								Нашата терапия с добър детски психолог в София е насочена към подпомагане на емоционалното здраве, социалните умения и уменията за справяне с проблеми. Тя включва индивидуален подход, адаптирани техники и игрови методи за постигане на напредък.
							</p>
							<p>
								Нашите детски психолози работят както с деца без специфични дефицити, така и с деца със специални образователни потребности (СОП). Целта е да помогнем на всяко дете да развие увереност, да изгради умения за общуване и да се чувства спокойно и прието.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-20">
				<H3Blue variant="h2" title="Как терапията с добър детски психолог помага на твоето дете в 2 стъпки" />
			</AnimatedComponent>

			<div class="max-w-1500px md:pt-10 mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h4 class="font-600 text-left pb-2 mt-0">Комуникативни и социални умения</h4>
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
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Детето се учи да общува по-уверено с връстници и възрастни"
										text=""
										img="/assets/detski-psiholog/детски-педагог-психолог.webp"
										alt="Детето се учи да общува с детски педагог психолог."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Подобрява умението да изразява мисли и чувства"
										text=""
										img="/assets/detski-psiholog/опитен-детски-психолог-подобрява.webp"
										alt="Опитен детски психолог подобрява умението на дете да се изразява."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Развива активното слушане и разбирането на другите"
										text=""
										img="/assets/detski-psiholog/активното-слушане-разбирането-другите.webp"
										alt="Развиване на активното слушане и разбирането на другите благодарение на детски психолог в София."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Изгражда умения за работа в екип и разрешаване на конфликти"
										text=""
										img="/assets/detski-psiholog/изграждане-умения-работа-екип.webp"
										alt="Изграждане на умения за работа в екип и разрешаване на конфликти от детски психолог."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Детето се учи да общува по-уверено с връстници и възрастни"
										text=""
										img="/assets/detski-psiholog/детски-педагог-психолог.webp"
										alt="Детето се учи да общува с детски педагог психолог."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Подобрява умението да изразява мисли и чувства"
										text=""
										img="/assets/detski-psiholog/опитен-детски-психолог-подобрява.webp"
										alt="Опитен детски психолог подобрява умението на дете да се изразява."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Развива активното слушане и разбирането на другите"
										text=""
										img="/assets/detski-psiholog/активното-слушане-разбирането-другите.webp"
										alt="Развиване на активното слушане и разбирането на другите благодарение на детски психолог в София."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Изгражда умения за работа в екип и разрешаване на конфликти"
										text=""
										img="/assets/detski-psiholog/изграждане-умения-работа-екип.webp"
										alt="Изграждане на умения за работа в екип и разрешаване на конфликти от детски психолог."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="purple" />

			<div class="max-w-1500px mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h4 class="font-600 text-left pb-2">Емоционално и личностно развитие</h4>
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
										style="background-color:#088F9D;"
										title="Детето се научава да разпознава и управлява емоциите си"
										text=""
										img="/assets/detski-psiholog/детски-психолог-тревожно-разстройство.webp"
										alt="Детето се научава да разпознава и управлява емоциите си с детски психолог."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Намалява тревожността и усеща по-голяма сигурност"
										text=""
										img="/assets/detski-psiholog/намаляване-тревожността.webp"
										alt="Намаляване на тревожността и усещане на по-голяма сигурност."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Повишава самочувствието и увереността в собствените възможности"
										text=""
										img="/assets/detski-psiholog/повишаване-самочувствието-увереността.webp"
										alt="Повишаване на самочувствието и увереността в собствените възможности."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Изгражда умения за справяне с предизвикателни ситуации"
										text=""
										img="/assets/detski-psiholog/изгражда-умения-справяне-предизвикат.webp"
										alt="Изграждане на умения за справяне с предизвикателни ситуации."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Детето се научава да разпознава и управлява емоциите си"
										text=""
										img="/assets/detski-psiholog/детски-психолог-тревожно-разстройство.webp"
										alt="Детето се научава да разпознава и управлява емоциите си с детски психолог."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Намалява тревожността и усеща по-голяма сигурност"
										text=""
										img="/assets/detski-psiholog/намаляване-тревожността.webp"
										alt="Намаляване на тревожността и усещане на по-голяма сигурност."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Повишава самочувствието и увереността в собствените възможности"
										text=""
										img="/assets/detski-psiholog/повишаване-самочувствието-увереността.webp"
										alt="Повишаване на самочувствието и увереността в собствените възможности."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Изгражда умения за справяне с предизвикателни ситуации"
										text=""
										img="/assets/detski-psiholog/изгражда-умения-справяне-предизвикат.webp"
										alt="Изграждане на умения за справяне с предизвикателни ситуации."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="pink" />

			<section class="relative md:pb-30 xl:px-30 mx-20px">
				<H3Blue title="Първоначална психологическа консултация с детски психолог" />
				<div class="flex flex-col justify-center items-center max-w-1500px mx-auto px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:py-10 py-5 bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
						<p class="c-paper mb-1">
							В Sense Center предлагаме първоначална консултация с детски психолог за деца, които проявяват емоционални, поведенчески или социални затруднения.
						</p>
						<p class="c-paper">
							По време на консултацията се извършва обследване на поведението и актуалното състояние на детето.
						</p>
						<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Консултация с детски психолог." class="my-5 w-full h-auto object-cover rounded shadow" />
						<p class="c-paper mb-1">
							Оценяват се актуалното емоционално състояние и поведението на детето, както и социалните му умения.
						</p>
						<p class="c-paper">
							Едновременно с това специалистът интервюира родителите за техните наблюдения относно ежедневието, училището или детската градина, взаимоотношенията с връстници и други важни фактори.
						</p>
						<p class="c-paper">
							На база събраната информация се изготвя индивидуален план за работа с детски психолог.
						</p>
						<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Резултат от консултация с детски психолог." class="mt-5 w-full h-auto object-cover rounded shadow" />
						<p class="c-paper italic font-300 mt-1 op-90%" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
							Препоръчително е да донесете всички налични медицински документи, които могат да бъдат от полза за изясняване на актуалното състояние на детето.
						</p>
						<div class="pt-10 flex md:flex-row flex-col justify-center items-center gap-2">
							<PuzzleButton2
								class="important-bg-brand important-hover:bg-brand-hover"
								href=""
								text={<>Запазете час за<br />психологическа консултация</>}
							/>
							<PuzzleButton2
								href=""
								text="+ 359 879 800 013"
							/>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<div class="mt-20 gap-12 pb-8 md:pb-20 pt-50px xl:px-30 px-20px bg-brand-blue -mx-20px">
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
								class="important-h-480px important-sm:h-700px important-lg:h-600px important-xl:h-570px googlereview-container-in-dp"
								img="https://lh3.googleusercontent.com/a-/ALV-UjUjl00McT7Ni_1g9igLTFW01CCTJedMAXxD56UX74POjLYim-_9=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Искам да изкажа огромната си благодарност на терапевтите в Сенс Център. Те са професионалисти с отношение както към децата, така и към родителите. Препоръчвам не само за деца с различни дефицити, но и за деца в норма. Децата имат какво да получат и да надградят в този Център. Оценките им са точни и програмата им е методична, което дава страхотни резултати, особено за деца в аутистичния спектър.<br />
										Продължавайте да бъдете все така всеотдайни в работата си и да сбъдвате и нашите надежди.

									</>
								}
								name="Kalina Ivanova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/ZHpw76QoafV8tsfn7"
							/>
							<GoogleStarReview
								class="important-h-480px important-sm:h-700px important-lg:h-600px important-xl:h-570px googlereview-container-in-dp"
								img="https://lh3.googleusercontent.com/a-/ALV-UjW_dkDnEk3cgAUwceEl-07RzHUiK6vKjCgK8REHJuUVd9UHpEyG=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										В център Сенс са най-компетентните специалисти, с които съм се срещала, след като имаше съмнение за диагноза аутизъм на едното ми дете. Имам им огромно доверие, че ще са точни при диагностицирането на проблема , подхождат изключително адекватно и положителните резултати са видими след няколкоседмична работа с децата. В разгръщащата се област на детското психологично развитие този център е несравнимо богатство и ресурс! На мен като майка работата с тях ми носи голямо спокойствие, увереност и облекчение.
									</>
								}
								name="Srebrina Sokleva"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/N5Xap1N2NpW66KgB7"
							/>
							<GoogleStarReview
								class="important-h-480px important-sm:h-700px important-lg:h-600px important-xl:h-570px googlereview-container-in-dp"
								img="https://lh3.googleusercontent.com/a/ACg8ocIiRPRHL1SBkFo7V47uXhvsG6lGe3hwtoWc7mie6aqSSmIU4A=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Възхитен съм от професионализма на всички терапевти! Искам да изкажа огромни благодарности към г-жа Йорданова, която създаде 6-месечен терапевтичен план, специално предназначен за специфичните нужди на нашето дете. Цените определено оправдават качеството на услугата!
									</>
								}
								name="Martin Ivanov"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/UjUReUDJTFWgUjnbA"
							/>
							<GoogleStarReview
								class="important-h-480px important-sm:h-700px important-lg:h-600px important-xl:h-570px googlereview-container-in-dp"
								img="https://lh3.googleusercontent.com/a/ACg8ocKhQSXs0cfLbHzEtPMP0I9zRnUsRYrfb7v_3k6REk5cOm12Wg=w36-h36-p-rp-mo-br100"
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
								class="important-h-480px important-sm:h-700px important-lg:h-600px important-xl:h-570px googlereview-container-in-dp"
								img="https://lh3.googleusercontent.com/a/ACg8ocJ-d8gjlkboTx4M2-40mGVmZBoc7Uv8NOPzfK28REcWfBCNUQ=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Развитие и забавление в едно!<br />
										Моето дете обожава заниманията в Sense Center! Откакто посещаваме центъра, виждам значителен напредък в неговите социални и творчески умения. Програмите са разнообразни и поднесени по много достъпен начин.

									</>
								}
								name="Viktoria Lybomir"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/Fn54K8AyxbzniDLM9"
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px">
				<H3Pink title="Детските психолози в Sense Center" />
				<div class="mx-auto relative">
					<BackgroundIcons />
					<AnimatedComponent class="flex flex-col max-w-full relative overflow-hidden mx-auto px-5" style="flex: 0 0 auto;">
						<div>
							<div class="w-full py-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="mt-2">
										Нашите детски психолози притежават богат опит в работата с деца и семейства, като всеки от тях е специализирал в различна област на детската психология. Работим с любов, търпение и професионализъм, за да подкрепим всяко дете в постигането на емоционален баланс и личностно развитие. Използваме най-съвременните терапевтични техники и работим в тясно сътрудничество с родителите за постигане на най-добри резултати.
									</p>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-20">
				<div class="mx-auto px-5">
					<StaffSlider
						variant="dots1"
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

						]}>
						<div class="flex flex-col max-w-full relative overflow-hidden mx-auto">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Катя Илиева</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">"Мисли. Вярвай. Мечтай. Рискувай." - Уолт Дисни</p>
								<div class="w-full pb-20px pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Катя е отдаден специалист с дългогодишен опит в работата с деца и възрастни, преподавателски и управленски опит в сферата на образованието в образованието, държавната администрация и частния сектор. Завършила е магистратура по „Детско-юношеска и училищна психология“ (БСУ) и „Педагогика“ със специализация „Социална педагогика“ (СУ).
										</p>
										<p class="text-left mt-1">
											Катя е сертифициран треньор по емоционална интелигентност и специалист по детско-родителски отношения, с подготовка по системна фамилна и арт терапия, тя е и акредитиран лектор към МОН. Автор е на образователни програми и ресурси за деца и родители, а интересите ѝ включват приказкотерапия, работа с МАК карти и терапевтично писане.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Росен Молнар</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Детски психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Стремя се да подкрепям децата да развиват своя потенциал, да се учат как да се отнасят с другите и да познават себе си.”</p>
								<div class="w-full pb-20px pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Росен е млад, отдаден и мотивиран специалист, който подкрепя децата по пътя им към самопознание, увереност и пълноценно общуване. Притежава опит в работа с деца със СОП, като демонстрира постоянен стремеж към лично и професионално развитие.
										</p>
										<p class="text-left mt-1">
											Завършил бакалавърска степен по "Психология" във Великотърновския университет и магистърска програма по "Клинична психология" в Нов български университет. Той притежава сертификат като коуч по “Емоционална интелигентност” и е преминал специализирано обучение по "Фокусирана към решения кратка терапия". Освен работата си с деца в Sense Center, Росен консултира и възрастни пациенти в столична болница.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Галина Георгиева</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Детски психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“И най - дългия път започва с първата крачка", " Не спирай да мечтаеш"</p>
								<div class="w-full pb-20px pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Галина е опитен детски психолог в София, който притежава над 15 години богат професионален опит в работата с деца със СОП, като демонстрира постоянен стремеж към професионално усъвършенстване и иновативни терапевтични подходи.
										</p>
										<p class="text-left mt-1">
											Завършила е бакалавърска степен "Психология", магистратура "Психология на личността" и специализация по "Консултативна психология" във Великотърновския университет "Св. Св. Кирил и Методий". Непрекъснато обогатява своите знания чрез специализирани обучения по “Когнитивно-поведенческа психотерапия”, “Позитивна психотерапия”, “Психоаналитична психосоматика”, както и иновативни педагогически методи като “Валдорфската и Монтесори педагогика”.
										</p>
										<p class="text-left mt-1">
											Професионалният ѝ опит е разнообразен като включва работа като социален работник в дом за деца, лишени от родителска грижа, психолог и педагог в Център за обществена подкрепа, учител във Валдорфска и Монтесори градини, както и специалист-консултант в горещата телефонна линия за домашно насилие. Активно участва в доброволчески инициативи за подкрепа на деца в риск.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Георги Абрашев</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Детски клиничен психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Подкрепям децата да изразяват смело вътрешния си свят, да проявяват любопитство и креативност, за да запазят връзката с детето вътре в себе си и като възрастни."</p>
								<div class="w-full pb-20px pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Георги е сред отдадените детски клинични психолози в София, с опит в работата както с деца със СОП, така и в норма, той вярва, че всяко дете заслужава да бъде разбрано и подкрепено.  Неговата мисия е да вдъхновява децата да откриват себе си чрез свободно изразяване на емоции и креативност.
										</p>
										<p class="text-left mt-1">
											Завършил е бакалавър "Психология" в ПУ "Паисий Хилендарски" и магистратура "Клинична психология" в НБУ. Допълнително е сертифициран хипнотерапевт (БАХХ) и усъвършенства знанията си в Аналитичната психология (БОАП).
										</p>
										<p class="text-left mt-1">
											Най-голямо удовлетворение намира в подкрепата и наблюдаването на прогресa при децата и в силната екипна връзка, която спомага за тяхното развитие.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Нилюфер Исмаилова-Цветанова</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Детски психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Всяко дете, което застава пред мен е като "нова вселена"."</p>
								<div class="w-full pb-20px pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Нилюфер е отдаден и вдъхновен детски психолог, за когото всяко дете е като „нова вселена“, която заслужава да бъде открита с внимание, уважение и любопитство. Вярва, че по време на срещите с децата най-важното е да се изгради желание за свързване и общ език, чрез който заедно да се откриват богатствата и ресурсите на тази „нова вселена“.
										</p>
										<p class="text-left mt-1">
											Завършила е бакалавърска степен „Българска филология“ във Великотърновския университет и магистърска степен по „Детско-юношеска и училищна психология“ в СУ. Преминала е обучение по EMDR-терапия – Ниво 1, има базисно ниво на “Позитивна психотерапия” и е в процес на обучение за Майсторско ниво. В момента специализира и „Детско-юношеска психотерапия“ през призмата на позитивната психотерапия.
										</p>
										<p class="text-left mt-1">
											Вярва, че децата са бъдещите възрастни, а едно от най-ценните неща е, когато дете ти подаде ръка и сподели детството си с теб. За нея работата с деца е като разказване на приказка – понякога с малко думи или дори без тях, но винаги преживелищно и наситено с емоция.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Яница Дочева</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Детски психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Вярвам, че във всяко дете има светлина. Понякога тиха, понякога скрита зад различност, но винаги истинска.”</p>
								<div class="w-full pb-20px pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Мисията на Яница е да създава пространство, в което децата могат да бъдат себе си и да се чувстват приети, уверени и смели да споделят своята светлина със света.
										</p>
										<p class="text-left mt-1">
											Завършила е специалност „Психология“ и „Приложна лингвистика на немски език“ в Нов български университет през 2021 г., а през 2025 г. ще завърши и специалност „Обществено здраве“ в Медицински университет – София. Притежава опит в консултиране на деца в норма и в работа с възрастни в контекста на личностно развитие и емоционална подкрепа.
										</p>
										<p class="text-left mt-1">
											Активно участва в благотворителни инициативи, включително организация на събития за деца. Едно от най-вдъхновяващите ѝ преживявания е в СБАЛ по детски болести „Проф. Иван Митев“, където заедно с малките пациенти изработва коледна украса и превръща една елха в символ на надежда, топлина и радост.
										</p>
										<p class="text-left mt-1">
											В момента усъвършенства професионалните си умения чрез обучение по „Терапия чрез игра и изкуство“, с цел да разшири и задълбочи уменията си в работата с деца. Най-много цени искрените усмивки и малките победи, които правят всеки ден по-специален.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Александър Ганев</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Детски клиничен психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Моята мисия е да осигуря стабилна основа за емоционално и социално израстване, която подкрепя децата през целия им живот.”</p>
								<div class="w-full pb-20px pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Александър е отдаден и целеустремен детски клиничен психолог, който приема работата с деца като възможност да изгради мост към техния вътрешен свят – с търпение, емпатия и професионализъм. Вярва, че всяко дете заслужава да бъде чуто, разбрано и подкрепено по пътя към пълноценно разгръщане на своя потенциал.
										</p>
										<p class="text-left mt-1">
											Завършил е бакалавърска степен по „Психология“ във Великотърновски университет „Св. св. Кирил и Методий“ и магистърска степен по „Клинична психология“ в Софийски университет „Св. Климент Охридски“. Преминал е обучение за работа с диагностичния инструмент DESK 3–5, което му позволява да извършва прецизна оценка и ефективно насочване на терапевтичния процес.
										</p>
										<p class="text-left mt-1">
											Провежда индивидуални и групови психологични сесии с деца до 18-годишна възраст, както в норма, така и със затруднения в развитието. Специализира в работата с деца от аутистичния спектър, с поведенчески затруднения, хиперактивност, тревожност и други емоционални и поведенчески предизвикателства.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Венцислава Тодорина</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Вярвам, че всяко дете заслужава да бъде насърчавано да се развива и да изразява свободно емоциите си.”</p>
								<div class="w-full pb-20px pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Венцислава Тодорина е млад и мотивиран специалист, отдаден на работата с деца и тяхното развитие. Тя вярва, че всяко дете заслужава да бъде насърчавано да изразява свободно емоциите си и да се развива в сигурна и подкрепяща среда.
										</p>
										<p class="text-left mt-1">
											Завършила е бакалавърска степен по „Психология“ в Нов български университет със специализация „Психология на развитието“. Притежава опит в работа с деца със СОП и в норма, като в своята практика проявява отдаденост, внимание и желание за професионално развитие.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Деси-Слава Андонова</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Убедена съм, че подкрепата е от ключово значение за развитието на всеки човек.”</p>
								<div class="w-full pb-20px pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Деси-Слава е млад, отдаден и мотивиран специалист, който подкрепя децата по пътя им към уверено и пълноценно развитие. Притежава опит в работата с деца със СОП, както и петгодишна практика в сферата на детската анимация, включваща планиране на събития и водене на групови занимания.
										</p>
										<p class="text-left mt-1">
											Завършила е бакалавърска степен по „Психология“ в Нов български университет със специализация „Психология на развитието“. Интересите ѝ са насочени към когнитивното развитие в детска възраст и включват провеждане на тренинги за развитие на памет, внимание и екзекутивни функции. В своята работа тя е убедена, че ранната подкрепа е ключът към изграждането на увереност и подготовката на децата за пълноценен живот като възрастни.
										</p>
									</div>
								</div>
							</div>
						</div>
					</StaffSlider>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="gap-12 pb-8 md:pb-20 xl:px-30">
				<H3Blue title="Как протича терапията с детски психолог" />
				<div class="md:pb-0 pb-10">
					<AnimatedComponent>
						<p class="mt-0 mb-10 px-5">
							Терапията с детски психолог е внимателно структуриран процес, който поставя детето в центъра. Основната цел е създаването на безопасна и подкрепяща среда, в която детето може да се почувства спокойно, да споделя своите мисли и емоции и да развива необходимите умения за справяне с трудности.
						</p>
						<ReviewSlider
							variant="dots2"
							reviews={[
								{ name: "1" },
								{ name: "2" },
								{ name: "3" },
								{ name: "4" },
								{ name: "5" },
							]}>
							<PuzzleIconReview
								class="h-580px sm:h-650px md:h-700px lg:h-550px"
								style="background-color:#742C8F;"
								puzzleclass="c-brand w-6 mr-2"
								img="/assets/detski-psiholog/начало-сесия-детски-психолог.webp"
								alt="Начало на сесията с детски психолог."
								title="Начало на сесията"
								desc="Терапията започва с въвеждане в терапевтичната стая, която е проектирана да създава спокойна и комфортна атмосфера. Детският педагог психолог приветства детето и създава среда на сигурност и доверие, необходима за успешна работа."
							/>
							<PuzzleIconReview
								class="h-580px sm:h-650px md:h-700px lg:h-550px"
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/detski-psiholog/взаимодействие-детски-психолог.webp"
								alt="Иницииране на взаимодействие с детскипсихолог."
								title="Иницииране на взаимодействие"
								desc="Детският психолог адаптира дейностите според нуждите на всяко дете. При комфортна атмосфера детето може да сподели мислите от ежедневието си, като специалистът изслушва с емпатия и разбиране."
							/>
							<PuzzleIconReview
								class="h-580px sm:h-650px md:h-700px lg:h-550px"
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/detski-psiholog/прилагане-игрови-дейности.webp"
								alt="Прилагане на игрови дейности."
								title="Прилагане на игрови дейности"
								desc="Ролевите игри със специални макети и творческите занимания като рисуване помагат на децата да изразяват емоции, да споделят мисли и да развиват важни социални умения за ежедневието, ключово за деца със страхове, тревожно разстройство или аутизъм."
							/>
							<PuzzleIconReview
								class="h-580px sm:h-650px md:h-700px lg:h-550px"
								style="background-color:#FA7402;"
								puzzleclass="c-brand-blue w-6 mr-2"
								img="/assets/detski-psiholog/психологически-методи-деца.webp"
								alt="Психологически методи за деца."
								title="Психологически методи"
								desc="В зависимост от възрастта и индивидуалните потребности на детето, детският психолог използва методи като разговори за разбиране и управление на емоциите, техники за релаксация и справяне със стреса, упражнения за развитие на социални умения и изграждане на самоувереност."
							/>
							<PuzzleIconReview
								class="h-580px sm:h-650px md:h-700px lg:h-550px"
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/detski-psiholog/край-сесията-детски-психолог.webp"
								alt="Край на сесията"
								title="Край на сесията"
								desc="В края на всяка среща с детския психолог се прави обобщение на постиженията и напредъка в следствие на терапията. Насърчаваме детето за усилията му, а родителите получават обратна връзка и насоки за допълнителна подкрепа у дома."
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue2" />

			<section class="pt-20">
				<AnimatedComponent class="">
					<H2Echo
						maintitle={
							<>
								Иновативни методи
							</>
						}
						title="методи"
						bgImage="/assets/detski-psiholog/иновативни-методи.webp"
						bgSize="500%"
						bgPosition="right 0% top 70%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/detski-psiholog/иновативни-методи.webp" alt="Иновативни методи в детската психология." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>
					<AnimatedComponent class="flex flex-col items-center gap-1 relative mb-2 md:hidden">
						<h2 class="text-transparent bg-clip-text bg-[url(/assets/detski-psiholog/иновативни-методи.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
							аутизъм
						</h2>
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt--2">
								Терапията с детски психолог използва специално подбрани инструменти и оборудване, които подпомагат изразяването на емоциите и стимулират личностното и социалното развитие на детето. Чрез игрови и творчески подходи, детето се чувства в безопасна среда, където може свободно да споделя и изразява своите чувства и преживявания.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-50">
				<H3Pink variant="h2" title="3 психологически игрови модела, които подпомагат детското развитие" />
				<div class="mx-auto">
					<AnimatedComponent class="px-5 md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<h4 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Макети на дома, детската градина и училището</h4>
							<div class="w-full pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										Тези модели помагат на детето да визуализира и пресъздава ситуации от ежедневието, като по този начин улесняват разбирането на емоции и развиването на умения за справяне с тях.
									</p>
								</div>
							</div>
							<div class="">
								<img class="w-full h-full" src="/assets/detski-psiholog/макети-на-дома.webp" alt="Макет на дома." />
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="xl:px-30 mx-20px mt-10">
				<div class="mx-auto">
					<AnimatedComponent class="px-5 md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<h4 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Фигури на членове от семейството</h4>
							<div class="w-full pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										Чрез тях детето може да възпроизвежда семейни взаимодействия, да изразява чувства и да разиграва сценарии, които подпомагат разбирането и преодоляването на предизвикателства в семейната среда.
									</p>
								</div>
							</div>
							<div class="">
								<img class="w-full h-full" src="/assets/detski-psiholog/терапия-фигури-членове-семейството.webp" alt="Терапия с фигури на членове от семейството." />
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px mt-10">
				<div class="mx-auto">
					<AnimatedComponent class="px-5 md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<h4 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Фигури на животни</h4>
							<div class="w-full pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										Стимулират въображението и развиват емпатия. Използват се в ролеви игри, които подпомагат комуникацията, разпознаването на емоции и уменията за справяне със стрес.
									</p>
								</div>
							</div>
							<div class="">
								<img class="w-full h-full" src="/assets/detski-psiholog/терапия-фигури-животни.webp" alt="Терапия с фигури на животни." />
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="xl:px-30 mx-20px">
				<div class="mx-auto">
					<AnimatedComponent class="mb-10 mt-20 md:mt-30 lg:w-800px mx-auto">
						<div class="flex flex-col justify-center items-start b-rd-12px bg-brand px-10 py-4">
							<p class="font-size-22px uppercase c-paper font-500 mb-0 tracking-0.5px font-[MYRIADPRO-Semibold]">Устойчиво развитие</p>
							<p class="c-paper font-300 font-[MYRIADPRO-Light]">Работата с детски психолог осигурява подкрепяща и сигурна среда, в която всяко дете може да изразява емоциите си и да развива своите умения. Чрез индивидуален подход и подходящи техники се постигат устойчиви резултати в изграждането на увереност, социални умения и емоционален баланс.
							</p>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue" />

			<div class="xl:px-30 mx-20px px-20px md:px-0">
				<H3Blue title="Спокойна и стимулираща среда за децата" />
				<div class="md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<AnimatedComponent class="px-5 flex flex-col gap-1">
						<div>
							<img class="w-full h-full" src="/assets/home/вход-към-sense-center.webp" alt="Вход към sense center." />
						</div>
						<p class="mt-5">
							Центърът включва 14 специализирани терапевтични кабинета, стая за отдих и социализация, както и удобен паркинг за посетители.
						</p>
						<div class="mt-6">
							<div>
								<img class="w-full h-full" src="/assets/detski-psiholog/психологичен-кабинет.webp" alt="Психологичен кабинет." />
							</div>
						</div>
						<p class="mt-6">
							Всички пространства в Sense Center са създадени така че да предразполагат детето към спокойствие, комфорт и активно участие в терапията.
						</p>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="purple2" />

			<section>
				<div class="gap-12 pb-8 md:pb-30 pt-100px md:pt-50px xl:px-30">
					<H3Pink title="Първи стъпки" />
					<AnimatedComponent class="mb-10 relative px-5">
						<BackgroundIcons />
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">За да започнете работа с добър детски психолог в София, е нужно единствено да се свържете с нас. Обадете се или ни пишете в социалните мрежи или директно през сайта.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Често пътят започва с притеснение и несигурност.<br />
								Споделете какво Ви притеснява, ще Ви изслушаме внимателно с грижа и разбиране.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Ще обсъдим актуалното състояние на детето и ще организираме час за първоначална консултация с детски психолог, на която ще се запознаем с уменията на детето към настоящия момент, неговите дефицити и трудности.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">На база Вашата заявка за напредъка, който искате да постигнем и нашето наблюдение по време на консултацията,  препоръчваме подходящи терапии и честота на посещенията.</p>
						</div>
					</AnimatedComponent>
					<PuzzleButton2
						class="important-bg-brand important-hover:bg-brand-hover"
						href=""
						text={<>Запазете час за<br />първоначална консултация</>}
					/>
				</div>
			</section>

			<section class="pt-20 md:pt-30">
				<AnimatedComponent class="">
					<H2Echo
						maintitle={
							<>
								Резултати от терапията с детски психолог
							</>
						}
						title="детски психолог"
						bgImage="/assets/detski-psiholog/резултат-детски-психолог-мобилно.webp"
						bgSize="450%"
						bgPosition="right 80% top 80%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/detski-psiholog/резултат-детски-психолог-мобилно.webp" alt="Резултат от терапия с детски психолог." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>
					<AnimatedComponent>
						<div class="md:hidden block px-5">
							<p>
								Всяко дете напредва със собствено темпо, затова терапията с детски психолог се адаптира според неговите индивидуални нужди. С персонализиран план и редовни терапевтични сесии децата постигат стабилен напредък в емоционалното и социалното си развитие.
							</p>
							<p class="mt--1">
								Постепенно децата стават по-уверени, по-спокойни и по-умели в общуването, развиват умения за справяне с трудности, подобряват концентрацията и изграждат положителен образ за себе си.
							</p>
							<p class="mt-15 font-[MYRIADPRO-Semibold]">Макар резултатите да не са забележими веднага, с постоянство и професионална подкрепа те стават видими и трайни.</p>
						</div>
					</AnimatedComponent>
					<AnimatedComponent class="flex flex-col items-center gap-1 relative mb-2 md:hidden">
						<h2 class="text-transparent bg-clip-text bg-[url(/assets/detski-psiholog/резултат-детски-психолог-мобилно.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
							детски психолог
						</h2>
					</AnimatedComponent>

					<div class="relative w-full px-5 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<div class="hidden md:block">
								<p>
									Всяко дете напредва със собствено темпо, затова терапията с детски психолог се адаптира според неговите индивидуални нужди. С персонализиран план и редовни терапевтични сесии децата постигат стабилен напредък в емоционалното и социалното си развитие.
								</p>
								<p class="mt--1">
									Постепенно децата стават по-уверени, по-спокойни и по-умели в общуването, развиват умения за справяне с трудности, подобряват концентрацията и изграждат положителен образ за себе си.
								</p>
								<p class="mt--1">Макар резултатите да не са забележими веднага, с постоянство и професионална подкрепа те стават видими и трайни.</p>
							</div>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px pb-50px">
				<H3Blue title="Често задавани въпроси" />
				<SingleCollapse />
			</section>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-5 md:pt-0">
				<H3Pink title="Успешни истории" />
			</AnimatedComponent>

			<section class="max-w-1500px md:pt-10 mx-auto">
				<div>
					<section class="">
						<AnimatedComponent>
							<ContainerSlider
								reviews={[
									{ name: "Review 1" },
									{ name: "Review 2" },
									{ name: "Review 3" },
									{ name: "Review 4" },
									{ name: "Review 5" },
								]}
							>
								<ReviewPuzzlePiece
									style="background-color:#088F9D;"
									puzzleclass="c-brand-pink w-6 mr-2"
									title="“Отношенията им са видимо по-добри”"
									desc={<>
										Двете ни дъщери (6 и 4 годишни) ходят на терапия в центъра вече повече от година и виждаме резултати от отдавна: отношенията им са видимо по-добри, разбират се без агресия, разрешават сами споровете си мирно, намират решения, които са добри и за двете, където преди се викаше, пищеше, скубеше и удряше за всяко едно нещо. Сега си организират заедно игри и отстъпват една на друга, когато някой не е съгласен с правилата.<br />
										Ще продължим редовно да посещавам Сенс център и да го препоръчваме на приятели и познати!
									</>}
									name="Petya Kirisheva"
									condition=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#E11172;"
									puzzleclass="c-brand-blue w-6 mr-2"
									title="“Има значителен напредък”"
									desc={<>
										Детето ми посещава центъра вече 5 месеца и има значителен напредък. Има интерес към всичко около него,очен контакт,опитва се да говори.Препоръпвам с две ръце центъра.Страхотни хора и професионалисти!
									</>}
									name="Лилия Жекова"
									condition=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#FA7402;"
									puzzleclass="c-brand-purple w-6 mr-2"
									title="“Детето ми се чувства прекрасно там”"
									desc={<>
										Великолепно отношение и професионализъм! Детето ми се чувства прекрасно там, винаги ходи с огромно желание и отбелязва значителен напредък, благодарение на този млад и отдаден екип.
									</>}
									name="Elena Todorova"
									condition=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#E11172;"
									puzzleclass="c-brand-blue w-6 mr-2"
									title="“Хубави хора с хубава кауза”"
									desc={<>
										“Повече такива места ни трябват в България. Хубави хора с хубава кауза работят там. Истински професионалисти!”
									</>}
									name="Hristo Marinov"
									condition=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#742C8F;"
									puzzleclass="c-brand-orange w-6 mr-2"
									title="“Sense Center е истинско съкровище!”"
									desc={<>
										Прекрасно място за децата и родителите!<br />
										Sense Center е истинско съкровище! Всичко е организирано професионално, а обстановката е толкова уютна и приветлива. Уверена съм, че детето ми е в най-добрите ръце.
									</>}
									name="An-Mari Petkova"
									condition=""
								/>
							</ContainerSlider>
						</AnimatedComponent>
						<PuzzleButton2
							class="important-mt-30px"
							href=""
							text="Вижте всички успешни истории"
						/>
					</section>
				</div>
			</section>
			<GradientFooter />
		</>
	);
}
