import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { createCollapsable } from '../../../components/Collapsable';
import { Typography } from '../../../components/Typography';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../../components/FrequentlyOrderedTogether';


const VideoPlayer = () => {
  return (
      <div class="flex flex-justify-center flex-items-center mt-20">
          <iframe
              class="mt-10 b-rd-3"
              style="width: 100%; height: 500px;"
              src="https://www.youtube.com/embed/vuDflQLPHmg?autoplay=1&mute=1"
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

export function FaqSection() {
  const { Container, Entry } = createCollapsable()
  return <Container>
    <Entry>
      <li>
        <Typography variant="h3">1. Will you fee me if I cancel the steam cleaning furniture services?</Typography>
        <Typography variant="body">We require a deposit before performing the soft furniture cleaning. If you cancel the service on the day of the cleaning, you will forfeit that deposit.</Typography></li>
      <li>
        <Typography variant="h3">2. Will I pay for the congestion / parking charge?</Typography>
        <Typography variant="body">Yes, we kindly ask that the clients arrange a suitable parking space for our vehicles near the property and cover any parking / congestion expenses.</Typography></li>
      <li>
        <Typography variant="h3">3. What if I live on a high floor and have no lift?</Typography>
        <Typography variant="body">Due to the substantial weight of our equipment, exceeding 50 kilograms, an extra charge will be added for each additional floor requiring manual transportation. This consumes a significant amount of time and can lead to quicker fatigue among our technicians. Consequently, this may diminish our overall productivity for the day compared to our standard output.</Typography></li>
      <li>
        <Typography variant="h3">4. Are you an insured furniture cleaning business?</Typography>
        <Typography variant="body">Yes, our furniture cleaning business is completely insured.</Typography></li>
      <li>
        <Typography variant="h3">5. What happens if your office furniture cleaning service technician damages anything?</Typography>
        <Typography variant="body">We are fully insured, and if an accident happens, it will be covered by our furniture deep cleaning company.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. How long does the process of soft furniture cleaning take?</Typography>
        <Typography variant="body">The duration of the furniture deep cleaning process mainly depends on:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>How soiled the furniture is;</p>
        </Typography>
        <Typography variant="li">
          <p>Does it need any stain removal treatment;</p>
        </Typography>
        <Typography variant="li">
          <p>What cleaning method will be used on the furniture.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">7. How long does it take for the upholstery to get dry after the organic furniture cleaning?</Typography>
        <Typography variant="body">The drying time after organic furniture cleaning varies depending on the fabric type of the furniture and the cleaning method employed. For instance, if steam-cleaning furniture services are utilised, the approximate drying time typically ranges from 7 to 9 hours. On the other hand, if dry cleaning services are used, the upholstery will be dry immediately after the cleaning process or shortly thereafter.</Typography>
        <Typography variant="body">If you are having trouble deciding which furniture deep cleaning services will suit you or are searching for organic furniture cleaning services, you can contact us at any suitable time to receive professional advice.</Typography></li>
      <li>
        <Typography variant="h3">8. Do you guarantee that after white furniture cleaning services, all stains will be removed?</Typography>
        <Typography variant="body">Because of our extensive experience and possession of some of the best equipment in the industry, we attain high success rates in stain removal. However, it's crucial to note that we cannot provide an absolute guarantee due to various factors beyond our control. These factors include:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The age of the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The nature of the substances responsible for the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The type and fabric of the furniture;</p>
        </Typography>
        <Typography variant="li">
          <p>Any prior mishandling of the stains.</p>
        </Typography>
      </ul>
      <Typography variant="body">Nevertheless, we are fully committed to exerting every possible effort to eliminate all stains from your furniture.</Typography>
      <li>
        <Typography variant="h3">9. How soon can I expect your furniture cleaning specialists to visit me?</Typography>
        <Typography variant="body">We will try to get you an appointment for a soft furniture cleaning as soon as possible. Usually, we are fully booked for the following three days, but there are exceptions at times.</Typography></li>
      <li>
        <Typography variant="h3">10. Can you give me a quote for the white furniture cleaning over the phone, or do you need a viewing in person?</Typography>
        <Typography variant="body">Yes, we can give you a quote for the white furniture cleaning over the phone, there is no need for us to visit your property. You can also receive a quote online.</Typography></li>
      <li>
        <Typography variant="h3">11. What payment methods do you accept for your mobile furniture cleaning?</Typography>
        <Typography variant="body">We accept debit / credit cards, bank transfers, and cash payments directly to our team for mobile furniture cleaning.</Typography></li>
      <li>
        <Typography variant="h3">12. Can your white furniture cleaning company provide me with an invoice?</Typography>
        <Typography variant="body">Yes, we will either send you an invoice via email or via any method of your choice.</Typography></li>
      <li>
        <Typography variant="h3">13. Are you qualified for mobile furniture cleaning?</Typography>
        <Typography variant="body">Yes, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a> and of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s most acknowledged industry qualification.</Typography></li>
      <li>
        <Typography variant="h3">14. How long have you been in the furniture cleaning business?</Typography>
        <Typography variant="body">We have been actively engaged in the cleaning industry since 2012. Throughout the years, our furniture cleaning business has encountered various types of carpets, rugs, furniture, and stains from both commercial and residential clients, accumulating valuable experience. Our commitment to providing the best furniture deep cleaning has compelled us to enhance our performance through the following means:</Typography></li>
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
        <Typography variant="h3">15. Can you add a discount for the organic furniture cleaning?</Typography>
        <Typography variant="body">Our mobile furniture cleaning services are renowned for their top quality, employing the most effective equipment and a range of premium cleaning products. What sets us apart even further is that our soft furniture cleaning prices are not only highly competitive but also rank among the most attractive in the market. We strongly recommend combining all the services you require in order to get a better price. The reason for this cost efficiency is linked to the initial expenses and additional fees connected to every technician appointment, taking into account variables like travel time, parking, and the management of bulky equipment while loading and unloading.</Typography></li>
      <li>
        <Typography variant="h3">16. How do you deep clean furniture?</Typography>
        <Typography variant="body">Our furniture deep cleaning begins with a pre-cleaning survey to establish what method and products are best for the type of furniture that needs cleaning. Then we dry vacuum the fabric to eliminate loose dirt, after which we apply the detergents. We then utilise a powerful hot water extraction machine to effectively remove the soil, addressing any remaining spots and stains individually with special products. Finally, we conclude with rinsing and extracting again to ensure no chemical residues are left behind.</Typography>
      </li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">17. What is the best thing to clean furniture with?</Typography>
        <Typography variant="body">Professional furniture cleaning services are highly effective and work exceptionally well. This is made possible by the expertise, equipment, products, and methods employed by expert companies. A professional furniture cleaning business like "Fine Carpet Cleaning Ltd." offers high-quality cleaning services that are particularly effective in cleaning musty furniture, tackling stubborn stains, eliminating odors, and eradicating germ buildup. These results are often unattainable through regular cleaning methods.</Typography></li>
      <li>
        <Typography variant="h3">18. How do you clean really dirty furniture?</Typography>
        <Typography variant="body">Cleaning really dirty furniture requires a thorough and systematic approach. The cleaning method used should be tailored to the specific type of furniture and fabric. Our approach includes a pre-cleaning survey to establish what cleaning methods and detergent should be used for the furniture, using professional equipment, and utilising specialised techniques for professional furniture cleaning services. We offer a range of services specialised for all kinds of furniture, such as cleaning linen furniture, cleaning mould off furniture, recliner cleaning services, dining chair cleaning services, futon cleaning services, lampshade cleaning services, upholstered bed frame cleaning, professional headboard cleaning, and many more.</Typography></li>
      <li>
        <Typography variant="h3">19. Does steam cleaning work on furniture?</Typography>
        <Typography variant="body">Steam cleaning furniture services are the most effective and popular method for furniture cleaning. During the steam cleaning, hot water is worked into the fabric, killing bacteria, dust mites and allergens. This cleaning method is best for cleaning musty furniture and cleaning mould off furniture. Due to our powerful equipment, we are able to deliver the results you desire within a fraction of time. The drying time of the upholstery is usually much shorter as well.</Typography>
        <Typography variant="body">Your furniture could be easily worn out with time, especially when it is frequently used. We recommend that you consider booking steam cleaning furniture for bed bugs or for any other complication that has occurred. Such services will ensure that your furniture will be free of potential health problems.</Typography></li>
      <li>
        <Typography variant="h3">20. What types of furniture do you clean?</Typography>
        <Typography variant="body">We perform services for any soft furnishing you might own, such as cleaning linen furniture, recliner cleaning services, dining chair cleaning services, futon cleaning services, lampshade cleaning services, upholstered bed frame cleaning, professional headboard cleaning, and many more.</Typography></li>
      <li>
        <Typography variant="h3">21. Can I use my furniture after steam cleaning furniture for bed bugs?</Typography>
        <Typography variant="body">It depends on the cleaning method used. If steam cleaning furniture services have been performed, it is recommended that you try to stay off the freshly cleaned furniture until it is dry – about 7-9 hours.</Typography>
        <Typography variant="body">If dry cleaning has been performed, the upholstery will be completely dry after the service has ended or shortly thereafter.</Typography>
      </li>
      <li>
        <Typography variant="h3">22. How often should furniture be professionally cleaned by furniture steam cleaning companies near me?</Typography>
        <Typography variant="body">The frequency of furniture cleaning depends mainly on factors like how fast the furniture soils. On average, furniture should be cleaned at 12-month intervals. However, if you have pets or children, use it very frequently, or if it is easily stained, we recommend using professional furniture cleaning services more often than that. If bed bugs have appeared in your furniture, we highly recommend acting quickly and having steam cleaning furniture for bed bugs performed at your property or booking services for cleaning musty furniture if mould has appeared. Regular professional cleaning not only keeps your upholstery looking its best but also helps maintain a healthy and clean living environment.</Typography></li>
      <li>
        <Typography variant="h3">23. Do you perform professional lampshade cleaning services?</Typography>
        <Typography variant="body">Yes, our company is specialised in professional lampshade cleaning services. We have undergone expert training and have years of experience in cleaning all kinds of furniture, including cleaning linen furniture, cleaning mould off furniture, recliner cleaning services, dining chair cleaning services, futon cleaning services, lampshade cleaning services, upholstered bed frame cleaning, professional headboard cleaning, and many more.</Typography></li>
      <li>
        <Typography variant="h3">24. Are there furniture steam cleaning companies near me?</Typography>
        <Typography variant="body">“Fine Carpet Cleaning” Ltd. performs in all of London. Feel free to contact us to receive furniture upholstery cleaning services wherever you are, and rest assured that we will take good care of your furniture.</Typography></li>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Professional furniture cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/furniture-cleaning/steam-cleaning-furniture-services.jpg" alt="steam-cleaning-furniture-services" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our professional furniture cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform professional furniture cleaning services. Professional furniture cleaning services offer more than just the removal of general dirt and shading. They provide a range of benefits, including:</p>
        <ul>
          <li class="ml--5">
            <p>Effective removal of stains from spills, pet accidents, and everyday use;</p>
          </li>
          <li class="ml--5">
            <p>Furniture upholstery cleaning services can extend the life of your furniture, saving you money on purchasing new items;</p>
          </li>
          <li class="ml--5">
            <p>Removal of allergens and dust mites, promoting a healthier environment for you and your family;</p>
          </li>
          <li class="ml--5">
            <p>Elimination of odours from spills, pets, or smoking leaves the furniture smelling fresh;</p>
          </li>
          <li class="ml--5">
            <p>Clean furniture improves the overall look of your room, making it cleaner and more inviting;</p>
          </li>
          <li class="ml--5">
            <p>Experts in professional furniture cleaning services have the tools and expertise to efficiently and effectively clean upholstery;</p>
          </li>
          <li class="ml--5">
            <p>Furniture cleaning experts customise their methods based on the specific type of furniture, ensuring optimal results without causing damage.</p>
            <Typography variant="body">At "Fine Carpet Cleaning" Ltd., our cleaning technicians are skilled in handling even the most delicate furniture. They can successfully remove tough stains while preserving the colours without resorting to abrasive chemicals. To ensure a successful outcome, a test of the product and cleaning method is conducted on a small area of your furniture, ensuring that the detergent is best suited for it.</Typography>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our professional furniture cleaning services in London:</p>

        <ul>
          <li class="ml--5">
            <p>We commence with a pre-cleaning survey to ascertain the specific fabric and identify the appropriate cleaning detergents and tools required.</p>
          </li>
          <li class="ml--5">
            <p>We then carry out a dry vacuum cleaning of the fabric to eliminate loose dirt, dry soils, and dust.</p>
          </li>
          <li class="ml--5">
            <p>After that we apply a heavy-duty pre-spray designed to lift oily dirt and pollutants from the upholstery, preparing them for extraction using high-performance machines.</p>
          </li>
          <li class="ml--5">
            <p>We apply the cleaning solution to the upholstery to loosen the soiling in preparation for extraction.</p>
          </li>
          <li class="ml--5">
            <p>We then gently inject pure softened hot water (reaching a maximum of 135 degrees) deep into the fibres, releasing the soil. Employ a powerful hot water extraction machine to effectively remove the soil, addressing any remaining spots and stains individually with special products.</p>
          </li>
          <li class="ml--5">
            <p>We conclude the professional furniture cleaning services by rinsing and extracting again to ensure no chemical residues are left behind.</p>
          </li>

        </ul>
        <h3>What do we offer:</h3>
        <p>Other services we offer are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services">Upholstery cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/sofa">Sofa cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/sofa/leather">Leather sofa cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/mattress">Mattress cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/pillow">Pillow cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-stain-removal-services">Upholstery stain removal</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/stain-protection-services">Upholstery stain protector</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2>The process of our professional furniture cleaning services:</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5"><Typography variant="body">We begin with a pre-cleaning survey to determine the specific fabric and identify the appropriate cleaning detergents and tools needed for the furniture upholstery cleaning services.</Typography></li>
          <li class="ml--5"><Typography variant="body">Then we conduct a dry vacuum cleaning on the fabric to eliminate loose dirt, dry soil, and dust.</Typography></li>
          <li class="ml--5"><Typography variant="body">After that, we apply a heavy-duty pre-spray designed to lift oily dirt and pollutants from the furniture, making them ready for extraction using high-performance machines.</Typography></li>
          <li class="ml--5"><Typography variant="body">We work the cleaning solution onto the upholstery to loosen the soiling in preparation for extraction.</Typography></li>
          <li class="ml--5"><Typography variant="body">Then we gently inject pure, softened hot water (reaching a maximum of 135 degrees) deep into the fibres, releasing the soil. We utilise a powerful hot water extraction machine to effectively remove the soil, addressing any remaining spots and stains individually with special products.</Typography></li>
          <li class="ml--5"><Typography variant="body">Finally, we conclude the furniture upholstery cleaning services by rinsing and extracting again to ensure no chemical residues are left behind.</Typography></li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our professional furniture cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Top-tier technology</h3>
            <Typography variant="body">Our machines, known for their exceptional power and effectiveness, are considered among the best portable machines globally. They have undergone rigorous testing, and we've selected top brands available in the UK market, including "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>" and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>". Furthermore, our in-house engineer makes significant enhancements to maximise their performance during furniture upholstery cleaning services.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
            <Typography variant="body">We use a high-filtration twin motor vacuum cleaner, which we believe is the best one on the market. It is designed for high-performance expert carpet cleaning. One of the twin-motors pounds at the carpet while the other one sucks out any loose dirt, dry soil and dust.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Thoughtfully selected cleaning detergents</h3>
            <Typography variant="body">Our extensive selection of cleaning products has been carefully chosen after in-depth testing of nearly all cleaning products available on the market. This extensive variety enables our technicians to choose the most appropriate detergents based on factors such as:</Typography>
          </li>
        </ol>
        <ul>
          <li class="ml--5">
            <p>The fabric of the upholstery;</p>
          </li>
          <li class="ml--5">
            <p>The cleaning method used;</p>
          </li>
          <li class="ml--5">
            <p>The level of soiling;</p>
          </li>
          <li class="ml--5">
            <p>The type of stains to be treated.</p>
            <Typography variant="body">Thanks to this selection, we have a variety of specialised detergents for all kinds of different fabrics and types of services you might need, such as dry or steam cleaning furniture services, residential, commercial, or office furniture cleaning services, and many more.</Typography>
            <Typography variant="body">With our cutting-edge cleaning equipment and top-quality products, we guarantee professional furniture cleaning services of the utmost quality.</Typography>
          </li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our professional furniture cleaning services</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/service-pics/furniture-cleaning/1-furniture-cleaning-specialist.jpg", alt: "1-furniture-cleaning-specialist" },
        { src: "/assets/service-pics/furniture-cleaning/2-furniture-deep-cleaning-2.jpg", alt: "2-furniture-deep-cleaning-2" },
        { src: "/assets/service-pics/furniture-cleaning/4-office-furniture cleaning-service.jpg", alt: "4-office-furniture cleaning-service" },
        { src: "/assets/service-pics/furniture-cleaning/3-soft-furniture-cleaning.jpg", alt: "3-soft-furniture-cleaning" },
        { src: "/assets/service-pics/furniture-cleaning/5-organic-furniture-cleaning.jpg", alt: "5-organic-furniture-cleaning" },
        { src: "/assets/service-pics/furniture-cleaning/6-furniture-cleaning-business.jpg", alt: "6-furniture-cleaning-business" },
        { src: "/assets/service-pics/furniture-cleaning/7-furniture-deep-cleaning.jpg", alt: "7-furniture-deep-cleaning" },
        { src: "/assets/service-pics/furniture-cleaning/8-furniture-steam-cleaning-companies-near me.jpg", alt: "8-furniture-steam-cleaning-companies-near me" },
        { src: "/assets/service-pics/furniture-cleaning/9-furniture-upholstery-cleaning-services.jpg", alt: "9-furniture-upholstery-cleaning-services" },
        { src: "/assets/service-pics/furniture-cleaning/10-furniture-steam-cleaning-companies-near me-1.jpg", alt: "10-furniture-steam-cleaning-companies-near me-1" },
        { src: "/assets/service-pics/furniture-cleaning/11-furniture-deep-cleaning-1.jpg", alt: "11-furniture-deep-cleaning-1" },
      ]} />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Video from our professional furniture cleaning services</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Prices of our professional furniture cleaning services</h2>

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
          img="/assets/service-pics/sofa-cleaning/sofa-upholstery-cleaning-service.jpg"
          alt="sofa-upholstery-cleaning-service"
          title="Professional sofa cleaning services"
          href="/professional-upholstery-cleaning-services/sofa"
          description="Our expert sofa cleaning uses steam and hot water extraction to eliminate 99% of microorganisms, revitalizing your space for a healthier home."
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

      <h2 class="line-height-12 md-line-height-14">Our professional furniture cleaning services specialist advises:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Apply a stain guard</h3>
            <Typography variant="body">Our furniture cleaning specialist recommends considering the addition of a stain protector to your carpets and upholstery whenever it's affordable for you. This simple step can lead to significant cost savings on stain removal services. If you're curious, we encourage you to explore the advantages of <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection services</a>.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Try stain removal services</h3>
            <Typography variant="body">According to our furniture cleaning specialist, it's highly advisable to enlist the services of a stain removal company if your carpet or upholstery has been stained rather than attempt to clean it yourself. This is because trying to clean the stain or allowing it to dry can result in fabric damage, making complete stain removal unlikely. In fact, such stain removal attempts may seal the stain, making it even more challenging, if not impossible, for a professional upholstery cleaning company to remove it. Therefore, scheduling a stain removal service(link) can potentially save your valuable carpet or upholstery, which could be worth a significant amount.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Explore our list of services</h3>
            <Typography variant="body">We offer a range of services, such as carpet cleaning services, rug cleaning, dry and steam cleaning furniture services, office furniture cleaning services and more. Our team takes pride in providing comprehensive solutions, so don't miss the opportunity to explore the full extent of our expertise and make informed decisions about your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Save time and money</h3>
            <Typography variant="body">Our furniture cleaning specialists recommend combining the services you need into a single appointment because it is more cost-effective than having them done separately. This is because separate visits by technicians involve additional expenses like travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy health benefits</h3>
            <Typography variant="body">If you own carpets, rugs, or furniture, it's essential to be aware of the health benefits of keeping them clean. These items can accumulate substantial amounts of dust, microorganisms, and dirt particles that might lead to health issues. Neglecting their care can increase the risk of various reactions, skin problems, and allergies. To prevent these issues, our furniture cleaning specialist recommends using professional upholstery cleaning services at least once a year. If you own pets, have children, or if your upholstery is easily stained, we advise booking such services even more frequently.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews for our professional furniture cleaning services</h2>

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

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our professional furniture cleaning services</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
