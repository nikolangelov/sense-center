import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { createCollapsable } from '../../../components/Collapsable';
import { Typography } from '../../../components/Typography';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../../components/FrequentlyOrderedTogether';

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
      <li>
        <Typography variant="h3">1. Do you have a cancellation fee?</Typography>
        <Typography variant="body">Yes, if you cancel on the day of the cleaning, you will lose your deposit.</Typography></li>
      <li>
        <Typography variant="h3">2. Do I need to pay for the congestion / parking charge?</Typography>
        <Typography variant="body">Yes, the client is requested to arrange suitable parking space for our vehicles within close proximity of the property and to cover any parking / congestion expenses, if applicable.</Typography></li>
      <li>
        <Typography variant="h3">3. Do I need to move furniture before steam extraction carpet cleaning?</Typography>
        <Typography variant="body">Your assistance in moving away small, delicate, or valuable furniture items such as lamps and ornaments would be greatly appreciated for insurance purposes. If possible, please position them in a secure area before our arrival, one that won't be affected during cleaning. We are more than willing to help move other lightweight furniture like chairs, armchairs, and tables during the cleaning. After the cleaning is done, we will put them back in their original positions. If heavy furniture, such as sofas, beds, wardrobes, and cupboards, needs to be moved, an additional charge will be placed. This is because it demands extra time and effort from our technician, who will be compensated accordingly. Our primary objective is to make the entire process as stress-free as possible for you.</Typography></li>
      <li>
        <Typography variant="h3">4. What if I live on the 4th floor or above and I have no lift?</Typography>
        <Typography variant="body">Since our equipment is very heavy (50kg+), we charge extra for every extra floor that we need to carry by hand. The reason is that this will usually take a lot of time and our technicians tire faster, therefore, that day we cannot do as much work as we usually do.</Typography></li>
      <li>
        <Typography variant="h3">5. Are you insured?</Typography>
        <Typography variant="body">Yes, we are fully insured.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. What happens if your cleaner damages anything while performing professional carpet steam cleaning services?</Typography>
        <Typography variant="body">We are fully insured, and if an accident happens, we are fully covered.</Typography></li>
      <li>
        <Typography variant="h3">7. How long does the process of professional hot water extraction carpet cleaning  take?</Typography>
        <Typography variant="body">The duration of the professional hot water extraction carpet cleaning process depends mainly on:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>How soiled the carpet is;</p>
        </Typography>
        <Typography variant="li">
          <p>If it needs any stain removal treatments.</p>
        </Typography>
      </ul>
      <Typography variant="body">In most cases, the process of professional hot water extraction carpet cleaning takes from 20 to 60 minutes per room.</Typography>
      <li>
        <Typography variant="h3">8. How long does it take for the carpet to get dry after a professional carpet steam cleaning service is performed?</Typography>
        <Typography variant="body">It depends on the carpet and the cleaning method used, but the approximate time for the carpet to get dry is 7 to 9 hours.</Typography></li>
      <li>
        <Typography variant="h3">9. Do you guarantee that after cleaning my carpet, all stains will be removed?</Typography>
        <Typography variant="body">Unfortunately, we cannot provide an absolute guarantee due to several factors beyond our influence. These factors include:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>How old the stains are;</p>
        </Typography>
        <Typography variant="li">
          <p>The substance that is responsible for the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The type and fabric of the carpet;</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">Previous mishandling of the stains.</Typography>
        <Typography variant="body">Nonetheless, we are committed to making every possible effort to remove all stains from your carpet. Our approach involves:</Typography>
      </li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Utilising advanced cleaning equipment;</p>
        </Typography>
        <Typography variant="li">
          <p>Applying carefully chosen premium detergents;</p>
        </Typography>
        <Typography variant="li">
          <p>Tailoring our approach to the specific carpet type and staining agent to ensure the best possible outcome.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">10. How soon can I expect a cleaner to visit me?</Typography>
        <Typography variant="body">We will try to get you an appointment as soon as possible. Usually, we are fully booked for 3 days ahead, but sometimes there are exceptions.</Typography></li>
      <li>
        <Typography variant="h3">11. Can you give me a quote over the phone or do you need to visit my property?</Typography>
        <Typography variant="body">We can provide an estimate over the phone for residential properties. Commercial properties may require a site visit. You can also get an online quote for our steam extraction carpet cleaning services.</Typography></li>
      <li>
        <Typography variant="h3">12. What payment methods do you accept for professional carpet steam cleaning services?</Typography>
        <Typography variant="body">We accept debit/credit cards, and cash payments directly to our team.</Typography></li>
      <li>
        <Typography variant="h3">13. Can you provide me with an invoice for the professional carpet steam cleaning services?</Typography>
        <Typography variant="body">Yes, we will either send you a receipt via email.</Typography></li>
      <li>
        <Typography variant="h3">14. Are you qualified?</Typography>
        <Typography variant="body">Yes, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s recognised industry qualification.</Typography></li>
      <li>
        <Typography variant="h3">15. How long have you been in the carpet cleaning business?</Typography>
        <Typography variant="body">We have been in the carpet cleaning business since 2012. In these years, we have dealt with numerous types of carpets, rugs, upholstery and stains from commercial and residential customers and have gained a lot of experience. Thanks to this knowledge and our strive for perfect execution, we have been able to better our services by:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Replacing our equipment and machinery with better ones all the time, if such are available;</p>
        </Typography>
        <Typography variant="li">
          <p>Regularly testing and upgrading our cleaning products;</p>
        </Typography>
        <Typography variant="li">
          <p>Constantly searching to improve our knowledge and competence by going through additional professional courses and training.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">16. Can you give me a discount?</Typography>
        <Typography variant="body">Because we offer top-quality professional carpet steam cleaning services, utilising the most effective equipment and more than 20 premium cleaning products, our carpet steam cleaning prices are not only very competitive but also among the most attractive in the market.  Bundling all the services you need is more cost-effective than if they were performed individually. This is due to the initial high cost and additional charges for each visit by the technician, taking into account factors such as travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography></li>
      <li>
        <Typography variant="h3">17. Does steam cleaning leave the carpet wet?</Typography>
        <Typography variant="body">Although 95% of the water used gets extracted when steam cleaning, the carpet remains slightly wet afterward. When left to dry on its own, steam-cleaned carpet will usually take 7-9 hours before it completely dries.</Typography></li>
      <li>
        <Typography variant="h3">18. Can you walk on the carpet after steam cleaning?</Typography>
        <Typography variant="body">It is recommended that you try to stay off the freshly steam-cleaned carpets until they are dry – about 7-9 hours. If you cannot avoid walking over your damp carpet before it is dry, do it with caution. When you transition from carpet to another hard surface, like tile or hardwood, it can be very slippery.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">19. Do you pretreat the carpet before steam cleaning?</Typography>
        <Typography variant="body">Yes, pretreating your carpet with a solution of liquid detergent and warm water is recommended before steam extraction carpet cleaning. This helps loosen dirt and grime so that they can be lifted away during the steam cleaning process.</Typography>
        <Typography variant="body">Hiring our professional deep carpet cleaning service saves you time and ensures optimal results. As professionals, we carry out a pre-cleaning survey based on the type of carpet, its condition, and its degree of pollution.</Typography></li>
      <li>
        <Typography variant="h3">20. How often should carpets be steam cleaned?</Typography>
        <Typography variant="body">The deep steam carpet cleaning frequency depends mainly on factors like how fast the carpet soils. On average, a carpet should be cleaned at 12-month intervals. However, if you have pets, children, high traffic on the carpet, a smoking habit, or if you stain it a lot, we recommend using an expert carpet cleaning service more often than that. Feel free to contact us anytime for professional carpet cleaning services or advice.</Typography></li>
      <li>
        <Typography variant="h3">21. Does steam cleaning carpets work?</Typography>
        <Typography variant="body">Yes, steam carpet cleaning definitely works. Steam carpet cleaning is a highly effective method offered by professional companies like "Fine Carpet Cleaning Ltd." Their experience, equipment, products, and techniques ensure exceptional results. This approach is not only efficient but also affordable, guaranteeing the removal of tough stains, odours, and germ buildup that regular cleaning methods cannot eliminate.</Typography></li>
      <li>
        <Typography variant="h3">22. Does steam cleaning carpets remove stains?</Typography>
        <Typography variant="body"><strong>The short answer is yes, they do.</strong> Steam cleaning is highly effective in removing deep-down stains, dirt, and grime, while also eliminating bacteria and removing dust mites, allergens, mould, pet dander, and unpleasant odours. However, certain stubborn stains, such as extremely old ones or those that have been treated improperly, can be challenging to remove completely, even with expert assistance. Fortunately, due to our extensive experience and utilisation of top-notch equipment, we at “Fine Carpet Cleaning Ltd.” have achieved remarkable success rates in stain removal. Nevertheless, we cannot offer a guarantee that every stain can be completely eradicated. Rest assured, we will evaluate the stain and inform you during the quotation process about our confidence in achieving its removal.</Typography></li>
      <li>
        <Typography variant="h3">23. Does steam cleaning damage the carpet?</Typography>
        <Typography variant="body">No, steam cleaning does not damage carpets, if done properly. In fact, it is the most thorough method and is recommended by most carpet manufacturers. Steam cleaning effectively removes deep-down stains, dirt, and grime. It kills bacteria, removes dust mites, allergens, mould, pet dander and odours, while prolonging the carpet's lifespan.</Typography></li>
      <li>
        <Typography variant="h3">24. How often should you steam clean your carpet with pets?</Typography>
        <Typography variant="body">We recommend that pet owners seek professional deep carpet cleaning services once or twice per year. Cleaning when the seasons change is an easy way to remember when it's time to deep clean your carpets.</Typography></li>
      <li>
        <Typography variant="h3">25. Will steam cleaning a carpet get rid of cat urine smell?</Typography>
        <Typography variant="body">We do not recommend steam cleaning a carpet when stained with pet urine. The heat will permanently set the stain and the odour by bonding the protein into any man-made fibres.</Typography>
        <Typography variant="body">Professional carpet cleaning companies like ours are experienced and can effectively remove cat urine stains and odours using the right methods and products specifically designed for pet stains. Regular maintenance and professional carpet cleaning services can help keep carpets fresh and clean. Feel free to contact us if you need professional advice.</Typography></li>
      <li>
        <Typography variant="h3">26. Does steam cleaning a carpet kill bacteria?</Typography>
        <Typography variant="body">Yes, without a doubt having your carpets cleaned by a professional hot water extraction carpet cleaning company in London can effectively kill bacteria. Your carpet can have as much as 200,000 bacteria per square inch. Carpet cleaning with steam cleans deeply using hot water, which eliminates dirt, germ buildup, allergens, parasites and bacteria such as E. coli, Salmonella and many others.</Typography></li>
      <li>
        <Typography variant="h3">27. Does steam cleaning a carpet help with allergies?</Typography>
        <Typography variant="body">Regular cleaning is essential for allergy sufferers as it helps to reduce exposure to allergens. A professional deep clean carpet company effectively removes dust, pollen, pet dander, mould, and other allergens that can trigger allergic reactions. Carpets that are not regularly cleaned can become breeding grounds for dust mites, which can cause serious allergic reactions. Steam cleaning, also known as the hot water extraction method, is a recommended allergy carpet cleaning method as it has been proven to reduce allergens in carpets. However, it is important to ensure that all the water is properly removed from the carpet after steam cleaning to prevent moisture-related issues.</Typography>
        <Typography variant="body">“Fine Carpet Cleaning Ltd.” is a company that specialises in professional hot water extraction carpet cleaning services and uses special machines and solutions to effectively remove allergens. Vacuuming regularly is also important in removing allergens from the carpet.</Typography></li>
      <li>
        <Typography variant="h3">28. Is steam cleaning best for carpets?</Typography>
        <Typography variant="body">A deep carpet cleaning service is the most effective way to clean your carpet. Cleaning your carpet with hot water at high pressure successfully removes dirt, bacteria, grime, and toxins embedded in the carpet fibres. Professional deep carpet cleaning offers many advantages, including:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Prolonging the carpet’s life;</p>
        </Typography>
        <Typography variant="li">
          <p>Effectively treating tough stains;</p>
        </Typography>
        <Typography variant="li">
          <p>Leaving no residue behind;</p>
        </Typography>
        <Typography variant="li">
          <p>Avoiding harsh chemicals.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">29. How much does a professional carpet deep cleaning service cost?</Typography>
        <Typography variant="body">How much the professional carpet deep cleaning service costs depends on a number of factors. Some of them are:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Quantity and size of the carpets;</p>
        </Typography>
        <Typography variant="li">
          <p>Level of soiling;</p>
        </Typography>
        <Typography variant="li">
          <p>Carpet type;</p>
        </Typography>
        <Typography variant="li">
          <p>Ease of access to the carpets.</p>
        </Typography>
      </ul>
      <Typography variant="body">To learn more, check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">carpet steam cleaning prices</a>.</Typography>
      <li>
        <Typography variant="h3">30. Can you steam clean a wool carpet?</Typography>
        <Typography variant="body">Yes, steam cleaning can be used on wool carpets without causing damage. It is one of the most thorough and effective methods for removing dirt and soil from the carpet's base. However, wool carpets are sensitive to chemicals, so it's essential to use gentle products. Hiring professionals is advisable, as they have the expertise to choose the appropriate cleaning methods for your specific type of carpet.</Typography></li>
      <li>
        <Typography variant="h3">31. Can you steam clean a nylon carpet?</Typography>
        <Typography variant="body">In special cases like synthetic rugs and carpets from acrylic or nylon, we strongly recommend not using steam cleaning, but dry cleaning, as the heat and steam will damage the rug.</Typography></li>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Professional carpet steam cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/carpet-steam/steam-clean-carpet-company.jpg" alt="steam-clean-carpet-company" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our professional carpet steam cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform professional carpet steam cleaning services. Carpet steam cleaning (also known as hot water extraction) is by far the most popular method for deep cleaning and sanitising carpets due to its unmatched efficiency.</p>
        <p>The benefits of using professional carpet steam cleaning services are:</p>

        <ul>
          <li class="ml--5">
            <p>The most thorough and powerful cleaning method - sanitises, kills bacteria, deodorises, and freshens your carpet;</p>
          </li>
          <li class="ml--5">
            <p>The most effective treatment against all types of stains, from dirt and food to body fluids and biologically active contaminants;</p>
          </li>
          <li class="ml--5">
            <p>Significantly shorter drying time compared to carpet washing;</p>
          </li>
          <li class="ml--5">
            <p>Child and pet-friendly.</p>
          </li>
        </ul>
        <h3>Simple booking process:</h3>
        <p>The usual process of booking our professional carpet steam cleaning services in London:</p>

        <ul>
          <li class="ml--5">
            <p>You contact us.</p>
          </li>
          <li class="ml--5">
            <p>We advise you which services will be best for you, based on your situation.</p>
          </li>
          <li class="ml--5">
            <p>We give you a quote.</p>
          </li>
          <li class="ml--5">
            <p>If you are satisfied with our terms we schedule an appointment for you.</p>
          </li>
          <li class="ml--5">
            <p>One of our staff members will visit your property to steam clean your carpets.</p>
          </li>
        </ul>
        <h3>What do we offer:</h3>
        <p>Other professional carpet cleaning services we offer are:</p>

        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/dry">Dry carpet cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/eco-friendly">Eco-friendly carpet cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/fast-dry">Fast-dry carpet cleaning</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2>The process of our professional carpet steam cleaning in London</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <Typography variant="body">First, we carry out a pre-cleaning survey. We do this because we use an individual approach for every carpet, based on its type, condition, and degree of pollution. This is necessary to estimate what detergents and tools need to be used to steam clean the carpet.</Typography>
          </li>
          <li class="ml--5">
            <Typography variant="body">The second step is to use a high-filtration twin-motor vacuum cleaner that has been specifically designed for high-performance steam cleaning of carpets. This removes any loose dirt, dry soiling, and dust.</Typography>
          </li>
          <li class="ml--5">
            <Typography variant="body">Third, we apply heavy-duty pre-spray, designed to lift oily dirt and pollutants from your carpet so they can be safely extracted using our high-performance extraction machines.</Typography>
          </li>
          <li class="ml--5">
            <Typography variant="body">Fourth, we introduce the cleaning solution to the carpet fibres. This loosens the soil and gets it ready for extraction.</Typography>
          </li>
          <li class="ml--5">
            <Typography variant="body">Fifth, pure, softened hot water is gently injected deep into the carpet fibres, releasing soil for effective removal by our powerful machine. Any remaining spots and stains are treated individually with specially selected cleaning products.</Typography>
          </li>
          <li class="ml--5">
            <Typography variant="body">Last, we rinse and extract again to ensure no chemical residues remain from the steam cleaning of carpets.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our professional carpet steam cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Highly-efficient extractors</h3>
            <Typography variant="body">"Fine Carpet Cleaning Ltd" prides itself on utilising top-of-the-line cleaning equipment and products. Our machines, considered to be among the most powerful and effective portable machines in the world, have been tested extensively, and we have selected the best brands available in the UK market – "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>" and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>". Further enhancing their performance, our team's engineer makes significant improvements to maximise their capabilities.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
            <Typography variant="body">Additionally, we employ a high-filtration twin-motor vacuum cleaner, which we believe to be the best on the market. This vacuum cleaner has been specifically designed for expert carpet cleaning, with one motor pounding the carpet while the other suctioning out any loose dirt, dry soil, and dust.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Thoughtfully chosen cleaning supplies</h3>
            <Typography variant="body">To ensure the best results, we use a variety of cleaning products from over 20 leading brands in the UK and US markets. Through extensive testing, we have chosen the detergents that provide exceptional outcomes. Among the brands we use are "Alltec," "Prochem," "Chemspec," "Solution World of Clean," and "TMF." This wide selection allows our technicians to choose the most suitable detergents based on the fabric of the carpet, level of soiling, and type of stains to be removed.</Typography>
            <Typography variant="body">With our top-notch cleaning equipment and products, we guarantee a professional carpet cleaning service of the highest quality.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our professional carpet steam cleaning services in London</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/service-pics/carpet-steam/1-professional-carpet-steam-cleaning-services.jpg", alt: "1-professional-carpet-steam-cleaning-services" },
        { src: "/assets/service-pics/carpet-steam/2-professional-deep-carpet-cleaning-services-3.jpg", alt: "2-professional-deep-carpet-cleaning-services-3" },
        { src: "/assets/service-pics/carpet-steam/3-steam-extraction-carpet-cleaning.jpg", alt: "3-steam-extraction-carpet-cleaning" },
        { src: "/assets/service-pics/carpet-steam/4-carpet-steam-cleaning-london.jpg", alt: "4-carpet-steam-cleaning-london.jpg" },
        { src: "/assets/service-pics/carpet-steam/5-deep-clean-carpet-company.jpg", alt: "5-deep-clean-carpet-company" },
        { src: "/assets/service-pics/carpet-steam/6-hot-water-extraction-carpet-cleaning-companies.jpg", alt: "6-hot-water-extraction-carpet-cleaning-companies" },
        { src: "/assets/service-pics/carpet-steam/7-professional-deep-carpet-cleaning-services-1.jpg", alt: "7-professional-deep-carpet-cleaning-services-1" },
        { src: "/assets/service-pics/carpet-steam/8-steam-extraction-carpet-cleaning-1.jpg", alt: "8-steam-extraction-carpet-cleaning-1" },
        { src: "/assets/service-pics/carpet-steam/9-professional-deep-carpet-cleaning-services.jpg", alt: "9-professional-deep-carpet-cleaning-services" },
      ]} />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Video from our professional carpet steam cleaning services in London</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Prices for our professional carpet steam cleaning services</h2>

      <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
        style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
        <br></br>
        Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
        charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
        delays for the technicians and messes up the schedule.
        <br></br>
        <strong id="price_table">Deising - Free of charge - just notify us when booking.</strong></div>

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

      <FOTSlider>
        <FOTSliderContainer
          img="/assets/service-pics/stain-protection-services/stain-protection-services-7.jpg"
          alt="stain-protection-services-7"
          title="Stain protection services"
          href="/stain-protection-services"
          description="The main purpose of the stain protector is to guard the fabric against penetration of liquids that lead to lasting stains and permanent damage to the carpet and upholstery."
        />
        <FOTSliderContainer
          img="/assets/service-pics/sofa-cleaning/sofa-cleaning-services-13.jpg"
          alt="sofa-cleaning-services-13"
          title="Professional sofa cleaning services"
          href="/professional-upholstery-cleaning-services/sofa"
          description="Our expert sofa cleaning uses steam and hot water extraction to eliminate 99% of microorganisms, revitalizing your space for a healthier home."
        />
        <FOTSliderContainer
          img="/assets/service-pics/furniture-cleaning/furniture-cleaning-12.jpg"
          alt="furniture-cleaning-12"
          title="Professional furniture cleaning services"
          href="/professional-upholstery-cleaning-services/furniture"
          description="Furniture upholstery cleaning services can extend the life of your furniture, saving you money on purchasing new items."
        />
        <FOTSliderContainer
          img="/assets/service-pics/mattress-cleaning/mattress-cleaning-services-9.jpg"
          alt="mattress-cleaning-services-9"
          title="Mattress cleaning services"
          href="/professional-upholstery-cleaning-services/mattress"
          description="Mattress cleaning removes unwanted guests and fluids, creating a cleaner environment. It enhances sleep quality and extends the life of your mattress."
        />
        <FOTSliderContainer
          img="/assets/service-pics/rug-cleaning/professional-rug-cleaning-12.jpg"
          alt="professional-rug-cleaning-12"
          title="Professional rug cleaning services"
          href="/professional-rug-cleaning-services"
          description="Professional rug cleaning removes stains and extends rug life. Our experts use advanced tools to refresh your rug and ensure a healthy, allergy-free environment."
        />
        <FOTSliderContainer
          img="/assets/service-pics/pillow-cleaning/pillow-cleaning-7.jpg"
          alt="pillow-cleaning-7"
          title="Pillow cleaning services"
          href="/professional-upholstery-cleaning-services/pillow"
          description="Instead of tossing old pillows, consider our cost-effective professional cleaning. We fluff, sanitize, and deodorize, giving your pillows new life."
        />
      </FOTSlider>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Our carpet steam cleaning specialist advises:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Apply a stain protector</h3>
            <Typography variant="body">Our carpet steam cleaning specialist advises you to add a stain protector to your carpet and upholstery whenever possible. By doing this, you can save a significant amount of money on professional stain removal services. If you're interested, we recommend <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">learning more about the advantages of using stain protection services</a>.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Try stain removal service</h3>
            <Typography variant="body">According to our carpet steam cleaning specialist, it is highly recommended to seek the services of a professional stain removal company if your carpet or upholstery has been stained. This is because attempting to clean the stain yourself or allowing it to dry may result in fabric damage, making it unlikely for the stain to be completely removed. In fact, trying to clean the stain on your own will likely seal it rather than eliminate it, making it even more difficult or even impossible for a professional steam clean carpet company to remove. Therefore, scheduling a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-stain-removal-services">professional stain removal service</a> from an expert steam clean carpet company today can save your valuable carpet or upholstery, which may be worth thousands.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Decide with knowledge and awareness</h3>
            <Typography variant="body"><a class="color-paper-link hover-color-paper-link-hover:hover" href="/services">By exploring our other services</a>, you may discover additional services that can sometimes be overlooked or forgotten. Our team takes pride in providing a comprehensive range of services, including upholstery cleaning, rug cleaning, and many others. Don't miss out on the opportunity to experience the full range of our expertise and make the most informed decisions for your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Unite multiple services</h3>
            <Typography variant="body">For optimal cost efficiency, our skilled carpet steam cleaning service specialists suggest combining multiple services into one appointment. Choosing to have technicians visit separately can result in additional costs such as travel time, parking fees, and the management of heavy equipment during loading and unloading, making individual appointments less financially advantageous.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Experience the advantages of good health</h3>
            <Typography variant="body">If you have carpet, carpet floor covering, or upholstery, it's important to be aware of the health benefits of keeping them clean. These items can accumulate significant amounts of dust, microorganisms, and dirt particles that can potentially lead to health problems. Not properly taking care of them can increase the risk of experiencing various reactions, skin issues, and allergies. To avoid these issues, our carpet cleaning specialist recommends using professional carpet steam cleaning services in London at least once a year. If you have a high amount of traffic on your carpets, it is in your best interest to have them cleaned more frequently.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews for our professional carpet steam cleaning services in London</h2>

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

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our professional carpet steam cleaning services in London</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
