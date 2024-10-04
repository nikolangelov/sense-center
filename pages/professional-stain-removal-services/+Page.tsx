import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../components/FacebookLikeGallery';
import { createCollapsable } from '../../components/Collapsable';
import { Typography } from '../../components/Typography';
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../components/FrequentlyOrderedTogether';
import { PriceTable } from '../../components/PriceTable';


const VideoPlayer = () => {
  return (
    <div class="flex flex-justify-center flex-items-center mt-20">
      <iframe
				class="mt-10 b-rd-3 h-200px md-h-500px"
				style="width: 100%;"
        src="https://www.youtube.com/embed/BVrwEwOw_AE?autoplay=1&mute=1"
        allow="autoplay; encrypted-media"
      ></iframe>
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

function FaqSection() {
  const { Container, Entry } = createCollapsable()
  return <Container>
    <Entry>
      <li>
        <Typography variant="h3">1. Will you fee me if I cancel the stain removal in London?</Typography>
        <Typography variant="body">Yes, there is a cancellation fee; however, it only applies in the event that you cancel on the day of the professional stain removal service. You will lose your deposit in that scenario.</Typography></li>
      <li>
        <Typography variant="h3">2. Should I pay for the congestion / parking charge?</Typography>
        <Typography variant="body">Yes, we respectfully request that the client provide us with an appropriate parking area close to the property or pay for any costs associated with parking or traffic.</Typography></li>
      <li>
        <Typography variant="h3">3. What if I live on the 4th floor or above and I have no lift?</Typography>
        <Typography variant="body">Because our equipment weighs more than fifty kilograms, there will be an extra fee for each floor that needs to be transported by hand. This is due to the fact that it frequently takes a long time and may lead our technicians to become fatigued more quickly. This could therefore lower our daily productivity in comparison to our average output.</Typography></li>
      <li>
        <Typography variant="h3">4. Are you insured?</Typography>
        <Typography variant="body">Yes, our company is completely insured.</Typography></li>
      <li>
        <Typography variant="h3">5. What happens if your technician damages anything?</Typography>
        <Typography variant="body">We are fully insured and if an accident happens it will be covered by us.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. How long does the process of stain removal London take?</Typography>
        <Typography variant="body">The duration of the stain removal London process might take anywhere from 5 to 60 minutes, mainly depending on:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The material of the carpet or upholstery that has been stained;</p>
        </Typography>
        <Typography variant="li">
          <p>What substance caused the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>When it appears;</p>
        </Typography>
        <Typography variant="li">
          <p>The quantity and size of the stain;</p>
        </Typography>
        <Typography variant="li">
          <p>Did someone try to clean it already.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">7. How long does it take for the rug to get dry after a stain removal London?</Typography>
        <Typography variant="body">Our team will instruct you on the drying time. It depends on the carpet material, the type of stains, and how bad they are. The condition of the stain determines the drying hours, as well as the cleaning and drying.</Typography></li>
      <li>
        <Typography variant="h3">8. Do you guarantee that after stain removal London all stains will be removed?</Typography>
        <Typography variant="body">We obtain high stain removal success rates because of our vast experience and use of some of the best stain removal technology available. It's important to remember, though, that due to a number of uncontrollable circumstances, we are unable to offer an absolute guarantee. Among these are:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>How much time have the stains been there;</p>
        </Typography>
        <Typography variant="li">
          <p>The kind of materials that caused the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The carpet’s or upholstery's kind and material;</p>
        </Typography>
        <Typography variant="li">
          <p>Any past incorrect treatment of the stains.</p>
        </Typography>
      </ul>
      <Typography variant="body">However, we promise to use every resource at our disposal to get rid of any stains on your belongings. Our process includes:</Typography>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Using the greatest cleaning tools available;</p>
        </Typography>
        <Typography variant="li">
          <p>Using a choice of high-quality detergents that have been carefully chosen;</p>
        </Typography>
        <Typography variant="li">
          <p>Tailoring our strategy to the particular fabric type and staining agent to guarantee the best results.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">9. How soon can I expect your cleaner to visit me?</Typography>
        <Typography variant="body">We'll do our best to schedule an appointment for you as quickly as we can. We are usually completely full for the next three days, but occasionally there are openings.</Typography></li>
      <li>
        <Typography variant="h3">10. Can you give me a quote for the pet stain removal service over the phone or do you need a viewing in person?</Typography>
        <Typography variant="body">Yes, we can give you a quote for the pet stain removal service over the phone, there is no need for us to visit your property. You can also receive a pet stain removal service quote online.</Typography></li>
      <li>
        <Typography variant="h3">11. What payment methods do you accept?</Typography>
        <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments given directly to our team.</Typography></li>
      <li>
        <Typography variant="h3">12. Can you provide me with an invoice for the pet stain removal service?</Typography>
        <Typography variant="body">Yes, we will send you a receipt via email.</Typography></li>
      <li>
        <Typography variant="h3">13. Are you qualified for stain removal in London?</Typography>
        <Typography variant="body">Yes, we meet the requirements to join <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a> and the National Carpet Cleaners Association (<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a>), the UK's recognised industry association, and we are fully trained members of both organisations.</Typography></li>
      <li>
        <Typography variant="h3">14. How long have you been in the cleaning business?</Typography>
        <Typography variant="body">Since 2012, we have been active in the carpet cleaning and stain removal industry. Throughout the years, we've encountered various types of carpets, rugs, upholstery, and stains while performing our services, accumulating valuable experience. Our commitment to being one of the best cleaning and stain removal companies has led us to enhance our performance through the following means:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Regularly assessing and refining our cleaning materials to guarantee the best possible service;</p>
        </Typography>
        <Typography variant="li">
          <p>Upgrading our machines and equipment with better options as they become available;</p>
        </Typography>
        <Typography variant="li">
          <p>A commitment to lifelong learning and professional development via training and courses, constantly aiming to improve our proficiency in providing cleaning services.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">15. Can you add a discount to the carpet stain removal cost?</Typography>
        <Typography variant="body">Using the best tools and a range of high-grade cleaning supplies, our cleaning services are well-known for their outstanding excellence. Our pricing is not only extremely competitive but also among the most appealing on the market, which sets us apart even more. It is highly recommended that you combine the cleaning services that you need in order to get the best deals. When you do this, you'll find that it's less expensive to bundle all of the services you require than to request each one separately. This cost-effectiveness is ascribed to the starting price and extra fees for every cleaning appointment, accounting for things like parking, travel time, and the handling of bulky items when loading and unloading.</Typography></li>
      <li>
        <Typography variant="h3">16. How much does your carpet stain removal cost?</Typography>
        <Typography variant="body">How much the carpet stain removal costs depends on a number of factors. Some of them are:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The material of the carpet or upholstery that has been stained;</p>
        </Typography>
        <Typography variant="li">
          <p>What substance caused the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The quantity and size of the stain.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">To learn more, check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">stain removal prices</a>.</Typography>
      </li>
      <li>
        <Typography variant="h3">17. What stains cannot be removed from carpet?</Typography>
        <Typography variant="body">Stains that have been left to dry and settle for a long period of time and stains that have been attempted to be cleaned with improper methods and detergents are some cases where the stain will be harder to remove. Curtain substances are harder to eliminate as well, but thanks to our experience and professional equipment we are able to achieve high success in stain removal and carpet care.</Typography>
      </li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">18. Is it possible to get rid of old stains?</Typography>
        <Typography variant="body">Old stains might come out, but we cannot offer any guarantee. Factors like the contents that have caused the stain, the kind of fabric that has been stained or spilled and the period of time that the stain has been left to settle greatly impact the chance of its removal. If you want to receive information for your specific situation, feel free to contact us at any suitable time for you and we will give you a professional estimate on whether your stain or spill can be eliminated.</Typography></li>
      <li>
        <Typography variant="h3">19. Can professional carpet cleaners remove stains?</Typography>
        <Typography variant="body">Yes, since professionals have undergone special training, booking services from stain removal companies is the most effective choice to remove stains. Due to our powerful equipment, we at “Fine Carpet Cleaning” Ltd. are able to deliver the results you desire within a fraction of time. Unfortunately we cannot guarantee you that all stains will be entirely removed. This is due to the fact that some situations are harder to handle. For example, if a stain has been improperly treated it might settle even deeper into the fibres of your carpet or upholstery. If the stain has been left to dry out completely or if it is a very old stain, its removal will require a lot more attention, which still does not guarantee that it will be entirely removed. We strongly advise to react as quickly as possible if a stain has occurred and to take advantage of services provided by stain removal companies for the best and safest results.</Typography>
        <Typography variant="body">Our stain removal London services include professional carpet stain removal, sofa stain removal services, mattress stain removal services, rug stain removal services, couch stain removal services, upholstery stain removal London and more.</Typography>
      </li>
      <li>
        <Typography variant="h3">20. Do all stains eventually come out?</Typography>
        <Typography variant="body">Most stains can be removed. However, in some cases, stains can become permanent and a lot harder to come out completely. Such cases include improperly addressing the stains and leaving them to set for a long period of time. In these situations, the substance that caused the stains will set deeper into the fabric. We recommend that if stains or spills occur, address them as quickly as possible, advisably with the help of professional stain removal companies for the best and quickest results.</Typography></li>
      <li>
        <Typography variant="h3">21. Do stains become permanent?</Typography>
        <Typography variant="body">If stains are addressed fast enough, they can be almost entirely eliminated. But if neglected for too long, stains will usually become permanent. Most stains initially stay on the fabric's surface when they come into touch with it and are quite easy to remove. If left to dry out completely, stains will become further sealed into the fibres, making their complete removal a lot harder.</Typography></li>
      <li>
        <Typography variant="h3">22. How do I remove deep stains?</Typography>
        <Typography variant="body">Deep stains can be easily removed through professional stain removal services. We strongly advise you not to attempt to clean the stain yourself, as such attempts may seal the stain even further, rather than remove it. Our approach includes a pre-survey, so we can establish which cleaning methods and detergents will be best suited for your specific situation.</Typography>
        <Typography variant="body">Our stain removal London services include professional carpet stain removal, sofa stain removal services, mattress stain removal services, rug stain removal services, couch stain removal services, upholstery stain removal London and more.</Typography>
      </li>
      <li>
        <Typography variant="h3">23. How much does it cost to get a stain out of carpet?</Typography>
        <Typography variant="body">How much the carpet stain removal costs depends on a number of factors, including:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The material of the carpet or upholstery that has been stained;</p>
        </Typography>
        <Typography variant="li">
          <p>What substance caused the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The quantity and size of the stain.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">To learn more, view our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">stain removal prices</a>.</Typography>
      </li>
      <li>
        <Typography variant="h3">24. How do professionals clean carpet stains?</Typography>
        <Typography variant="body">This is made achievable by the knowledge, tools, supplies, and techniques used by experienced stain removal companies. A reputable cleaning business such as "Fine Carpet Cleaning Ltd." provides excellent cleaning services that work especially well on various types of stains. Often, normal cleaning techniques fail to achieve these outcomes. In addition, we provide a customised approach, use only the best cleaning solutions and state-of-the-art commercial appliances, and further safeguard your possessions when providing a professional stain removal service.</Typography>
        <Typography variant="body">Our stain removal London services include professional carpet stain removal, sofa stain removal services, mattress stain removal services, rug stain removal services, couch stain removal services, upholstery stain removal London and more.</Typography>
      </li>
      <li>
        <Typography variant="h3">25. Do carpet stains reappear after cleaning?</Typography>
        <Typography variant="body">Stains that reappear may be a result of left residue within the carpet fibers themselves. In these cases, some of the cleaning agent used in the cleaning process was left behind in the carpet. Even after the carpet dries, the residue will remain. Our professional stain removal services will assure that no residue will be left behind and will make sure to eliminate any stain as much as possible. This is due to our use of high-quality tools and our expertise, helping us make sure that no residue or moisture will be left on your carpet, rug or upholstery.</Typography></li>
      <li>
        <Typography variant="h3">26. Do you perform professional removal of a red wine stain from a beige carpet?</Typography>
        <Typography variant="body">It is advised to contact our expert carpet cleaners for the professional removal of a red wine stain from your beige carpet. We can restore your carpet after such an unintentional accident and know just how to handle stubborn stains.</Typography>
        <Typography variant="body">Our expert carpet cleaners have received extensive training and are proficient in their field. Professional removal of a red wine stain from a beige carpet is far more successful when professional-grade equipment is used. We take care to make sure that the stain removal procedure won't harm your carpet by using a tried-and-true method. We cannot give you a guarantee that all stains will be completely removed, due to factors out of our control, but we will use every possible means to get the job done and leave your carpet fresh and clean.</Typography>
        <Typography variant="body">Apart from professional carpet stain removal, our services include sofa stain removal services, mattress stain removal services, rug stain removal services, couch stain removal services, upholstery stain removal London and more.</Typography></li>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Professional stain removal service</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/stain-removal/professional-stain-removal-service.jpg" alt="professional-stain-removal-service" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our professional stain removal service</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform professional stain removal services. Our professional stain removal service not only helps improve the appearance of your carpets, rugs and upholstery but also guarantees hygiene and a healthy indoor environment. Our stain removal services successfully eliminate mechanical, biological and other types of contaminants, so you, your family and your guests won't have to worry about being in touch with hazardous substances stuck in the depth of the soft coverings around you.</p>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our professional stain removal services:</p>

        <ul>
          <li class="ml--5">
            <p>You reach out to us.</p>
          </li>
          <li class="ml--5">
            <p>We provide you with suggestions for cleaning services based on our analysis of your needs.</p>
          </li>
          <li class="ml--5">
            <p>A quote including the rug, upholstery or carpet stain removal cost is sent to you.</p>
          </li>
          <li class="ml--5">
            <p>We schedule an appointment for you to receive the professional stain removal service if our terms satisfy you.</p>
          </li>
          <li class="ml--5">
            <p>The cleaners from our company will come to your place to provide the cleaning service.</p>
          </li>

        </ul>
        <h3>What do we offer:</h3>
        <p>Other professional cleaning services we offer are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services">Carpet cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services">Upholstery cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-rug-cleaning-services">Rug cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/stain-protection-services">Stain protection</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our professional stain removal service</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Highly-efficient extractors</h3>
            <Typography variant="body">"Fine Carpet Cleaning" Ltd makes use of top-notch cleaning tools and supplies. Our devices are among the most potent, efficient, and sizable portable ones available in the world. After thoroughly evaluating a number of machine brands available in the UK, we have decided to choose "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>" and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>" as our professional cleaning tools. Furthermore, these devices are further enhanced by our in-house engineer, who makes substantial modifications to optimise their functionality.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
            <Typography variant="body">One of the equipment in our arsenal is a twin-motor vacuum cleaner with high filtration that is acknowledged as the best on the market according to our expertise and experience. One of the twin motors pounds at the carpet while the other efficiently sucks out any loose dirt, dry soil, and dust.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Thoughtfully chosen cleaning supplies</h3>
            <Typography variant="body">We use more than 20 different kinds of cleaning supplies from well-known US and UK companies. We have chosen the items that produce the finest outcomes by carefully testing all of the ones that are accessible. Our specialists are equipped with brands like "Alltec," "Prochem," "Chemspec," "Solution World of Clean," and "TMF" to enable them to select the best detergents based on:</Typography>
          </li>
        </ol>
        <ul>
          <li class="ml--5">
            <p>The type of material used to make the furniture;</p>
          </li>
          <li class="ml--5">
            <p>The extent of soiling;</p>
          </li>
          <li class="ml--5">
            <p>The particular kind of stains that need to be treated.</p>
            <Typography variant="body">We are able to provide professional stain removal services of the highest calibre thanks to our training, cleaning tools and premium materials.</Typography>
          </li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our professional stain removal service</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/service-pics/stain-removal/1-pet-stain-removal-service.jpg", alt: "1-pet-stain-removal-service" },
        { src: "/assets/service-pics/stain-removal/2-red-wine-stain-beige-carpet-professional-removal.jpg", alt: "2-red-wine-stain-beige-carpet-professional-removal" },
        { src: "/assets/service-pics/stain-removal/3-stain-removal-companies.jpg", alt: "3-stain-removal-companies" },
        { src: "/assets/service-pics/stain-removal/4-professional-carpet-stain-removal-3.jpg", alt: "4-professional-carpet-stain-removal-3" },
        { src: "/assets/service-pics/stain-removal/5-professional-stain-removal-service-3.jpg", alt: "5-professional-stain-removal-service-3" },
        { src: "/assets/service-pics/stain-removal/6-professional-carpet-stain-removal-4.jpg", alt: "6-professional-carpet-stain-removal-4" },
        { src: "/assets/service-pics/stain-removal/7-professional-carpet-stain-removal-2.jpg", alt: "7-professional-carpet-stain-removal-2" },
        { src: "/assets/service-pics/stain-removal/8-professional-carpet-stain-removal-5.jpg", alt: "8-professional-carpet-stain-removal-5" },
        { src: "/assets/service-pics/stain-removal/9-professional-carpet-stain-removal-6.jpg", alt: "9-professional-carpet-stain-removal-6" },
        { src: "/assets/service-pics/stain-removal/10-professional-carpet-stain-removal-7.jpg", alt: "10-professional-carpet-stain-removal-7" },
        { src: "/assets/service-pics/stain-removal/11-professional-stain-removal-service-4.jpg", alt: "11-professional-stain-removal-service-4" },
      ]} />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Video from our professional stain removal service</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Prices of our professional stain removal service</h2>

      <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
        style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
        <br></br>
        Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
        charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
        delays for the technicians and messes up the schedule.
        <br></br>
        <strong id="price_table">Deising - Free of charge - just notify us when booking.</strong></div>

      <PriceTable title="Service type">
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Stain removal</td>
          <td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
        </tr>
      </PriceTable>

      <button class="outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-250px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9 my-20 mx-auto" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Frequently ordered together</h2>

      <FOTSlider>
        <FOTSliderContainer
          img="/assets/service-pics/stain-protection-services/stain-protection-services.jpg"
          alt="stain-protection-services"
          title="Stain protection services"
          href="/stain-protection-services"
          description="The main purpose of the stain protector is to guard the fabric against penetration of liquids that lead to lasting stains and permanent damage to the carpet and upholstery."
        />
        <FOTSliderContainer
          img="/assets/service-pics/carpet-cleaning/carpet-cleaning-specialists.jpg"
          alt="carpet-cleaning-specialists"
          title="Professional carpet cleaning services"
          href="/professional-carpet-cleaning-services"
          description="We offer a variety of professional carpet cleaning services. They will prolong the life of your carpet and is cheaper to do regular maintenance than buying a new carpet."
        />
        <FOTSliderContainer
          img="/assets/service-pics/sofa-cleaning/sofa-upholstery-cleaning-service.jpg"
          alt="sofa-upholstery-cleaning-service"
          title="Professional sofa cleaning services"
          href="/professional-upholstery-cleaning-services/sofa"
          description="Our expert sofa cleaning uses steam and hot water extraction to eliminate 99% of microorganisms, revitalizing your space for a healthier home."
        />
        <FOTSliderContainer
          img="/assets/service-pics/mattress-cleaning/mattress-cleaning-services.jpg"
          alt="mattress-cleaning-services"
          title="Mattress cleaning services"
          href="/professional-upholstery-cleaning-services/mattress"
          description="Mattress cleaning removes unwanted guests and fluids, creating a cleaner environment. It enhances sleep quality and extends the life of your mattress."
        />
        <FOTSliderContainer
          img="/assets/service-pics/furniture-cleaning/steam-cleaning-furniture-services.jpg"
          alt="steam-cleaning-furniture-services"
          title="Professional furniture cleaning services"
          href="/professional-upholstery-cleaning-services/furniture"
          description="Furniture upholstery cleaning services can extend the life of your furniture, saving you money on purchasing new items."
        />
        <FOTSliderContainer
          img="/assets/service-pics/pillow-cleaning/pillow-cleaning-service.jpg"
          alt="pillow-cleaning-service"
          title="Pillow cleaning services"
          href="/professional-upholstery-cleaning-services/pillow"
          description="Instead of tossing old pillows, consider our cost-effective professional cleaning. We fluff, sanitize, and deodorize, giving your pillows new life."
        />
        <FOTSliderContainer
          img="/assets/service-pics/rug-cleaning/rug-washing-service.jpg"
          alt="rug-washing-service"
          title="Professional rug cleaning services"
          href="/professional-rug-cleaning-services"
          description="Professional rug cleaning removes stains and extends rug life. Our experts use advanced tools to refresh your rug and ensure a healthy, allergy-free environment."
        />
      </FOTSlider>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Our professional stain removal service specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Apply a stain protector</h3>
            <Typography variant="body">When it's possible, our cleaning specialist advises adding a stain protector to your furniture, carpets, and rugs. Stain removal services can be significantly reduced by taking this simple step. We invite you to investigate the advantages of <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection services</a> if you're interested.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Try professional stain removal</h3>
            <Typography variant="body">In the event that your rug or upholstery has become stained, our specialist advises hiring a professional stain removal service instead of trying to clean it yourself. This is due to the possibility of fabric damage from cleaning or waiting for the stain to settle, which makes total stain removal difficult. Such approaches may actually seal the stain, making it more challenging, if not impossible, for a cleaning professional to remove. As a result, booking a stain removal service may be able to rescue your priceless upholstery or rug, which may be worth a substantial amount of money. We perform professional carpet stain removal, sofa stain removal services, mattress stain removal services, rug stain removal services, couch stain removal services, upholstery stain removal in London, and more.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Explore our full range of services</h3>
            <Typography variant="body">We provide a variety of services, such as upholstery and carpet cleaning and many more. We offer all-inclusive solutions, so don't pass up the chance to learn about the depth of our knowledge and make well-informed choices regarding your cleaning requirements.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Bundle and save</h3>
            <Typography variant="body">For optimal cost efficiency, our skilled carpet steam cleaning service specialists suggest combining multiple services into one appointment. Choosing to have technicians visit separately can result in additional costs such as travel time, parking fees, and the management of heavy equipment during loading and unloading, making individual appointments less financially advantageous.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy health benefits</h3>
            <Typography variant="body">Knowing the advantages of maintaining clean carpets, rugs, or upholstery for your health is crucial if you possess any of these items. These objects have the potential to gather significant amounts of dust, dirt particles, and bacteria that could cause health problems. Ignoring their needs can make them more susceptible to allergies, skin issues, and other complications. Our expert advises hiring cleaning professionals at least once a year to avoid these problems. We suggest scheduling these procedures even more frequently if you have children, pets, or easily stained furniture.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews for our professional stain removal service</h2>

      <ReviewSlider>
        <StarReview
          src="/assets/profile-pics-reviews/unnamed1112.png"
          reviewText="I received excellent communications throughout the whole process. On the day, the cleaning experience was efficient with a considerate and friendly member of staff. Very competitive pricing."
          name="Elizabeth Maurice"
          date="June 2024"
          stars={5}
          hrefGoogleReview="https://g.co/kgs/HPqEYvL"
        />
        <StarReview
          src="/assets/profile-pics-reviews/unnamed (1).png"
          reviewText="The best carpet cleaning service I have ever experienced. From start to finish was unbelievably smooth. The staff that attended extremely polite and moved all the items with utmost care. Would recommend using them as they are simply the best one has come across. Maya was absolutely fantastic in arranging this as the request was done at such a short notice."
          name="Gen Tiski"
          date="March 2024"
          stars={5}
          hrefGoogleReview="https://g.co/kgs/H3NeADN"
        />
        <StarReview
          src="/assets/profile-pics-reviews/unnamed-49.png"
          reviewText="I had my carpet cleaned by Nikolay from Fine Carpet Cleaning. What a fantastic job he did ! He is very professional, efficient and organised in the way he works. My carpet looks new again. I highly recommend."
          name="Samanta Federico"
          date="January 2024"
          stars={5}
          hrefGoogleReview="https://g.co/kgs/WxWf2Bm"
        />
        <StarReview
          src="/assets/profile-pics-reviews/unnamed3434.png"
          reviewText="Really happy with the service and i come across a-lot of carpet cleaners in my job property inventory .
        I was not sure how the carpet would come up , as it is an old carpet in a communal lobby . Wow, so much better-stains removed .
        A really quality service from start to finish , nothing was too much trouble . I managed to get a slot the same day . I would definitely recommend 😁"
          name="Yasmin"
          date="June 2024"
          stars={5}
          hrefGoogleReview="https://g.co/kgs/A7AyWZi"
        />
        <StarReview
          src="/assets/profile-pics-reviews/unnamed (3).png"
          reviewText="Had a great experience with Fine Carpet Cleaning yesterday. I phoned at 9am for help with a stained carpet, and within 2 hours someone was at my house doing the job. Communications were very clear and slick, and the cleaning was done briskly and to the highest standard. Highly recommended."
          name="Peter O'Donoghue"
          date="April 2024"
          stars={5}
          hrefGoogleReview="https://g.co/kgs/vnLrPA1"
        />
        <StarReview
          src="/assets/profile-pics-reviews/unnamed (2).png"
          reviewText="Good service at a reasonable price, had my mattress and small rug cleaned and can say that I'm satisfied with the result.
        The company representative was professional, arrived on time and did a very good job, quickly and efficiently.
        Definitely would recommend."
          name="Nikolay Dimitrov"
          date="April 2024"
          stars={5}
          hrefGoogleReview="https://g.co/kgs/jWDWU8Z"
        />

      </ReviewSlider>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our professional stain removal service</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
