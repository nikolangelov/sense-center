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
          <Typography variant="body">We require a deposit before performing the cleaning service. If you cancel the pillow cleaning service on the day of the cleaning you will unfortunately lose that deposit.</Typography></li>
        <li>
          <Typography variant="h3">Should I pay for the congestion / parking charge?</Typography>
          <Typography variant="body">Yes, we kindly ask that the client arrange a suitable parking space for our vehicles within close proximity of the property and to cover any parking / congestion expenses.</Typography></li>
        <li>
          <Typography variant="h3">What if I live on the 4th floor or above and I have no lift?</Typography>
          <Typography variant="body">An additional charge will be included for each additional floor that necessitates manual transportation due to the substantial weight of our equipment, surpassing 50 kilograms. This is because it typically consumes a considerable amount of time and can result in quicker fatigue among our technicians. As a consequence, this may diminish our overall productivity for the day compared to our standard output.</Typography></li>
        <li>
          <Typography variant="h3">Are you insured?</Typography>
          <Typography variant="body">Yes, our company is completely insured.</Typography></li>
        <li>
          <Typography variant="h3">What happens if your pillow dry cleaning near me damages anything?</Typography>
          <Typography variant="body">We are fully insured and if any accidents occur they will be covered by us.</Typography></li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">How long does the process of professional pillow cleaning take?</Typography>
          <Typography variant="body">Usually, a pillow cleaning will take 5-10 minutes for each pillow, but that may vary due to factors such as:</Typography></li>
        <li>
          <p>How soiled the pillows are;</p>
        </li>
        <li>
          <p>The quantity and size of the pillows;</p>
        </li>
        <li>
          <p>If they need any stain removal treatments;</p>
        </li>
        <li>
          <p>What cleaning method will be used for the pillows?</p>
        </li>
        <li>
          <Typography variant="h3">How long does it take for the pillows to get dry after pillow cleaning services?</Typography>
          <Typography variant="body">The drying time varies depending on the fabric type of the pillows and the cleaning method employed. For instance, when steam cleaning services are utilised, the approximate drying time typically ranges from 5 to 7 hours. On the other hand, if dry cleaning services are used, the pillows will be dry immediately after the cleaning process or shortly thereafter.</Typography></li>
        <li>
          <Typography variant="h3">Do you guarantee that after pillow dry cleaning near me, all stains will be removed?</Typography>
          <Typography variant="body">Due to our extensive experience and ownership of some of the best equipment in the industry, we achieve high success rates in stain removal. However we cannot offer an absolute guarantee due to various factors beyond our control. These factors include:</Typography></li>
        <li>
          <p>The age of the stains;</p>
        </li>
        <li>
          <p>The nature of the substances responsible for the stains;</p>
        </li>
        <li>
          <p>Any prior mishandling of the stains.</p>
        </li>
        <Typography variant="body">Nevertheless, we are fully committed to exerting every possible effort to eliminate all stains from your pillows. Our methodology involves:</Typography>
        <li>
          <p>Utilising the best possible cleaning equipment;</p>
        </li>
        <li>
          <p>Applying a carefully selected range of premium detergents;</p>
        </li>
        <li>
          <p>Customising our approach to suit the specific type of pillow and the staining agent to ensure the best outcome.</p>
        </li>
        <li>
          <Typography variant="h3">How soon can I expect your cleaners to visit me?</Typography>
          <Typography variant="body">We will try to book you an appointment for a pillow cleaning service as soon as possible. Usually, we are fully booked for the following three days, but there are exceptions at times.</Typography></li>
        <li>
          <Typography variant="h3">Can you give me a dry cleaning pillows price over the phone or do you need a viewing in person?</Typography>
          <Typography variant="body">Yes, we can give you a quote over the phone, there is no need for us to visit your property. You can also receive a quote for the pillow cleaning services online.</Typography></li>
        <li>
          <Typography variant="h3">What payment methods do you accept for your pillow dry cleaning near me?</Typography>
          <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments directly handed to our team.</Typography></li>
        <li>
          <Typography variant="h3">Can your company provide me with an invoice?</Typography>
          <Typography variant="body">Yes, we will either send you an invoice via email or any method of your choice.</Typography></li>
        <li>
          <Typography variant="h3">Are you qualified for professional pillow cleaning?</Typography>
          <Typography variant="body">Yes, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a> and of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s acknowledged industry qualification.</Typography></li>
        <li>
          <Typography variant="h3">How long have you been in the pillow cleaning business?</Typography>
          <Typography variant="body">Since 2012, we've actively participated in the pillow and upholstery cleaning industry. Over the years, we've encountered various types of carpets, rugs, upholstery, and stains from both commercial and residential clients, accumulating valuable experience. Our commitment to delivering top-notch upholstery cleaning services has driven us to enhance our performance through the following:</Typography></li>
        <li>
          <p>Continuously upgrading our equipment and machinery with superior alternatives whenever available;</p>
        </li>
        <li>
          <p>Consistently evaluating and improving our cleaning products to ensure the highest quality of service;</p>
        </li>
        <li>
          <p>Dedication to expanding our knowledge and skills through ongoing professional courses and training, always seeking to enhance our competence.</p>
        </li>
        <li>
          <Typography variant="h3">Can you add a discount on the dry clean pillow cost?</Typography>
          <Typography variant="body">Our professional pillow cleaning services are known for their top quality, utilising the most effective equipment and a range of premium cleaning products. What sets us apart even further is that our dry cleaning pillows prices are not only highly competitive but also rank among the most attractive in the market.</Typography>
          <Typography variant="body">We strongly recommend combining services in order to see the most favourable dry-cleaning pillows prices. You will find out that bundling all the services you require is more cost-efficient compared to individual service requests. This cost-effectiveness is due to the initial cost and extra charges with each technician visit, because of factors like travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography></li>
        <li>
          <Typography variant="h3">Can you get pillows dry-cleaned?</Typography>
          <Typography variant="body">Yes, pillows can be dry-cleaned. Particular types of pillows, including down and synthetic-filled pillows, can be dry cleaned. Although not as efficient as steam cleaning, dry cleaning is a suitable method for cleaning pillows when they have delicate fabrics or intricate designs, or are filled with materials that may not fare well with a water-based cleaning method.</Typography>
        </li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">Is it better to dry clean or wash down pillows?</Typography>
          <Typography variant="body">Although a water-based washing method is the most efficient way to clean pillows, as it can remove dirt, dust, and allergens, pillows made from delicate fabrics, such as silk and velvet, will require dry cleaning. You can check the specific materials used in the pillows and contact a professional pillow cleaning company to decide what method should be used on your pillows.</Typography></li>
        <li>
          <Typography variant="h3">How do you deep clean pillows?</Typography>
          <Typography variant="body">We recommend that you consider booking pillow cleaning services. Such services will ensure that your pillows will be free of dust, dirt, pollen, germs and mites, which can lead to potential health problems. Due to our powerful equipment, we are able to deliver the results you desire within a fraction of time.</Typography>
          <Typography variant="body">If you are wondering which services best suit you or are looking forward to booking professional pillow cleaning services, feel free to contact us at any suitable time for you.</Typography></li>
        <li>
          <Typography variant="h3">How often should you wash pillows?</Typography>
          <Typography variant="body">The frequency of cleaning your pillows depends mainly on factors like how fast the pillows soil and how often they are being used. On average, pillows should be cleaned at least twice a year. However, if you have pets or children, or if they easily stain, we recommend using pillow cleaning services more often. Regular professional cleaning not only keeps your pillows looking their best but also helps maintain a healthy and clean living atmosphere in your home.</Typography></li>
        <li>
          <Typography variant="h3">Can you put pillows in the washing machine?</Typography>
          <Typography variant="body">Most pillows can be put in the washing machine. Cool water and a mild detergent should be used for minimum risk of damage. then dry on low heat. High temperatures can also damage the pillow, depending on the type of the fabric in the pillow. In that case, it should be dried on low, to no heat. For best results and a stress-free process it’s advisable to hire a professional cleaning company to take care of your pillows.</Typography></li>
        <li>
          <Typography variant="h3">How much does it cost to get pillows dry-cleaned?</Typography>
          <Typography variant="body">How much to dry clean a pillow costs depends on a number of factors. Some of them are:</Typography></li>
        <li>
          <p>The quantity and size of the pillows;</p>
        </li>
        <li>
          <p>How soiled they are;</p>
        </li>
        <li>
          <p>The fabric of the pillows.</p>
        </li>
          <Typography variant="body">To learn more, check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">dry cleaning pillows prices</a>.</Typography>
        <li>
          <Typography variant="h3">Are pillows worth washing?</Typography>
          <Typography variant="body">Yes, it is very advisable to wash your pillows at least every six months. Professional pillow cleaning is highly effective and works exceptionally well. This is made possible by the expertise, equipment, products, and methods employed by expert companies. A professional pillow cleaning company like "Fine Carpet Cleaning Ltd." offers top-quality cleaning services that are particularly effective in tackling stubborn stains, eliminating odours, and eradicating germ buildup. These results are often unattainable through regular cleaning methods.</Typography></li>
        <li>
          <Typography variant="h3">What happens if you don't wash your pillow?</Typography>
          <Typography variant="body">Pet dander, dust mites, dirt and oils from your skin easily build up on your pillow. These things can possibly trigger allergies. Pillows can double in weight over their lifespan, due to everything they absorb. Many people throw out their old pillows when it can be more cost-effective to have them professionally cleaned instead. Our professional pillow cleaning process includes fluffing, sanitising and deodorising.</Typography></li>
        <li>
          <Typography variant="h3">How do you wash a pillow without ruining it?</Typography>
          <Typography variant="body">The quickest and safest way is to call in a professional pillow cleaning company. Due to their years of experience and professional equipment, professionals will know how to take the best care of your pillows. We at “Fine Carpet Cleaning” Ltd. use special equipment and premium products and have undergone professional training to ensure that your pillows will be taken care of in the best way possible.</Typography></li>
        <li>
          <Typography variant="h3">What is the easiest way to clean a pillow?</Typography>
          <Typography variant="body">The most expedient and secure approach is to contact a professional pillow cleaning company. With their extensive experience and specialised equipment, experts will adeptly attend to your pillows. At “Fine Carpet Cleaning” Ltd. use the following methods to guarantee optimal care for your pillows:</Typography></li>
        <li>
          <p>We employ special equipment;</p>
        </li>
        <li>
          <p>We use premium products;</p>
        </li>
        <li>
          <p>We have undergone professional training.</p>
        </li>
      </ul>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Pillow cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our pillow cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform pillow cleaning services. Pillows act as a magnet for sloughed skin, mould, mildew, fungus and dust mites. They can <strong>double</strong> in weight over their lifespan, due to everything they pick up. Many people throw out their old pillows when it can be more cost-effective to have them professionally cleaned instead. Our professional pillow cleaning process includes fluffing, sanitising and deodorising. Other advantages are:</p>
        <ul>
          <li class="ml--5">
            <p>Effectively removing stains from spills, pet accidents, and everyday use;</p>
          </li>
          <li class="ml--5">
            <p>Extending the life of your pillows;</p>
          </li>
          <li class="ml--5">
            <p>Removing allergens and dust mites, which will have health benefits for you and your family;</p>
          </li>
          <li class="ml--5">
            <p>Eliminating odours, made from spills, pets or smoking, leaving your pillows smelling fresh;</p>
          </li>
          <li class="ml--5">
            <p>Clean pillows look better and can make your entire room look cleaner and more inviting;</p>
          </li>
          <li class="ml--5">
            <p>Professional pillow cleaning experts have the tools and expertise to get the job done efficiently and effectively;</p>
          </li>
          <li class="ml--5">
            <p>Professional pillow cleaning experts will tailor their methods to the specific type of pillow, ensuring the best results without damage.</p>
            <Typography variant="body">At “Fine Carpet Cleaning” Ltd. our cleaning technicians can handle even the most delicate pillows. Our cleaners are able to remove all tough stains and maintain their colour without using abrasive chemicals.</Typography>
            <Typography variant="body">In order to be sure that the professional pillow cleaning process will go as planned, a test of the product and the cleaning method shall be performed on a small area of your pillow. That way we make sure that the cleaning product is best suited for your pillows.</Typography>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our pillow cleaning services in London:</p>

        <ul>
          <li class="ml--5">
            <p>You call us.</p>
          </li>
          <li class="ml--5">
            <p>We give you recommendations on what services are most suitable for your specific situation.</p>
          </li>
          <li class="ml--5">
            <p>You receive a price quote.</p>
          </li>
          <li class="ml--5">
            <p>If our terms meet your satisfaction, we set an appointment for you.</p>
          </li>
          <li class="ml--5">
            <p>Our team's cleaners will visit your property and perform the pillow cleaning services.</p>
          </li>

        </ul>
        <h3>What do we offer:</h3>
        <p>Other services we offer are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services">Upholstery cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/sofa">Sofa cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/sofa/leather">Leather sofa cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/furniture">Furniture cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/mattress">Mattress cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-stain-removal-services">Upholstery stain removal</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/stain-protection-services">Upholstery stain protector</a></li>
        </ul>

        <h3>The process of our pillow cleaning services:</h3>
        <ul>
          <li class="ml--5"><p>First, we establish exactly what cleaning detergents and tools need to be used for the specific fabric and type of pillow.</p></li>
          <li class="ml--5"><p>Second, we use a vacuum cleaner to clean the fabric. This removes any loose dirt, dry soils and dust.</p></li>
          <li class="ml--5"><p>We then apply heavy duty pre-spray, which lifts oily dirt and pollutants from your pillows, after which they can be safely extracted using our high-performance extraction machines.</p></li>
          <li class="ml--5"><p>The cleaning solution is worked onto the pillow. This loosens the soiling, making it ready for extraction.</p></li>
          <li class="ml--5"><p>Pure softened hot water (which reaches a maximum of 135 Degrees) is gently injected deeply into the fibres. This releases the soil and allows our powerful hot water extraction machine to effectively remove it. Any remaining spots and stains are worked on individually using special detergents and products.</p></li>
          <li class="ml--5"><p>Finally, we rinse and extract again to ensure no chemical residues are left behind.</p></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our pillow cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Highly-efficient extractors</h3>
            <Typography variant="body">At "Fine Carpet Cleaning Ltd," we utilise some of the finest portable machines globally in our pillow cleaning service. After rigorous testing, we've carefully selected top brands available in the UK market, including "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>" and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>". Moreover, our in-house engineer implements significant enhancements to optimise their performance.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
            <Typography variant="body">We use a high-filtration twin motor vacuum cleaner, which we believe is the best one on the market. It is designed for high-performance expert carpet cleaning. One of the twin-motors pounds at the carpet while the other one sucks out any loose dirt, dry soil and dust.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning products</h3>
            <Typography variant="body">We use an extensive array of cleaning products thanks to a thorough testing of nearly all cleaning products available on the market. This diverse selection enables our technicians to choose the most fitting detergents based on factors such as:</Typography>
          </li>
        </ol>
        <ul>
          <li class="ml--5">
            <p>The fabric of the pillow;</p>
          </li>
          <li class="ml--5">
            <p>The level of soiling;</p>
          </li>
          <li class="ml--5">
            <p>The type of stains to be treated.</p>
            <Typography variant="body">With our cutting-edge cleaning equipment and premium products, we assure a professional pillow cleaning of the highest quality.</Typography>
            </li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our pillow cleaning services</h2>

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

      <h2 class="line-height-12 md-line-height-14">Video from our pillow cleaning services</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Prices of our pillow cleaning services</h2>

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

      <h2 class="line-height-12 md-line-height-14">Our pillow cleaning services specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use stain protector</h3>
            <Typography variant="body">Our cleaning specialist suggests considering the addition of a stain protector to your carpets and upholstery whenever it's feasible. This simple step can result in significant cost savings on stain removal services. If you're curious, we encourage you to explore the advantages of <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection services</a>.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Experience the benefits of our stain removal service</h3>
            <Typography variant="body">According to our specialist, it's highly advisable to enlist the services of a professional stain removal company if your carpet or upholstery has been stained rather than attempting to clean it yourself. This is because trying to clean the stain or allowing it to dry can lead to fabric damage, making complete stain removal unlikely. In fact, such stain removal attempts may seal the stain, making it even more challenging, if not impossible, for a professional upholstery cleaning company to remove it. Therefore, scheduling a stain removal service can potentially save your valuable carpet or upholstery, which could be worth a significant amount.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Explore our range of services</h3>
            <Typography variant="body">Our pillow cleaners offer a range of services, including carpet cleaning, rug cleaning, and more. Our team takes pride in providing comprehensive solutions, so don't miss the opportunity to explore the full extent of our expertise and make informed decisions about your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Combine services</h3>
            <Typography variant="body">Our professional pillow cleaning experts recommend combining multiple services into one appointment for the best cost efficiency. Choosing to have technicians visit separately may lead to extra costs like travel time, parking charges, and the management of heavy equipment during loading and unloading, making individual appointments less financially advantageous.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Keep clean for health</h3>
            <Typography variant="body">It's essential for your carpets and upholstery to be kept clean. These items can accumulate substantial amounts of dust, microorganisms, and dirt particles that might lead to health issues. Neglecting their care can increase the risk of various reactions, skin problems, and allergies. To prevent these issues, our specialist recommends using professional cleaning services at least once a year. If you own pets, have children or if your upholstery is easily stained, we advise booking such services even more frequently.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews of our pillow cleaning services</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our pillow cleaning services</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/services" class="c-paper font-size-5">SERVICES</a></button>
        <button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>
      </div>



    </>
  );
}
