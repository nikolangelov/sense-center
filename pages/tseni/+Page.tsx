import "solid-slider/slider.css";
import { AuthorContainer, GoogleStarReview, ReviewSlider, ReviewSlider2 } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink, H3SolidPink } from '../../components/H2WithImage';
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { Collapse } from "../../components/FAQ";

function SingleCollapse() {
	return (
		<>
			<div class="flex flex-col gap-5 md-gap-2 cursor-pointer max-w-1200px mx-auto">
				<Collapse title="1. От какво зависи цената на програмата?" desc="Програма се изготвя след проведена първична оценка/консултация на детето, при която се препоръчва конкретен брой терапии.">
					<div class="mt-4">
						Нашите пакети включват между 4 и 24 сесии седмично. Ако детето посещава по-малко от 4 сесии седмично, се прилагат единични цени, които са по-високи от цената за сесия в пакетните предложения. При избора на пакет цената на сесия се осреднява, което е по-изгодната опция за родителите.
					</div>
				</Collapse>

				<Collapse title="2. Каква е средната продължителност на терапевтична програма?" desc="Средната продължителност на една терапевтична програма е 1 година." />

				<Collapse title="3. Коя програма е най-изгодна?" desc="Най-изгоден е този план, който е най-подходящ за конкретното дете. За родителите е по-изгодно детето да посещава поне четири сесии седмично, тъй като тогава се прилага осредняване и стойността на отделните терапии е по-ниска в сравнение с единичните посещения." />

				<Collapse title="4. Кога се изготвя програмата и кога се плаща?" desc="Програмата се изготвя ежемесечно, като се адаптира според актуалните нужди на детето. Заплащането се извършва авансово – в началото на всеки месец." />

				<Collapse title="5. Кой съставя индивидуалната програма и какво съдържа тя?" desc="Екипът ни съставя програмата, която включва подробно разписание по дни и часове и видовете терапии. Родителят получава писмен индивидуален план с дългосрочни цели, съгласува се и се подписва. Планът се актуализира при нужда." />

				<Collapse title="6. Кога препоръчвате поддържаща, а кога – интензивна терапия?" desc="Интензивна терапия препоръчваме при по-комплексни затруднения (например аутизъм, Разстройства от аутистичния спектър, ХАДВ, умствена изостаналост, синдром на Даун). Поддържаща терапия е подходяща за деца, които вече са преминали интензивен курс или за развитие на социални и езикови умения, както и емоционална интелигентност." />

				<Collapse title="7. Предлагате ли разсрочено плащане?" desc="Да, при по-висока стойност на месечните пакети е възможно плащане на 2 вноски – в началото и средата на месеца." />

				<Collapse title="8. Предлагате ли отстъпки от цената?" desc="При заплащане на сумата за целия период на договора, получавате 10 % отстъпка от стойността на цялата сума." />

				<Collapse title="9. Има ли фиксирани програми с конкретна цена?" desc="Цената е фиксирана само на единичната терапевтична сесия. Таксата на програмата се определя от броя посещения на детето през периода на договора." />

				<Collapse title="10. Мога ли да избирам колко пъти седмично да идва детето?" desc="След първичната оценка на база индивидуалните нужди на детето и заявката на родителите, екипът препоръчва оптимална честота на посещенията. Крайното решение се взема от родителите, като те имат възможност да изберат различен пакет от препоръчания." />

				<Collapse title="11. Може ли да се започне с поддържаща и по-късно да се премине към интензивна терапия?" desc="Да, програмата може да се актуализира и преминаването към по-интензивна терапия да се осъществи постепенно, според потребностите на детето." />

				<Collapse title="12. Какво се случва със заплатените сесии, ако детето се разболее?" desc="Пропуснатите сесии се отработват допълнително през следващия месец." />

				<Collapse title="13. Може ли детето да се откаже от програмата след няколко посещения?" desc="Да, при уважителни причини като здравословни проблеми или смяна на местоживеене. Прекратяването се извършва с едномесечно писмено предизвестие." />

				<Collapse title="14. Провеждате ли единични терапевтични сесии?" desc="Да, понякога провеждаме индивидуални сесии, когато родителят желае консултация или детето да се запознае с обстановката. Това е особено подходящо за семейства от други градове или при „период на адаптация“ към центъра." />

				<Collapse title="15. Какво се случва със заплатените сесии, ако детето се разболее?" desc="При заболяване или друга уважителна причина детето не губи предплатените си посещения. Пропуснатите сесии могат да бъдат отработени допълнително през следващия месец." />
			</div>
		</>
	);
}

export default function Page() {
	return (
		<>
			<div class="[background-color:#fcfcfc]">
				<div
					class="mb-20 mx-[0px] relative h-[100vh] md:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3)),url(/assets/asperger/синдром-аспергер.webp)] bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3)),url(/assets/asperger/синдром-аспергер-мобилно.webp)] bg-[position:right_100%_bottom_80%] md:bg-[position:right_100%_bottom_50%] bg-no-repeat bg-cover [mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.8)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)]" role="img" aria-label="Деца със синдром на Аспергер"></div>
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
								<PuzzleButton />
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="md:pb-10 lg:px-30">
				<H2Echo
					maintitle="КАК СЕ ФОРМИРА ЦЕНАТА"
					title="ЦЕНАТА"
					bgImage="/assets/SOP/ограмотяване-деца-специални-образователни-потребности.webp"
					bgSize="350%"
					bgPosition="right 10% top 100%"
				/>
			</div>

			<section class="relative max-w-1500px md:pt-10 xl:mx-auto mx-20px flex md:flex-row flex-col justify-center items-center md:gap-8">
				<BackgroundIcons />
				<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
					<AnimatedComponent>
						<div class="w-full h-full">
							<div class="bg-paper mx-auto">
								<div class="">
									<div class="mx--20px">
										<img src="/assets/SOP/ограмотяване-деца-специални-образователни-потребности.webp" alt="Ограмотяване на деца със специални образователни потребности." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
									</div>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</section>

				<section class="md:w-1/2">
					<AnimatedComponent class="w-full md:px-3 my-auto">
						<p class="mt-10 md:mt-0">
							В Sense Center вярваме, че всяко дете е уникално – със свои нужди, индивидуално темпo на развитие и потенциал. Именно затова нямаме фиксирани универсални програми. Провеждаме първична оценка/консултация по време на която нашите специалисти анализират актуалното състояние, уменията и трудностите на детето. След което започва изготвянето на строго индивидуална терапевтична програма, която определя най-подходящите видове терапии, както и техният брой и честота.
						</p>
					</AnimatedComponent>
				</section>
			</section>

			<section class="max-w-lg xl:max-w-1500px mx-20px md:mx-auto pb-5 mt-10 md:mt-20 lg:py-10 lg:px-4 xl:px-0">
				<AnimatedComponent class="md:px-3 mx-20px">
					<p class="font-[MYRIADPRO-Bold]">
						Формулирането на крайната стойност зависи от няколко основни компонента:
					</p>
				</AnimatedComponent>
				<AnimatedComponent class="flex flex-col xl:flex-row justify-center gap-4">
					<div
						class="relative rounded-2xl shadow-md overflow-hidden text-white text-lg xl:w-300px bg-brand">
						<div class="flex flex-items-start c-paper px-5 py-5 md:py-8 flex items-center justify-center gap-3">
							<div>
								<img src="/assets/bg-puzzle-5.svg" class="w-11 h-11 md:w-12 md:h-12" alt="" />
							</div>
							<p class="my-0 mr-2 c-paper font-[MyriadPro-Semibold] flex flex-self-start font-size-5 md:font-size-6">Честотата на терапевтичните сесии</p>
						</div>
					</div>
					<div
						class="relative rounded-2xl shadow-md overflow-hidden text-white text-lg xl:w-300px bg-brand-blue">
						<div class="flex flex-items-start c-paper px-5 py-5 md:py-8 flex items-center justify-center gap-3">
							<div>
								<img src="/assets/pink-puzzle-piece-li-100px.svg" class="w-11 h-11 md:w-12 md:h-12" alt="" />
							</div>
							<p class="my-0 mr-2 c-paper font-[MyriadPro-Semibold] flex flex-self-start font-size-5 md:font-size-6">Видове включени терапии</p>
						</div>
					</div>
					<div
						class="relative rounded-2xl shadow-md overflow-hidden text-white text-lg xl:w-300px bg-brand-purple">
						<div class="flex flex-items-start c-paper px-5 py-5 md:py-8 flex items-center justify-center gap-3">
							<div>
								<img src="/assets/sense-orange-puzzle-piece.svg" class="w-9 h-9 md:w-12 md:h-12" alt="" />
							</div>
							<p class="my-0 mr-2 c-paper font-[MyriadPro-Semibold] flex flex-self-start font-size-5 md:font-size-6">Продължителност на програмата</p>
						</div>
					</div>
					<div
						class="relative rounded-2xl shadow-md overflow-hidden text-white text-lg xl:w-300px bg-brand-orange">
						<div class="flex flex-items-start c-paper px-5 py-5 md:py-8 flex items-center justify-center gap-3">
							<div>
								<img src="/assets/blue-puzzle-piece-li-100px.svg" class="w-11 h-11 md:w-12 md:h-12" alt="" />
							</div>
							<p class="my-0 mr-2 c-paper font-[MyriadPro-Semibold] flex flex-self-start font-size-5 md:font-size-6">Възможности и желания на семейството</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<section class="pb-40px pt-30 xl:px-30 mx-20px relative">
				<BackgroundIcons />
				<H3SolidPink variant="h2" title="Гъвкави решения за Вашето семейство" />
				<AnimatedComponent class="max-w-1500px mx-auto flex flex-col md:flex-row gap-16">
					<div class="flex flex-col justify-between items-start gap-2 w-full md:w-2/4 px-5">
						<div class="w-full">
							<p class="pb-0 mb-2 mt-0">Цената на терапевтичната програма обикновено варира в зависимост от нужния брой сесии седмично, включените специалисти и дългосрочните цели.</p>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 md:px-10 xl:px-8 pb-2 pt-5 w-full md:w-2/4">
						<div class="flex justify-center items-center gap-4">
							<img src="/assets/exclamation-mark-icon.webp" class="w-14 h-14" />
						</div>
						<p class="font-[MYRIADPRO-Semibold] c-paper uppercase font-size-20px leading-6">Цените се уточняват след първоначална консултация или първична оценка от нашия екип</p>
						<p class="font-[MYRIADPRO-Light] c-paper font-size-17px leading-6">Подхождаме с разбиране към възможностите на всяко семейство и при нужда предлагаме алтернативи и гъвкави решения.</p>
					</div>
				</AnimatedComponent>
			</section>

			<div class="md:pb-10 lg:px-30 md:mt-30">
				<H2Echo
					maintitle="ИНДИВИДУАЛНА ТЕРАПЕВТИЧНА ПРОГРАМА"
					title="ПРОГРАМА"
					bgImage="/assets/SOP/ограмотяване-деца-специални-образователни-потребности.webp"
					bgSize="350%"
					bgPosition="right 10% top 100%"
				/>
			</div>

			<section class="relative max-w-1500px md:pt-10 xl:mx-auto mx-20px flex md:flex-row flex-col justify-center items-center md:gap-8">
				<BackgroundIcons />
				<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
					<AnimatedComponent>
						<div class="w-full h-full">
							<div class="bg-paper mx-auto">
								<div class="">
									<div class="mx--20px">
										<img src="/assets/SOP/ограмотяване-деца-специални-образователни-потребности.webp" alt="Ограмотяване на деца със специални образователни потребности." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
									</div>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</section>

				<section class="md:w-1/2">
					<AnimatedComponent class="w-full md:px-3 my-auto">
						<p class="mt-10 md:mt-0">
							В Sense Center всяко дете получава индивидуален терапевтичен план, изготвен въз основа на първичната оценка и специфичните му нужди.
						</p>
						<p class="mt-1">
							Формулират се <span class="font-[MYRIADPRO-Bold]">ясни цели</span> за всяка от основните области на развитие – комуникация, двигателни умения, когнитивно и емоционално функциониране, социални взаимодействия. За постигането на тези цели са описани конкретни подходи и включени специалисти – например логопед, психолог, ерготерапевт.
						</p>
						<p class="mt-1">
							<span class="font-[MYRIADPRO-Bold]">Планът се актуализира периодично, за да гарантира ефективност на терапевтичната работа.</span> Той служи като стабилна основа за съгласуваност между терапевтите и родителите, като осигурява целенасочена, последователна и адаптирана подкрепа за всяко дете.
						</p>
					</AnimatedComponent>
				</section>
			</section>

			<DoodleDecor variant="purple2" />

			<div class="xl:px-60 mx-20px">
				<H3Blue variant="h2" title="Какво включва терапевтичната програма?" />
				<AnimatedComponent class="px-5">
					<p class="mt--3">
						Всяка програма в Sense Center е създадена така, че родителите да имат яснота и спокойствие по време на целия процес. В цената са включени всички терапевтични сесии според избрания пакет, както и ежеседмични екипни срещи между специалистите, които работят с вашето дете. Всеки месец ще получавате писмен доклад за напредъка, придружен с видеозаписи от част от проведените сесии, за да може да проследявате развитието и у дома. При нужда или по Ваше желание организираме допълнителни срещи с целия екип, където заедно обсъждаме постигнатото и планираме следващите стъпки за подкрепа.
					</p>
					<p class="mt-5">
						Нашите програми обхващат от 4 до 24 сесии седмично. Ако детето посещава по-малко от 4 сесии, се прилагат единични цени, които са по-високи от тези в програмата. При избор на програма цената на сесия се осреднява, като повечето терапии излизат по-изгодни в сравнение с единичните посещения. Изготвяме различни видове терапевтични програми спрямо трудностите на детето:
					</p>
				</AnimatedComponent>
				<AnimatedComponent class="px-5 mt-15 md:mt-40 mx-auto important-md:max-w-700px">
					<h3 class="important-md:font-size-40px important-leading-8 mt-3 mb-0 md:my-3 c-brand">
						Програма:<br />
						Един вид терапия
					</h3>
					<p class="mb-6 md:mb-8 leading-6 font-size-19px c-gray-900 font-[MYRIADPRO-CONDIT]">Пример:<br />Логопедична подкрепа при езиково забавяне</p>
				</AnimatedComponent>
				<div class="flex md:flex-row flex-col flex-wrap gap-5 md:gap-0 justify-center items-center">
					<AnimatedComponent class="px-5 md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<div>
								<img class="w-full h-full" src="/assets/detski-psiholog/макети-на-дома.webp" alt="Макет на дома." />
							</div>
							<div class="w-full pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										Ако детето Ви среща трудности с изразяването, не съставя изречения според възрастта или има проблеми с произношението, е подходяща терапевтична програма с детски логопед насочена върху речевите умения.
									</p>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</div>

			<div class="mx-5 mt-6 md:mt-20 mb-10">
				<AnimatedComponent class="gap-12 px-2 py-8 bg-brand-purple b-rd-12px max-w-700px mx-auto">
					<div class="px-5 md:px-10">
						<h4 class="c-paper text-left important-mb-6 important-font-size-30px important-lg:font-size-35px important-leading-9 important-md:leading-11">Програмата включва:</h4>
						<div class="flex flex-col justify-center items-start">
							<div class="flex items-center justify-center gap-3 mb-1">
								<div>
									<img src="/assets/pink-puzzle-piece-li-100px.svg" class="saturate-120 w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									4 до 8 индивидуални логопедични сесии седмично
								</p>
							</div>
							<div class="flex items-center justify-center gap-3">
								<div>
									<img src="/assets/yellow-puzzle-piece-li-100px.svg" class="saturate-120 w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Насоки за упражнения у дома
								</p>
							</div>
							<div class="flex items-center justify-center gap-4 ml-1.5">
								<div>
									<img src="/assets/sense-orange-puzzle-piece.svg" class="saturate-120 w-9.5 h-9.5" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Регулярна обратна връзка относно напредъка
								</p>
							</div>
							<p class="c-paper font-[MYRIADPRO-CONDIT] tracking-0.3 font-size-18px mb-1">
								За кого е подходяща?
							</p>
							<p class="c-paper font-[MYRIADPRO-Light] font-size-18px mt-1">
								При леки до умерени езикови затруднения, когато се търси насочена и консистентна подкрепа.
							</p>
						</div>
					</div>
				</AnimatedComponent>
			</div>

			<DoodleDecor variant="pink2" />

			<div class="mx-20px">
				<AnimatedComponent class="px-5 mt-5 max-w-700px mx-auto">
					<h3 class="important-md:font-size-40px important-leading-8 mt-3 mb-0 md:my-3 c-brand">Комбинирана програма</h3>
					<p class="mb-6 md:mb-8 leading-6 font-size-19px c-gray-900 font-[MYRIADPRO-CONDIT]">Пример:<br />Комплексна подкрепа при аутизъм</p>
				</AnimatedComponent>
				<div class="flex md:flex-row flex-col flex-wrap gap-5 md:gap-0 justify-center items-center">
					<AnimatedComponent class="px-5 md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<div>
								<img class="w-full h-full" src="/assets/detski-psiholog/макети-на-дома.webp" alt="Макет на дома." />
							</div>
							<div class="w-full pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										При деца с разстройства от аутистичния спектър, силна сензорна чувствителност, забавено социално и емоционално развитие, често е необходима комбинация от терапии, които работят заедно за постигане на цялостен напредък.
									</p>
									<p class="text-left mt-0 md:mt-2">
										Спрямо честотата на терапевтичните сесии програмите се разделят на поддържаща и интензивна.
									</p>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</div>

			<div class="mx-5 mt-4 md:mt-18 mb-10">
				<AnimatedComponent class="gap-12 px-2 py-8 bg-brand-blue b-rd-12px max-w-700px mx-auto">
					<div class="px-5 md:px-10">
						<h4 class="c-paper text-left important-mb-6 important-font-size-30px important-lg:font-size-35px important-leading-8 important-md:leading-10 important-font-[MyriadPro-Semibold] uppercase">Поддържаща програма</h4>
						<h5 class="c-paper font-size-22px important-leading-6">Първична оценка и планиране</h5>
						<div class="flex flex-col justify-center items-start mb-10">
							<div class="flex items-center justify-center gap-3 mb-1">
								<div>
									<img src="/assets/pink-puzzle-piece-li-100px.svg" class="saturate-120 w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Първична оценка на актуалното състояние на детето
								</p>
							</div>
							<div class="flex items-center justify-center gap-3">
								<div>
									<img src="/assets/yellow-puzzle-piece-li-100px.svg" class="saturate-120 w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Поставяне на цели за изпълнение
								</p>
							</div>
							<div class="flex items-center justify-center gap-3 mb-1">
								<div>
									<img src="/assets/pink-puzzle-piece-li-100px.svg" class="w-12 h-12 hue-rotate-300 brightness-60" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Изготвяне на индивидуална програма спрямо специфичните нужди на детето
								</p>
							</div>
						</div>

						<h5 class="c-paper font-size-22px important-leading-6">Терапевтична работа</h5>
						<div class="flex flex-col justify-center items-start">
							<div class="flex items-center justify-center gap-3 mb-1">
								<div>
									<img src="/assets/pink-puzzle-piece-li-100px.svg" class="saturate-120 w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Провеждане на индивидуални терапевтични сесии със специалист
								</p>
							</div>
							<div class="flex items-center justify-center gap-3">
								<div>
									<img src="/assets/yellow-puzzle-piece-li-100px.svg" class="saturate-120 w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									4 до 8 терапевтични сесии седмично
								</p>
							</div>
							<div class="flex items-center justify-center gap-3 mb-1">
								<div>
									<img src="/assets/pink-puzzle-piece-li-100px.svg" class="w-12 h-12 hue-rotate-300 brightness-60" alt="" />
								</div>
								<div>
									<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
										Включва терапии като:
									</p>
									<ul class="ml-5">
										<li class="c-paper font-[MYRIADPRO-Light] font-size-15px">
											Звукова стимулация
										</li>
										<li class="c-paper font-[MYRIADPRO-Light] font-size-15px">
											Психомоторика
										</li>
										<li class="c-paper font-[MYRIADPRO-Light] font-size-15px">
											Детски логопед
										</li>
										<li class="c-paper font-[MYRIADPRO-Light] font-size-15px">
											Детски психолог
										</li>
										<li class="c-paper font-[MYRIADPRO-Light] font-size-15px">
											Ерготерапия
										</li>
									</ul>
								</div>
							</div>
							<div class="flex items-center justify-center gap-4 ml-1.5 mb-1">
								<div>
									<img src="/assets/sense-orange-puzzle-piece.svg" class="saturate-120 w-9.5 h-9.5" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Насоки за упражнения у дома
								</p>
							</div>
							<div class="flex items-center justify-center gap-3 mb-1">
								<div>
									<img src="/assets/pink-puzzle-piece-li-100px.svg" class="saturate-120 w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Регулярна обратна връзка относно напредъка
								</p>
							</div>
							<p class="c-paper font-[MYRIADPRO-CONDIT] tracking-0.3 font-size-18px mb-1">
								За кого е подходяща?
							</p>
							<p class="c-paper font-[MYRIADPRO-Light] font-size-18px mt-1">
								Подходяща е за деца с разнообразни затруднения, при които е важно да се проследява развитието и да се осигурява целенасочена терапия
							</p>
						</div>
					</div>
				</AnimatedComponent>
			</div>

			<div class="mx-5 mt-12 md:mt-18 mb-10">
				<AnimatedComponent class="gap-12 px-2 py-8 bg-brand-purple b-rd-12px max-w-700px mx-auto">
					<div class="px-5 md:px-10">
						<h4 class="c-paper text-left important-mb-6 important-font-size-30px important-lg:font-size-35px important-leading-8 important-md:leading-10 important-font-[MyriadPro-Semibold] uppercase">Интензивна програма</h4>
						<h5 class="c-paper font-size-22px important-leading-6">Първична оценка и планиране</h5>
						<div class="flex flex-col justify-center items-start mb-10">
							<div class="flex items-center justify-center gap-3 mb-1">
								<div>
									<img src="/assets/pink-puzzle-piece-li-100px.svg" class="saturate-120 w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Първична оценка на актуалното състояние на детето
								</p>
							</div>
							<div class="flex items-center justify-center gap-3">
								<div>
									<img src="/assets/yellow-puzzle-piece-li-100px.svg" class="saturate-120 w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Поставяне на цели за изпълнение
								</p>
							</div>
							<div class="flex items-center justify-center gap-3 mb-1">
								<div>
									<img src="/assets/blue-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Изготвяне на индивидуална програма спрямо специфичните нужди на детето
								</p>
							</div>
						</div>

						<h5 class="c-paper font-size-22px important-leading-6">Терапевтична работа</h5>
						<div class="flex flex-col justify-center items-start">
							<div class="flex items-center justify-center gap-3 mb-1">
								<div>
									<img src="/assets/pink-puzzle-piece-li-100px.svg" class="saturate-120 w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Провеждане на индивидуални терапевтични сесии със специалист
								</p>
							</div>
							<div class="flex items-center justify-center gap-3">
								<div>
									<img src="/assets/yellow-puzzle-piece-li-100px.svg" class="saturate-120 w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									16 до 24 терапевтични сесии седмично
								</p>
							</div>
							<div class="flex items-center justify-center gap-3 mb-1">
								<div>
									<img src="/assets/blue-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
								</div>
								<div>
									<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
										Включва терапии като:
									</p>
									<ul class="ml-5">
										<li class="c-paper font-[MYRIADPRO-Light] font-size-15px">
											Звукова стимулация
										</li>
										<li class="c-paper font-[MYRIADPRO-Light] font-size-15px">
											Психомоторика
										</li>
										<li class="c-paper font-[MYRIADPRO-Light] font-size-15px">
											Детски логопед
										</li>
										<li class="c-paper font-[MYRIADPRO-Light] font-size-15px">
											Детски психолог
										</li>
										<li class="c-paper font-[MYRIADPRO-Light] font-size-15px">
											Ерготерапия
										</li>
										<li class="c-paper font-[MYRIADPRO-Light] font-size-15px">
											Обучение за концентрация и внимание
										</li>
										<li class="c-paper font-[MYRIADPRO-Light] font-size-15px">
											Развитие на емоционална интелигентност
										</li>
									</ul>
								</div>
							</div>
							<div class="flex items-center justify-center gap-4 ml-1.5 mb-1">
								<div>
									<img src="/assets/sense-orange-puzzle-piece.svg" class="saturate-120 w-9.5 h-9.5" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Насоки за упражнения у дома
								</p>
							</div>
							<div class="flex items-center justify-center gap-3 mb-1">
								<div>
									<img src="/assets/pink-puzzle-piece-li-100px.svg" class="saturate-120 w-12 h-12" alt="" />
								</div>
								<p class="c-paper font-[MYRIADPRO-Light] font-size-18px">
									Регулярна обратна връзка относно напредъка
								</p>
							</div>
							<p class="c-paper font-[MYRIADPRO-CONDIT] tracking-0.3 font-size-18px mb-1">
								За кого е подходяща?
							</p>
							<p class="c-paper font-[MYRIADPRO-Light] font-size-18px mt-1">
								При по-комплексни състояния, които се нуждаят от интензивна терапия и мултидисциплинарен подход.
							</p>
						</div>
					</div>
				</AnimatedComponent>
			</div>

			<section class="w-full mx-auto md:mt-30">
				<div class="pb-30 pt- mx-auto relative max-w-700px">
					<AnimatedComponent class="max-w-1500px mx-auto flex flex-col md:flex-row gap-14">
						<div class="flex flex-col justify-center items-center b-rd-12px bg-brand-orange px-6 md:px-10 xl:px-8 pb-2 pt-5 w-full">
							<div class="flex justify-center items-center gap-4">
								<img src="/assets/exclamation-mark-icon.webp" class="w-14 h-14" />
							</div>
							<p class="font-[MYRIADPRO-Semibold] c-paper uppercase font-size-17px leading-6">Независимо от вида на избраната програма, всяко дете ще получи качествена терапевтична подкрепа, адаптирана към неговите нужди.</p>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<div class="md:pb-10 lg:px-30">
				<H2Echo
					maintitle="Единична терапевтична сесия"
					title="сесия"
					bgImage="/assets/SOP/ограмотяване-деца-специални-образователни-потребности.webp"
					bgSize="350%"
					bgPosition="right 10% top 100%"
				/>
			</div>

			<section class="relative max-w-1500px md:pt-10 xl:mx-auto mx-20px flex md:flex-row flex-col justify-center items-center md:gap-8">
				<BackgroundIcons />
				<section class="relative inline-block w-full md:w-1/2 h-full" data-orig-width="1207" data-orig-height="720">
					<AnimatedComponent>
						<div class="w-full h-full">
							<div class="bg-paper mx-auto">
								<div class="">
									<div class="mx--20px">
										<img src="/assets/SOP/ограмотяване-деца-специални-образователни-потребности.webp" alt="Ограмотяване на деца със специални образователни потребности." class="important-b-rd-0 important-md:b-rd-12px w-full h-auto object-cover shadow" />
									</div>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</section>

				<section class="md:w-1/2">
					<AnimatedComponent class="w-full md:px-3 my-auto">
						<p class="mt-10 md:mt-0">
							Единичната терапевтична сесия представлява възможност за фокусирана работа върху конкретно затруднение, без необходимостта от дългосрочно ангажиране. Сесията е структурирана така, че да предоставим максимална полза за Вас и Вашето дете в рамките на часа. Тази форма на подкрепа е особено подходяща когато се нуждаете от професионална консултация, препоръки и съвети за подкрепа на детското развитие. Въпреки това, нашият подход в Sense Center е комплексен и обикновено препоръчваме комбинирани програми, включващи терапии, които се допълват и подпомагат взаимно за постигане на оптимални резултати.
						</p>
					</AnimatedComponent>
				</section>
			</section>

			<div class="gap-12 pt-10 md:pt-50 pb-5 md:pb-0 xl:px-30 mx-20px">
				<div class="">
					<ReviewSlider2
						variant="dots0"
						reviews={[
							{ name: "Детски логопед" },
							{ name: "Ерготерапия" },
							{ name: "Звукова стимулация" },
							{ name: "Обучение за концентрация и внимание" },
							{ name: "Тъмна сензорна стая" },
							{ name: "Психомоторика" },
							{ name: "Многофункционална стая" },
						]}
					>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/home/детски-логопед.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Детски логопед"
							description=""
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/ерготерапия-деца.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Ерготерапия"
							description=""
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/звукова-стимулация.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Звукова стимулация"
							description=""
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(/assets/umstvena-izostanalost/обучение-концентрация-внимание-деца.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Обучение за концентрация и внимание"
							description=""
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Тъмна сензорна стая"
							description=""
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/психомоторика.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Психомоторика"
							description=""
						/>
						<AuthorContainer
							href=""
							style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/многофункционална-стая.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
							name="Многофункционална стая"
							description=""
						/>
					</ReviewSlider2>
				</div>
			</div>

			<DoodleDecor variant="pink" />

			<div class="relative mx-20px my-10">
				<H3Pink variant="h2" title="Кой пакет е подходящ за Вас?" />
				<AnimatedComponent class="mt-5 px-5">
					<BackgroundIcons />
					<p>
						<span class="font-[MYRIADPRO-Bold] c-gray-900">Всяко дете е различно.</span> Затова и терапевтичната подкрепа трябва да бъде индивидуално планирана и съобразена с конкретното състояние, възрастта, нуждите и възможностите на семейството.
					</p>
					<p>
						<span class="font-[MYRIADPRO-Bold] c-gray-900">Няма универсално решение</span>, което да помага на всяко дете. Ето защо изготвяме персонализирани пакети от терапии, които адаптираме във времето, за да бъдат постоянни и ефективни.
					</p>
				</AnimatedComponent>
			</div>

			<DoodleDecor variant="purple" />

			<div class="mx-20px">
				<H3Blue variant="h2" title="Първична оценка" />
				<div class="flex flex-col justify-center items-center mx-auto px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:pb-10 md:pt-4 py-5 md:bg-gradient-to-t lg:from-paper lg:to-paper bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
						<div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
							<div class="xl:w-1/2 w-full md:pl-7">
								<p class="c-paper lg:c-paper-inv mb-1">
									В Sense Center предлагаме <strong class="font-[MYRIADPRO-Bold]">първична оценка</strong> от специалист за деца със съмнение за забавяне в развитието.
								</p>
								<p class="c-paper lg:c-paper-inv">
									По време на консултацията се извършва обследване на поведението и актуалното състояние на детето.
								</p>
								<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="" class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv mb-1">
									Оценяват се социалните и комуникативните умения на детето, неговото двигателно развитие, както и общите познавателни способности.
								</p>
								<p class="c-paper lg:c-paper-inv">
									Едновременно с това специалистите интервюират родителите за техните наблюдения и за училищното представяне на детето.
								</p>
								<div class="pt-8 flex md:flex-row flex-col justify-center items-center">
									<PuzzleButton />
								</div>
							</div>
							<div class="xl:w-1/2 w-full">
								<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="" class="mt-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv italic font-300 mt-2 leading-5 lg:leading-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
									Препоръчително е да донесете всички налични медицински документи, които могат да бъдат от полза за изясняване на актуалното състояние на детето.
								</p>
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="pink" />

			<div class="mb-10 px-5 mt-10 gap-12 pb-8 md:pb-20 pt-50px xl:px-30 bg-brand-blue -mx-20px">
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
							<GoogleStarReview
								img="/assets/GoogleLogoPNGImage.webp"
								reviewText={
									<>
										Детето ми посещава центъра от 4 месеца. Забелязваме напредък в комуникативните умения и изпълнението на ежедневни дейности. Препоръчвам силно, най-вече заради екипът от специалисти, които са винаги топли и приветливи❤️. Посрещнаха ни с много разбиране.<br />
										Благодарим Ви!
									</>
								}
								name="Божана Михайлова"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/1zy2Sq4Sf4QZf1qb6"
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px pb-50px">
				<H3Blue variant="h2" title="Въпроси и отговори" />
				<SingleCollapse />
			</section>

			<DoodleDecor variant="blue2" />
		</>
	);
}
