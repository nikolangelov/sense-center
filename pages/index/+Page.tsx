import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import RiCloseFill from '~icons/ri/close-fill';
import "solid-slider/slider.css";
import { Slider, createSlider, SliderButton, SliderProvider } from "solid-slider";
import { createSignal, Show } from 'solid-js';

const GalerrySlider = () => {
const options = { duration: 1000 };
const [slider, { current, next, prev, moveTo }] = createSlider(options);
  return (
    <SliderProvider>
      <div class="carousel max-w-1000px m-auto position-relative">
		<Slider options={{ loop: true }}>
			<img src="assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class=""/>
			<img src="assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class=""/>
			<img src="assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class=""/>
			<img src="assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class=""/>
			<img src="assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class=""/>
			<img src="assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class=""/>
		</Slider>
      <SliderButton class="cursor-pointer position-absolute top-41% left-0 bg-paper-inv bg-op-50 b-rd-bl-1 b-rd-tl-1 b-none px-0 py-1.5" prev><RiArrowLeftSLine class="-ml-1 font-size-10 c-paper hover-c-brand-light:hover transition-colors"/></SliderButton>
      <SliderButton class="cursor-pointer position-absolute top-41% right-0 bg-paper-inv bg-op-50 b-rd-br-1 b-rd-tr-1 b-none px-0 py-1.5" next><RiArrowRightSLine class="-mr-1 font-size-10 c-paper hover-c-brand-light:hover transition-colors"/></SliderButton>
      <div class="flex flex-justify-center">
        <div class={"flex w-3 h-3 rd-50% mx-2 mt-4 " + (current() === 0 ? "bg-brand-dark" : "bg-brand")}></div>
        <div class={"flex w-3 h-3 rd-50% mx-2 mt-4 " + (current() === 1 ? "bg-brand-dark" : "bg-brand")}></div>
        <div class={"flex w-3 h-3 rd-50% mx-2 mt-4 " + (current() === 2 ? "bg-brand-dark" : "bg-brand")}></div>
      </div>
      </div>
    </SliderProvider>
  );
};

function FleurDivider () {
	return (
		<div class="m-auto my-36 position-relative w-80%">
			<div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
			<div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="assets/output-onlinepngtools.png" /></div>
		</div>
	);
}

function FullScreenImageGallery() {
	const [open, setOpen] = createSignal(false);
  
	const handleClick = () => {
	  setOpen(!open());
	};
  
	return (
	  <div class="relative">
		<img class="cursor-pointer max-w-80% max-h-80% block m-auto" src="assets/map2.png" alt="" onClick={handleClick}/>
		<Show when={open()}>
		  <div class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-85 z-9999" onClick={handleClick}>
			<RiCloseFill class="w-16 h-16 absolute top-0 right-0 mr-20 mt-14 p-2 text-white bg-transparent color-paper cursor-pointer hover-color-brand:hover"/>
			<img src="assets/map2.png" alt="" class="max-w-full max-h-full"/>
		  </div>
		</Show>
	  </div>
	);
  }

export default function Page() {
  return (
    <>
      <div class="flex flex-justify-center"><img class="b-rd-3 my-20" src="assets\Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);"/></div>
		<h1>Fine Carpet Cleaning London</h1>
		<div class="mt-20 py-8 px-14 b-rd-3 bg-paper line-height-8 text-justify font-size-4.4" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">Fine Carpet Cleaning London is a carpet cleaning company which operates in all London boroughs. We provide a variety of commercial and domestic carpet cleaning services, tailoring to our client’s needs.</div>

		<FleurDivider></FleurDivider>

		<h2>Our main cleaning services</h2>
		<div class="p-6 pt-12 bg-paper b-rd-3 flex flex-justify-center" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);"><a href="/"><img class="mt-3 mx-auto block w-650px" src="assets\Професионално почистване на заведения.jpg" alt="" />
		<h3 class="mx-auto mt-16 mb-9 text-center font-size-9">Professional carpet cleaning services</h3></a></div>

		<div class="p-6 pt-12 bg-paper mt-20 b-rd-3 flex flex-justify-center" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);"><a href="/"><img class="mt-3 mx-auto block w-650px" src="assets\Професионално почистване на заведения.jpg" alt="" />
		<h3 class="mx-auto mt-16 mb-9 text-center font-size-9">Professional upholstery cleaning services</h3></a></div>

		<div class="p-6 pt-12 bg-paper mt-20 b-rd-3 flex flex-justify-center" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);"><a href="/"><img class="mt-3 mx-auto block w-650px" src="assets\Професионално почистване на заведения.jpg" alt="" />
		<h3 class="mx-auto mt-16 mb-9 text-center font-size-9">Professional rug cleaning services</h3></a></div>

		<FleurDivider></FleurDivider>

		<h2>Equipment and products we use</h2>

		<GalerrySlider></GalerrySlider>


		<div class="mt-20 py-8 px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

		<p>We at Fine Carpet Cleaning London have gathered years of expertise through taking care of our client’s carpets, rugs and upholstery and always look for new ways to improve. By upgrading our equipment, cleaning products and knowledge at every opportunity, we have been able to get to the level we are at today.</p>

		<p>The factors that enable us to stand out of the crowd are:</p>
		<ul>
			<li class="ml--5">
		<p>We use professional carpet cleaning equipment from the best brands available in the UK – <a class="color-paper-link hover-color-paper-link-hover:hover" href="/" target="_blank" rel="noopener">“Mytee”</a> and <a class="color-paper-link hover-color-paper-link-hover:hover" href="/" target="_blank" rel="noopener">“Airflex”</a>. Additionally, our team’s engineer has made significant improvements to the machines to enhance their performance.</p>
		</li>
			<li class="ml--5">
		<p>Moreover, we use a high-filtration twin-motor vacuum cleaner, which we consider to be the best available. This vacuum cleaner is purpose-built for professional carpet cleaning, with one motor vigorously agitating the carpet while the other effectively suctions away any loose dirt, dry soil, and dust.</p>
		</li>
			<li class="ml--5">
		<p>We use over 20 high-quality cleaning products from the best brands on the UK and US market. Among those brands are "Alltec," "Prochem," "Chemspec," "Solution World of Clean," and "TMF." We have used and tested almost all detergents available on the market and have selected the ones that are most effective in removing dirt, dust, stains and bacteria. We choose with which ones to treat your carpets, rugs or upholstery, based on the stain, level of soiling and type of fabric.</p>
		</li>
		</ul>
		</div>

		<FleurDivider></FleurDivider>

		<h2>Fine Carpet Cleaning London Accreditations</h2>
		<h3 class="mt-25 mb-15">Fine Carpet Cleaning London is a qualified member of <a class="color-paper-link hover-color-paper-link-hover:hover" href="/" target="_blank" rel="noopener">"NCCA"</a> (National Carpet Cleaners Association)</h3>
		
		<GalerrySlider></GalerrySlider>

		<div class="mt-20 py-8 px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

		<p>“NCCA” is one of the most respected and authoritative associations for training carpet cleaners. It was founded in 1968 and is devoted entirely to the cleaning, maintenance and restoration of carpets.</p>

		<p>The main objective of the association is to provide certificates of professionalism and high standards to partner companies that have passed a special test for practical knowledge and skills. This ensures the quality of the certified companies services.</p>

		</div>
		
		<h3 class="mt-25 mb-15">Fine Carpet Cleaning London is listed on <a class="color-paper-link hover-color-paper-link-hover:hover" href="/" target="_blank" rel="noopener">“Checkatrade"</a></h3>
		
		<GalerrySlider></GalerrySlider>

		<div class="mt-20 py-8 px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

		<p>“Checkatradе” is an organisation founded in 1998 to help consumers in the UK to find their specialist in a particular area, such as quality carpet cleaning. The main goal of the organisation is the collection of all quality companies in one place covering high standards, transparency in customer service and prices.</p>

		<p>In order to be accredited by “Checkatrade”, Fine Carpet Cleaning London had to pass a detailed inspection covering more than 20 aspects, such as:</p>

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
		<h3 class="mt-25 mb-15">Fine Carpet Cleaning London staff members are trained and certified</h3>

		<div class="mt-20 py-8 px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

		<p>On one hand our ambition is to fully satisfy the customers needs to the best of our capabilities. On the other hand the company culture of Fine Carpet Cleaning London strongly encourages constant striving for excellence. These two reasons combined lead to the result that our staff members successfully completed a number of specialised professional courses like:</p>

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
		<p>Оur goal is to be prepared for any situation, no matter how challenging it is, and leave nothing to chance.</p>
		</div>

		<FleurDivider></FleurDivider>

		<h2>Results from our services in Fine Carpet Cleaning London</h2>

		<GalerrySlider></GalerrySlider>

		<video class="max-w-1000px mt-30 b-rd-3" controls="controls" muted>
			<div class="vertical-top max-w-full font-size-4 color-paper-inv block"><a class="color-paper-inv block" href="https://www.youtube.com/watch?v=zedTK_cCobY" target="_blank" rel="noopener">Professioanl Carpet Cleaning London - Fine Carpet Cleaning</a></div>
        	<source src="assets/Professional Carpet Cleaning London - Fine Carpet Cleaning (1).mp4" type="video/mp4" />
        </video>

		<FleurDivider></FleurDivider>

		<h2>Reviews for our services</h2>

		<GalerrySlider></GalerrySlider>

		<FleurDivider></FleurDivider>

		<h2>Areas we cover</h2>

		<FullScreenImageGallery></FullScreenImageGallery>

		<p class="max-w-80% font-size-4 line-height-6 m-auto">*Fine Carpet Cleaning London operates in all of London. The map below shows all of the London postcodes we cover.
		**Transport surcharge may apply for all other post codes.</p>

		<FleurDivider></FleurDivider>

		<h2>Working hours</h2>
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
		<td class="b-rd-lb-3 b-rd-rb-3 bg-#2e5c47 outline-color" colspan="3" style="box-shadow: 0px 20px 20px 1px rgb(247 247 247/ 100%);"><p class="font-size-4 pl-5 my-2 c-paper">*We also offer performing services out of working hours and at night, which will be included in the final price.</p></td>
		</tr>
		</tbody>
		</table>

		<FleurDivider></FleurDivider>

		<h2>Frequently asked questions</h2>
		<div class="last-expanded p-4 pr-14 bg-paper b-rd-3 flex flex-justify-center" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
		<ul>
			<li class="ml-5">
		<h3>How long have you been in the carpet cleaning business?</h3>
		<p class="ml--5 new-homepage-paragraphs">Fine Carpet Cleaning London has been involved in the carpet cleaning industry since 2012. We serve both commercial and residential clients and over the years we've cleaned all kinds of carpets, rugs, upholstery, and stains. Through these experiences, we've acquired valuable knowledge and expertise. Our commitment to delivering top-notch service has driven us to improve our services in the following ways:</p></li>
			<li class="ml-5">
		<p class="listed-items">We continually update and upgrade our equipment, ensuring that we utilise the latest and most effective technologies available.</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">We regularly evaluate and improve our cleaning products, staying current with industry advancements to provide the best results.</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">We are dedicated to enhancing our expertise and skills by actively participating in additional professional courses and training programs. Our goal is to maintain a high level of competence and stay at the forefront of carpet cleaning practices.</p>
		</li>
			<li class="ml-5">
		<h3>When do I need professional carpet cleaning?</h3>
		<p class="ml--5 new-homepage-paragraphs">In our experience the majority of our clients have sought our carpet cleaning services when:</p></li>
			<li class="ml-5">
		<p class="listed-items">Their carpet has had stains which they couldn’t remove by themselves.</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">Their carpet has had an unpleasant odour.</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">Their carpet has been attracting pests, such as spiders or mice.</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">Their carpet has lost its colour.</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">They started to have allergies or asthma attacks.</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">Their carpet has been visibly dirty.</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">They wanted to prolong their carpet’s life.</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">Or they simply wanted to refresh their carpets.</p>
		</li>
			<li class="ml-5">
		<h3>How frequently should a carpet be professionally cleaned?</h3>
		<p class="ml--5 new-homepage-paragraphs">How often should your carpets be deep cleaned depends on factors such as how fast the carpet becomes soiled. As a general guideline, it is advisable to have your carpet deep cleaned once every 12 months. However, we suggest considering professional carpet cleaning more often than once a year in the following situations:</p></li>
			<li class="ml-5">
		<p class="listed-items">If you have pets;</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">If you have children;</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">If your carpets are exposed to high foot traffic;</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">If your carpets are exposed to indoor smoking;</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">If your carpets get stained frequently.</p>

		<p class="ml--5 new-homepage-paragraphs">You can reach out to us if you seek expert advice or if you want to book a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/" target="_blank" rel="noopener">professional carpet cleaning service</a>.</p></li>
			<li class="ml-5">
		<h3>How much will a professional carpet cleaning cost?</h3>
		<p class="ml--5 new-homepage-paragraphs">The price of carpet cleaning depends on several factors. The most significant among them are:</p></li>
			<li class="ml-5">
		<p class="listed-items">The number and size of the carpets;</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">Their level of dirtiness;</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">The type of carpets;</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">The ease of access to them.</p>

		<p class="ml--5 new-homepage-paragraphs">For more specific pricing details regarding the carpet cleaning we offer, you can check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/" target="_blank" rel="noopener">price list</a></p></li>
			<li class="ml-5">
		<h3>How fast will the carpet get dry after a cleaning service?</h3>
		<p class="ml--5 new-homepage-paragraphs">The drying time of a carpet is determined by various factors. Among them are:</p></li>
			<li class="ml-5">
		<p class="listed-items">The carpet type;</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">Its level of soiling;</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">The thickness of its pile;</p>
		</li>
			<li class="ml-5">
		<p class="listed-items">Whether it requires extra stain removal treatment or not.</p>

		<p class="ml--5 new-homepage-paragraphs">For example wool carpets tend to absorb more water and take longer to dry, typically ranging between 10 and 12 hours. In cases where the carpet is exceptionally dirty and requires multiple treatments, the drying process may extend even further.</p>

		<p class="ml--5 new-homepage-paragraphs">On the other hand, synthetic carpets tend to dry faster, usually within a span of 7 to 10 hours. Nevertheless, the drying duration still depends on the carpet's level of dirtiness and the necessity for multiple treatments.</p></li>
		</ul>
		</div>

		<script src="FAQButtonsSnippet.js"></script>

		<div class="read-more-click-to-expand-1 to-be-expanded">
		<div>
			<button class="read-more-toggle-button mt-16 mb-8 mx-auto uppercase b-none b-rd-1 py-4 px-7 bg-paper hover-bg-#f7f7f7:hover font-600 font-size-5 whitespace-nowrap" style="letter-spacing: 0.02rem; box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);" onClick="toggleExpand(1)">Read more</button>
		</div>
		<ul class="hidden-questions-and-answers">
			<li class="ml-5 hide-if-not-expanded">
		<h3>How long will the carpet cleaning service take?</h3>
		<p class="ml--5 new-homepage-paragraphs">The duration of our carpet cleaning service depends on the following factors:</p>
		</li>
			<li class="ml-5 hide-if-not-expanded">
		<p class="listed-items">Carpet's level of soiling;</p>
		</li>
			<li class="ml-5 hide-if-not-expanded">
		<p class="listed-items">What cleaning methods will be used on the carpet;</p>
		</li>
			<li class="ml-5 hide-if-not-expanded">
		<p class="listed-items">Whether any stain removal treatments are required.</p>
		<p class="ml--5 new-homepage-paragraphs">On average, it typically ranges from 20 to 60 minutes per room.</p>
		</li>
			<li class="ml-5 hide-if-not-expanded">
		<h3>Will carpet cleaning remove the stains on my carpet?</h3>
		<p class="ml--5 new-homepage-paragraphs">In summary, yes, professional carpet cleaning is very effective in removing stubborn stains, dirt, grime, bacteria, dust mites, allergens, mould, pet dander, and odours. However, some particularly tough stains, especially very old or improperly treated ones, can present challenges for complete removal, even with professional assistance.</p>

		<p class="ml--5 new-homepage-paragraphs">Thankfully, our extensive experience and high-quality equipment at Fine Carpet Cleaning London have led to our high-rates in successful stain removal. Nevertheless, we cannot guarantee the complete removal of every stain. We will thoroughly assess the stain and let you know during the quotation process whether or not the stain can be successfully eliminated.</p></li>
			<li class="ml-5 hide-if-not-expanded">
		<h3>Are you able to give me a carpet cleaning quote over the phone or do you need to visit my property?</h3>
		<p class="ml--5 new-homepage-paragraphs">Yes, we can provide you with a cost estimate over the phone without the necessity of an in-person visit. For commercial properties, a site visit may be necessary. You have the option to get a carpet cleaning quote online as well.</p></li>
			<li class="ml-5 hide-if-not-expanded">
		<h3>How soon can I expect a carpet cleaner to visit me?</h3>
		<p class="ml--5 new-homepage-paragraphs">We will make every effort to schedule your appointment as soon as possible. Typically, our schedule is booked up to three days in advance, although occasional exceptions may be possible.</p></li>
			<li class="ml-5 hide-if-not-expanded">
		<h3>What payment methods do you accept?</h3>
		<p class="ml--5 new-homepage-paragraphs">We accept payment via debit/credit cards, bank transfers, as well as cash, directly to our team.</p></li>
			<li class="ml-5 hide-if-not-expanded">
		<h3>Can you provide me with an invoice for the carpet cleaning services?</h3>
		<p class="ml--5 new-homepage-paragraphs">Yes, we will provide you with a receipt via email.</p></li>
			<li class="ml-5 hide-if-not-expanded">
		<h3>Are you insured?</h3>
		<p class="ml--5 new-homepage-paragraphs">Yes, we are fully insured.</p></li>
			<li class="ml-5 hide-if-not-expanded">
		<h3>What happens if your cleaner damages anything while performing carpet cleaning at my property?</h3>
		<p class="ml--5 new-homepage-paragraphs">We are fully insured and if an accident happens we are fully covered.</p></li>
		</ul>
		</div>

		<FleurDivider></FleurDivider>

		<div class="m-10% mb-3% flex flex-wrap flex-justify-center gap-15">
			<button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">GET A QUOTE</a></button>
			<button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">PRICES</a></button>
		</div>

		<a href="/"><img class="max-w-full block mla mra md-mt-30 md-mb-18 mt-20 mb-10" src="/assets/ShenYunZuoPin- Orange-Desktop-ZaDimo.png"></img></a>


    </>
  );
}