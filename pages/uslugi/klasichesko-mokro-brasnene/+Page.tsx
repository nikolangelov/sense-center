import "solid-slider/slider.css";
import { createSignal, JSXElement } from 'solid-js';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { VideoPlayer } from '../../../components/VideoPlayer';
import { GallerySlider } from '../../../components/GallerySlider';
import { AnimatedComponent } from '../../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../../components/AnimateOnViewSlide';
import { ElementInOftenOT, OftenOT } from '../../../components/OftenOT';
import MdiProgressClock from '~icons/mdi/progress-clock';
import RiShining2Line from '~icons/ri/shining-2-line';
import MdiPlus from '~icons/mdi/plus';
import MdiRomanNumeral1 from '~icons/mdi/roman-numeral-1';
import MdiRomanNumeral2 from '~icons/mdi/roman-numeral-2';
import MdiRomanNumeral3 from '~icons/mdi/roman-numeral-3';
import MdiRomanNumeral4 from '~icons/mdi/roman-numeral-4';
import MdiRomanNumeral5 from '~icons/mdi/roman-numeral-5';
import MdiRomanNumeral6 from '~icons/mdi/roman-numeral-6';
import MdiRomanNumeral7 from '~icons/mdi/roman-numeral-7';
import MdiRomanNumeral8 from '~icons/mdi/roman-numeral-8';
import MdiRomanNumeral9 from '~icons/mdi/roman-numeral-9';
import MdiRomanNumeral10 from '~icons/mdi/roman-numeral-10';
import { H2WithImage } from "../../../components/H2WithImage";

function Collapse(props: { title: string; desc: string; children?: JSXElement }) {
	const [isExpanded, setIsExpanded] = createSignal(false);

	return (
		<div class="relative b-rd-14px overflow-hidden z-1 FAQ-wrapper w-full max-w-[850px] mx-auto">
			<div
				class={`relative z-1 transition-all duration-600 important-outline-none w-full ${isExpanded() ? 'b-none bg-transparent' : ''}`}
				style={isExpanded() ? 'transition: all 0.3s ease-in-out;' : ''}
			>
				<button
					onClick={() => setIsExpanded(!isExpanded())}
					class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full font-semibold text-lg py-3 md-px-6 focus:outline-none transition-all duration-700 ${isExpanded() ? 'bg-transparent' : 'bg-transparent'}`}
				>
					<div class="flex items-center justify-between w-full pb-30px" style="border-bottom: 1px solid rgba(107, 81, 81, 0.3);">
						<div class="flex items-center justify-between">
							<RiShining2Line class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-20px h-20px mr-5" />
							<span class="w-full md-max-w-full md-line-height-34px line-height-24px font-size-14px md-font-size-20px uppercase font-500 -tracking-0.2px  border-b border-gray-500 hover-c-brand-dark transition-colors"
								style="font-family: 'Oswald', sans-serif !important;">
								{props.title}
							</span>
						</div>
						<div class="flex flex-self-center flex-justify-center">
							<MdiPlus class={`text-brand-dark w-8 h-8 transition-transform duration-700 mx-2 ${isExpanded() ? 'rotate-135deg' : ''}`} />
						</div>
					</div>
				</button>
				<div
					class={`mt-0 px-6 text-gray-600 leading-relaxed bg-transparent overflow-hidden transition-all duration-700 w-full ${isExpanded() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
				>
					<p class="mt-3 font-400 font-size-4 md-font-size-4.8 tracking--0.1px w-full">
						{props.desc}
						{props.children}
					</p>
				</div>
			</div>
		</div>
	);
}

function SingleCollapse() {

	return (
		<>
			<div class="flex flex-col gap-5 md-gap-2 cursor-pointer max-w-1200px mx-auto px-3">
				<Collapse title="Задължително ли е да запазя час за класическо бръснене предварително?" desc="Препоръчваме Ви да запазите час предварително, за да си осигурите кралско бръснене в удобно за Вас време. При наличие на свободни часове приемаме и клиенти без предварителна резервация." />

				<Collapse title="Как мога да си запазя час?" desc="За Ваше улеснение можете да запазите час в The Barber Shop за мокро бръснене в град София по следните начини:">
					<div>
						<ul>
							<li class="">
								онлайн чрез нашия уебсайт
							</li>
							<li class="">
								по телефона на номер +359 882 820 331
							</li>
							<li class="">
								на място в бръснарницата ни кв. Изток, гр. София
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="Какво ще се случи, ако не успея да дойда навреме за часа си за класическо бръснене?" desc="Молим да ни уведомите, ако ще закъснеете. Ако закъснението е повече от 15 минути, ще се наложи да отменим часа Ви." />

				<Collapse title="Мога ли да избера конкретен барбър, който да извърши бръсненето с топла кърпа?" desc="Да, за Ваше удобство при записване на час за класическо мокро бръснене можете да уточните на кого от нашите висококвалифицирани барбъри да се доверите." />

				<Collapse title="Какви методи на плащане използвате?" desc="Приемаме плащане в брой, както и чрез дебитна / кредитна карта." />

				<Collapse title="Мога ли да закупя продукти на място от бръснарницата?" desc="Да, можете да разгледате нашия асортимент от мъжки професионални продукти за коса и брада и да ги закупите на място от бръснарницата." />

				<Collapse title="The Barber Shop достъпен ли е за инвалиди?" desc="Бръснарницата е достъпна за инвалиди. В случай че изпитвате затруднения или имате въпроси, свържете се с нас на телефон +359 882 820 331." />

				<Collapse title="Осигурявате ли паркоместа за клиентите?" desc="Да, осигурили сме 4 паркоместа пред входа на бръснарницата, на разположение на клиентите." />

				<Collapse title="Какви са предимствата на традиционното бръснене с четка и сапун?" desc="Класическото мокро бръснене оказва положително влияние на състоянието на кожата като:" >
					<div>
						<ul>
							<li class="">
								отваря порите, което прави бръсненето гладко и възможно най-близо до кожата
							</li>
							<li class="">
								предпазва от появата на враснали косми
							</li>
							<li class="">
								осигурява изключително близко и гладко обръсната кожа
							</li>

							<li class="">
								намалява раздразнението след бръснене
							</li>
							<li class="">
								топлината и влагата оставят кожата хидратирана и освежена.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="Подходящо ли е класическото бръснене за чувствителна кожа?" desc="Класическото мокро бръснене е подходящо за чувствителна кожа, в случай, че е правилно изпълнено. Използваме висококачествени продукти и бръсначи, които намаляват раздразнението и осигуряват комфортно бръснене." />

				<Collapse title="Колко често трябва да посещавам бръснарницата за бръснене с класическа самобръсначка?" desc="Честотата на посещенията за мокро бръснене зависи от Вашите лични предпочитания, чувствителността на кожата и от това колко бързо расте брадата Ви. Ако целта Ви е гладко избръсната кожа, за най-добри резултати можете да се бръснете веднъж на няколко дни." />

				<Collapse title="Кралското бръснене по-ефективно ли е от бръсненето у дома?" desc="Класическото мокро бръснене от професионалисти е значително по-ефективно от бръсненето у дома.">
					<div>
						<p>
							Причината е, че бръсненето с топла кърпа се извършва от опитен бръснар, с помощта на специално подбрани висококачествени козметика и инструменти. Осигурява комфорт при бръснене, като резултатът е гладко избръсната и свежа кожа. Класическото бръснене се превръща в приятно изживяване, когато се доверите на професионалисти.
						</p>
					</div>
				</Collapse>

				<Collapse title="Трябва ли да подготвя кожата си по някакъв начин преди бръснене с класическа самобръсначка?" desc="Не е нужно да се подготвяте специално преди мокро бръснене в бръснарницата. Ние ще се погрижим за всичко на място!" />

				<Collapse title="Болезнено ли е традиционното бръснене с четка и сапун?" desc="Не, класическото мокро бръснене е безболезнено. Всъщност, много мъже го определят като изключително релаксиращо. Нашите бръснари са професионалисти и използват техника, която минимизира възможността за потенциален дискомфорт." />

				<Collapse title="Необходимо ли е да полагам специални грижи за лицето си след класическо бръснене?" desc="Не е необходимо да полагате специални грижи за лицето си след бръснене с топла кърпа. Но, препоръчваме да използвате овлажняващ крем или балсам след бръснене, за да хидратирате кожата и да предотвратите раздразнение. Нашите бръснари ще Ви препоръчат най-добрите продукти спрямо Вашите нужди." />
			</div>
		</>
	);
}

export default function Page() {
	return (
		<>
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/home/the-barber-shop-sofia-mobile.webp); background-position: center top; background-repeat: no-repeat; background-size: cover;" class="h-100vh home-img" role="img" aria-label="The barber shop Sofia"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-55% lg-top-58% text-center w-full max-w-1000px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Класическо мокро бръснене</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-15.5px md-font-size-18px line-height-6.5 md:line-height-7"><span class="c-brand font-500" style="font-family: 'Roboto'">Класическото мокро бръснене</span> е нещо повече от рутинно задължение, това е ритуал, който ще Ви помогне да се отпуснете и да се насладите на истински комфорт за мъже. Този метод осигурява изключително гладко бръснене, намалява раздразненията и осигурява дълготраен резултат.</p>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="pb-10" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<H2WithImage class="c-paper" title="Какво Ви очаква по време на класическо мокро бръснене" />
				</AnimatedComponentSlide>
				<AnimatedComponentSlide>
					<div class="lg-mt-0 lg-px-30 pb-10 max-w-1600px mx-auto flex lg-flex-row flex-col gap-6 lg-gap-13 flex-items-center">
						<div class="lg-w-50% px-5 flex-self-start">
							<div class="flex flex-col gap-5 c-paper">
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral1 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Посрещане с усмивка и освежаваща напитка.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral2 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Настаняване на бръснарския стол.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral3 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Консултация относно желания резултат след бръснене с топла кърпа.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral4 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Класическо бръснене спрямо Вашите черти и изисквания с помощта на ножици и машинка за подстригване.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral5 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Почистване на лицето и подготовка за мокро бръснене чрез поставяне на топла кърпа, за да се омекотят кожата и космите.</div>
								</div>
							</div>
						</div>

						<div class="lg-w-50% pr-5 pl-5 lg-pl-0 flex-self-start">
							<div class="flex flex-col gap-5 c-paper">
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral6 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Нанасяне на крем или гел за бръснене.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral7 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Извършваме традиционно бръснене с четка и сапун, с помощта на чист и остър бръснач по посока на косъма.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral8 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Избърсване с хладка кърпа за затваряне на порите.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral9 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Нанасяне на успокояващ лосион или балсам.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral10 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Перфектна визия и повишено самочувствие.</div>
								</div>
							</div>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>

			<section class="lg-pb-25 pb-20">
				<AnimatedComponent>
					<H2WithImage class="max-w-750px mx-auto" title="Класическо мокро бръснене: От идеята до завършения вид" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
				</AnimatedComponent>
			</section>

			<div class="pb-20" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Цена на мокро бръснене" />
				<AnimatedComponentSlide>
					<div class="mt-15 md-mt-20 px-20px sm-px-50px md-pb-10 pb-5 max-w-1400px mx-auto">
						<div>
							<div class="flex flex-justify-between gap-5 b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper font-500 text-left pb-1" style="font-family: 'Oswald', sans-serif !important;">Класическо мокро бръснене</div>
								<div class="c-brand font-size-6 uppercase font-500 whitespace-nowrap" style="font-family: 'Oswald', sans-serif !important;">45 лв.</div>
							</div>
							<div class="c-gray-400 font-size-4.2 pt-3">Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба удоволствие за един мъж. Гладкото бръснене не е просто премахване на окосмяването по лицето - то е комбинация от продукти, горещи кърпи, плавни движения на бръснача и масажни техники на бръснаря. Услугата включва: гладко бръснене с бръснач, нанасяне на продукти за преди, по време и след бръснене без опасност от раздразнение и зачервяване. [1ч.]</div>
						</div>
					</div>
				</AnimatedComponentSlide>

				<AnimatedComponentSlide class="mx-3 md-mx-10">
					<div class="flex w-full px-10px lg-px-50px py-10 max-w-1320px mx-auto flex-justify-between flex-items-center b-solid b-2px b-gray-500 flex mt-8 hover-b-paper hover-bg-#14100c transition-colors important-transition-duration-300">
						<div class="c-paper font-size-5 lg-font-size-6 flex flex-items-center" style="font-family: 'Oswald', sans-serif !important;">
							<MdiProgressClock class="flex flex-self-center mr-2 lg-w-7 md-w-10 w-20 c-brand" />Работно време: Понеделник - Петък: 09.00 - 17.00
						</div>
						<div class="flex flex-col flex-items-center flex-self-center">
							<a href="/" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-13px sm-font-size-4 font-500 px-7 ml-4px md-ml-2 lg-text-left text-center py-2 hover-c-paper-inv transition-colors line-height-5 sm-line-height-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>

			<section>
				<div class="lg-pb-25 pb-20">
					<AnimatedComponent>
						<H2WithImage title="Класическо бръснене в действие" />
					</AnimatedComponent>
					<GallerySlider imgs={[
						{ src: "/assets/klasichesko-mokro-brasnene/hot-towel-shave.webp", alt: "hot-towel-shave" },
						{ src: "/assets/klasichesko-mokro-brasnene/мокро-бръснене-с-бръснач.webp", alt: "мокро-бръснене-с-бръснач" },
						{ src: "/assets/klasichesko-mokro-brasnene/мокро-бръснене-софия.webp", alt: "мокро-бръснене-софия" },
						{ src: "/assets/klasichesko-mokro-brasnene/hot-towel-shave-софия.webp", alt: "hot-towel-shave-софия" },
						{ src: "/assets/klasichesko-mokro-brasnene/гладко-бръснене-с-бръснач.webp", alt: "гладко-бръснене-с-бръснач" },
						{ src: "/assets/klasichesko-mokro-brasnene/професионално-мокро-бръснене.webp", alt: "професионално-мокро-бръснене" },
						{ src: "/assets/klasichesko-mokro-brasnene/мокро-бръснене-изток.webp", alt: "мокро-бръснене-изток" },
						{ src: "/assets/klasichesko-mokro-brasnene/класическо-мокро-бръснене-2.webp", alt: "класическо-мокро-бръснене" },
						{ src: "/assets/klasichesko-mokro-brasnene/мокро-бръснене-2.webp", alt: "мокро-бръснене" },
						{ src: "/assets/klasichesko-mokro-brasnene/мокро-бръснене-студентски-град.webp", alt: "мокро-бръснене-студентски-град" },
					]}
					/>
				</div>

				<section style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
					<div class="flex flex-col pb-20">
						<div class="flex flex-col flex-items-center">
							<AnimatedComponent>
								<H2WithImage class="c-paper" title="Отзиви" />
							</AnimatedComponent>
						</div>
						<div>
							<AnimatedComponent>
								<ReviewSlider
									reviews={[
										{ name: "Elizabeth Maurice" },
										{ name: "Gen Tiski" },
										{ name: "Samanta Federico" },
										{ name: "Samanta Federico" },
									]}>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="I received excellent communications throughout the whole process. On the day, the cleaning experience was efficient with a considerate and friendly member of staff. Very competitive pricing."
										name="Elizabeth Maurice"
										date="June 2024"
										stars={5}
										hrefGoogleReview="https://g.co/kgs/HPqEYvL"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="The best carpet cleaning service I have ever experienced. From start to finish was unbelievably smooth. The staff that attended extremely polite and moved all the items with utmost care. Would recommend using them as they are simply the best one has come across. Maya was absolutely fantastic in arranging this as the request was done at such a short notice."
										name="Gen Tiski"
										date="March 2024"
										stars={5}
										hrefGoogleReview="https://g.co/kgs/H3NeADN"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="I had my carpet cleaned by Nikolay from Fine Carpet Cleaning. What a fantastic job he did ! He is very professional, efficient and organised in the way he works. My carpet looks new again. I highly recommend."
										name="Samanta Federico"
										date="January 2024"
										stars={5}
										hrefGoogleReview="https://g.co/kgs/WxWf2Bm"
									/>
									<StarReview
										src="/assets/GoogleLogoPNGImage.png"
										reviewText="I had my carpet cleaned by Nikolay from Fine Carpet Cleaning. What a fantastic job he did ! He is very professional, efficient and organised in the way he works. My carpet looks new again. I highly recommend."
										name="Samanta Federico"
										date="January 2024"
										stars={5}
										hrefGoogleReview="https://g.co/kgs/WxWf2Bm"
									/>
								</ReviewSlider>
							</AnimatedComponent>
						</div>
						<AnimatedComponent>
							<div class="flex flex-col flex-items-center">
								<a href="/" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
							</div>
						</AnimatedComponent>
					</div>
				</section>

				<div class="pb-20">
					<AnimatedComponent>
						<H2WithImage title="Често поръчвани заедно" />
					</AnimatedComponent>

					<AnimatedComponent>
					<OftenOT
							services={[
								{ title: "Тониране на сиви коси" },
								{ title: "Бръснене на глава с бръснач" },
							]}>
							<ElementInOftenOT
								img="/assets/uslugi/мъжко-подстригване-1-mobile.webp"
								alt="Мъжко подстригване"
								href="/uslugi/mazhko-podstrigvane"
								title="Мъжко подстригване"
							/>
							<ElementInOftenOT
								img="/assets/about3.jpg"
								alt="Бръснене на глава с бръснач"
								href="/uslugi/brasnene-na-glava-s-brasnach"
								title="Бръснене на глава с бръснач"
							/>
						</OftenOT>
					</AnimatedComponent>

					<AnimatedComponent>
						<div class="flex flex-col flex-items-center pt-8 md:pt-10">
							<a href="/" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<section style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="lg-mx-30 mx-auto">
					<div class="flex md-flex flex-col lg-gap-5 flex-justify-center max-w-1440px lg-px-0 mx-auto pb-10">
						<AnimatedComponent>
							<H2WithImage class="c-paper" title="Предимставата на The Barber Shop" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-0">Опитни и квалифицирани бръснари</h3>
									<div class="pb-8 c-paper">Нашите <strong>опитни и квалифицирани бръснари</strong> ще Ви предложат прецизно традиционно бръснене с четка и сапун, съобразено с Вашите черти и желания. Ще Ви помогнат да изразите себе си и да се чувствате <strong>уверени в своята визия</strong>. Доверете ни се и се насладете на безупречно оформен външен вид.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Професионални инструменти</h3>
									<div class="pb-8 c-paper">Нашият арсенал включва <strong>професионални инструменти</strong> от световно известни производители, специализирани в бръснарската индустрия – <strong>Feather, Dovo Solingen,  Mühle, Thiers Issard</strong>. Разчитаме на <strong>висококачествени бръсначи, ножици и машинки за подстригване</strong>, които позволяват прецизни движения по време на класическото мокро бръснене, <strong>без да увреждат или накъсват косъма</strong>.
									</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Висококачествена козметика</h3>
									<div class="pb-8 c-paper">В <strong>The Barber Shop</strong> не правим компромиси с качеството при извършване на бръснене с класическа самобръсначка. За нас Вашите усмивки и безупречни визии са приоритет, затова използваме само <strong>най-добрите продукти за мъжка грижа</strong>. При нас ще откриете богато разнообразие от висок клас козметика <strong>Depot, American Crew, Lavish</strong> подходяща за <strong>всички видове кожа и коса</strong>.</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/klasichesko-mokro-brasnene/бръснач-за-мокро-бръснене.webp", alt: "бръснач за мокро бръснене" },
						{ src: "/assets/klasichesko-mokro-brasnene/козметика-за-мокро-бръснене.webp", alt: "козметика за мокро бръснене" },
						{ src: "/assets/klasichesko-mokro-brasnene/пяна-за-мокро-бръснене.webp", alt: "пяна за мокро бръснене" },
						{ src: "/assets/klasichesko-mokro-brasnene/инструменти-за-класическо-мокро-бръснене.webp", alt: "инструменти за класическо мокро бръснене" },
						{ src: "/assets/klasichesko-mokro-brasnene/козметика-за-мокро-бръснене-изток.webp", alt: "козметика за мокро бръснене изток" },
						{ src: "/assets/klasichesko-mokro-brasnene/козметика-за-мокро-бръснене-софия.webp", alt: "козметика за мокро бръснене софия" },
					]}
					/>
				</div>
			</section>

			<div class="pb-20">
				<AnimatedComponent>
					<H2WithImage title="Често задавани въпроси" />
				</AnimatedComponent>
				<div class="mx-0 lg:flex gap-10 justify-center flex-items-center">
					<div class="lg:w-50%">
						<SingleCollapse />
					</div>
					<div class="lg:block hidden lg:max-w-40% lg:px-0 md:px-10 px-5 lg:pt-0 md:pt-20 lg:pt-10">
						<img class="mx-auto max-w-full" src="/assets/home/бръснари-софия.webp" alt="Бръснари София" />
						<p class="important-my-0">text</p>
					</div>
				</div>
			</div>
		</>
	);
}
