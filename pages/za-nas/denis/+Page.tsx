import "solid-slider/slider.css";
import { VideoPlayer } from '../../../components/VideoPlayer';
import { GallerySlider } from '../../../components/GallerySlider';
import { AnimatedComponent } from '../../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../../components/AnimateOnViewSlide';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { H2WithImage } from "../../../components/H2WithImage";

export default function Page() {
	return (
		<>
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) ), url(/assets/kris/барбър-крис-индивидуална.webp); background-position: center; background-repeat: no-repeat; background-size: cover;" class="h-100vh kris-img" role="img" aria-label="Барбър Крис - Индивидуална"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-65% lg-top-65% text-center w-full max-w-900px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Кристиан</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-17px md-font-size-18px line-height-7">Кристиан е любител на класическите автомобили и често взима участие в автопаради. Той знае, че както при старинните автомобили, така и при прическите, истинската красота е в детайлите. Неговата страст към детайла и естетиката се отразява и в бръснарските му умения, като съчетава прецизност и творчество във всяка прическа.</p>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<section class="pb-20 bg-#f2e0c2" style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponent>
					<H2WithImage class="c-paper" title="Видео" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
				</AnimatedComponent>
			</section>

			<section>
				<div class="lg-mx-30 mx-auto">
					<div class="flex md-flex flex-col lg-gap-5 flex-justify-center max-w-1440px lg-px-0 mx-auto pb-10">
						<AnimatedComponent>
							<H2WithImage title="Защо да се доверите на Кристиан" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-50% flex flex-col">
								<AnimatedComponent>
									<div class="pb-8">Кристиан е пример за професионализъм в бръснарското изкуство, както и че с постоянство всичко се постига. Неговият дългогодишен опит го е утвърдил като ненадминат експерт в традиционното бръснене с бръснач. Към момента не само практикува, а и участва като лектор в множество обучения, на които с радост предава своите знания на следващото поколение бръснари.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-50% flex flex-col">
								<AnimatedComponent>
									<div class="pb-4 md:pb-8">Умело комбинира класическите техники с актуалните тенденции, като създава пътуване във времето, стила и естетиката. Неговата супер сила е създаването на уникално изживяване със старомоден чар.</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/kris/барбър-крис-подстригване-с-ножица.webp", alt: "Барбър Крис - подстригване с ножица" },
						{ src: "/assets/kris/барбър-крис-buzz-cut.webp", alt: "Барбър Крис - buzz cut" },
						{ src: "/assets/kris/барбър-крисa-екшън-снимки.webp", alt: "Барбър Крис - екшън снимки" },
						{ src: "/assets/kris/барбър-крисa-мъжко-подстригване.webp", alt: "Барбър Крис - мъжко подстригване" },
					]}
					/>
				</div>
			</section>

			<div class="lg-px-30 pb-20 w-full flex flex-col flex-justify-center bg-#f2e0c2" style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<div class="px-4">
						<H2WithImage class="c-paper" title="Какво казват другите за Кристиан?" />
					</div>
				</AnimatedComponentSlide>

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

				<AnimatedComponentSlide class="mx-auto pt-10">
					<a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час при Денис</a>
				</AnimatedComponentSlide>
			</div>
		</>
	);
}
