import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import "solid-slider/slider.css";
import { Component, createSignal, Show } from 'solid-js';
import RiYoutubeFill from '~icons/ri/youtube-fill';
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { createSlider, Slider, SliderButton, SliderProvider } from 'solid-slider';
import { RotatingBanners } from '../../../components/RotatingBanners';
import { createCollapsable } from '../../../components/Collapsable';
import { Typography } from '../../../components/Typography';

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
  const [isStarted, setIsStarted] = createSignal(false);
  let videoRef: HTMLVideoElement;

  const startVideo = () => {
    videoRef.play();
    setIsStarted(true);
  };

  return (
    <div class="flex flex-justify-center flex-items-center">
      {!isStarted() && (
        <button
          class="z-1 c-paper font-size-12 position-absolute cursor-pointer b-none bg-transparent"
          onClick={startVideo}
        >
          <RiYoutubeFill class="c-#ff0000 md-w-20 mt-5 md-mt-0 md-h-20 w-15 h-15" />
        </button>
      )}
      <video
        ref={(el) => (videoRef = el)}
        class="mt-10 b-rd-3" style="width: 100%; width: -moz-available; width: -webkit-fill-available; width: fill-available;"
        controls
        muted
      >
        <div class="vertical-top max-w-full font-size-4 color-paper-inv block">
          <a
            class="color-paper-inv block"
            href="https://www.youtube.com/watch?v=zedTK_cCobY"
            target="_blank"
            rel="noopener"
          >
            Professional Carpet Cleaning London - Fine Carpet Cleaning
          </a>
        </div>
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
          <Typography variant="h3">Do you fee for cancellation?</Typography>
          <Typography variant="body">We require a deposit before performing the sofa set cleaning services. If you cancel the service on the day of the cleaning you will lose that deposit.</Typography></li>
        <li>
          <Typography variant="h3">Should I pay for the congestion/parking charge?</Typography>
          <Typography variant="body">Yes, we kindly ask that the client arrange a suitable parking space for our vehicles within close proximity of the property and to cover any parking/congestion expenses.</Typography></li>
        <li>
          <Typography variant="h3">What if I live on the 4th floor or above and I have no lift?</Typography>
          <Typography variant="body">Because our equipment weighs over 50 kilograms, we implement an extra fee for each additional floor that requires manual transportation. This is because moving the heavy equipment to different floors is time-consuming and can cause quicker fatigue among our technicians. As a result, this may impact our overall daily productivity compared to our standard output.</Typography></li>
        <li>
          <Typography variant="h3">Are you insured?</Typography>
          <Typography variant="body">Yes, we are completely insured.</Typography></li>
        <li>
          <Typography variant="h3">What happens if your home sofa cleaning services technicians damage anything?</Typography>
          <Typography variant="body">We are fully insured and if an accident happens it will be covered by our sofa cleaning company.</Typography></li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">Do you guarantee that after sofa set cleaning services all stains will be removed?</Typography>
          <Typography variant="body">Given our extensive experience and ownership of top-notch industry equipment, we consistently achieve high success rates in stain removal. However, it's important to acknowledge that we cannot provide an absolute guarantee due to various factors, including:</Typography></li>
        <li>
          <p>The age of the stains;</p>
        </li>
        <li>
          <p>The nature of the substances causing the stains;</p>
        </li>
        <li>
          <p>The type and fabric of the sofa;</p>
        </li>
        <li>
          <p>Any previous mishandling of the stains.</p>
        </li>
        <Typography variant="body">Nevertheless, we are fully committed to applying every possible effort to eliminate all stains from your furniture. Our approach involves:</Typography>
        <li>
          <p>Utilising cutting-edge cleaning equipment;</p>
        </li>
        <li>
          <p>Applying a thoughtfully selected range of premium detergents;</p>
        </li>
        <li>
          <p>Customising our approach to match the specific sofa type and staining agent, ensuring the best possible outcome.</p>
        </li>
        <li>
          <Typography variant="h3">How soon can I expect your London sofa cleaning technician to visit me?</Typography>
          <Typography variant="body">We will try to get you an appointment for home sofa cleaning services as soon as possible. Usually, we are fully booked for the following three days, but sometimes there are exceptions.</Typography></li>
        <li>
          <Typography variant="h3">Can you give me a quote for your sofa cleaning prices over the phone or do you need a viewing in person?</Typography>
          <Typography variant="body">Yes, we can give you a corner sofa cleaning quote over the phone, there is no need for us to visit your property. You can also receive a quote online.</Typography></li>
        <li>
          <Typography variant="h3">What payment methods do you accept for your home sofa cleaning services?</Typography>
          <Typography variant="body">We accept debit/credit cards, bank transfer and cash payments directly to our team.</Typography></li>
        <li>
          <Typography variant="h3">Can your sofa cleaning company provide me with an invoice?</Typography>
          <Typography variant="body">Yes, we will either send you a receipt via email or via any method of your choice.</Typography></li>
        <li>
          <Typography variant="h3">Are you qualified for sofa upholstery cleaning services?</Typography>
          <Typography variant="body">Yes, we are qualified and fully trained members of Checkatrade and of NCCA (National Carpet Cleaners Association) – the UK’s acknowledged industry qualification.</Typography></li>
        <li>
          <Typography variant="h3">How long have you been in the sofa set cleaning services business?</Typography>
          <Typography variant="body">Since 2012, we have been actively engaged in the sectional cleaning service industry. Throughout the years, we have dealt with a wide range of carpets, rugs, upholstery, and stains from both commercial and residential clients, gaining valuable experience. Our commitment to providing top-notch professional sofa cleaning services has led us to enhance our performance through the following strategies:</Typography></li>
        <li>
          <p>Continuously upgrading our equipment and machinery by adopting superior alternatives whenever they become available;</p>
        </li>
        <li>
          <p>Consistently evaluating and improving our cleaning products to ensure the delivery of the highest quality service;</p>
        </li>
        <li>
          <p>A dedication to expanding our knowledge and skills through ongoing professional courses and training, always striving to enhance our competence.</p>
        </li>
        <li>
          <Typography variant="h3">Can you add a discount for the eco sofa cleaning?</Typography>
          <Typography variant="body">Our best sofa cleaning services are renowned for their exceptional quality, employing the most effective equipment and a selection of premium cleaning products. What sets us apart even more is that our sofa cleaning prices not only stand out for their competitiveness but are also among the most attractive in the market. Combining all the services you require is a more economical option than making separate requests for each service.This cost-effectiveness is attributed to the initial cost and additional charges associated with each technician visit, taking into account factors such as travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography></li>
        <li>
          <Typography variant="h3">What types of sofas do you clean?</Typography>
          <Typography variant="body">Our sofa upholstery cleaning services are perfect for two, three, four, or five-seater sofas, but also relate to a broader range of soft furnishings and upholstery, including:</Typography></li>
        <li>
          <p>Rockers & armchairs;</p>
        </li>
        <li>
          <p>Dining chairs;</p>
        </li>
        <li>
          <p>Office chairs;</p>
        </li>
        <li>
          <p>Soft blinds & curtains;</p>
        </li>
        <li>
          <p>Pillows & cushions;</p>
        </li>
        <li>
          <p>Single, double, and King size mattresses.</p>
        </li>
        <Typography variant="body">Additionally, we perform services for different types of sofas and fabrics such as velvet sofa cleaning services, suede sofa cleaning services, microfiber sofa cleaning services, sofa cover cleaning services, sofa cushion cleaning services, corner sofa cleaning, eco sofa cleaning and many more.</Typography>
        <li>
          <Typography variant="h3">How much does it cost to dry clean sofa covers?</Typography>
          <Typography variant="body">How much the sofa cover cleaning services cost depends on a number of factors. Some of them are:</Typography></li>
        <li>
          <p>The quantity and size of the sofa;</p>
        </li>
        <li>
          <p>How soiled it is;</p>
        </li>
        <li>
          <p>The fabric of the sofa.</p>
        </li>
        <Typography variant="body">To learn more, check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">sofa cleaning prices</a>.</Typography>

        <li>
          <Typography variant="h3">Is getting your couch professionally cleaned worth it?</Typography>
          <Typography variant="body">Booking professional sofa cleaning services is a quick and efficient way of getting your couch and sofas refreshed with minimum effort from your side. It costs you much less than buying new furniture. Since technicians use cleaning supplies and hot water, not only is your sofa cleaned but sanitised as well. </Typography>
          <Typography variant="body">The corner sofa cleaning services of “Fine Carpet Cleaning” Ltd. involve artillery of methods and solutions for producing optimal results and leaving your upholstery fresh and shiny as new. We employ the very best modern practices, approved by the industry officials; we continually upgrade our processes in order to justify our perfectionism and deliver state-of-the-art sofa cleaning services for our domestic and commercial clients.</Typography>
        </li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">Can a sofa be professionally cleaned?</Typography>
          <Typography variant="body">Yes, sofas can be professionally cleaned. Professional sofa and couch cleaning services are offered by trained technicians and specialised cleaning companies. These professionals use advanced equipment, specialised cleaning solutions, and industry-recommended techniques to deep clean and refresh sofas.</Typography></li>
        <li>
          <Typography variant="h3">How long does it take a couch to dry after being professionally cleaned?</Typography>
          <Typography variant="body">The drying time after couch cleaning services varies depending on the fabric and type of the upholstery and the cleaning method employed. If the dry cleaning services are chosen, the upholstery will be dry immediately after the cleaning process or shortly thereafter. Typically it takes 30-60 minutes for it to be completely dry. However, when steam cleaning is utilised, the approximate drying time typically ranges from 5 to 7 hours.</Typography>
          <Typography variant="body">If you are having trouble deciding which best sofa cleaning services will suit you or are searching for an expert sofa cleaning company, you can contact us at any suitable time for you to receive professional advice.</Typography></li>
        <li>
          <Typography variant="h3">How long does it take for a sofa to be professionally cleaned?</Typography>
          <Typography variant="body">The duration of the sofa upholstery cleaning services process mainly depends on:</Typography></li>
        <li>
          <p>How soiled the sofa is;</p>
        </li>
        <li>
          <p>If it needs any stain removal treatments;</p>
        </li>
        <li>
          <p>What cleaning method will be used on the upholstery?</p>
        </li>
        <Typography variant="body">If you need more information feel free to contact us or to get the best sofa cleaning services.</Typography>
        <li>
          <Typography variant="h3">How often should a couch be deep cleaned?</Typography>
          <Typography variant="body">The recommended cleaning frequency from a deep sofa cleaning company is primarily influenced by factors such as the speed at which the furniture becomes soiled. Generally, it's advisable to clean a sofa every 12 months on average. However, if you have pets, children, use it frequently, or if it is prone to staining, we suggest utilising home sofa cleaning services more frequently than the standard interval. Regular professional cleaning not only preserves the aesthetic appeal of your upholstery but also contributes to maintaining a healthy and clean living environment. Feel free to contact us anytime for a service from couch cleaning companies "near me" or advice.</Typography></li>
        <li>
          <Typography variant="h3">Can you get sofas steam cleaned?</Typography>
          <Typography variant="body">Yes, you can use steam cleaning for your sofa and it will not damage it. Steam cleaning is the most thorough, effective method for removing dirt and soil from the base. Steam cleaning is the most effective way to clean a sofa. Cleaning your furniture with hot water at high pressure will successfully remove dirt, bacteria, grime, and toxins embedded in the sofa fibres. Professional sofa cleaning services can definitely clean your sofas and couches effectively, and it also has many other advantages, like prolonging the life of the sofas, being very effective on tough stains, not leaving any residue behind and not using harsh chemicals.</Typography>
          <Typography variant="body">In special cases like synthetic sofas, we strongly recommend not using steam cleaning, but dry cleaning, as the heat and steam <strong>will</strong> damage the furniture.</Typography></li>
        <li>
          <Typography variant="h3">Are there couch cleaning companies near me?</Typography>
          <Typography variant="body">“Fine Carpet Cleaning” Ltd. performs in all of London. Feel free to contact us to receive the best sofa cleaning services wherever you are and rest assured that we will take good care of your upholstery.</Typography></li>
      </ul>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Professional sofa cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our professional sofa cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform professional sofa cleaning services. Excellent hygiene is a vital necessity. Virtually all upholstery manufacturers recommend steam cleaning and hot water extraction as the deepest and most effective methods of upholstery cleaning, able to wipe out 99% of the microorganisms living deep inside the fibres of the fabric. When booking sofa upholstery cleaning services, you can expect several crucial benefits, such as:</p>
        <ul>
          <li class="ml--5">
            <p><strong>Removing stains</strong> from spills, pet accidents, and everyday use.</p>
          </li>
          <li class="ml--5">
            <p><strong>Extending the life of your furniture</strong> by saving money from buying new furniture.</p>
          </li>
          <li class="ml--5">
            <p>Our London sofa cleaning <strong>wipes out fungi, bacteria, and dust mites</strong>.</p>
          </li>
          <li class="ml--5">
            <p><strong>Neutralising allergens</strong>, including pollen and house dust.</p>
          </li>
          <li class="ml--5">
            <p>Sofa and couch cleaning services are an excellent <strong>allergy prevention</strong> method.</p>
          </li>
          <li class="ml--5">
            <p>Professional sofa cleaning services are <strong>perfect for residences with babies, toddlers, and senior citizens</strong> since they employ a minimum amount of strong chemicals throughout the purification process.</p>
          </li>
          <li class="ml--5">
            <p>London sofa cleaning experts have the tools and expertise to get the job done efficiently and effectively.</p>
          </li>
          <li class="ml--5">
            <p>Professionals will <strong>tailor their methods</strong> to the specific type of upholstery, ensuring the best results without damage.</p>
          <Typography variant="body">At "Fine Carpet Cleaning Ltd.", we understand that excellent hygiene is vital. We offer professional sofa cleaning services that not only enhance the appearance of your furniture but also contribute to a healthier living environment.</Typography>
          <Typography variant="body">To ensure that everything proceeds according to plan, we will conduct a product and cleaning method test on a small section of your upholstery. This test helps confirm that the detergent chosen is the most suitable for your furniture.</Typography>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our professional sofa cleaning services:</p>

        <ul>
          <li class="ml--5">
            <p>You contact us.</p>
          </li>
          <li class="ml--5">
            <p>We offer you tailored recommendations based on your specific cleaning needs.</p>
          </li>
          <li class="ml--5">
            <p>You receive a price quote for the recommended services.</p>
          </li>
          <li class="ml--5">
            <p>If our terms are satisfactory, we schedule you an appointment.</p>
          </li>
          <li class="ml--5">
            <p>Our London sofa cleaning technicians will then visit your property to carry out the services.</p>
          </li>
        </ul>
        <h3>What do we offer:</h3>
        <p>Sofa upholstery cleaning services offer solutions tailored for every fabric:</p>

        <ul>
          <li class="ml--5"><p>Velvet sofa cleaning services</p></li>
          <li class="ml--5"><p>Suede sofa cleaning services</p></li>
          <li class="ml--5"><p>Cotton sofa cleaning services</p></li>
          <li class="ml--5"><p>Linen sofa cleaning services</p></li>
          <li class="ml--5"><p>Silk sofa cleaning services</p></li>
          <li class="ml--5"><p>Viscose sofa cleaning services</p></li>
          <li class="ml--5"><p>Leather sofa cleaning services</p></li>
          <li class="ml--5"><p>Sofa cushion cleaning services</p></li>
          <li class="ml--5"><p>Sofa set cleaning services</p></li>
          <li class="ml--5"><p>Sofa cover cleaning services</p></li>
          <li class="ml--5"><p>Microfiber sofa cleaning services</p></li>
          <li class="ml--5"><p>Sofa sectional cleaning services</p></li>
          <li class="ml--5"><p>Corner sofa cleaning</p></li>
          <li class="ml--5"><p>Eco sofa cleaning and more</p></li>
        </ul>

        <p><strong>Complete home fabric care options:</strong></p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Upholstery cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Leather sofa cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Furniture cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Mattress cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Pillow cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Upholstery stain removal</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Upholstery stain protector</a></li>
        </ul>

        <h3>What do we offer:</h3>
        <p>Sofa upholstery cleaning services offer solutions tailored for every fabric:</p>

        <ul>
          <li class="ml--5"><p>We start with a pre-cleaning survey to identify the appropriate cleaning detergents and tools needed for the specific fabric of the sofa.</p></li>
          <li class="ml--5"><p>Next, we use dry vacuum cleaning to eliminate loose dirt, dry soils, and dust from the fabric.</p>
          <Typography variant="body">Professional sofa cleaning is essential to maintain its elegance and longevity. Our process begins with carefully dusting the sofa to remove any loose particles. Next, we apply a specialised detergent, gently agitate it to lift dirt, and then wipe it off, ensuring a thorough clean. We then allow the sofa to dry for about 10 minutes. Finally, we apply a protective cream to nourish the leather and shield it from future damage. This meticulous approach keeps your leather sofa looking pristine and extends its lifespan.</Typography></li>
          <li class="ml--5"><p>A heavy-duty pre-spray is then applied to lift oily dirt and pollutants from the upholstery, preparing them for extraction with our high-performance machines.</p></li>
          <li class="ml--5"><p>The cleaning solution is carefully worked into the upholstery, effectively loosening the soiling for the extraction process.</p></li>
          <li class="ml--5"><p>We gently inject pure softened hot water, reaching a maximum temperature of 135 degrees, deep into the fibres. This releases the soil, allowing our powerful hot water extraction machine to efficiently remove it. Any remaining spots and stains are individually treated with special products.</p></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our professional sofa cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Highly-efficient extractors</h3>
            <Typography variant="body">At "Fine Carpet Cleaning” Ltd., our commitment to excellence is evident in our use of cutting-edge cleaning equipment and premium cleaning products. Our powerful machines, recognized globally as some of the best portable options, have been meticulously selected from top brands such as 'Mytee' and 'Airflex,' known for their exceptional power and effectiveness. These machines undergo rigorous testing, and our in-house engineer enhances them for optimal performance.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
            <Typography variant="body">We use a high-filtration twin motor vacuum cleaner, which we believe is the best one on the market. It is designed for high-performance expert carpet cleaning. One of the twin-motors pounds at the carpet while the other one sucks out any loose dirt, dry soil and dust.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning solutions</h3>
            <Typography variant="body">In addition to our advanced machinery, we use an extensive range of cleaning products carefully chosen after thorough testing of almost every option available on the market. This diverse selection allows our technicians to choose the most suitable detergents based on various factors, including:</Typography>
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
          </li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our professional sofa cleaning services</h2>

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

      <h2 class="line-height-12 md-line-height-14">Video from our professional sofa cleaning services</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Our sofa cleaning prices</h2>

      <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
        style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
        <br></br>
        Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
        charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
        delays for the technicians and messes up the schedule.
        <br></br>
        <strong>Deodorising - Free of charge - just notify us when booking.</strong></div>

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

      <button class="outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-250px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9 my-20 mx-auto" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">REQUEST A QUOTE</a></button>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Frequently ordered together</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Our professional sofa cleaning services specialist advises:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use a stain protector</h3>
            <Typography variant="body">Our sofa cleaning specialist suggests considering the addition of a stain protector to your carpets and upholstery whenever it's feasible. This simple step can result in significant cost savings on stain removal services. If you're curious, we encourage you to explore the benefits of <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">stain protection services</a>.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use a professional stain removal service</h3>
            <Typography variant="body">According to our specialist, it's highly advisable to seek the services of a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">professional stain removal company</a> if your carpet or upholstery has been stained, rather than attempting to clean it yourself. Cleaning attempts or allowing the stain to dry can risk fabric damage, making complete stain removal unlikely. In fact, such efforts may seal the stain, making it even more challenging, if not impossible, for professional sofa and couch cleaning services to remove it. Therefore, scheduling a stain removal service can potentially save your valuable carpet or upholstery, which could be worth a significant amount.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Make well-informed decisions</h3>
            <Typography variant="body">Our London sofa cleaning experts provide a range of services, including carpet cleaning, rug cleaning, and more. Our team takes pride in offering comprehensive solutions, providing you the opportunity to explore the full extent of our expertise and make informed decisions about your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Combine different services</h3>
            <Typography variant="body">Combining different cleaning services into one visit has a number of benefits when it comes to cleaning sofas. First of all, it speeds up the return to regular activities to your spot by saving time and minimising disturbances. Bundled services also save money because they are less expensive than booking each service separately. Last but not least, hiring a leather couch cleaning firm guarantees that every step of the cleaning procedure follows sustainable methods, producing a healthier workplace and a more environmentally friendly world.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy health benefits</h3>
            <Typography variant="body">If you own carpets, carpet floor coverings, or upholstery, it's crucial to be aware of the health benefits of keeping them clean. These items can accumulate substantial amounts of dust, microorganisms, and dirt particles that might lead to health issues. Neglecting their care can increase the risk of various reactions, skin problems, and allergies. To prevent these issues, our specialist recommends using professional upholstery cleaning services at least once a year. If you have pets, children, or easily stained upholstery, more frequent bookings are advisable.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews for our professional sofa cleaning services</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our professional sofa cleaning services</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/services" class="c-paper font-size-5">SERVICES</a></button>
        <button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/Contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>
      </div>



    </>
  );
}
