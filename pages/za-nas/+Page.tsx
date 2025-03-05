import "solid-slider/slider.css";
import { createSignal } from 'solid-js';
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { VideoPlayer } from '../../components/VideoPlayer';
import { GallerySlider } from '../../components/GallerySlider';
import { AnimatedComponent } from '../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../components/AnimateOnViewSlide';
import { ElementInOftenOT, OftenOT } from '../../components/OftenOT';
import MdiBank from '~icons/mdi/bank';
import MdiPhoneClassic from '~icons/mdi/phone-classic';
import RiTimerFill from '~icons/ri/timer-fill';
import MdiProgressClock from '~icons/mdi/progress-clock?width=24px&height=24px';
import RiShining2Line from '~icons/ri/shining-2-line?width=24px&height=24px';
import MdiPlus from '~icons/mdi/plus?width=24px&height=24px';
import MdiRomanNumeral1 from '~icons/mdi/roman-numeral-1?width=24px&height=24px';
import MdiRomanNumeral2 from '~icons/mdi/roman-numeral-2?width=24px&height=24px';
import MdiRomanNumeral3 from '~icons/mdi/roman-numeral-3?width=24px&height=24px';
import MdiRomanNumeral4 from '~icons/mdi/roman-numeral-4?width=24px&height=24px';
import MdiRomanNumeral5 from '~icons/mdi/roman-numeral-5?width=24px&height=24px';
import MdiRomanNumeral6 from '~icons/mdi/roman-numeral-6?width=24px&height=24px';
import MdiRomanNumeral7 from '~icons/mdi/roman-numeral-7?width=24px&height=24px';
import MdiRomanNumeral8 from '~icons/mdi/roman-numeral-8?width=24px&height=24px';
import MdiRomanNumeral9 from '~icons/mdi/roman-numeral-9?width=24px&height=24px';

function SingleCollapse() {
	const [isExpanded1, setIsExpanded1] = createSignal(false);
	const [isExpanded2, setIsExpanded2] = createSignal(false);
	const [isExpanded3, setIsExpanded3] = createSignal(false);
	const [isExpanded4, setIsExpanded4] = createSignal(false);
	const [isExpanded5, setIsExpanded5] = createSignal(false);
	const [isExpanded6, setIsExpanded6] = createSignal(false);
	const [isExpanded7, setIsExpanded7] = createSignal(false);
	const [isExpanded8, setIsExpanded8] = createSignal(false);
	const [isExpanded9, setIsExpanded9] = createSignal(false);
	const [isExpanded10, setIsExpanded10] = createSignal(false);

	return (
		<>
			<div class="flex flex-col gap-6 cursor-pointer max-w-1200px mx-auto px-3">
				<div class="relative b-solid b-1px b-#ffffff7d b-rd-14px overflow-hidden bg-#c0c0c026 z-1 FAQ-wrapper" style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
					<div
						class={`FAQ-button relative z-1 transition-all b-b-solid b-t-solid b-1px b-#292625 duration-600 important-outline-none ${isExpanded1() ? 'b-none bg-transparent' : ''}`}
						style={isExpanded1() ? 'transition: all 0.3s ease-in-out;' : ''}
					>
						<button
							onClick={() => setIsExpanded1(!isExpanded1())}
							class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full b-none font-semibold text-lg py-7 md-px-6 px-4 focus:outline-none transition-all duration-700 ${isExpanded1() ? 'bg-transparent' : 'bg-transparent'}`}
						>
							<div class="flex items-center justify-start">
								<RiShining2Line class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-20px h-20px mr-3 c-#bbb" />
								<span class="text-paper md-max-w-full max-w-71 line-height-26px">
									Задължително ли е да запазя час за професионално подстригване за мъже предварително?
								</span>
							</div>
							<MdiPlus
								class={`text-brand w-8 h-8 transition-transform duration-700 mx-2 ${isExpanded1() ? 'rotate-135deg' : ''}`}
							/>
						</button>
						<div
							class={`mt-0 px-6 text-gray-600 leading-relaxed bg-transparent overflow-hidden transition-all duration-700 ${isExpanded1() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
							style="font-family: 'HeyWowBook', sans-serif !important;"
						>

							<p class="mt-3 c-paper">
								Препоръчваме Ви да запазите час предварително, за да си осигурите посещение в удобно за Вас време. При наличие на свободни часове приемаме и клиенти без предварителна резервация.
							</p>
						</div>
					</div>
				</div>

				<div class="relative b-solid b-1px b-#ffffff7d b-rd-14px overflow-hidden bg-#c0c0c026 z-1 FAQ-wrapper" style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
					<div
						class={`FAQ-button relative z-1 transition-all b-b-solid b-t-solid b-1px b-#292625 duration-600 important-outline-none ${isExpanded2() ? 'b-none bg-transparent' : ''}`}
						style={isExpanded2() ? 'transition: all 0.3s ease-in-out;' : ''}
					>
						<button
							onClick={() => setIsExpanded2(!isExpanded2())}
							class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full b-none font-semibold text-lg py-7 md-px-6 px-4 focus:outline-none transition-all duration-700 ${isExpanded2() ? 'bg-transparent' : 'bg-transparent'}`}
						>
							<div class="flex items-center justify-start">
								<RiShining2Line class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-20px h-20px mr-3 c-#bbb" /><span class="text-paper md-max-w-full max-w-71 line-height-26px">Как мога да си запазя час за мъжко подстригване в град София?</span>
							</div>
							<MdiPlus
								class={`text-brand w-8 h-8 transition-transform duration-700 ${isExpanded2() ? 'rotate-135deg' : ''}`}
							/>
						</button>
						<div
							class={`overflow-hidden transition-all duration-700 ${isExpanded2() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
						>
							<div class="mt-0 px-6 text-gray-600 leading-relaxed bg-transparent" style="font-family: 'HeyWowBook', sans-serif !important;"
							>
								<p class="mt-3 c-paper">
									За Ваше улеснение можете да запазите час за мъжко подстригване в кв. Изток – The Barber Shop Sofia по следните начини:
								</p>
								<ul>
									<li class="c-paper">
										онлайн чрез нашия уебсайт
									</li>
									<li class="c-paper">
										по телефона на номер 0882 820 331
									</li>
									<li class="c-paper">
										на място в бръснарницата ни кв. Изток, гр. София
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="relative b-solid b-1px b-#ffffff7d b-rd-14px overflow-hidden bg-#c0c0c026 z-1 FAQ-wrapper" style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
					<div
						class={`FAQ-button relative z-1 transition-all b-b-solid b-t-solid b-1px b-#292625 duration-600 important-outline-none ${isExpanded3() ? 'b-none bg-transparent' : ''}`}
						style={isExpanded3() ? 'transition: all 0.3s ease-in-out;' : ''}
					>
						<button
							onClick={() => setIsExpanded3(!isExpanded3())}
							class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full b-none font-semibold text-lg py-7 md-px-6 px-4 focus:outline-none transition-all duration-700 ${isExpanded3() ? 'bg-transparent' : 'bg-transparent'}`}
						>
							<div class="flex items-center justify-start">
								<RiShining2Line class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-20px h-20px mr-3 c-#bbb" /><span class="text-paper md-max-w-full max-w-71 line-height-26px">Какво ще се случи, ако не успея да дойда навреме за часа си за мъжко подстригване и стилизиране?</span>
							</div>
							<MdiPlus
								class={`text-brand w-8 h-8 transition-transform duration-700 ${isExpanded3() ? 'rotate-135deg' : ''}`}
							/>
						</button>
						<div
							class={`overflow-hidden transition-all duration-700 ${isExpanded3() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
						>
							<div class="mt-0 px-6 text-gray-600 leading-relaxed bg-transparent" style="font-family: 'HeyWowBook', sans-serif !important;"
							>
								<p class="mt-3 c-paper">
									Молим да ни уведомите, ако ще закъснеете. Ако закъснението е повече от 15 минути, ще се наложи да отменим часа Ви.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="relative b-solid b-1px b-#ffffff7d b-rd-14px overflow-hidden bg-#c0c0c026 z-1 FAQ-wrapper" style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
					<div
						class={`FAQ-button relative z-1 transition-all b-b-solid b-t-solid b-1px b-#292625 duration-600 important-outline-none ${isExpanded4() ? 'b-none bg-transparent' : ''}`}
						style={isExpanded4() ? 'transition: all 0.3s ease-in-out;' : ''}
					>
						<button
							onClick={() => setIsExpanded4(!isExpanded4())}
							class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full b-none font-semibold text-lg py-7 md-px-6 px-4 focus:outline-none transition-all duration-700 ${isExpanded4() ? 'bg-transparent' : 'bg-transparent'}`}
						>
							<div class="flex items-center justify-start">
								<RiShining2Line class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-20px h-20px mr-3 c-#bbb" /><span class="text-paper md-max-w-full max-w-71 line-height-26px">Мога ли да избера конкретен барбър, който да извърши мъжкото подстригване?</span>
							</div>
							<MdiPlus
								class={`text-brand w-8 h-8 transition-transform duration-700 ${isExpanded4() ? 'rotate-135deg' : ''}`}
							/>
						</button>
						<div
							class={`overflow-hidden transition-all duration-700 ${isExpanded4() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
						>
							<div class="mt-0 px-6 text-gray-600 leading-relaxed bg-transparent" style="font-family: 'HeyWowBook', sans-serif !important;"
							>
								<p class="mt-3 c-paper">
									Да, за Ваше удобство при записване на час за мъжко подстригване можете да уточните на кого от нашите висококвалифицирани барбъри да се доверите.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="relative b-solid b-1px b-#ffffff7d b-rd-14px overflow-hidden bg-#c0c0c026 z-1 FAQ-wrapper" style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
					<div
						class={`FAQ-button relative z-1 transition-all b-b-solid b-t-solid b-1px b-#292625 duration-600 important-outline-none ${isExpanded5() ? 'b-none bg-transparent' : ''}`}
						style={isExpanded5() ? 'transition: all 0.3s ease-in-out;' : ''}
					>
						<button
							onClick={() => setIsExpanded5(!isExpanded5())}
							class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full b-none font-semibold text-lg py-7 md-px-6 px-4 focus:outline-none transition-all duration-700 ${isExpanded5() ? 'bg-transparent' : 'bg-transparent'}`}
						>
							<div class="flex items-center justify-start">
								<RiShining2Line class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-20px h-20px mr-3 c-#bbb" /><span class="text-paper md-max-w-full max-w-71 line-height-26px">Какви методи на плащане използвате?</span>
							</div>
							<MdiPlus
								class={`text-brand w-8 h-8 transition-transform duration-700 ${isExpanded5() ? 'rotate-135deg' : ''}`}
							/>
						</button>
						<div
							class={`overflow-hidden transition-all duration-700 ${isExpanded5() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
						>
							<div class="mt-0 px-6 text-gray-600 leading-relaxed bg-transparent" style="font-family: 'HeyWowBook', sans-serif !important;"
							>
								<p class="mt-3 c-paper">
									Приемаме плащане в брой, както и чрез дебитна/кредитна карта.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="relative b-solid b-1px b-#ffffff7d b-rd-14px overflow-hidden bg-#c0c0c026 z-1 FAQ-wrapper" style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
					<div
						class={`FAQ-button relative z-1 transition-all b-b-solid b-t-solid b-1px b-#292625 duration-600 important-outline-none ${isExpanded6() ? 'b-none bg-transparent' : ''}`}
						style={isExpanded6() ? 'transition: all 0.3s ease-in-out;' : ''}
					>
						<button
							onClick={() => setIsExpanded6(!isExpanded6())}
							class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full b-none font-semibold text-lg py-7 md-px-6 px-4 focus:outline-none transition-all duration-700 ${isExpanded6() ? 'bg-transparent' : 'bg-transparent'}`}
						>
							<div class="flex items-center justify-start">
								<RiShining2Line class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-20px h-20px mr-3 c-#bbb" /><span class="text-paper md-max-w-full max-w-71 line-height-26px">Мога ли да закупя продукти на място от бръснарницата?</span>
							</div>
							<MdiPlus
								class={`text-brand w-8 h-8 transition-transform duration-700 ${isExpanded6() ? 'rotate-135deg' : ''}`}
							/>
						</button>
						<div
							class={`overflow-hidden transition-all duration-700 ${isExpanded6() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
						>
							<div class="mt-0 px-6 text-gray-600 leading-relaxed bg-transparent" style="font-family: 'HeyWowBook', sans-serif !important;"
							>
								<p class="mt-3 c-paper">
									Да, можете да разгледате нашия асортимент от мъжки професионални продукти за коса и брада и да ги закупите на място от бръснарницата.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="relative b-solid b-1px b-#ffffff7d b-rd-14px overflow-hidden bg-#c0c0c026 z-1 FAQ-wrapper" style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
					<div
						class={`FAQ-button relative z-1 transition-all b-b-solid b-t-solid b-1px b-#292625 duration-600 important-outline-none ${isExpanded7() ? 'b-none bg-transparent' : ''}`}
						style={isExpanded7() ? 'transition: all 0.3s ease-in-out;' : ''}
					>
						<button
							onClick={() => setIsExpanded7(!isExpanded7())}
							class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full b-none font-semibold text-lg py-7 md-px-6 px-4 focus:outline-none transition-all duration-700 ${isExpanded7() ? 'bg-transparent' : 'bg-transparent'}`}
						>
							<div class="flex items-center justify-start">
								<RiShining2Line class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-20px h-20px mr-3 c-#bbb" /><span class="text-paper md-max-w-full max-w-71 line-height-26px">The Barber Shop достъпен ли е за инвалиди?</span>
							</div>
							<MdiPlus
								class={`text-brand w-8 h-8 transition-transform duration-700 ${isExpanded7() ? 'rotate-135deg' : ''}`}
							/>
						</button>
						<div
							class={`overflow-hidden transition-all duration-700 ${isExpanded7() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
						>
							<div class="mt-0 px-6 text-gray-600 leading-relaxed bg-transparent" style="font-family: 'HeyWowBook', sans-serif !important;"
							>
								<p class="mt-3 c-paper">
									Бръснарницата е достъпна за инвалиди. В случай че изпитвате затруднения или имате въпроси, свържете се с нас на телефон 0882 820 331.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="relative b-solid b-1px b-#ffffff7d b-rd-14px overflow-hidden bg-#c0c0c026 z-1 FAQ-wrapper" style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
					<div
						class={`FAQ-button relative z-1 transition-all b-b-solid b-t-solid b-1px b-#292625 duration-600 important-outline-none ${isExpanded8() ? 'b-none bg-transparent' : ''}`}
						style={isExpanded8() ? 'transition: all 0.3s ease-in-out;' : ''}
					>
						<button
							onClick={() => setIsExpanded8(!isExpanded8())}
							class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full b-none font-semibold text-lg py-7 md-px-6 px-4 focus:outline-none transition-all duration-700 ${isExpanded8() ? 'bg-transparent' : 'bg-transparent'}`}
						>
							<div class="flex items-center justify-start">
								<RiShining2Line class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-20px h-20px mr-3 c-#bbb" /><span class="text-paper md-max-w-full max-w-71 line-height-26px">Осигурявате ли паркоместа за клиентите?</span>
							</div>
							<MdiPlus
								class={`text-brand w-8 h-8 transition-transform duration-700 ${isExpanded8() ? 'rotate-135deg' : ''}`}
							/>
						</button>
						<div
							class={`overflow-hidden transition-all duration-700 ${isExpanded8() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
						>
							<div class="mt-0 px-6 text-gray-600 leading-relaxed bg-transparent" style="font-family: 'HeyWowBook', sans-serif !important;"
							>
								<p class="mt-3 c-paper">
									Можете да се насладите на мъжко подстригване в град София, кв. Изток при нас в The Barber shop, където няма нужда да се притеснявате за паркирането. Осигурили сме 4 паркоместа пред входа на бръснарницата на разположение на клиентите.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="relative b-solid b-1px b-#ffffff7d b-rd-14px overflow-hidden bg-#c0c0c026 z-1 FAQ-wrapper" style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
					<div
						class={`FAQ-button relative z-1 transition-all b-b-solid b-t-solid b-1px b-#292625 duration-600 important-outline-none ${isExpanded9() ? 'b-none bg-transparent' : ''}`}
						style={isExpanded9() ? 'transition: all 0.3s ease-in-out;' : ''}
					>
						<button
							onClick={() => setIsExpanded9(!isExpanded9())}
							class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full b-none font-semibold text-lg py-7 md-px-6 px-4 focus:outline-none transition-all duration-700 ${isExpanded9() ? 'bg-transparent' : 'bg-transparent'}`}
						>
							<div class="flex items-center justify-start">
								<RiShining2Line class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-20px h-20px mr-3 c-#bbb" /><span class="text-paper md-max-w-full max-w-71 line-height-26px">Как да поддържам прическата си между посещенията ми при бръснар?</span>
							</div>
							<MdiPlus
								class={`text-brand w-8 h-8 transition-transform duration-700 ${isExpanded9() ? 'rotate-135deg' : ''}`}
							/>
						</button>
						<div
							class={`overflow-hidden transition-all duration-700 ${isExpanded9() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
						>
							<div class="mt-0 px-6 text-gray-600 leading-relaxed bg-transparent" style="font-family: 'HeyWowBook', sans-serif !important;"
							>
								<p class="mt-3 c-paper">
									След мъжкото подстригване ще Ви дадем няколко лесни и ефективни съвета за поддръжка вкъщи. От правилното миене на косата до използването на подходящите стилизиращи продукти, заедно ще се уверим, че ще изглеждате страхотно.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="relative b-solid b-1px b-#ffffff7d b-rd-14px overflow-hidden bg-#c0c0c026 z-1 FAQ-wrapper" style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
					<div
						class={`FAQ-button relative z-1 transition-all b-b-solid b-t-solid b-1px b-#292625 duration-600 important-outline-none ${isExpanded10() ? 'b-none bg-transparent' : ''}`}
						style={isExpanded10() ? 'transition: all 0.3s ease-in-out;' : ''}
					>
						<button
							onClick={() => setIsExpanded10(!isExpanded10())}
							class={`cursor-pointer important-b-none important-outline-none flex items-center justify-between w-full b-none font-semibold text-lg py-7 md-px-6 px-4 focus:outline-none transition-all duration-700 ${isExpanded10() ? 'bg-transparent' : 'bg-transparent'}`}
						>
							<div class="flex items-center justify-start">
								<RiShining2Line class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-20px h-20px mr-3 c-#bbb" /><span class="text-paper md-max-w-full max-w-71 line-height-26px">Не съм сигурен точно какво искам. Бихте ли ми помогнали да избера точната визия спрямо моите черти?</span>
							</div>
							<MdiPlus
								class={`text-brand w-8 h-8 transition-transform duration-700 ${isExpanded10() ? 'rotate-135deg' : ''}`}
							/>
						</button>
						<div
							class={`overflow-hidden transition-all duration-700 ${isExpanded10() ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
						>
							<div class="mt-0 px-6 text-gray-600 leading-relaxed bg-transparent" style="font-family: 'HeyWowBook', sans-serif !important;"
							>
								<p class="mt-3 c-paper">
									Стремим се да Ви вдъхнем увереността, която всеки мъж заслужава, като Ви осигурим безупречен външен вид. Нашите барбъри с удоволствие ще Ви запознаят с трендовете в мъжките подстригвания и ще ви помогнат да изберете най-добрата визия спрямо Вашите черти.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default function Page() {
	return (
		<>
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) ), url(assets/The_Barber_Shop-144-2_17.jpg); background-position: 35% top; background-repeat: no-repeat; background-size: cover;" class="h-115vh"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-48% lg-top-55% text-center w-full max-w-800px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Мъжко подстригване</h1>
							</AnimatedComponent>
							<AnimatedComponent>
								<p class="important-delay-300 c-paper text-center lg-pt-10 font-size-14.5px md-font-size-18px line-height-7">В <span class="c-brand  font-900" style="font-family: 'Roboto'">The Barber Shop</span> не просто подстригваме. Предлагаме Ви преживяване, което съчетава удобство, майсторство и прецизност. С помощта на нашите бръснари ще определим стил на мъжкото подстригване, който не само подхожда на чертите Ви, но и отразява кой сте Вие.</p>
								<p class="important-delay-500 c-paper text-center font-size-14.5px md-font-size-18px line-height-7">Нашата цел е да видите в огледалото мъж, който изглежда точно толкова добре, колкото се чувства.</p></AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<div class="pt-10 pb-10 lg--mt-30 -mt-45" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponentSlide>
					<h2 class="c-paper text-center important-mb-0">Бръснарница от класа</h2>
					<img class="mx-auto pt-2 mb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
				</AnimatedComponentSlide>
				<AnimatedComponentSlide>
					<div class="lg-mt-0 lg-px-30 pb-10 max-w-1600px mx-auto flex lg-flex-row flex-col gap-6 lg-gap-13 flex-items-center">
						<div class="lg-w-50% px-5 flex-self-start">
							<div class="flex flex-col gap-5 c-paper">
								<div class="flex flex-items-center gap-10px c-paper">
									<MdiRomanNumeral1 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand" />Посрещане с усмивка и освежаваща напитка.<br></br>
								</div>
								<div class="flex flex-items-center gap-10px c-paper">
									<MdiRomanNumeral2 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand" />Настаняване на бръснарския стол.<br></br>
								</div>
								<div class="flex flex-items-center gap-10px c-paper">
									<MdiRomanNumeral3 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand" />Консултация относно желания стил на мъжко подстригване и стилизиране.<br></br>
								</div>
								<div class="flex flex-items-center gap-10px c-paper">
									<MdiRomanNumeral4 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand" />Подстригване спрямо Вашите черти и изисквания.<br></br>
								</div>
								<div class="flex flex-items-center gap-10px c-paper">
									<MdiRomanNumeral5 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand" />Измиване на косата с професионален шампоан и балсам.
								</div>
							</div>
						</div>

						<div class="lg-w-50% pr-5 pl-5 lg-pl-0 flex-self-start">
							<div class="flex flex-col gap-5 c-paper">
								<div class="flex flex-items-center gap-10px c-paper">
									<MdiRomanNumeral6 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand" />Изсушаване на косата със сешоар.<br></br>
								</div>
								<div class="flex flex-items-center gap-10px c-paper">
									<MdiRomanNumeral7 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand" />Оформяне и стилизиране на прическата с премиум козметика.<br></br>
								</div>
								<div class="flex flex-items-center gap-10px c-paper">
									<MdiRomanNumeral8 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand" />Представяне на повече информация относно предимствата от използваните продукти по време на мъжкото подстригване.<br></br>
								</div>
								<div class="flex flex-items-center gap-10px c-paper">
									<MdiRomanNumeral9 class="flex flex-justify-center flex-items-center flex-shrink-0 font-size-8 w-40px h-40px c-brand" />Перфектна визия и повишено самочувствие.
								</div>
							</div>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>


			<section class="lg-pb-25 pb-20 pt-10">
				<AnimatedComponent>
					<h2 class="important-mb-0">Професионално мъжко подстригване:<br></br>От идеята до завършения вид</h2>
					<img class="mx-auto pt-2 mb-15 lg-mb--5 flex flex-justify-center" src="/assets/heading-ic.png" />
				</AnimatedComponent>
				<AnimatedComponent>
					<VideoPlayer src='https://www.youtube.com/embed/e2x0UXVU2yg?enablejsapi=1&mute=1' />
				</AnimatedComponent>
			</section>

			<div class="pt-10 lg-pb-20 pb-15" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<h2 class="c-paper text-center mb-7 important-mb-0">Цена на мъжко подстригване в София</h2>
				<img class="mx-auto pt-2 mb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
				<AnimatedComponentSlide>
					<div class="lg-mt-0 lg-px-30 md-px-10 pb-10 max-w-1600px mx-auto flex lg-flex-row flex-col gap-15 lg-gap-20 lg-flex-items-center">
						<div class="lg-w-50% px-5 gap-15 flex flex-col">
							<div class="flex flex-col">
								<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
									<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
									<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
								</div>
								<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
							</div>

							<div class="flex flex-col">
								<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
									<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
									<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
								</div>
								<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
							</div>

							<div class="flex flex-col">
								<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
									<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
									<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
								</div>
								<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
							</div>

							<div class="flex flex-col">
								<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
									<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
									<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
								</div>
								<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
							</div>
						</div>

						<div class="lg-w-50% pr-5 pl-5 lg-pl-0 gap-15 flex flex-col">
							<div class="flex flex-col">
								<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
									<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
									<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
								</div>
								<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
							</div>

							<div class="flex flex-col">
								<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
									<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
									<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
								</div>
								<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
							</div>

							<div class="flex flex-col">
								<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
									<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
									<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
								</div>
								<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
							</div>

							<div class="flex flex-col">
								<div class="flex flex-justify-between b-b-solid b-1px b-gray-500 pb-1">
									<div class="font-size-6 uppercase c-paper text-left" style="font-family: 'Oswald', sans-serif !important;">Natural Grey Coverage</div>
									<div class="c-brand font-size-6 uppercase font-500" style="font-family: 'Oswald', sans-serif !important;">12 лв.</div>
								</div>
								<div class="c-gray-400 font-size-4 pt-3">Тониране на сиви коси, които придават естествен и младежки вид.</div>
							</div>
						</div>
					</div>
				</AnimatedComponentSlide>

				<AnimatedComponentSlide class="mx-3 md-mx-10">
					<div class="flex w-full px-20px lg-px-50px py-10 max-w-1320px mx-auto flex-justify-between flex-items-center b-solid b-2px b-gray-500 flex mt-8 hover-b-paper hover-bg-black transition-colors important-transition-duration-300">
						<div class="c-paper font-size-5 lg-font-size-6 flex flex-items-center" style="font-family: 'Oswald', sans-serif !important;">
							<MdiProgressClock class="flex flex-self-center mr-2 lg-w-7 md-w-10 w-20 c-brand" />Работно време: Понеделник - Петък: 09.00 - 17.00
						</div>
						<div class="flex flex-col flex-items-center flex-self-center">
							<a href="/" class="bg-brand c-black b-solid b-2px b-brand uppercase font-size-13px sm-font-size-4 font-500 px-7 ml-2 lg-text-left text-center py-2 hover-c-paper transition-colors line-height-5 sm-line-height-6" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
						</div>
					</div>
				</AnimatedComponentSlide>
			</div>

			<section class="lg-pb-25 pb-20 pt-10">
				<AnimatedComponent>
					<h2 class="important-mb-0">Мъжко подстригване в действие</h2>
					<img class="mx-auto pt-2 pb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
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
				<div class="flex flex-col lg-pt-20 pb-20 pt-0 bg-#f2e0c2">
					<div class="flex flex-col flex-items-center">
						<AnimatedComponent>
							<h2 class="important-mb-2 lg-mb-9 mt-3 mb-0">Отзиви</h2>
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
			</div>

			<section class="lg-pb-25 pb-20 pt-10">
				<AnimatedComponent>
					<h2 class="important-mb-0">Често поръчвани заедно</h2>
					<img class="mx-auto pt-2 pb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
				</AnimatedComponent>

				<AnimatedComponent>
					<OftenOT>
						<ElementInOftenOT
							href="/"
							title="Hot Towel Shave"
							desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба удоволствие за един мъж. [1ч.]"
						/>

						<ElementInOftenOT
							href="/"
							title="Hot Towel Shave"
							desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба удоволствие за един мъж. [1ч.]"
						/>

						<ElementInOftenOT
							href="/"
							title="Hot Towel Shave"
							desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба удоволствие за един мъж. [1ч.]"
						/>

						<ElementInOftenOT
							href="/"
							title="Hot Towel Shave"
							desc="Класическо мокро бръснене е ритуал в The Barber Shop Sofia, който е много повече от грижа – той е чиста проба удоволствие за един мъж. [1ч.]"
						/>
					</OftenOT>
				</AnimatedComponent>

				<AnimatedComponent>
					<div class="flex flex-col flex-items-center pt-10">
						<a href="/" class="bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
					</div>
				</AnimatedComponent>
			</section>

			<section style="background-color: #222222; background-image: url(/assets/bg-2.jpg); background-position: center center; background-repeat: no-repeat; background-size: cover;">
				<div class="lg-mx-30 mx-auto lg-pt-10 pt-10">
					<div class="flex md-flex flex-col lg-gap-5 flex-justify-center max-w-1440px lg-px-0 mx-auto pb-10">
						<AnimatedComponent>
							<h2 class="pb-3 lg-pb-0 important-mb-0 c-paper">Предимставата на The Barber Shop</h2>
							<img class="mx-auto pt-2 pb-15 lg-pb-10 flex flex-justify-center" src="/assets/heading-ic.png" />
						</AnimatedComponent>
						<div class="px-5 lg-px-0 flex lg-flex-row flex-col lg-gap-10">
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-0">Опитни и квалифицирани бръснари</h3>
									<div class="pb-8 c-paper">Екипът на The Barber Shop се състои от млади, целеустремени и непрекъснато развиващи се бръснари. Всеки един от тях е преминал интензивно обучение, усвоявайки “езика на бръснарството” и тънкостите в стайлинга за мъже. С професионализъм, лично отношение и внимание към детайла могат да пресъздадат всяка визия съобразена с предпочитанията и чертите Ви.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Професионални инструменти</h3>
									<div class="pb-8 c-paper">В The Barber Shop ценим високото качество затова използваме само най-добрите професионални инструменти. Нашите бръснарски ножици, бръсначи и машинки са избрани с внимание към детайлите, като залагаме на световно признати марки като Wahl, Andis, Oster, BabylissPRO, гарантиращи отлично изпълнение на класическите мъжки прически. Нашата бръснарница е мястото, където стилът и прецизността са водещ фактор.</div>
								</AnimatedComponent>
							</div>
							<div class="lg-w-33.33% flex flex-col">
								<AnimatedComponent>
									<h3 class="c-brand text-left mt-5 lg-mt-0">Висококачествена козметика</h3>
									<div class="pb-8 c-paper">Перфектната визия започва със здрава кожа и коса. Ето защо ние работим с марки като Depot, American crew, Lavish, специализирани в мъжката козметика, с изчистен състав и благоприятно действие върху косата и кожата. Асортиментът ни включва подхранващи шампоани, хидратиращи балсами, както и стилизиращи продукти за всеки тип коса и брада, които гарантират че прическата ви ще запази вида си дълго след мъжкото подстригване.</div>
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
					<h2 class="important-mb-0">Нашият магазин</h2>
					<img class="mx-auto pt-2 pb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
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

			<div class="pt-10 pb-20 h-150vh" style="filter:; height: auto; background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/assets/v2-76u36-ghyye.webp); background-position: center top; background-repeat: no-repeat; background-size: cover;">
				<AnimatedComponent>
					<h2 class="important-mb-0 c-paper">Често задавани въпроси</h2>
					<img class="mx-auto pt-2 pb-15 flex flex-justify-center" src="/assets/heading-ic.png" />
				</AnimatedComponent>
				<SingleCollapse />
			</div>
		</>
	);
}
