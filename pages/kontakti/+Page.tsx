import "solid-slider/slider.css";
import { AnimatedComponent } from '../../components/AnimateOnView';
import { BackgroundIcons } from "../../components/BackgroundIcons";
import { createSignal, onMount } from "solid-js";
import MdiCloseThick from '~icons/mdi/close-thick';
import { H3Pink } from "../../components/H2WithImage";
import { Component } from "solid-js";
import MdiEmail from '~icons/mdi/email';
import RiPhoneFill from '~icons/ri/phone-fill';
import { DoodleDecor } from "../../components/BackgroundDecor";

const contacts = [
	{
		type: "phone",
		value: "+359 879 800 013",
		link: "tel:+359879800013",
		color: "bg-brand-blue/70",
		icon: RiPhoneFill,
		bgImage: "/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp",
	},
	{
		type: "phone",
		value: "+359 877 800 770",
		link: "tel:+359877800770",
		color: "bg-brand-purple/70",
		icon: RiPhoneFill,
		bgImage: "/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp",
	},
	{
		type: "email",
		value: "CONTACT@SENSE-CENTER.BG",
		link: "mailto:contact@sense-center.bg",
		color: "bg-brand-orange/70",
		icon: MdiEmail,
		bgImage: "/assets/detsa-s-autizam/поставяне-диагноза-дете-аутизъм.webp",
	},
];

const ContactSection: Component = () => {
	return (
		<div
			class="w-full flex flex-col gap-4 items-center justify-center p-6"
			style={{
				"background-image": "url('/assets/puzzle-bg.png')",
				"background-repeat": "no-repeat",
				"background-position": "center",
				"background-size": "cover",
			}}
		>
			{contacts.map(({ value, link, icon: Icon, color, bgImage }) => (
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					class="relative flex items-center gap-3 text-white text-lg font-semibold px-6 py-4 rounded-xl w-full max-w-200 shadow-lg overflow-hidden"
				>
					<div class="absolute inset-0 bg-cover bg-center" style={{ "background-image": `url(${bgImage})` }}></div>

					<div class={`absolute inset-0 ${color}`}></div>

					<div class="relative z-10 flex items-center gap-3">
						<Icon class="w-9 h-9 c-paper" />
						<span class="font-[MyriadPro-SemiboldCond] font-size-22px c-paper pt-0.2">{value}</span>
					</div>
				</a>
			))}
		</div>
	);
};

interface ContactUsProps { onSuccess: () => void; onError: () => void; setUploading: (v: boolean) => void; }

const ContactUs = ({ onSuccess, onError, setUploading }: ContactUsProps) => {
	let form: HTMLFormElement | undefined;
	const [currentUrl, setCurrentUrl] = createSignal("");

	onMount(() => {
		setCurrentUrl(window.location.href);
	});

	const sendEmail = (e: Event) => {
		e.preventDefault();

		if (!form) return;
		setUploading(true);

		setTimeout(() => {
			setUploading(false);
			onSuccess();
		}, 1000);
	};

	return (
		<div class="flex items-center justify-center pb-8 pt-6 px-5 relative overflow-hidden b-rd-14px">
			<div
				class="absolute inset-0 bg-cover bg-center"
				style={{ "background-image": "url('/assets/detsa-s-autizam/наблюдение-дете-аутизъм.webp')" }}
			></div>

			<div class="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-brand-purple/70"></div>

			<div class="w-full relative z-10">
				<form class="space-y-4" ref={(el) => (form = el)} onSubmit={sendEmail}>
					<div>
						<label class="block text-white text-sm font-medium mb-2">
							Име
						</label>
						<input
							name="name"
							type="text"
							class="w-full px-4 py-3 bg-white bg-opacity-30 backdrop-blur-sm border-0 rounded-lg text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:bg-opacity-40 transition-all"
							required
						/>
					</div>
					<div>
						<label class="block text-white text-sm font-medium mb-2">
							Фамилия
						</label>
						<input
							name="surname"
							type="text"
							class="w-full px-4 py-3 bg-white bg-opacity-30 backdrop-blur-sm border-0 rounded-lg text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:bg-opacity-40 transition-all"
							required
						/>
					</div>
					<div>
						<label class="block text-white text-sm font-medium mb-2">
							Телефон
						</label>
						<input
							name="phone"
							type="tel"
							class="w-full px-4 py-3 bg-white bg-opacity-30 backdrop-blur-sm border-0 rounded-lg text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:bg-opacity-40 transition-all"
							required
						/>
					</div>
					<div>
						<label class="block text-white text-sm font-medium mb-2">
							Имейл
						</label>
						<input
							name="email_id"
							type="email"
							class="w-full px-4 py-3 bg-white bg-opacity-30 backdrop-blur-sm border-0 rounded-lg text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:bg-opacity-40 transition-all"
							required
						/>
					</div>
					<div>
						<label class="block text-white text-sm font-medium mb-2">
							Напишете своето запитване
						</label>
						<textarea
							name="message"
							class="mb-4 w-full px-4 py-3 bg-white bg-opacity-30 backdrop-blur-sm border-0 rounded-lg text-white placeholder-white placeholder-opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:bg-opacity-40 transition-all h-24 resize-none"
						/>
					</div>

					<input type="hidden" name="submitted_from_url" value={currentUrl()} />

					<div class="mt-8 flex items-center justify-center">
						<a href="/"
							class="group relative rounded-8px shadow-md overflow-hidden px-11 pb-3 pt-3.5 xl:mr-12"
							style={{
								"background-image": `url(/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp)`,
								"background-size": "cover",
								"background-position": "center",
							}}>
							<div class="absolute inset-0 bg-brand-orange/80 group-hover-bg-brand-orange-hover/80 transition-all"></div>
							<div class="flex justify-center items-center c-paper">
								<div class="text-white font-[MYRIADPRO-COND] uppercase text-center leading-4.5 md:leading-5.5 font-size-16px md:font-size-18px text-shadow-lg">
									Изпрати
								</div>
							</div>
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

const getToday = () => {
	return new Date()
		.toLocaleString("bg-BG", { weekday: "long" })
		.toLowerCase()
		.trim();
};
const workingHours = [
	{ day: "понеделник", open: "9:00", close: "20:00", bgClass: "bg-brand-pink/70", bgImage: "/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" },
	{ day: "вторник", open: "9:00", close: "20:00", bgClass: "bg-brand-blue/70", bgImage: "/assets/detsa-s-autizam/поставяне-диагноза-дете-аутизъм.webp" },
	{ day: "сряда", open: "9:00", close: "20:00", bgClass: "bg-brand-purple/70", bgImage: "/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp" },
	{ day: "четвъртък", open: "9:00", close: "20:00", bgClass: "bg-brand-orange/70", bgImage: "/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp" },
	{ day: "петък", open: "9:00", close: "20:00", bgClass: "bg-brand-pink/70", bgImage: "/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp" },
	{ day: "събота", open: "9:00", close: "20:00", bgClass: "bg-brand-blue/70", bgImage: "/assets/detsa-s-autizam/поставяне-диагноза-дете-аутизъм.webp" },
	{ day: "неделя", closed: true, bgClass: "bg-brand-purple/70", bgImage: "/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp" },
];

function WorkingHoursTable() {
	const [today] = createSignal(getToday());

	return (
		<div class="w-full max-w-xl mx-auto py-4 mt--8">
			<div class="space-y-3">
				{workingHours.map(({ day, open, close, closed, bgClass, bgImage }) => (
					<AnimatedComponent class="relative rounded-12px overflow-hidden">
						<div
							class="absolute inset-0 bg-cover bg-center"
							style={{ "background-image": `url(${bgImage})` }}
						></div>

						<div class={`absolute inset-0 ${bgClass}`}></div>

						<div class="absolute inset-0 opacity-10">
							<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
								<defs>
									<pattern id={`pattern-${day}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
										<circle cx="20" cy="20" r="15" fill="none" stroke="white" stroke-width="1" opacity="0.3" />
										<circle cx="5" cy="5" r="3" fill="white" opacity="0.2" />
										<circle cx="35" cy="35" r="3" fill="white" opacity="0.2" />
									</pattern>
								</defs>
								<rect width="100%" height="100%" fill={`url(#pattern-${day})`} />
							</svg>
						</div>

						<div class="relative z-10 py-5 px-6 flex justify-between items-center text-white">
							<div class="font-[MyriadPro-SemiboldCond] capitalize c-paper important-font-size-22px pt-1px">
								{day}
							</div>
							<div class="text-right pt-1px">
								{closed ? (
									<span class="font-[MyriadPro-SemiboldCond] c-paper important-font-size-22px">Почивен ден</span>
								) : (
									<span class="font-[MyriadPro-SemiboldCond] c-paper important-font-size-22px">{open}-{close} ч.</span>
								)}
							</div>
						</div>
					</AnimatedComponent>
				))}
			</div>
		</div>
	);
}

export default function Page() {
	const [isModalOpen, setIsModalOpen] = createSignal(false);
	const [isUploading, setIsUploading] = createSignal(false);
	const [errorMessage, setErrorMessage] = createSignal(false);

	const handleSuccess = () => {
		setIsModalOpen(true);
		setErrorMessage(false);
	};

	const handleError = () => {
		setErrorMessage(true);
		setIsModalOpen(false);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setErrorMessage(false);
	};

	return (
		<>
			<section class="xl:px-30 mx-20px pt-50 md:pt-65">
				<div class="relative">
					<BackgroundIcons />
					<h1
						class="relative z-99 text-center px-5 md:px-10 uppercase leading-[1.4] font-bold inline-block important-font-size-40px important-md:font-size-55px important-leading-40px important-md:leading-60px mb-10 tracking-0"
						style={{
							'background-image': 'linear-gradient(to right,rgb(253, 172, 245),rgb(223, 25, 74)',
							'-webkit-background-clip': 'text',
							'-webkit-text-fill-color': 'transparent',
							display: 'inline-block',
							'padding-bottom': '0.2em',
						}}
					>
						Заедно можем да отключим и развием потенциала на вашето дете!
					</h1>

					<ContactSection />

					<div class="mt-8 flex items-center justify-center">
						<a href="/"
							class="group relative rounded-12px shadow-md overflow-hidden text-white text-lg font-[MyriadPro-SemiboldCond] px-7 pb-1.5 pt-2 xl:mr-12"
							style={{
								"background-image": `url(/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp)`,
								"background-size": "cover",
								"background-position": "center",
							}}>
							<div class="absolute inset-0 bg-brand/80 group-hover-bg-brand-hover/80 transition-all"></div>
							<div class="flex justify-center items-center c-paper">
								<div class="text-white font-[MyriadPro-SemiboldCond] text-center leading-4.5 md:leading-5.5 font-size-14px md:font-size-16px">
									ЗАПАЗЕТЕ ЧАС ЗА<br />ПЪРВИЧНА ОЦЕНКА
								</div>
							</div>
						</a>
					</div>
				</div>
			</section>

			<section class="xl:px-30 mx-20px pt-15 md:pt-30">
				<div class="flex flex-col items-center justify-center gap-10 mt-20">
					<AnimatedComponent class="lg:w-2/4">
						<h2 class="text-left case-normal px-5 md:px-8 leading-[1.4] c-gray-900 mt-55px important-leading-9 important-md:leading-11 important-font-size-36px important-md:font-size-40px">
							Имате въпроси за нашите терапии или искате да научите повече за Sense Center!
						</h2>
						<p class="px-5 md:px-8 md:pb-2 pt-3 important-font-size-20px important-md:font-size-22px font-[MYRIADPRO-Light] important-md:leading-1.9rem important-leading-1.6rem">Попълнете контактната форма и наш служител ще се свърже с Вас, за да Ви предостави цялата необходима информация.</p>
						<div class="py-1 md:py-5 md:px-3">
							{!isModalOpen() && !errorMessage() && (
								<ContactUs
									onSuccess={handleSuccess}
									onError={handleError}
									setUploading={setIsUploading}
								/>
							)}
						</div>
					</AnimatedComponent>

					{isUploading() && (
						<div class="fixed inset-0 flex items-center justify-center bg-paper-inv bg-opacity-50 z-50">
							<div class="bg-white p-6 shadow-lg w-64">
								<h3 class="text-lg font-semibold mb-3">Изпращане...</h3>
								<div class="w-full bg-gray-200 h-4 overflow-hidden relative">
									<div
										class="h-full bg-blue-500 relative"
										style={{
											background: 'linear-gradient(to right, #eba65b, #bf7e36)',
										}}
									>
										<div
											class="progress-bar-contacts-form-span"
										/>
									</div>
								</div>
							</div>
						</div>
					)}

					{isModalOpen() && (
						<div class="fixed inset-0 flex items-center justify-center bg-paper-inv bg-opacity-50 z-5 px-5">
							<div class="bg-white p-8 shadow-lg max-w-md w-full">
								<h2 class="text-2xl font-bold pl-0 md:mb-6 mt-1 text-left">Успешно изпращане!</h2>
								<p class="mb-5">Съобщението е успешно изпратено. Ще се свържем с Вас възможно най-скоро.</p>
								<button
									onClick={closeModal}
									class="cursor-pointer bg-brand text-white px-5 py-3 b-none hover:bg-brand-dark transition-colors">
									Затвори
								</button>
							</div>
						</div>
					)}

					{errorMessage() && (
						<div class="fixed inset-0 flex items-center justify-center bg-paper-inv bg-opacity-50 z-5 px-5">
							<div class="bg-white p-10 pt-4 shadow-lg max-w-lg w-full relative">
								<div
									onClick={closeModal}
									class="cursor-pointer b-none c-brand hover-c-brand-action transition-colors absolute top-4 right-4">
									<MdiCloseThick class="w-8" />
								</div>
								<h3 class="font-semibold mb-3 text-left">Oops...</h3>
								<div>Изглежда, че нашата контактна форма не работи правилно.</div>
								<div>Моля, свържете се с нас чрез Viber.</div>
								<div class="mt-5 -ml-1"><a class="c-paper bg-brand text-white px-5 py-3 b-none hover:bg-brand-dark transition-colors" href="viber://chat?number=%2B359882820331" target="_blank" rel="noopener">Към чат</a></div>
							</div>
						</div>
					)}
				</div>
			</section>

			<DoodleDecor variant="pink" />

			<div class="w-full px-5 lg:px-0 md:mx-20 lg:mx-0 mt-8 md:mt-2">
				<div class="flex items-center md:justify-center mb-2 md:mb-5">
					<H3Pink variant="h2" title="Работно време" />
				</div>
				<WorkingHoursTable />
			</div>

			<DoodleDecor variant="purple" />
		</>
	);
}
