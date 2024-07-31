import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import "solid-slider/slider.css";
import { Component, createSignal, Show } from 'solid-js';
import RiYoutubeFill from '~icons/ri/youtube-fill';
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { createSlider, Slider, SliderButton, SliderProvider } from 'solid-slider';
import { RotatingBanners } from '../../../components/RotatingBanners';

const GalerrySliderDesktop = () => {
  const options = { duration: 1000 };
  const [slider, { current, next, prev, moveTo }] = createSlider(options);
  return (
    <SliderProvider>
      <div class="max-w-1000px m-auto position-relative hidden md-block">
        <Slider options={{ loop: true, slides: { perView: 3, spacing: 10 } }}>
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class="" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class="" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class="" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class="" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class="" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class="" />
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
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class="" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class="" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class="" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class="" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class="" />
          <img src="/assets/Професионално почистване на филтри на аспирации на ресторанти.jpg" class="" />
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

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Residential carpet cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our residential carpet cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>“Fine Carpet Cleaning” Ltd. performs residential carpet cleaning services in all of London. We have years of experience in residential carpet cleaning for all homes and deliver a deeper clean that is healthier for you, your family and your pets. Home carpet cleaning is beneficial for the following reasons:</p>
        <ul>
          <li class="ml--5">
            <p>It extends the life of your carpets;</p>
          </li>
          <li class="ml--5">
            <p>Professional home carpet cleaning can effectively remove stains;</p>
          </li>
          <li class="ml--5">
            <p>There is less stress for new home buyers or tenants;</p>
          </li>
          <li class="ml--5">
            <p>Carpet house cleaning services save you time;</p>
          </li>
          <li class="ml--5">
            <p>It is significantly cheaper to do regular maintenance than buying a new carpet;</p>
          </li>
          <li class="ml--5">
            <p>House carpet cleaning will prolong the life of your carpet;</p>
          </li>
          <li class="ml--5">
            <p>Residential carpet cleaning will maintain the look of your carpet;</p>
          </li>
          <li class="ml--5">
            <p>Domestic carpet cleaning will maintain the hygiene of your carpet (which brings you health benefits).</p>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our residential carpet cleaning services:</p>

        <ul>
          <li class="ml--5">
            <p>You make contact with us.</p>
          </li>
          <li class="ml--5">
            <p>We arrange an on-site inspection of the area you wish to have cleaned, offering suggestions on the most suitable services for your needs.</p>
          </li>
          <li class="ml--5">
            <p>Following the inspection, you'll receive a quote for professional domestic carpet cleaning.</p>
          </li>
          <li class="ml--5">
            <p>If our terms align with your requirements, we will proceed to schedule an appointment at your convenience.</p>
          </li>
          <li class="ml--5">
            <p>A proficient technician from our team will subsequently visit your property to carry out professional residential carpet cleaning.</p>
          </li>
        </ul>

        <h3>What do we offer:</h3>
        <p>The home and carpet cleaning services we offer are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/steam">Steam carpet cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/dry">Dry carpet cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Rug cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Upholstery cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Stain protection</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Stain removal</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our residential carpet cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <p>At "Fine Carpet Cleaning" Ltd., we use an array of premium cleaning equipment and materials to guarantee the utmost quality in our home carpet cleaning in London:</p>
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Top-notch equipment</h3>
            <p class="ml--5">Our machines are some of the most potent and efficient portable units on a global scale. After conducting rigorous testing of almost all machine brands available in the UK market, we've opted for the best options, including "Mytee," a prominent US manufacturer, and "Airflex," one of the leading UK manufacturers. To further enhance their performance, our in-house engineer fine-tunes and modifies these machines to guarantee a perfectly executed house carpet cleaning service in London.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
            <p class="ml--5">Within our carpet commercial cleaning equipment, we utilize a high-filtration twin-motor vacuum cleaner, regarded as the finest available. Specifically designed for high-performance carpet cleaning home services, this vacuum cleaner incorporates two motors: one agitates the carpet, while the other adeptly extracts loose dirt, dry soil, and dust.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Thoughtfully chosen cleaning solutions</h3>
            <p class="ml--5">Our inventory comprises over 20 diverse cleaning products sourced from renowned brands in both the UK and US markets for our whole house carpet cleaning. The selection process involves thorough testing, and we've handpicked products from names such as "Alltec," "Prochem," "Chemspec," "Solution World of Clean," and "TMF." This wide range empowers our technicians to select the most suitable detergents for each situation, considering factors such as:</p>
            <ul class="ml--5" style="list-style: initial;">
              <li class="ml--5">
                <p>The fabric and type of the carpet;</p>
              </li>
              <li class="ml--5">
                <p>The extent of soiling on the carpet;</p>
              </li>
              <li class="ml--5">
                <p>The nature of stains requiring removal.</p>
              </li>
            </ul>
            <p class="ml--5">This approach ensures the provision of the most professional house cleaning and carpet cleaning services.</p>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our residential carpet cleaning services in London</h2>

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

      <h2 class="line-height-12 md-line-height-14">Video from our residential carpet cleaning services in London</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Residential carpet cleaning prices</h2>

      <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-8 text-justify font-size-4.4" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);"><div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
        <br></br>
        Now you can request pet hair removal as an additional service to the booked cleaning for a small extra charge. Don't forget to request it when booking because telling us at the moment of cleaning causes delays for the technicians and messes up the schedule.<br></br>
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

      <h2 class="line-height-12 md-line-height-14">Our residential carpet cleaning services specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use a stain defender</h3>
            <p class="ml--5">Our expert in domestic carpet cleaning in London recommends considering the addition of a stain protector to your carpet and upholstery, whenever it's within your budget. This simple step can result in significant savings on professional stain removal services. If you're interested, we encourage you to <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">explore the advantages of utilizing stain protection services</a>.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Think about the stain removal service option</h3>
            <p class="ml--5">As per our specialist in carpet and house cleaning services, it is highly recommended to engage a professional stain removal company if your carpet or upholstery has incurred stains, rather than attempting to clean it. This is because trying to clean the stain yourself or letting it dry can cause damage to the fabric, making complete stain removal less likely. In fact, such attempts may actually seal the stain, making it even more challenging, if not impossible, for a professional house and carpet cleaning company to effectively remove it. Therefore, scheduling a professional stain removal service from an experienced carpet cleaning domestic company can potentially safeguard your valuable carpet or upholstery, which may hold significant value.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Exploring Our Full Range of Services</h3>
            <p class="ml--5">We provide a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/services">wide variety of services</a> that extend beyond carpet cleaning, including upholstery cleaning, rug cleaning, and more. Our team is dedicated to offering a wide array of solutions, so don't miss the opportunity to explore the full breadth of our expertise and make well-informed decisions regarding your cleaning requirements in house carpet cleaning.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Combining Carpet Cleaning Services for Maximum Value</h3>
            <p class="ml--5">To cut down on costs, our professional residential carpet cleaning expert suggests bundling multiple services into one appointment. It is more economical to have all required services completed together instead of separately. This way, you can avoid incurring extra expenses related to each technician visit, including travel time, parking charges, and equipment management during loading and unloading.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Understand the importance of clean carpets</h3>
            <p class="ml--5">Maintaining the cleanliness of your carpet, carpet floor coverings, and upholstery is essential for promoting good health. These items can accumulate a significant amount of dust, microorganisms, and dirt particles, which may contribute to various health problems. Neglecting their care can increase the risk of experiencing allergic reactions, skin issues, and allergies. To prevent these issues, our home carpet cleaning specialist recommends using professional commercial carpet cleaning services at least once a year. For areas with high foot traffic, more frequent cleaning is highly advisable.</p>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews for our residential carpet cleaning</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our residential carpet cleaning services</h2>
      <div class="bodytext first-faq-section last-expanded mt-20 py-8 pl-4 pr-8 md-px-10 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ul>
          <li class="green-dot-listed-item">
            <h3>Do you have a cancellation fee?</h3>
            <p class="ml--5">Yes, if you cancel on the day of the residential carpet cleaning you will lose your deposit.</p></li>
          <li class="green-dot-listed-item">
            <h3>Do I need to pay for the congestion / parking charge?</h3>
            <p class="ml--5">Yes, we kindly ask the client to make arrangements for a convenient parking space for our vehicles near the property. If there are any parking or congestion charges associated with this, we ask the client to cover these expenses if they are applicable.</p></li>
          <li class="green-dot-listed-item">
            <h3>Do I need to move furniture before professional home carpet cleaning?</h3>
            <p class="ml--5">We would greatly appreciate your cooperation in relocating small, delicate, or valuable furniture items like lamps and ornaments before the home carpet cleaning services, primarily for insurance purposes. If possible, please position these items in a secure area that won't be affected during the condo carpet cleaning process. We are more than willing to assist in moving other lightweight furniture, such as chairs, armchairs, and tables during the cleaning, and we will return them to their original positions once the cleaning is completed. However, if there is a need to move heavy furniture items like sofas, beds, wardrobes, and cupboards, an additional charge will apply. This extra fee accounts for the additional time and effort required by our technician, who will be duly compensated. Our main goal is to ensure a stress-free experience for you throughout the entire on-site carpet cleaning process.</p></li>
          <li class="green-dot-listed-item">
            <h3>What if I live on a high floor and I have no lift?</h3>
            <p class="ml--5">Due to the substantial weight of our equipment for retail carpet cleaning, which exceeds 50 kilograms, an additional fee is applied for each additional floor that requires manual transportation. This is necessary because manually carrying the heavy equipment up multiple flights of stairs is a time-consuming task, and it can cause our technicians to fatigue more quickly. Consequently, our overall productivity for the day may be reduced compared to our standard output.</p></li>
          <li class="green-dot-listed-item">
            <h3>Are you insured?</h3>
            <p class="ml--5">Yes, we are fully insured.</p></li>
        </ul>
      </div>

      <div class="read-more-click-to-expand-1 to-be-expanded">
        <button class="read-more-toggle-button my-6 mx-auto uppercase b-none b-rd-1 py-3 px-7 bg-paper hover-bg-#f7f7f7:hover font-600 font-size-5 whitespace-nowrap" style="letter-spacing: 0.02rem; box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);" onClick="toggleExpand(1)">Read more</button>

        <ul class="hidden-questions-and-answers">
          <li class="hide-if-not-expanded">
            <h3>What happens if your cleaner damages anything while performing residential carpet cleaning services?</h3>
            <p class="ml--5">We are fully insured and if an accident happens in the process of the carpet and home cleaning services we are fully covered.</p></li>
          <li class="hide-if-not-expanded">
            <h3>How long does the process of the house carpet cleaning services take?</h3>
            <p class="ml--5">The time it takes for the domestic carpet cleaning services process primarily hinges on two factors:</p></li>
          <li class="ml--5">
            <p>The level of soiling on the carpet;</p>
          </li>
          <li class="ml--5">
            <p>Whether stain removal treatments are necessary.</p>
          </li>
          <li class="hide-if-not-expanded">
            <h3>How long does it take for the carpet to get dry after a domestic carpet cleaning in London is performed?</h3>
            <p class="ml--5">The drying time of the carpet after a whole house carpet cleaning varies depending on the carpet type and the cleaning method employed. For instance, when the steam cleaning method is utilized, the approximate drying time typically ranges from 7 to 9 hours. On the other hand, if the dry cleaning method is chosen, the carpet will be dry immediately after the cleaning process or shortly thereafter.</p>
            <p class="ml--5">If you are having trouble deciding which residential carpet cleaning services will best suit you or are looking for the best residential carpet cleaning company, you can contact us at any suitable time for you to get professional house and carpet cleaning advice.</p></li>
          <li class="hide-if-not-expanded">
            <h3>Do you guarantee that after private carpet cleaning services my carpet all stains will be removed?</h3>
            <p class="ml--5">Regrettably, we cannot offer an absolute guarantee due to various factors that are beyond our control. These factors comprise:</p></li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The age of the stains;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The nature of the substances responsible for the stains;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The type and fabric of the carpet;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Any prior mishandling of the stains.</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="hide-text-if-not-expanded">Nevertheless, we are fully committed to make every possible effort to eliminate all stains from your carpet. Our approach involves:</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Employing state-of-the-art equipment for house and carpet cleaning services;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Applying a selection of premium detergents meticulously chosen for the job;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Customizing our approach of the domestic carpet cleaning to match the specific type of carpet and the staining agent to achieve the best possible results.</p>
          </li>
          <li class="hide-if-not-expanded">
            <h3>How soon can I expect a cleaner to visit me for a home carpet cleaning in London?</h3>
            <p class="ml--5">We will make every effort to schedule a residential carpet cleaning appointment for you at your earliest convenience. Typically, our bookings are fully reserved for up to three days in advance, although occasional exceptions may arise.</p></li>
          <li class="hide-if-not-expanded">
            <h3>Can you give me a quote over the phone for a carpet cleaning home service or do you need to visit my property?</h3>
            <p class="ml--5">Certainly, we can provide you with a phone estimate, and there is no necessity for us to conduct an on-site visit. However, it's important to note that commercial properties may require an in-person site visit. Additionally, you have the option to obtain a carpet cleaning quote for steam extraction services online.</p></li>
          <li class="hide-if-not-expanded">
            <h3>What payment methods do you accept for your carpet and house cleaning services?</h3>
            <p class="ml--5">We accept debit/credit cards, and cash payments directly to our team.</p></li>
          <li class="hide-if-not-expanded">
            <h3>Can you provide me with an invoice for the home and carpet cleaning services?</h3>
            <p class="ml--5">Yes, we will either send you a receipt via email or via any method of your choice.</p></li>
          <li class="hide-if-not-expanded">
            <h3>Are you qualified for carpet and home cleaning services?</h3>
            <p class="ml--5">Yes, we are certified and have received comprehensive training as members of Checkatrade and of the NCCA (National Carpet Cleaners Association), the recognized industry qualification in the UK.</p></li>
          <li class="hide-if-not-expanded">
            <h3>How long have you been in the carpet cleaning domestic business?</h3>
            <p class="ml--5">We have a solid history in the professional residential carpet cleaning industry, dating back to 2012. Throughout these years, we've worked with a diverse range of carpets, rugs, upholstery, and various stains from both commercial and residential clients. This extensive experience has driven us to continually enhance our carpet house cleaning services. We achieve this by:</p></li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Consistently upgrading our equipment and machinery with superior alternatives whenever they become available;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Regularly testing and improving our selection of cleaning products;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Dedication to expanding our knowledge and competence by actively participating in additional professional courses and training. Our relentless pursuit of perfection has allowed us to refine our house and carpet cleaning services over the years.</p>
          </li>
          <li class="hide-if-not-expanded">
            <h3>Can you give me a discount for the professional domestic carpet cleaning?</h3>
            <p class="ml--5">Our house cleaning and carpet cleaning services stand out for their top-quality results, thanks to the use of the most effective equipment and over 20 premium cleaning products.
              <br></br>
              As a result, our full house carpet cleaning prices are not only highly competitive but also some of the most attractive in the market. Bundling all the services you require proves to be more cost-effective compared to individual service visits. This is because of the initial high house carpet cleaning cost and additional charges for each technician visit, factoring in travel time, parking, and the handling of heavy equipment during loading and unloading.</p></li>
          <li class="hide-if-not-expanded">
            <h3>Can you walk on the carpet after a home carpet cleaning?</h3>
            <p class="ml--5">It depends on the method used. After a steam carpet cleaning it is recommended that you try to stay off the freshly steam-cleaned carpets until they are dry – about 7-9 hours. If you can not avoid walking over your damp carpet before it is dry, do it with caution. When you transition from carpet to another hard surface, like tile or hardwood, it can be very slippery.</p></li>
          <p class="ml--5">If a dry cleaning method has been applied, the carpet or rug will be completely dry immediately after the domestic carpet cleaning has ended or shortly thereafter.</p>
          <li class="hide-if-not-expanded">
            <h3>How often should carpets go through a professional domestic carpet cleaning?</h3>
            <p class="ml--5">House carpet cleaning depends mainly on factors like how fast the carpet soils. On average, a carpet should be cleaned at 12-month intervals. However, if you have pets, children, high traffic on the carpet, a smoking habit or if you stain it a lot, we recommend using carpet and house cleaning services more often than that. Feel free to contact us anytime in order to get home carpet cleaning in London or advice.</p>
          </li>
          <li class="hide-if-not-expanded">
            <h3>Do carpet house cleaning services remove stains?</h3>
            <p class="ml--5">It depends on the residential carpet cleaning method being used. For example, steam cleaning is highly effective in removing deep-down stains, dirt, and grime, while also eliminating bacteria and removing dust mites, allergens, mould, pet dander, and unpleasant odours. However, certain stubborn stains, such as extremely old ones or those that have been treated improperly, pose a significant challenge to complete elimination, even with expert assistance.</p>
            <p class="ml--5">Dry carpet cleaning is not effective in removing stains, but it refreshes the carpet and brings back its colour. This service is used for cleaning finer, more delicate and natural carpets and rugs, which are very vulnerable to water damage.</p>
            <p class="ml--5">Fortunately, due to our extensive experience and utilisation of top-notch equipment, we at “Fine Carpet Cleaning Ltd.” have achieved remarkable success rates in stain removal. Nevertheless, we cannot offer a guarantee that every stain can be completely eradicated. Rest assured, we will evaluate the stain and inform you during the quotation process about our confidence in achieving its removal.</p>
          </li>

          <div class="read-more-click-to-expand-2">
            <button class="read-more-toggle-button my-6 mx-auto uppercase b-none b-rd-1 py-3 px-7 bg-paper hover-bg-#f7f7f7:hover font-600 font-size-5 whitespace-nowrap" style="letter-spacing: 0.02rem; box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);" onClick="toggleExpand(2)">Read more</button>

            <ul class="hidden-questions-and-answers">
              <li class="hide-if-not-expanded">
                <h3>How often should carpets be cleaned with pets?</h3>
                <p class="ml--5">We recommend that pet owners seek professional home carpet cleaning services at least once or twice per year. Cleaning when the seasons change is an easy way to remember when it's time to deep clean your carpets.</p></li>
              <li class="hide-if-not-expanded">
                <h3>How much does a whole house carpet cleaning cost?</h3>
                <p class="ml--5">The cost to carpet clean a house can vary and depends on several factors, including:</p></li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">The number and size of the carpets;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">The level of soiling on the carpets;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">The type of carpets;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">The ease of access to the carpets.</p>
              </li>
              <p>For detailed pricing information, please refer to our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">residential carpet cleaning prices</a>.</p>
              <li class="hide-if-not-expanded">
                <h3>How much to carpet clean a house?</h3>
                <p class="ml--5">The cost to clean carpets in-house can vary widely depending on several factors. These factors include:</p></li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">Size and quantity of the carpets, rugs and upholstery;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">Level of soiling;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">Type of cleaning method;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">Additional services such as stain removal or stain protection.</p>
              </li>
              <p class="listed-items">To get an accurate quote and carpet cleaning apartment cost, it's best to contact us to assess your needs, provide a more precise estimate, and discuss any optional services that may be relevant.</p>
              <li class="hide-if-not-expanded">
                <h3>How much to carpet clean a 3-bed house?</h3>
                <p class="ml--5">Our carpet cleaning cost for 1 bedroom apartment, carpet cleaning cost for 2 bedroom apartment, cost of carpet cleaning 3-bed house, cost of carpet cleaning 4 bedroom house varies, depending on multiple factors like how soiled the carpet is, the size of the carpet and if it needs any additional services.</p></li>
              <li class="hide-if-not-expanded">
                <h3>What is the cost of carpet cleaning a 1 bedroom apartment?</h3>
                <p class="ml--5">Our carpet cleaning 1-bedroom apartment or carpet cleaning 2-bedroom apartment price depends on a number of factors, so we recommend checking out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">full house carpet cleaning prices</a>.</p></li>
            </ul>
          </div>

        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/services" class="c-paper font-size-5">SERVICES</a></button>
        <button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/Contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>
      </div>



    </>
  );
}
