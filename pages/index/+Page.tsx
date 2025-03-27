import "solid-slider/slider.css";
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { VideoPlayer } from '../../components/VideoPlayer';
import { GallerySlider } from '../../components/GallerySlider';
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../components/AnimateOnViewSlide';
import { H2WithImage } from '../../components/H2WithImage';
import MdiBank from '~icons/mdi/bank';
import MdiPhoneClassic from '~icons/mdi/phone-classic';
import RiTimerFill from '~icons/ri/timer-fill';

function ServiceContaner(props: { title: string, href: string, img: string, alt: string }) {

	return (
		<AnimatedComponentSlide class="flex sm-w-65% md-w-50% lg-w-35% xl-w-23% max-w-full relative overflow-hidden " style="flex: 0 0 auto;">
			<img class="w-full h-auto" src={props.img} alt={props.alt} />
			<div class="w-full p-20px absolute bottom-0px text-center" style="background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, .01) 1%, rgba(0, 0, 0, .95) 80%);">
				<div class="flex flex-col gap-1">
					<h4 class="c-paper relative font-size-27px mb-1">
						{props.title}
					</h4>
					<div class="text-center h-1px w-60px bg-brand mx-auto mb-20px"></div>
					<a href={props.href} class="bg-none c-paper b-solid b-1px b-paper hover-b-brand hover-bg-brand transition-colors mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Вижте повече</a>
				</div>
			</div>
		</AnimatedComponentSlide>
	)
}

export default function Page() {
	return (
		<>
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/assets/home/the-barber-shop-sofia-mobile.webp); background-position: center top; background-repeat: no-repeat; background-size: cover;" class="h-105vh home-img" role="img" aria-label="The barber shop Sofia"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-38% lg-top-45% text-center w-full max-w-700px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6">The Barber Shop Sofia</h1>
							</AnimatedComponent>
							<AnimatedComponent class="important-delay-300 c-paper text-center mb-0 font-size-4.3 lg-font-size-5 sm-px-0 px-12 leading-6">Само за мъже.<br></br>За добре прекарано време или за добре загубено време.</AnimatedComponent>
						</div>

						<AnimatedComponent class="important-delay-600 float-left md:pr-5px relative text-center lg--top-170px -top-315px w-100% max-w-1240px md:border-2 md:border-solid md:border-[rgba(255,255,255,0.5)]">
							<div class="md:w-33.333% md:float-left px-2 md:px-0">
								<div class="float-left w-full py-0px md:py-25px">
									<div class="block md:hidden mx-auto h-1px w-full bg-gray-200 my-10px op-30%"></div>
									<div class="flex flex-col flex-justify-center flex-items-center gap-2">
										<MdiBank class="font-size-5.2 c-brand" />
										<div class="relative min-h-1px px-8px lg-px-15px c-paper flex text-center flex-justify-center font-size-4.3 lg-font-size-5.2" style="font-family: 'Oswald', sans-serif !important;">
											София, ул. "Николай Хайтов" 2
										</div>
									</div>
								</div>
							</div>

							<div class="md:w-33.333% md:float-left px-2 md:px-0">
								<div class="float-left w-full py-0px md:py-25px md:border-[rgba(255,255,255,0.5)] md:border-r-2 md:border-r-[rgba(255,255,255,0.5)] md:border-r-solid md:border-l-solid">
									<div class="block md:hidden mx-auto h-1px w-full bg-gray-200 my-10px op-30%"></div>
									<div class="flex flex-col flex-justify-center flex-items-center gap-2">
										<RiTimerFill class="font-size-5.7 c-brand" />
										<div class="relative min-h-1px px-8px lg-px-15px c-paper flex text-center flex-justify-center font-size-4.3 lg-font-size-5.2" style="font-family: 'Oswald', sans-serif !important;">
											Понеделник - Петък: 09.00 - 17.00
										</div>
									</div>
								</div>
							</div>

							<div class="md:w-33.333% md:float-left px-2 md:px-0">
								<div class="float-left w-full py-0px md:py-25px">
									<div class="block md:hidden mx-auto h-1px w-full bg-gray-200 my-10px op-30%"></div>
									<div class="flex flex-col flex-justify-center flex-items-center gap-2">
										<MdiPhoneClassic class="font-size-5.7 c-brand" />
										<div class="relative min-h-1px px-8px lg-px-15px c-paper text-center flex flex-row flex-justify-center font-size-4.3 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important;">
											<div class="c-paper text-center flex flex-justify-center font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important;">
												Телефон:&nbsp;
											</div>
											<div class="c-paper text-center flex flex-justify-center font-size-4.8 lg-font-size-5.2" style="font-family: 'Oswald', sans-serif !important;">
												+359 882 820 331
											</div>
										</div>
									</div>
									<div class="block md:hidden mx-auto h-1px w-full bg-gray-200 my-15px op-30%"></div>
								</div>
							</div>
						</AnimatedComponent>
					</div>
				</div>
			</div>

			<div class="pb-10 lg--mt-30 -mt-80" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">

				<div class="lg-mt-0 lg-px-30 pb-10 max-w-1600px mx-auto flex lg-flex-row flex-col lg-gap-20">
					<div class="lg-w-50% px-5">
						<AnimatedComponentSlide>
							<img class="pb-2 pt-80px md:pt-120px flex flex-justify-center" src="/assets/heading-ic.png" />
							<h2 class="c-paper text-left mb-7 pl-0 important-mt-0">Бръснарница от класа</h2>
						</AnimatedComponentSlide>
						<div class="flex flex-col gap-5">
							<div class="c-paper">
								<span class="c-brand  font-900" style="font-family: 'Roboto'">The Barber Shop Sofia</span> е нещо повече от просто бръснарница. Нашият барбър шоп се намира в квартал Изток, София на удобна и лесно достъпна локация в близост до ключови транспортни връзки и зелени градски зони.
							</div>
							<div class="c-paper">
								<span class="c-brand font-900" style="font-family: 'Roboto'">The Barber Shop Sofia</span> е премиум бръснарница, където майсторството се преплита с вниманието към детайла, за да Ви осигури отлично ниво на комфорт и стил. Нашата мисия е да създадем цялостно ексклузивно преживяване за истински мъже.
							</div>
						</div>
					</div>

					<div class="lg-w-50% pr-5 pl-5 lg-pl-0">
						<AnimatedComponentSlide>
							<img class="pb-2 pt-80px md:pt-120px flex flex-justify-center" src="/assets/heading-ic.png" />
							<h2 class="c-paper text-left mb-7 pl-0 important-mt-0">Стил и комфорт в едно</h2>
						</AnimatedComponentSlide>
						<ul class="c-paper ml--5 mt-0">
							<li>Безплатно паркиране → бръснарница с място за паркиране</li>
							<li>Топло посрещане с безплатно питие</li>
							<li>Приятна и уютна атмосфера</li>
							<li>Усещане за принадлежност към мъжка общност</li>
							<li>Съчетание на традиционни техники с модерни подходи</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="pb-20 px-4 w-full" style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<H2WithImage title="Нашите услуги" />
				</AnimatedComponentSlide>
				<div class="flex flex-wrap flex-justify-center lg-gap-15 gap-15">

					<ServiceContaner
						img="/assets/home/stylish-buzz-cuts.webp"
						alt="stylish buzz cuts"
						title="Мъжко подстригване"
						href="/"
					/>
					<ServiceContaner
						img="/assets/home/оформяне-на-брада.webp"
						alt="оформяне на брада"
						title="Оформяне на брада"
						href="/"
					/>
					<ServiceContaner
						img="/assets/home/buzz-cut-and-beard.webp"
						alt="buzz cut and beard"
						title="Подстригване и оформяне на брада"
						href="/"
					/>
					<ServiceContaner
						img="/assets/home/мокро-бръснене.webp"
						alt="мокро бръснене"
						title="Класическо мокро бръснене"
						href="/"
					/>
					<ServiceContaner
						img="/assets/about3.jpg"
						alt=""
						title="Тониране на сиви коси"
						href="/"
					/>
					<ServiceContaner
						img="/assets/about3.jpg"
						alt=""
						title="Бръснене на глава с бръснач"
						href="/"
					/>
					<ServiceContaner
						img="/assets/home/детско-подстригване.webp"
						alt="детско подстригване"
						title="Детско подстригване"
						href="/"
					/>
					<ServiceContaner
						img="/assets/about3.jpg"
						alt=""
						title="Подстригване на баща и син"
						href="/"
					/>
				</div>
			</div>

			<div style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<div class="pb-20">
					<AnimatedComponent>
						<H2WithImage class="c-paper" title="Видео" />
					</AnimatedComponent>
					<AnimatedComponent>
						<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
					</AnimatedComponent>
				</div>
			</div>

			<section class="pb-20" style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
				<AnimatedComponent>
					<H2WithImage title="Как го правим" />
				</AnimatedComponent>
				<GallerySlider imgs={[
					{ src: "/assets/home/барбер-шоп-софия.webp", alt: "професионално мъжко подстригване в бръснарница в барбер шоп в София" },
					{ src: "/assets/home/barber-shops-sofia.webp", alt: "професионално измиване на глава в barber shops Sofia" },
					{ src: "/assets/home/подстригване-мъжко.webp", alt: "Подстригване мъжко" },
					{ src: "/assets/home/buzz-cut.webp", alt: "buzz cut" },
					{ src: "/assets/home/бръснарница-софия.webp", alt: "професионално мъжко подстригване в бръснарница в София" },
					{ src: "/assets/home/барбер-шоп.webp", alt: "оформяне на брада в барбер шоп" },
					{ src: "/assets/home/бръснарница-студентски-град.webp", alt: "професионално мъжко подстригване в бръснарница в студентски-град" },
					{ src: "/assets/home/бръснарница.webp", alt: "мъжко подстригване в бръснарница" },
					{ src: "/assets/home/барбершоп.webp", alt: "снимка от барбершоп процеса на работа" },
					{ src: "/assets/home/барбершоп-софия-1.webp", alt: "гореща кърпа в барбершоп в София" },
					{ src: "/assets/home/бръснарници-в-софия.webp", alt: "измиване на глава в бръснарница в София" },
					{ src: "/assets/home/мъжко-подстригване.webp", alt: "мъжко подстригване" },
					{ src: "/assets/home/мъжко-подстригване-софия.webp", alt: "мъжко подстригване София" },
					{ src: "/assets/home/мъжко-подстригване-софия-център.webp", alt: "мъжко подстригване в София център" },
					{ src: "/assets/home/мъжко-подстригване-студентски-град.webp", alt: "мъжко подстригване студентски град" },
					{ src: "/assets/home/подстригване-с-машинка-мъжко.webp", alt: "подстригване с машинка мъжко" },
				]}
				/>

				<div class="lg-mt-0 lg-px-30 xl-px-58 py-15 lg-py-30 max-w-1600px mx-auto flex lg-flex-row flex-col gap-8 lg-gap-20">
					<AnimatedComponentSlide class="px-5">
						<div class="flex flex-col gap-5">
							<div>
								<span class="c-brand-dark font-900">The Barber Shop Sofia</span> е нещо повече от просто бръснарница. Нашият барбър шоп се намира в квартал Изток, София на удобна и лесно достъпна локация в близост до ключови транспортни връзки и зелени градски зони.
							</div>
							<div>
								<span class="c-brand-dark font-900">The Barber Shop Sofia</span> е премиум бръснарница, където майсторството се преплита с вниманието към детайла, за да Ви осигури отлично ниво на комфорт и стил. Нашата мисия е да създадем цялостно ексклузивно преживяване за истински мъже.
							</div>
						</div>
					</AnimatedComponentSlide>
				</div>

				<BeforeAfterSlider imgs={[
					{ src: "/assets/home/барбер-шоп-софия.webp", alt: "професионално мъжко подстригване в бръснарница в барбер шоп в София", hairstyle: "example-hairstyle" },
					{ src: "/assets/home/barber-shops-sofia.webp", alt: "професионално измиване на глава в barber shops Sofia", hairstyle: "example-hairstyle" },
					{ src: "/assets/home/подстригване-мъжко.webp", alt: "Подстригване мъжко", hairstyle: "example-hairstyle" },
					{ src: "/assets/home/buzz-cut.webp", alt: "buzz cut", hairstyle: "example-hairstyle" },
				]}
				/>
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

			<section style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
				<div class="lg-mx-30 mx-auto">
					<div class="flex md-flex flex-col flex-justify-center max-w-1440px lg-px-0 mx-auto lg:pb-10">
						<AnimatedComponent>
							<H2WithImage title="Предимставата на The Barber Shop" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand-dark text-left mt-0">Опитни и квалифицирани барбъри</h3>
									<div class="pb-10">Зад всяка перфектна прическа в The Barber Shop Sofia стои екип от изключителни професионалисти. Нашият барбър шоп е събрал част от най-добрите бръснари в София. Всеки от тях преминава през интензивно обучение, което обхваща както класическите бръснарски техники, така и най-новите тенденции в подстригването. Благодарение на това можем да ви предложим премиум обслужване на високо ниво и страхотни резултати.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand-dark text-left mt-5 lg-mt-0">Професионални инструменти</h3>
									<div class="pb-10">Използваме висок клас бръснарски принадлежности, които са внимателно подбрани, за да съчетават качество, ефективност и прецизност. В нашата бръснарница разчитаме на световно признати марки като Wahl, Andis, BabylissPRO, Mühle, Thiers Issard, гарантиращи безопасност и комфорт. Независимо от това какъв стил предпочитате, ние имаме правилните инструменти, с който да постигнем отличен краен резултат.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand-dark text-left mt-5 lg-mt-0">Висококачествена козметика</h3>
									<div class="pb-10">В The Barber Shop Sofia не правим компромиси с качеството. За нас Вашите усмивки и безупречни визии са приоритет, затова използваме само най-добрите продукти за мъжка грижа. При нас ще откриете богато разнообразие от висок клас козметика Depot, American Crew, Lavish подходяща за всички видове кожа и коса. Нашата гама от козметика включва всичко необходимо – от шампоани и балсами до стилизиращи продукти.</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
				<div class="pb-20">
					<GallerySlider imgs={[
						{ src: "/assets/home/инструменти-за-buzz-cut-hairstyles.webp", alt: "инструменти за buzz cut hairstyles" },
						{ src: "/assets/home/инструменти-за-бръснарница-софия.webp", alt: "мъжко подстригване в София център" },
						{ src: "/assets/home/професионална-козметика-от-barber-shops-sofia.webp", alt: "професионална козметика от barber shops Sofia" },
						{ src: "/assets/home/инструменти-за-barber-barber-shop-sofia.webp", alt: "инструменти за barber barber shop Sofia" },
						{ src: "/assets/home/инструменти-за-buzz-cut.webp", alt: "инструменти за buzz cut" },
						{ src: "/assets/home/козметиката-в-бръснарница-софия.webp", alt: "Kозметиката в бръснарница София" },
						{ src: "/assets/home/инструменти-за-buzz-cut-fade.webp", alt: "инструменти за buzz cut fade" },
						{ src: "/assets/home/козметиката-на-barber-shops-sofia.webp", alt: "козметиката на barber shops Sofia" },
					]}
					/>
				</div>
			</section>

			{/* <div class="lg-px-30 pt-10 pb-20 px-4 w-full flex flex-col flex-justify-center" style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<h2 class="important-mb-0">Нашият магазин</h2>
					<img class="mx-auto pt-2 pb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
				</AnimatedComponentSlide>

				<AnimatedComponent>
					<OurShop>
						<ElementInOurShop
							img="/assets/home/козметиката-в-бръснарница-софия.webp"
							alt="Kозметиката в бръснарница София"
							href="/"
							title="Козметика"
						/>
						<ElementInOurShop
							img="/assets/home/козметиката-на-barber-shops-sofia.webp"
							alt="козметиката на barber shops Sofia"
							href="/"
							title="Козметика"
						/>
						<ElementInOurShop
							img="/assets/home/професионална-козметика-от-barber-shops-sofia.webp"
							alt="професионална козметика от barber shops Sofia"
							href="/"
							title="Козметика"
						/>
					</OurShop>
				</AnimatedComponent>

				<AnimatedComponentSlide class="mx-auto pt-15">
					<a href="/" class="bg-brand c-paper-inv b-solid b-2px b-brand uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Към магазин</a>
				</AnimatedComponentSlide>
			</div> */}
		</>
	);
}
