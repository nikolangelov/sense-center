import "solid-slider/slider.css";
import { GoogleStarReview, PuzzleIconReview, ReviewSlider, StaffSlider, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink, H3SolidPink } from '../../components/H2WithImage';
import { ContainerBox, ContainerSlider, ReviewPuzzlePiece } from "../../components/ContainerSlider";
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { Collapse } from "../../components/FAQ";
import { GallerySlider3 } from "../../components/GallerySlider";

function SingleCollapse() {
	return (
		<>
			<div class="flex flex-col gap-5 md-gap-2 cursor-pointer max-w-1200px mx-auto">
				<Collapse title="1. Как да разбера дали детето ми има нужда от когнитивно-поведенческа терапия?" desc="Ако детето има чести промени в настроението, тревожност, страхове, проблеми с концентрацията, трудности в социални ситуации или бурни емоционални реакции, е добре да се консултирате с терапевт по когнитивно-поведенческа терапия. Поведенческата терапия за деца е особено ефективна при деца с тревожни разстройства, ADHD, депресия и поведенчески проблеми. Ранната интервенция е ключова за успеха и развитието на детето." />

				<Collapse title="2. На каква възраст може да бъде започната когнитивно-поведенческата терапия?" desc="Когнитивно-поведенческата терапия при деца може да започне след 3-годишна възраст, ако се забележат затруднения. Важно е проблемите да бъдат адресирани възможно най-рано, за да се подпомогне правилното развитие на речта и езика." />

				<Collapse title="3. Колко време продължава една сесия по когнитивно-поведенческа терапия за деца?" desc="Обикновено сесиите по звукова стимулация за деца се провеждат в рамките на 40 минути." />

				<Collapse title="4. Могат ли родителите да присъстват по време на когнитивно-поведенческата терапия за деца?" desc="В Sense Center препоръчваме родителите да не присъстват на терапевтичните сесии по звукова стимулация за деца, за да гарантираме ефективността на процеса.">
					<p>
						Присъствието на родител може да отклони фокуса на детето, особено при по-малките, които често стават зависими от сигурността на родителската фигура. Това може да ограничи тяхната самостоятелност и активност в терапията. Също така, когато родителят е в стаята, за терапевта е по-трудно да изгради авторитет, което е важно за успешно взаимодействие с детето.
					</p>
					<p>
						Родителите обаче играят ключова роля извън терапевтичните сесии. Затова редовно ги информираме за напредъка на детето и техники за когнитивно-поведенческа терапия, които могат да приложат у дома, за да подкрепят процеса. Този баланс между терапевтичната работа и родителската подкрепа е ключов за успеха.
					</p>

				</Collapse>

				<Collapse title="5. Може ли когнитивно-поведенческата терапия да бъде комбинирана с други видове терапевтични подходи?" desc="Да, поведенческата терапия за деца може успешно да се съчетава с различни терапии за постигане на оптимални резултати в развитието на Вашето дете. Свържете се със специалистите от Sense Center, за да получите консултация и да изберете най-подходящите терапии за нуждите на Вашето дете." />

				<Collapse title="6. Колко често трябва да се посещава когнитивно-поведенческата терапия?" desc="Честотата на посещенията зависи от индивидуалните нужди на детето и тежестта на състоянието." />

				<Collapse title="7. Има ли възможност за сесии по когнитивно-поведенческа терапия за деца онлайн?" desc="Не, към момента не провеждаме когнитивно-поведенческа терапия онлайн. Терапевтичните сесии се извършват на място в Sense Center на адрес – гр. София, бул. „Никола Петков“ 95a." />

				<Collapse title="8. Какво трябва да носим за първата терапевтична сесия по когнитивно-поведенческа терапия за деца?" desc="Необходимо е единствено да носите пантофи и резервни дрешки за детето. Всичко останало е осигурено от нашия център." />

				<Collapse title="9. Какво включва първичната оценка?" desc="Първичната оценка обикновено включва:">
					<div>
						<ul class="ml-5 mt-3">
							<li class="">
								Разговор с родителите за развитието на детето (история на слуховите реакции, актуално здравословно състояние, семейна среда).
							</li>
							<li class="">
								Наблюдение на поведението на детето по време на излагане на различни звукови стимули.
							</li>
							<li class="">
								Оценка на артикулацията, разбирането, изразяването, социалната комуникация и когнитивните умения.
							</li>
							<li class="">
								Използване на специализирани методи, за определяне нивото на развитие на речта и езика.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="10. Каква информация трябва да предоставя по време на първичната оценка?" desc="По време на първичната оценка е необходимо да споделите:">
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
						Тази информация ще ни помогне да създадем персонализиран и по-ефективен план за работа чрез когнитивно-поведенческа терапия.
					</p>
				</Collapse>

				<Collapse title="11. Какви подобрения могат да се очакват след когнитивно-поведенческа терапия за деца?" desc="">
					<div>
						<ul class="ml-5">
							<li class="">
								Подобряване на саморегулацията - по‑бързо успокояване на тялото, управление на импулсите и вниманието, емоционална грамотност
							</li>
							<li class="">
								Развитие на самостоятелност
							</li>
							<li class="">
								По-добро разпознаване и назоваване на емоции, мисли и нужди
							</li>
							<li class="">
								Развитие на когнитивна гъвкавост
							</li>
							<li class="">
								Подобряване на увереността
							</li>
							<li class="">
								Подобрено взаимодействие у дома
							</li>
							<li class="">
								По-добра адаптация в нови ситуации
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="12. Има ли дейности или упражнения, които мога да правя с детето си, за да подкрепя напредъка му?" desc="Да, специалистите по когнитивно-поведенческа терапия от Sense Center ще Ви предоставят подходящи насоки и ресурси за подпомагане на развитието на детето в домашни условия." />

				<Collapse title="13. Какви са цените за когнитивно поведенческа терапия за деца?" desc="Планът за когнитивно-поведенческа терапия се изготвя индивидуално за всяко дете затова крайната стойност варира според броя и продължителността на сесиите. След провеждането на първична оценка ще получите подробна информация от терапевтите на Sense Center. Така ще знаете каква е цената за когнитивно-поведенческа терапия  за конкретния случай на вашето дете и ще можете да планирате терапевтичния процес спокойно." />
			</div>
		</>
	);
}

export default function Page() {
	return (
		<>
			<div class="[background-color:#fcfcfc]">
				<div
					class="mb-20 mx-[0px] relative h-[100vh] md:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3)),url(/assets/kogn-pov-terapia/когнитивно-поведенческа-терапия-деца.webp)] bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3)),url(/assets/kogn-pov-terapia/когнитивно-поведенческа-терапия-деца-мобилно.webp)] bg-[position:right_40%_bottom_80%] md:bg-[position:right_100%_bottom_85%] bg-no-repeat bg-cover [mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.8)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)]" role="img" aria-label="Kогнитивно поведенческа терапия за деца."></div>
			</div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="flex flex-col justify-center items-center left-0 right-0 px-3 my-0 mx-auto absolute top-70% lg-top-75% text-center w-full" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="c-paper mb-3 md:mb-7 md:px-0 px-5 important-leading-10 important-md:leading-25">Индивидуална програма според нуждите на Вашето дете</h1>
							</AnimatedComponent>
							<AnimatedComponent class="important-delay-300 font-300 c-paper text-center mb-0 font-size-5 lg-font-size-7 sm-px-0 px-12 md:leading-7 leading-5.5 font-[MYRIADPRO-Light]">Какво включва и как се определя цената</AnimatedComponent>

							<AnimatedComponent class="important-delay-600 mt-9 md:mt-10 float-left md:pr-5px relative text-center max-w-1240px">
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
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<AnimatedComponent class="xl:px-30 mx-20px pt-30 md:pt-40">
				<H3Pink variant="h2" title="Заедно развиваме увереността, емоционалния баланс и социалните умения" />
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
										class2="important-xl:h-62 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-70"
										style="background-color:#742C8F;"
										title="Над 100 деца подобриха емоционалната регулация и самочувствието си"
										text="Придобиха по-добри умения за справяне със стрес, тревожност и трудни емоции, общуват по-уверено и участват по-активно в социални ситуации и учебния процес."
										img="/assets/kogn-pov-terapia/индивидуален-план-всяко-дете.webp"
										alt="Индивидуален план за когнитивно-поведенческа терапия на всяко дете."
									/>
									<ContainerBox
										class2="important-xl:h-62 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-70"
										style="background-color:#E11172;"
										title="Богат опит с различни трудности"
										text="Работим с деца с тревожност, страхове, трудности в общуването, ниско самочувствие, проблеми с концентрацията и поведенчески предизвикателства."
										img="/assets/kogn-pov-terapia/когнитивно-поведенческа-терапия.webp"
										alt="Когнитивно поведенческа терапия."
									/>
									<ContainerBox
										class2="important-xl:h-62 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-70"
										style="background-color:#088F9D;"
										title="Интерактивни и практически методи"
										text="Използваме разговори, игри, ролеви ситуации и техники за релаксация, които правят терапията ангажираща и ефективна."
										img="/assets/kogn-pov-terapia/дете-тревожност-страхове-трудности-в-общуването.webp"
										alt="Дете с тревожност, страхове, трудности в общуването по време на когнитивно-поведенческа терапия."
									/>
									<ContainerBox
										class2="important-xl:h-62 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-70"
										style="background-color:#FA7402;"
										title="Индивидуален план за всяко дете"
										text="Всеки план е съобразен със специфичните нужди на детето и целите на терапията, за да се постигне максимален напредък в емоционалното и поведенческото развитие."
										img="/assets/kogn-pov-terapia/когнитивно-поведенческа-терапия-техники.webp"
										alt="Техники за подобряване на умения и справяне със стрес, тревожност и изразяване на емоции."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-75 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-70"
										style="background-color:#742C8F;"
										title="Над 100 деца подобриха емоционалната регулация и самочувствието си"
										text="Придобиха по-добри умения за справяне със стрес, тревожност и трудни емоции, общуват по-уверено и участват по-активно в социални ситуации и учебния процес."
										img="/assets/kogn-pov-terapia/индивидуален-план-всяко-дете.webp"
										alt="Индивидуален план за когнитивно-поведенческа терапия на всяко дете."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-75 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-70"
										style="background-color:#E11172;"
										title="Богат опит с различни трудности"
										text="Работим с деца с тревожност, страхове, трудности в общуването, ниско самочувствие, проблеми с концентрацията и поведенчески предизвикателства."
										img="/assets/kogn-pov-terapia/когнитивно-поведенческа-терапия.webp"
										alt="Когнитивно поведенческа терапия."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-75 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-70"
										style="background-color:#088F9D;"
										title="Интерактивни и практически методи"
										text="Използваме разговори, игри, ролеви ситуации и техники за релаксация, които правят терапията ангажираща и ефективна."
										img="/assets/kogn-pov-terapia/дете-тревожност-страхове-трудности-в-общуването.webp"
										alt="Дете с тревожност, страхове, трудности в общуването по време на когнитивно-поведенческа терапия."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-75 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-70"
										style="background-color:#FA7402;"
										title="Индивидуален план за всяко дете"
										text="Всеки план е съобразен със специфичните нужди на детето и целите на терапията, за да се постигне максимален напредък в емоционалното и поведенческото развитие."
										img="/assets/kogn-pov-terapia/когнитивно-поведенческа-терапия-техники.webp"
										alt="Техники за подобряване на умения и справяне със стрес, тревожност и изразяване на емоции."
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
									class="important-h-450px important-sm:h-250px important-md:h-700px important-lg:h-600px important-xl:h-600px"
								/>
								<StarReview
									reviewText="Детето ми посещава центъра вече 5 месеца и има значителен напредък.Има интерес към всичко около него,очен контакт,опитва се да говори.Препоръпвам с две ръце центъра.Страхотни хора и професионалисти!"
									name="Лилия Жекова"
									hrefGoogleReview="https://maps.app.goo.gl/hMdU4xpw4ta4gutr7"
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
									reviewText={<>
										Синът ми посещава центъра от около 9 месеца.За този период има сериозен напредък в емоционално,социално и когнитивно развитие.Обогати речника и подобри значително говора,благодарение на екипа от професионалисти работещи с него.
									</>}
									name="Ина Светомирова"
									hrefGoogleReview="https://maps.app.goo.gl/SZrQk55if3tKDYP6A"
									class="important-h-450px important-sm:h-250px important-md:h-700px important-lg:h-600px important-xl:h-600px"
								/>
								<StarReview
									reviewText={<>
										Детето ми посещава центъра от 4 месеца. Забелязваме напредък в комуникативните умения и изпълнението на ежедневни дейности. Препоръчвам силно, най-вече заради екипът от специалисти, които са винаги топли и приветливи❤️. Посрещнаха ни с много разбиране.<br />
										Благодарим Ви!
									</>}
									name="Божана Михайлова"
									hrefGoogleReview="https://maps.app.goo.gl/tBn7hWZeLrESwaap7"
									class="important-h-450px important-sm:h-250px important-md:h-700px important-lg:h-600px important-xl:h-600px"
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
							<img src="/assets/kogn-pov-terapia/когнитивно-поведенческа-терапия-при-деца.webp" alt="Kогнитивно поведенческа терапия при деца." class="object-[0%_40%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/kogn-pov-terapia/когнитивно-поведенческа-терапия-софия.webp" alt="Kогнитивно поведенческа терапия за деца в Sense Center." class="object-[0%_40%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/kogn-pov-terapia/поведенческа-терапия-за-деца.webp" alt="Когнитивно-поведенческа терапия в Сенс център София." class="object-[0%_30%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
						</div>
					</AnimatedComponent>

					<div class="relative w-full px-3 sm:px-0 xl:px-3 xl:w-1/2 xl:pl-7">
						<AnimatedComponent>
							<div class="pt-6 md:py-0">
								<p class="xl:mt--5">
									При нас идват деца, които срещат трудности с емоционалната регулация, тревожността, увереността или социалните взаимоотношения. Прилагаме когнитивно-поведенческа терапия за деца, съобразена с нуждите на всяко дете – при страхове, фобии, ниска самооценка, проблеми в поведението или затруднения в общуването. Вярваме, че с индивидуален подход и подкрепата на опитен терапевт всяко дете може да изгради повече увереност, да управлява емоциите си по здравословен начин и да се адаптира по-лесно към средата си.
								</p>
								<p class="important-font-[MYRIADPRO-Bold] tracking-0.2px">
									Когнитивно-поведенческата терапия се препоръчва при:
								</p>
							</div>
							<AnimatedComponent class="mx-auto flex flex-col justify-center items-center gap-2 mb-2 md:mb-3 md:mt-5">
								<div class="flex flex-col md:flex-row justify-center gap-2 max-w-600px">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center md:bg-brand md:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-39 h-16">
											Синдром на Рет
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover:bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-32 xl:w-31 h-16">
											Аутизъм
										</a>
									</div>
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-38 xl:w-30 h-16">
											Селективен мутизъм
										</a>
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-36 xl:w-34 h-16">
											Синдром<br />на Даун
										</a>
										<a href="/" class="hidden md:flex justify-center items-center md:bg-brand md:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-30 xl:w-28 h-16">
											СОП
										</a>
									</div>
								</div>

								<div class="flex flex-col md:flex-row justify-center gap-2 mb-4 max-w-600px">
									<div class="flex flex-row gap-2">
										<a href="/" class="md:hidden flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-32 xl:w-28 h-16">
											СОП
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover:bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-31 h-16">
											Заекване
										</a>
									</div>
									<div class="flex gap-2">
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-41 h-16">
											Посттравматично разстройство
										</a>
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-32 xl:w-34 h-16">
											Синдром<br />на Аспергер
										</a>
									</div>
									<div class="flex gap-2">
										<a href="/" class="flex justify-center items-center md:bg-brand md:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-30 xl:w-26 h-16">
											ХАДВ
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover:bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-44 xl:w-30 h-16">
											Синдром<br />на Турет
										</a>
									</div>
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
							<p class="pb-0 mb-5 md:mt-0">Ако не се обърне внимание на емоционалните и поведенческите трудности в ранна възраст, те могат сериозно да повлияят на развитието на детето. Неотработените трудности често водят до:</p>
						</div>
						<div class="w-full">
							<ul style="list-style-type: none;" class="flex flex-col gap-2">
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">нарастваща тревожност и страхове, които оказват влияние в ежедневието</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">ниско самочувствие и социална изолация</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">трудности в концентрацията и обучението</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">проблеми с поведението и взаимоотношенията с връстници и възрастни</p>
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
						<p class="font-size-15px c-paper mt-2">Ето защо колкото по-рано бъде започната когнитивно-поведенческа терапия за деца, толкова по-голяма е възможността за видимо подобрение на състоянието и напредване в развитието.</p>
					</div>
				</AnimatedComponent>
			</section>

			<section class="relative md:pt-10 xl:px-30 mx-20px">
				<H3Pink variant="h2" title="По пътя към увереност и емоционален баланс" />
				<BackgroundIcons />
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px mb-2">
						<img src="/assets/kogn-pov-terapia/дете-поведенческа-терапия.webp" alt="Дете по време на поведенческа терапия." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt--2">
								Когнитивно-поведенческата терапия е насочена към превенция и преодоляване на емоционални и поведенчески затруднения при децата. Тя включва индивидуален подход и техники, които учат детето да разпознава, разбира и управлява своите мисли, емоции и реакции.
							</p>
							<p>
								Нашите терапевти са обучени да работят с деца със специални образователни потребности (СОП), както и такива в норма. Мисията ни е чрез поведенческа терапия за деца да помогнем на всяко дете да изгради увереност, устойчивост и умения за справяне в училищна, социална и семейна среда.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-20">
				<H3Blue variant="h2" title="Как когнитивно-поведенческата терапия помага на твоето дете в 2 стъпки" />
			</AnimatedComponent>

			<div class="max-w-1500px md:pt-10 mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h3 class="font-600 text-left pb-2 mt-0 important-font-size-26px important-leading-35px">Емоционално развитие и саморегулация</h3>
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
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-32"
										style="background-color:#E11172;"
										title="Детето се учи да разпознава и назовава емоциите си"
										text=""
										img="/assets/kogn-pov-terapia/дете-се-учи-да-разпознава-назовава-емоциите.webp"
										alt="Дете се учи да разпознава и назовава емоциите си."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-32"
										style="background-color:#E11172;"
										title="Овладява тревожността и страховете чрез практически техники"
										text=""
										img="/assets/kogn-pov-terapia/дете-oвладява-тревожността-страховете.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-32"
										style="background-color:#E11172;"
										title="Развива умения за контрол върху импулсивното поведение"
										text=""
										img="/assets/kogn-pov-terapia/контрол-върху-импулсивното-поведение.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-32"
										style="background-color:#E11172;"
										title="Изгражда увереност и позитивна самооценка"
										text=""
										img="/assets/kogn-pov-terapia/дете-изгражда-уверенос.webp"
										alt="Изграждане на увереност и позитивна самооценка.
"
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-50"
										style="background-color:#E11172;"
										title="Детето се учи да разпознава и назовава емоциите си"
										text=""
										img="/assets/kogn-pov-terapia/дете-се-учи-да-разпознава-назовава-емоциите.webp"
										alt="Дете се учи да разпознава и назовава емоциите си."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-50"
										style="background-color:#E11172;"
										title="Овладява тревожността и страховете чрез практически техники"
										text=""
										img="/assets/kogn-pov-terapia/дете-oвладява-тревожността-страховете.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-50"
										style="background-color:#E11172;"
										title="Развива умения за контрол върху импулсивното поведение"
										text=""
										img="/assets/kogn-pov-terapia/контрол-върху-импулсивното-поведение.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-50"
										style="background-color:#E11172;"
										title="Изгражда увереност и позитивна самооценка"
										text=""
										img="/assets/kogn-pov-terapia/дете-изгражда-уверенос.webp"
										alt="Изграждане на увереност и позитивна самооценка."
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
										title="Подобрява уменията за общуване и работа в група"
										text=""
										img="/assets/kogn-pov-terapia/общуване-работа-група-деца.webp"
										alt="Подобряване на уменията за общуване и групова работа."
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-35"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Учи се да решава конфликти и да изгражда приятелства"
										text=""
										img="/assets/kogn-pov-terapia/решаване-конфликти-изграждане-приятелства.webp"
										alt="Дете се учи да решава конфликти и да изгражда приятелства."
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-35"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Развива способности за планиране, концентрация и организация"
										text=""
										img="/assets/kogn-pov-terapia/дете-способности-за-планиране-организация.webp"
										alt="Развиване на способности за планиране, концентрация и организация."
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-35"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Усвоява стратегии за справяне със стрес и натиск"
										text=""
										img="/assets/kogn-pov-terapia/стратегии-за-справяне-със-стрес.webp"
										alt="Дете усвоява стратегии за справяне със стрес и натиск."
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-35"
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Подобрява уменията за общуване и работа в група"
										text=""
										img="/assets/kogn-pov-terapia/общуване-работа-група-деца.webp"
										alt="Подобряване на уменията за общуване и групова работа."
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-35"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Учи се да решава конфликти и да изгражда приятелства"
										text=""
										img="/assets/kogn-pov-terapia/решаване-конфликти-изграждане-приятелства.webp"
										alt="Дете се учи да решава конфликти и да изгражда приятелства."
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-35"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Развива способности за планиране, концентрация и организация"
										text=""
										img="/assets/kogn-pov-terapia/дете-способности-за-планиране-организация.webp"
										alt="Развиване на способности за планиране, концентрация и организация."
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-35"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Усвоява стратегии за справяне със стрес и натиск"
										text=""
										img="/assets/kogn-pov-terapia/стратегии-за-справяне-със-стрес.webp"
										alt="Дете усвоява стратегии за справяне със стрес и натиск."
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-35"
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
					<div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
						<div class="xl:w-1/2 w-full md:pl-7">
							<p class="c-paper lg:c-paper-inv mb-1">
								В Sense Center извършваме първична оценка за деца със затруднения в емоционалното, когнитивното и поведенческото развитие.
							</p>
							<p class="c-paper lg:c-paper-inv">
								По време на консултацията се извършва обследване на поведението и актуалното състояние на детето.
							</p>
							<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Наблюдение на дете с нарушения в развитието" class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
							<p class="c-paper lg:c-paper-inv mb-1">
								Същевременно се провежда интервю с родителите за техните наблюдения и възникналите трудности в училище или у дома.
							</p>
							<p class="c-paper lg:c-paper-inv">
								На база събраната информация се изготвя индивидуален план за когнитивно-поведенческа терапия.
							</p>
							<div class="pt-8 flex md:flex-row flex-col justify-center items-center">
								<PuzzleButton />
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Семейство на дете с нарушения в развитието" class="mt-5 w-full h-auto object-cover rounded shadow" />
							<p class="c-paper lg:c-paper-inv italic font-300 mt-2 leading-5 lg:leading-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Препоръчително е да донесете всички налични медицински документи, които биха били полезни за оценката.
							</p>
						</div>
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
								img="https://lh3.googleusercontent.com/a/ACg8ocIrefUansvDQ6KIsaeD-RoR2AxZr2XQfbP9KdXwZ-OLpIQKxm0=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Детето ми посещава центъра от 4 месеца. Забелязваме напредък в комуникативните умения и изпълнението на ежедневни дейности. Препоръчвам силно, най-вече заради екипът от специалисти, които са винаги топли и приветливи❤️. Посрещнаха ни с много разбиране.<br />
										Благодарим Ви!
									</>
								}
								name="Божана Михайлова"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/swD5DX5hCZGx138o9"
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
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a/ACg8ocIiRPRHL1SBkFo7V47uXhvsG6lGe3hwtoWc7mie6aqSSmIU4A=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Възхитен съм от професионализма на всички терапевти! Искам да изкажа огромни благодарности към г-жа Йорданова, която създаде 6-месечен терапевтичен план, специално предназначен за специфичните нужди на нашето дете. Цените определено оправдават качеството на услугата!
									</>
								}
								name="Martin Ivanov"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/UjUReUDJTFWgUjnbA"
								class="important-h-370px important-sm:h-650px important-lg:h-470px important-xl:h-500px"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a/ACg8ocIaF1OmEh6Z6EBektyPFGKHzyRPhOWDaemlvBl3HaCiLhT1=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Изключително позитивно и добронамерено отношение към децата. Предразполагат ги да развият знанията и потенциала си. Много ефективно работят с тях, което със сигурност носи прекрасни резултати 😇
									</>
								}
								name="Todor Todorov"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/YwQz4MpL8L9sTSeQ7"
								class="important-h-300px important-sm:h-350px important-lg:h-350px important-xl:h-400px"
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px pt-5 md:pt-0">
				<BackgroundIcons />
				<AnimatedComponent>
					<H3Pink variant="h2" title="Терапевтите в Sense Center" />
				</AnimatedComponent>
				<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="xl:w-1/2 w-full">
						<img class="w-full h-full" src="/assets/kogn-pov-terapia/когнитивно-поведенческа-терапия-център-софия.webp" alt="Когнитивно поведенческа терапия в Sense Center София." />
					</div>
					<div class="xl:w-1/2 w-full pt-20px text-center px-5">
						<div class="">
							<p class="text-left mt-5">
								Терапевтите по когнитивно-поведенческа терапия за деца в Sense Center имат богат опит в работата с деца, които срещат емоционални, поведенчески и социални затруднения. В своята работа те подхождат с внимание, търпение и индивидуален подход, за да създадат спокойна и подкрепяща среда за децата. Чрез доказани техники за когнитивно-поведенческа терапия те помагат на децата да разпознават и управляват емоциите си, да изградят увереност и да развият здравословни модели на мислене и поведение.
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
						]}>
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
											Катя е отдаден специалист с дългогодишен опит в работата с деца и възрастни, преподавателски и управленски опит в сферата на образованието в образованието, държавната администрация и частния сектор. Завършила е магистратура по „Детско-юношеска и училищна психология“ Бургаски свободен университет и „Педагогика“ със специализация „Социална педагогика“ в Софийски университет.
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
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Георги Абрашев</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Клиничен психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Подкрепям децата да изразяват смело вътрешния си свят, да проявяват любопитство и креативност, за да запазят връзката с детето вътре в себе си и като възрастни."</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Георги е сред отдаден психолог, с опит в работата както с деца със СОП, така и в норма, той вярва, че всяко дете заслужава да бъде разбрано и подкрепено.  Неговата мисия е да вдъхновява децата да откриват себе си чрез свободно изразяване на емоции и креативност.
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
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Всяко дете, което застава пред мен е като "нова вселена"."</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
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
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Александър Ганев</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Детски клиничен психолог</p>
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
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Психолог</p>
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
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Деси-Слава Андонова</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Убедена съм, че подкрепата е от ключово значение за развитието на всеки човек.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
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
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="important-md:font-size-40px important-leading-30px text-left">Цветелина Дескова</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Социален работник - психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Децата са нашето бъдеще и вярвам, че всяко дете заслужава уважение, търпение и любов, за да разгърне пълния си потенциал.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Цветелина Дескова е млада и мотивирана специалистка, която вярва, че всяко дете заслужава уважение, търпение и любов, за да разгърне своя потенциал. Тя има опит в работата с деца със СОП, като влага усилията си в развитието на техните когнитивни и социални умения, както и на умението им да разбират и изразяват собствените си емоции.
										</p>
										<p class="text-left mt-1">
											Цветелина е завършила е бакалавърска степен по „Психология“ със специализация „Психични нарушения“ в Нов български университет. В практиката си създава спокойна и подкрепяща среда, в която децата се чувстват уверени да бъдат себе си и да растат в посока на своето най-добро развитие.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Росен Молнар</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Клиничен психолог</p>
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
					</StaffSlider>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="gap-12 pb-8 md:pb-20 xl:px-30">
				<H3Blue variant="h2" title="Как протича една сесия по когнитивно-поведенческа терапия за деца" />
				<div class="md:pb-0 pb-10">
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
							<PuzzleIconReview
								class="important-h-620px important-sm:h-680px important-md:h-600px important-lg:h-570px important-xl:h-580px"
								style="background-color:#742C8F;"
								puzzleclass="c-brand w-6 mr-2"
								img="/assets/kogn-pov-terapia/начало-когнитивно-поведенческа-сесия.webp"
								alt="Начало на когнитивно поведенческа сесия."
								title="Начало на сесията"
								desc="Детето влиза в терапевтичната стая заедно с терапевта, като се осигурява спокойна и комфортна среда, в която то може да се чувства уверено да споделя."
							/>
							<PuzzleIconReview
								class="important-h-620px important-sm:h-680px important-md:h-600px important-lg:h-570px important-xl:h-580px"
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/kogn-pov-terapia/дете-споделяне-бива-излушано.webp"
								alt="Дете споделя и бива излушано от терапевт."
								title="Споделяне и изслушване"
								desc="Детето има възможност да сподели преживявания от ежедневието си. Психологът активно слуша, показва емпатия и въвежда планираните дейности за сесията."
							/>
							<PuzzleIconReview
								class="important-h-620px important-sm:h-680px important-md:h-600px important-lg:h-570px important-xl:h-580px"
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/kogn-pov-terapia/когнитивна-работа-карти.webp"
								alt="Дете по време на когнитивна работа с карти."
								title="Когнитивна работа"
								desc="Чрез карти и рисунки се обсъждат ситуации от живота на детето “Какво се случи? Какво си помисли, когато…? “ Това помага за осъзнаване на връзката между мисли, емоции и действия."
							/>
							<PuzzleIconReview
								class="important-h-620px important-sm:h-680px important-md:h-600px important-lg:h-570px important-xl:h-580px"
								style="background-color:#FA7402;"
								puzzleclass="c-brand-blue w-6 mr-2"
								img="/assets/kogn-pov-terapia/дете-се-справя-с-тревожност.webp"
								alt="Дете упражнява нови реакции и учи стратегии за справяне с тревожност, стрес и социални ситуации."
								title="Поведенчески практики"
								desc="Използват се различни техники за когнитивно-поведенческа терапия при деца като  ролеви игри, поведенчески експерименти и дихателни техники. Детето упражнява нови реакции и учи стратегии за справяне с тревожност, стрес и социални ситуации."
							/>
							<PuzzleIconReview
								class="important-h-620px important-sm:h-680px important-md:h-600px important-lg:h-570px important-xl:h-580px"
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/kogn-pov-terapia/дете-терапевт-след-сесия.webp"
								alt="Край на когнитивно поведенческа сесия."
								title="Край на сесията"
								desc="Срещата приключва с обобщение на наученото и въпросите “Какво научих днес? Къде мога да го използвам? Това подпомага пренасянето на придобитите умения от когнитивно-поведенческата терапия в ежедневието."
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
						bgImage="/assets/kogn-pov-terapia/иновативни-когнитивно-поведенчески-подходи.webp"
						bgSize="400%"
						bgPosition="right 0% top 45%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/kogn-pov-terapia/иновативни-когнитивно-поведенчески-подходи.webp" alt="Иновативни когнитивно поведенчески подходи." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10 md:mt-0">
								Когнитивно-поведенческата терапия при деца използва съвременни техники и индивидуален подход, за да помогне на детето да изгради устойчиви умения за емоционална регулация и социално адаптация. Всяка програма се подбира индивидуално според нуждите на детето, което прави терапията ефективна и приятна.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-50">
				<H3Pink title="3 техники, които правят терапията ефективна" />
				<div class="mx-auto px-5">
					<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-12 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full md:pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Игра наужким с макети и карти</h4>
							<div>
								<p class="text-left">
									Използваме специализирани макети и карти на дома, детската градина, училището и фигури на членовете от семейството и различни животинки, които помагат на детето да изрази и преработи преживяванията си чрез игра. Тези техники за когнитивно-поведенческа терапия допълнително спомагат невербалното изразяване на емоции и разрешаването на проблеми.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/kogn-pov-terapia/специализирани-макети-на-дома.webp" alt="Специализирани макети на дома за игра в Sense Center." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="xl:px-30 px-5 mx-20px md:pt-50">
				<div class="mx-auto px-5">
					<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full md:pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Упражнения за саморегулация</h4>
							<div>
								<p class="text-left">
									Прилагаме дихателни упражнения, заземяване, стискане-разпускане на мускулите, които учат детето как да успокои тялото и да управлява импулсите си в трудни моменти. Тези методи са основни  в поведенческата терапия и могат да бъдат приложени навсякъде например в училище, у дома или в социални ситуации.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/kogn-pov-terapia/дете-упражнява-саморегулация.webp" alt="Дете упражнява самурегулацията си." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="xl:px-30 pb-5 px-5 mx-20px md:pt-50">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-12 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Ролеви игри</h4>
							<div>
								<p class="text-left">
									Практикуваме различни сценарии от училищния и социалния живот, които развиват увереността и социалните умения на детето в контролирана среда. Чрез повторението и упражненията в терапевтичната стая, новите умения се автоматизират и стават по-лесно приложими в реалния живот.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/kogn-pov-terapia/деца-ролеви-игри.webp" alt="Деца играят ролеви игри в детски Sense Center." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px">
				<div class="mx-auto">
					<AnimatedComponent class="mb-10 mt-20 md:mt-30 lg:w-800px mx-auto">
						<div class="flex flex-col justify-center items-start b-rd-12px bg-brand px-10 py-4">
							<p class="font-size-22px uppercase c-paper font-500 mb-0 tracking-0.5px font-[MYRIADPRO-Semibold]">УСТОЙЧИВО РАЗВИТИЕ</p>
							<p class="c-paper font-300 font-[MYRIADPRO-Light]">В когнитивно-поведенческата терапия използването на подходящи техники и методи играе ключова роля за постигане на ефективни резултати. Всеки терапевтичен план се разработва индивидуално, като специалистите внимателно подбират комбинация от стратегии, съобразени с нуждите и възможностите на всяко дете. Чрез този целенасочен и персонализиран подход когнитивно-поведенческата терапия постига трайни, устойчиви резултати, които подкрепят цялостното развитие на детето.
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
							<img class="w-full h-full" src="/assets/home/вход-към-sense-center.webp" alt="Спокойна и стимулираща среда за деца." />
						</div>
						<p class="mt-5">
							Центърът включва 14 специализирани терапевтични кабинета, стая за отдих и социализация, както и удобен паркинг за посетители.
						</p>
						<div class="my-5">
							<GallerySlider3
								imgs={[
									{ src: "/assets/kogn-pov-terapia/когнитивно-поведенческа-сесия.webp", alt: "Кабинет за психомоторна терапия." },
									{ src: "/assets/kogn-pov-terapia/кабинет-когнитивно-поведенчески-терапия.webp", alt: "Кабинет за терапия по психомоторика." },
									{ src: "/assets/kogn-pov-terapia/стая-когнитивно-поведенческа-терапия.webp", alt: "Стая за психомоторна терапия." },
								]}
							/>
						</div>
						<p class="md:mt-6 mt-0">
							Кабинетите са специално проектирани за когнитивно-поведенческа терапия с разнообразна колекция от материали и игри за всяка възраст. Всеки кабинет е оборудван с професионални и разнообразни инструменти за цялостното развитие на детето.
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
							<p class="mt-0">На база Вашата заявка за напредъка, който искате да постигнем и нашето наблюдение по време на оценката,  препоръчваме подходящи честота и брой сесии когнитивно-поведенческа терапия в София в нашия център за деца с нарушения в развитието.</p>
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
								Резултати от когнитивно-поведенческата терапия за деца
							</>
						}
						title="психомоториката"
						bgImage="/assets/kogn-pov-terapia/резултати-когнитивно-поведенческата-терапия.webp"
						bgSize="450%"
						bgPosition="right 70% top 100%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/kogn-pov-terapia/резултати-когнитивно-поведенческата-терапия.webp" alt="Положителни резултати на дете след терапия по психомоторика." class="saturate-110 w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10 md:mt-0">
								Чрез индивидуален план за когнитивно-поведенческа терапия, редовни сесии и подкрепа от семейството, децата постигат стабилен напредък в емоционалното и поведенческото си развитие.
							</p>
							<p class="mt--1">
								Постепенно започват да разпознават връзката "ситуация–мисъл–чувство–действие", да управляват тревожността и импулсивността по-ефективно и да реагират по-адекватно в социални ситуации. Успоредно с това се развиват увереността, самооценката и уменията за справяне със стрес.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-40">
				<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="xl:w-1/2 w-full">
						<img class="w-full h-full" src="/assets/kogn-pov-terapia/резултати-когнитивно-поведенческата-терапия-деца.webp" alt="Щастливи деца след психомоторна терапия в Sense Center." />
					</div>
					<div class="xl:w-1/2 w-full pt-20px text-center px-5">
						<div class="">
							<p class="text-left mt-5">
								Всяко дете е уникално и напредва със собствено темпо, затова когнитивно-поведенческата терапия при деца се адаптира спрямо индивидуалните му нужди и ритъм на развитие.
							</p>
							<p class="text-left">
								С постоянство и професионална подкрепа, подобренията в емоционалната регулация и социалните умения са видими и трайни.
							</p>
						</div>
					</div>
				</AnimatedComponent>
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
									href="https://maps.app.goo.gl/d7BcU5s3dGbJzjPo9"
								/>
								<ReviewPuzzlePiece
									style="background-color:#FA7402;"
									puzzleclass="c-brand-purple w-6 mr-2"
									title="“Наблюдаваме изключителен напредък”"
									desc={<>
										Синът ни посещава центъра от почти половин година и за този период наблюдаваме изключителен напредък по отношение на когнитивните му умения.<br />
										Започна да проявява интерес към много неща у дома и значително подобри очния контакт.<br />
										Много сме благодарни на целия екип за разбирането и позитивизма, с който се отнасят към децата и техните родители.<br />
										Чувстваме се подкрепени! ❤️
									</>}
									name="Estel Dimova"
									condition=""
									href="https://maps.app.goo.gl/fqVWhXaHav4EJj4R9"
								/>
								<ReviewPuzzlePiece
									style="background-color:#E11172;"
									puzzleclass="c-brand-blue w-6 mr-2"
									title="“Много приятна среда за децата”"
									desc={<>
										Мишо посещава детски център SENSE от 6 месеца с голямо желание и нетърпение, за това време започна да говори много повече, да се обръща персонално по име към човека, с който иска да общува , започна да се шегува и да играе повече самостоятелно вкъщи. Другите дечица навън започнаха да му правят впечатление. Впечатленията са за много приятна среда за децата, любезно отношение от терапевтите и чести обратни връзки, свързани с развитието и промените в детето.
									</>}
									name="Gergana Berberova"
									condition=""
									href="https://maps.app.goo.gl/P7k2mjboj5QBfiM69"
								/>
								<ReviewPuzzlePiece
									style="background-color:#742C8F;"
									puzzleclass="c-brand-orange w-6 mr-2"
									title="“Детето ми се чувства прекрасно там”"
									desc={<>
										Великолепно отношение и професионализъм! Детето ми се чувства прекрасно там, винаги ходи с огромно желание и отбелязва значителен напредък, благодарение на този млад и отдаден екип.
									</>}
									name="Elena Todorova"
									condition=""
									href="https://maps.app.goo.gl/FMbDHscom1og3Nok9"
								/>
								<ReviewPuzzlePiece
									style="background-color:#E11172;"
									puzzleclass="c-brand-blue w-6 mr-2"
									title="“Препоръчвам с две ръце центъра”"
									desc={<>
										Марти постъпи в център Sense преди два месеца, без да може да говори и разбира, без навици дори. Днес той е съвсем различно дете, общува, пее песни и ни разбира, дори в детската градина ни съобщиха, че вече всичко е в норма при него. Препоръчвам с две ръце центъра, защото всичко в него е на ниво и най-вече детето обожава да ходи в него. Разбира се, продължаваме, но вече много по-спокойни.
									</>}
									name="yt-2007"
									condition=""
									href="https://maps.app.goo.gl/o2FPrWgQwbtwuPBT7"
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
