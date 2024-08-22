import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import "solid-slider/slider.css";
import { Component, createSignal, Show } from 'solid-js';
import RiYoutubeFill from '~icons/ri/youtube-fill';
import { FacebookLikeGallery } from '../../components/FacebookLikeGallery';
import { createSlider, Slider, SliderButton, SliderProvider } from 'solid-slider';
import { RotatingBanners } from '../../components/RotatingBanners';
import { createCollapsable } from '../../components/Collapsable';
import { Typography } from '../../components/Typography';

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
      <ul>
        <li>
          <Typography variant="h3">Will you fee me if I cancel the service?</Typography>
          <Typography variant="body">Yes, but it is only applied when you cancel on the day of the antiviral sanitisation services. In that case, you will lose your deposit.</Typography></li>
        <li>
          <Typography variant="h3">Should I pay for the congestion / parking charge?</Typography>
          <Typography variant="body">Yes, we kindly ask that the client arrange a suitable parking space for our vehicles within close proximity of the property or to cover any parking / congestion expenses.</Typography></li>
        <li>
          <Typography variant="h3">What if I live on the 4th floor or above and I have no lift?</Typography>
          <Typography variant="body">Due to the weight of our devices, which exceeds 50 kilograms, a fee will be applied for each extra floor that requires manual movement. This is due to the fact that it takes an extended period of time and can result in faster weariness among our technicians. As a result, our overall production for the day may be lower than our usual output.</Typography></li>
        <li>
          <Typography variant="h3">Is your company insured?</Typography>
          <Typography variant="body">Yes, we are completely insured.</Typography></li>
        <li>
          <Typography variant="h3">What happens if your cleaner damages anything?</Typography>
          <Typography variant="body">We are fully insured and if an accident happens it will be covered by our company.</Typography></li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">How long does the process of antiviral sanitisation services take?</Typography>
          <Typography variant="body">The duration mainly depends on the size of the room and is not fixed. The usual sanitisation is 75 minutes per room.</Typography></li>
        <li>
          <Typography variant="h3">How soon can I expect your cleaner to visit me?</Typography>
          <Typography variant="body">We will try to get you an appointment as soon as possible. Usually, we are fully booked for the following three days, but sometimes there are exceptions.</Typography></li>
        <li>
          <Typography variant="h3">Can you give me a quote over the phone or do you need a viewing in person?</Typography>
          <Typography variant="body">Yes, we can give you a quote over the phone, there is no need for us to visit your property. You can also receive a quote online.</Typography></li>
        <li>
          <Typography variant="h3">What payment methods do you accept?</Typography>
          <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments directly handed to our team.</Typography></li>
        <li>
          <Typography variant="h3">Can you provide me with an invoice?</Typography>
          <Typography variant="body">Yes, we will send you a receipt via email.</Typography></li>
        <li>
          <Typography variant="h3">Are you qualified for your antiviral sanitisation services?</Typography>
          <Typography variant="body">Yes, we are qualified to do antiviral sanitisation. We have received the appropriate information, instruction and training and have achieved the required standard in Infection Control and Bio-Hazard Fogging.</Typography>
          <Typography variant="body">As for the carpet and upholstery cleaning services, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s recognised industry qualification.</Typography>
        </li>
        <li>
          <Typography variant="h3">How long have you been in the cleaning business?</Typography>
          <Typography variant="body">We've been involved in the cleaning business since 2012. We've encountered a wide range of carpets, rugs, upholstery, and stains throughout the years, gaining important experience. Our dedication to delivering outstanding services has prompted us to improve our performance in the following ways:</Typography></li>
        <li>
          <p>Continuously upgrading our equipment and machinery with superior alternatives whenever they become available;</p>
        </li>
        <li>
          <p>Regularly evaluating and refining our cleaning solutions to ensure the greatest quality of service;</p>
        </li>
        <li>
          <p>Commitment to improving our knowledge and abilities through regular professional courses and training, continually working to improve our cleaning services expertise.</p>
        </li>
        <li>
          <Typography variant="h3">Can you give me a discount?</Typography>
          <Typography variant="body">Our cleaning services are well-known for their exceptional quality, utilizing state-of-the-art equipment and an extensive selection of premium cleaning materials. What truly sets us apart is our highly competitive and attractive pricing. We suggest bundling all the services you need to get a better price. This cost efficiency is due to the initial expenses and extra fees tied to each technician visit, including travel time, parking, and managing bulky equipment during loading and unloading.</Typography></li>
        <li>
          <Typography variant="h3">What is antiviral sanitisation?</Typography>
          <Typography variant="body">We offer specialised disinfection and antiviral sanitisation services. The procedure is very straightforward. It kills 99.99% of all germs and viruses on any surface using the most effective method known - fogging. When the procedure comes into contact with a surface, it has an immediate effect.</Typography></li>
        <li>
          <Typography variant="h3">Why hire professionals to perform antiviral sanitisation?</Typography>
          <Typography variant="body">Daily antibacterial cleaning needs to occur both at home and in the office. The regular disinfection cleaning and maintenance of our homes and offices is part of everyone’s lives. However, normal cleaning products may not be able to kill all of the bacteria and viruses on surfaces and furniture. This is where our professional house and office sanitising service comes in handy for you.</Typography></li>
        <li>
          <Typography variant="h3">What European Standards do you hold?</Typography>
          <Typography variant="body">We have the following European Standards: E14476, EN1276, EN1650.</Typography>
        </li>
        <li>
          <Typography variant="h3">What viruses and bacteria do your bio product terminate?</Typography>
          <Typography variant="body"><strong>Viruses:</strong> Vaccinia Virus – Coronavirus - Adenovirus – Avian Bronchitis Virus – Canine Distemper Virus – Canine Parvovirus – Feline CaliciVirus (SRSV) – Feline Leukaemia Virus – Feline Panleukopenia Virus – Feline Picornavirus – Hepatitis B Virus – Herpes Simplex Type 1 (HSV 1) - Herpes Simplex Type 2 – Human Immunodeficiency Virus (HIV) – Infectious Bovine Rhinotracheitis Virus - Influenza Virus Type A – Newcastle Disease Virus – Porcine Parvovirus – Pseudorabies Virus - Rabies Virus – Respiratory Syncytial Virus – Rubella Virus – Transmissible Gastroenteritis</Typography>
          <Typography variant="body"><strong>Bacteria and Spores:</strong> Staphylococcus aureus (3 separate multi-resistant strains) Pseudomonas aeruginosa (multi-resistant strain) - Escherichia coli (including O157 and multi-resistant strains) – Enterococcus hirae – Klebsiella pneumoniae – Salmonella choleraesuis – Salmonella enteritidis – Salmonella typhi – Salmonella typhimurium – Staphylococcus epidermidis – Streptococcus faecalis (multi-resistant strain) – Streptococcus pyogenes – Acinetobacter calcoaceticus – Bordatella bronchiseptica – Clostridium difficile – Enterobacter aerogenes – Enterobacter cloacae – Fusobacterium necrophorum – Listeria monocytogenes – Pasteurella multocida – Proteus mirabilis – Proteus vulgaris - Serratia marcescens – Shigella flexeri – Shigella sonnei – Chlamydia psittaci</Typography>
        </li>
      </ul>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Antiviral sanitisation services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our antiviral sanitisation services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform antiviral sanitisation services. It is important to keep your workplace and home sanitised in order to eliminate the spread of bacteria and viruses. For this reason, we provide specialised antiviral sanitisation services and disinfection cleaning. It kills 99.99% of all bacteria and viruses on all surfaces using a fogging method, which gives the best results and has an immediate effect. Our antiviral sanitisation services provide other advantages, such as:</p>
        <ul>
          <li class="ml--5">
            <p>Using biodegradable products;</p>
          </li>
          <li class="ml--5">
            <p>Being safe for children and pets;</p>
          </li>
          <li class="ml--5">
            <p>Being non-hazardous and non-toxic;</p>
          </li>
          <li class="ml--5">
            <p>The Bio-detergent we use passing BS EN 1276;</p>
          </li>
          <li class="ml--5">
            <p>Leaving a lasting layer of protection.</p>
          </li>
        </ul>
        <h3>Simple booking process:</h3>
        <p>The usual process of booking our antiviral sanitisation services:</p>
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
        <p>Other professional cleaning services we offer are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services">Carpet cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services">Upholstery cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-rug-cleaning-services">Rug cleaning services</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2>The process of our antiviral sanitisation services:</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <Typography variant="body"><strong>Survey:</strong> Once we arrive, the first thing to do is to determine what needs to be done and how the service will be performed.</Typography>
          </li>
          <li class="ml--5">
            <Typography variant="body"><strong>Preparations:</strong> The preparations for our antiviral sanitisation are simple yet important. All electrical appliances must be switched off or unplugged. All fire alarm devices must be removed or fully covered.</Typography>
          </li>
          <li class="ml--5">
            <Typography variant="body"><strong>Sanitisation:</strong> After the preparations are done, we will begin the sanitisation with a fogging machine using a top-tier, hospital-grade, bio detergent which is extremely efficient against all viruses and bacteria, especially COVID-19.</Typography>
          </li>
          <li class="ml--5">
            <Typography variant="body"><strong>Ventilation:</strong> The next step is to leave the disinfected room to ventilate. Our technician will open the windows just a few inches so it can ventilate properly. Approximately 60 minutes are needed to achieve the best result.</Typography>
          </li>
          <li class="ml--5">
            <Typography variant="body"><strong>Protection:</strong> Our antiviral bio detergent will leave an invisible protective layer on the surface killing any viruses and bacteria that will come into contact after the sanitisation. Please keep in mind that how long the protective layer will last depends on how often the surface is used.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our antiviral sanitisation services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <p>"Fine Carpet Cleaning" Ltd uses high-quality products and machinery for cleaning.</p>
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Best devices</h3>
            <Typography variant="body">Our portable units are regarded as the most effective and functional in the world. We begin the antiviral sanitisation services with a fogging machine that we have selected after a thorough examination of several machine brands on the UK market. Furthermore, our in-house engineer improves the machine, making major modifications to maximise its performance.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Highest-quality cleaning solutions</h3>
            <Typography variant="body">We use over 20 different cleaning products from top manufacturers in the UK and US markets. We have chosen the best items after extensive testing of all accessible options. For performing our antiviral sanitisation services we use a top-tier, hospital-grade, bio detergent which is extremely efficient against all viruses and bacteria.</Typography>
            <Typography variant="body">With our cleaning equipment and top-quality products, we are able to perform cleaning and antiviral sanitisation services of the utmost quality.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our antiviral sanitisation services</h2>

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

      <h2 class="line-height-12 md-line-height-14">Video from our antiviral sanitisation services</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Prices of our antiviral sanitisation services</h2>

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

      <h2 class="line-height-12 md-line-height-14">Our antiviral sanitisation services specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Add a stain protector</h3>
            <Typography variant="body">When possible, our cleaning specialist recommends adding a stain guard to your carpets, rugs, and upholstery. This simple step can result in huge reductions in expenses for stain removal services. If you're wondering, we recommend exploring the benefits of <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-stain-removal-services">stain removal services</a>.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Seek assistance from a professional cleaning service</h3>
            <Typography variant="body">If your carpet or furniture has been stained, our expert strongly advises using a professional stain removal firm rather than attempting to clean it yourself. This is due to the fact that trying to remove the stain or allowing it to dry might cause fabric damage, making total stain removal highly unlikely. In reality, such attempts may seal the stain, making removal considerably more difficult, if not impossible, for an experienced cleaning company. As a result, booking a stain removal service might help preserve your costly rug or upholstery, which could be worth a lot of money.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Explore our list of services</h3>
            <Typography variant="body">We provide a variety of services, such as carpet cleaning and upholstery cleaning. Our staff offers a range of solutions, so don't miss the chance to learn more about our capabilities and make informed decisions regarding your cleaning requirements.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Unite multiple services</h3>
            <Typography variant="body">Our experienced cleaning specialists recommend scheduling multiple services in a single appointment to save money. Individual technician visits come with additional costs, including travel time, parking, and handling heavy equipment during loading and unloading, which makes separate appointments less economical.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy health benefits</h3>
            <Typography variant="body">If you own carpets, rugs, or upholstery, you should understand the health advantages associated with keeping them clean. These items can build significant amounts of dust, germs, and soil particles, which can cause health problems. Neglecting their care can lead to various reactions, skin issues, and allergies. To avoid these problems, our expert recommends hiring cleaning professionals at least once a year. If you have dogs, children, or carpets that are easily stained, we recommend scheduling such services more frequently.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews of our antiviral sanitisation services</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our antiviral sanitisation services</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
