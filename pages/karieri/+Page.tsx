import "solid-slider/slider.css";
import { AuthorContainer, PuzzleIconReview, ReviewersImageReview, ReviewSlider, ReviewSlider2 } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink } from '../../components/H2WithImage';
import { ServiceContaner } from '../../components/ServiceContainer';
import { PuzzleButton2 } from "../../components/PuzzleButton";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { Collapse } from "../../components/FAQ";
import { VideoHero } from "../../components/HeroVideo";
import { createSignal } from 'solid-js';

const [isPlaying, setIsPlaying] = createSignal(false);

function SingleCollapse() {
	return (
		<>
			<div class="flex flex-col gap-5 md-gap-2 cursor-pointer max-w-1200px mx-auto">
				<Collapse title="1. Приемате ли кандидати без дългогодишен опит?" desc="Да! Търсим мотивирани и отдадени хора с желание за учене и развитие. Осигуряваме вътрешно обучение и супервизия, особено за специалисти в началото на професионалния им път.">
				</Collapse>

				<Collapse title="2. Наемате ли стажанти?" desc="Да. Ако сте студент с интерес към нашата работа и подход, не се колебайте да ни пишете, с удоволствие ще се запознаем и ще обсъдим възможностите.">
				</Collapse>

				<Collapse title="3. Колко специалисти работят в центъра?" desc="В Sense Center работи мултидисциплинарен екип от над 30 специалисти, който включва логопеди, психолози, ерготерапевти, двигателни терапевти и социални работници." />

				<Collapse title="4. Какъв е възрастовата група на децата, с които работите?" desc="Работим с деца от 18 месеца до 18 години. Подходът ни се адаптира спрямо възрастта и индивидуалните нужди на всяко дете.">
				</Collapse>

				<Collapse title="5. Какво е трудовото възнаграждение? Конкурентно ли е спрямо пазара?" desc="Предлагаме конкурентно възнаграждение над средното за сектора, с възможности за растеж и допълнителни бонуси, обвързани с ангажираност и резултати." >
				</Collapse>

				<Collapse title="6. Какво е работното време?" desc="Предлагаме гъвкаво работно време на пълен (8 ч.) или непълен работен ден (4 ч. или 6 ч.). Стремим се да осигурим баланс между професионалното развитие и личното време на нашите специалисти." />

				<Collapse title="7. Какви методи на работа използвате?" desc="Използваме мултидисциплинарна методика с индивидуален подход, създадена в резултат на дългогодишна практика и сътрудничество между специалисти." >
					<div class="mt-4">Основаваме се на разбирането, че всяко дете е уникално – с различни нужди, способности и интереси. Затова всяка интервенция се съобразява индивидуално, като съчетава знания и опит от психология, логопедия, ерготерапия, кинезитерапия и педагогика за осигуряване на комплексна подкрепа.</div>
					<div class="mt-4">Основната цел на методиката е да предложи ясно структуриран, но същевременно гъвкав подход, който да може да се адаптира към различни индивидуални и групови потребности. Тя обхваща широк спектър от услуги, включително логопедична терапия, работа с детски психолог, ерготерапия, звукова стимулация, сензорна интеграция, психомоторика, музикотерапия, арт терапия и др.</div>
					<div class="mt-4">Нашата цел е да осигурим на всяко дете възможността да развие своя потенциал и да постигне успехи, които да му донесат радост и удовлетворение.</div>
				</Collapse>

				<Collapse title="8. Има ли обучение преди стартирането на работа с децата?" desc="Да, всеки новопостъпил специалист преминава въвеждащо обучение и период на адаптация, включващ наблюдение, супервизия и подкрепа от опитни колеги. Целта е плавен и уверен професионален старт." />

				<Collapse title="9. Какви деца посещават Sense Center?" desc="Работим с деца с различни потребности – езикови и говорни затруднения, сензорни и двигателни нарушения, емоционални и поведенчески трудности, както и със съмнения за аутизъм, ADHD, дислексия и др." />
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

export default function Page() {
	return (
		<>
			<div class="relative w-full">
				<VideoHero
					youtubeId="R1kPm_q7vCc"
					gifPreview="/assets/home/2025-07-08 10-35-35.mp4"
					gifPreviewMobile=""
					isPlaying={isPlaying()}
					onPlay={() => setIsPlaying(true)}
				/>

				<div class="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-end pb-18 md:pb-10 text-center px-4 text-white">
					<div class={`absolute ${isPlaying() ? 'top-32% sm:top-95% lg:top-100% mt-30' : 'top-66% md:top-60% mt-0'}`}>

						<div>
							<h1
								class={`mb-4 md:mb-7 transition-colors duration-500 ${isPlaying()
									? 'inline-block pb-[0.2em] bg-gradient-to-r from-[#E11172] to-[#FFAE01] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
									: 'text-white'
									}`}
							>
								Присъединете се към екип, който вярва в потенциала на всяко дете
							</h1>
						</div>

						<div
							class={`important-delay-600 mt-8 md:mt-10 relative text-center ${isPlaying() ? 'md:pb-30' : 'md:pb-0'
								}`}
						>
							<div class="flex md:flex-row flex-col justify-center items-center gap-3 pointer-events-auto">
								<PuzzleButton2
									class="important-bg-brand/80 important-group-hover:bg-brand-hover/80"
									href=""
									text="Кандидатствайте"
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

			<section class={`gap-12 pb-8 md:pb-20 xl:px-30 ${isPlaying() ? 'mt-40 sm:mt-120 md:mt-150 lg:mt-160' : 'pt-20 lg:pt-40'}`}>
				<H3Blue variant="h2" title="Смислена работа с реално въздействие върху децата" />
				<div class="md:pb-0 pb-10">
					<AnimatedComponent>
						<ReviewSlider
							variant="dots3"
							reviews={[
								{ name: "1" },
								{ name: "2" },
								{ name: "3" },
								{ name: "4" },
							]}>
							<PuzzleIconReview
								style="background-color:#742C8F;"
								puzzleclass="c-brand w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Позитивна и сплотена среда"
								desc="Вярваме в силата на сплотения екип и работим в подкрепяща среда, където доверието, уважението и взаимопомощта са водещи."
							/>
							<PuzzleIconReview
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Обучения и супервизии"
								desc="Осигуряваме регулярна подкрепа и възможности за професионално израстване на всяко ниво от кариерата Ви."
							/>
							<PuzzleIconReview
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Разнообразие от случаи и възможности за развитие"
								desc="Работим с деца с различни потребности и възрасти, което Ви позволява да надграждате уменията си и да растете професионално."
							/>
							<PuzzleIconReview
								style="background-color:#FA7402;"
								puzzleclass="c-brand-blue w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Смислена работа с реално въздействие"
								desc="Всяка терапевтична сесия е възможност да допринесете за развитието на детето и да почувствате, че работата Ви има значение."
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="gap-12 pb-20 pt-10 xl:px-30 relative">
				<BackgroundIcons />
				<div class="relative">
					<H3Pink variant="h2" title="Екипът на Sense Center споделя" />
					<AnimatedComponent>
						<ReviewSlider
							variant="dots3"
							reviews={[
								{ name: "1" },
								{ name: "2" },
								{ name: "3" },
								{ name: "4" },
							]}>
							<ReviewersImageReview
								style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8)),url(/assets/барбер-шоп.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
								reviewText="“В Sense Center най-много ми харесва възможността за професионално и личностно израстване, богатият опит в следствие от разнообразните случаи. Личната мотивираност за развитие и желанието да помагам на децата.”"
								name="Сали Младенова"
								date="Рехабилитатор-ерготерапевт"
							/>
							<ReviewersImageReview
								style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8)),url(/assets/барбер-шоп.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
								reviewText="“Работя в екип от хора, които са не само позитивни, но и дълбоко отговорни към това, което правят. Сплотеността, професионализмът и стремежът на всеки един да твори добро за децата създават среда, в която се чувствам вдъхновен и подкрепен.”"
								name="Александър Ганев"
								date="Клиничен психолог"
							/>
							<ReviewersImageReview
								style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8)),url(/assets/барбер-шоп.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
								reviewText="“Харесва ми това, че се работи с различни нарушения и мога да трупам опит и да се уча на различен подход към всяко дете.”"
								name="Искра Ангелова"
								date="Детски логопед"
							/>
							<ReviewersImageReview
								style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8)),url(/assets/барбер-шоп.webp); background-position: right 50% bottom 85% !important; background-size: cover;"
								reviewText="“Харесва ми как всички се подкрепяме взаимно и колко естествено се допълваме. Вдъхновяващо е, когато виждаш как всеки дава най-доброто от себе си в името на общата ни кауза.”"
								name="Яница Дочева"
								date="Психолог"
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="mx-20px pt-25 md:pt-10">
				<AnimatedComponent class="gap-12 md:pt-10 xl:px-30">
					<H3Blue variant="h2" title="Нашите ценности" />
					<div class="block md:hidden">
						<ReviewSlider2
							variant="dots0"
							reviews={[
								{ name: "Работим със сърце" },
								{ name: "Заедно сме по-силни" },
								{ name: "Развитие и професионален растеж" },
							]}
						>
							<div class="bg-brand b-rd-12px px-7 py-5">
								<p class="font-600 c-paper">Работим със сърце</p>
								<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-16px font-size-14px">Един от ключовите фактори за успеха на Sense Center е екипът, който работи с вяра и отдаденост. Именно благодарение на екипа центъра се превръща в символ на надежда и доказателство, че когато сърцето, умът и правилните хора се обединят, могат да се постигнат невероятни неща.</p>
							</div>
							<div class="bg-brand-blue b-rd-12px px-7 py-5">
								<p class="font-600 c-paper">Заедно сме по-силни</p>
								<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-16px font-size-14px">Гордеем се, че принадлежим към сплотен екип, в който всеки дава най‑доброто от себе си. Това води до забележителни постижения в развитието на децата и осигурява спокойствие и удовлетворение на родителите.</p>
							</div>
							<div class="bg-brand-orange b-rd-12px px-7 py-5">
								<p class="font-600 c-paper">Развитие и професионален растеж</p>
								<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-16px font-size-14px">Вярваме в силата на всеки човек да достигне своя максимален потенциал. Чрез професионализъм, креативност и непрекъснато усъвършенстване създаваме среда, която стимулира личностното и професионално развитие на всеки член от нашия екип.</p>
							</div>
						</ReviewSlider2>
					</div>
					<div class="hidden md:flex gap-3 xl:gap-5 max-w-1400px mx-auto">
						<div class="bg-brand b-rd-12px px-7 py-5">
							<p class="font-600 c-paper">Работим със сърце</p>
							<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-16px font-size-14px">Един от ключовите фактори за успеха на Sense Center е екипът, който работи с вяра и отдаденост. Именно благодарение на екипа центъра се превръща в символ на надежда и доказателство, че когато сърцето, умът и правилните хора се обединят, могат да се постигнат невероятни неща.</p>
						</div>
						<div class="bg-brand-blue b-rd-12px px-7 py-5">
							<p class="font-600 c-paper">Заедно сме по-силни</p>
							<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-16px font-size-14px">Гордеем се, че принадлежим към сплотен екип, в който всеки дава най‑доброто от себе си. Това води до забележителни постижения в развитието на децата и осигурява спокойствие и удовлетворение на родителите.</p>
						</div>
						<div class="bg-brand-orange b-rd-12px px-7 py-5">
							<p class="font-600 c-paper">Развитие и професионален растеж</p>
							<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-16px font-size-14px">Вярваме в силата на всеки човек да достигне своя максимален потенциал. Чрез професионализъм, креативност и непрекъснато усъвършенстване създаваме среда, която стимулира личностното и професионално развитие на всеки член от нашия екип.</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<section class="xl:px-30 pt-30 md:pt-50 max-w-1500px xl:mx-auto">
				<AnimatedComponent class="flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div class="flex lg:flex-row flex-col lg:gap-10 justify-center items-center">
						<div class="lg:w-1/2 w-full">
							<img class="w-full h-ful" src="/assets/home/вход-към-sense-center.webp" alt="" />
						</div>
						<div class="lg:w-1/2 w-full">
							<h3 class=" important-leading-11 important-mt-35px font-600 text-left lg:pb-2 important-mb-5 lg:mb-9 important-font-size-30px important-lg:font-size-35px">Работим и растем заедно</h3>
							<div class="w-full text-center">
								<div class="">
									<p class="text-left mt-0 lg:mt-5">
										Нашият екип е съставен от високо квалифицирани специалисти с опит в работата с деца със специални образователни потребности и трудности в развитието. Вярваме, че професионализмът, любовта към децата и постоянният стремеж към развитие са в основата на ефективната терапия.
									</p>
									<p class="text-left">
										Ключът към успеха е нашата координирана екипна работа. Терапевтите редовно си комуникират и обменят информация, което ни позволява да работим в синхрон и води до забележителни постижения в развитието на децата като осигурява спокойствие и удовлетворение на родителите.
									</p>
								</div>
							</div>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="blue" />

			<section>
				<div class="gap-12 pb-5 xl:px-30">
					<H3Pink variant="h2" title="Какви хора търсим" />
					<AnimatedComponent class="px-5 md:px-10 mb-10">
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">
								В Sense Center търсим хора, за които работата с деца със специални образователни потребности е призвание, а не просто професия. Ценим специалистите, които разбират, че всяко дете е уникално и се нуждае от индивидуален подход по пътя към своето развитие.
							</p>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<section>
				<div class="flex lg:flex-row flex-col justify-start items-start pt-10px md:pt-30px md:pb-30 xl:px-30">
					<div class="lg:w-1/2 w-full">
						<div class="gap-12 xl:px-30">
							<AnimatedComponent class="px-5 md:px-10 mb-10">
								<h3 class="text-left mb-5 important-font-size-30px important-lg:font-size-35px important-leading-11">Основните качества, които търсим са:</h3>
								<div class="flex flex-col justify-center items-start">
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/pink-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Проактивност и инициативност
										</p>
									</div>
									<div class="flex items-center justify-center gap-3.5">
										<div>
											<img src="/assets/bg-puzzle-5.svg" class="w-11 h-11" alt="" />
										</div>
										<p class="">
											Отговорност и критично мислене
										</p>
									</div>
									<div class="flex items-center justify-center gap-4 ml-1.5">
										<div>
											<img src="/assets/sense-orange-puzzle-piece.svg" class="w-9.5 h-9.5" alt="" />
										</div>
										<p class="">
											Желание за учене и развитие
										</p>
									</div>
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/blue-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Емпатия, търпение и адаптивност
										</p>
									</div>
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/yellow-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Работа в екип и комуникативност
										</p>
									</div>
									<div class="flex items-center justify-center gap-4 ml-1.5">
										<div>
											<img src="/assets/sense-puzzle-piece.svg" class="w-9.5 h-9.5" alt="" />
										</div>
										<p class="">
											Вътрешна мотивация да преживяваш работата като мисия и призвание
										</p>
									</div>
								</div>
							</AnimatedComponent>
						</div>
					</div>
					<div class="lg:w-1/2 w-full">
						<div class="gap-12 xl:px-30">
							<AnimatedComponent class="px-5 md:px-10 mb-10">
								<h3 class="text-left mb-5 important-font-size-30px important-lg:font-size-35px important-leading-11">Изисквания:</h3>
								<div class="flex flex-col justify-center items-start">
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/pink-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Диплома за завършена бакалавърска или магистърска степен свързана с детското развитие;
										</p>
									</div>
									<div class="flex items-center justify-center gap-3.5">
										<div>
											<img src="/assets/bg-puzzle-5.svg" class="w-11 h-11" alt="" />
										</div>
										<p class="">
											Сертификат по съответната терапевтична дисциплина, за която кандидатствате;
										</p>
									</div>
									<div class="flex items-center justify-center gap-4 ml-1.5">
										<div>
											<img src="/assets/sense-orange-puzzle-piece.svg" class="w-9.5 h-9.5" alt="" />
										</div>
										<p class="">
											Базови ИТ умения;
										</p>
									</div>
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/blue-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Добри комуникационни и междуличностни умения за ефективно сътрудничество с членове на екипа и родители;
										</p>
									</div>
									<div class="flex items-center justify-center gap-3">
										<div>
											<img src="/assets/yellow-puzzle-piece-li-100px.svg" class="w-12 h-12" alt="" />
										</div>
										<p class="">
											Добри организационни умения, умения за управление на времето, приоритизиране на поставените цели и задачи;
										</p>
									</div>
								</div>
							</AnimatedComponent>
						</div>
					</div>
				</div>

				<AnimatedComponent class="max-w-800px mx-auto">
					<div class="flex flex-col justify-center items-center b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 md:px-10 py-2 pd:py-4">
						<div class="flex flex-col justify-center items-center gap-4 pt-30px">
							<img src="/assets/exclamation-mark-icon.webp" class="w-13 h-13 lg:w-15 lg:h-15" />
							<p class="font-600 c-paper uppercase font-size-20px font-size-25px mt-0 text-center leading-8">Липсата на опит не е недостатък</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="pink" />

			<section class="gap-12 pb-8 xl:px-30">
				<H3Blue variant="h2" title="Какво предлагаме" />
				<div class="md:pb-0 pb-10">
					<AnimatedComponent>
						<ReviewSlider
							variant="dots3"
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
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Работа под супервизия"
								desc="Получавате професионална подкрепа и обратна връзка, която Ви помага да се развивате уверено."
							/>
							<PuzzleIconReview
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Ежеседмични екипни срещи"
								desc="Споделяме опит, обсъждаме случаи и взимаме решения заедно, защото всяко мнение е важно, а колективният подход носи най-добри резултати."
							/>
							<PuzzleIconReview
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Подкрепяща общност"
								desc="Ще бъдеш част от сплотен и отзивчив екип, в който взаимопомощта и доверието са ключови."
							/>
							<PuzzleIconReview
								style="background-color:#FA7402;"
								puzzleclass="c-brand-blue w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Работа в приветливо пространство"
								desc="Просторна, светла и уютна среда, в която и децата, и специалистите се чувстват добре."
							/>
							<PuzzleIconReview
								style="background-color:#FA7402;"
								puzzleclass="c-brand-blue w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Разнообразие от случаи и възрастови групи"
								desc="Работим с деца от 18 месеца до 18 години, което Ви дава възможност да натрупате богат опит и възможност да развивате различни умения."
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="pb-40px xl:px-30 mx-20px">
				<H3Pink variant="h2" title="Детайли" />
				<AnimatedComponent class="mx-auto flex flex-col md:flex-row gap-14">
					<div class="flex flex-col justify-between items-start gap-2 w-full md:px-10 px-5">
						<div class="w-full">
							<p class="pb-0 mb-2 lg:mb-5 md:mt-0">Вярваме, че за да даваш от себе си, първо трябва да се чувстваш добре там, където си. В Sense Center ще намериш не просто работа, а място, където си подкрепен, разбран и част от нещо по-голямо. При нас ще получиш:</p>
						</div>
						<div class="w-full">
							<ul style="list-style-type: none;" class="flex flex-col gap-2">
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6 font-[MYRIADPRO-Bold]">Гъвкаво работно време (4, 6 или 8 часа)</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6 font-[MYRIADPRO-Bold]">Стимулиращо възнаграждение + бонуси</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6 font-[MYRIADPRO-Bold]">Допълнителни професионални обучения</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6 md:mb-0 font-[MYRIADPRO-Bold]">Гъвкавост в отпуските</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6 md:mb-0 font-[MYRIADPRO-Bold]">Пакет социални придобивки - Мултиспорт карта, Ваучери за храна</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<section class="pt-10 md:pt-40">
				<AnimatedComponent class="">
					<H2Echo
						maintitle={
							<>
								Отворени позиции
							</>
						}
						title="терапия"
						bgImage="/assets/purple-orange-gradient-title-bg.webp"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10 pb-30 md:pb-50">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp" alt="" class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7 mt-10 md:mt-0">
						<AnimatedComponent>
							<p class="mt--2">
								Sense Center е място, което се изгражда от хората в него. Ако чувствате, че можете да допринесете с опита, енергията и идеите си – разгледайте актуалните позиции и кандидатствайте. Ще се радваме да Ви опознаем.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<div class="lg:px-30 mx-auto pt-0 pb-10 lg:pb-0 max-w-1600px">
				<div class="flex md:flex-row flex-col flex-wrap gap-5 md:gap-0 justify-center items-center">
					<AuthorContainer
						href=""
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name="Детски логопед"
						description="Помагаме на децата да открият магията на думите и да изразят себе си с увереност и радост."
					/>
					<AuthorContainer
						href=""
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name="Ерготерапия"
						description="Превръщаме ежедневните дейности в приключения, където всяко дете може да се чувства способно и независимо."
					/>
					<AuthorContainer
						href=""
						style="background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
						name="Детски психолог"
						description="Подкрепя емоционалното развитие и саморегулацията, подобрява социалните взаимодействия и комуникацията."
					/>
				</div>
			</div>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30">
				<H3Pink variant="h2" title="Сигурно пространство за всяко дете" />
			</section>
			<div class="xl:px-30">
				<AnimatedComponent class="mx-10">
					<h3 class="text-left pb-2 important-font-size-30px important-lg:font-size-35px important-leading-11">Къде се намира Sense Center</h3>
					<div class="flex flex-col justify-center items-center">
						<GoogleMapIframe />
						<div class="flex justify-center mt-5 md:ml-0 ml--10">
							<img class="w-20 h-20 ml-0 mr--10 z-2" src="/assets/sense-logo-100px.webp" />
							<p class="flex py-4 md:px-11 px-14 b-rd-12px bg-brand-purple w-full"><a href="https://maps.app.goo.gl/SKMstkcc8QTk1BzR7" target="_blank" rel="noopener noreferrer" class="c-paper font-[MYRIADPRO-Semibold] md:font-size-22px font-size-18px leading-8">гр. София, кв. Карпузица,<br />бул. "Никола Петков" 95А</a></p>
						</div>
					</div>
				</AnimatedComponent>
			</div>

			<DoodleDecor variant="pink" />

			<section class="max-w-1500px px-20px mx-auto pt-20">
				<AnimatedComponent>
					<div class="flex flex-col lg:flex-row justify-center gap-10 xl:gap-20">
						<ServiceContaner
							img="/assets/home/мултидисциплинарен-екип.webp"
							alt="test"
							title="Иновативен терапевтичен център за деца"
							description={<>
								Sense Center разполага с модерна и просторна база, разположена на площ от над 700 кв.м.
								<p class="text-left font-size-15px leading-7 mt-3">Центърът включва<br />
									14 специализирани терапевтични кабинета, стая за отдих и социализация, психологичен кабинет, както и удобен паркинг за посетители.</p>
							</>}
						/>

						<div class="md:hidden block">
							<DoodleDecor variant="purple" />
						</div>

						<ServiceContaner
							img="/assets/home/емоционална-прегръдка-в-специализиран-детски-център.webp"
							alt="test"
							title="Методологията на Sense Center"
							description="В Sense Center прилагаме мултидисциплинарна методика, създадена съвместно от екип специалисти с дългогодишен опит. Вярваме, че всяко дете е уникално, затова съчетаваме различни терапии като детски логопед, психолог, ерготерапия, сензорна интеграция и др. в индивидуален план, който подкрепя пълноценното развитие и личния напредък на всяко дете."
						/>
					</div>
				</AnimatedComponent>
			</section>

			<section class="pb-20 md:pb-40 xl:px-30 xl:px-25 md:ml-5 mx-20px pt-5">
				<AnimatedComponent>
					<h3
						class="text-center md:px-10 uppercase leading-[1.4] inline-block"
						style={{
							'background-image': 'linear-gradient(to right,rgb(253, 172, 245),rgb(223, 25, 74)',
							'-webkit-background-clip': 'text',
							'-webkit-text-fill-color': 'transparent',
							display: 'inline-block',
							'padding-bottom': '0.2em',
						}}
					>
						СЪЗДАВАМЕ СРЕДА, В КОЯТО ТЕРАПЕВТИТЕ СЕ ЧУВСТВАТ УВЕРЕНИ И ПОДКРЕПЕНИ
					</h3>
				</AnimatedComponent>
				<PuzzleButton2
					class="important-bg-brand/80 important-group-hover:bg-brand-hover/80"
					href=""
					text="Кандидатствайте"
				/>
			</section>

			<section>
				<div class="gap-12 pb-8 pt-100px md:pt-50px xl:px-30">
					<H3Blue variant="h2" title="Как можете да кандидатствате" />
					<AnimatedComponent class="px-5 md:px-10 mb-10 relative">
						<BackgroundIcons />
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Ако искате да сте част от нашия екип и заедно да помагаме на децата със специални нужди да достигнат пълния си потенциал, ще се радваме да свържете с нас.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">
								<span class="font-[MYRIADPRO-Bold]">Изпратете на имейл своята автобиография и кратко описание на притежаваните от Вас качества.</span>
							</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0 font-[MYRIADPRO-Bold] font-size-20px">
								<a target="_blank" rel="noopener" class="c-brand-purple hover:c-brand-blue transition-all" href="mailto:contact@sense-center.bg">contact@sense-center.bg</a>
							</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Одобрените кандидати ще бъдат потърсени за насрочване на дата за интервю.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Благодарим Ви за проявения интерес и очакваме Вашите кандидатури!</p>
						</div>
					</AnimatedComponent>
					<PuzzleButton2
						class="important-bg-brand/80 important-group-hover:bg-brand-hover/80"
						href=""
						text="Кандидатствайте"
					/>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px pb-50px">
				<H3Blue variant="h2" title="Въпроси и отговори" />
				<SingleCollapse />
			</section>
		</>
	);
}
