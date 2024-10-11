import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../components/FacebookLikeGallery';
import { createCollapsable } from '../../components/Collapsable';
import { Typography } from '../../components/Typography';
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../components/FrequentlyOrderedTogether';
import { PriceTable } from '../../components/PriceTable';
import { createEffect } from "solid-js";

const VideoPlayer = () => {
	return (
		<div class="flex flex-justify-center flex-items-center mt-20">
			<iframe
				class="mt-10 b-rd-3 h-200px md-h-500px"
				style="width: 100%;"
				src="https://www.youtube.com/embed/A-fIXKhu9sk?autoplay=1&mute=1"
				allow="autoplay; encrypted-media"
			></iframe>
		</div>
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

function FaqSection() {
	const { Container, Entry } = createCollapsable()
	return <Container>
		<Entry>
			<li>
				<Typography variant="h3">1. Do you fee for cancellation?</Typography>
				<Typography variant="body">We require a deposit before performing the cleaning service. If you cancel the service on the day of the cleaning you will lose that deposit.</Typography></li>
			<li>
				<Typography variant="h3">2. Should I pay for the congestion / parking charge?</Typography>
				<Typography variant="body">Yes, we kindly ask that the client arrange a suitable parking space for our vehicles within close proximity of the property and to cover any parking / congestion expenses.</Typography></li>
			<li>
				<Typography variant="h3">3. What if I live on the 4th floor or above and I have no lift?</Typography>
				<Typography variant="body">Due to the considerable weight of our equipment, which exceeds 50 kilograms, an additional fee is applied for each additional floor that requires manual transportation. The reason behind this is that it typically consumes a significant amount of time and can lead to faster tiring among our technicians. Consequently, this may reduce our overall productivity for the day compared to our standard output.</Typography></li>
			<li>
				<Typography variant="h3">4. Are you insured?</Typography>
				<Typography variant="body">Yes, we are completely insured.</Typography></li>
			<li>
				<Typography variant="h3">5. What happens if your upholstery cleaners in London damage anything?</Typography>
				<Typography variant="body">We are fully insured and if an accident happens it will be covered by our upholstery cleaning company.</Typography></li>
		</Entry>
		<Entry>
			<li>
				<Typography variant="h3">6. How long does the process of upholstery deep cleaning services take?</Typography>
				<Typography variant="body">The duration of the upholstery fabric cleaning services process mainly depends on:</Typography></li>
			<ul class="ml--5" style="list-style: initial;">
				<Typography variant="li">
					<p>How soiled the upholstery is;</p>
				</Typography>
				<Typography variant="li">
					<p>If it needs any stain removal treatments;</p>
				</Typography>
				<Typography variant="li">
					<p>What cleaning method will be used on the upholstery.</p>
				</Typography>
			</ul>
			<li>
				<Typography variant="h3">7. How long does it take for the upholstery to get dry after upholstery deep cleaning services?</Typography>
				<Typography variant="body">The drying time after upholstery fabric cleaning services varies depending on the fabric and type of the upholstery and the cleaning method employed. For instance, when steam cleaning upholstery services are utilized, the approximate drying time typically ranges from 7 to 9 hours. On the other hand, if the dry cleaning upholstery services are chosen, the upholstery will be dry immediately after the cleaning process or shortly thereafter.</Typography>
				<Typography variant="body">If you are having trouble deciding which best upholstery cleaning services will suit you or are searching for an expert upholstery cleaning company, you can contact us at any suitable time for you to receive professional advice.</Typography></li>
			<li>
				<Typography variant="h3">8. Do you guarantee that after upholstery deep cleaning services all stains will be removed?</Typography>
				<Typography variant="body">Due to our extensive experience and owning some of the best equipment in the industry we achieve high success rates in stain removal. However, it's essential to note that we cannot offer an absolute guarantee due to various factors beyond our control. These factors include:</Typography></li>
			<ul class="ml--5" style="list-style: initial;">
				<Typography variant="li">
					<p>The age of the stains;</p>
				</Typography>
				<Typography variant="li">
					<p>The nature of the substances responsible for the stains;</p>
				</Typography>
				<Typography variant="li">
					<p>The type and fabric of the upholstery;</p>
				</Typography>
				<Typography variant="li">
					<p>Any prior mishandling of the stains.</p>
				</Typography>
				<Typography variant="li">
					<p>Nonetheless, we are fully committed to exerting every possible effort to eliminate all stains from your furniture. Our methodology involves:</p>
				</Typography>
				<Typography variant="li">
					<p>Utilizing state-of-the-art cleaning equipment;</p>
				</Typography>
				<Typography variant="li">
					<p>Applying a carefully selected range of premium detergents;</p>
				</Typography>
				<Typography variant="li">
					<p>Customizing our approach to suit the specific type of upholstery and the staining agent to ensure the best possible outcome.</p>
				</Typography>
			</ul>
			<li>
				<Typography variant="h3">9. How soon can I expect your upholstery cleaners in London to visit me?</Typography>
				<Typography variant="body">We will try to get you an appointment for a high end upholstery cleaning as soon as possible. Usually, we are fully booked for the following three days, but sometimes there are exceptions.</Typography></li>
			<li>
				<Typography variant="h3">10. Can you give me an upholstery cleaning quote over the phone or do you need a viewing in person?</Typography>
				<Typography variant="body">Yes, we can give you an upholstery cleaning quote over the phone, there is no need for us to visit your property. You can also receive an upholstery cleaning quote online.</Typography></li>
			<li>
				<Typography variant="h3">11. What payment methods do you accept for your upholstery fabric cleaning services?</Typography>
				<Typography variant="body">We accept debit / credit cards, bank transfers and cash payments directly to our team.</Typography></li>
			<li>
				<Typography variant="h3">12. Can your upholstery cleaning company provide me with an invoice?</Typography>
				<Typography variant="body">Yes, we will either send you a receipt via email or via any method of your choice.</Typography></li>
			<li>
				<Typography variant="h3">13. Are you qualified?</Typography>
				<Typography variant="body">Yes, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a> and of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s acknowledged industry qualification.</Typography></li>
			<li>
				<Typography variant="h3">14. How long have you been in the upholstery cleaning business?</Typography>
				<Typography variant="body">Since 2012, we have been actively involved in the upholstery cleaning industry. Over the years, we have encountered various types of carpets, rugs, upholstery and stains from both commercial and residential clients, accumulating valuable experience. Our commitment to providing the best upholstery cleaning services has driven us to enhance our performance through the following means:</Typography></li>
			<ul class="ml--5" style="list-style: initial;">
				<Typography variant="li">
					<p>Continuously upgrading our equipment and machinery with superior alternatives whenever they become available;</p>
				</Typography>
				<Typography variant="li">
					<p>Consistently evaluating and improving our cleaning products to ensure the highest quality of service;</p>
				</Typography>
				<Typography variant="li">
					<p>Dedication to expanding our knowledge and skills through ongoing professional courses and training, always seeking to enhance our competence.</p>
				</Typography>
			</ul>
			<li>
				<Typography variant="h3">15. Can you add a discount in the upholstery cleaning quote?</Typography>
				<Typography variant="body">Our high end upholstery cleaning services are known for their top quality, utilising the most effective equipment and a range of premium cleaning products. What sets us apart even further is that our upholstery cleaning prices are not only highly competitive but also rank among the most attractive in the market. The combination of all required services proves to be a more cost-effective approach compared to individual performance. This is primarily due to the initial high cost and additional fees for each technician visit, factoring in elements like travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography></li>
			<li>
				<Typography variant="h3">16. Does upholstery cleaning work?</Typography>
				<Typography variant="body">Indeed, professional upholstery cleaning is highly effective and works exceptionally well. This is made possible by the expertise, equipment, products, and methods employed by expert companies. A professional upholstery cleaning company like "Fine Carpet Cleaning Ltd." offers top-quality cleaning services that are particularly effective in tackling stubborn stains, eliminating odors, and eradicating germ buildup. These results are often unattainable through regular cleaning methods.</Typography></li>
			<li>
				<Typography variant="h3">17. Does steam cleaning remove stains from upholstery?</Typography>
				<Typography variant="body">Yes, steam cleaning upholstery services are very effective in removing stains and are the most popular method for upholstery cleaning. Due to our powerful equipment, we are able to deliver the results you desire within a fraction of time. The drying time of the upholstery is usually much shorter as well.</Typography>
				<Typography variant="body">Your upholstered furniture could be easily worn out with time, especially when it is frequently used. We recommend that you consider booking upholstery cleaning services in London. Such services will ensure that your furniture will be free of things like dust, dirt, pollen, germs and mites, which can lead to potential health problems.</Typography>
			</li>
			<li>
				<Typography variant="h3">18. What types of upholstery do you clean?</Typography>
				<Typography variant="body">Our upholstery cleaning can be performed for any soft furnishing in your property, such as sofas, armchairs, mattresses, dining chairs, office chairs and more.</Typography>
			</li>
		</Entry>
		<Entry>
			<li>
				<Typography variant="h3">19. What professional upholstery cleaning services do you perform?</Typography>
				<Typography variant="body">We offer various upholstery cleaning services that you might need, such as:</Typography></li>
			<ul class="ml--5" style="list-style: initial;">
				<Typography variant="li">
					<p>Steam cleaning upholstery services;</p>
				</Typography>
				<Typography variant="li">
					<p>Dry cleaning upholstery services;</p>
				</Typography>
				<Typography variant="li">
					<p>Eco upholstery cleaning, also known as green upholstery cleaning;</p>
				</Typography>
				<Typography variant="li">
					<p>Office upholstery cleaning;</p>
				</Typography>
				<Typography variant="li">
					<p>Commercial upholstery cleaning;</p>
				</Typography>
				<Typography variant="li">
					<p>Residential upholstery cleaning;</p>
				</Typography>
				<Typography variant="li">
					<p>Same day upholstery cleaning.</p>
				</Typography>
			</ul>
			<Typography variant="body">Other services we perform, depending on the fabric of your upholstery are:</Typography>
			<ul class="ml--5" style="list-style: initial;">
				<Typography variant="li">
					<p>Professional velvet upholstery cleaning;</p>
				</Typography>
				<Typography variant="li">
					<p>Silk upholstery cleaning service;</p>
				</Typography>
				<Typography variant="li">
					<p>Cotton upholstery cleaning;</p>
				</Typography>
				<Typography variant="li">
					<p><a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-upholstery-cleaning-services/sofa/leather">Leather upholstery cleaning</a>;</p>
				</Typography>
				<Typography variant="li">
					<p>Wool upholstery cleaning;</p>
				</Typography>
				<Typography variant="li">
					<p>Linen upholstery cleaning;</p>
				</Typography>
				<Typography variant="li">
					<p>Hemp upholstery cleaning;</p>
				</Typography>
				<Typography variant="li">
					<p>Silk upholstery cleaning and more.</p>
				</Typography>
			</ul>
			<Typography variant="body">If you are wondering which services best suit you or are looking forward to book nontoxic upholstery cleaning services, feel free to contact us at any suitable for you time.</Typography>
			<li>
				<Typography variant="h3">20. Can I use my furniture after high end upholstery cleaning?</Typography>
				<Typography variant="body">It depends on the cleaning method used. If steam cleaning upholstery services have been performed, it is recommended that you try to stay off the freshly cleaned upholstery until it is dry – about 7-9 hours.</Typography>
				<Typography variant="body">If dry cleaning upholstery services have been performed, the upholstery will be completely dry after the service has ended or shortly thereafter.</Typography></li>
			<li>
				<Typography variant="h3">21. How often should upholstery be professionally cleaned?</Typography>
				<Typography variant="body">The frequency of cleaning from an upholstery cleaning company depends mainly on factors like how fast the upholstery soils. On average, upholstery should be cleaned at 12-month intervals. However, if you have pets, children, use it very frequently or if it is easily stained, we recommend using mobile upholstery cleaning services more often than that. Regular professional cleaning not only keeps your upholstery looking its best but also helps maintain a healthy and clean living environment. You can contact us anytime to get chair upholstery cleaning “near me” or advice.</Typography></li>
			<li>
				<Typography variant="h3">22. What are your upholstery cleaning prices?</Typography>
				<Typography variant="body">How much the mobile upholstery cleaning costs depends on a number of factors. Some of them are:</Typography></li>
			<ul class="ml--5" style="list-style: initial;">
				<Typography variant="li">
					<p>The quantity and size of the upholstery;</p>
				</Typography>
				<Typography variant="li">
					<p>How soiled it is;</p>
				</Typography>
				<Typography variant="li">
					<p>The fabric of the furniture.</p>
				</Typography>
			</ul>
			<Typography variant="body">To learn more, check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">upholstery cleaning prices</a>.</Typography>
			<li>
				<Typography variant="h3">23. Can you clean nylon upholstery?</Typography>
				<Typography variant="body">Yes, we can clean nylon upholstery and furniture made from other synthetic fabrics. In such special cases with synthetic upholstery from polyester, rayon, acrylic or nylon, we will not use a steam cleaning method, but dry cleaning, as the heat and steam <strong>will</strong> damage the furniture.</Typography></li>
			<li>
				<Typography variant="h3">24. Is there a company that performs upholstery cleaning near me now?</Typography>
				<Typography variant="body">“Fine Carpet Cleaning” Ltd. performs in all of London. Feel free to contact us to receive the best upholstery cleaning services wherever you are and rest assured that we will take good care of your upholstery.</Typography></li>
		</Entry>
	</Container>
}

const JSONLDScript = () => {
	createEffect(() => {
		const script = document.createElement("script");
		script.type = "application/ld+json";
		script.text = JSON.stringify({
			"@context": "https://schema.org/",
			"@graph": [
				{
					"@type": "Product",
					"name": "Upholstery cleaning services",
					"image": "https://finecarpetcleaning.co.uk/assets/service-pics/upholstery-cleaning/upholstery-cleaners-london.jpg",
					"description": "Fine Carpet Cleaning offers professional upholstery cleaning services that enhance hygiene, prolong upholstery life, and maintain a fresh appearance.",
					"brand": {
						"@type": "Brand",
						"name": "Fine Carpet Cleaning"
					},
					"aggregateRating": {
						"@type": "AggregateRating",
						"ratingValue": "4.8",
						"bestRating": "5",
						"worstRating": "1",
						"ratingCount": "131"
					}
				},
				{
					"@type": "FAQPage",
					"mainEntity": [
						{
							"@type": "Question",
							"name": "Do you charge a cancellation fee?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Yes, we require a deposit before performing the cleaning service. If you cancel on the day of the cleaning, you will forfeit that deposit."
							}
						},
						{
							"@type": "Question",
							"name": "How long will it take for the upholstery to dry after cleaning?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "Drying time varies depending on the fabric and cleaning method. Steam cleaning typically takes about 7 to 9 hours, while dry cleaning allows for immediate drying."
							}
						},
						{
							"@type": "Question",
							"name": "Do you guarantee all stains will be removed after deep cleaning?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "While we achieve high success rates in stain removal, we cannot guarantee complete removal due to factors beyond our control, such as the age and nature of the stains. Nonetheless, we are committed to using the best equipment and techniques to achieve optimal results."
							}
						},
						{
							"@type": "Question",
							"name": "What upholstery cleaning services do you offer?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "We offer a range of services, including steam cleaning upholstery, dry cleaning upholstery, eco-friendly upholstery cleaning, office and commercial upholstery cleaning, residential upholstery cleaning, and same-day upholstery cleaning."
							}
						},
						{
							"@type": "Question",
							"name": "How often should upholstery be professionally cleaned?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "On average, upholstery should be cleaned every 12 months. However, for homes with pets or children, or if the upholstery is heavily used, more frequent cleaning is recommended."
							}
						},
						{
							"@type": "Question",
							"name": "What types of upholstery do you clean?",
							"acceptedAnswer": {
								"@type": "Answer",
								"text": "We clean various soft furnishings, including sofas, armchairs, mattresses, dining chairs, and office chairs."
							}
						}
					]
				}
			]
		}
		);
		document.head.appendChild(script);
	});

	return null; // This component doesn't need to render anything visible
};

export default function Page() {
	return (
		<>

			<JSONLDScript />

			<noscript>
				<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-PCFWNH5G"
					height="0"
					width="0"
					style="display:none;visibility:hidden">
				</iframe>
			</noscript>

			<h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Professional upholstery cleaning services</h1>
			<div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/upholstery-cleaning/upholstery-cleaners-london.jpg" alt="upholstery-cleaners-london" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

			<FleurDivider></FleurDivider>

			<h2 class="line-height-12 md-line-height-14">What to expect from our professional upholstery cleaning services</h2>
			<div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
				<h3>Benefits:</h3>
				<p>We at “Fine Carpet Cleaning” Ltd. perform professional upholstery cleaning services. Apart from removing the general dirt and shading, professional upholstery cleaning services refresh, kill bacteria, reach all areas and maintain the brightness of the colours. Other advantages are:</p>
				<ul>
					<li class="ml--5">
						<p>Professional upholstery cleaning can effectively <strong>remove stains</strong> from spills, pet accidents, and everyday use.</p>
					</li>
					<li class="ml--5">
						<p>Professional upholstery cleaning can <strong>extend the life of your furniture</strong>, saving you money from buying new furniture.</p>
					</li>
					<li class="ml--5">
						<p>Professional upholstery cleaning services <strong>will remove allergens and dust mites</strong>, which will have health benefits for you and your family.</p>
					</li>
					<li class="ml--5">
						<p>Professional upholstery cleaning can help <strong>eliminate odors</strong>, made from spills, pets or smoking, leaving your furniture smelling fresh.</p>
					</li>
					<li class="ml--5">
						<p>Clean upholstery looks better and can <strong>make your entire room look cleaner</strong> and more inviting.</p>
					</li>
					<li class="ml--5">
						<p>Professional upholstery cleaning experts have the tools and expertise to get the job done efficiently and effectively.</p>
					</li>
					<li class="ml--5">
						<p>Upholstery cleaning experts will tailor their methods to the specific type of upholstery, ensuring the best results without damage.</p>
						<Typography variant="body">At “Fine Carpet Cleaning” Ltd. our cleaning technicians can handle even the most delicate upholstery. Our upholstery cleaners are able to <strong>remove all tough stains</strong> and maintain its colours <strong>without using abrasive chemicals</strong> on it.</Typography>
						<Typography variant="body">In order to be sure that everything will go as planned, a test of the product and the cleaning method shall be fulfilled on a small area on your upholstery. That way we make sure that the detergent is best suited for your furniture.</Typography>
					</li>

				</ul>

				<h3>Simple booking process:</h3>
				<p>The usual process of booking our professional upholstery cleaning in London:</p>

				<ul>
					<li class="ml--5">
						<p>You get in touch with us.</p>
					</li>
					<li class="ml--5">
						<p>We provide recommendations on the most suitable services for your specific situation.</p>
					</li>
					<li class="ml--5">
						<p>You receive a price quote.</p>
					</li>
					<li class="ml--5">
						<p>If our terms meet your satisfaction, we set an appointment for you.</p>
					</li>
					<li class="ml--5">
						<p>Our team's upholstery cleaners in London will visit your property and perform professional upholstery cleaning services.</p>
					</li>
				</ul>

				<h3>What do we offer:</h3>
				<p>The professional upholstery cleaning services we offer are:</p>
				<ul>
					<li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/sofa">Sofa cleaning</a></li>
					<li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/sofa/leather">Leather sofa cleaning</a></li>
					<li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/furniture">Furniture cleaning</a></li>
					<li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/mattress">Mattress cleaning</a></li>
					<li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/pillow">Pillow cleaning</a></li>
					<li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-stain-removal-services">Upholstery stain removal</a></li>
					<li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/stain-protection-services">Upholstery stain protector</a></li>
				</ul>
			</div>

			<FleurDivider></FleurDivider>

			<h2>The process of our professional upholstery cleaning services:</h2>
			<div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
				<ol style="counter-reset: ordered; list-style: none;">
					<li class="md-ml--5">
						<Typography variant="body">First, we will carry out a pre-cleaning survey, to establish exactly what cleaning detergents and tools need to be used for the specific fabric.</Typography>
					</li>
					<li class="md-ml--5">
						<Typography variant="body">Second, we dry vacuum the fabric. This removes any loose dirt, dry soils and dust.</Typography>
					</li>
					<li class="md-ml--5">
						<Typography variant="body">We then apply heavy duty pre-spray, designed to lift oily dirt and pollutants from your upholstery, so they can be safely extracted using our high performance extraction machines.</Typography>
					</li>
					<li class="md-ml--5">
						<Typography variant="body">The cleaning solution is worked onto the upholstery. This loosens the soiling, ready for extraction.</Typography>
					</li>
					<li class="md-ml--5">
						<Typography variant="body">Pure softened hot water (reaches a maximum 135 Degrees) is gently injected deeply into the fibres. This releases the soil and allows our powerful hot water extraction machine to effectively remove it. Any remaining spots and stains are worked on individually using special products.</Typography>
					</li>
					<li class="md-ml--5">
						<Typography variant="body">Finally, we rinse and extract again to ensure no chemical residues are left behind.</Typography>
					</li>
				</ol>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="line-height-12 md-line-height-14">Equipment and products we use for our professional upholstery cleaning services</h2>
			<div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
				<ol style="counter-reset: ordered; list-style: none;">
					<li class="ml--5">
						<h3 class="ml--5 font-size-6 md-font-size-7">High-quality extractors</h3>
						<Typography variant="body">At "Fine Carpet Cleaning Ltd," we take pride in our commitment to using cutting-edge cleaning equipment and premium products. Our machines, known for their exceptional power and effectiveness, are considered among the best portable machines globally. They have undergone rigorous testing, and we've selected top brands available in the UK market, including "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>" and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>". Furthermore, our in-house engineer makes significant enhancements to maximize their performance.</Typography>
					</li>
					<li class="ml--5">
						<h3 class="ml--5 font-size-6 md-font-size-7">Efficient vacuum cleaners</h3>
						<Typography variant="body">Moreover, our arsenal includes a high-performance twin-motor vacuum cleaner renowned for its exceptional filtration system, deemed the top option on the market. This specialised vacuum cleaner is ideal for professional carpet cleaning, with one motor working to agitate the carpet and another to suction away loose dirt, dry soil, and dust.</Typography>
					</li>
					<li class="ml--5">
						<h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning products</h3>
						<Typography variant="body">Our huge selection of cleaning products has been carefully chosen after in-depth testing of almost all cleaning products available on the market. This extensive variety enables our technicians to choose the most appropriate detergents based on factors such as:</Typography></li>
				</ol>
				<ul class="ml--5" style="list-style: initial;">
					<li>
						<p>The fabric of the upholstery;</p>
					</li>
					<li>
						<p>The level of soiling;</p>
					</li>
					<li>
						<p>The type of stains to be treated.</p>
					</li>
				</ul>
				<p>Thanks to this selection, we have a variety of specialised detergents for all kinds of different fabrics and with it we are able to perform professional velvet upholstery cleaning, cotton upholstery cleaning, leather, wool, linen, hemp, silk upholstery cleaning and more.</p>
				<p>With our state-of-the-art cleaning equipment and top-quality products, we guarantee a professional upholstery cleaning service in London of the utmost quality.</p>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="line-height-12 md-line-height-14">Pictures from our professional upholstery cleaning services</h2>

			<FacebookLikeGallery imgs={[
				{ src: "/assets/service-pics/upholstery-cleaning/1-best-upholstery-cleaning-service.jpg", alt: "1-best-upholstery-cleaning-service" },
				{ src: "/assets/service-pics/upholstery-cleaning/4-upholstery-cleaning-company.jpg", alt: "4-upholstery-cleaning-company" },
				{ src: "/assets/service-pics/upholstery-cleaning/2-professional-upholstery-cleaning-1.jpg", alt: "2-professional-upholstery-cleaning-1" },
				{ src: "/assets/service-pics/upholstery-cleaning/3-upholstery-cleaning-london.jpg", alt: "3-upholstery-cleaning-london" },
				{ src: "/assets/service-pics/upholstery-cleaning/5-same-day-upholstery-cleaning.jpg", alt: "5-same-day-upholstery-cleaning" },
				{ src: "/assets/service-pics/upholstery-cleaning/6-professional-upholstery-cleaning-service-1.jpg", alt: "6-professional-upholstery-cleaning-service-1" },
				{ src: "/assets/service-pics/upholstery-cleaning/7-steam-cleaning-upholstery-services.jpg", alt: "7-steam-cleaning-upholstery-services" },
				{ src: "/assets/service-pics/upholstery-cleaning/8-upholstery-cleaners-london-1.jpg", alt: "8-upholstery-cleaners-london-1" },
				{ src: "/assets/service-pics/upholstery-cleaning/9-commercial-upholstery-cleaning.jpg", alt: "9-commercial-upholstery-cleaning" },
				{ src: "/assets/service-pics/upholstery-cleaning/10-upholstery-cleaning-experts.jpg", alt: "10-upholstery-cleaning-experts" },
				{ src: "/assets/service-pics/upholstery-cleaning/11-upholstery-cleaning-experts-1.jpg", alt: "11-upholstery-cleaning-experts-1" },
				{ src: "/assets/service-pics/upholstery-cleaning/12-upholstery-cleaning-london-1.jpg", alt: "12-upholstery-cleaning-london-1" },
				{ src: "/assets/service-pics/upholstery-cleaning/13-upholstery-deep-cleaning-service.jpg", alt: "13-upholstery-deep-cleaning-service" },
			]} />

			<FleurDivider></FleurDivider>

			<h2 class="line-height-12 md-line-height-14">Videos from our professional upholstery cleaning services</h2>

			<VideoPlayer></VideoPlayer>

			<FleurDivider></FleurDivider>

			<h2 class="line-height-12 md-line-height-14">Professional upholstery cleaning prices</h2>

			<div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
				style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
				<div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
				<br></br>
				Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
				charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
				delays for the technicians and messes up the schedule.
				<br></br>
				<strong id="price_table">Deising - Free of charge - just notify us when booking.</strong></div>

			<PriceTable title="Upholstery type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Footstool (Puff)</td>
					<td class="bg-paper pl-5 py-2 font-500">from £10.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Two seated sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £44.20</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Two seated L shaped sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £52.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Three seated sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £52.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Three seated L shaped sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £65.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Four seated sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £65.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Four seated L shaped sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £76.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Five seated sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £76.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Five seated L shaped sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £95.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">For others, please contact us</td>
					<td class="bg-paper pl-5 py-2 font-500">-</td>
				</tr>
			</PriceTable>

			<button class="outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-250px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9 my-20 mx-auto" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/prices" class="c-paper font-size-5">VIEW ALL PRICES</a></button>

			<FleurDivider></FleurDivider>

			<h2 class="line-height-12 md-line-height-14">Frequently ordered together</h2>

			<FOTSlider>
				<FOTSliderContainer
					img="/assets/service-pics/stain-protection-services/stain-protection-services.jpg"
					alt="stain-protection-services"
					title="Stain protection services"
					href="/stain-protection-services"
					description="The main purpose of the stain protector is to guard the fabric against penetration of liquids that lead to lasting stains and permanent damage to the carpet and upholstery."
				/>
				<FOTSliderContainer
					img="/assets/service-pics/carpet-cleaning/carpet-cleaning-specialists.jpg"
					alt="carpet-cleaning-specialists"
					title="Professional carpet cleaning services"
					href="/professional-carpet-cleaning-services"
					description="We offer a variety of professional carpet cleaning services. They will prolong the life of your carpet and is cheaper to do regular maintenance than buying a new carpet."
				/>
				<FOTSliderContainer
					img="/assets/service-pics/mattress-cleaning/mattress-cleaning-services.jpg"
					alt="mattress-cleaning-services"
					title="Mattress cleaning services"
					href="/professional-upholstery-cleaning-services/mattress"
					description="Mattress cleaning removes unwanted guests and fluids, creating a cleaner environment. It enhances sleep quality and extends the life of your mattress."
				/>
				<FOTSliderContainer
					img="/assets/service-pics/rug-cleaning/rug-washing-service.jpg"
					alt="rug-washing-service"
					title="Professional rug cleaning services"
					href="/professional-rug-cleaning-services"
					description="Professional rug cleaning removes stains and extends rug life. Our experts use advanced tools to refresh your rug and ensure a healthy, allergy-free environment."
				/>
				<FOTSliderContainer
					img="/assets/service-pics/pillow-cleaning/pillow-cleaning-service.jpg"
					alt="pillow-cleaning-service"
					title="Pillow cleaning services"
					href="/professional-upholstery-cleaning-services/pillow"
					description="Instead of tossing old pillows, consider our cost-effective professional cleaning. We fluff, sanitize, and deodorize, giving your pillows new life."
				/>
			</FOTSlider>

			<FleurDivider></FleurDivider>

			<h2 class="line-height-12 md-line-height-14">Our professional upholstery cleaning services specialists advise:</h2>
			<div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
				<ol style="counter-reset: ordered; list-style: none;">
					<li class="ml--5">
						<h3 class="ml--5 font-size-6 md-font-size-7">Put on a stain defender</h3>
						<Typography variant="body">Our professional upholstery cleaning specialist recommends considering the addition of a stain protector to your carpets and upholstery whenever it's affordable to you. This simple step can result in substantial cost savings on stain removal services. If you're curious, we encourage you to explore the advantages of <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection services</a>.</Typography>
					</li>
					<li class="ml--5">
						<h3 class="ml--5 font-size-6 md-font-size-7">Try stain removal service</h3>
						<Typography variant="body">According to our specialist, it's highly advisable to enlist the services of a professional stain removal company if your carpet or upholstery has been stained rather than trying to clean it yourself. This is because attempting to clean the stain or allowing it to dry can lead to fabric damage, making complete stain removal unlikely. In fact, such stain removal attempts may seal the stain, making it even more challenging, if not impossible, for a professional upholstery cleaning company to remove it. Therefore, scheduling a stain removal service can potentially save your valuable carpet or upholstery, which could be worth a significant amount.</Typography>
					</li>
					<li class="ml--5">
						<h3 class="ml--5 font-size-6 md-font-size-7">Make informed decisions</h3>
						<Typography variant="body">Our upholstery cleaners in London provide a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/services">range of services</a>, such as carpet cleaning, rug cleaning, and more. Our team takes pride in providing comprehensive solutions, so don't miss the opportunity to explore the full extent of our expertise and make informed decisions about your cleaning needs.</Typography>
					</li>
					<li class="ml--5">
						<h3 class="ml--5 font-size-6 md-font-size-7">Combine multiple services into one</h3>
						<Typography variant="body">For the best cost efficiency, our skilled upholstery cleaning experts suggest bundling multiple services into one appointment. Opting for separate technician visits can lead to extra costs such as travel time, parking fees, and the management of heavy equipment during loading and unloading, making individual appointments less financially advantageous.</Typography>
					</li>
					<li class="ml--5">
						<h3 class="ml--5 font-size-6 md-font-size-7">Embrace the positive outcomes of good health</h3>
						<Typography variant="body">If you own carpets, carpet floor coverings, or upholstery, it's essential to be aware of the health benefits of keeping them clean. These items can accumulate substantial amounts of dust, microorganisms, and dirt particles that might lead to health issues. Neglecting their care can increase the risk of various reactions, skin problems, and allergies. To prevent these issues, our specialist recommends using professional upholstery cleaning services at least once a year. If you own pets, have children or if your upholstery is easily stained we advise booking such services even more frequently.</Typography>
					</li>
				</ol>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="line-height-12 md-line-height-14">Upholstery cleaning reviews</h2>

			<ReviewSlider>
				<StarReview
					src="/assets/profile-pics-reviews/unnamed1112.png"
					reviewText="I received excellent communications throughout the whole process. On the day, the cleaning experience was efficient with a considerate and friendly member of staff. Very competitive pricing."
					name="Elizabeth Maurice"
					date="June 2024"
					stars={5}
					hrefGoogleReview="https://g.co/kgs/HPqEYvL"
				/>
				<StarReview
					src="/assets/profile-pics-reviews/unnamed (1).png"
					reviewText="The best carpet cleaning service I have ever experienced. From start to finish was unbelievably smooth. The staff that attended extremely polite and moved all the items with utmost care. Would recommend using them as they are simply the best one has come across. Maya was absolutely fantastic in arranging this as the request was done at such a short notice."
					name="Gen Tiski"
					date="March 2024"
					stars={5}
					hrefGoogleReview="https://g.co/kgs/H3NeADN"
				/>
				<StarReview
					src="/assets/profile-pics-reviews/unnamed-49.png"
					reviewText="I had my carpet cleaned by Nikolay from Fine Carpet Cleaning. What a fantastic job he did ! He is very professional, efficient and organised in the way he works. My carpet looks new again. I highly recommend."
					name="Samanta Federico"
					date="January 2024"
					stars={5}
					hrefGoogleReview="https://g.co/kgs/WxWf2Bm"
				/>
				<StarReview
					src="/assets/profile-pics-reviews/unnamed3434.png"
					reviewText="Really happy with the service and i come across a-lot of carpet cleaners in my job property inventory .
        I was not sure how the carpet would come up , as it is an old carpet in a communal lobby . Wow, so much better-stains removed .
        A really quality service from start to finish , nothing was too much trouble . I managed to get a slot the same day . I would definitely recommend 😁"
					name="Yasmin"
					date="June 2024"
					stars={5}
					hrefGoogleReview="https://g.co/kgs/A7AyWZi"
				/>
				<StarReview
					src="/assets/profile-pics-reviews/unnamed (3).png"
					reviewText="Had a great experience with Fine Carpet Cleaning yesterday. I phoned at 9am for help with a stained carpet, and within 2 hours someone was at my house doing the job. Communications were very clear and slick, and the cleaning was done briskly and to the highest standard. Highly recommended."
					name="Peter O'Donoghue"
					date="April 2024"
					stars={5}
					hrefGoogleReview="https://g.co/kgs/vnLrPA1"
				/>
				<StarReview
					src="/assets/profile-pics-reviews/unnamed (2).png"
					reviewText="Good service at a reasonable price, had my mattress and small rug cleaned and can say that I'm satisfied with the result.
        The company representative was professional, arrived on time and did a very good job, quickly and efficiently.
        Definitely would recommend."
					name="Nikolay Dimitrov"
					date="April 2024"
					stars={5}
					hrefGoogleReview="https://g.co/kgs/jWDWU8Z"
				/>

			</ReviewSlider>

			<FleurDivider></FleurDivider>

			<h2 class="line-height-12 md-line-height-14">FAQ regarding our professional upholstery cleaning in London</h2>

			<FaqSection />

			<FleurDivider></FleurDivider>

			<div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
				<a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
				<a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
			</div>
		</>
	);
}
