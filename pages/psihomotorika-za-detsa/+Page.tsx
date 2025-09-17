import "solid-slider/slider.css";
import { GoogleStarReview, PuzzleIconReview, ReviewSlider, StaffSlider, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink, H3SolidPink } from '../../components/H2WithImage';
import { ContainerBox, ContainerSlider, ReviewPuzzlePiece } from "../../components/ContainerSlider";
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { Collapse } from "../../components/FAQ";
import { VideoHero } from "../../components/HeroVideo";
import { createSignal } from "solid-js";
import { GallerySlider3 } from "../../components/GallerySlider";

function SingleCollapse() {
	return (
		<>
			<div class="flex flex-col gap-5 md-gap-2 cursor-pointer max-w-1200px mx-auto">
				<Collapse title="1. Как да разбера дали детето ми има нужда от терапевтични сесии по психомоторика?" desc="Ако детето Ви има затруднения с баланса, концентрацията, фината или грубата моторика, често се претоварва емоционално или изпитва трудности в общуването, психомоториката за деца е отличен начин да се подпомогне неговото развитие." />

				<Collapse title="2. На каква възраст детето може да започне психомоторна терапия?" desc="Терапията е подходяща още от ранна детска възраст (2–3 години), като методите и упражненията се адаптират спрямо индивидуалните нужди и възрастта на детето." />

				<Collapse title="3. Какви методи се използват в психомоториката?" desc="Работата включва игрови упражнения с люлки, батут, топки, конуси, балансборд и други средства. Част от сесиите могат да бъдат изградени и върху принципите на релационната психомоторика, която насърчава връзката между движение, емоции и социални умения. Така психомоториката се превръща в комбинация от движение и полезни умения за ежедневието." />

				<Collapse title="4. Колко време продължава една терапевтична сесия по психомоторика?" desc="Обикновено сесиите по психомоторика за деца се провеждат в рамките на 40 минути." />

				<Collapse title="5. Могат ли родителите да присъстват по време на терапията?" desc="В Sense Center препоръчваме родителите да не присъстват на терапевтичните сесии, за да гарантираме ефективността на процеса.">
					<p>
						Присъствието на родител може да отклони фокуса на детето, особено при по-малките, които често стават зависими от сигурността на родителската фигура. Това може да ограничи тяхната самостоятелност и активност в терапията. Също така, когато родителят е в стаята, за терапевта е по-трудно да изгради авторитет, което е важно за успешно взаимодействие с детето.
					</p>
					<p>
						Родителите обаче играят ключова роля извън терапевтичните сесии. Затова редовно ги информираме за напредъка на детето и подходите, които могат да приложат у дома, за да подкрепят процеса. Този баланс между терапевтичната работа и родителската подкрепа е ключов за успеха.
					</p>
				</Collapse>

				<Collapse title="6. Може ли психомоторната терапия да се комбинира с други терапии?" desc="Да, психомоториката за деца може успешно да се съчетава с различни терапии за постигане на оптимални резултати в развитието на Вашето дете. Свържете се със специалистите от Sense Center, за да получите персонализирана консултация и да изберете най-подходящите терапии за нуждите на Вашето дете." />

				<Collapse title="7. Колко често трябва да се посещават заниманията по психомоторика?" desc="Препоръчителната честота е между 1 и 2 пъти седмично, според индивидуалните нужди на детето и препоръките на терапевта." />

				<Collapse title="8. Какво включва първичната оценка на детето?" desc="Първичната оценка обикновено включва:">
					<div>
						<ul class="ml-5 mt-3">
							<li class="">
								Разговор с родителите относно развитието на детето, поведението и емоционалното състояние, отношенията в семейството и социалната среда.
							</li>
							<li class="">
								Наблюдение на детето – Терапевтът наблюдава поведението и реакциите на детето, за да идентифицира емоционалните и социалните му нужди.
							</li>
							<li class="">
								Изследване на емоционалните и социалните умения – Използване на психологически инструменти, като тестове за когнитивно развитие, емоционална интелигентност и социална адаптация, за да се определи актуалното състояние на детето.
							</li>
							<li class="">
								Обратна връзка – В края на оценката специалистът предоставя на родителите обобщение и подходящ терапевтичен план за подкрепа, както и препоръки за работа вкъщи.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="9. Каква информация трябва да предоставя по време на първичната оценка на детето?" desc="По време на първичната оценка на актуалното състояние е необходимо да споделите:">
					<div>
						<ul class="ml-5 mt-3">
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

				<Collapse title="10. Какво трябва да носим за първата терапевтична сесия по психомоторика?" desc="За първата сесия по психомоторика не е необходимо да носите нещо специално, но е препоръчително да подготвите пантофи и резервни дрешки за детето. Ресурсите, които ще се използват под формата на игра по време на терапията сe осигуряват от Sense Center." />

				<Collapse title="11. Какви подобрения могат да се очакват след терапията по психомоторика?" desc="">
					<div>
						<ul class="ml-5">
							<li class="">
								Подобрение в координацията и прецизността на ръцете и пръстите, които са важни за писане, рисуване и манипулиране на малки предмети;
							</li>
							<li class="">
								Подобрение на контрола върху големите мускулни групи, необходими за дейности като ходене, бягане, скачане и катерене;
							</li>
							<li class="">
								Повишаване на самостоятелността и увереността;
							</li>
							<li class="">
								По-добра съгласуваност на действията и зрителните стимули, например при хвърляне и хващане на топка;
							</li>
							<li class="">
								По-добро разпознаване, изразяване и управление на емоциите чрез движение и игра;
							</li>
							<li class="">
								Развитие на умения за взаимодействие с връстници чрез съвместни активности;
							</li>
							<li class="">
								Подобряване на уменията за планиране и организиране на движенията;
							</li>
							<li class="">
								Развитие на речта чрез свързване на двигателната активност с вербално изразяване.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="12. Има ли дейности или упражнения, които мога да правя с детето си, за да подкрепя напредъка му?" desc="Да, терапевтът от Sense Center ще Ви предостави подходящи насоки и ресурси за подпомагане на развитието на детето в домашни условия." />

				<Collapse title="13. Има ли възможност за терапевтични сесии онлайн?" desc="Не, към момента не провеждаме терапии онлайн, терапевтичните сесии се извършват с добър ерготерапевт на място в Sense Center на адрес – гр. София, бул. „Никола Петков“ 95a." />
			</div>
		</>
	);
}

const [isPlayingHero, setIsPlayingHero] = createSignal(false);

export default function Page() {
	return (
		<>
			<div class="relative w-full">
				<VideoHero
					class="important-h-full important-aspect-auto"
					videoSrc="/assets/psihomot-za-detsa/Сенс-Център-Психомоторика-Деца-1.mp4"
					videoSrcMobile="/assets/psihomot-za-detsa/Сенс-Център-Психомоторика-Деца-Мобилно-1.mp4"
					gifPreview="/assets/psihomot-za-detsa/Сенс-Център-Психомоторика-Деца.mp4"
					gifPreviewMobile="/assets/psihomot-za-detsa/Сенс-Център-Психомоторика-Деца-Мобилно.mp4"
					isPlaying={isPlayingHero()}
					onPlay={() => setIsPlayingHero(true)}
				/>

				<div class="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-end pb-18 md:pb-10 text-center px-4 text-white">
					<div class={`absolute ${isPlayingHero() ? 'top-[102%] sm:top-[105%] lg:top-[105%] mt-[30px]' : 'top-[46%] md:top-[65%] mt-0'}`}>
						<div>
							<div class={`mb-3 transition-colors duration-500 text-[48px] md:text-[90px] leading-[46px] md:leading-[90px] font-['MYRIADPRO-Bold'] text-center px-2 md:px-10 ${isPlayingHero() ? 'inline-block pb-[0.2em] bg-gradient-to-r from-[#E11172] to-[#FFAE01] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]' : 'text-white'}`}>
								Движение с мисъл, игра с цел
							</div>
						</div>

						<h1
							class={`important-delay-300 text-center mb-0 important-font-size-5.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 important-leading-5 transition-colors duration-500 important-font-[MYRIADPRO-Light] ${isPlayingHero()
								? 'text-brand'
								: 'text-white'}`}>
							Психомоторика за деца
						</h1>

						<div
							class={`important-delay-600 mt-8 md:mt-10 relative text-center ${isPlayingHero() ? 'md:pb-30' : 'md:pb-0'
								}`}
						>
							<div class="flex md:flex-row flex-col justify-center items-center gap-3 md:gap-6 pointer-events-auto">
								<PuzzleButton />
								<PuzzleButton2
									href=""
									text={
										<>
											Вижте успешни<br />истории
										</>
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<AnimatedComponent class={`xl:px-30 mx-20px pt-30 md:pt-40 ${isPlayingHero() ? 'mt-120 sm:mt-90 md:mt-110 lg:mt-100' : 'mt-0'}`}>
				<H3Pink variant="h2" title="Заедно развиваме увереността, двигателните умения и координацията" />
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
										class2="important-xl:h-62 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#742C8F;"
										title="Над 170 деца подобриха координацията и самочувствието си"
										text="Децата придобиха по-добри двигателни и социални умения, общуват по-уверено и участват по-активно в игрите и учебния процес."
										img="/assets/psihomot-za-detsa/психомоторика-деца.webp"
										alt="Психомоторика за деца в Sense Center."
									/>
									<ContainerBox
										class2="important-xl:h-62 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#E11172;"
										title="Богат опит с различни предизвикателства"
										text="Работим с деца с трудности в моториката, вниманието, комуникацията и емоционалната регулация."
										img="/assets/psihomot-za-detsa/психомоторика-за-всички-деца.webp"
										alt="Психомоторика за всички деца в Sense Center."
									/>
									<ContainerBox
										class2="important-xl:h-62 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#088F9D;"
										title="Интерактивни методи за обучение"
										text="Използваме движение, игра и творчески активности, които превръщат заниманията по психомоторика в ефективен начин за развитие на полезни умения."
										img="/assets/psihomot-za-detsa/интерактивни-методи-психомоторика.webp"
										alt="Интерактивни методи за психомоторика при деца."
									/>
									<ContainerBox
										class2="important-xl:h-62 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#FA7402;"
										title="Индивидуален план за всяко дете"
										text="Всеки план е съобразен със специфичните нужди на детето и целите на терапията, за да гарантира максимален напредък."
										img="/assets/psihomot-za-detsa/релационна-психомоторика.webp"
										alt="Индивидуален план за всяко дете по психомоторика."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-62 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#742C8F;"
										title="Над 170 деца подобриха координацията и самочувствието си"
										text="Децата придобиха по-добри двигателни и социални умения, общуват по-уверено и участват по-активно в игрите и учебния процес."
										img="/assets/psihomot-za-detsa/психомоторика-деца.webp"
										alt="Психомоторика за деца в Sense Center."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-62 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#E11172;"
										title="Богат опит с различни предизвикателства"
										text="Работим с деца с трудности в моториката, вниманието, комуникацията и емоционалната регулация."
										img="/assets/psihomot-za-detsa/психомоторика-за-всички-деца.webp"
										alt="Психомоторика за всички деца в Sense Center."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-62 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#088F9D;"
										title="Интерактивни методи за обучение"
										text="Използваме движение, игра и творчески активности, които превръщат заниманията по психомоторика в ефективен начин за развитие на полезни умения."
										img="/assets/psihomot-za-detsa/интерактивни-методи-психомоторика.webp"
										alt="Интерактивни методи за психомоторика при деца."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-62 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#FA7402;"
										title="Индивидуален план за всяко дете"
										text="Всеки план е съобразен със специфичните нужди на детето и целите на терапията, за да гарантира максимален напредък."
										img="/assets/psihomot-za-detsa/релационна-психомоторика.webp"
										alt="Индивидуален план за всяко дете по психомоторика."
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
					<H3SolidPink variant="h2" title="Над 700 подкрепени семейства" />
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
				<H3Blue variant="h2" title="Подпомагаме развитието на всяко дете" />
				<div class="md:px-10 xl:px-0 flex xl:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="xl:w-1/2 w-full">
						<div class="flex flex-col gap-2">
							<img src="/assets/psihomot-za-detsa/психомоторика-за-всяко-дете.webp" alt="Психомоторика за всяко дете в Sense Center." class="object-[0%_40%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/psihomot-za-detsa/психомоторика-полезни-умения.webp" alt="Полезни упражнение по психомоторика." class="object-[0%_40%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/psihomot-za-detsa/психомоторика-всяко-дете.webp" alt="Психомоторика на дете в Sense Center." class="object-[0%_25%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
						</div>
					</AnimatedComponent>

					<div class="relative w-full px-3 sm:px-0 xl:px-3 xl:w-1/2 xl:pl-7">
						<AnimatedComponent>
							<div class="pt-6 md:py-0">
								<p class="xl:mt--5">
									При нас идват деца, които срещат трудности с двигателните умения, координацията и баланса. Прилагаме психомоторика за деца, съобразена с нуждите на всяко дете – при забавяне в двигателното развитие, проблеми с фината и грубата моторика, хиперактивност или сензорни затруднения. Вярваме, че с индивидуален подход и подкрепата на опитен терапевт всяко дете може да подобри координацията си, да развие увереност в собствените си движения и да се адаптира по-лесно към околната среда.
								</p>
								<p class="important-font-[MYRIADPRO-Bold] tracking-0.2px">
									Психомоториката се препоръчва при:
								</p>
							</div>
							<AnimatedComponent class="mx-auto flex flex-col justify-center items-center gap-2 mb-2 md:mb-3 md:mt-5">
								<div class="flex flex-col md:flex-row gap-2">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover:bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-41 h-16">
											СОП
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
											Селективен мутизъм
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover-bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											ХАДВ
										</a>
									</div>
								</div>

								<div class="flex flex-col md:flex-row gap-2">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover-bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-41 h-16">
											Синдром на Рет
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand md:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											Диспраксия
										</a>
									</div>
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											Мускулна<br />дистрофия
										</a>
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-38 h-16">
											Синдром<br />на Турет
										</a>
									</div>
								</div>

								<div class="flex flex-row gap-2 flex-wrap justify-center">
									<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
										Аутизъм
									</a>
								</div>

							</AnimatedComponent>
							<PuzzleButton2
								href=""
								text="Вижте всички състояния"
							/>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="pb-40px xl:px-30 mx-20px">
				<H3Pink variant="h2" title="Какво следва, ако не предприемем действие" />
				<AnimatedComponent class="max-w-1500px mx-auto flex flex-col md:flex-row gap-14">
					<div class="flex flex-col justify-between items-start gap-2 w-full md:w-2/3 px-5">
						<div class="w-full">
							<p class="pb-0 mb-5 md:mt-0">Ако не се обърне внимание на двигателните и социалните затруднения в ранна възраст, те могат сериозно да повлияят на цялостното развитие на детето. Забавеното психомоторно развитие често води до:</p>
						</div>
						<div class="w-full">
							<ul style="list-style-type: none;" class="flex flex-col gap-2">
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">трудности с фината и грубата моторика, което пречи на ежедневни дейности като писане, обличане и хранене</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">ниско самочувствие и социална изолация поради неспособност за участие в игри и спортни занимания с връстници</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">проблеми с координацията, баланса и пространствената ориентация, които създават трудности в училищна и домашна среда</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">поведенчески затруднения, свързани със сензорни непоносимости и трудност при саморегулация</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand max-w-800px mx-auto px-6 md:px-10 xl:px-8 py-2 pd:py-4 w-full md:w-1/3">
						<div class="flex justify-center items-center gap-4">
							<img src="/assets/exclamation-mark-icon.webp" class="w-12 h-12" />
							<p class="font-[MYRIADPRO-Semibold] c-paper uppercase font-size-17px">80% - 90% от мозъка на детето се развива до 7-годишна възраст</p>
						</div>
						<p class="font-size-15px c-paper mt-2">Ето защо колкото по-рано бъде започната терапия по психомоторика за деца, толкова по-голяма е възможността за видимо подобрение на състоянието и напредване в развитието.</p>
					</div>
				</AnimatedComponent>
			</section>

			<section class="relative md:pt-10 xl:px-30 mx-20px">
				<H3Pink variant="h2" title="По пътя към уверени движения" />
				<BackgroundIcons />
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px mb-2">
						<img src="/assets/psihomot-za-detsa/уверени-движения-психомоторика.webp" alt="По пътя към уверени движения с психомоторика." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt--2">
								Психомоториката за всички деца е насочена към превенция и корекция на нарушения в двигателното развитие, координацията и баланса при децата. Тя включва индивидуален подход и специализирани техники за отработване на двигателните затруднения.
							</p>
							<p>
								Нашите терапевти са обучени да работят както с деца в норма, така и с деца със специални образователни потребности (СОП). Мисията на специалистите е да подпомогнат детето да подобри своята моторика, да изгради увереност в собствените си движения и да се интегрира по-лесно в социалната и образователната среда.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-20">
				<H3Blue variant="h2" title="Как психомоториката помага на твоето дете в 2 стъпки" />
			</AnimatedComponent>

			<div class="max-w-1500px md:pt-10 mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h3 class="font-600 text-left pb-2 mt-0 important-font-size-26px important-leading-35px">Двигателно развитие и координация</h3>
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
										class2="important-xl:h-60 important-lg:h-45 important-md:h-50 important-sm:h-25 important-h-58"
										style="background-color:#E11172;"
										title="Подобрява контрола върху големите мускулни групи чрез дейности като ходене, бягане, скачане и катерене "
										text=""
										img="/assets/psihomot-za-detsa/контрола-мускулни-групи-психомоторика.webp"
										alt="Подобрява контрола върху големите мускулни групи с психомоторика."
									/>
									<ContainerBox
										class2="important-xl:h-60 important-lg:h-45 important-md:h-50 important-sm:h-25 important-h-58"
										style="background-color:#E11172;"
										title="Развива координацията и прецизността на ръцете и пръстите, важни за писане, рисуване и манипулиране на малки предмети"
										text=""
										img="/assets/psihomot-za-detsa/координацията-прецизността-ръцете-пръстите.webp"
										alt="Психомоторика за координацията и прецизността на ръцете и пръстите."
									/>
									<ContainerBox
										class2="important-xl:h-60 important-lg:h-45 important-md:h-50 important-sm:h-25 important-h-58"
										style="background-color:#E11172;"
										title="Помага на детето да съгласува действията си със зрителните стимули, например при хвърляне и хващане на топка"
										text=""
										img="/assets/psihomot-za-detsa/детето-съгласува-действията-зрителните-стимули.webp"
										alt="Детето да съгласува действията си със зрителните стимули."
									/>
									<ContainerBox
										class2="important-xl:h-60 important-lg:h-45 important-md:h-50 important-sm:h-25 important-h-58"
										style="background-color:#E11172;"
										title="Подобрява ориентацията в средата и управлението на движенията спрямо обекти и други хора"
										text=""
										img="/assets/psihomot-za-detsa/подобрява-ориентацията.webp"
										alt="Подобрява ориентацията в средата и управлението на движенията спрямо обекти и други хора.
"
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-60 important-lg:h-45 important-md:h-45 important-sm:h-25 important-h-50"
										style="background-color:#E11172;"
										title="Подобрява контрола върху големите мускулни групи чрез дейности като ходене, бягане, скачане и катерене "
										text=""
										img="/assets/psihomot-za-detsa/контрола-мускулни-групи-психомоторика.webp"
										alt="Подобрява контрола върху големите мускулни групи с психомоторика."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-60 important-lg:h-45 important-md:h-45 important-sm:h-25 important-h-50"
										style="background-color:#E11172;"
										title="Развива координацията и прецизността на ръцете и пръстите, важни за писане, рисуване и манипулиране на малки предмети"
										text=""
										img="/assets/psihomot-za-detsa/координацията-прецизността-ръцете-пръстите.webp"
										alt="Психомоторика за координацията и прецизността на ръцете и пръстите."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-60 important-lg:h-45 important-md:h-45 important-sm:h-25 important-h-50"
										style="background-color:#E11172;"
										title="Помага на детето да съгласува действията си със зрителните стимули, например при хвърляне и хващане на топка"
										text=""
										img="/assets/psihomot-za-detsa/детето-съгласува-действията-зрителните-стимули.webp"
										alt="Детето да съгласува действията си със зрителните стимули."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-60 important-lg:h-45 important-md:h-45 important-sm:h-25 important-h-50"
										style="background-color:#E11172;"
										title="Подобрява ориентацията в средата и управлението на движенията спрямо обекти и други хора"
										text=""
										img="/assets/psihomot-za-detsa/подобрява-ориентацията.webp"
										alt="Подобрява ориентацията в средата и управлението на движенията спрямо обекти и други хора.
"
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
							<h3 class="font-600 text-left pb-2 important-font-size-26px important-leading-35px">Социални и когнитивни умения</h3>
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
										title="Психомоториката учи детето да разбира и контролира своите емоционални реакции"
										text=""
										img="/assets/psihomot-za-detsa/психомоторика-контрол-емоционални-реакции.webp"
										alt="Психомоториката учи детето да разбира и контролира своите емоционални реакции"
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-23 important-h-40"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Развива способности за комуникация и сътрудничество в група"
										text=""
										img="/assets/psihomot-za-detsa/комуникация-сътрудничество-група.webp"
										alt="Развиване на способности за комуникация и сътрудничество в група."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-23 important-h-40"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Подобрява умения за планиране, организация и изпълнение на сложни задачи"
										text=""
										img="/assets/psihomot-za-detsa/планиране-организация-изпълнение-сложни-задачи.webp"
										alt="Подобрява умения за планиране, организация и изпълнение на сложни задачи."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-23 important-h-40"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Стимулира речевото развитие чрез свързване на физическа активност и говор"
										text=""
										img="/assets/psihomot-za-detsa/речево-развитие-физическа-активност-говор.webp"
										alt="Стимулира речевото развитие с психомоторика чрез свързване на физическа активност и говор.
"
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-23 important-h-40"
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Психомоториката учи детето да разбира и контролира своите емоционални реакции"
										text=""
										img="/assets/psihomot-za-detsa/психомоторика-контрол-емоционални-реакции.webp"
										alt="Психомоториката учи детето да разбира и контролира своите емоционални реакции"
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Развива способности за комуникация и сътрудничество в група"
										text=""
										img="/assets/psihomot-za-detsa/комуникация-сътрудничество-група.webp"
										alt="Развиване на способности за комуникация и сътрудничество в група."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Подобрява умения за планиране, организация и изпълнение на сложни задачи"
										text=""
										img="/assets/psihomot-za-detsa/планиране-организация-изпълнение-сложни-задачи.webp"
										alt="Подобрява умения за планиране, организация и изпълнение на сложни задачи."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Стимулира речевото развитие чрез свързване на физическа активност и говор"
										text=""
										img="/assets/psihomot-za-detsa/речево-развитие-физическа-активност-говор.webp"
										alt="Стимулира речевото развитие с психомоторика чрез свързване на физическа активност и говор.
"
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="pink" />

			<section class="gap-12 xl:px-30">
				<H3Blue variant="h2" title="Първична оценка" />
			</section>

			<div class="flex flex-col justify-center items-center mx-auto px-20px xl:px-30">
				<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:pb-10 md:pt-4 py-5 md:bg-gradient-to-t lg:from-paper lg:to-paper bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
					<div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-10">
						<div class="xl:w-1/2 w-full">
							<p class="c-paper lg:c-paper-inv mb-1">
								В Sense Center извършваме първична оценка за деца със затруднения в психомоторното развитие и двигателните умения.
							</p>
							<p class="c-paper lg:c-paper-inv">
								По време на консултацията се извършва обследване на поведението и актуалното състояние на детето.
							</p>
							<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="безплатна-първична-оценка" class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
							<p class="c-paper lg:c-paper-inv mb-1">
								Специалистите ни прилагат специализиран психомоторика тест, който оценява различни аспекти на развитието като координацията, баланса, фината и грубата моторика, както и сензорната обработка.
							</p>
							<p class="c-paper lg:c-paper-inv">
								Едновременно с това терапевтите интервюират родителите за техните наблюдения и потенциални трудности в детската градина или училище. Това е важна част от тестовете за психомоторика на детето, които провеждаме.
							</p>
							<p class="c-paper lg:c-paper-inv">
								На база събраната информация се изготвя индивидуален план за терапия с психомоторика.
							</p>
						</div>
						<div class="xl:w-1/2 w-full">
							<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="безплатна-първична-оценка" class="mt-5 w-full h-auto object-cover rounded shadow" />
							<p class="c-paper lg:c-paper-inv italic font-300 mt-2 leading-5 lg:leading-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Препоръчително е да донесете всички налични медицински документи, които могат да бъдат от полза за изясняване на актуалното състояние на детето.
							</p>
						</div>
					</div>
					<div class="pt-10 flex md:flex-row flex-col justify-center items-center">
						<PuzzleButton />
					</div>
				</AnimatedComponent>
			</div>

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
								img="https://lh3.googleusercontent.com/a/ACg8ocL6Jql8c8fOskwX1lIX4mAwsDrK8z_tuQtUiwoEJcdfaMn39g=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Момченцето ни имаше проблем с проговарянето, за няколко месеца работа със специалистите в центъра показа страхотен напредък. Изключително доволни сме със съпруга ми от резултатите, отношението към детето и подхода.

									</>
								}
								name="Silvya Manikatova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/SyiabRvUnGrxZ8VKA"
								class="important-h-370px important-sm:h-650px important-lg:h-470px important-xl:h-500px"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a-/ALV-UjXJQKN7k47RjNKK0ezvflSWCN8F4jSiaY3G3l7kWlLYQCI6R3Iq=w36-h36-p-rp-mo-br100"
								reviewText={
									<>
										Прекрасно място за децата и родителите!<br />
										Sense Center е истинско съкровище! Всичко е организирано професионално, а обстановката е толкова уютна и приветлива. Уверена съм, че детето ми е в най-добрите ръце.
									</>
								}
								name="An-Mari Petkova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/nEvL5m6BfSxpvHNr8"
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px pt-5 md:pt-0">
				<BackgroundIcons />
				<AnimatedComponent>
					<H3Pink title="Психомоторните терапевти в Sense Center" />
				</AnimatedComponent>
				<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="xl:w-1/2 w-full">
						<img class="w-full h-full" src="/assets/psihomot-za-detsa/дете-психомоторна-терапия.webp" alt="Дете по време на психомоторна терапия в Sense Center." />
					</div>
					<div class="xl:w-1/2 w-full pt-20px text-center px-5">
						<div class="">
							<p class="text-left mt-5">
								Психомоторните терапевти в Sense Center имат богат опит в работата с деца с различни двигателни и сензорни затруднения. В своята работа те подхождат с любов, търпение и индивидуален подход, за да създадат сигурна и подкрепяща среда. Чрез иновативни техники и упражнения подпомагат развитието на двигателните умения, координацията, баланса и сензорната интеграция.
							</p>
						</div>
					</div>
				</AnimatedComponent>
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
							{ name: "10" },
						]}>
						<div class="flex flex-col max-w-full relative overflow-hidden mx-auto">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Василена Пеева</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Кинезитерапевт</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Моята цел е децата да израстват с любов към спорта и двигателната активност, които учат на дисциплина и положително усещане за собственото тяло и разиват самоувереността.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Василена Пеева е отдаден и целеустремен кинезитерапевт с богат опит в областта на психомоториката за деца, чиято мисия е да помогне на децата да развият любов към движението, увереност и позитивно отношение към собственото си тяло. Завършила е бакалавърска степен по „Кинезитерапия“ и магистърска програма по „Кинезитерапия в педиатрията“ в НСА „Васил Левски“. Има стаж в център за деца с трудности в развитието, където придобива ценен практически опит.
										</p>
										<p class="text-left mt-1">
											В своята работа Василена създава индивидуални терапевтични и тренировъчни програми, които подкрепят моторното развитие и стимулират самоувереността. Тя вярва, че всяко дете е уникална личност и изисква персонален подход, който да го мотивира и вдъхнови да се развива във всеки аспект на живота. Освен терапевтичната си дейност, активно се занимава със спорт и проявява специален интерес към прилагането на кинезитерапия при деца от аутистичния спектър.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Катя Илиева</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Детски психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">"Мисли. Вярвай. Мечтай. Рискувай." - Уолт Дисни</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Катя е отдаден специалист с дългогодишен опит в работата с деца и възрастни, преподавателски и управленски опит в сферата на образованието, държавната администрация и частния сектор. Завършила е магистратура по „Детско-юношеска и училищна психология“ Бургаски свободен университет и „Педагогика“ със специализация „Социална педагогика“ в Софийски университет.
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
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Стремя се да подкрепям децата да развиват своя потенциал, да се учат как да се отнасят с другите и да познават себе си.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
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
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Психолог - педагог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“И най - дългия път започва с първата крачка", " Не спирай да мечтаеш"</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
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
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Подкрепям децата да изразяват смело вътрешния си свят, да проявяват любопитство и креативност, за да запазят връзката с детето вътре в себе си и като възрастни."</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Георги е отдаден психолог, с опит в работата както с деца със СОП, така и в норма, той вярва, че всяко дете заслужава да бъде разбрано и подкрепено.  Неговата мисия е да вдъхновява децата да откриват себе си чрез свободно изразяване на емоции и креативност.
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
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Яница Дочева</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Вярвам, че във всяко дете има светлина. Понякога тиха, понякога скрита зад различност, но винаги истинска.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
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
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Клиничен психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Вярвам, че във всяко дете има светлина. Понякога тиха, понякога скрита зад различност, но винаги истинска.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
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
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Психолог - социален работник</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Вярвам, че всяко дете заслужава да бъде насърчавано да се развива и да изразява свободно емоциите си.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
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
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Сали Младенова</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Рехабилитатор - ерготерапевт</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Всяко дете заслужава да пълноценно и щастливо детството.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Сали Младенова е доказан специалист по рехабилитация и ерготерапия, чиято мисия е да помага на децата да бъдат уверени и активни в ежедневието си. Тя притежава бакалавърска степен по „Медицинска рехабилитация и ерготерапия“ и повече от десет години опит в областта на масажите и лечебната гимнастика.
										</p>
										<p class="text-left mt-1">
											Към днешна дата работи с деца със специални образователни потребности, където с внимание и професионализъм изгражда ефективни стратегии за тяхното развитие. Сали успява да превърне терапията в приятно преживяване чрез прилагането на игрови методи, което води до реални и устойчиви резултати.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Ани Христова</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Вярвам, че децата могат да развият потенциала си с подходяща подкрепа и насока.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Ани Христова е всеотдаен и вдъхновен специалист, който подкрепя децата в откриването на техния потенциал и изграждането на увереност в собствените им възможности. Тя има 5-годишен професионален опит в работата с деца на възраст от 2 до 12 години, като прилага индивидуален и комплексен подход, съобразен с нуждите на всяко дете.
										</p>
										<p class="text-left mt-1">
											Завършила е бакалавърска степен по „Психология“ и магистърска програма по „Психология на здравето“ в СУ „Св. Климент Охридски“. Допълнително е преминала обучение по „Детска невропсихология“ под ръководството на проф. Иванка Асенова, базисно ниво по програма „Фамилна и арт психотерапия и консултиране“ към ПИСЕЛ, както и програма „Ефективен комуникационен модел“ за работа с деца с аутизъм, ADHD, ADD, PDD и синдром на Аспергер. Ани вярва, че с подходяща подкрепа всяко дете може да разгърне своите способности и да постигне хармонично развитие.
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
				<H3Blue variant="h2" title="Как протича една сесия по психомоторика за деца" />
				<div class="md:pb-0 pb-10">
					<AnimatedComponent>
						<p class="mt-0 mb-10 px-5">
							Психомоторната терапия е структурирана и внимателно адаптирана към нуждите на всяко дете, за да му помогне да преодолее двигателните затруднения.<br />
							Сесията по психомоторика за деца включва няколко ключови етапа, които осигуряват цялостен подход:
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
								class="important-h-540px important-sm:h-600px important-md:h-590px important-lg:h-500px important-xl:h-520px"
								style="background-color:#742C8F;"
								puzzleclass="c-brand w-6 mr-2"
								img="/assets/psihomot-za-detsa/начало-сесия-психомоторика.webp"
								alt="Начало на сесията по психомоторика."
								title="Начало на сесията"
								desc="Детето и терапевта влизат заедно в стаята по психомоторика. Пространството осигурява приветлива и стимулираща среда, която насърчава участието на детето и взаимодействието му с терапевта."
							/>
							<PuzzleIconReview
								class="important-h-540px important-sm:h-600px important-md:h-590px important-lg:h-500px important-xl:h-520px"
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/psihomot-za-detsa/двигателни-упражнения-психомоторна-сесията-деца.webp"
								alt="Загряване и двигателни упражнения преди психомоторна сесията за деца."
								title="Загряване и двигателни упражнения"
								desc="Сесията стартира с леки упражнения за загряване. Те подготвят тялото, създават тонус и настройват детето за активно участие в следващите дейности."
							/>
							<PuzzleIconReview
								class="important-h-540px important-sm:h-600px important-md:h-590px important-lg:h-500px important-xl:h-520px"
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/psihomot-za-detsa/развитие-грубата-моторика-психомоторна-сесията.webp"
								alt="Развитие на грубата моторика с психомоторна сесия за деца."
								title="Развитие на грубата моторика"
								desc="Включват се активности за стимулиране на големите мускулни групи и упражнения, които комбинират зрителната и двигателната система. Целта е подобряване на координацията и уменията за целенасочено движение."
							/>
							<PuzzleIconReview
								class="important-h-540px important-sm:h-600px important-md:h-590px important-lg:h-500px important-xl:h-520px"
								style="background-color:#FA7402;"
								puzzleclass="c-brand-blue w-6 mr-2"
								img="/assets/psihomot-za-detsa/пространствено-осъзнаване-ориентация-психомоторика.webp"
								alt="Развитие на пространствено осъзнаване и ориентация с психомоторна терапия за деца."
								title="Пространствено осъзнаване и ориентация"
								desc="Дейностите подпомагат разбирането на пространствените отношения. Те развиват ориентацията, умението за позициониране в средата и увереността в движението."
							/>
							<PuzzleIconReview
								class="important-h-540px important-sm:h-600px important-md:h-590px important-lg:h-500px"
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/psihomot-za-detsa/емоционални-социални-умения-психомоторика.webp"
								alt="Развитие на емоционални и социални умения с психомоторика."
								title="Емоционални и социални умения"
								desc="В края на сесията терапевтът въвежда упражнения за разпознаване и изразяване на емоции, както и за изграждане на социални умения. Сесията завършва с кратка дискусия относно проведените дейности."
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
						bgImage="/assets/psihomot-za-detsa/тестове-психомоторика-детето.webp"
						bgSize="400%"
						bgPosition="right 0% top 45%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/psihomot-za-detsa/тестове-психомоторика-детето.webp" alt="Тестове за психомоторика на детето." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10 md:mt-0">
								В Sense Center прилагаме съвременни и иновативни подходи в областта на психомоториката за деца, които съчетават движение, игра и терапевтични упражнения. Нашата работа е базирана на научно обосновани практики, които подпомагат не само моторното развитие, но и изграждането на увереност, самостоятелност и социални умения.
							</p>
							<p>
								Един от водещите методи, които използваме, е релационната психомоторика. Това е подход, който съчетава двигателна активност с емоционално и социално взаимодействие. Той помага на децата да развият умения за общуване, адаптация и справяне с различни ситуации. Внимателно подбраните упражнения подпомагат развитието на детската психомоторика и полезни умения, които са приложими в ежедневието като по-добра координация, концентрация, устойчивост на стрес и самостоятелност.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-50">
				<H3Pink title="3+ психомоторни инструмента, които развиват двигателните умения" />
				<div class="mx-auto px-5">
					<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-12 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full md:pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Меки модули и стена за катерене</h4>
							<div>
								<p class="text-left">
									Те осигуряват безопасна среда за катерене, скачане и подреждане. Развиват сила, координация и пространствено мислене, като превръщат движението в игра.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/psihomot-za-detsa/меки-модули-стена-катерене-психомоторика.webp" alt="Психомоторика за деца с меки модули и стена за катерене. " />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="xl:px-30 px-5 mx-20px md:pt-50">
				<div class="mx-auto px-5">
					<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full md:pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Люлки и батут</h4>
							<div>
								<p class="text-left">
									Тези уреди стимулират баланса и вестибуларната система. Те помагат на децата да се успокоят, да се съсредоточат и да подобрят контрола върху движенията си.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/psihomot-za-detsa/психомоторика-деца-люлки-батут.webp" alt="Психомоторика за деца с люлки и батут." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="xl:px-30 pb-5 px-5 mx-20px md:pt-50">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-12 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Топки, конуси и препятствия</h4>
							<div>
								<p class="text-left">
									Чрез игри с хвърляне, прескачане и създаване на маршрути се тренират реакциите, вниманието и координацията. Децата учат да следват инструкции и да развиват двигателно планиране.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/psihomot-za-detsa/психомоторика-топки-конуси-препятствия.webp" alt="Психомоторика за деца с конуси, топки и препятствия." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 px-5 mx-20px md:pt-50">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full md:pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Басейн с топки, балансборд и тежести</h4>
							<div>
								<p class="text-left">
									Те стимулират сетивното възприятие и укрепват мускулатурата. Подобряват стабилността, осъзнаването на тялото и социалното взаимодействие.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/psihomot-za-detsa/психомоторика-басейн-топки-балансборд-тежести.webp" alt="Психомоторика за деца с басейн с топки, балансборд и тежести." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="xl:px-30 mx-20px">
				<div class="mx-auto">
					<AnimatedComponent class="mb-10 mt-20 md:mt-30 lg:w-800px mx-auto">
						<div class="flex flex-col justify-center items-start b-rd-12px bg-brand px-10 py-4">
							<p class="font-size-22px uppercase c-paper font-500 mb-0 tracking-0.5px font-[MYRIADPRO-Semibold]">УСТОЙЧИВО РАЗВИТИЕ</p>
							<p class="c-paper font-300 font-[MYRIADPRO-Light]">В психомоториката използването на подходящо оборудване играе ключова роля за постигане на ефективни резултати. Всеки терапевтичен план се разработва индивидуално, като специалистите внимателно подбират комбинация от методи и техники, съобразени с индивидуалните нужди и възможности на всяко дете. Чрез този целенасочен и персонализиран подход психомоториката за всички деца постига трайни, устойчиви резултати, които подкрепят цялостното развитие на детето.
							</p>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue" />

			<div class="xl:px-30 mx-20px px-20px md:px-0">
				<H3Blue variant="h2" title="Спокойна и стимулираща среда за децата" />
				<div class="md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<AnimatedComponent class="px-5 flex flex-col gap-1">
						<div>
							<img class="w-full h-full" src="/assets/psihomot-za-detsa/спокойна--тимулираща среда-деца.webp" alt="Спокойна и стимулираща среда за деца." />
						</div>
						<p class="mt-5">
							Центърът включва 14 специализирани терапевтични кабинета, стая за отдих и социализация, както и удобен паркинг за посетители.
						</p>
						<div class="my-5">
							<GallerySlider3
								imgs={[
									{ src: "/assets/psihomot-za-detsa/кабинет-психомоторика.webp", alt: "Кабинет за терапия по психомоторика." },
									{ src: "/assets/psihomot-za-detsa/кабинет-терапия-психомоторика.webp", alt: "Кабинет за психомоторна терапия." },
									{ src: "/assets/psihomot-za-detsa/стая-психомоторика.webp", alt: "Стая за психомоторна терапия." },
								]}
							/>
						</div>
						<p class="md:mt-6 mt-0">
							В психомоторната зала детето има пространство да развива емоционалната си интелигентност, двигателните си умения и да подобрява умствената си устойчивост. Психомоториката и полезните умения вървят ръка за ръка, като под формата на игра детето се учи, да свързва действията си с емоцията, която изпитва в този момент. Например може да извади потиснат гняв,  да работи над тревожността си или пък да се свърже с радостта от играта в този момент.
						</p>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="purple2" />

			<section>
				<div class="gap-12 pb-8 md:pb-30 pt-100px md:pt-50px xl:px-30">
					<H3Pink variant="h2" title="Първи стъпки" />
					<AnimatedComponent class="mb-10 relative px-5">
						<BackgroundIcons />
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0"><span class="font-[MYRIADPRO-Bold]">Необходимо е единствено да се свържете с нас.</span> Обадете се или ни пишете в социалните мрежи или директно през сайта.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Често пътят започва с притеснение и несигурност.<br />
								Споделете какво Ви притеснява, ще Ви изслушаме внимателно с грижа и разбиране.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Ще обсъдим актуалното състояние на детето и ще организираме час за първична оценка, на която ще се запознаем с уменията на детето към настоящия момент, неговите дефицити и трудности.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">На база Вашата заявка за напредъка, който искате да постигнем и нашето наблюдение по време на оценката,  препоръчваме подходящи брой сесии по психомоторика и честота на посещенията.</p>
						</div>
					</AnimatedComponent>
					<PuzzleButton2
						class="important-bg-brand/80 important-group-hover-bg-brand-hover/80"
						href=""
						text={<>Запазете час за<br />първична оценка</>}
					/>
				</div>
			</section>

			<section class="pt-20 md:pt-30">
				<AnimatedComponent class="">
					<H2Echo
						class="important-scale-82 important-md:scale-100"
						maintitle={
							<>
								Резултати от психомоториката
							</>
						}
						title="психомоториката"
						bgImage="/assets/psihomot-za-detsa/дете-след-терапия-психомоторика.webp"
						bgSize="450%"
						bgPosition="right 70% top 100%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/psihomot-za-detsa/дете-след-терапия-психомоторика.webp" alt="Положителни резултати на дете след терапия по психомоторика." class="saturate-110 w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10 md:mt-0">
								С помощта на индивидуалният подход и редовните занимания, психомоториката за деца подпомага едновременно двигателното, когнитивното, социалното и емоционалното развитие. Децата подобряват контрола върху големите мускулни групи, развиват прецизността на ръцете и пръстите, както и зрително-моторната координация, която им помага да се ориентират по-добре в пространството.
							</p>
							<p class="mt--1">
								Успоредно с това те се учат да изразяват и управляват емоциите си, да взаимодействат с връстници чрез игри и съвместни дейности, да спазват правила и да сътрудничат. Чрез релационната психомоторика се насърчава изграждането на доверие и социални умения.
							</p>
							<p class="mt--1">
								Психомоториката подпомага още развитието на речта, логическото мислене и уменията като планиране и решаване на проблеми.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-40">
				<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="xl:w-1/2 w-full">
						<img class="w-full h-full" src="/assets/psihomot-za-detsa/щастливи-деца-психомоторна-терапия.webp" alt="Щастливи деца след психомоторна терапия в Sense Center." />
					</div>
					<div class="xl:w-1/2 w-full pt-20px text-center px-5">
						<div class="">
							<p class="text-left mt-5">
								Всяко дете е уникално и напредва със собствено темпо, затова психомоторната терапия се адаптира спрямо индивидуалните му нужди и ритъм на развитие.
							</p>
							<p class="text-left">
								Макар при някои деца резултатите да не се проявяват веднага, с постоянство и професионална подкрепа, подобренията са видими и трайни.
							</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px pb-50px">
				<H3Blue title="Въпроси и отговори" />
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
									style="background-color:#742C8F;"
									puzzleclass="c-brand-orange w-6 mr-2"
									title="“Sense Center е истинско съкровище!”"
									desc={<>
										Прекрасно място за децата и родителите!<br />
										Sense Center е истинско съкровище! Всичко е организирано професионално, а обстановката е толкова уютна и приветлива. Уверена съм, че детето ми е в най-добрите ръце.
									</>}
									name="An-Mari Petkova"
									condition=""
									href="https://maps.app.goo.gl/LTrABvLkycsTfoVj7"
								/>
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
									href="https://maps.app.goo.gl/kZbxj76KYcQ9SMJR7"
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
									href="https://maps.app.goo.gl/Wxv78ZRkTYitBxbv7"
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
									href="https://maps.app.goo.gl/cm8dXbpKxbvW81DK6"
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
									href="https://maps.app.goo.gl/kApViATh3nZ71ps78"
								/>
							</ContainerSlider>
						</AnimatedComponent>
						<div class="pt-5 pb-15">
							<PuzzleButton2
								href=""
								text="Вижте всички успешни истории"
							/>
						</div>
					</section>
				</div>
			</section>
		</>
	);
}
