import "solid-slider/slider.css";
import { VideoPlayer } from '../../../components/VideoPlayer';
import { GallerySlider } from '../../../components/GallerySlider';
import { AnimatedComponent } from '../../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../../components/AnimateOnViewSlide';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import MdiBank from '~icons/mdi/bank';
import MdiPhoneClassic from '~icons/mdi/phone-classic';
import RiTimerFill from '~icons/ri/timer-fill';

export default function Page() {
	return (
		<>
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ), url(/assets/kris/барбър-крис-индивидуална.webp); background-position: center; background-repeat: no-repeat; background-size: cover;" class="h-100vh kris-img" role="img" aria-label="Барбър Крис - Индивидуална"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-58% lg-top-58% text-center w-full max-w-800px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Кристиан</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-14.5px md-font-size-18px line-height-7">Кристиан е любител на класическите автомобили и често взима участие в автопаради. Той знае, че както при старинните автомобили, така и при прическите, истинската красота е в детайлите. Неговата страст към детайла и естетиката се отразява и в бръснарските му умения, като съчетава прецизност и творчество във всяка прическа.</p>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<section class="lg-pb-25 pb-20 pt-10 bg-#f2e0c2" style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
				<AnimatedComponent>
					<h2 class="important-mb-0">Видео</h2>
					<img class="mx-auto pt-2 mb-15 lg-mb--5 flex flex-justify-center" src="/assets/heading-ic.png" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
				</AnimatedComponent>
			</section>

			<section style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="lg-mx-30 mx-auto lg-pt-10 pt-10">
					<div class="flex md-flex flex-col lg-gap-5 flex-justify-center max-w-1440px lg-px-0 mx-auto pb-10">
						<AnimatedComponent>
							<h2 class="pb-3 lg-pb-0 important-mb-0 c-paper">Защо да се доверите на Кристиан</h2>
							<img class="mx-auto pt-2 pb-15 lg-pb-10 flex flex-justify-center" src="/assets/heading-ic.png" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-50% flex flex-col">
								<AnimatedComponent>
									<div class="pb-8 c-paper">Кристиан е пример за професионализъм в бръснарското изкуство, както и че с постоянство всичко се постига. Неговият дългогодишен опит го е утвърдил като ненадминат експерт в традиционното бръснене с бръснач. Към момента не само практикува, а и участва като лектор в множество обучения, на които с радост предава своите знания на следващото поколение бръснари.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-50% flex flex-col">
								<AnimatedComponent>
									<div class="pb-8 c-paper">Умело комбинира класическите техники с актуалните тенденции, като създава пътуване във времето, стила и естетиката. Неговата супер сила е създаването на уникално изживяване със старомоден чар.</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="lg-pb-20 pb-10">
					<GallerySlider style="border-color:#d19d64; color:#d19d64;" imgs={[
						{ src: "/assets/kris/барбър-крис-подстригване-с-ножица.webp", alt: "Барбър Крис - подстригване с ножица" },
						{ src: "/assets/kris/барбър-крис-buzz-cut.webp", alt: "Барбър Крис - buzz cut" },
						{ src: "/assets/kris/барбър-крисa-екшън-снимки.webp", alt: "Барбър Крис - екшън снимки" },
						{ src: "/assets/kris/барбър-крисa-мъжко-подстригване.webp", alt: "Барбър Крис - мъжко подстригване" },
					]}
					/>
				</div>
			</section>

			<div class="lg-px-30 pt-10 pb-20 w-full flex flex-col flex-justify-center bg-#f2e0c2" style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<div class="px-4">
						<h2 class="important-mb-0">Какво казват другите за Кристиан?</h2>
						<img class="mx-auto pt-2 pb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
					</div>
				</AnimatedComponentSlide>

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

				<AnimatedComponentSlide class="mx-auto pt-15">
					<a href="/" class="bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час при Кристиан</a>
				</AnimatedComponentSlide>
			</div>

			<div class="" style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;">
				<div class="px-2 gap-15 lg-h-80vh h-100% lg-py-0 py-15 flex flex-col flex-justify-center flex-items-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(/assets/20.jpg); background-position: 50% 50% ; background-repeat: no-repeat; background-size: cover;" role="img" aria-label="">
					<AnimatedComponent class="flex flex-col flex-justify-center">
						<h2 class="c-paper important-my-0">Свържете се с нас</h2>
						<img class="mx-auto pt-2" src="/assets/heading-ic.png" />
					</AnimatedComponent>

					<div class="flex lg-flex-row flex-col lg-gap-0 gap-10 w-full flex-justify-center">
						<AnimatedComponent class="flex flex-col text-center lg-w-25%">
							<MdiBank class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 pl-2.3 mx-auto lg-mb-6 mb-3" />
							<div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Адрес:
							</div>
							<div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								София, ул. "Николай Хайтов" 2
							</div>
						</AnimatedComponent>

						<AnimatedComponent class="flex flex-col text-center lg-w-25%">
							<RiTimerFill class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 mx-auto lg-mb-6 mb-3" />
							<div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Работно време:
							</div>
							<div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Понеделник - Петък: 09.00 - 17.00
							</div>
						</AnimatedComponent>

						<AnimatedComponent class="flex flex-col text-center lg-w-25%">
							<MdiPhoneClassic class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 mx-auto lg-mb-6 mb-3" />
							<div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Телефон:
							</div>
							<div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								0882 820 331
							</div>
						</AnimatedComponent>
					</div>

					<AnimatedComponent class="flex flex-justify-evenly lg-flex-justify-center lg-mt-10 w-full lg-gap-15 max-w-90% lg-max-w-1200px border-t-solid b-paper b-1px pt-16 lg-pt-22">
						<a href="/" class="text-center w-32 lg-w-42 bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Цени</a>
						<a href="/" class="text-center w-32 lg-w-42 bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Услуги</a>
					</AnimatedComponent>
				</div>
			</div>
		</>
	);
}
