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
				<Collapse title="Задължително ли е да запазя час за оформяне на брада предварително?" desc="Препоръчваме Ви да запазите час предварително, за да си осигурите стилизиране на брада в удобно за Вас време. При наличие на свободни часове приемаме и клиенти без предварителна резервация." />

				<Collapse title="Как мога да си запазя час?" desc="За Ваше улеснение можете да запазите час за поддръжка на брада  по следните начини:">
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

				<Collapse title="Какво ще се случи, ако не успея да дойда навреме за часа си за контуриране на брада?" desc="Молим да ни уведомите, ако ще закъснеете. Ако закъснението е повече от 15 минути, ще се наложи да отменим часа Ви." />

				<Collapse title="Мога ли да избера конкретен барбър за оформяне на брада?" desc="Да, за Ваше удобство при записване на час можете да уточните на кого от нашите висококвалифицирани барбъри да се доверите." />

				<Collapse title="Какви методи на плащане използвате?" desc="Приемаме плащане в брой, както и чрез дебитна / кредитна карта." />

				<Collapse title="Мога ли да закупя продукти за стилизиране на брада на място от бръснарницата?" desc="Да, можете да разгледате нашия асортимент от мъжки професионални продукти за оформяне на брада и да ги закупите на място от бръснарницата." />

				<Collapse title="The Barber Shop достъпен ли е за инвалиди?" desc="Бръснарницата е достъпна за инвалиди. В случай че изпитвате затруднения или имате въпроси, свържете се с нас на телефон +359 882 820 331." />

				<Collapse title="Осигурявате ли паркоместа за клиентите?" desc="Да, осигурили сме 4 паркоместа пред входа на бръснарницата на разположение на клиентите." />

				<Collapse title="Колко често трябва да посещавам бръснар за оформяне на брада?" desc="Зависи от дължината и формата на брадата, колко бързо расте, сами в домашни условия ли я поддържате или при професионален бръснар. За постигане на оптимален резултат препоръчваме на всеки 2-3 седмици посещение в бръснарница за оформяне на брада." />

				<Collapse title="Оформяте ли мустаци като част от услугата оформяне на брада?" desc="Да, разбира се! Мустаците са важна част от цялостната визия на брадата. Ще се погрижим те да са перфектно оформени и да пасват идеално с брадата Ви." />

				<Collapse title="Как да поддържам брадата си между посещенията ми при барбър?" desc="След всяка една услуга даваме подробна инструкция за поддръжка и оформяне на брадата на клиентите. Това включва:">
					<div>
						<ul>
							<li class="">
								как правилно да миете брадата си и как да я сушите и изправяте със сешоар
							</li>
							<li class="">
								каква козметика е подходяща за Вашата брада и как да я използвате
							</li>
							<li class="">
								с какво да сресвате брадата си
							</li>

							<li class="">
								как да поддържате контура си сами вкъщи
							</li>
							<li class="">
								какви инструменти да използвате за най-добри резултати.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="Можете ли да препоръчате продукти за помощ при сърбеж или раздразнение на брадата?" desc="При сърбеж препоръчваме употребата на масло или балсам за брада, които ще омекотят космите и ще ги направят по-управляеми. Тези продукти ще помогнат за хидратация на кожата под брадата и ще намалят сърбежа и раздразнението." />

				<Collapse title="Не съм сигурен точно какво искам. Бихте ли ми помогнали да избера точното оформяне на брада спрямо моите черти?" desc="Да, разбира се. С удоволствие ще Ви помогнем да изберете подстригване и оформяне на брада, които най-добре подхождат на формата на лицето Ви, тип коса и лични предпочитания. Първо ще проведем консултация, за да разберем какво точно желаете и ще Ви предложим няколко опции за моделиране на брада, които ще Ви накарат да изглеждате и да се чувствате страхотно." />
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
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-55% lg-top-58% text-center w-full max-w-800px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Оформяне на брада</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-15.5px md-font-size-18px line-height-6.5 md:line-height-7">Професионалното <span class="c-brand font-500" style="font-family: 'Roboto'">оформяне на брада</span> подчертава отличителните черти на лицето чрез оформяне на перфектния контур, подстригване до желаната дължина и стилизиране с правилните продукти. Независимо дали сте традиционалист или експериментатор, ние сме насреща да Ви помогнем в избора на перфектната визия.</p>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="pb-10" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<H2WithImage class="c-paper" title="Какво Ви очаква по време на оформяне на брада" />
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
									<MdiRomanNumeral3 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Консултация относно желания стил на оформяне на брадата.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral4 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Контуриране на брадата спрямо Вашите черти и изисквания с помощта на ножици и машинка за подстригване.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral5 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Измиване на брадата с професионален шампоан и балсам, подходящи за Вашата кожа.</div>
								</div>
							</div>
						</div>

						<div class="lg-w-50% pr-5 pl-5 lg-pl-0 flex-self-start">
							<div class="flex flex-col gap-5 c-paper">
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral6 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Изсушаване на брадата със сешоар.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral7 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Стилизиране на брадата с помощта на козметични продукти.</div><br></br>
								</div>
								<div class="flex flex-items-start gap-10px c-paper">
									<MdiRomanNumeral8 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-36px h-36px c-brand" /><div class="mt-1 c-paper">Представяне на повече информация относно предимствата от използваните продукти.</div><br></br>
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
					<H2WithImage class="max-w-750px mx-auto" title="Професионално оформяне на брада: От идеята до завършения вид" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
				</AnimatedComponent>
			</section>

			<div class="pb-20" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<H2WithImage class="c-paper" title="Цена на оформяне на брада" />
				<AnimatedComponentSlide>
					<div class="mt-15 md-mt-20 px-20px sm-px-50px md-pb-10 pb-5 max-w-1400px mx-auto">
						<div>
							<div class="flex flex-justify-between gap-5 b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper font-500 text-left pb-1" style="font-family: 'Oswald', sans-serif !important;">Оформяне на брада</div>
								<div class="c-brand font-size-6 uppercase font-500 whitespace-nowrap" style="font-family: 'Oswald', sans-serif !important;">30 лв.</div>
							</div>
							<div class="c-gray-400 font-size-4.2 pt-3">Оформянето на брадата е специфична процедура, която изисква сериозни познания, бръснарска компетенция и известна доза талант. Преценката за избор на форма и контур на брадата е на база типа лице, личният стил и предпочитание на всеки мъж – все неща, с които бръснарите от The Barber Shop Sofia имат богат опит.Услугата включва: оформяне на дължината, очертаване на контур на брадата с тример и/или бръснач (изцяло по избор на клиента), нанасяне на продукти за грижа на брадата, съобразени с преценката на бръснаря и предпочитанията на клиента. [30мин.]</div>
						</div>
					</div>
				</AnimatedComponentSlide>

				<AnimatedComponentSlide class="mx-3 md-mx-10">
					<div class="flex w-full px-10px lg-px-50px py-10 max-w-1320px mx-auto flex-justify-between flex-items-center b-solid b-2px b-gray-500 flex mt-8 hover-b-paper hover-bg-#14100c transition-colors important-transition-duration-300">
						<div class="c-paper font-size-5 lg-font-size-6 flex flex-items-center" style="font-family: 'Oswald', sans-serif !important;">
							<MdiProgressClock class="flex flex-self-center mr-2 lg-w-7 md-w-10 w-20 c-brand" />Работно време: Понеделник - Петък: 09.00 - 17.00
						</div>
						<div class="flex flex-col flex-items-center flex-self-center">
							<a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-13px sm-font-size-4 font-500 px-7 ml-4px md-ml-2 lg-text-left text-center py-2 hover-c-paper-inv transition-colors line-height-5 sm-line-height-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>

			<section>
				<div class="lg-pb-25 pb-20">
					<AnimatedComponent>
						<H2WithImage title="Оформяне на брада в действие" />
					</AnimatedComponent>
					<GallerySlider imgs={[
						{ src: "/assets/oformiane-na-brada/оформяне-на-брада-видове-1.webp", alt: "оформяне на брада видове" },
						{ src: "/assets/oformiane-na-brada/оформяне-на-брада-видове.webp", alt: "оформяне на брада видове" },
						{ src: "/assets/oformiane-na-brada/оформяне-на-брада-софия-1.webp", alt: "оформяне на брада софия" },
						{ src: "/assets/oformiane-na-brada/beard-trim-near-me-1.webp", alt: "beard trim near me" },
						{ src: "/assets/oformiane-na-brada/beard-trim-near-me-2.webp", alt: "beard trim near me" },
						{ src: "/assets/oformiane-na-brada/faded-beard-trim.webp", alt: "faded beard trim" },
						{ src: "/assets/oformiane-na-brada/оформяне-на-брада-2.webp", alt: "оформяне на брада" },
						{ src: "/assets/oformiane-na-brada/оформяне-на-брада-3.webp", alt: "оформяне на брада" },
						{ src: "/assets/oformiane-na-brada/оформяне-на-брада-софия.webp", alt: "оформяне на брада софия" },
						{ src: "/assets/oformiane-na-brada/оформяне-на-мъжка-брада-1.webp", alt: "оформяне на мъжка брада" },
						{ src: "/assets/oformiane-na-brada/оформяне-на-мъжка-брада.webp", alt: "оформяне на мъжка брада" },
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
								img="/assets/about3.jpg"
								alt="Тониране на сиви коси"
								href="/uslugi/profesionalno-tonirane-na-mazhka-kosa"
								title="Тониране на сиви коси"
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
							<a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
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
									<div class="pb-8 c-paper">Нашият екип се състои от <strong>опитни и талантливи бръснари</strong>, специализирани в оформянето на брада.  Всеки член на нашия отбор е преминал през интензивно обучение, научавайки <strong>тънкостите на бръснарското майсторство</strong>. С внимание към детайла и <strong>индивидуален подход</strong>, те създават персонализирани визии, <strong>подчертаващи уникалността на всеки клиент</strong>. Доверете брадата си на професионалисти и няма да съжалявате!</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Професионални инструменти</h3>
									<div class="pb-8 c-paper">В <strong>The Barber Shop</strong> вярваме, че постигането на отлични резултати в моделирането на брада се случва с усилие и <strong>качествени инструменти</strong>. Затова инвестираме в най-добрите професионални бръснарски принадлежности от световно известни производители като <strong>Feather, Dovo Solingen, Mühle, Thiers Issard</strong>. Нашите прецизни ножици, остри бръсначи и иновативни машинки са специално подбрани, за да осигурят <strong>безкомпромисно качество при всяка процедура</strong>.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Висококачествена козметика</h3>
									<div class="pb-8 c-paper"><strong>Качествената козметика е ключов елемент</strong> при оформянето на брада. Ние работим с продукти от утвърдени марки като <strong>Depot, American Crew и Lavish</strong>, които предлагат изключителна <strong>грижа за кожата и брадата</strong>. Те не само подхранват и хидратират, но и осигуряват дълготрайна свежест и здрав вид, като допринасят за цялостното Ви <strong>усещане за комфорт и самочувствие</strong>.</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/oformiane-na-brada/козметика-за-оформяне-на-мъжка-брада.webp", alt: "козметика за оформяне на мъжка брада" },
						{ src: "/assets/oformiane-na-brada/машинка-за-оформяне-на-мъжка-брада.webp", alt: "машинка за оформяне на мъжка брада" },
						{ src: "/assets/oformiane-na-brada/инструменти-за-оформяне-на-брада.webp", alt: "инструменти за оформяне на брада" },
						{ src: "/assets/oformiane-na-brada/козметика-за-оформяне-на-брада.webp", alt: "козметика за оформяне на брада" },
						{ src: "/assets/oformiane-na-brada/козметика-за-beard-trim.webp", alt: "козметика за beard trim" },
						{ src: "/assets/oformiane-na-brada/бръснач-за-оформяне-на-брада.webp", alt: "бръснач за оформяне на брада" },
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
