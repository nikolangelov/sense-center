import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../components/FacebookLikeGallery';
import { createCollapsable } from '../../components/Collapsable';
import { Typography } from '../../components/Typography';
import { ReviewSlider, StarReview } from '../../components/ReviewSlider';
import { PriceTable } from '../../components/PriceTable';
import { createEffect } from "solid-js";
import { FleurDivider } from "../../components/FleurDivider";
import { VideoPlayer } from '../../components/VideoPlayer';

function FaqSection() {
  const { Container, Entry } = createCollapsable()
  return <Container>
    <Entry>
      <li>
        <Typography variant="h3">1. Will you fee me if I cancel the service?</Typography>
        <Typography variant="body">Yes, but it is only applied when you cancel on the day of the antiviral sanitisation services. In that case, you will lose your deposit.</Typography></li>
      <li>
        <Typography variant="h3">2. Should I pay for the congestion / parking charge?</Typography>
        <Typography variant="body">Yes, we kindly ask that the client arrange a suitable parking space for our vehicles within close proximity of the property or to cover any parking / congestion expenses.</Typography></li>
      <li>
        <Typography variant="h3">3. What if I live on the 4th floor or above and I have no lift?</Typography>
        <Typography variant="body">Due to the weight of our devices, which exceeds 50 kilograms, a fee will be applied for each extra floor that requires manual movement. This is due to the fact that it takes an extended period of time and can result in faster weariness among our technicians. As a result, our overall production for the day may be lower than our usual output.</Typography></li>
      <li>
        <Typography variant="h3">4. Is your company insured?</Typography>
        <Typography variant="body">Yes, we are completely insured.</Typography></li>
      <li>
        <Typography variant="h3">5. What happens if your cleaner damages anything?</Typography>
        <Typography variant="body">We are fully insured and if an accident happens it will be covered by our company.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. How long does the process of antiviral sanitisation services take?</Typography>
        <Typography variant="body">The duration mainly depends on the size of the room and is not fixed. The usual sanitisation is 75 minutes per room.</Typography></li>
      <li>
        <Typography variant="h3">7. How soon can I expect your cleaner to visit me?</Typography>
        <Typography variant="body">We will try to get you an appointment as soon as possible. Usually, we are fully booked for the following three days, but sometimes there are exceptions.</Typography></li>
      <li>
        <Typography variant="h3">8. Can you give me a quote over the phone or do you need a viewing in person?</Typography>
        <Typography variant="body">Yes, we can give you a quote over the phone, there is no need for us to visit your property. You can also receive a quote online.</Typography></li>
      <li>
        <Typography variant="h3">9. What payment methods do you accept?</Typography>
        <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments directly handed to our team.</Typography></li>
      <li>
        <Typography variant="h3">10. Can you provide me with an invoice?</Typography>
        <Typography variant="body">Yes, we will send you a receipt via email.</Typography></li>
      <li>
        <Typography variant="h3">11. Are you qualified for your antiviral sanitisation services?</Typography>
        <Typography variant="body">Yes, we are qualified to do antiviral sanitisation. We have received the appropriate information, instruction and training and have achieved the required standard in Infection Control and Bio-Hazard Fogging.</Typography>
        <Typography variant="body">As for the carpet and upholstery cleaning services, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s recognised industry qualification.</Typography>
      </li>
      <li>
        <Typography variant="h3">12. How long have you been in the cleaning business?</Typography>
        <Typography variant="body">We've been involved in the cleaning business since 2012. We've encountered a wide range of carpets, rugs, upholstery, and stains throughout the years, gaining important experience. Our dedication to delivering outstanding services has prompted us to improve our performance in the following ways:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Continuously upgrading our equipment and machinery with superior alternatives whenever they become available;</p>
        </Typography>
        <Typography variant="li">
          <p>Regularly evaluating and refining our cleaning solutions to ensure the greatest quality of service;</p>
        </Typography>
        <Typography variant="li">
          <p>Commitment to improving our knowledge and abilities through regular professional courses and training, continually working to improve our cleaning services expertise.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">13. Can you give me a discount?</Typography>
        <Typography variant="body">Our cleaning services are well-known for their exceptional quality, utilizing state-of-the-art equipment and an extensive selection of premium cleaning materials. What truly sets us apart is our highly competitive and attractive pricing. We suggest bundling all the services you need to get a better price. This cost efficiency is due to the initial expenses and extra fees tied to each technician visit, including travel time, parking, and managing bulky equipment during loading and unloading.</Typography></li>
      <li>
        <Typography variant="h3">14. What is antiviral sanitisation?</Typography>
        <Typography variant="body">We offer specialised disinfection and antiviral sanitisation services. The procedure is very straightforward. It kills 99.99% of all germs and viruses on any surface using the most effective method known - fogging. When the procedure comes into contact with a surface, it has an immediate effect.</Typography></li>
      <li>
        <Typography variant="h3">15. Why hire professionals to perform antiviral sanitisation?</Typography>
        <Typography variant="body">Daily antibacterial cleaning needs to occur both at home and in the office. The regular disinfection cleaning and maintenance of our homes and offices is part of everyone’s lives. However, normal cleaning products may not be able to kill all of the bacteria and viruses on surfaces and furniture. This is where our professional house and office sanitising service comes in handy for you.</Typography></li>
      <li>
        <Typography variant="h3">16. What European Standards do you hold?</Typography>
        <Typography variant="body">We have the following European Standards: E14476, EN1276, EN1650.</Typography>
      </li>
      <li>
        <Typography variant="h3">17. What viruses and bacteria do your bio product terminate?</Typography>
        <Typography variant="body"><strong>Viruses:</strong> Vaccinia Virus – Coronavirus - Adenovirus – Avian Bronchitis Virus – Canine Distemper Virus – Canine Parvovirus – Feline CaliciVirus (SRSV) – Feline Leukaemia Virus – Feline Panleukopenia Virus – Feline Picornavirus – Hepatitis B Virus – Herpes Simplex Type 1 (HSV 1) - Herpes Simplex Type 2 – Human Immunodeficiency Virus (HIV) – Infectious Bovine Rhinotracheitis Virus - Influenza Virus Type A – Newcastle Disease Virus – Porcine Parvovirus – Pseudorabies Virus - Rabies Virus – Respiratory Syncytial Virus – Rubella Virus – Transmissible Gastroenteritis</Typography>
        <Typography variant="body"><strong>Bacteria and Spores:</strong> Staphylococcus aureus (3 separate multi-resistant strains) Pseudomonas aeruginosa (multi-resistant strain) - Escherichia coli (including O157 and multi-resistant strains) – Enterococcus hirae – Klebsiella pneumoniae – Salmonella choleraesuis – Salmonella enteritidis – Salmonella typhi – Salmonella typhimurium – Staphylococcus epidermidis – Streptococcus faecalis (multi-resistant strain) – Streptococcus pyogenes – Acinetobacter calcoaceticus – Bordatella bronchiseptica – Clostridium difficile – Enterobacter aerogenes – Enterobacter cloacae – Fusobacterium necrophorum – Listeria monocytogenes – Pasteurella multocida – Proteus mirabilis – Proteus vulgaris - Serratia marcescens – Shigella flexeri – Shigella sonnei – Chlamydia psittaci</Typography>
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
      "@graph": [
        {
          "@type": "Product",
          "name": "Antiviral sanitisation services",
          "image": "https://finecarpetcleaning.co.uk/assets/service-pics/antiviral-sanitisation/antiviral-sanitisation-services2.webp",
          "description": "Fine Carpet Cleaning offers professional antiviral sanitization services that enhance hygiene, improve the safety of your environment, and maintain a fresh appearance.",
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
              "name": "How long does the process of antiviral sanitisation services take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The duration varies by room size but typically averages 75 minutes per room."
              }
            },
            {
              "@type": "Question",
              "name": "Should I pay for the congestion/parking charge?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we kindly request that you arrange suitable parking for our vehicles near the property or cover any parking/congestion expenses."
              }
            },
            {
              "@type": "Question",
              "name": "Is your company insured?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we are fully insured."
              }
            },
            {
              "@type": "Question",
              "name": "What happens if your cleaner damages anything?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Any damages caused will be covered by our insurance."
              }
            },
            {
              "@type": "Question",
              "name": "What is antiviral sanitisation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Antiviral sanitisation involves a specialized disinfection process using fogging to kill 99.99% of germs and viruses on surfaces immediately."
              }
            },
            {
              "@type": "Question",
              "name": "Why hire professionals to perform antiviral sanitisation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Professional sanitisation ensures thorough disinfection that typical cleaning products may not achieve, making it essential for homes and offices."
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

      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Antiviral sanitisation services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/antiviral-sanitisation/antiviral-sanitisation-services2.webp" alt="antiviral-sanitisation-services2" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider />

      <h2>What to expect from our antiviral sanitisation services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at Fine Carpet Cleaning perform antiviral sanitisation services. It is important to keep your workplace and home sanitised in order to eliminate the spread of bacteria and viruses. For this reason, we provide specialised antiviral sanitisation services and disinfection cleaning. It kills 99.99% of all bacteria and viruses on all surfaces using a fogging method, which gives the best results and has an immediate effect. Our antiviral sanitisation services provide other advantages, such as:</p>
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

      <FleurDivider />

      <h2>The process of our antiviral sanitisation services:</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li>
            <Typography variant="body"><strong>Survey:</strong> Once we arrive, the first thing to do is to determine what needs to be done and how the service will be performed.</Typography>
          </li>
          <li>
            <Typography variant="body"><strong>Preparations:</strong> The preparations for our antiviral sanitisation are simple yet important. All electrical appliances must be switched off or unplugged. All fire alarm devices must be removed or fully covered.</Typography>
          </li>
          <li>
            <Typography variant="body"><strong>Sanitisation:</strong> After the preparations are done, we will begin the sanitisation with a fogging machine using a top-tier, hospital-grade, bio detergent which is extremely efficient against all viruses and bacteria, especially COVID-19.</Typography>
          </li>
          <li>
            <Typography variant="body"><strong>Ventilation:</strong> The next step is to leave the disinfected room to ventilate. Our technician will open the windows just a few inches so it can ventilate properly. Approximately 60 minutes are needed to achieve the best result.</Typography>
          </li>
          <li>
            <Typography variant="body"><strong>Protection:</strong> Our antiviral bio detergent will leave an invisible protective layer on the surface killing any viruses and bacteria that will come into contact after the sanitisation. Please keep in mind that how long the protective layer will last depends on how often the surface is used.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider />

      <h2>Equipment and products we use for our antiviral sanitisation services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <p>Fine Carpet Cleaning uses high-quality products and machinery for cleaning.</p>
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

      <FleurDivider />

      <h2>Pictures from our antiviral sanitisation services</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/service-pics/antiviral-sanitisation/1-antiviral-sanitisation-services.jpg", alt: "1-antiviral-sanitisation-services.jpg" },
        { src: "/assets/service-pics/antiviral-sanitisation/2-fcc-infection-control-and-bio-hazard-fogging-certificate.jpg", alt: "2-fcc-infection-control-and-bio-hazard-fogging-certificate" },
        { src: "/assets/service-pics/antiviral-sanitisation/3-cold-fogging-machine.jpg", alt: "3-cold-fogging-machine" },
        { src: "/assets/service-pics/antiviral-sanitisation/4-antiviral-sanitisation-services1.webp", alt: "4-antiviral-sanitisation-services1" },
      ]} />

      <FleurDivider />

      <h2>Video from our antiviral sanitisation services</h2>

      <VideoPlayer src='https://www.youtube.com/embed/4_KISdoNiRw?enablejsapi=1&mute=1' />

      <FleurDivider />

      <h2>Prices of our antiviral sanitisation services</h2>

      <PriceTable
        title="Room type"
        items={[
          { label: "Studio flat", value: "from £80.00" },
          { label: "One bedroom flat", value: "from £100.00" },
          { label: "Two bedroom flat", value: "from £120.00" },
          { label: "Two bedroom house", value: "from £140.00" },
          { label: "Three bedroom house", value: "from £180.00" },
          { label: "Four bedroom house", value: "from £200.00" },
          { label: "Office** m²", value: "from £1.50" },
        ]}
      />

      <button class="outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-250px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9 my-20 mx-auto" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>

      <FleurDivider />

      <h2>Our antiviral sanitisation services specialists advise:</h2>
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

      <FleurDivider />

      <h2>Reviews of our antiviral sanitisation services</h2>

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

      <h2>FAQ regarding our antiviral sanitisation services</h2>

      <FaqSection />

      <FleurDivider />

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
