import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import "solid-slider/slider.css";
import { Component, createSignal, Show } from 'solid-js';
import RiYoutubeFill from '~icons/ri/youtube-fill';
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { createSlider, Slider, SliderButton, SliderProvider } from 'solid-slider';
import { RotatingBanners } from '../../../components/RotatingBanners';
import { Typography } from '../../../components/Typography';
import { createCollapsable } from '../../../components/Collapsable';

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
          <Typography variant="h3">Do you have a cancellation fee?</Typography>
          <Typography variant="body">Yes, we do have a cancellation fee, but it is only applied if you cancel on the day of the cleaning. In that case, you will lose your deposit.</Typography></li>
        <li>
          <Typography variant="h3">Do I need to pay for the congestion/parking charge?</Typography>
          <Typography variant="body">Yes, we request that you arrange a suitable parking space for our vehicles within close proximity of the property since we carry heavy equipment, and to cover any parking/congestion expenses if applicable.</Typography></li>
        <li>
          <Typography variant="h3">Do I need to move furniture before water free carpet cleaning?</Typography>
          <Typography variant="body">We kindly request your assistance in relocating small, fragile, or valuable furniture items, such as lamps and ornaments, for insurance reasons. If possible, please position these items in a secure area before our team's arrival, one that will remain undisturbed during the cleaning process.</Typography>
          <Typography variant="body">For your convenience, we are more than happy to assist in moving other lightweight furniture, such as chairs, armchairs, and tables during the cleaning. Once the cleaning is completed, we will return these items to their original positions.</Typography>
          <Typography variant="body">In cases where heavy furniture, such as sofas, beds, wardrobes, or cupboards, needs to be moved, an additional fee will apply. This accounts for the extra time and effort required by our technician, who will receive appropriate compensation. Our primary goal is to ensure a stress-free experience for you throughout the entire process.</Typography></li>
        <li>
          <Typography variant="h3">What happens if I live on the 4th floor or above and I have no lift?</Typography>
          <Typography variant="body">Due to the weight of our equipment, which exceeds 50kg, we apply an additional charge for each additional floor that requires manual carrying. This charge is necessary because this process typically consumes a significant amount of time and can lead to faster tiring of our technicians. Because of that, on such days, we may not be able to complete as much work as we typically do.</Typography></li>
        <li>
          <Typography variant="h3">Are you insured?</Typography>
          <Typography variant="body">Yes, we are fully insured.</Typography></li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">What happens if your cleaner damages anything while performing carpet dry cleaning services?</Typography>
          <Typography variant="body">We are fully insured and if anything is damaged we are fully covered.</Typography></li>
        <li>
          <Typography variant="h3">How long does the process of dry pro carpet cleaning take?</Typography>
          <Typography variant="body">The process of water free carpet cleaning depends on the degree of soiling of the carpet, whether stain removal is required and whether furniture is present. Professional dry carpet cleaning can take between 15 and 30 minutes for each room. However, heavily soiled carpets or those with many stains may require more time to ensure thorough cleaning. The existence of furniture might also impact the drying times, as it may need to be moved. This cleaning method is especially beneficial in commercial settings or high-traffic areas where carpets need to be ready for use quickly.</Typography></li>
        <li>
          <Typography variant="h3">How long does it take for the carpet to get dry after a carpet dry cleaning in London is performed?</Typography>
          <Typography variant="body">Since the dry carpet cleaning method uses a cleaning product that is in powder form and little to no water is involved in the cleaning process, the carpet will be completely dry almost immediately after the cleaning procedure has ended.</Typography></li>
        <li>
          <Typography variant="h3">Do you guarantee that all stains will be removed after professional dry carpet cleaning services?</Typography>
          <Typography variant="body">No, unfortunately, we are unable to offer an absolute guarantee due to various factors that are beyond our control. These factors include:</Typography></li>
        <li>
          <p>The age of the stains;</p>
        </li>
        <li>
          <p>The nature of the substance that caused the stains;</p>
        </li>
        <li>
          <p>The carpet's type and fabric;</p>
        </li>
        <li>
          <p>Any prior attempts to treat the stains.</p>
        </li>
        <li>
          <p>Nevertheless, our commitment is to exert every conceivable effort to remove all stains from your carpet. Our strategy includes:</p>
        </li>
        <li>
          <p>The use of cutting-edge cleaning equipment;</p>
        </li>
        <li>
          <p>The application of carefully chosen high-quality detergents;</p>
        </li>
        <li>
          <p>Tailoring our approach to suit the specific carpet type and the nature of the staining agent, thereby optimising the likelihood of the best possible outcome.</p>
        </li>
        <li>
          <Typography variant="h3">Can you clean the stain from my natural fibre carpet, after I have attempted to clean it?</Typography>
          <Typography variant="body">If you have attempted to clean your natural fibre carpet with water or via a steam cleaning method, we unfortunately cannot remove the stain. The reason is that carpets that are made of natural fabrics such as seagrass, coir, sisal carpets, silk, viscose or jute are very delicate and can only be cleaned with a dry cleaning method that uses little to no water. The use of water and steam on such carpets will damage them. In such an unfortunate case the only way to save your carpet is to look for a professional carpet dyeing company.</Typography></li>
        <li>
          <Typography variant="h3">How soon can I expect a cleaner to visit me?</Typography>
          <Typography variant="body">We will make every effort to secure an appointment for you as quickly as possible. Typically, our schedule is booked for the next three days, although there may be occasional exceptions.</Typography></li>
        <li>
          <Typography variant="h3">Can you give me a quote over the phone, or do you have to visit my property?</Typography>
          <Typography variant="body">Yes, we can provide you with an estimate over the phone, eliminating the need for an in-person visit to your property. However, for commercial properties, a site visit may be necessary. Additionally, you have the option to get a dry carpet cleaning quote online.</Typography></li>
        <li>
          <Typography variant="h3">What payment methods do you accept for waterless carpet cleaning services?</Typography>
          <Typography variant="body">We accept debit/credit cards, and cash payments directly to our team.</Typography></li>
        <li>
          <Typography variant="h3">Can you provide me with an invoice for the professional dry carpet cleaning in London?</Typography>
          <Typography variant="body">Yes, we will send you a receipt via email.</Typography></li>
        <li>
          <Typography variant="h3">Are you qualified?</Typography>
          <Typography variant="body">Yes, we are qualified and fully trained members of NCCA (National Carpet Cleaners Association) – the UK’s recognised industry qualification, and of Checkatrade.</Typography></li>
        <li>
          <Typography variant="h3">How long have you been in the carpet cleaning business?</Typography>
          <Typography variant="body">Since 2012, we have been actively working in the carpet cleaning industry, serving both commercial and residential clients. Over these years, we've encountered a wide array of carpets, rugs, upholstery, and stains and gained valuable experience. This experience, coupled with our commitment to achieve excellence, has driven us to enhance our services through:</Typography></li>
        <li>
          <p><strong>Continual Equipment Upgrades:</strong> We consistently replace our equipment and machinery with superior alternatives whenever they become available in the market.</p>
        </li>
        <li>
          <p><strong>Ongoing Product Enhancement:</strong> We regularly assess and improve our cleaning products to ensure they remain at the forefront of industry standards.</p>
        </li>
        <li>
          <p><strong>Continuous Learning and Development:</strong> We are dedicated to enhancing our knowledge and skills by actively pursuing additional professional courses and training opportunities. This commitment enables us to stay updated with the latest industry advancements.</p>
        </li>
        <li>
          <Typography variant="h3">Can you give me a discount for the dry organic carpet cleaning services?</Typography>
          <Typography variant="body">Given our commitment to provide high-quality professional dry carpet cleaning services, which involve the use of highly effective equipment and a wide selection of more than 20 premium cleaning products, our carpet dry cleaning prices stand out as not only highly competitive but also the most attractive in the market. We strongly encourage you to look at the advantages of having the services you require performed at once, which proves to be more cost-effective than having them executed individually. This cost-efficiency is because of the substantial initial cost and additional fees that come with each technician visit, considering factors like travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography></li>
        <li>
          <Typography variant="h3">What is dry carpet cleaning?</Typography>
          <Typography variant="body">Dry carpet cleaning is a carpet cleaning method that doesn't require the use of a significant amount of water. Instead of water-based cleaning solutions, it typically involves the use of specialised dry cleaning compounds or powders.</Typography></li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">Does dry cleaning kill carpet beetles?</Typography>
          <Typography variant="body">Dry pro carpet cleaning typically doesn't involve a process that would effectively kill carpet beetles. Dry carpet cleaning companies typically rely on the use of specialised dry cleaning compounds or powders and mechanical agitation to remove dirt and stains from carpets. This method is effective for cleaning and maintaining carpets, so it may eliminate the potential problem of the carpet having carpet beetles.</Typography>
          <Typography variant="body">If you suspect a carpet beetle infestation in your home, we advise you to take specific measures to address the problem.</Typography></li>
        <li>
          <Typography variant="h3">Does dry carpet cleaning work?</Typography>
          <Typography variant="body">Yes, water free carpet cleaning really works. The advantages of dry organic carpet cleaning include quicker drying times compared to traditional steam cleaning, as well as less risk of over-wetting the carpet. It's often used for maintenance cleaning or in situations where minimal drying time is essential, such as in commercial settings.</Typography></li>
        <li>
          <Typography variant="h3">Is dry carpet cleaning effective?</Typography>
          <Typography variant="body">Dry organic carpet cleaning is effective, but it's important to note that it may not be as effective in deep cleaning heavily soiled carpets or in removing certain types of stains. The choice between dry (no water) and wet (steam) carpet cleaning methods depends on factors like the carpet's condition, the type of stains, and the specific cleaning needs. Check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/steam">steam carpet cleaning page</a> to read more and to make an informed decision.</Typography></li>
        <li>
          <Typography variant="h3">How much does it cost to dry clean a carpet?</Typography>
          <Typography variant="body">How much the carpet dry cleaning costs depends on the following factors:</Typography></li>
        <li>
          <p>The quantity and size of the carpets;</p>
        </li>
        <li>
          <p>Level of soiling;</p>
        </li>
        <li>
          <p>The type and fabric of the carpets;</p>
        </li>
        <li>
          <p>Ease of access to the carpets.</p>
        </li>
        <Typography variant="body">To learn more, check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/steam">carpet dry cleaning prices</a>.</Typography>
        <li>
          <Typography variant="h3">What is a dry carpet cleaning process?</Typography>
          <Typography variant="body">Here's the process of carpet cleaning without water:</Typography></li>
        <li>
          <p><strong>Application of Cleaning Compound:</strong> A dry cleaning compound or powder is applied to the carpet.</p>
        </li>
        <li>
          <p><strong>Extraction:</strong> The carpet is vacuumed thoroughly to remove the compound, along with the dirt and stains that have been absorbed by it.</p>
        </li>
        <li>
          <Typography variant="h3">Can carpets be dry-cleaned?</Typography>
          <Typography variant="body">Yes, carpets can be dry cleaned using a method known as dry carpet cleaning. No water carpet cleaning is an alternative to traditional wet or steam cleaning methods. It is mostly used in the following typical scenarios:</Typography></li>
        <li>
          <p>If your carpet is made of natural fibres, such as seagrass, coir, sisal carpets, silk, viscose or jute. In this case dry carpet cleaning is the only option you have as steam cleaning would cause damage to such carpet.</p>
        </li>
        <li>
          <p>In case that you own a big facility and you can’t tolerate any off-time for letting the carpet dry after steam cleaning.</p>
        </li>
        <li>
          <p>In case your carpets do not need deep cleaning but only refreshment.</p>
        </li>

        <li>
          <Typography variant="h3">How does dry carpet cleaning work?</Typography>
          <Typography variant="body">Dry carpet cleaning is a cleaning method that doesn't rely on a significant amount of water. Instead, it uses specialised dry-cleaning compounds or powders to clean carpets. These cleaning compounds attract dirt and grime and are agitated into the fibres of the carpet using a special machine. Finally, the carpet is vacuumed thoroughly, leaving it refreshed and clean.</Typography>
          <Typography variant="body">No water carpet cleaning services have several advantages, including:</Typography></li>
        <li>
          <p><strong>Quick Drying:</strong> Since it uses minimal moisture, the carpet typically dries much faster than with wet cleaning methods.</p>
        </li>
        <li>
          <p><strong>Less Risk of Over-Wetting:</strong> There's a reduced risk of over-wetting the carpet, which can lead to mould and mildew growth.</p>
        </li>
        <li>
          <p><strong>Minimal Disruption:</strong> It's less disruptive because there's no need to wait for the carpet to dry.</p>
        </li>
        <li>
          <Typography variant="h3">Is “Fine Carpet Cleaning” Ltd. a specialised dry carpet cleaning company?</Typography>
          <Typography variant="body">Yes, “Fine Carpet Cleaning” Ltd is a specialised dry carpet cleaning company. Anyhow apart from professional dry carpet cleaning, we are offering a variety of  <a class="color-paper-link hover-color-paper-link-hover:hover" href="/steam">other cleaning services.</a></Typography></li>
      </ul>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Dry carpet cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our dry carpet cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd are offering dry carpet cleaning services. These services are used for cleaning finer, more delicate, and natural carpets, rugs, and upholstery, which are very vulnerable to water damage. This cleaning method is essentially carpet cleaning without water and it is safe for babies, pets and allergy sufferers.</p>
        <p>The benefits of using dry carpet cleaning services are:</p>

        <ul>
          <li class="ml--5">
            <p>It is suitable for all types of carpets, from wool to synthetic, including all natural fibres found in homes across the UK, <strong>such as seagrass, coir, sisal carpets, silk, viscose, or jute rugs.</strong></p>
          </li>
          <li class="ml--5">
            <p>Little to no moisture is used, which eliminates the need for drying time.</p>
          </li>
          <li class="ml--5">
            <p>Dry carpet cleaning is a great solution for cleaning big facilities without the luxury of off-time.</p>
          </li>
          <li class="ml--5">
            <p>There is no risk of sticky shampoo residue or mould problems.</p>
          </li>
          <li class="ml--5">
            <p>It is a significantly faster method when compared to hot water extraction.</p>
          </li>
          <li class="ml--5">
            <p>It is not the most efficient method for removing stains, but it refreshes the carpet and brings back its colour.</p>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our dry carpet cleaning services: </p>

        <ul>
          <li class="ml--5">
            <p>You reach out to us.</p>
          </li>
          <li class="ml--5">
            <p>We give tailored service recommendations based on your needs.</p>
          </li>
          <li class="ml--5">
            <p>We provide you with a price quote.</p>
          </li>
          <li class="ml--5">
            <p>If you're satisfied with our terms, we arrange an appointment at your convenience.</p>
          </li>
          <li class="ml--5">
            <p>Our skilled technician visits your property to perform the dry carpet cleaning on your carpet.</p>
          </li>
        </ul>
        <h3>What do we offer:</h3>
        <p>Other carpet cleaning services we perform:</p>

        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/steam">Steam carpet cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Eco-friendly carpet cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/">Fast-dry carpet cleaning</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h3>The process of our dry carpet cleaning in London</h3>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ul>
          <li class="ml--5">
            <p>The carpet is thoroughly vacuumed with a powerful cleaner to extract most of the dirt and grime particles.</p>
          </li>
          <li class="ml--5">
            <p>A biodegradable cleaning compound is applied to the carpet, which attracts dirt and grime.</p>
          </li>
          <li class="ml--5">
            <p>After that, a machine is used for its agitation into the fibres.</p>
          </li>
          <li class="ml--5">
            <p>Finally, everything is vacuumed off, leaving the carpet both clean and dry. This leaves the carpet shinier, refreshed and clean.</p>
          </li>
          <li class="ml--5">
            <p>For smaller areas, we may brush the cleaning powder into the carpet by hand using a large brush, then vacuum it off. We use this method for small spaces that don’t need the large equipment we normally would use, and the effect is the same, leaving the carpet clean and fresh.</p>
          </li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our dry carpet cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning supplies.</h3>
            <Typography variant="body">We at "Fine Carpet Cleaning Ltd" use the most effective and top-of-the-line cleaning equipment and premium products in our no-water carpet cleaning. Our machines are recognised as some of the most powerful and effective portable machines globally.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Efficient vacuum cleaner.</h3>
            <Typography variant="body">The machine we have carefully selected to use for our waterless carpet cleaning is professionally designed for commercial use - the “SEBO BS 36”. With its counter rotating brush (CRB ) it brings dirt and debris to the surface, where it can be easily extracted. This will leave your carpet looking and feeling fluffy and fresh, and will help to extend its lifespan.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Thoughtfully chosen cleaning products.</h3>
            <Typography variant="body">To ensure exceptional results in our dry pro carpet cleaning, we have extensively tested which cleaning product gives the best results and have selected the most efficient one - the <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://envirodri.com/">“Envirodri”</a> dry carpet cleaning powder. This cleaning product is eco-clean and has been designed to attract and absorb dirt and soiling from all carpet types. It is then vacuumed away to leave behind cleaner, fresher and newer looking carpets.</Typography>
            <Typography variant="body">With our cutting-edge cleaning equipment and premium products, we guarantee a top-quality carpet dry cleaning service.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our professional carpet cleaning services in London</h2>

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

      <h2 class="line-height-12 md-line-height-14">Video from our professional carpet cleaning services in London</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Carpet dry cleaning prices</h2>

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

      <h2 class="line-height-12 md-line-height-14">Our dry carpet cleaning services specialist advises:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use a stain defender.</h3>
            <Typography variant="body">Our dry carpet cleaning specialist advises adding a stain protector to your carpet and upholstery whenever possible. This measure can save you a significant amount on professional stain removal services. For more information on the benefits of stain protection, we recommend further visiting <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">our dedicated stain protection services page.</a></Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Professional Stain Removal</h3>
            <Typography variant="body">It's highly recommended to hire a professional stain removal service if your carpet or upholstery becomes stained. “Do it yourself” (DIY) attempts or letting the stain dry can lead to fabric damage, making the complete removal very hard. In fact, self-cleaning attempts can seal the stain, making it even more challenging or impossible for professionals to remove. Looking for <a class="color-paper-link hover-color-paper-link-hover:hover" href="/">professional stain removal services</a> can preserve the value of your carpet or upholstery.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Comprehensive Services</h3>
            <Typography variant="body"><a class="color-paper-link hover-color-paper-link-hover:hover" href="/services">Our extensive range of services</a> includes upholstery cleaning, rug cleaning, and more. Explore our full spectrum of expertise and make well-informed decisions for your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Cost-Efficiency</h3>
            <Typography variant="body">We recommend bundling multiple services and having them performed at once because it is more cost-effective than scheduling them individually, as advised by our dry carpet cleaning expert. This is due to the substantial initial cost and additional charges for separate technician visits because of factors like travel time, parking, and equipment handling.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Health Benefits</h3>
            <Typography variant="body">Maintaining clean carpets, rugs and upholstery is crucial for maintaining your health. These items can accumulate dust, microorganisms, and dirt, potentially leading to health problems like allergies, breathing difficulties and skin issues. To put an end to these issues, our dry carpet cleaning specialist suggests booking professional cleaning services, ideally at least once a year, or more frequently if your carpets experience high traffic.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Regular vacuuming</h3>
            <Typography variant="body">Our specialists in dry carpet cleaning services advise to vacuum regularly, no matter what the type of the fabric that the carpet is made of. We suggest using an upright vacuum cleaner to remove dust that has been penetrated deeply into the carpet fibres.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews for our professional carpet steam cleaning services in London</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our dry carpet cleaning services</h2>

<FaqSection/>

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/services" class="c-paper font-size-5">SERVICES</a></button>
        <button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/Contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>
      </div>



    </>
  );
}
