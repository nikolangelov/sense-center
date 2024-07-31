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

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Professional carpet steam cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets\Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

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
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Dry carpet cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Eco-friendly carpet cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Fast-dry carpet cleaning</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h3>The process of our professional carpet steam cleaning in London</h3>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ul>
          <li class="ml--5">
            <p>First, we carry out a pre-cleaning survey. We do this because we use an individual approach for every carpet, based on its type, condition, and degree of pollution. This is necessary to estimate what detergents and tools need to be used to steam clean the carpet.</p>
          </li>
          <li class="ml--5">
            <p>The second step is to use a high-filtration twin-motor vacuum cleaner that has been specifically designed for high-performance steam cleaning of carpets. This removes any loose dirt, dry soiling, and dust.</p>
          </li>
          <li class="ml--5">
            <p>Third, we apply heavy-duty pre-spray, designed to lift oily dirt and pollutants from your carpet so they can be safely extracted using our high-performance extraction machines.</p>
          </li>
          <li class="ml--5">
            <p>Fourth, we introduce the cleaning solution to the carpet fibres. This loosens the soil and gets it ready for extraction.</p>
          </li>
          <li class="ml--5">
            <p>Fifth, pure, softened hot water is gently injected deep into the carpet fibres, releasing soil for effective removal by our powerful machine. Any remaining spots and stains are treated individually with specially selected cleaning products.</p>
          </li>
          <li class="ml--5">
            <p>Last, we rinse and extract again to ensure no chemical residues remain from the steam cleaning of carpets.</p>
          </li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our professional carpet steam cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Highly-efficient extractors.</h3>
            <p class="ml--5">"Fine Carpet Cleaning Ltd" prides itself on utilising top-of-the-line cleaning equipment and products. Our machines, considered to be among the most powerful and effective portable machines in the world, have been tested extensively, and we have selected the best brands available in the UK market – "Mytee" and "Airflex." Further enhancing their performance, our team's engineer makes significant improvements to maximise their capabilities.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners.</h3>
            <p class="ml--5">Additionally, we employ a high-filtration twin-motor vacuum cleaner, which we believe to be the best on the market. This vacuum cleaner has been specifically designed for expert carpet cleaning, with one motor pounding the carpet while the other suctioning out any loose dirt, dry soil, and dust.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Thoughtfully chosen cleaning supplies.</h3>
            <p class="ml--5">To ensure the best results, we use a variety of cleaning products from over 20 leading brands in the UK and US markets. Through extensive testing, we have chosen the detergents that provide exceptional outcomes. Among the brands we use are "Alltec," "Prochem," "Chemspec," "Solution World of Clean," and "TMF." This wide selection allows our technicians to choose the most suitable detergents based on the fabric of the carpet, level of soiling, and type of stains to be removed.</p>
            <p class="ml--5">With our top-notch cleaning equipment and products, we guarantee a professional carpet cleaning service of the highest quality.</p>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our professional carpet steam cleaning services in London</h2>

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

      <h2 class="line-height-12 md-line-height-14">Video from our professional carpet steam cleaning services in London</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Prices for our professional carpet steam cleaning services</h2>

      <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-8 text-justify font-size-4.4" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);"><div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
        <br></br>
        Now you can request pet hair removal as an additional service to the booked cleaning for a small extra charge. Don't forget to request it when booking because telling us at the moment of cleaning causes delays for the technicians and messes up the schedule.        <br></br>
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

      <h2 class="line-height-12 md-line-height-14">Our carpet steam cleaning specialist advises:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Apply a stain protector.</h3>
            <p class="ml--5">Our carpet steam cleaning specialist advises you to add a stain protector to your carpet and upholstery whenever possible. By doing this, you can save a significant amount of money on professional stain removal services. If you're interested, <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">we recommend learning more about the advantages of using stain protection services.</a></p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Try stain removal service.</h3>
            <p class="ml--5">According to our carpet steam cleaning specialist, it is highly recommended to seek the services of a professional stain removal company if your carpet or upholstery has been stained. This is because attempting to clean the stain yourself or allowing it to dry may result in fabric damage, making it unlikely for the stain to be completely removed. In fact, trying to clean the stain on your own will likely seal it rather than eliminate it, making it even more difficult or even impossible for a professional steam clean carpet company to remove. Therefore, scheduling a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">professional stain removal service</a> from an expert steam clean carpet company today can save your valuable carpet or upholstery, which may be worth thousands.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Decide with knowledge and awareness.</h3>
            <p class="ml--5"><a class="color-paper-link hover-color-paper-link-hover:hover" href="/services">By exploring our other services</a>, you may discover additional services that can sometimes be overlooked or forgotten. Our team takes pride in providing a comprehensive range of services, including upholstery cleaning, rug cleaning, and many others. Don't miss out on the opportunity to experience the full range of our expertise and make the most informed decisions for your cleaning needs.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Unite multiple services.</h3>
            <p class="ml--5">For optimal cost efficiency, our skilled carpet steam cleaning service specialists suggest combining multiple services into one appointment. Choosing to have technicians visit separately can result in additional costs such as travel time, parking fees, and the management of heavy equipment during loading and unloading, making individual appointments less financially advantageous.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Experience the advantages of good health.</h3>
            <p class="ml--5">If you have carpet, carpet floor covering, or upholstery, it's important to be aware of the health benefits of keeping them clean. These items can accumulate significant amounts of dust, microorganisms, and dirt particles that can potentially lead to health problems. Not properly taking care of them can increase the risk of experiencing various reactions, skin issues, and allergies. To avoid these issues, our carpet cleaning specialist recommends using professional carpet steam cleaning services in London at least once a year. If you have a high amount of traffic on your carpets, it is in your best interest to have them cleaned more frequently.</p>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews for our professional carpet steam cleaning services in London</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our professional carpet steam cleaning services in London</h2>
      <div class="bodytext first-faq-section last-expanded mt-20 py-8 pl-4 pr-8 md-px-10 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ul>
          <li class="green-dot-listed-item">
            <h3>Do you have a cancellation fee?</h3>
            <p class="ml--5">Yes, if you cancel on the day of the cleaning, you will lose your deposit.</p></li>
          <li class="green-dot-listed-item">
            <h3>Do I need to pay for the congestion/parking charge?</h3>
            <p class="ml--5">Yes, the client is requested to arrange suitable parking space for our vehicles within close proximity of the property and to cover any parking/congestion expenses, if applicable.</p></li>
          <li class="green-dot-listed-item">
            <h3>Do I need to move furniture before steam extraction carpet cleaning?</h3>
            <p class="ml--5">Your assistance in moving away small, delicate, or valuable furniture items such as lamps and ornaments would be greatly appreciated for insurance purposes. If possible, please position them in a secure area before our arrival, one that won't be affected during cleaning. We are more than willing to help move other lightweight furniture like chairs, armchairs, and tables during the cleaning. After the cleaning is done, we will put them back in their original positions. If heavy furniture, such as sofas, beds, wardrobes, and cupboards, needs to be moved, an additional charge will be placed. This is because it demands extra time and effort from our technician, who will be compensated accordingly. Our primary objective is to make the entire process as stress-free as possible for you.</p></li>
          <li class="green-dot-listed-item">
            <h3>What if I live on the 4th floor or above and I have no lift?</h3>
            <p class="ml--5">Since our equipment is very heavy (50kg+), we charge extra for every extra floor that we need to carry by hand. The reason is that this will usually take a lot of time and our technicians tire faster, therefore, that day we cannot do as much work as we usually do.</p></li>
          <li class="green-dot-listed-item">
            <h3>Are you insured?</h3>
            <p class="ml--5">Yes, we are fully insured.</p></li>
        </ul>
      </div>

      <div>
        <button class="read-more-toggle-button my-6 mx-auto uppercase b-none b-rd-1 py-3 px-7 bg-paper hover-bg-#f7f7f7:hover font-600 font-size-5 whitespace-nowrap" style="letter-spacing: 0.02rem; box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">Read more</button>

        <ul>
          <li>
            <h3>What happens if your cleaner damages anything while performing professional carpet steam cleaning services?</h3>
            <p class="ml--5">We are fully insured, and if an accident happens, we are fully covered.</p></li>
          <li>
            <h3>How long does the process of professional hot water extraction carpet cleaning  take?</h3>
            <p class="ml--5">The duration of the professional hot water extraction carpet cleaning process depends mainly on:</p></li>
          <li>
            <p>How soiled the carpet is;</p>
          </li>
          <li>
            <p>If it needs any stain removal treatments.</p>
          </li>
          <p class="ml--5">In most cases, the process of professional hot water extraction carpet cleaning takes from 20 to 60 minutes per room.</p>
          <li>
            <h3>How long does it take for the carpet to get dry after a professional carpet steam cleaning service is performed?</h3>
            <p class="ml--5">It depends on the carpet and the cleaning method used, but the approximate time for the carpet to get dry is 7 to 9 hours.</p></li>
          <li>
            <h3>Do you guarantee that after cleaning my carpet, all stains will be removed?</h3>
            <p class="ml--5">Unfortunately, we cannot provide an absolute guarantee due to several factors beyond our influence. These factors include:</p></li>
          <li>
            <p>How old the stains are;</p>
          </li>
          <li>
            <p>The substance that is responsible for the stains;</p>
          </li>
          <li>
            <p>The type and fabric of the carpet;</p>
          </li>
          <li>
            <p>Previous mishandling of the stains.</p>
          </li>
          <li>
            <p>Nonetheless, we are committed to making every possible effort to remove all stains from your carpet. Our approach involves:</p>
          </li>
          <li>
            <p>Utilising advanced cleaning equipment;</p>
          </li>
          <li>
            <p>Applying carefully chosen premium detergents;</p>
          </li>
          <li>
            <p>Tailoring our approach to the specific carpet type and staining agent to ensure the best possible outcome.</p>
          </li>
          <li>
            <h3>How soon can I expect a cleaner to visit me?</h3>
            <p class="ml--5">We will try to get you an appointment as soon as possible. Usually, we are fully booked for 3 days ahead, but sometimes there are exceptions.</p></li>
          <li>
            <h3>Can you give me a quote over the phone or do you need to visit my property?</h3>
            <p class="ml--5">We can provide an estimate over the phone for residential properties. Commercial properties may require a site visit. You can also get an online quote for our steam extraction carpet cleaning services.</p></li>
          <li>
            <h3>What payment methods do you accept for professional carpet steam cleaning services?</h3>
            <p class="ml--5">We accept debit/credit cards, and cash payments directly to our team.</p></li>
          <li>
            <h3>Can you provide me with an invoice for the professional carpet steam cleaning services?</h3>
            <p class="ml--5">Yes, we will either send you a receipt via email.</p></li>
          <li>
            <h3>Are you qualified?</h3>
            <p class="ml--5">Yes, we are qualified and fully trained members of NCCA (National Carpet Cleaners Association) – the UK’s recognised industry qualification.</p></li>
          <li>
            <h3>How long have you been in the carpet cleaning business?</h3>
            <p class="ml--5">We have been in the carpet cleaning business since 2012. In these years, we have dealt with numerous types of carpets, rugs, upholstery and stains from commercial and residential customers and have gained a lot of experience. Thanks to this knowledge and our strive for perfect execution, we have been able to better our services by:</p></li>
          <li>
            <p>Replacing our equipment and machinery with better ones all the time, if such are available;</p>
          </li>
          <li>
            <p>Regularly testing and upgrading our cleaning products;</p>
          </li>
          <li>
            <p>Constantly searching to improve our knowledge and competence by going through additional professional courses and training.</p>
          </li>
          <li>
            <h3>Can you give me a discount?</h3>
            <p class="ml--5">Because we offer top-quality professional carpet steam cleaning services, utilising the most effective equipment and more than 20 premium cleaning products, our carpet steam cleaning prices are not only very competitive but also among the most attractive in the market.  Bundling all the services you need is more cost-effective than if they were performed individually. This is due to the initial high cost and additional charges for each visit by the technician, taking into account factors such as travel time, parking, and the handling of heavy equipment during loading and unloading.</p></li>
          <li>
            <h3>Does steam cleaning leave the carpet wet?</h3>
            <p class="ml--5">Although 95% of the water used gets extracted when steam cleaning, the carpet remains slightly wet afterward. When left to dry on its own, steam-cleaned carpet will usually take 7-9 hours before it completely dries.</p></li>
          <li>
            <h3>Can you walk on the carpet after steam cleaning?</h3>
            <p class="ml--5">It is recommended that you try to stay off the freshly steam-cleaned carpets until they are dry – about 7-9 hours. If you cannot avoid walking over your damp carpet before it is dry, do it with caution. When you transition from carpet to another hard surface, like tile or hardwood, it can be very slippery.</p></li>

          <div>
            <button class="read-more-toggle-button my-6 mx-auto uppercase b-none b-rd-1 py-3 px-7 bg-paper hover-bg-#f7f7f7:hover font-600 font-size-5 whitespace-nowrap" style="letter-spacing: 0.02rem; box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">Read more</button>

            <ul>
              <li>
                <h3>Do you pretreat the carpet before steam cleaning?</h3>
                <p class="ml--5">Yes, pretreating your carpet with a solution of liquid detergent and warm water is recommended before steam extraction carpet cleaning. This helps loosen dirt and grime so that they can be lifted away during the steam cleaning process.</p>
                <p class="ml--5">Hiring our professional deep carpet cleaning service saves you time and ensures optimal results. As professionals, we carry out a pre-cleaning survey based on the type of carpet, its condition, and its degree of pollution.</p></li>
              <li>
                <h3>How often should carpets be steam cleaned?</h3>
                <p class="ml--5">The deep steam carpet cleaning frequency depends mainly on factors like how fast the carpet soils. On average, a carpet should be cleaned at 12-month intervals. However, if you have pets, children, high traffic on the carpet, a smoking habit, or if you stain it a lot, we recommend using an expert carpet cleaning service more often than that. Feel free to contact us anytime for professional carpet cleaning services or advice.</p></li>
              <li>
                <h3>Does steam cleaning carpets work?</h3>
                <p class="ml--5">Yes, steam carpet cleaning definitely works. Steam carpet cleaning is a highly effective method offered by professional companies like "Fine Carpet Cleaning Ltd." Their experience, equipment, products, and techniques ensure exceptional results. This approach is not only efficient but also affordable, guaranteeing the removal of tough stains, odours, and germ buildup that regular cleaning methods cannot eliminate.</p></li>
              <li>
                <h3>Does steam cleaning carpets remove stains?</h3>
                <p class="ml--5"><strong>The short answer is yes, they do.</strong> Steam cleaning is highly effective in removing deep-down stains, dirt, and grime, while also eliminating bacteria and removing dust mites, allergens, mould, pet dander, and unpleasant odours. However, certain stubborn stains, such as extremely old ones or those that have been treated improperly, can be challenging to remove completely, even with expert assistance. Fortunately, due to our extensive experience and utilisation of top-notch equipment, we at “Fine Carpet Cleaning Ltd.” have achieved remarkable success rates in stain removal. Nevertheless, we cannot offer a guarantee that every stain can be completely eradicated. Rest assured, we will evaluate the stain and inform you during the quotation process about our confidence in achieving its removal.</p></li>
              <li>
                <h3>Does steam cleaning damage the carpet?</h3>
                <p class="ml--5">No, steam cleaning does not damage carpets, if done properly. In fact, it is the most thorough method and is recommended by most carpet manufacturers. Steam cleaning effectively removes deep-down stains, dirt, and grime. It kills bacteria, removes dust mites, allergens, mould, pet dander and odours, while prolonging the carpet's lifespan.</p></li>
              <li>
                <h3>How often should you steam clean your carpet with pets?</h3>
                <p class="ml--5">We recommend that pet owners seek professional deep carpet cleaning services once or twice per year. Cleaning when the seasons change is an easy way to remember when it's time to deep clean your carpets.</p></li>
              <li>
                <h3>Will steam cleaning a carpet get rid of cat urine smell?</h3>
                <p class="ml--5">We do not recommend steam cleaning a carpet when stained with pet urine. The heat will permanently set the stain and the odour by bonding the protein into any man-made fibres.</p>
                <p class="ml--5">Professional carpet cleaning companies like ours are experienced and can effectively remove cat urine stains and odours using the right methods and products specifically designed for pet stains. Regular maintenance and professional carpet cleaning services can help keep carpets fresh and clean. Feel free to contact us if you need professional advice.</p></li>
              <li>
                <h3>Does steam cleaning a carpet kill bacteria?</h3>
                <p class="ml--5">Yes, without a doubt having your carpets cleaned by a professional hot water extraction carpet cleaning company in London can effectively kill bacteria. Your carpet can have as much as 200,000 bacteria per square inch. Carpet cleaning with steam cleans deeply using hot water, which eliminates dirt, germ buildup, allergens, parasites and bacteria such as E. coli, Salmonella and many others.</p></li>
              <li>
                <h3>Does steam cleaning a carpet help with allergies?</h3>
                <p class="ml--5">Regular cleaning is essential for allergy sufferers as it helps to reduce exposure to allergens. A professional deep clean carpet company effectively removes dust, pollen, pet dander, mould, and other allergens that can trigger allergic reactions. Carpets that are not regularly cleaned can become breeding grounds for dust mites, which can cause serious allergic reactions. Steam cleaning, also known as the hot water extraction method, is a recommended allergy carpet cleaning method as it has been proven to reduce allergens in carpets. However, it is important to ensure that all the water is properly removed from the carpet after steam cleaning to prevent moisture-related issues.</p>
                <p class="ml--5">“Fine Carpet Cleaning Ltd.” is a company that specialises in professional hot water extraction carpet cleaning services and uses special machines and solutions to effectively remove allergens. Vacuuming regularly is also important in removing allergens from the carpet.</p></li>
              <li>
                <h3>Is steam cleaning best for carpets?</h3>
                <p class="ml--5">A deep carpet cleaning service is the most effective way to clean your carpet. Cleaning your carpet with hot water at high pressure successfully removes dirt, bacteria, grime, and toxins embedded in the carpet fibres. Professional deep carpet cleaning offers many advantages, including:</p></li>
              <li>
                <p>Prolonging the carpet’s life;</p>
              </li>
              <li>
                <p>Effectively treating tough stains;</p>
              </li>
              <li>
                <p>Leaving no residue behind;</p>
              </li>
              <li>
                <p>Avoiding harsh chemicals.</p>
              </li>
              <li>
                <h3>How much does a professional carpet deep cleaning service cost?</h3>
                <p class="ml--5">How much the professional carpet deep cleaning service costs depends on a number of factors. Some of them are:</p></li>
              <li>
                <p>Quantity and size of the carpets;</p>
              </li>
              <li>
                <p>Level of soiling;</p>
              </li>
              <li>
                <p>Carpet type;</p>
              </li>
              <li>
                <p>Ease of access to the carpets.</p>
              </li>
              <li><p class="ml--5">To learn more, check out our <a href="/prices">carpet steam cleaning prices.</a></p></li>
              <li class="green-dot-listed-item">
                <h3>Can you steam clean a wool carpet?</h3>
                <p class="ml--5">Yes, steam cleaning can be used on wool carpets without causing damage. It is one of the most thorough and effective methods for removing dirt and soil from the carpet's base. However, wool carpets are sensitive to chemicals, so it's essential to use gentle products. Hiring professionals is advisable, as they have the expertise to choose the appropriate cleaning methods for your specific type of carpet.</p></li>
              <li class="green-dot-listed-item">
                <h3>Can you steam clean a nylon carpet?</h3>
                <p class="ml--5">In special cases like synthetic rugs and carpets from acrylic or nylon, we strongly recommend not using steam cleaning, but dry cleaning, as the heat and steam will damage the rug.</p></li>
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
