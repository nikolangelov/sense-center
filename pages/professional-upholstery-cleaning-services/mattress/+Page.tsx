import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import "solid-slider/slider.css";
import { Component, createSignal, Show } from 'solid-js';
import RiYoutubeFill from '~icons/ri/youtube-fill';
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { createSlider, Slider, SliderButton, SliderProvider } from 'solid-slider';
import { RotatingBanners } from '../../../components/RotatingBanners';
import { createCollapsable } from '../../../components/Collapsable';
import { Typography } from '../../../components/Typography';

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
          <Typography variant="h3">Do you fee for cancellation?</Typography>
          <Typography variant="body">We require a deposit before performing the mattress cleaning services, which will also guarantee your booked time slot. If you cancel the service on the day of the cleaning you will lose that deposit.</Typography></li>
        <li>
          <Typography variant="h3">Will I pay for the congestion / parking charge?</Typography>
          <Typography variant="body">Yes, we kindly ask that the client arrange a suitable parking space for our vehicles within close proximity of the property and to cover any parking / congestion expenses.</Typography></li>
        <li>
          <Typography variant="h3">What if I live on the 4th floor or above and I have no lift?</Typography>
          <Typography variant="body">Due to the weight of our equipment, which exceeds 50 kilograms, an additional fee will be applied for each floor that requires manual transportation. The reason is that such actions typically consume a significant amount of time and can make our technicians tire faster. Consequently, this may reduce our overall productivity for the day compared to our standard output.</Typography></li>
        <li>
          <Typography variant="h3">Are you an insured company?</Typography>
          <Typography variant="body">Yes, we are completely insured.</Typography></li>
        <li>
          <Typography variant="h3">What happens if your cleaners damage anything?</Typography>
          <Typography variant="body">We are fully insured and if an accident happens it will be covered by our professional mattress cleaning company.</Typography></li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">How long does the process of mattress cleaning services London take?</Typography>
          <Typography variant="body">The duration process mainly depends on:</Typography></li>
        <li>
          <p>How soiled the mattress is;</p>
        </li>
        <li>
          <p>The need for any stain removal treatments;</p>
        </li>
        <li>
          <p>The size and quantity of the mattresses.</p>
        </li>
        <li>
          <Typography variant="h3">How long does it take for the upholstery to get dry after upholstery deep cleaning services?</Typography>
          <Typography variant="body">It takes about 5-7 hours for the mattress to dry completely. We strongly advise that you let the mattress completely dry, especially before use, as damp mattresses are perfect breeding grounds for harmful moulds and bacteria.</Typography></li>
        <li>
          <Typography variant="h3">Do you guarantee that all stains will be removed?</Typography>
          <Typography variant="body">Due to our experience and using some of the best equipment in the industry, we achieve high success rates in stain removal. However, it's essential to note that we cannot offer an absolute guarantee due to various factors beyond our control. These factors include:</Typography></li>
        <li>
          <p>The age of the stains;</p>
        </li>
        <li>
          <p>The nature of the substances responsible for the stains;</p>
        </li>
        <li>
          <p>Any prior mishandling of the stains.</p>
          <Typography variant="body">Nonetheless, we are fully committed to exerting every possible effort to eliminate all stains from your furniture.</Typography>
        </li>
        <li>
          <Typography variant="h3">How soon can I expect your cleaner to visit me?</Typography>
          <Typography variant="body">We will make sure to get you an appointment as soon as possible. Usually, we are fully booked for the following three days, but exceptions may occur at times.</Typography></li>
        <li>
          <Typography variant="h3">Can you give me a quote over the phone or do you need a viewing in person?</Typography>
          <Typography variant="body">Yes, we can give you a mattress cleaning quote over the phone, there is usually no need for us to visit your property. You can also receive a quote online.</Typography></li>
        <li>
          <Typography variant="h3">What payment methods do you accept for your mattress cleaning services?</Typography>
          <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments directly to our team.</Typography></li>
        <li>
          <Typography variant="h3">Can your dust mite removal company provide me with an invoice?</Typography>
          <Typography variant="body">Yes, we will either send you a receipt via email or via any method of your choice.</Typography></li>
        <li>
          <Typography variant="h3">Are you qualified?</Typography>
          <Typography variant="body">Yes, we are qualified and fully trained members of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a> and of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a> (National Carpet Cleaners Association) – the UK’s acknowledged industry qualification.</Typography></li>
        <li>
          <Typography variant="h3">How long have you been in the upholstery and carpet cleaning business?</Typography>
          <Typography variant="body">Since 2012, we have been actively involved in the cleaning industry. Over the years, we have encountered various types of carpets, rugs, upholstery and stains from both commercial and residential clients, gaining valuable experience. Our commitment to providing the best carpet, sofa, mattress, dust mite cleaning services and many more, has driven us to enhance our performance through the following steps:</Typography></li>
        <li>
          <p>Continuously upgrading our equipment with superior alternatives whenever they become available to obtain;</p>
        </li>
        <li>
          <p>Consistently improving our cleaning products to ensure the highest quality of service;</p>
        </li>
        <li>
          <p>Dedication to expanding our knowledge and skills through ongoing professional training, always seeking to enhance our competence.</p>
        </li>
        <li>
          <Typography variant="h3">Can you give me a discount?</Typography>
          <Typography variant="body">Our cleaning services are known for their top quality, utilising the most effective equipment and a range of premium cleaning products. What sets us apart even further is that our prices are not only highly competitive but also rank among the most attractive in the market.</Typography>
          <Typography variant="body">Bundling all the services you need is a more cost-effective option compared to individual visits. This is because of the initial high cost and additional charges for each technician visit, taking into account factors such as travel time, parking, and the handling of heavy equipment during loading and unloading.</Typography></li>
        <li>
          <Typography variant="h3">How often should a mattress be professionally cleaned?</Typography>
          <Typography variant="body">The frequency of professional mattress cleaning can depend on several factors, including personal preferences, the type of mattress, and whether there are specific issues like allergies or stains. Generally, the bedding should be washed at least once a week to minimise the amount of oil, sweat, skin, and fluids that get into your mattress, while your pillows should be cleaned at least twice a year. When it comes to the mattress itself, aim for a <strong>minimum of twice a year or once every season</strong>.</Typography>
          <Typography variant="body">If any spills or stains have occurred on the mattress, it's advisable to address them promptly. Stains can attract bacteria and contribute to odours. Mattress cleaning services London will help with completely eliminating stains and odours and leave your mattress fresh and clean.</Typography></li>
        <li>
          <Typography variant="h3">Can you clean a mattress with a steam cleaner?</Typography>
          <Typography variant="body">Yes, you can clean a mattress with a steam cleaner, and it can be an effective method for removing stains, odours, and killing bacteria. A few general pieces of advice when steam cleaning are to first vacuum thoroughly the mattress, to let the mattress dry out completely before use, to be cautious about using too much water and to always check the mattress care instructions. Some mattresses, especially memory foam or those with certain treatments, may not be suitable for steam cleaning.</Typography>
          <Typography variant="body">If you have concerns or uncertainty about steam cleaning your mattress, it is advisable to take advantage of professional mattress cleaning services, which will best take care of your mattress.</Typography></li>
        <li>
          <Typography variant="h3">How effective is a steam cleaning mattress?</Typography>
          <Typography variant="body">Steam cleaning can be an effective method for cleaning mattresses, especially when it comes to removing stains, eliminating odours, and reducing the presence of allergens like dust mites and bacteria, thanks to the high-temperature steam. To achieve the best possible results, hire mattress cleaning and dust mite removal services that will professionally take care of your mattress.</Typography></li>
        <li>
          <Typography variant="h3">How long does it take for a steam-cleaned mattress to dry?</Typography>
          <Typography variant="body">It takes about 5-7 hours for a steam-cleaned mattress to dry completely. We strongly advise that you let the mattress completely dry, especially before use, as damp mattresses are breeding grounds for harmful moulds, bacteria and other allergens.</Typography>
        </li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">What is the best way to steam a mattress?</Typography>
          <Typography variant="body">The steam cleaning method is the most effective way to clean a mattress. Steam cleaning at home can achieve good results when done properly. Booking a professional mattress cleaning company will give the best outcome, thanks to their expert equipment and experience gained through years of taking care of upholstery items.</Typography></li>
        <li>
          <Typography variant="h3">What is the best way to clean and freshen up a mattress?</Typography>
          <Typography variant="body">Cleaning and freshening up a mattress can be done effectively with a combination of methods to remove stains, odours, and allergens. Some general guidelines on the best way to clean and freshen up a mattress are:</Typography></li>
        <li>
          <p>Book professional mattress cleaning services at least twice a year or once every season. This will ensure that your mattress is taken care of and eliminates the possibility of moulds and allergens taking place;</p>
        </li>
        <li>
          <p>Use a vacuum cleaner with an upholstery attachment to thoroughly vacuum the mattress regularly;</p>
        </li>
        <li>
          <p>Consider using a mattress protector to prevent future stains and protect against allergens or applying a stain protector layer to your mattress. Visit our stain protector dedicated page to learn more;</p>
        </li>
        <li>
          <p>If your mattress allows it, rotate it regularly to ensure even wear and tear. This can also prevent the accumulation of allergens in specific areas;</p>
        </li>
        <li>
          <p>Regularly wash bedding. Wash sheets, pillowcases, and mattress protectors weekly to maintain a clean sleeping environment;</p>
        </li>
        <li>
          <p>Use the services of a dust mite removal company if dust mites or other bed bugs have found their way to your mattress. Through their expert dust mite removal services, you can rest assured that all bugs will be exterminated, as well as future possibilities of them appearing again;</p>
        </li>
        <li>
          <p>Keep the room well-ventilated. Proper ventilation is important to prevent the growth of mould and mildew. Open windows and use fans to ensure the mattress dries thoroughly after cleaning;</p>
        </li>
        <li>
          <p>Check the care instructions provided by the mattress manufacturer to ensure what cleaning methods are most suitable for your specific mattress type.</p>
        </li>
        <li>
          <Typography variant="h3">How much does it cost to steam clean a mattress?</Typography>
          <Typography variant="body">How much the mattress cleaning service London costs depends on a number of factors. Some of them are:</Typography></li>
        <li>
          <p>The quantity and size of the mattresses;</p>
        </li>
        <li>
          <p>How soiled they are;</p>
        </li>
        <li>
          <p>If spills or stains have occurred;</p>
        </li>
        <li>
          <p>If dust mite removal services should take place.</p>
          <Typography variant="body">To learn more, take a look at our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">mattress cleaning prices</a>.</Typography></li>
        <li>
          <Typography variant="h3">How do you dry a mattress after cleaning it?</Typography>
          <Typography variant="body">Leave the mattress to dry before use in a well-ventilated room. Proper ventilation is important to prevent the growth of mould and mildew.</Typography>
          <Typography variant="body">It takes about 5-7 hours for a steam-cleaned mattress to dry. It’s best that you make sure the mattress is completely dry before use as damp mattresses are breeding grounds for harmful moulds.</Typography>
        </li>
        <li>
          <Typography variant="h3">Is it possible to deep clean a mattress?</Typography>
          <Typography variant="body">Yes, it is possible to deep clean a mattress to remove embedded dirt, dust, stains, allergens, and odours. Deep cleaning involves thorough cleaning methods that go beyond surface cleaning. An expert mattress cleaning company like “Fine Carpet Cleaning” Ltd. will use special equipment and premium cleaning products to achieve the best possible results for your mattress.</Typography></li>
        <li>
          <Typography variant="h3">Can you steam clean a mouldy mattress?</Typography>
          <Typography variant="body">Steam cleaning can be effective in treating a mouldy mattress, but it's important to approach the situation with caution and follow proper procedures. Mould is an issue that can negatively impact health, so it's crucial to address it promptly and thoroughly. Booking professional mattress cleaning services will assure you that your mattress will be properly taken care of.</Typography></li>
        <li>
          <Typography variant="h3">How do professional cleaners clean mattresses?</Typography></li>
          <li>
            <p>First we carry out a thorough inspection. According to the level of pollution and/or additional blemishes, we will determine our course of action during the mattress cleaning service London;</p>
          </li>
          <li>
            <p>Depending on how soiled your mattress is, disinfectants and eco-friendly cleaning solutions may be used to treat settled stains. Washing solutions will be sprayed on problem areas and allowed to soak for 3-5 minutes before the steam cleaning procedure;</p>
          </li>
          <li>
            <p>After applying cleaning treatments, steam cleaning is performed on your mattresses to break up stains, sweat, urine, and other residues that may have accumulated;</p>
          </li>
          <li>
            <p>If there are any remaining stains our cleaning experts will begin the dirt or stain extraction process, using special cleaning chemicals and equipment;</p>
          </li>
          <li>
            <p>It takes about 5-7 hours for a steam-cleaned mattress to dry completely. It’s best to leave the mattress to dry in a ventilated room, if possible, as damp mattresses are perfect breeding grounds for harmful moulds and bacteria.</p>
          </li>
        <li>
          <Typography variant="h3">Can I steam-clean a memory foam mattress?</Typography>
          <Typography variant="body">The main weakness of memory foam is its vulnerability to heat and water. Memory foam should not be washed in a washing machine, as this will damage the fibres and cause it to lose its structural memory. For the same reason, steam cleaning memory foam should be performed with extreme caution.</Typography>
          <Typography variant="body">The best action would be to call in a professional mattress cleaning company. Thanks to their knowledge and years of experience they will know how your mattress should be handled and what specific cleaning method should be used to achieve the best possible outcome.</Typography>
        </li>
        <li>
          <Typography variant="h3">How do you deep clean a yellow mattress?</Typography>
          <Typography variant="body">A yellowed mattress may be the result of various factors, including body oils, sweat, and other stains. Deep cleaning from an expert mattress cleaning company can help remove these stains, clean your mattress in depth and refresh it.</Typography></li>
        <li>
          <Typography variant="h3">How do you get urine smell out of a mattress?</Typography></li>
          <li>
            <p><strong>Act Quickly:</strong> The sooner you address a urine stain, the better. Try to blot up as much of the liquid as possible using paper towels or a clean, absorbent cloth.</p>
          </li>
          <li>
            <p><strong>Remove Bedding:</strong> Take off all sheets, pillowcases, and mattress protectors, and wash them separately according to the care instructions.</p>
          </li>
          <li>
            <p><strong>Blot Excess Moisture:</strong> Use paper towels or a clean cloth to blot as much of the remaining urine as possible. Press down firmly without rubbing to avoid spreading the stain.</p>
          </li>
          <li>
            <p><strong>Mattress cleaning services:</strong> Call a mattress cleaning company to handle the stain.</p>
          </li>
          <li>
            <p><strong>Mattress Protector:</strong> Consider using a waterproof mattress protector to prevent future accidents and protect against stains and odours.</p>
          </li>
        <li>
          <Typography variant="h3">How do you get old stains out of a mattress UK?</Typography>
          <Typography variant="body">Professional mattress cleaning services have access to specialised equipment and cleaning solutions to effectively remove old stains. The following is a general overview of how professionals like “Fine Carpet Cleaning” Ltd. will handle the task:</Typography></li>
        <li>
          <p>The cleaning process starts by assessing the type and severity of the stains on the mattress. Different stains may require different treatments.</p>
        </li>
        <li>
          <p>Professionals often apply a pre-treatment to the stained areas. This could be a specialised stain remover or a cleaning solution tailored to the specific type of stain.</p>
        </li>
        <li>
          <p>Mattress cleaning services use steam cleaning or hot water extraction methods. This involves using high-pressure hot water along with cleaning agents to penetrate deep into the mattress fabric, loosening and extracting dirt, stains, and contaminants.</p>
        </li>
        <li>
          <p>The cleaning equipment extracts the water, cleaning solution, and dislodged particles from the mattress. This step helps in removing both the cleaning agents and the contaminants, leaving the mattress cleaner and fresher.</p>
        </li>
        <li>
          <p>Powerful drying equipment is used to extract as much moisture as possible from the mattress. Rapid drying is essential to prevent mould and mildew growth.</p>
        </li>
        <li>
          <p>For stubborn or persistent stains, professionals may employ targeted stain removal techniques. This could involve using specific stain removers or treatments based on the nature of the stain.</p>
        </li>
        <li>
          <p>After the cleaning process, professionals may conduct a final inspection to ensure that the stains are effectively treated, and the mattress is in good condition.</p>
        </li>
      </ul>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Mattress cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our mattress cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <Typography variant="h3">Benefits:</Typography>
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

        <Typography variant="h3">Simple booking process:</Typography>
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

        <Typography variant="h3">What do we offer:</Typography>
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

        <ul>
          <li class="ml--5"><p><strong>Inspection</strong> - The first step of the cleaning process would be to carry out a thorough inspection. According to the level of pollution and/or additional blemishes, we will determine our course of action during the mattress cleaning service London.</p></li>
          <li class="ml--5"><p><strong>Applying pre-determined disinfectants and eco-friendly cleaning solutions</strong> - Depending on the condition of your mattress, we apply disinfectants and eco-friendly cleaning solutions to treat settled stains. Washing solutions will be sprayed on problem areas and allowed to soak for 3-5 minutes before the steam cleaning procedure.</p></li>
          <li class="ml--5"><p><strong>Steam cleaning</strong> - After applying cleaning treatments, steam cleaning is performed on your mattresses to break up stains, sweat, urine, and other residues that may have accumulated. Hot water is used in steam cleaning equipment to moisten the mattress and bring out accumulated dirt from within it. The steam cleaning equipment also has a built-in vacuum to suck out the dirt particles that are loosened up by the steam moisture.</p></li>
          <li class="ml--5"><p><strong>Stain treatment</strong> - If there are any remaining stains, our cleaning experts will begin the dirt or stain extraction process using special cleaning solutions and equipment. All the deeply ingrained dirt and other contaminants will be removed at this stage.</p></li>
          <li class="ml--5"><p><strong>Drying</strong> - It takes about 5-7 hours for a steam-cleaned mattress to dry completely. We strongly recommend allowing the mattress to completely dry, especially before use, as damp mattresses are breeding grounds for harmful moulds.</p></li>
        </ul>
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
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
        { src: "/assets/Професионално почистване на заведения.jpg", alt: "" },
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

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our mattress cleaning service in London</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/services" class="c-paper font-size-5">SERVICES</a></button>
        <button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>
      </div>



    </>
  );
}
