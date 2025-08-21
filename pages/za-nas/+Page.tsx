import "solid-slider/slider.css";
import { GoogleStarReview, PuzzleIconReview, ReviewSlider, StaffSlider, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink } from '../../components/H2WithImage';
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import MdiEmail from '~icons/mdi/email';
import MdiClockTimeTwo from '~icons/mdi/clock-time-two';
import MdiPhone from '~icons/mdi/phone';
import { GifHero } from "../../components/HeroVideo";

function GoogleMapIframe() {
	const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.749670548677!2d23.25135671550783!3d42.6696015791651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9be9899f1247%3A0x9c53f8ec4847cb64!2zU0VOU0Ug0L3QsNGD0YHRgtC-INCf0L7QvdC40LrQsA!5e0!3m2!1sen!2sbg!4v1719513278453!5m2!1sen!2sbg`;

	return (
		<iframe
			src={mapSrc}
			width="100%"
			height="350"
			style="border: 0; border-radius: 12px;"
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		></iframe>
	);
}

export default function Page() {
	return (
		<>
			<div class="relative w-full">
				<GifHero gifPreview="/assets/home/2025-07-08 10-35-35.mp4" />

				<div class="w-full bg-#212528">
					<div class="max-w-1240px mx-auto">
						<div class="flex flex-justify-center">
							<div class="flex flex-col justify-center items-center left-0 right-0 px-3 my-0 mx-auto absolute top-70% lg-top-70% text-center w-full" style="-webkit-transform: translateY(-50%);">
								<AnimatedComponent>
									<h1 class="tracking-0.3px c-paper mb-2.5 md:mb-7 px-0 md:px-15 xl:px-55 important-lg:font-size-70px important-lg:leading-17 important-md:font-size-45px important-md:leading-13 important-font-size-40px important-leading-9.5">Sense Center подкрепя семейството на деца със СОП в справянето с ежедневните предизвикателства</h1>
								</AnimatedComponent>

								<AnimatedComponent class="important-delay-600 mt-6 float-left md:pr-5px relative text-center max-w-1240px">
									<div class="flex md:flex-row flex-col justify-center items-center gap-3">
										<PuzzleButton />
										<PuzzleButton2
											style2="padding-left:0px !important; font-weight:500; font-size:14px !important;"
											img="/assets/sense-orange-puzzle-piece.svg"
											href=""
											text="Вижте успешни истории"
										/>
									</div>
								</AnimatedComponent>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section class="xl:px-30 mx-20px pt-30 md:pt-50">
				<h2
					class="h2-za-nas important-normal-case text-left leading-[1.4] font-bold inline-block"
					style={{
						'background-image': 'linear-gradient(to right, #0f626b, #abe6ed)',
						'-webkit-background-clip': 'text',
						'-webkit-text-fill-color': 'transparent',
						display: 'inline-block',
						'padding-bottom': '0.2em',
					}}
				>
					За деца, които имат нужда от повече време и подкрепа
				</h2>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/Fulfilling-Vows.webp" alt="" class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>
					<AnimatedComponent class="flex flex-col items-center gap-1 relative mb-2 md:hidden">
						<h2 class="text-transparent bg-clip-text bg-[url(/assets/purple-orange-gradient-title-bg.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
							аутизъм
						</h2>
					</AnimatedComponent>

					<div class="w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt--2">
								Диагнозата детски аутизъм“ не се поставя с един поглед. Това е внимателен процес, който включва оценка от различни специалисти – детски психиатър, психолог, логопед. Извършва се първична оценка, като се използват утвърдени методики, които дават обективна представа за развитието на детето. Това включва проговаряне, моторни умения и игрово поведение, за да се идентифицират потенциални закъснения или особености.
							</p>
							<p>
								Правилната оценка включва ясно разбиране на нуждите и възможностите на детето. Ако сте посещавали различни експерти и всички стигат до сходни заключения,  това е знак за потвърждение на състоянието.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px pb-10 md:pb-0">
				<AnimatedComponent>
					<h3 class="c-brand">
						Първите сигнали на аутизъм, които не бива да игнорирате
					</h3>
				</AnimatedComponent>

				<div class="xl:px-30">
					<div class="">
						<AnimatedComponent>
							<ReviewSlider
								variant="dots3"
								reviews={[
									{ name: "Karl Stirner" },
									{ name: "Ann Panillo" },
									{ name: "Peter Hughes" },
									{ name: "Peter Hughes" },
								]}>
								<StarReview
									reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
									name="Iliyan Asenov"
									date="Януари 2024"
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
								/>
								<StarReview
									reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
									name="Iliyan Asenov"
									date="Януари 2024"
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
								/>
								<StarReview
									reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
									name="Iliyan Asenov"
									date="Януари 2024"
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
								/>
								<StarReview
									reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
									name="Iliyan Asenov"
									date="Януари 2024"
									hrefGoogleReview="https://maps.app.goo.gl/sye2Me5vsxUajS8a6"
								/>
							</ReviewSlider>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="pb-40px xl:px-30 mt-10 md:mt-0 xl:px-25 md:ml-5 mx-20px">
				<div class="md:hidden block">
					<AnimatedComponent>
						<h3
							class="text-left leading-[1.4] font-bold inline-block"
							style={{
								'background-image': 'linear-gradient(to right, #0f626b, #abe6ed)',
								'-webkit-background-clip': 'text',
								'-webkit-text-fill-color': 'transparent',
								display: 'inline-block',
								'padding-bottom': '0em',
							}}
						>
							Мисията на<br />Sense Center
						</h3>
					</AnimatedComponent>				</div>
				<div class="hidden md:block">
					<H3Blue title="Мисията на Sense Center" />
				</div>
				<AnimatedComponent>
					<p class="mt-0 px-5">Да подкрепим множество семейства и деца със СОП да постигнат максималния си потенциал.</p>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="purple" />

			<section class="gap-12 xl:px-">
				<H3Pink title="Терапия в домашни условия" />
				<div class="md:pb-0 pb-10">
					<AnimatedComponent>
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
								href="/za-nas/blago/"
								title="Използване на визуални помощни средства"
								desc="Карти, таблици и схеми улесняват разбирането на информация и подкрепят комуникацията. Визуалните графици помагат на детето да се ориентира в ежедневните задачи."
							/>
							<PuzzleIconReview
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								href="/za-nas/blago/"
								title="Въвеждане на сензорни активности"
								desc="Активности като игра с пясък, вода, пластилин или сензорни топки подпомагат развитието на сетивата и насърчават спокойствието."
							/>
							<PuzzleIconReview
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								href="/za-nas/blago/"
								title="Изграждане на рутинни действия"
								desc="Рутините осигуряват предсказуемост, която помага на децата с аутизъм да се чувстват по-сигурни и спокойни. Например, създайте последователност за сутрешната подготовка или времето за игра."
							/>
							<PuzzleIconReview
								style="background-color:#FA7402;"
								puzzleclass="c-brand-blue w-6 mr-2"
								img="/assets/Mending-the-Cosmos.webp"
								alt=""
								href="/za-nas/blago/"
								title="Използване на игрови методи"
								desc="Включете ролеви или настолни игри, които развиват социалните умения и насърчават взаимодействието с другите."
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="blue2" />

			<section>
				<div class="gap-12 pb-8 md:pb-30 xl:px-30">
					<H3Pink title="Резултати от терапията в домашни условия" />
					<AnimatedComponent class="mb-10 relative px-5">
						<BackgroundIcons />
						<div class="flex flex-col lg:flex-row justify-center items-start gap-3">
							<div class="flex flex-col justify-center items-start">
								<h4 class="mt-2 important-leading-7 mb-7 tracking-0">За деца със забавяне в развитието</h4>
								<p class="mt-0">Резултатите от терапията със собствени сили варират. Някои деца показват подобрение в ежедневните си умения, комуникация и социализация. Въпреки това, липсата на професионална подкрепа ограничава напредъка в определени области.</p>
							</div>
							<div class="flex flex-col justify-center items-start">
								<h4 class="mt-2 important-leading-7 mb-7 tracking-0">За деца със забавяне в развитието</h4>
								<p class="mt-0">Резултатите от терапията със собствени сили варират. Някои деца показват подобрение в ежедневните си умения, комуникация и социализация. Въпреки това, липсата на професионална подкрепа ограничава напредъка в определени области.</p>
							</div>
							<div class="flex flex-col justify-center items-start">
								<h4 class="mt-2 important-leading-7 mb-7 tracking-0">За деца със забавяне в развитието</h4>
								<p class="mt-0">Резултатите от терапията със собствени сили варират. Някои деца показват подобрение в ежедневните си умения, комуникация и социализация. Въпреки това, липсата на професионална подкрепа ограничава напредъка в определени области.</p>
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<section class="pb-40px xl:px-30 xl:px-25 md:ml-5 mx-20px">
				<H3Blue title="Предоставяме експертиза и иновативни методи, необходими за успешно подпомагане на деца със СОП и техните семейства" />
				<PuzzleButton />
			</section>

			<section class="pt-30 md:pt-50">
				<AnimatedComponent class="">
					<H2Echo
						maintitle={
							<>
								Лицето и сърцето зад<br />Sense center
							</>
						}
						title="Sense center"
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
					<AnimatedComponent class="flex flex-col items-center gap-1 relative mb-2 md:hidden">
						<h2 class="text-transparent bg-clip-text bg-[url(/assets/purple-orange-gradient-title-bg.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
							аутизъм
						</h2>
					</AnimatedComponent>

					<div class="w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt--2">
								Диагнозата детски аутизъм“ не се поставя с един поглед. Това е внимателен процес, който включва оценка от различни специалисти – детски психиатър, психолог, логопед. Извършва се първична оценка, като се използват утвърдени методики, които дават обективна представа за развитието на детето. Това включва проговаряне, моторни умения и игрово поведение, за да се идентифицират потенциални закъснения или особености.
							</p>
							<p>
								Правилната оценка включва ясно разбиране на нуждите и възможностите на детето. Ако сте посещавали различни експерти и всички стигат до сходни заключения,  това е знак за потвърждение на състоянието.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section>
				<div class="gap-12 xl:px-30">
					<H3Pink title="Резултати от терапията в домашни условия" />
					<AnimatedComponent class="mb-10 relative px-5">
						<BackgroundIcons />
						<div class="flex flex-col justify-center items-start">
							<h4 class="mt-2 important-leading-7 mb-7 tracking-0">За деца със забавяне в развитието</h4>
							<p class="mt-0">Диагнозата детски аутизъм“ не се поставя с един поглед. Това е внимателен процес, който включва оценка от различни специалисти – детски психиатър, психолог, логопед. Извършва се първична оценка, като се използват утвърдени методики, които дават обективна представа за развитието на детето. Това включва проговаряне, моторни умения и игрово поведение, за да се идентифицират потенциални закъснения или особености. Диагнозата детски аутизъм“ не се поставя с един поглед. Това е внимателен процес, който включва оценка от различни специалисти – детски психиатър, психолог, логопед. Извършва се първична оценка, като се използват утвърдени методики, които дават обективна представа за развитието на детето. Това включва проговаряне, моторни умения и игрово поведение, за да се идентифицират потенциални закъснения или особености.</p>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<section class="xl:px-30 mx-20px">
				<H3Pink title="Какво да правим, ако нямаме достъп до терапевт" />
				<div class="mx-auto">
					<AnimatedComponent class="flex flex-col lg:flex-row max-w-full relative overflow-hidden mx-auto px-5" style="flex: 0 0 auto;">
						<div class="flex flex-col lg:flex-row justify-center items-center md:gap-10">
							<div class="w-full lg:w-1/2">
								<img class="w-full h-auto" src="/assets/testing-image.jpg" alt="" />
							</div>
							<div class="w-full lg:w-1/2 py-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="mt-2 md:mt-5">
										Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие. Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
									</p>
									<p class="mt-1">
										Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие. Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
									</p>
									<p class="mt-1">
										Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие. Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
									</p>
									<p class="mt-1">
										Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие. Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
									</p>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<section class="pt-20 md:pt-50">
				<AnimatedComponent class="">
					<H2Echo
						maintitle={
							<>
								Лицето и сърцето зад<br />Sense center
							</>
						}
						title="Sense center"
						bgImage="/assets/purple-orange-gradient-title-bg.webp"
					/>
				</AnimatedComponent>
			</section>

			<section class="relative md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/Fulfilling-Vows.webp" alt="" class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>
					<AnimatedComponent class="flex flex-col items-center gap-1 relative mb-2 md:hidden">
						<h2 class="text-transparent bg-clip-text bg-[url(/assets/purple-orange-gradient-title-bg.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
							аутизъм
						</h2>
					</AnimatedComponent>

					<div class="w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt--2">
								Диагнозата детски аутизъм“ не се поставя с един поглед. Това е внимателен процес, който включва оценка от различни специалисти – детски психиатър, психолог, логопед. Извършва се първична оценка, като се използват утвърдени методики, които дават обективна представа за развитието на детето. Това включва проговаряне, моторни умения и игрово поведение, за да се идентифицират потенциални закъснения или особености.
							</p>
							<p>
								Правилната оценка включва ясно разбиране на нуждите и възможностите на детето. Ако сте посещавали различни експерти и всички стигат до сходни заключения,  това е знак за потвърждение на състоянието.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<div class="max-w-1500px mx-auto pt-30 md:pt-40 pb-20 md:pb-0">
				<div class="hidden lg:flex flex-row justify-center items-center md:px-20 px-10 ml--20">
					<AnimatedComponent class="z-5 flex flex-col justify-center items-center w-350px h-350px xl:w-400px xl:h-400px mr--16.6 xl:mr--19" style="background-image: url(/assets/home/home-puzzle-orange.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
						<div class="pr-9 pl-6 flex flex-col justify-center items-center w-350px h-350px">
							<p class="text-center c-paper font-size-45px font-600 mb-0 mt-12">20+</p>
							<p class="text-center c-paper font-size-15px font-400 leading-5 pt-2 uppercase font-700">Години<br />опит</p>
						</div>
					</AnimatedComponent>
					<AnimatedComponent class="important-delay-200 z-4 flex flex-col justify-center items-center w-350px h-350px xl:w-400px xl:h-400px mx--16.6 xl:mx--19" style="background-image: url(/assets/home/home-puzzle-purple.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
						<div class="pr-8 pl-7 flex flex-col justify-center items-center w-350px h-350px">
							<p class="text-center c-paper font-size-30px font-600 mb-0 mt-12">20 000+</p>
							<p class="text-center pr-4 c-paper font-size-15px font-400 leading-5 pt-2 uppercase font-700">Проведени<br />терапии</p>
						</div>
					</AnimatedComponent>
					<AnimatedComponent class="important-delay-400 z-3 flex flex-col justify-center items-center w-350px h-350px xl:w-400px xl:h-400px mx--16.6 xl:mx--19" style="background-image: url(/assets/home/home-puzzle-blue.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
						<div class="pr-11 pl-6 flex flex-col justify-center items-center w-350px h-350px">
							<p class="text-center c-paper font-size-45px font-600 mb-0 mt-12">1</p>
							<p class="text-center c-paper font-size-15px font-400 leading-5 pt-2 uppercase font-700">Месец след<br />началото<br />видим напредък</p>
						</div>
					</AnimatedComponent>
					<AnimatedComponent class="important-delay-600 z-2 flex flex-col justify-center items-center w-350px h-350px xl:w-400px xl:h-400px mx--16.6 xl:mx--19" style="background-image: url(/assets/home/home-puzzle-pink.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
						<div class="pr-9 pl-6 flex flex-col justify-center items-center w-350px h-350px">
							<p class="text-center c-paper font-size-45px font-600 mb-0 mt-12">700+</p>
							<p class="text-center c-paper font-size-15px font-400 leading-5 pt-2 uppercase font-700">Подкрепени<br />родители</p>
						</div>
					</AnimatedComponent>
				</div>

				<div class="lg:hidden flex flex-col justify-center items-center mt--10 pr-2 sm:mr-0">
					<div class="flex">
						<AnimatedComponent class="z-3 flex flex-col justify-center items-center w-250px h-250px mt--11.5" style="background-image: url(/assets/home/home-puzzle-blue2.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
							<div class="flex flex-col justify-center items-start w-250px h-250px mt-6">
								<p class="text-left c-paper font-size-30px font-600 mb-0 pl-13">20+</p>
								<p class="text-left c-paper font-size-11px font-600 uppercase leading-4 pl-13" style="font-family:'Roboto Condensed', sans-serif;">Години<br />опит</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="important-delay-200 z-2 flex flex-col justify-center items-center w-250px h-250px  ml--23.75" style="background-image: url(/assets/home/home-puzzle-purple.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
							<div class="flex flex-col justify-center items-end w-250px h-250px mb-16">
								<p class="text-right c-paper font-size-30px font-600 mb-0 mt-8 pr-17">20 000+</p>
								<p class="text-right c-paper font-size-11px font-600 uppercase leading-4 pr-17" style="font-family:'Roboto Condensed', sans-serif;">Проведени<br />терапии</p>
							</div>
						</AnimatedComponent>
					</div>
					<div class="flex">
						<AnimatedComponent class="important-delay-400 z-4 flex flex-col justify-center items-center w-250px h-250px my--24" style="background-image: url(/assets/home/home-puzzle-orange.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
							<div class="flex flex-col justify-center items-end w-250px h-250px mt-5">
								<p class="text-right c-paper font-size-30px font-600 mb-0 mt-8 pr-17">1</p>
								<p class="text-right c-paper font-size-11px font-600 uppercase leading-4 pr-17" style="font-family:'Roboto Condensed', sans-serif;">Месец<br />след началото<br />видим напредък</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="important-delay-600 z-1 flex flex-col justify-center items-center w-250px h-250px my--24 ml--23.75" style="background-image: url(/assets/home/home-puzzle-pink.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
							<div class="flex flex-col justify-center items-end w-250px h-250px mt-2">
								<p class="text-right c-paper font-size-30px font-600 mb-0 mt-8 pr-17">700+</p>
								<p class="text-right c-paper font-size-11px font-600 uppercase leading-4 pr-17" style="font-family:'Roboto Condensed', sans-serif;">Подкрепени<br />родители</p>
							</div>
						</AnimatedComponent>
					</div>
				</div>
			</div>

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
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<div class="w-full py-20px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-2">
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
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<div class="w-full pb-20px pt-10px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-2">
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
								<div class="">
									<img class="w-full h-full" src="/assets/testing-image.jpg" alt="" />
								</div>
								<div class="w-full pb-20px pt-10px text-center">
									<div class="flex flex-col gap-1">
										<p class="text-left mt-2">
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

			<div class="mt-20 md:mt-40 gap-12 pb-8 md:pb-20 pt-50px xl:px-30 px-20px bg-brand-blue -mx-20px">
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

			<section class="xl:px-30 mx-20px pt-40 md:pt-50">
				<H3Pink title="Какво следва, ако не предприемем действие" />
				<AnimatedComponent class="md:px-10">
					<h4 class="font-600 text-left pb-2 md:mx-0 mx-10px mt-0">Поведенчески нарушения при деца с аутизъм</h4>
					<div class="flex flex-col justify-center items-center md:mx-0 mx-10px">
						<GoogleMapIframe />
						<div class="flex justify-center mt-5 md:ml-0 ml--10">
							<img class="w-20 h-20 ml-0 mr--10 z-2" src="/assets/sense-logo-100px.webp" />
							<p class="flex py-4 md:px-11 px-14 b-rd-12px bg-brand-purple c-paper font-600 md:font-size-22px font-size-18px w-full leading-8">гр. София, кв. Карпузица,<br />бул. "Никола Петков" 95А</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="pink" />

			<section class="xl:px-30 mx-20px">
				<H3Pink title="Какво да правим, ако нямаме достъп до терапевт" />
				<div class="mx-auto">
					<AnimatedComponent class="flex flex-col lg:flex-row max-w-full relative overflow-hidden mx-auto px-5" style="flex: 0 0 auto;">
						<div class="flex flex-col lg:flex-row justify-center items-center md:gap-10">
							<div class="w-full lg:w-1/2">
								<img class="w-full h-auto" src="/assets/testing-image.jpg" alt="" />
							</div>
							<div class="w-full lg:w-1/2 py-20px text-center">
								<div class="flex flex-col gap-1">
									<p class="mt-2 md:mt-5">
										Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
									</p>
									<p class="mt-1">
										Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие. Родителите, учителите и медицинските специалисти могат да забележат характерни прояви, като затруднения в социалното взаимодействие, повтарящи се движения или специфични интереси различни от тези на типичното развитие.
									</p>
								</div>
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="pb-20 md:pb-40 xl:px-30 xl:px-25 md:ml-5 mx-20px">
				<AnimatedComponent>
					<h3
						class="text-center md:px-10 uppercase leading-[1.4] font-bold inline-block"
						style={{
							'background-image': 'linear-gradient(to right,rgb(253, 172, 245),rgb(223, 25, 74)',
							'-webkit-background-clip': 'text',
							'-webkit-text-fill-color': 'transparent',
							display: 'inline-block',
							'padding-bottom': '0.2em',
						}}
					>
						Създаваме среда, в която семействата се яувстват сигурни, разбрани и подкрепени
					</h3>
				</AnimatedComponent>
				<PuzzleButton />
			</section>
		</>
	);
}
