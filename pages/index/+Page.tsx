import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import RiCloseFill from '~icons/ri/close-fill';
import "solid-slider/slider.css";
import { Slider, createSlider, SliderButton, SliderProvider } from "solid-slider";
import { createSignal, JSX, onCleanup, Show } from 'solid-js';
import { createCollapsable } from "../../components/Collapsable";
import { Typography } from '../../components/Typography';
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { onMount } from "solid-js";
import { AnimatedH2 } from '../../components/TransitionH2';

const GallerySliderDesktop = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const options = { duration: 1000 };
	const [slider, { current, next, prev, moveTo }] = createSlider(options);

	return (
		<SliderProvider>
			<div class="max-w-1000px m-auto position-relative hidden md:block">
				<Slider options={{ loop: true, slides: { perView: 3, spacing: 10 } }}>
					{children}
				</Slider>
				<SliderButton class="cursor-pointer position-absolute top-45% left--15 bg-transparent b-none" prev>
					<RiArrowLeftSLine class="-ml-1 font-size-10 c-brand-second-action hover-c-brand transition-colors" />
				</SliderButton>
				<SliderButton class="cursor-pointer position-absolute top-45% right--15 bg-transparent b-none" next>
					<RiArrowRightSLine class="-mr-1 font-size-10 c-brand-second-action hover-c-brand transition-colors" />
				</SliderButton>
				{ /* <div class="flex flex-justify-center">
					<div class="flex flex-justify-center">
						<div class={"flex w-3 h-3 rd-50% mx-2 mt-4 " + (current() === 0 ? "bg-brand-dark" : "bg-brand")}></div>
						<div class={"flex w-3 h-3 rd-50% mx-2 mt-4 " + (current() === 1 ? "bg-brand-dark" : "bg-brand")}></div>
						<div class={"flex w-3 h-3 rd-50% mx-2 mt-4 " + (current() === 2 ? "bg-brand-dark" : "bg-brand")}></div>
					</div> 
				</div> */}
			</div>
		</SliderProvider>
	);
};

const GallerySliderMobile = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const options = { duration: 1000 };
	const [slider, { current, next, prev, moveTo }] = createSlider(options);

	return (
		<SliderProvider>
			<div class="max-w-1000px m-auto position-relative md:hidden block">
				<Slider options={{ loop: true }}>
					{children}
				</Slider>
				<SliderButton class="cursor-pointer position-absolute top-45% left-0 bg-transparent b-none" prev>
					<RiArrowLeftSLine class="-ml-1 font-size-9 c-brand-second-action hover-c-brand transition-colors" />
				</SliderButton>
				<SliderButton class="cursor-pointer position-absolute top-45% right-0 bg-transparent b-none" next>
					<RiArrowRightSLine class="-mr-1 font-size-9 c-brand-second-action hover-c-brand transition-colors" />
				</SliderButton>
			</div>
		</SliderProvider>
	);
};

export const GallerySlider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const [isDesktop, setIsDesktop] = createSignal(false);

	onMount(() => {
		const checkMediaQuery = () => setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
		checkMediaQuery();
		window.addEventListener("resize", checkMediaQuery);
		onCleanup(() => window.removeEventListener("resize", checkMediaQuery));
	});

	return (
		<>
			{isDesktop() ? (
				<GallerySliderDesktop>{children}</GallerySliderDesktop>
			) : (
				<GallerySliderMobile>{children}</GallerySliderMobile>
			)}
		</>
	);
};

function FleurDivider() {
	return (
		<div class="m-auto my-30 md-my-36 position-relative w-80%">
			<div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
			<div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="/assets/output-onlinepngtools.png" /></div>
		</div>
	);
}

const VideoPlayer = () => {
	return (
		<div class="flex flex-justify-center flex-items-center mt-20">
			<video
				class="mt-10 b-rd-3" style="width: 100%; width: -moz-available; width: -webkit-fill-available; width: fill-available;"
				autoplay
				controls
				muted
			>
				<source
					src="/assets/Professional Carpet Cleaning London - Fine Carpet Cleaning (1).mp4"
					type="video/mp4"
				/>
			</video>
		</div>
	);
};

function FullScreenImageGallery() {
	const [open, setOpen] = createSignal(false);

	const handleClick = () => {
		setOpen(!open());
	};

	return (
		<div class="relative">
			<img class="cursor-pointer max-w-full md-max-w-80% md-max-h-80% block m-auto" src="/assets/map2.png" alt="" onClick={handleClick} />
			<Show when={open()}>
				<div class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-85 z-9999" onClick={handleClick}>
					<RiCloseFill class="w-16 h-16 absolute top-0 right-0 mr-20 mt-14 p-2 text-white bg-transparent color-paper cursor-pointer hover-color-brand:hover" />
					<img src="/assets/map2.png" alt="" class="max-w-full max-h-full" />
				</div>
			</Show>
		</div>
	);
}

export function FaqSection() {
	const { Container, Entry } = createCollapsable()
	return <Container>
		<Entry>
			<li>
				<Typography variant="h3">1. How long have you been in the carpet cleaning business?</Typography>
				<Typography variant="body">"Fine Carpet Cleaning" Ltd. has been operating in the carpet cleaning industry since 2012. We serve both commercial and residential clients, and over the years, we've cleaned all kinds of carpets, rugs, upholstery, and stains. Through these experiences, we've acquired valuable knowledge and expertise. Our commitment to delivering top-notch service has driven us to improve our services in the following ways:</Typography>
				<ul class="ml--5" style="list-style: initial;">
					<Typography variant="li">
						<p>We continually update and upgrade our equipment, ensuring that we utilise the latest and most effective technologies available.</p>
					</Typography>
					<Typography variant="li">
						<p>We regularly evaluate and improve our cleaning products, staying current with industry advancements to provide the best results.</p>
					</Typography>
					<Typography variant="li">
						<p>We are dedicated to enhancing our expertise and skills by actively participating in additional professional courses and training programs. Our goal is to maintain a high level of competence and stay at the forefront of carpet cleaning practices.</p>
					</Typography>
				</ul>
			</li>
			<li>
				<Typography variant="h3">2. When do you need professional carpet cleaning?</Typography>
				<Typography variant="body">In our experience, the majority of our clients have sought our carpet cleaning services when:</Typography>
				<ul class="ml--5" style="list-style: initial;">
					<Typography variant="li">
						<p>Their carpet has had stains that they couldn’t remove by themselves;</p>
					</Typography>
					<Typography variant="li">
						<p>Their carpet has an unpleasant odour;</p>
					</Typography>
					<Typography variant="li">
						<p>Their carpet has been attracting pests, such as spiders or mice;</p>
					</Typography>
					<Typography variant="li">
						<p>Their carpet has lost its colour;</p>
					</Typography>
					<Typography variant="li">
						<p>They started to have allergies or asthma attacks;</p>
					</Typography>
					<Typography variant="li">
						<p>Their carpet has been visibly dirty;</p>
					</Typography>
					<Typography variant="li">
						<p>They wanted to prolong their carpet’s life;</p>
					</Typography>
					<Typography variant="li">
						<p>Or they simply wanted to refresh their carpets.</p>
					</Typography>
				</ul>
			</li>
			<li>
				<Typography variant="h3">3. How frequently should a carpet be professionally cleaned?</Typography>
				<Typography variant="body">How often your carpets should be deep cleaned depends on factors such as how fast the carpet becomes soiled. As a general guideline, it is advisable to have your carpet deep cleaned once every 12 months. However, we suggest considering professional carpet cleaning more often than once a year in the following situations:</Typography>
				<ul class="ml--5" style="list-style: initial;">
					<Typography variant="li">
						<p>If you have pets;</p>
					</Typography>
					<Typography variant="li">
						<p>If you have children;</p>
					</Typography>
					<Typography variant="li">
						<p>If your carpets are exposed to high foot traffic;</p>
					</Typography>
					<Typography variant="li">
						<p>If your carpets are exposed to indoor smoking;</p>
					</Typography>
					<Typography variant="li">
						<p>If your carpets get stained frequently.</p>
						<Typography variant="body">You can reach out to us if you seek expert advice or if you want to book a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-carpet-cleaning-services">professional carpet cleaning service</a>.</Typography></Typography>
				</ul>
			</li>
			<li>
				<Typography variant="h3">4. How much will a professional carpet cleaning cost?</Typography>
				<Typography variant="body">The price of carpet cleaning depends on several factors. The most significant among them are:</Typography>
				<ul class="ml--5" style="list-style: initial;">
					<Typography variant="li">
						<p>The number and size of the carpets;</p>
					</Typography>
					<Typography variant="li">
						<p>Their level of dirtiness;</p>
					</Typography>
					<Typography variant="li">
						<p>The type of carpets;</p>
					</Typography>
					<Typography variant="li">
						<p>The ease of access to them.</p>
						<Typography variant="body">For more specific pricing details regarding the carpet cleaning we offer, you can check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/prices">price list</a></Typography></Typography>
				</ul>
			</li>
			<li>
				<Typography variant="h3">5. How fast will the carpet get dry after a cleaning service?</Typography>
				<Typography variant="body">The drying time of a carpet is determined by various factors. Among them are:</Typography>
				<ul class="ml--5" style="list-style: initial;">
					<Typography variant="li">
						<p>The carpet type;</p>
					</Typography>
					<Typography variant="li">
						<p>Its level of soiling;</p>
					</Typography>
					<Typography variant="li">
						<p>The thickness of its pile;</p>
					</Typography>
					<Typography variant="li">
						<p>Whether it requires extra stain removal treatment or not.</p>
						<Typography variant="body">For example wool carpets tend to absorb more water and take longer to dry, typically ranging between 10 and 12 hours. In cases where the carpet is exceptionally dirty and requires multiple treatments, the drying process may extend even further.</Typography>
						<Typography variant="body">On the other hand, synthetic carpets tend to dry faster, usually within a span of 7 to 10 hours. Nevertheless, the drying duration still depends on the carpet's level of dirtiness and the necessity for multiple treatments.</Typography></Typography>
				</ul>
			</li>
		</Entry>
		<Entry>
			<li>
				<Typography variant="h3">6. How long will the carpet cleaning service take?</Typography>
				<Typography variant="body">The duration of our carpet cleaning service depends on the following factors:</Typography>
				<ul class="ml--5" style="list-style: initial;">
					<Typography variant="li">
						<p>The carpet's level of soiling;</p>
					</Typography>
					<Typography variant="li">
						<p>The cleaning methods that will be used on the carpet;</p>
					</Typography>
					<Typography variant="li">
						<p>Whether any stain removal treatments are required.</p>
						<Typography variant="body">On average, it typically ranges from 20 to 60 minutes per room.</Typography>
					</Typography>
				</ul>
			</li>

			<li>
				<Typography variant="h3">7. Will carpet cleaning remove the stains on my carpet?</Typography>
				<Typography variant="body"><strong>In summary, yes</strong>, professional carpet cleaning is very effective in removing stubborn stains, dirt, grime, bacteria, dust mites, allergens, mould, pet dander, and odours. However, some particularly tough stains, especially very old or improperly treated ones, can present challenges for complete removal, even with professional assistance.</Typography>
				<Typography variant="body">Thankfully, our extensive experience and high-quality equipment at "Fine Carpet Cleaning” Ltd. have led to our high-rates of successful stain removal. Nevertheless, we cannot guarantee the complete removal of every stain. We will thoroughly assess the stain and let you know during the quotation process whether or not the stain can be successfully eliminated.</Typography></li>
			<li>
				<Typography variant="h3">8. Are you able to give me a carpet cleaning quote over the phone, or do you need to visit my property?</Typography>
				<Typography variant="body"><strong>Yes</strong>, we can provide you with a cost estimate over the phone without the necessity of an in-person visit. For commercial properties, a site visit may be necessary. You have the option to get a carpet cleaning quote online as well.</Typography></li>
			<li>
				<Typography variant="h3">9. How soon can I expect a carpet cleaner to visit me?</Typography>
				<Typography variant="body">We will make every effort to schedule your appointment as soon as possible. Typically, our schedule is booked up to three days in advance, although occasional exceptions may be possible.</Typography></li>
			<li>
				<Typography variant="h3">10. What payment methods do you accept?</Typography>
				<Typography variant="body">We accept payment via debit/credit cards as well as cash, directly to our team.</Typography></li>
			<li>
				<Typography variant="h3">11. Can you provide me with an invoice for the carpet cleaning services?</Typography>
				<Typography variant="body">Yes, we will provide you with a receipt via email.</Typography></li>
			<li>
				<Typography variant="h3">12. Are you insured?</Typography>
				<Typography variant="body">Yes, we are fully insured.</Typography></li>
			<li>
				<Typography variant="h3">13. What happens if your cleaner damages anything while performing carpet cleaning at my property?</Typography>
				<Typography variant="body">We are fully insured, and if an accident happens, we are fully covered.</Typography></li>
		</Entry>
	</Container>
}

export default function Page() {
	return (
		<>
			<h1 class="mt-10 md-mt-20 font-size-14 md-font-size-21 md-line-height-18 line-height-16">Fine Carpet Cleaning</h1>
			<div class="flex flex-justify-center"><img class="b-rd-3 md-my-20 my-10 md-mt-10 mt-2" src="" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%); width: -moz-available; width: -webkit-fill-available; width: fill-available;" /></div>
			<div class="mt-10 py-8 px-8 md-px-14 b-rd-3 bg-paper line-height-8 text-justify font-size-4.4" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">“Fine Carpet Cleaning” Ltd. is a carpet cleaning company that operates in all London boroughs. We provide a variety of commercial and domestic carpet cleaning services, tailoring them to our client's needs.</div>

			<FleurDivider />

			<AnimatedH2>Our main cleaning services</AnimatedH2>
			<div class="p-6 pt-12 bg-paper b-rd-3 flex flex-justify-center" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
				<a href="/professional-carpet-cleaning-services">
					<img class="md-mt-3 mt--6 mx-auto block md-w-650px xs-w-330px w-270px" src="/assets/Професионално почистване на заведения.jpg" alt="" />
					<h3 class="flex flex-justify-center flex-content-center flex-wrap flex-items-center md-mt-16 md-mb-9 mb-4 text-center font-size-7 md-font-size-9">Professional carpet cleaning services</h3>
				</a>
			</div>

			<div class="p-6 pt-12 bg-paper mt-20 b-rd-3 flex flex-justify-center" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
				<a href="/professional-upholstery-cleaning-services">
					<img class="md-mt-3 mt--6 mx-auto block md-w-650px xs-w-330px w-270px" src="/assets/Професионално почистване на заведения.jpg" alt="" />
					<h3 class="flex flex-justify-center flex-content-center flex-wrap flex-items-center md-mt-16 md-mb-9 mb-4 text-center font-size-7 md-font-size-9">Professional upholstery cleaning services</h3>
				</a>
			</div>

			<div class="p-6 pt-12 bg-paper mt-20 b-rd-3 flex flex-justify-center" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
				<a href="/professional-rug-cleaning-services">
					<img class="md-mt-3 mt--6 mx-auto block md-w-650px xs-w-330px w-270px" src="/assets/Професионално почистване на заведения.jpg" alt="" />
					<h3 class="flex flex-justify-center flex-content-center flex-wrap flex-items-center md-mt-16 md-mb-9 mb-4 text-center font-size-7 md-font-size-9">Professional rug cleaning services</h3>
				</a>
			</div>

			<FleurDivider />

			<AnimatedH2>Equipment and products we use in “Fine Carpet Cleaning” Ltd.</AnimatedH2>

			<GallerySlider>
				<img src="/assets/home/equipments-2.jpg" alt="equipments-2" />
				<img src="/assets/home/equipments-4.jpg" alt="equipments-4" />
				<img src="/assets/home/vehicles-3.jpg" alt="vehicles-3" />
				<img src="/assets/home/vehicles-4.jpg" alt="vehicles-4" />
			</GallerySlider>

			<div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

				<p>We at “Fine Carpet Cleaning” Ltd. have accumulated years of expertise in caring for our clients’ carpets, rugs, and upholstery. We continuously seek new ways to improve our services by upgrading our equipment, cleaning products, and knowledge at every opportunity. This commitment has enabled us to reach the high level of service we offer today.</p>

				<p>The factors that set us apart from our competitors are:</p>
				<ul>
					<li class="ml--5">
						<p>We use professional carpet cleaning equipment from the best brands available in the UK: “<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>” and “<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>”. Additionally, our team’s engineer has made significant improvements to the machines to enhance their performance.</p>
					</li>
					<li class="ml--5">
						<p>Moreover, we use a high-filtration twin-motor vacuum cleaner, which we consider to be the best available. This vacuum cleaner is purpose-built for professional carpet cleaning, with one motor vigorously agitating the carpet while the other effectively suctions away any loose dirt, dry soil, and dust.</p>
					</li>
					<li class="ml--5">
						<p>We use <strong>over 20 high-quality cleaning products</strong> from the best brands on the UK and US markets. Among those brands are "Alltec," "Prochem," "Chemspec," "Solution World of Clean," and "TMF." We have used and tested almost all the detergents available on the market and have selected the ones that are most effective in removing dirt, dust, stains, and bacteria. We choose which ones to treat your carpets, rugs, or upholstery based on the stain, level of soiling, and type of fabric.</p>
					</li>
				</ul>
			</div>

			<FleurDivider />

			<AnimatedH2>Fine Carpet Cleaning Accreditations</AnimatedH2>
			<h3 class="mt-25 mb-15">“Fine Carpet Cleaning” Ltd. is a qualified member of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">"NCCA"</a> (National Carpet Cleaners Association)</h3>

			<GallerySlider>
				<img src="/assets/home/fine-carpet-cleaning-ncca-certificate-1.jpg" alt="fine-carpet-cleaning-ncca-certificate-1" />
				<img src="/assets/home/fine-carpet-cleaning-ncca-certificate-2.jpg" alt="fine-carpet-cleaning-ncca-certificate-2" />
				<img src="/assets/home/fine-carpet-cleaning-ncca-certificate-3.jpg" alt="fine-carpet-cleaning-ncca-certificate-3" />
			</GallerySlider>

			<div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

				<p>“NCCA” is one of the most respected and authoritative associations for training carpet cleaners. Founded in 1968, it is dedicated to the cleaning, maintenance, and restoration of carpets. The main objective of the association is to provide certificates of professionalism and high standards to partner companies that have passed a special test for practical knowledge and skills. This ensures the quality of the certified company’s services.</p>
			</div>

			<h3 class="mt-25 mb-15">“Fine Carpet Cleaning” Ltd. is listed on “<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a>"</h3>

			<div class="flex flex-justify-center"><img class="b-rd-3 md-my-20 my-10 md-mt-10 mt-2" src="/assets/home/fine-carpet-cleaning-checkatrade-certificate.jpg" alt="fine-carpet-cleaning-checkatrade-certificate" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%); width: -moz-available; width: -webkit-fill-available; width: fill-available;" /></div>

			<div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

				<p>“Checkatradе” is an organisation founded in 1998 to help consumers in the UK to find their specialist in a particular area, such as quality carpet cleaning. The main goal of the organisation is the collection of all quality companies in one place, covering high standards, transparency in customer service, and prices.</p>

				<p>In order to be accredited by “Checkatrade”, “Fine Carpet Cleaning” Ltd. had to pass a detailed inspection covering more than 20 aspects, such as:</p>

				<ul>
					<li class="ml--5">
						<p>ID.</p>
					</li>
					<li class="ml--5">
						<p>Reviews.</p>
					</li>
					<li class="ml--5">
						<p>Insurance.</p>
					</li>
					<li class="ml--5">
						<p>Qualifications.</p>
					</li>
					<li class="ml--5">
						<p>Membership in professional organisations.</p>
					</li>
					<li class="ml--5">
						<p>And many more.</p>
					</li>
				</ul>

				<p>After creating a listing on the “Checkatrade” website, each company is then permanently monitored based on user feedback posted on the organisation’s website.</p>

			</div>
			<h3 class="mt-25 md-mb-15 mb--5">“Fine Carpet Cleaning” Ltd. staff members are trained and certified</h3>

			<div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

				<p>On one hand, our ambition is to fully satisfy the customer’s needs to the best of our capabilities. On the other hand, the company culture of “Fine Carpet Cleaning” Ltd. strongly encourages constant striving for excellence. These two reasons combined led to the result that our staff members successfully completed a number of specialised professional courses, like:</p>

				<ul>
					<li class="ml--5">
						<p>Professional carpet and upholstery cleaning;</p>
					</li>
					<li class="ml--5">
						<p>Advanced spot and stain treatment and removal;</p>
					</li>
					<li class="ml--5">
						<p>And more.</p>
					</li>
				</ul>
				<p>Our goal is to be prepared for any situation, no matter how challenging it is, and leave nothing to chance.</p>
			</div>

			<FleurDivider />

			<AnimatedH2>Results from our services in “Fine Carpet Cleaning” Ltd.</AnimatedH2>

			<GallerySlider>
				<img src="/assets/home/1-same-day-carpet-cleaning.jpg" alt="1-same-day-carpet-cleaning" />
				<img src="/assets/home/2-professional-upholstery-cleaning-service.jpg" alt="2-professional-upholstery-cleaning-service" />
				<img src="/assets/home/3-professional-rug-cleaning-services.jpg" alt="3-professional-rug-cleaning-services" />
				<img src="/assets/home/4-professional-leather-sofa-cleaning-services.jpg" alt="4-professional-leather-sofa-cleaning-services" />
				<img src="/assets/home/5-house-carpet-cleaning-services.jpg" alt="5-house-carpet-cleaning-services" />
				<img src="/assets/home/6-professional-upholstery-cleaning.jpg" alt="6-professional-upholstery-cleaning" />
				<img src="/assets/home/7-restaurant-carpet-cleaning.jpg" alt="7-restaurant-carpet-cleaning" />
				<img src="/assets/home/8-mattress-cleaning-service-london.jpg" alt="8-mattress-cleaning-service-london" />
				<img src="/assets/home/9-professional-carpet-cleaning-services.jpg" alt="9-professional-carpet-cleaning-services" />
				<img src="/assets/home/10-dry-carpet-cleaning-services.jpg" alt="10-dry-carpet-cleaning-services" />
				<img src="/assets/home/11-office-carpet-cleaning-services.jpg" alt="11-office-carpet-cleaning-services" />
				<img src="/assets/home/12-professional-leather-sofa-cleaning.jpg" alt="12-professional-leather-sofa-cleaning" />
				<img src="/assets/home/13-professional-deep-carpet-cleaning-services.jpg" alt="13-professional-deep-carpet-cleaning-services" />
				<img src="/assets/home/14-professional-office-carpet-cleaning.jpg" alt="14-professional-office-carpet-cleaning" />
				<img src="/assets/home/15-water-free-carpet-cleaning.jpg" alt="15-water-free-carpet-cleaning" />
				<img src="/assets/home/16-rug-cleaning-london.jpg" alt="16-rug-cleaning-london" />
				<img src="/assets/home/17-professional-carpet-stain-removal.jpg" alt="17-professional-carpet-stain-removal" />
				<img src="/assets/home/18-professional-furniture-cleaning-services.jpg" alt="18-professional-furniture-cleaning-services" />
				<img src="/assets/home/19-professional-pillow-cleaning.jpg" alt="19-professional-pillow-cleaning" />
				<img src="/assets/home/20-professional-sofa-cleaning-services.jpg" alt="/20-professional-sofa-cleaning-services" />
			</GallerySlider>

			<VideoPlayer />

			<FleurDivider />

			<AnimatedH2>Reviews for our services</AnimatedH2>

			<ReviewSlider>
				<StarReview
					src="/assets/profile-pics-reviews/unnamed90.png"
					reviewText="Professional, quick to respond. I'm very happy with their service."
					name="Zaneta Priscepionkaite"
					date="July 2024"
					stars={5}
					hrefGoogleReview="https://g.co/kgs/c4A87Ud"
				/>
				<StarReview
					src="/assets/profile-pics-reviews/unnamed90.png"
					reviewText="FANTASTIC STAFF, FANTASTIC SERVICE, FANTASTIC WORK & MOST IMPORTANTLY FANTASTIC PRICE, Cannot be beaten if you want your carpets cleaned,,, one quick call and everything was taken care of.. IF YOU ARE GETTING YOUR CARPETS CLEANED MAKE SURR YOU USE THESE GUYS 100%👍"
					name="Zaneta Priscepionkaite"
					date="July 2024"
					stars={5}
					hrefGoogleReview="https://g.co/kgs/c4A87Ud"
				/>
				<StarReview
					src="/assets/profile-pics-reviews/unnamed90.png"
					reviewText="Professional, quick to respond. I'm very happy with their service."
					name="Zaneta Priscepionkaite"
					date="July 2024"
					stars={5}
					hrefGoogleReview="https://g.co/kgs/c4A87Ud"
				/>

			</ReviewSlider>

			<FleurDivider />

			<AnimatedH2>Areas we cover</AnimatedH2>

			<FullScreenImageGallery />

			<p class="md-max-w-80% font-size-4 line-height-5.5 md-line-height-6 m-auto mt-5 ">*”Fine Carpet Cleaning” Ltd. operates in all of London. The map below shows all of the London postcodes we cover.<br></br>
				**Transport surcharge may apply for all other post codes.</p>

			<FleurDivider />

			<AnimatedH2>Working hours</AnimatedH2>
			<table class="w-full m-auto font-sans">
				<thead style="box-shadow: 0px 20px 20px 1px rgb(84 89 95 / 10%);">
					<tr class="h-20">
						<td class="c-paper bg-#2e5c47 font-size-7 pl-5 b-rd-lt-3"><strong>Day</strong></td>
						<td class="c-paper bg-#2e5c47 font-size-7 pl-5 b-rd-rt-3"><strong>Time</strong></td>
					</tr>
				</thead>
				<tbody style="box-shadow: 0px 20px 20px 1px rgb(84 89 95 / 10%);">
					<tr>
						<td class="bg-paper pl-5 py-2 font-500">Monday</td>
						<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
					</tr>
					<tr>
						<td class="bg-paper pl-5 py-2 font-500">Tuesday</td>
						<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
					</tr>
					<tr>
						<td class="bg-paper pl-5 py-2 font-500">Wednesday</td>
						<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
					</tr>
					<tr>
						<td class="bg-paper pl-5 py-2 font-500">Thursday</td>
						<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
					</tr>
					<tr>
						<td class="bg-paper pl-5 py-2 font-500">Friday</td>
						<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
					</tr>
					<tr>
						<td class="bg-paper pl-5 py-2 font-500">Saturday</td>
						<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
					</tr>
					<tr>
						<td class="bg-paper pl-5 py-2 font-500">Sunday</td>
						<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
					</tr>
					<tr>
						<td class="b-rd-lb-3 b-rd-rb-3 bg-#2e5c47 outline-color" colspan="3" style="box-shadow: 0px 20px 20px 1px rgb(247 247 247/ 100%);"><p class="font-size-3.5 md-font-size-4 px-5 md-my-7 c-paper md-line-height-0 line-height-6 word-spacing-0.5">*We also offer performing services out of working hours and at night, which will be included in the final price.</p></td>
					</tr>
				</tbody>
			</table>

			<FleurDivider></FleurDivider>

			<AnimatedH2>Frequently asked questions</AnimatedH2>

			<FaqSection />

			<FleurDivider></FleurDivider>

			<div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
				<a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
				<a href="/prices"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">PRICES</button></a>
			</div>
		</>
	);
}