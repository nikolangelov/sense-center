import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../components/FacebookLikeGallery';
import { createCollapsable } from '../../components/Collapsable';
import { Typography } from '../../components/Typography';
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../components/FrequentlyOrderedTogether';

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
      <li>
        <Typography variant="h3">1. Will you fee me if I cancel the carpet stain protection?</Typography>
        <Typography variant="body">There is a cancellation fee, however, it only applies if you cancel on the same day of the carpet cleaning or Scotchgard appliance. In that case, you will lose the deposit you made.</Typography></li>
      <li>
        <Typography variant="h3">2. Should I pay for the congestion / parking charge?</Typography>
        <Typography variant="body">Yes, we sincerely ask that the customer provide us with a suitable parking place near the building or cover any parking or traffic fees.</Typography></li>
      <li>
        <Typography variant="h3">3. What if I live on the 4th floor or above and I have no lift?</Typography>
        <Typography variant="body">Because our machinery weighs above fifty kilogrammes, each level that must be transported by hand will incur an additional price. This is because it typically takes a long period, which may cause our technicians to grow weary sooner. As a result, our daily production may be lower than our average performance.</Typography></li>
      <li>
        <Typography variant="h3">4. Are you insured?</Typography>
        <Typography variant="body">Yes, our carpet cleaning and Scotchgard appliance company is completely insured.</Typography></li>
      <li>
        <Typography variant="h3">5. What happens if your cleaner damages anything?</Typography>
        <Typography variant="body">We are fully insured and if an accident happens it will be covered by us.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. How soon can I expect your cleaner to visit me?</Typography>
        <Typography variant="body">We will do our best to organise a slot for you as soon as possible. We are normally completely booked for the following three days, although there are at times exceptions.</Typography></li>
      <li>
        <Typography variant="h3">7. Can you give me a quote for the carpet stain protection over the phone or do you need a viewing in person?</Typography>
        <Typography variant="body">Yes, we can provide you with a price for carpet stain protection over the phone; there is no need for us to come to your home. You are also able to get a price for stain protection services online.</Typography></li>
      <li>
        <Typography variant="h3">8. What payment methods do you accept for the carpet stain protection?</Typography>
        <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments given directly to our team.</Typography></li>
      <li>
        <Typography variant="h3">9. Can you provide me with an invoice?</Typography>
        <Typography variant="body">Yes, we will send you a receipt via email.</Typography></li>
      <li>
        <Typography variant="h3">10. Are you qualified for upholstery stain protection?</Typography>
        <Typography variant="body">Yes, we fulfil the criteria for membership in <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a> and the National Carpet Cleaners Association (<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a>), the UK's renowned industry organisation, and we are professionally trained members of both.</Typography></li>
      <li>
        <Typography variant="h3">11. How long have you been in the furniture stain protection business?</Typography>
        <Typography variant="body">We have been in the carpet cleaning and Scotchgard appliance business since 2012. We've faced many sorts of carpets, rugs, upholstery, and stains while executing our services throughout the years, gaining great experience. Our dedication to being one of the leading cleaning and carpet stain protection businesses has prompted us to boost our efficiency through the following means:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Consistently evaluating and improving our cleaning materials to ensure the best possible service;</p>
        </Typography>
        <Typography variant="li">
          <p>Improving our machines and equipment with better possibilities as they become available;</p>
        </Typography>
        <Typography variant="li">
          <p>A dedication to continual growth in knowledge and expertise through training and courses, with the goal of always improving our ability to provide cleaning services.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">12. Can you add a discount to the furniture stain protection?</Typography>
        <Typography variant="body">Our carpet cleaning and Scotchgard appliance services are recognised for their excellent quality since we use the best tools and a variety of high-grade cleaning products. The prices we offer are not only exceptionally competitive but also among the most attractive on the market, further distinguishing us. To get the greatest discounts, we strongly advise you to combine the cleaning services that you need in one visit. Once you do this, you'll discover that bundling all of the goods and services you need is less expensive than requesting each one separately. This cost-effectiveness is due to the initial price and additional fees for each cleaning appointment, which take into account factors such as parking, transportation time, and the handling of heavy items during loading and unloading.</Typography></li>
      <li>
        <Typography variant="h3">13. How much does your sofa stain protection service cost?</Typography>
        <Typography variant="body">How much the sofa stain protection service costs depends on a number of factors. Some of them are:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The fabric the sofa is made of;</p>
        </Typography>
        <Typography variant="li">
          <p>The quantity and size of the sofas.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">14. What is stain protection?</Typography>
        <Typography variant="body">Stain protector, commonly known as Scotchgard protector, is a clear, invisible liquid that is applied to the fabric by professionals. It creates an invisible protective coating to each fibre of the carpet or upholstery, making it resistant to daily soiling and both water-based and oil-based stains. The goal of stain prevention services is to protect the material against liquid penetration, which can cause permanent damage and stains to the carpet and upholstery.</Typography></li>
      <li>
        <Typography variant="h3">15. How is stain protection performed?</Typography>
        <Typography variant="body">The stain protection is done in two cases:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>If your carpet or sofa is new, we apply two layers of solvent based protector because we can apply it to dry carpet or sofa and there will be no need to water the fabric.</p>
        </Typography>
        <Typography variant="li">
          <p>After the <strong>professional cleaning services</strong>, we leave the carpet to dry, and from east to west, we apply the first layer of water-based stain protector, wait for it to dry for 10 minutes, and then reapply a second layer from north to south. This is done in order to reach full coverage.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">16. Is stain guard worth it?</Typography>
        <Typography variant="body">Yes, using carpet and upholstery stain protection is definitely worth it. Our experience shows that we have a much higher success rate at treating stains on a carpet or upholstery that has been previously treated with stain protection.</Typography>
        <Typography variant="body">Furniture stain protection also keeps your carpets and upholstery looking new and fresh for a long period of time and saves you time and effort in everyday routine cleaning, since it becomes much easier. It dramatically reduces the appearance of bacteria, dust, and other contaminants in your carpet or furniture and decreases the chances of health problems, such as asthma and allergies to occur.</Typography>
        <Typography variant="body">Our Scotchgard products have been tested and used safely in family homes for over 20 years and it is safe for both children and pets.</Typography>
      </li>
      <li>
        <Typography variant="h3">17. Why is stain protection used?</Typography>
        <Typography variant="body">Carpet, rug and sofa stain protection services are applied to prevent staining and to minimise everyday soiling. It is a highly effective and easy procedure that gives you many advantages, such as prolonging the life of your items, making daily cleaning easier and reducing the potential appearance of germs and allergens.</Typography>
      </li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">18. Why do I need protection on my carpets?</Typography>
        <Typography variant="body">Applying carpet, rug and sofa stain protection is an excellent way to keep your belongings cleaner, with less effort. It makes your furniture resilient to stains and everyday soling, making your environment fresh and healthy for you, your family and your guests. Furniture stain protection has other advantages, such as:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Protecting against both oil and water-based stains;</p>
        </Typography>
        <Typography variant="li">
          <p>Spills blotting up before becoming stains;</p>
        </Typography>
        <Typography variant="li">
          <p>Stains are cleaned easier;</p>
        </Typography>
        <Typography variant="li">
          <p>Making everyday cleaning easier;</p>
        </Typography>
        <Typography variant="li">
          <p>Preventing the possible appearance of germs and allergens;</p>
        </Typography>
        <Typography variant="li">
          <p>Extending the fabric's life.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">19. How long does a stain guard last? </Typography>
        <Typography variant="body">It highly depends on how frequently the surface is used, but in most cases stain guard after carpet and sofa stain protection services will last at least six months or even a year.</Typography>
      </li>
      <li>
        <Typography variant="h3">20. Is there something better than Scotchgard?</Typography>
        <Typography variant="body">Our experience tells us that the best solution for preventing hard-to-clean stains is applying carpet and upholstery stain protection. It keeps your belongings cleaner and extends their life.</Typography></li>
      <li>
        <Typography variant="h3">21. How long will Scotchgard last?</Typography>
        <Typography variant="body">The Scotchgard will last around a year more or less. It highly depends on how frequently the surface is being used.</Typography></li>
      <li>
        <Typography variant="h3">22. What can I put on my carpet to prevent stains?</Typography>
        <Typography variant="body">When possible, we strongly recommend stain protection being applied to your household items, carpets, and rugs. This easy procedure can greatly lower the cost of stain removal services and gives many more advantages.</Typography>
      </li>
      <li>
        <Typography variant="h3">23. What fabric should you not Scotchgard?</Typography>
        <Typography variant="body">We suggest applying a stain protector on every fabric except leather.</Typography></li>
      <li>
        <Typography variant="h3">24. Does Scotchgard change feel of fabric?</Typography>
        <Typography variant="body">No, carpet and upholstery stain protection does not change the look or feel of your items.</Typography>
      </li>
      <li>
        <Typography variant="h3">25. Does washing remove Scotchgard?</Typography>
        <Typography variant="body">Yes, the applied Scotchgard will be removed once the carpet or upholstery is washed. The benefit of furniture stain protection is that your household items will rarely need any serious cleaning treatment since it creates a liquid barrier that protects them from stains and spills settling into the fibres.</Typography></li>
      <li>
        <Typography variant="h3">26. How long after Scotchgard can I sit on the couch?</Typography>
        <Typography variant="body">You will receive instructions from our technician about how long after the upholstery stain protection has been applied you can use your items. It depends on the fabric of the item, but usually you can safely use it not long after the procedure has ended. Usually it takes around 4-6 hours, but it can vary depending on the condition of the carpet or sofa, whether it is new or after cleaning.</Typography></li>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Stain protection services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/stain-protection-services/stain-protection-services-7.jpg" alt="stain-protection-services-7" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our stain protection services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform stain protection services. Stain protector also known as Scotchgard protector is an invisible clear liquid that is applied on fabric. It surrounds each fibre of the carpet or upholstery with an invisible protective coating which makes the carpet resistant to everyday soiling and both water-based and oil-based stains. The purpose of stain protection services is to guard the fabric against penetration of liquids that lead to lasting stains and permanent damage to the carpet and upholstery. Other advantages that stain protection services give are:</p>
        <ul>
          <li class="ml--5">
            <p>Protecting against both oil and water-based stains;</p>
          </li>
          <li class="ml--5">
            <p>Helping the carpet and upholstery fibres resist soiling;</p>
          </li>
          <li class="ml--5">
            <p>Spills blotting up before becoming stains;</p>
          </li>
          <li class="ml--5">
            <p>Stains are cleaned easier;</p>
          </li>
          <li class="ml--5">
            <p>Making everyday cleaning easier;</p>
          </li>
          <li class="ml--5">
            <p>Eliminating the potential occurrence of bacteria and allergens;</p>
          </li>
          <li class="ml--5">
            <p>Extending the life of the fabric.</p>
          </li>
        </ul>
        <h3>Simple booking process:</h3>
        <p>The usual process of booking our stain protection services:</p>
        <ul>
          <li class="ml--5">
            <p>You make contact with us.</p>
          </li>
          <li class="ml--5">
            <p>After evaluating what you need, we offer you recommendations for cleaning services.</p>
          </li>
          <li class="ml--5">
            <p>You receive a price quote.</p>
          </li>
          <li class="ml--5">
            <p>If our terms are acceptable to you, we set up a time for you to obtain the cleaning and stain protection services.</p>
          </li>
          <li class="ml--5">
            <p>Our company's cleaners will visit your residence to perform the service.</p>
          </li>
        </ul>
        <h3>What do we offer:</h3>
        <p>Other professional cleaning services you might be interested in are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services">Carpet cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services">Upholstery cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-rug-cleaning-services">Rug cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-stain-removal-services">Stain removal</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2>The process of our stain protection services:</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <p>Our professional stain protection services aim to prolong the life and beauty of your carpets and sofas. The stain prevention is carried out in two cases:</p>
        <ul>
          <li class="ml--5">
            <p><strong>New Carpets or Sofas:</strong> If your carpet or couch is new, we will apply two coats of solvent-based protection. This process allows us to treat the fabric while it is dry, reducing the need to add further moisture. The solvent-based protector creates a strong barrier against further stains, providing long-term protection.</p>
          </li>
          <li class="ml--5">
            <p><strong>Post-Cleaning Protection:</strong> Following our detailed professional cleaning services, we make sure the carpet or sofa is totally dry. We next apply the first coat of water-based stain protection from east to west. We let this layer dry for around ten minutes. Once dry, we apply a second coat from north to south, achieving complete covering. This cross-application approach provides complete and deep coverage, enhancing the protective barrier against spills and stains.</p>
          </li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our stain protection services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">High-efficient extractors</h3>
            <Typography variant="body">"Fine Carpet Cleaning" Ltd uses the best cleaning equipment and materials. Our tools are among the strongest, most effective, and largest portable ones on the market. Following a careful assessment of several machine models available in the UK, we have selected "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>" and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>" as our expert cleaning equipment. Our in-house engineer also improves these devices further, making significant adjustments to maximise their functioning.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Dual motor vacuum cleaner</h3>
            <Typography variant="body">Among the tools in our inventory is a twin-motor, high-filtration vacuum cleaner, which, based on our knowledge and expertise, is the best available. One of the twin motors pounds at the carpet while the other efficiently sucks out any loose dirt, dry soil, and dust.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning products</h3>
            <Typography variant="body">We utilise over 20 different types of cleaning products from reputable US and UK manufacturers. After thoroughly testing every item that is available, we have selected the ones that yield the best results. Brands like "Alltec," "Prochem," "Chemspec," "Solution World of Clean," and "TMF" are available to our specialists, enabling them to choose the best detergents based on:</Typography>
          </li>
        </ol>
        <ul>
          <li class="ml--5">
            <p>The kind of material the furniture is made of;</p>
          </li>
          <li class="ml--5">
            <p>The degree of soiling;</p>
          </li>
          <li class="ml--5">
            <p>The specific types of stains that require attention.</p>
            <Typography variant="body">Our superior supplies, cleaning equipment, and training enable us to offer expert cleaning and stain protection services of the finest quality.</Typography>
          </li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our stain protection services</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/service-pics/stain-protection-services/stain-protection-services-2.jpg", alt: "stain-protection-services-2" },
        { src: "/assets/service-pics/stain-protection-services/stain-protection-services-6.jpg", alt: "stain-protection-services-6" },
        { src: "/assets/service-pics/stain-protection-services/stain-protection-services-1.jpg", alt: "stain-protection-services-1" },
        { src: "/assets/service-pics/stain-protection-services/stain-protection-services-4.jpg", alt: "stain-protection-services-4" },
      ]} />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Video from our stain protection services</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Prices of our stain protection services</h2>

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

      <FOTSlider>
        <FOTSliderContainer
          img="/assets/Професионално почистване на заведения.jpg"
          alt=""
          title="Professional carpet cleaning services"
          href="/professional-carpet-cleaning-services"
          description="We offer a variety of professional carpet cleaning services. They will prolong the life of your carpet and is cheaper to do regular maintenance than buying a new carpet."
        />
        <FOTSliderContainer
          img="/assets/service-pics/sofa-cleaning/sofa-cleaning-services-13.jpg"
          alt="sofa-cleaning-services-13"
          title="Professional sofa cleaning services"
          href="/professional-upholstery-cleaning-services/sofa"
          description="Our expert sofa cleaning uses steam and hot water extraction to eliminate 99% of microorganisms, revitalizing your space for a healthier home."
        />
        <FOTSliderContainer
          img="/assets/service-pics/mattress-cleaning/mattress-cleaning-services-9.jpg"
          alt="mattress-cleaning-services-9"
          title="Mattress cleaning services"
          href="/professional-upholstery-cleaning-services/mattress"
          description="Mattress cleaning removes unwanted guests and fluids, creating a cleaner environment. It enhances sleep quality and extends the life of your mattress."
        />
        <FOTSliderContainer
          img="/assets/service-pics/furniture-cleaning/furniture-cleaning-12.jpg"
          alt="furniture-cleaning-12"
          title="Professional furniture cleaning services"
          href="/professional-upholstery-cleaning-services/furniture"
          description="Furniture upholstery cleaning services can extend the life of your furniture, saving you money on purchasing new items."
        />
        <FOTSliderContainer
          img="/assets/service-pics/pillow-cleaning/pillow-cleaning-7.jpg"
          alt="pillow-cleaning-7"
          title="Pillow cleaning services"
          href="/professional-upholstery-cleaning-services/pillow"
          description="Instead of tossing old pillows, consider our cost-effective professional cleaning. We fluff, sanitize, and deodorize, giving your pillows new life."
        />
        <FOTSliderContainer
          img="/assets/service-pics/rug-cleaning/professional-rug-cleaning-12.jpg"
          alt="professional-rug-cleaning-12"
          title="Professional rug cleaning services"
          href="/professional-rug-cleaning-services"
          description="Professional rug cleaning removes stains and extends rug life. Our experts use advanced tools to refresh your rug and ensure a healthy, allergy-free environment."
        />
      </FOTSlider>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Our stain protection services specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use stain protector</h3>
            <Typography variant="body">When possible, our cleaning expert recommends applying a stain protection to your household items, carpets, and rugs. This easy procedure can greatly lower the cost of stain removal services. If you are interested, we encourage you to study the benefits of stain protection services.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Seek a professional stain removal service</h3>
            <Typography variant="body">If your rug or furniture has become soiled, our expert recommends hiring an established stain removal service rather than attempting to clean it alone. This is because cleaning or allowing the stain to settle might cause fabric damage, making total stain removal impossible. Such methods could possibly seal the stain, making removal extremely difficult, if not impossible, for a cleaning specialist. As a result, hiring a stain removal service(link) may be able to save your valuable upholstery or rug, which might be worth quite a bit of money.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Choose wisely with understanding</h3>
            <Typography variant="body">We offer a wide range of services, including upholstery and carpet cleaning, among others. We provide all-inclusive solutions, so don't miss out on the opportunity to learn about the breadth of our expertise and make educated choices about your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Unite multiple services</h3>
            <Typography variant="body">Combining different cleaning services into one visit has a number of benefits when it comes to cleaning sofas. First of all, it speeds up the return to regular activities to your spot by saving time and minimising disturbances. Bundled services also save money because they are less expensive than booking each service separately. Last but not least, hiring a leather couch cleaning firm guarantees that every step of the cleaning procedure follows sustainable methods, producing a healthier workplace and a more environmentally friendly world.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy health benefits</h3>
            <Typography variant="body">Knowing the benefits of keeping clean carpets, rugs, or upholstery for your well-being is essential if you own any of these products. These things have the potential to collect substantial amounts of dust, dirt elements, and bacteria, which could lead to health issues. Ignoring them may increase their susceptibility to allergies, skin problems, and other difficulties. To avoid these issues, our expert recommends hiring cleaning services no less than once a year. If you have children, dogs, or easily stained furniture, we encourage scheduling these services even more frequently.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews for our stain protection services</h2>

      <ReviewSlider>
        <StarReview
          src="/assets/profile-pics-reviews/unnamed90.png"
          reviewText="Professional, quick to respond. I'm very happy with their service."
          name="Zaneta Priscepionkaite"
          date="July 2024"
          stars={5}
          hrefGoogleReview="https://g.co/kgs/c4A87Ud"
        />
        <StarReview
          src="/assets/profile-pics-reviews/unnamed90.png"
          reviewText="FANTASTIC STAFF, FANTASTIC SERVICE, FANTASTIC WORK & MOST IMPORTANTLY FANTASTIC PRICE, Cannot be beaten if you want your carpets cleaned,,, one quick call and everything was taken care of.. IF YOU ARE GETTING YOUR CARPETS CLEANED MAKE SURR YOU USE THESE GUYS 100%👍"
          name="Zaneta Priscepionkaite"
          date="July 2024"
          stars={5}
          hrefGoogleReview="https://g.co/kgs/c4A87Ud"
        />
        <StarReview
          src="/assets/profile-pics-reviews/unnamed90.png"
          reviewText="Professional, quick to respond. I'm very happy with their service."
          name="Zaneta Priscepionkaite"
          date="July 2024"
          stars={5}
          hrefGoogleReview="https://g.co/kgs/c4A87Ud"
        />

      </ReviewSlider>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our stain protection services</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
