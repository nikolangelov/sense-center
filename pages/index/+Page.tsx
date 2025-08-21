import "solid-slider/slider.css";
import { AuthorContainer, GoogleStarReview, PuzzleIconReview, ReviewSlider, ReviewSlider2, StarReview } from '../../components/ReviewSlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { H2Echo, H3Blue, H3Pink, H3SolidPink } from '../../components/H2WithImage';
import { ServiceContaner } from '../../components/ServiceContainer';
import { ContainerBox, ContainerSlider, ReviewPuzzlePiece } from "../../components/ContainerSlider";
import { PuzzleButton, PuzzleButton2 } from "../../components/PuzzleButton";
import { GallerySlider3 } from "../../components/GallerySlider";
import { DoodleDecor } from "../../components/BackgroundDecor";
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { Collapse } from "../../components/FAQ";
import { VideoHero } from "../../components/HeroVideo";
import { createSignal } from 'solid-js';
import { WorkProcess } from "../../components/WorkProcess";

const [isPlaying, setIsPlaying] = createSignal(false);

function SingleCollapse() {
	return (
		<>
			<div class="flex flex-col gap-5 md-gap-2 cursor-pointer max-w-1200px mx-auto">
				<Collapse title="1. Могат ли родителите да присъстват по време на терапията?" desc="В Sense дневен център за деца с увреждания София вярваме, че за да бъде терапията наистина ефективна, е важно детето да бъде само с терапевта по време на сесиите.">
					<div class="mt-4">
						Присъствието на родител може да разсейва детето и да му попречи да се отпусне и ангажира пълноценно. Понякога то се държи по различен начин, търси защита или подкрепа, вместо да изгради самостоятелност и доверие към терапевта.
					</div>
					<div class="mt-4">
						Също така, когато родителят не присъства, терапевтът по-лесно изгражда авторитет и ефективна връзка с детето.
						Разбира се, родителите са важна част от целия процес. Затова поддържаме редовна комуникация и споделяме всичко значимо около напредъка и нуждите на детето.
					</div>
				</Collapse>

				<Collapse title="2. Какво включва първоначалната оценка на детето?" desc="Първоначалната оценка обикновено включва:">
					<div class="mt-4">
						<ul class="ml-5">
							<li class="">
								Разговор с родителите за развитието на детето (медицинска история, реч, език, здравословно състояние, семейна среда).
							</li>
							<li class="">
								Наблюдение на поведението на детето по време на игра и разговор.
							</li>
							<li class="">
								Оценка на артикулацията, разбирането, изразяването, социалната комуникация и когнитивните умения.
							</li>
							<li class="">
								Използване на специализирани методи, за определяне нивото на развитие на речта и езика.
							</li>
						</ul>
					</div>
				</Collapse>

				<Collapse title="3. Трябва ли да нося нещо конкретно за първичната оценка?" desc="В случай, че имате налична медицинска документация от предходни прегледи - епикризи, неврологични изследвания – ЕЕГ, ЯМР, слухови тестове, психиатрични, психологични и логопедични оценки." />

				<Collapse title="4. Каква информация трябва да предоставя по време на първичната оценка на детето?" desc="По време на първична оценка на актуалното състояние е необходимо да споделите:">
					<div class="mt-4">
						<ul class="ml-5">
							<li class="">
								Медицинска документация (ако е поставена диагноза или детето е преминало през консултации с други специалисти);
							</li>
							<li class="">
								Предистория и допълнителна информация относно симптомите и актуалното състояние на детето;
							</li>
							<li class="">
								Вашите очаквания – споделете своите цели и очаквания за съвместната ни работа и развитието на детето.
							</li>
						</ul>
					</div>
					<div class="mt-4">Тази информация ще ни помогне да създадем персонализиран и по-ефективен план за терапия.</div>
				</Collapse>

				<Collapse title="5. Какво се случва, ако детето не иска да съдейства или проявява съпротива по време на терапия?" desc="Случва се понякога децата да се чувстват претоварени, несигурни или просто да имат нужда от повече време за адаптация. В такива моменти подхождаме с търпение и разбиране като променяме дейността или правим пауза." >
					<div class="mt-4">
						Включваме игрови подходи и се стремим да направим средата максимално приятна. Ако нежеланието е постоянно, провеждаме екипни срещи, за да изградим нова стратегия за работа с детето.
					</div>
				</Collapse>

				<Collapse title="6. Как да се справим с емоционални изблици у дома и има ли връзка с терапията?" desc="Емоционалните изблици често са част от процеса на адаптация и развитие. По време на сесиите научаваме детето да разпознава и контролира своите емоции чрез игрови техники и упражнения. Важно е родителите също да прилагат този подход у дома с помощта на нашите препоръки." />

				<Collapse title="7. Колко често се провеждат терапевтичните сесии и колко дълго продължават?" desc="Всяка терапевтична сесия е с продължителност 40 минути. Честотата и вида на сесиите се определя след провеждането на първична оценка и спрямо индивидуалните нужди на всяко дете. Препоръчителният срок за посещения е средно 6 месеца." />

				<Collapse title="8. Как се проследява прогресът на детето?" desc="Проследяването на развитието е ключова част от работата ни. Регулярно провеждаме вътрешни оценки и обсъждаме напредъка на срещите с екипа. Всеки месец предоставяме подробна обратна връзка на родителите и при нужда коригираме терапевтичния план." />

				<Collapse title="9. Предлагате ли консултации и подкрепа за родителите?" desc="Да, активно включваме родителите в терапевтичния процес чрез индивидуални консултации. Те са възможност да обсъдим напредъка на детето, да споделим полезни стратегии за подкрепа у дома и да отговорим на въпросите, които вълнуват семейството. Вярваме, че най-добрите резултати идват, когато работим в партньорство с родителите." />

				<Collapse title="10. Какви специалисти работят в центъра за детско развитие?" desc="В Sense Center работят висококвалифицирани експерти в различни области - психолози, логопеди, кинезитерапевти, социални педагози, ерготерапевти и нутриционисти." />

				<Collapse title="11. С какви възрастови групи работите?" desc="Центърът за деца с нарушения в развитието Sense работи с деца и младежи на възраст от 18 месеца до 18 години, като ги разделяме на три основни групи:">
					<div class="mt-4">
						<ul class="ml-5">
							<li class="">
								Малки деца (18 месеца – 6 години) – Фокусираме се върху ранното развитие на социални и емоционални умения, като предлагаме персонализирани подходи за деца в норма и деца със специални образователни потребности (СОП).
							</li>
							<li class="">
								Предучилищна и начална училищна възраст (6 – 12 години) – Помагаме за развитието на когнитивни умения и успешната интеграция в училищна и социална среда.
							</li>
							<li class="">
								Тийнейджъри (12 – 18 години) – Подкрепяме развитието на личността, социалните връзки и преодоляването на трудности в училище, семейството и обществото.
							</li>
						</ul>
					</div>
					<div class="mt-4">Освен това, предлагаме психологическа подкрепа за родителите, за да подпомогнем тяхната роля и да им предоставим подходящи насоки, с които да подкрепят децата си независимо дали са със СОП или не. Това включва консултации и стратегии за справяне с различни трудности, с които може да се сблъскат като родители.</div>
				</Collapse>

				<Collapse title="12. Могат ли родителите да присъстват по време на терапията?" desc="В Sense дневен център за деца с увреждания препоръчваме родителите да не присъстват на терапевтичните сесии, за да гарантираме ефективността на процеса.">
					<div class="mt-4">Присъствието на родител може да отклони фокуса на детето, особено при по-малките, които често стават зависими от сигурността на родителската фигура. Това може да ограничи тяхната самостоятелност и активност в терапията. Също така, когато родителят е в стаята, за терапевта е по-трудно да изгради авторитет, което е важно за успешно взаимодействие с детето.</div>
					<div class="mt-4">Родителите обаче играят ключова роля извън терапевтичните сесии. Затова редовно ги информираме за напредъка на детето и подходите, които могат да приложат у дома, за да подкрепят процеса. Този баланс между терапевтичната работа и родителската подкрепа е ключов за успеха.</div>
				</Collapse>

				<Collapse title="13. Предлагате ли консултации за хранене?" desc="Не предлагаме консултации за хранене в традиционния смисъл - с диетолог или специалист по храненето.  В рамките на психологическата ни работа, се фокусираме върху теми, свързани с трудности при храненето на децата.">
					<div class="mt-4">В нашия център за деца с нарушения в развитието се стремим чрез психологическа подкрепа да разберем какви емоционални, социални или когнитивни фактори могат да влияят на хранителните навици и да предложим стратегии за преодоляването им, с фокус върху емоционалното благополучие на детето.</div>
				</Collapse>
			</div>
		</>
	);
}

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
				<VideoHero
					youtubeId="R1kPm_q7vCc"
					gifPreview="/assets/home/сенс-център-терапии-терапевти.mp4"
					gifPreviewMobile="/assets/home/сенс-център-терапии-терапевти-мобилно.mp4"
					isPlaying={isPlaying()}
					onPlay={() => setIsPlaying(true)}
				/>

				<div class="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-end pb-18 md:pb-10 text-center px-4 text-white">
					<div class={`absolute ${isPlaying() ? 'top-32% sm:top-95% lg:top-100% mt-30' : 'top-46% md:top-60% mt-0'}`}>
						<div>
							<h1
								class={`mb-4 md:mb-7 transition-colors duration-500 ${isPlaying()
									? 'text-brand'
									: 'text-white'
									}`}
							>
								Sense Center развива<br />потенциала на Вашето дете
							</h1>
						</div>

						<div
							class={`important-delay-300 font-400 text-center mb-0 font-size-4.5 lg-font-size-7 sm-px-0 px-12 md:leading-7 leading-5.5 transition-colors duration-500 ${isPlaying()
								? 'text-brand'
								: 'text-white'
								}`}
						>
							Център за деца с нарушения<br />в развитието Sense
						</div>

						<div
							class={`important-delay-600 mt-8 md:mt-10 relative text-center ${isPlaying() ? 'md:pb-30' : 'md:pb-0'
								}`}
						>
							<div class="flex md:flex-row flex-col justify-center items-center gap-3 pointer-events-auto">
								<PuzzleButton />
								<PuzzleButton2
									style2=" font-weight:500; font-size:14px !important;"
									img="/assets/sense-orange-puzzle-piece.svg"
									href=""
									text="Вижте успешни истории"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<AnimatedComponent class={`xl:px-30 mx-20px pt-30 md:pt-40 ${isPlaying() ? 'mt-20 sm:mt-90 md:mt-110 lg:mt-120' : 'mt-0'}`}>
				<H3Pink variant="h2" title="Над 20 000 проведени терапии в Sense център за детско развитие" />
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
									]}
								>
									<ContainerBox
										link=""
										style="background-color:#088F9D;"
										title="Опитни специалисти, които разбират децата"
										text="Експертен подход с любов и грижа към децата."
										img="/assets/home/дневен-център-за-деца-и-младежи-с-увреждания.webp"
										alt="Терапевт работи с дете по време на терапевтична сесия в специализиран център за детско развитие."
									/>
									<ContainerBox
										link=""
										style="background-color:#088F9D;"
										title="Широк спектър от услуги на едно място"
										text="Цялостна грижа за Вашето дете на едно място, за да не губите време в различни посещения."
										img="/assets/home/дневен-център-за-деца-с-увреждания.webp"
										alt="Терапевт провежда терапия с дете в център за деца с нарушения в развитието и аутизъм."
									/>
									<ContainerBox
										link=""
										style="background-color:#088F9D;"
										title="Гъвкав график и възможност за полудневно обучение"
										text="Предлагаме опция за полудневна форма на обучение, която съчетава игра и учене."
										img="/assets/home/център-за-деца-с-нарушения-в-развитието.webp"
										alt="Терапевти наблюдават развитието на дете в център за деца с увреждания и аутистичен спектър."
									/>
									<ContainerBox
										link=""
										style="background-color:#088F9D;"
										title="Подкрепа за родители през целия процес"
										text="Вървим заедно към прогреса с разбиране, насоки и постоянна комуникация."
										img="/assets/барбер-шоп.webp"
										alt=""
									/>
								</ContainerSlider>
							</div>

							<div class="hidden xl:flex mx-auto gap-4 w-full">
								<div class="w-1/4">
									<ContainerBox
										link=""
										style="background-color:#088F9D;"
										title="Опитни специалисти, които разбират децата"
										text="Експертен подход с любов и грижа към децата."
										img="/assets/home/дневен-център-за-деца-и-младежи-с-увреждания.webp"
										alt="Терапевт работи с дете по време на терапевтична сесия в специализиран център за детско развитие."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										link=""
										style="background-color:#088F9D;"
										title="Широк спектър от услуги на едно място"
										text="Цялостна грижа за Вашето дете на едно място, за да не губите време в различни посещения."
										img="/assets/home/дневен-център-за-деца-с-увреждания.webp"
										alt="Терапевт провежда терапия с дете в център за деца с нарушения в развитието и аутизъм."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										link=""
										style="background-color:#088F9D;"
										title="Гъвкав график и възможност за полудневно обучение"
										text="Предлагаме опция за полудневна форма на обучение, която съчетава игра и учене."
										img="/assets/home/център-за-деца-с-нарушения-в-развитието.webp"
										alt="Терапевти наблюдават развитието на дете в център за деца с увреждания и аутистичен спектър."
									/>
								</div>
								<div class="w-1/4">
									<ContainerBox
										link=""
										style="background-color:#088F9D;"
										title="Подкрепа за родители през целия процес"
										text="Вървим заедно към прогреса с разбиране, насоки и постоянна комуникация."
										img="/assets/барбер-шоп.webp"
										alt=""
									/>
								</div>
							</div>
						</AnimatedComponent>
					</section>
				</div>
			</div>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px pb-10">
				<AnimatedComponent>
					<H3SolidPink variant="h2" title="Истории от нашите семейства" />
				</AnimatedComponent>

				<div class="">
					<div class="">
						<AnimatedComponent>
							<ReviewSlider
								variant="dots3"
								reviews={[
									{ name: "1" },
									{ name: "2" },
									{ name: "3" },
									{ name: "4" },
								]}>
								<StarReview
									reviewText={<>Сенс Център е най-доброто място в София за работа с деца!<br />
										Когато синът ми беше на 3 години и половина, той не говореше. Започна да посещава Сенс Център още от самото му създаване и само след няколко месеца проговори! Опасенията ми се оказаха неоснователни, а днес той е едно прекрасно, лъчезарно и уверено дете - рецитира песнички и стихотворения с радост!<br />
										Сестра му също посещава центъра и ефектът върху тях е невероятен. Връзката им се заздрави, станаха по-емпатични един към друг и по-уверени в себе си.<br />
										Препоръчвам с цялото си сърце - място, което променя животи!
									</>}
									name="Alexander Soklev"
									hrefGoogleReview="https://maps.app.goo.gl/8u8YezkPQ8491CrdA"
								/>
								<StarReview
									reviewText={<>Двете ни дъщери (6 и 4 годишни) ходят на терапия в центъра вече повече от година и виждаме резултати от отдавна: отношенията им са видимо по-добри, разбират се без агресия, разрешават сами споровете си мирно, намират решения, които са добри и за двете, където преди се викаше, пищеше, скубеше и удряше за всяко едно нещо. Сега си организират заедно игри и отстъпват една на друга, когато някой не е съгласен с правилата.<br />
										Ще продължим редовно да посещавам Сенс център и да го препоръчваме на приятели и познати!
									</>}
									name="Petya Kirisheva"
									hrefGoogleReview="https://maps.app.goo.gl/KV1e8BSgcMhytUpn8"
								/>
								<StarReview
									reviewText={<>Момченцето ни имаше проблем с проговарянето, за няколко месеца работа със специалистите в центъра показа страхотен напредък. Изключително доволни сме със съпруга ми от резултатите, отношението към детето и подхода.
									</>}
									name="Silvya Manikatova"
									hrefGoogleReview="https://maps.app.goo.gl/KmxyBapgNRYeyQm49"
								/>
								<StarReview
									reviewText={<>Синът ни посещава центъра от почти половин година и за този период наблюдаваме изключителен напредък по отношение на когнитивните му умения.<br />
										Започна да проявява интерес към много неща у дома и значително подобри очния контакт.<br />
										Много сме благодарни на целия екип за разбирането и позитивизма, с който се отнасят към децата и техните родители.<br />
										Чувстваме се подкрепени! ❤️
									</>}
									name="Estel Dimova"
									hrefGoogleReview="https://maps.app.goo.gl/ZHLVaJygU4ryva9T6"
								/>
								<StarReview
									reviewText={<>Детето ми посещава центъра от около 9 месеца. За този период има значителен напредък и посещава центъра с голямо желание. Обогати речника и уменията си за общуване, благодарение на екипа от професионалисти работещи с него. Изключително добронамерно отношение към децата и родителите.
									</>}
									name="Евелина Стоянова"
									hrefGoogleReview="https://maps.app.goo.gl/hpinuPpQKdhYPgnc8"
								/>
							</ReviewSlider>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			{/* <DoodleDecor variant="pink" />

			<section>
				<AnimatedComponent class="xl:px-30 mx-auto pt-10">
					<H3Blue variant="h2" title="Видим напредък в развитието след 9 месеца" />
				</AnimatedComponent>
			</section>

			{/* <div>
				<AnimatedComponent class="md:mt--20 mb-10 mx-20px md:mx-0">
					<VideoPlayer
						youtubeId="PUYw2e-X-Vw"
						thumbnail="/assets/Fulfilling-Vows.webp"
					/>
				</AnimatedComponent>
			</div> */}

			<DoodleDecor variant="blue" />

			<section class="gap-12 pb-8 md:pb-20 xl:px-30 mx-20px md:px-20px">
				<H3Pink variant="h2" title="Развитие и интеграция за всяко дете" />
				<div class="md:pb-0 pb-10">
					<AnimatedComponent class="max-w-1500px flex lg:flex-row flex-col md:mx-auto gap-5">
						<div class="lg:w-1/3">
							<PuzzleIconReview
								style="background-color:#742C8F;"
								puzzleclass="c-brand w-6 mr-2"
								img="/assets/home/терапевтичен-център-за-деца.webp"
								alt="Терапевт провежда терапия с дете в терапевтичен център за деца."
								href="/za-nas/blago/"
								title="Развиваме пълния потенциал на детето"
								desc="Всяко дете притежава уникални способности, които могат да процъфтят с вярната подкрепа. Помагаме на детето Ви да говори по-ясно, да се движи по-сигурно и да се чувства по-уверено всеки ден."
							/>
						</div>
						<div class="lg:w-1/3">
							<PuzzleIconReview
								style="background-color:#E11172;"
								puzzleclass="c-brand-purple w-6 mr-2"
								img="/assets/home/дневен-център-за-подкрепа-за-деца-и-младежи-с-увреждания.webp"
								alt="Терапевт провежда терапия с дете в дневен център за подкрепа за деца и младежи с увреждания."
								href="/za-nas/blago/"
								title="Връщаме надеждата с ясна посока и видими резултати"
								desc="Всяко семейство получава ясен план с конкретни цели и редовна обратна връзка. Така наблюдавате реалния напредък на детето и научавате какво предстои в следващите стъпки."
							/>
						</div>
						<div class="lg:w-1/3">
							<PuzzleIconReview
								style="background-color:#088F9D;"
								puzzleclass="c-brand-orange w-6 mr-2"
								img="/assets/home/дневен-център-за-деца-с-увреждания-софия.webp"
								alt="Терапевт провежда терапия с дете в център за деца с увреждания в София."
								href="/za-nas/blago/"
								title="Подготвяме детето за пълноценен живот в обществото"
								desc="Работим върху социалните умения, за да подготвим детето за успешно включване в обществото. Нашата цел е всяко дете да намери своето място и да живее пълноценно."
							/>
						</div>
					</AnimatedComponent>
				</div>
			</section>

			<section>
				<AnimatedComponent class="pt-30 md:pt-0">
					<H2Echo
						maintitle={
							<>
								Екипът зад Sense център<br />за деца с нарушения в развитието
							</>
						}
						title="развитието"
						bgImage="/assets/home/екипът-зад-sense-center.webp"
						bgSize="300%"
						bgPosition="right 40% top 90%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pb-30 md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/home/екипът-зад-sense-center.webp" alt="Екипът зад sense център за деца с нарушения в развитието." class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>
					<AnimatedComponent class="flex flex-col items-center gap-1 relative mb-2 md:hidden">
						<h2 class="text-transparent bg-clip-text bg-[url(/assets/home/екипът-зад-sense-center.webp)] bg-cover bg-center opacity-10 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
							развитието
						</h2>
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt--2">
								В Sense Center дневен център за деца и младежи с увреждания вярваме, че всяко дете заслужава да бъде разбрано, обичано и подкрепено. Нашата мисия е да помагаме на децата да разкрият пълния си потенциал, като вървим ръка за ръка с родителите по този път.
							</p>
							<p>
								Комбинацията от терапевтични методи и персонализирани програми, които предлагаме, рядко се среща на едно място, което прави нашия подход толкова ефективен.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<div class="max-w-1500px mx-auto pt-20 md:pt-10 pb-20 md:pb-0">
				<div class="hidden lg:flex flex-row justify-center items-center md:px-20 px-10 ml--20">
					<AnimatedComponent class="z-5 flex flex-col justify-center items-center w-350px h-350px xl:w-400px xl:h-400px mr--16.6 xl:mr--19" style="background-image: url(/assets/home/home-puzzle-orange.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
						<div class="pr-9 pl-6 flex flex-col justify-center items-center w-350px h-350px">
							<p class="text-center c-paper font-size-45px font-600 mb-0 mt-12">20+</p>
							<p class="text-center c-paper font-size-15px font-400 leading-5 pt-2 uppercase font-700">вида<br />терапии</p>
						</div>
					</AnimatedComponent>
					<AnimatedComponent class="important-delay-200 z-4 flex flex-col justify-center items-center w-350px h-350px xl:w-400px xl:h-400px mx--16.6 xl:mx--19" style="background-image: url(/assets/home/home-puzzle-purple.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
						<div class="pr-8 pl-7 flex flex-col justify-center items-center w-350px h-350px">
							<p class="text-center c-paper font-size-30px font-600 mb-0 mt-12">20 000+</p>
							<p class="text-center pr-4 c-paper font-size-15px font-400 leading-5 pt-2 uppercase font-700">проведени<br />терапии</p>
						</div>
					</AnimatedComponent>
					<AnimatedComponent class="important-delay-400 z-3 flex flex-col justify-center items-center w-350px h-350px xl:w-400px xl:h-400px mx--16.6 xl:mx--19" style="background-image: url(/assets/home/home-puzzle-blue.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
						<div class="pr-11 pl-6 flex flex-col justify-center items-center w-350px h-350px">
							<p class="text-center c-paper font-size-45px font-600 mb-0 mt-12">30+</p>
							<p class="text-center c-paper font-size-15px font-400 leading-5 pt-2 uppercase font-700">специализирани<br />терапевти</p>
						</div>
					</AnimatedComponent>
					<AnimatedComponent class="important-delay-600 z-2 flex flex-col justify-center items-center w-350px h-350px xl:w-400px xl:h-400px mx--16.6 xl:mx--19" style="background-image: url(/assets/home/home-puzzle-pink.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
						<div class="pr-9 pl-6 flex flex-col justify-center items-center w-350px h-350px">
							<p class="text-center c-paper font-size-45px font-600 mb-0 mt-12">700+</p>
							<p class="text-center c-paper font-size-15px font-400 leading-5 pt-2 uppercase font-700">подкрепени<br />родители</p>
						</div>
					</AnimatedComponent>
				</div>

				<div class="lg:hidden flex flex-col justify-center items-center mt--10 pr-2 sm:mr-0">
					<div class="flex">
						<AnimatedComponent class="z-3 flex flex-col justify-center items-center w-250px h-250px mt--11.5" style="background-image: url(/assets/home/home-puzzle-blue2.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
							<div class="flex flex-col justify-center items-start w-250px h-250px mt-6">
								<p class="text-left c-paper font-size-30px font-600 mb-0 pl-13">20+</p>
								<p class="text-left c-paper font-size-11px font-600 uppercase leading-4 pl-13" style="font-family:'Roboto Condensed', sans-serif;">вида<br />терапии</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="important-delay-200 z-2 flex flex-col justify-center items-center w-250px h-250px  ml--23.75" style="background-image: url(/assets/home/home-puzzle-purple.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
							<div class="flex flex-col justify-center items-end w-250px h-250px mb-16">
								<p class="text-right c-paper font-size-30px font-600 mb-0 mt-8 pr-17">20 000+</p>
								<p class="text-right c-paper font-size-11px font-600 uppercase leading-4 pr-17" style="font-family:'Roboto Condensed', sans-serif;">проведени<br />терапии</p>
							</div>
						</AnimatedComponent>
					</div>
					<div class="flex">
						<AnimatedComponent class="important-delay-400 z-4 flex flex-col justify-center items-center w-250px h-250px my--24" style="background-image: url(/assets/home/home-puzzle-orange.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
							<div class="flex flex-col justify-center items-end w-250px h-250px mt-5">
								<p class="text-right c-paper font-size-30px font-600 mb-0 mt-8 pr-17">30+</p>
								<p class="text-right c-paper font-size-11px font-600 uppercase leading-4 pr-17" style="font-family:'Roboto Condensed', sans-serif;">Месец<br />специализирани<br />терапевти</p>
							</div>
						</AnimatedComponent>
						<AnimatedComponent class="important-delay-600 z-1 flex flex-col justify-center items-center w-250px h-250px my--24 ml--23.75" style="background-image: url(/assets/home/home-puzzle-pink.svg); background-position: center; background-repeat: no-repeat; background-size: cover;">
							<div class="flex flex-col justify-center items-end w-250px h-250px mt-2">
								<p class="text-right c-paper font-size-30px font-600 mb-0 mt-8 pr-17">700+</p>
								<p class="text-right c-paper font-size-11px font-600 uppercase leading-4 pr-17" style="font-family:'Roboto Condensed', sans-serif;">подкрепени<br />родители</p>
							</div>
						</AnimatedComponent>
					</div>
				</div>
			</div>

			<div class="hidden md:block">
				<DoodleDecor variant="blue" />
			</div>

			<section class="max-w-1500px px-20px mx-auto md:pt-10 pt-15">
				<AnimatedComponent>
					<div class="flex flex-col lg:flex-row justify-center gap-10 xl:gap-20">
						<ServiceContaner
							link=""
							img="/assets/home/мултидисциплинарен-екип.webp"
							alt="Мултидисциплинарен екип в терапевтичен център за деца"
							title="Заедно към напредъка на Вашето дете"
							description={<>
								Нашият екип е съставен от висококвалифицирани специалисти с богат опит в работата с деца със специални образователни потребности и трудности в развитието. Вярваме, че професионализмът, любовта към децата и постоянният стремеж към развитие са в основата на ефективната терапия.
								<p class="text-left font-size-15px leading-7 mt-3">Ключът за успеха е нашата координирана екипна работа. Редовната комуникация и обменът на информация между терапевтите ни позволява да работим в синхрон за постигането на поставените индивидуални цели за всяко дете.</p>
							</>}
						/>

						<div class="md:hidden block">
							<DoodleDecor variant="pink" />
						</div>

						<ServiceContaner
							link=""
							img="/assets/home/емоционална-прегръдка-в-специализиран-детски-център.webp"
							alt="Емоционална прегръдка между терапевт и дете в специализиран детски център"
							title="Обединени от любовта към децата"
							description="В основата на всичко, което правим, стои любовта към децата. Тя ни движи и вдъхновява. Създаваме позитивна и насърчаваща атмосфера, в която с вярната грижа, внимание и търпение, всяко дете да преодолява трудностите и да расте уверено. Място, където с търпение, внимание и подкрепа ще разкрием потенциала на Вашето дете."
						/>

						<div class="md:hidden block">
							<DoodleDecor variant="blue" />
						</div>

						<ServiceContaner
							link=""
							img="/assets/home/терапевтичен-център-за-деца-иновативни-подходи.webp"
							alt="Терапевтичен център за деца с иновативни подходи"
							title="Използваме иновативни подходи"
							description="Всяко дете е различно, затова прилагаме разнообразни методи, съобразени с неговото темпо. Комбинираме игрови, когнитивно-поведенчески, арт и семейно-ориентирани подходи, за да развием социалните умения и да изградим доверие и емоционална връзка. В Sense дневен център за подкрепа за деца и младежи с увреждания постоянно надграждаме знанията си, за да бъдем максимално полезни за децата и техните семейства."
						/>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="pink" />

			<div class="mt-10 md:mt-20 gap-12 pb-8 md:pb-20 pt-50px px-30px xl:px-30 bg-brand-blue -mx-20px">
				<div class="md:px-0px mx-20px md:mx-0px">
					<AnimatedComponent>
						<ReviewSlider
							variant="dots2"
							reviews={[
								{ name: "1" },
								{ name: "2" },
								{ name: "3" },
								{ name: "4" },
								{ name: "5" },
							]}>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a/ACg8ocIZRpc48TQsa_KBvFTmJvD-hLjEWf6LX9fXZ4p1hajsvQRcxg=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Изключително сме благодарни на целият екип от професионалисти в Sense Center!<br />
										Невероятно мили, сърдечни, квалифицирани млади специалисти, които видимо обичат работата си!<br />
										Напредъкът при Теди е осезаем, продължаваме смело напред и сме сигурни, че ще постигнем още положителни резултати!!! ❤️❤️❤️
									</>
								}
								name="Karina Stoqnova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/csZ7TXUnvWMv8ics5"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a-/ALV-UjUjl00McT7Ni_1g9igLTFW01CCTJedMAXxD56UX74POjLYim-_9=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Искам да изкажа огромната си благодарност на терапевтите в Сенс Център. Те са професионалисти с отношение както към децата, така и към родителите. Препоръчвам не само за деца с различни дефицити, но и за деца в норма. Децата имат какво да получат и да надградят в този Център. Оценките им са точни и програмата им е методична, което дава страхотни резултати, особено за деца в аутистичния спектър.<br />
										Продължавайте да бъдете все така всеотдайни в работата си и да сбъдвате и нашите надежди.

									</>
								}
								name="Kalina Ivanova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/ZHpw76QoafV8tsfn7"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a-/ALV-UjXNDMsG5OUiJGd1LM9erKE5VNkTw48t7eeVN5Podk9V-RDbz_UM=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Великолепно отношение и професионализъм! Детето ми се чувства прекрасно там, винаги ходи с огромно желание и отбелязва значителен напредък, благодарение на този млад и отдаден екип.
									</>
								}
								name="Elena Todorova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/qu9agxG4vrrMb94t7"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a/ACg8ocKQnXIYLxIo9C3S859RjZDb6lZM0RbRmB1bxq4GCSL7095iPw=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Екип игграден от професионалисти, събрани със страхотна цел. Обществото ни има нужда от повече хора като вас!
									</>
								}
								name="Борис Томов"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/aJqMG4mjYLMxNR1Q6"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a-/ALV-UjV_F7MmSNrPIbep13Em26a6_XQ6Sqj4HN8CbunMe69L_EkZ5SBS=w72-h72-p-rp-mo-ba2-br100"
								reviewText={
									<>
										Изключително доволна съм от подхода и цялостното отношение към детето ми. Всички терапевти са много позитивни и работят с желание.
									</>
								}
								name="Весела атанасова"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/iCk3N9iTiz14e4SQ7"
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="purple" />

			<section class="pb-40 md:pt-10 xl:px-30 px-10px">
				<H3Blue variant="h2" title="Подпомагаме развитието на всяко дете" />
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 w-full">
						<div class="flex flex-col gap-2">
							<img src="/assets/home/център-за-детско-развитие.webp" alt="Дете на люлка в център за деца с проблеми в развитието" class="w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/home/дете-играе-в-център-за-детско-развитие.webp" alt="Дете с топка в център за деца с проблеми в развитието" class="w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
							<img src="/assets/home/център-за-деца-с-проблеми-в-развитието.webp" alt="Дете по време на терапия в център за деца с проблеми в развитието" class="w-full max-h-150px md:max-h-200px object-cover rounded shadow" />
						</div>
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<div class="py-6 md:py-0">
								<p class="md:mt--5">
									При нас идват деца, които срещат трудности в ежедневието си. Работим с езикови и комуникативни затруднения, дефицит на внимание, сензорни нарушения, емоционални трудности, тревожност, поведенчески проблеми, както и със забавяне в развитието. С вярната специализирана подкрепа всяко дете може да се чувства уверено и разбрано.
								</p>
								<p>
									Нашите терапевти работят с:
								</p>
							</div>
							<div class="mx-auto flex md:flex-row flex-col justify-center items-center gap-2 mb-2 md:mb-2 md:mt-5">
								<div class="flex gap-3">
									<a href="/" class="bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper b-rd-12px px-7 py-3">
										Деца със СОП
									</a>
									<a href="/" class="bg-brand-purple hover:bg-brand-purple-hover transition-all c-paper b-rd-12px px-7 py-3">
										Аутизъм
									</a>
								</div>
								<div class="flex gap-2">
									<a href="/" class="block md:hidden bg-brand-purple hover:bg-brand-purple-hover transition-all c-paper b-rd-12px px-7 py-3">
										ХАДВ
									</a>
									<a href="/" class="bg-brand-blue hover:bg-brand-blue-hover transition-all c-paper b-rd-12px px-7 py-3">
										Синдром на Даун
									</a>
									<a href="/" class="hidden md:block bg-brand-purple hover:bg-brand-purple-hover transition-all c-paper b-rd-12px px-7 py-3">
										ХАДВ
									</a>
								</div>
							</div>
							<PuzzleButton2
								class="important-mt-15px"
								style2="font-weight:500; font-size:14px !important;"
								img="/assets/sense-orange-puzzle-piece.svg"
								href=""
								text="Вижте всички състояния"
							/>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section class="gap-12 md:pb-8 xl:px-30">
				<H3Blue variant="h2" title="Първична оценка" />
			</section>

			<div class="flex flex-col justify-center items-center max-w-1500px mx-auto px-20px xl:px-30">
				<AnimatedComponent class="max-w-1500px px-5 md:px-20 md:py-10 py-5 bg-gradient-to-t from-brand-yellow to-brand b-rd-12px flex flex-col">
					<p class="c-paper mb-1">
						В Sense Center терапевтичен център за деца предлагаме <strong class="font-900">първична оценка</strong> за деца при съмнение за забавяне в развитието.
					</p>
					<p class="c-paper">
						По време на консултацията се извършва обследване на поведението и актуалното състоянието на детето.
					</p>
					<img src="/assets/home/наблюдение-на-дете-с-нарушения-в-развитието.webp" alt="Наблюдение на дете с нарушения в развитието" class="my-5 w-full h-auto object-cover rounded shadow" />
					<p class="c-paper mb-1">
						Оценяват се социалните и комуникативните умения на детето, неговото двигателно развитие, както и общите познавателни способности.
					</p>
					<p class="c-paper">
						Едновременно с това в защитена и безопасна среда родителите са подкрепени да споделят своите наблюдения за поведението на детето в семейната и социалната сфера.
					</p>
					<img src="/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" alt="Семейство на дете с нарушения в развитието" class="mt-5 w-full h-auto object-cover rounded shadow" />
					<p class="c-paper italic font-300 mt-1 op-90%" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
						Препоръчително е да донесете всички налични медицински документи, които могат да бъдат от полза за изясняване на актуалното състояние.</p>
					<div class="pt-10 flex md:flex-row flex-col justify-center items-center gap-2">
						<PuzzleButton />
						<PuzzleButton2
							style2="padding-left:0px !important; font-weight:600; font-size:16px !important;"
							img="/assets/sense-orange-puzzle-piece.svg"
							href=""
							text="+ 359 879 800 013"
						/>
					</div>
				</AnimatedComponent>
			</div>

			<section class="pt-50 md:pt-70">
				<AnimatedComponent class="">
					<H2Echo
						maintitle={
							<>
								Терапия<br />чрез игра
							</>
						}
						title="терапия"
						bgImage="/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp"
						bgSize="300%"
						bgPosition="right 40% top 90%"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp" alt="Терапия чрез игра център за детско развитие" class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>
					<AnimatedComponent class="flex flex-col items-center gap-1 relative mb-2 md:hidden">
						<h2 class="text-transparent bg-clip-text bg-[url(/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp)] bg-cover bg-center opacity-10 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
							терапия
						</h2>
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt--2">
								В нашия терапевтичен център за деца вярваме, че всяко дете носи в себе си потенциал за развитие, увереност и независимост. Създаваме подкрепяща среда, в която то да развива ключови умения за по-лесна адаптация и самостоятелност в ежедневието.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<DoodleDecor variant="blue2" />

			<section class="xl:px-30 mx-20px">
				<h3 class="font-600 text-left pb-2 mt-0 important-font-size-26px important-leading-35px">Разнообразие от терапии</h3>
				<div class="gap-12 md:pt-10 pb-5 md:pb-0 xl:px-30">
					<div class="">
						<ReviewSlider2
							variant="dots0"
							reviews={[
								{ name: "Детски логопед" },
								{ name: "Ерготерапия" },
								{ name: "Звукова стимулация" },
								{ name: "Обучение за концентрация и внимание" },
								{ name: "Тъмна сензорна стая" },
								{ name: "Психомоторика" },
								{ name: "Многофункционална стая" },
							]}
						>
							<AuthorContainer
								href=""
								style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/детски-логопед.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
								name="Детски логопед"
								description="Терапията подобрява разбирането и изпълнението на команди, формирането на самостоятелни изречения и умението за водене на диалог."
							/>
							<AuthorContainer
								href=""
								style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/ерготерапия-деца.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
								name="Ерготерапия"
								description="Ерготерапията подобрява координацията и прецизността на ръцете и пръстите, което е ключово за писане, рисуване и работа с малки предмети."
							/>
							<AuthorContainer
								href=""
								style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/звукова-стимулация.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
								name="Звукова стимулация"
								description="Тя подпомага сензорната и слуховата обработка, намалява тревожността и хиперактивността и стимулира езиковото развитие."
							/>
							<AuthorContainer
								href=""
								style="background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(/assets/umstvena-izostanalost/обучение-концентрация-внимание-деца.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
								name="Обучение за концентрация и внимание"
								description="Помага на детето с фокусирането и запаметяването, като го учи да задържа вниманието си по-дълго и да следва инструкции."
							/>
							<AuthorContainer
								href=""
								style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/testing-image.jpg); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
								name="Тъмна сензорна стая"
								description="Чрез светлинни и звукови стимули подобрява концентрацията, визуалното възприятие и двигателните умения."
							/>
							<AuthorContainer
								href=""
								style="background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/психомоторика.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
								name="Психомоторика"
								description="Подобрява контрола при ходене, бягане и скачане, както и координацията на ръцете и пръстите за по-прецизно писане и рисуване."
							/>
							<AuthorContainer
								href=""
								style="background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url(/assets/sindrom-na-daun/многофункционална-стая.webp); background-position: right 50% bottom 85% !important; background-repeat: no-repeat; background-size: cover;"
								name="Многофункционална стая"
								description="Стимулира имитационни умения, подпомага изпълнението на инструкции, развива фината моторика."
							/>
						</ReviewSlider2>
					</div>
				</div>

				<AnimatedComponent>
					<PuzzleButton2
						style2="font-weight:500; font-size:14px !important;"
						img="/assets/sense-orange-puzzle-piece.svg"
						href=""
						text="Вижте всички състояния"
					/>
					<p class="mt-15">
						Чрез нашите терапевтични сесии децата развиват самостоятелност в ежедневието, укрепват организационните си умения и получават емоционална подкрепа за справяне със своите чувства и страхове.
						Терапията под формата на игра им помага да опознаят и разберат своя вътрешен свят.
					</p>
				</AnimatedComponent>

				<AnimatedComponent class="mx-auto mt-10">
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 md:px-10 py-2 pd:py-4">
						<div class="flex justify-center items-center gap-4">
							<img src="/assets/white-puzzle-piece.svg" class="w-10 h-10" />
							<p class="font-600 c-paper uppercase font-size-17px">С любов към всяко дете</p>
						</div>
						<p class="font-size-15px c-paper mt-2">При нас в Sense Center център за деца с проблеми в развитието всяко дете получава грижата и вниманието, от които се нуждае, за да се чувства обичано и подкрепено.</p>
					</div>
				</AnimatedComponent>
			</section>

			<div class="mt-20 md:mt-30 gap-12 pb-8 md:pb-20 pt-50px px-30px xl:px-30 md:mb-0 mb-10 bg-brand-purple -mx-20px">
				<div class="md:px-20px md:px-0px mx-20px md:mx-0px">
					<AnimatedComponent>
						<ReviewSlider
							variant="dots2"
							reviews={[
								{ name: "1" },
								{ name: "2" },
								{ name: "3" },
								{ name: "4" },
								{ name: "5" },
							]}>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a-/ALV-UjXJQKN7k47RjNKK0ezvflSWCN8F4jSiaY3G3l7kWlLYQCI6R3Iq=w36-h36-p-rp-mo-br100"
								reviewText={
									<>
										Прекрасно място за децата и родителите!<br />
										Sense Center е истинско съкровище! Всичко е организирано професионално, а обстановката е толкова уютна и приветлива. Уверена съм, че детето ми е в най-добрите ръце.
									</>
								}
								name="An-Mari Petkova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/nEvL5m6BfSxpvHNr8"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a-/ALV-UjX3Ggthr2B2L0ZObzEwZUcpviSRIfQ1OWGDHFp-SnQG2zH5dnQ=w36-h36-p-rp-mo-br100"
								reviewText={
									<>
										Уютно и вдъхновяващо място!<br />
										Sense Center е перфектното място за децата ми! Персоналът е изключително внимателен и ангажиран, а програмите са едновременно забавни и образователни. Винаги си тръгваме с усмивка и желание да се върнем отново!
									</>
								}
								name="Viktoriya Nikolova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/z5h7wjaaxazyoB479"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a/ACg8ocLLzynuWWgBOo4FmH8i4k62ibKz8EOv30MXRYEA20n7JMCbIA=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Много сме доволни!<br />
										Детето ни посещава центъра с голямо желание,и това показва с какъв професионализъм се работи с децата.
									</>
								}
								name="Viktoria Simeonova"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/uwNTKmYF8YdnD6Gt6"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a/ACg8ocLHGwZdOxW4-jrVpwo0BtVlGpu_qYNUfT7SiHHJ9W-SaQ56Pw=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Много съм доволна. Детето ми има видими резултати, само за няколко месеца. Благодаря,че Ви има.
									</>
								}
								name="Таня Чавдарова"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/Z3EaDuSZ1qGH4Y1e7"
							/>
							<GoogleStarReview
								img="https://lh3.googleusercontent.com/a/ACg8ocLcx8TcdYWMcDITA7ChFlyoNTnikv8rNI9l2_o67fixlper2g=w72-h72-p-rp-mo-br100"
								reviewText={
									<>
										Прекрасен център и терапевти, изключително сме доволни от напредъка на децата както и отношението към всички нас❤️
									</>
								}
								name="Аделина Петкова"
								stars={5}
								hrefGoogleReview="https://maps.app.goo.gl/y9NFMzAQ1Pwf1tX58"
							/>
						</ReviewSlider>
					</AnimatedComponent>
				</div>
			</div>

			<DoodleDecor variant="pink2" />

			<div class="xl:px-30 mx-20px relative md:pt-10">
				<H3Pink title="Какъв е процесът на работа" />
				<WorkProcess />
			</div>

			<DoodleDecor variant="blue2" />

			<section class="xl:px-30 mx-20px">
				<AnimatedComponent>
					<H3Pink variant="h2" title="Сигурно пространство за всяко дете" />
					<h3 class="text-left pb-2 md:mx-0 mx-10px mt-0 important-font-size-26px important-leading-35px">Къде се намира Sense Center</h3>
					<div class="flex flex-col justify-center items-center md:mx-0 mx-10px">
						<GoogleMapIframe />
						<div class="flex justify-center mt-5 md:ml-0 ml--10">
							<img class="w-20 h-20 ml-0 mr--10 z-2" src="/assets/sense-logo-100px.webp" />
							<p class="flex py-4 md:px-11 px-14 b-rd-12px bg-brand-purple c-paper font-[MYRIADPRO-Semibold] md:font-size-22px font-size-18px w-full leading-8">гр. София, кв. Карпузица,<br />бул. "Никола Петков" 95А</p>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="pink" />

			<section class="xl:px-30 mx-20px pt-5 md:pt-0">
				<AnimatedComponent>
					<h3 class="text-left pb-2">Иновативен терапевтичен център за деца</h3>
				</AnimatedComponent>
				<AnimatedComponent class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div>
						<div class="">
							<img class="w-full h-full" src="/assets/home/вход-към-sense-center.webp" alt="Вход към сенс центъра" />
						</div>
						<div class="w-full pt-20px text-center">
							<div class="">
								<p class="text-left mt-5">
									Sense Center център за детско развитие разполага с модерна и просторна база, разположена на площ от над 700 кв.м.
								</p>
								<p class="text-left">
									Центърът включва 14 специализирани терапевтични кабинета, стая за отдих и социализация, както и удобен паркинг за посетители.
								</p>
							</div>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px">
				<AnimatedComponent>
					<h3 class="text-left pb-2 important-mb-0 important-md:mb-40px">Кабинети за сензорна интеграция</h3>
				</AnimatedComponent>
				<AnimatedComponent class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div>
						<div class="w-full pt-20px text-center">
							<div class="">
								<p class="text-left">
									Нашите специализирани зали за ерготерапия, музикотерапия и звукова стимулация помагат на децата да развият и подобрят сетивните си умения.
								</p>
							</div>
						</div>
						<div class="my-5">
							<GallerySlider3
								imgs={[
									{ src: "/assets/home/кабинети-за-сензорна-интеграция.webp", alt: "Кабинети за сензорна интеграция", text: "Текст за първата снимка" },
									{ src: "/assets/home/кабинет-сензорна-интеграция.webp", alt: "Кабинет сензорна интеграция", text: "Текст за втората снимка" },
									{ src: "/assets/home/кабинет-за-сензорна-интеграция.webp", alt: "Кабинет за сензорна интеграция", text: "Текст за третата снимка" },
								]}
							/>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="pink" />

			<section class="xl:px-30 mx-20px mt-5">
				<AnimatedComponent>
					<h3 class="text-left pb-2 important-mb-0 important-md:mb-40px">Кабинети за когнитивно развитие</h3>
				</AnimatedComponent>
				<AnimatedComponent class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div>
						<div class="w-full pt-20px text-center">
							<div class="">
								<p class="text-left">
									Зали, фокусирани върху развитието на концентрация и внимание, речева и арт терапия, които стимулират детското мислене, творчество и себеизразяването.
								</p>
							</div>
						</div>
						<div class="my-5">
							<GallerySlider3
								imgs={[
									{ src: "/assets/home/кабинети-за-когнитивно-развитие.webp", alt: "Кабинети за когнитивно развитие", text: "Текст за първата снимка" },
									{ src: "/assets/home/кабинет-за-когнитивно-развитие.webp", alt: "Кабинет за когнитивно развитие", text: "Текст за втората снимка" },
								]}
							/>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<DoodleDecor variant="blue" />

			<section class="xl:px-30 mx-20px">
				<AnimatedComponent>
					<h3 class="text-left pb-2 important-mb-0 important-md:mb-40px">Кабинети за двигателно развитие</h3>
				</AnimatedComponent>
				<AnimatedComponent class="max-w-300px sm:w-300px md:w-700px flex flex-col max-w-full relative overflow-hidden mx-auto" style="flex: 0 0 auto;">
					<div>
						<div class="w-full pt-20px text-center">
							<div class="">
								<p class="text-left">
									Специално оборудвани за психомоторика и рефлекторни масажи, които подобряват координацията и двигателните умения.
								</p>
							</div>
						</div>
						<div class="my-5">
							<GallerySlider3
								imgs={[
									{ src: "/assets/home/кабинети-за-двигателно-развитие.webp", alt: "Кабинети за двигателно развитие", text: "Текст за първата снимка" },
									{ src: "/assets/home/кабинет-за-двигателно-развитие.webp", alt: "Кабинет за двигателно развитие", text: "Текст за втората снимка" },
								]}
							/>
						</div>
					</div>
				</AnimatedComponent>
			</section>

			<section>
				<AnimatedComponent class="xl:px-30 mx-20px mx-auto mt-10">
					<div class="flex flex-col justify-center items-start b-rd-12px bg-gradient-to-b from-brand-yellow to-brand px-6 md:px-10 py-2 pd:py-4">
						<div class="flex justify-center items-center gap-4">
							<p class="font-600 c-paper uppercase font-size-17px">Подкрепяща среда</p>
						</div>
						<p class="font-size-15px c-paper mt-2">Всички терапевтични помещения са оборудвани с модерни съоръжения, съобразени с индивидуалните потребности на децата, осигурявайки им сигурна и стимулираща среда за развитие и комфорт.</p>
					</div>
				</AnimatedComponent>
			</section>

			<section>
				<AnimatedComponent class="mt-30">
					<H2Echo
						maintitle={
							<>
								Заедно напред
							</>
						}
						title="напред"
						bgImage="/assets/pink-black-title-bg.webp"
					/>
				</AnimatedComponent>
			</section>

			<section class="md:pb-30 md:pt-10">
				<div class="flex md:flex-row flex-col justify-center items-center md:gap-8 max-w-1500px mx-auto">
					<AnimatedComponent class="md:w-1/2 md:mx-0 mx--20px">
						<img src="/assets/home/заедно-напред-в-център-за-деца-с-нарушения-в-развитието.webp" alt="Заедно напред в център за деца с нарушения в развитието" class="w-full h-auto object-cover shadow important-b-rd-0px important-md:b-rd-12px" />
					</AnimatedComponent>
					<AnimatedComponent class="flex flex-col items-center gap-1 relative mb-2 md:hidden">
						<h2 class="text-transparent bg-clip-text bg-[url(/assets/pink-black-title-bg.webp)] bg-cover bg-center opacity-8 scale-30 md:scale-50" style="background-position: right 0% top 0%;">
							напред
						</h2>
					</AnimatedComponent>

					<div class="relative w-full px-3 md:w-1/2 md:pl-7">
						<AnimatedComponent>
							<p class="mt--2">
								Да потърсите професионална помощ за актуалното състояние на детето си е смело и важно решение. Знаем, че ситуацията е деликатна, а големият поток от информация и съвети Ви обърква.
							</p>
							<p>
								Нашата цел е да направим процеса лесен, ясен и подкрепящ за родителите.
							</p>
						</AnimatedComponent>
					</div>
				</div>
			</section>

			<section>
				<AnimatedComponent class="gap-12 pb-8 md:pb-30 pt-100px md:pt-50px xl:px-30">
					<H3SolidPink title="Първи стъпки" />
					<AnimatedComponent class="px-5 md:px-10 mb-10 relative">
						<BackgroundIcons />
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0"><span class="font-[MYRIADPRO-Bold]">Необходимо е единствено да се свържете с нас.</span> Обадете се или ни пишете в социалните мрежи или директно през сайта.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Често пътят започва с притеснение и несигурност.<br />
								Споделете ни какво Ви притеснява, ще Ви изслушаме внимателно с грижа и разбиране.
							</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">Ще обсъдим актуалното състояние на детето и ще организираме час за първична оценка, на която ще се запознаем с уменията на детето към настоящия момент, неговите дефицити и трудности.</p>
						</div>
						<div class="flex flex-col justify-center items-start">
							<p class="mt-0">На база Вашата заявка за напредъка, който искате да постигнем и нашето наблюдение по време на оценката,  препоръчваме подходящи терапии и честота на посещенията.</p>
						</div>
					</AnimatedComponent>
					<PuzzleButton />
				</AnimatedComponent>
			</section>

			<section class="mx-20px pt-25 md:pt-10">
				<h3 class="xl:px-30 font-600 text-left pb-2 important-font-size-26px important-leading-35px">Как да подпомогнете процеса?</h3>
				<div class="gap-12 md:pt-10 xl:px-30">
					<div class="block md:hidden">
						<ReviewSlider2
							variant="dots0"
							reviews={[
								{ name: "Детски логопед" },
								{ name: "Говорете с нас" },
								{ name: "Бъдете търпеливи" },
							]}
						>
							<div class="bg-brand b-rd-12px px-7 py-5">
								<p class="font-600 c-paper">Бъдете активни</p>
								<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-16px font-size-14px">Вашето внимание, подкрепа, игри и задачи вкъщи правят чудеса. Когато работим заедно като екип, децата усещат сигурност и се отпускат по-лесно.</p>
							</div>
							<div class="bg-brand-blue b-rd-12px px-7 py-5">
								<p class="font-600 c-paper">Говорете с нас</p>
								<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-16px font-size-14px">Няма дребни, глупави или излишни въпроси. Споделяйте всичко, което усещате и питайте за всичко, което Ви интересува.</p>
							</div>
							<div class="bg-brand-orange b-rd-12px px-7 py-5">
								<p class="font-600 c-paper">Бъдете търпеливи</p>
								<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-16px font-size-14px">Всяко дете има свой ритъм на развитие. Ние го следваме с ясна посока, без натиск. Доверете се на процеса и наблюдавайте развитието.</p>
							</div>
						</ReviewSlider2>
					</div>
					<div class="hidden md:flex gap-3 xl:gap-5 max-w-1400px mx-auto">
						<div class="bg-brand b-rd-12px px-7 py-5 w-1/3">
							<p class="font-600 c-paper">Бъдете активни</p>
							<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-16px font-size-14px">Вашето внимание, подкрепа, игри и задачи вкъщи правят чудеса. Когато работим заедно като екип, децата усещат сигурност и се отпускат по-лесно.</p>
						</div>
						<div class="bg-brand-blue b-rd-12px px-7 py-5 w-1/3">
							<p class="font-600 c-paper">Говорете с нас</p>
							<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-16px font-size-14px">Няма дребни, глупави или излишни въпроси. Споделяйте всичко, което усещате и питайте за всичко, което Ви интересува.</p>
						</div>
						<div class="bg-brand-orange b-rd-12px px-7 py-5 w-1/3">
							<p class="font-600 c-paper">Бъдете търпеливи</p>
							<p class="font-300 c-paper md:leading-7 leading-6.3 md:font-size-16px font-size-14px">Всяко дете има свой ритъм на развитие. Ние го следваме с ясна посока, без натиск. Доверете се на процеса и наблюдавайте развитието.</p>
						</div>
					</div>
				</div>
			</section>

			<DoodleDecor variant="purple" />

			<section class="xl:px-30 mx-20px pb-50px">
				<H3Blue variant="h2" title="Въпроси и отговори" />
				<SingleCollapse />
			</section>

			<DoodleDecor variant="pink" />

			<AnimatedComponent class="xl:px-30 mx-20px pt-5 md:pt-0">
				<H3Pink variant="h2" title="Успешни истории" />
			</AnimatedComponent>

			<section class="max-w-1500px md:pt-10 mx-auto pb-50px">
				<div>
					<section class="">
						<AnimatedComponent>
							<ContainerSlider
								reviews={[
									{ name: "Review 1" },
									{ name: "Review 2" },
									{ name: "Review 3" },
									{ name: "Review 4" },
									{ name: "Review 5" },
								]}
							>
								<ReviewPuzzlePiece
									style="background-color:#088F9D;"
									puzzleclass="c-brand-pink w-6 mr-2"
									title="“Без вас бяхме загубени!”"
									desc={<>
										Октомври 2024г. посетихме за първи път Сенс център. Дойдохме, защото имахме нужда от помощ, подкрепа и разбиране, т.като на Синът ни бе поставена диагноза , след което оставени сами да се справяме с този проблем.<br />
										След като синът ни бе видян от Специалистите в Сенс център се оказа,че проблемът му е друг и с правилната терапия, помощ, подкрепа и време , проблемът ще бъде преодолян.<br />
										От този момент до ден днешен той посещава няколко вида терапии съобразени с неговите нужди и възможности- Психомоторика, Речева терапия, Ерготерапия,Звукова стимулация. И за кратко време всеки един от семейството и роднините ни забеляза положителната промяна в комуникацията , поведението и навиците на детето.<br />
										Синът ни посещава с голямо удоволствие терапиите, винаги е усмихнат и щастлив след тях. Харесва много своите терапевти, които винаги са усмихнати, приветливи и насреща за помощ и подкрепа.<br />
										Има още много работа и сме сигурни, че нашето момче ще се справи със своя проблем, защото знаем, че е в сигурни ръце и на най-правилното място.<br />
										Изказваме голяма благодарност към всеки един терапевт от Сенс център за грижите, усърдието , вниманието и доброто отношение към нашето момченце и към нас.<br />
										Без Вас бяхме изгубени.<br />
										БЛАГОДАРИМ ВИ, че ви има!
									</>}
									name="Pavlina Zaharieva"
									condition=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#E11172;"
									puzzleclass="c-brand-blue w-6 mr-2"
									title="“Получих отговори и решения”"
									desc={<>
										Огромни благодарности на екипа от Sense Center за отношението, отдадеността, подкрепата, разбирането и отделеното време за мен и моя син Мартин!<br />
										Не зная дали мога да разкажа кратко преживяно в няколко реда, но твърдя, че тяхната подкрепа и разбиране не съм среща досега. Синът ми е с проблем, който датира от детската градина и не съм спирала да търся помощ от психолози и психиатри. Търсих и се лутах до август 2024 г., когато ненадейно попаднах на безплатна консултация във Фейсбук и се записах на мига. Казах си, че няма нищо лошо да чуя още едно мнение. В деня на записания час отидох с усещането, че нещо приятно предстои и не грешах. Посрещнаха но с радост, внимание и топло отношение. Получих отговори и решения на проблема. Взех решение още на консултацията, че той е в добри ръце и го записах. Всеки път, когато има консултация, синът ми знае кой е денят и няма търпение да се види с терапевта си. Аз след сесията излиза пълен с любов и щастие в очите си. Имаме път още да извървим, но резултат от консултациите започва да се вижда. Вярвам и знам, че е в добри ръце. Препоръчвам Ви Sense Center. Аз избрах тези специалисти и съм щастлива и благодарна.
									</>}
									name="Севдалина Тютюнджиева"
									condition=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#FA7402;"
									puzzleclass="c-brand-purple w-6 mr-2"
									title="“Давате сили на родителите и помагате на децата”"
									desc={<>
										"SENSE centar" отново ни върна усмивките на лицата. Моето дете посещава центърът от 3 месеца,като не се обръщаше на името си, не обръщаше внимание на оклоните,ходеше на пръсти, не изпълняваше команди! За краткото време в което синът ми посещава центъра, благодарение на истинският професияонализъм и специалното отношение на терапевтите към моето дете,виждаме с всяко изминало посещение развитие в детето. Започнал е да изпълнява команди,започнал е да се обръща на името си, започнал е да ходи по-малко на пръсти , определено е по-фокусиран и всичко това се дължи на "SENSE center". Сърдечно Ви благодарим затова, че давате сили на родителите и помагате на децата. "SENSE center" Благодарим Ви!
									</>}
									name="Любомира Ангелова"
									condition=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#FA7402;"
									puzzleclass="c-brand-purple w-6 mr-2"
									title="“Място, което променя животи!”"
									desc={<>
										Сенс Център е най-доброто място в София за работа с деца!<br />
										Когато синът ми беше на 3 години и половина, той не говореше. Започна да посещава Сенс Център още от самото му създаване и само след няколко месеца проговори! Опасенията ми се оказаха неоснователни, а днес той е едно прекрасно, лъчезарно и уверено дете - рецитира песнички и стихотворения с радост!<br />
										Сестра му също посещава центъра и ефектът върху тях е невероятен. Връзката им се заздрави, станаха по-емпатични един към друг и по-уверени в себе си.<br />
										Препоръчвам с цялото си сърце - място, което променя животи!
									</>}
									name="Alexander Soklev"
									condition=""
								/>
								<ReviewPuzzlePiece
									style="background-color:#FA7402;"
									puzzleclass="c-brand-purple w-6 mr-2"
									title="“Много приятна среда за децата”"
									desc={<>
										Мишо посещава детски център SENSE от 6 месеца с голямо желание и нетърпение, за това време започна да говори много повече, да се обръща персонално по име към човека, с който иска да общува , започна да се шегува и да играе повече самостоятелно вкъщи. Другите дечица навън започнаха да му правят впечатление. Впечатленията са за много приятна среда за децата, любезно отношение от терапевтите и чести обратни връзки, свързани с развитието и промените в детето.
									</>}
									name="Gergana Berberova"
									condition=""
								/>
							</ContainerSlider>
						</AnimatedComponent>
						<PuzzleButton2
							class2="important-w-70"
							class="important-mt-30px"
							style2="font-weight:500; font-size:14px !important;"
							img="/assets/sense-orange-puzzle-piece.svg"
							href=""
							text={
								<>
									Вижте всички<br />успешни истории
								</>
							}
						/>
					</section>
				</div>
			</section>
		</>
	);
}
