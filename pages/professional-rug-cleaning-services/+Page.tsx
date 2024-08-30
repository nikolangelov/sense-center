import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../components/FacebookLikeGallery';
import { createCollapsable } from '../../components/Collapsable';
import { Typography } from '../../components/Typography';
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../components/FrequentlyOrderedTogether';

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
        <Typography variant="h3">1. Will you fee me if I cancel the quality rug cleaning?</Typography>
        <Typography variant="body">We require a deposit before performing quality rug cleaning. If you cancel on the day of the cleaning you will lose that deposit.</Typography></li>
      <li>
        <Typography variant="h3">2. Should I pay for the congestion / parking charge?</Typography>
        <Typography variant="body">Yes, we kindly ask that the client arrange a suitable parking space for our vehicles within close proximity of the property or to cover any parking / congestion expenses.</Typography></li>
      <li>
        <Typography variant="h3">3. What if I live on the 4th floor or above and I have no lift?</Typography>
        <Typography variant="body">Due to the substantial weight of our equipment, exceeding 50 kilograms, a charge will be added for each additional floor that necessitates manual transportation. This is because it tends to consume a significant amount of time and can result in quicker fatigue among our technicians. As a result, this may diminish our overall productivity for the day compared to our standard output.</Typography></li>
      <li>
        <Typography variant="h3">4. Should I move furniture before the chemical-free rug cleaning?</Typography>
        <Typography variant="body">We would appreciate it if you could relocate small, fragile, or valuable pieces of furniture for insurance reasons, such as lamps and ornaments. If possible, please place them well out of the way before our arrival in an area that won't be disturbed during the emergency rug cleaning. We'll assist in moving other lightweight furniture like chairs, armchairs, and tables during the cleaning process and return them to their original places. If there's a need to move heavy furniture, such as sofas, beds, wardrobes, or cupboards, an additional charge will apply. This is because it requires extra time and effort from our technicians, and they deserve additional compensation for it. Our aim is to make the entire process as stress-free for you as possible.</Typography></li>
      <li>
        <Typography variant="h3">5. Is your rug cleaning company insured?</Typography>
        <Typography variant="body">Yes, our rug cleaning company is completely insured.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. What happens if your rug cleaning company damages anything?</Typography>
        <Typography variant="body">We are fully insured and if an accident happens, it will be covered by our rug cleaning company.</Typography></li>
      <li>
        <Typography variant="h3">7. How long does the process of specialist rug cleaning London take?</Typography>
        <Typography variant="body">The usual cleaning time for a conventional rug washing service is 10 to 15 minutes per room and 15 to 20 minutes per room for green rug cleaning services, although these are not fixed. The duration of the specialist rug cleaning London process might take longer, mainly depending on:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>How soiled the rug is;</p>
        </Typography>
        <Typography variant="li">
          <p>If it needs any stain removal treatments;</p>
        </Typography>
        <Typography variant="li">
          <p>What cleaning method will be used on the rug.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">8. How long does it take for the rug to get dry after a specialist rug cleaning London?</Typography>
        <Typography variant="body">Our team will instruct you on the drying time. The drying time after quality rug cleaning services varies depending on the fabric type of the rug and the cleaning method employed. For example, if a steam cleaning method is utilised, the approximate drying time typically ranges from 7 to 9 hours. On the other hand, if the dry cleaning method is used, the rug will be dry immediately after the cleaning process or shortly thereafter.</Typography>
        <Typography variant="body">Dry cleaning is used only for delicate materials, as this cleaning method is not as effective as steam cleaning. Steam cleaning is effective in eliminating stains and cleaning the rug in-depth and is suitable for both residential rug cleaning and commercial rug cleaning services.</Typography>
        <Typography variant="body">If you are having trouble deciding which modern rug cleaning will suit you or are searching for a mobile rug cleaning company, you can contact us at any suitable time to receive professional advice.</Typography></li>
      <li>
        <Typography variant="h3">9. Do you guarantee that after modern rug cleaning all stains will be removed?</Typography>
        <Typography variant="body">Given our extensive experience and utilisation of some of the finest equipment in the industry for modern rug cleaning, we achieve high success rates in stain removal. However, it's crucial to note that we cannot provide an absolute guarantee due to various factors beyond our control. These factors include:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>How long ago did the stains appear;</p>
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
      </ul>
      <Typography variant="body">Nevertheless, we are fully committed to exerting every possible effort to eliminate all stains from your rug. Our methodology involves:</Typography>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Utilising the best cleaning equipment on the market;</p>
        </Typography>
        <Typography variant="li">
          <p>Applying a carefully selected range of premium detergents;</p>
        </Typography>
        <Typography variant="li">
          <p>Customising our approach to suit the specific type of rug and the staining agent to ensure the best possible outcome.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">10. How soon can I expect your large rug cleaning near me to visit me?</Typography>
        <Typography variant="body">We will try to get you an appointment for a high-end upholstery cleaning as soon as possible. Usually, we are fully booked for the following three days, but sometimes there are exceptions. We also offer same-day rug cleaning services for situations that need emergency rug cleaning.</Typography></li>
      <li>
        <Typography variant="h3">11. Can you give me a quote for the large rug cleaning near me over the phone or do you need a viewing in person?</Typography>
        <Typography variant="body">Yes, we can give you a quote for the mobile rug cleaning over the phone, there is no need for us to visit your property. You can also receive a mobile rug cleaning quote online.</Typography></li>
      <li>
        <Typography variant="h3">12. What payment methods do you accept for your large rug cleaning near me?</Typography>
        <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments directly to our team.</Typography></li>
      <li>
        <Typography variant="h3">13. Can you provide me with an invoice for the eco rug cleaning?</Typography>
        <Typography variant="body">Yes, we will either send you a receipt via email or via any method of your choice.</Typography></li>
      <li>
        <Typography variant="h3">14. Are you qualified for your large and small rug cleaning near me?</Typography>
        <Typography variant="body">Yes, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a> and of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s acknowledged industry qualification.</Typography></li>
      <li>
        <Typography variant="h3">15. How long have you been in the eco rug cleaning business?</Typography>
        <Typography variant="body">Since 2012, we've actively participated in the eco rug cleaning industry. Throughout the years, we've encountered various types of carpets, rugs, upholstery, and stains while performing both residential rug cleaning and commercial rug cleaning services, accumulating valuable experience. Our commitment to providing the best rug-washing services has led us to enhance our performance through the following means:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Continuously upgrading our equipment and machinery with superior alternatives whenever they become available;</p>
        </Typography>
        <Typography variant="li">
          <p>Consistently evaluating and improving our cleaning products to ensure the highest quality of service;</p>
        </Typography>
        <Typography variant="li">
          <p>Dedication to expanding our knowledge and skills through ongoing professional courses and training, always seeking to enhance our competence in our green rug cleaning services.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">16. Can you add a discount to the chemical-free rug cleaning quote?</Typography>
        <Typography variant="body">Our green rug cleaning services are renowned for their exceptional quality, using the most efficient equipment and a selection of premium cleaning products. What further distinguishes us is that our rug cleaning prices are not only highly competitive but also stand among the most attractive in the market. We strongly recommend combining all the services you require in order to get a better price. The reason for this cost efficiency is linked to the initial expenses and additional fees connected to every technician appointment, taking into account variables like travel time, parking, and the management of bulky equipment while loading and unloading.</Typography></li>
      <li>
        <Typography variant="h3">17. Can you steam clean a wool rug?</Typography>
        <Typography variant="body">Yes, rugs made from wool can be steam cleaned, although it should be done with caution. We offer professional wool carpet cleaning services. The help of experts is the best and most stress-free way to handle even the most delicate rugs.</Typography>
        <Typography variant="body">The drying time of wool rugs is slower than that of other types of rugs, ranging between 10 and 12 hours. If the carpet is very soiled and needs several treatments, the drying time might take even longer.</Typography>
      </li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">18. How much does a rug cleaning cost?</Typography>
        <Typography variant="body">How much the chemical-free rug cleaning costs depends on a number of factors. Some of them are:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The quantity and size of the rugs;</p>
        </Typography>
        <Typography variant="li">
          <p>How soiled they are;</p>
        </Typography>
        <Typography variant="li">
          <p>What fabric the rug is made of.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">To learn more, check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">rug cleaning prices</a>.</Typography>
      </li>
      <li>
        <Typography variant="h3">19. Where can I take my rug to be cleaned?</Typography>
        <Typography variant="body">There is no need to bring your rug somewhere in order to get it cleaned. If you book our rug cleaning company’s services, our cleaning expert will visit you on-site and clean the rug on the spot.</Typography></li>
      <li>
        <Typography variant="h3">20. Is professional rug cleaning worth it?</Typography>
        <Typography variant="body">Yes, professional rug cleaning services are the most effective way to take care of your rugs. Due to our powerful equipment, we are able to deliver the results you desire within a fraction of time. Such services will ensure that your rugs will be free of things like dust, dirt, pollen, germs and mites, which can lead to potential health problems.</Typography></li>
      <li>
        <Typography variant="h3">21. How do professionals clean area rugs?</Typography>
        <Typography variant="body">This is made possible by the expertise, equipment, products, and methods employed by expert companies. A professional rug cleaning company like "Fine Carpet Cleaning Ltd." offers top-quality cleaning services that are particularly effective in tackling stubborn stains, eliminating odours, and eradicating germ buildup. These results are often unattainable through regular cleaning methods.</Typography>
        <Typography variant="body">Apart from professional area rug cleaning, we are specialised in wool carpet cleaning services, professionally clean flokati rugs, professional antique rug cleaning, handmade rug cleaning, vintage rug cleaning, cotton rug cleaning, alpaca rug cleaning, lambswool rug cleaning, Navajo rug cleaning, natural fibre rug cleaning, Khazai rug cleaning, karastan rug cleaning, throw rug cleaning, Indian rug cleaning, Aubusson rug cleaning, Ziegler rug cleaning and more.</Typography></li>
      <li>
        <Typography variant="h3">22. How often should upholstery be professionally cleaned?</Typography>
        <Typography variant="body">The frequency of cleaning your rugs depends mainly on factors like how fast the rug soils. On average, rugs should be cleaned at 12-month intervals. However, if you have pets or children, use it very frequently or if it is easily stained, we recommend using mobile rug cleaning services more often than that. Regular professional cleaning not only keeps your rug looking its best but also helps maintain a healthy and clean living environment.</Typography></li>
      <li>
        <Typography variant="h3">23. Do you perform rug cleaning London on rugs made from different fabrics?</Typography>
        <Typography variant="body">Our rug cleaning company performs rug cleaning for all kinds of fabrics. We are specialised in wool carpet cleaning services, professionally clean flokati rugs, professional antique rug cleaning, handmade rug cleaning, vintage rug cleaning, cotton rug cleaning, alpaca rug cleaning, lambswool rug cleaning, Navajo rug cleaning, natural fibre rug cleaning, Khazai rug cleaning, karastan rug cleaning, throw rug cleaning, Indian rug cleaning, Aubusson rug cleaning, Ziegler rug cleaning and more.</Typography></li>
      <li>
        <Typography variant="h3">24. Do you perform same-day rug cleaning?</Typography>
        <Typography variant="body">Yes, one of the many services we perform is same-day rug cleaning. Every once in a while accidents happen that need an emergency rug cleaning. That is where same-day rug cleaning services become very useful.</Typography></li>
      <li>
        <Typography variant="h3">25. Do you perform professional rug cleaning for cat urine stains?</Typography>
        <Typography variant="body">Yes, we perform professional rug cleaning for cat urine stains. Thanks to our equipment and professional training, we are specialised in services like professional rug cleaning for cat urine stains and in eliminating bacteria, dust mites allergens and spills from everyday use. Your rug will be left looking brand-new, fresh and odour-free.</Typography></li>
      <li>
        <Typography variant="h3">26. What other services do you perform apart from small rug cleaning near me?</Typography>
        <Typography variant="body">We offer various rug cleaning services that you might need, such as:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Wool carpet cleaning services;</p>
        </Typography>
        <Typography variant="li">
          <p>Professionally clean flokati rug;</p>
        </Typography>
        <Typography variant="li">
          <p>Professional antique rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Handmade rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Vintage rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Cotton rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Alpaca rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Lambswool rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Navajo rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Natural fibre rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Khazai rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Karastan rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Throw rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Indian rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Aubusson rug cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Ziegler rug cleaning.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">If you are wondering which services best suit you or are looking forward to booking professional rug cleaning services, feel free to contact us at any suitable time for you.</Typography>
      </li>
      <li>
        <Typography variant="h3">27. Is there a company that performs small rug cleaning near me?</Typography>
        <Typography variant="body">“Fine Carpet Cleaning” Ltd. performs in all of London. Feel free to contact us to receive home rug cleaning services wherever you are and rest assured that we will take good care of your rugs.</Typography>
      </li>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Professional rug cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-12.jpg" alt="professional-rug-cleaning-services-12" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our professional rug cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform professional rug cleaning services. Apart from removing dirt and shading, professional rug cleaning services refresh, kill bacteria, reach all areas and maintain the colours of the rug. Our rug washing service ensures a set of vital advantages for you, including:</p>
        <ul>
          <li class="ml--5">
            <p>Effectively removing stains from spills, pet accidents, and everyday use;</p>
          </li>
          <li class="ml--5">
            <p>Rug cleaning London will extend the life of your furniture;</p>
          </li>
          <li class="ml--5">
            <p>Rug cleaning London can help eliminate odours, made from spills, pets or smoking, leaving your furniture smelling fresh;</p>
          </li>
          <li class="ml--5">
            <p>Rug washing service experts have the tools and expertise to get the job done efficiently and effectively;</p>
          </li>
          <li class="ml--5">
            <p>Rug cleaning London experts will tailor their methods to the specific type of rug, ensuring the best results without damage;</p>
          </li>
          <li class="ml--5">
            <p>Rug cleaning London can guarantee a healthy, allergy-free environment, beneficial for babies, children, pets and elderly residents.</p>
          </li>
          <li class="ml--5">
            <p>In order to be sure that the professional rug cleaning services will go as planned, the product and the cleaning method will be tested on a small area of your rug. That way we make sure that the detergent is best suited for the large rug cleaning service.</p>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our professional carpet cleaning services in London:</p>

        <ul>
          <li class="ml--5">
            <p>You get in touch with us.</p>
          </li>
          <li class="ml--5">
            <p>We provide you with recommendations on which large rug cleaning services will be most suitable for you.</p>
          </li>
          <li class="ml--5">
            <p>You receive a quote with the rug cleaning prices.</p>
          </li>
          <li class="ml--5">
            <p>If our terms meet your satisfaction, we will set an appointment for you for the large rug cleaning service.</p>
          </li>
          <li class="ml--5">
            <p>Our team's cleaners will visit your property to perform professional rug cleaning services.</p>
          </li>

        </ul>
        <h3>What do we offer:</h3>
        <p>The professional rug cleaning services we offer are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-rug-cleaning-services/steam">Rug steam cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-rug-cleaning-services/dry">Dry rug cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-stain-removal-services">Rug stain removal</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/stain-protection-services">Rug stain protection</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our professional rug cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <p>"Fine Carpet Cleaning" Ltd utilises premier cleaning equipment and products, including:</p>
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Efficient Extractors</h3>
            <Typography variant="body">Our machines stand among the most powerful, effective, and largest portable units globally. After extensively testing various brands in the UK market, we've selected top-notch options for our professional area rug cleaning, namely "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>" and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>". Additionally, our in-house engineer enhances these machines, implementing significant improvements to maximise their performance.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">High-performance vacuum cleaners</h3>
            <Typography variant="body">Our arsenal includes a high-filtration twin-motor vacuum cleaner, recognised as the best in the market based on our experience and knowledge. Specifically designed for high-performance home rug cleaning service, one twin motor pounds at the carpet while the other efficiently sucks out any loose dirt, dry soil, and dust.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Thoughtfully chosen cleaning solutions</h3>
            <Typography variant="body">We employ over 20 types of cleaning products from leading brands in the UK and US markets. Through thorough testing of available products, we have selected those that deliver the best results. Brands such as "Alltec," "Prochem," "Chemspec," "Solution World of Clean," and "TMF" empower our technicians to choose the most suitable detergents based on:</Typography>
          </li>
        </ol>
        <ul>
          <li class="ml--5">
            <p>The fabric the rug is made of;</p>
          </li>
          <li class="ml--5">
            <p>The degree of soiling in the rug;</p>
          </li>
          <li class="ml--5">
            <p>The specific type of stains requiring attention.</p>
            <Typography variant="body">With our cleaning equipment and top-quality products, we are able to perform residential rug cleaning and commercial rug cleaning services of the utmost quality.</Typography>
          </li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Photos from our professional rug cleaning services</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-10.jpg", alt: "professional-rug-cleaning-services-10" },
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-6.jpg", alt: "professional-rug-cleaning-services-6" },
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-1.jpg", alt: "professional-rug-cleaning-services-1" },
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-8.jpg", alt: "professional-rug-cleaning-services-8" },
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-2.jpg", alt: "professional-rug-cleaning-services-2" },
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-3.jpg", alt: "professional-rug-cleaning-services-3" },
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-4.jpg", alt: "professional-rug-cleaning-services-4" },
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-5.jpg", alt: "professional-rug-cleaning-services-5" },
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-6.jpg", alt: "professional-rug-cleaning-services-6" },
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-7.jpg", alt: "professional-rug-cleaning-services-7" },
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-9.jpg", alt: "professional-rug-cleaning-services-9" },
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-11.jpg", alt: "professional-rug-cleaning-services-11" },
        { src: "/assets/service-pics/rug-cleaning/professional-rug-cleaning-services-13.jpg", alt: "professional-rug-cleaning-services-13" },
      ]} />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Video from our professional rug cleaning services</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Professional rug cleaning prices</h2>

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
          img="/assets/Професионално почистване на заведения.jpg"
          alt=""
          title="Professional carpet cleaning services"
          href="/professional-carpet-cleaning-services"
          description="We offer a variety of professional carpet cleaning services. They will prolong the life of your carpet and is cheaper to do regular maintenance than buying a new carpet."
        />
        <FOTSliderContainer
          img="/assets/service-pics/sofa-cleaning/sofa-cleaning-services-13.jpg"
          alt="sofa-cleaning-services-13"
          title="Professional sofa cleaning services"
          href="/professional-upholstery-cleaning-services/sofa"
          description="Our expert sofa cleaning uses steam and hot water extraction to eliminate 99% of microorganisms, revitalizing your space for a healthier home."
        />
        <FOTSliderContainer
          img="/assets/service-pics/mattress-cleaning/mattress-cleaning-services-9.jpg"
          alt="mattress-cleaning-services-9"
          title="Mattress cleaning services"
          href="/professional-upholstery-cleaning-services/mattress"
          description="Mattress cleaning removes unwanted guests and fluids, creating a cleaner environment. It enhances sleep quality and extends the life of your mattress."
        />
        <FOTSliderContainer
          img="/assets/service-pics/furniture-cleaning/furniture-cleaning-12.jpg"
          alt="furniture-cleaning-12"
          title="Professional furniture cleaning services"
          href="/professional-upholstery-cleaning-services/furniture"
          description="Furniture upholstery cleaning services can extend the life of your furniture, saving you money on purchasing new items."
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

      <h2 class="line-height-12 md-line-height-14">Our professional rug cleaning services specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Proactive protection</h3>
            <Typography variant="body">Our rug washing service specialist recommends considering the addition of a stain protector to your carpets, rugs and upholstery whenever it's feasible. This straightforward step can yield significant cost savings on stain removal services. If you're curious, we encourage you to explore the benefits of <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection services</a>.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Try professional stain removal service</h3>
            <Typography variant="body">According to our specialist, it's highly advisable to engage the services of a stain removal company if your rug or upholstery has been stained rather than attempt to clean it yourself. This is because trying to clean the stain or letting it dry can lead to fabric damage, making complete stain removal unlikely. In fact, such attempts may seal the stain, making it even more challenging, if not impossible, for a professional area rug cleaning company to remove it. Therefore, scheduling a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-stain-removal-services">stain removal service</a> can potentially save your valuable rug or upholstery, which could be worth a significant amount.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Explore our comprehensive cleaning solution</h3>
            <Typography variant="body">We offer a range of services, including carpet cleaning, upholstery cleaning, and more. Our team provides comprehensive solutions, so don't miss the opportunity to explore the full extent of our expertise and make informed decisions about your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Combine several services</h3>
            <Typography variant="body">Our professional area rug cleaning experts recommend combining additional services in a single appointment because it is more cost-effective than having them done separately. This is because separate visits by technicians involve additional expenses like travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy health benefits</h3>
            <Typography variant="body">If you own carpets, rugs, or upholstery, it's essential to be aware of the health benefits of keeping them clean. These items can accumulate substantial amounts of dust, microorganisms, and dirt particles that might lead to health issues. Neglecting their care can increase the risk of various reactions, skin problems, and allergies. To prevent these issues, our specialist recommends using home rug cleaning services at least once a year. If you own pets, have children, or if your rugs are easily stained, we advise booking such services even more frequently.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews of our professional rug cleaning services</h2>

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

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our professional rug cleaning services</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
