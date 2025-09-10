import "solid-slider/slider.css";
import { AnimatedComponent } from '../../components/AnimateOnView';

export default function Page() {

	return (
		<>
			<section class="xl:px-30 mx-8 md:mx-auto py-50 md:py-65 max-w-1500px">
				<AnimatedComponent>
					<h1 class="important-md:font-size-50px important-font-size-35px uppercase important-leading-10 important-mb-8 important-md:mb-15">Политика за поверителност</h1>
					<p>
						Добре дошли в Политиката за поверителност на Sense Center. Ние ценим доверието Ви и се ангажираме да защитаваме личните данни на всички родители, настойници и специалисти, които използват нашия сайт и услуги. Работим в съответствие с Регламент (ЕС) 2016/679 (GDPR) и Закона за защита на личните данни на Република България.
					</p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">1. Кой сме ние</h2>
					<p class="mt-0">
						Sense Center – СЕНС ЦЕНТЪР ЕООД<br />
						Адрес: Карпузица, Бл. „Никола Петков“ 95a, 1619 София<br />
						ЕИК: 207350254<br />
						Телефон: 0879800013<br />
						Имейл: contact@sense-center.bg
					</p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">2. Какви данни събираме</h2>
					<ul class="ml-4.5">
						<li>Име, телефон, имейл (когато ни пишете или се обаждате)</li>
						<li>Информация, която доброволно споделяте във връзка с терапевтични програми</li>
						<li>Технически данни – IP адрес, поведение на сайта (Google Analytics 4, Google Tag Manager)</li>
						<li>Данни за взаимодействие с реклами (Google Ads, Meta/Facebook пиксел)</li>
					</ul>
					<p>Ако споделяте информация за дете, това става само с Вашето изрично съгласие.</p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">3. Защо използваме тези данни</h2>
					<ul class="ml-4.5">
						<li>За да отговорим на Ваши запитвания и да предоставим желаните услуги</li>
						<li>За да Ви изпращаме информация за програми и събития (само след Ваше съгласие)</li>
						<li>За подобряване на сайта и анализ на ефективността на рекламите</li>
						<li>За спазване на законови изисквания</li>
					</ul>
					<p></p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">4. С кого можем да споделим данните</h2>
					<p class="mt-0">
						Личните Ви данни се споделят само когато е необходимо за осигуряване на услугите или изпълнение на законови изисквания, например:
					</p>
					<ul class="ml-4.5">
						<li>Доставчици на техническа поддръжка и хостинг – само за функционирането на сайта</li>
						<li>Google (Google Analytics 4, Google Ads, GTM) – за анализ на използването на сайта и ефективността на рекламите</li>
						<li>Meta/Facebook пиксел – за оптимизиране на реклами и таргетиране</li>
						<li>Държавни институции – само ако това е изискано по закон</li>
					</ul>
					<p>
						Ние не продаваме и не отдадем личните Ви данни на трети страни за търговски цели.
					</p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">5. Колко дълго ги пазим</h2>
					<p class="mt-0">
						Съхраняваме личните данни само за толкова време, колкото е необходимо за целите, за които са събрани, или колкото изисква законът. След това те се изтриват или анонимизират.
					</p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">6. Вашите права</h2>
					<p class="mt-0">
						Имате право да:
					</p>
					<ul class="ml-4.5">
						<li>Получите достъп до своите данни</li>
						<li>Поискате корекция или изтриване</li>
						<li>Оттеглите дадено съгласие</li>
						<li>Възразите срещу обработването за маркетингови цели</li>
					</ul>
					<p>
						За да упражните тези права, свържете се с нас на contact@sense-center.bg.
					</p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">7. Контролен орган</h2>
					<p class="mt-0">
						Комисия за защита на личните данни (КЗЛД)<br />
						Адрес: гр. София 1592, бул. „Проф. Цветан Лазаров“ № 2<br />
						Уебсайт: <a href="http://www.cpdp.bg/" target="_blank" rel="nofollow">www.cpdp.bg</a>
					</p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">8. Промени в политиката</h2>
					<p class="mt-0">
						Може да актуализираме тази политика при промени в нашата дейност или законодателството. Новата версия винаги ще бъде достъпна на сайта.
					</p>
				</AnimatedComponent>
			</section>
		</>
	);
}
