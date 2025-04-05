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
				<Collapse title="Задължително ли е да запазя час за комбинирана услуга за баща и син предварително?" desc="Препоръчваме Ви да запазите час предварително, за да си осигурите трансформация баща-син в удобно за Вас време. При наличие на свободни часове приемаме и клиенти без предварителна резервация." />

				<Collapse title="Как мога да си запазя час за семейно подстригване за баща и син?" desc="За Ваше улеснение можете да запазите час за семейно оформяне на мъжки стил по следните начини:">
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

				<Collapse title="Какво ще се случи, ако не успеем да дойдем навреме за часа си за мъжко подстригване за две поколения?" desc="Молим да ни уведомите, ако ще закъснеете. Ако закъснението е повече от 15 минути, ще се наложи да отменим часа Ви." />

				<Collapse title="Мога ли да избера конкретен барбър, който да се погрижи за нашия мъжки семеен стайлинг?" desc="Да, за Ваше удобство при записване на час можете да уточните на кого от нашите висококвалифицирани барбъри да се доверите." />

				<Collapse title="Какви методи на плащане използвате?" desc="Приемаме плащане в брой, както и чрез дебитна / кредитна карта." />

				<Collapse title="Мога ли да закупя продукти на място от бръснарницата?" desc="Да, можете да разгледате нашия асортимент от мъжки професионални продукти за коса и брада и да ги закупите на място от бръснарницата." />

				<Collapse title="The Barber Shop достъпен ли е за инвалиди?" desc="Бръснарницата е достъпна за инвалиди. В случай че изпитвате затруднения или имате въпроси, свържете се с нас на телефон +359 882 820 331." />

				<Collapse title="Осигурявате ли паркоместа за клиентите?" desc="Да, осигурили сме 4 паркоместа пред входа на бръснарницата на разположение на клиентите." />

				<Collapse title="Има ли отстъпка в цената в сравнение с индивидуалните подстригвания? Защо да избера подстригване на баща и син пред индивидуалните услуги?" desc="Ние от The Barber Shop знаем колко важна е връзката между баща и син. Точно затова предлагаме комбинирана услуга за баща и син, на цена по-ниска от тази на индивидуалните услуги. Представяме Ви една потенциална възможност за споделено и добре прекарано време, което би могло да се превърне в семейна традиция за баща и син." />

				<Collapse title="Имате ли опит с подстригване на малки деца?" desc="Да, имаме опит с подстригване на малки деца. Нашите бръснари са обучени да работят с деца и знаят как да създадат спокойна и приятелска атмосфера, за да направят посещението на Вашето дете възможно най-приятно." />

				<Collapse title="Можем ли да направим семейното подстригване за баща и син при един и същ барбър?" desc="Да, подстригването баща и син се извършва последователно от един и същ барбър. В случай, че желаете различни барбъри да подстрижат Вас и сина Ви, цената на подстригване баща и син не е промоционална и ще заплатите цената на две индивидуални подстригвания." />
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
								<h1 class="uppercase c-paper mb-6 text-center">Подстригване на баща и син</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-15.5px md-font-size-18px line-height-6.5 md:line-height-7">Споделете специален момент със своя син в нашата бръснарница. Предлагаме ви <span class="c-brand font-500" style="font-family: 'Roboto'">комбо подстригване баща и син</span> – персонализирано обслужване за малки и големи господа, което създава не само страхотни прически, но и незабравими спомени.</p>
								<p class="important-delay-500 text-center font-500 line-height-7 c-paper">*Услугата се извършва по един и същ начин при мъжкото подстригване и при детското подстригване. В повечето случаи подстригваме първо бащата, за да види детето, че няма нищо страшно.*</p>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="pb-10" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<H2WithImage class="c-paper" title="Какво Ви очаква по време на семейно подстригване за баща и син" />
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
									<MdiRomanNumeral3 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Консултация относно желания мъжки семеен стайлинг.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral4 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Подстригване спрямо Вашите черти и изисквания.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral5 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Измиване на косата с професионален шампоан и балсам.</div>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral6 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Изсушаване на косата със сешоар.</div><br></br>
								</div>
							</div>
						</div>

						<div class="lg-w-50% pr-5 pl-5 lg-pl-0 flex-self-start">
							<div class="flex flex-col gap-5 c-paper">
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral7 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Оформяне и стилизиране на прическата с премиум козметика.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral8 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Представяне на повече информация относно предимствата от използваните продукти по време на семейното оформяне на мъжки стил.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral9 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Перфектна визия и повишено самочувствие.</div>
								</div>
							</div>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>

			<section class="lg-pb-25 pb-20">
				<AnimatedComponent>
					<H2WithImage class="max-w-750px mx-auto" title="Подстригване на баща и син: От идеята до завършения вид" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
				</AnimatedComponent>
			</section>

			<div class="pb-20" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Цена на подстригване на баща и син" />
				<AnimatedComponentSlide>
					<div class="mt-15 md-mt-20 px-20px sm-px-50px md-pb-10 pb-5 max-w-1400px mx-auto">
						<div>
							<div class="flex flex-justify-between gap-5 b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper font-500 text-left pb-1" style="font-family: 'Oswald', sans-serif !important;">Подстригване на баща и син</div>
								<div class="c-brand font-size-6 uppercase font-500 whitespace-nowrap" style="font-family: 'Oswald', sans-serif !important;">75 лв.</div>
							</div>
							<div class="c-gray-400 font-size-4.2 pt-3">Семейните посещения винаги носят огромна радост. Винаги се радваме изключително много, когато на бръснарските столове седнат баща и син. Вярваме, че посещението на бръснарницата създава не само добри навици, но и прекрасни спомени. Ако все още не сте довели малчугана си при нашите момчета, то тази седмица имате повод да го направите. [1 ч. 30мин.]</div>
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
						<H2WithImage title="Подстригване на баща и син в действие" />
					</AnimatedComponent>
					<GallerySlider imgs={[
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

				<div class="pb-20 hidden">
					<AnimatedComponent>
						<H2WithImage title="Често поръчвани заедно" />
					</AnimatedComponent>

					<AnimatedComponent>
						<OftenOT
							services={[
								{ title: "Тониране на сиви коси" },
							]}>
							<ElementInOftenOT
								img="/assets/about3.jpg"
								alt="Тониране на сиви коси"
								href="/uslugi/profesionalno-tonirane-na-mazhka-kosa"
								title="Тониране на сиви коси"
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
							<H2WithImage class="c-paper" title="Предимствата на The Barber Shop" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-0">Опитни и квалифицирани бръснари</h3>
									<div class="pb-8 c-paper">Екипът на <strong>The Barber Shop</strong> се състои от млади, целеустремени и <strong>непрекъснато развиващи се бръснари</strong>. Всеки един от тях е преминал интензивно обучение, усвоявайки <strong>“езика на бръснарството”</strong>. С <strong>професионализъм, лично отношение и внимание към детайла</strong> могат да пресъздадат всяка визия съобразена с предпочитанията и чертите Ви. Включете се в семейната традиция на <strong>The Barber Shop</strong> – подстригване на баща и син и изживейте <strong>специални моменти с вашето дете</strong>.
									</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Професионални инструменти</h3>
									<div class="pb-8 c-paper">В <strong>The Barber Shop</strong> разчитаме на <strong>професионални инструменти</strong> от най-висок клас от брандове като <strong>Wahl, Andis, Oster, BabylissPRО</strong>. Нашите бръснарски инструменти и аксесоари са подбрани заради своята изключителна <strong>прецизност и ергономичност</strong>. Те ни позволяват да изпълняваме дори най-сложните техники с лекота, осигурявайки максимален комфорт и супер резултат за всички малки и големи господа.
									</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Висококачествена козметика</h3>
									<div class="pb-8 c-paper">Перфектната визия започва със <strong>здрава кожа и коса</strong>. Ето защо ние работим с марки като <strong>Depot, American crew, Lavish,</strong> специализирани в мъжката козметика, с изчистен състав и <strong>благоприятно действие върху косата и кожата</strong>. Асортиментът ни включва <strong>подхранващи шампоани, хидратиращи балсами, както и стилизиращи продукти, подходящи за всеки тип коса и брада</strong>. Те са нежни към кожата, което ги прави подходящи за употреба при мъжко и детско подстригване.
									</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/podstrigvane-na-bashta-i-sin/почистване-на-инструменти-за-подстригване-на-баща-и-син.webp", alt: "почистване на инструменти за подстригване на баща и син" },
						{ src: "/assets/podstrigvane-na-bashta-i-sin/козметика-за-подстригване-на-баща-и-син-софия.webp", alt: "козметика за подстригване на баща и син София" },
						{ src: "/assets/podstrigvane-na-bashta-i-sin/козметика-за-подстригване-на-баща-и-син.webp", alt: "козметика за подстригване на баща и син" },
						{ src: "/assets/podstrigvane-na-bashta-i-sin/инструменти-за-подстригване-на-баща-и-син.webp", alt: "инструменти за подстригване на баща и син" },
						{ src: "/assets/podstrigvane-na-bashta-i-sin/ножица-за-подстригване-на-баща-и-син.webp", alt: "ножица за подстригване на баща и син" },
						{ src: "/assets/podstrigvane-na-bashta-i-sin/професионална-козметика-за-подстригване-на-баща-и-син.webp", alt: "професионална козметика за подстригване на баща и син" },
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
