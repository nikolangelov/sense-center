import "solid-slider/slider.css";
import { GoogleStarReview, PuzzleIconReview, ReviewSlider, StaffSlider, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink, H3SolidPink } from '../../components/H2WithImage';
import { ContainerBox, ContainerSlider, ReviewPuzzlePiece } from "../../components/ContainerSlider";
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
import { GallerySlider3 } from "../../components/GallerySlider";
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
	{ day: "обучение за концентрация и внимание", bgClass: "bg-brand-purple/70", bgImage: "/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp" },
	{ day: "Психомоторна терапия", bgClass: "bg-brand-orange/70", bgImage: "/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp" },
	{ day: "детски психолог", bgClass: "bg-brand-blue/70", bgImage: "/assets/detsa-s-autizam/поставяне-диагноза-дете-аутизъм.webp" },
	{ day: "развитие на емоционална интелигентност", bgClass: "bg-brand-pink/70", bgImage: "/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" },
];

function ServicesTable() {
	return (
		<div class="w-full max-w-xl mx-auto py-4 mt--8">
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
				<Collapse title="1. Могат ли родителите да присъстват по време на терапията?" desc="В Sense дневен център за деца с увреждания София вярваме, че за да бъде терапията наистина ефективна, е важно детето да бъде само с терапевта по време на сесиите.">
					<div class="mt-4">
						Присъствието на родител може да разсейва детето и да му попречи да се отпусне и ангажира пълноценно. Понякога то се държи по различен начин, търси защита или подкрепа, вместо да изгради самостоятелност и доверие към терапевта.
					</div>
					<div class="mt-4">
						Също така, когато родителят не присъства, терапевтът по-лесно изгражда авторитет и ефективна връзка с детето.
						Разбира се, родителите са важна част от целия процес. Затова поддържаме редовна комуникация и споделяме всичко значимо около напредъка и нуждите на детето.
					</div>
				</Collapse>

				<Collapse title="2. Какво включва първоначалната оценка на детето?" desc="Първоначалната оценка обикновено включва:">
					<div class="mt-4">
						<ul class="ml-5">
							<li class="">
								Разговор с родителите за развитието на детето (медицинска история, реч, език, здравословно състояние, семейна среда).
							</li>
							<li class="">
								Наблюдение на поведението на детето по време на игра и разговор.
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

				<Collapse title="3. Трябва ли да нося нещо конкретно за първичната оценка?" desc="В случай, че имате налична медицинска документация от предходни прегледи - епикризи, неврологични изследвания – ЕЕГ, ЯМР, слухови тестове, психиатрични, психологични и логопедични оценки." />

				<Collapse title="4. Каква информация трябва да предоставя по време на първичната оценка на детето?" desc="По време на първична оценка на актуалното състояние е необходимо да споделите:">
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
					<div class="mt-4">Тази информация ще ни помогне да създадем персонализиран и по-ефективен план за терапия.</div>
				</Collapse>

				<Collapse title="5. Какво се случва, ако детето не иска да съдейства или проявява съпротива по време на терапия?" desc="Случва се понякога децата да се чувстват претоварени, несигурни или просто да имат нужда от повече време за адаптация. В такива моменти подхождаме с търпение и разбиране като променяме дейността или правим пауза." >
					<div class="mt-4">
						Включваме игрови подходи и се стремим да направим средата максимално приятна. Ако нежеланието е постоянно, провеждаме екипни срещи, за да изградим нова стратегия за работа с детето.
					</div>
				</Collapse>

				<Collapse title="6. Как да се справим с емоционални изблици у дома и има ли връзка с терапията?" desc="Емоционалните изблици често са част от процеса на адаптация и развитие. По време на сесиите научаваме детето да разпознава и контролира своите емоции чрез игрови техники и упражнения. Важно е родителите също да прилагат този подход у дома с помощта на нашите препоръки." />

				<Collapse title="7. Колко често се провеждат терапевтичните сесии и колко дълго продължават?" desc="Всяка терапевтична сесия е с продължителност 40 минути. Честотата и вида на сесиите се определя след провеждането на първична оценка и спрямо индивидуалните нужди на всяко дете. Препоръчителният срок за посещения е средно 6 месеца." />

				<Collapse title="8. Как се проследява прогресът на детето?" desc="Проследяването на развитието е ключова част от работата ни. Регулярно провеждаме вътрешни оценки и обсъждаме напредъка на срещите с екипа. Всеки месец предоставяме подробна обратна връзка на родителите и при нужда коригираме терапевтичния план." />

				<Collapse title="9. Предлагате ли консултации и подкрепа за родителите?" desc="Да, активно включваме родителите в терапевтичния процес чрез индивидуални консултации. Те са възможност да обсъдим напредъка на детето, да споделим полезни стратегии за подкрепа у дома и да отговорим на въпросите, които вълнуват семейството. Вярваме, че най-добрите резултати идват, когато работим в партньорство с родителите." />

				<Collapse title="10. Какви специалисти работят в центъра за детско развитие?" desc="В Sense Center работят висококвалифицирани експерти в различни области - психолози, логопеди, кинезитерапевти, социални педагози, ерготерапевти и нутриционисти." />

				<Collapse title="11. С какви възрастови групи работите?" desc="Центърът за деца с нарушения в развитието Sense работи с деца и младежи на възраст от 18 месеца до 18 години, като ги разделяме на три основни групи:">
					<div class="mt-4">
						<ul class="ml-5">
							<li class="">
								Малки деца (18 месеца – 6 години) – Фокусираме се върху ранното развитие на социални и емоционални умения, като предлагаме персонализирани подходи за деца в норма и деца със специални образователни потребности (СОП).
							</li>
							<li class="">
								Предучилищна и начална училищна възраст (6 – 12 години) – Помагаме за развитието на когнитивни умения и успешната интеграция в училищна и социална среда.
							</li>
							<li class="">
								Тийнейджъри (12 – 18 години) – Подкрепяме развитието на личността, социалните връзки и преодоляването на трудности в училище, семейството и обществото.
							</li>
						</ul>
					</div>
					<div class="mt-4">Освен това, предлагаме психологическа подкрепа за родителите, за да подпомогнем тяхната роля и да им предоставим подходящи насоки, с които да подкрепят децата си независимо дали са със СОП или не. Това включва консултации и стратегии за справяне с различни трудности, с които може да се сблъскат като родители.</div>
				</Collapse>

				<Collapse title="12. Могат ли родителите да присъстват по време на терапията?" desc="В Sense дневен център за деца с увреждания препоръчваме родителите да не присъстват на терапевтичните сесии, за да гарантираме ефективността на процеса.">
					<div class="mt-4">Присъствието на родител може да отклони фокуса на детето, особено при по-малките, които често стават зависими от сигурността на родителската фигура. Това може да ограничи тяхната самостоятелност и активност в терапията. Също така, когато родителят е в стаята, за терапевта е по-трудно да изгради авторитет, което е важно за успешно взаимодействие с детето.</div>
					<div class="mt-4">Родителите обаче играят ключова роля извън терапевтичните сесии. Затова редовно ги информираме за напредъка на детето и подходите, които могат да приложат у дома, за да подкрепят процеса. Този баланс между терапевтичната работа и родителската подкрепа е ключов за успеха.</div>
				</Collapse>

				<Collapse title="13. Предлагате ли консултации за хранене?" desc="Не предлагаме консултации за хранене в традиционния смисъл - с диетолог или специалист по храненето.  В рамките на психологическата ни работа, се фокусираме върху теми, свързани с трудности при храненето на децата.">
					<div class="mt-4">В нашия център за деца с нарушения в развитието се стремим чрез психологическа подкрепа да разберем какви емоционални, социални или когнитивни фактори могат да влияят на хранителните навици и да предложим стратегии за преодоляването им, с фокус върху емоционалното благополучие на детето.</div>
				</Collapse>
			</div>
		</>
	);
}

function GoogleMapIframe() {
	const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.749670548677!2d23.25135671550783!3d42.6696015791651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9be9899f1247%3A0x9c53f8ec4847cb64!2zU0VOU0Ug0L3QsNGD0YHRgtC-INCf0L7QvdC40LrQsA!5e0!3m2!1sen!2sbg!4v1719513278453!5m2!1sen!2sbg`;

	return (
		<iframe
			src={mapSrc}
			width="100%"
			height="350"
			style="border: 0; border-radius: 12px;"
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		></iframe>
	);
}

const [isPlayingHero, setIsPlayingHero] = createSignal(false);

export default function Page() {
	return (
		<>
			<div class="relative w-full">
				<VideoHero
					youtubeId="R1kPm_q7vCc"
					gifPreview="/assets/home/сенс-център-терапии-терапевти.mp4"
					gifPreviewMobile="/assets/home/сенс-център-терапии-терапевти-мобилно.mp4"
					isPlaying={isPlayingHero()}
					onPlay={() => setIsPlayingHero(true)}
				/>

				<div class="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-end pb-18 md:pb-10 text-center px-4 text-white">
					<div class={`absolute ${isPlayingHero() ? 'top-32% sm:top-95% lg:top-100% mt-30' : 'top-46% md:top-60% mt-0'}`}>
						<div>
							<div
								class={`mb-1 md:mb-3 transition-colors duration-500 important-font-size-48px important-md:font-size-90px important-leading-46px important-md:leading-80px important-font-[MYRIADPRO-Bold] text-center px-10 ${isPlayingHero()
									? 'text-brand'
									: 'text-white'}`}>
								Помагаме на децата с аутизъм да станат по-уверени и общителни
							</div>
						</div>

						<h1
							class={`important-delay-300 font-400 text-center mb-0 important-font-size-5.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 leading-5.5 transition-colors duration-500 important-font-[MYRIADPRO-Light] ${isPlayingHero()
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

			<AnimatedComponent class={`xl:px-30 mx-20px pt-30 md:pt-40 ${isPlayingHero() ? 'mt-20 sm:mt-90 md:mt-110 lg:mt-120' : 'mt-0'}`}>
				<H3Pink variant="h2" title="Заедно  изграждаме умения за саморегулация и справяне с трудностите" />
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
									]}
								>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Над 200 деца преодоляха трудностите"
										text="С помощта на опитни терапевти и разнообразни практически занимания за деца с аутизъм децата развиха социални умения, подобриха концентрацията си и станаха по-уверени в ежедневието."
										img="/assets/home/дневен-център-за-деца-и-младежи-с-увреждания.webp"
										alt="Терапевт работи с дете по време на терапевтична сесия в специализиран център за детско развитие."
									/>
									<ContainerBox
										style="background-color:#742C8F;"
										title="Индивидуален подход според нуждите"
										text="Вярваме, че всяко дете е уникално, затова нашият подход е гъвкав и съобразен, спрямо индивидуалните нужди и потребности на всяко дете."
										img="/assets/home/дневен-център-за-деца-с-увреждания.webp"
										alt="Терапевт провежда терапия с дете в център за деца с нарушения в развитието и аутизъм."
									/>
									<ContainerBox
										style="background-color:#E11172;"
										title="Създаваме безопасна и подкрепяща среда"
										text="В Sense Center, ние създаваме безопасна и подкрепяща среда, където всяко дете може свободно да изразява себе си, да се развива и да учи с увереност."
										img="/assets/home/център-за-деца-с-нарушения-в-развитието.webp"
										alt="Терапевти наблюдават развитието на дете в център за деца с увреждания и аутистичен спектър."
									/>
									<ContainerBox
										style="background-color:#FA7402;"
										title="Практическа програма с реални резултати"
										text="Използваме методи като арт терапия, градинска терапия, музикотерапия и творчество, които насърчават развитието на детето и доверието към терапевта."
										img="/assets/home/подкрепа-за-родители.webp"
										style2="filter: saturate(140%);"
										alt=""
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#088F9D;"
										title="Над 200 деца преодоляха трудностите"
										text="С помощта на опитни терапевти и разнообразни практически занимания за деца с аутизъм децата развиха социални умения, подобриха концентрацията си и станаха по-уверени в ежедневието."
										img="/assets/home/дневен-център-за-деца-и-младежи-с-увреждания.webp"
										alt="Терапевт работи с дете по време на терапевтична сесия в специализиран център за детско развитие."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#742C8F;"
										title="Индивидуален подход според нуждите"
										text="Вярваме, че всяко дете е уникално, затова нашият подход е гъвкав и съобразен, спрямо индивидуалните нужди и потребности на всяко дете."
										img="/assets/home/дневен-център-за-деца-с-увреждания.webp"
										alt="Терапевт провежда терапия с дете в център за деца с нарушения в развитието и аутизъм."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#E11172;"
										title="Създаваме безопасна и подкрепяща среда"
										text="В Sense Center, ние създаваме безопасна и подкрепяща среда, където всяко дете може свободно да изразява себе си, да се развива и да учи с увереност."
										img="/assets/home/център-за-деца-с-нарушения-в-развитието.webp"
										alt="Терапевти наблюдават развитието на дете в център за деца с увреждания и аутистичен спектър."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										style="background-color:#FA7402;"
										title="Практическа програма с реални резултати"
										text="Използваме методи като арт терапия, градинска терапия, музикотерапия и творчество, които насърчават развитието на детето и доверието към терапевта."
										img="/assets/home/подкрепа-за-родители.webp"
										style2="filter: saturate(140%);"
										alt=""
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
								]}>
								<StarReview
									reviewText={<>
										Детски център Sense върна усмивките на нашите лица. В центъра се излекува нашият син Марин. Благодаря ви от сърце за професионализма и отдадеността. Вечно благодарни: семейство Марковски
									</>}
									name="Philip Markovski"
									hrefGoogleReview="https://maps.app.goo.gl/pTAjYzFwjVY2EuxB6"
									class="important-h-450px important-sm:h-250px important-md:h-700px important-lg:h-600px important-xl:h-600px"
								/>
								<StarReview
									reviewText="Искам да изкажа огромната си благодарност на терапевтите в Сенс Център. Синът ми посещава центъра от април 2025г.В начолото не можеше да говори и не разбираше какво ние му обясняваме. Благодарение на различните видове терапии които посещава звукова, ерготерапия, речева, тъмна стая има голям напредък. Препоръчвам центъра, защото всичко в него е на ниво и синът ми се чувства щастлив"
									name="Ирена Бакалова"
									hrefGoogleReview="https://maps.app.goo.gl/cLwbN14c4QtN7Wmc6"
								/>
								<StarReview
									reviewText="Марти постъпи в център Sense преди два месеца, без да може да говори и разбира, без навици дори. Днес той е съвсем различно дете, общува, пее песни и ни разбира, дори в детската градина ни съобщиха, че вече всичко е в норма при него. Препоръчвам с две ръце центъра, защото всичко в него е на ниво и най-вече детето обожава да ходи в него. Разбира се, продължаваме, но вече много по-спокойни."
									name="yt-2007"
									hrefGoogleReview="https://maps.app.goo.gl/9u3gHoJAR32khXGa7"
								/>
								<StarReview
									reviewText={<>Момченцето ни имаше проблем с проговарянето, за няколко месеца работа със специалистите в центъра показа страхотен напредък. Изключително доволни сме със съпруга ми от резултатите, отношението към детето и подхода.
									</>}
									name="Silvya Manikatova"
									hrefGoogleReview="https://maps.app.goo.gl/KmxyBapgNRYeyQm49"
								/>
								<StarReview
									reviewText={<>Синът ни посещава центъра от почти половин година и за този период наблюдаваме изключителен напредък по отношение на когнитивните му умения.<br />
										Започна да проявява интерес към много неща у дома и значително подобри очния контакт.<br />
										Много сме благодарни на целия екип за разбирането и позитивизма, с който се отнасят към децата и техните родители.<br />
										Чувстваме се подкрепени! ❤️
									</>}
									name="Estel Dimova"
									hrefGoogleReview="https://maps.app.goo.gl/ZHLVaJygU4ryva9T6"
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
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 md:px-10 xl:px-8 py-2 pd:py-4 w-full md:w-1/3">
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
						bgImage="/assets/home/екипът-зад-sense-center.webp"
						bgSize="550%"
						bgPosition="right 0% top 42%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pb-30 md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/home/екипът-зад-sense-center.webp" alt="Екипът зад sense център за деца с нарушения в развитието." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10">
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
					<AnimatedComponent class="max-w-1500px flex lg:flex-row flex-col md:mx-auto gap-5">
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
								img="/assets/home/терапевтичен-център-за-деца.webp"
								alt="Терапевт провежда терапия с дете в терапевтичен център за деца."
								title="Експериментална стая за обучение и развитие"
								desc="Тази терапия е насочена към преодоляване на страхове и сензорни непоносимости като чувствителност към шумове, мокрене, цапане или допир до различни текстури. Използват се  игрови подходи, ролеви ситуации и контролирано излагане на стимули, за да се чувства детето сигурно и спокойно. Така то развива толерантност към различни усещания, намалява тревожността си и изгражда умения за саморегулация."
							/>
							<PuzzleIconReview
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/home/дневен-център-за-подкрепа-за-деца-и-младежи-с-увреждания.webp"
								alt="Терапевт провежда терапия с дете в дневен център за подкрепа за деца и младежи с увреждания."
								title="Развитие на социални умения"
								desc="Чрез интерактивни игри и преживявания в реална среда децата усвояват умения за общуване, самостоятелност и работа в екип. Развитието на социални умения включва тренировка на ситуации като пазаруване, поздравяване или ориентиране в непознати места и постепенно стават по-уверени и емоционално стабилни. Това им помага да станат по-самостоятелни, спокойни и адаптивни в ежедневието."
							/>
							<PuzzleIconReview
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/home/дневен-център-за-деца-с-увреждания-софия.webp"
								alt="Терапевт провежда терапия с дете в център за деца с увреждания в София."
								title="Градинска терапия"
								desc="Терапията в градината съчетава игри и творчески дейности с природни материали като рисуване с листа и цветя, ходене боси по пътеки от пясък и трева, засаждане и грижа за растения. Чрез тези занимания за деца с аутизъм,  децата развиват сетивата си, учат се на търпение и отговорност, намаляват стреса и изграждат по-добра емоционална устойчивост."
							/>
							<PuzzleIconReview
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/home/дневен-център-за-подкрепа-за-деца-и-младежи-с-увреждания.webp"
								alt="Терапевт провежда терапия с дете в дневен център за подкрепа за деца и младежи с увреждания."
								title="Музикотерапия при деца с аутизъм"
								desc="Музикотерапията за деца със СОП трансформира начина, по който децата с аутизъм се свързват със света около тях. В терапевтичната среда музиката се превръща в средство за учене и игра. Музикотерапията използва пеене, импровизация, слушане на музика и игра с инструменти, които развиват концентрацията, езиковите и социалните умения, подобрява се емоционалната регулация и се изгражда увереност."
							/>
							<PuzzleIconReview
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/home/дневен-център-за-деца-с-увреждания-софия.webp"
								alt="Терапевт провежда терапия с дете в център за деца с увреждания в София."
								title="Арт терапия при деца"
								desc="Арт терапията при деца с аутизъм използва силата на творческото изразяване чрез рисуване, моделиране с глина и работа с различни материали за развитие на емоционални и социални умения. Чрез специално структурирани дейности като “рисуване на емоциите”, сензорно изследване на текстури и творчески игри, децата учат да изразяват чувствата си без думи. Фокусът на арт терапията за деца със СОП е върху процеса, а не върху резултата."
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</section>

			<section class="xl:px-30 mx-20px">
				<AnimatedComponent class="mt-15">
					<h3>Как постигаме най-добри резултати при аутизъм</h3>
					<p>
						За едно дете с аутизъм най-важно е терапевтичният подход да бъде цялостен. Затова комбинираме практическите занимания за деца с аутизъм с основни терапии, което доказано води до най-добри резултати. Докато практическите занимания за деца с аутизъм дават възможност на децата да прилагат наученото в реална среда, основните терапии изграждат стабилна основа за развитие, като подобряват речта, вниманието, координацията и емоционалното състояние.
					</p>
				</AnimatedComponent>
			</section>

			<div class="w-full xl:px-30 mx-20px mt-20 md:mt-30">
				<H3Pink variant="h2" title="Основните терапии подходящи за деца с аутизъм" />
				<ServicesTable />
			</div>

			<section class="pb-40px xl:px-30 mx-20px pt-20 md:pt-30">
				<AnimatedComponent class="max-w-1500px mx-auto flex flex-col md:flex-row gap-10">
					<div class="flex flex-col justify-center items-start gap-2 w-full md:w-2/3 px-5">
						<div class="w-full">
							<p class="pb-0 mb-5 md:mt-0">Професионалната терапия осигурява забележителни подобрения в комуникативните  умения, социалните взаимодействия, поведенческите модели и качеството на живот на детето и семейство му. Комбинацията от основни терапевтични методи с практически
								осигурява оптимални резултати, като създава синергия между структурираното терапевтично въздействие и естественото учене в реална среда.</p>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 xl:px-5 py-2 pt-7 pb-3 w-full md:w-1/3">
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
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Чрез заниманията за деца с аутизъм детето започва да общува по-уверено с връстници и възрастни."
										text=""
										img="/assets/ergoterapia/дете-подобрява-фината-моторика.webp"
										alt="Детето се учи да общува с детски педагог психолог."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Ролевите игри подкрепят развитието на социални умения като децата се учат да разрешават конфликти чрез диалог и сътрудничество."
										text=""
										img="/assets/ergoterapia/дете-усъвършенства-грубата-моторика.webp"
										alt="Опитен детски психолог подобрява умението на дете да се изразява."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Музикотерапията при деца с аутизъм насърчава социалното взаимодействие и споделеното преживяване."
										text=""
										img="/assets/ergoterapia/дете-развива-умения-хранене-обличане.webp"
										alt="Развиване на активното слушане и разбирането на другите благодарение на детски психолог в София."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Участвайки в групови активности, детето развива по-добри умения за сътрудничество и работа в екип."
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
										title="Чрез заниманията за деца с аутизъм детето започва да общува по-уверено с връстници и възрастни."
										text=""
										img="/assets/ergoterapia/дете-подобрява-фината-моторика.webp"
										alt="Детето се учи да общува с детски педагог психолог."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Ролевите игри подкрепят развитието на социални умения като децата се учат да разрешават конфликти чрез диалог и сътрудничество."
										text=""
										img="/assets/ergoterapia/дете-усъвършенства-грубата-моторика.webp"
										alt="Опитен детски психолог подобрява умението на дете да се изразява."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Музикотерапията при деца с аутизъм насърчава социалното взаимодействие и споделеното преживяване."
										text=""
										img="/assets/ergoterapia/дете-развива-умения-хранене-обличане.webp"
										alt="Развиване на активното слушане и разбирането на другите благодарение на детски психолог в София."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Участвайки в групови активности, детето развива по-добри умения за сътрудничество и работа в екип."
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
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Арт терапията при деца с аутизъм подобрява емоционалната регулация, като създава усещане за контрол в безопасна среда."
										text=""
										img="/assets/ergoterapia/дете-подобрява-фината-моторика.webp"
										alt="Детето се учи да общува с детски педагог психолог."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Заниманията в експерименталната стая за обучение и развитие намаляват сензорните непоносимости и помагат за преодоляване на страхове."
										text=""
										img="/assets/ergoterapia/дете-усъвършенства-грубата-моторика.webp"
										alt="Опитен детски психолог подобрява умението на дете да се изразява."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Градинската терапия помага на децата да развият търпение, концентрация и отговорност по естествен и забавен начин."
										text=""
										img="/assets/ergoterapia/дете-развива-умения-хранене-обличане.webp"
										alt="Развиване на активното слушане и разбирането на другите благодарение на детски психолог в София."
									/>
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Комбинацията от практически терапии изгражда положителна самооценка, по-добра адаптивност и умения за справяне с различни ситуации."
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
										title="Арт терапията при деца с аутизъм подобрява емоционалната регулация, като създава усещане за контрол в безопасна среда."
										text=""
										img="/assets/ergoterapia/дете-подобрява-фината-моторика.webp"
										alt="Детето се учи да общува с детски педагог психолог."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Заниманията в експерименталната стая за обучение и развитие намаляват сензорните непоносимости и помагат за преодоляване на страхове."
										text=""
										img="/assets/ergoterapia/дете-усъвършенства-грубата-моторика.webp"
										alt="Опитен детски психолог подобрява умението на дете да се изразява."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Градинската терапия помага на децата да развият търпение, концентрация и отговорност по естествен и забавен начин."
										text=""
										img="/assets/ergoterapia/дете-развива-умения-хранене-обличане.webp"
										alt="Развиване на активното слушане и разбирането на другите благодарение на детски психолог в София."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										class2="important-xl:h-35 important-lg:h-32 important-md:h-37 important-sm:h-17 important-h-35"
										style="background-color:#E11172;"
										title="Комбинацията от практически терапии изгражда положителна самооценка, по-добра адаптивност и умения за справяне с различни ситуации."
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

			<DoodleDecor variant="pink" />

			<section class="gap-12 xl:px-30">
				<H3Blue variant="h2" title="Първична оценка при съмнение за аутизъм" />
			</section>

			<div class="flex flex-col justify-center items-center mx-auto px-20px xl:px-30">
				<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:pb-10 md:pt-4 py-5 md:bg-gradient-to-t lg:from-paper lg:to-paper bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
					<div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-10">
						<div class="xl:w-1/2 w-full">
							<p class="c-paper lg:c-paper-inv mb-1">
								В Sense Center предлагаме първична оценка за деца със съмнение за аутизъм.
							</p>
							<p class="c-paper lg:c-paper-inv">
								По време на консултацията се извършва обследване на поведението и актуалното състояние на детето.
							</p>
							<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Наблюдение на дете с нарушения в развитието" class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
							<p class="c-paper lg:c-paper-inv mb-1">
								Оценяват се уменията на детето за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси.
							</p>
							<p class="c-paper lg:c-paper-inv">
								Едновременно с това специалистите интервюират родителите за техните наблюдения и за училищното представяне на детето.
							</p>
						</div>
						<div class="xl:w-1/2 w-full">
							<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Семейство на дете с нарушения в развитието" class="mt-5 w-full h-auto object-cover rounded shadow" />
							<p class="c-paper lg:c-paper-inv italic font-300 mt-1 op-90%" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
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
								hrefGoogleReview="https://maps.app.goo.gl/csZ7TXUnvWMv8ics5"
							/>
							<GoogleStarReview
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
								img="https://lh3.googleusercontent.com/a-/ALV-UjXNDMsG5OUiJGd1LM9erKE5VNkTw48t7eeVN5Podk9V-RDbz_UM=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Великолепно отношение и професионализъм! Детето ми се чувства прекрасно там, винаги ходи с огромно желание и отбелязва значителен напредък, благодарение на този млад и отдаден екип.
									</>
								}
								name="Elena Todorova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/qu9agxG4vrrMb94t7"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a/ACg8ocKQnXIYLxIo9C3S859RjZDb6lZM0RbRmB1bxq4GCSL7095iPw=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Екип игграден от професионалисти, събрани със страхотна цел. Обществото ни има нужда от повече хора като вас!
									</>
								}
								name="Борис Томов"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/aJqMG4mjYLMxNR1Q6"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a-/ALV-UjV_F7MmSNrPIbep13Em26a6_XQ6Sqj4HN8CbunMe69L_EkZ5SBS=w72-h72-p-rp-mo-ba2-br100"
								reviewText={
									<>
										Изключително доволна съм от подхода и цялостното отношение към детето ми. Всички терапевти са много позитивни и работят с желание.
									</>
								}
								name="Весела атанасова"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/iCk3N9iTiz14e4SQ7"
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px pt-5 md:pt-0">
				<BackgroundIcons />
				<AnimatedComponent>
					<H3Pink title="Иновативен терапевтичен център за деца" />
				</AnimatedComponent>
				<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="xl:w-1/2 w-full">
						<img class="w-full h-full" src="/assets/home/вход-към-sense-center.webp" alt="Вход към сенс центъра" />
					</div>
					<div class="xl:w-1/2 w-full pt-20px text-center">
						<div class="">
							<p class="text-left mt-5">
								Sense Center център за детско развитие разполага с модерна и просторна база, разположена на площ от над 700 кв.м.
							</p>
							<p class="text-left">
								Центърът включва 14 специализирани терапевтични кабинета, стая за отдих и социализация, както и удобен паркинг за посетители.
							</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<section class="xl:px-30 mx-20px pt-50">
				<div class="mx-auto px-5">
					<StaffSlider
						variant="dots1"
						reviews={[
							{ name: "Марчела Йорданова" },
							{ name: "Марчела Йорданова" },
							{ name: "Марчела Йорданова" },
						]}>
						<div class="flex flex-col max-w-full relative overflow-hidden mx-auto">
							<div>
								<h4 class="mb-0 important-md:font-size-50px text-left">Марчела Йорданова</h4>
								<p class="important-font-100 pb-5 important-font-[MYRIADPRO-Light]">Главен логопед и управител</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">"Всяко дете принадлежи!"</p>
								<p class="italic font-size-16px mt-0 important-font-[MYRIADPRO-CONDIT]">д-р Зорница Маркова</p>
								<div class="w-full py-20px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
										<p class="text-left mt-1">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
										<p class="text-left mt-1">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-50px text-left">Марчела Йорданова</h4>
								<p class="important-font-100 pb-5 important-font-[MYRIADPRO-Light]">Главен логопед и управител</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">"Всяко дете принадлежи!"</p>
								<p class="italic font-size-16px mt-0 important-font-[MYRIADPRO-CONDIT]">д-р Зорница Маркова</p>
								<div class="w-full pb-20px pt-10px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
										<p class="text-left mt-1">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
										<p class="text-left mt-1">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-50px text-left">Марчела Йорданова</h4>
								<p class="important-font-100 pb-5 important-font-[MYRIADPRO-Light]">Главен логопед и управител</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">"Всяко дете принадлежи!"</p>
								<p class="italic font-size-16px mt-0 important-font-[MYRIADPRO-CONDIT]">д-р Зорница Маркова</p>
								<div class="w-full pb-20px pt-10px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
										<p class="text-left mt-1">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
										<p class="text-left mt-1">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
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
								Терапия<br />чрез игра
							</>
						}
						title="терапия"
						bgImage="/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp"
						bgSize="300%"
						bgPosition="right 40% top 90%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp" alt="Терапия чрез игра център за детско развитие" class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10">
								В нашия терапевтичен център за деца вярваме, че всяко дете носи в себе си потенциал за развитие, увереност и независимост. Създаваме подкрепяща среда, в която то да развива ключови умения за по-лесна адаптация и самостоятелност в ежедневието.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-50">
				<H3Pink title="Какво да правим, ако нямаме достъп до терапевт" />
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Вибромасажор Z-Vibe</h4>
							<div>
								<p class="text-left mt-0 md:mt-2">
									Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="xl:px-30 mx-20px py-5 md:py-10">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Вибромасажор Z-Vibe</h4>
							<div>
								<p class="text-left mt-0 md:mt-2">
									Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px py-5 md:py-10">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Вибромасажор Z-Vibe</h4>
							<div>
								<p class="text-left mt-0 md:mt-2">
									Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="xl:px-30 mx-20px py-5 md:py-10">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Вибромасажор Z-Vibe</h4>
							<div>
								<p class="text-left mt-0 md:mt-2">
									Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink2" />

			<section class="xl:px-30 mx-20px pt-5 md:pt-10">
				<div class="mx-auto">
					<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div class="xl:w-1/2 w-full pt-20px text-center">
							<h4 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Вибромасажор Z-Vibe</h4>
							<div>
								<p class="text-left mt-0 md:mt-2">
									Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
								</p>
							</div>
						</div>
						<div class="xl:w-1/2 w-full">
							<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue2" />

			<section>
				<AnimatedComponent class="mb-10 mt-5 md:mt-10 lg:w-800px mx-auto">
					<div class="flex flex-col justify-center items-start b-rd-12px bg-brand px-10 py-4">
						<p class="font-size-22px uppercase c-paper font-500 mb-0 tracking-0.5px font-[MYRIADPRO-Semibold]">Устойчиво развитие</p>
						<p class="c-paper font-300 font-[MYRIADPRO-Light]">Научете повече за особеностите на аутизма и подходящите методи за работа с деца в аутистичния спектър.<br />
							Използвайте визуални помощни средства и техники за управление на поведението.
						</p>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px pt-5 md:pt-0">
				<AnimatedComponent>
					<H3Blue title="Иновативен терапевтичен център за деца" />
				</AnimatedComponent>
				<AnimatedComponent class="flex xl:flex-row flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="xl:w-1/2 w-full">
						<img class="w-full h-full" src="/assets/home/вход-към-sense-center.webp" alt="Вход към сенс центъра" />
					</div>
					<div class="xl:w-1/2 w-full pt-20px text-center">
						<div class="">
							<p class="text-left mt-5">
								Sense Center център за детско развитие разполага с модерна и просторна база, разположена на площ от над 700 кв.м.
							</p>
							<p class="text-left">
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
									Нашите специализирани зали за ерготерапия, музикотерапия и звукова стимулация помагат на децата да развият и подобрят сетивните си умения.
								</p>
							</div>
						</div>
						<div class="my-5">
							<GallerySlider3
								imgs={[
									{ src: "/assets/home/стая-сензорна-терапия.webp", alt: "Кабинети за двигателно развитие" },
									{ src: "/assets/home/кабинети-за-сензорна-интеграция.webp", alt: "Кабинети за сензорна интеграция" },
									{ src: "/assets/home/кабинет-сензорна-интеграция.webp", alt: "Кабинет сензорна интеграция" },
									{ src: "/assets/home/кабинет-за-сензорна-интеграция.webp", alt: "Кабинет за сензорна интеграция" },
								]}
							/>
						</div>
					</div>
				</AnimatedComponent>
				<AnimatedComponent class="hidden xl:flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px mx-auto gap-10">
						<div class="xl:w-1/2 w-full my-5">
							<GallerySlider3
								imgs={[
									{ src: "/assets/home/стая-сензорна-терапия.webp", alt: "Кабинети за двигателно развитие" },
									{ src: "/assets/home/кабинети-за-сензорна-интеграция.webp", alt: "Кабинети за сензорна интеграция" },
									{ src: "/assets/home/кабинет-сензорна-интеграция.webp", alt: "Кабинет сензорна интеграция" },
									{ src: "/assets/home/кабинет-за-сензорна-интеграция.webp", alt: "Кабинет за сензорна интеграция" },
								]}
							/>
						</div>
						<div class="xl:w-1/2 w-full pt-20px text-center">
							<div class="">
								<p class="text-left mt-5">
									Нашите специализирани зали за ерготерапия, музикотерапия и звукова стимулация помагат на децата да развият и подобрят сетивните си умения.
								</p>
							</div>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="purple2" />

			<section>
				<AnimatedComponent class="gap-12 pb-8 md:pb-30 pt-100px md:pt-50px xl:px-30">
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
							<p class="mt-0">Ще обсъдим актуалното състояние на детето и ще организираме час за първична оценка, на която ще се запознаем с уменията на детето към настоящия момент, неговите дефицити и трудности.</p>
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
								Терапия<br />чрез игра
							</>
						}
						title="терапия"
						bgImage="/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp"
						bgSize="300%"
						bgPosition="right 40% top 90%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp" alt="Терапия чрез игра център за детско развитие" class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10">
								В нашия терапевтичен център за деца вярваме, че всяко дете носи в себе си потенциал за развитие, увереност и независимост. Създаваме подкрепяща среда, в която то да развива ключови умения за по-лесна адаптация и самостоятелност в ежедневието.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-40">
				<AnimatedComponent class="flex xl:flex-row-reverse flex-col justify-center items-center max-w-1200px xl:gap-10 relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="xl:w-1/2 w-full">
						<img class="w-full h-full" src="/assets/home/вход-към-sense-center.webp" alt="Вход към сенс центъра" />
					</div>
					<div class="xl:w-1/2 w-full pt-20px text-center">
						<div class="">
							<p class="text-left mt-5">
								Sense Center център за детско развитие разполага с модерна и просторна база, разположена на площ от над 700 кв.м.
							</p>
							<p class="text-left">
								Центърът включва 14 специализирани терапевтични кабинета, стая за отдих и социализация, както и удобен паркинг за посетители.
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
									title="“Без вас бяхме загубени!”"
									desc={<>
										Октомври 2024г. посетихме за първи път Сенс център. Дойдохме, защото имахме нужда от помощ, подкрепа и разбиране, т.като на Синът ни бе поставена диагноза , след което оставени сами да се справяме с този проблем.<br />
										След като синът ни бе видян от Специалистите в Сенс център се оказа,че проблемът му е друг и с правилната терапия, помощ, подкрепа и време , проблемът ще бъде преодолян.<br />
										От този момент до ден днешен той посещава няколко вида терапии съобразени с неговите нужди и възможности- Психомоторика, Речева терапия, Ерготерапия,Звукова стимулация. И за кратко време всеки един от семейството и роднините ни забеляза положителната промяна в комуникацията , поведението и навиците на детето.<br />
										Синът ни посещава с голямо удоволствие терапиите, винаги е усмихнат и щастлив след тях. Харесва много своите терапевти, които винаги са усмихнати, приветливи и насреща за помощ и подкрепа...<br />
										{/* Има още много работа и сме сигурни, че нашето момче ще се справи със своя проблем, защото знаем, че е в сигурни ръце и на най-правилното място.<br />
										Изказваме голяма благодарност към всеки един терапевт от Сенс център за грижите, усърдието , вниманието и доброто отношение към нашето момченце и към нас.<br />
										Без Вас бяхме изгубени.<br />
										БЛАГОДАРИМ ВИ, че ви има! */}
									</>}
									name="Pavlina Zaharieva"
									condition=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#E11172;"
									puzzleclass="c-brand-blue w-6 mr-2"
									title="“Получих отговори и решения”"
									desc={<>
										Огромни благодарности на екипа от Sense Center за отношението, отдадеността, подкрепата, разбирането и отделеното време за мен и моя син Мартин!<br />
										Не зная дали мога да разкажа кратко преживяно в няколко реда, но твърдя, че тяхната подкрепа и разбиране не съм среща досега. Синът ми е с проблем, който датира от детската градина и не съм спирала да търся помощ от психолози и психиатри. Търсих и се лутах до август 2024 г., когато ненадейно попаднах на безплатна консултация във Фейсбук и се записах на мига. Казах си, че няма нищо лошо да чуя още едно мнение. В деня на записания час отидох с усещането, че нещо приятно предстои и не грешах. Посрещнаха но с радост, внимание и топло отношение. Получих отговори и решения на проблема. Взех решение още на консултацията, че той е в добри ръце и го записах. Всеки път, когато има консултация, синът ми знае кой е денят и няма търпение да се види с терапевта си. Аз след сесията излиза пълен с любов и щастие в очите си...
										{/* Имаме път още да извървим, но резултат от консултациите започва да се вижда. Вярвам и знам, че е в добри ръце. Препоръчвам Ви Sense Center. Аз избрах тези специалисти и съм щастлива и благодарна. */}
									</>}
									name="Севдалина Тютюнджиева"
									condition=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#FA7402;"
									puzzleclass="c-brand-purple w-6 mr-2"
									title="“Давате сили на родителите и помагате на децата”"
									desc={<>
										"SENSE centar" отново ни върна усмивките на лицата. Моето дете посещава центърът от 3 месеца,като не се обръщаше на името си, не обръщаше внимание на оклоните,ходеше на пръсти, не изпълняваше команди! За краткото време в което синът ми посещава центъра, благодарение на истинският професияонализъм и специалното отношение на терапевтите към моето дете,виждаме с всяко изминало посещение развитие в детето. Започнал е да изпълнява команди,започнал е да се обръща на името си, започнал е да ходи по-малко на пръсти , определено е по-фокусиран и всичко това се дължи на "SENSE center". Сърдечно Ви благодарим затова, че давате сили на родителите и помагате на децата. "SENSE center" Благодарим Ви!
									</>}
									name="Любомира Ангелова"
									condition=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#FA7402;"
									puzzleclass="c-brand-purple w-6 mr-2"
									title="“Място, което променя животи!”"
									desc={<>
										Сенс Център е най-доброто място в София за работа с деца!<br />
										Когато синът ми беше на 3 години и половина, той не говореше. Започна да посещава Сенс Център още от самото му създаване и само след няколко месеца проговори! Опасенията ми се оказаха неоснователни, а днес той е едно прекрасно, лъчезарно и уверено дете - рецитира песнички и стихотворения с радост!<br />
										Сестра му също посещава центъра и ефектът върху тях е невероятен. Връзката им се заздрави, станаха по-емпатични един към друг и по-уверени в себе си.<br />
										Препоръчвам с цялото си сърце - място, което променя животи!
									</>}
									name="Alexander Soklev"
									condition=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#FA7402;"
									puzzleclass="c-brand-purple w-6 mr-2"
									title="“Много приятна среда за децата”"
									desc={<>
										Мишо посещава детски център SENSE от 6 месеца с голямо желание и нетърпение, за това време започна да говори много повече, да се обръща персонално по име към човека, с който иска да общува , започна да се шегува и да играе повече самостоятелно вкъщи. Другите дечица навън започнаха да му правят впечатление. Впечатленията са за много приятна среда за децата, любезно отношение от терапевтите и чести обратни връзки, свързани с развитието и промените в детето.
									</>}
									name="Gergana Berberova"
									condition=""
								/>
							</ContainerSlider>
						</AnimatedComponent>
						<PuzzleButton2
							class="important-mt-30px"
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
