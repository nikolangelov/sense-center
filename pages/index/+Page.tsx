import "solid-slider/slider.css";
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { VideoHero } from '../../components/VideoPlayer';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2WithImage } from '../../components/H2WithImage';
import { ServiceContaner } from '../../components/ServiceContainer';
import { createSignal, JSX, Show } from 'solid-js';
import RiCloseLargeLine from '~icons/ri/close-large-line';

export function AuthorContainer(props: {
	title: string;
	img: string;
	alt: string;
	author: string;
	description: string | JSX.Element;
}) {
	return (
		<AnimatedComponent
			class="w-[85%] md:w-[40%] max-w-full relative overflow-hidden flex-shrink-0"
			style="flex: 0 0 auto;"
		>
			<div class="flex xl:flex-row flex-col items-center bg-white overflow-hidden">
				<div class="w-full md:w-auto flex-shrink-0">
					<img
						class="w-full h-auto max-h-[400px] object-cover"
						src={props.img}
						alt={props.alt}
					/>
				</div>

				<div class="w-full px-5 py-4 text-left">
					<div class="flex flex-col gap-1">
						<p
							class="text-sm font-light mb-1 italic"
							style="font-family: 'Abel', sans-serif !important;"
						>
							{props.author}
						</p>
						<h4
							class="text-left font-semibold my-0"
							style="font-family: 'Abel', sans-serif !important;"
						>
							{props.title}
						</h4>
						<p class="font-size-16px leading-6.5 mt-1">{props.description}</p>
					</div>
				</div>
			</div>
		</AnimatedComponent>
	);
}

function GalleryImage(props: { img1: string, img2: string, alt1: string, alt2: string }) {
	const [open, setOpen] = createSignal(false);
	const [currentIndex, setCurrentIndex] = createSignal(0);

	const openGallery = (index: number) => {
		setCurrentIndex(index);
		setOpen(true);
	};

	return (
		<>
			<img src={props.img1} alt={props.alt1} class="hidden md:block w-full object-cover rounded shadow mb-4" onClick={() => openGallery(0)} />
			<img src={props.img2} alt={props.alt2} class="md:hidden block w-full object-cover rounded shadow mb-4" onClick={() => openGallery(0)} />

			<Show when={open()}>
				<div class="facebook-like-gallery fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-85 z-9999">
					<div class="flex items-center justify-center h-full w-full">
						<img class="hidden md:block max-w-full max-h-full" src={props.img1} alt={props.alt1} />
						<img class="md:hidden block max-w-full max-h-full" src={props.img2} alt={props.alt2} />
					</div>
					<button onClick={() => setOpen(false)}>
						<RiCloseLargeLine class="hover:rotate-90 transition-transform z-2 w-10 h-10 md:w-13 md:h-13 absolute top-0 right-0 mr-8 md:mr-12 mt-8 p-2 text-white bg-transparent color-paper cursor-pointer hover-color-gray-400:hover transition-colors" />
					</button>
				</div>
			</Show>
		</>
	)
}

export default function Page() {
	return (
		<>
			<div class="">
				<VideoHero
					fallbackImageUrl="/assets/fallback-image-video.webp"
				/>
			</div>

			<section id="info-section" class="relative inline-block w-full h-full min-h-500px" style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(/assets/Fulfilling-Vows.webp); background-position: center center; background-repeat: no-repeat; background-size: cover;" data-orig-width="1207" data-orig-height="720">
				<AnimatedComponent>
					<div class="max-w-1000px w-full h-full">
						<div class="bg-paper md:mr-0 pb-50px max-w-1050px px-30px md:px-50px pt-40px md:pt-50px md:ml-20% my-70px mx-20px md:mx-0">
							<h1 class="mb-7 md:mb-10">Международна изложба „Изкуството на Джън-Шан-Жен“</h1>
							<p class="pb-0 mb-0 md:font-size-19px font-size-15px leading-1.6rem md:leading-1.8rem">
								Изложбата „Изкуството на Джън-Шан-Жен” е създадена през 2004 г. и се състои от близо 40 произведения. Идеята за изложбата се поражда от преживявания на професор Кунлун Джан, който е неин основател. Той е един от най-известните и уважавани скулптури на модерен Китай. Завършил е Факултета по скулптура на Китайската академия по изкуствата, заемал е постовете на директор на Института по скулптура към Института по изкуствата в Шандун, Китай, както и директор на Института по изследване на скулптурата в Шандун. Носител е на множество награди, участвал е в редица изложби, както в родината си Китай, така и по целия свят.
							</p>
							<p class="pb-0 mb-0 md:font-size-19px font-size-15px leading-1.6rem md:leading-1.8rem">
								Професор Джан е бил незаконно държан като затворник на съвестта в Китай от комунистическата власт. Причината за задържането му са неговите духовни убеждения. Професор Джан практикува древната китайска практика за усъвършенстване на съзнанието и тялото Фалун Дафа, основана на принципите Истинност, Доброта, Търпение (на китайски Джън, Шан, Жен). Фалун Дафа е представен за пръв път публично през 1992 г. В продължение на едва няколко години Фалун Дафа набира огромна популярност – правителствено проучване посочва, че към 1998 г. между 70 и 100 милиона души се занимават с практиката.
							</p>
							<p class="pb-0 mb-0 md:font-size-19px font-size-15px leading-1.6rem md:leading-1.8rem">
								За съжаление комунистическият режим вижда във Фалун Дафа идеологическа заплаха. Причината е, че духовната практика съживява традиционните китайски ценности на стремеж към високи морални стандарти и на вяра в божественото, които са противоположни на проповядваният от комунизма атеизъм, който отрича божественото и идолизира единствено лидерите на Комунистическата партия. В резултат комунистическият режим на Китай започва да извършва репресии над хората, които практикуват Фалун Дафа, един от които е именно професор Джан. През периода, прекаран в лагерите за принудителен труд, професор Джан е бил подложен на жестоки психически и физически изтезания, оставили траен отпечатък в съзнанието му. След освобождаването си той се посвещава на това да сподели с хората по света своите преживявания чрез магията на изобразителното изкуство.
							</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<section id="art-section" class="my-70px">
				<H2WithImage title="Примерни произведения на изкуството" />

				<div class="flex flex-row flex-justify-center flex-wrap px-5 gap-12 pt-50px md:px-30">
					<div class="flex flex-col gap-12">
						<ServiceContaner
							img="/assets/Fulfilling-Vows.webp"
							alt=""
							title="Изпълняване на обетите"
							description="Множество божествени същества слизат от небето в човешкия свят, за да изпълнят обетите си. Фалун (Колелото на закона) е високо, а героите изглеждат достойни, миролюбиви и носещи надежда."
							author="Сяопин Чън, Сицян Дун, Тинин Шъ"
						/>
						<ServiceContaner
							img="/assets/Tears-of-Grief-and-Joy.webp"
							alt=""
							title="Сълзи на печал и радост"
							description={
								<>
									Преди повече от 5000 години човешкият морал е пропаднал ужасно ниско. В отговор катастрофално наводнение почти унищожава целия свят. Три хиляди години по-късно Римската империя брутално преследва християните. Заради това поредица от епидемии убива почти половината от населението. За съжаление историята сякаш се повтаря. Днес влошаването на моралните ценности отново е достигнало опасно ниво.<br />
									Религиите в миналото са говорили за „Страшния съд“. Казва се, че Бог ще се появи отново, за да приеме добрите хора в рая и да запрати лошите в ада. „Доброто и злото ще получат дължимата си награда“ е неизменна истина на космоса. Универсалните принципи на Фалун Дафа „Истинност, Доброта, Търпение“ носят надежда на човечеството. От 1999 г. обаче Китайската комунистическа партия извършва брутално преследване на тази мирна медитативна практика.<br />
									Печеленето на пари от робски труд и отнемането на органи на практикуващите Фалун Дафа доведе човечеството до ново дъно. Лъжите и пропагандата породиха неразбиране и омраза срещу Фалун Дафа. Поради страх от последици или заради финансови стимули, световните правителства, бизнес общността и международните медии не смеят да говорят за тази човешка катастрофа. На думи такива организации държат на съвестта, свободата на вярата и човешките права. Обаче тишината е оглушителна пред лицето на тези престъпления срещу човечеството. Така че зависи от самите практикуващи Фалун Дафа, стоящи в центъра на това преследване, да повишат осведомеността и да разкрият истината. Те непрекъснато казват истината, за да предоставят възможност на хората по света да заемат своето място и да се позиционират. Композицията на картината във формата на S свързва двете крайности – добрите хора, които се възнасят на небето, и нечестивите, изправени пред унищожение. Това е решение, което хората следва да вземат сами.<br />
									Художникът искрено пожелава светло бъдеще на тези, които имат възможност да видят тази картина.
								</>
							}
							author="Кунлун Джан"
						/>
					</div>
					<div class="flex flex-col gap-12">
						<ServiceContaner
							img="/assets/042.-Lecturing-on-the-Fa.webp"
							alt=""
							title="Изнасяне на лекции по Фа"
							description={
								<>
									Тази картина показва разпространението на Фалун Дафа в човешкия свят, което не изглежда никак необичайно. В действителност обаче съзнателни същества на различни космически нива учат този несравнимо свещен Дафа. От тази перспектива художникът е написал следното стихотворение:<br />

									Какъв би могъл да бъде смисълът на живота в бушуващия водовъртеж на съществуването?<br />
									Да научиш Дао, каква вечна радост е това.<br />
									Колко обаче биха могли да постигнат ученията на Краля на Будите?<br />
									Ние трябва да ценим тази свещена възможност, идваща веднъж на много хилядолетия.
								</>
							}
							author="Юен Ли, Сяопин Чън, Кунлун Джан"
						/>
						<ServiceContaner
							img="/assets/Mending-the-Cosmos.webp"
							alt=""
							title="Коригиране на Космоса"
							description="Седнал в драконова колесница, Буда жестикулира с мудра, докато води множество небесни същества на великата мисия за коригиране на космоса. Фалун се издига пред Буда и е изобразен на синята книга, носена тържествено долу вдясно. Мултиетническият микс от божествени фигури отразява приобщаващата природа на Фалун Дафа."
							author="Джънпин Чън"
						/>
					</div>
					<div class="flex flex-col gap-12">
						<ServiceContaner
							img="/assets/The-Coming-of-the-Holy-Falun-King.webp"
							alt=""
							title="Идването на Светия крал на Фалун"
							description="От върховете на космоса слиза Свещеният  Фалун („Колелото на закона“). Неговото лъчезарно присъствие тук прелива от спасителна благодат. Разнообразните слоеве от нюанси под краката изобразяват различни нива на съществуване, през които осветената фигура пътува, образувайки на всяка стъпка от своето слизане антураж от обвързани с клетва божествени помощници. Със слизането надолу и наближаването на земния свят, чистите кристални небеса отстъпват място на мрак и тежест. В основата на Фалун Дафа е вярата, че вселената е фундаментално добра и е населена от същества, надарени с божествени  качества."
							author="Кунлун Джан, Сяопин Чън"
						/>
						<ServiceContaner
							img="/assets/Entering-the-Divine-Realm-with-Purity.webp"
							alt=""
							title="Влизане в Божественото царство с чистота"
							description="Това произведение на изкуството показва истинското състояние на тялото на практикуваща Фалун Дафа в нейното самоусъвършенстване. То изобразява преживяната от нея изключителна чистота по време на медитация. Малкото дете с чисто сърце лесно вижда истината в другите измерения чрез своето небесно око."
							author="Сяопин Чън"
						/>
					</div>
				</div>
			</section>

			<section id="artists-section" class="my-70px bg-paper py-70px">
				<AnimatedComponent>
					<H2WithImage title="Запознайте се с художниците" />
				</AnimatedComponent>

				<div class="flex flex-wrap flex-justify-center gap-12">
					<AuthorContainer
						img="/assets/Zhang-Kunlun.jpg"
						alt=""
						title="Кунлун Джан"
						description="Професор Джан Кунлун е един от най-успешните скулптори на съвременния Китай. Завършил е катедра „Скулптура“ на Китайската академия на изкуствата и се е специализирал в скулптура, маслена живопис и китайска живопис. Основава катедра „Скулптура“ в Шандонския университет по изкуствата, а по-късно става изпълнителен директор на Института за изследване на скулптурата. Професор Джан е получил много награди за изкуство, а много от направените от него паметници се намират в Китай, Съединените щати и Канада. Неговите картини и скулптури са били излагани в много страни. Той и неговите произведения са публикувани в „Кой кой е в света“, „Енциклопедията на изключителните китайци“ и „Събрани произведения на световната скулптура“, както и в много други издания."
						author="Отава, Канада"
					/>
					<AuthorContainer
						img="/assets/Chen-Xiaoping.jpg"
						alt=""
						title="Сяопин Чън"
						description={
							<>
								Сяопин Чън е утвърдена художничка, родена в Китай, която сега живее в Канада. Тя е изучавала традиционна китайска калиграфия и пейзажна живопис в ранна възраст, а по-късно е учила и маслена живопис. Чън е носител на множество награди на провинциално и национално ниво.<br />

								Чън е учила акварел и керамика в Университета на Марианата през 1997 г. и е представяла творбите си в няколко частни изложби. Нейни творби са били избирани и за репродукция в различни медии, включително арт календари, илюстрации на книги и корици на книги. През 1998 г. е обявена за „Изключителен художник“ от губернатора на Северните Мариански острови. Тя е била бивш арт директор на Общинския съвет по изкуствата в Ричмънд, Британска Колумбия, Канада.
							</>
						}
						author="Ванкувър, Канада"
					/>
					<AuthorContainer
						img="/assets/Dong-Xiqiang.jpg"
						alt=""
						title="Сицян Дун"
						description="Сицян Дун е бивш професор и резидентен художник в Академията за изящни изкуства в Тиендзин, както и художник в Централния институт за изящни изкуства в Китай. Г-н Дун е носител на множество награди. През 1993 г. неговите творби са изложени в престижната Национална художествена галерия на Китай, където печелят най-високото отличие на Международната младежка художествена изложба. През 2004 г. неговите творби печелят най-голямата награда на изложбата на Асоциацията на художниците в Лос Анджелис."
						author="Ню Джърси, САЩ"
					/>
					<AuthorContainer
						img="/assets/Kathleen-Gillis.jpg"
						alt=""
						title="Катлийн Гилис"
						description="Катлийн Гилис е художничка и преподавателка по изобразително изкуство с бакалавърска степен по изкуства от Университета в Отава. Участвала е в множество изложби в обществени галерии, търговски галерии и алтернативни пространства в Канада и чужбина. Получавала е стипендии и награди на регионално, провинциално и национално ниво. Нейните творби са част от колекции, намиращи се в Канадската инвестиционна банка за изкуство, град Отава, Университета Карлтън и Университета в Отава. Нейните самостоятелни изложби са предимно инсталации, ленд арт и картини с голям мащаб."
						author="Отава, Канада"
					/>
				</div>
			</section>

			<section id="reviews-section" class="my-70px">
				<AnimatedComponent>
					<H2WithImage title="Отзиви от нашите изложби" />

					<ReviewSlider
						reviews={[
							{ name: "Karl Stirner" },
							{ name: "Ann Panillo" },
							{ name: "Peter Hughes" },
							{ name: "Aldon James" },
						]}>
						<StarReview
							reviewText="This is the best classical arts I have seen. Words cannot describe how precious these paintings are. As a local artist, I am proud to see such wonderful paintings on display here."
							name="Karl Stirner"
							date="A renowned sculptor in Pennsylvania"
						/>
						<StarReview
							reviewText="The paintings and sculptures are exquisite and showcase the artists' great skills. In a totalitarian country, the government has too much power and does things against the human conscience. I cherish my freedom even more now that I have attended this exhibit."
							name="Ann Panillo"
							date="TV hostess in Albany, New York"
						/>
						<StarReview
							reviewText="I had a real desire to bring this art exhibition to this city. This art exhibition includes the works of many painters with many different styles. We hoped that we could provide a venue to exhibit these very beautiful, wonderful paintings."
							name="Peter Hughes"
							date="Poster Designer for Proctor's Theatre in Schenectady, New York"
						/>
						<StarReview
							reviewText="This exhibition is of high quality with a strong message, and thus will attract many people."
							name="Aldon James"
							date="Director of the National Arts Club, Manhattan, New York"
						/>
					</ReviewSlider>
				</AnimatedComponent>
			</section>

			<section id="tour-section" class="bg-paper">
				<div class="flex flex-col py-70px">
					<div class="flex flex-col flex-items-center">
						<AnimatedComponent>
							<H2WithImage title="Къде ще бъдем" />
							<div class="relative max-w-7xl mx-auto px-15px">
								<div class="absolute top-0 bottom-0 left-1/2 transform -translate-x-1 bg-paper-inv w-2px"></div>

								<div class="flex flex-row-reverse justify-start items-center mb-10 relative">
									<div class="w-1/2 pl-5 md:pl-8 text-left">
										<p class="text-4 text-gray-800">07.05.2025 - 24.05.2025</p>
										<h3 class="text-left important-font-size-4.5 important-line-height-7.5 uppercase my-6">град Варна</h3>
										<p class="text-4.6 italic text-gray-800">Graffit Gallery Hotel - бул. "Княз Борис I" 65</p>
										{/* <p>
											The Truth, Compassion, Tolerance Art Exhibit has toured more than 40 countries and 200 cities worldwide since its debut in July 2004 at the Rayburn House, U.S. Congress Building, in Washington, DC.
										</p> */}
									</div>
									<div class="w-1/2 pr-5 md:pr-8 text-right z-2">
										<img src="/assets/graffiti-hotel-image.jpg" alt="Sculptor" class="hidden md:block w-full object-cover rounded shadow mb-4" />
										<img src="/assets/graffit-hotel-mobile-image.jpg" alt="Sculptor" class="md:hidden block w-full object-cover rounded shadow mb-4" />
									</div>
									<div class="w-2 h-2 bg-paper-inv absolute left-1/2 top-1/2 transform -translate-x-90% -translate-y-1/2 z-1 rounded-lg">
										<div class="w-8 h-0.5 bg-paper-inv absolute -left-8 top-1/2 transform -translate-y-1/2"></div>
									</div>
								</div>

								<div class="flex justify-end items-center mb-10 relative">
									<div class="w-1/2 pr-5 md:pr-8 text-right">
										<p class="text-4 text-gray-800">13.08.2025 - 29.08.2025</p>
										<h3 class="text-left important-font-size-4.5 important-line-height-7.5 uppercase my-6">село Равадиново</h3>
										<p class="text-4.5 italic text-gray-800">Замъка Равадиново</p>
										{/* <p>
											Art of Zhen Shan Ren Museum opens in Arizona. The exhibition received acclaim in 900 cities and 50 countries. It is now receiving its first permanent home in Tempe, Arizona.
										</p> */}
									</div>
									<div class="w-1/2 pl-4 md:pl-8 text-right z-2">
										<img src="/assets/castle-Ravadinovo-image.webp" alt="Sculptor" class="hidden md:block w-full object-cover rounded shadow mb-4" />
										<img src="/assets/castle-Ravadinovo.webp" alt="Sculptor" class="md:hidden block w-full object-cover rounded shadow mb-4" />
									</div>
									<div class="w-2 h-2 bg-paper-inv absolute left-1/2 top-1/2 transform -translate-x-90% -translate-y-1/2 z-1 rounded-lg">
										<div class="w-8 h-0.5 bg-paper-inv absolute left-full top-1/2 transform -translate-y-1/2"></div>
									</div>
								</div>

								<div class="flex flex-row-reverse justify-start items-center mb-10 relative">
									<div class="w-1/2 pl-5 md:pl-8 text-left">
										<p class="text-4 text-gray-800">10.09.2025 - 20.09.2025</p>
										<h3 class="text-left important-font-size-4.5 important-line-height-7.5 uppercase my-6">град Созопол</h3>
										<p class="text-4.6 italic text-gray-800">Художествена галерия (Старото училище) - Център, ул. "Кирил и Методий" 63</p>
										{/* <p>
											Since its debut in 2004 in Washington, D.C., the exhibition has toured over 900 cities, in over 50 countries, with over 800 shows and inspired millions.
										</p> */}
									</div>
									<div class="w-1/2 pr-5 md:pr-8 text-right z-2">
										<img src="/assets/staroto-uchilishte-image.webp" alt="Sculptor" class="hidden md:block w-full object-cover rounded shadow mb-4" />
										<img src="/assets/staroto-uchilishte.webp" alt="Sculptor" class="md:hidden block w-full object-cover rounded shadow mb-4" />
									</div>
									<div class="w-2 h-2 bg-paper-inv absolute left-1/2 top-1/2 transform -translate-x-90% -translate-y-1/2 z-1 rounded-lg">
										<div class="w-8 h-0.5 bg-paper-inv absolute -left-8 top-1/2 transform -translate-y-1/2"></div>
									</div>
								</div>
							</div>
						</AnimatedComponent>
					</div>
				</div>
			</section>
		</>
	);
}
