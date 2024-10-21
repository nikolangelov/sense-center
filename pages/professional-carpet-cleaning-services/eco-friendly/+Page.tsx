import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { Typography } from '../../../components/Typography';
import { createCollapsable } from '../../../components/Collapsable';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../../components/FrequentlyOrderedTogether';
import { createEffect } from "solid-js";
import {FleurDivider} from "../../../components/FleurDivider";
import { VideoPlayer } from '../../../components/VideoPlayer';
import { PriceTable } from '../../../components/PriceTable';

function FaqSection() {
  const { Container, Entry } = createCollapsable()
  return <Container>
    <Entry>
      <li>
        <Typography variant="h3">1. Do you have a cancellation fee for the green carpet cleaning services?</Typography>
        <Typography variant="body">Yes, if you cancel on the day of the enviro green carpet cleaning you will lose your deposit.</Typography></li>
      <li>
        <Typography variant="h3">2. Should I pay for the congestion / parking charge?</Typography>
        <Typography variant="body">Yes, we request that our clients make provisions for suitable parking spaces in close proximity to the property. In cases where parking or congestion charges are incurred, the client is kindly asked to bear the associated costs if possible.</Typography></li>
      <li>
        <Typography variant="h3">3. Do I need to move my furniture before the carpet cleaning eco services?</Typography>
        <Typography variant="body">We kindly request your cooperation in relocating small, delicate, or valuable furniture items, such as lamps and ornaments, before the performance of our natural carpet cleaning services. This is primarily for insurance purposes. If possible, we recommend positioning these items in a secure area that won't be affected during the green carpet cleaning process. We are more than willing to assist in moving other lightweight furniture items, such as chairs, armchairs, and tables during the cleaning. Once the cleaning is completed, we will ensure these items are returned to their original positions. However, if there is a need to move heavy furniture items like sofas, beds, wardrobes, and cupboards, please be aware that an additional charge will be applied. This extra fee accounts for the additional time and effort required by our technician, who will be appropriately compensated. Our primary objective is to ensure a stress-free experience for you throughout the entire ecology carpet cleaning process.</Typography></li>
      <li>
        <Typography variant="h3">4. What if I live on the 4th floor and have no lift?</Typography>
        <Typography variant="body">Due to the substantial weight of our equipment for the bio-clean carpet cleaning, which exceeds 50 kilograms, an additional fee is applied for each additional floor that requires manual transportation. This is necessary because manually carrying the heavy equipment up multiple flights of stairs is a time-consuming task, and it can cause our technicians to fatigue more quickly. Consequently, our overall productivity for the day may be reduced compared to our standard output.</Typography></li>
      <li>
        <Typography variant="h3">5. Are you insured?</Typography>
        <Typography variant="body">Yes, we are fully insured.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. What happens if your cleaner damages anything while performing the organic carpet cleaning service?</Typography>
        <Typography variant="body">We are fully insured and if an accident happens in the process of the eco-clean carpet services we are fully covered.</Typography></li>
      <li>
        <Typography variant="h3">7. How long does the process of eco-organic carpet cleaning take?</Typography>
        <Typography variant="body">The organic carpet cleaning needs more agitation and more manual work than the traditional carpet cleaning. So it takes more time and in some cases may need a second cleaning. We do not guarantee that the stain will be removed, as the sustainable cleaners are not as efficient as the conventional ones.</Typography>
        <Typography variant="body">However, the time it takes for the eco pro carpet cleaning process primarily hinges on these factors:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The level of soiling on the carpet;</p>
        </Typography>
        <Typography variant="li">
          <p>The size of the carpet;</p>
        </Typography>
        <Typography variant="li">
          <p>Whether stain removal treatments are necessary.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">8. How long does it take for the carpet to get dry after environmentally friendly carpet cleaning services?</Typography>
        <Typography variant="body">The drying time of the carpet after a carpet cleaning without chemicals varies depending on the carpet type and the cleaning method employed. For instance, when the eco steam carpet cleaning method is utilised, the approximate drying time typically ranges from 7 to 9 hours. On the other hand, if the green dry carpet cleaning method is chosen, the carpet will be dry immediately after the cleaning process or shortly thereafter.</Typography>
        <Typography variant="body">If you are having trouble deciding which green carpet cleaning services will best suit you or are searching for an eco carpet cleaning company, you can contact us at any suitable time for you to get expert enviro green carpet cleaning advice.</Typography></li>
      <li>
        <Typography variant="h3">9. Do you guarantee that after a carpet cleaning no chemicals service all stains will be removed from my carpet?</Typography>
        <Typography variant="body">Unfortunately, we are unable to provide an absolute guarantee due to several factors, which include:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The age of the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The nature of the substances responsible for the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The type and fabric of the carpet;</p>
        </Typography>
        <Typography variant="li">
          <p>Any prior mishandling of the stains.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">Nonetheless, we are dedicated to putting forth our utmost effort to eliminate all stains from your carpet. Our approach includes:</Typography>
      </li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Utilising state-of-the-art equipment for our house and carpet cleaning services;</p>
        </Typography>
        <Typography variant="li">
          <p>Employing a carefully selected range of premium detergents tailored for the job;</p>
        </Typography>
        <Typography variant="li">
          <p>Customising our approach to chem-free carpet cleaning to suit the specific type of carpet and the staining agent, all in pursuit of achieving the best possible results.</p>
        </Typography>
      </ul>
      <Typography variant="body">However, the organic carpet cleaning needs more agitation and more manual work, and it may need a second cleaning. We do not guarantee that the stain will be removed, as the sustainable cleaners are not as efficient as the traditional ones.</Typography>
      <li>
        <Typography variant="h3">10. How soon can I expect a cleaner to visit me for an eco-friendly carpet cleaning in London?</Typography>
        <Typography variant="body">We will make every effort to schedule a chemical-free carpet cleaning appointment for you as early as possible. Typically, our bookings are fully reserved for up to three days in advance, although there may be occasional exceptions.</Typography></li>
      <li>
        <Typography variant="h3">11. Can I get a quote over the phone for a natural carpet cleaning or do you need to visit my property?</Typography>
        <Typography variant="body">Yes, we can offer you a phone estimate, and there might be no need for us to perform an on-site visit. Furthermore, you also have the option to obtain an online quote for natural carpet cleaning services.</Typography></li>
      <li>
        <Typography variant="h3">12. What payment methods do you accept for your eco-organic carpet cleaning?</Typography>
        <Typography variant="body">We accept debit/credit cards, bank transfers and cash payments directly to our team.</Typography></li>
      <li>
        <Typography variant="h3">13. Can you provide me with an invoice for the eco-clean carpet cleaning?</Typography>
        <Typography variant="body">Yes, we will either send you a receipt via email or via any method of your choice.</Typography></li>
      <li>
        <Typography variant="h3">14. Are you qualified for eco-clean carpet care?</Typography>
        <Typography variant="body">Yes, we have received full training and are certified as members of “<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a>” and of the “<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a>” (National Carpet Cleaners Association), the recognized industry qualification in the UK.</Typography></li>
      <li>
        <Typography variant="h3">15. How long have you been in the carpet cleaning domestic business?</Typography>
        <Typography variant="body">We have a strong track record in the professional environmentally friendly carpet cleaning industry, spanning back to 2012. Over these years, we've dealt with a wide variety of carpets, rugs, upholstery, and various stains from both commercial and residential clients. This extensive experience has motivated us to consistently improve our environmental carpet cleaning services. We accomplish this through the following means:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Continuously upgrading our equipment and machinery with superior alternatives as they become available;</p>
        </Typography>
        <Typography variant="li">
          <p>Regularly testing and enhancing our range of cleaning products;</p>
        </Typography>
        <Typography variant="li">
          <p>A commitment to expanding our knowledge and expertise by actively participating in additional professional courses and training. Our dedication to excellence has allowed us to refine our eco-carpet cleaning in London throughout the years.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">16. Can you give me a discount for the organic carpet cleaning services?</Typography>
        <Typography variant="body">Our natural carpet cleaning company’s services are widely recognised for their exceptional quality, use of the most efficient equipment, and a selection of over 20 premium cleaning products. Consequently, our healthy carpet cleaning prices stand out not only for their competitiveness but also for their attractiveness within the market. We highly recommend combining all essential services for your specific eco-green carpet cleaning needs. You'll promptly notice that bundling all the services you require is notably more cost-effective compared to having them performed individually. This cost-effectiveness is due to the initial higher eco-clean carpet cost, in addition to the charges related to each technician visit, which factor in elements like travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography></li>
      <li>
        <Typography variant="h3">17. Are carpet cleaning chemicals safe?</Typography>
        <Typography variant="body">The safety of carpet cleaning chemicals can vary depending on the specific products used. Generally, most carpet cleaning solutions are designed to be safe for use when handled properly, but we advise you to be aware of a few factors, such as:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The chemical composition of the detergents being used;</p>
        </Typography>
        <Typography variant="li">
          <p>The proper application of the product;</p>
        </Typography>
        <Typography variant="li">
          <p>If there’s any residue left behind after the cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>The environmental impact of the chemicals used.</p>
        </Typography>
      </ul>
      <Typography variant="body">Hiring professional green carpet cleaning companies, such as Fine Carpet Cleaning will ensure you that your carpets will be handled excellently. Experts are trained in the proper use of cleaning chemicals and utilise advanced equipment that can more effectively remove residues. If you have specific health concerns or sensitivities, we recommend booking eco-friendly carpet cleaning services. This service will provide a quality cleaning of your carpet, as well as a chemical-free carpet cleaning.</Typography>
      <li>
        <Typography variant="h3">18. What is eco-friendly carpet cleaning?</Typography>
        <Typography variant="body">Eco-friendly carpet cleaning, also known as green carpet cleaning, refers to a carpet cleaning process that prioritises environmental sustainability and the safety of humans and pets. This approach involves the use of cleaning methods, products, and equipment that have minimal impact on the environment.</Typography>
        <Typography variant="body">The eco-friendly carpet cleaning solution is made entirely of natural plant-based components that come from sustainable sources. It is completely biodegradable and has antibacterial and antiviral qualities due to its unique natural molecular cleansing activity. Imagine thousands of tiny hammers attacking the soiled carpet. When we spray the cleaner, the tiny, invisible particles help break down the soil and the viruses for you. Visible and enhanced benefits will continue even after extraction. We use these cleaners for cleaning carpets and sofas. This cleaning method needs more agitation, more manual work and may need a second cleaning. There is no guarantee that the stain will be removed as they are not as efficient as the traditional ones.</Typography>
        <Typography variant="body">When considering carpet cleaning eco-services, it's essential to choose an environmentally friendly carpet cleaning services provider that adheres to these principles and standards to help protect your home, your health, and the environment.</Typography>
      </li>
      <li>
        <Typography variant="h3">19. Can you walk on the carpet after a bio-clean carpet cleaning?</Typography>
        <Typography variant="body">It depends on the method used. After an eco steam carpet cleaning, it is recommended that you try to stay off the freshly cleaned carpets until they are dry – about 7-9 hours. If you can not avoid walking over the carpet before it is dry, do it with caution. When from the carpet you step on a hard surface, like tile or hardwood, it can be very slippery.</Typography>
        <Typography variant="body">If a green dry carpet cleaning method has been applied, the carpet or rug will be completely dry immediately after or shortly thereafter the eco pro carpet cleaning has ended.</Typography>
      </li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">20. How often should carpets go through carpet cleaning without chemicals?</Typography>
        <Typography variant="body">Cleaning by green carpet cleaning companies depends mainly on factors like how fast the carpet or rug soils. On average, a carpet should be cleaned at 12-month intervals. However, if you have pets, children or high traffic on the carpet or if it is easily stained, we recommend using no chemicals carpet cleaning services more often than that. You can contact us anytime to get nontoxic carpet cleaning or just to seek professional advice.</Typography></li>
      <li>
        <Typography variant="h3">21. Does ecology carpet cleaning remove stains?</Typography>
        <Typography variant="body">It depends on the eco-green carpet cleaning method being used. Eco steam carpet cleaning is highly proficient at eradicating deep-seated stains, dirt, and grime. It excels at eliminating bacteria, dust mites, allergens, mould, pet dander, and unpleasant odours. However, it's important to note that particularly stubborn stains, such as those that are very old or have been treated improperly, can present a significant challenge for complete removal, even with professional eco-clean carpet assistance.</Typography>
        <Typography variant="body">On the other hand, green dry carpet cleaning is not as effective at stain removal, but it excels at refreshing the carpet's appearance and restoring its colour. This method is typically used for cleaning more delicate and natural carpets and rugs that are susceptible to water damage.</Typography>
        <Typography variant="body">While we, at Fine Carpet Cleaning, have achieved impressive success rates in stain removal thanks to our extensive experience and the use of high-quality equipment, we cannot provide an absolute guarantee that every stain can be entirely eliminated. However, we want to assure you that we will assess each stain and provide information on whether we can successfully remove them during the quotation process. Your confidence in stain removal is our priority.</Typography></li>
      <li>
        <Typography variant="h3">22. How often should carpets go through eco-organic carpet cleaning with pets?</Typography>
        <Typography variant="body">We recommend that pet owners seek eco carpet cleaning in London at least twice per year. If you are not sure whether your carpets, rugs or upholstery should go through green carpet cleaning services feel free to contact us at any suitable for you time to get professional advice.</Typography></li>
      <li>

        <Typography variant="h3">23. How much does an eco-clean carpet care cost?</Typography>
        <Typography variant="body">The cost to hire an eco carpet cleaning company can vary and depends on several factors, such as:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The quantity and dimensions of the carpets;</p>
        </Typography>
        <Typography variant="li">
          <p>The extent of soiling on the carpets;</p>
        </Typography>
        <Typography variant="li">
          <p>The type of carpets;</p>
        </Typography>
        <Typography variant="li">
          <p>The accessibility to the carpets;</p>
        </Typography>
        <Typography variant="li">
          <p>Any additional services required, such as stain removal or stain protection.</p>
        </Typography>
      </ul>
      <Typography variant="body">For a comprehensive pricing breakdown, please visit our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">enviro green carpet cleaning prices page</a>. To obtain an accurate quote and determine the cost of the healthy carpet cleaning, it's recommended to get in touch with us. This will allow us to assess your specific needs, provide a more precise estimate, and discuss any optional services that might be applicable.</Typography>
      <li>
        <Typography variant="h3">24. What is the best natural way to clean a carpet?</Typography>
        <Typography variant="body">The best natural way to do carpet cleaning without chemicals involves using environmentally friendly, non-toxic methods and ingredients. We at Fine Carpet Cleaning provide chemical-free carpet cleaning services. This natural carpet cleaning method is effective for regular maintenance and deodorising. It's safe for your family, pets, and the environment.</Typography></li>
      <li>
        <Typography variant="h3">25.How can I clean my carpet without chemicals?</Typography>
        <Typography variant="body">You can do an eco-clean carpet cleaning using natural and eco-friendly methods by vacuuming thoroughly, using simple ingredients like baking soda and vinegar solution and fully rinsing. We recommend hiring natural carpet cleaning companies to avoid any slip-ups that are likely to occur during cleaning by yourself. Such companies perform non chemical carpet cleaning, which is effective in regular maintenance and deodorising. It's safe for your family, pets, and the environment.</Typography></li>
      <li>
        <Typography variant="h3">26. How to find a company that performs nontoxic carpet cleaning near me?</Typography>
        <Typography variant="body">Fine Carpet Cleaning performs in all of London. Feel free to contact us for environmentally friendly carpet cleaning services wherever you are and rest assured that we will take good care of your carpets, rugs and upholstery.</Typography></li>
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
          "name": "Eco-friendly carpet cleaning services",
          "image": "https://finecarpetcleaning.co.uk/assets/service-pics/eco-friendly-carpet/eco-friendly-carpet-cleaning-service.jpg",
          "description": "Fine Carpet Cleaning offers eco-friendly carpet cleaning services that enhance hygiene, prolong carpet life, and maintain a fresh appearance.",
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
              "name": "Cancellation Fee?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, if you cancel on the day of service, you'll forfeit your deposit."
              }
            },
            {
              "@type": "Question",
              "name": "Parking Charges?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, please arrange suitable parking. Clients cover any parking or congestion charges incurred."
              }
            },
            {
              "@type": "Question",
              "name": "Move Furniture?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Please move small, delicate items. We’ll help with light furniture but may charge for heavy items."
              }
            },
            {
              "@type": "Question",
              "name": "Drying Time?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Eco steam cleaning takes 7-9 hours to dry; green dry cleaning is immediate."
              }
            },
            {
              "@type": "Question",
              "name": "Eco-Friendly Cleaning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Eco-friendly cleaning uses sustainable methods and products, prioritizing safety for humans and pets."
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

      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Eco-friendly carpet cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/eco-friendly-carpet/eco-friendly-carpet-cleaning-service.jpg" alt="eco-friendly-carpet-cleaning-service" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">What to expect from our eco-friendly carpet cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>Fine Carpet Cleaning performs eco-friendly carpet cleaning services in all London boroughs. Eco-carpet cleaning is beneficial for the following reasons:</p>
        <ul>
          <li class="ml--5">
            <p>Eco-friendly carpet cleaning eliminates the exposure to harmful chemicals;</p>
          </li>
          <li class="ml--5">
            <p>It is a non chemical carpet cleaning service, therefore beneficial to the health of your family and children;</p>
          </li>
          <li class="ml--5">
            <p>Eco carpet cleaning is effective in cleaning your carpet and extends its life;</p>
          </li>
          <li class="ml--5">
            <p>Eco carpet cleaning helps improve indoor air quality;</p>
          </li>
          <li class="ml--5">
            <p>It is an environmentally friendly carpet cleaning solution.</p>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our eco-friendly carpet cleaning services:</p>

        <ul>
          <li class="ml--5">
            <p>You reach out to us.</p>
          </li>
          <li class="ml--5">
            <p>We provide recommendations for the most appropriate services for your situation.</p>
          </li>
          <li class="ml--5">
            <p>After that, you'll receive a quote for the eco-friendly carpet cleaning services.</p>
          </li>
          <li class="ml--5">
            <p>If our terms are agreeable to you, we will set up an appointment at your convenience.</p>
          </li>
          <li class="ml--5">
            <p>One of our skilled technicians will then visit your property to perform the green carpet cleaning.</p>
          </li>
        </ul>

        <h3>What do we offer:</h3>
        <p>Other carpet cleaning services we offer are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/steam">Professional carpet steam cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/dry">Dry carpet cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/fast-dry">Fast dry carpet cleaning services</a></li>
        </ul>
      </div>

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our eco-friendly carpet cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <p>At Fine Carpet Cleaning, we employ a range of top-tier cleaning equipment and materials to ensure the highest quality in our eco carpet cleaning in London:</p>
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">High-Performance Carpet Cleaning Machines</h3>
            <Typography variant="body">Our machines are among the most powerful and efficient portable units globally. After rigorous testing of various machine brands in the UK market, we've chosen the best options, including "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>", a prominent US manufacturer, and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>", one of the leading UK manufacturers. These machines are further optimised by our in-house engineer to guarantee a perfectly executed eco-clean carpet care.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">The Power of Dual Motors</h3>
            <Typography variant="body">Our environmental carpet cleaning equipment includes a high-filtration twin-motor vacuum cleaner, considered the finest available. This vacuum cleaner is purpose-built for high-performance carpet cleaning in homes. It features two motors: one agitates the carpet, while the other expertly extracts loose dirt, dry soil, and dust.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Tailored Green Cleaning</h3>
            <Typography variant="body">Our chem-free carpet cleaning product inventory has been carefully selected to ensure the most eco-friendly carpet cleaning in London. The cleaning solution that we use has been thoroughly tested to verify that no hazardous or toxic substances are present.</Typography>
            <Typography variant="body">The selection process involves thorough testing, and we've handpicked products from names such as "M-Power", "Solution World of Clean", and "TMF". This wide range empowers our technicians to select the most suitable detergents for each situation, considering factors such as:</Typography></li>
        </ol>
        <ul class="ml--5" style="list-style: initial;">
          <li>
            <p>The fabric and type of the carpet;</p>
          </li>
          <li>
            <p>The extent of soiling on the carpet;</p>
          </li>
          <li>
            <p>The nature of stains requiring removal.</p>
          </li>
        </ul>
        <p>This approach ensures the provision of the most professional eco-friendly carpet cleaning services.</p>
      </div>

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Pictures from our eco-friendly carpet cleaning services in London</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/service-pics/eco-friendly-carpet/1-organic-carpet-cleaning-service.jpg", alt: "1-organic-carpet-cleaning-service" },
        { src: "/assets/service-pics/eco-friendly-carpet/2-natural-carpet-cleaning-service.jpg", alt: "2-natural-carpet-cleaning-service" },
        { src: "/assets/service-pics/eco-friendly-carpet/3-chemical-free-carpet-cleaning.jpg", alt: "3-chemical-free-carpet-cleaning" },
        { src: "/assets/service-pics/eco-friendly-carpet/4-environmentally-friendly-carpet-cleaning-services.jpg", alt: "4-environmentally-friendly-carpet-cleaning-services" },
        { src: "/assets/service-pics/eco-friendly-carpet/5-eco-carpet-cleaning-company.jpg", alt: "5-eco-carpet-cleaning-company" },
        { src: "/assets/service-pics/eco-friendly-carpet/6-green-carpet-cleaning-services.jpg", alt: "6-green-carpet-cleaning-services" },
      ]} />

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Video from our eco-friendly cleaning services in London</h2>

			<VideoPlayer src='https://www.youtube.com/embed/UVS4IAtsTZc?enablejsapi=1&mute=1' />

      <FleurDivider/>

      { /* <h2 class="line-height-12 md-line-height-14">Eco-friendly carpet cleaning services prices</h2>

      <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
        style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
        <br></br>
        Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
        charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
        delays for the technicians and messes up the schedule.
        <br></br>
        <strong id="price_table">Deising - Free of charge - just notify us when booking.</strong></div>


                    <PriceTable
                title="Room type"
                items={[
                    { label: "Single Bedroom", value: "from £31.00" },
                    { label: "Double Bedroom", value: "from £35.00" },
                    { label: "Master Bedroom", value: "from £40.00" },
                    { label: "Living Room", value: "from £43.00" },
                    { label: "Through Lounge", value: "from £69.00" },
                    { label: "Hallway", value: "from £21.00" },
                    { label: "Flight of Stairs", value: "from £34.00" },
                    { label: "Landing", value: "from £15.00" },
                    { label: "Bathroom", value: "from £6.00" },
                    { label: "Small rug", value: "from £14.00" },
                    { label: "Medium rug", value: "from £20.00" },
                    { label: "Large rug", value: "from £31.00" },
                ]}
            />

      <button class="outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-250px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9 my-20 mx-auto" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>

      <FleurDivider/> */}

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
          img="/assets/service-pics/sofa-cleaning/sofa-upholstery-cleaning-service.jpg"
          alt="sofa-upholstery-cleaning-service"
          title="Professional sofa cleaning services"
          href="/professional-upholstery-cleaning-services/sofa"
          description="Our expert sofa cleaning uses steam and hot water extraction to eliminate 99% of microorganisms, revitalizing your space for a healthier home."
        />
        <FOTSliderContainer
          img="/assets/service-pics/furniture-cleaning/steam-cleaning-furniture-services.jpg"
          alt="steam-cleaning-furniture-services"
          title="Professional furniture cleaning services"
          href="/professional-upholstery-cleaning-services/furniture"
          description="Furniture upholstery cleaning services can extend the life of your furniture, saving you money on purchasing new items."
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

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Our eco-friendly carpet cleaning services specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Proactive protection</h3>
            <Typography variant="body">Our specialists in natural carpet cleaning recommend <strong>adding a water based stain protector</strong> to your carpet, rug and upholstery, which can lead to substantial savings on professional stain removal services. Explore the benefits of stain protection services <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">here</a>.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use professional stain removal service</h3>
            <Typography variant="body">According to our specialist in eco-pro carpet cleaning, it's highly advisable to hire a <strong>stain removal company</strong> for stained carpets or upholstery. Trying to clean stains yourself can lead to fabric damage and make complete stain removal more challenging. Scheduling a professional stain removal service from an experienced natural carpet cleaning company can protect your valuable furnishings.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Explore our list of services</h3>
            <Typography variant="body">We offer a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/services">wide range of services</a> beyond carpet cleaning, including upholstery and rug cleaning. Our team provides comprehensive solutions, so don't miss the chance to explore the full extent of our expertise and make informed decisions about your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">The advantages of combining eco-friendly cleaning services</h3>
            <Typography variant="body">Combining multiple cleaning services in one appointment offers several advantages, especially for eco-friendly carpet cleaning. Firstly, it saves time and reduces disruptions, allowing your place to return to normal operations more quickly. Additionally, bundled services come at a lower cost compared to booking each service separately, providing financial savings. Lastly, using an eco-friendly cleaning company ensures that all aspects of the cleaning process adhere to sustainable practices, promoting a healthier workspace and a greener planet.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Discover the importance of regular carpet maintenance</h3>
            <Typography variant="body">Maintaining clean carpets, carpet floor coverings, and upholstery is crucial for good health. These items can accumulate dust and microorganisms, leading to various health issues. Neglecting their care can result in allergies and skin problems. To prevent these issues, our eco-green carpet cleaning specialist suggests hiring natural carpet cleaning companies, with more frequent cleaning for high-traffic areas.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Reviews for our eco-friendly carpet cleaning services</h2>

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

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our eco-friendly carpet cleaning services</h2>

      <FaqSection />

      <FleurDivider/>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
