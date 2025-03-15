import "solid-slider/slider.css";
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { VideoPlayer } from '../../components/VideoPlayer';
import { GallerySlider } from '../../components/GallerySlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../components/AnimateOnViewSlide';
import MdiScissors from '~icons/mdi/scissors?width=24px&height=24px';
import MdiCircleSmall from '~icons/mdi/circle-small';

function BarberContainer(props: { title: string, href: string, img: string, alt: string }) {
	return (
		<a href={props.href}>
			<div class="group">
				<div class="w-310px h-400px sm:w-[400px] sm:h-[500px] bg-cover bg-center bg-no-repeat"
					style={{ "background-image": `url(${props.img})` }}
					role="img" aria-label={props.alt}>
					<span class="
                    before:absolute before:content-empty before:bg-[#e3e3e3] before:z-[1] 
                    before:w-[2px] before:h-[80%] before:top-[1rem] before:left-[1rem]
                    after:absolute after:content-empty after:bg-[#e3e3e3] after:z-[1] 
                    after:h-[2px] after:w-[80%] after:top-[1rem] after:left-[1rem]
                    group-hover:before:h-[calc(100%-2rem)] 
                    group-hover:after:w-[calc(100%-2rem)] 
                    before:transition-all before:duration-300 before:ease-linear
                    after:transition-all after:duration-300 after:ease-linear"></span>

					<span class="
                    before:absolute before:content-empty before:bg-[#e3e3e3] before:z-[1] 
                    before:w-[2px] before:h-[80%] before:bottom-[1rem] before:right-[1rem]
                    after:absolute after:content-empty after:bg-[#e3e3e3] after:z-[1] 
                    after:h-[2px] after:w-[80%] after:right-[1rem] after:bottom-[1rem]
                    group-hover:before:h-[calc(100%-2rem)] 
                    group-hover:after:w-[calc(100%-2rem)] 
                    before:transition-all before:duration-300 before:ease-linear
                    after:transition-all after:duration-300 after:ease-linear"></span>
					<div class="absolute inset-0 h-100%"></div>
				</div>
				<div class="relative z-10 px-8 py-8 bg-black">
					<div class="transition-all duration-500 flex flex-justify-center flex-items-center gap-5">
						<div class="c-paper font-size-8 font-500 group-hover:c-brand transition-colors" style="font-family:'Oswald', sans-serif !important;"><MdiScissors class="c-paper w-6 pt-1 mr-2" />{props.title}</div>
					</div>
				</div>
			</div>
		</a>
	);
};

export default function Page() {
	return (
		<>
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;">
				<div style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4) ), url(assets/za-nas/бръснарница-софия-1.webp); background-position: center top; background-repeat: no-repeat; background-size: cover;" class="h-100vh md-h-105vh za-nas-img" role="img" aria-label="the barber shop Sofia">
					<div class="w-full bg-#212528">
						<div class="max-w-1240px mx-auto">
							<div class="flex flex-justify-center">
								<div class="left-0 right-0 px-2 sm-px-3 my-0 mx-auto absolute top-50% sm-top-77% lg-top-74% text-center w-full max-w-1300px" style="-webkit-transform: translateY(-50%);">
									<AnimatedComponent class="md-block hidden">
										<h1 class="uppercase c-paper mb-4 text-center pt-10">Кои сме ние</h1>
									</AnimatedComponent>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section class="lg-pt-15 pb-20 pt-5 px-4 w-full" style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
				<section class="max-w-7xl mx-auto pt-10 px-4">
					<div class="flex flex-col md:flex-row items-center gap-20">
						<div class="w-full md:w-1/2 space-y-6">
							<AnimatedComponent class="block md-hidden">
								<h1 class="uppercase mb-4 text-center pt-0">Кои сме ние</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<img class="md-mx-0 mx-auto pt-2 pb-10 lg-pb-0 flex flex-justify-start" src="/assets/heading-ic.png" />
								<p class="important-delay-300 lg-pt-0 sm-line-height-7 line-height-6.5"><span class="c-#cf9353 font-900" style="font-family: 'Roboto'">The Barber Shop</span>, намиращ се в сърцето на кв. Изток е пионер в американския стил бръснарство в България.</p>
								<p class="important-delay-500 sm-line-height-7 line-height-6.5">Всичко започва през 2014 г., когато все още няма бръснарници в София. В този момент нашата история започва да се пише чрез създаването на БРЪСНАРНИЦАТА. След известно време се превърнахме в предпочитано специализирано място за мъжка грижа и стил.</p>
								<p class="important-delay-700 sm-line-height-7 line-height-6.5">Мисията ни и до ден днешен е да създадем място и атмосфера, където мъжете получават качествено обслужване, и се чувстват като част от общност, която цени добрия вкус и безупречния външен вид.</p>
							</AnimatedComponent>
						</div>

						<AnimatedComponent class="w-full md:w-1/2">
							<div class="relative">
								<img src="/assets/za-nas/the-barber-shop-sofia-team-3.jpg" alt="Elegant interior design" class="w-full h-auto shadow-xl" />
							</div>
						</AnimatedComponent>
					</div>
				</section>
			</section>

			<section style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="xl-mx-30 lg-mx-15 mx-auto lg-pt-10 pt-10">
					<div class="flex md-flex flex-col lg-gap-5 flex-justify-center max-w-1440px lg-px-0 mx-auto pb-10">
						<AnimatedComponent>
							<h2 class="pb-3 lg-pb-0 important-mb-0 c-paper">Предимствата на The Barber Shop</h2>
							<img class="mx-auto pt-2 pb-15 lg-pb-10 flex flex-justify-center" src="/assets/heading-ic.png" />
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
				<div class="lg-pb-20 pb-10">
					<GallerySlider style="border-color:#d19d64; color:#d19d64;" imgs={[
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

			<div class="lg-pt-15 pb-20 pt-5 px-4 w-full" style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<h2 class="important-mb-0">Екипът на The Barber Shop</h2>
					<img class="mx-auto pt-2 pb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
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

			<section style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: no-repeat; background-size: cover;">

				<div class="pb-20 pt-10" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
					<AnimatedComponentSlide>
						<h2 class="c-paper text-center important-mb-0">Стани част от екипа на The Barber Shop</h2>
						<img class="mx-auto pt-2 mb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
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
					</AnimatedComponentSlide>
				</div>

				<section class="lg-pb-25 pb-20 pt-10" style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
					<AnimatedComponent>
						<h2 class="important-mb-0">Видео</h2>
						<img class="mx-auto pt-2 mb-15 lg-mb--5 flex flex-justify-center" src="/assets/heading-ic.png" />
					</AnimatedComponent>
					<AnimatedComponent>
						<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
					</AnimatedComponent>
				</section>

				<div class="flex flex-col lg-pt-20 pb-20 pt-0">
					<div class="flex flex-col flex-items-center">
						<AnimatedComponent>
							<h2 class="important-mb-2 lg-mb-9 mt-3 mb-0">Какво казват другите за нас</h2>
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
			</section>
		</>
	);
}
