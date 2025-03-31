import "solid-slider/slider.css";
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { VideoPlayer } from '../../components/VideoPlayer';
import { GallerySlider } from '../../components/GallerySlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../components/AnimateOnViewSlide';
import MdiScissors from '~icons/mdi/scissors';
import MdiCircleSmall from '~icons/mdi/circle-small';
import { H2WithImage } from '../../components/H2WithImage';
import MdiArrowRight from '~icons/mdi/arrow-right';

function BarberContainer(props: { title: string; href: string; img: string; alt: string }) {

	return (
		<a href={props.href}>
			<div class="group">
				<div
					class="w-310px h-400px sm:w-[400px] sm:h-[500px] bg-cover bg-center bg-no-repeat"
					style={{ "background-image": `url(${props.img})` }}
					role="img"
					aria-label={props.alt}
				>
					<span class="
            before:absolute before:content-empty before:bg-[#e3e3e3] before:z-[1] 
            before:w-[2px] before:h-[70%] before:top-[1rem] before:left-[1rem]
            after:absolute after:content-empty after:bg-[#e3e3e3] after:z-[1] 
            after:h-[2px] after:w-[78.5%] after:top-[1rem] after:left-[1rem]
            group-hover:before:h-[calc(100%-8rem)] 
            group-hover:after:w-[calc(100%-2rem)] 
            before:transition-all before:duration-300 before:ease-linear
            after:transition-all after:duration-300 after:ease-linear">
					</span>
					<span class="
            before:absolute before:content-empty before:bg-[#e3e3e3] before:z-[1] 
            before:w-[2px] before:h-[70%] before:bottom-[7rem] before:right-[1rem]
            after:absolute after:content-empty after:bg-[#e3e3e3] after:z-[1] 
            after:h-[2px] after:w-[78.5%] after:right-[1rem] after:bottom-[7rem]
			group-hover:before:h-[calc(100%-8rem)] 
            group-hover:after:w-[calc(100%-2rem)] 
            before:transition-all before:duration-300 before:ease-linear
            after:transition-all after:duration-300 after:ease-linear">
					</span>
					<div class="absolute inset-0 h-100%"></div>
				</div>
				<div class="relative pl-8 py-8.5 md:py-7 bg-paper-inv">
					<div class="transition-all duration-500 flex justify-center items-center gap-3">
						<div class="c-paper font-size-8 font-500 flex justify-center items-center" style="font-family:'Oswald', sans-serif !important;">
							<MdiScissors class="c-paper w-6 pt-1 mr-2" />
							{props.title}
						</div>
						<MdiArrowRight class="c-brand-compliment font-size-9.5 pt-1 group-hover:ml-2 transition-all" />
					</div>
				</div>
			</div>
		</a>
	);
}

export default function Page() {
	return (
		<>
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;">
				<div style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) ), url(/assets/za-nas/the-barber-shop-sofia-2_result_result.webp); background-position: right 55% bottom 100% ; background-repeat: no-repeat; background-size: cover;" class="h-100vh za-nas-img" role="img" aria-label="the barber shop Sofia">
					<div class="w-full bg-#212528">
						<div class="max-w-1240px mx-auto">
							<div class="flex flex-justify-center">
								<div class="left-0 right-0 px-2 sm-px-3 my-0 mx-auto absolute top-75% lg-top-74% text-center w-full max-w-700px" style="-webkit-transform: translateY(-50%);">
									<AnimatedComponent>
										<h1 class="uppercase c-paper mb-10 text-center pt-10">Кои сме ние</h1>
									</AnimatedComponent>
									<AnimatedComponent class="important-delay-300 c-paper text-center mb-0 font-size-4.5 lg-font-size-5 sm-px-0 px-12"><span class="c-#cf9353 font-900" style="font-family: 'Roboto'">The Barber Shop</span>, намиращ се в сърцето на кв. Изток е пионер в американския стил бръснарство в България.</AnimatedComponent>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section class="pb-20 px-4 w-full">
				<section class="max-w-7xl mx-auto px-4">
					<div class="md:pt-120px flex flex-col md:flex-row items-center gap-8 md:gap-20">
						<div class="w-full md:w-1/2 space-y-4">
							<AnimatedComponent>
								<img class="pb-2 mx-auto md:mx-0 pt-80px md:pt-0 flex flex-justify-center" src="/assets/heading-ic.png" />
								<h2 class="md:text-left mb-7 pl-0 important-mt-0">Примерно заглавие</h2>
								<div class="w-full relative block md:hidden pb-4">
									<img src="/assets/za-nas/the-barber-shop-sofia-team-3.jpg" alt="Elegant interior design" class="w-full h-auto shadow-xl" />
								</div>
								<p class="important-delay-500 sm-line-height-7 line-height-6.5">Всичко започва през 2014 г., когато все още няма бръснарници в София. В този момент нашата история започва да се пише чрез създаването на БРЪСНАРНИЦАТА. След известно време се превърнахме в предпочитано специализирано място за мъжка грижа и стил.</p>
								<p class="important-delay-700 sm-line-height-7 line-height-6.5 mb-0">Мисията ни и до ден днешен е да създадем място и атмосфера, където мъжете получават качествено обслужване, и се чувстват като част от общност, която цени добрия вкус и безупречния външен вид.</p>
							</AnimatedComponent>
						</div>

						<AnimatedComponent class="w-full md:w-1/2 hidden md:block">
							<div class="relative">
								<img src="/assets/za-nas/the-barber-shop-sofia-team-3.jpg" alt="Elegant interior design" class="w-full h-auto shadow-xl" />
								<p class="important-my-0">text</p>
							</div>
						</AnimatedComponent>
					</div>
				</section>
			</section>

			<section style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="xl-mx-30 lg-mx-15 mx-auto">
					<div class="flex md-flex flex-col lg-gap-5 flex-justify-center max-w-1440px lg-px-0 mx-auto md:pb-10">
						<AnimatedComponent>
							<H2WithImage class="c-paper" title="Предимствата на The Barber Shop" />
						</AnimatedComponent>
						<div class="px-5 md-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-0">Опитни и квалифицирани бръснари</h3>
									<div class="pb-8 c-paper">Нашият екип се състои от <strong>постоянно развиващи се бръснари</strong> с невероятно желание за успех. Всеки един от тях преминава през интензивно обучение, както за <strong>класическите бръснарски практики</strong>, така и за <strong>модерните методи</strong>, за да бъде в час с най-новите техники и тенденции в поддържането на перфектна визия. С тяхна помощ ще получите внимателно отношение, най-доброто обслужване и в резултат идеална визия, съобразена с Вашия стил и начин на живот.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Професионални инструменти</h3>
									<div class="pb-8 c-paper">Работим с висококачествени бръснарски принадлежности на брандовете <strong>Wahl, Andis, BabylissPRO, Mühle, Thiers Issard,</strong> за да осигурим детайлно и комфортно бръснене и подстригване. Нашите професионални инструменти включват <strong>модерни машинки за подстригване, ножици и прецизни бръсначи</strong>, избрани след внимателно проучване и тестване. Това ни позволява да гарантираме, че всеки клиент получава най-доброто обслужване и отлични резултати.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Висококачествена козметика</h3>
									<div class="pb-8 c-paper">В “<strong>The Barber Shop</strong>” никога не правим компромис с качеството. Използваме широка гама от професионални продукти специално създадени за <strong>мъжката кожа и коса</strong>. Залагаме на реномирани марки като <strong>Depot, American Crew, Lavish</strong>, специализирали се във <strong>висококачествената козметика за мъже</strong>. Те съдържат внимателно подбрани съставки, <strong>щадящи кожата и косата</strong> и осигуряват страхотни резултати.</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/za-nas/инструменти-барбер-шоп.webp", alt: "инструменти барбер шоп" },
						{ src: "/assets/za-nas/инструменти-бръснар-софия.webp", alt: "инструменти бръснар София" },
						{ src: "/assets/za-nas/козметика-barber-shop-sofia.webp", alt: "козметика barber shop Sofia" },
						{ src: "/assets/za-nas/козметика-барбершоп-софия.webp", alt: "козметика барбершоп София" },
						{ src: "/assets/za-nas/козметика-бръснарница-софия.webp", alt: "козметика бръснарница София" },
						{ src: "/assets/za-nas/мъжко-подстригване-2.webp", alt: "инструменти бръснарница София" },
					]}
					/>
				</div>
			</section>

			<div class="pb-20 px-4 w-full">
				<AnimatedComponentSlide>
					<H2WithImage title="Екипът на The Barber Shop" />
				</AnimatedComponentSlide>
				<div class="flex flex-wrap flex-justify-center lg-gap-20 gap-15">
					<AnimatedComponentSlide>
						<BarberContainer
							img="/assets/za-nas/барбър-крис.webp"
							alt="барбър Крис"
							href=""
							title="Кристиан"
						/>
					</AnimatedComponentSlide>

					<AnimatedComponentSlide>
						<BarberContainer
							img="/assets/za-nas/барбър-мартин.webp"
							alt="барбър Мартин"
							href=""
							title="Мартин"
						/>
					</AnimatedComponentSlide>

					<AnimatedComponentSlide>
						<BarberContainer
							img="/assets/za-nas/барбър-благо.webp"
							alt="барбър Благо"
							href=""
							title="Благо"
						/>
					</AnimatedComponentSlide>

					<AnimatedComponentSlide>
						<BarberContainer
							img="/assets/za-nas/барбър-марио.webp"
							alt="барбър Марио"
							href=""
							title="Марио"
						/>
					</AnimatedComponentSlide>

					<AnimatedComponentSlide>
						<BarberContainer
							img="/assets/za-nas/барбър-влади.webp"
							alt="барбър Влади"
							href=""
							title="Влади"
						/>
					</AnimatedComponentSlide>
				</div>
			</div>

			<section>
				<div class="pb-20" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
					<AnimatedComponentSlide>
						<H2WithImage class="c-paper" title="Стани част от екипа на The Barber Shop" />
					</AnimatedComponentSlide>
					<AnimatedComponentSlide>
						<div class="lg-mt-0 lg-px-30 px-5 pb-10 lg-max-w-1000px mx-auto">
							<AnimatedComponent class="c-paper">
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										Нашият екип споделя една обща страст, а именно любовта към занаята.
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										Не просто подстригваме – ние създаваме стил и самочувствие.
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										Искате да разгърнете потенциала си и да работите с яки хора?
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										The Barber Shop Ви дава възможност за изява, творчество и развитие на уменията.
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										Станете част от едно истинско мъжко общество!
									</p>
								</div>
							</AnimatedComponent>
						</div>
						<AnimatedComponent>
							<div class="flex flex-col flex-items-center">
								<a href="/" class="bg-brand c-paper-inv b-solid b-2px b-brand uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
							</div>
						</AnimatedComponent>
					</AnimatedComponentSlide>
				</div>
			</section>

			<section class="pb-20">
				<AnimatedComponent>
					<H2WithImage title="Видео" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
				</AnimatedComponent>
			</section>

			<section style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="flex flex-col pb-20">
					<div class="flex flex-col flex-items-center">
						<AnimatedComponent>
							<H2WithImage class="c-paper" title="Какво казват нашите клиенти за нас" />
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
							<a href="/" class="bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
						</div>
					</AnimatedComponent>
				</div>
			</section>
		</>
	);
}
