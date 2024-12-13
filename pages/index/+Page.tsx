import "solid-slider/slider.css";
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { VideoPlayer } from '../../components/VideoPlayer';
import { GallerySlider } from '../../components/GallerySlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../components/AnimateOnViewSlide';
import MdiBank from '~icons/mdi/bank';
import MdiPhoneClassic from '~icons/mdi/phone-classic';
import RiTimerFill from '~icons/ri/timer-fill';

export default function Page() {
	return (
		<>
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url(/assets/23.jpg); background-position: center top; background-repeat: no-repeat; background-size: cover;" class="h-100vh"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-46% lg-top-50% text-center w-full max-w-700px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6">The Barber Shop Sofia</h1>
							</AnimatedComponent>
							<AnimatedComponent class="important-delay-300 c-paper text-center mb-10 font-size-5">Само за мъже.<br></br>За добре прекарано време или за добре загубено време.</AnimatedComponent>
						</div>

						<AnimatedComponent class="important-delay-600 float-left pr-5px relative text-center lg--top-170px -top-180px w-100% max-w-1240px" style="border: 2px solid rgba(255, 255, 255, 0.5);">
							<div class="w-33.333% float-left">
								<div class="float-left w-full py-25px">
									<div class="flex flex-col flex-justify-center flex-items-center gap-2">
										<MdiBank class="font-size-5.2 c-brand" />
										<div class="relative min-h-1px px-8px lg-px-15px c-paper flex text-center flex-justify-center font-size-5 lg-font-size-5.2" style="font-family: 'Oswald', sans-serif !important;">
											София, ул. "Николай Хайтов" 2
										</div>
									</div>
								</div>
							</div>

							<div class="w-33.333% float-left">
								<div class="float-left w-full py-25px" style="border-left: 2px solid rgba(255, 255, 255, 0.5); border-right: 2px solid rgba(255, 255, 255, 0.5)">
									<div class="flex flex-col flex-justify-center flex-items-center gap-2">
										<RiTimerFill class="font-size-5.7 c-brand" />
										<div class="relative min-h-1px px-8px lg-px-15px c-paper flex text-center flex-justify-center font-size-5 lg-font-size-5.2" style="font-family: 'Oswald', sans-serif !important;">
											Понеделник - Петък: 09.00 - 17.00
										</div>
									</div>
								</div>
							</div>

							<div class="w-33.333% float-left">
								<div class="float-left w-full py-25px">
									<div class="flex flex-col flex-justify-center flex-items-center gap-2">
										<MdiPhoneClassic class="font-size-5.7 c-brand" />
										<div class="relative min-h-1px px-8px lg-px-15px c-paper text-center flex flex-col lg-flex-row flex-justify-center font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important;">
											<div class="c-paper text-center flex flex-justify-center font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important;">
												Телефон:
											</div>
											<div class="lg-px-15px c-paper text-center flex flex-justify-center font-size-5 lg-font-size-5.2" style="font-family: 'Oswald', sans-serif !important;">
												0882 820 331
											</div>
										</div>
									</div>
								</div>
							</div>
						</AnimatedComponent>
					</div>
				</div>
			</div>

			<div class="pt-10 pb-10 lg--mt-30 -mt-45" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<div class="lg-mt-0 lg-px-30 pb-10 max-w-1600px mx-auto flex lg-flex-row flex-col gap-8 lg-gap-20">
					<AnimatedComponentSlide class="lg-w-50% px-5">
						<h2 class="c-paper text-left mb-7">Бръснарница от класа</h2>
						<div class="text-center h-1px w-150px bg-brand text-left mb-10"></div>
						<div class="flex flex-col gap-5">
							<div class="c-paper">
								<span class="c-brand  font-900" style="font-family: 'Roboto'">The Barber Shop Sofia</span> е нещо повече от просто бръснарница. Нашият барбър шоп се намира в квартал Изток, София на удобна и лесно достъпна локация в близост до ключови транспортни връзки и зелени градски зони.
							</div>
							<div class="c-paper">
								<span class="c-brand font-900" style="font-family: 'Roboto'">The Barber Shop Sofia</span> е премиум бръснарница, където майсторството се преплита с вниманието към детайла, за да Ви осигури отлично ниво на комфорт и стил. Нашата мисия е да създадем цялостно ексклузивно преживяване за истински мъже.
							</div>
						</div>
					</AnimatedComponentSlide>

					<AnimatedComponentSlide class="lg-w-50% pr-5">
						<h2 class="c-paper text-left mb-7">Стил и комфорт в едно</h2>
						<div class="text-center h-1px w-150px bg-brand text-left mb-10"></div>
						<ul class="c-paper ml--5">
							<li>Безплатно паркиране → бръснарница с място за паркиране</li>
							<li>Топло посрещане с безплатно питие</li>
							<li>Приятна и уютна атмосфера</li>
							<li>Усещане за принадлежност към мъжка общност</li>
							<li>Съчетание на традиционни техники с модерни подходи</li>
						</ul>
					</AnimatedComponentSlide>
				</div>
			</div>

			<div class="lg-px-30 pt-10 pb-20 px-4 w-full">
				<AnimatedComponentSlide>
					<h2>Нашите услуги</h2>
				</AnimatedComponentSlide>
				<div class="flex flex-wrap flex-justify-center lg-gap-5 gap-15">
					<AnimatedComponentSlide class="flex lg-w-23% max-w-full relative overflow-hidden " style="flex: 0 0 auto;">
						<img class="w-full h-auto" src="/assets/about3.jpg" alt="" />
						<div class="w-full p-20px absolute bottom-0px text-center" style="background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, .01) 1%, rgba(0, 0, 0, .95) 80%);">
							<div class="flex flex-col gap-1">
								<h4 class="c-paper relative font-size-27px mb-20px">
									Hair Cut
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
									Hair Cut
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
									Hair Cut
								</h4>
								<div class="text-center h-1px w-60px bg-brand mx-auto mb-20px"></div>
								<a href="/" class="bg-none c-paper b-solid b-1px b-paper hover-b-brand hover-bg-brand transition-colors mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
							</div>
						</div>
					</AnimatedComponentSlide>
				</div>
			</div>

			<div style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<div class="lg-mt-10 lg-pb-30 pb-20 pt-10">
					<AnimatedComponent>
						<h2 class="c-paper">Видео</h2>
					</AnimatedComponent>
					<AnimatedComponent>
						<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
					</AnimatedComponent>
				</div>
			</div>

			<section class="lg-pb-25 pb-20 pt-10">
				<AnimatedComponent>
					<h2>Как го правим</h2>
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
				<div class="flex flex-col gap-5 lg-pt-20 pb-20 pt-0 bg-#f2e0c2">
					<div class="flex flex-col flex-items-center">
						<AnimatedComponent>
							<h2 class="important-mb-2 lg-mb-9 mt-3">Какво казват нашите клиенти за нас</h2>
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
					<div class="flex flex-col flex-items-center">
						<a href="/" class="bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
					</div>
				</div>
			</div>

			<section style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="lg-mx-30 mx-auto lg-pt-10 pt-10">
					<div class="flex md-flex flex-col lg-gap-10 flex-justify-center max-w-1440px lg-px-0 mx-auto pb-10">
						<AnimatedComponent>
							<h2 class="pb-3 lg-pb-0 lg-mb-20 text-left c-paper">Предимставата на "The Barber Shop"</h2>
						</AnimatedComponent>
						<div class="px-5 flex lg-flex-row flex-col lg-gap-10">
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
					<h2>Нашият магазин</h2>
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
					{/* <div class="flex w-full px-20px lg-px-50px py-10 max-w-1140px mx-auto flex-justify-between flex-items-center b-solid b-2px b-paper flex lg-flex flex-col">
						<div class="flex flex-col flex-items-start pb-5 lg-pb-0">
							<h3 class="mt-0 mb-3 c-paper flex flex-items-center gap-2"><MdiProgressClock class="c-brand" />Работно време</h3>
							<div class="c-paper">
								Работно време: Понеделник - Петък: 09.00 - 17.00
							</div>
						</div>
						<div class="flex flex-justify-between lg-flex-justify-center lg-mt-10 w-full lg-gap-15">
							<a href="/" class="text-center w-32 lg-w-38 bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Услуги</a>
							<a href="/" class="text-center w-32 lg-w-38 bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Цени</a>
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
}
