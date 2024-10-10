import "solid-slider/slider.css";
import {FacebookLikeGallery} from '../../../components/FacebookLikeGallery';
import {createCollapsable} from '../../../components/Collapsable';
import {Typography} from '../../../components/Typography';
import {ReviewSlider, StarReview} from '../../../components/ReviewSlider';
import {FOTSlider, FOTSliderContainer} from '../../../components/FrequentlyOrderedTogether';
import {PriceTable} from '../../../components/PriceTable';

const VideoPlayer = () => {
  return (
    <div class="flex flex-justify-center flex-items-center mt-20">
      <iframe
				class="mt-10 b-rd-3 h-200px md-h-500px"
				style="width: 100%;"
        src="https://www.youtube.com/embed/GGCjkr6sWkE?autoplay=1&mute=1"
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
        <Typography variant="h3">1. Do you fee for cancellation?</Typography>
        <Typography variant="body">We require a deposit before performing the mattress cleaning services, which will also guarantee your booked time slot. If you cancel the service on the day of the cleaning you will lose that deposit.</Typography></li>
      <li>
        <Typography variant="h3">2. Will I pay for the congestion / parking charge?</Typography>
        <Typography variant="body">Yes, we kindly ask that the client arrange a suitable parking space for our vehicles within close proximity of the property and to cover any parking / congestion expenses.</Typography></li>
      <li>
        <Typography variant="h3">3. What if I live on the 4th floor or above and I have no lift?</Typography>
        <Typography variant="body">Due to the weight of our equipment, which exceeds 50 kilograms, an additional fee will be applied for each floor that requires manual transportation. The reason is that such actions typically consume a significant amount of time and can make our technicians tire faster. Consequently, this may reduce our overall productivity for the day compared to our standard output.</Typography></li>
      <li>
        <Typography variant="h3">4. Are you an insured company?</Typography>
        <Typography variant="body">Yes, we are completely insured.</Typography></li>
      <li>
        <Typography variant="h3">5. What happens if your cleaners damage anything?</Typography>
        <Typography variant="body">We are fully insured and if an accident happens it will be covered by our professional mattress cleaning company.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. How long does the process of mattress cleaning services London take?</Typography>
        <Typography variant="body">The duration process mainly depends on:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>How soiled the mattress is;</p>
        </Typography>
        <Typography variant="li">
          <p>The need for any stain removal treatments;</p>
        </Typography>
        <Typography variant="li">
          <p>The size and quantity of the mattresses.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">7. How long does it take for the upholstery to get dry after upholstery deep cleaning services?</Typography>
        <Typography variant="body">It takes about 5-7 hours for the mattress to dry completely. We strongly advise that you let the mattress completely dry, especially before use, as damp mattresses are perfect breeding grounds for harmful moulds and bacteria.</Typography></li>
      <li>
        <Typography variant="h3">8. Do you guarantee that all stains will be removed?</Typography>
        <Typography variant="body">Due to our experience and using some of the best equipment in the industry, we achieve high success rates in stain removal. However, it's essential to note that we cannot offer an absolute guarantee due to various factors beyond our control. These factors include:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The age of the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>The nature of the substances responsible for the stains;</p>
        </Typography>
        <Typography variant="li">
          <p>Any prior mishandling of the stains.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">Nonetheless, we are fully committed to exerting every possible effort to eliminate all stains from your furniture.</Typography>
      </li>
      <li>
        <Typography variant="h3">9. How soon can I expect your cleaner to visit me?</Typography>
        <Typography variant="body">We will make sure to get you an appointment as soon as possible. Usually, we are fully booked for the following three days, but exceptions may occur at times.</Typography></li>
      <li>
        <Typography variant="h3">10. Can you give me a quote over the phone or do you need a viewing in person?</Typography>
        <Typography variant="body">Yes, we can give you a mattress cleaning quote over the phone, there is usually no need for us to visit your property. You can also receive a quote online.</Typography></li>
      <li>
        <Typography variant="h3">11. What payment methods do you accept for your mattress cleaning services?</Typography>
        <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments directly to our team.</Typography></li>
      <li>
        <Typography variant="h3">12. Can your dust mite removal company provide me with an invoice?</Typography>
        <Typography variant="body">Yes, we will either send you a receipt via email or via any method of your choice.</Typography></li>
      <li>
        <Typography variant="h3">13. Are you qualified?</Typography>
        <Typography variant="body">Yes, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a> and of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s acknowledged industry qualification.</Typography></li>
      <li>
        <Typography variant="h3">14. How long have you been in the upholstery and carpet cleaning business?</Typography>
        <Typography variant="body">Since 2012, we have been actively involved in the cleaning industry. Over the years, we have encountered various types of carpets, rugs, upholstery and stains from both commercial and residential clients, gaining valuable experience. Our commitment to providing the best carpet, sofa, mattress, dust mite cleaning services and many more, has driven us to enhance our performance through the following steps:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Continuously upgrading our equipment with superior alternatives whenever they become available to obtain;</p>
        </Typography>
        <Typography variant="li">
          <p>Consistently improving our cleaning products to ensure the highest quality of service;</p>
        </Typography>
        <Typography variant="li">
          <p>Dedication to expanding our knowledge and skills through ongoing professional training, always seeking to enhance our competence.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">15. Can you give me a discount?</Typography>
        <Typography variant="body">Our cleaning services are known for their top quality, utilising the most effective equipment and a range of premium cleaning products. What sets us apart even further is that our prices are not only highly competitive but also rank among the most attractive in the market.</Typography>
        <Typography variant="body">Bundling all the services you need is a more cost-effective option compared to individual visits. This is because of the initial high cost and additional charges for each technician visit, taking into account factors such as travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography></li>
      <li>
        <Typography variant="h3">16. How often should a mattress be professionally cleaned?</Typography>
        <Typography variant="body">The frequency of professional mattress cleaning can depend on several factors, including personal preferences, the type of mattress, and whether there are specific issues like allergies or stains. Generally, the bedding should be washed at least once a week to minimise the amount of oil, sweat, skin, and fluids that get into your mattress, while your pillows should be cleaned at least twice a year. When it comes to the mattress itself, aim for a <strong>minimum of twice a year or once every season</strong>.</Typography>
        <Typography variant="body">If any spills or stains have occurred on the mattress, it's advisable to address them promptly. Stains can attract bacteria and contribute to odours. Mattress cleaning services London will help with completely eliminating stains and odours and leave your mattress fresh and clean.</Typography></li>
      <li>
        <Typography variant="h3">17. Can you clean a mattress with a steam cleaner?</Typography>
        <Typography variant="body">Yes, you can clean a mattress with a steam cleaner, and it can be an effective method for removing stains, odours, and killing bacteria. A few general pieces of advice when steam cleaning are to first vacuum thoroughly the mattress, to let the mattress dry out completely before use, to be cautious about using too much water and to always check the mattress care instructions. Some mattresses, especially memory foam or those with certain treatments, may not be suitable for steam cleaning.</Typography>
        <Typography variant="body">If you have concerns or uncertainty about steam cleaning your mattress, it is advisable to take advantage of professional mattress cleaning services, which will best take care of your mattress.</Typography></li>
      <li>
        <Typography variant="h3">18. How effective is a steam cleaning mattress?</Typography>
        <Typography variant="body">Steam cleaning can be an effective method for cleaning mattresses, especially when it comes to removing stains, eliminating odours, and reducing the presence of allergens like dust mites and bacteria, thanks to the high-temperature steam. To achieve the best possible results, hire mattress cleaning and dust mite removal services that will professionally take care of your mattress.</Typography></li>
      <li>
        <Typography variant="h3">19. How long does it take for a steam-cleaned mattress to dry?</Typography>
        <Typography variant="body">It takes about 5-7 hours for a steam-cleaned mattress to dry completely. We strongly advise that you let the mattress completely dry, especially before use, as damp mattresses are breeding grounds for harmful moulds, bacteria and other allergens.</Typography>
      </li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">20. What is the best way to steam a mattress?</Typography>
        <Typography variant="body">The steam cleaning method is the most effective way to clean a mattress. Steam cleaning at home can achieve good results when done properly. Booking a professional mattress cleaning company will give the best outcome, thanks to their expert equipment and experience gained through years of taking care of upholstery items.</Typography></li>
      <li>
        <Typography variant="h3">21. What is the best way to clean and freshen up a mattress?</Typography>
        <Typography variant="body">Cleaning and freshening up a mattress can be done effectively with a combination of methods to remove stains, odours, and allergens. Some general guidelines on the best way to clean and freshen up a mattress are:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>Book professional mattress cleaning services at least twice a year or once every season. This will ensure that your mattress is taken care of and eliminates the possibility of moulds and allergens taking place;</p>
        </Typography>
        <Typography variant="li">
          <p>Use a vacuum cleaner with an upholstery attachment to thoroughly vacuum the mattress regularly;</p>
        </Typography>
        <Typography variant="li">
          <p>Consider using a mattress protector to prevent future stains and protect against allergens or applying a stain protector layer to your mattress. Visit our stain protector dedicated page to learn more;</p>
        </Typography>
        <Typography variant="li">
          <p>If your mattress allows it, rotate it regularly to ensure even wear and tear. This can also prevent the accumulation of allergens in specific areas;</p>
        </Typography>
        <Typography variant="li">
          <p>Regularly wash bedding. Wash sheets, pillowcases, and mattress protectors weekly to maintain a clean sleeping environment;</p>
        </Typography>
        <Typography variant="li">
          <p>Use the services of a dust mite removal company if dust mites or other bed bugs have found their way to your mattress. Through their expert dust mite removal services, you can rest assured that all bugs will be exterminated, as well as future possibilities of them appearing again;</p>
        </Typography>
        <Typography variant="li">
          <p>Keep the room well-ventilated. Proper ventilation is important to prevent the growth of mould and mildew. Open windows and use fans to ensure the mattress dries thoroughly after cleaning;</p>
        </Typography>
        <Typography variant="li">
          <p>Check the care instructions provided by the mattress manufacturer to ensure what cleaning methods are most suitable for your specific mattress type.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">22. How much does it cost to steam clean a mattress?</Typography>
        <Typography variant="body">How much the mattress cleaning service London costs depends on a number of factors. Some of them are:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The quantity and size of the mattresses;</p>
        </Typography>
        <Typography variant="li">
          <p>How soiled they are;</p>
        </Typography>
        <Typography variant="li">
          <p>If spills or stains have occurred;</p>
        </Typography>
        <Typography variant="li">
          <p>If dust mite removal services should take place.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">To learn more, take a look at our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">mattress cleaning prices</a>.</Typography></li>
      <li>
        <Typography variant="h3">23. How do you dry a mattress after cleaning it?</Typography>
        <Typography variant="body">Leave the mattress to dry before use in a well-ventilated room. Proper ventilation is important to prevent the growth of mould and mildew.</Typography>
        <Typography variant="body">It takes about 5-7 hours for a steam-cleaned mattress to dry. It’s best that you make sure the mattress is completely dry before use as damp mattresses are breeding grounds for harmful moulds.</Typography>
      </li>
      <li>
        <Typography variant="h3">24. Is it possible to deep clean a mattress?</Typography>
        <Typography variant="body">Yes, it is possible to deep clean a mattress to remove embedded dirt, dust, stains, allergens, and odours. Deep cleaning involves thorough cleaning methods that go beyond surface cleaning. An expert mattress cleaning company like “Fine Carpet Cleaning” Ltd. will use special equipment and premium cleaning products to achieve the best possible results for your mattress.</Typography></li>
      <li>
        <Typography variant="h3">25. Can you steam clean a mouldy mattress?</Typography>
        <Typography variant="body">Steam cleaning can be effective in treating a mouldy mattress, but it's important to approach the situation with caution and follow proper procedures. Mould is an issue that can negatively impact health, so it's crucial to address it promptly and thoroughly. Booking professional mattress cleaning services will assure you that your mattress will be properly taken care of.</Typography></li>
      <li>
        <Typography variant="h3">26. How do professional cleaners clean mattresses?</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>First we carry out a thorough inspection. According to the level of pollution and/or additional blemishes, we will determine our course of action during the mattress cleaning service London;</p>
        </Typography>
        <Typography variant="li">
          <p>Depending on how soiled your mattress is, disinfectants and eco-friendly cleaning solutions may be used to treat settled stains. Washing solutions will be sprayed on problem areas and allowed to soak for 3-5 minutes before the steam cleaning procedure;</p>
        </Typography>
        <Typography variant="li">
          <p>After applying cleaning treatments, steam cleaning is performed on your mattresses to break up stains, sweat, urine, and other residues that may have accumulated;</p>
        </Typography>
        <Typography variant="li">
          <p>If there are any remaining stains our cleaning experts will begin the dirt or stain extraction process, using special cleaning chemicals and equipment;</p>
        </Typography>
        <Typography variant="li">
          <p>It takes about 5-7 hours for a steam-cleaned mattress to dry completely. It’s best to leave the mattress to dry in a ventilated room, if possible, as damp mattresses are perfect breeding grounds for harmful moulds and bacteria.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">27. Can I steam-clean a memory foam mattress?</Typography>
        <Typography variant="body">The main weakness of memory foam is its vulnerability to heat and water. Memory foam should not be washed in a washing machine, as this will damage the fibres and cause it to lose its structural memory. For the same reason, steam cleaning memory foam should be performed with extreme caution.</Typography>
        <Typography variant="body">The best action would be to call in a professional mattress cleaning company. Thanks to their knowledge and years of experience they will know how your mattress should be handled and what specific cleaning method should be used to achieve the best possible outcome.</Typography>
      </li>
      <li>
        <Typography variant="h3">28. How do you deep clean a yellow mattress?</Typography>
        <Typography variant="body">A yellowed mattress may be the result of various factors, including body oils, sweat, and other stains. Deep cleaning from an expert mattress cleaning company can help remove these stains, clean your mattress in depth and refresh it.</Typography></li>
      <li>
        <Typography variant="h3">29. How do you get urine smell out of a mattress?</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p><strong>Act Quickly:</strong> The sooner you address a urine stain, the better. Try to blot up as much of the liquid as possible using paper towels or a clean, absorbent cloth.</p>
        </Typography>
        <Typography variant="li">
          <p><strong>Remove Bedding:</strong> Take off all sheets, pillowcases, and mattress protectors, and wash them separately according to the care instructions.</p>
        </Typography>
        <Typography variant="li">
          <p><strong>Blot Excess Moisture:</strong> Use paper towels or a clean cloth to blot as much of the remaining urine as possible. Press down firmly without rubbing to avoid spreading the stain.</p>
        </Typography>
        <Typography variant="li">
          <p><strong>Mattress cleaning services:</strong> Call a mattress cleaning company to handle the stain.</p>
        </Typography>
        <Typography variant="li">
          <p><strong>Mattress Protector:</strong> Consider using a waterproof mattress protector to prevent future accidents and protect against stains and odours.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">30. How do you get old stains out of a mattress UK?</Typography>
        <Typography variant="body">Professional mattress cleaning services have access to specialised equipment and cleaning solutions to effectively remove old stains. The following is a general overview of how professionals like “Fine Carpet Cleaning” Ltd. will handle the task:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The cleaning process starts by assessing the type and severity of the stains on the mattress. Different stains may require different treatments.</p>
        </Typography>
        <Typography variant="li">
          <p>Professionals often apply a pre-treatment to the stained areas. This could be a specialised stain remover or a cleaning solution tailored to the specific type of stain.</p>
        </Typography>
        <Typography variant="li">
          <p>Mattress cleaning services use steam cleaning or hot water extraction methods. This involves using high-pressure hot water along with cleaning agents to penetrate deep into the mattress fabric, loosening and extracting dirt, stains, and contaminants.</p>
        </Typography>
        <Typography variant="li">
          <p>The cleaning equipment extracts the water, cleaning solution, and dislodged particles from the mattress. This step helps in removing both the cleaning agents and the contaminants, leaving the mattress cleaner and fresher.</p>
        </Typography>
        <Typography variant="li">
          <p>Powerful drying equipment is used to extract as much moisture as possible from the mattress. Rapid drying is essential to prevent mould and mildew growth.</p>
        </Typography>
        <Typography variant="li">
          <p>For stubborn or persistent stains, professionals may employ targeted stain removal techniques. This could involve using specific stain removers or treatments based on the nature of the stain.</p>
        </Typography>
        <Typography variant="li">
          <p>After the cleaning process, professionals may conduct a final inspection to ensure that the stains are effectively treated, and the mattress is in good condition.</p>
        </Typography>
      </ul>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Mattress cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/mattress-cleaning/mattress-cleaning-services.jpg" alt="mattress-cleaning-services" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our mattress cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform mattress cleaning services. Apart from refreshing and leaving your bed feeling brand-new, mattress cleaning services have great health benefits. Studies reveal that a typical used mattress may have 100,000 to 10 million mites inside. Additionally, the human body loses about half a pint of fluid every night, most of which is absorbed into the fibres of the mattress. Mattress cleaning services and dust mite cleaning services will help exterminate any unwanted guests and fluids, leaving your environment significantly cleaner and healthier. A lot more advantages are gained through such services, such as:</p>
        <ul>
          <li class="ml--5">
            <p>Removing any stains, spots, and dirt from the surface of the mattress;</p>
          </li>
          <li class="ml--5">
            <p>Extending the life of your mattress;</p>
          </li>
          <li class="ml--5">
            <p>Eliminating odours made from spills, pets, or smoking will leave your mattress fresh;</p>
          </li>
          <li class="ml--5">
            <p>Professional mattress cleaning experts have the tools and expertise to get the job done efficiently and effectively;</p>
          </li>
          <li class="ml--5">
            <p>Mattress cleaning service London is confirmed to be absolutely harmless for the surfaces, especially when carried out by our trained and certified experts;</p>
          </li>
          <li class="ml--5">
            <p>Killing all dust mites that cause problems for people with breathing problems and asthma;</p>
          </li>
          <li class="ml--5">
            <p>Killing bed bugs and their eggs, which is not possible with an insecticide treatment as the eggs of the bed bugs are resistant to it due to the chemical structure of their shells;</p>
          </li>
          <li class="ml--5">
            <p>Killing the eggs of moths and preventing a moth infestation from spreading quickly in your home and damaging the fabrics;</p>
          </li>
          <li class="ml--5">
            <p>Killing bacteria in the mattress;</p>
          </li>
          <li class="ml--5">
            <p>Refreshing and deodorising.</p>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our mattress carpet cleaning services:</p>

        <ul>
          <li class="ml--5">
            <p>You reach out to us.</p>
          </li>
          <li class="ml--5">
            <p>You receive tailored service suggestions based on your needs.</p>
          </li>
          <li class="ml--5">
            <p>We give you a price estimate.</p>
          </li>
          <li class="ml--5">
            <p>If our terms align with your wishes, we schedule a convenient appointment for you.</p>
          </li>
          <li class="ml--5">
            <p>Our professional mattress cleaning experts will then conduct the mattress cleaning services at your property.</p>
          </li>
        </ul>

        <h3>What do we offer:</h3>
        <p>Other cleaning services you might be interested in are:</p>

        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-stain-removal-services">Upholstery stain removal</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/stain-protection-services">Upholstery stain protector</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/sofa">Sofa cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/sofa/leather">Leather sofa cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/furniture">Furniture cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-upholstery-cleaning-services/pillow">Pillow cleaning</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2>The process of our mattress cleaning services:</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <p>Effectively disinfecting beds requires a multi-layered cleaning approach to completely remove odours, stains, allergens, and bed bugs from your mattresses. Here is a complete run-down of all the steps performed for cleaning mattresses professionally.</p>

        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5"><Typography variant="body"><strong>Inspection</strong> - The first step of the cleaning process would be to carry out a thorough inspection. According to the level of pollution and/or additional blemishes, we will determine our course of action during the mattress cleaning service London.</Typography></li>
          <li class="ml--5"><Typography variant="body"><strong>Applying pre-determined disinfectants and eco-friendly cleaning solutions</strong> - Depending on the condition of your mattress, we apply disinfectants and eco-friendly cleaning solutions to treat settled stains. Washing solutions will be sprayed on problem areas and allowed to soak for 3-5 minutes before the steam cleaning procedure.</Typography></li>
          <li class="ml--5"><Typography variant="body"><strong>Steam cleaning</strong> - After applying cleaning treatments, steam cleaning is performed on your mattresses to break up stains, sweat, urine, and other residues that may have accumulated. Hot water is used in steam cleaning equipment to moisten the mattress and bring out accumulated dirt from within it. The steam cleaning equipment also has a built-in vacuum to suck out the dirt particles that are loosened up by the steam moisture.</Typography></li>
          <li class="ml--5"><Typography variant="body"><strong>Stain treatment</strong> - If there are any remaining stains, our cleaning experts will begin the dirt or stain extraction process using special cleaning solutions and equipment. All the deeply ingrained dirt and other contaminants will be removed at this stage.</Typography></li>
          <li class="ml--5"><Typography variant="body"><strong>Drying</strong> - It takes about 5-7 hours for a steam-cleaned mattress to dry completely. We strongly recommend allowing the mattress to completely dry, especially before use, as damp mattresses are breeding grounds for harmful moulds.</Typography></li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our mattress cleaning services</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <p>At "Fine Carpet Cleaning" Ltd., we use a range of top-tier cleaning equipment and products to ensure the highest quality commercial carpet cleaning:</p>
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Top-tier technology</h3>
            <Typography variant="body">At "Fine Carpet Cleaning Ltd," we are committed to using cutting-edge cleaning equipment and premium products. Our machines, known for their exceptional power and effectiveness, are considered among the best portable machines globally. After going through extensive testing, we have chosen to work with equipment from top brands available in the UK market, including "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>" and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>". Furthermore, our in-house engineer makes additional enhancements to the cleaning machines to maximise their performance.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
            <Typography variant="body">Designed for high-performance expert carpet cleaning, our high-filtration twin motor vacuum cleaner is widely regarded as the best on the market. One motor pounds at the carpet while the other effectively removes loose dirt, dry soil, and dust.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Selectively chosen cleaning agents</h3>
            <Typography variant="body">Our huge selection of cleaning products has also been carefully selected after in-depth testing of almost all cleaning products available on the market. This extensive variety enables our technicians to choose the most appropriate detergents based on factors such as:</Typography>
          </li>
        </ol>
        <ul>
          <li class="ml--5">
            <p>The fabric of the mattress;</p>
          </li>
          <li class="ml--5">
            <p>The level of soiling;</p>
          </li>
          <li class="ml--5">
            <p>The type of stains needing treatment.</p>
          </li>
        </ul>
        <p>With our high-quality cleaning equipment and products, we guarantee professional mattress cleaning services of the utmost quality.</p>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our mattress cleaning services</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/service-pics/mattress-cleaning/1-mattress-cleaning-service-london-3.jpg", alt: "1-mattress-cleaning-service-london-3" },
        { src: "/assets/service-pics/mattress-cleaning/3-dust-mite-removal-services.jpg", alt: "3-dust-mite-removal-services" },
        { src: "/assets/service-pics/mattress-cleaning/4-dust-mite-removal-services-1.jpg", alt: "4-dust-mite-removal-services-1" },
        { src: "/assets/service-pics/mattress-cleaning/2-mattress-cleaning-service-london-4.jpg", alt: "2-mattress-cleaning-service-london-4" },
        { src: "/assets/service-pics/mattress-cleaning/5-professional-mattress-cleaning.jpg", alt: "5-professional-mattress-cleaning" },
        { src: "/assets/service-pics/mattress-cleaning/6-dust-mite-cleaning-services.jpg", alt: "6-dust-mite-cleaning-services" },
        { src: "/assets/service-pics/mattress-cleaning/7-dust-mite-removal-company.jpg", alt: "7-dust-mite-removal-company" },
        { src: "/assets/service-pics/mattress-cleaning/8-mattress-cleaning-service-london-2.jpg", alt: "8-mattress-cleaning-service-london-2" },
        { src: "/assets/service-pics/mattress-cleaning/9-mattress-cleaning-services-1.jpg", alt: "9-mattress-cleaning-services-1" },
        { src: "/assets/service-pics/mattress-cleaning/10-professional-mattress-cleaning-1.jpg", alt: "10-professional-mattress-cleaning-1" },
        { src: "/assets/service-pics/mattress-cleaning/11-professional-mattress-cleaning-2.jpg", alt: "11-professional-mattress-cleaning-2" },
      ]} />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Videos from our mattress cleaning services</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Our mattress cleaning services prices</h2>

      <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
        style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
        <br></br>
        Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
        charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
        delays for the technicians and messes up the schedule.
        <br></br>
        <strong id="price_table">Deising - Free of charge - just notify us when booking.</strong></div>

      <PriceTable title="Mattress type">
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Mattress single</td>
          <td class="bg-paper pl-5 py-2 font-500">from £26.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Mattress double</td>
          <td class="bg-paper pl-5 py-2 font-500">from £38.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Mattress king size</td>
          <td class="bg-paper pl-5 py-2 font-500">from £47.00</td>
        </tr>
        <tr>
          <td class="bg-paper pl-5 py-2 font-500">Mattress super king size</td>
          <td class="bg-paper pl-5 py-2 font-500">from £57.00</td>
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
          img="/assets/service-pics/furniture-cleaning/steam-cleaning-furniture-services.jpg"
          alt="steam-cleaning-furniture-services"
          title="Professional furniture cleaning services"
          href="/professional-upholstery-cleaning-services/furniture"
          description="Furniture upholstery cleaning services can extend the life of your furniture, saving you money on purchasing new items."
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
          alt="pillow-cleaning-service.jpg"
          title="Pillow cleaning services"
          href="/professional-upholstery-cleaning-services/pillow"
          description="Instead of tossing old pillows, consider our cost-effective professional cleaning. We fluff, sanitize, and deodorize, giving your pillows new life."
        />
      </FOTSlider>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Our mattress cleaning services specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Utilise a stain guard</h3>
            <Typography variant="body">Our professional mattress cleaning specialist recommends considering the addition of a stain protector to your mattress, carpets and other upholstery whenever possible. This simple step can result in substantial cost savings on stain removal services. If you have any questions, we encourage you to explore the advantages of <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">our stain protection services</a>.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Seek assistance from a professional cleaning service</h3>
            <Typography variant="body">According to our specialist, it's highly recommended to book the <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-stain-removal-services">services of a professional stain removal company</a> if your upholstery or carpet has been stained rather than trying to clean it yourself. A specialised company has the right equipment and expertise that will take care of your belongings and will tailor their cleaning method according to the nature of the stain. Attempting to clean the stain or allowing it to dry can lead to fabric damage. In fact, such stain removal attempts may seal the stain, making it even more challenging, if not impossible, for a professional mattress cleaning company to remove it. Therefore, scheduling a stain removal service can potentially save your valuable carpet or upholstery, which could be worth a significant amount.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Explore our list of services</h3>
            <Typography variant="body">We offer a <a class="color-paper-link hover-color-paper-link-hover:hover" href="/services">range of services</a>, including carpet cleaning, rug cleaning, stain protection and more. Our team takes pride in providing comprehensive solutions, so don't miss the opportunity to explore the full extent of our expertise and make informed decisions about your cleaning needs.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Save time and money</h3>
            <Typography variant="body">Our experts recommend combining services. A single appointment is more cost-effective than having different cleaning services done individually. This is because separate visits by technicians involve additional expenses like travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy the benefits of being in good health</h3>
            <Typography variant="body">If you own carpets, rugs or upholstery, it's essential to be aware of the health benefits of keeping them clean. They can accumulate substantial amounts of dust, microorganisms, and dirt particles that might lead to health issues. Neglecting their care can increase the risk of various reactions, skin problems, and allergies. To prevent these issues, our specialist recommends using professional cleaning services at least once a year. If you own pets, have children or if your upholstery and carpets are easily stained we advise booking such services even more frequently.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews for our mattress cleaning services</h2>

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

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our mattress cleaning service in London</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
