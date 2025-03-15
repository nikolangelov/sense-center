import "solid-slider/slider.css";
import { AnimatedComponent } from '../../components/AnimateOnView';
import { createEffect, createMemo, createSignal } from 'solid-js';
import MdiCloseThick from '~icons/mdi/close-thick?width=24px&height=24px';
import confetti from "canvas-confetti";
import RiAtLine from "~icons/ri/at-line";
import RiWhatsappLine from "~icons/ri/whatsapp-line";
import MdiPhoneClassic from "~icons/mdi/phone-classic";
import RiTimerLine from '~icons/ri/timer-line';

function svgIconViber() {
	return (
		<svg fill="#ffffff" width="25px" height="25px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.41600000000000004"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.198 0.005c-2.568 0.031-8.089 0.453-11.177 3.286-2.297 2.276-3.099 5.641-3.193 9.802-0.078 4.146-0.172 11.932 7.333 14.052v3.229c0 0-0.047 1.292 0.807 1.557 1.052 0.333 1.651-0.661 2.651-1.729l1.865-2.109c5.135 0.427 9.068-0.557 9.521-0.703 1.042-0.333 6.911-1.083 7.87-8.87 0.984-8.042-0.479-13.109-3.12-15.401h-0.016c-0.797-0.734-4-3.068-11.156-3.094 0 0-0.531-0.036-1.385-0.021zM15.286 2.266c0.729-0.005 1.172 0.026 1.172 0.026 6.057 0.016 8.948 1.839 9.63 2.453 2.224 1.906 3.37 6.474 2.531 13.188-0.797 6.51-5.557 6.922-6.438 7.203-0.375 0.12-3.839 0.974-8.203 0.693 0 0-3.25 3.922-4.266 4.932-0.161 0.177-0.349 0.229-0.469 0.203-0.172-0.042-0.224-0.255-0.214-0.547l0.031-5.359c-6.365-1.76-5.99-8.401-5.922-11.87 0.078-3.469 0.729-6.307 2.667-8.229 2.609-2.359 7.297-2.677 9.479-2.693zM15.766 5.734c-0.219-0.005-0.401 0.177-0.401 0.396 0 0.224 0.182 0.401 0.401 0.401 2.005-0.036 3.938 0.724 5.375 2.12 1.453 1.411 2.161 3.307 2.188 5.786 0 0.219 0.177 0.401 0.401 0.401v-0.016c0.219 0 0.401-0.177 0.401-0.396 0.099-2.359-0.776-4.651-2.417-6.349-1.583-1.547-3.589-2.344-5.948-2.344zM10.495 6.651c-0.281-0.042-0.573 0.016-0.818 0.161h-0.021c-0.542 0.318-1.047 0.719-1.526 1.255-0.365 0.422-0.563 0.849-0.615 1.26-0.031 0.245-0.010 0.49 0.063 0.724l0.026 0.016c0.411 1.208 0.948 2.37 1.604 3.464 0.844 1.536 1.885 2.958 3.094 4.229l0.036 0.052 0.057 0.042 0.036 0.042 0.042 0.036c1.276 1.214 2.698 2.255 4.24 3.109 1.76 0.958 2.828 1.411 3.469 1.599v0.010c0.188 0.057 0.359 0.083 0.531 0.083 0.547-0.042 1.063-0.26 1.469-0.63 0.521-0.469 0.932-0.984 1.24-1.531v-0.010c0.307-0.578 0.203-1.125-0.24-1.495-0.885-0.776-1.849-1.464-2.865-2.057-0.682-0.37-1.375-0.146-1.656 0.229l-0.599 0.755c-0.307 0.375-0.865 0.323-0.865 0.323l-0.016 0.010c-4.161-1.063-5.271-5.276-5.271-5.276s-0.052-0.573 0.333-0.865l0.75-0.604c0.359-0.292 0.609-0.984 0.224-1.667-0.589-1.021-1.276-1.979-2.052-2.865-0.167-0.208-0.406-0.349-0.672-0.401zM16.458 7.839c-0.531 0-0.531 0.802 0.005 0.802 1.333 0.021 2.604 0.573 3.531 1.531 0.844 0.932 1.281 2.172 1.198 3.427 0.005 0.219 0.182 0.396 0.401 0.396l0.016 0.021c0.219 0 0.401-0.182 0.401-0.401 0.036-1.589-0.458-2.922-1.427-3.99-0.974-1.068-2.333-1.667-4.068-1.786-0.021 0-0.036 0-0.057 0zM17.115 9.995c-0.547-0.016-0.568 0.802-0.026 0.818 1.318 0.068 1.958 0.734 2.042 2.104 0.005 0.219 0.182 0.391 0.396 0.391h0.016c0.224-0.010 0.401-0.203 0.385-0.427-0.094-1.786-1.068-2.792-2.797-2.885-0.005 0-0.010 0-0.016 0z"></path> </g></svg>
	)
}

const contacts = [
	{ type: "Phone", value: "0882820331", icon: MdiPhoneClassic, link: "tel:0882820331" },
	{ type: "Email", value: "info@thebarbershop.bg", icon: RiAtLine, link: "mailto:info@thebarbershop.bg" },
	{ type: "WhatsApp", value: "The Barber Shop", icon: RiWhatsappLine, link: "https://wa.me/" },
	{ type: "Viber", value: "The Barber Shop", icon: svgIconViber, link: "viber://chat?number=0882820331" },
];

function ContactSection() {
	return (
		<div>
			<div class="space-y-5 mb-10 w-full">
				{contacts.map(({ type, value, icon: Icon, link }) => (
					<a
						href={link}
						class="flex items-center gap-4 bg-white/20 hover:bg-white/30 transition-all duration-300 p-5 rounded-3xl shadow-lg cursor-pointer border border-white/30 transform hover:scale-105 hover:shadow-2xl w-full"
						style="box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); background: linear-gradient(89.96deg, rgba(255, 255, 255, 0.38) 0.03%, rgba(255, 255, 255, 0.233) 49.67%, rgba(255, 255, 255, 0.0) 99.96%);"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div class="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-#d19d64 to-#c27832 shadow-md">
							<Icon class="text-white w-7 h-7" />
						</div>
						<div>
							<p class="my-1 text-5 font-semibold" style="font-family: 'Oswald', sans-serif !important">{type}</p>
							<p class="my-1 text-sm">{value}</p>
						</div>
					</a>
				))}
			</div>
			<div class="absolute top-[-50px] left-[50%] transform -translate-x-1/2 w-16 h-16 bg-white/20 rounded-full blur-3xl hidden md:block"></div>
			<div class="absolute bottom-[-50px] right-[-50px] w-24 h-24 bg-white/10 rounded-full blur-3xl hidden md:block"></div>
		</div>
	);
}


const getToday = () => {
    return new Date().toLocaleString("bg-BG", { weekday: "long" });
};

const workingHours = [
	{ day: "понеделник", open: "09:00", close: "17:00" },
	{ day: "вторник", open: "09:00", close: "17:00" },
	{ day: "сряда", open: "09:00", close: "17:00" },
	{ day: "четвъртък", open: "09:00", close: "17:00" },
	{ day: "петък", open: "09:00", close: "17:00" },
	{ day: "събота", open: "Затворено", close: "Затворено" },
	{ day: "неделя", open: "Затворено", close: "Затворено" },
];

function WorkingHoursTable() {
	const [today] = createSignal(getToday());

	return (
		<div class="w-full mx-auto max-w-lg bg-white shadow-xl rounded-2xl p-6">
			<h2 class="text-2xl font-bold text-gray-800 text-center mb-4 flex items-center justify-center gap-3 mt-6">
				<RiTimerLine class="c-brand" /> Работно време
			</h2>
			<table class="w-full mt-10 text-left border-collapse">
				<thead>
					<tr class="text-gray-700 border-b" style="font-family: 'Oswald', sans-serif !important">
						<th class="lg:p-3">Ден</th>
						<th class="lg:p-3">Отваряне</th>
						<th class="lg:p-3">Затваряне</th>
					</tr>
				</thead>
				<tbody>
					{workingHours.map(({ day, open, close }) => (
						<tr
							class={`border-b capitalize ${day === today() ? "bg-brand font-semibold bg-opacity-50" : "bg-gray-100"}`}
						>
							<td class="lg:px-5 lg:py-4 px-2 py-3 tracking-normal">{day}</td>
							<td class="lg:px-5 lg:py-4 px-2 py-3 tracking-normal">{open}</td>
							<td class="lg:px-5 lg:py-4 px-2 py-3 tracking-normal">{close}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}


function GoogleMapIframe() {
	const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2933.53860479928!2d23.352789!3d42.671132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cc743ddfd7%3A0xfdafbdb8cd44f23!2sThe%20Barber%20Shop%20Sofia!5e0!3m2!1sen!2sbg!4v1741095880781!5m2!1sen!2sbg`;

	return (
		<iframe
			src={mapSrc}
			width="100%"
			height="100%"
			style={{ border: 0 }}
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		></iframe>
	);
}

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
			<section class="lg-pt-55 pb-20 pt-30 px-2 md:px-4 w-full" style="background-attachment: fixed; background-image: linear-gradient(rgba(85, 36, 8, 0.28), rgba(255, 255, 255, 0) ), url(/assets/designbg.png); background-position: center; background-repeat: repeat; background-size: cover;">
				<div class="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-20 mx-2 md:mx-20 lg:mx-10 xl:mx-45">
					<div class="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start items-center lg:items-start">
						<AnimatedComponent class="w-full">
							<h2 class="uppercase important-mb-10 pt-0 mt-0 lg:text-left">Контакти</h2>
							<ContactSection />
						</AnimatedComponent>
						<AnimatedComponent>
							<button
								class="mt-3 cursor-pointer text-center w-45 lg-w-55 bg-brand hover:c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-4.5 font-500 py-3 c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
								Запази час
							</button>
						</AnimatedComponent>
					</div>

					<AnimatedComponent class="container-form lg:w-1/2s mt-20 md:mt-0">
						<div class="form-container w-full max-w-150 glass-effect rounded-2xl overflow-hidden relative">
							<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-900 to-red-600 opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
							<div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-400 to-amber-500 opacity-10 rounded-full transform -translate-x-12 translate-y-8"></div>

							<div class="md:p-8 p-5">
								<h2 class="important-mt-0 md:mt-5 mb-15">Изпрати запитване</h2>
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

			<div class="pt-20 lg-pb-20 pb-15" style="background-image: url(/assets/bg-2.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;">
				<div class="flex lg:flex-row flex-col gap-15 lg:gap-0">
					<div class="lg:w-1/2 px-5 md:px-0 mx-auto">
						<WorkingHoursTable />
					</div>

					<div class="lg:w-1/2">
						<div class="md:w-80% h-300px lg:h-full px-5 md:px-0 mx-auto">
							<GoogleMapIframe />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
