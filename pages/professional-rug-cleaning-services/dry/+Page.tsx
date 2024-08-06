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
          <Typography variant="h3">Will you fee me if I cancel the dry rug cleaning service?</Typography>
          <Typography variant="body">Yes, we do have a cancellation fee, but it is only applied if you cancel on the day of the cleaning. In that case, you will lose your deposit.</Typography></li>
        <li>
          <Typography variant="h3">Do I need to pay for the congestion / parking charge?</Typography>
          <Typography variant="body">Yes, we request that you arrange a suitable parking space for our vehicles within close proximity of the property since we carry heavy equipment, and to cover any parking/congestion expenses if applicable.</Typography></li>
        <li>
          <Typography variant="h3">Do I need to move furniture before the area rug dry cleaning near me?</Typography>
          <Typography variant="body">We kindly ask for your assistance in relocating small, fragile, or valuable furniture items, such as lamps and ornaments, for insurance reasons. If possible, please position these items in a secure area before our team's arrival, one that will remain undisturbed during the cleaning process.</Typography>
          <Typography variant="body">We are more than happy to assist in moving other lightweight furniture for your convenience, such as chairs, armchairs, and tables during the cleaning. Once the cleaning is completed, we will return them to their original positions.</Typography>
          <Typography variant="body">In cases where heavy furniture, such as sofas, beds, wardrobes, or cupboards, needs to be moved, an additional fee will apply. This accounts for the extra time and effort required by our technician, who will receive appropriate compensation. Our primary goal is to ensure a stress-free experience for you throughout the entire process.</Typography></li>
        <li>
          <Typography variant="h3">What happens if I live on the 4th floor or above and I have no lift?</Typography>
          <Typography variant="body">Because of the substantial weight of our equipment, which exceeds 50 kg, we add an extra charge for every additional floor that necessitates manual carrying. This charge is essential, as this process often consumes a considerable amount of time and can result in quicker fatigue for our technicians. Consequently, on such days, we may not be able to accomplish as much work as our usual capacity.</Typography></li>
        <li>
          <Typography variant="h3">Are you insured?</Typography>
          <Typography variant="body">Yes, our cleaning company is fully insured.</Typography></li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">What happens if your cleaner damages anything while performing area rug dry cleaning near me?</Typography>
          <Typography variant="body">We are fully insured and if anything is damaged, it will be fully covered by us.</Typography></li>
        <li>
          <Typography variant="h3">How long does the process of area rug dry cleaning near me take?</Typography>
          <Typography variant="body">The duration of the process depends mainly on:</Typography></li>
        <li>
          <p>How soiled the rug is;</p>
        </li>
        <li>
          <p>The size and quantity of the rugs;</p>
        </li>
        <li>
          <p>If a stain removal service is needed.</p>
        </li>
        <li>
          <Typography variant="h3">How long does it take for the carpet to get dry after a rug dry cleaning London is performed?</Typography>
          <Typography variant="body">Since the dry cleaning method uses a cleaning product that is in powder form and little to no water is involved in the cleaning process, the rug will be completely dry either immediately or almost immediately after the cleaning procedure has ended.</Typography></li>
        <li>
          <Typography variant="h3">How soon can I expect a cleaner to visit me?</Typography>
          <Typography variant="body">We will make every effort to secure an appointment for you as quickly as possible. Typically, our schedule is booked for the next three days, although there may be occasional exceptions.</Typography></li>
        <li>
          <Typography variant="h3">Can you give me a dry clean rug price quote over the phone or do you have to visit my property?</Typography>
          <Typography variant="body">Yes, we can provide you with an estimate over the phone. However, for commercial properties, a site visit may be necessary. Additionally, you have the option to get a dry clean rug price quote online.</Typography></li>
        <li>
          <Typography variant="h3">What payment methods do you accept?</Typography>
          <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments handed directly to our team.</Typography></li>
        <li>
          <Typography variant="h3">Can you provide me with an invoice for the dry cleaning rug cost?</Typography>
          <Typography variant="body">Yes, we will send you a receipt via email.</Typography></li>
        <li>
          <Typography variant="h3">Are you qualified?</Typography>
          <Typography variant="body">Yes, we are qualified and fully trained members of NCCA (National Carpet Cleaners Association) – the UK’s recognised industry qualification, and of Checkatrade.</Typography></li>
        <li>
          <Typography variant="h3">How long have you been in the rug cleaning business?</Typography>
          <Typography variant="body">We have been actively serving both commercial and residential clients in the carpet and rug cleaning sector since 2012. We have worked with a variety of carpets, rugs, upholstery, and stains throughout the years, and we've learned a lot. This knowledge, along with our dedication to quality, has inspired us to improve our services by:</Typography></li>
        <li>
          <p><strong>Constant Equipment Upgrades:</strong> As soon as better substitutes hit the market, we promptly swap out our old machinery and equipment for new ones.</p>
        </li>
        <li>
          <p><strong>Continuous Product Improvement:</strong> To keep our cleaning products at the forefront of industry standards, we evaluate and enhance them on a regular basis.</p>
        </li>
        <li>
          <p><strong>Constant Learning and Development:</strong> We actively seek out new professional courses and training opportunities in order to further our commitment to improving our knowledge and abilities. We are able to keep up with the most recent developments in the business thanks to this dedication.</p>
        </li>
        <li>
          <Typography variant="h3">Can you add a discount for me in the dry clean rug price quote?</Typography>
          <Typography variant="body">Our dry clean rug prices are the most appealing on the market, in addition to being extremely competitive, considering our dedication to providing high-quality cleaning services that entail the use of highly effective equipment and a wide selection of over 20 premium cleaning products. We recommend combining all the services you need to secure a better rate. This cost efficiency stems from the initial expenses and additional fees associated with each technician visit, which include factors like travel time, parking, and handling bulky equipment during loading and unloading.</Typography></li>
        <li>
          <Typography variant="h3">How much does a dry-cleaning rug cost?</Typography>
          <Typography variant="body">How much the dry cleaning rug costs depends on the following factors:</Typography></li>
          <li>
            <p>The quantity and size of the rugs;</p>
          </li>
          <li>
            <p>How soiled they are;</p>
          </li>
          <li>
            <p>The type and fabric of the rugs;</p>
          </li>
          <li>
            <p>How easy the access to the rug is.</p>
            <Typography variant="body">To learn more, take a look at our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">dry clean rug prices</a>.</Typography>
          </li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">Can sisal rugs be professionally cleaned?</Typography>
          <Typography variant="body">Yes, sisal rugs can be professionally cleaned through dry cleaning. We are specialised in sisal rug cleaning. We also offer synthetic rug cleaning, delicate or all-natural fibres rug cleaning, such as coir rug cleaning, sheepskin rug cleaning, jute rug cleaning service, professional cleaning viscose rug, professional silk rug cleaning, professional cowhide rug cleaning, hemp rug cleaning, bamboo silk rug cleaning, seagrass rug cleaning and more.</Typography></li>
        <li>
          <Typography variant="h3">Can a jute rug be professionally cleaned?</Typography>
          <Typography variant="body">Yes, jute rugs can be professionally dry-cleaned. Our company offers jute rug cleaning services. We also perform synthetic rug cleaning, delicate or all-natural fibres rug cleaning, such as coir rug cleaning, sheepskin rug cleaning, sisal rug cleaning, professional cleaning viscose rug, professional silk rug cleaning, professional cowhide rug cleaning, hemp rug cleaning, bamboo silk rug cleaning, seagrass rug cleaning and more.</Typography></li>
        <li>
          <Typography variant="h3">Can you steam clean a jute rug?</Typography>
          <Typography variant="body">Jute rugs are delicate and need to be treated via a dry cleaning method, as steam cleaning is not suitable for them and will create permanent damage to the rugs. Dry cleaning uses no to little water and a cleaning compound in powder form to ensure that the jute rug will be properly treated.</Typography></li>
        <li>
          <Typography variant="h3">Can you steam clean a cowhide rug?</Typography>
          <Typography variant="body">A cowhide rug is delicate and needs a dry cleaning treatment. Dry cleaning uses no to little water and a cleaning compound in powder form to ensure that your sisal rug will be carefully and properly treated. Water-based cleaning methods are not suitable for such materials and will create permanent damage to the rug.</Typography></li>
        <li>
          <Typography variant="h3">Can you steam clean a silk rug?</Typography>
          <Typography variant="body">Rugs, made from silk are very delicate and will not sustain from steam cleaning. In steam cleaning, high-temperature water and high pressure are used, which will damage the rug. We at “Fine Carpet Cleaning” Ltd. perform dry rug cleaning services for such cases and will ensure that your beautiful rug will be left fresh and clean.</Typography></li>
        <li>
          <Typography variant="h3">How much does it cost to dry clean a sheepskin rug?</Typography>
          <Typography variant="body">How much does it cost to dry clean a sheepskin rug depends on the following factors:</Typography></li>
        <li>
          <p>The quantity and size of the rugs;</p>
        </li>
        <li>
          <p>How soiled they are;</p>
        </li>
        <li>
          <p>How easy the access to the rug is.</p>
          <Typography variant="body">If you want to receive information on the specific cost to dry clean your sheepskin rug, do not hesitate to contact us at any suitable time for you.</Typography>
        </li>
      </ul>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Dry rug cleaning service</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our dry rug cleaning service</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform dry rug cleaning services. Dry rug cleaning services are effective, but it's important to note that they may not be as effective in deep cleaning heavily soiled rugs or in removing certain types of stains. Dry cleaning is used for cleaning finer and more delicate rugs, which can be easily damaged by water-based cleaning methods. Other benefits of using dry rug cleaning services are:</p>
        <ul>
          <li class="ml--5">
            <p>Being suitable for various types of rugs. We perform a wide range of services like, synthetic rug cleaning, as well as seagrass rug cleaning, coir, sisal rug cleaning, professional silk rug cleaning, professional cowhide rug cleaning, hemp rug cleaning, bamboo silk rug cleaning, sheepskin rug cleaning, jute rug cleaning service and professional cleaning viscose rugs;</p>
          </li>
          <li class="ml--5">
            <p>Little to no moisture is used, which requires little to no drying time;</p>
          </li>
          <li class="ml--5">
            <p>Rug dry cleaning London is performed quicker than other cleaning methods, making it a great solution for cleaning large facilities;</p>
          </li>
          <li class="ml--5">
            <p>There is no risk of shampoo residue being left behind or potential mould problems;</p>
          </li>
          <li class="ml--5">
            <p>Being a significantly faster method when compared to hot water extraction;</p>
          </li>
          <li class="ml--5">
            <p>Refreshing the rug and bringing back its colour.</p>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our dry rug cleaning services:</p>

        <ul>
          <li class="ml--5">
            <p>You get in touch with us.</p>
          </li>
          <li class="ml--5">
            <p>We offer personalised service recommendations based on your requirements.</p>
          </li>
          <li class="ml--5">
            <p>We provide you with a quotation.</p>
          </li>
          <li class="ml--5">
            <p>If our terms meet your satisfaction, we schedule an appointment at your convenience.</p>
          </li>
          <li class="ml--5">
            <p>Our skilled technician visits your property to carry out the dry rug cleaning service.</p>
          </li>

        </ul>
        <h3>What do we offer:</h3>
        <p>Other rug cleaning services we perform are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Rug steam cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Rug stain removal</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Rug stain protection</a></li>
        </ul>

        <h3>The process of our dry rug cleaning service:</h3>
        <ul>
          <li class="ml--5"><p>A powerful vacuum cleaner is used to clean the rug so that most of the dirt and grimy particles are extracted.</p></li>
          <li class="ml--5"><p>After that, a biodegradable cleaning compound is simmered onto the rug, which attracts dirt and grime and brings them to the surface.</p></li>
          <li class="ml--5"><p>Then a machine is used to agitate the cleaning compound into the fibres.</p></li>
          <li class="ml--5"><p>Finally, everything is vacuumed off, leaving the rug clean, fresh and dry.</p></li>
          <li class="ml--5"><p>If the area that needs to be cleaned is small, we may brush the cleaning powder into the carpet with a large brush by hand and then we will vacuum the area. We use this method for small spaces that don’t need the heavy equipment we would normally use, and the effect is the same, leaving the rug clean and fresh.</p></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our dry rug cleaning service</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Highly-efficient extractors</h3>
            <Typography variant="body">At "Fine Carpet Cleaning Ltd," we utilise some of the finest portable machines globally in our pillow cleaning service. After rigorous testing, we've carefully selected top brands available in the UK market, including "Mytee" and "Airflex." Moreover, our in-house engineer implements significant enhancements to optimise their performance.At "Fine Carpet Cleaning Ltd," we employ the most effective and cutting-edge cleaning equipment, along with premium products for our rug dry cleaning London. Our machines are recognized as some of the most powerful and efficient portable units globally.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Excellent standard device</h3>
            <Typography variant="body">The machine carefully chosen for our dry rug cleaning service, "SEBO BS 36,"  is professionally designed and specifically crafted for commercial use. Its counter-rotating brush brings dirt and debris to the surface for easy extraction, leaving your rug looking and feeling fluffy and fresh, thus extending its lifespan.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning products</h3>
            <Typography variant="body">For optimal results in our rug dry cleaning London, we extensively tested various cleaning products and selected the most efficient one - the "<a class="color-paper-link hover-color-paper-link-hover:hover" href="/https://envirodri.com/">Envirodri</a>" dry rug cleaning powder. This eco-friendly cleaning product is designed to attract and absorb dirt and soiling from all rug types, which is then vacuumed away, leaving behind cleaner, fresher, and newer-looking rugs.</Typography>
            <Typography variant="body">With our state-of-the-art cleaning equipment and premium products, we assure a high-quality rug dry cleaning London service.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our dry rug cleaning service</h2>

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

      <h2 class="line-height-12 md-line-height-14">Video from our dry rug cleaning service</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Our dry cleaning rug prices</h2>

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

      <h2 class="line-height-12 md-line-height-14">Our dry rug cleaning service specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use stain protector</h3>
            <Typography variant="body">Our expert in rug dry cleaning London recommends considering the addition of a stain protector to your rugs and upholstery whenever possible. This step can lead to substantial savings on stain removal services. For more insights into the benefits of stain protection, we suggest visiting our dedicated <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">stain protection service</a>page.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Try professional stain removal</h3>
            <Typography variant="body">It's highly advisable to book a professional stain removal service if your rug or upholstery has been stained. Cleaning attempts or allowing the stain to dry can result in fabric damage, making complete removal challenging. In some cases, amateur attempts can even seal the stain, complicating its removal by professionals. Opting for professional <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">stain removal services</a> can help preserve the value of your carpet, rug or upholstery.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Explore our comprehensive services</h3>
            <Typography variant="body">Our specialists suggest regular vacuuming, regardless of the fabric type of the rug. Using an upright vacuum cleaner can effectively remove deeply embedded dust from carpet fibres. However, nowadays everyone is in a hurry, so if you don’t have time take a look at our wide range of services encompassing upholstery cleaning, carpet cleaning, and more. Explore the full extent of our expertise to make well-informed decisions about your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Save time and money</h3>
            <Typography variant="body">Our professional dry rug cleaning service experts suggest bundling multiple services into a single appointment for cost savings. Separate visits by technicians incur extra expenses such as travel time, parking, and managing heavy equipment during loading and unloading, making individual appointments less economical.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy the health benefits</h3>
            <Typography variant="body">Maintaining the cleanliness of your carpets, rugs, and upholstery is crucial for your health. These items can accumulate dust, microorganisms, and dirt, potentially causing allergies, respiratory difficulties, and skin problems. To address these concerns, our cleaning specialist recommends booking professional cleaning services, ideally at least once a year, or more frequently for rugs receiving high foot traffic.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews for our dry rug cleaning service</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our dry rug cleaning service</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/services" class="c-paper font-size-5">SERVICES</a></button>
        <button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>
      </div>



    </>
  );
}
