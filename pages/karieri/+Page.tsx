import "solid-slider/slider.css";
import { AnimatedComponent } from '../../components/AnimateOnView';
import { AnimatedComponentSlide } from '../../components/AnimateOnViewSlide';
import MdiCircleSmall from '~icons/mdi/circle-small';
import { createEffect, createSignal } from 'solid-js';
import MdiCloseThick from '~icons/mdi/close-thick?width=24px&height=24px';
import confetti from "canvas-confetti";

export default function Page() {
	const [email, setEmail] = createSignal('');
	const [subject, setSubject] = createSignal('');
	const [name, setName] = createSignal('');
	const [postCode, setPostCode] = createSignal('');
	const [phone, setPhone] = createSignal('');
	const [text, setText] = createSignal('');
	const [otherText, setOtherText] = createSignal('');
	const [attachments, setAttachments] = createSignal<File[]>([]);
	const [selectedServices, setSelectedServices] = createSignal<string[]>([]);
	const [howFound, setHowFound] = createSignal('');
	const [isSubmitted, setIsSubmitted] = createSignal(false);
	const [isModalOpen, setIsModalOpen] = createSignal(false);
	const [isUploading, setIsUploading] = createSignal(false);
	const [progress, setProgress] = createSignal(0);
	const [errorMessage, setErrorMessage] = createSignal('');

	const handleRadioChange = (event: { target: { value: string } }) => {
		setHowFound(event.target.value);
		if (event.target.value !== 'Other') {
			setOtherText('');
		}
	};

	const resetForm = () => {
		setEmail('');
		setSubject('');
		setName('');
		setPostCode('');
		setPhone('');
		setText('');
		setOtherText('');
		setAttachments([]);
		setSelectedServices([]);
		setHowFound('');
	};

	async function sendEmail(e: Event) {
		e.preventDefault();
		setIsUploading(true);
		setProgress(0);

		const formData = new FormData();
		formData.append('senderEmail', email());
		formData.append('subject', subject());
		formData.append('name', name());
		formData.append('postCode', postCode());
		formData.append('phone', phone());
		formData.append('text', text());
		formData.append('howFound', howFound());
		formData.append('OtherText', otherText());

		if (attachments()) {
			for (let i = 0; i < attachments().length; i++) {
				formData.append('attachments', attachments()[i]);
			}
		}

		formData.append('services', selectedServices().join(', '));

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				setIsSubmitted(true);
				setIsModalOpen(true);
				resetForm();
			} else {
				const errorText = await response.text();
				setErrorMessage(`Failed to send the email. Please try again later. Error details: ${errorText}`);
			}
		} catch (error) {
			console.error('Error:', error);
			alert('An error occurred while sending the email.');
		} finally {
			setIsUploading(false);
		}
	}

	const handleFileChange = (event: Event) => {
		const input = event.target as HTMLInputElement;
		const files = input.files;
		if (files) {
			setAttachments([...attachments(), ...Array.from(files)]);
		}
	};

	const handleCheckboxChange = (event: { target: { value: string; checked: boolean } }) => {
		const value = event.target.value;
		const services = selectedServices();
		if (event.target.checked) {
			setSelectedServices([...services, value]);
		} else {
			setSelectedServices(services.filter(service => service !== value));
		}
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setIsSubmitted(false);
		setErrorMessage('');
		resetForm();
	};

	createEffect(() => {
		if (isModalOpen()) {
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { x: 0.5, y: 0.5 },
			});
		}
	});

	return (
		<>
			<div style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;"><div style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) ), url(/assets/karieri/екип-бръснарница-софия-mobile.webp); background-position: center bottom; background-repeat: no-repeat; background-size: cover;" class="h-100vh md-h-110vh karieri-img" role="img" aria-label="The barber shop Sofia"></div></div>

			<div class="w-full bg-#212528">
				<div class="max-w-1240px mx-auto">
					<div class="flex flex-justify-center">
						<div class="left-0 right-0 px-3 my-0 mx-auto absolute top-80% sm-top-85% md-top-80% lg-top-80% text-center w-full max-w-1500px" style="-webkit-transform: translateY(-50%);">
							<AnimatedComponent>
								<h1 class="uppercase c-paper mb-6 text-center">Присъедини се към екипа</h1>
							</AnimatedComponent>
							<AnimatedComponent class="hidden md:block">
								<p class="important-delay-300 c-paper text-center lg-pt-0 font-size-14.5px md-font-size-18px line-height-7">Отваряме врати за нови таланти!</p>
								<p class="important-delay-500 c-paper text-center font-size-14.5px md-font-size-18px line-height-7">Независимо дали сте начинаещ или опитен професионалист, The Barber Shop има желание да работи с Вас.</p>
								<p class="important-delay-500 c-paper text-center font-size-14.5px md-font-size-18px line-height-7">Нашата мисия е да създадем не просто екип, а общност от майстори бръснари, обединени от любовта към занаята.</p>
							</AnimatedComponent>
						</div>
					</div>
				</div>
			</div>

			<section class="lg-pt-15 pb-5 pt-10 px-4 w-full block md:hidden" style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
				<AnimatedComponent>
					<img class="md-mx-0 mx-auto pb-0 flex flex-justify-start" src="/assets/heading-ic.png" />

					<p class="important-delay-300 text-center lg-pt-0 font-size-14.5px md-font-size-18px line-height-7">Отваряме врати за нови таланти!</p>
					<p class="important-delay-500 text-center font-size-14.5px md-font-size-18px line-height-7">Независимо дали сте начинаещ или опитен професионалист, The Barber Shop има желание да работи с Вас.</p>
					<p class="important-delay-500 text-center font-size-14.5px md-font-size-18px line-height-7">Нашата мисия е да създадем не просто екип, а общност от майстори бръснари, обединени от любовта към занаята.</p>
				</AnimatedComponent>
			</section>

			<section class="lg-pt-15 pb-20 pt-5 px-4 w-full" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<section class="max-w-7xl mx-auto pt-10 px-4">
					<div class="flex flex-col md:flex-row items-start gap-10 md:gap-20">
						<div class="w-full space-y-6">
							<AnimatedComponent>
								<h3 class="uppercase mb-4 pt-0 md:text-left c-paper important-mb-0">За начинаещ барбър</h3>
							</AnimatedComponent>
							<AnimatedComponent>
								<img class="md-mx-0 mx-auto pb-10 lg-pb-0 flex flex-justify-start" src="/assets/heading-ic.png" />
								<p class="important-delay-300 lg-pt-0 sm-line-height-7 line-height-6.5 c-paper">Готови ли сте от любители бръснари да се превърнете в опитни професионалисти? Ако отговорът е да, значи сте на точното място.</p>
								<p class="important-delay-500 sm-line-height-7 line-height-6.5 c-paper">Ако сте начинаещ барбър, който не знае откъде да започне, заповядайте при нас. В рамките на няколко месеца ще научите основните техники, както и тънкостите на бръснарството.</p>
								<p class="important-delay-700 sm-line-height-7 line-height-6.5 c-paper">Ще разгърнете потенциала си и ще творите смело с помощта на нашия професионализъм.</p>
							</AnimatedComponent>
						</div>

						<div class="w-full space-y-6">
							<AnimatedComponent>
								<h3 class="uppercase mb-4 pt-0 md:text-left c-paper important-mb-0">За опитен барбър</h3>
							</AnimatedComponent>
							<AnimatedComponent>
								<img class="md-mx-0 mx-auto pb-10 lg-pb-0 flex flex-justify-start" src="/assets/heading-ic.png" />
								<p class="important-delay-300 lg-pt-0 sm-line-height-7 line-height-6.5 c-paper">В случай, че вече имате професионален опит и с гордост можете да се наречете мастър барбър, елате да работим заедно.</p>
								<p class="important-delay-500 sm-line-height-7 line-height-6.5 c-paper">Впуснете се в едно ново предизвикателство и развийте таланта си с помощта на нашия професионализъм.</p>
							</AnimatedComponent>
						</div>
					</div>
				</section>
			</section>

			<section class="lg-pt-15 pb-20 pt-5 px-4 w-full" style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
				<section class="max-w-7xl mx-auto pt-10 px-4">
					<div class="flex flex-col md:flex-row items-center gap-20">
						<AnimatedComponentSlide class="hidden md-block w-full md:w-1/2">
							<div class="relative">
								<img src="/assets/karieri/the-barber-shop-sofia-team.jpg" alt="Elegant interior design" class="w-full h-auto shadow-xl" />
							</div>
						</AnimatedComponentSlide>

						<div class="w-full md:w-1/2 space-y-6">
							<AnimatedComponentSlide>
								<h2 class="uppercase mb-4 md:text-left pt-0 mt-0 important-mb-0">Какво предлагаме</h2>
							</AnimatedComponentSlide>
							<AnimatedComponentSlide>
								<img class="md-mx-0 mx-auto pb-10 lg-pb-0 flex flex-justify-start" src="/assets/heading-ic.png" />
								<p class="important-delay-300 lg-pt-0 sm-line-height-7 line-height-6.5">Предлагаме не просто работа, а комбинация от непрекъснато развитие, разнообразно ежедневие и супер яки колеги.</p>
								<div class="flex items-start">
									<p class="flex items-start my-0">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										работа сред млад и сплотен екип
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										подкрепа в процеса на обучение
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										процент от оборота
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										гъвкаво работно време
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										изградена клиентска база
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										приятелска атмосфера
									</p>
								</div>
							</AnimatedComponentSlide>
						</div>
						<AnimatedComponentSlide class="md-hidden block w-full md:w-1/2">
							<div class="relative">
								<img src="/assets/za-nas/the-barber-shop-sofia-team-3.jpg" alt="Elegant interior design" class="w-full h-auto shadow-xl" />
							</div>
						</AnimatedComponentSlide>
					</div>
				</section>
			</section>

			<section class="lg-pt-15 pb-20 pt-5 px-4 w-full" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<section class="max-w-7xl mx-auto pt-10 px-4">
					<div class="flex flex-col md:flex-row items-center gap-20">

						<div class="w-full md:w-1/2 space-y-6">
							<AnimatedComponentSlide>
								<h2 class="uppercase mb-4 md:text-left pt-0 mt-0 c-paper important-mb-0">Какво изискваме</h2>
							</AnimatedComponentSlide>
							<AnimatedComponentSlide>
								<img class="md-mx-0 mx-auto pb-10 lg-pb-0 flex flex-justify-start" src="/assets/heading-ic.png" />
								<p class="important-delay-300 lg-pt-0 sm-line-height-7 line-height-6.5 c-paper">Търсим позитивен човек, търсещ нов кариерен старт!</p>
								<p class="important-delay-500 sm-line-height-7 line-height-6.5 c-paper">Бръснарят в “The Barber Shop” e:</p>

								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										комуникативен и обичащ да общува с разнообразни хора
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										креативен и сръчен
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										владеещ английски език
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										точен и отговорен в работата си
									</p>
								</div>
								<div class="flex items-start">
									<p class="flex items-start my-0 c-paper">
										<span class="flex items-center mt-1">
											<MdiCircleSmall class="c-brand" />
										</span>
										прецизен и с внимание към детайла
									</p>
								</div>

								<p class="important-delay-700 sm-line-height-7 line-height-6.5 c-paper">Опитът не е задължителен, по-важно е да имате хъс и стремеж към нови знания.<br></br>
									Ако смятате, че сте нашият човек, попълнете формата по-долу и ще обсъдим възможностите. За повече информация свържете се с нас.
								</p>
							</AnimatedComponentSlide>
						</div>

						<AnimatedComponentSlide class="w-full md:w-1/2">
							<div class="relative">
								<img src="/assets/karieri/бръснар-софия.jpg" alt="Elegant interior design" class="w-full h-auto shadow-xl" />
							</div>
						</AnimatedComponentSlide>
					</div>
				</section>
			</section>

			<section class="lg-pt-25 pb-20 pt-20 px-2 md:px-4 w-full" style="background-attachment: fixed; background-image: url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
				<div class="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 md:gap-20 mx-2 md:mx-20 lg:mx-50">
					<div class="lg:w-1/2 flex flex-col justify-center lg:justify-start items-center lg:items-start">
						<AnimatedComponent>
							<h2 class="uppercase important-mb-0 md:mb-4 pt-0 mt-0 lg:text-left">Кандидатствай сега</h2>
							<p class="c-#c27832 text-center lg:text-left mb-5">/ Присъедини се към нашия екип /</p>
							<p class="text-center lg:text-left">
								Ако обичаш занаята и искаш да работиш в модерен бръснарски салон, ние имаме място за теб! Стани част от нашия екип и развивай уменията си при нас.
							</p>
						</AnimatedComponent>
						<AnimatedComponent>
							<button
								class="mt-3 cursor-pointer text-center w-50 lg-w-55 bg-brand hover:c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-4.5 font-500 py-3 c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Курс за бръснар
							</button>
						</AnimatedComponent>
					</div>

					<AnimatedComponent class="container-form lg:w-1/2s">
						<div class="form-container w-full max-w-150 glass-effect rounded-2xl overflow-hidden relative">
							<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-900 to-red-600 opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
							<div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-400 to-amber-500 opacity-10 rounded-full transform -translate-x-12 translate-y-8"></div>

							<div class="md:p-8 p-5">
								<h2 class="important-mt-0 md:mt-5 mb-15">Форма за кандидатстване</h2>
								{!isSubmitted() && !isModalOpen() && (
									<form class="space-y-6" onSubmit={sendEmail} method="post" enctype="multipart/form-data">
										<div class="space-y-5">

											<div class="input-highlight">
												<input
													type="text"
													value={name()}
													onChange={(e) => setName(e.target.value)}
													placeholder="Име"
													class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-gray-700"
													required
												/>
											</div>
											<div class="input-highlight">
												<input
													type="text"
													value={postCode()}
													onChange={(e) => setPostCode(e.target.value)}
													placeholder="Фамилия"
													class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-gray-700"
													required
												/>
											</div>
											<div class="input-highlight">
												<input
													type="email"
													value={email()}
													onChange={(e) => setEmail(e.target.value)}
													placeholder="Email"
													class="w-full px-4 py-3 bg-transparent border-0 border-b border-paper focus:outline-none focus:ring-0 text-gray-700"
													required
												/>
											</div>
											<div class="mt-6">
												<textarea
													value={text()}
													onChange={(e) => setText(e.target.value)}
													placeholder="Разкажи повече за себе си и бръснарството..."
													class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-50 border-paper focus:border-brand focus:ring-2 focus:ring-brand focus:ring-opacity-50 outline-none transition-all duration-200 h-32 resize-none"
												></textarea>
											</div>
										</div>
										<button
											type="submit"
											class="cursor-pointer font-700 border-none luxury-button w-full text-white py-4 rounded-md font-medium transition-all duration-300 uppercase tracking-1.5px text-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50">
											Кандидатствай
										</button>
										<div class="text-center text-xs text-gray-500 mt-4">
											Ще обработим вашето запитване с внимание. Очаквайте нашия отговор скоро!
										</div>
									</form>
								)}

								{isUploading() && (
									<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
										<div class="bg-white p-6 rounded-lg shadow-lg w-64">
											<h3 class="text-lg font-semibold mb-3">Submitting...</h3>
											<div class="w-full bg-gray-200 rounded h-4 overflow-hidden">
												<div
													class="progress-bar-contacts-form h-full rounded bg-blue-500"
													style={{
														animation: 'smoothProgress 15s linear forwards',
														background: 'linear-gradient(to right, #0d2e29, #1a875e)'
													}}
												/>
											</div>
										</div>
									</div>
								)}

								{isModalOpen() && (
									<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-5 px-5">
										<div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
											<h2 class="text-2xl font-bold mb-4 mt-1">Success!</h2>
											<p class="mb-5">The form has been sent successfully! We will get back to you as soon as possible.</p>
											<button
												onClick={closeModal}
												class="bg-brand text-white px-5 py-3 b-none rounded hover:bg-brand-second-action-hover transition-colors">
												Close
											</button>
										</div>
									</div>
								)}

								{errorMessage() && (
									<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-5 px-5">
										<div class="bg-white p-10 pt-1 rounded-lg shadow-lg max-w-lg w-full relative">
											<div
												onClick={closeModal}
												class="cursor-pointer b-none c-brand hover-c-brand-action transition-colors absolute top-4 right-4">
												<MdiCloseThick class="w-8" />
											</div>
											<h3 class="font-semibold mb-3">Oops...</h3>
											<div>It appears that our contact form is not working properly.</div>
											<div>Please contact us via WhatsApp.</div>
											<div class="mt-5 -ml-1"><a class="c-paper bg-brand text-white px-5 py-3 b-none rounded hover:bg-brand-second-action-hover transition-colors" href="https://wa.me/+447874333356" target="_blank" rel="noopener">Click to chat</a></div>
										</div>
									</div>
								)}
							</div>
						</div>
					</AnimatedComponent>
				</div>
			</section>
		</>
	);
}
