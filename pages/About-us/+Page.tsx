import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import "solid-slider/slider.css";
import { createSlider, Slider, SliderButton, SliderProvider } from 'solid-slider';

function FleurDivider() {
  return (
    <div class="m-auto my-30 md-my-36 position-relative w-80%">
      <div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
      <div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="/assets/output-onlinepngtools.png" /></div>
    </div>
  );
}

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
        <div class="flex flex-justify-center">
          <div class={"flex w-3 h-3 rd-50% mx-2 mt-4 " + (current() === 0 ? "bg-brand-dark" : "bg-brand")}></div>
          <div class={"flex w-3 h-3 rd-50% mx-2 mt-4 " + (current() === 1 ? "bg-brand-dark" : "bg-brand")}></div>
          <div class={"flex w-3 h-3 rd-50% mx-2 mt-4 " + (current() === 2 ? "bg-brand-dark" : "bg-brand")}></div>
        </div>
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
        <div class="flex flex-justify-center">
          <div class={"flex w-3 h-3 rd-50% mx-2 mt-4 " + (current() === 0 ? "bg-brand-dark" : "bg-brand")}></div>
          <div class={"flex w-3 h-3 rd-50% mx-2 mt-4 " + (current() === 1 ? "bg-brand-dark" : "bg-brand")}></div>
          <div class={"flex w-3 h-3 rd-50% mx-2 mt-4 " + (current() === 2 ? "bg-brand-dark" : "bg-brand")}></div>
        </div>
      </div>
    </SliderProvider>
  );
};

export default function Page() {
  return (
    <>
      <div class="mt-20">
        <GalerrySliderDesktop />
        <GalerrySliderMobile />
      </div>

      <h1 class="mt-17 font-size-14 md-font-size-16 md-line-height-18 line-height-16">Who are we?</h1>

      <div class="mt-20 py-8 px-8 md-px-14 b-rd-3 bg-paper line-height-8 text-justify font-size-4.4" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

        <p>“Fine Carpet Cleaning'' London is a London-based carpet cleaning company which has been in the industry since 2012. It was founded with the commitment to grant our customers the expected quality of carpet cleaning services. Today we are pleased to have our reputation as a trusted and excellent performing agency.</p>

        <p>In our company, we follow the philosophy of always thinking about our clients first. We don’t just do cleaning jobs – we strive to be the most reliable and quality carpet cleaning company. Our core value is customer satisfaction and to provide the best possible services.</p>

        <p>We have years of experience dealing with residential and commercial customers and various types of carpets, rugs, upholstery and stains. Through the years we have been striving to improve our services by:</p>

        <ul>
          <li class="ml--5"><p>Always using the most top-graded equipment and machinery;</p></li>
          <li class="ml--5"><p>Regularly testing and selecting new cleaning products;</p></li>
          <li class="ml--5"><p>Improving our expertise at every opportunity by going through professional courses and special training.</p></li>
        </ul>

      </div>

      <FleurDivider></FleurDivider>

      <h2>Our accreditations</h2>

      <h3 style="font-family: 'Mona-Sans', sans-serif;" class="mt-15 mb-15">Fine Carpet Cleaning London is a qualified member of <a class="color-paper-link hover-color-paper-link-hover:hover" href="/" target="_blank" rel="noopener">"NCCA"</a> (National Carpet Cleaners Association)</h3>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <div class="mt-20 py-8 px-8 md-px-14 b-rd-3 bg-paper line-height-8 text-justify font-size-4.4" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

        <p>“NCCA” is one of the most respected and authoritative associations for training carpet cleaners. It was founded in 1968 and is devoted entirely to the cleaning, maintenance and restoration of carpets.</p>

        <p>The main objective of the association is to provide certificates of professionalism and high standards to partner companies that have passed a special test for practical knowledge and skills. This ensures the quality of the certified companies services.</p>

      </div>

      <h3 style="font-family: 'Mona-Sans', sans-serif;" class="mt-25 mb--5">Fine Carpet Cleaning London is listed on <a class="color-paper-link hover-color-paper-link-hover:hover" href="/" target="_blank" rel="noopener">“Checkatrade"</a></h3>

      <div class="mt-20 py-8 px-8 md-px-14 b-rd-3 bg-paper line-height-8 text-justify font-size-4.4" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

        <p>“Checkatradе” is an organisation founded in 1998 to help consumers in the UK to find their specialist in a particular area, such as quality carpet cleaning. The main goal of the organisation is the collection of all quality companies in one place covering high standards, transparency in customer service and prices.</p>

        <p>In order to be accredited by “Checkatrade”, “Fine Carpet Cleaning” London had to pass a detailed  inspection covering more than 20 aspects, such as:</p>

        <ul>
          <li class="ml--5">
            <p>ID.</p>
          </li>
          <li class="ml--5">
            <p>Reviews.</p>
          </li>
          <li class="ml--5">
            <p>Insurance.</p>
          </li>
          <li class="ml--5">
            <p>Qualifications.</p>
          </li>
          <li class="ml--5">
            <p>Membership in professional organisations.</p>
          </li>
          <li class="ml--5">
            <p>And many more.</p>
          </li>
        </ul>

        <p>After creating a listing on the “Checkatrade” website, each company is then permanently monitored based on user feedback posted on the organisation’s website.</p>

      </div>

      <h3 style="font-family: 'Mona-Sans', sans-serif;" class="mt-25 mb--5">Fine Carpet Cleaning London staff members are trained and certified</h3>

      <div class="mt-20 py-8 px-8 md-px-14 b-rd-3 bg-paper line-height-8 text-justify font-size-4.4" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

        <p>On one hand our ambition is to fully satisfy the customers needs to the best of our capabilities. On the other hand the company culture of “Fine Carpet Cleaning” London strongly encourages constant striving for excellence. These two reasons combined lead to the result that our staff members successfully completed a number of specialised professional courses like:</p>

        <ul>
          <li class="ml--5">
            <p>Professional carpet and upholstery cleaning;</p>
          </li>
          <li class="ml--5">
            <p>Advanced spot and stain treatment and removal;</p>
          </li>
          <li class="ml--5">
            <p>And more.</p>
          </li>
        </ul>

        <p>Оur goal is to be prepared for any situation, no matter how challenging it is, and leave nothing to chance.</p>

      </div>

      <FleurDivider></FleurDivider>

      <h2>Equipment and products we use</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">

        <p>At Fine Carpet Cleaning London, we use the most top-graded cleaning equipment and premium products, ensuring the highest quality service. Our approach includes:</p>

        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <p class="ml--5"><strong>Highly Developed Machinery:</strong> We employ some of the most powerful and effective portable machines worldwide. After extensive testing of various machine brands available in the UK market, we have chosen the finest, including "Mytee" (a leading US manufacturer) and "Airflex" (one of the top UK manufacturers). With that, our team engineer has enhanced and fine-tuned these machines to ensure peak performance.</p>
          </li>
          <li class="ml--5">
            <p class="ml--5"><strong>High-Filtration Vacuum Cleaner:</strong> Our high-filtration twin-motor vacuum cleaner is the best in the market, from what we have seen and experienced. It's purposefully designed for high-performance expert carpet cleaning. One of the twin motors vigorously agitates the carpet, while the other effectively suctions away loose dirt, dry soil, and dust.</p>
          </li>
          <li class="ml--5">
            <p class="ml--5"><strong>Premium Cleaning Products:</strong> We utilise a comprehensive range of cleaning products from over 20 renowned brands in both the UK and US markets. Thorough testing has allowed us to select the most effective cleaning detergents available. Among these brands are "Alltec," "Prochem," "Chemspec," "Solution World of Clean," "TMF," and more. This diverse selection allows our technicians to choose the most suitable detergents for each unique situation, considering factors like the carpet's fabric, level of soiling, and the type of stains that require treatment.</p>
          </li>
        </ol>

        <p>Combining these advanced cleaning tools and premium products with our services ensures that we deliver top-quality professional carpet cleaning, meeting and exceeding your expectations.</p>

      </div>

      <FleurDivider></FleurDivider>

      <h2>What our customers say about us</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">GET A QUOTE</a></button>
        <button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">SERVICES</a></button>
      </div>

    </>
  );
}
