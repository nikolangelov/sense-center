import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { Typography } from '../../../components/Typography';
import { createCollapsable } from '../../../components/Collapsable';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../../components/FrequentlyOrderedTogether';
import { PriceTable } from '../../../components/PriceTable';
import { createEffect } from "solid-js";
import {FleurDivider} from "../../../components/FleurDivider";

const VideoPlayer = () => {
  return (
    <div class="flex flex-justify-center flex-items-center mt-20">
      <iframe
        class="mt-10 b-rd-3 h-200px md-h-500px"
        style="width: 100%;"
        src="https://www.youtube.com/embed/8wpIdrb1OZs?autoplay=1&mute=1"
        allow="autoplay; encrypted-media"
      ></iframe>
    </div>
  );
};

function FaqSection() {
  const { Container, Entry } = createCollapsable()
  return <Container>
    <Entry>
      <li>
        <Typography variant="h3">1. Do you have a cancellation fee?</Typography>
        <Typography variant="body">Yes, we do have a cancellation fee, but it is only applied if you cancel on the day of the cleaning. In that case, you will lose your deposit.</Typography></li>
      <li>
        <Typography variant="h3">2. Do I need to pay for the congestion / parking charge?</Typography>
        <Typography variant="body">Yes, we request that you arrange a suitable parking space for our vehicles within close proximity of the property since we carry heavy equipment, and to cover any parking / congestion expenses if applicable.</Typography></li>
      <li>
        <Typography variant="h3">3. Do I need to move furniture before water free carpet cleaning?</Typography>
        <Typography variant="body">We kindly request your assistance in relocating small, fragile, or valuable furniture items, such as lamps and ornaments, for insurance reasons. If possible, please position these items in a secure area before our team's arrival, one that will remain undisturbed during the cleaning process.</Typography>
        <Typography variant="body">For your convenience, we are more than happy to assist in moving other lightweight furniture, such as chairs, armchairs, and tables during the cleaning. Once the cleaning is completed, we will return these items to their original positions.</Typography>
        <Typography variant="body">In cases where heavy furniture, such as sofas, beds, wardrobes, or cupboards, needs to be moved, an additional fee will apply. This accounts for the extra time and effort required by our technician, who will receive appropriate compensation. Our primary goal is to ensure a stress-free experience for you throughout the entire process.</Typography></li>
      <li>
        <Typography variant="h3">4. What happens if I live on the 4th floor or above and I have no lift?</Typography>
        <Typography variant="body">Due to the weight of our equipment, which exceeds 50kg, we apply an additional charge for each additional floor that requires manual carrying. This charge is necessary because this process typically consumes a significant amount of time and can lead to faster tiring of our technicians. Because of that, on such days, we may not be able to complete as much work as we typically do.</Typography></li>
      <li>
        <Typography variant="h3">5. Are you insured?</Typography>
        <Typography variant="body">Yes, we are fully insured.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. What happens if your cleaner damages anything while performing carpet dry cleaning services?</Typography>
        <Typography variant="body">We are fully insured and if anything is damaged we are fully covered.</Typography></li>
      <li>
        <Typography variant="h3">7. How long does the process of dry pro carpet cleaning take?</Typography>
        <Typography variant="body">The process of water free carpet cleaning depends on the degree of soiling of the carpet, whether stain removal is required and whether furniture is present. Professional dry carpet cleaning can take between 15 and 30 minutes for each room. However, heavily soiled carpets or those with many stains may require more time to ensure thorough cleaning. The existence of furniture might also impact the drying times, as it may need to be moved. This cleaning method is especially beneficial in commercial settings or high-traffic areas where carpets need to be ready for use quickly.</Typography></li>
      <li>
        <Typography variant="h3">8. How long does it take for the carpet to get dry after a carpet dry cleaning in London is performed?</Typography>
        <Typography variant="body">Since the dry carpet cleaning method uses a cleaning product that is in powder form and little to no water is involved in the cleaning process, the carpet will be completely dry almost immediately after the cleaning procedure has ended.</Typography></li>
      <li>
        <Typography variant="h3">9. Do you guarantee that all stains will be removed after professional dry carpet cleaning services?</Typography>
        <Typography variant="body">No, unfortunately, we are unable to offer an absolute guarantee due to various factors that are beyond our control. These factors include:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The age of the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The nature of the substance that caused the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The carpet's type and fabric;</p>
        </Typography>
        <Typography variant="li">
          <p>Any prior attempts to treat the stains.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">Nevertheless, our commitment is to exert every conceivable effort to remove all stains from your carpet. Our strategy includes:</Typography>
      </li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The use of cutting-edge cleaning equipment;</p>
        </Typography>
        <Typography variant="li">
          <p>The application of carefully chosen high-quality detergents;</p>
        </Typography>
        <Typography variant="li">
          <p>Tailoring our approach to suit the specific carpet type and the nature of the staining agent, thereby optimising the likelihood of the best possible outcome.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">10. Can you clean the stain from my natural fibre carpet, after I have attempted to clean it?</Typography>
        <Typography variant="body">If you have attempted to clean your natural fibre carpet with water or via a steam cleaning method, we unfortunately cannot remove the stain. The reason is that carpets that are made of natural fabrics such as seagrass, coir, sisal carpets, silk, viscose or jute are very delicate and can only be cleaned with a dry cleaning method that uses little to no water. The use of water and steam on such carpets will damage them. In such an unfortunate case the only way to save your carpet is to look for a professional carpet dyeing company.</Typography></li>
      <li>
        <Typography variant="h3">11. How soon can I expect a cleaner to visit me?</Typography>
        <Typography variant="body">We will make every effort to secure an appointment for you as quickly as possible. Typically, our schedule is booked for the next three days, although there may be occasional exceptions.</Typography></li>
      <li>
        <Typography variant="h3">12. Can you give me a quote over the phone, or do you have to visit my property?</Typography>
        <Typography variant="body">Yes, we can provide you with an estimate over the phone, eliminating the need for an in-person visit to your property. However, for commercial properties, a site visit may be necessary. Additionally, you have the option to get a dry carpet cleaning quote online.</Typography></li>
      <li>
        <Typography variant="h3">13. What payment methods do you accept for waterless carpet cleaning services?</Typography>
        <Typography variant="body">We accept debit / credit cards, and cash payments directly to our team.</Typography></li>
      <li>
        <Typography variant="h3">14. Can you provide me with an invoice for the professional dry carpet cleaning in London?</Typography>
        <Typography variant="body">Yes, we will send you a receipt via email.</Typography></li>
      <li>
        <Typography variant="h3">15. Are you qualified?</Typography>
        <Typography variant="body">Yes, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s recognised industry qualification, and of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a>.</Typography></li>
      <li>
        <Typography variant="h3">16. How long have you been in the carpet cleaning business?</Typography>
        <Typography variant="body">Since 2012, we have been actively working in the carpet cleaning industry, serving both commercial and residential clients. Over these years, we've encountered a wide array of carpets, rugs, upholstery, and stains and gained valuable experience. This experience, coupled with our commitment to achieve excellence, has driven us to enhance our services through:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p><strong>Continual Equipment Upgrades:</strong> We consistently replace our equipment and machinery with superior alternatives whenever they become available in the market.</p>
        </Typography>
        <Typography variant="li">
          <p><strong>Ongoing Product Enhancement:</strong> We regularly assess and improve our cleaning products to ensure they remain at the forefront of industry standards.</p>
        </Typography>
        <Typography variant="li">
          <p><strong>Continuous Learning and Development:</strong> We are dedicated to enhancing our knowledge and skills by actively pursuing additional professional courses and training opportunities. This commitment enables us to stay updated with the latest industry advancements.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">17. Can you give me a discount for the dry organic carpet cleaning services?</Typography>
        <Typography variant="body">Given our commitment to provide high-quality professional dry carpet cleaning services, which involve the use of highly effective equipment and a wide selection of more than 20 premium cleaning products, our carpet dry cleaning prices stand out as not only highly competitive but also the most attractive in the market. We strongly encourage you to look at the advantages of having the services you require performed at once, which proves to be more cost-effective than having them executed individually. This cost-efficiency is because of the substantial initial cost and additional fees that come with each technician visit, considering factors like travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography></li>
      <li>
        <Typography variant="h3">18. What is dry carpet cleaning?</Typography>
        <Typography variant="body">Dry carpet cleaning is a carpet cleaning method that doesn't require the use of a significant amount of water. Instead of water-based cleaning solutions, it typically involves the use of specialised dry cleaning compounds or powders.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">19. Does dry cleaning kill carpet beetles?</Typography>
        <Typography variant="body">Dry pro carpet cleaning typically doesn't involve a process that would effectively kill carpet beetles. Dry carpet cleaning companies typically rely on the use of specialised dry cleaning compounds or powders and mechanical agitation to remove dirt and stains from carpets. This method is effective for cleaning and maintaining carpets, so it may eliminate the potential problem of the carpet having carpet beetles.</Typography>
        <Typography variant="body">If you suspect a carpet beetle infestation in your home, we advise you to take specific measures to address the problem.</Typography></li>
      <li>
        <Typography variant="h3">20. Does dry carpet cleaning work?</Typography>
        <Typography variant="body">Yes, water free carpet cleaning really works. The advantages of dry organic carpet cleaning include quicker drying times compared to traditional steam cleaning, as well as less risk of over-wetting the carpet. It's often used for maintenance cleaning or in situations where minimal drying time is essential, such as in commercial settings.</Typography></li>
      <li>
        <Typography variant="h3">21. Is dry carpet cleaning effective?</Typography>
        <Typography variant="body">Dry organic carpet cleaning is effective, but it's important to note that it may not be as effective in deep cleaning heavily soiled carpets or in removing certain types of stains. The choice between dry (no water) and wet (steam) carpet cleaning methods depends on factors like the carpet's condition, the type of stains, and the specific cleaning needs. Check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-carpet-cleaning-services/steam">steam carpet cleaning page</a> to read more and to make an informed decision.</Typography></li>
      <li>
        <Typography variant="h3">22. How much does it cost to dry clean a carpet?</Typography>
        <Typography variant="body">How much the carpet dry cleaning costs depends on the following factors:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The quantity and size of the carpets;</p>
        </Typography>
        <Typography variant="li">
          <p>Level of soiling;</p>
        </Typography>
        <Typography variant="li">
          <p>The type and fabric of the carpets;</p>
        </Typography>
        <Typography variant="li">
          <p>Ease of access to the carpets.</p>
        </Typography>
      </ul>
      <Typography variant="body">To learn more, check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">carpet dry cleaning prices</a>.</Typography>
      <li>
        <Typography variant="h3">23. What is a dry carpet cleaning process?</Typography>
        <Typography variant="body">Here's the process of carpet cleaning without water:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p><strong>Application of Cleaning Compound:</strong> A dry cleaning compound or powder is applied to the carpet.</p>
        </Typography>
        <Typography variant="li">
          <p><strong>Extraction:</strong> The carpet is vacuumed thoroughly to remove the compound, along with the dirt and stains that have been absorbed by it.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">24. Can carpets be dry-cleaned?</Typography>
        <Typography variant="body">Yes, carpets can be dry cleaned using a method known as dry carpet cleaning. No water carpet cleaning is an alternative to traditional wet or steam cleaning methods. It is mostly used in the following typical scenarios:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>If your carpet is made of natural fibres, such as seagrass, coir, sisal carpets, silk, viscose or jute. In this case dry carpet cleaning is the only option you have as steam cleaning would cause damage to such carpet.</p>
        </Typography>
        <Typography variant="li">
          <p>In case that you own a big facility and you can’t tolerate any off-time for letting the carpet dry after steam cleaning.</p>
        </Typography>
        <Typography variant="li">
          <p>In case your carpets do not need deep cleaning but only refreshment.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">25. How does dry carpet cleaning work?</Typography>
        <Typography variant="body">Dry carpet cleaning is a cleaning method that doesn't rely on a significant amount of water. Instead, it uses specialised dry-cleaning compounds or powders to clean carpets. These cleaning compounds attract dirt and grime and are agitated into the fibres of the carpet using a special machine. Finally, the carpet is vacuumed thoroughly, leaving it refreshed and clean.</Typography>
        <Typography variant="body">No water carpet cleaning services have several advantages, including:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p><strong>Quick Drying:</strong> Since it uses minimal moisture, the carpet typically dries much faster than with wet cleaning methods.</p>
        </Typography>
        <Typography variant="li">
          <p><strong>Less Risk of Over-Wetting:</strong> There's a reduced risk of over-wetting the carpet, which can lead to mould and mildew growth.</p>
        </Typography>
        <Typography variant="li">
          <p><strong>Minimal Disruption:</strong> It's less disruptive because there's no need to wait for the carpet to dry.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">26. Is “Fine Carpet Cleaning” Ltd. a specialised dry carpet cleaning company?</Typography>
        <Typography variant="body">Yes, “Fine Carpet Cleaning” Ltd is a specialised dry carpet cleaning company. Anyhow apart from professional dry carpet cleaning, we are offering a variety of  <a class="color-paper-link hover-color-paper-link-hover:hover" href="/services">other cleaning services.</a></Typography></li>
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
          "name": "Dry carpet cleaning services",
          "image": "https://finecarpetcleaning.co.uk/assets/service-pics/dry-carpet/professional-dry-carpet-cleaning.jpg",
          "description": "Fine Carpet Cleaning offers professional dry carpet cleaning services that enhance hygiene, prolong carpet life, and maintain a fresh appearance.",
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
              "name": "Do you have a cancellation fee?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we charge a cancellation fee only if you cancel on the day of the cleaning. In that case, you will lose your deposit."
              }
            },
            {
              "@type": "Question",
              "name": "What happens if I live on the 4th floor or above and I have no lift?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Due to the weight of our equipment, which exceeds 50 kg, we charge extra for each floor that requires manual carrying. This process takes extra time and may tire our technicians more quickly."
              }
            },
            {
              "@type": "Question",
              "name": "Are you insured?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we are fully insured for your peace of mind."
              }
            },
            {
              "@type": "Question",
              "name": "How long does the process of dry carpet cleaning take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The duration of the process depends on how dirty the carpet is, if stain removal is needed, and if furniture is present. It typically takes 15 to 30 minutes per room."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take for the carpet to dry after a carpet dry cleaning in London is performed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The dry carpet cleaning method uses a powder and little to no water, so your carpet will be completely dry almost immediately after cleaning."
              }
            },
            {
              "@type": "Question",
              "name": "What is dry carpet cleaning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dry carpet cleaning is a method that does not require much water. It involves the use of specialized dry cleaning compounds or powders instead of water-based solutions."
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

      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Dry carpet cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/dry-carpet/professional-dry-carpet-cleaning.jpg" alt="professional-dry-carpet-cleaning" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider/>

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
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/steam">Steam carpet cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/eco-friendly">Eco-friendly carpet cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/fast-dry">Fast-dry carpet cleaning</a></li>
        </ul>
      </div>

      <FleurDivider/>

      <h2>The process of our dry carpet cleaning in London</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="md-ml--5">
            <Typography variant="body">The carpet is thoroughly vacuumed with a powerful cleaner to extract most of the dirt and grime particles.</Typography>
          </li>
          <li class="md-ml--5">
            <Typography variant="body">A biodegradable cleaning compound is applied to the carpet, which attracts dirt and grime.</Typography>
          </li>
          <li class="md-ml--5">
            <Typography variant="body">After that, a machine is used for its agitation into the fibres.</Typography>
          </li>
          <li class="md-ml--5">
            <Typography variant="body">Finally, everything is vacuumed off, leaving the carpet both clean and dry. This leaves the carpet shinier, refreshed and clean.</Typography>
          </li>
          <li class="md-ml--5">
            <Typography variant="body">For smaller areas, we may brush the cleaning powder into the carpet by hand using a large brush, then vacuum it off. We use this method for small spaces that don’t need the large equipment we normally would use, and the effect is the same, leaving the carpet clean and fresh.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our dry carpet cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning supplies</h3>
            <Typography variant="body">We at "Fine Carpet Cleaning" Ltd. use the most effective and top-of-the-line cleaning equipment and premium products in our no-water carpet cleaning. Our machines are recognised as some of the most powerful and effective portable machines globally.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Efficient vacuum cleaner</h3>
            <Typography variant="body">The machine we have carefully selected to use for our waterless carpet cleaning is professionally designed for commercial use - the “SEBO BS 36”. With its counter rotating brush (CRB) it brings dirt and debris to the surface, where it can be easily extracted. This will leave your carpet looking and feeling fluffy and fresh, and will help to extend its lifespan.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Thoughtfully chosen cleaning products</h3>
            <Typography variant="body">To ensure exceptional results in our dry pro carpet cleaning, we have extensively tested which cleaning product gives the best results and have selected the most efficient one - the <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://envirodri.com/" target="_blank" rel="noopener">“Envirodri”</a> dry carpet cleaning powder. This cleaning product is eco-clean and has been designed to attract and absorb dirt and soiling from all carpet types. It is then vacuumed away to leave behind cleaner, fresher and newer looking carpets.</Typography>
            <Typography variant="body">With our cutting-edge cleaning equipment and premium products, we guarantee a top-quality carpet dry cleaning service.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Pictures from our professional carpet cleaning services in London</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/service-pics/dry-carpet/1-dry-organic-carpet-cleaning.jpg", alt: "1-dry-organic-carpet-cleaning" },
        { src: "/assets/service-pics/dry-carpet/2-dry-organic-carpet-cleaning-1.jpg", alt: "2-dry-organic-carpet-cleaning-1" },
        { src: "/assets/service-pics/dry-carpet/3-dry-carpet-cleaning-services-1.jpg", alt: "3-dry-carpet-cleaning-services-1" },
        { src: "/assets/service-pics/dry-carpet/4-dry-carpet-cleaning-london-1.jpg", alt: "4-dry-carpet-cleaning-london-1" },
        { src: "/assets/service-pics/dry-carpet/5-dry-carpet-cleaning-companies.jpg", alt: "5-dry-carpet-cleaning-companies" },
        { src: "/assets/service-pics/dry-carpet/6-dry-carpet-cleaning-companies-1.jpg", alt: "6-dry-carpet-cleaning-companies-1" },
        { src: "/assets/service-pics/dry-carpet/7-dry-carpet-cleaning-london.jpg", alt: "7-dry-carpet-cleaning-london.jpg" },
      ]} />

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Video from our professional carpet cleaning services in London</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Carpet dry cleaning prices</h2>

      <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
        style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
        <br></br>
        Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
        charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
        delays for the technicians and messes up the schedule.
        <br></br>
        <strong id="price_table">Deising - Free of charge - just notify us when booking.</strong></div>

      <PriceTable title="Room type">
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Hallway</td>
          <td class="bg-paper pl-5 py-2 font-500">from £16.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Landing</td>
          <td class="bg-paper pl-5 py-2 font-500">from £8.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Living room</td>
          <td class="bg-paper pl-5 py-2 font-500">from £48.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Bedroom</td>
          <td class="bg-paper pl-5 py-2 font-500">from £32.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Flight of stairs</td>
          <td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Office room</td>
          <td class="bg-paper pl-5 py-2 font-500">from £32.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Hotel room</td>
          <td class="bg-paper pl-5 py-2 font-500">from £50.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Loft room</td>
          <td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Through lounge</td>
          <td class="bg-paper pl-5 py-2 font-500">from £76.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Box room</td>
          <td class="bg-paper pl-5 py-2 font-500">from £32.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
          <td class="bg-paper pl-5 py-2 font-500">from £11.00</td>
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
          img="/assets/service-pics/sofa-cleaning/sofa-upholstery-cleaning-service.jpg"
          alt="sofa-upholstery-cleaning-service"
          title="Professional sofa cleaning services"
          href="/professional-upholstery-cleaning-services/sofa"
          description="Our expert sofa cleaning uses steam and hot water extraction to eliminate 99% of microorganisms, revitalizing your space for a healthier home."
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

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Our dry carpet cleaning services specialist advises:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Use a stain defender</h3>
            <Typography variant="body">Our dry carpet cleaning specialist advises adding a stain protector to your carpet and upholstery whenever possible. This measure can save you a significant amount on professional stain removal services. For more information on the benefits of stain protection, we recommend further visiting <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">our dedicated stain protection services page.</a></Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Professional Stain Removal</h3>
            <Typography variant="body">It's highly recommended to hire a professional stain removal service if your carpet or upholstery becomes stained. “Do it yourself” (DIY) attempts or letting the stain dry can lead to fabric damage, making the complete removal very hard. In fact, self-cleaning attempts can seal the stain, making it even more challenging or impossible for professionals to remove. Looking for <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-stain-removal-services">professional stain removal services</a> can preserve the value of your carpet or upholstery.</Typography>
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

      <FleurDivider/>

      <h2 class="line-height-12 md-line-height-14">Reviews for our professional carpet steam cleaning services in London</h2>

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

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our dry carpet cleaning services</h2>

      <FaqSection />

      <FleurDivider/>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
