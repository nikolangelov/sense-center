import "solid-slider/slider.css";
import { GoogleStarReview, PuzzleIconReview, ReviewSlider, StaffSlider, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink } from '../../components/H2WithImage';
import { ContainerBox, ContainerSlider, ReviewPuzzlePiece } from "../../components/ContainerSlider";
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
import { GallerySlider2 } from "../../components/GallerySlider";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { Collapse } from "../../components/FAQ";

function SingleCollapse() {
	return (
		<>
			<div class="flex flex-col gap-5 md-gap-2 cursor-pointer max-w-1200px mx-auto">
				<Collapse title="1. Какво ще научите по време на курса за бръснари?" desc="По време на обучението ще се научите да: " >
					<div>
						<ul class="ml-5">
							<li class="">
								Правите класическо и модерно подстригване;
							</li>
							<li class="">
								Оформяте брада професионално;
							</li>
							<li class="">
								Използвате правилно всички бръснарски инструменти;
							</li>
							<li class="">
								Комуникирате уверено с клиенти;
							</li>
							<li class="">
								Научите как да създавате и задържате нови клиенти;
							</li>
							<li class="">
								Работите в реална среда;
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="2. Какво включва практиката?" desc="">
					<div>
						<ul class="ml-5">
							<li class="">
								Работа с машинка и ножици
							</li>
							<li class="">
								Fade техники (low, mid, high, skin fade, taper, burst)
							</li>
							<li class="">
								Оформяне и подрязване на къса и дълга брада
							</li>
							<li class="">
								Бръснене с бръснач
							</li>
							<li class="">
								Провеждане на консултация с клиента
							</li>
							<li class="">
								Финално стилизиране
							</li>
							<li class="">
								Диагностициране на основни състояния и проблеми със скалпа и косата
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="3. Има ли възрастови ограничения за участие в бръснарските курсове?" desc="Курсът е достъпен и за непълнолетни лица, като за тях е необходимо подписано съгласие от родител или настойник." />

				<Collapse title="4. Необходимо ли е курсистът да носи нещо за уроците по бръснарство?" desc="Необходимо е единствено да носите здравна книжка." />

				<Collapse title="5. Осигурявате ли някакви материали по време на обучението за бръснар? Ако да, какви?" desc="Инструментите за работа по време на курсовете за мъжко подстригване се предоставят от академията за бръснари за временно ползване. Осигуряваме учебни глави (кукли) за първите уроци, консумативи като перелини, ножчета за бръснене, продукти за стилизиране и др." >
					<div class="mt-4">
						В случай, че желаете да закупите свои лични инструменти, преподавателят ще Ви съдейства с избора на подходящи такива.
					</div>
				</Collapse>

				<Collapse title="6. Искам да се запиша на уроци по бръснарство, как мога да го направя?" desc="" >
					<div>
						<ul class="ml-5">
							<li class="">
								През сайта
							</li>
							<li class="">
								На място в The Barber Shop Sofia – гр. София, ул. "Николай Хайтов" 2
							</li>

							<li class="">
								По телефона: +359 882820331
							</li>
						</ul>
					</div>
					<div>
						След като се свържете с нас ще получите подробна информация за обучението за бръснар, след като се запознаете с детайлите е необходимо да запазите своето място чрез депозит.
					</div>
				</Collapse>

				<Collapse title="7. Предлагате ли разсрочено плащане или отстъпки за бръснарската академия?" desc="Да! Ако се запишете до две седмици преди началото на курса, получавате отстъпка от 300 лв., т.е. вместо 2500 лв., плащате само 2200 лв." >
					<div class="mt-4">
						Ако предпочитате разсрочено плащане, можете да вземете курса на 3, 6 или 12 вноски без оскъпяване чрез партньорството ни с TBI Bank. Одобрението отнема само няколко минути, няма скрити такси и можете да стартирате веднага след потвърждение.
					</div>
				</Collapse>
			</div>
		</>
	);
}

export default function Page() {
	return (
		<>
			<div class="[background-color:#fcfcfc]">
				<div
					class="
					mb-20
					mx-[-21px]
					relative 
					h-[100vh] 
					bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.55)),url(/assets/Fulfilling-Vows.webp)]
					bg-[position:right_85%_bottom_100%]
					bg-no-repeat 
					bg-cover 
					[mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)] 
					[-webkit-mask-image:linear-gradient(to_bottom,_rgba(252,252,252,1)_80%,_rgba(252,252,252,0.9)_85%,_rgba(252,252,252,0.5)_90%,_rgba(252,252,252,0)_100%)]
					"
					role="img"
					aria-label=""
				></div>
			</div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="flex flex-col justify-center items-center left-0 right-0 px-3 my-0 mx-auto absolute top-70% lg-top-75% text-center w-full" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="tracking-0.3px c-paper mb-2.5 md:mb-7 px-0 md:px-15 xl:px-55 important-lg:font-size-75px important-lg:leading-18 important-md:font-size-45px important-md:leading-13 important-font-size-40px important-leading-9.5">Логопедичната терапия помага на твоето дете да се чувства уверено и разбрано</h1>
							</AnimatedComponent>
							<AnimatedComponent class="important-delay-300 font-300 c-paper text-center mb-0 font-size-4.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 leading-5.5">Детски логопед</AnimatedComponent>

							<AnimatedComponent class="important-delay-600 mt-10 float-left md:pr-5px relative text-center max-w-1240px">
								<div class="flex md:flex-row flex-col justify-center items-center gap-3">
									<PuzzleButton />
									<PuzzleButton2
										href=""
										text="Вижте успешни истории"
									/>
								</div>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-20">
				<H3Pink title="Първите сигнали на аутизъм, които не бива да игнорирате" />
			</AnimatedComponent>

			<div class="max-w-1500px md:pt-10 mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "Review 1" },
										{ name: "Review 2" },
										{ name: "Review 3" },
										{ name: "Review 4" },
									]}
								>
									<ContainerBox
										style="background-color:#742C8F;"
										title="Избухвания без видима причина"
										text="Проявява внезапни и силни емоции като плач и гняв, без видима причина."
										img="/assets/барбер-шоп.webp"
										alt=""
									/>
									<ContainerBox
										style="background-color:#E11172;"
										title="Често повтарящи се движения"
										text="Размахване на ръце, поклащане, въртене в кръг и др."
										img="/assets/барбер-шоп.webp"
										alt=""
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Трудна адаптация към промени"
										text="Детето се чувства силно разстроено или притеснено, когато рутината му се променя."
										img="/assets/барбер-шоп.webp"
										alt=""
									/>
									<ContainerBox
										style="background-color:#FA7402;"
										title="Трудна адаптация към промени"
										text="Детето се чувства силно разстроено или притеснено, когато рутината му се променя."
										img="/assets/барбер-шоп.webp"
										alt=""
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<ContainerBox
									style="background-color:#742C8F;"
									title="Избухвания без видима причина"
									text="Проявява внезапни и силни емоции като плач и гняв, без видима причина."
									img="/assets/барбер-шоп.webp"
									alt=""
								/>
								<ContainerBox
									style="background-color:#E11172;"
									title="Често повтарящи се движения"
									text="Размахване на ръце, поклащане, въртене в кръг и др."
									img="/assets/барбер-шоп.webp"
									alt=""
								/>
								<ContainerBox
									style="background-color:#088F9D;"
									title="Трудна адаптация към промени"
									text="Детето се чувства силно разстроено или притеснено, когато рутината му се променя."
									img="/assets/барбер-шоп.webp"
									alt=""
								/>
								<ContainerBox
									style="background-color:#FA7402;"
									title="Трудна адаптация към промени"
									text="Детето се чувства силно разстроено или притеснено, когато рутината му се променя."
									img="/assets/барбер-шоп.webp"
									alt=""
								/>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px pb-10">
				<AnimatedComponent>
					<h3 class="c-brand">
						Първите сигнали на аутизъм, които не бива да игнорирате
					</h3>
				</AnimatedComponent>

				<div class="xl:px-30">
					<div class="">
						<AnimatedComponent>
							<ReviewSlider
								variant="dots2"
								reviews={[
									{ name: "1" },
									{ name: "2" },
									{ name: "3" },
									{ name: "4" },
								]}>
								<StarReview
									reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
									name="Iliyan Asenov"
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
								/>
								<StarReview
									reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
									name="Iliyan Asenov"
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
								/>
								<StarReview
									reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
									name="Iliyan Asenov"
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
								/>
								<StarReview
									reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
									name="Iliyan Asenov"
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
								/>
							</ReviewSlider>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="pb-40px xl:px-30 xl:px-25 md:ml-5 mx-20px">
				<H3Blue title="Първите сигнали на аутизъм, които не бива да игнорирате" />
				<div class="md:px-10 xl:px-0 flex xl:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="xl:w-1/2 w-full">
						<div class="flex flex-col gap-2">
							<img src="/assets/Fulfilling-Vows.webp" alt="" class="w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/Fulfilling-Vows.webp" alt="" class="w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/Fulfilling-Vows.webp" alt="" class="w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
						</div>
					</AnimatedComponent>

					<div class="relative w-full px-3 sm:px-0 xl:px-3 xl:w-1/2 xl:pl-7">
						<AnimatedComponent>
							<div class="pt-6 md:py-0">
								<p class="xl:mt--5">
									Диагнозата детски аутизъм“ не се поставя с един поглед. Това е внимателен процес, който включва оценка от различни специалисти – детски психиатър, психолог, логопед. Извършва се първична оценка, като се използват утвърдени методики, които дават обективна представа за развитието на детето. Това включва проговаряне, моторни умения и игрово поведение, за да се идентифицират потенциални закъснения или особености.
								</p>
								<p class="important-font-[MYRIADPRO-Bold] tracking-0.2px">
									Правилната оценка включва ясно разбиране на нуждите и възможностите на детето.
								</p>
							</div>
							<AnimatedComponent class="mx-auto flex flex-col justify-center items-center gap-2 mb-2 md:mb-3 md:mt-5">
								<div class="flex flex-col md:flex-row gap-2">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover:bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-41 h-16">
											Деца със СОП
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand md:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-33 h-16">
											Аутизъм
										</a>
									</div>
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-47 xl:w-36 h-16">
											Синдром<br />на Даун
										</a>
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-37 xl:w-33 h-16">
											Заекване
										</a>
									</div>
								</div>

								<div class="flex flex-col md:flex-row gap-2">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-44 xl:w-41 h-16">
											Умствена<br />изостаналост
										</a>
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-40 xl:w-38 h-16">
											Синдром<br />на Аспергер
										</a>
									</div>
									<div class="flex gap-2">
										<a href="/" class="flex justify-center items-center md:bg-brand md:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											Дислекция
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover-bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											Дискалкулия
										</a>
									</div>
								</div>

								<div class="flex flex-col md:flex-row gap-2">
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center md:bg-brand-blue md:hover-bg-brand-blue-hover bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											Дисграфия
										</a>
										<a href="/" class="flex justify-center items-center md:bg-brand md:hover:bg-brand-hover bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-32 h-16">
											Диспраксия
										</a>
									</div>
									<div class="flex flex-row gap-2">
										<a href="/" class="flex justify-center items-center bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-41 h-16">
											Мускулна<br />дистрофия
										</a>
										<a href="/" class="flex justify-center items-center bg-brand hover:bg-brand-hover transition-all c-paper rounded-2xl text-center px-2 py-3 leading-5 w-42 xl:w-38 h-16">
											Синдром<br />на Рет
										</a>
									</div>
								</div>

							</AnimatedComponent>
							<PuzzleButton2
								href=""
								text="Вижте всички състояния"
							/>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="pb-40px xl:px-30 mx-20px">
				<H3Pink title="Първите сигнали на аутизъм, които не бива да игнорирате" />
				<AnimatedComponent class="max-w-1500px mx-auto flex flex-col md:flex-row gap-14">
					<div class="flex flex-col justify-between items-start gap-2 w-full md:w-2/3 px-5">
						<div class="w-full">
							<p class="pb-0 mb-5 md:mt-0">В случай, че забележите някои от симптомите на аутизъм да се проявяват при Вашето дете Ви препоръчваме да се консултирате със специалист. В случай, че забележите някои от симптомите на аутизъм да се проявяват при Вашето дете Ви препоръчваме да се консултирате със специалист.</p>
						</div>
						<div class="w-full">
							<ul style="list-style-type: none;" class="flex flex-col gap-2">
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">трудности в ученето и разбирането на учебния материал</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">трудности в ученето и разбирането на учебния материал</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6">трудности в ученето и разбирането на учебния материал</p>
									</div>
								</li>
								<li>
									<div class="flex items-center gap-2">
										<img class="max-w-35px md:max-w-30px m-0" src="/assets/sense-head-logo.svg" />
										<p class="font-600 my-2 leading-6 md:mb-0">трудности в ученето и разбирането на учебния материал</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand max-w-800px mx-auto px-6 md:px-10 xl:px-8 py-2 pd:py-4 w-full md:w-1/3">
						<div class="flex justify-center items-center gap-4">
							<img src="/assets/exclamation-mark-icon.webp" class="w-12 h-12" />
							<p class="font-[MYRIADPRO-Semibold] c-paper uppercase font-size-17px">80% - 90% от мозъка на детето се развива до 7-годишна възраст</p>
						</div>
						<p class="font-size-15px c-paper mt-2">Ето защо колкото по-рано бъде започната терапия, толкова по-голяма е възможността за видимо подобрение на състоянието и напредване в развитието.</p>
					</div>
				</AnimatedComponent>
			</section>

			<section class="pt-30 md:pt-50">
				<AnimatedComponent class="">
					<H2Echo
						maintitle={
							<>
								Правилно разпознаване<br />на детски аутизъм
							</>
						}
						title="аутизъм"
						bgImage="/assets/purple-orange-gradient-title-bg.webp"
					/>
				</AnimatedComponent>
			</section>

			<section class="relative md:pt-10">
				<BackgroundIcons />
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/Fulfilling-Vows.webp" alt="" class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10 md:mt-0">
								Диагнозата детски аутизъм“ не се поставя с един поглед. Това е внимателен процес, който включва оценка от различни специалисти – детски психиатър, психолог, логопед. Извършва се първична оценка, като се използват утвърдени методики, които дават обективна представа за развитието на детето. Това включва проговаряне, моторни умения и игрово поведение, за да се идентифицират потенциални закъснения или особености.
							</p>
							<p>
								Правилната оценка включва ясно разбиране на нуждите и възможностите на детето. Ако сте посещавали различни експерти и всички стигат до сходни заключения,  това е знак за потвърждение на състоянието.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-10 md:pt-20">
				<H3Blue title="Първите сигнали на аутизъм, които не бива да игнорирате" />
			</AnimatedComponent>

			<div class="max-w-1500px md:pt-10 mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h4 class="font-600 text-left pb-2 mt-0">Поведенчески нарушения при деца с аутизъм</h4>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "Review 1" },
										{ name: "Review 2" },
										{ name: "Review 3" },
									]}
								>
									<ContainerBox
										style="background-color:#E11172;"
										title="Избухвания без видима причина"
										text="Проявява внезапни и силни емоции като плач и гняв, без видима причина."
										img="/assets/барбер-шоп.webp"
										alt=""
									/>
									<ContainerBox
										style="background-color:#E11172;"
										title="Често повтарящи се движения"
										text="Размахване на ръце, поклащане, въртене в кръг и др."
										img="/assets/барбер-шоп.webp"
										alt=""
									/>
									<ContainerBox
										style="background-color:#E11172;"
										title="Трудна адаптация към промени"
										text="Детето се чувства силно разстроено или притеснено, когато рутината му се променя."
										img="/assets/барбер-шоп.webp"
										alt=""
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<ContainerBox
									style="background-color:#E11172;"
									title="Избухвания без видима причина"
									text="Проявява внезапни и силни емоции като плач и гняв, без видима причина."
									img="/assets/барбер-шоп.webp"
									alt=""
								/>
								<ContainerBox
									style="background-color:#E11172;"
									title="Често повтарящи се движения"
									text="Размахване на ръце, поклащане, въртене в кръг и др."
									img="/assets/барбер-шоп.webp"
									alt=""
								/>
								<ContainerBox
									style="background-color:#E11172;"
									title="Трудна адаптация към промени"
									text="Детето се чувства силно разстроено или притеснено, когато рутината му се променя."
									img="/assets/барбер-шоп.webp"
									alt=""
								/>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="purple" />

			<div class="max-w-1500px mx-auto">
				<div class="pb-50px">
					<section class="">
						<AnimatedComponent>
							<h4 class="font-600 text-left pb-2">Поведенчески нарушения при деца с аутизъм</h4>
							<div class="block xl:hidden">
								<ContainerSlider
									reviews={[
										{ name: "Review 1" },
										{ name: "Review 2" },
										{ name: "Review 3" },
									]}
								>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Избухвания без видима причина"
										text="Проявява внезапни и силни емоции като плач и гняв, без видима причина."
										img="/assets/барбер-шоп.webp"
										alt=""
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Често повтарящи се движения"
										text="Размахване на ръце, поклащане, въртене в кръг и др."
										img="/assets/барбер-шоп.webp"
										alt=""
									/>
									<ContainerBox
										style="background-color:#088F9D;"
										title="Трудна адаптация към промени"
										text="Детето се чувства силно разстроено или притеснено, когато рутината му се променя."
										img="/assets/барбер-шоп.webp"
										alt=""
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4">
								<ContainerBox
									style="background-color:#088F9D;"
									title="Избухвания без видима причина"
									text="Проявява внезапни и силни емоции като плач и гняв, без видима причина."
									img="/assets/барбер-шоп.webp"
									alt=""
								/>
								<ContainerBox
									style="background-color:#088F9D;"
									title="Често повтарящи се движения"
									text="Размахване на ръце, поклащане, въртене в кръг и др."
									img="/assets/барбер-шоп.webp"
									alt=""
								/>
								<ContainerBox
									style="background-color:#088F9D;"
									title="Трудна адаптация към промени"
									text="Детето се чувства силно разстроено или притеснено, когато рутината му се променя."
									img="/assets/барбер-шоп.webp"
									alt=""
								/>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="pink" />

			<section class="relative md:pb-30 xl:px-30 mx-20px">
				<H3Blue title="Първична оценка при съмнение за аутизъм" />
				<div class="flex flex-col justify-center items-center mx-auto px-20px xl:px-30">
					<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:pb-10 md:pt-4 py-5 md:bg-gradient-to-t lg:from-paper lg:to-paper bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
						<div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
							<div class="xl:w-1/2 w-full md:pl-7">
								<p class="c-paper lg:c-paper-inv mb-1">
									В Sense Center предлагаме <strong class="font-[MYRIADPRO-Bold]">първична оценка (тест за аутизъм)</strong> за деца със съмнение за аутизъм.
								</p>
								<p class="c-paper lg:c-paper-inv">
									По време на консултацията се извършва обследване на поведението и състоянието на детето.
								</p>
								<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Наблюдение на дете с нарушения в развитието" class="lg:hidden my-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv mb-1">
									Оценяват се уменията му за социално взаимодействие, способността за комуникация, както и наличието на повтарящи се движения и специфични интереси.
								</p>
								<p class="c-paper lg:c-paper-inv">
									Едновременно с това специалистите интервюират родителите за техните наблюдения и за училищното представяне на детето.
								</p>
								<div class="pt-8 flex md:flex-row flex-col justify-center items-center">
									<PuzzleButton />
								</div>
							</div>
							<div class="xl:w-1/2 w-full">
								<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Семейство на дете с нарушения в развитието" class="mt-5 w-full h-auto object-cover rounded shadow" />
								<p class="c-paper lg:c-paper-inv italic font-300 mt-2 leading-5 lg:leading-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
									Препоръчително е да донесете всички налични медицински документи, които могат да бъдат от полза за изясняване на състоянието.
								</p>
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<div class="mt-20 gap-12 pb-8 md:pb-20 pt-50px xl:px-30 px-20px bg-brand-blue -mx-20px">
				<div class="mx-20px">
					<AnimatedComponent>
						<ReviewSlider
							variant="dots2"
							reviews={[
								{ name: "Karl Stirner" },
								{ name: "Ann Panillo" },
								{ name: "Peter Hughes" },
								{ name: "Peter Hughes" },
							]}>
							<GoogleStarReview
								img="/assets/GoogleLogoPNGImage.webp"
								reviewText={
									<>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									</>
								}
								name="Georgi Pleshkov"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
							/>
							<GoogleStarReview
								img="/assets/GoogleLogoPNGImage.webp"
								reviewText={
									<>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									</>
								}
								name="Georgi Pleshkov"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
							/>
							<GoogleStarReview
								img="/assets/GoogleLogoPNGImage.webp"
								reviewText={
									<>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									</>
								}
								name="Georgi Pleshkov"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
							/>
							<GoogleStarReview
								img="/assets/GoogleLogoPNGImage.webp"
								reviewText={
									<>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									</>
								}
								name="Georgi Pleshkov"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/pgSmLpppJkuxo1SH6"
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px">
				<H3Pink title="Какво да правим, ако нямаме достъп до терапевт" />
				<div class="mx-auto relative">
					<BackgroundIcons />
					<AnimatedComponent class="md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto px-5" style="flex: 0 0 auto;">
						<div>
							<div class="">
								<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
							</div>
							<div class="w-full py-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="mt-2">
										Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие. Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
									</p>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-20">
				<div class="mx-auto px-5">
					<StaffSlider
						variant="dots1"
						reviews={[
							{ name: "Марчела Йорданова" },
							{ name: "Марчела Йорданова" },
							{ name: "Марчела Йорданова" },
						]}>
						<div class="flex flex-col max-w-full relative overflow-hidden mx-auto">
							<div>
								<h4 class="mb-0 important-md:font-size-50px text-left">Марчела Йорданова</h4>
								<p class="important-font-100 pb-5 important-font-[MYRIADPRO-Light]">Главен логопед и управител</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">"Всяко дете принадлежи!"</p>
								<p class="italic font-size-16px mt-0 important-font-[MYRIADPRO-CONDIT]">д-р Зорница Маркова</p>
								<div class="w-full py-20px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
										<p class="text-left mt-1">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
										<p class="text-left mt-1">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-50px text-left">Марчела Йорданова</h4>
								<p class="important-font-100 pb-5 important-font-[MYRIADPRO-Light]">Главен логопед и управител</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">"Всяко дете принадлежи!"</p>
								<p class="italic font-size-16px mt-0 important-font-[MYRIADPRO-CONDIT]">д-р Зорница Маркова</p>
								<div class="w-full pb-20px pt-10px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
										<p class="text-left mt-1">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
										<p class="text-left mt-1">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
							<div>
								<h4 class="mb-0 important-md:font-size-50px text-left">Марчела Йорданова</h4>
								<p class="important-font-100 pb-5 important-font-[MYRIADPRO-Light]">Главен логопед и управител</p>
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<p class="italic font-size-18px leading-5.5 md:leading-8 md:font-size-26px mb-0 important-font-[MYRIADPRO-CONDIT]">"Всяко дете принадлежи!"</p>
								<p class="italic font-size-16px mt-0 important-font-[MYRIADPRO-CONDIT]">д-р Зорница Маркова</p>
								<div class="w-full pb-20px pt-10px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-0">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
										<p class="text-left mt-1">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
										<p class="text-left mt-1">
											Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
										</p>
									</div>
								</div>
							</div>
						</div>
					</StaffSlider>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="gap-12 pb-8 md:pb-20 xl:px-30">
				<H3Blue title="Терапия в домашни условия" />
				<div class="md:pb-0 pb-10">
					<AnimatedComponent>
						<p class="mt-0 mb-10 px-5">
							Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие. Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
						</p>
						<ReviewSlider
							variant="dots3"
							reviews={[
								{ name: "Karl Stirner" },
								{ name: "Ann Panillo" },
								{ name: "Peter Hughes" },
								{ name: "Peter Hughes" },
							]}>
							<PuzzleIconReview
								style="background-color:#742C8F;"
								puzzleclass="c-brand w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Използване на визуални помощни средства"
								desc="Карти, таблици и схеми улесняват разбирането на информация и подкрепят комуникацията. Визуалните графици помагат на детето да се ориентира в ежедневните задачи."
							/>
							<PuzzleIconReview
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Въвеждане на сензорни активности"
								desc="Активности като игра с пясък, вода, пластилин или сензорни топки подпомагат развитието на сетивата и насърчават спокойствието."
							/>
							<PuzzleIconReview
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Изграждане на рутинни действия"
								desc="Рутините осигуряват предсказуемост, която помага на децата с аутизъм да се чувстват по-сигурни и спокойни. Например, създайте последователност за сутрешната подготовка или времето за игра."
							/>
							<PuzzleIconReview
								style="background-color:#FA7402;"
								puzzleclass="c-brand-blue w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								title="Използване на игрови методи"
								desc="Включете ролеви или настолни игри, които развиват социалните умения и насърчават взаимодействието с другите."
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue2" />

			<section class=" md:pb-30 mx-20px md:mx-auto max-w-1500px">
				<AnimatedComponent class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 md:px-10 py-5 pd:py-4 mx-5">
					<div class="flex flex-col md:flex-row justify-center items-center md:gap-4">
						<img src="/assets/exclamation-mark-icon.webp" class="mt-2 w-15 h-15" />
						<div>
							<p class="font-600 c-paper uppercase md:text-left text-center font-size-20px mb-0 font-[MYRIADPRO-Bold]">Работим с по-малки деца
							</p>
							<p class="c-paper md:mt-0 font-[MYRIADPRO-Light]">Ето защо колкото по-рано бъде започната терапия, толкова по-голяма е възможността за видимо подобрение на състоянието и напредване в развитието.</p>
						</div>
					</div>
					<p class="font-600 c-paper font-size-20px mb-0 font-[MYRIADPRO-Bold]">Фокусираме се върху:</p>
					<ul class="ml-10 c-paper">
						<li>
							<p class="c-paper mt-2 mb-1 font-[MYRIADPRO-Light]">Ето защо колкото по-рано бъде започната терапия, толкова по-голяма е възможността за видимо подобрение на състоянието и напредване в развитието.</p>
						</li>
						<li>
							<p class="c-paper my-1 font-[MYRIADPRO-Light]">Ето защо колкото по-рано бъде започната терапия, толкова по-голяма е възможността за видимо подобрение на състоянието и напредване в развитието.</p>
						</li>
						<li>
							<p class="c-paper my-1 font-[MYRIADPRO-Light]">Ето защо колкото по-рано бъде започната терапия, толкова по-голяма е възможността за видимо подобрение на състоянието и напредване в развитието.</p>
						</li>
						<li>
							<p class="c-paper mt-1 font-[MYRIADPRO-Light]">Ето защо колкото по-рано бъде започната терапия, толкова по-голяма е възможността за видимо подобрение на състоянието и напредване в развитието.</p>
						</li>
					</ul>
				</AnimatedComponent>
			</section>

			<section class="pt-20 md:pt-30">
				<AnimatedComponent class="">
					<H2Echo
						maintitle={
							<>
								Иновативни методи
							</>
						}
						title="методи"
						bgImage="/assets/purple-orange-gradient-title-bg.webp"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/Fulfilling-Vows.webp" alt="" class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt-10 md:mt-0">
								Диагнозата детски аутизъм“ не се поставя с един поглед. Това е внимателен процес, който включва оценка от различни специалисти – детски психиатър, психолог, логопед. Извършва се първична оценка, като се използват утвърдени методики, които дават обективна представа за развитието на детето. Това включва проговаряне, моторни умения и игрово поведение, за да се идентифицират потенциални закъснения или особености. Правилната оценка включва ясно разбиране на нуждите и възможностите на детето. Ако сте посещавали различни експерти и всички стигат до сходни заключения,  това е знак за потвърждение на състоянието.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-30 md:pt-50">
				<H3Pink title="Какво да правим, ако нямаме достъп до терапевт" />
				<div class="mx-auto">
					<AnimatedComponent class="px-5 md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<h4 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Вибромасажор Z-Vibe</h4>
							<div class="w-full pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
									</p>
								</div>
							</div>
							<div class="">
								<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="xl:px-30 mx-20px mt-10">
				<div class="mx-auto">
					<AnimatedComponent class="px-5 md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<h4 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Вибромасажор Z-Vibe</h4>
							<div class="w-full pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
									</p>
								</div>
							</div>
							<div class="">
								<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px mt-10">
				<div class="mx-auto">
					<AnimatedComponent class="px-5 md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<h4 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Вибромасажор Z-Vibe</h4>
							<div class="w-full pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
									</p>
								</div>
							</div>
							<div class="">
								<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple2" />

			<section class="xl:px-30 mx-20px mt-10">
				<div class="mx-auto">
					<AnimatedComponent class="px-5 md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
						<div>
							<h4 class="important-md:font-size-40px important-leading-10 mt-3 mb-0 md:my-3">Вибромасажор Z-Vibe</h4>
							<div class="w-full pt-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="text-left mt-0 md:mt-2">
										Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
									</p>
								</div>
							</div>
							<div class="">
								<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
							</div>
						</div>
					</AnimatedComponent>
					<AnimatedComponent class="mb-10 mt-20 md:mt-30 lg:w-800px mx-auto">
						<div class="flex flex-col justify-center items-start b-rd-12px bg-brand px-10 py-4">
							<p class="font-size-22px uppercase c-paper font-500 mb-0 tracking-0.5px font-[MYRIADPRO-Semibold]">Устойчиво развитие</p>
							<p class="c-paper font-300 font-[MYRIADPRO-Light]">Научете повече за особеностите на аутизма и подходящите методи за работа с деца в аутистичния спектър.<br />
								Използвайте визуални помощни средства и техники за управление на поведението.
							</p>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue" />

			<div class="xl:px-30 mx-20px px-20px md:px-0">
				<H3Blue title="Резултати от терапията" />
				<div class="md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<AnimatedComponent class="px-5 flex flex-col gap-1">
						<div class="">
							<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
						</div>
						<p class="mt-5">
							Терапевтите използват утвърдени методи и персонализирани програми, занимания за деца с аутизъм, които обогатяват речниковия запас и формират умения за редуване, изчакване и споделена игра. С времето детето започва да удължава продължителността на очния контакт, да разбира и изпълнява прости инструкции.
						</p>
						<div class="mt-6">
							<GallerySlider2
								imgs={[
									{ src: "/assets/testing-image.jpg", alt: "" },
									{ src: "/assets/testing-image.jpg", alt: "" },
									{ src: "/assets/testing-image.jpg", alt: "" },
									{ src: "/assets/testing-image.jpg", alt: "" },
								]}
							/>
						</div>
						<p class="mt-6">
							Професионалната терапия осигурява забележим напредък в развитието на деца с аутизъм. Чрез постоянство и подкрепа се постигат значителни резултати, като развитие на социални, комуникативни, езиково-говорни, двигателни умения.
						</p>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="purple2" />

			<section>
				<div class="gap-12 pb-8 md:pb-30 pt-100px md:pt-50px xl:px-30">
					<H3Pink title="Резултати от терапията в домашни условия" />
					<AnimatedComponent class="mb-10 relative px-5">
						<BackgroundIcons />
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0"><span class="font-[MYRIADPRO-Bold]">Резултатите от терапията със собствени сили варират.</span> Някои деца показват подобрение в ежедневните си умения, комуникация и социализация. Въпреки това, липсата на професионална подкрепа ограничава напредъка в определени области. При постоянство и отдаденост се постигат положителни резултати, макар и по-бавно, особено в ранните етапи на терапията.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Резултатите от терапията със собствени сили варират. Някои деца показват подобрение в ежедневните си умения, комуникация и социализация. Въпреки това, липсата на професионална подкрепа ограничава напредъка в определени области. При постоянство и отдаденост се постигат положителни резултати, макар и по-бавно, особено в ранните етапи на терапията.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Резултатите от терапията със собствени сили варират. Някои деца показват подобрение в ежедневните си умения, комуникация и социализация. Въпреки това, липсата на професионална подкрепа ограничава напредъка в определени области. При постоянство и отдаденост се постигат положителни резултати, макар и по-бавно, особено в ранните етапи на терапията.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Резултатите от терапията със собствени сили варират. Някои деца показват подобрение в ежедневните си умения, комуникация и социализация. Въпреки това, липсата на професионална подкрепа ограничава напредъка в определени области. При постоянство и отдаденост се постигат положителни резултати, макар и по-бавно, особено в ранните етапи на терапията.</p>
						</div>
					</AnimatedComponent>
					<PuzzleButton />
				</div>
			</section>

			<section class="pt-20 md:pt-30">
				<AnimatedComponent class="">
					<H2Echo
						maintitle={
							<>
								Резултати от терапията
							</>
						}
						title="Резултати"
						bgImage="/assets/purple-orange-gradient-title-bg.webp"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/Fulfilling-Vows.webp" alt="" class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7 mt-10 md:mt-0">
						<AnimatedComponent>
							<p>
								Диагнозата детски аутизъм“ не се поставя с един поглед. Това е внимателен процес, който включва оценка от различни специалисти – детски психиатър, психолог, логопед. Извършва се първична оценка, като се използват утвърдени методики, които дават обективна представа за развитието на детето. Това включва проговаряне, моторни умения и игрово поведение, за да се идентифицират потенциални закъснения или особености.
							</p>
							<p class="mt--1">
								Диагнозата детски аутизъм“ не се поставя с един поглед. Това е внимателен процес, който включва оценка от различни специалисти – детски психиатър, психолог, логопед. Извършва се първична оценка, като се използват утвърдени методики, които дават обективна представа за развитието на детето.
							</p>
							<p class="mt--1"><span class="font-[MYRIADPRO-Bold]">Резултатите от терапията със собствени сили варират.</span> Някои деца показват подобрение в ежедневните си умения, комуникация и социализация. Въпреки това, липсата на професионална подкрепа ограничава напредъка в определени области. При постоянство и отдаденост се постигат положителни резултати, макар и по-бавно, особено в ранните етапи на терапията.</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<div class="xl:px-30 px-20px md:px-0 mx-20px pt-30 md:pt-40">
				<div class="md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<AnimatedComponent class="flex flex-col gap-1">
						<div class="">
							<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
						</div>
						<p class="mt-5">
							Терапевтите използват утвърдени методи и персонализирани програми, занимания за деца с аутизъм, които обогатяват речниковия запас и формират умения за редуване, изчакване и споделена игра. <span class="font-[MYRIADPRO-Bold]">С времето детето започва да удължава продължителността на очния контакт, да разбира и изпълнява прости инструкции.</span>
						</p>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-5 md:pt-0">
				<H3Pink title="Първите сигнали на аутизъм, които не бива да игнорирате" />
			</AnimatedComponent>

			<section class="max-w-1500px md:pt-10 mx-auto">
				<div>
					<section class="">
						<AnimatedComponent>
							<ContainerSlider
								reviews={[
									{ name: "Review 1" },
									{ name: "Review 2" },
									{ name: "Review 3" },
								]}
							>
								<ReviewPuzzlePiece
									style="background-color:#088F9D;"
									puzzleclass="c-brand-pink w-6 mr-2"
									title="Използване на игрови методи"
									desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
									name="Родител на марти,"
									condition="дете със съмнение за Аутизъм"
									href=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#E11172;"
									puzzleclass="c-brand-blue w-6 mr-2"
									title="Използване на игрови методи"
									desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
									name="Родител на марти,"
									condition="дете със съмнение за Аутизъм"
									href=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#FA7402;"
									puzzleclass="c-brand-purple w-6 mr-2"
									title="Използване на игрови методи"
									desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
									name="Родител на марти,"
									condition="дете със съмнение за Аутизъм"
									href=""
								/>
							</ContainerSlider>
						</AnimatedComponent>
						<PuzzleButton2
							href=""
							text="Вижте всички успешни истории"
						/>
					</section>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px pb-50px">
				<H3Blue title="Първите сигнали на аутизъм, които не бива да игнорирате" />
				<SingleCollapse />
			</section>
		</>
	);
}
