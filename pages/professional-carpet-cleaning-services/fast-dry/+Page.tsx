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
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Fast dry carpet cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Why to use fast dry carpet cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

        <h3>About the fast dry carpet cleaning:</h3>
        <p>Say goodbye to harsh chemicals and hello to a fresher, cleaner home with our eco-friendly fast dry carpet cleaning service!  It's a modern cleaning technique that eliminates all the harmful bacteria from your living area.</p>
        <p>Our skilled professionals use high-efficiency cleaning machines and powerful air movers to ensure a deep clean and rapid drying, allowing you to enjoy fresh, clean carpets in just a few hours. Experience a healthier, safer living environment with our modern, eco-friendly carpet cleaning approach.</p>

        <h3>Benefits of fast dry carpet cleaning services:</h3>
        <ul>
          <li class="ml--5">
            <p><strong>Efficient cleaning:</strong> Even though it uses less water, fast dry carpet cleaning efficiently eliminates dirt, stains, and allergens from the carpet's fibres.</p>
          </li>
          <li class="ml--5">
            <p><strong>Eco-friendly:</strong> use of non-toxic cleaning solutions and minimal water, making it a more sustainable choice.</p>
          </li>
          <li class="ml--5">
            <p><strong>Safe for children and pets:</strong> The quick-drying nature of this method and the use of natural cleaning solutions make it a better option for homes with children and pets, as there is less exposure to wet carpets and aggressive cleaning agents.</p>
          </li>
          <li class="ml--5">
            <p><strong>Convenient scheduling:</strong> Shorter drying times allow for more flexible scheduling options, as customers don't need to wait long before using their carpets again.</p>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our fast dry carpet cleaning service:</p>

        <ul>
          <li class="ml--5">
            <p>You make contact with us.</p>
          </li>
          <li class="ml--5">
            <p>We give advice on which cleaning services will be most beneficial to you.</p>
          </li>
          <li class="ml--5">
            <p>You will be given a quote.</p>
          </li>
          <li class="ml--5">
            <p>If our terms satisfy you, we will schedule a visit for you.</p>
          </li>
          <li class="ml--5">
            <p>Our cleaners will come to your home to provide professional cleaning and antiviral sanitisation services.</p>
          </li>
        </ul>
        <h3>What do we offer:</h3>
        <p>We are able to offer a variety of individual solutions for cleaning your carpet according to its specific needs.</p>
        <p>The professional carpet cleaning services that we offer are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/steam">Professional carpet steam cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/dry">Dry carpet cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services">Eco-friendly carpet cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/services">All of our services</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h3>The process of our fast dry carpet cleaning services:</h3>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <p>First, we use a high-powered vacuum to remove loose dirt and debris from your carpet or rug. Then, we apply our special biodegradable cleaning compound, which is carefully agitated into the fibres using advanced equipment. This substance attracts and encapsulates dirt and grime, making it easy to vacuum away. Dri-pod floor dryers are used to circulate air and accelerate the drying process after cleaning.</p>
        <p>Your carpets will be dry and ready to use in no time, so you can get back to enjoying your daily activities without any inconvenience.</p>
        <p>Moreover, our quick drying cleaning technique is effective on all kinds of carpets and rugs made of delicate and natural materials, such as:</p>
        <ul>
          <li class="ml--5">
            <p>wool;</p>
          </li>
          <li class="ml--5">
            <p>seagrass;</p>
          </li>
          <li class="ml--5">
            <p>coir;</p>
          </li>
          <li class="ml--5">
            <p>sisal;</p>
          </li>
          <li class="ml--5">
            <p>silk;</p>
          </li>
          <li class="ml--5">
            <p>viscose.</p>
          </li>
        </ul>
        <p>We take care of different sizes and types of carpets, rugs, and mats:</p>
        <ul>
          <li class="ml--5">
            <p>small, medium, and large rugs;</p>
          </li>
          <li class="ml--5">
            <p>single, double, or master bedroom carpeting;</p>
          </li>
          <li class="ml--5">
            <p>living room, lounge, hallway, and stairs with soft covering;</p>
          </li>
          <li class="ml--5">
            <p>landing and bathroom carpets.</p>
          </li>
        </ul>
        <p><strong>Discover the difference our fast dry carpet cleaning can make and witness how it can turn your home into a cleaner, healthier, and more welcoming environment. Schedule your appointment today, and let us handle the rest!</strong></p>
      </div>

      <FleurDivider></FleurDivider>

      <h3>What to expect after the cleaning:</h3>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ul>
          <li class="ml--5">
            <p><strong>Faster drying times:</strong> With quick dry carpet cleaning, carpets typically dry within 1-2 hours.</p>
          </li>
          <li class="ml--5">
            <p><strong>Healthier indoor environment:</strong> Faster drying times reduce the risk of mould and mildew growth, which can occur when carpets remain damp for too long. This promotes a healthier indoor environment, especially for those with allergies or respiratory sensitivities.</p>
          </li>
          <li class="ml--5">
            <p><strong>Longer carpet life:</strong> Fast dry carpet cleaning service is gentler on carpet fibres and avoids the heavy saturation that can damage carpets over time. This helps extend the life of the carpet and saves money in the long run.</p>
          </li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Fast Dry Carpet Cleaning: Equipment and products</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <p>At our fast dry carpet cleaning service, we prioritise efficiency and effectiveness to ensure that your carpets are cleaned thoroughly and dried quickly. We use the latest advanced equipment and techniques to achieve the best results for our clients.</p>
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">High-powered, low-moisture cleaning machines.</h3>
            <p class="ml--5">Our cleaning machines are specifically designed to deliver a deep clean while using minimal water. We have carefully selected the best machines from leading manufacturers such as "Mytee" (USA) and "Airflex" (UK). Our expert technicians have further optimised these machines to maximise their performance, ensuring that your carpets are cleaned perfectly.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Eco-friendly and effective cleaning solutions.</h3>
            <p class="ml--5">We understand that every carpet cleaning situation is unique, which is why we have a wide range of carefully selected cleaning products at our disposal. Our technicians choose the most appropriate cleaning solution for your specific needs, considering factors such as carpet type, stain type, and level of soiling. We use eco-friendly and highly effective products from trusted brands like "Alltec," "Prochem," "Chemspec," and "Solution World of Clean" to ensure the best results while minimising environmental impact.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">High-volume air movers.</h3>
            <p class="ml--5">To speed up the drying process, we use high-volume air movers. These powerful fans circulate air and accelerate the evaporation of any remaining moisture in your carpets. By strategically placing these air movers, we can significantly reduce the drying time, often allowing your carpets to be dry within 2 hours.</p>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our fast dry carpet cleaning services in London</h2>

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

      <h2 class="line-height-12 md-line-height-14">Video from our fast dry carpet cleaning services in London</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Prices of our professional carpet cleaning services</h2>

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
            <td class="b-rd-lb-3 b-rd-rb-3 bg-#2e5c47" colspan="3" style="box-shadow: 0px 20px 20px 1px rgb(247 247 247/ 100%);"><p class="font-size-3.5 md-font-size-4 px-5 md-my-7 c-paper line-height-6 word-spacing-0.5">*All prices depend on the quantity of the order, degree of contamination and access.
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

      <h2 class="line-height-12 md-line-height-14">Our carpet cleaning specialist advices:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use stain protection.</h3>
            <p class="ml--5">Maximise the benefits of our fast dry carpet cleaning service by adding stain protection, which guards your carpet and upholstery against liquid penetration and lasting stains. This can save you money on future professional stain removal services and extend the life of your carpets. <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">Learn more about the benefits of using stain protection services.</a></p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Extend the life of your carpets.</h3>
            <p class="ml--5">With our quick dry carpet cleaning service, your carpets will be clean and dry within 1-2 hours. Our fast dry method is gentle on carpet fibres and suitable for all types of carpets, including delicate and natural fibres. This will help prolong the life of your carpet investment.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Choose eco-friendly solutions.</h3>
            <p class="ml--5">When selecting a fast dry carpet cleaning service, search for companies that use environmentally friendly, non-toxic cleaning solutions. These products are safer for your family, pets, and the environment while still providing excellent cleaning results.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Schedule regular cleanings.</h3>
            <p class="ml--5">To maintain the appearance and extend the life of your carpets, schedule professional fast dry carpet cleaning services at least once a year, or more frequently in high-traffic areas. Regular cleaning helps prevent the buildup of dirt, allergens, and microorganisms that can cause health problems.</p>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Explore our range of services and save money and time.</h3>
            <p class="ml--5">Familiarise yourself with our full range of carpet cleaning services to make informed decisions about what your carpets need. Combine fast dry carpet cleaning with other services like upholstery cleaning or stain protection to save money and time on multiple visits.</p>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Quick dry carpet cleaning reviews</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our fast dry carpet cleaning services</h2>
      <div class="bodytext first-faq-section last-expanded mt-20 py-8 pl-4 pr-8 md-px-10 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ul>
          <li class="green-dot-listed-item">
            <h3>Do you have a cancellation fee?</h3>
            <p class="ml--5">Yes, if you decide to cancel the cleaning on the day it's scheduled, you will lose your deposit.</p></li>
          <li class="green-dot-listed-item">
            <h3>Do I need to pay for congestion / parking charges?</h3>
            <p class="ml--5">Yes, the consumer is asked to set up an appropriate parking area for our cars near the property and to pay for any parking or traffic-related costs if necessary.</p></li>
          <li class="green-dot-listed-item">
            <h3>Do carpet cleaning services move furniture?</h3>
            <p class="ml--5">It would be greatly appreciated if you could relocate delicate, small, or expensive pieces of furniture for insurance purposes, like lamps and decorations. If possible, position them in a location that won't be disrupted by the cleaning process. We aim to have the floors free of any obstacles. We'll assist in moving light furniture such as chairs, sofas, and tables during the cleaning and ensure they are returned to their original positions. If heavier items like sofas, beds, wardrobes, or cabinets have to be moved, there will be an additional fee. This is because it will take more time and effort from our technician, who will be paid for this extra work. Our objective is to make the entire process as smooth and worry-free for you as we can.</p></li>
          <li class="green-dot-listed-item">
            <h3>What if I live on the 4th floor or higher and I have no lift?</h3>
            <p class="ml--5">Our equipment weighs more than 50 kg, so whenever our technician has to transport it manually, we add extra fees for each additional floor. This is because transporting them by hand often requires a significant amount of time, and our technicians become exhausted more quickly, therefore they are unable to complete as much work on that particular day.</p></li>
          <li class="green-dot-listed-item">
            <h3>Are you insured?</h3>
            <p class="ml--5">Yes, we do have complete insurance.</p></li>
        </ul>
      </div>

      <div>
        <button class="read-more-toggle-button my-6 mx-auto uppercase b-none b-rd-1 py-3 px-7 bg-paper hover-bg-#f7f7f7:hover font-600 font-size-5 whitespace-nowrap" style="letter-spacing: 0.02rem; box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">Read more</button>

        <ul>
          <li>
            <h3>What happens if your cleaner damages anything while performing fast dry carpet cleaning services?</h3>
            <p class="ml--5">We have complete coverage in the event of an accident because we are fully insured.</p></li>
          <li>
            <h3>How long does the process of fast dry carpet cleaning service take?</h3>
            <p class="ml--5">The fast dry carpet cleaning procedure depends on the level of dirtiness of the carpet and whether it requires any treatments for removing stains. It can range from 20 to 60 minutes for each room.</p></li>
          <li>
            <h3>How long does it take for the carpet to get dry?</h3>
            <p class="ml--5">The drying time varies based on several elements such as the carpet's material, its level of dirtiness, the thickness of its fibres, and whether it requires a service for removing stains.</p>
            <p class="ml--5">Carpets made of wool soak up more moisture and take a longer time to dry, typically between 10 to 12 hours. Should the carpet be excessively soiled and necessitate multiple treatments, the drying period could extend further.</p>
            <p class="ml--5">Carpets made of synthetic materials dry more quickly, usually taking 7 to 10 hours and this remains true regardless of the carpet's condition and the number of treatments needed.</p>
          </li>
          <li>
            <h3>Do you guarantee that after cleaning my carpet all stains will be removed?</h3>
            <p class="ml--5">No, because there are factors that are beyond our influence. These elements include:</p></li>
          <li>
            <p>When did the stains appear?</p>
          </li>
          <li>
            <p>Which polluting agent is responsible for the stains?</p>
          </li>
          <li>
            <p>What is the carpet material?</p>
          </li>
          <li>
            <p>Have the stains already been improperly treated?</p>
          </li>
          <p class="ml--5">However, we can assure you that we will make every effort to remove any stain from your carpet.</p>
          <p class="ml--5">This involves:</p>
          <li>
            <p>The use of  top-tier cleaning equipment;</p>
          </li>
          <li>
            <p>The use of effective and sustainable non-toxic cleaning solutions;</p>
          </li>
          <li>
            <p>Personalised strategy based on the kind of carpet and pollutants.</p>
          </li>

          <li>
            <h3>How to dry carpet quickly after cleaning?</h3>
            <p class="ml--5">Quick dry carpet cleaning aims to leave your carpet as dry as possible.</p>
            <p class="ml--5">However, if your carpet still has some moisture, here are some tips that will help you.</p>
            <p class="ml--5">Firstly, solutions with no equipment:</p></li>
          <li>
            <p>If the room is filled with many windows, there's no need to worry. Simply open them and allow the air to circulate. Make sure to open interior doors. In this way, you will allow humid air to escape and encourage air circulation in your home.</p>
          </li>
          <li>
            <p>Another way is to use a fan or dehumidifier in order to speed up the process.</p>
          </li>
          <li>
            <p class="ml--5">The fastest method is to use a combination of windows and a fan or dehumidifier as well to create cross-ventilation and speed up the drying process.</p>
          </li>
          <li>
            <h3>What is the fastest way to dry carpet?</h3>
            <p class="ml--5">Do not worry about wet carpet, we take care of all steps of the drying process.
              <br></br>
              The instant dry carpet cleaning service aims to leave your carpet fresh and dry.
              <br></br>
              We use an air moving floor fan to make sure your carpet remains clean and as good as new after a professional cleaning.
            </p></li>
          <li>
            <h3>What is quick dry carpet cleaning?</h3>
            <p class="ml--5">The moisture left after the traditional carpet cleaning method creates an ideal environment for bacteria, mould, and mildew because of the large amount of water that is used. However, fast dry carpet cleaning reduces the risk of spreading germs all over the place. It is also known as very low-moisture cleaning. This technology is gaining popularity due to its quicker drying time, safer biodegradable cleaning options, and its ability to preserve the fibres of the carpet, unlike steam or hot water extraction methods. Quick dry carpet cleaning uses specialised equipment and techniques to achieve the desired results. The finishing touch of cleaning is to avoid the long drying of the carpet. For this purpose, we use a carpet turbo dryer, which significantly shortens the time.</p></li>
          <li>
            <h3>Is it OK to let water dry on carpet?</h3>
            <p class="ml--5">No, it is not OK. It is important to make sure your carpet is dry after some type of professional cleaning. If you don't properly dry your carpet after cleaning it, the damp and dark environment creates the perfect conditions for unwanted growth. Mildew, moulds, and other tiny organisms can start to multiply and spread in these moist areas.</p></li>
          <li>
            <h3>Does carpet dry better with heat or cold?</h3>
            <p class="ml--5">Both of them can help with drying, but there are some things you should know:</p></li>
          <li>
            <p>The cold air drying takes a lot longer because the water does not vanish so fast in cold temperatures.</p>
          </li>
          <li>
            <p>It is possible for the cold air to cause damage, such as more brittle and stiffer fibres.</p>
          </li>
          <li>
            <p>The best carpet drying temperature is around 22–24 °C.</p>
          </li>
          <li><p class="ml--5">We suggest letting a professional service clean your carpet in the next cleaning session, so you do not have to take care of drying your carpet. The perfect option for this is rapid dry carpet cleaning, after which you can enjoy your brand new looking carpet.</p></li>
          <li>
            <h3>Should I use hot air to dry the carpet?</h3>
            <p class="ml--5">Using hot air to dry your carpet after cleaning can speed drying times and reduce the risk of mould and mildew, but the hot air can cause potential damage to the carpet’s fibres. So, we do not recommend using hot air in order to protect your carpet and ensure effective drying.</p></li>
          <li>
            <h3>Should you open windows to dry carpet?</h3>
            <p class="ml--5">Yes. We advise you to open the windows and doors. This can help to circulate fresh air throughout the carpeted room, helping it dry faster because the air flow will speed up the process. Allowing sunlight to stream through the curtains and blinds can further accelerate the process.</p></li>
          <li>
            <h3>Will a fan help carpet dry faster?</h3>
            <p class="ml--5">Yes, it helps, especially when the weather outside is humid and you cannot open the window. The fan creates an appropriate funnel of air. Once there is a funnel of air blowing over the carpet, it starts to dry out the carpet quickly. The last step of our fast dry carpet cleaning includes a drying procedure with a hard floor dryer in order to speed up the process.</p></li>
          <li>
            <h3>Will a dehumidifier dry a wet carpet?</h3>
            <p class="ml--5">For sure, it will help. In case there is still humidity left after the fast dry carpet cleaning service, the dehumidifier is a faithful assistant in the fight against mould and mildew. It will absorb the moisture from the air and will also help to reduce potentially musty odours developing in your home. We suggest using a dehumidifier as an important step in keeping your home healthy and free of germs.</p></li>

          <div>
            <button class="read-more-toggle-button my-6 mx-auto uppercase b-none b-rd-1 py-3 px-7 bg-paper hover-bg-#f7f7f7:hover font-600 font-size-5 whitespace-nowrap" style="letter-spacing: 0.02rem; box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">Read more</button>

            <ul>
              <li>
                <h3>What temperature dries carpet faster?</h3>
                <p class="ml--5">The temperature at which a carpet dries faster depends on several factors, including the type of carpet, the level of humidity in the room, and the airflow. In general, warmer temperatures can help dry carpets more quickly than cooler temperatures. We advise you to keep the temperature in the room around 22–24 degrees.</p></li>
              <li>
                <h3>How long does it take to air dry a carpet?</h3>
                <p class="ml--5">Usually, the steam-cleaned carpets can take 12-24 hours to dry completely, depending on factors like humidity and ventilation. However, quick dry carpet cleaning has a significant advantage in drying time, with carpets typically drying within 1-2 hours because of the small amount of liquid used.</p></li>
              <li>
                <h3>How do you dry carpet in the winter?</h3>
                <p class="ml--5">As we say, the drying period of a carpet is no more than 2 hours because of the fans which circulate the air and decrease time. So, we suggest trying our rapid dry carpet cleaning in the winter as it offers shorter drying times. It allows you to resume using your carpets within 1–2 hours, enjoying your time at home without any hassle.</p></li>
              <li>
                <h3>How do you dehumidify wet carpet?</h3>
                <p class="ml--5">After fast dry carpet cleaning service, you can expect a clean and dry carpet. We use a Dri-Pod carpet and hard floor drier. It directs air across the floor in all directions to boost evaporation and quickly remove surface moisture.</p>
                <p class="ml--5">If, after the procedure, you still think there is some moisture left, you can activate a dehumidifier.</p>
                <p class="ml--5">Following the instant dry carpet cleaning, there should be no moisture left. However, if you suspect there might still be some moisture present, you can activate a dehumidifier. It will significantly help by extracting moisture from your entire house, including your carpets.</p></li>
              <li>
                <h3>Does heat or air dry carpet faster?</h3>
                <p class="ml--5">Both heat and air can play a role in drying carpets after cleaning, but their effectiveness depends on factors like humidity, airflow, and carpet type.</p>
                <p class="ml--5">Heat helps evaporate moisture more quickly. However, excessive heat can potentially damage some carpet fibres, so we do not recommend it.</p>
                <p class="ml--5">Proper air movement is essential for quick dry carpet cleaning. We use powerful air blowers to encourage swift drying by generating concentrated, straight air currents. Experience the change our speedy dry carpet cleaning can bring about and witness the transformation of your home into a cleaner, healthier, and more welcoming environment. Schedule your visit today and let us handle everything else!</p></li>

              <li>
                <h3>How do you dry a large wet carpet?</h3>
                <p class="ml--5">We suggest you follow these steps in order to dry your large wet carpet:</p></li>
              <li>
                <p>Firstly, make sure to extract the water by placing absorbent towels on the carpet. This will help soak up the remaining water.</p>
              </li>
              <li>
                <p>If there is not much water, you can put a fan or dehumidifier in the room to help with air circulation. It is good to check from time to time how it is going and to relocate the fan/dehumidifier. If you do not have any of this equipment, you can open the windows and doors so that air flows into the room.</p>
              </li>
              <li>
                <p>If there is still too much water, it may be necessary to seek the assistance of a professional instead of attempting to manage the issue alone.</p>
              </li>
              <li><p class="ml--5"><strong>When thinking about your upcoming carpet cleaning appointment, think about the many advantages of fast dry carpet cleaning service. It provides a mix of effectiveness, health advantages, and eco-friendly aspects that are hard to beat.</strong></p></li>
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
