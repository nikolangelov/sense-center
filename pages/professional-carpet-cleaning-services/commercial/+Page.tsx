import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import "solid-slider/slider.css";
import { Component, createSignal, Show } from 'solid-js';
import RiYoutubeFill from '~icons/ri/youtube-fill';
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { createSlider, Slider, SliderButton, SliderProvider } from 'solid-slider';
import { RotatingBanners } from '../../../components/RotatingBanners';
import { Typography } from '../../../components/Typography';
import { createCollapsable } from '../../../components/Collapsable';

const GalerrySliderDesktop = () => {
  const options = { duration: 1000 };
  const [slider, { current, next, prev, moveTo }] = createSlider(options);
  return (
    <SliderProvider>
      <div class="max-w-1000px m-auto position-relative hidden md-block">
        <Slider options={{ loop: true, slides: { perView: 3, spacing: 10 } }}>
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" />
        </Slider>
        <SliderButton class="cursor-pointer position-absolute top-41% left-0 bg-paper-inv bg-op-50 b-rd-bl-1 b-rd-tl-1 b-none px-0 py-1.5" prev><RiArrowLeftSLine class="-ml-1 font-size-10 c-paper hover-c-brand-light:hover transition-colors" /></SliderButton>
        <SliderButton class="cursor-pointer position-absolute top-41% right-0 bg-paper-inv bg-op-50 b-rd-br-1 b-rd-tr-1 b-none px-0 py-1.5" next><RiArrowRightSLine class="-mr-1 font-size-10 c-paper hover-c-brand-light:hover transition-colors" /></SliderButton>
      </div>
    </SliderProvider>
  );
};

const GalerrySliderMobile = () => {
  const options = { duration: 1000 };
  const [slider, { current, next, prev, moveTo }] = createSlider(options);
  return (
    <SliderProvider>
      <div class="max-w-1000px m-auto position-relative md-hidden block">
        <Slider options={{ loop: true }}>
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" />
        </Slider>
        <SliderButton class="cursor-pointer position-absolute top-41% left-0 bg-paper-inv bg-op-50 b-rd-bl-1 b-rd-tl-1 b-none px-0 py-1.5" prev><RiArrowLeftSLine class="-ml-1 font-size-10 c-paper hover-c-brand-light:hover transition-colors" /></SliderButton>
        <SliderButton class="cursor-pointer position-absolute top-41% right-0 bg-paper-inv bg-op-50 b-rd-br-1 b-rd-tr-1 b-none px-0 py-1.5" next><RiArrowRightSLine class="-mr-1 font-size-10 c-paper hover-c-brand-light:hover transition-colors" /></SliderButton>
      </div>
    </SliderProvider>
  );
};

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

function FleurDivider() {
  return (
    <div class="m-auto my-30 md-my-36 position-relative w-80%">
      <div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
      <div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="/assets/output-onlinepngtools.png" /></div>
    </div>
  );
}

export function FaqSection() {
  const { Container, Entry } = createCollapsable()
  return <Container>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">Do you have a cancellation fee?</Typography>
          <Typography variant="body">Yes, if you cancel on the day of the cleaning you will lose your deposit.</Typography></li>
        <li>
          <Typography variant="h3">Will I be charged for the congestion / parking?</Typography>
          <Typography variant="body">Yes, we kindly ask that you ensure that there is convenient parking space available for our vehicles near the property. Additionally, any parking or congestion charges are to be covered by the client.</Typography></li>
        <li>
          <Typography variant="h3">Do I need to move furniture before corporate carpet cleaning?</Typography>
          <Typography variant="body">We would greatly appreciate your assistance in moving small, delicate, or valuable furniture items like lamps and ornaments away for insurance purposes. Please relocate them to a secure area before our arrival, if possible. We are more than willing to help move lightweight furniture such as chairs, armchairs, and tables during the cleaning. After the cleaning is completed, we will return them to their original positions. If there is a need to move heavy furniture like sofas, beds, wardrobes, and cupboards, there will be an additional charge. This is due to the extra time and effort required by our technician, who will be appropriately compensated. Our primary goal is to ensure a stress-free experience for you throughout the entire commercial carpet cleaning process.</Typography></li>
        <li>
          <Typography variant="h3">What if my commercial building has no lift?</Typography>
          <Typography variant="body">If you want us to clean the carpets on a high floor in your commercial building and it lacks an elevator, there will be an additional charge due to the weight and bulk of our equipment, which exceeds 50 kilograms. This is because manually transporting the equipment up multiple flights of stairs is more time-consuming, and our technicians may tire more quickly. Consequently, our productivity for the day may be reduced compared to our typical output.</Typography></li>
        <li>
          <Typography variant="h3">Are you insured?</Typography>
          <Typography variant="body">Yes, we are fully insured.</Typography></li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">What happens if your cleaner damages anything while performing commercial carpet cleaning services?</Typography>
          <Typography variant="body">We want to assure you that we have comprehensive insurance coverage, so in the event of an accident, you are fully protected.</Typography></li>
        <li>
          <Typography variant="h3">How long does the process of carpet cleaning for commercial buildings take?</Typography>
          <Typography variant="body">The duration of the carpet cleaning for commercial buildings depends mainly on:</Typography></li>
        <li>
          <p>The commercial carpet cleaning method that will be used on the carpet, rug or upholstery;</p>
        </li>
        <li>
          <p>How dirty the carpet is;</p>
        </li>
        <li>
          <p>The size and quantities of the carpets;</p>
        </li>
        <li>
          <p>If it needs any stain removal treatments;</p>
        </li>
        <li>
          <p>What kind of stains it has.</p>
        </li>
        <li>
          <Typography variant="h3">How long does it take for the carpet to get completely dry after a hotel carpet cleaning is performed?</Typography>
          <Typography variant="body">It depends on the carpet and the cleaning method used. For instance, if the <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-carpet-cleaning-services/steam">steam cleaning</a> method is used, the approximate time for the carpet to get dry is 7 to 9 hours. If the carpet is cleaned through a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-carpet-cleaning-services/dry">dry cleaning</a> method, it will be dry immediately after the cleaning process has ended, or little after that.</Typography></li>
        <li>
          <Typography variant="h3">Do you guarantee that after cleaning my carpet all stains will be removed?</Typography>
          <Typography variant="body">Unfortunately, we are unable to guarantee, as several uncontrollable factors come into play. These factors include:</Typography></li>
        <li>
          <p>The age of the stains;</p>
        </li>
        <li>
          <p>The nature of the substance that caused the stains;</p>
        </li>
        <li>
          <p>The carpet's type and fabric;</p>
        </li>
        <li>
          <p>Any prior attempts to remove the stains.</p>
          <Typography variant="body">Nevertheless, we are dedicated to exerting our utmost effort to eliminate all stains from your carpet. Our methodology includes:</Typography>
        </li>
        <li>
          <p>Using state-of-the-art cleaning equipment;</p>
        </li>
        <li>
          <p>Utilising carefully selected premium detergents;</p>
        </li>
        <li>
          <p>Tailoring our approach to the specific type of carpet and the stain's origin to achieve the best possible results.</p>
        </li>
        <li>
          <Typography variant="h3">How soon will a cleaner visit me?</Typography>
          <Typography variant="body">We'll make every effort to schedule an appointment for you as promptly as we can. Typically, our bookings are full for up to three days in advance, although occasional exceptions may occur.</Typography></li>
        <li>
          <Typography variant="h3">Can you give me a quote over the phone or do you need to visit my commercial property?</Typography>
          <Typography variant="body">For a quote about any kind of commercial carpet cleaning, we do require that we come for a viewing in person. This is due to the fact that a quote over the phone without such a viewing will be very hard to estimate and in most cases, the final price will not be precise. The booked viewing and the commercial carpet cleaning process will be performed to your advantage and according to your busy schedule.</Typography></li>
        <li>
          <Typography variant="h3">What payment methods do you accept for commercial carpet cleaning in London?</Typography>
          <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments handed to our team.</Typography></li>
        <li>
          <Typography variant="h3">Can you send me an invoice for the carpet cleaning for commercial buildings?</Typography>
          <Typography variant="body">Yes, we will send you a receipt via email, or via any means that are convenient to you.</Typography></li>
        <li>
          <Typography variant="h3">Are you qualified?</Typography>
          <Typography variant="body">Yes, we are qualified and fully trained by the <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s recognised industry qualification, and by <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a>.</Typography></li>
        <li>
          <Typography variant="h3">How long have you been in the professional commercial carpet cleaning business?</Typography>
          <Typography variant="body">Since 2012, we have been active in the carpet cleaning rental property industry, serving both commercial and residential clients. Over the years, we have encountered a wide array of carpets, rugs, upholstery, and various types of stains, accumulating valuable experience. Our commitment to excellence has driven us to enhance our services through the following means:</Typography></li>
        <li>
          <p>Continuously upgrading our equipment and machinery with superior alternatives whenever they become available;</p>
        </li>
        <li>
          <p>Consistently evaluating and improving our cleaning products to ensure the highest quality of service;</p>
        </li>
        <li>
          <p>Dedication to expanding our knowledge and skills through ongoing professional courses and training, always seeking to enhance our expertise and competence.</p>
        </li>
        <li>
          <Typography variant="h3">Can you give me a discount for the commercial carpet cleaning services?</Typography>
          <Typography variant="body">Our commercial carpet cleaning services stand out for their top-quality results, thanks to our use of the most effective equipment and over 20 premium cleaning products. Not only are our commercial carpet cleaning prices highly competitive, but they are also some of the most attractive in the market. Bundling all the services you require proves to be more cost-effective compared to individual service visits. This is because of the initial high cost and additional charges for each technician visit, factoring in travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography></li>
        <li>
          <Typography variant="h3">How much is commercial carpet cleaning per square foot?</Typography>
          <Typography variant="body">You can check out our price table above, but in short, our commercial carpet cleaning prices per square foot are:</Typography></li>
        <li>
          <p>from 0 to 2153ft² (200m²) - £2.20;</p>
        </li>
        <li>
          <p>from 2153ft² (200m²) to 10764ft² (1000m²) - £2.00.</p>
        </li>
        <li>
          <Typography variant="h3">How much does commercial carpet cleaning cost?</Typography>
          <Typography variant="body">Our minimum charge is £65.00. Per square metre, we charge £2.20 from 0 to 200m² and £2.00 – from 200 to 1000m².</Typography></li>
        <li>
          <Typography variant="h3">How often do hotels clean carpets?</Typography>
          <Typography variant="body">The frequency with which hotels book commercial carpet cleaning services depends on a number of factors. We advise that hotels clean their carpets, rugs and upholstery on a regular basis, typically every 3-6 months. This is desirable for both the health and safety of guests, as well as the overall appearance of the hotel.</Typography>
          <Typography variant="body">Here are some of the factors that can affect the frequency of hotel carpet cleaning services:</Typography>
        </li>
        <li>
          <p>Type and fabric of the carpet: Some carpets, such as wool carpets, are more delicate than others and require more frequent cleaning.</p>
        </li>
        <li>
          <p>Level of traffic: Carpets in high-traffic areas, such as hallways and lobbies, may need to be cleaned more often than carpets in low-traffic areas.</p>
        </li>
        <li>
          <p>Hotel's cleaning schedule: Some hotels have a more rigorous cleaning schedule than others do.</p>
        </li>
        <Typography variant="body">In addition to regular cleaning, hotels may also spot-clean carpets as needed. This is typically done to remove small stains or spills.</Typography>

      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">What is the best method for commercial carpet cleaning?</Typography>
          <Typography variant="body">Some of the most popular commercial carpet cleaning methods are:</Typography></li>
        <li>
          <p>Hot water extraction, otherwise known as <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-carpet-cleaning-services/steam">steam cleaning</a>, is easily the most common professional carpet cleaning technique. Steam cleaning uses hot water at high pressure to penetrate into carpet fibres, breaking down the dirt and bacteria stored deep within.</p>
        </li>
        <li>
          <p><a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-carpet-cleaning-services/dry">Dry carpet cleaning</a> is used for cleaning finer and more delicate carpets, rugs and upholstery, vulnerable to water damage. This cleaning method is suitable for all types of carpets and it is a significantly faster cleaning method because of its little to no drying time. It is also a great solution for cleaning big facilities without the luxury of off-time.</p>
        </li>
        <Typography variant="body">If you are having trouble deciding which industrial carpet cleaning services are best for you, feel free to contact us to get professional advice.</Typography>
        <li>
          <Typography variant="h3">What is commercial carpet cleaning?</Typography>
          <Typography variant="body">Commercial carpet cleaning refers to professional cleaning by a commercial carpet cleaning company in commercial or business settings such as offices, retail stores, hotels and other commercial establishments. We at “Fine Carpet Cleaning” are also specialised in restaurant carpet cleaning and pub carpet cleaning. Such industrial carpet cleaning services are typically more extensive and intensive than residential carpet cleaning due to the higher volume of foot traffic and the potential for more significant soil and stains in commercial spaces.</Typography></li>
        <li>
          <Typography variant="h3">How often should a commercial carpet be cleaned?</Typography>
          <Typography variant="body">The frequency of commercial carpet cleaning can vary based on several factors, including:</Typography></li>
        <li>
          <p>The type of commercial facility;</p>
        </li>
        <li>
          <p>The level of foot traffic the carpets receive;</p>
        </li>
        <li>
          <p>The specific needs of the business;</p>
        </li>
        <li>
          <p>Does the place have doormat;</p>
        </li>
        <li>
          <p>On which floor is the place located (usually the first floor is dirtier because you directly enter the room from outside).</p>
        </li>
        <Typography variant="body">Cleanliness depends on these factors, so have them in mind when you are thinking about carpet cleaning. On average we recommend commercial carpet cleaning in London every 6 months.</Typography>
        <li>
          <Typography variant="h3">How do you clean hotel carpet?</Typography>
          <Typography variant="body">Cleaning hotel carpets is a crucial part of maintaining a clean and welcoming environment for your guests. The cleaning process typically involves a combination of regular maintenance and periodic deep cleaning. Here are the steps involved in cleaning hotel carpets:</Typography></li>
        <li>
          <p>It's advisable to hire a professional carpet cleaning service with experience in hotel environments. They have the expertise and equipment to deep clean and restore the carpet effectively.</p>
        </li>
        <li>
          <p>Stubborn stains may require specialised stain-removal techniques or products. Trained professionals can address these effectively. Check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-stain-removal-services">stain removal</a> page to learn more.</p>
        </li>
        <li>
          <p>Consider applying a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protector</a> after cleaning to help repel spills and stains, extending the time between cleanings.</p>
        </li>
        <Typography variant="body">Regular maintenance and professional cleaning from an industrial carpet cleaning company that specialises in offering hotel carpet cleaning services are essential for preserving the appearance and longevity of the carpets, rugs or upholstery in your hotel. Keeping carpets clean and fresh contributes to the overall guest experience and helps maintain a positive image for your establishment.</Typography>
        <li>
          <Typography variant="h3">What do hotels use to remove stains?</Typography>
          <Typography variant="body">Many hotels use hotel carpet cleaning services that are equipped with the expertise and equipment to handle a wide range of stains effectively. These services can provide deep cleaning for carpets, upholstery, and other surfaces.</Typography>
          <Typography variant="body">It's important to note that the choice of stain removal method or product depends on the type of stain, the fabric or material involved, and the hotel's specific protocols. Booking industrial carpet cleaning services, like the ones we offer at “Fine Carpet Cleaning” Ltd., will ensure that your hotel’s carpets, rugs and upholstery are correctly taken care of. That is thanks to our business carpet cleaning expertise, professional equipment and carefully selected cleaning products.</Typography></li>
        <li>
          <Typography variant="h3">What are your commercial carpet cleaning rates?</Typography>
          <Typography variant="body">The carpet cleaning rates for commercial cleaning are determined by several variables, including:</Typography></li>
        <li>
          <p>The number and dimensions of the carpets;</p>
        </li>
        <li>
          <p>The degree of soiling;</p>
        </li>
        <li>
          <p>The type of carpets;</p>
        </li>
        <li>
          <p>The accessibility of the carpets.</p>
        </li>
        <Typography variant="body">To learn more about our commercial carpet cleaning rates, check out our commercial carpet cleaning prices.</Typography>
        <li>
          <Typography variant="h3">Do you offer industrial carpet cleaning services?</Typography>
          <Typography variant="body">We at “Fine Carpet Cleaning” Ltd. are specialised in cleaning commercial carpets and perform in all boroughs in London. Wherever you want your carpets, rugs or upholstery to be cleaned by a commercial carpet cleaning company, you can rely on us to happily arrive at that destination.</Typography></li>
        <li>
          <Typography variant="h3">Are the cleaning machines loud? Will they interrupt the work process?</Typography>
          <Typography variant="body">Yes, the machines are noisy, but commercial carpet cleaning is designed to be efficient, fast and minimise downtime for your business. Our powerful equipment and experienced technicians ensure that cleaning is completed quickly, usually within a few hours, depending on the size and condition of the area. In addition, we offer flexible scheduling options, including after-hours and weekend appointments, to further minimise disruption to your daily operations.</Typography></li>
        <li>
          <Typography variant="h3">Will our staff disrupt the work of your specialists?</Typography>
          <Typography variant="body">Our team is trained to work efficiently and discreetly to minimise any interference with your staff and daily operations. We understand the importance of maintaining a productive work environment, so in order to ensure the good work of your team and our specialists, we advise you to book at a time when there are no people in the office in order not to interrupt each other's work. We can schedule carpet cleaning outside of your regular working hours, including evenings and weekends, to avoid disrupting your business activities.</Typography></li>
        <li>
          <Typography variant="h3">Can you also carry out carpet cleaning outside business hours?</Typography>
          <Typography variant="body">Yes, we can also carry out commercial carpet cleaning outside regular working hours. We know that it's important to minimise disruption to your business. That's why we offer flexible schedules that include evenings, weekends, and even early mornings. Our mission is to satisfy your specific needs and to ensure that your carpets are cleaned at a time that is most convenient for you so that your business can continue to run without interruption. Contact us to discuss your preferred time, and we will create a cleaning schedule that fits your routine.</Typography></li>
        <li>
          <Typography variant="h3">Do you also clean at weekends?</Typography>
          <Typography variant="body">Yes, we also clean at weekends. The optimal time for commercial carpet cleaning is when no one is at work so as not to disturb the work of your staff. The only thing we need is a person who can tell us where the electricity and water connections are. There is no extra charge for weekend cleaning, so you can book whenever it is convenient for you.</Typography></li>
      </ul>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Commercial carpet cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our commercial carpet cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <Typography variant="h3">Benefits:</Typography>
        <p>Fine Carpet Cleaning” Ltd. performs commercial carpet cleaning services in all of London. We have years of experience in commercial carpet cleaning for businesses of all sizes. We deliver a deeper clean that is healthier for your employees and customers without interfering with your business activities. The benefits of using commercial carpet cleaning services are:</p>
        <ul>
          <li class="ml--5">
            <p><strong>Customised pricing and discounts</strong> - For business customers, an inspection is always conducted in advance. This will allow the cleaning team to assess access to the water and electricity systems and get an idea of the full scope of the job. In this way we will be able to customise the service to your specific needs and ensure you get the best possible price.</p>
          </li>
          <li class="ml--5">
            <p><strong>Flexible scheduling</strong> - you can make booking at a convenient time for you in order to avoid disrupting daily operations. We offer evening, weekend, and early morning appointments to ensure minimal interference with your business activities.</p>
          </li>
          <li class="ml--5">
            <p><strong>Professionalism</strong> - Business environments frequently require higher levels of cleanliness and hygiene. Our business carpet cleaning services are designed to meet these requirements, delivering a clean and healthy working environment for your staff and clients.</p>
          </li>
        </ul>

        <Typography variant="h3">Simple booking process:</Typography>
        <p>The usual process of booking our commercial carpet cleaning services:</p>

        <ul>
          <li class="ml--5">
            <p>You reach out to us.</p>
          </li>
          <li class="ml--5">
            <p>We come for a viewing of the space you want to be cleaned and offer recommendations on which services will best suit you.</p>
          </li>
          <li class="ml--5">
            <p>You will receive a quote for the business carpet cleaning service.</p>
          </li>
          <li class="ml--5">
            <p>If you find our terms agreeable, we will schedule an appointment for you.</p>
          </li>
          <li class="ml--5">
            <p>One of our skilled technicians will then visit your property to perform the carpet cleaning.</p>
          </li>
        </ul>
        <Typography variant="h3">What do we offer:</Typography>
        <p><strong>Specialised carpet cleaning for every business need:</strong></p>

        <ul>
          <li class="ml--5"><p>Hotel carpet cleaning services</p></li>
          <li class="ml--5"><p>Restaurant carpet cleaning services</p></li>
          <li class="ml--5"><p>Pub carpet cleaning services</p></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/commercial/office">Office carpet cleaning services</a></li>
          <li class="ml--5"><p>Industrial carpet cleaning services</p></li>
          <li class="ml--5"><p>Corporate carpet cleaning services</p></li>
          <li class="ml--5"><p>Contract carpet cleaning services</p></li>
          <li class="ml--5"><p>Retail carpet cleaning services</p></li>
          <li class="ml--5"><p>Health facilities carpet cleaning services</p></li>
          <li class="ml--5"><p>Rental property carpet cleaning</p></li>
          <li class="ml--5"><p>And many more</p></li>
        </ul>
        <p><strong>Beyond carpets: Our full range of professional cleaning services:</strong></p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-rug-cleaning-services">Professional rug cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services">Professional upholstery cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/stain-protection-services">Stain protection services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-stain-removal-services">Professional stain removal services</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our commercial carpet cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <p>At "Fine Carpet Cleaning" Ltd., we use a range of top-tier cleaning equipment and products to ensure the highest quality commercial carpet cleaning:</p>
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Premium devices</h3>
            <Typography variant="body">Our machines are some of the most powerful and effective portable machines globally. We've conducted extensive testing of various machine brands available in the UK market and have chosen the best, including "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>" (a leading US manufacturer) and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>" (one of the top UK manufacturers). Our in-house engineer also fine-tunes and enhances these machines to maximise their performance.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Effective vacuum cleaner</h3>
            <Typography variant="body">The equipment we use for our carpet commercial cleaning includes a high-filtration twin-motor vacuum cleaner, which we believe to be the best on the market. This vacuum cleaner is purpose-built for high-performance industrial carpet cleaning. It features two motors, with one agitating the carpet while the other efficiently suctions out loose dirt, dry soil, and dust.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Precisely chosen cleaning agents</h3>
            <Typography variant="body">We make use of over 20 different cleaning products from renowned brands in the UK and US markets. Our selection process involves extensive testing, and we've chosen products from brands such as "Alltec," "Prochem," "Chemspec," "Solution World of Clean," and "TMF." This diverse range allows our technicians to select the most suitable detergents for each situation based on factors like:</Typography>
          </li>
        </ol>
        <ul>
          <li class="ml--5">
            <p>The fabric and type of the carpet.</p>
          </li>
          <li class="ml--5">
            <p>How soiled the carpet is.</p>
          </li>
          <li class="ml--5">
            <p>The type of stains that need to be cleaned.</p>
          </li>
        </ul>
        <p>This approach ensures the most professional contract carpet cleaning services.</p>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our Commercial carpet cleaning services in London</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
      ]} />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Video from our Commercial carpet cleaning services in London</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Commercial carpet cleaning prices</h2>

      <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
        style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
        <br></br>
        Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
        charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
        delays for the technicians and messes up the schedule.
        <br></br>
        <strong>Deising - Free of charge - just notify us when booking.</strong></div>

      <table class="w-full m-auto font-sans">
        <thead style="box-shadow: 0px 20px 20px 1px rgb(84 89 95 / 10%);">
          <tr class="h-20">
            <td class="c-paper bg-#2e5c47 font-size-7 pl-5 b-rd-lt-3"><strong>Room type</strong></td>
            <td class="c-paper bg-#2e5c47 font-size-7 pl-5 b-rd-rt-3"><strong>Price</strong></td>
          </tr>
        </thead>
        <tbody style="box-shadow: 0px 20px 20px 1px rgb(84 89 95 / 10%);">
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
            <td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
            <td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
            <td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Living Room</td>
            <td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
            <td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Hallway</td>
            <td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
            <td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Landing</td>
            <td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
            <td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Small rug</td>
            <td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
            <td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
          </tr>
          <tr>
            <td class="bg-paper pl-5 py-2 font-500">Large rug</td>
            <td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
          </tr>
          <tr>
            <td class="b-rd-lb-3 b-rd-rb-3 bg-#2e5c47" colspan="3" style="box-shadow: 0px 20px 20px 1px rgb(247 247 247/ 100%);"><p class="font-size-3.5 md-font-size-4 px-5 md-my-7 c-paper line-height-6 word-spacing-0.5">*All prices depend on the quantity of the order, degree of contamination, access and location.
              <br></br>**Final price after contacting us.</p></td>
          </tr>
        </tbody>
      </table>

      <button class="outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-250px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9 my-20 mx-auto" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Frequently ordered together</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Our commercial carpet cleaning services specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Fresh and clean carpet - mission possible!</h3>
            <Typography variant="body">Here are some tips that will help you prolong the life of your carpet:</Typography>
            <ul style="list-style: initial;" class="ml--5">
              <li class="ml--5">
                <p>If you spill something on the carpet, do not try to clean it up with anything because that will only make the situation worse. What you can do is soak up the liquid with kitchen paper.</p>
              </li>
              <li class="ml--5">
                <p>The best way to maintain your carpet at home is to use a hoover with a beater at least once a week. This type of vacuum cleaner removes the dust from the carpet and return the natural fluffiness of the carpet.</p>
              </li>
              <li class="ml--5">
                <p>The areas under the chairs are often worn. In order to prevent this, we recommend that you lay out a chair mat on the carpet.</p>
              </li>
            </ul>
            <Typography variant="body">Our commercial carpet cleaning specialist suggests adding a stain protector to your carpet and upholstery for keeping the carpet fresh and clean. This can save you a considerable amount of money on professional stain removal services. If you are curious, we recommend that you find out <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">more about the benefits of stain protection services.</a></Typography>
          </li>


          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Consider utilising the stain removal service</h3>
            <Typography variant="body">Our contract carpet cleaning specialists suggest enlist the services of a professional stain removal company if your carpet or upholstery has been stained rather than trying to clean it yourself. In case of unexpected spillage never try to clean the carpet with cleaning products from the supermarket, as these will severely damage the fabric. In fact, such stain removal attempts may seal the stain, making it even more challenging, if not impossible, for a professional commercial carpet cleaning company to remove it. Therefore, scheduling a professional <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-stain-removal-services">stain removal service</a> from an expert industrial carpet cleaning company can potentially save your valuable carpet or upholstery, which could be worth a significant amount.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Choose wisely after gathering information</h3>
            <Typography variant="body">We offer a range of services that go beyond carpet cleaning, such as <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-upholstery-cleaning-services">upholstery cleaning</a>, <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-rug-cleaning-services">rug cleaning</a>, and <a class="color-paper-link hover-color-paper-link-hover:hover" href="/services">more</a>. Our team takes pride in providing comprehensive solutions, so don't miss the opportunity to explore the full extent of our expertise and make informed decisions about your cleaning needs. We are not afraid of stains, so don’t worry and contact us as soon as possible.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Pre-cleaning inspection</h3>
            <Typography variant="body">Our carpet commercial cleaning specialist suggests scheduling a viewing of the carpet before the cleaning. This enables us to get access to water and wastewater channels while also understanding the carpet issue. This visit is highly recommended to guarantee that we provide the best possible pricing and personalise our services to your company's specific needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Protect the health of your team</h3>
            <Typography variant="body">If you have carpet, carpet floor covering, or upholstery in your commercial property, it's essential to be aware of the health benefits of keeping them clean. These items can accumulate substantial amounts of dust, microorganisms, and dirt particles that might lead to health issues for your staff or clients. Neglecting their care can increase the risk of various reactions, skin problems, and allergies. To prevent these issues, our carpet cleaning specialist recommends using professional commercial carpet cleaning services at least once a year. If your carpets experience heavy foot traffic, more frequent cleaning is in your best interest.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Commercial carpet cleaning reviews in London</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our commercial carpet cleaning services</h2>

      <FaqSection/>

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
