import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { Typography } from '../../../components/Typography';
import { createCollapsable } from '../../../components/Collapsable';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../../components/FrequentlyOrderedTogether';
import { PriceTable } from '../../../components/PriceTable';
import { createEffect } from "solid-js";

const VideoPlayer = () => {
  return (
    <div class="flex flex-justify-center flex-items-center mt-20">
      <iframe
        class="mt-10 b-rd-3 h-200px md-h-500px"
        style="width: 100%;"
        src="https://www.youtube.com/embed/l-8xVNxia5Q?autoplay=1&mute=1"
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
        <Typography variant="h3">1. Do you have a cancellation fee?</Typography>
        <Typography variant="body">Yes, if you cancel on the day of the cleaning you will lose your deposit.</Typography></li>
      <li>
        <Typography variant="h3">2. Will I be charged for the congestion / parking?</Typography>
        <Typography variant="body">Yes, we kindly ask that you ensure that there is convenient parking space available for our vehicles near the property. Additionally, any parking or congestion charges are to be covered by the client.</Typography></li>
      <li>
        <Typography variant="h3">3. Do I need to move furniture before corporate carpet cleaning?</Typography>
        <Typography variant="body">We would greatly appreciate your assistance in moving small, delicate, or valuable furniture items like lamps and ornaments away for insurance purposes. Please relocate them to a secure area before our arrival, if possible. We are more than willing to help move lightweight furniture such as chairs, armchairs, and tables during the cleaning. After the cleaning is completed, we will return them to their original positions. If there is a need to move heavy furniture like sofas, beds, wardrobes, and cupboards, there will be an additional charge. This is due to the extra time and effort required by our technician, who will be appropriately compensated. Our primary goal is to ensure a stress-free experience for you throughout the entire commercial carpet cleaning process.</Typography></li>
      <li>
        <Typography variant="h3">4. What if my commercial building has no lift?</Typography>
        <Typography variant="body">If you want us to clean the carpets on a high floor in your commercial building and it lacks an elevator, there will be an additional charge due to the weight and bulk of our equipment, which exceeds 50 kilograms. This is because manually transporting the equipment up multiple flights of stairs is more time-consuming, and our technicians may tire more quickly. Consequently, our productivity for the day may be reduced compared to our typical output.</Typography></li>
      <li>
        <Typography variant="h3">5. Are you insured?</Typography>
        <Typography variant="body">Yes, we are fully insured.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. What happens if your cleaner damages anything while performing commercial carpet cleaning services?</Typography>
        <Typography variant="body">We want to assure you that we have comprehensive insurance coverage, so in the event of an accident, you are fully protected.</Typography></li>
      <li>
        <Typography variant="h3">7. How long does the process of carpet cleaning for commercial buildings take?</Typography>
        <Typography variant="body">The duration of the carpet cleaning for commercial buildings depends mainly on:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The commercial carpet cleaning method that will be used on the carpet, rug or upholstery;</p>
        </Typography>
        <Typography variant="li">
          <p>How dirty the carpet is;</p>
        </Typography>
        <Typography variant="li">
          <p>The size and quantities of the carpets;</p>
        </Typography>
        <Typography variant="li">
          <p>If it needs any stain removal treatments;</p>
        </Typography>
        <Typography variant="li">
          <p>What kind of stains it has.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">8. How long does it take for the carpet to get completely dry after a hotel carpet cleaning is performed?</Typography>
        <Typography variant="body">It depends on the carpet and the cleaning method used. For instance, if the <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-carpet-cleaning-services/steam">steam cleaning</a> method is used, the approximate time for the carpet to get dry is 7 to 9 hours. If the carpet is cleaned through a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-carpet-cleaning-services/dry">dry cleaning</a> method, it will be dry immediately after the cleaning process has ended, or little after that.</Typography></li>
      <li>
        <Typography variant="h3">9. Do you guarantee that after cleaning my carpet all stains will be removed?</Typography>
        <Typography variant="body">Unfortunately, we are unable to guarantee, as several uncontrollable factors come into play. These factors include:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The age of the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The nature of the substance that caused the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The carpet's type and fabric;</p>
        </Typography>
        <Typography variant="li">
          <p>Any prior attempts to remove the stains.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">Nevertheless, we are dedicated to exerting our utmost effort to eliminate all stains from your carpet. Our methodology includes:</Typography>
      </li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Using state-of-the-art cleaning equipment;</p>
        </Typography>
        <Typography variant="li">
          <p>Utilising carefully selected premium detergents;</p>
        </Typography>
        <Typography variant="li">
          <p>Tailoring our approach to the specific type of carpet and the stain's origin to achieve the best possible results.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">10. How soon will a cleaner visit me?</Typography>
        <Typography variant="body">We'll make every effort to schedule an appointment for you as promptly as we can. Typically, our bookings are full for up to three days in advance, although occasional exceptions may occur.</Typography></li>
      <li>
        <Typography variant="h3">11. Can you give me a quote over the phone or do you need to visit my commercial property?</Typography>
        <Typography variant="body">For a quote about any kind of commercial carpet cleaning, we do require that we come for a viewing in person. This is due to the fact that a quote over the phone without such a viewing will be very hard to estimate and in most cases, the final price will not be precise. The booked viewing and the commercial carpet cleaning process will be performed to your advantage and according to your busy schedule.</Typography></li>
      <li>
        <Typography variant="h3">12. What payment methods do you accept for commercial carpet cleaning in London?</Typography>
        <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments handed to our team.</Typography></li>
      <li>
        <Typography variant="h3">13. Can you send me an invoice for the carpet cleaning for commercial buildings?</Typography>
        <Typography variant="body">Yes, we will send you a receipt via email, or via any means that are convenient to you.</Typography></li>
      <li>
        <Typography variant="h3">14. Are you qualified?</Typography>
        <Typography variant="body">Yes, we are qualified and fully trained by the <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s recognised industry qualification, and by <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a>.</Typography></li>
      <li>
        <Typography variant="h3">15. How long have you been in the professional commercial carpet cleaning business?</Typography>
        <Typography variant="body">Since 2012, we have been active in the carpet cleaning rental property industry, serving both commercial and residential clients. Over the years, we have encountered a wide array of carpets, rugs, upholstery, and various types of stains, accumulating valuable experience. Our commitment to excellence has driven us to enhance our services through the following means:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Continuously upgrading our equipment and machinery with superior alternatives whenever they become available;</p>
        </Typography>
        <Typography variant="li">
          <p>Consistently evaluating and improving our cleaning products to ensure the highest quality of service;</p>
        </Typography>
        <Typography variant="li">
          <p>Dedication to expanding our knowledge and skills through ongoing professional courses and training, always seeking to enhance our expertise and competence.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">16. Can you give me a discount for the commercial carpet cleaning services?</Typography>
        <Typography variant="body">Our commercial carpet cleaning services stand out for their top-quality results, thanks to our use of the most effective equipment and over 20 premium cleaning products. Not only are our commercial carpet cleaning prices highly competitive, but they are also some of the most attractive in the market. Bundling all the services you require proves to be more cost-effective compared to individual service visits. This is because of the initial high cost and additional charges for each technician visit, factoring in travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography></li>
      <li>
        <Typography variant="h3">17. How much is commercial carpet cleaning per square foot?</Typography>
        <Typography variant="body">You can check out our price table above, but in short, our commercial carpet cleaning prices per square foot are:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>from 0 to 2153ft² (200m²) - £2.20;</p>
        </Typography>
        <Typography variant="li">
          <p>from 2153ft² (200m²) to 10764ft² (1000m²) - £2.00.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">18. How much does commercial carpet cleaning cost?</Typography>
        <Typography variant="body">Our minimum charge is £65.00. Per square metre, we charge £2.20 from 0 to 200m² and £2.00 – from 200 to 1000m².</Typography></li>
      <li>
        <Typography variant="h3">19. How often do hotels clean carpets?</Typography>
        <Typography variant="body">The frequency with which hotels book commercial carpet cleaning services depends on a number of factors. We advise that hotels clean their carpets, rugs and upholstery on a regular basis, typically every 3-6 months. This is desirable for both the health and safety of guests, as well as the overall appearance of the hotel.</Typography>
        <Typography variant="body">Here are some of the factors that can affect the frequency of hotel carpet cleaning services:</Typography>
      </li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Type and fabric of the carpet: Some carpets, such as wool carpets, are more delicate than others and require more frequent cleaning.</p>
        </Typography>
        <Typography variant="li">
          <p>Level of traffic: Carpets in high-traffic areas, such as hallways and lobbies, may need to be cleaned more often than carpets in low-traffic areas.</p>
        </Typography>
        <Typography variant="li">
          <p>Hotel's cleaning schedule: Some hotels have a more rigorous cleaning schedule than others do.</p>
        </Typography>
      </ul>
      <Typography variant="body">In addition to regular cleaning, hotels may also spot-clean carpets as needed. This is typically done to remove small stains or spills.</Typography>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">20. What is the best method for commercial carpet cleaning?</Typography>
        <Typography variant="body">Some of the most popular commercial carpet cleaning methods are:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Hot water extraction, otherwise known as <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-carpet-cleaning-services/steam">steam cleaning</a>, is easily the most common professional carpet cleaning technique. Steam cleaning uses hot water at high pressure to penetrate into carpet fibres, breaking down the dirt and bacteria stored deep within.</p>
        </Typography>
        <Typography variant="li">
          <p><a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-carpet-cleaning-services/dry">Dry carpet cleaning</a> is used for cleaning finer and more delicate carpets, rugs and upholstery, vulnerable to water damage. This cleaning method is suitable for all types of carpets and it is a significantly faster cleaning method because of its little to no drying time. It is also a great solution for cleaning big facilities without the luxury of off-time.</p>
        </Typography>
      </ul>
      <Typography variant="body">If you are having trouble deciding which industrial carpet cleaning services are best for you, feel free to contact us to get professional advice.</Typography>
      <li>
        <Typography variant="h3">21. What is commercial carpet cleaning?</Typography>
        <Typography variant="body">Commercial carpet cleaning refers to professional cleaning by a commercial carpet cleaning company in commercial or business settings such as offices, retail stores, hotels and other commercial establishments. We at “Fine Carpet Cleaning” are also specialised in restaurant carpet cleaning and pub carpet cleaning. Such industrial carpet cleaning services are typically more extensive and intensive than residential carpet cleaning due to the higher volume of foot traffic and the potential for more significant soil and stains in commercial spaces.</Typography></li>
      <li>
        <Typography variant="h3">22. How often should a commercial carpet be cleaned?</Typography>
        <Typography variant="body">The frequency of commercial carpet cleaning can vary based on several factors, including:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The type of commercial facility;</p>
        </Typography>
        <Typography variant="li">
          <p>The level of foot traffic the carpets receive;</p>
        </Typography>
        <Typography variant="li">
          <p>The specific needs of the business;</p>
        </Typography>
        <Typography variant="li">
          <p>Does the place have doormat;</p>
        </Typography>
        <Typography variant="li">
          <p>On which floor is the place located (usually the first floor is dirtier because you directly enter the room from outside).</p>
        </Typography>
      </ul>
      <Typography variant="body">Cleanliness depends on these factors, so have them in mind when you are thinking about carpet cleaning. On average we recommend commercial carpet cleaning in London every 6 months.</Typography>
      <li>
        <Typography variant="h3">23. How do you clean hotel carpet?</Typography>
        <Typography variant="body">Cleaning hotel carpets is a crucial part of maintaining a clean and welcoming environment for your guests. The cleaning process typically involves a combination of regular maintenance and periodic deep cleaning. Here are the steps involved in cleaning hotel carpets:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>It's advisable to hire a professional carpet cleaning service with experience in hotel environments. They have the expertise and equipment to deep clean and restore the carpet effectively.</p>
        </Typography>
        <Typography variant="li">
          <p>Stubborn stains may require specialised stain-removal techniques or products. Trained professionals can address these effectively. Check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-stain-removal-services">stain removal</a> page to learn more.</p>
        </Typography>
        <Typography variant="li">
          <p>Consider applying a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protector</a> after cleaning to help repel spills and stains, extending the time between cleanings.</p>
        </Typography>
      </ul>
      <Typography variant="body">Regular maintenance and professional cleaning from an industrial carpet cleaning company that specialises in offering hotel carpet cleaning services are essential for preserving the appearance and longevity of the carpets, rugs or upholstery in your hotel. Keeping carpets clean and fresh contributes to the overall guest experience and helps maintain a positive image for your establishment.</Typography>
      <li>
        <Typography variant="h3">24. What do hotels use to remove stains?</Typography>
        <Typography variant="body">Many hotels use hotel carpet cleaning services that are equipped with the expertise and equipment to handle a wide range of stains effectively. These services can provide deep cleaning for carpets, upholstery, and other surfaces.</Typography>
        <Typography variant="body">It's important to note that the choice of stain removal method or product depends on the type of stain, the fabric or material involved, and the hotel's specific protocols. Booking industrial carpet cleaning services, like the ones we offer at “Fine Carpet Cleaning” Ltd., will ensure that your hotel’s carpets, rugs and upholstery are correctly taken care of. That is thanks to our business carpet cleaning expertise, professional equipment and carefully selected cleaning products.</Typography></li>
      <li>
        <Typography variant="h3">25. What are your commercial carpet cleaning rates?</Typography>
        <Typography variant="body">The carpet cleaning rates for commercial cleaning are determined by several variables, including:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The number and dimensions of the carpets;</p>
        </Typography>
        <Typography variant="li">
          <p>The degree of soiling;</p>
        </Typography>
        <Typography variant="li">
          <p>The type of carpets;</p>
        </Typography>
        <Typography variant="li">
          <p>The accessibility of the carpets.</p>
        </Typography>
      </ul>
      <Typography variant="body">To learn more about our commercial carpet cleaning rates, check out our commercial carpet cleaning prices.</Typography>
      <li>
        <Typography variant="h3">26. Do you offer industrial carpet cleaning services?</Typography>
        <Typography variant="body">We at “Fine Carpet Cleaning” Ltd. are specialised in cleaning commercial carpets and perform in all boroughs in London. Wherever you want your carpets, rugs or upholstery to be cleaned by a commercial carpet cleaning company, you can rely on us to happily arrive at that destination.</Typography></li>
      <li>
        <Typography variant="h3">27. Are the cleaning machines loud? Will they interrupt the work process?</Typography>
        <Typography variant="body">Yes, the machines are noisy, but commercial carpet cleaning is designed to be efficient, fast and minimise downtime for your business. Our powerful equipment and experienced technicians ensure that cleaning is completed quickly, usually within a few hours, depending on the size and condition of the area. In addition, we offer flexible scheduling options, including after-hours and weekend appointments, to further minimise disruption to your daily operations.</Typography></li>
      <li>
        <Typography variant="h3">28. Will our staff disrupt the work of your specialists?</Typography>
        <Typography variant="body">Our team is trained to work efficiently and discreetly to minimise any interference with your staff and daily operations. We understand the importance of maintaining a productive work environment, so in order to ensure the good work of your team and our specialists, we advise you to book at a time when there are no people in the office in order not to interrupt each other's work. We can schedule carpet cleaning outside of your regular working hours, including evenings and weekends, to avoid disrupting your business activities.</Typography></li>
      <li>
        <Typography variant="h3">29. Can you also carry out carpet cleaning outside business hours?</Typography>
        <Typography variant="body">Yes, we can also carry out commercial carpet cleaning outside regular working hours. We know that it's important to minimise disruption to your business. That's why we offer flexible schedules that include evenings, weekends, and even early mornings. Our mission is to satisfy your specific needs and to ensure that your carpets are cleaned at a time that is most convenient for you so that your business can continue to run without interruption. Contact us to discuss your preferred time, and we will create a cleaning schedule that fits your routine.</Typography></li>
      <li>
        <Typography variant="h3">30. Do you also clean at weekends?</Typography>
        <Typography variant="body">Yes, we also clean at weekends. The optimal time for commercial carpet cleaning is when no one is at work so as not to disturb the work of your staff. The only thing we need is a person who can tell us where the electricity and water connections are. There is no extra charge for weekend cleaning, so you can book whenever it is convenient for you.</Typography></li>
    </Entry>
  </Container>
}

const JSONLDScript = () => {
  createEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Commercial carpet cleaning",
      "image": "https://finecarpetcleaning.co.uk/assets/service-pics/commercial-carpet/commercial-carpet-cleaning-services.jpg",
      "description": "Fine Carpet Cleaning offers professional commercial carpet cleaning services that enhance hygiene, prolong carpet life, and maintain a fresh appearance.",
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
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://finecarpetcleaning.co.uk/commercial-carpet-cleaning"
      },
      "faq": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you have a cancellation fee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if you cancel on the day of the cleaning, you will lose your deposit."
            }
          },
          {
            "@type": "Question",
            "name": "How long does carpet cleaning take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The duration depends on the cleaning method, the size of the area, and the level of soiling."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take for the carpet to dry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Drying time varies: approximately 7-9 hours for steam cleaning and immediate for dry cleaning."
            }
          },
          {
            "@type": "Question",
            "name": "Will all stains be removed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While we strive to remove all stains, we cannot guarantee this due to factors like the stain's age and type."
            }
          },
          {
            "@type": "Question",
            "name": "How often should carpets be cleaned?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend cleaning every 3-6 months, depending on factors like foot traffic and carpet type."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best method for cleaning carpets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common methods include steam cleaning and dry cleaning. We can advise on the best option for your needs."
            }
          }
        ]
      }
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

      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Commercial carpet cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/commercial-carpet/commercial-carpet-cleaning-services.jpg" alt="commercial-carpet-cleaning-services" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our commercial carpet cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
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

        <h3>Simple booking process:</h3>
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
        <h3>What do we offer:</h3>
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
        { src: "/assets/service-pics/commercial-carpet/1-commercial-carpet-cleaning-london.jpg", alt: "1-commercial-carpet-cleaning-london" },
        { src: "/assets/service-pics/commercial-carpet/3-commercial-carpet-cleaning-methods.jpg", alt: "3-commercial-carpet-cleaning-methods" },
        { src: "/assets/service-pics/commercial-carpet/2-commercial-carpet-cleaning-process.jpg", alt: "2-commercial-carpet-cleaning-process" },
        { src: "/assets/service-pics/commercial-carpet/4-commercial-carpet-cleaning-services.jpg", alt: "4-commercial-carpet-cleaning-services" },
        { src: "/assets/service-pics/commercial-carpet/5-business-carpet-cleaning.jpg", alt: "5-business-carpet-cleaning" },
        { src: "/assets/service-pics/commercial-carpet/6-carpet-cleaning-for-commercial-buildings.jpg", alt: "6-carpet-cleaning-for-commercial-buildings" },
        { src: "/assets/service-pics/commercial-carpet/7-industrial-carpet-cleaning-services.jpg", alt: "7-industrial-carpet-cleaning-services" },
        { src: "/assets/service-pics/commercial-carpet/8-commercial-carpet-cleaning-company.jpg", alt: "8-commercial-carpet-cleaning-company" },
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

      <PriceTable title="Area size">
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Per square metre - from 0 up to 200m²</td>
          <td class="bg-paper pl-5 py-2 font-500">£2.20</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Per square metre - from 200 up to 1000m²</td>
          <td class="bg-paper pl-5 py-2 font-500">£2.00</td>
        </tr>
      </PriceTable>

      <button class="outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-250px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9 my-20 mx-auto" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>

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

      <h2 class="line-height-12 md-line-height-14">Our commercial carpet cleaning services specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
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

          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Fresh and clean carpet - mission possible!</h3>
          </li>
        </ol>

        <p>Here are some tips that will help you prolong the life of your carpet:</p>
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
        <p>Our commercial carpet cleaning specialist suggests adding a stain protector to your carpet and upholstery for keeping the carpet fresh and clean. This can save you a considerable amount of money on professional stain removal services. If you are curious, we recommend that you find out <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">more about the benefits of stain protection services.</a></p>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Commercial carpet cleaning reviews in London</h2>

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

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our commercial carpet cleaning services</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
