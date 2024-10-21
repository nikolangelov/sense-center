import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { createCollapsable } from '../../../components/Collapsable';
import { Typography } from '../../../components/Typography';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../../components/FrequentlyOrderedTogether';
import { PriceTable } from '../../../components/PriceTable';
import { createEffect } from "solid-js";
import {FleurDivider} from "../../../components/FleurDivider";
import { VideoPlayer } from '../../../components/VideoPlayer';

function FaqSection() {
  const { Container, Entry } = createCollapsable()
  return <Container>
    <Entry>
      <li>
        <Typography variant="h3">1. Will you fee me if I cancel the dry rug cleaning service?</Typography>
        <Typography variant="body">Yes, we do have a cancellation fee, but it is only applied if you cancel on the day of the cleaning. In that case, you will lose your deposit.</Typography></li>
      <li>
        <Typography variant="h3">2. Do I need to pay for the congestion / parking charge?</Typography>
        <Typography variant="body">Yes, we request that you arrange a suitable parking space for our vehicles within close proximity of the property since we carry heavy equipment, and to cover any parking / congestion expenses if applicable.</Typography></li>
      <li>
        <Typography variant="h3">3. Do I need to move furniture before the area rug dry cleaning near me?</Typography>
        <Typography variant="body">We kindly ask for your assistance in relocating small, fragile, or valuable furniture items, such as lamps and ornaments, for insurance reasons. If possible, please position these items in a secure area before our team's arrival, one that will remain undisturbed during the cleaning process.</Typography>
        <Typography variant="body">We are more than happy to assist in moving other lightweight furniture for your convenience, such as chairs, armchairs, and tables during the cleaning. Once the cleaning is completed, we will return them to their original positions.</Typography>
        <Typography variant="body">In cases where heavy furniture, such as sofas, beds, wardrobes, or cupboards, needs to be moved, an additional fee will apply. This accounts for the extra time and effort required by our technician, who will receive appropriate compensation. Our primary goal is to ensure a stress-free experience for you throughout the entire process.</Typography></li>
      <li>
        <Typography variant="h3">4. What happens if I live on the 4th floor or above and I have no lift?</Typography>
        <Typography variant="body">Because of the substantial weight of our equipment, which exceeds 50 kg, we add an extra charge for every additional floor that necessitates manual carrying. This charge is essential, as this process often consumes a considerable amount of time and can result in quicker fatigue for our technicians. Consequently, on such days, we may not be able to accomplish as much work as our usual capacity.</Typography></li>
      <li>
        <Typography variant="h3">5. Are you insured?</Typography>
        <Typography variant="body">Yes, our cleaning company is fully insured.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. What happens if your cleaner damages anything while performing area rug dry cleaning near me?</Typography>
        <Typography variant="body">We are fully insured and if anything is damaged, it will be fully covered by us.</Typography></li>
      <li>
        <Typography variant="h3">7. How long does the process of area rug dry cleaning near me take?</Typography>
        <Typography variant="body">The duration of the process depends mainly on:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>How soiled the rug is;</p>
        </Typography>
        <Typography variant="li">
          <p>The size and quantity of the rugs;</p>
        </Typography>
        <Typography variant="li">
          <p>If a stain removal service is needed.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">8. How long does it take for the carpet to get dry after a rug dry cleaning London is performed?</Typography>
        <Typography variant="body">Since the dry cleaning method uses a cleaning product that is in powder form and little to no water is involved in the cleaning process, the rug will be completely dry either immediately or almost immediately after the cleaning procedure has ended.</Typography></li>
      <li>
        <Typography variant="h3">9. How soon can I expect a cleaner to visit me?</Typography>
        <Typography variant="body">We will make every effort to secure an appointment for you as quickly as possible. Typically, our schedule is booked for the next three days, although there may be occasional exceptions.</Typography></li>
      <li>
        <Typography variant="h3">10. Can you give me a dry clean rug price quote over the phone or do you have to visit my property?</Typography>
        <Typography variant="body">Yes, we can provide you with an estimate over the phone. However, for commercial properties, a site visit may be necessary. Additionally, you have the option to get a dry clean rug price quote online.</Typography></li>
      <li>
        <Typography variant="h3">11. What payment methods do you accept?</Typography>
        <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments handed directly to our team.</Typography></li>
      <li>
        <Typography variant="h3">12. Can you provide me with an invoice for the dry cleaning rug cost?</Typography>
        <Typography variant="body">Yes, we will send you a receipt via email.</Typography></li>
      <li>
        <Typography variant="h3">13. Are you qualified?</Typography>
        <Typography variant="body">Yes, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s recognised industry qualification, and of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a>.</Typography></li>
      <li>
        <Typography variant="h3">14. How long have you been in the rug cleaning business?</Typography>
        <Typography variant="body">We have been actively serving both commercial and residential clients in the carpet and rug cleaning sector since 2012. We have worked with a variety of carpets, rugs, upholstery, and stains throughout the years, and we've learned a lot. This knowledge, along with our dedication to quality, has inspired us to improve our services by:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p><strong>Constant Equipment Upgrades:</strong> As soon as better substitutes hit the market, we promptly swap out our old machinery and equipment for new ones.</p>
        </Typography>
        <Typography variant="li">
          <p><strong>Continuous Product Improvement:</strong> To keep our cleaning products at the forefront of industry standards, we evaluate and enhance them on a regular basis.</p>
        </Typography>
        <Typography variant="li">
          <p><strong>Constant Learning and Development:</strong> We actively seek out new professional courses and training opportunities in order to further our commitment to improving our knowledge and abilities. We are able to keep up with the most recent developments in the business thanks to this dedication.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">15. Can you add a discount for me in the dry clean rug price quote?</Typography>
        <Typography variant="body">Our dry clean rug prices are the most appealing on the market, in addition to being extremely competitive, considering our dedication to providing high-quality cleaning services that entail the use of highly effective equipment and a wide selection of over 20 premium cleaning products. We recommend combining all the services you need to secure a better rate. This cost efficiency stems from the initial expenses and additional fees associated with each technician visit, which include factors like travel time, parking, and handling bulky equipment during loading and unloading.</Typography></li>
      <li>
        <Typography variant="h3">16. How much does a dry-cleaning rug cost?</Typography>
        <Typography variant="body">How much the dry cleaning rug costs depends on the following factors:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The quantity and size of the rugs;</p>
        </Typography>
        <Typography variant="li">
          <p>How soiled they are;</p>
        </Typography>
        <Typography variant="li">
          <p>The type and fabric of the rugs;</p>
        </Typography>
        <Typography variant="li">
          <p>How easy the access to the rug is.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">To learn more, take a look at our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">dry clean rug prices</a>.</Typography>
      </li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">17. Can sisal rugs be professionally cleaned?</Typography>
        <Typography variant="body">Yes, sisal rugs can be professionally cleaned through dry cleaning. We are specialised in sisal rug cleaning. We also offer synthetic rug cleaning, delicate or all-natural fibres rug cleaning, such as coir rug cleaning, sheepskin rug cleaning, jute rug cleaning service, professional cleaning viscose rug, professional silk rug cleaning, professional cowhide rug cleaning, hemp rug cleaning, bamboo silk rug cleaning, seagrass rug cleaning and more.</Typography></li>
      <li>
        <Typography variant="h3">18. Can a jute rug be professionally cleaned?</Typography>
        <Typography variant="body">Yes, jute rugs can be professionally dry-cleaned. Our company offers jute rug cleaning services. We also perform synthetic rug cleaning, delicate or all-natural fibres rug cleaning, such as coir rug cleaning, sheepskin rug cleaning, sisal rug cleaning, professional cleaning viscose rug, professional silk rug cleaning, professional cowhide rug cleaning, hemp rug cleaning, bamboo silk rug cleaning, seagrass rug cleaning and more.</Typography></li>
      <li>
        <Typography variant="h3">19. Can you steam clean a jute rug?</Typography>
        <Typography variant="body">Jute rugs are delicate and need to be treated via a dry cleaning method, as steam cleaning is not suitable for them and will create permanent damage to the rugs. Dry cleaning uses no to little water and a cleaning compound in powder form to ensure that the jute rug will be properly treated.</Typography></li>
      <li>
        <Typography variant="h3">20. Can you steam clean a cowhide rug?</Typography>
        <Typography variant="body">A cowhide rug is delicate and needs a dry cleaning treatment. Dry cleaning uses no to little water and a cleaning compound in powder form to ensure that your sisal rug will be carefully and properly treated. Water-based cleaning methods are not suitable for such materials and will create permanent damage to the rug.</Typography></li>
      <li>
        <Typography variant="h3">21. Can you steam clean a silk rug?</Typography>
        <Typography variant="body">Rugs, made from silk are very delicate and will not sustain from steam cleaning. In steam cleaning, high-temperature water and high pressure are used, which will damage the rug. We at “Fine Carpet Cleaning” Ltd. perform dry rug cleaning services for such cases and will ensure that your beautiful rug will be left fresh and clean.</Typography></li>
      <li>
        <Typography variant="h3">22. How much does it cost to dry clean a sheepskin rug?</Typography>
        <Typography variant="body">How much does it cost to dry clean a sheepskin rug depends on the following factors:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The quantity and size of the rugs;</p>
        </Typography>
        <Typography variant="li">
          <p>How soiled they are;</p>
        </Typography>
        <Typography variant="li">
          <p>How easy the access to the rug is.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">If you want to receive information on the specific cost to dry clean your sheepskin rug, do not hesitate to contact us at any suitable time for you.</Typography>
      </li>
    </Entry>
  </Container>
}

const JSONLDScript = () => {
  createEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Dry rug cleaning service",
      "image": "https://finecarpetcleaning.co.uk/assets/service-pics/dry-rug-cleaning/dry-rug-cleaning-service.jpg",
      "description": "Fine Carpet Cleaning provides expert dry rug cleaning services that improve hygiene, extend the lifespan of your rugs, and keep them looking fresh and vibrant.",
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
      },
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Will you fee me if I cancel the dry rug cleaning service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a cancellation fee applies only if you cancel on the day of cleaning, resulting in the loss of your deposit."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to pay for the congestion / parking charge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, please arrange a parking space for our vehicles and cover any applicable parking or congestion fees."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take for the rug to dry after cleaning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The rug is usually dry immediately after dry cleaning, as it uses little to no water."
            }
          },
          {
            "@type": "Question",
            "name": "How long have you been in the rug cleaning business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We have been in the rug cleaning industry since 2012, gaining extensive experience with various types of rugs."
            }
          },
          {
            "@type": "Question",
            "name": "Can you provide me with an invoice for the dry cleaning cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we will send a receipt via email."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a dry-cleaning rug cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost depends on the rug size, soil level, type, and accessibility."
            }
          }
        ]
      }
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

      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Dry rug cleaning service</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/dry-rug-cleaning/dry-rug-cleaning-service.jpg" alt="dry-rug-cleaning-service" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">What to expect from our dry rug cleaning service</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform dry rug cleaning services. Dry rug cleaning services are effective, but it's important to note that they may not be as effective in deep cleaning heavily soiled rugs or in removing certain types of stains. Dry cleaning is used for cleaning finer and more delicate rugs, which can be easily damaged by water-based cleaning methods. Other benefits of using dry rug cleaning services are:</p>
        <ul>
          <li class="ml--5">
            <p>Being suitable for various types of rugs. We perform a wide range of services like, synthetic rug cleaning, as well as seagrass rug cleaning, coir, sisal rug cleaning, professional silk rug cleaning, professional cowhide rug cleaning, hemp rug cleaning, bamboo silk rug cleaning, sheepskin rug cleaning, jute rug cleaning service and professional cleaning viscose rugs;</p>
          </li>
          <li class="ml--5">
            <p>Little to no moisture is used, which requires little to no drying time;</p>
          </li>
          <li class="ml--5">
            <p>Rug dry cleaning London is performed quicker than other cleaning methods, making it a great solution for cleaning large facilities;</p>
          </li>
          <li class="ml--5">
            <p>There is no risk of shampoo residue being left behind or potential mould problems;</p>
          </li>
          <li class="ml--5">
            <p>Being a significantly faster method when compared to hot water extraction;</p>
          </li>
          <li class="ml--5">
            <p>Refreshing the rug and bringing back its colour.</p>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our dry rug cleaning services:</p>

        <ul>
          <li class="ml--5">
            <p>You get in touch with us.</p>
          </li>
          <li class="ml--5">
            <p>We offer personalised service recommendations based on your requirements.</p>
          </li>
          <li class="ml--5">
            <p>We provide you with a quotation.</p>
          </li>
          <li class="ml--5">
            <p>If our terms meet your satisfaction, we schedule an appointment at your convenience.</p>
          </li>
          <li class="ml--5">
            <p>Our skilled technician visits your property to carry out the dry rug cleaning service.</p>
          </li>

        </ul>
        <h3>What do we offer:</h3>
        <p>Other rug cleaning services we perform are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-rug-cleaning-services/steam">Rug steam cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-stain-removal-services">Rug stain removal</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/stain-protection-services">Rug stain protection</a></li>
        </ul>
      </div>

      <FleurDivider/>

      <h2>The process of our dry rug cleaning service:</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5"><Typography variant="body">A powerful vacuum cleaner is used to clean the rug so that most of the dirt and grimy particles are extracted.</Typography></li>
          <li class="ml--5"><Typography variant="body">After that, a biodegradable cleaning compound is simmered onto the rug, which attracts dirt and grime and brings them to the surface.</Typography></li>
          <li class="ml--5"><Typography variant="body">Then a machine is used to agitate the cleaning compound into the fibres.</Typography></li>
          <li class="ml--5"><Typography variant="body">Finally, everything is vacuumed off, leaving the rug clean, fresh and dry.</Typography></li>
          <li class="ml--5"><Typography variant="body">If the area that needs to be cleaned is small, we may brush the cleaning powder into the carpet with a large brush by hand and then we will vacuum the area. We use this method for small spaces that don’t need the heavy equipment we would normally use, and the effect is the same, leaving the rug clean and fresh.</Typography></li>
        </ol>
      </div>

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our dry rug cleaning service</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Highly-efficient extractors</h3>
            <Typography variant="body">At "Fine Carpet Cleaning" Ltd., we utilise some of the finest portable machines globally in our pillow cleaning service. After rigorous testing, we've carefully selected top brands available in the UK market, including "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>" and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>". Moreover, our in-house engineer implements significant enhancements to optimise their performance.At "Fine Carpet Cleaning Ltd," we employ the most effective and cutting-edge cleaning equipment, along with premium products for our rug dry cleaning London. Our machines are recognized as some of the most powerful and efficient portable units globally.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Excellent standard device</h3>
            <Typography variant="body">The machine carefully chosen for our dry rug cleaning service, "SEBO BS 36,"  is professionally designed and specifically crafted for commercial use. Its counter-rotating brush brings dirt and debris to the surface for easy extraction, leaving your rug looking and feeling fluffy and fresh, thus extending its lifespan.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning products</h3>
            <Typography variant="body">For optimal results in our rug dry cleaning London, we extensively tested various cleaning products and selected the most efficient one - the "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://envirodri.com/" target="_blank" rel="noopener">Envirodri</a>" dry rug cleaning powder. This eco-friendly cleaning product is designed to attract and absorb dirt and soiling from all rug types, which is then vacuumed away, leaving behind cleaner, fresher, and newer-looking rugs.</Typography>
            <Typography variant="body">With our state-of-the-art cleaning equipment and premium products, we assure a high-quality rug dry cleaning London service.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Pictures from our dry rug cleaning service</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/service-pics/dry-rug-cleaning/1-rug-dry-cleaning-london-1.jpg", alt: "1-rug-dry-cleaning-london-1" },
        { src: "/assets/service-pics/dry-rug-cleaning/2-area-rug-dry-cleaning-near-me-3.jpg", alt: "2-area-rug-dry-cleaning-near-me-3" },
        { src: "/assets/service-pics/dry-rug-cleaning/3-area-rug-dry-cleaning-near-me.jpg", alt: "3-area-rug-dry-cleaning-near-me" },
        { src: "/assets/service-pics/dry-rug-cleaning/4-dry-rug-cleaning-service-1.jpg", alt: "4-dry-rug-cleaning-service-1" },
        { src: "/assets/service-pics/dry-rug-cleaning/5-rug-dry-cleaning-london.jpg", alt: "5-rug-dry-cleaning-london" },
        { src: "/assets/service-pics/dry-rug-cleaning/7-area-rug-dry-cleaning-near-me-2.jpg", alt: "7-area-rug-dry-cleaning-near-me-2" },
        { src: "/assets/service-pics/dry-rug-cleaning/8-rug-dry-cleaning-london-2.jpg", alt: "8-rug-dry-cleaning-london-2" },
        { src: "/assets/service-pics/dry-rug-cleaning/9-rug-dry-cleaning-london-3.jpg", alt: "9-rug-dry-cleaning-london-3" },
        { src: "/assets/service-pics/dry-rug-cleaning/10-area-rug-dry-cleaning-near-me-1.jpg", alt: "10-area-rug-dry-cleaning-near-me-1" },
      ]} />

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Video from our dry rug cleaning service</h2>

			<VideoPlayer src='https://www.youtube.com/embed/ShTPBmqQtZs?enablejsapi=1&mute=1' />

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Our dry cleaning rug prices</h2>

      <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
        style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
        <br></br>
        Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
        charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
        delays for the technicians and messes up the schedule.
        <br></br>
        <strong id="price_table">Deising - Free of charge - just notify us when booking.</strong></div>

      <PriceTable title="Rug type">
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Rug - small</td>
          <td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Rug - medium</td>
          <td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Rug - large</td>
          <td class="bg-paper pl-5 py-2 font-500">from £37.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Rug - extra large</td>
          <td class="bg-paper pl-5 py-2 font-500">from £60.00</td>
        </tr>
      </PriceTable>

      <button class="outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-250px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9 my-20 mx-auto" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>

      <FleurDivider/>

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
      </FOTSlider>

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Our dry rug cleaning service specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use stain protector</h3>
            <Typography variant="body">Our expert in rug dry cleaning London recommends considering the addition of a stain protector to your rugs and upholstery whenever possible. This step can lead to substantial savings on stain removal services. For more insights into the benefits of stain protection, we suggest visiting our dedicated <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection service</a> page.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Try professional stain removal</h3>
            <Typography variant="body">It's highly advisable to book a professional stain removal service if your rug or upholstery has been stained. Cleaning attempts or allowing the stain to dry can result in fabric damage, making complete removal challenging. In some cases, amateur attempts can even seal the stain, complicating its removal by professionals. Opting for professional <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-stain-removal-services">stain removal services</a> can help preserve the value of your carpet, rug or upholstery.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Explore our comprehensive services</h3>
            <Typography variant="body">Our specialists suggest regular vacuuming, regardless of the fabric type of the rug. Using an upright vacuum cleaner can effectively remove deeply embedded dust from carpet fibres. However, nowadays everyone is in a hurry, so if you don’t have time take a look at our wide range of services encompassing upholstery cleaning, carpet cleaning, and more. Explore the full extent of our expertise to make well-informed decisions about your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Save time and money</h3>
            <Typography variant="body">Our professional dry rug cleaning service experts suggest bundling multiple services into a single appointment for cost savings. Separate visits by technicians incur extra expenses such as travel time, parking, and managing heavy equipment during loading and unloading, making individual appointments less economical.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy the health benefits</h3>
            <Typography variant="body">Maintaining the cleanliness of your carpets, rugs, and upholstery is crucial for your health. These items can accumulate dust, microorganisms, and dirt, potentially causing allergies, respiratory difficulties, and skin problems. To address these concerns, our cleaning specialist recommends booking professional cleaning services, ideally at least once a year, or more frequently for rugs receiving high foot traffic.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Reviews for our dry rug cleaning service</h2>

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

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our dry rug cleaning service</h2>

      <FaqSection />

      <FleurDivider/>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
