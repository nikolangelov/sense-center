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
								Подкрепете потенциала на детето с иновативна аудио терапия
							</div>
						</div>

						<h1
							class={`important-delay-300 text-center mb-0 important-font-size-5.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 important-leading-5 transition-colors duration-500 important-font-[MYRIADPRO-Light] ${isPlayingHero()
								? 'text-brand'
								: 'text-white'}`}>
							Звукова стимулация за деца
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
				<H3Pink variant="h2" title="Заедно развиваме слуха, концентрацията и емоционалния баланс" />
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
										title="Над 200 деца подобриха концентрацията и вниманието си"
										text="Научиха се да се фокусират за по-дълго време, да регулират емоциите си по-добре и да общуват по-спокойно."
										img="/assets/zvuk-stimul/подобрение-звукова-стимулация-деца.webp"
										alt="Индивидуален план за когнитивно-поведенческа терапия на всяко дете."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#E11172;"
										title="Богат опит с различни сензорни затруднения"
										text="Работим с деца с ADHD, свръхчувствителност към звуци, тревожност и трудности в сензорната обработка."
										img="/assets/zvuk-stimul/различни-сензорни-затруднения.webp"
										alt="Когнитивно поведенческа терапия."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#088F9D;"
										title="Иновативни методи за звукова стимулация"
										text="Чрез слушалки с костна проводимост, детето слуша аудиопрограма със специални честоти и ритми, стимулиращи мозъка, тялото и развитието му."
										img="/assets/zvuk-stimul/иновативен-методи-звукова-стимулация.webp"
										alt="Дете с тревожност, страхове, трудности в общуването по време на когнитивно-поведенческа терапия."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#FA7402;"
										title="Персонализиран план за работа"
										text="Всяка програма за звукова стимулация е съобразен със специфичните нужди на детето и целите на терапията, за да постигне максимален напредък."
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
										title="Над 200 деца подобриха концентрацията и вниманието си"
										text="Научиха се да се фокусират за по-дълго време, да регулират емоциите си по-добре и да общуват по-спокойно."
										img="/assets/zvuk-stimul/подобрение-звукова-стимулация-деца.webp"
										alt="Индивидуален план за когнитивно-поведенческа терапия на всяко дете."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#E11172;"
										title="Богат опит с различни сензорни затруднения"
										text="Работим с деца с ADHD, свръхчувствителност към звуци, тревожност и трудности в сензорната обработка."
										img="/assets/zvuk-stimul/различни-сензорни-затруднения.webp"
										alt="Когнитивно поведенческа терапия."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#088F9D;"
										title="Иновативни методи за звукова стимулация"
										text="Чрез слушалки с костна проводимост, детето слуша аудиопрограма със специални честоти и ритми, стимулиращи мозъка, тялото и развитието му."
										img="/assets/zvuk-stimul/иновативен-методи-звукова-стимулация.webp"
										alt="Дете с тревожност, страхове, трудности в общуването по време на когнитивно-поведенческа терапия."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-50 important-md:h-55 important-sm:h-32 important-h-60"
										style="background-color:#FA7402;"
										title="Персонализиран план за работа"
										text="Всяка програма за звукова стимулация е съобразен със специфичните нужди на детето и целите на терапията, за да постигне максимален напредък."
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
									При нас идват деца, които срещат трудности с концентрацията, сензорната обработка или емоционалната регулация. Предлагаме звукова стимулация за деца, съобразена с нуждите на всяко дете – при ADHD, свръхчувствителност към звуци, тревожност, забавено говорно развитие и други сензорни предизвикателства. Вярваме, че с индивидуален подход и подкрепата на опитен терапевт всяко дете може да развие вътрешно спокойствие и да се чувства спокойно.
								</p>
								<p class="important-font-[MYRIADPRO-Bold] tracking-0.2px">
									Звуковата стимулация като терапия се препоръчва при:
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
											Синдром<br />на Даун
										</a>
									</div>
								</div>

								<div class="flex flex-col sm:flex-row justify-center gap-2 max-w-600px">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-24 xl:w-20 h-16">
											СОП
										</a>
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-42 h-16">
											Синдром на Рет
										</a>
									</div>
									<div class="flex gap-2">
										<a href="/" class="flex justify-center items-center sm:bg-brand-blue sm:hover:bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-34 xl:w-28 h-16">
											Заекване
										</a>
										<a href="/" class="flex justify-center items-center sm:bg-brand sm:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-32 xl:w-34 h-16">
											Синдром<br />на Аспергер
										</a>
									</div>
								</div>

								<div class="flex flex-col sm:flex-row justify-center gap-2 mb-4 max-w-600px">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center sm:bg-brand sm:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-30 xl:w-28 h-16">
											Дислексия
										</a>
										<a href="/" class="flex justify-center items-center sm:bg-brand-blue sm:hover:bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-36 xl:w-32 h-16">
											Дискалкулия
										</a>
									</div>
									<div class="flex gap-2">
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-34 xl:w-30 h-16">
											Дисграфия
										</a>
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-32 xl:w-34 h-16">
											Диспраксия
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
							<p class="pb-0 mb-5 md:mt-0">Ако не се обърне внимание на затрудненията с концентрацията, езика или сетивната обработка в ранна възраст,  те могат да повлияят сериозно върху развитието на детето и да доведат до:</p>
						</div>
						<div class="w-full">
							<ul style="list-style-type: none;" class="flex flex-col gap-2">
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">трудности в ученето и усвояването на знания</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">повишена тревожност и стрес в ежедневието</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">проблеми в регулирането на емоциите и поведението</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">трайни затруднения в социалното взаимодействие</p>
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
						<p class="font-size-15px c-paper mt-2">Ето защо колкото по-рано бъде започната звукова стимулация за деца, толкова по-голяма е възможността за видимо подобрение на състоянието и напредване в развитието.</p>
					</div>
				</AnimatedComponent>
			</section>

			<section class="relative pt-10 xl:px-30 mx-20px">
				<H3Pink variant="h2" title="По пътя към увереност и концентрация" />
				<BackgroundIcons />
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px mb-2">
						<img src="/assets/zvuk-stimul/упражнение-телесна-перкусия.webp" alt="Дете по време на поведенческа терапия." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-9">
								Звуковата стимулация за деца е иновативна терапия, насочена към подобряване на сензорната обработка, концентрацията и емоционалното регулация. Тя включва специално подбрана музика, ритмични упражнения и индивидуален подход за стимулиране на мозъчната активност.
							</p>
							<p>
								Нашите терапевти са обучени да работят както с деца в норма, така и с деца със специални образователни потребности (СОП). Целта на специалистите е да подпомогнат сензорното развитие и емоционалното благополучие на децата в ежедневната и образователната среда.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-20">
				<H3Blue variant="h2" title="Как звуковата стимулация помага на твоето дете в 2 стъпки" />
			</AnimatedComponent>

			<div class="max-w-1500px md:pt-10 mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h3 class="font-600 text-left pb-2 mt-0 important-font-size-26px important-leading-35px">Когнитивни и комуникативни умения</h3>
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
										title="Подобрява се концентрацията и вниманието в ежедневието"
										text=""
										img="/assets/zvuk-stimul/подобряване-концентрацията.webp"
										alt="Дете се учи да разпознава и назовава емоциите си."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Стимулира се слуховата преработка и езиковите умения"
										text=""
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-37"
										style="background-color:#E11172;"
										title="Стимулира мозъчната пластичност и подпомага изграждането на нови невронни връзки."
										text=""
										img="/assets/zvuk-stimul/стимулиране-мозъчната-пластичност.webp"
										alt="Развиване на умения за контрол върху импулсивното поведение."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/3">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-30 important-md:h-35 important-sm:h-20 important-h-50"
										style="background-color:#E11172;"
										title="Подобрява се концентрацията и вниманието в ежедневието"
										text=""
										img="/assets/zvuk-stimul/подобряване-концентрацията.webp"
										alt="Дете се учи да разпознава и назовава емоциите си."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-50"
										style="background-color:#E11172;"
										title="Стимулира се слуховата преработка и езиковите умения"
										text=""
										img="/assets/zvuk-stimul/стимулиране-слуховата-прераб.webp"
										alt="Дете овладява тревожността и страховете чрез практически техники в Sense Center."
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-35 important-md:h-40 important-sm:h-20 important-h-50"
										style="background-color:#E11172;"
										title=" Стимулира мозъчната пластичност и подпомага изграждането на нови невронни връзки"
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

			<DoodleDecor variant="purple" />

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
										style="background-color:#088F9D;"
										title="Детето се отпуска, тревожността и хиперактивността намаляват"
										text=""
										img="/assets/zvuk-stimul/дете-се-отпуска-звукова-терапия.webp"
										alt="Подобряване на уменията за общуване и групова работа."
										class2="important-xl:h-25 important-lg:h-25 important-md:h-30 important-sm:h-15 important-h-30"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Подобрява емоционалния баланс"
										text=""
										img="/assets/zvuk-stimul/дете-подобрява-емоционалния-баланс.webp"
										alt="Дете се учи да решава конфликти и да изгражда приятелства."
										class2="important-xl:h-25 important-lg:h-25 important-md:h-30 important-sm:h-15 important-h-30"
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Повишават се увереността и самочувствието"
										text=""
										img="/assets/zvuk-stimul/дете-повишават-увереността-самочувствието.webp"
										alt="Развиване на способности за планиране, концентрация и организация."
										class2="important-xl:h-25 important-lg:h-25 important-md:h-30 important-sm:h-15 important-h-30"
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/3">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Детето се отпуска, тревожността и хиперактивността намаляват"
										text=""
										img="/assets/zvuk-stimul/дете-се-отпуска-звукова-терапия.webp"
										alt="Подобряване на уменията за общуване и групова работа."
										class2="important-xl:h-25 important-lg:h-25 important-md:h-30 important-sm:h-15 important-h-30"
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Подобрява емоционалния баланс"
										text=""
										img="/assets/zvuk-stimul/дете-подобрява-емоционалния-баланс.webp"
										alt="Дете се учи да решава конфликти и да изгражда приятелства."
										class2="important-xl:h-25 important-lg:h-25 important-md:h-30 important-sm:h-15 important-h-30"
									/>
								</div>
								<div class="w-1/3">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Повишават се увереността и самочувствието"
										text=""
										img="/assets/zvuk-stimul/дете-повишават-увереността-самочувствието.webp"
										alt="Развиване на способности за планиране, концентрация и организация."
										class2="important-xl:h-25 important-lg:h-25 important-md:h-30 important-sm:h-15 important-h-30"
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
								В Sense Center предлагаме първична оценка за деца със затруднения в концентрацията, сензорната обработка или емоционалната регулация.
							</p>
							<p class="c-paper lg:c-paper-inv">
								По време на консултацията се извършва обследване на поведението и актуалното състояние на детето.
							</p>
							<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Наблюдение на дете с нарушения в развитието" class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
							<p class="c-paper lg:c-paper-inv mb-1">
								Оценяват се реакциите към различни звуци и общото емоционално състояние на детето.
							</p>
							<p class="c-paper lg:c-paper-inv">
								Едновременно с това специалистите интервюират родителите за техните наблюдения и потенциални трудности в детската градина или училище.
							</p>
							<p class="c-paper lg:c-paper-inv">
								На база събраната информация се изготвя индивидуална програма за звукова стимулация.
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
								Специалистите по звукова стимулация в Sense Center имат богат опит в работата с деца с различни сензорни и концентрационни затруднения. В своята работа те подхождат с любов, търпение и индивидуален подход, за да създадат успокояваща и подкрепяща среда. Чрез специализирана музика, ритмични упражнения и иновативни техники подпомагат развитието на концентрацията, сензорната интеграция и емоционалния баланс. Така всяко дете получава възможност да се чувства спокойно и уверено.
							</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<section class="xl:px-30 mx-20px pt-20">
				<div class="mx-auto px-5">
					<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<h3 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Марчела Йорданова</h3>
							<p class="pb-5 important-font-[MYRIADPRO-Regular]">Главен логопед</p>
							<div class="">
								<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
							</div>
							<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Вярвам, че най-големите промени се постигат чрез малки, но целенасочени и добре обмислени стъпки, подкрепени с доверие и сътрудничество”</p>
							<div class="w-full pb-20px pt-20px md:pt-30px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0">
										Марчела Йорданова е управител и главен логопед в Sense Center, който повече от десетилетие подкрепя деца и семейства в развитието им. В своята практика тя работи както с деца в ранна възраст, така и с ученици, като през последните години професионалният ѝ фокус е насочен основно към деца със специални образователни потребности.
									</p>
									<p class="text-left mt-1">
										Завършила е бакалавърска степен по „Социална педагогика“ и магистратура по „Логопедия“. Тя е сертифициран терапевт за оценяване на ранното детско развитие с Denver II, както и сертифициран терапевт по звукова стимулация за деца към Advanced Brain Technologies по програмите The Listening Program® и inTime. Допълнително е преминала обучение за работа на гореща телефонна линия с пострадали от насилие.
									</p>
									<p class="text-left mt-1">
										Марчела има богат опит в създаването и прилагането на индивидуални терапевтични програми, като винаги работи в тясно сътрудничество с родители и терапевти. Вярва, че най-големите промени започват с малки, но последователни стъпки, подкрепени с доверие и сътрудничество. Нейната мисия е да върви рамо до рамо с децата и техните семейства – с разбиране, професионална грижа и любов.
									</p>
								</div>
							</div>
						</div>
					</div>
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
