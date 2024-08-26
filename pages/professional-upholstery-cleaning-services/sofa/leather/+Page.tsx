import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import "solid-slider/slider.css";
import { Component, createSignal, Show } from 'solid-js';
import RiYoutubeFill from '~icons/ri/youtube-fill';
import { FacebookLikeGallery } from '../../../../components/FacebookLikeGallery';
import { createSlider, Slider, SliderButton, SliderProvider } from 'solid-slider';
import { RotatingBanners } from '../../../../components/RotatingBanners';
import { createCollapsable } from '../../../../components/Collapsable';
import { Typography } from '../../../../components/Typography';

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
      <li>
        <Typography variant="h3">1. Do you fee for cancellation?</Typography>
        <Typography variant="body">We require a deposit before performing the cleaning service. If you cancel the service on the day of the cleaning you will lose that deposit.</Typography></li>
      <li>
        <Typography variant="h3">2. Should I pay for the congestion / parking charge?</Typography>
        <Typography variant="body">Yes, we kindly ask that the client arrange a suitable parking space for our vehicles within close proximity of the property and to cover any parking / congestion expenses.</Typography></li>
      <li>
        <Typography variant="h3">3. What if I live on the 4th floor or above and I have no lift?</Typography>
        <Typography variant="body">Because our equipment weighs over 50 kilograms, we impose an additional fee for each extra floor that requires manual transportation. This is because the process tends to consume a substantial amount of time and can result in quicker fatigue among our technicians. As a result, our overall productivity for the day may be reduced compared to our standard output.</Typography></li>
      <li>
        <Typography variant="h3">4. Are you insured?</Typography>
        <Typography variant="body">Yes, we are completely insured.</Typography></li>
      <li>
        <Typography variant="h3">5. What happens if your cleaners damage anything?</Typography>
        <Typography variant="body">We are fully insured and if an accident happens it will be covered by our company.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. How long does the process of leather furniture cleaning London take?</Typography>
        <Typography variant="body">The duration of the professional leather upholstery cleaning process mainly depends on:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>How soiled the upholstery is;</p>
        </Typography>
        <Typography variant="li">
          <p>Does it need any stain removal treatments;</p>
        </Typography>
        <Typography variant="li">
          <p>What cleaning method will be used on the upholstery.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">7. How long does it take for the leather upholstery to get dry after leather sofa cleaning services?</Typography>
        <Typography variant="body">The drying time after leather sofa cleaning services varies depending on the fabric and type of the upholstery. Typically it can be used 30–60 minutes after the cleaning, so you can go back to your daily activities.</Typography>
        <Typography variant="body">If you are having trouble deciding which leather upholstery cleaning services will best suit you or are seeking advice from leather upholstery cleaning companies, you can contact us at any suitable time for you.</Typography></li>
      <li>
        <Typography variant="h3">8. How soon can I expect your cleaners to visit me?</Typography>
        <Typography variant="body">We will try to get you an appointment for a professional leather sofa cleaning as soon as possible. Usually, we are fully booked for the following three days, but sometimes there are exceptions. </Typography></li>
      <li>
        <Typography variant="h3">9. Can you give me a quote for the leather furniture cleaning London over the phone or do you need a viewing in person?</Typography>
        <Typography variant="body">Yes, we can give you a quote over the phone, there is no need for us to visit your property. You can also receive a quote for professional leather sofa cleaning services online.</Typography></li>
      <li>
        <Typography variant="h3">10. What payment methods do you accept for your leather upholstery cleaning services?</Typography>
        <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments directly to our team.</Typography></li>
      <li>
        <Typography variant="h3">11. Can your leather upholstery cleaning companies provide me with an invoice?</Typography>
        <Typography variant="body">Yes, we will either send you a receipt via email or via any method of your choice.</Typography></li>
      <li>
        <Typography variant="h3">12. Are you qualified?</Typography>
        <Typography variant="body">Yes, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a> and of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s acknowledged industry qualification.</Typography></li>
      <li>
        <Typography variant="h3">13. How long have you been in the upholstery and carpet cleaning business?</Typography>
        <Typography variant="body">Since 2012, we've been actively engaged in the upholstery and carpet cleaning industry. Over the years, we've dealt with a diverse range of carpets, rugs, upholstery, and stains from both commercial and residential clients, accumulating valuable experience. Our commitment to providing the best cleaning services has motivated us to enhance our performance through the following approaches:</Typography></li>
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
        <Typography variant="h3">14. Can you add a discount for the professional leather sofa cleaning?</Typography>
        <Typography variant="body">Our leather upholstery cleaning services are renowned for their exceptional quality, making use of highly effective equipment and a range of top-tier cleaning products. What truly distinguishes us is not only the competitiveness but also the attractiveness of our prices in the market. Combining all the services you require is a more economical option than making separate requests for each service. Through this, you'll realise that bundling all the services you need is more cost-efficient than individual service requests.</Typography></li>
      <Typography variant="body">This efficiency is attributed to the initial cost and additional charges related to each technician visit, including factors like travel time, parking, and handling heavy equipment during loading and unloading.</Typography>
      <li>
        <Typography variant="h3">15. Can I use my furniture after professional leather upholstery cleaning?</Typography>
        <Typography variant="body">It depends on the cleaning method used. The drying time for a leather sofa typically ranges from 30 to 60 minutes. This duration depends on factors such as the type of cleaning method used, the material of the sofa, the level of soiling, and the room's temperature and humidity levels. If leather sofa cleaning services have been performed, it is recommended that you try to stay off the freshly cleaned upholstery until it is dry.</Typography></li>
      <li>
        <Typography variant="h3">16. How often should leather upholstery be professionally cleaned?</Typography>
        <Typography variant="body">The frequency of cleaning from leather upholstery cleaning companies depends mainly on factors like how fast the upholstery soils. On average, a carpet should be cleaned at 12-month intervals. However, if you have pets or children, use it very frequently or if it is easily stained, we recommend using professional leather sofa cleaning services more often than that. Regular professional cleaning not only keeps your leather upholstery looking its best but also helps maintain a healthy and clean living environment. You can contact us anytime to receive professional leather upholstery cleaning services or advice.</Typography>
      </li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">17. What are your professional leather sofa cleaning prices?</Typography>
        <Typography variant="body">How much professional leather sofa cleaning services cost depends on a number of factors. Some of them are:</Typography></li>
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
      <Typography variant="body">To learn more, check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">leather upholstery cleaning prices</a>.</Typography>
      <li>
        <Typography variant="h3">18. How to clean a nubuck leather sofa?</Typography>
        <Typography variant="body">Cleaning a nubuck leather sofa requires a gentle touch to avoid damaging the delicate material. We use specialised for nubuck cleaning products and methods:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The sofa is first dry brushed with a soft nubuck brush to remove surface dust and loose particles. This step helps to lift the pile and prepare the surface for more thorough cleaning.</p>
        </Typography>
        <Typography variant="li">
          <p>A hoover with a soft brush attachment is used to remove dust and dirt from the surface and crevices of the sofa.</p>
        </Typography>
        <Typography variant="li">
          <p>Stains are treated with a special nubuck cleaner. This cleaner is applied to a soft cloth or sponge and carefully dabbed onto the affected area to remove the stain without damaging the material.</p>
        </Typography>
        <Typography variant="li">
          <p>A special nubuck cleaning solution is applied. This is usually done with a spray or a foam cleaner specially developed for nubuck. The cleaner is gently worked into the fabric with a soft brush or sponge to remove dirt and grime.</p>
        </Typography>
        <Typography variant="li">
          <p>The cleaner is then wiped off with a clean, damp cloth to ensure all residue is removed.</p>
        </Typography>
        <Typography variant="li">
          <p>The sofa is left to air dry. It is important not to use heat sources.</p>
        </Typography>
        <Typography variant="li">
          <p>To help guard against spills and stains in the future, a nubuck protection spray is sprayed. It creates a barrier of protection without changing the nubuck's colour or texture.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">19. What is best for cleaning leather sofa?</Typography>
        <Typography variant="body">The best and safest way to have your leather furniture cleaned is to take advantage of leather upholstery cleaning services. This step will save you effort and time and you can be sure that your upholstery will be properly taken care of. Leather upholstery cleaning companies are experts in this field due to their experience, professional training and special equipment. We highly advise to utilise such services, as cleaning leather furniture improperly can lead to further damage.</Typography></li>
      <li>
        <Typography variant="h3">20. Are leather sofas easy to clean?</Typography>
        <Typography variant="body">Leather furniture is not difficult to clean, especially with the proper methods and equipment being used. The leather furniture cleaning London is done with a professional leather cleaning product. After the cleaning is completed, we apply a professional leather conditioner which moisturises the leather and gives it a nice and soft feel.</Typography></li>
      <li>
        <Typography variant="h3">21. Can you get leather couches professionally cleaned?</Typography>
        <Typography variant="body">Yes, leather couches can be professionally cleaned. We recommend professional leather cleaning London as the best way to clean a leather couch. With professional leather sofa cleaning services, you can trust that your leather investment is being cared for by experts with the skillset and equipment to properly clean.</Typography>
      </li>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Professional leather sofa cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our professional leather sofa cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform professional leather sofa cleaning services. Leather furniture is highly durable and has a luxurious look, but is also harder to clean and maintain. Being exposed to daily wear and tear, the leather drying out from sunlight, its colour fading and stains appearing from household chemicals used for cleaning are a few situations where you can take advantage of professional leather sofa cleaning services to take care of your leather furniture.</p>
        <p>Other advantages of leather sofa cleaning services are:</p>
        <ul>
          <li class="ml--5">
            <p>They prevent damage and build-up of oils, dirt and grime;</p>
          </li>
          <li class="ml--5">
            <p>They increase durability and lifespan;</p>
          </li>
          <li class="ml--5">
            <p>Professional leather sofa cleaning keeps it feeling comfortable and looking great;</p>
          </li>
          <li class="ml--5">
            <p>They help save significant effort from cleaning the sofa yourself.</p>
            <Typography variant="body">To ensure everything proceeds according to plan, a test of the product and cleaning method will be conducted on a small area of your upholstery. This ensures that the detergent is well-suited for your furniture.</Typography>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our professional leather sofa cleaning services:</p>

        <ul>
          <li class="ml--5">
            <p>You are reaching out to us.</p>
          </li>
          <li class="ml--5">
            <p>We give you personalised recommendations for services tailored to your specific needs.</p>
          </li>
          <li class="ml--5">
            <p>You get a price quote for the recommended services.</p>
          </li>
          <li class="ml--5">
            <p>If you are satisfied with our terms, we schedule an appointment for you.</p>
          </li>
          <li class="ml--5">
            <p>Our team of cleaners will visit your property to provide leather upholstery cleaning services.</p>
          </li>
        </ul>
        <h3>What do we offer:</h3>
        <p>Other cleaning services you might be interested in are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services">Upholstery cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/sofa">Sofa cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/furniture">Furniture cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/mattress">Mattress cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/pillow">Pillow cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-stain-removal-services">Upholstery stain removal</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/stain-protection-services">Upholstery stain protector</a></li>
        </ul>
      </div>

      <h2>The process of our professional leather sofa cleaning services:</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <p>Professional leather sofa cleaning is essential to maintain its elegance and longevity.</p>
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5"><Typography variant="body">First, we will carry out a pre-cleaning survey, to establish exactly what cleaning detergents and tools need to be used for the specific fabric. We will inspect the leather furniture assessing the leather type and checking for any splitting, scratches, soiling, colour loss and other areas of concern.</Typography></li>
          <li class="ml--5"><Typography variant="body">Our process begins with carefully dusting the sofa to remove any loose particles.</Typography></li>
          <li class="ml--5"><Typography variant="body">Next, we apply a specialised detergent, gently agitate it to lift dirt, and then wipe it off, ensuring a thorough clean.</Typography></li>
          <li class="ml--5"><Typography variant="body">We then allow the sofa to dry for about 10 minutes.</Typography></li>
          <li class="ml--5"><Typography variant="body">Finally, we apply a protective cream to nourish the leather and shield it from future damage.</Typography></li>
          <li class="ml--5"><Typography variant="body">This meticulous approach keeps your leather sofa looking pristine and extends its lifespan.</Typography></li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our professional leather sofa cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Special leather cleaning products</h3>
            <Typography variant="body">Leather upholstery is treated differently from fabric upholstery. It is cleaned with light and pet-friendly chemicals. The colour is maintained and a protective residue is formed on the surface of the leather that hydrates it. The protective layer also prevents the leather from drying and cracking over time.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">High-quality extractors</h3>
            <Typography variant="body">At "Fine Carpet Cleaning Ltd," our machines are renowned for their outstanding power and effectiveness, ranking among the best portable options globally. Thoroughly tested and selected from top brands in the UK market, including "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>" and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>", these machines undergo additional enhancements by our in-house engineer to maximise their performance.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning solution</h3>
            <Typography variant="body">Our extensive selection of cleaning products is meticulously chosen after comprehensive testing of virtually all available market options. This wide range allows our technicians to select the most suitable detergents based on factors such as:</Typography>
          </li>
        </ol>
        <ul>
          <li class="ml--5">
            <p>The upholstery fabric;</p>
          </li>
          <li class="ml--5">
            <p>Level of soiling;</p>
          </li>
          <li class="ml--5">
            <p>The type of stains to be treated.</p>
            <Typography variant="body">With our cutting-edge cleaning equipment and high-quality products, we ensure professional leather upholstery cleaning that upholds the highest standards of quality.</Typography>
          </li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our professional leather sofa cleaning services</h2>

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

      <h2 class="line-height-12 md-line-height-14">Video from our professional leather sofa cleaning services</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Prices of our professional leather sofa cleaning services</h2>

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

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Our professional leather sofa cleaning services specialist advises:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Add a stain protector</h3>
            <Typography variant="body">Our leather upholstery cleaning specialist suggests considering the addition of a stain protector to your carpets and upholstery when affordable. This simple step can lead to significant cost savings on stain removal services. Explore the advantages of <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection services</a> to understand the benefits.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Seek assistance from a professional cleaning service</h3>
            <Typography variant="body">According to our specialist, it's highly recommended to hire a professional stain removal company if your carpet or upholstery has been stained, rather than attempting self-cleaning.  Attempting to clean it at home may lead to fabric damage or seal the stain, making complete removal unlikely. Scheduling a professional <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-stain-removal-services">stain removal service</a> can potentially save your valuable carpet or upholstery, which holds considerable worth.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Choose wisely with understanding</h3>
            <Typography variant="body">Explore our comprehensive range of services provided by our upholstery cleaners, including carpet cleaning, rug cleaning, and more. Our team takes pride in offering holistic solutions, allowing you to explore the full extent of our expertise and make informed decisions about your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Unite multiple services</h3>
            <Typography variant="body">When it comes to cleaning leather couches, there are several advantages to combining several cleaning services into one visit. First of all, by reducing interruptions and saving time, it speeds up the return to routine operations at your location. Because they are less expensive when bundled than when booked separately, bundled services also result in cost savings. Not to mention, using a leather sofa cleaning company ensures that all cleaning steps are carried out sustainably, leading to a healthier workplace and a greener planet overall.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Experience the advantages of good health</h3>
            <Typography variant="body">If you own carpets, carpet floor coverings, or upholstery, it's crucial to be aware of the health benefits of keeping them clean. These items can accumulate dust, microorganisms, and dirt particles, leading to health issues. Neglecting their care can increase the risk of reactions, skin problems, and allergies. Our specialist recommends professional cleaning services at least once a year. If you have pets, children, or easily stained upholstery, more frequent bookings are advisable.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews of our professional leather sofa cleaning services</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our professional leather sofa cleaning services</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
