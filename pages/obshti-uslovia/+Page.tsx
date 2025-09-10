import "solid-slider/slider.css";
import { AnimatedComponent } from '../../components/AnimateOnView';

export default function Page() {

	return (
		<>
			<section class="xl:px-30 mx-8 md:mx-auto py-50 md:py-65 max-w-1500px">
				<AnimatedComponent>
					<h1 class="important-md:font-size-50px important-font-size-35px uppercase important-leading-10 important-mb-8 important-md:mb-15">Общи условия на Sense Center</h1>
					<p>
						Добре дошли на сайта на Sense Center. Настоящите Общи условия уреждат използването на уебсайта и предоставянето на терапевтични и консултативни услуги за деца с нарушения в развитието. Условията са в съответствие с GDPR, ЗЗЛД и Закона за защита на потребителите.
					</p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">1. Обхват и дефиниции</h2>
					<p class="mt-0">
						„Потребител“ е лице, което използва Сайта или Услугите.<br />
						Условията важат за всички онлайн и офлайн услуги на Sense Center.<br />
						Деца под 14 години могат да използват Сайта или Услугите само с родителско / настойническо съгласие.
					</p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">2. Приемане на условията</h2>
					<p class="mt-0">Използването на Сайта, регистрация или изпращане на запитване означава съгласие с настоящите Общи условия.</p>
					<p>Продължаването на използване след промени се счита за приемане на новите условия.</p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">3. Потребителски задължения</h2>
					<ul class="ml-4.5">
						<li>Предоставяйте точна и актуална информация.</li>
						<li>Не използвайте Сайта за незаконни цели.</li>
						<li>Спазвайте инструкциите на специалистите при ползване на услугите.</li>
					</ul>
					<p></p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">4. Оплаквания и спорове</h2>
					<p class="mt-0">
						Подайте оплакване на contact@sense-center.bg; ще бъде разгледано до 30 дни.
					</p>
					<p>
						Потребителите могат да се обърнат към Комисията за защита на потребителите <a href="https://kzp.bg" target="_blank" rel="nofollow">(https://www.kzp.bg)</a> или платформата за ОРС на ЕС <a href="https://ec.europa.eu/odr" target="_blank" rel="nofollow">(https://ec.europa.eu/odr)</a>.
					</p>
					<h2 class="important-md:font-size-30px important-font-size-25px case-normal text-left py-5 important-leading-7">5. Промени в условията</h2>
					<p class="mt-0">
						Sense Center може да актуализира Общите условия, като публикува новата версия на Сайта с дата на последна промяна.
					</p>
					<p>
						Продължаването на използването след промяна означава приемане на новите условия.
					</p>
				</AnimatedComponent>
			</section>
		</>
	);
}
