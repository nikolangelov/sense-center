import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import "solid-slider/slider.css";
import { Component, createSignal, Show } from 'solid-js';
import RiYoutubeFill from '~icons/ri/youtube-fill';
import { FacebookLikeGallery } from '../../../../components/FacebookLikeGallery';
import { createSlider, Slider, SliderButton, SliderProvider } from 'solid-slider';
import { RotatingBanners } from '../../../../components/RotatingBanners';

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
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Office carpet cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our office carpet cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform office carpet cleaning services. Carpets, rugs and upholstery are an important part of every office interior. When regularly maintained, hygiene and a polished look of your office space will be guaranteed.</p>
        <p>Some benefits that come with office carpet cleaning services are:</p>
        <ul>
          <li class="ml--5">
            <p>Office carpet cleaning sanitises, deodorises, and freshens your carpets, rugs and upholstery, <strong>securing the health</strong> and well-being of everyone involved in your business processes.</p>
          </li>
          <li class="ml--5">
            <p>Office carpet cleaning will <strong>prolong the lifespan</strong> of your carpets.</p>
          </li>
          <li class="ml--5">
            <p>Office carpet cleaning will help you <strong>polish your brand image</strong> in matters of social responsibility and employer perfectionism.</p>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our office carpet cleaning services:</p>

        <ul>
          <li class="ml--5">
            <p>You contact us for an office carpet cleaning.</p>
          </li>
          <li class="ml--5">
            <p>We arrange a viewing to assess the area you wish to be cleaned and give recommendations on the most suitable services for your carpets, rugs or upholstery.</p>
          </li>
          <li class="ml--5">
            <p>We evaluate the situation and provide you with a cost estimate.</p>
          </li>
          <li class="ml--5">
            <p>If you are happy with our terms, we proceed to schedule an appointment for you.</p>
          </li>
          <li class="ml--5">
            <p>At the appointed time, one of our team members will visit your property to carry out the carpet cleaning office service.</p>
          </li>
        </ul>
        <h3>What do we offer:</h3>
        <p><strong>Some of the office carpet cleaning services we offer are:</strong></p>

        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Professional rug cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Professional upholstery cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Stain protection services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Professional stain removal services</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our office carpet cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Premium devices</h3>
            <p class="ml--5">At "Fine Carpet Cleaning Ltd," we take great pride in our commitment of utilising the finest cleaning equipment and products available for our carpet cleaning office services. Our cleaning machines, recognized as some of the most powerful and effective portable units globally, have undergone rigorous testing, and we have chosen to work with the best brands in the UK market, namely "Mytee" and "Airflex." Moreover, our in-house engineer continually enhances their performance to maximise their capabilities.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Efficient vacuum cleaner</h3>
            <p class="ml--5">In addition to our top-tier machines, we employ a high-filtration twin-motor vacuum cleaner, which we consider to be the best on the market. This vacuum cleaner is purpose-built for professional carpet cleaning, with one motor vigorously agitating the carpet while the other efficiently extracts loose dirt, dry soil, and dust.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Thoughtfully chosen cleaning solutions</h3>
            <p class="ml--5">To achieve exceptional results, we rely on a diverse range of cleaning products sourced from over 20 reputable brands in both the UK and the US markets. Through thorough testing, we have meticulously selected detergents that consistently deliver outstanding outcomes for our carpet cleaning office services. Among the esteemed brands we work with are "Alltec," "Prochem," "Chemspec," "Solution World of Clean," and "TMF." This wide array of options empowers our technicians to select the most suitable detergents based on the carpet's fabric, level of soiling, and the specific type of stains to be addressed.</p>
            <p class="ml--5">With our state-of-the-art cleaning equipment and a comprehensive selection of premium products, we can confidently assure you of carpet cleaning services for offices that uphold the highest standards of quality and excellence.</p>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our office carpet cleaning services in London</h2>

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

      <h2 class="line-height-12 md-line-height-14">Video from our office carpet cleaning services in London</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Our office carpet cleaning prices</h2>

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

      <h2 class="line-height-12 md-line-height-14">Our office carpet cleaning services specialist advises:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Smart investment for long-term carpet care</h3>
            <p>Our office carpet cleaning expert suggests considering the addition of a stain protector for your carpet, rug and upholstery whenever possible. This step will very efficiently protect your carpet from any accidental stains and can lead to substantial cost savings on professional stain removal services. If you're interested, we encourage you to <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">explore the benefits of utilizing stain protection services</a>.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Give the stain removal service a try</h3>
            <p class="ml--5">As per our office carpet cleaning specialist, it is highly advisable to book a professional stain removal service when your carpet or upholstery incurs stains. This is because attempting to address the stain on your own or allowing it to set can risk fabric damage, making complete stain removal unlikely. In fact, stain cleaning attempts may seal the stain, complicating the removal process for professional cleaning experts. Hence, scheduling <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">professional stain removal</a> from an experienced office carpet cleaning company can safeguard your valuable carpet or upholstery, potentially worth thousands.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Make well-informed decisions</h3>
            <p class="ml--5">While <a class="color-paper-link hover-color-paper-link-hover:hover" href="/services">exploring our range of services</a>, you might come across additional offerings that are sometimes overlooked. Our team takes pride in offering a comprehensive array of services, including upholstery cleaning, rug cleaning, and more. Don't miss the opportunity to experience the full scope of our expertise and make well-informed decisions for your cleaning requirements.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Contact us as soon as possible</h3>
            <p class="ml--5">Maintaining clean office carpets is important for a professional and healthy workplace. Regular cleaning not only extends the life of your carpet, but also keeps your workstation looking fresh and nice. In the event of an accident, such as spills or stains, it is very important to contact cleaning services as soon as possible. This fast approach maximises the chances of completely clearing the stain, preventing long-term damage and keeping your office looking pristine. With expert care, your office carpets can continue to enhance the aesthetic and comfort of your workspace.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Understand the importance of clean office carpets</h3>
            <p class="ml--5">Whether you have carpets, carpeted flooring, or upholstery, it's crucial to recognize the health benefits of maintaining their cleanliness. These surfaces can accumulate significant amounts of dust, microorganisms, and dirt particles, which may pose health risks. Neglecting their care can increase the likelihood of various reactions, skin problems, and allergies. To mitigate these concerns, our specialist in carpet cleaning services for offices recommends booking carpet cleaning services at least twice a year. In cases of high foot traffic, more frequent cleaning is advisable for optimal results.</p>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews for our office carpet cleaning services in London</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our office carpet cleaning services</h2>
      <div class="bodytext first-faq-section last-expanded mt-20 py-8 pl-4 pr-8 md-px-10 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ul>
          <li class="green-dot-listed-item">
            <h3>Do you have a cancellation fee?</h3>
            <p class="ml--5">Yes, if you cancel on the day of the cleaning, you will lose your deposit.</p></li>
          <li class="green-dot-listed-item">
            <h3>Will I be charged for the congestion / parking?</h3>
            <p class="ml--5">Yes, clients are requested to ensure convenient parking space near the property, and any associated parking or congestion charges are to be covered by the client.</p></li>
          <li class="green-dot-listed-item">
            <h3>Do I need to move furniture before the professional office carpet cleaning?</h3>
            <p class="ml--5">We kindly request your assistance in relocating small, fragile, or valuable furniture items like lamps and ornaments before the commercial office carpet cleaning to a secure area for insurance reasons. We are more than happy to assist in moving lightweight furniture such as chairs, armchairs, and tables during the cleaning process. After the cleaning is finished, we will return them to their original positions. In cases where heavy furniture like sofas, beds, wardrobes, and cupboards needs to be moved, an additional fee will apply. This is due to the extra time and effort expended by our technician, who will be duly compensated. Our main objective is to ensure a hassle-free experience for you throughout the entire procedure.</p></li>
          <li class="green-dot-listed-item">
            <h3>What if I need office carpet deep cleaning on the 4th floor and I have no lift?</h3>
            <p class="ml--5">If your office space is situated on an upper floor and does not have an elevator, an extra fee for the office carpet steam cleaning will be applied because our equipment is quite heavy, exceeding 50 kilograms. The reason for this is the increased time and effort required to manually carry the equipment up multiple flights of stairs, which may result in our technicians becoming fatigued more quickly. As a result, our overall productivity for the day may be lower compared to our usual level of output.</p></li>
          <li class="green-dot-listed-item">
            <h3>Are you insured?</h3>
            <p class="ml--5">Yes, our office carpet cleaning services are fully insured to cover any accidents or damages.</p></li>
        </ul>
      </div>

      <div class="read-more-click-to-expand-1 to-be-expanded">
        <button class="read-more-toggle-button my-6 mx-auto uppercase b-none b-rd-1 py-3 px-7 bg-paper hover-bg-#f7f7f7:hover font-600 font-size-5 whitespace-nowrap" style="letter-spacing: 0.02rem; box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);" onClick="toggleExpand(1)">Read more</button>

        <ul class="hidden-questions-and-answers">
          <li class="hide-if-not-expanded">
            <h3>What happens if your cleaner damages anything while performing office carpet cleaning in London?</h3>
            <p class="ml--5">Comprehensive insurance coverage is in place to protect the client in case of an accident.</p></li>
          <li class="hide-if-not-expanded">
            <h3>How long does the process of professional office carpet cleaning take?</h3>
            <p class="ml--5">The time needed for the commercial office carpet cleaning process primarily relies on the following factors:</p></li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The chosen method for office carpet deep cleaning;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The level of soiling on the carpet;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The dimensions and the quantity of carpets involved;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Whether any stain removal treatments are necessary;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The type of stains present.</p>
          </li>
          <li class="hide-if-not-expanded">
            <h3>How long does it take for the carpet to get completely dry after an office carpet steam cleaning is performed?</h3>
            <p class="ml--5">The drying time after an office carpet cleaning in London varies based on the carpet and the cleaning technique employed. For example, if <strong>steam cleaning</strong> is the method of choice, the estimated drying period for the carpet is between 7 to 9 hours. However, when the <strong>dry cleaning</strong> method is applied, the carpet will typically dry immediately after the cleaning process or shortly thereafter.</p></li>
          <li class="hide-if-not-expanded">
            <h3>Do you guarantee that after a professional office carpet cleaning all stains will be removed?</h3>
            <p class="ml--5">Unfortunately, providing a guarantee is not possible due to various uncontrollable variables at play. These variables include:</p></li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The length of time the stains have been present;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The composition of the substance responsible for the stains;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The specific type and fabric of the carpet;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Any previous attempts made to remove the stains.</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="hide-text-if-not-expanded">Nonetheless, our commitment is unwavering in striving to eliminate all stains from your carpet. Our approach involves:</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Employing advanced cleaning equipment;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Applying carefully chosen high-quality detergents;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Customising our method to match the carpet type and the origin of the stains, aiming for the most favourable outcomes.</p>
          </li>
          <li class="hide-if-not-expanded">
            <h3>How soon will a cleaner visit me?</h3>
            <p class="ml--5">We will do our best to schedule your appointment for a commercial office carpet cleaning as promptly as possible. Typically, our bookings are full for up to three days in advance, although occasional exceptions may occur.</p></li>
          <li class="hide-if-not-expanded">
            <h3>Can you give me a quote over the phone or do you need to visit my property?</h3>
            <p class="ml--5">To provide a price estimate for an office carpet deep cleaning, an in-person inspection is necessary. This is because attempting to estimate the cost over the phone, without a physical assessment, can be quite challenging, and, in most instances, the final office carpet cleaning price may lack precision. The scheduled viewing and the subsequent office carpet cleaning in London will be carried out to your benefit and in consideration of your busy schedule.</p></li>
          <li class="hide-if-not-expanded">
            <h3>What payment methods do you accept for your office carpet steam cleaning?</h3>
            <p class="ml--5">Debit/credit cards, bank transfers and cash payments handed to the team are accepted.</p></li>
          <li class="hide-if-not-expanded">
            <h3>Can you send me an invoice for the office carpet cleaning in London?</h3>
            <p class="ml--5">Yes, a receipt can be sent via email or a preferred method.</p></li>
          <li class="hide-if-not-expanded">
            <h3>Are you qualified?</h3>
            <p class="ml--5">Yes, our team has gone through full training and is qualified by the NCCA and Checkatrade.</p></li>
          <li class="hide-if-not-expanded">
            <h3>How long have you been in the professional office carpet cleaning business?</h3>
            <p class="ml--5">From 2012 onwards, we have been actively involved in the commercial office carpet cleaning sector, catering to both commercial and residential customers. Throughout this time, we have encountered a diverse range of carpets, rugs, upholstery, and various stain types, amassing valuable expertise. Our unwavering commitment to delivering excellence has motivated us to enhance our services through the following methods:</p></li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Continuously upgrading our equipment and machinery with superior alternatives whenever they are available;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Consistently assessing and refining our cleaning products to ensure the highest service quality;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Dedicating ourselves to expanding our knowledge and skills through ongoing professional courses and training, always striving to elevate our expertise and competence.</p>
          </li>
          <li class="hide-if-not-expanded">
            <h3>Can you give me a discount for the office carpet deep cleaning services?</h3>
            <p class="ml--5">Our professional office carpet cleaning services are known for their top-quality results, thanks to the use of the most effective equipment and over 20 premium cleaning products. What further distinguishes us is the competitiveness of our office carpet cleaning pricing, which is one of the most attractive ones in the market. Bundling all the services you need is a more cost-effective option compared to individual visits. This is because of the initial high cost and additional charges for each technician visit, taking into account factors such as travel time, parking, and the handling of heavy equipment during loading and unloading.</p></li>
          <li class="hide-if-not-expanded">
            <h3>How often should office carpets be cleaned?</h3>
            <p class="ml--5">The frequency of office carpet cleaning can vary depending on several factors, including:</p></li>
          <li class="hide-if-not-expanded">
            <p class="listed-items"><strong>The level of foot traffic</strong> - Entrance areas, hallways, and common spaces that experience heavy foot traffic should typically be cleaned more frequently.</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items"><strong>The type of business</strong> - Certain businesses, such as healthcare facilities or food service establishments, may require more frequent cleaning to meet industry-specific hygiene standards.</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items"><strong>The specific needs of the office space</strong> - For example, offices with employees who have allergies or sensitivities to dust and allergens may benefit from more frequent cleaning to maintain indoor air quality.</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Does the entrance have a doormat?</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">On which floor it is located (generally the first level is dirtier because you enter the room straight from outside).</p>
          </li>
          <p class="ml--5">It's important to regularly vacuum your carpets or rugs to refresh and prolong the life of the carpet. Additionally, professional cleaning from an office carpet cleaning company should be scheduled based on the factors mentioned above.</p>
          <p class="ml--5">We recommend hiring an office carpet cleaning company at least twice a year, or even more frequently, depending on your office’s situation. You can contact us at any time to consult with experts in cleaning commercial carpet tiles, carpets and rugs to determine what cleaning needs will be best for your specific office space.</p>
          <li class="hide-if-not-expanded">
            <h3>How to clean office carpet?</h3>
            <p class="ml--5">Office carpet cleaning involves a combination of routine maintenance and periodic deep cleaning to keep the space looking clean and professional. Here's a step-by-step guide on how to clean office carpets:</p>
            <p class="ml--5"><strong>Routine maintenance:</strong></p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items"><strong>Regular vacuuming:</strong> Vacuuming the office carpet or rug on a daily or weekly basis, depending on the level of foot traffic, will ensure a cleaner and fresher environment and will prolong the lifespan of the carpet.</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items"><strong>Bonnet cleaning:</strong> We recommend a bonnet cleaning every 3 months especially for offices. The advantages of this method are that the machine does not make noise and the carpet is dry instantly. This type of cleaning is only for routine maintenance because it is not as efficient as the steam cleaning and that is the reason why it is cheaper. You should know that we will need access to electricity, water and sewage connections, and provided parking places.</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items"><strong>Use entrance mats:</strong> Place durable entrance mats at all entry points to trap dirt and debris before you reach the carpet. Clean and replace these mats as needed.</p>
          </li>
          <p class="ml--5"><strong>Deep cleaning:</strong></p>
          <li class="hide-if-not-expanded">
            <p class="listed-items"><strong>Office carpet cleaning services:</strong> Schedule a cleaning appointment with an office carpet cleaning company at regular intervals, typically every 6 months or more frequently, depending on the level of foot traffic and specific needs of your office.</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items"><strong>Stain removal:</strong> We advise you to book stain removal services to eliminate stubborn stains so that they can be handled effectively.</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items"><strong>Carpet protection:</strong> After cleaning, consider having a carpet stain protection service performed to repel future stains and make maintenance easier.</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items"><strong>Drying:</strong> Ensure the carpet is thoroughly dried before using it. Proper ventilation can speed up the drying process.</p>
          </li>
          <p class="ml--5">By following these steps and maintaining a regular carpet cleaning office schedule, you can keep your carpet looking clean, extend its lifespan, and create a comfortable and professional work environment.</p>


          <li class="hide-if-not-expanded">
            <h3>How long do office carpets last?</h3>
            <p class="ml--5">The lifespan of office carpets can vary significantly depending on several factors, including the quality of the carpet, the level of foot traffic, and the maintenance practices. On average, office carpets can last anywhere from 5 to 15 years. Here are some of the key factors that influence the longevity of office carpets:</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The quality and type of the carpet;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The amount of foot traffic the carpet receives;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Proper and consistent maintenance;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">The frequency of professional deep cleaning;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Proper cleaning practices;</p>
          </li>
          <li class="hide-if-not-expanded">
            <p class="listed-items">Promptly addressing spills and stains, preventing them from causing long-term damage.</p>
          </li>
          <p class="ml--5">It's important to note that while office carpets may last for many years, their appearance and condition can deteriorate over time, especially in high-traffic areas. Regular maintenance, including from a company experienced in cleaning commercial carpet tiles, carpets, rugs and upholstery, is essential for extending the life and maintaining the aesthetics of office carpets.</p>

          <div class="read-more-click-to-expand-2">
            <button class="read-more-toggle-button my-6 mx-auto uppercase b-none b-rd-1 py-3 px-7 bg-paper hover-bg-#f7f7f7:hover font-600 font-size-5 whitespace-nowrap" style="letter-spacing: 0.02rem; box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);" onClick="toggleExpand(2)">Read more</button>

            <ul class="hidden-questions-and-answers">
              <li class="hide-if-not-expanded">
                <h3>Why office carpet cleaning is important?</h3>
                <p class="ml--5">Office carpet cleaning is important for several reasons, and it plays a significant role in maintaining a clean, healthy, and professional work environment. Some key reasons why cleaning commercial carpet tiles, carpets and rugs is essential are:</p></li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">Appearance and aesthetics;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">Employee health and well-being;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">Prolonged carpet lifespan;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">Stain and odour removal;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">Professional image;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">Reduced replacement costs.</p>
              </li>
              <p class="ml--5">Overall, office carpet cleaning is an integral part of facility management. Regular cleaning, combined with hiring an office carpet cleaning company, is essential for achieving these benefits and ensuring the longevity of your office carpets.</p>
              <li class="hide-if-not-expanded">
                <h3>What are your office carpet cleaning prices?</h3>
                <p class="ml--5">Our office carpet cleaning prices depend on a number of factors such as:</p></li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">The quantity and size of the carpets;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">How soiled they are;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">The fabric and type of the carpets;</p>
              </li>
              <li class="hide-if-not-expanded">
                <p class="listed-items">How easy the access to the carpets is.</p>
              </li>
              <p>To learn more, visit our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">office carpet cleaning prices</a>.</p>
              <li class="hide-if-not-expanded">
                <h3>Are you cleaning commercial carpet tiles?</h3>
                <p class="ml--5">Yes, we are cleaning commercial carpet tiles. Our cleaners are able to handle any type of office carpet including commercial carpet tiles.</p></li>
              <li class="hide-if-not-expanded">
                <h3>Do the cleaning machines make a lot of noise? Will they disturb the progress of work?</h3>
                <p class="ml--5">Yes, the machines are noisy, but office carpet cleaning is intended to be effective, quick, and save downtime for your business. Our strong equipment and trained specialists ensure that cleaning is done fast, generally in a couple of hours, depending on the size and condition of the space. In addition, we provide flexible scheduling alternatives, such as after-hours and weekend visits, to reduce disturbance to your everyday operations.</p></li>
              <li class="hide-if-not-expanded">
                <h3>Will our employees block the work of your specialists?</h3>
                <p class="ml--5">Our crew is trained to operate swiftly and quietly to limit disruption to your employees and everyday activities. We realise the significance of maintaining a productive work atmosphere, therefore we recommend booking when there are no other people in the office to avoid interrupting each other's work. We may schedule office carpet cleaning outside of your typical working hours, including nights and weekends, to prevent affecting your business operations.</p></li>
              <li class="hide-if-not-expanded">
                <h3>Can you clean carpets outside of work hours and on weekends?</h3>
                <p class="ml--5">Yes, we can clean office carpets outside of usual business hours. We understand how crucial it is to limit disturbance to your business. That's why we provide flexible schedules that include evenings, weekends, and early mornings. Our objective is to meet your unique requirements and to guarantee that your carpets are cleaned at a time that is most suitable for you, so that your business can continue to operate undisturbed. Contact us to discuss your favourite time, and we will establish a cleaning plan that works for you.</p></li>
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
