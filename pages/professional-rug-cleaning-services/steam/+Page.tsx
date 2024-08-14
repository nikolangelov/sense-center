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
          <Typography variant="h3">Do you have a cancellation fee for the Chinese rug cleaning near me?</Typography>
          <Typography variant="body">Yes, we do have a cancellation fee, but it is only applied if you cancel on the day of the deep rug cleaning. In that case, you will lose the deposit you made.</Typography></li>
        <li>
          <Typography variant="h3">Do I need to pay for the congestion / parking charge?</Typography>
          <Typography variant="body">Yes, the client will be asked to provide appropriate parking arrangements for our vehicles close to the property and to pay for any associated parking or transportation costs.</Typography></li>
        <li>
          <Typography variant="h3">Do I need to move my furniture before the deep rug cleaning?</Typography>
          <Typography variant="body">For insurance concerns, we would really appreciate your help in relocating small, fragile, or expensive furniture pieces like lamps and ornaments. Before we arrive, if at all achievable, please place them in a secure location that won't be damaged during cleaning. During the cleaning, we would be more than happy to assist with moving any additional lightweight furniture, such as chairs, couches, and tables. Once the cleaning is completed, we will return them to their previous locations. There will be a further charge if large items such as couches, beds, closets, and cabinets need to be moved. This is due to the fact that it requires more time and effort from our technician, who will be paid appropriately. Our main goal is to reduce as much stress from the procedure for you as we can.</Typography></li>
        <li>
          <Typography variant="h3">What if I live on the 4th floor or above and I have no lift?</Typography>
          <Typography variant="body">Because our equipment weighs over 50 kg, we charge additionally for each additional floor that needs to be carried by hand. The reason is that we couldn't complete as much work that day as we typically can because this usually takes a long time and our technicians become tired easily.</Typography></li>
        <li>
          <Typography variant="h3">Are you insured?</Typography>
          <Typography variant="body">Yes, we are fully insured.</Typography></li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">What happens if your cleaner damages anything while performing the rug steam cleaning service?</Typography>
          <Typography variant="body">Since we have complete insurance, we will be compensated for any accidents that occur.</Typography></li>
        <li>
          <Typography variant="h3">How long does the process of deep rug cleaning take?</Typography>
          <Typography variant="body">The duration of the deep rug cleaning process depends mainly on:</Typography></li>
        <li>
          <p>How soiled the rug is;</p>
        </li>
        <li>
          <p>The size and quantity of the rugs;</p>
        </li>
        <li>
          
          <p>If the rug needs any stain removal treatments.</p>
          <Typography variant="body">If you want to receive more detailed information, please feel free to contact us at any suitable time for you and we will estimate the duration of the cleaning process for your specific situation.</Typography>
        </li>
        <li>
          <Typography variant="h3">How long does it take a rug to dry after steam cleaning?</Typography>
          <Typography variant="body">It depends on the rug and the cleaning method used, but the approximate time for the carpet to get dry after steam cleaning is 7 to 9 hours.</Typography></li>
        <li>
          <Typography variant="h3">Do you guarantee that after the Chinese rug cleaning near me, all stains will be removed?</Typography>
          <Typography variant="body">Unfortunately, there are a number of external factors that prevent us from offering a complete guarantee. Among these are:</Typography></li>
        <li>
          <p>The age of the stains;</p>
        </li>
        <li>
          <p>The material causing the stains;</p>
        </li>
        <li>
          <p>The rug's type and material;</p>
        </li>
        <li>
          <p>If the stains were previously handled incorrectly.</p>
          <Typography variant="body">However, we guarantee to use every resource at our disposal to get rid of any stains on your rug. Our strategy entails:</Typography>
        </li>

        <li>
          <p>Using cutting-edge cleaning equipment;</p>
        </li>
        <li>
          <p>Using carefully selected, high-quality detergents;</p>
        </li>
        <li>
          <p>Adjusting our strategy based on the particular type of rug.</p>
        </li>
        <li>
          <Typography variant="h3">How soon can I expect a technician to clean my rug?</Typography>
          <Typography variant="body">We'll work to schedule you an appointment as quickly as we can. Though there are occasionally exceptions, we are often fully booked three days in advance.</Typography></li>
        <li>
          <Typography variant="h3">Can you give me a quote for the steam clean rug cost over the phone or do you need to visit my property?</Typography>
          <Typography variant="body">It is not necessary for us to visit your property in order to provide you with an estimate over the phone. On the other hand, commercial property may need a site visit. Online quotes for the steam clean rug cost are also available.</Typography></li>
        <li>
          <Typography variant="h3">What payment methods do you accept for deep rug cleaning?</Typography>
          <Typography variant="body">We accept debit / credit cards, bank transfers and cash payments handed directly to our team.</Typography></li>
        <li>
          <Typography variant="h3">Can you provide me with an invoice for the steam clean rug cost?</Typography>
          <Typography variant="body">Yes, we will send you a receipt via email.</Typography></li>
        <li>
          <Typography variant="h3">Are you qualified for rug steam cleaning services?</Typography>
          <Typography variant="body">Yes, we are fully qualified members of the National Carpet Cleaners Association (<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank" rel="noopener">NCCA</a>), the industry association recognised in the UK, and of <a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.checkatrade.com/trades/FineCarpetCleaning" target="_blank" rel="noopener">Checkatrade</a>.</Typography></li>
        <li>
          <Typography variant="h3">How long have you been in the rug cleaning business?</Typography>
          <Typography variant="body">Since 2012, we have been in the rug care industry. We have accumulated a great deal of knowledge over the years dealing with all kinds of carpets, rugs, upholstery, and stains from both commercial and residential clients. With the help of this knowledge and our commitment to flawless execution, we improve our services by:</Typography></li>
        <li>
          <p>Consistently replacing our machinery and equipment with better models when available;</p>
        </li>
        <li>
          <p>Testing and improving our cleaning supplies on a regular basis;</p>
        </li>
        <li>
          <p>Always looking for ways to become more knowledgeable and skilled through further professional training and courses.</p>
        </li>
        <li>
          <Typography variant="h3">Can you give me a discount for the Chinese rug cleaning near me?</Typography>
          <Typography variant="body">Our deep rug cleaning prices are not only extremely affordable but also among the most attractive on the market, not only being highly competitive but also reflecting our commitment to high-quality cleaning services. We use top-of-the-line equipment and over 20 premium cleaning products. To get the best deal, we recommend bundling all the services you need. This cost efficiency arises from reducing the initial expenses and additional fees associated with each technician visit, such as travel time, parking, and managing heavy equipment during loading and unloading.</Typography></li>
      </ul>
    </Entry>
    <Entry>
      <ul>
        <li>
          <Typography variant="h3">Will steam cleaning leave the rug wet?</Typography>
          <Typography variant="body">The rug stays somewhat moist after steam cleaning, even though 95% of the water used is absorbed. Steam-cleaned rugs typically take 7-9 hours to dry completely when left to air dry.</Typography></li>
        <li>
          <Typography variant="h3">How often should you steam clean your rugs?</Typography>
          <Typography variant="body">The main factor that determines the frequency of deep rug cleaning is the rug's rate of soiling. A rug should typically be cleaned every 12 months. However, we advise hiring a professional rug steam cleaning service more frequently if you have kids, pets, a smoking habit, heavy traffic on the rug, or if you stain it frequently. Feel free to get in touch with us at any moment if you need help or professional rug steam cleaning services.</Typography></li>
        <li>
          <Typography variant="h3">Can you steam clean a rug?</Typography>
          <Typography variant="body">Yes, rugs can be steam-cleaned. Steam cleaning is the most thorough, effective method for removing dirt and soil from the base of the rug. It is an effective approach provided by reputable businesses such as "Fine Carpet Cleaning” Ltd. Their methods, tools, supplies, and experience guarantee outstanding outcomes. This procedure guarantees the elimination of stubborn stains, odours, and germ accumulation that standard cleaning procedures are unable to remove.</Typography></li>
        <li>
          <Typography variant="h3">How much does it cost to steam clean a rug?</Typography>
          <Typography variant="body">How much the steam clean rug cost depends on a number of factors. Some of them are:</Typography></li>
        <li>
          <p>The quantity and size of the rugs;</p>
        </li>
        <li>
          <p>How soiled they are;</p>
        </li>
        <li>
          <p>The type of the rugs;</p>
        </li>
        <li>
          <p>How easy the access to the rug is.</p>
          <Typography variant="body">To learn more, check out our <a class="color-paper-link hover-color-paper-link-hover:hover" href="#price_table">rug steam cleaning prices</a>.</Typography>
        </li>
        <li>
          <Typography variant="h3">Does steaming a rug flatten it?</Typography>
          <Typography variant="body">Steam cleaning will not flatten your rug if done correctly. It is even the most effective and recommended way to clean your rug. Steam cleaning your rug regularly will revitalise the rug pile, as well as remove dirt and prolong the life of your rug.</Typography></li>
        <li>
          <Typography variant="h3">How do professionals clean Oriental rugs?</Typography>
          <Typography variant="body">Our Oriental rug cleaning in London is performed through the following steps: we perform a pre-cleaning survey to determine which cleaning method and products the oriental rug needs based on its condition. We then use special steam cleaning machines and apply the cleaning solution. Hot water is injected into the fibres, after which everything is extracted, leaving your rug looking fresh and almost brand-new. Our services also include Persian rug cleaning in London, shag rug cleaning, Asian rug cleaning, polypropylene rug cleaning, acrylic rug cleaning, flat weave rug cleaning, Turkish rug cleaning, Moroccan rug cleaning in London, polyester shaggy rug cleaning, Kilim rug cleaning in London, bathtub rug cleaning, high pile rug cleaning and more.</Typography></li>


        <li>
          <Typography variant="h3">Can you steam clean a rug on hardwood floors?</Typography>
          <Typography variant="body">Yes, our rug steam cleaning service is perfect for cleaning rugs on hardwood floors and on any other surface.</Typography></li>
        <li>
          <Typography variant="h3">Can you steam clean a polypropylene rug?</Typography>
          <Typography variant="body">Yes, polypropylene rugs can be steam cleaned. Steam cleaning, if done properly, is the most thorough and effective method for removing dirt and soil from the base of the rug. Hiring professionals will be the best solution, because of their expertise and knowledge about what cleaning methods and solutions should be used for the specific type of rug. Apart from polypropylene rug cleaning, we are experts in shag rug cleaning, Oriental rug cleaning in London, Persian rug cleaning in London, acrylic rug cleaning, Asian rug cleaning, Turkish rug cleaning, flat weave rug cleaning, Kilim rug cleaning in London, Moroccan rug cleaning in London, polyester shaggy rug cleaning, high pile rug cleaning, bathtub rug cleaning and many more.</Typography></li>
        <li>
          <Typography variant="h3">Can you steam-clean Oriental rugs?</Typography>
          <Typography variant="body">Yes, Oriental rugs can definitely be steam-cleaned, if done properly, since these hand-knotted rugs need special care. In that case, a professional rug steam cleaning service is the best solution. Not only is it time-saving and stress-free for you, but it is also the best maintenance choice for your Oriental rug. Our Oriental rug cleaning in London is the most thorough and effective method for removing all dirt, soil and bacteria from the base of the rug.</Typography></li>
        <li>
          <Typography variant="h3">Can you steam clean a shag rug?</Typography>
          <Typography variant="body">Yes, shag rugs can be steam-cleaned. We recommend using professional help to steam clean your shag rug. Through their expertise and knowledge, you can rest assured that your deep-pile rug will be properly taken care of. We at “Fine Carpet Cleaning” Ltd. are specialised in shag rug cleaning which you can take great advantage of. Contact us at any suitable time for you to book your desired cleaning services or to receive professional advice.</Typography></li>
        <li>
          <Typography variant="h3">Can you steam clean a Persian rug?</Typography>
          <Typography variant="body">Persian rugs are also valued for their durability and high quality due to their exquisite craftsmanship. They can be treasured for many years to come with the correct maintenance and care. Persian rugs need special cleaning solutions and cleaning methods so they can be treated properly. A professional rug steam cleaning service is the ideal choice in that situation. It saves you time and reduces tension, and it's the ideal option for maintaining your Persian rug. Our Persian rug cleaning in London is the most complete and efficient way to get rid of all the filth, grime, and bacteria from the rug's foundation.</Typography></li>
        <li>
          <Typography variant="h3">Can you steam clean a Kilim rug?</Typography>
          <Typography variant="body">Kilim rugs cost more than traditional rugs since they are handmade and each one has a unique design. Because Kilim rugs are manufactured with natural fibres and dyes, they are more resilient than typical carpets. To effectively care for Kilim rugs, specific cleaning agents and techniques are required. In that case, hiring a professional deep rug cleaning service is the best option. It's the best choice for keeping your Kilim rug in good condition and saves you time and stress. The most thorough and effective method for removing all grime, dirt, and bacteria from the rug's basis is our Kilim rug cleaning in London. We also perform polypropylene rug cleaning, shag rug cleaning, Oriental rug cleaning in London, Persian rug cleaning in London, acrylic rug cleaning, Asian rug cleaning, Turkish rug cleaning, flat weave rug cleaning, Moroccan rug cleaning in London, polyester shaggy rug cleaning, high pile rug cleaning, bathtub rug cleaning and many more.</Typography></li>
        <li>
          <Typography variant="h3">Can you steam clean an area rug?</Typography>
          <Typography variant="body">Yes, almost all kinds of area rugs can be steam cleaned, depending on the fabric the rug is made of. Our rug steam cleaning service includes polypropylene rug cleaning, shag rug cleaning, Oriental rug cleaning in London, Persian rug cleaning in London, acrylic rug cleaning, Asian rug cleaning, Turkish rug cleaning, flat weave rug cleaning, Kilim rug cleaning in London, Moroccan rug cleaning in London, polyester shaggy rug cleaning, high pile rug cleaning, bathtub rug cleaning and many more.</Typography></li>
      </ul>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Rug steam cleaning service</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/Професионално почистване на заведения.jpg" alt="" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">What to expect from our rug steam cleaning service</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>We at “Fine Carpet Cleaning” Ltd. perform professional rug steam cleaning services. Rug steam cleaning (also known as hot water extraction) is by far the most popular method for deep cleaning and sanitising rugs because of its unmatched efficiency.</p>
        <p>The benefits of using a rug steam cleaning service are:</p>
        <ul>
          <li class="ml--5">
            <p>Being the most in-depth and powerful cleaning method - it sanitises, kills bacteria, deodorises, and freshens your rug all at once;</p>
          </li>
          <li class="ml--5">
            <p>Being the most effective treatment against all kinds of stains - from dirt, food, and beverages, to body fluids and biologically active contaminants;</p>
          </li>
          <li class="ml--5">
            <p>Ensuring a significantly shorter drying time compared to ordinary rug washing;</p>
          </li>
          <li class="ml--5">
            <p>Being children & pet-friendly.</p>
          </li>
        </ul>

        <h3>Simple booking process:</h3>
        <p>The usual process of booking our rug steam cleaning services:</p>

        <ul>
          <li class="ml--5">
            <p>You get in touch with us.</p>
          </li>
          <li class="ml--5">
            <p>Based on your circumstances, we recommend the services that will be most beneficial to you.</p>
          </li>
          <li class="ml--5">
            <p>A quote is given to you.</p>
          </li>
          <li class="ml--5">
            <p>We will set up an appointment for you if our terms are acceptable to you.</p>
          </li>
          <li class="ml--5">
            <p>A member of our staff will come to your place and give your rugs a steam cleaning.</p>
          </li>

        </ul>
        <h3>What do we offer:</h3>
        <p>Other cleaning services we offer are:</p>
        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-rug-cleaning-services">Rug cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-rug-cleaning-services/dry">Dry rug cleaning</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-stain-removal-services">Rug stain removal</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/stain-protection-services">Rug stain protection</a></li>
        </ul>
        </div>

        <FleurDivider></FleurDivider>

        <h2>The process of our rug steam cleaning service:</h2>
        <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ul>
          <li class="ml--5"><p>We start by doing a pre-cleaning survey. We apply a unique strategy to each rug, taking into account its kind, condition, and level of pollution. This is required to determine the approximate amount of detergent and equipment required for steam cleaning the rug.</p></li>
          <li class="ml--5"><p>Using a high-filtration twin-motor Hoover cleaner made especially for high-performance steam cleaning is the second stage. This gets rid of any dust, dry soils, and loose dirt.</p></li>
          <li class="ml--5"><p>Then, we use a strong pre-spray that is intended to loosen oily soil and other contaminants from your rug, allowing our powerful extraction machines to safely remove them.</p></li>
          <li class="ml--5"><p>The cleaning solution is then applied to the rug fibres. In doing so, the soil is loosened and prepared for extraction.</p></li>
          <li class="ml--5"><p>After that, the rug fibres are deeply and gently injected with pure, softened hot water. This lets our strong machine loosen the dirt so it can be removed efficiently. Any leftover stains and spots are addressed one at a time with carefully chosen cleaning solutions.</p></li>
          <li class="ml--5"><p>In order to make sure that there are no chemical remnants from the steam cleaning, we rinse and extract once more.</p></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use for our rug steam cleaning service</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Highly-efficient extractors</h3>
            <Typography variant="body">Our devices, which are regarded as some of the most potent and efficient portable devices ever made, have undergone rigorous testing, and we have chosen the top brands — "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>" and "<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>" — that are offered on the UK market. Our team's engineer further boosts their performance by making major adjustments to enhance their potential.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
            <Typography variant="body">We also use what we consider to be the greatest twin-motor Hoover cleaner with excellent filtration available. One motor on this hoover is used to thoroughly clean the carpet, while the other is used to remove any dry soil, loose dirt and dust. It is specifically made for professional rug steam cleaning services.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Thoughtfully chosen cleaning product</h3>
            <Typography variant="body">We use over 20 cleaning products from the top brands in the US and UK markets to guarantee the greatest results. We've selected the detergents that yield outstanding results after conducting a thorough testing process. We utilise a variety of brands, including "Alltec," "Prochem," "Chemspec," "Solution World of Clean," and "TMF." Because there is such a large assortment, our professionals will select the best detergents for the rug type, degree of soiling, and type of stains that need to be removed.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our rug steam cleaning service</h2>

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

      <h2 class="line-height-12 md-line-height-14">Video from our rug steam cleaning service</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Prices of our rug steam cleaning service</h2>

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

      <h2 class="line-height-12 md-line-height-14">Our rug steam cleaning specialists advise:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Utilise a stain guard</h3>
            <Typography variant="body">Whenever feasible, our cleaning expert suggests applying stain protection to your furniture, rugs and carpets. You can avoid paying a hefty price for expert stain removal services by doing this. We suggest finding out more about the benefits of using <a class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection services</a> if you're interested.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Seek assistance from a professional stain removal service</h3>
            <Typography variant="body">If your carpet or upholstery has become stained, our steam cleaning specialist strongly advises hiring a professional stain removal company. Attempting to clean the stain yourself or allowing it to dry can damage the fabric, making complete removal unlikely. In fact, attempting to remove the stain yourself is more likely to seal it rather than remove it, which will make it harder or perhaps impossible for an experienced steam cleaning firm to remove. Therefore, you may save your priceless rug or upholstery - which could be worth thousands - by making an appointment for <a class="color-paper-link hover-color-paper-link-hover:hover" href="/professional-stain-removal-services">professional stain removal services</a>.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Explore our list of services</h3>
            <Typography variant="body">You might discover other services that are occasionally missed or overlooked by looking through our other services. Our crew takes great satisfaction in offering a wide range of services, such as carpet and upholstery cleaning. Don't pass up the chance to benefit from our entire spectrum of experience and make the best choices for your cleaning requirements.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Unite multiple services</h3>
            <Typography variant="body">As suggested by our cleaning professional, we advise scheduling multiple services in a single appointment to save on costs. Combining all necessary services at once is more cost-effective than having them completed one at a time.This approach is more economical than booking them separately, as each technician visit incurs additional expenses such as travel time, parking, and managing heavy equipment during loading and unloading.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Experience the advantages of good health</h3>
            <Typography variant="body">The health advantages of maintaining clean upholstery, carpets, and rugs should be known if you own any of these items. These objects have the potential to gather large amounts of dust, dirt particles, and bacteria that could cause health issues. Ignoring those requirements can make you more susceptible to allergies, skin problems, and other complications. Our rug cleaning expert advises employing expert steam cleaning services at least once a year to prevent these problems. It is in your best interest to have your rugs cleaned more frequently if they undergo a lot of traffic.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews of our rug steam cleaning service</h2>

      <GalerrySliderDesktop />
      <GalerrySliderMobile />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our rug steam cleaning service</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/services" class="c-paper font-size-5">SERVICES</a></button>
        <button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>
      </div>



    </>
  );
}
