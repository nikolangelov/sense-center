import "solid-slider/slider.css";
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { GallerySlider } from '../../components/GallerySlider';
import { VideoPlayer } from '../../components/VideoPlayer';
import RiPlayReverseMiniLine from '~icons/ri/play-reverse-mini-line';
import MdiAccountCheckOutline from '~icons/mdi/account-check-outline';
import RiContrastDropLine from '~icons/ri/contrast-drop-line';
import MdiContentCut from '~icons/mdi/content-cut';

export default function Page() {
	return (
		<>
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5) ), url(/assets/23.jpg); background-position: center top; background-repeat: no-repeat; background-size: cover;" class="h-100vh"></div></div>

			<div class="max-w-1140px mx-auto">
				<div class="flex flex-justify-center">
					<div class="left-0 right-0 my-0 mx-auto absolute top-50% text-center w-full max-w-700px" style="-webkit-transform: translateY(-50%);">
						<h1 class="uppercase c-paper">The Barber Shop Sofia</h1>
						<div class="flex flex-col gap-5">
							<div class="c-paper font-italic">Само за мъже. Добре прекарано време или добре загубено време.</div>
							<div class="c-paper">The Barber Shop Sofia е нещо повече от просто бръснарница. Нашият барбър шоп се намира в квартал Изток, София на удобна и лесно достъпна локация в близост до ключови транспортни връзки и зелени градски зони.</div>
							<div class="c-paper pb-5">The Barber Shop Sofia e премиум бръснарница, където майсторството се преплита с вниманието към детайла, за да Ви осигури отлично ниво на комфорт и стил. Нашата мисия е да създадем цялостно ексклузивно преживяване за истински мъже.</div>
						</div>
						<a href="/" class="bg-#d19d64 c-black b-solid b-2px b-#d19d64 uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">read more</a>
					</div>

					<div class="float-left pr-5px relative text-center -top-150px w-100% max-w-1000px" style="border: 2px solid rgba(255, 255, 255, 0.2);">
						<div class="w-33.333% float-left">
							<div class="float-left w-full py-25px">
								<div class="relative min-h-1px px-15px c-paper flex flex-justify-center" style="font-family: 'Oswald', sans-serif !important;">
									26 Avenue, Broklin, NJ-56870
								</div>
							</div>
						</div>

						<div class="w-33.333% float-left">
							<div class="float-left w-full py-25px" style="border-left: 2px solid rgba(255, 255, 255, 0.2); border-right: 2px solid rgba(255, 255, 255, 0.2)">
								<div class="relative min-h-1px px-15px c-paper flex flex-justify-center" style="font-family: 'Oswald', sans-serif !important;">
									26 Avenue, Broklin, NJ-56870
								</div>
							</div>
						</div>

						<div class="w-33.333% float-left">
							<div class="float-left w-full py-25px">
								<div class="relative min-h-1px px-15px c-paper flex flex-justify-center" style="font-family: 'Oswald', sans-serif !important;">
									26 Avenue, Broklin, NJ-56870
								</div>
							</div>
						</div>
					</div>
				</div>

				<h2>Нашите услуги</h2>

				<div class="flex flex-wrap flex-justify-center gap-5">
					<div class="flex w-32% relative overflow-hidden relative " style="flex: 0 0 auto;">
						<img class="w-full h-auto" src="/assets/about3.jpg" alt="" />
						<div class="w-full p-20px absolute bottom-0px text-center" style="background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, .01) 1%, rgba(0, 0, 0, .95) 80%);">
							<div class="flex flex-col gap-1">
								<h4 class="c-paper relative font-size-27px mb-20px">
									Hair Cut
								</h4>
								<div class="text-center h-1px w-60px bg-#91765a mx-auto mb-20px"></div>
								<a href="/" class="bg-none c-paper b-solid b-1px b-paper mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">read more</a>
							</div>
						</div>
					</div>

					<div class="flex w-32% relative overflow-hidden relative " style="flex: 0 0 auto;">
						<img class="w-full h-auto" src="/assets/about3.jpg" alt="" />
						<div class="w-full p-20px absolute bottom-0px text-center" style="background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, .01) 1%, rgba(0, 0, 0, .95) 80%);">
							<div class="flex flex-col gap-1">
								<h4 class="c-paper relative font-size-27px mb-20px">
									Hair Cut
								</h4>
								<div class="text-center h-1px w-60px bg-#91765a mx-auto mb-20px"></div>
								<a href="/" class="bg-none c-paper b-solid b-1px b-paper mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">read more</a>
							</div>
						</div>
					</div>

					<div class="flex w-32% relative overflow-hidden relative " style="flex: 0 0 auto;">
						<img class="w-full h-auto" src="/assets/about3.jpg" alt="" />
						<div class="w-full p-20px absolute bottom-0px text-center" style="background: -webkit-linear-gradient(top, transparent 0, rgba(0, 0, 0, .01) 1%, rgba(0, 0, 0, .95) 80%);">
							<div class="flex flex-col gap-1">
								<h4 class="c-paper relative font-size-27px mb-20px">
									Hair Cut
								</h4>
								<div class="text-center h-1px w-60px bg-#91765a mx-auto mb-20px"></div>
								<a href="/" class="bg-none c-paper b-solid b-1px b-paper mx-auto uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">read more</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<h2>Видео</h2>

			<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />

			<section class="pt-15 pb-30 bg-#fff9f2">
				<h2>Как го правим</h2>

				<GallerySlider>
					<img src="/assets/about3.jpg" alt="equipments-2" />
					<img src="/assets/about3.jpg" alt="equipments-4" />
					<img src="/assets/about3.jpg" alt="vehicles-3" />
					<img src="/assets/about3.jpg" alt="vehicles-4" />
				</GallerySlider>
			</section>

			<div class="flex flex-col gap-5 my-20">
				<div class="flex flex-col flex-items-center">
					<h3 class="mb-0 c-#917658">Отзиви</h3>
					<h2 class="mb-9 mt-3">Какво казват нашите клиенти за нас</h2>
				</div>
				<div class="">
					<ReviewSlider>
						<StarReview
							src="/assets/profile-pics-reviews/unnamed1112.png"
							reviewText="I received excellent communications throughout the whole process. On the day, the cleaning experience was efficient with a considerate and friendly member of staff. Very competitive pricing."
							name="Elizabeth Maurice"
							date="June 2024"
							stars={5}
							hrefGoogleReview="https://g.co/kgs/HPqEYvL"
						/>
						<StarReview
							src="/assets/profile-pics-reviews/unnamed (1).png"
							reviewText="The best carpet cleaning service I have ever experienced. From start to finish was unbelievably smooth. The staff that attended extremely polite and moved all the items with utmost care. Would recommend using them as they are simply the best one has come across. Maya was absolutely fantastic in arranging this as the request was done at such a short notice."
							name="Gen Tiski"
							date="March 2024"
							stars={5}
							hrefGoogleReview="https://g.co/kgs/H3NeADN"
						/>
						<StarReview
							src="/assets/profile-pics-reviews/unnamed-49.png"
							reviewText="I had my carpet cleaned by Nikolay from Fine Carpet Cleaning. What a fantastic job he did ! He is very professional, efficient and organised in the way he works. My carpet looks new again. I highly recommend."
							name="Samanta Federico"
							date="January 2024"
							stars={5}
							hrefGoogleReview="https://g.co/kgs/WxWf2Bm"
						/>
						<StarReview
							src="/assets/profile-pics-reviews/unnamed-49.png"
							reviewText="I had my carpet cleaned by Nikolay from Fine Carpet Cleaning. What a fantastic job he did ! He is very professional, efficient and organised in the way he works. My carpet looks new again. I highly recommend."
							name="Samanta Federico"
							date="January 2024"
							stars={5}
							hrefGoogleReview="https://g.co/kgs/WxWf2Bm"
						/>
					</ReviewSlider>
				</div>
				<div class="flex flex-col flex-items-center">
					<a href="/" class="bg-none c-#917658 b-solid b-2px b-#91765 uppercase font-size-4 font-500 px-7 py-2" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">read more</a>
				</div>
			</div>

			<section class="" style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="mx-30 py-30">
					<h2 class="mt-0 mb-20 text-left c-paper">Предимставата на "The Barber Shop"</h2>
					<div class="flex gap-20">
						<div class="flex flex-col">
							<div class="b-rd-50% w-20 h-20 m-auto flex flex-items-center flex-justify-center" style="background-image: linear-gradient(#d19d64, #ff9829);">
								<MdiAccountCheckOutline class="w-10 h-10" />
							</div>
							<h3 class="c-#d19d64 text-left">Опитни и квалифицирани барбъри</h3>
							<div class="pb-8 c-paper">Зад всяка перфектна прическа в The Barber Shop Sofia стои екип от изключителни професионалисти. Нашият барбър шоп е събрал част от най-добрите бръснари в София. Всеки от тях преминава през интензивно обучение, което обхваща както класическите бръснарски техники, така и най-новите тенденции в подстригването. Благодарение на това можем да ви предложим премиум обслужване на високо ниво и страхотни резултати.</div>
						</div>
						<div class="flex flex-col">
							<div class="b-rd-50% w-20 h-20 m-auto flex flex-items-center flex-justify-center" style="background-image: linear-gradient(#d19d64, #ff9829);">
								<MdiContentCut class="w-10 h-10" />
							</div>
							<h3 class="c-#d19d64 text-left">Професионални инструменти</h3>
							<div class="pb-8 c-paper">Използваме висок клас бръснарски принадлежности, които са внимателно подбрани, за да съчетават качество, ефективност и прецизност. В нашата бръснарница разчитаме на световно признати марки като Wahl, Andis, BabylissPRO, Mühle, Thiers Issard, гарантиращи безопасност и комфорт. Независимо от това какъв стил предпочитате, ние имаме правилните инструменти, с който да постигнем отличен краен резултат.</div>
						</div>
						<div class="flex flex-col">
							<div class="b-rd-50% w-20 h-20 m-auto flex flex-items-center flex-justify-center my-0" style="background-image: linear-gradient(#d19d64, #ff9829);">
								<RiContrastDropLine class="w-10 h-10" />
							</div>
							<h3 class="c-#d19d64 text-left">Висококачествена козметика</h3>
							<div class="pb-8 c-paper">В The Barber Shop Sofia не правим компромиси с качеството. За нас Вашите усмивки и безупречни визии са приоритет, затова използваме само най-добрите продукти за мъжка грижа. При нас ще откриете богато разнообразие от висок клас козметика Depot, American Crew, Lavish подходяща за всички видове кожа и коса. Нашата гама от козметика включва всичко необходимо – от шампоани и балсами до стилизиращи продукти.</div>
						</div>
					</div>
				</div>
			</section>

			<div class="py-40">
				<GallerySlider>
					<img src="/assets/about3.jpg" alt="equipments-2" />
					<img src="/assets/about3.jpg" alt="equipments-4" />
					<img src="/assets/about3.jpg" alt="vehicles-3" />
					<img src="/assets/about3.jpg" alt="vehicles-4" />
				</GallerySlider>
				<div class="flex flex-justify-center pt-10">
					<a href="/" class="bg-#d19d64 c-black b-solid b-2px b-#d19d64 uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Към магазин</a>
				</div>
			</div>

			<div class="" style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;">
				<div class="gap-20 h-95vh flex flex-col flex-justify-center flex-items-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6) ), url(/assets/23.jpg); background-position: center top; background-repeat: no-repeat; background-size: cover;">
					<div class="flex gap-10">
						<div class="py-10 b-solid b-2px c-paper b-paper flex flex-col flex-justify-center flex-items-center w-100">
							<RiPlayReverseMiniLine />
							<div class="c-paper">Адрес</div>
							<div class="c-paper">София, ул. "Николай Хайтов" 2</div>
						</div>
						<div class="py-10 b-solid b-2px c-paper b-paper flex flex-col flex-justify-center flex-items-center w-100">
							<RiPlayReverseMiniLine />
							<div class="c-paper">Работно време</div>
							<div class="c-paper">Всеки ден от 10:00 до 20:00</div>
						</div>
						<div class="py-10 b-solid b-2px c-paper b-paper flex flex-col flex-justify-center flex-items-center w-100">
							<RiPlayReverseMiniLine />
							<div class="c-paper">Контакт</div>
							<div class="c-paper">Телефонен номер: 0882 820 331</div>
						</div>
					</div>

					<div class="flex w-full px-50px max-w-1140px mx-auto flex-justify-center flex-items-center gap-10">
						<a href="/" class="text-center w-38 bg-#d19d64 c-black b-solid b-2px b-#d19d64 uppercase font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Услуги</a>
						<a href="/" class="text-center w-38 bg-#d19d64 c-black b-solid b-2px b-#d19d64 uppercase font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Цени</a>
					</div>

					<div class="flex w-full px-50px py-10 max-w-1140px mx-auto flex-justify-between flex-items-center b-solid b-2px b-paper">
						<div class="flex flex-col flex-items-start ">
							<h3 class="mt-0 mb-3 c-paper">Работно време</h3>
							<div class="c-paper">
								Opening hours: Monday - Friday: 09.00 AM - 17.00 PM
							</div>
						</div>
						<div class="flex flex-col gap-3">
							<a href="/" class="text-center w-38 bg-#d19d64 c-black b-solid b-2px b-#d19d64 uppercase font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Услуги</a>
							<a href="/" class="text-center w-38 bg-#d19d64 c-black b-solid b-2px b-#d19d64 uppercase font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Цени</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
