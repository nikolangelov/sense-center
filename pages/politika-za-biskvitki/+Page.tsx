import "solid-slider/slider.css";
import { AnimatedComponent } from '../../components/AnimateOnView';

export default function Page() {

	return (
		<>
			<section class="xl:px-30 mx-8 md:mx-auto py-50 md:py-65 max-w-1500px">
				<AnimatedComponent>
					<h1 class="important-md:font-size-50px important-font-size-35px uppercase important-leading-10 important-mb-8 important-md:mb-15">Политика за бисквитки</h1>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">1. Какво са бисквитките</h2>
					<p class="mt-0">
						Бисквитките са малки текстови файлове, които се съхраняват на Вашето устройство при посещение на сайта, за да подобрят потребителското изживяване и функционалността.
					</p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">2. Защо ги използваме</h2>
					<ul class="ml-4.5">
						<li>Анализ на поведението на потребителите и посещенията на сайта</li>
						<li>Оптимизиране на рекламните кампании и таргетиране</li>
						<li>Запомняне на предпочитания и настройки</li>
					</ul>
					<p></p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">3. Конкретни бисквитки, които използваме</h2>
					<ul class="ml-4.5">
						<li><span class="font-[MYRIADPRO-Bold]">Google Analytics 4</span> – за анализ на поведението на потребителите</li>
						<li><span class="font-[MYRIADPRO-Bold]">Google Ads</span> – за измерване на ефективността на рекламите</li>
						<li><span class="font-[MYRIADPRO-Bold]">Google Tag Manager</span> – за управление на скриптове и маркери</li>
						<li><span class="font-[MYRIADPRO-Bold]">Meta/Facebook пиксел</span> – за оптимизиране и таргетиране на реклами</li>
					</ul>
					<p></p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">4. Как да управлявате бисквитките</h2>
					<p class="mt-0">
						Можете да управлявате или изтривате бисквитките чрез настройките на Вашия браузър. Имайте предвид, че някои функции на сайта може да не работят правилно, ако бисквитките са деактивирани.
					</p>
				</AnimatedComponent>
			</section>
		</>
	);
}
