import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { createCollapsable } from '../../../components/Collapsable';
import { Typography } from '../../../components/Typography';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../../components/FrequentlyOrderedTogether';
import { PriceTable } from '../../../components/PriceTable';
import { createEffect } from "solid-js";
import { FleurDivider } from "../../../components/FleurDivider";
import { VideoPlayer } from '../../../components/VideoPlayer';

function FaqSection() {
  const { Container, Entry } = createCollapsable()
  return <Container>
    <Entry>
      <li>
        <Typography variant="h3">1. Do you fee for cancellation?</Typography>
        <Typography variant="body">We require a deposit before performing the sofa set cleaning services. If you cancel the service on the day of the cleaning you will lose that deposit.</Typography></li>
      <li>
        <Typography variant="h3">2. Should I pay for the congestion / parking charge?</Typography>
        <Typography variant="body">Yes, we kindly ask that the client arrange a suitable parking space for our vehicles within close proximity of the property and to cover any parking / congestion expenses.</Typography></li>
      <li>
        <Typography variant="h3">3. What if I live on the 4th floor or above and I have no lift?</Typography>
        <Typography variant="body">Because our equipment weighs over 50 kilograms, we implement an extra fee for each additional floor that requires manual transportation. This is because moving the heavy equipment to different floors is time-consuming and can cause quicker fatigue among our technicians. As a result, this may impact our overall daily productivity compared to our standard output.</Typography></li>
      <li>
        <Typography variant="h3">4. Are you insured?</Typography>
        <Typography variant="body">Yes, we are completely insured.</Typography></li>
      <li>
        <Typography variant="h3">5. What happens if your home sofa cleaning services technicians damage anything?</Typography>
        <Typography variant="body">We are fully insured and if an accident happens it will be covered by our sofa cleaning company.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. Do you guarantee that after sofa set cleaning services all stains will be removed?</Typography>
        <Typography variant="body">Given our extensive experience and ownership of top-notch industry equipment, we consistently achieve high success rates in stain removal. However, it's important to acknowledge that we cannot provide an absolute guarantee due to various factors, including:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The age of the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The nature of the substances causing the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The type and fabric of the sofa;</p>
        </Typography>
        <Typography variant="li">
          <p>Any previous mishandling of the stains.</p>
        </Typography>
      </ul>
      <Typography variant="body">Nevertheless, we are fully committed to applying every possible effort to eliminate all stains from your furniture. Our approach involves:</Typography>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Utilising cutting-edge cleaning equipment;</p>
        </Typography>
        <Typography variant="li">
          <p>Applying a thoughtfully selected range of premium detergents;</p>
        </Typography>
        <Typography variant="li">
          <p>Customising our approach to match the specific sofa type and staining agent, ensuring the best possible outcome.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">7. How soon can I expect your London sofa cleaning technician to visit me?</Typography>
        <Typography variant="body">We will try to get you an appointment for home sofa cleaning services as soon as possible. Usually, we are fully booked for the following three days, but sometimes there are exceptions.</Typography></li>
      <li>
        <Typography variant="h3">8. Can you give me a quote for your sofa cleaning prices over the phone or do you need a viewing in person?</Typography>
        <Typography variant="body">Yes, we can give you a corner sofa cleaning quote over the phone, there is no need for us to visit your property. You can also receive a quote online.</Typography></li>
      <li>
        <Typography variant="h3">9. What payment methods do you accept for your home sofa cleaning services?</Typography>
        <Typography variant="body">We accept debit / credit cards, bank transfer and cash payments directly to our team.</Typography></li>
      <li>
        <Typography variant="h3">10. Can your sofa cleaning company provide me with an invoice?</Typography>
        <Typography variant="body">Yes, we will either send you a receipt via email or via any method of your choice.</Typography></li>
      <li>
        <Typography variant="h3">11. Are you qualified for sofa upholstery cleaning services?</Typography>
        <Typography variant="body">Yes, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a> and of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s acknowledged industry qualification.</Typography></li>
      <li>
        <Typography variant="h3">12. How long have you been in the sofa set cleaning services business?</Typography>
        <Typography variant="body">Since 2012, we have been actively engaged in the sectional cleaning service industry. Throughout the years, we have dealt with a wide range of carpets, rugs, upholstery, and stains from both commercial and residential clients, gaining valuable experience. Our commitment to providing top-notch professional sofa cleaning services has led us to enhance our performance through the following strategies:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Continuously upgrading our equipment and machinery by adopting superior alternatives whenever they become available;</p>
        </Typography>
        <Typography variant="li">
          <p>Consistently evaluating and improving our cleaning products to ensure the delivery of the highest quality service;</p>
        </Typography>
        <Typography variant="li">
          <p>A dedication to expanding our knowledge and skills through ongoing professional courses and training, always striving to enhance our competence.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">13. Can you add a discount for the eco sofa cleaning?</Typography>
        <Typography variant="body">Our best sofa cleaning services are renowned for their exceptional quality, employing the most effective equipment and a selection of premium cleaning products. What sets us apart even more is that our sofa cleaning prices not only stand out for their competitiveness but are also among the most attractive in the market. Combining all the services you require is a more economical option than making separate requests for each service.This cost-effectiveness is attributed to the initial cost and additional charges associated with each technician visit, taking into account factors such as travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography></li>
      <li>
        <Typography variant="h3">14. What types of sofas do you clean?</Typography>
        <Typography variant="body">Our sofa upholstery cleaning services are perfect for two, three, four, or five-seater sofas, but also relate to a broader range of soft furnishings and upholstery, including:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Rockers & armchairs;</p>
        </Typography>
        <Typography variant="li">
          <p>Dining chairs;</p>
        </Typography>
        <Typography variant="li">
          <p>Office chairs;</p>
        </Typography>
        <Typography variant="li">
          <p>Soft blinds & curtains;</p>
        </Typography>
        <Typography variant="li">
          <p>Pillows & cushions;</p>
        </Typography>
        <Typography variant="li">
          <p>Single, double, and King size mattresses.</p>
        </Typography>
      </ul>
      <Typography variant="body">Additionally, we perform services for different types of sofas and fabrics such as velvet sofa cleaning services, suede sofa cleaning services, microfiber sofa cleaning services, sofa cover cleaning services, sofa cushion cleaning services, corner sofa cleaning, eco sofa cleaning and many more.</Typography>
      <li>
        <Typography variant="h3">15. How much does it cost to dry clean sofa covers?</Typography>
        <Typography variant="body">How much the sofa cover cleaning services cost depends on a number of factors. Some of them are:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The quantity and size of the sofa;</p>
        </Typography>
        <Typography variant="li">
          <p>How soiled it is;</p>
        </Typography>
        <Typography variant="li">
          <p>The fabric of the sofa.</p>
        </Typography>
      </ul>
      <Typography variant="body">To learn more, check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">sofa cleaning prices</a>.</Typography>
      <li>
        <Typography variant="h3">16. Is getting your couch professionally cleaned worth it?</Typography>
        <Typography variant="body">Booking professional sofa cleaning services is a quick and efficient way of getting your couch and sofas refreshed with minimum effort from your side. It costs you much less than buying new furniture. Since technicians use cleaning supplies and hot water, not only is your sofa cleaned but sanitised as well. </Typography>
        <Typography variant="body">The corner sofa cleaning services of Fine Carpet Cleaning involve artillery of methods and solutions for producing optimal results and leaving your upholstery fresh and shiny as new. We employ the very best modern practices, approved by the industry officials; we continually upgrade our processes in order to justify our perfectionism and deliver state-of-the-art sofa cleaning services for our domestic and commercial clients.</Typography>
      </li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">17. Can a sofa be professionally cleaned?</Typography>
        <Typography variant="body">Yes, sofas can be professionally cleaned. Professional sofa and couch cleaning services are offered by trained technicians and specialised cleaning companies. These professionals use advanced equipment, specialised cleaning solutions, and industry-recommended techniques to deep clean and refresh sofas.</Typography></li>
      <li>
        <Typography variant="h3">18. How long does it take a couch to dry after being professionally cleaned?</Typography>
        <Typography variant="body">The drying time after couch cleaning services varies depending on the fabric and type of the upholstery and the cleaning method employed. If the dry cleaning services are chosen, the upholstery will be dry immediately after the cleaning process or shortly thereafter. Typically it takes 30-60 minutes for it to be completely dry. However, when steam cleaning is utilised, the approximate drying time typically ranges from 5 to 7 hours.</Typography>
        <Typography variant="body">If you are having trouble deciding which best sofa cleaning services will suit you or are searching for an expert sofa cleaning company, you can contact us at any suitable time for you to receive professional advice.</Typography></li>
      <li>
        <Typography variant="h3">19. How long does it take for a sofa to be professionally cleaned?</Typography>
        <Typography variant="body">The duration of the sofa upholstery cleaning services process mainly depends on:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>How soiled the sofa is;</p>
        </Typography>
        <Typography variant="li">
          <p>If it needs any stain removal treatments;</p>
        </Typography>
        <Typography variant="li">
          <p>What cleaning method will be used on the upholstery?</p>
        </Typography>
      </ul>
      <Typography variant="body">If you need more information feel free to contact us or to get the best sofa cleaning services.</Typography>
      <li>
        <Typography variant="h3">20. How often should a couch be deep cleaned?</Typography>
        <Typography variant="body">The recommended cleaning frequency from a deep sofa cleaning company is primarily influenced by factors such as the speed at which the furniture becomes soiled. Generally, it's advisable to clean a sofa every 12 months on average. However, if you have pets, children, use it frequently, or if it is prone to staining, we suggest utilising home sofa cleaning services more frequently than the standard interval. Regular professional cleaning not only preserves the aesthetic appeal of your upholstery but also contributes to maintaining a healthy and clean living environment. Feel free to contact us anytime for a service from couch cleaning companies "near me" or advice.</Typography></li>
      <li>
        <Typography variant="h3">21. Can you get sofas steam cleaned?</Typography>
        <Typography variant="body">Yes, you can use steam cleaning for your sofa and it will not damage it. Steam cleaning is the most thorough, effective method for removing dirt and soil from the base. Steam cleaning is the most effective way to clean a sofa. Cleaning your furniture with hot water at high pressure will successfully remove dirt, bacteria, grime, and toxins embedded in the sofa fibres. Professional sofa cleaning services can definitely clean your sofas and couches effectively, and it also has many other advantages, like prolonging the life of the sofas, being very effective on tough stains, not leaving any residue behind and not using harsh chemicals.</Typography>
        <Typography variant="body">In special cases like synthetic sofas, we strongly recommend not using steam cleaning, but dry cleaning, as the heat and steam <strong>will</strong> damage the furniture.</Typography></li>
      <li>
        <Typography variant="h3">22. Are there couch cleaning companies near me?</Typography>
        <Typography variant="body">Fine Carpet Cleaning performs in all of London. Feel free to contact us to receive the best sofa cleaning services wherever you are and rest assured that we will take good care of your upholstery.</Typography></li>
    </Entry>
  </Container>
}

const JSONLDScript = () => {
  createEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org/",
      "@graph": [
        {
          "@type": "Product",
          "name": "Professional sofa cleaning services",
          "image": "https://finecarpetcleaning.co.uk/assets/service-pics/sofa-cleaning/sofa-upholstery-cleaning-service.jpg",
          "description": "Fine Carpet Cleaning offers professional sofa cleaning services that enhance hygiene and maintain a fresh appearance.",
          "brand": {
            "@type": "Brand",
            "name": "Fine Carpet Cleaning"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "131"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you charge a cancellation fee?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, a deposit is required; cancellations on the day forfeit this deposit."
              }
            },
            {
              "@type": "Question",
              "name": "What if something gets damaged during cleaning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Any accidents will be covered by our insurance."
              }
            },
            {
              "@type": "Question",
              "name": "Do you guarantee all stains will be removed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We strive for high success in stain removal, but cannot guarantee complete removal due to various factors."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take for a couch to dry?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Drying time varies: 30-60 minutes for dry cleaning; 5-7 hours for steam cleaning."
              }
            },
            {
              "@type": "Question",
              "name": "How often should I deep clean my couch?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Generally, every 12 months. More frequent cleaning is advised for households with pets or children."
              }
            },
            {
              "@type": "Question",
              "name": "Can you steam clean sofas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, steam cleaning effectively removes dirt. For synthetic sofas, we recommend dry cleaning."
              }
            }
          ]
        }
      ]
    }
    );
    document.head.appendChild(script);
  });

  return null; // This component doesn't need to render anything visible
};

export default function Page() {
  return (
    <>

      <JSONLDScript />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PCFWNH5G"
          height="0"
          width="0"
          style="display:none;visibility:hidden">
        </iframe>
      </noscript>

      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Professional sofa cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/sofa-cleaning/sofa-upholstery-cleaning-service.jpg" alt="sofa-upholstery-cleaning-service" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider />

      <h2 class="line-height-12 md-line-height-14">What to expect from our professional sofa cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at Fine Carpet Cleaning perform professional sofa cleaning services. Excellent hygiene is a vital necessity. Virtually all upholstery manufacturers recommend steam cleaning and hot water extraction as the deepest and most effective methods of upholstery cleaning, able to wipe out 99% of the microorganisms living deep inside the fibres of the fabric. When booking sofa upholstery cleaning services, you can expect several crucial benefits, such as:</p>
        <ul>
          <li class="ml--5">
            <p><strong>Removing stains</strong> from spills, pet accidents, and everyday use.</p>
          </li>
          <li class="ml--5">
            <p><strong>Extending the life of your furniture</strong> by saving money from buying new furniture.</p>
          </li>
          <li class="ml--5">
            <p>Our London sofa cleaning <strong>wipes out fungi, bacteria, and dust mites</strong>.</p>
          </li>
          <li class="ml--5">
            <p><strong>Neutralising allergens</strong>, including pollen and house dust.</p>
          </li>
          <li class="ml--5">
            <p>Sofa and couch cleaning services are an excellent <strong>allergy prevention</strong> method.</p>
          </li>
          <li class="ml--5">
            <p>Professional sofa cleaning services are <strong>perfect for residences with babies, toddlers, and senior citizens</strong> since they employ a minimum amount of strong chemicals throughout the purification process.</p>
          </li>
          <li class="ml--5">
            <p>London sofa cleaning experts have the tools and expertise to get the job done efficiently and effectively.</p>
          </li>
          <li class="ml--5">
            <p>Professionals will <strong>tailor their methods</strong> to the specific type of upholstery, ensuring the best results without damage.</p>
            <Typography variant="body">At Fine Carpet Cleaning, we understand that excellent hygiene is vital. We offer professional sofa cleaning services that not only enhance the appearance of your furniture but also contribute to a healthier living environment.</Typography>
            <Typography variant="body">To ensure that everything proceeds according to plan, we will conduct a product and cleaning method test on a small section of your upholstery. This test helps confirm that the detergent chosen is the most suitable for your furniture.</Typography>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our professional sofa cleaning services:</p>

        <ul>
          <li class="ml--5">
            <p>You contact us.</p>
          </li>
          <li class="ml--5">
            <p>We offer you tailored recommendations based on your specific cleaning needs.</p>
          </li>
          <li class="ml--5">
            <p>You receive a price quote for the recommended services.</p>
          </li>
          <li class="ml--5">
            <p>If our terms are satisfactory, we schedule you an appointment.</p>
          </li>
          <li class="ml--5">
            <p>Our London sofa cleaning technicians will then visit your property to carry out the services.</p>
          </li>
        </ul>
        <h3>What do we offer:</h3>
        <p>Sofa upholstery cleaning services offer solutions tailored for every fabric:</p>

        <ul>
          <li class="ml--5"><p>Velvet sofa cleaning services</p></li>
          <li class="ml--5"><p>Suede sofa cleaning services</p></li>
          <li class="ml--5"><p>Cotton sofa cleaning services</p></li>
          <li class="ml--5"><p>Linen sofa cleaning services</p></li>
          <li class="ml--5"><p>Silk sofa cleaning services</p></li>
          <li class="ml--5"><p>Viscose sofa cleaning services</p></li>
          <li class="ml--5"><p>Leather sofa cleaning services</p></li>
          <li class="ml--5"><p>Sofa cushion cleaning services</p></li>
          <li class="ml--5"><p>Sofa set cleaning services</p></li>
          <li class="ml--5"><p>Sofa cover cleaning services</p></li>
          <li class="ml--5"><p>Microfiber sofa cleaning services</p></li>
          <li class="ml--5"><p>Sofa sectional cleaning services</p></li>
          <li class="ml--5"><p>Corner sofa cleaning</p></li>
          <li class="ml--5"><p>Eco sofa cleaning and more</p></li>
        </ul>

        <p><strong>Complete home fabric care options:</strong></p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services">Upholstery cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/sofa/leather">Leather sofa cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/furniture">Furniture cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/mattress">Mattress cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/pillow">Pillow cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-stain-removal-services">Upholstery stain removal</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/stain-protection-services">Upholstery stain protector</a></li>
        </ul>

        <h3>What do we offer:</h3>
        <p>Sofa upholstery cleaning services offer solutions tailored for every fabric:</p>

        <ul>
          <li class="ml--5"><p>We start with a pre-cleaning survey to identify the appropriate cleaning detergents and tools needed for the specific fabric of the sofa.</p></li>
          <li class="ml--5"><p>Next, we use dry vacuum cleaning to eliminate loose dirt, dry soils, and dust from the fabric.</p>
            <Typography variant="body">Professional sofa cleaning is essential to maintain its elegance and longevity. Our process begins with carefully dusting the sofa to remove any loose particles. Next, we apply a specialised detergent, gently agitate it to lift dirt, and then wipe it off, ensuring a thorough clean. We then allow the sofa to dry for about 10 minutes. Finally, we apply a protective cream to nourish the leather and shield it from future damage. This meticulous approach keeps your leather sofa looking pristine and extends its lifespan.</Typography></li>
          <li class="ml--5"><p>A heavy-duty pre-spray is then applied to lift oily dirt and pollutants from the upholstery, preparing them for extraction with our high-performance machines.</p></li>
          <li class="ml--5"><p>The cleaning solution is carefully worked into the upholstery, effectively loosening the soiling for the extraction process.</p></li>
          <li class="ml--5"><p>We gently inject pure softened hot water, reaching a maximum temperature of 135 degrees, deep into the fibres. This releases the soil, allowing our powerful hot water extraction machine to efficiently remove it. Any remaining spots and stains are individually treated with special products.</p></li>
        </ul>
      </div>

      <FleurDivider />

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our professional sofa cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Highly-efficient extractors</h3>
            <Typography variant="body">At Fine Carpet Cleaning, our commitment to excellence is evident in our use of cutting-edge cleaning equipment and premium cleaning products. Our powerful machines, recognized globally as some of the best portable options, have been meticulously selected from top brands such as '<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>' and '<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>', known for their exceptional power and effectiveness. These machines undergo rigorous testing, and our in-house engineer enhances them for optimal performance.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
            <Typography variant="body">We use a high-filtration twin motor vacuum cleaner, which we believe is the best one on the market. It is designed for high-performance expert carpet cleaning. One of the twin-motors pounds at the carpet while the other one sucks out any loose dirt, dry soil and dust.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning solutions</h3>
            <Typography variant="body">In addition to our advanced machinery, we use an extensive range of cleaning products carefully chosen after thorough testing of almost every option available on the market. This diverse selection allows our technicians to choose the most suitable detergents based on various factors, including:</Typography>
          </li>
        </ol>
        <ul>
          <li class="ml--5">
            <p>The upholstery fabric;</p>
          </li>
          <li class="ml--5">
            <p>Level of soiling;</p>
          </li>
          <li class="ml--5">
            <p>The type of stains to be treated.</p>
          </li>
        </ul>
      </div>

      <FleurDivider />

      <h2 class="line-height-12 md-line-height-14">Pictures from our professional sofa cleaning services</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/service-pics/sofa-cleaning/1-sectional-cleaning-service.jpg", alt: "1-sectional-cleaning-service" },
        { src: "/assets/service-pics/sofa-cleaning/4-london-sofa-cleaning.jpg", alt: "4-london-sofa-cleaning" },
        { src: "/assets/service-pics/sofa-cleaning/2-sofa-upholstery-cleaning-service-2.jpg", alt: "2-sofa-upholstery-cleaning-service-2" },
        { src: "/assets/service-pics/sofa-cleaning/3-sofa-cover-cleaning-services.jpg", alt: "3-sofa-cover-cleaning-services" },
        { src: "/assets/service-pics/sofa-cleaning/5-best-sofa-cleaning-services.jpg", alt: "5-best-sofa-cleaning-services" },
        { src: "/assets/service-pics/sofa-cleaning/6-couch-cleaning-services-2.jpg", alt: "6-couch-cleaning-services-2" },
        { src: "/assets/service-pics/sofa-cleaning/7-couch-cleaning-services.jpg", alt: "7-couch-cleaning-services" },
        { src: "/assets/service-pics/sofa-cleaning/8-couch-cleaning-services-1.jpg", alt: "8-couch-cleaning-services-1" },
        { src: "/assets/service-pics/sofa-cleaning/9-home-sofa-cleaning-services.jpg", alt: "9-home-sofa-cleaning-services" },
        { src: "/assets/service-pics/sofa-cleaning/10-professional-sofa-cleaning-services-1.jpg", alt: "10-professional-sofa-cleaning-services-1" },
        { src: "/assets/service-pics/sofa-cleaning/11-professional-sofa-cleaning-services-2.jpg", alt: "11-professional-sofa-cleaning-services-2" },
        { src: "/assets/service-pics/sofa-cleaning/12-sofa-set-cleaning-services.jpg", alt: "12-sofa-set-cleaning-services" },
        { src: "/assets/service-pics/sofa-cleaning/13-sofa-upholstery-cleaning-service.jpg", alt: "13-sofa-upholstery-cleaning-service" },
      ]} />

      <FleurDivider />

      <h2 class="line-height-12 md-line-height-14">Video from our professional sofa cleaning services</h2>

      <VideoPlayer src='https://www.youtube.com/embed/_7AqoLFxc-0?enablejsapi=1&mute=1' />

      <FleurDivider />

      <h2 class="line-height-12 md-line-height-14">Our sofa cleaning prices</h2>

      <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
        style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
        <br></br>
        Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
        charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
        delays for the technicians and messes up the schedule.
        <br></br>
        <strong id="price_table">Deising - Free of charge - just notify us when booking.</strong></div>

      <PriceTable
        title="Sofa type"
        items={[
          { label: "Footstool (Puff)", value: "from £10.00" },
          { label: "Two seated sofa", value: "from £44.20" },
          { label: "Two seated L shaped sofa", value: "from £52.00" },
          { label: "Three seated sofa", value: "from £52.00" },
          { label: "Three seated L shaped sofa", value: "from £65.00" },
          { label: "Four seated sofa", value: "from £65.00" },
          { label: "Four seated L shaped sofa", value: "from £76.00" },
          { label: "Five seated sofa", value: "from £76.00" },
          { label: "Five seated L shaped sofa", value: "from £95.00" },
          { label: "For others, please contact us", value: "-" },

          { element: <h3 class="bg-paper pl-5 py-6 font-700 my-0 b-#f3f3f3" style="border-style: none none solid none;">Velvet sofa cleaning</h3> },

          { label: "Footstool (Puff)", value: "from £15.00" },
          { label: "Two seated velvet sofa", value: "from £54.00" },
          { label: "Two seated L shaped velvet sofa", value: "from £65.00" },
          { label: "Three seated velvet sofa", value: "from £65.00" },
          { label: "Three seated L shaped velvet sofa", value: "from £84.00" },
          { label: "Four seated velvet sofa", value: "from £84.00" },
          { label: "Four seated L shaped velvet sofa", value: "from £95.00" },
          { label: "Five seated velvet sofa", value: "from £95.00" },
          { label: "Five seated L shaped velvet sofa", value: "from £106.00" },
          { label: "For others, please contact us", value: "-" },

        ]}
      />

      <button class="outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-250px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9 my-20 mx-auto" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>

      <FleurDivider />

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
          img="/assets/service-pics/furniture-cleaning/steam-cleaning-furniture-services.jpg"
          alt="steam-cleaning-furniture-services"
          title="Professional furniture cleaning services"
          href="/professional-upholstery-cleaning-services/furniture"
          description="Furniture upholstery cleaning services can extend the life of your furniture, saving you money on purchasing new items."
        />
        <FOTSliderContainer
          img="/assets/service-pics/mattress-cleaning/mattress-cleaning-services.jpg"
          alt="mattress-cleaning-services"
          title="Mattress cleaning services"
          href="/professional-upholstery-cleaning-services/mattress"
          description="Mattress cleaning removes unwanted guests and fluids, creating a cleaner environment. It enhances sleep quality and extends the life of your mattress."
        />
        <FOTSliderContainer
          img="/assets/service-pics/rug-cleaning/rug-washing-service.jpg"
          alt="rug-washing-service"
          title="Professional rug cleaning services"
          href="/professional-rug-cleaning-services"
          description="Professional rug cleaning removes stains and extends rug life. Our experts use advanced tools to refresh your rug and ensure a healthy, allergy-free environment."
        />
        <FOTSliderContainer
          img="/assets/service-pics/pillow-cleaning/pillow-cleaning-service.jpg"
          alt="pillow-cleaning-service"
          title="Pillow cleaning services"
          href="/professional-upholstery-cleaning-services/pillow"
          description="Instead of tossing old pillows, consider our cost-effective professional cleaning. We fluff, sanitize, and deodorize, giving your pillows new life."
        />
      </FOTSlider>

      <FleurDivider />

      <h2 class="line-height-12 md-line-height-14">Our professional sofa cleaning services specialist advises:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use a stain protector</h3>
            <Typography variant="body">Our sofa cleaning specialist suggests considering the addition of a stain protector to your carpets and upholstery whenever it's feasible. This simple step can result in significant cost savings on stain removal services. If you're curious, we encourage you to explore the benefits of <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection services</a>.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use a professional stain removal service</h3>
            <Typography variant="body">According to our specialist, it's highly advisable to seek the services of a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-stain-removal-services">professional stain removal company</a> if your carpet or upholstery has been stained, rather than attempting to clean it yourself. Cleaning attempts or allowing the stain to dry can risk fabric damage, making complete stain removal unlikely. In fact, such efforts may seal the stain, making it even more challenging, if not impossible, for professional sofa and couch cleaning services to remove it. Therefore, scheduling a stain removal service can potentially save your valuable carpet or upholstery, which could be worth a significant amount.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Make well-informed decisions</h3>
            <Typography variant="body">Our London sofa cleaning experts provide a range of services, including carpet cleaning, rug cleaning, and more. Our team takes pride in offering comprehensive solutions, providing you the opportunity to explore the full extent of our expertise and make informed decisions about your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Combine different services</h3>
            <Typography variant="body">Combining different cleaning services into one visit has a number of benefits when it comes to cleaning sofas. First of all, it speeds up the return to regular activities to your spot by saving time and minimising disturbances. Bundled services also save money because they are less expensive than booking each service separately. Last but not least, hiring a leather couch cleaning firm guarantees that every step of the cleaning procedure follows sustainable methods, producing a healthier workplace and a more environmentally friendly world.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy health benefits</h3>
            <Typography variant="body">If you own carpets, carpet floor coverings, or upholstery, it's crucial to be aware of the health benefits of keeping them clean. These items can accumulate substantial amounts of dust, microorganisms, and dirt particles that might lead to health issues. Neglecting their care can increase the risk of various reactions, skin problems, and allergies. To prevent these issues, our specialist recommends using professional upholstery cleaning services at least once a year. If you have pets, children, or easily stained upholstery, more frequent bookings are advisable.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider />

      <h2 class="line-height-12 md-line-height-14">Reviews for our professional sofa cleaning services</h2>

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

      <FleurDivider />

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our professional sofa cleaning services</h2>

      <FaqSection />

      <FleurDivider />

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
