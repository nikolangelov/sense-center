import "solid-slider/slider.css";
import { GoogleStarReview, PuzzleIconReview, ReviewSlider, ReviewSlider3, StaffSlider, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink, H3SolidPink } from '../../components/H2WithImage';
import { ContainerBox, ContainerSlider, ReviewPuzzlePiece } from "../../components/ContainerSlider";
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { Collapse } from "../../components/FAQ";
import { VideoHero } from "../../components/HeroVideo";
import { createSignal } from 'solid-js';

const workingHours = [
	{ day: "звукова стимулация", bgClass: "bg-brand-pink/70", bgImage: "/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" },
	{ day: "детски логопед", bgClass: "bg-brand-blue/70", bgImage: "/assets/detsa-s-autizam/поставяне-диагноза-дете-аутизъм.webp" },
	{ day: "многофункционална стая", bgClass: "bg-brand-orange/70", bgImage: "/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp" },
	{ day: "ерготерапия", bgClass: "bg-brand-pink/70", bgImage: "/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" },
	{ day: "тъмна сензорна стая", bgClass: "bg-brand-purple/70", bgImage: "/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp" },
	{ day: "обучение за концентрация и внимание", bgClass: "bg-brand-orange/70", bgImage: "/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp" },
	{ day: "Психомоторна терапия", bgClass: "bg-brand-pink/70", bgImage: "/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp" },
	{ day: "детски психолог", bgClass: "bg-brand-blue/70", bgImage: "/assets/detsa-s-autizam/поставяне-диагноза-дете-аутизъм.webp" },
	{ day: "развитие на емоционална интелигентност", bgClass: "bg-brand-purple/70", bgImage: "/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" },
];

function ServicesTable() {
	return (
		<div class="w-85% md:w-full max-w-xl mx-auto py-4 mt--8">
			<div class="space-y-3">
				{workingHours.map(({ day, bgClass, bgImage }) => (
					<AnimatedComponent class="relative rounded-12px overflow-hidden">
						<a href="/" class="cusror-pointer relative rounded-12px overflow-hidden">
							<div
								class="absolute inset-0 bg-cover bg-center"
								style={{ "background-image": `url(${bgImage})` }}
							></div>

							<div class={`absolute inset-0 ${bgClass}`}></div>

							<div class="absolute inset-0 opacity-10">
								<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
									<defs>
										<pattern id={`pattern-${day}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
											<circle cx="20" cy="20" r="15" fill="none" stroke="white" stroke-width="1" opacity="0.3" />
											<circle cx="5" cy="5" r="3" fill="white" opacity="0.2" />
											<circle cx="35" cy="35" r="3" fill="white" opacity="0.2" />
										</pattern>
									</defs>
									<rect width="100%" height="100%" fill={`url(#pattern-${day})`} />
								</svg>
							</div>

							<div class="relative z-10 py-5 px-6 flex justify-center items-center text-white">
								<div class="font-[MyriadPro-SemiboldCond] uppercase c-paper important-font-size-24px pt-1px">
									{day}
								</div>
							</div>
						</a>
					</AnimatedComponent>
				))}
			</div>
		</div>
	);
}

function SingleCollapse() {
	return (
		<>
			<div class="flex flex-col gap-5 md-gap-2 cursor-pointer max-w-1200px mx-auto">
				<Collapse title="1. На каква възраст детето може да започне да посещава практическите занимания за деца с аутизъм?" desc="Няма ограничение във възрастта за стартиране на практически занимания за деца с аутизъм. Въпреки това градинската терапия, музикотерапията и арт терапията се препоръчват след като детето навърши 3-4 годишна възраст." />


				<Collapse title="2. Подходящи ли са заниманията за моето дете с тежка форма на аутизъм?" desc="Да. Програмата е адаптивна и се съобразява с индивидуалните нужди на всяко дете. Всеки план е персонализиран, за да се постигнат устойчиви резултати." />

				<Collapse title="3. Каква е разликата между практическите и основните терапии?" desc="Практическите занимания за деца с аутизъм дават възможност на децата да прилагат наученото в реална среда чрез творчески и игрови дейности. Основните терапии, като звукова стимулация, детски логопед, ерготерапия и други, изграждат стабилна основа за развитие, като подобряват речта, вниманието, координацията и емоционалното състояние. Комбинацията от двата вида терапии е доказано най-ефективна за постигане на устойчиви резултати." />

				<Collapse title="4. Какви занимания се практикуват в експерименталната стая за обучение и развитие?" desc="В експерименталната стая за обучение и развитие децата участват в специално подбрани игри и упражнения, които им помагат да преодоляват чувствителности и страхове. Заниманията за деца с аутизъм  включват игри с вода, рисуване с ръце и докосване на различни текстури за постепенно намаляване на непоносимости, ролеви игри с кукли и въображаеми ситуации за развитие на социални умения, както и контролирано излагане на звуци, светлини и движения, което учи детето да се справя по-спокойно с различни стимули." />

				<Collapse title="5. Какви са специалистите, които работят с децата?" desc="Нашите специалисти са опитни психолози с дълбоки познания в областта на детската терапия. Те използват иновативни подходи като музикотерапия, арт терапия, експозиционна терапия и градинска терапия, като адаптират всяка дейност според индивидуалните нужди на детето." />

				<Collapse title="6. Колко време продължава едно практическо занимание за деца с аутизъм?" desc="Обикновено сесиите по музикотерапия при аутизъм, арт терапия и останалите  занимания за деца с аутизъм се провеждат в рамките на 40 минути." />

				<Collapse title="7. Могат ли родителите да присъстват по време на практическите занимания за деца с аутизъм?" desc="В Sense Center препоръчваме родителите да не присъстват на терапевтичните сесии, за да гарантираме ефективността на процеса.">
					<div class="mt-4">Присъствието на родител по време на практическите занимания за деца с аутизъм може да отклони фокуса на детето, особено при по-малките, които често стават зависими от сигурността на родителската фигура. Това може да ограничи тяхната самостоятелност и активност в терапията. Също така, когато родителят е в стаята, за терапевта е по-трудно да изгради авторитет, което е важно за успешното взаимодействие с детето.</div>
					<div class="mt-4">Родителите обаче играят ключова роля извън терапевтичните сесии. Затова редовно ги информираме за напредъка на детето и подходите, които могат да приложат у дома, за да подкрепят процеса. Този баланс между терапевтичната работа и родителската подкрепа е ключов за успеха.</div>
				</Collapse>

				<Collapse title="8. Колко често трябва да се посещават практическите занимания за деца с аутизъм?" desc="Честотата на посещенията зависи от индивидуалните нужди на детето и формата на аутизъм." />

				<Collapse title="9. Има ли възможност за провеждане на заниманията онлайн?" desc="Не, към момента не провеждаме терапии онлайн, практическите занимания за деца с аутизъм се извършват на място в нашия кабинет с детски психолог в София на адрес – гр. София, бул. „Никола Петков“ 95a." />

				<Collapse title="10. Какво трябва да носим за първата сесия практични занимания за деца с аутизъм?" desc="Не е необходимо да носите нещо специално. Терапевтът използва разнообразни ресурси под формата на игра, за да направи посещението интересно и приятно за детето." />

				<Collapse title="11. Какво включва първичната оценка на детето?" desc="Първичната оценка обикновено включва:">
					<div class="mt-4">
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
								<span class="font-[MYRIADPRO-Bold]">Обратна връзка</span> – В края на оценката терапевтът предоставя на родителите обобщение и препоръки за работа вкъщи, включително подходящ терапевтичен план за подкрепа.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="12. Каква информация трябва да предоставя по време на първичната оценка на детето?" desc="По време на първичната оценка на актуалното състояние е необходимо да споделите:">
					<div class="mt-4">
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
					<div class="mt-4">Тази информация ще ни помогне да създадем персонализиран и по-ефективен план за терапия за Вашето дете.</div>
				</Collapse>

				<Collapse title="13. Има ли дейности или упражнения, които мога да правя с детето си, за да подкрепя напредъка му?" desc="Да, специалист от Sense Center ще Ви предостави подходящи насоки и ресурси за подпомагане на развитието на детето в домашни условия." />
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
					videoSrc="/assets/pr-zan-za-detsa-s-aut/Сенс-Център-Практически-Занимания-1.mp4"
					videoSrcMobile="/assets/pr-zan-za-detsa-s-aut/Сенс-Център-Практически-Занимания-Мобилно-1.mp4"
					gifPreview="/assets/pr-zan-za-detsa-s-aut/Сенс-Център-Практически-Занимания.mp4"
					gifPreviewMobile="/assets/pr-zan-za-detsa-s-aut/Сенс-Център-Практически-Занимания-Мобилно.mp4"
					isPlaying={isPlayingHero()}
					onPlay={() => setIsPlayingHero(true)}
				/>

				<div class="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-end pb-18 md:pb-10 text-center px-4 text-white">
					<div class={`absolute ${isPlayingHero() ? 'top-[102%] sm:top-[105%] lg:top-[105%] mt-[30px]' : 'top-[46%] md:top-[60%] mt-0'}`}>
						<div>
							<div class={`mb-3 transition-colors duration-500 text-[48px] md:text-[90px] leading-[46px] md:leading-[90px] font-['MYRIADPRO-Bold'] text-center px-2 md:px-10 ${isPlayingHero() ? 'inline-block pb-[0.2em] bg-gradient-to-r from-[#E11172] to-[#FFAE01] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]' : 'text-white'}`}>
								Помагаме на децата с аутизъм да станат по-уверени и общителни
							</div>
						</div>

						<h1
							class={`important-delay-300 text-center mb-0 important-font-size-5.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 important-leading-5 transition-colors duration-500 important-font-[MYRIADPRO-Light] ${isPlayingHero()
								? 'text-brand'
								: 'text-white'}`}>
							Практически занимания<br />за деца с аутизъм
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
				<H3Pink variant="h2" title="Заедно изграждаме умения за саморегулация и справяне с трудностите" />
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
										class2="important-xl:h-60 important-lg:h-55 important-md:h-55 important-sm:h-40 important-h-60"
										style="background-color:#088F9D;"
										title="Над 200 деца преодоляха трудностите"
										text="С помощта на опитни терапевти и разнообразни практически занимания за деца с аутизъм децата развиха социални умения, подобриха концентрацията си и станаха по-уверени в ежедневието."
										img="/assets/pr-zan-za-detsa-s-aut/дете-преодолява-трудностите.webp"
										alt="Дете преодолява трудностите при аутизъм. "
									/>
									<ContainerBox
										class2="important-xl:h-60 important-lg:h-55 important-md:h-55 important-sm:h-40 important-h-60"
										style="background-color:#742C8F;"
										title="Индивидуален подход според нуждите"
										text="Вярваме, че всяко дете е уникално, затова нашият подход е гъвкав и съобразен, спрямо индивидуалните нужди и потребности на всяко дете."
										img="/assets/pr-zan-za-detsa-s-aut/индивидуален-подход-според-нуждите.webp"
										alt="Индивидуален подход според нуждите на всяко дете."
									/>
									<ContainerBox
										class2="important-xl:h-60 important-lg:h-55 important-md:h-55 important-sm:h-40 important-h-60"
										style="background-color:#E11172;"
										title="Създаваме безопасна и подкрепяща среда"
										text="В Sense Center, ние създаваме безопасна и подкрепяща среда, където всяко дете може свободно да изразява себе си, да се развива и да учи с увереност."
										img="/assets/pr-zan-za-detsa-s-aut/дете-безопасна-подкрепяща-среда.webp"
										alt="Дете в безопасна и подкрепяща среда."
									/>
									<ContainerBox
										class2="important-xl:h-60 important-lg:h-55 important-md:h-55 important-sm:h-40 important-h-60"
										style="background-color:#FA7402;"
										title="Практическа програма с реални резултати"
										text="Използваме методи като арт терапия, градинска терапия, музикотерапия и творчество, които насърчават развитието на детето и доверието към терапевта."
										img="/assets/pr-zan-za-detsa-s-aut/реални-резултати-дете-аутизъм.webp"
										style2="filter: saturate(120%);"
										alt="Реални резултати на дете с аутизъм."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-65 important-lg:h-55 important-md:h-50 important-sm:h-40 important-h-55"
										style="background-color:#088F9D;"
										title="Над 200 деца преодоляха трудностите"
										text="С помощта на опитни терапевти и разнообразни практически занимания за деца с аутизъм децата развиха социални умения, подобриха концентрацията си и станаха по-уверени в ежедневието."
										img="/assets/pr-zan-za-detsa-s-aut/дете-преодолява-трудностите.webp"
										alt="Дете преодолява трудностите при аутизъм. "
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-65 important-lg:h-55 important-md:h-50 important-sm:h-40 important-h-55"
										style="background-color:#742C8F;"
										title="Индивидуален подход според нуждите"
										text="Вярваме, че всяко дете е уникално, затова нашият подход е гъвкав и съобразен, спрямо индивидуалните нужди и потребности на всяко дете."
										img="/assets/pr-zan-za-detsa-s-aut/индивидуален-подход-според-нуждите.webp"
										alt="Индивидуален подход според нуждите на всяко дете."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-65 important-lg:h-55 important-md:h-50 important-sm:h-40 important-h-55"
										style="background-color:#E11172;"
										title="Създаваме безопасна и подкрепяща среда"
										text="В Sense Center, ние създаваме безопасна и подкрепяща среда, където всяко дете може свободно да изразява себе си, да се развива и да учи с увереност."
										img="/assets/pr-zan-za-detsa-s-aut/дете-безопасна-подкрепяща-среда.webp"
										alt="Дете в безопасна и подкрепяща среда."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-65 important-lg:h-55 important-md:h-50 important-sm:h-40 important-h-55"
										style="background-color:#FA7402;"
										title="Практическа програма с реални резултати"
										text="Използваме методи като арт терапия, градинска терапия, музикотерапия и творчество, които насърчават развитието на детето и доверието към терапевта."
										img="/assets/pr-zan-za-detsa-s-aut/реални-резултати-дете-аутизъм.webp"
										style2="filter: saturate(120%);"
										alt="Реални резултати на дете с аутизъм."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="purple" />

			<AnimatedComponent class="xl:px-30 mx-20px">
				<H3SolidPink variant="h2" title="Над 700 подкрепени семейства" />
			</AnimatedComponent>

			<section class="xl:px-10 mx-20px pb-10">
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
										Детски център Sense върна усмивките на нашите лица. В центъра се излекува нашият син Марин. Благодаря ви от сърце за професионализма и отдадеността. Вечно благодарни: семейство Марковски
									</>}
									name="Philip Markovski"
									hrefGoogleReview="https://maps.app.goo.gl/pTAjYzFwjVY2EuxB6"
									class="important-h-380px important-sm:h-250px important-md:h-400px important-lg:h-310px important-xl:h-350px"
								/>
								<StarReview
									reviewText="Искам да изкажа огромната си благодарност на терапевтите в Сенс Център. Синът ми посещава центъра от април 2025г.В начолото не можеше да говори и не разбираше какво ние му обясняваме. Благодарение на различните видове терапии които посещава звукова, ерготерапия, речева, тъмна стая има голям напредък. Препоръчвам центъра, защото всичко в него е на ниво и синът ми се чувства щастлив"
									name="Ирена Бакалова"
									hrefGoogleReview="https://maps.app.goo.gl/cLwbN14c4QtN7Wmc6"
									class="important-h-380px important-sm:h-250px important-md:h-400px important-lg:h-310px important-xl:h-350px"
								/>
								<StarReview
									reviewText="Марти постъпи в център Sense преди два месеца, без да може да говори и разбира, без навици дори. Днес той е съвсем различно дете, общува, пее песни и ни разбира, дори в детската градина ни съобщиха, че вече всичко е в норма при него. Препоръчвам с две ръце центъра, защото всичко в него е на ниво и най-вече детето обожава да ходи в него. Разбира се, продължаваме, но вече много по-спокойни."
									name="yt-2007"
									hrefGoogleReview="https://maps.app.goo.gl/9u3gHoJAR32khXGa7"
									class="important-h-380px important-sm:h-250px important-md:h-400px important-lg:h-310px important-xl:h-350px"
								/>
								<StarReview
									reviewText={<>Момченцето ни имаше проблем с проговарянето, за няколко месеца работа със специалистите в центъра показа страхотен напредък. Изключително доволни сме със съпруга ми от резултатите, отношението към детето и подхода.
									</>}
									name="Silvya Manikatova"
									hrefGoogleReview="https://maps.app.goo.gl/KmxyBapgNRYeyQm49"
									class="important-h-380px important-sm:h-250px important-md:h-400px important-lg:h-310px important-xl:h-350px"
								/>
								<StarReview
									reviewText={<>Синът ни посещава центъра от почти половин година и за този период наблюдаваме изключителен напредък по отношение на когнитивните му умения.<br />
										Започна да проявява интерес към много неща у дома и значително подобри очния контакт.<br />
										Много сме благодарни на целия екип за разбирането и позитивизма, с който се отнасят към децата и техните родители.<br />
										Чувстваме се подкрепени! ❤️
									</>}
									name="Estel Dimova"
									hrefGoogleReview="https://maps.app.goo.gl/ZHLVaJygU4ryva9T6"
									class="important-h-380px important-sm:h-250px important-md:h-400px important-lg:h-310px important-xl:h-350px"
								/>
							</ReviewSlider>
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
							<p class="pb-0 mb-5 md:mt-0">Ако не се работи активно върху развитието на социалните умения и поведенческите нарушения на децата с аутизъм, последствията могат да бъдат:</p>
						</div>
						<div class="w-full">
							<ul style="list-style-type: none;" class="flex flex-col gap-2">
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">затруднено общуване с връстници и изолация</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">повишена тревожност и емоционални изблици</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">проблеми с адаптацията в училище и нова среда</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">ограничени възможности за самостоятелен живот в бъдеще</p>
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
						<p class="font-size-15px c-paper mt-2">Ето защо колкото по-рано бъдат започнати терапия и занимания за деца с аутизъм толкова по-голяма е възможността за видимо подобрение на актуалното състояние и напредване в развитието.</p>
					</div>
				</AnimatedComponent>
			</section>

			<section>
				<AnimatedComponent class="pt-30 md:pt-50">
					<H2Echo
						maintitle={
							<>
								Цялостна подкрепа за деца с аутизъм
							</>
						}
						title="подкрепа"
						bgImage="/assets/pr-zan-za-detsa-s-aut/подкрепа-деца-аутизъм.webp"
						bgSize="550%"
						bgPosition="right 0% top 42%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pb-30 md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/pr-zan-za-detsa-s-aut/подкрепа-деца-аутизъм.webp" alt="Подкрепа на дете с аутизъм." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10 md:mt-0">
								Практическите занимания за деца с аутизъм са интерактивни дейности от реалния живот, които правят ученето приятно. Те включват градинска терапия, музикотерапия, арт терапия, развитие на социални умения и други активности в експериментална стая за обучение и развитие, които стимулират развитието по интуитивен начин.
							</p>
							<p>
								Нашата програма създава спокойна и подкрепяща среда, в която всяко дете може да изследва, експериментира и учи със собствено темпо.
							</p>
							<p>
								Практическите занимания насърчават социалното взаимодействие, творческото изразяване и изграждането на самоувереност – неща, които често трудно се постигат само чрез традиционни терапии.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="gap-12 pb-8 md:pb-20 xl:px-30 mx-20px md:px-20px">
				<H3Blue variant="h2" title="Видове практически занимания за деца с аутизъм" />
				<div class="md:pb-0 pb-10">
					<AnimatedComponent class="max-w-1500px">
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
								style="background-color:#742C8F;"
								puzzleclass="c-brand w-6 mr-2"
								class="important-h-700px important-md:h-950px important-lg:h-720px important-xl:h-690px"
								img="/assets/pr-zan-za-detsa-s-aut/експериментална-стая-обучение-развитие.webp"
								alt="Експериментална стая за обучение и развитие."
								title="Експериментална стая за обучение и развитие"
								desc="Тази терапия е насочена към преодоляване на страхове и сензорни непоносимости като чувствителност към шумове, мокрене, цапане или допир до различни текстури. Използват се  игрови подходи, ролеви ситуации и контролирано излагане на стимули, за да се чувства детето сигурно и спокойно. Така то развива толерантност към различни усещания, намалява тревожността си и изгражда умения за саморегулация."
							/>
							<PuzzleIconReview
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								class="important-h-700px important-md:h-950px important-lg:h-720px important-xl:h-690px"
								img="/assets/pr-zan-za-detsa-s-aut/развитие-социални-умения.webp"
								alt="Развитие на социални умения."
								title="Развитие на социални умения"
								desc="Чрез интерактивни игри и преживявания в реална среда децата усвояват умения за общуване, самостоятелност и работа в екип. Развитието на социални умения включва тренировка на ситуации като пазаруване, поздравяване или ориентиране в непознати места и постепенно стават по-уверени и емоционално стабилни. Това им помага да станат по-самостоятелни, спокойни и адаптивни в ежедневието."
							/>
							<PuzzleIconReview
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								class="important-h-700px important-md:h-950px important-lg:h-720px important-xl:h-690px"
								img="/assets/pr-zan-za-detsa-s-aut/градинска-терапия.webp"
								alt="Градинска терапия."
								title="Градинска терапия"
								desc="Терапията в градината съчетава игри и творчески дейности с природни материали като рисуване с листа и цветя, ходене боси по пътеки от пясък и трева, засаждане и грижа за растения. Чрез тези занимания за деца с аутизъм,  децата развиват сетивата си, учат се на търпение и отговорност, намаляват стреса и изграждат по-добра емоционална устойчивост."
							/>
							<PuzzleIconReview
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								class="important-h-700px important-md:h-950px important-lg:h-720px important-xl:h-690px"
								img="/assets/pr-zan-za-detsa-s-aut/музикотерапия-деца-аутизъм.webp"
								alt="Музикотерапия при деца с аутизъм."
								title="Музикотерапия при деца с аутизъм"
								desc="Музикотерапията за деца със СОП трансформира начина, по който децата с аутизъм се свързват със света около тях. В терапевтичната среда музиката се превръща в средство за учене и игра. Музикотерапията използва пеене, импровизация, слушане на музика и игра с инструменти, които развиват концентрацията, езиковите и социалните умения, подобрява се емоционалната регулация и се изгражда увереност."
							/>
							<PuzzleIconReview
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								class="important-h-700px important-md:h-950px important-lg:h-720px important-xl:h-690px"
								img="/assets/pr-zan-za-detsa-s-aut/арт-терапия-деца-аутизъм.webp"
								alt="Арт терапия при деца с аутизъм."
								title="Арт терапия при деца"
								desc="Арт терапията при деца с аутизъм използва силата на творческото изразяване чрез рисуване, моделиране с глина и работа с различни материали за развитие на емоционални и социални умения. Чрез специално структурирани дейности като “рисуване на емоциите”, сензорно изследване на текстури и творчески игри, децата учат да изразяват чувствата си без думи. Фокусът на арт терапията за деца със СОП е върху процеса, а не върху резултата."
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</section>

			<section class="xl:px-30 mx-20px">
				<AnimatedComponent class="mt-15">
					<H3SolidPink title="Как постигаме най-добри резултати при аутизъм" />
					<p class="mx-5 md:mx-10 mt-0">
						За едно дете с аутизъм най-важно е терапевтичният подход да бъде цялостен. Затова комбинираме практическите занимания за деца с аутизъм с основни терапии, което доказано води до най-добри резултати. Докато практическите занимания за деца с аутизъм дават възможност на децата да прилагат наученото в реална среда, основните терапии изграждат стабилна основа за развитие, като подобряват речта, вниманието, координацията и емоционалното състояние.
					</p>
				</AnimatedComponent>
			</section>

			<div class="w-full xl:px-30 mt-20 md:mt-30">
				<div class="mx-20px">
					<H3Pink variant="h2" title="Основните терапии подходящи за деца с аутизъм" />
				</div>
				<ServicesTable />
			</div>

			<section class="pb-40px xl:px-30 mx-20px pt-10 md:pt-30">
				<AnimatedComponent class="max-w-1500px mx-auto flex flex-col md:flex-row gap-10">
					<div class="flex flex-col justify-center items-start gap-2 w-full md:w-2/3 px-5">
						<div class="w-full">
							<p class="pb-0 mb-5 md:mt-0">Професионалната терапия осигурява забележителни подобрения в комуникативните  умения, социалните взаимодействия, поведенческите модели и качеството на живот на детето и семейство му. Комбинацията от основни терапевтични методи с практически
								осигурява оптимални резултати, като създава синергия между структурираното терапевтично въздействие и естественото учене в реална среда.</p>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-8 xl:px-5 py-2 pt-7 pb-3 w-full md:w-1/3">
						<div class="flex justify-center items-center gap-4 pb-2">
							<img src="/assets/exclamation-mark-icon.webp" class="w-12 h-12" />
						</div>
						<p class="font-size-15px c-paper mt-2 uppercase leading-6.5 font-[MYRIADPRO-Semibold] text-center">Всеки ден закъснение в започването на терапията е изгубена възможност за максимално развитие на потенциала на детето.</p>
					</div>
				</AnimatedComponent>
			</section>

			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-20">
				<H3Blue variant="h2" title="Как практическите занимания за деца с аутизъм  помагат на твоето дете в 2 стъпки" />
			</AnimatedComponent>

			<div class="max-w-1500px md:pt-10 mx-auto">
				<div class="pb-20px">
					<section class="">
						<AnimatedComponent>
							<h3 class="important-font-size-26px important-leading-35px md:pb-2 mt-0">Комуникативни и социални умения</h3>
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
										class2="important-xl:h-55 important-lg:h-40 important-md:h-48 important-sm:h-30 important-h-45"
										style="background-color:#E11172;"
										title="Чрез заниманията за деца с аутизъм детето започва да общува по-уверено с връстници и възрастни."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/заниманията-за-деца-с-аутизъм.webp"
										alt="Заниманията за деца с аутизъм."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-40 important-md:h-48 important-sm:h-30 important-h-45"
										style="background-color:#E11172;"
										title="Ролевите игри подкрепят развитието на социални умения като децата се учат да разрешават конфликти чрез диалог и сътрудничество."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/развитие-на-социални-умения.webp"
										alt="Развитие на социални умения."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-40 important-md:h-48 important-sm:h-30 important-h-45"
										style="background-color:#E11172;"
										title="Музикотерапията при деца с аутизъм насърчава социалното взаимодействие и споделеното преживяване."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/музикотерапията-при-дете-с-аутизъм.webp"
										alt="Музикотерапията при деца с аутизъм."
									/>
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-40 important-md:h-48 important-sm:h-30 important-h-45"
										style="background-color:#E11172;"
										title="Участвайки в групови активности, детето развива по-добри умения за сътрудничество и работа в екип."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/групови-активности-дете-аутизъм.webp"
										alt="Групови активности дете с аутизъм."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-40 important-md:h-48 important-sm:h-30 important-h-45"
										style="background-color:#E11172;"
										title="Чрез заниманията за деца с аутизъм детето започва да общува по-уверено с връстници и възрастни."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/заниманията-за-деца-с-аутизъм.webp"
										alt="Заниманията за деца с аутизъм."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-40 important-md:h-48 important-sm:h-30 important-h-45"
										style="background-color:#E11172;"
										title="Ролевите игри подкрепят развитието на социални умения като децата се учат да разрешават конфликти чрез диалог и сътрудничество."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/развитие-на-социални-умения.webp"
										alt="Развитие на социални умения."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-40 important-md:h-48 important-sm:h-30 important-h-45"
										style="background-color:#E11172;"
										title="Музикотерапията при деца с аутизъм насърчава социалното взаимодействие и споделеното преживяване."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/музикотерапията-при-дете-с-аутизъм.webp"
										alt="Музикотерапията при деца с аутизъм."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-55 important-lg:h-40 important-md:h-48 important-sm:h-30 important-h-45"
										style="background-color:#E11172;"
										title="Участвайки в групови активности, детето развива по-добри умения за сътрудничество и работа в екип."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/групови-активности-дете-аутизъм.webp"
										alt="Групови активности дете с аутизъм."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="purple2" />

			<div class="max-w-1500px md:pt-5 mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h3 class="important-font-size-26px important-leading-35px md:pb-2 mt-0">Емоционално и личностно развитие</h3>
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
										class2="important-xl:h-64 important-lg:h-45 important-md:h-58 important-sm:h-35 important-h-52"
										style="background-color:#E11172;"
										title="Арт терапията при деца с аутизъм подобрява емоционалната регулация, като създава усещане за контрол в безопасна среда."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/арт-терапия-деца-с-аутизъм.webp"
										alt="Арт терапията при деца с аутизъм"
									/>
									<ContainerBox
										class2="important-xl:h-64 important-lg:h-45 important-md:h-58 important-sm:h-35 important-h-52"
										style="background-color:#E11172;"
										title="Заниманията в експерименталната стая за обучение и развитие намаляват сензорните непоносимости и помагат за преодоляване на страхове."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/експерименталната-стая-за-обучение-и-развитие.webp"
										alt="Експерименталната стая за обучение и развитие."
									/>
									<ContainerBox
										class2="important-xl:h-64 important-lg:h-45 important-md:h-58 important-sm:h-35 important-h-52"
										style="background-color:#E11172;"
										title="Градинската терапия помага на децата да развият търпение, концентрация и отговорност по естествен и забавен начин."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/градинската-терапия-деца-с-аутизъм.webp"
										alt="Градинската терапия деца с аутизъм."
									/>
									<ContainerBox
										class2="important-xl:h-64 important-lg:h-45 important-md:h-58 important-sm:h-35 important-h-52"
										style="background-color:#E11172;"
										title="Комбинацията от практически терапии изгражда положителна самооценка, по-добра адаптивност и умения за справяне с различни ситуации."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/комбинацията-от-терапии.webp"
										alt="Комбинацията от практически терапии за по-добра адаптивност."
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-64 important-lg:h-45 important-md:h-58 important-sm:h-35 important-h-52"
										style="background-color:#E11172;"
										title="Арт терапията при деца с аутизъм подобрява емоционалната регулация, като създава усещане за контрол в безопасна среда."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/арт-терапия-деца-с-аутизъм.webp"
										alt="Арт терапията при деца с аутизъм"
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-64 important-lg:h-45 important-md:h-58 important-sm:h-35 important-h-52"
										style="background-color:#E11172;"
										title="Заниманията в експерименталната стая за обучение и развитие намаляват сензорните непоносимости и помагат за преодоляване на страхове."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/експерименталната-стая-за-обучение-и-развитие.webp"
										alt="Експерименталната стая за обучение и развитие."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-64 important-lg:h-45 important-md:h-58 important-sm:h-35 important-h-52"
										style="background-color:#E11172;"
										title="Градинската терапия помага на децата да развият търпение, концентрация и отговорност по естествен и забавен начин."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/градинската-терапия-деца-с-аутизъм.webp"
										alt="Градинската терапия деца с аутизъм."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-64 important-lg:h-45 important-md:h-58 important-sm:h-35 important-h-52"
										style="background-color:#E11172;"
										title="Комбинацията от практически терапии изгражда положителна самооценка, по-добра адаптивност и умения за справяне с различни ситуации."
										text=""
										img="/assets/pr-zan-za-detsa-s-aut/комбинацията-от-терапии.webp"
										alt="Комбинацията от практически терапии за по-добра адаптивност."
									/>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="pink" />

			<section class="gap-12 xl:px-30 mt-5 md:mt-10">
				<H3Blue variant="h2" title="Първична оценка при съмнение за аутизъм" />
			</section>

			<div class="flex flex-col justify-center items-center mx-auto px-20px xl:px-30">
				<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:pb-10 md:pt-4 py-5 md:bg-gradient-to-t lg:from-paper lg:to-paper bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
					<div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-0 md:gap-10">
						<div class="xl:w-1/2 w-full">
							<p class="c-paper lg:c-paper-inv mb-1">
								В Sense Center предлагаме първична оценка за деца със съмнение за аутизъм.
							</p>
							<p class="c-paper lg:c-paper-inv">
								По време на консултацията се извършва обследване на поведението и актуалното състояние на детето.
							</p>
							<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="безплатна-първична-оценка-аутизъм-1" class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
							<p class="c-paper lg:c-paper-inv mb-1">
								Оценяват се уменията на детето за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси.
							</p>
							<p class="c-paper lg:c-paper-inv">
								Едновременно с това специалистите интервюират родителите за техните наблюдения и за училищното представяне на детето.
							</p>
						</div>
						<div class="xl:w-1/2 w-full">
							<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="безплатна-първична-оценка-дете-аутизъм-1" class="mt-5 w-full h-auto object-cover rounded shadow" />
							<p class="c-paper lg:c-paper-inv italic font-300 mt-2 leading-5 lg:leading-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Препоръчително е да донесете всички налични медицински документи, които могат да бъдат от полза за изясняване на актуалното състояние.</p>
						</div>
					</div>
					<div class="pt-10 flex md:flex-row flex-col justify-center items-center gap-2">
						<PuzzleButton />
						<PuzzleButton2
							href=""
							text="+ 359 879 800 013"
						/>
					</div>
				</AnimatedComponent>
			</div>

			<div class="mt-10 md:mt-20 gap-12 pb-8 md:pb-20 pt-50px px-20px xl:px-30 bg-brand-blue -mx-20px">
				<div class="md:px-0px mx-20px md:mx-0px">
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
								img="https://lh3.googleusercontent.com/a/ACg8ocLjT2QCxtoR7d8rU0bdx9FD68rHT9mNGdz4LLMUjIVxDN2Y1A=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Детето ми посещава центъра вече 5 месеца и има значителен напредък.Има интерес към всичко около него,очен контакт,опитва се да говори.Препоръпвам с две ръце центъра.Страхотни хора и професионалисти!
									</>
								}
								name="Лилия Жекова"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/yKeftA9frZsnGrSX8"
								class="important-h-300px important-sm:h-350px important-lg:h-350px important-xl:h-400px"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a-/ALV-UjXNDMsG5OUiJGd1LM9erKE5VNkTw48t7eeVN5Podk9V-RDbz_UM=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Великолепно отношение и професионализъм! Детето ми се чувства прекрасно там, винаги ходи с огромно желание и отбелязва значителен напредък, благодарение на този млад и отдаден екип.
									</>
								}
								name="Elena Todorova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/qu9agxG4vrrMb94t7"
								class="important-h-300px important-sm:h-350px important-lg:h-350px important-xl:h-400px"
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
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a/ACg8ocKq8NAnmw7wca9LQEY15myV_1zWHkmnHtj6ulL1vg9KEPJ3cg=w36-h36-p-rp-mo-br100"
								reviewText={
									<>
										Синът ми посещава центъра от около 9 месеца.За този период има сериозен напредък в емоционално,социално и когнитивно развитие.Обогати речника и подобри значително говора,благодарение на екипа от професионалисти работещи с него.
									</>
								}
								name="Ина Светомирова"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/AT5iuZMxfYMZDh1x7"
								class="important-h-300px important-sm:h-350px important-lg:h-350px important-xl:h-400px"
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
					<H3Pink title="Специалистите провеждащи занимания за деца с аутизъм в Sense Center" />
				</AnimatedComponent>
				<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="xl:w-1/2 w-full">
						<img class="w-full h-full" src="/assets/pr-zan-za-detsa-s-aut/дете-аутизъм-спокойствие-комфорт.webp" alt="Детето с аутизъм е спокойно и активно участва в терапията.
" />
					</div>
					<div class="xl:w-1/2 w-full pt-20px text-center px-5">
						<div class="">
							<p class="text-left mt-5">
								Нашите специалисти, провеждащи практически занимания за деца с аутизъм притежават дълбоки познания в областта на детската терапия и холистичното развитие. Под формата на игра създаваме смислени преживявания, които насърчават естественото учене и развитие. Използваме иновативни подходи като музикотерапия при деца със СОП, арт терапия за деца с увреждания, експозиционна терапия, градинска терапия и социални игри. Адаптираме всяка дейност според индивидуалните потребности на детето, като работим в тясно партньорство с родителите за постигане на устойчиви и значими резултати.
							</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<section class="xl:px-30 mx-20px pt-25 md:pt-50">
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
						]}>
						<div class="flex flex-col max-w-full relative overflow-hidden mx-auto">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Катя Илиева</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]"></p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">"Мисли. Вярвай. Мечтай. Рискувай." - Уолт Дисни</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Катя е отдаден специалист с дългогодишен опит в работата с деца и възрастни, преподавателски и управленски опит в сферата на образованието, държавната администрация и частния сектор. Завършила е магистратура по „Детско-юношеска и училищна психология“ в Бургаски свободен университет и „Педагогика“ със специализация „Социална педагогика“ в Софийски университет „Св. Климент Охридски“.
										</p>
										<p class="text-left mt-1">
											Катя е сертифициран треньор по емоционална интелигентност и специалист по детско-родителски отношения, с подготовка по системна фамилна и арт терапия, тя провежда занятия по арт терапия за деца в София, като е акредитиран лектор към МОН. Автор е на образователни програми и ресурси за деца и родители, а интересите ѝ включват арт терапия с приказки (приказкотерапия), работа с МАК карти и терапевтично писане.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Галина Георгиева</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]"></p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“И най - дългия път започва с първата крачка", " Не спирай да мечтаеш"</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Галина е опитен психолог, който притежава над 15 години богат професионален опит в работата с деца със СОП, като демонстрира постоянен стремеж към професионално усъвършенстване и иновативни терапевтични подходи като музикотерапия при деца с говорни дефекти и експериментална стая за обучение и внимание.
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
								<p class="pb-5 important-font-[MYRIADPRO-Regular]"></p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Стремя се да подкрепям децата да развиват своя потенциал, да се учат как да се отнасят с другите и да познават себе си.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Росен е млад, отдаден и мотивиран специалист, който подкрепя децата по пътя им към самопознание, увереност и пълноценно общуване. В работата си с деца със СОП често се сблъсква със случаи, в които прилага музикотерапия при деца с комуникативни нарушения и арт терапия при деца със соп.
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
								<p class="pb-5 important-font-[MYRIADPRO-Regular]"></p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Подкрепям децата да изразяват смело вътрешния си свят, да проявяват любопитство и креативност, за да запазят връзката с детето вътре в себе си и като възрастни."</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Георги притежава опит в работата както с деца със СОП, така и в норма, вярва, че всяко дете заслужава да бъде разбрано и подкрепено.  Неговата мисия е да вдъхновява децата да откриват себе си чрез свободно изразяване на емоции и креативност.
										</p>
										<p class="text-left mt-1">
											Завършил е бакалавър "Психология" в ПУ "Паисий Хилендарски" и магистратура "Клинична психология" в НБУ. Допълнително е сертифициран хипнотерапевт (БАХХ) и усъвършенства знанията си в Аналитичната психология (БОАП).  В практиката си активно прилага музикотерапия при деца с говорни увреждания и арт терапия за деца аутисти.
										</p>
										<p class="text-left mt-1">
											Най-голямо удовлетворение намира в подкрепата и наблюдението на прогресa при децата и в силната екипна връзка, която спомага за тяхното развитие.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Нилюфер Исмаилова-Цветанова</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]"></p>
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
											Завършила е бакалавърска степен „Българска филология“ във Великотърновския университет и магистърска степен по „Детско-юношеска и училищна психология“ в Софийски университет „Св. Климент Охридски“. Преминала е обучение по EMDR-терапия – Ниво 1, има базисно ниво на “Позитивна психотерапия” и е в процес на обучение за Майсторско ниво. В момента специализира и „Детско-юношеска психотерапия“ през призмата на позитивната психотерапия.
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
								<p class="pb-5 important-font-[MYRIADPRO-Regular]"></p>
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
											Завършила е специалност „Психология“ и „Приложна лингвистика на немски език“ в Нов български университет през 2021 г., а през 2025 г. ще завърши и специалност „Обществено здраве“ в Медицински университет – София. Притежава опит в консултиране на деца в норма и в работа с възрастни в контекста на личностно развитие и емоционална подкрепа, провежда множество сесии по музикотерапия за деца с умствени увреждания, както и арт терапия за агресивни деца.
										</p>
										<p class="text-left mt-1">
											Активно участва в благотворителни инициативи, включително организация на събития за деца. Едно от най-вдъхновяващите ѝ преживявания е в клиника по детски болести, където заедно с малките пациенти провеждат сесия по арт терапия за деца и изработват коледна украса, с която превръщат една елха в символ на надежда, топлина и радост.
										</p>
										<p class="text-left mt-1">
											В момента усъвършенства професионалните си умения чрез обучение по „Терапия чрез игра и изкуство“, с цел да разшири и задълбочи уменията си в работата с деца, включвайки музикотерапия при деца с физически увреждания и техники за развитие на социални умения. Най-много цени искрените усмивки и малките победи, които правят всеки ден по-специален.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left"></h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]">Детски клиничен психолог</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Моята мисия е да осигуря стабилна основа за емоционално и социално израстване, която подкрепя децата през целия им живот.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Александър е отдаден и целеустремен детски клиничен психолог, който приема работата с деца като възможност да изгради мост към техния вътрешен свят – с търпение, емпатия и професионализъм. Вярва, че всяко дете заслужава да бъде чуто, разбрано и подкрепено по пътя към пълноценно разгръщане на своя потенциал.
										</p>
										<p class="text-left mt-1">
											Завършил е бакалавърска степен по „Психология“ във Великотърновски университет „Св. св. Кирил и Методий“ и магистърска степен по „Клинична психология“ в Софийски университет „Св. Климент Охридски“. Преминал е обучение за работа с диагностичния инструмент DESK 3–5, което му позволява да извършва прецизна оценка и ефективно насочване на терапевтичния процес.
										</p>
										<p class="text-left mt-1">
											Провежда индивидуални и групови психологични сесии с деца до 18-годишна възраст, както в норма, така и със затруднения в развитието, също така провежда и сесии по музикотерапия при деца с увреждания. Специализира в работата с деца от аутистичния спектър, с поведенчески затруднения, хиперактивност, тревожност и други емоционални и поведенчески предизвикателства, използвайки занимания за деца с аутизъм и техники за развитие на социални умения.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-40px important-leading-30px text-left">Венцислава Тодорина</h4>
								<p class="pb-5 important-font-[MYRIADPRO-Regular]"></p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Вярвам, че всяко дете заслужава да бъде насърчавано да се развива и да изразява свободно емоциите си.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Венцислава Тодорина е млад и мотивиран специалист, отдаден на работата с деца и тяхното развитие чрез арт терапия и музикотерапия за деца. Тя вярва, че всяко дете заслужава да бъде насърчавано да изразява свободно емоциите си и да се развива в сигурна и подкрепяща среда.
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
								<p class="pb-5 important-font-[MYRIADPRO-Regular]"></p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Убедена съм, че подкрепата е от ключово значение за развитието на всеки човек.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Деси-Слава е млад, отдаден и мотивиран специалист, който подкрепя децата по пътя им към уверено и пълноценно развитие чрез музикотерапия. Притежава опит в работата с деца със СОП, както и петгодишна практика в сферата на детската анимация, включваща планиране на събития и водене на групови занимания за деца с аутизъм.
										</p>
										<p class="text-left mt-1">
											Завършила е бакалавърска степен по „Психология“ в Нов български университет със специализация „Психология на развитието“. Интересите ѝ са насочени към когнитивното развитие в детска възраст и включват провеждане на тренинги за развитие на социални умения, памет, внимание и екзекутивни функции. В своята работа тя е убедена, че ранната подкрепа е ключът към изграждането на увереност и подготовката на децата за пълноценен живот като възрастни.
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
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Вярвам, че децата могат да развият потенциала си с подходяща подкрепа и насока.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Ани Христова е всеотдаен и вдъхновен специалист, който подкрепя децата в откриването на техния потенциал и изграждането на увереност в собствените им възможности. Тя има 5-годишен професионален опит в работата с деца на възраст от 2 до 12 години, като прилага индивидуален и комплексен подход, съобразен с нуждите на всяко дете.
										</p>
										<p class="text-left mt-1">
											Завършила е бакалавърска степен по „Психология“ и магистърска програма по „Психология на здравето“ в СУ „Св. Климент Охридски“. Допълнително е преминала обучение по „Детска невропсихология“ под ръководството на проф. Иванка Асенова, базисно ниво по програма „Фамилна и арт психотерапия и консултиране“ към ПИСЕЛ, както и програма „Ефективен комуникационен модел“ за работа с деца с аутизъм, ADHD, ADD, PDD и синдром на Аспергер. Успешно прилага наученото в сесиите по музикотерапия при деца със заекване и други говорни проблеми, както и арт терапия при деца с аутизъм. Ани вярва, че с подходяща подкрепа всяко дете може да разгърне своите способности и да постигне хармонично развитие.
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
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">“Децата са нашето бъдеще и вярвам, че всяко дете заслужава уважение, търпение и любов, за да разгърне пълния си потенциал.”</p>
								<div class="w-full pb-20px pt-20px md:pt-30px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Цветелина Дескова е млад и мотивиран специалист, който вярва, че всяко дете заслужава уважение, търпение и любов, за да разгърне своя потенциал. Тя има опит в работата с деца със СОП, като влага усилията си в развитието на техните когнитивни и социални умения, както и на умението им да разбират и изразяват собствените си емоции. Използва методи като музикотерапия при заекващи деца, градинска терапия и арт терапия при деца със СОП.
										</p>
										<p class="text-left mt-1">
											Цветелина е завършила бакалавърска степен по „Психология“ със специализация „Психични нарушения“ в Нов български университет. В практиката си създава спокойна и подкрепяща среда, в която децата се чувстват уверени да бъдат себе си и да растат в посока на своето най-добро развитие на социални умения.
										</p>
									</div>
								</div>
							</div>
						</div>
					</StaffSlider>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="pt-10 md:pt-30">
				<AnimatedComponent class="">
					<H2Echo
						maintitle={
							<>
								Иновативни методи
							</>
						}
						title="методи"
						bgImage="/assets/pr-zan-za-detsa-s-aut/занимание-за-дете-с-аутизъм.webp"
						bgSize="300%"
						bgPosition="right 40% top 90%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/pr-zan-za-detsa-s-aut/занимание-за-дете-с-аутизъм.webp" alt="Занимание за дете с аутизъм." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10">
								Практическите занимания за деца с аутизъм включват интерактивни дейности, които подпомагат развитието на социални умения, емоционалната регулация, справяне със страхове и трудности и др. За постигане на оптимални резултати се използват внимателно подбрани и разнообразни терапевтични игри и специализирани материали. Всеки инструмент е индивидуално съобразен с уникалните нужди и потребностите на детето. Правилната комбинация от терапевтични средства е от ключово значение за успеха на процеса, като чрез тях се постигат устойчиви и трайни резултати в цялостното развитие на детето.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-50">
				<H3Pink title="3+ терапевтични инструментa, които правят терапията забавна и ефективна" />
				<div class="mx-auto px-5">
					<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-12 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full md:pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Контейнери за сензорни игри</h4>
							<p class="text-left mt-2 font-[MYRIADPRO-COND]">
								Експериментална стая за обучение и развитие
							</p>
							<div>
								<p class="text-left mt-0 md:mt-2">
									Кутии с различни материали – ориз, пясък, гел топчета – които развиват тактилната чувствителност и позволяват на детето да свикне с различни усещания и да преодолеят чувствителност към мокрене, цапане и текстури.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/pr-zan-za-detsa-s-aut/контейнери-сензорни-игри.webp" alt="Контейнери за сензорни игри." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="xl:px-30 px-5 mx-20px md:pt-50">
				<div class="mx-auto px-5">
					<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full md:pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Комплекти за ролеви игри</h4>
							<p class="text-left mt-2 font-[MYRIADPRO-COND]">
								Развитие на социални умения
							</p>
							<div>
								<p class="text-left mt-0 md:mt-2">
									Карти с изображения на обекти и предмети (плодове, зеленчуци, животни) и ролеви аксесоари (пазарски кошници, фалшиви пари, продуктови етикети), които помагат на децата да упражняват социални умения, да взаимодействат с връстници и да тренират самостоятелност в ежедневни ситуации.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/pr-zan-za-detsa-s-aut/комплекти-ролеви-игри.webp" alt="Комплекти за ролеви игри." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="xl:px-30 pb-5 px-5 mx-20px md:pt-50">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-12 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Семена и градински инструменти</h4>
							<p class="text-left mt-2 font-[MYRIADPRO-COND]">
								Градинска терапия
							</p>
							<div>
								<p class="text-left mt-0 md:mt-2">
									Инструменти за садене и поливане – семена, малки лопатки, лейки и саксийки, които учат децата на грижа и отговорност, докато развиват фината моторика. По време на терапията се използват и природни материали, с които децата създават отпечатъци и рисунки, развивайки креативността и сензорното възприятие.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/pr-zan-za-detsa-s-aut/семена-градински-инструменти.webp" alt="Семена и градински инструменти." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 px-5 mx-20px md:pt-50">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full md:pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Музикални инструменти</h4>
							<p class="text-left mt-2 font-[MYRIADPRO-COND]">
								Музикотерапия
							</p>
							<div>
								<p class="text-left mt-0 md:mt-2">
									Леки и безопасни музикални инструменти като детски барабанчета, маракаси и ксилофон, които се използват за ритмични упражнения, емоционална регулация и насърчаване на себеизразяването чрез звук.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/pr-zan-za-detsa-s-aut/музикални-инструменти.webp" alt="Музикални инструменти." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="xl:px-30 px-5 mx-20px md:pt-50">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-12 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-7 important-md:leading-9 mt-3 mb-0 md:my-3">Материали за изкуство и творчество</h4>
							<p class="text-left mt-2 font-[MYRIADPRO-COND]">
								Арт терапия
							</p>
							<div>
								<p class="text-left mt-0 md:mt-2">
									Инструментите за рисуване и моделиране дават пространство за себеизразяване, креативност и развиване на социални и емоционални умения по естествен и приятен начин.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/pr-zan-za-detsa-s-aut/материали-изкуство-творчество.webp" alt="Материали за изкуство и творчество." />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue2" />

			<section>
				<AnimatedComponent class="mb-10 mt-5 md:mt-10 lg:w-800px mx-auto">
					<div class="flex flex-col justify-center items-start b-rd-12px bg-brand px-10 py-4">
						<p class="font-size-22px uppercase c-paper font-500 mb-0 tracking-0.5px font-[MYRIADPRO-Semibold]">Устойчиво развитие</p>
						<p class="c-paper font-300 font-[MYRIADPRO-Light]">Използването на подходящи терапевтични инструменти е ключов елемент в терапията за деца с аутизъм. Чрез комбинация от подходящи методи и индивидуален подход се постигат устойчиви резултати в развитието на речевите и езиковите умения на всяко дете.
						</p>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px pt-5 md:pt-0">
				<AnimatedComponent>
					<H3Blue title="Спокойна и стимулираща среда за децата" />
				</AnimatedComponent>
				<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="xl:w-1/2 w-full">
						<img class="w-full h-full" src="/assets/pr-zan-za-detsa-s-aut/спокойна-стимулираща-среда-деца.webp" alt="Спокойна и стимулираща среда за деца." />
					</div>
					<div class="xl:w-1/2 w-full pt-20px text-center px-5">
						<div class="">
							<p class="text-left mt-5">
								Центърът включва 14 специализирани терапевтични кабинета, стая за отдих и социализация, както и удобен паркинг за посетители.
							</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<section class="xl:px-30 mx-20px pt-20">
				<AnimatedComponent class="flex xl:hidden max-w-300px sm:w-300px md:w-700px flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div>
						<div class="w-full md:pt-20px text-center">
							<div class="">
								<p class="text-left">
									Кабинетите са специално проектирани за детска терапия - с богата колекция от терапевтични игри и обучителни материали за всяка възраст. Всички пространства в Sense Center са създадени така че да предразполагат детето към спокойствие, комфорт и активно участие в терапията.
								</p>
							</div>
						</div>
						<div class="my-5">
						<img class="w-full h-full" src="/assets/pr-zan-za-detsa-s-aut/терапевтични-игри-обучителни-материали.webp" alt="Терапевтични игри и обучителни материали за деца с аутизъм." />

						</div>
					</div>
				</AnimatedComponent>
				<AnimatedComponent class="hidden xl:flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px mx-auto gap-10">
						<div class="xl:w-1/2 w-full my-5">
						<img class="w-full h-full" src="/assets/pr-zan-za-detsa-s-aut/терапевтични-игри-обучителни-материали.webp" alt="Терапевтични игри и обучителни материали за деца с аутизъм." />

						</div>
						<div class="xl:w-1/2 w-full pt-20px text-center">
							<div class="">
								<p class="text-left mt-5">
									Кабинетите са специално проектирани за детска терапия - с богата колекция от терапевтични игри и обучителни материали за всяка възраст. Всички пространства в Sense Center са създадени така че да предразполагат детето към спокойствие, комфорт и активно участие в терапията.
								</p>
							</div>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="purple2" />

			<section>
				<AnimatedComponent class="gap-12 pb-8 md:pb-30 pt-5 md:pt-10 xl:px-30">
					<H3SolidPink title="Първи стъпки" />
					<AnimatedComponent class="px-5 md:px-10 mb-10 relative">
						<BackgroundIcons />
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0"><span class="font-[MYRIADPRO-Bold]">Необходимо е единствено да се свържете с нас.</span> Обадете се или ни пишете в социалните мрежи или директно през сайта.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Често пътят започва с притеснение и несигурност.<br />
								Споделете ни какво Ви притеснява, ще Ви изслушаме внимателно с грижа и разбиране.
							</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Ще обсъдим състоянието на детето и ще организираме час за първична оценка, на която ще се запознаем с уменията на детето към настоящия момент, неговите дефицити и трудности.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">На база Вашата заявка за напредъка, който искате да постигнем и нашето наблюдение по време на оценката,  препоръчваме подходящи терапии и честота на посещенията.</p>
						</div>
					</AnimatedComponent>
					<PuzzleButton />
				</AnimatedComponent>
			</section>

			<section class="pt-50 md:pt-70">
				<AnimatedComponent class="">
					<H2Echo
						maintitle={
							<>
								Резултати от терапията
							</>
						}
						title="Резултати"
						bgImage="/assets/pr-zan-za-detsa-s-aut/терапията-помага-децата-аутизъм.webp"
						bgSize="600%"
						bgPosition="right 40% top 90%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/pr-zan-za-detsa-s-aut/терапията-помага-децата-аутизъм.webp" alt="Терапията помага на децата с аутизъм." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10">
								Терапията помага на децата да преодолеят страхове и сензорни непоносимости, като постепенно свикват с различни текстури, звуци и ситуации. Така намаляват тревожността, подобряват саморегулацията и изграждат увереност.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-40">
				<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="xl:w-1/2 w-full">
						<img class="w-full h-full" src="/assets/pr-zan-za-detsa-s-aut/ролеви-игри-деца-аутизъм.webp" alt="Ролеви игри за деца с аутизъм." />
					</div>
					<div class="xl:w-1/2 w-full pt-20px text-center px-5">
						<div class="">
							<p class="text-left mt-5">
								Чрез ролеви игри, социални упражнения и групови занимания децата развиват умения за комуникация, сътрудничество и разрешаване на конфликти. Това повишава емоционалната интелигентност, насърчава емпатията и улеснява адаптацията в реална среда.
							</p>
							<p class="text-left">
								Заниманията свързани с музика, изкуство и градинарство подпомагат концентрацията, фината моторика и творческото себеизразяване. Постоянната подкрепа води до по-добра социална свързаност, емоционална устойчивост и трайни резултати в развитието на всяко дете.
							</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-5">
				<H3Pink variant="h2" title="Успешни истории" />
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
									href="https://maps.app.goo.gl/Vyjkyd36yhTxojKm9"
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
									href="https://maps.app.goo.gl/kGSmAef55t1eo7716"
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
									href="https://maps.app.goo.gl/TCyXLwcQRXCx1ocf9"
								/>
								<ReviewPuzzlePiece
									style="background-color:#FA7402;"
									puzzleclass="c-brand-purple w-6 mr-2"
									title="“Хубави хора с хубава кауза”"
									desc={<>
										Повече такива места ни трябват в България. Хубави хора с хубава кауза работят там. Истински професионалисти!
									</>}
									name="Hristo Marinov"
									condition=""
									href="https://maps.app.goo.gl/5hd81oWwSCi7uPeQA"
								/>
								<ReviewPuzzlePiece
									style="background-color:#FA7402;"
									puzzleclass="c-brand-purple w-6 mr-2"
									title="“Sense Center е истинско съкровище!”"
									desc={<>
										Прекрасно място за децата и родителите!<br />
										Sense Center е истинско съкровище! Всичко е организирано професионално, а обстановката е толкова уютна и приветлива. Уверена съм, че детето ми е в най-добрите ръце.
									</>}
									name="An-Mari Petkova"
									condition=""
									href="https://maps.app.goo.gl/veyQLn9s4p7JnVRWA"
								/>
							</ContainerSlider>
						</AnimatedComponent>
						<PuzzleButton2
							href=""
							text={
								<>
									Вижте всички<br />успешни истории
								</>
							}
						/>
					</section>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px pb-0">
				<H3Blue variant="h2" title="Въпроси и отговори" />
				<SingleCollapse />
			</section>

			<section class="mx--20px pb-20">
				<DoodleDecor variant="pink" />
			</section>
		</>
	);
}
