import "solid-slider/slider.css";
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { VideoPlayer } from '../../components/VideoPlayer';
import { GallerySlider } from '../../components/GallerySlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../components/AnimateOnViewSlide';
import { ElementInOftenOT, OftenOT } from '../../components/OftenOT';
import MdiBank from '~icons/mdi/bank';
import MdiPhoneClassic from '~icons/mdi/phone-classic';
import RiTimerFill from '~icons/ri/timer-fill';
import MdiProgressClock from '~icons/mdi/progress-clock?width=24px&height=24px';

export default function Page() {
	return (
		<>
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url(/assets/23.jpg); background-position: center top; background-repeat: no-repeat; background-size: cover;" class="h-110vh"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-45% lg-top-55% text-center w-full max-w-700px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Мъжко подстригване</h1>
							</AnimatedComponent>
							<AnimatedComponent><p class="important-delay-300 c-paper text-center pt-10">В The Barber Shop не просто подстригваме. Предлагаме Ви преживяване, което съчетава удобство, майсторство и прецизност. С помощта на нашите бръснари ще определим стил на мъжкото подстригване, който не само подхожда на чертите Ви, но и отразява кой сте Вие.</p>
								<p class="important-delay-500 c-paper text-center">Нашата цел е да видите в огледалото мъж, който изглежда точно толкова добре, колкото се чувства.</p></AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="pt-10 pb-10 lg--mt-30 -mt-45" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<h2 class="c-paper text-center important-mb-0">Бръснарница от класа</h2>
				<img class="mx-auto pt-2 mb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
				<div class="lg-mt-0 lg-px-30 pb-10 max-w-1600px mx-auto flex lg-flex-row flex-col gap-6 lg-gap-20 flex-items-center">
					<AnimatedComponentSlide class="lg-w-50% px-5">
						<div class="flex flex-col gap-5 c-paper">
							1. Посрещане с усмивка и освежаваща напитка.<br></br>
							2. Настаняване на бръснарския стол.<br></br>
							3. Консултация относно желания стил на мъжко подстригване и стилизиране.<br></br>
							4. Подстригване спрямо Вашите черти и изисквания.<br></br>
							5. Измиване на косата с професионален шампоан и балсам.
						</div>
					</AnimatedComponentSlide>

					<AnimatedComponentSlide class="lg-w-50% pr-5 pl-5 lg-pl-0 flex-self-start">
						<div class="flex flex-col gap-5 c-paper">
							6. Изсушаване на косата със сешоар.<br></br>
							7. Оформяне и стилизиране на прическата с премиум козметика.<br></br>
							8. Представяне на повече информация относно предимствата от използваните продукти по време на мъжкото подстригване.<br></br>
							9. Перфектна визия и повишено самочувствие.
						</div>
					</AnimatedComponentSlide>
				</div>
			</div>

			<section class="lg-pb-25 pb-20 pt-10">
				<AnimatedComponent>
					<h2 class="important-mb-0">Видео</h2>
					<img class="mx-auto pt-2 mb-15 lg-mb--5 flex flex-justify-center" src="/assets/heading-ic.png" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
				</AnimatedComponent>
			</section>

			<div class="pt-10 lg-pb-20 pb-15" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<h2 class="c-paper text-center mb-7 important-mb-0">Бръснарница от класа</h2>
				<img class="mx-auto pt-2 mb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
				<div class="lg-mt-0 lg-px-30 pb-10 max-w-1600px mx-auto flex lg-flex-row flex-col gap-6 lg-gap-20 flex-items-center">
					<AnimatedComponentSlide class="lg-w-50% px-5 gap-15 flex flex-col">
						<div class="flex flex-col">
							<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
								<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
							</div>
							<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
						</div>

						<div class="flex flex-col">
							<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
								<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
							</div>
							<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
						</div>

						<div class="flex flex-col">
							<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
								<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
							</div>
							<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
						</div>

						<div class="flex flex-col">
							<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
								<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
							</div>
							<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
						</div>
					</AnimatedComponentSlide>

					<AnimatedComponentSlide class="lg-w-50% pr-5 pl-5 lg-pl-0 flex-self-start gap-15 flex flex-col">
						<div class="flex flex-col">
							<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
								<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
							</div>
							<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
						</div>

						<div class="flex flex-col">
							<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
								<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
							</div>
							<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
						</div>

						<div class="flex flex-col">
							<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
								<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
							</div>
							<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
						</div>

						<div class="flex flex-col">
							<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
								<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
								<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
							</div>
							<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
						</div>
					</AnimatedComponentSlide>
				</div>

				<AnimatedComponentSlide>
					<div class="flex w-full px-20px lg-px-50px py-10 max-w-1320px mx-auto flex-justify-between flex-items-center b-solid b-2px b-gray-500 flex mt-8 hover-b-paper hover-bg-black transition-colors important-transition-duration-300">
						<div class="c-paper font-size-6 flex flex-items-center" style="font-family: 'Oswald', sans-serif !important;">
							<MdiProgressClock class="flex flex-self-center mr-2 w-7 h-7 c-brand" />Работно време: Понеделник - Петък: 09.00 - 17.00
						</div>
						<div class="flex flex-col flex-items-center flex-self-center">
							<a href="/" class="bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>

			<section class="lg-pb-25 pb-20 pt-10">
				<AnimatedComponent>
					<h2 class="important-mb-0">Как го правим</h2>
					<img class="mx-auto pt-2 pb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
				</AnimatedComponent>
				<GallerySlider imgs={[
					{ src: "/assets/about3.jpg", alt: "1-commercial-carpet-cleaning-london" },
					{ src: "/assets/about3.jpg", alt: "3-commercial-carpet-cleaning-methods" },
					{ src: "/assets/about3.jpg", alt: "2-commercial-carpet-cleaning-process" },
					{ src: "/assets/about3.jpg", alt: "4-commercial-carpet-cleaning-services" },
				]}
				/>
			</section>

			<div>
				<div class="flex flex-col lg-pt-20 pb-20 pt-0 bg-#f2e0c2">
					<div class="flex flex-col flex-items-center">
						<AnimatedComponent>
							<h2 class="important-mb-2 lg-mb-9 mt-3 mb-0">Какво казват нашите клиенти за нас</h2>
							<img class="mx-auto pt-2 pb-10 flex flex-justify-center" src="/assets/heading-ic.png" />
						</AnimatedComponent>
					</div>
					<div>
						<AnimatedComponent>
							<ReviewSlider>
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
							<a href="/" class="bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
						</div>
					</AnimatedComponent>
				</div>
			</div>

			<section class="lg-pb-25 pb-20 pt-10">
				<AnimatedComponent>
					<h2 class="important-mb-0">Често поръчвани заедно</h2>
					<img class="mx-auto pt-2 pb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
				</AnimatedComponent>

				<OftenOT>
					<ElementInOftenOT
						title="Hot Towel Shave"
						desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба удоволствие за един мъж. [1ч.]"
					/>

					<ElementInOftenOT
						title="Hot Towel Shave"
						desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба удоволствие за един мъж. [1ч.]"
					/>

					<ElementInOftenOT
						title="Hot Towel Shave"
						desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба удоволствие за един мъж. [1ч.]"
					/>

					<ElementInOftenOT
						title="Hot Towel Shave"
						desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба удоволствие за един мъж. [1ч.]"
					/>
				</OftenOT>

				<AnimatedComponent>
					<div class="flex flex-col flex-items-center pt-10">
						<a href="/" class="bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
					</div>
				</AnimatedComponent>
			</section>

			<section style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="lg-mx-30 mx-auto lg-pt-10 pt-10">
					<div class="flex md-flex flex-col lg-gap-5 flex-justify-center max-w-1440px lg-px-0 mx-auto pb-10">
						<AnimatedComponent>
							<h2 class="pb-3 lg-pb-0 important-mb-0 c-paper">Предимставата на "The Barber Shop"</h2>
							<img class="mx-auto pt-2 pb-15 lg-pb-10 flex flex-justify-center" src="/assets/heading-ic.png" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-0">Опитни и квалифицирани барбъри</h3>
									<div class="pb-8 c-paper">Зад всяка перфектна прическа в The Barber Shop Sofia стои екип от изключителни професионалисти. Нашият барбър шоп е събрал част от най-добрите бръснари в София. Всеки от тях преминава през интензивно обучение, което обхваща както класическите бръснарски техники, така и най-новите тенденции в подстригването. Благодарение на това можем да ви предложим премиум обслужване на високо ниво и страхотни резултати.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Професионални инструменти</h3>
									<div class="pb-8 c-paper">Използваме висок клас бръснарски принадлежности, които са внимателно подбрани, за да съчетават качество, ефективност и прецизност. В нашата бръснарница разчитаме на световно признати марки като Wahl, Andis, BabylissPRO, Mühle, Thiers Issard, гарантиращи безопасност и комфорт. Независимо от това какъв стил предпочитате, ние имаме правилните инструменти, с който да постигнем отличен краен резултат.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Висококачествена козметика</h3>
									<div class="pb-8 c-paper">В The Barber Shop Sofia не правим компромиси с качеството. За нас Вашите усмивки и безупречни визии са приоритет, затова използваме само най-добрите продукти за мъжка грижа. При нас ще откриете богато разнообразие от висок клас козметика Depot, American Crew, Lavish подходяща за всички видове кожа и коса. Нашата гама от козметика включва всичко необходимо – от шампоани и балсами до стилизиращи продукти.</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="lg-pb-20 pb-10">
					<GallerySlider style="border-color:#d19d64; color:#d19d64;" imgs={[
						{ src: "/assets/about3.jpg", alt: "1-commercial-carpet-cleaning-london" },
						{ src: "/assets/about3.jpg", alt: "3-commercial-carpet-cleaning-methods" },
						{ src: "/assets/about3.jpg", alt: "2-commercial-carpet-cleaning-process" },
						{ src: "/assets/about3.jpg", alt: "4-commercial-carpet-cleaning-services" },
					]}
					/>
				</div>
			</section>

			<div class="lg-px-30 pt-10 pb-20 px-4 w-full flex flex-col flex-justify-center">
				<AnimatedComponentSlide>
					<h2 class="important-mb-0">Нашият магазин</h2>
					<img class="mx-auto pt-2 pb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
				</AnimatedComponentSlide>
				<div class="flex flex-wrap flex-justify-center lg-gap-5 gap-15">
					<AnimatedComponentSlide class="flex lg-w-23% max-w-full relative overflow-hidden " style="flex: 0 0 auto;">
						<img class="w-full h-auto" src="/assets/about3.jpg" alt="" />
						<div class="w-full p-20px absolute bottom-0px text-center" style="background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, .01) 1%, rgba(0, 0, 0, .95) 80%);">
							<div class="flex flex-col gap-1">
								<h4 class="c-paper relative font-size-27px mb-20px">
									Козметика
								</h4>
								<div class="text-center h-1px w-60px bg-brand mx-auto mb-20px"></div>
								<a href="/" class="bg-none c-paper b-solid b-1px b-paper hover-b-brand hover-bg-brand transition-colors mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
							</div>
						</div>
					</AnimatedComponentSlide>
					<AnimatedComponentSlide class="flex lg-w-23% max-w-full relative overflow-hidden" style="flex: 0 0 auto;">
						<img class="w-full h-auto" src="/assets/about3.jpg" alt="" />
						<div class="w-full p-20px absolute bottom-0px text-center" style="background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, .01) 1%, rgba(0, 0, 0, .95) 80%);">
							<div class="flex flex-col gap-1">
								<h4 class="c-paper relative font-size-27px mb-20px">
									Козметика
								</h4>
								<div class="text-center h-1px w-60px bg-brand mx-auto mb-20px"></div>
								<a href="/" class="bg-none c-paper b-solid b-1px b-paper hover-b-brand hover-bg-brand transition-colors mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
							</div>
						</div>
					</AnimatedComponentSlide>
					<AnimatedComponentSlide class="flex lg-w-23% max-w-full relative overflow-hidden" style="flex: 0 0 auto;">
						<img class="w-full h-auto" src="/assets/about3.jpg" alt="" />
						<div class="w-full p-20px absolute bottom-0px text-center" style="background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, .01) 1%, rgba(0, 0, 0, .95) 80%);">
							<div class="flex flex-col gap-1">
								<h4 class="c-paper relative font-size-27px mb-20px">
									Козметика
								</h4>
								<div class="text-center h-1px w-60px bg-brand mx-auto mb-20px"></div>
								<a href="/" class="bg-none c-paper b-solid b-1px b-paper hover-b-brand hover-bg-brand transition-colors mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
							</div>
						</div>
					</AnimatedComponentSlide>
				</div>
				<AnimatedComponentSlide class="mx-auto pt-15">
					<a href="/" class="bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Към магазин</a>
				</AnimatedComponentSlide>
			</div>
			<div class="" style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;">
				<div class="px-2 gap-15 lg-h-80vh h-100% lg-py-0 py-15 flex flex-col flex-justify-center flex-items-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(/assets/20.jpg); background-position: center top; background-repeat: no-repeat; background-size: cover;">
					<AnimatedComponent class="flex flex-col flex-justify-center">
						<h2 class="c-paper important-my-0">Свържете се с нас</h2>
						<img class="mx-auto pt-2" src="/assets/heading-ic.png" />
					</AnimatedComponent>

					<div class="flex lg-flex-row flex-col lg-gap-0 gap-10 w-full flex-justify-evenly">
						<AnimatedComponent class="flex flex-col text-center lg-w-33.33%">
							<MdiBank class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 pl-2.3 mx-auto lg-mb-6 mb-3" />
							<div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Адрес:
							</div>
							<div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								София, ул. "Николай Хайтов" 2
							</div>
						</AnimatedComponent>

						<AnimatedComponent class="flex flex-col text-center lg-w-33.33%">
							<RiTimerFill class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 mx-auto lg-mb-6 mb-3" />
							<div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Работно време:
							</div>
							<div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Понеделник - Петък: 09.00 - 17.00
							</div>
						</AnimatedComponent>

						<AnimatedComponent class="flex flex-col text-center lg-w-33.33%">
							<MdiPhoneClassic class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 mx-auto lg-mb-6 mb-3" />
							<div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Телефон:
							</div>
							<div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								0882 820 331
							</div>
						</AnimatedComponent>
					</div>

					<AnimatedComponent class="flex flex-justify-evenly lg-flex-justify-center lg-mt-10 w-full lg-gap-15 max-w-90% lg-max-w-1140px border-t-solid b-paper b-1px pt-16 lg-pt-22">
						<a href="/" class="text-center w-32 lg-w-38 bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Услуги</a>
						<a href="/" class="text-center w-32 lg-w-38 bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Цени</a>
					</AnimatedComponent>
				</div>
			</div>
		</>
	);
}
