import "solid-slider/slider.css";
import { GoogleStarReview, PuzzleIconReview, ReviewSlider, StaffSlider, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink, H3SolidPink } from '../../components/H2WithImage';
import { ContainerBox, ContainerSlider, ReviewPuzzlePiece } from "../../components/ContainerSlider";
import { PuzzleButton2 } from "../../components/PuzzleButton";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { Collapse } from "../../components/FAQ";
import { VideoHero } from "../../components/HeroVideo";
import { createSignal } from "solid-js";
import { GallerySlider2 } from "../../components/GallerySlider";
import { GradientFooter } from "../../components/GradientFooter";

const [isPlaying, setIsPlaying] = createSignal(false);

function SingleCollapse() {
	return (
		<>
			<div class="flex flex-col gap-5 md-gap-2 cursor-pointer max-w-1200px mx-auto">
				<Collapse title="1. Какво е ерготерапевт?" desc="Ролята и значението на детския ерготерапевт е да помага на децата да развиват умения, необходими за изпълнение на ежедневни задачи, като хранене, обличане, игра и училищни дейности. Той използва индивидуален подход и различни техники, за да подобри фината и грубата моторика, когнитивните способности и социалните умения." />

				<Collapse title="2. Как да разбера дали детето ми има нужда от ерготерапия?" desc="При наличие на комбинация от следните признаци Ви препоръчваме консултация с добър ерготерапевт в София, ако забележите комбинация от следните признаци:">
					<div class="mt-3">
						<ul class="ml-5">
							<li class="">
								лесно губене на концентрация;
							</li>
							<li class="">
								трудности при координацията на тялото;
							</li>
							<li class="">
								трудности при самостоятелно преобличане, хранене и хигиенни навици;
							</li>
							<li class="">
								чувствителност към шумове, миризми, допир;
							</li>
							<li class="">
								затруднения при спазването на устно зададени инструкции.
							</li>
						</ul>
					</div>
					<p>
						Ранното идентифициране на тези предизвикателства е ключово за успешното развитие на детето.
					</p>
				</Collapse>

				<Collapse title="3. На каква възраст детето може да започне да посещава ерготерапия?" desc="Ерготерапията за деца може да започне още от най-ранна възраст. Колкото по-рано се идентифицират и адресират затрудненията, толкова по-ефективна ще бъде терапията." />

				<Collapse title="4. Какви методи използват ерготерапевтите при работа с деца?" desc="Ерготерапевтите използват различни методи, като под формата на игра включват дейности за трениране на фината и грубата моторика, сензори упражнения, задачи за развитие на когнитивни умения и активности за насърчаване на самостоятелността." />

				<Collapse title="5. Какво включва първичната оценка на детето?" desc="Първичната оценка обикновено включва:">
					<div class="mt-3">
						<ul class="ml-5">
							<li class="">
								<span class="font-[MYRIADPRO-Bold]">Разговор с родителите</span> относно развитието на детето, поведението и емоционалното състояние, отношенията в семейството и социалната среда.
							</li>
							<li class="">
								<span class="font-[MYRIADPRO-Bold]">Наблюдение на детето</span> – Ерготерапевтът наблюдава поведението и реакциите на детето, за да идентифицира емоционалните и социалните му нужди.
							</li>
							<li class="">
								<span class="font-[MYRIADPRO-Bold]">Изследване на емоционалните и социалните умения</span> – Използване на психологически инструменти, като тестове за когнитивно развитие, емоционална интелигентност и социална адаптация, за да се определи актуалното състояние на детето.
							</li>
							<li class="">
								<span class="font-[MYRIADPRO-Bold]">Обратна връзка</span> – В края на оценката специалистът предоставя на родителите обобщение и подходящ терапевтичен план за подкрепа, както и препоръки за работа вкъщи.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="6. Каква информация трябва да предоставя по време на първичната оценка на детето?" desc="По време на първичната оценка на актуалното състояние е необходимо да споделите:">
					<div class="mt-3">
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

				<Collapse title="7. Какво трябва да носим за първата терапевтична сесия с ерготерапевт?" desc="За първата сесия с ерготерапевт не е необходимо да носите нещо специално, но е препоръчително да подготвите пантофи и резервни дрешки за детето. Ресурсите, които ще се използват под формата на игра по време на терапията сe осигуряват от Sense Center." />

				<Collapse title="8. Колко време продължава една терапевтична сесия?" desc="Обикновено сесиите по ерготерапия за деца се провеждат в рамките на 40 минути." />

				<Collapse title="9. Могат ли родителите да присъстват по време на терапията?" desc="В Sense Center препоръчваме родителите да не присъстват на терапевтичните сесии, за да гарантираме ефективността на процеса.">
					<p>
						Присъствието на родител може да отклони фокуса на детето, особено при по-малките, които често стават зависими от сигурността на родителската фигура. Това може да ограничи тяхната самостоятелност и активност в терапията. Също така, когато родителят е в стаята, за терапевта е по-трудно да изгради авторитет, което е важно за успешно взаимодействие с детето.
					</p>
					<p>
						Родителите обаче играят ключова роля извън терапевтичните сесии. Затова редовно ги информираме за напредъка на детето и подходите, които могат да приложат у дома, за да подкрепят процеса. Този баланс между терапевтичната работа и родителската подкрепа е ключов за успеха.
					</p>
				</Collapse>

				<Collapse title="10. Може ли ерготерапията за деца да бъде комбинирана с други видове терапевтични подходи?" desc="Да, ерготерапията за деца може успешно да се съчетава с различни терапии за постигане на оптимални резултати в развитието на Вашето дете. Свържете се със специалистите от Sense Center, за да получите персонализирана консултация и да изберете най-подходящите терапии за нуждите на Вашето дете." />

				<Collapse title="11. Колко често трябва да се посещава ерготерапия за деца?" desc="Честотата на посещенията зависи от индивидуалните нужди на детето и тежестта на състоянието." />

				<Collapse title="12. Има ли възможност за терапевтични сесии онлайн?" desc="Не, към момента не провеждаме терапии онлайн, терапевтичните сесии се извършват с добър ерготерапевт на място в Sense Center на адрес – гр. София, бул. „Никола Петков“ 95a" />

				<Collapse title="13. Какви подобрения могат да се очакват след работата с ерготерапевт?" desc="">
					<div>
						<ul class="ml-5">
							<li class="">
								Подобрение в координацията и прецизността на ръцете и пръстите, които са важни за писане, рисуване и манипулиране на малки предмети;
							</li>
							<li class="">
								Повишаване на самостоятелността и увереността;
							</li>
							<li class="">
								Усвояване на ценни ежедневни умения (напр. обличане, подреждане на раница, връзване на обувки и т.н.);
							</li>
							<li class="">
								Подобряване на уменията за планиране и организиране на движенията;
							</li>
							<li class="">
								Развитие на координацията око-ръка, ключова за училищни и игрови активности;
							</li>
							<li class="">
								Усъвършенстване на сензорната обработка;
							</li>
							<li class="">
								Засилване на концентрацията и вниманието;
							</li>
							<li class="">
								Развитие на социални умения чрез структурирани игрови дейности.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="14. Има ли дейности или упражнения, които мога да правя с детето си, за да подкрепя напредъка му?" desc="Да, ерготерапевтът от Sense Center ще Ви предостави подходящи насоки и ресурси за подпомагане на развитието на детето в домашни условия." />
			</div>
		</>
	);
}

export default function Page() {
	return (
		<>
			<div class="relative w-full">
				<VideoHero
					class="important-h-full important-aspect-auto"
					videoSrc="/assets/ergoterapia/Сенс-Център-Ерготерапия-Деца-1.mp4"
					videoSrcMobile="/assets/ergoterapia/Сенс-Център-Ерготерапия-Деца-Мобилно-1.mp4"
					gifPreview="/assets/ergoterapia/Сенс-Център-Ерготерапия-Деца.mp4"
					gifPreviewMobile="/assets/ergoterapia/Сенс-Център-Ерготерапия-Деца-Мобилно.mp4"
					isPlaying={isPlaying()}
					onPlay={() => setIsPlaying(true)}
				/>

				<div class="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-end pb-18 md:pb-10 text-center px-4 text-white">
					<div class={`absolute ${isPlaying() ? 'top-92% sm:top-95% lg:top-100% mt-30' : 'top-42% md:top-55% mt-0'}`}>
						<div>
							<div
								class={`mb-2 md:mb-6 transition-colors duration-500 important-font-size-48px important-md:font-size-90px important-leading-46px important-md:leading-80px important-font-[MYRIADPRO-Bold] text-center px-10 ${isPlaying()
									? 'text-brand'
									: 'text-white'}`}>
								Помагаме на децата да се справят по-лесно с ежедневните задачи
							</div>
						</div>
						<h1
							class={`important-delay-300 font-400 text-center mb-0 important-font-size-5.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 leading-5.5 transition-colors duration-500 important-font-[MYRIADPRO-Light] ${isPlaying()
								? 'text-brand'
								: 'text-white'}`}>
							Ерготерапия за деца
						</h1>
						<div class={`important-delay-600 mt-8 md:mt-10 relative text-center ${isPlaying() ? 'md:pb-30' : 'md:pb-0'}`}>
							<div class="flex md:flex-row flex-col justify-center items-center gap-3 pointer-events-auto">
								<PuzzleButton2
									class="important-bg-brand important-hover:bg-brand-hover"
									href=""
									text={<>Запазете час за<br />първична оценка</>}
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

			<AnimatedComponent class={`xl:px-30 mx-20px ${isPlaying() ? 'pt-170' : 'pt-20'}`}>
				<H3Pink variant="h2" title="Работим заедно за изграждане на умения за самостоятелност, координация и адаптация" />
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
										title="Над 150 деца подобриха уменията си"
										text="С помощта на опитни ерготерапевти децата усъвършенстваха фината и грубата моторика, развиха по-добра координация и постигнаха повече самостоятелност в ежедневието."
										img="/assets/ergoterapia/подобрение-самостоятелност-дете.webp"
										alt="Дете преодолло страховете си след терапия."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#E11172;"
										title="Богат опит с различни предизвикателства"
										text="Работим с деца, които имат трудности в концентрацията, писането, храненето, обличането, социалните умения и адаптацията в училище."
										img="/assets/ergoterapia/ерготерапевет-богат-опит-различни-предизвикателства.webp"
										alt="Дете, което преминава през тревожност, стрес и трудности в общуването."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#088F9D;"
										title="Създаваме безопасна и подкрепяща среда"
										text="Използваме игрови и практически дейности, които подпомагат развитието на детето, насърчават увереността му и изграждат положително отношение към ученето."
										img="/assets/ergoterapia/безопасна-подкрепяща-среда.webp"
										alt="Създаваме безопасна и подкрепяща среда за работа с детски психолог."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#FA7402;"
										title="Персонализиран план за работа"
										text="Всеки план се съставя от опитен ерготерапевт според конкретните нужди на детето, като включва ясни цели и проследяване на напредъка."
										img="/assets/ergoterapia/персонализиран-план-за-работа-ерготерапия.webp"
										alt="Персонализиран план за работа с детски психолог."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-72 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#742C8F;"
										title="Над 150 деца подобриха уменията си"
										text="С помощта на опитни ерготерапевти децата усъвършенстваха фината и грубата моторика, развиха по-добра координация и постигнаха повече самостоятелност в ежедневието."
										img="/assets/ergoterapia/подобрение-самостоятелност-дете.webp"
										alt="Дете преодолло страховете си след терапия."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-72 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#E11172;"
										title="Богат опит с различни предизвикателства"
										text="Работим с деца, които имат трудности в концентрацията, писането, храненето, обличането, социалните умения и адаптацията в училище."
										img="/assets/ergoterapia/ерготерапевет-богат-опит-различни-предизвикателства.webp"
										alt="Дете, което преминава през тревожност, стрес и трудности в общуването."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-72 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#088F9D;"
										title="Създаваме безопасна и подкрепяща среда"
										text="Използваме игрови и практически дейности, които подпомагат развитието на детето, насърчават увереността му и изграждат положително отношение към ученето."
										img="/assets/ergoterapia/безопасна-подкрепяща-среда.webp"
										alt="Създаваме безопасна и подкрепяща среда за работа с детски психолог."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-72 important-lg:h-52 important-md:h-60 important-sm:h-37 important-h-57"
										style="background-color:#FA7402;"
										title="Персонализиран план за работа"
										text="Всеки план се съставя от опитен ерготерапевт според конкретните нужди на детето, като включва ясни цели и проследяване на напредъка."
										img="/assets/ergoterapia/персонализиран-план-за-работа-ерготерапия.webp"
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
									reviewText="Детето ми посещава центъра вече 5 месеца и има значителен напредък.Има интерес към всичко около него,очен контакт,опитва се да говори.Препоръпвам с две ръце центъра.Страхотни хора и професионалисти!"
									name="Лилия Жекова"
									hrefGoogleReview="https://maps.app.goo.gl/hMdU4xpw4ta4gutr7"
								/>
								<StarReview
									reviewText={<>
										Посещаваме Сенс вече трети месец и за краткото време виждаме задоволителни резултати при дъщеря ни.<br />
										Тя е все по- комуникативна и самостоятелна при изпълнение на ежедневите домашни дейности.<br />
										Цените не са ниски, но смятаме, че отговарят на качеството на предоставяната услуга.<br />
										Всички служители са много усмихнати, което е плюс в това сиво ежедневие. 🍀
									</>}
									name="Zhulven Salim"
									hrefGoogleReview="https://maps.app.goo.gl/zc9w27uEJeaV5oYp7"
								/>
								<StarReview
									reviewText={<>
										Синът ми посещава центъра от около 9 месеца.За този период има сериозен напредък в емоционално,социално и когнитивно развитие.Обогати речника и подобри значително говора, благодарение на екипа от професионалисти работещи с него.
									</>}
									name="Ина Светомирова"
									hrefGoogleReview="https://maps.app.goo.gl/Xdq4qnKFWWWADpnM6"
								/>
								<StarReview
									reviewText={<>
										Детето ми посещава центъра от 4 месеца. Забелязваме напредък в комуникативните умения и изпълнението на ежедневни дейности. Препоръчвам силно, най-вече заради екипът от специалисти, които са винаги топли и приветливи❤️. Посрещнаха ни с много разбиране.
									</>}
									name="Божана Михайлова"
									hrefGoogleReview="https://maps.app.goo.gl/DrPpUvaEQm113QZW7"
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
							<img src="/assets/ergoterapia/дете-терапевт-подкрепа.webp" alt="Консултация с опитен детски психолог в Sense Center." class="object-[0%_45%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/ergoterapia/деца-различни-затруднения.webp" alt="След терапията с детски психолог." class="object-[0%_75%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/ergoterapia/дете-подкрепа-учене.webp" alt="Подпомагаме развитието на всяко дете." class="object-[0%_60%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
						</div>
					</AnimatedComponent>

					<div class="relative w-full px-3 sm:px-0 xl:px-3 xl:w-1/2 xl:pl-7">
						<AnimatedComponent>
							<div class="pt-6 md:py-0">
								<p class="xl:mt--5">
									При нас идват деца с различни двигателни, сензорни или когнитивни затруднения. Ерготерапията за деца е подходяща за такива със забавено развитие, затруднения в ученето и ежедневните дейности, както и при специфични състояния. Тя е насочена към деца, които срещат трудности в обличането, хигиенните навици, четенето, писането и други ежедневни умения.
								</p>
								<p class="important-font-[MYRIADPRO-Bold] tracking-0.2px">
									Някои от състоянията, при които терапията с ерготерапевт се препоръчва са:
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
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-36 h-16">
											Синдром<br />на Даун
										</a>
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-33 h-16">
											Аутизъм
										</a>
									</div>
								</div>

								<div class="flex flex-col md:flex-row gap-2">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-41 h-16">
											Мускулна дистрофия
										</a>
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-36 h-16">
											Синдром<br />на Аспергер
										</a>
									</div>
									<div class="flex gap-2">
										<a href="/" class="flex justify-center items-center md:bg-brand md:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											Диспраксия
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover-bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-34 h-16">
											Синдром на Рет
										</a>
									</div>
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
				<H3Pink variant="h2" title="Какво следва, ако не предприемем действие" />
				<AnimatedComponent class="max-w-1500px mx-auto flex flex-col md:flex-row gap-14">
					<div class="flex flex-col justify-between items-start gap-2 w-full md:w-2/3 px-5">
						<div class="w-full">
							<p class="pb-0 mb-5 md:mt-0">Ако не се обърне внимание на затрудненията в развитието и уменията за самостоятелност, те могат да окажат трайно влияние върху бъдещето на детето, а именно:</p>
						</div>
						<div class="w-full">
							<ul style="list-style-type: none;" class="flex flex-col gap-2">
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">затруднения в ученето и ниски училищни резултати</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">липса на самостоятелност в ежедневието</p>
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
										<p class="font-600 my-2 leading-6">трудности при концентрация и усвояване на нови умения</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6 md:mb-0">повишено напрежение у детето и семейството</p>
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
						<p class="font-size-15px c-paper mt-2">Ето защо колкото по-рано бъде започната ерготерапия за деца толкова по-голяма е възможността за трайно подобрение в двигателното, социалното и когнитивното развитие.</p>
					</div>
				</AnimatedComponent>
			</section>

			<section class="relative pt-20 md:pt-10 xl:px-30 mx-20px">
				<H3Pink variant="h2" title="Превръщаме предизвикателствата във възможности" />
				<BackgroundIcons />
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px mb-2">
						<img src="/assets/ergoterapia/дете-пързалка-ерготерапия.webp" alt="Превръщаме предизвикателствата във възможности с добър детски психолог в София." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p>
								Чрез игрови занимания ерготерапията за деца подпомага развитието на фината и грубата моторика, координацията, самостоятелността и насърчава двигателното, когнитивното и емоционалното развитие.
							</p>
							<p>
								Нашите ерготерапевти работят както с деца без специфични дефицити, така и с деца със специални образователни потребности (СОП). Целта е да помогнем на всяко дете да се чувства уверено и способно да се справя с предизвикателствата в ежедневието.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-20">
				<H3Blue variant="h2" title="Как ерготерапията помага на твоето дете в 2 стъпки" />
			</AnimatedComponent>

			<div class="max-w-1500px md:pt-10 mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h3 class="important-font-size-26px important-leading-35px md:pb-2 mt-0">Двигателни и практически умения</h3>
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
										title="Подобрява фината моторика нужна за писане и рисуване"
										text=""
										img="/assets/ergoterapia/дете-подобрява-фината-моторика.webp"
										alt="Детето се учи да общува с детски педагог психолог."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Усъвършенства грубата моторика – баланс, координация, движение"
										text=""
										img="/assets/ergoterapia/дете-усъвършенства-грубата-моторика.webp"
										alt="Опитен детски психолог подобрява умението на дете да се изразява."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Развива умения за хранене, обличане и хигиена"
										text=""
										img="/assets/ergoterapia/дете-развива-умения-хранене-обличане.webp"
										alt="Развиване на активното слушане и разбирането на другите благодарение на детски психолог в София."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Повишава издръжливостта и концентрацията"
										text=""
										img="/assets/ergoterapia/дете-повишава-издръжливост-концентрация.webp"
										alt="Изграждане на умения за работа в екип и разрешаване на конфликти от детски психолог."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Подобрява фината моторика нужна за писане и рисуване"
										text=""
										img="/assets/ergoterapia/дете-подобрява-фината-моторика.webp"
										alt="Детето се учи да общува с детски педагог психолог."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Усъвършенства грубата моторика – баланс, координация, движение"
										text=""
										img="/assets/ergoterapia/дете-усъвършенства-грубата-моторика.webp"
										alt="Опитен детски психолог подобрява умението на дете да се изразява."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Развива умения за хранене, обличане и хигиена"
										text=""
										img="/assets/ergoterapia/дете-развива-умения-хранене-обличане.webp"
										alt="Развиване на активното слушане и разбирането на другите благодарение на детски психолог в София."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Повишава издръжливостта и концентрацията"
										text=""
										img="/assets/ergoterapia/дете-повишава-издръжливост-концентрация.webp"
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
							<h3 class="important-font-size-26px important-leading-35px md:pb-2 mt-0">Социални и когнитивни умения</h3>
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
										title="Изгражда увереност при общуване с връстници"
										text=""
										img="/assets/ergoterapia/дете-увереност-общуване-връстници.webp"
										alt="Детето се научава да разпознава и управлява емоциите си с детски психолог."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Подобрява вниманието и умението за съсредоточаване"
										text=""
										img="/assets/ergoterapia/ерготерапия-подобрява-внимание-съсредоточаване.webp"
										alt="Намаляване на тревожността и усещане на по-голяма сигурност."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Насърчава решаването на проблеми и овладяване на самостоятелността"
										text=""
										img="/assets/ergoterapia/решаване-проблеми-самостоятелност.webp"
										alt="Повишаване на самочувствието и увереността в собствените възможности."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Развива адаптивни умения за справяне в различни ситуации"
										text=""
										img="/assets/ergoterapia/адаптивни-умения-различни-ситуации.webp"
										alt="Изграждане на умения за справяне с предизвикателни ситуации."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Изгражда увереност при общуване с връстници"
										text=""
										img="/assets/ergoterapia/дете-увереност-общуване-връстници.webp"
										alt="Детето се научава да разпознава и управлява емоциите си с детски психолог."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Подобрява вниманието и умението за съсредоточаване"
										text=""
										img="/assets/ergoterapia/ерготерапия-подобрява-внимание-съсредоточаване.webp"
										alt="Намаляване на тревожността и усещане на по-голяма сигурност."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Насърчава решаването на проблеми и овладяване на самостоятелността"
										text=""
										img="/assets/ergoterapia/решаване-проблеми-самостоятелност.webp"
										alt="Повишаване на самочувствието и увереността в собствените възможности."
										class2="important-xl:h-40 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-40"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Развива адаптивни умения за справяне в различни ситуации"
										text=""
										img="/assets/ergoterapia/адаптивни-умения-различни-ситуации.webp"
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

			<section class="relative md:pb-30 xl:px-30 mx-20px pt-5">
				<H3Blue variant="h2" title="Първична оценка с ерготерапевт" />
				<div class="flex flex-col justify-center items-center max-w-1500px mx-auto px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:py-10 py-5 bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
						<p class="c-paper mb-1">
							В Sense Center предлагаме първична оценка с ерготерапевт за деца, които имат двигателни, сензорни, когнитивни или социални затруднения.
						</p>
						<p class="c-paper">
							По време на консултацията се извършва обследване на поведението и актуалното състояние на детето.
						</p>
						<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Консултация с детски психолог." class="my-5 w-full h-auto object-cover rounded shadow" />
						<p class="c-paper mb-1">
							Паралелно с това специалистът провежда разговор с родителите, за да събере информация относно ежедневието на детето, участието му в училище или детска градина, трудностите в социализацията и другите ключови аспекти от развитието.
						</p>
						<p class="c-paper">
							На база събраната информация се изготвя индивидуален план за работа с ерготерапевт.
						</p>
						<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Резултат от консултация с детски психолог." class="mt-5 w-full h-auto object-cover rounded shadow" />
						<p class="c-paper italic font-300 mt-1 op-90%" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
							Препоръчително е да донесете всички налични медицински документи, които могат да помогнат за изясняване на актуалното състояние на детето.
						</p>
						<div class="pt-10 flex md:flex-row flex-col justify-center items-center gap-2">
							<PuzzleButton2
								class="important-bg-brand important-hover:bg-brand-hover"
								href=""
								text={<>Запазете час за<br />първична оценка</>}
							/>
							<PuzzleButton2
								href=""
								text="+ 359 879 800 013"
							/>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<div class="mt-20 gap-12 pb-8 mb-5 md:pb-20 pt-50px xl:px-30 px-20px bg-brand-blue -mx-20px">
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
								img="https://lh3.googleusercontent.com/a/ACg8ocIWeI556VYl_HYVnzFLCtJfXwvX5HMt1a7qBqoO0fQhRavUfA=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Детето ми посещава центъра от месец и половина! Важното за мен е, че той ходи с желание там и намира приятели! Ние сме в началото на нашия път в Sense център, но имам огромно доверие на екипа и вярвам, че ще постигнем заедно най-доброто за нашето дете! Препоръчвам центъра, това е едно добро място за нашите деца в което могат да се учат, играят и да се чувстват спокойни и обичани!
									</>
								}
								name="Stanimira Milenova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/7UspgWeXHDRD3CxDA"
							/>
							<GoogleStarReview
								class="important-h-480px important-sm:h-700px important-lg:h-600px important-xl:h-570px googlereview-container-in-dp"
								img="https://lh3.googleusercontent.com/a-/ALV-UjX3Ggthr2B2L0ZObzEwZUcpviSRIfQ1OWGDHFp-SnQG2zH5dnQ=w36-h36-p-rp-mo-br100"
								reviewText={
									<>
										Уютно и вдъхновяващо място!<br />
										Sense Center е перфектното място за децата ми! Персоналът е изключително внимателен и ангажиран, а програмите са едновременно забавни и образователни. Винаги си тръгваме с усмивка и желание да се върнем отново!
									</>
								}
								name="Viktoriya Nikolova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/z5h7wjaaxazyoB479"
							/>
							<GoogleStarReview
								class="important-h-480px important-sm:h-700px important-lg:h-600px important-xl:h-570px googlereview-container-in-dp"
								img="https://lh3.googleusercontent.com/a-/ALV-UjXU5gLYy5Nbr3_I8ZvaKfiFS-U3Cb7TimeQB9Gmd2PpJnbrDj_N=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Екип от професионалисти, позитивизъм и топло отношение към децата ни.<br />
										Много сме им благодарни, тъй като детето ни демонстрира видим напредък само за няколко месеца! ❤️
									</>
								}
								name="Даниел Иванов"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/jJnmpnXNw45Pye5d9"
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
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px">
				<H3Pink title="Ерготерапевтите в Sense Center" />
			</section>

			<section class="xl:px-30 mx-20px">
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
							{ name: "11" },
							{ name: "12" },
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
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="important-md:font-size-40px important-leading-30px text-left">Сали Младенова</h4>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Всяко дете заслужава да пълноценно и щастливо детството.”</p>
								<div class="w-full pb-20px pt-30px text-center">
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
								<h4 class="important-md:font-size-40px important-leading-30px text-left">Ани Христова</h4>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Вярвам, че децата могат да развият потенциала си с подходяща подкрепа и насока.”</p>
								<div class="w-full pb-20px pt-30px text-center">
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
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Децата са нашето бъдеще и вярвам, че всяко дете заслужава уважение, търпение и любов, за да разгърне пълния си потенциал.”</p>
								<div class="w-full pb-20px pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Цветелина Дескова е млад и мотивиран специалист, който вярва, че всяко дете заслужава уважение, търпение и любов, за да разгърне своя потенциал. Тя има опит в работата с деца със СОП, като влага усилията си в развитието на техните когнитивни и социални умения, както и на умението им да разбират и изразяват собствените си емоции.
										</p>
										<p class="text-left mt-1">
											Цветелина е завършила бакалавърска степен по „Психология“ със специализация „Психични нарушения“ в Нов български университет. В практиката си създава спокойна и подкрепяща среда, в която децата се чувстват уверени да бъдат себе си и да растат в посока на своето най-добро развитие.
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
				<H3Blue title="Как протича една сесия ерготерапия за деца" />
				<div class="md:pb-0 pb-10">
					<AnimatedComponent>
						<p class="mt-0 mb-10 px-5">
							Ерготерапията е внимателно структуриран процес, който поставя детето в центъра. Основната цел е създаването на подкрепяща и стимулираща среда, в която детето се чувства сигурно и мотивирано да изследва своите възможности. Чрез адаптирани дейности и специализирани методи, ерготерапията за деца насърчава развитието на умения за справяне с ежедневни предизвикателства и постигане на по-голяма самостоятелност.
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
								class="h-500px sm:h-650px md:h-700px lg:h-550px"
								style="background-color:#742C8F;"
								puzzleclass="c-brand w-6 mr-2"
								img="/assets/ergoterapia/начало-на-сесията-ерготерапия.webp"
								alt="Начало на сесията с детски психолог."
								title="Начало на сесията"
								desc="Детето влиза в терапевтичната стая заедно с ерготерапевта. Пространството осигурява приветлива и спокойна среда, която насърчава участието на детето и взаимодействието му с терапевта."
							/>
							<PuzzleIconReview
								class="h-500px sm:h-650px md:h-700px lg:h-550px"
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/ergoterapia/игрови-упражнения-фина-моторика-ерготерапия.webp"
								alt="Иницииране на взаимодействие с детскипсихолог."
								title="Игрови упражнения за фината моторика"
								desc="Занимания като подреждане на мъниста, изрязване, рисуване или моделиране с пластилин развиват фината моторика, зрително-моторната координация и концентрацията."
							/>
							<PuzzleIconReview
								class="h-500px sm:h-650px md:h-700px lg:h-550px"
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/ergoterapia/игри-упражнения-груба-моторика.webp"
								alt="Прилагане на игрови дейности."
								title="Дейности за груба моторика и координация"
								desc="Хвърляне и хващане на предмети, двигателни игри и упражнения със специални уреди подпомагат грубата моторика, баланса и уменията за работа в екип."
							/>
							<PuzzleIconReview
								class="h-500px sm:h-650px md:h-700px lg:h-550px"
								style="background-color:#FA7402;"
								puzzleclass="c-brand-blue w-6 mr-2"
								img="/assets/ergoterapia/тренировка-ежедневни-умения.webp"
								alt="Психологически методи за деца."
								title="Тренировка на ежедневни умения"
								desc="Обличане, събличане, хранене и други практически задачи подпомагат изграждането на самостоятелност и увереност в ежедневието."
							/>
							<PuzzleIconReview
								class="h-500px sm:h-650px md:h-700px lg:h-550px"
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/ergoterapia/социални-когнитивни-умения.webp"
								alt="Край на сесията"
								title="Социални и когнитивни умения"
								desc="Чрез интерактивни игри и ролеви ситуации детето тренира концентрация, решаване на проблеми и справяне със социални и емоционални предизвикателства."
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
						bgImage="/assets/ergoterapia/иновативни-методи-ерготерапия.webp"
						bgSize="500%"
						bgPosition="right 40% top 100%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px mb-2">
						<img src="/assets/ergoterapia/иновативни-методи-ерготерапия.webp" alt="Иновативни методи в детската психология." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p>
								Ерготерапията за деца в Sense Center включва специално подбрани материали, пособия и оборудване, създадени да подпомагат развитието на моториката, вниманието и социалните умения. Чрез игри, упражнения и творчески дейности децата усвояват нови умения по приятен и мотивиращ начин. Внимателно подбраното специализирано оборудване осигурява целенасочена подкрепа, която насърчава развитието, самостоятелността и увереността на всяко дете.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-50">
				<H3Pink variant="h2" title="3+ ерготерапевтични модела, които подпомагат детското развитие" />
				<div class="mx-auto">
					<AnimatedComponent class="px-5 md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<h3 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Прибори и приспособления за хранене</h3>
							<div class="w-full md:pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										Специално създадени за развитие на координация и самостоятелност при хранене. Тези инструменти помагат на децата да изградят увереност и умения за справяне с ежедневните дейности.
									</p>
								</div>
							</div>
							<div class="">
								<img class="w-full h-full" src="/assets/ergoterapia/дете-учене-ядене-прибори.webp" alt="Макет на дома." />
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
							<h3 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Комплекти за безопасно рязане и подготовка на храна</h3>
							<div class="w-full md:pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										Подходящи са за малки ръчички, тези комплекти учат децата как да бъдат самостоятелни в кухнята, докато развиват фината си моторика.
									</p>
								</div>
							</div>
							<div class="">
								<img class="w-full h-full" src="/assets/ergoterapia/ерготерапия-деца-безопасно-рязане.webp" alt="Терапия с фигури на членове от семейството." />
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
							<h3 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Обучителни обувки и макети</h3>
							<div class="w-full md:pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										Създадени са за практикуване на връзване на връзки и застопоряване на закопчалки, тези материали улесняват овладяването на ключови умения за ежедневието.
									</p>
								</div>
							</div>
							<div class="">
								<img class="w-full h-full" src="/assets/ergoterapia/ерготерапия-деца-обучителни-обувки.webp" alt="Терапия с фигури на животни." />
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="xl:px-30 mx-20px my-10">
				<div class="mx-auto">
					<AnimatedComponent class="px-5 md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<h3 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Разнообразни облекла за тренировка на обличане и събличане</h3>
							<div class="w-full md:pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										Дрехи с ципове, копчета и велкро ленти, които правят ученето на тези умения забавно и полезно.
									</p>
								</div>
							</div>
							<div class="">
								<img class="w-full h-full" src="/assets/ergoterapia/ерготерапия-деца-обличане.webp" alt="Терапия с фигури на животни." />
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink2" />

			<section class="xl:px-30 mx-20px">
				<div class="mx-auto">
					<AnimatedComponent class="mb-10 mt-10 md:mt-20 md:mt-30 lg:w-800px mx-auto">
						<div class="flex flex-col justify-center items-start b-rd-12px bg-brand px-10 py-4">
							<p class="font-size-22px uppercase c-paper font-500 mb-0 tracking-0.5px font-[MYRIADPRO-Semibold]">УСТОЙЧИВО РАЗВИТИЕ</p>
							<p class="c-paper font-300 font-[MYRIADPRO-Light]">Използването на подходящо оборудване е ключов елемент в ерготерапията за деца. Чрез комбинация от висококачествени инструменти и индивидуален подход се постигат устойчиви резултати в развитието на речевите и езиковите умения на всяко дете.
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
							<img class="w-full h-full" src="/assets/home/вход-към-sense-center.webp" alt="Вход към sense center." />
						</div>
						<p class="mt-5">
							Центърът включва 14 специализирани терапевтични кабинета, стая за отдих и социализация, както и удобен паркинг за посетители.
						</p>
						<div class="mt-5">
							<GallerySlider2
								imgs={[
									{ src: "/assets/ergoterapia/терапевтична-стая-индивидуални-занимания.webp", alt: "Подобрение на дете с аутизъм" },
									{ src: "/assets/ergoterapia/стая-групови-игри-моторика.webp", alt: "Напредък в развитието на дете с аутизъм" },
									{ src: "/assets/ergoterapia/креативна-обучителна-стая.webp", alt: "Силна връзка между терапевтите и децата" },
								]}
							/>
						</div>
						<p class="mt-6">
							Всички пространства в Sense Center са проектирани така, че да предразполагат детето към спокойствие и активно участие в терапията.
						</p>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="purple2" />

			<section>
				<div class="gap-12 pb-8 md:pb-30 pt-50px xl:px-30">
					<H3Pink title="Първи стъпки" />
					<AnimatedComponent class="mb-10 relative px-5">
						<BackgroundIcons />
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Необходимо е единствено да се свържете с нас. Обадете се или ни пишете в социалните мрежи или директно през сайта.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Често пътят започва с притеснение и несигурност.<br />
								Споделете какво Ви притеснява, ще Ви изслушаме внимателно с грижа и разбиране.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Ще обсъдим актуалното състояние на детето и ще организираме час за първоначална консултация, на която ще се запознаем с уменията на детето към настоящия момент, неговите дефицити и трудности.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">На база Вашата заявка за напредъка, който искате да постигнем и нашето наблюдение по време на оценката,  препоръчваме подходящи терапии и честота на посещенията.</p>
						</div>
					</AnimatedComponent>
					<PuzzleButton2
						class="important-bg-brand important-hover:bg-brand-hover"
						href=""
						text={<>Запазете час за<br />първична оценка</>}
					/>
				</div>
			</section>

			<section class="pt-20 md:pt-30">
				<AnimatedComponent class="">
					<H2Echo
						maintitle={
							<>
								Резултати от ерготерапията за деца
							</>
						}
						title="ерготерапията"
						bgImage="/assets/ergoterapia/щастливо-дете-ерготерапия.webp"
						bgSize="450%"
						bgPosition="right 10% top 95%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/ergoterapia/щастливо-дете-ерготерапия.webp" alt="Резултат от терапия с детски психолог." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>
					<AnimatedComponent>
						<div class="md:hidden block pt-5 px-5">
							<p>
								Работата с ерготерапевт носи множество ползи за развитието на Вашето дете. Тя подпомага подобряването на координацията и прецизността на ръцете и пръстите, което е от съществено значение за писане, рисуване и манипулиране на малки предмети. Чрез заниманията детето усвоява ценни ежедневни умения като обличане, връзване на обувки или подреждане на раницата, което повишава неговата самостоятелност и увереност.
							</p>
							<p class="mt--1 mb-2">
								Ерготерапията за деца съдейства за по-доброто планиране и организиране на движенията, развива координацията око-ръка, ключова за успешното участие в училищни и игрови дейности, и усъвършенства сензорната обработка. Освен това, ерготерапията спомага за засилване на концентрацията и вниманието, както и за изграждането на социални умения чрез специално структурирани игрови активности.
							</p>
						</div>
					</AnimatedComponent>

					<div class="relative w-full px-5 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<div class="hidden md:block">
								<p>
									Работата с ерготерапевт носи множество ползи за развитието на Вашето дете. Тя подпомага подобряването на координацията и прецизността на ръцете и пръстите, което е от съществено значение за писане, рисуване и манипулиране на малки предмети. Чрез заниманията детето усвоява ценни ежедневни умения като обличане, връзване на обувки или подреждане на раницата, което повишава неговата самостоятелност и увереност.
								</p>
								<p class="mt--1">
									Ерготерапията за деца съдейства за по-доброто планиране и организиране на движенията, развива координацията око-ръка, ключова за успешното участие в училищни и игрови дейности, и усъвършенства сензорната обработка. Освен това, ерготерапията спомага за засилване на концентрацията и вниманието, както и за изграждането на социални умения чрез специално структурирани игрови активности.
								</p>
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

			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-5 md:pt-0">
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
