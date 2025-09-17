import "solid-slider/slider.css";
import { GoogleStarReview, PuzzleIconReview, ReviewSlider, StaffContainer, StaffSlider, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink, H3SolidPink } from '../../components/H2WithImage';
import { ContainerBox, ContainerSlider, ReviewPuzzlePiece } from "../../components/ContainerSlider";
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { Collapse } from "../../components/FAQ";
import { GallerySlider3 } from "../../components/GallerySlider";
import { createSignal } from "solid-js";
import { VideoHero } from "../../components/HeroVideo";

function SingleCollapse() {
	return (
		<>
			<div class="flex flex-col gap-5 md-gap-2 cursor-pointer max-w-1200px mx-auto">
				<Collapse title="1. Какво прави терапевтът по звукова стимулация?" desc="Терапевтът по звукова стимулация работи върху развитието на слуховите възприятия, звуковата обработка и сензорната интеграция на детето. Чрез програма за звукова стимулация, включваща слушалки и специално подбрани честоти, той подпомага преодоляването на слухова хиперчувствителност, проблеми с концентрацията и други сензорни затруднения." />

				<Collapse title="2. Как да разбера дали детето ми има нужда от терапия със звукова стимулация?" desc="Ако детето има чувствителност към звуци, трудности с концентрацията в шумна среда, проблеми с разграничаването на звукове или бурни реакции към звукови стимули, е добре да се консултирате с терапевт по звукова стимулация. Звуковата стимулация като терапия е особено ефективна при деца с аутизъм, ADHD и сензорни разстройства. Ранната интервенция е ключова за успеха и развитието на детето." />

				<Collapse title="3. На каква възраст може да бъде започната програма за звукова стимулация за деца?" desc="Терапията може да започне още от 2-годишна възраст, ако се забележат затруднения. Важно е проблемите да бъдат адресирани възможно най-рано, за да се подпомогне правилното развитие на речта и езика." />

				<Collapse title="4. Колко време продължава една терапевтична сесия по звукова стимулация за деца?" desc="Обикновено сесиите по звукова стимулация за деца се провеждат в рамките на 40 минути." />

				<Collapse title="5. Могат ли родителите да присъстват по време на терапията със звукова стимулация за деца?" desc="В Sense Center препоръчваме родителите да не присъстват на терапевтичните сесии по звукова стимулация за деца, за да гарантираме ефективността на процеса.">
					<p class="mt-3">
						Присъствието на родител може да отклони фокуса на детето, особено при по-малките, които често стават зависими от сигурността на родителската фигура. Това може да ограничи тяхната самостоятелност и активност в терапията. Също така, когато родителят е в стаята, за терапевта е по-трудно да изгради авторитет, което е важно за успешно взаимодействие с детето.
					</p>
					<p>
						Родителите обаче играят ключова роля извън терапевтичните сесии. Затова редовно ги информираме за напредъка на детето и подходите, които могат да приложат у дома, за да подкрепят процеса. Този баланс между терапевтичната работа и родителската подкрепа е ключов за успеха.
					</p>
				</Collapse>

				<Collapse title="6. Може ли терапията със звукова стимулация да бъде комбинирана с други видове терапевтични подходи?" desc="Да, звуковата стимулация като терапия може успешно да се съчетава с различни терапии за постигане на оптимални резултати в развитието на Вашето дете. Свържете се със специалистите от Sense Center, за да получите консултация и да изберете най-подходящите терапии за нуждите на Вашето дете." />

				<Collapse title="7. Колко често трябва да се посещава звуковата стимулация като терапия?" desc="Честотата на посещенията зависи от индивидуалните нужди на детето и тежестта на състоянието." />

				<Collapse title="8. Има ли възможност за сесии по звукова стимулация онлайн?" desc="Не, към момента не провеждаме терапии със звукова стимулация онлайн. Терапевтичните сесии се извършват на място в Sense Center на адрес – гр. София, бул. „Никола Петков“ 95a." />

				<Collapse title="9. Какво трябва да носим за първата терапевтична сесия по звукова стимулация за деца?" desc="Необходимо е единствено да носите пантофи и резервни дрешки за детето. Всичко останало е осигурено от нашия център. Терапевтът използва разнообразни звукови ресурси под формата на игра, за да направи сесиите по звукова стимулация за деца интересни и ефективни." />

				<Collapse title="10. Какво включва първичната оценка?" desc="Първичната оценка обикновено включва:">
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

				<Collapse title="11. Каква информация трябва да предоставя по време на първичната оценка?" desc="По време на първичната оценка е необходимо да споделите:">
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
						Тази информация ще ни помогне да създадем персонализирана и по-ефективна програма за звукова стимулация.
					</p>
				</Collapse>

				<Collapse title="12. Какви подобрения могат да се очакват след звуковата стимулация?" desc="">
					<div>
						<ul class="ml-5 mt-3">
							<li class="">
								Подобряване на говора, граматиката, интонацията и жестовете.
							</li>
							<li class="">
								Развитие на умения за четене и писане.
							</li>
							<li class="">
								Изразяване и разбиране на емоциите.
							</li>
							<li class="">
								Развитие на самостоятелност.
							</li>
							<li class="">
								Усвояване на ежедневни умения.
							</li>
							<li class="">
								Развитие на социални умения.
							</li>
							<li class="">
								Справяне с ежедневни предизвикателства.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="13. Има ли дейности или упражнения, които мога да правя с детето си, за да подкрепя напредъка му?" desc="Да, специалистите по звукова стимулация от Sense Center ще Ви предоставят подходящи насоки и ресурси за подпомагане на развитието на детето в домашни условия." />
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
					videoSrc="/assets/zvuk-stimul/Сенс-Център-Звукова-Стимулация-1.mp4"
					videoSrcMobile="/assets/zvuk-stimul/Сенс-Център-Звукова-Стимулация-Мобилно-1.mp4"
					gifPreview="/assets/zvuk-stimul/Сенс-Център-Звукова-Стимулация.mp4"
					gifPreviewMobile="/assets/zvuk-stimul/Сенс-Център-Звукова-Стимулация-Мобилно.mp4"
					isPlaying={isPlayingHero()}
					onPlay={() => setIsPlayingHero(true)}
				/>

				<div class="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-end pb-18 md:pb-10 text-center px-4 text-white">
					<div class={`absolute ${isPlayingHero() ? 'top-[102%] sm:top-[105%] lg:top-[105%] mt-[30px]' : 'top-[46%] md:top-[65%] mt-0'}`}>
						<div>
							<div class={`mb-3 transition-colors duration-500 text-[35px] md:text-[90px] leading-[38px] md:leading-[90px] font-['MYRIADPRO-Bold'] text-center px-2 md:px-10 ${isPlayingHero() ? 'inline-block pb-[0.2em] bg-gradient-to-r from-[#E11172] to-[#FFAE01] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]' : 'text-white'}`}>
								Ефективна подкрепа за хиперактивни и разсеяни деца
							</div>
						</div>

						<h1
							class={`important-delay-300 text-center mb-0 important-font-size-5.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 important-leading-5 transition-colors duration-500 important-font-[MYRIADPRO-Light] ${isPlayingHero()
								? 'text-brand'
								: 'text-white'}`}>
							Обучение за концентрация и внимание за деца
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
				<H3Pink variant="h2" title="Заедно развиваме концентрацията, фокуса и когнитивните умения" />
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
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#742C8F;"
										title="Над 130 деца подобриха концентрацията и вниманието си"
										text="Научиха се да се фокусират по-лесно, да задържат вниманието си по-дълго и да се справят по-успешно с ежедневните задачи."
										img="/assets/zvuk-stimul/подобрение-звукова-стимулация-деца.webp"
										alt="Индивидуален план за когнитивно-поведенческа терапия на всяко дете."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#E11172;"
										title="Богат опит с различни предизвикателства"
										text="Работим с деца с ADHD, проблеми с концентрацията, хиперактивност, сензорни затруднения и други предизвикателства свързани с вниманието."
										img="/assets/zvuk-stimul/различни-сензорни-затруднения.webp"
										alt="Когнитивно поведенческа терапия."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#088F9D;"
										title="Интерактивни методи за обучение"
										text="Използваме иновативни и интересни подходи за учене чрез игра, които правят терапията ангажираща и ефективна."
										img="/assets/zvuk-stimul/иновативен-методи-звукова-стимулация.webp"
										alt="Дете с тревожност, страхове, трудности в общуването по време на когнитивно-поведенческа терапия."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#FA7402;"
										title="Персонализиран план за работа"
										text="Всеки план е съобразен със специфичните нужди на детето и целите на терапията, за да постигне максимален напредък."
										img="/assets/zvuk-stimul/персонализиран-план-работа.webp"
										alt="Техники за подобряване на умения и справяне със стрес, тревожност и изразяване на емоции."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#742C8F;"
										title="Над 130 деца подобриха концентрацията и вниманието си"
										text="Научиха се да се фокусират по-лесно, да задържат вниманието си по-дълго и да се справят по-успешно с ежедневните задачи."
										img="/assets/zvuk-stimul/подобрение-звукова-стимулация-деца.webp"
										alt="Индивидуален план за когнитивно-поведенческа терапия на всяко дете."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#E11172;"
										title="Богат опит с различни предизвикателства"
										text="Работим с деца с ADHD, проблеми с концентрацията, хиперактивност, сензорни затруднения и други предизвикателства свързани с вниманието."
										img="/assets/zvuk-stimul/различни-сензорни-затруднения.webp"
										alt="Когнитивно поведенческа терапия."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#088F9D;"
										title="Интерактивни методи за обучение"
										text="Използваме иновативни и интересни подходи за учене чрез игра, които правят терапията ангажираща и ефективна."
										img="/assets/zvuk-stimul/иновативен-методи-звукова-стимулация.webp"
										alt="Дете с тревожност, страхове, трудности в общуването по време на когнитивно-поведенческа терапия."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#FA7402;"
										title="Персонализиран план за работа"
										text="Всеки план е съобразен със специфичните нужди на детето и целите на терапията, за да постигне максимален напредък."
										img="/assets/zvuk-stimul/персонализиран-план-работа.webp"
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
									reviewText={<>
										Благодаря на Sense център за отзивчивостта, професионализма и разбирането, с които подходиха към сина ми!<br />
										Той направи един курс по звукова стимулация и няколко сесии речева терапия. Като резултат българският му се подобри значително! Започна да отговаря и на езикът, на който го питаш и смесването на езиците силно намаля!<br />
										Препоръчвам Sense център от все сърце!
									</>}
									name="Vanq Apostolova-Katsarska"
									hrefGoogleReview="https://maps.app.goo.gl/e3Ps7BaKVZSrY5tZ8"
									class="important-h-380px important-sm:h-200px important-md:h-600px important-lg:h-500px important-xl:h-500px"
								/>
								<StarReview
									reviewText="Искам да изкажа огромната си благодарност на терапевтите в Сенс Център. Синът ми посещава центъра от април 2025г.В начолото не можеше да говори и не разбираше какво ние му обясняваме. Благодарение на различните видове терапии които посещава звукова, ерготерапия, речева, тъмна стая има голям напредък. Препоръчвам центъра, защото всичко в него е на ниво и синът ми се чувства щастлив"
									name="Ирена Бакалова"
									hrefGoogleReview="https://maps.app.goo.gl/cLwbN14c4QtN7Wmc6"
									class="important-h-380px important-sm:h-200px important-md:h-600px important-lg:h-500px important-xl:h-500px"
								/>
								<StarReview
									reviewText={
										<>
											Дъщеря ми посещава центъра от почти 3 месеца . При първото ни посещение ни направи впечатление колко много специалисти има и колко много терапии предлагат . След прегледа се установи , че тя е за Звукова и Речева терапия . Напредъка до момента е огромен.
										</>
									}
									name="Atanaska Beleva"
									hrefGoogleReview="https://maps.app.goo.gl/4Y1ge41uwGvsumH1A"
									class="important-h-380px important-sm:h-200px important-md:h-600px important-lg:h-500px important-xl:h-500px"
								/>
								<StarReview
									reviewText={<>
										Изключително сме благодарни на целият екип от професионалисти в Sense Center!<br />
										Невероятно мили, сърдечни, квалифицирани млади специалисти, които видимо обичат работата си!<br />
										Напредъкът при Теди е осезаем, продължаваме смело напред и сме сигурни, че ще постигнем още положителни резултати!!! ❤️❤️❤️
									</>}
									name="Karina Stoqnova"
									hrefGoogleReview="https://maps.app.goo.gl/cAVdFNqLJmRJA3bv7"
									class="important-h-380px important-sm:h-200px important-md:h-600px important-lg:h-500px important-xl:h-500px"
								/>
								<StarReview
									reviewText={<>Момченцето ни имаше проблем с проговарянето, за няколко месеца работа със специалистите в центъра показа страхотен напредък. Изключително доволни сме със съпруга ми от резултатите, отношението към детето и подхода.
									</>}
									name="Silvya Manikatova"
									hrefGoogleReview="https://maps.app.goo.gl/KmxyBapgNRYeyQm49"
									class="important-h-380px important-sm:h-200px important-md:h-600px important-lg:h-500px important-xl:h-500px"
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
							<img src="/assets/zvuk-stimul/програма-звукова-стимулация-деца.webp" alt="Kогнитивно поведенческа терапия при деца." class="object-[0%_50%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/zvuk-stimul/дете-след-звукова-стимулация.webp" alt="Kогнитивно поведенческа терапия за деца в Sense Center." class="object-[0%_0%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/zvuk-stimul/звукова-стимулация-като-терапия.webp" alt="Когнитивно-поведенческа терапия в Сенс център София." class="object-[0%_25%] w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
						</div>
					</AnimatedComponent>

					<div class="relative w-full px-3 sm:px-0 xl:px-3 xl:w-1/2 xl:pl-7">
						<AnimatedComponent>
							<div class="pt-6 md:py-0">
								<p class="xl:mt--5">
									При нас идват деца, които срещат трудности с концентрацията, задържането на вниманието или когнитивните умения. Предлагаме различни видове терапия за развитие на вниманието, съобразени с нуждите на всяко дете – при ADHD, хиперактивност, сензорни затруднения, проблеми с фокусирането и други предизвикателства свързани с концентрацията. Вярваме, че с индивидуален подход и подкрепата на опитен специалист всяко дете може да развие по-добро внимание и да се чувства по-уверено.
								</p>
								<p class="important-font-[MYRIADPRO-Bold] tracking-0.2px">
									Обучението за концентрация и внимание се препоръчва при:
								</p>
							</div>
							<AnimatedComponent class="mx-auto flex flex-col justify-center items-center gap-2 mb-2 md:mb-3 mt-5">
								<div class="flex flex-col sm:flex-row justify-center gap-2 max-w-600px">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center sm:bg-brand sm:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-30 xl:w-26 h-16">
											ХАДВ
										</a>
										<a href="/" class="flex justify-center items-center sm:bg-brand-blue sm:hover:bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-36 xl:w-30 h-16">
											Аутизъм
										</a>
									</div>
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-36 xl:w-36 h-16">
											Умствена изостаналост
										</a>
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-30 xl:w-32 h-16">
											СОП
										</a>
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-30 xl:w-32 h-16">
											Дислексия
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
							<p class="pb-0 mb-5 md:mt-0">Ако не се обърне внимание на затрудненията с концентрацията в ранна възраст,  те могат да повлияят сериозно върху развитието на детето и да доведат до:</p>
						</div>
						<div class="w-full">
							<ul style="list-style-type: none;" class="flex flex-col gap-2">
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">Трудности в ученето и усвояването на знания</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">Ниско самочувствие и социална изолация</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">Проблеми в общуването с връстници и възрастни</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">Трайни когнитивни и поведенчески затруднения</p>
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
						<p class="font-size-15px c-paper mt-2">Ето защо колкото по-рано бъде започнато обучение за концентрация и внимание, толкова по-голяма е възможността за видимо подобрение на състоянието и напредване в развитието.</p>
					</div>
				</AnimatedComponent>
			</section>

			<section class="relative pt-10 xl:px-30 mx-20px">
				<H3Pink variant="h2" title="По пътя към по-добра концентрация" />
				<BackgroundIcons />
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px mb-2">
						<img src="/assets/zvuk-stimul/упражнение-телесна-перкусия.webp" alt="Дете по време на поведенческа терапия." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-9">
								Целта на специалистите е да подпомогнат развитието на вниманието и интеграцията на децата в социалната и образователната среда чрез комплексен подход, който комбинира съвременни методи с проверени техники.
							</p>
							<p>
								Ако детето Ви се разсейва лесно, трудно довършва задачите си или има нужда от повече увереност в училище, обучението за концентрация и внимание може да му помогне. Чрез внимателно подбрани игри като пъзели, логически задачи и упражнения децата постепенно развиват умението да се съсредоточават, да помнят по-добре и да поддържат вниманието си за по-дълго време.
							</p>
							<p>
								За постигане на още по-добри резултати към основното обучение за концентрация и внимание прилагаме и рефлекторен масаж. Това е нежна терапевтична техника, която стимулира специфични точки по ходилата, дланите, лицето и ръцете. Рефлекторният зонов масаж успокоява нервната система, намалява напрежението и подготвя мозъка за по-ефективно възприемане и обработка на информацията.
							</p>
							<p>
								Комбинацията от обучение за концентрация и внимание и рефлекторен масаж създава цялостен терапевтичен подход, който не само улеснява концентрацията и прави ученето по-приятно, но и осигурява устойчиви и трайни резултати в развитието на детето.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-20">
				<H3Blue variant="h2" title="Обучение за концентрация и внимание" />
			</AnimatedComponent>

			<div class="max-w-1500px md:pt-10 mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h3 class="font-600 text-left pb-2 mt-0 important-font-size-26px important-leading-35px">Как протича една сесия по обучение за концентрация и внимание</h3>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "Review 1" },
										{ name: "Review 2" },
										{ name: "Review 3" },
										{ name: "Review 4" },
										{ name: "Review 5" },
									]}
								>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Начало на сесията"
										text="Детето бива посрещнато в терапевтичната стая, където се провежда кратък разговор или игрова активност, за да се установи текущото му емоционално и физическо състояние."
										img="/assets/zvuk-stimul/подобряване-концентрацията.webp"
										alt="Дете се учи да разпознава и назовава емоциите си."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Игри за развитие на слуховото внимание"
										text="Започваме упражнения и игри, които стимулират слуховата концентрация. Чрез тях детето тренира умението да слуша внимателно, да запомня и да реагира адекватно на зададени звуци или инструкции."
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Игри за визуално внимание"
										text="В тази част детето работи с карти, пъзели или логически задачи, които развиват зрителното възприятие и способността да открива разлики."
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Игри за задържане на вниманието"
										text="Активности, при които детето трябва да се концентрира за по-дълго време, например настолни игри или задачи с хронометър. Така се изгражда издръжливост и умение за завършване на започнатото."
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Игри за когнитивна гъвкавост"
										text="Накрая се включват упражнения, които насърчават детето да преминава лесно от една дейност към друга и да търси различни решения. Това развива адаптивността, логическото мислене и контрола върху импулсивността."
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/5">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Начало на сесията"
										text="Детето бива посрещнато в терапевтичната стая, където се провежда кратък разговор или игрова активност, за да се установи текущото му емоционално и физическо състояние."
										img="/assets/zvuk-stimul/подобряване-концентрацията.webp"
										alt="Дете се учи да разпознава и назовава емоциите си."
									/>
								</div>
								<div class="w-1/5">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Игри за развитие на слуховото внимание"
										text="Започваме упражнения и игри, които стимулират слуховата концентрация. Чрез тях детето тренира умението да слуша внимателно, да запомня и да реагира адекватно на зададени звуци или инструкции."
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
								</div>
								<div class="w-1/5">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Игри за визуално внимание"
										text="В тази част детето работи с карти, пъзели или логически задачи, които развиват зрителното възприятие и способността да открива разлики."
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
								</div>
								<div class="w-1/5">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Игри за задържане на вниманието"
										text="Активности, при които детето трябва да се концентрира за по-дълго време, например настолни игри или задачи с хронометър. Така се изгражда издръжливост и умение за завършване на започнатото."
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
								</div>
								<div class="w-1/5">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Игри за когнитивна гъвкавост"
										text="Накрая се включват упражнения, които насърчават детето да преминава лесно от една дейност към друга и да търси различни решения. Това развива адаптивността, логическото мислене и контрола върху импулсивността."
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="purple" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-20">
				<H3Blue variant="h2" title="Рефлекторен масаж" />
			</AnimatedComponent>

			<div class="max-w-1500px mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h3 class="font-600 text-left pb-2 important-font-size-26px important-leading-35px">Как протича една сесия по рефлекторен масаж</h3>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "Review 1" },
										{ name: "Review 2" },
										{ name: "Review 3" },
										{ name: "Review 4" },
										{ name: "Review 5" },
									]}
								>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Начало на сесията"
										text="Сесията започва в тиха и спокойна обстановка. Детето избира дали да легне или да седне, според това как се чувства най-добре"
										img="/assets/zvuk-stimul/подобряване-концентрацията.webp"
										alt="Дете се учи да разпознава и назовава емоциите си."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Подготовка за масажа"
										text="На разбираем език терапевтът обяснява какво предстои. След това започва лек контакт с ръцете, загряване с масажното масло или крем, за да се постигне приятно усещане и сигурност по време на масажа."
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Рефлекторен масаж на ходилата"
										text="С нежни кръгови движения се стимулират рефлексните точки по стъпалата, които влияят върху различни системи в тялото и подпомагат мозъчната активност."
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Рефлекторен масаж на ръцете и дланите"
										text="Следва лека работа върху дланите и пръстите, която отпуска, стимулира фината моторика и създава усещане за баланс."
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Рефлекторен масаж на лицето и гърба"
										text="Терапията продължава с нежни, ритмични натискания върху лицето и гърба. Масажът носи спокойствие и подпомага отпускането на напрежението."
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/5">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Начало на сесията"
										text="Сесията започва в тиха и спокойна обстановка. Детето избира дали да легне или да седне, според това как се чувства най-добре"
										img="/assets/zvuk-stimul/подобряване-концентрацията.webp"
										alt="Дете се учи да разпознава и назовава емоциите си."
									/>
								</div>
								<div class="w-1/5">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Подготовка за масажа"
										text="На разбираем език терапевтът обяснява какво предстои. След това започва лек контакт с ръцете, загряване с масажното масло или крем, за да се постигне приятно усещане и сигурност по време на масажа."
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
								</div>
								<div class="w-1/5">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Рефлекторен масаж на ходилата"
										text="С нежни кръгови движения се стимулират рефлексните точки по стъпалата, които влияят върху различни системи в тялото и подпомагат мозъчната активност."
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
								</div>
								<div class="w-1/5">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Рефлекторен масаж на ръцете и дланите"
										text="Следва лека работа върху дланите и пръстите, която отпуска, стимулира фината моторика и създава усещане за баланс."
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
								</div>
								<div class="w-1/5">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Рефлекторен масаж на лицето и гърба"
										text="Терапията продължава с нежни, ритмични натискания върху лицето и гърба. Масажът носи спокойствие и подпомага отпускането на напрежението."
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="purple" />


			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-20">
				<H3Blue variant="h2" title="Как терапията помага на твоето дете в 2 стъпки" />
			</AnimatedComponent>

			<div class="max-w-1500px mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h3 class="font-600 text-left pb-2 important-font-size-26px important-leading-35px">Когнитивни умения</h3>
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
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Детето се учи да се концентрира върху поставени задачи за по-дълго време"
										text=""
										img="/assets/zvuk-stimul/подобряване-концентрацията.webp"
										alt="Дете се учи да разпознава и назовава емоциите си."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Подобрява се способността му да филтрира ненужна информация и да се фокусира върху важното"
										text=""
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Развива се умението да превключва внимание между различни дейности"
										text=""
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Детето постепенно се научава да планира и организира действията си"
										text=""
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Детето се учи да се концентрира върху поставени задачи за по-дълго време"
										text=""
										img="/assets/zvuk-stimul/подобряване-концентрацията.webp"
										alt="Дете се учи да разпознава и назовава емоциите си."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Подобрява се способността му да филтрира ненужна информация и да се фокусира върху важното"
										text=""
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Развива се умението да превключва внимание между различни дейности"
										text=""
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Детето постепенно се научава да планира и организира действията си"
										text=""
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="blue" />

			<div class="max-w-1500px mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h3 class="font-600 text-left pb-2 important-font-size-26px important-leading-35px">Емоционално и личностно развитие</h3>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "Review 1" },
										{ name: "Review 2" },
										{ name: "Review 3" },
									]}
								>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Детето започва да се чувства по-уверено в способностите си"
										text=""
										img="/assets/zvuk-stimul/подобряване-концентрацията.webp"
										alt="Дете се учи да разпознава и назовава емоциите си."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="По-лесно се адаптира в различни ситуации и се справя със задачи"
										text=""
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Стимулира се мозъчната активност, свързана с концентрацията и самоконтрола"
										text=""
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/3">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Детето започва да се чувства по-уверено в способностите си"
										text=""
										img="/assets/zvuk-stimul/подобряване-концентрацията.webp"
										alt="Дете се учи да разпознава и назовава емоциите си."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="По-лесно се адаптира в различни ситуации и се справя със задачи"
										text=""
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Стимулира се мозъчната активност, свързана с концентрацията и самоконтрола"
										text=""
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="purple2" />

			<section class="gap-12 xl:px-30">
				<H3Blue variant="h2" title="Първична оценка" />
			</section>

			<div class="flex flex-col justify-center items-center mx-auto px-20px xl:px-30">
				<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:pb-10 md:pt-4 py-5 md:bg-gradient-to-t lg:from-paper lg:to-paper bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
					<div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
						<div class="xl:w-1/2 w-full md:pl-7">
							<p class="c-paper lg:c-paper-inv mb-1">
								В Sense Center предлагаме първична оценка за деца със затруднения в концентрацията, вниманието или когнитивните умения.
							</p>
							<p class="c-paper lg:c-paper-inv">
								По време на консултацията се извършва обследване на поведението и актуалното състояние на детето.
							</p>
							<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Наблюдение на дете с нарушения в развитието" class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
							<p class="c-paper lg:c-paper-inv mb-1">
								Оценяват се когнитивните умения на детето, както и способността за фокусиране и задържане на внимание.
							</p>
							<p class="c-paper lg:c-paper-inv">
								Едновременно с това специалистите интервюират родителите за техните наблюдения и потенциални трудности в детската градина или училище.
							</p>
							<p class="c-paper lg:c-paper-inv">
								На база събраната информация се изготвя индивидуален план за терапия.
							</p>
							<div class="pt-8 flex md:flex-row flex-col justify-center items-center">
								<PuzzleButton />
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Семейство на дете с нарушения в развитието" class="mt-5 w-full h-auto object-cover rounded shadow" />
							<p class="c-paper lg:c-paper-inv italic font-300 mt-2 leading-5 lg:leading-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Препоръчително е да донесете всички налични медицински документи, които могат да бъдат от полза за изясняване на актуалното състояние на детето.
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
						<img class="w-full h-full" src="/assets/zvuk-stimul/кабинет-звукова-стимулация-деца.webp" alt="Когнитивно поведенческа терапия в Sense Center София." />
					</div>
					<div class="xl:w-1/2 w-full pt-20px text-center px-5">
						<div class="">
							<p class="text-left mt-5">
								Специалистите в Sense Center имат богат опит в работата с деца с различни сензорни и когнитивни затруднения. В своята работа те подхождат с любов, търпение и индивидуален подход, за да създадат сигурна и подкрепяща среда. Чрез иновативни техники и упражнения подпомагат развитието на концентрацията, фокуса и когнитивните умения. Така всяко дете получава възможност да се развива според своите възможности и да се чувства уверено.
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
						<StaffContainer
							name="Катя Иванова"
							title="Детски психолог"
							quote="Мисли. Вярвай. Мечтай. Рискувай. - Уолт Дисни"
							paragraphs={[
								"Катя е отдаден специалист с дългогодишен опит в работата с деца и възрастни, преподавателски и управленски опит в сферата на образованието в образованието, държавната администрация и частния сектор. Завършила е магистратура по „Детско-юношеска и училищна психология“ Бургаски свободен университет и „Педагогика“ със специализация „Социална педагогика“ в Софийски университет.",
								"Катя е сертифициран треньор по емоционална интелигентност и специалист по детско-родителски отношения, с подготовка по системна фамилна и арт терапия, тя е и акредитиран лектор към МОН. Автор е на образователни програми и ресурси за деца и родители, а интересите ѝ включват приказкотерапия, работа с МАК карти и терапевтично писане."
							]}
						/>
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
				<H3Blue variant="h2" title="Как протича една сесия по звукова стимулация за деца" />
				<AnimatedComponent>
					<p class="mt-0 mb-10 px-5">
						Звуковата стимулация за деца е иновативен метод, който използва музика и ритъм в комбинация със сензорни занимания, за да подпомогне концентрацията, вниманието и езиковото развитие на детето. Процесът е структуриран, но същевременно гъвкав, за да осигури максимален комфорт и ефективност за детето.
					</p>
				</AnimatedComponent>
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
								class="important-h-550px important-sm:h-680px important-md:h-620px important-lg:h-550px important-xl:h-600px"
								style="background-color:#742C8F;"
								puzzleclass="c-brand w-6 mr-2"
								img="/assets/zvuk-stimul/начало-сесия.webp"
								alt="Начало на сесията"
								title="Начало на сесията"
								desc="Детето бива посрещнато в спокойна обстановка, където може да седне удобно, да легне на пуф или да се движи леко, според това как се чувства най-комфортно."
							/>
							<PuzzleIconReview
								class="important-h-550px important-sm:h-680px important-md:h-620px important-lg:h-550px important-xl:h-600px"
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/zvuk-stimul/слушане-слушалки-костна-проводимост.webp"
								alt="Дете споделя и бива излушано от терапевт."
								title="Слушане със слушалки с костна проводимост"
								desc="Започва основната част - около 30 минути слушане на специално подбрана аудиопрограма с класическа музика, модулирани и природни звуци, които стимулират мозъчната активност и подпомагат релаксацията."
							/>
							<PuzzleIconReview
								class="important-h-550px important-sm:h-680px important-md:h-620px important-lg:h-550px important-xl:h-600px"
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/zvuk-stimul/леки-дейноти-звукова-терапия.webp"
								alt="Дете по време на когнитивна работа с карти."
								title="Ангажираност чрез леки дейности"
								desc="Докато слуша, детето може да рисува, да моделира, да работи със сензорни играчки или просто да се отпусне според собственото си желание."
							/>
							<PuzzleIconReview
								class="important-h-550px important-sm:h-680px important-md:h-620px important-lg:h-550px important-xl:h-600px"
								style="background-color:#FA7402;"
								puzzleclass="c-brand-blue w-6 mr-2"
								img="/assets/zvuk-stimul/упражнение-телесна-перкусия.webp"
								alt="Дете упражнява нови реакции и учи стратегии за справяне с тревожност, стрес и социални ситуации."
								title="Телесна перкусия"
								desc="След музикалната част следва кратка телесна перкусия – ритмични упражнения, които стимулират вниманието и усещането за ритъм."
							/>
							<PuzzleIconReview
								class="important-h-550px important-sm:h-680px important-md:h-620px important-lg:h-550px important-xl:h-600px"
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/zvuk-stimul/терапия-барабани.webp"
								alt="Край на когнитивно поведенческа сесия."
								title="Работа с барабан"
								desc="Детето повтаря зададени от терапевта ритми. Постепенно задачите се усложняват, за да подпомогнат концентрацията, моторните умения и когнитивното развитие."
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
						bgImage="/assets/zvuk-stimul/иновативни-методи-звукова-терапия.webp"
						bgSize="600%"
						bgPosition="right 70% top 10%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/zvuk-stimul/иновативни-методи-звукова-терапия.webp" alt="Иновативни когнитивно поведенчески подходи." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10 md:mt-0">
								Звуковата стимулация използва съвременни технологии и ритмично-музикални подходи, за да активира мозъчната пластичност и да подпомогне езиковото, емоционалното и когнитивното развитие.
							</p>
							<p>
								Всяка програма за звукова стимулация се подбира индивидуално, според нуждите на детето – което прави терапията ефективна и приятна.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-50">
				<H3Pink title="3+ инструмента, които правят терапията ефективна" />
				<div class="mx-auto px-5">
					<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-12 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full md:pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Слушалки с костна проводимост</h4>
							<div>
								<p class="text-left">
									Специализирани слушалки, които осигуряват правилно предаване на звуковите честоти директно към мозъка с цел стимулиране на различни области на слуховия апарат и нервната система.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/zvuk-stimul/слушалки-костна-проводимост-терапия.webp" alt="Специализирани макети на дома за игра в Sense Center." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="xl:px-30 px-5 mx-20px md:pt-50">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full md:pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Барабан</h4>
							<div>
								<p class="text-left">
									Чрез ритъм и повторение се развиват вниманието, моторната координация и умението за фокус. Работата с барабан развива не само слуховите умения, но и емоционалната регулация, тъй като ритмичното удряне има успокояващ ефект върху нервната система.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/zvuk-stimul/звукова-терапия-барабани.webp" alt="Дете упражнява самурегулацията си." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="xl:px-30 pb-5 px-5 mx-20px md:pt-50">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-12 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Сензорни играчки и материали</h4>
							<div>
								<p class="text-left">
									Сензорните играчки и материали включват топки, глина, рисуване и игри за фината моторика, които се използват по време на звуковите сесии. Те осигуряват тактилна стимулация и помагат на децата да останат ангажирани и фокусирани, докато слушат терапевтичните звукови програми. Подпомагат мултисензорната интеграция и подобряват ефективността на звуковата стимулация.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/zvuk-stimul/сензорни-играчки-звукова-терапия.webp" alt="Деца играят ролеви игри в детски Sense Center." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 px-5 mx-20px md:pt-50 pb-5">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full md:pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Сортери</h4>
							<div>
								<p class="text-left">
									Сортерите са терапевтични играчки с различни форми, цветове и размери, които развиват слухово-визуалната координация, логическото мислене и концентрацията чрез комбиниране на звукова стимулация с когнитивни задачи за класификация и сортиране.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/zvuk-stimul/дете-сортери-терапия.webp" alt="Дете упражнява самурегулацията си." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink2" />

			<section class="xl:px-30 mx-20px">
				<div class="mx-auto">
					<AnimatedComponent class="mb-10 mt-10 md:mt-30 lg:w-800px mx-auto">
						<div class="flex flex-col justify-center items-start b-rd-12px bg-brand px-10 py-4">
							<p class="font-size-22px uppercase c-paper font-500 mb-0 tracking-0.5px font-[MYRIADPRO-Semibold]">УСТОЙЧИВО РАЗВИТИЕ</p>
							<p class="c-paper font-300 font-[MYRIADPRO-Light]">Използването на подходящо оборудване е ключов елемент в терапията със звукова стимулация за деца. Чрез комбинация от висококачествени аудио инструменти и индивидуален подход се постигат устойчиви резултати в развитието на слуховите и сензорните умения на всяко дете.
							</p>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue" />

			<div class="xl:px-30 mx-20px md:px-20px md:px-0">
				<H3Blue variant="h2" title="Спокойна и стимулираща среда за децата" />
				<div class="md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<AnimatedComponent class="px-5 flex flex-col gap-1">
						<div>
							<img class="w-full h-full" src="/assets/zvuk-stimul/звукова-стимулация-за-деца.webp" alt="Спокойна и стимулираща среда за деца." />
						</div>
						<p class="mt-5">
							Центърът включва 14 специализирани терапевтични кабинета, стая за отдих и социализация, както и удобен паркинг за посетители.
						</p>
						<div class="my-5">
							<GallerySlider3
								imgs={[
									{ src: "/assets/zvuk-stimul/системи-звукова-стимулация-сензорна-зала.webp", alt: "Кабинет за психомоторна терапия." },
									{ src: "/assets/zvuk-stimul/програма-звукова-стимулация.webp", alt: "Кабинет за терапия по психомоторика." },
									{ src: "/assets/zvuk-stimul/апарат-звукова-магнитна-стимулация.webp", alt: "Стая за психомоторна терапия." },
								]}
							/>
						</div>
						<p class="md:mt-6 mt-0">
							Кабинетите са специално проектирани за различни видове звукова стимулация за деца с разнообразна колекция от музикални инструменти и аудио материали за всяка възраст. Всеки кабинет е оборудван с професионални и разнообразни инструменти за слухово развитие и сензорна интеграция. Всеки кабинет е оборудван с професионални системи за звукова и магнитна стимулация за сензорна зала и разнообразни инструменти за слухово развитие и сензорна интеграция.
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
							<p class="mt-0">Ще обсъдим актуалното състояние на детето и ще организираме час за първична оценка, на която ще се запознаем с уменията на детето към настоящия момент, неговите дефицити и трудности в областта на звуковата обработка.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">На база Вашата заявка за напредъка, който искате да постигнем и нашето наблюдение по време на оценката, препоръчваме подходящи терапии със звукова стимулация и честота на посещенията.</p>
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
								Резултати от терапията със звукова стимулация за деца
							</>
						}
						title="психомоториката"
						bgImage="/assets/zvuk-stimul/резултати-звукова-терапията.webp"
						bgSize="700%"
						bgPosition="right 45% top 55%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/zvuk-stimul/резултати-звукова-терапията.webp" alt="Положителни резултати на дете след терапия по психомоторика." class="saturate-110 w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10 md:mt-0">
								Чрез индивидуален план за терапия със звукова стимулация, с редовни сесии и подкрепа от семейството, децата постигат стабилен напредък в развитието на слуховите възприятия и сензорната обработка.
							</p>
							<p class="mt--1">
								Постепенно започват да разпознават звуковите модели по-точно, да обработват слуховата информация по-ефективно и да реагират подходящо на звукови стимули. Успоредно с това се развиват социалните и когнитивни умения, като концентрация, логическо мислене и самоувереност.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-40">
				<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="xl:w-1/2 w-full">
						<img class="w-full h-full" src="/assets/zvuk-stimul/терапията-звукова-стимулация-деца.webp" alt="Щастливи деца след психомоторна терапия в Sense Center." />
					</div>
					<div class="xl:w-1/2 w-full pt-20px text-center px-5">
						<div class="">
							<p class="text-left mt-5">
								Всяко дете е уникално и напредва със собствено темпо, затова терапията със звукова стимулация се адаптира спрямо индивидуалните му нужди и ритъм на развитие.
							</p>
							<p class="text-left">
								Макар при някои деца резултатите да не са моментални, с постоянство и професионална подкрепа, подобрението в слуховата обработка е видимо и трайно.
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
									{ name: "Review 6" },
								]}
							>
								<ReviewPuzzlePiece
									style="background-color:#088F9D;"
									puzzleclass="c-brand-pink w-6 mr-2"
									title="“Дъщеря ми има огромен напредък”"
									desc={<>
										Страхотни професионалисти !!!Дъщеря ми има огромен напредък .Посещава ги с удоволствие .Все по уверена и спокойна е след всяка среща .Благодаря от сърце че ви има !!!
									</>}
									name="Desi Doncheva"
									condition=""
									href="https://maps.app.goo.gl/idAuSMS1h2pvzCN38"
								/>
								<ReviewPuzzlePiece
									style="background-color:#FA7402;"
									puzzleclass="c-brand-purple w-6 mr-2"
									title="“Развитие и забавление в едно!”"
									desc={<>
										Развитие и забавление в едно!<br />
										Моето дете обожава заниманията в Sense Center! Откакто посещаваме центъра, виждам значителен напредък в неговите социални и творчески умения. Програмите са разнообразни и поднесени по много достъпен начин.

									</>}
									name="Viktoria Lybomir"
									condition=""
									href="https://maps.app.goo.gl/fx53o98wAjqbDHFd8"
								/>
								<ReviewPuzzlePiece
									style="background-color:#E11172;"
									puzzleclass="c-brand-blue w-6 mr-2"
									title="“Препоръчвам силно”"
									desc={<>
										Детето ми посещава центъра от 4 месеца. Забелязваме напредък в комуникативните умения и изпълнението на ежедневни дейности. Препоръчвам силно, най-вече заради екипът от специалисти, които са винаги топли и приветливи❤️. Посрещнаха ни с много разбиране.<br />
										Благодарим Ви!
									</>}
									name="Божана Михайлова"
									condition=""
									href="https://maps.app.goo.gl/1zy2Sq4Sf4QZf1qb6"
								/>
								<ReviewPuzzlePiece
									style="background-color:#742C8F;"
									puzzleclass="c-brand-orange w-6 mr-2"
									title="“Прекрасни са...”"
									desc={<>
										Ванеса посещава център Сенс от 3 месеца много съм доволна от начина на общуване и комуникационни умения от страна на специалистите много е важно с любов да се подхожда да се изгражда доверие между детето и специалиста прекрасни са...При Ванеса се наблюдава изключително желание за комуникация макар и с жестове също така и очен контакт.
									</>}
									name="Милица Иванова"
									condition=""
									href="https://maps.app.goo.gl/VS68Sztz1V69vJSB8"
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
								<ReviewPuzzlePiece
									style="background-color:#E11172;"
									puzzleclass="c-brand-blue w-6 mr-2"
									title="“Има значителен напредък”"
									desc={<>
										Детето ми посещава центъра вече 5 месеца и има значителен напредък. Има интерес към всичко около него,очен контакт,опитва се да говори.Препоръпвам с две ръце центъра.Страхотни хора и професионалисти!
									</>}
									name="Лилия Жекова"
									condition=""
									href="https://maps.app.goo.gl/aLwfs6wFrcxhtC6P6"
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
