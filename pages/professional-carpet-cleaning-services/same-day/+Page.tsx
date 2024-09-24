import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { Typography } from '../../../components/Typography';
import { createCollapsable } from '../../../components/Collapsable';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../../components/FrequentlyOrderedTogether';

const VideoPlayer = () => {
  return (
      <div class="flex flex-justify-center flex-items-center mt-20">
          <iframe
              class="mt-10 b-rd-3"
              style="width: 100%; height: 500px;"
              src="https://www.youtube.com/embed/_KH1rkIGxGo?autoplay=1&mute=1"
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

export function FaqSection() {
  const { Container, Entry } = createCollapsable()
  return <Container>
    <Entry>
      <li>
        <Typography variant="h3">1. Do you have a cancellation fee?</Typography>
        <Typography variant="body">Yes, you will lose your money if you cancel on the day of the cleaning.</Typography></li>
      <li>
        <Typography variant="h3">2. Do I need to pay for congestion / parking charges?</Typography>
        <Typography variant="body">Yes, the customer is expected to provide appropriate parking arrangements for our cars near to the location and to pay for any additional parking or traffic costs.</Typography></li>
      <li>
        <Typography variant="h3">3. Do carpet cleaning services move furniture?</Typography>
        <Typography variant="body">For insurance purposes, we would appreciate it if you could move tiny, delicate, or expensive furniture pieces, including lamps and decorations. If at all possible, please move them to a spot where cleaning won't bother them long before we arrive. We want flooring that is free of any obstacles. During the cleaning, we will assist with moving and rearranging other light furniture, such as chairs, tables, and armchairs. We will charge you more if heavy furniture needs to be moved (such as couches, beds, closets, cabinets, etc.) relocated.The reason is that our professionals will be compensated more for spending more time and energy on this.</Typography></li>
      <li>
        <Typography variant="h3">4. What if I live on the 4th floor or higher and I have no lift?</Typography>
        <Typography variant="body">Our equipment is quite heavy (50kg and more), so we charge an extra fee for each additional level that our technician must carry by hand. The reason for this is that it generally takes a lot of energy and time, and after that, our professionals can't perform as much work as they normally do.</Typography></li>
      <li>
        <Typography variant="h3">5. Are you insured?</Typography>
        <Typography variant="body">Yes, we are fully insured.</Typography></li>
    </Entry>
    <Entry>
      <li>
        <Typography variant="h3">6. What happens if your cleaner damages anything while performing same day carpet cleaning services?</Typography>
        <Typography variant="body">We have full coverage, so don’t worry if an accident happens, we have full coverage.</Typography></li>
      <li>
        <Typography variant="h3">7. How long does the process of a same day carpet cleaning service take?</Typography>
        <Typography variant="body">The same day carpet cleaning process is determined by how filthy the carpet is and if it requires stain removal treatments.Usually, it takes from 20 to 60 minutes per room.</Typography></li>
      <li>
        <Typography variant="h3">8. How long does it take for the carpet to get dry?</Typography>
        <Typography variant="body">It can be affected by a variety of elements, including the type of carpet, what condition it is in, the thickness of the pile, and whether or not it requires stain removal services.</Typography>

        <Typography variant="body">Wool carpets retain more water and dry slower, often between 10 and 12 hours. If the carpet is really dirty and needs to be treated several times, the drying period may be significantly longer.</Typography>

        <Typography variant="body">Synthetic carpets dry faster, between 7 and 10 hours, and the above is still valid (it depends on how dirty it is and the number of required treatments).</Typography></li>
      <li>
        <Typography variant="h3">9. Do you guarantee that after cleaning my carpet, all stains will be removed?</Typography>
        <Typography variant="body">No, since there are elements involved that are beyond our control. Among these aspects are:</Typography></li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>How old are the stains?</p>
        </Typography>
        <Typography variant="li">
          <p>What polluting agent created the stains?</p>
        </Typography>
        <Typography variant="li">
          <p>What's the carpet composed of?</p>
        </Typography>
        <Typography variant="li">
          <p>Have the stains not been properly treated in the past?</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="body">Nonetheless, we promise that we will try our best to remove all of the stains from your carpet. This includes:</Typography>
      </li>
      <ul class="ml--5" style="list-style: initial;">
        <Typography variant="li">
          <p>The usage of high-quality cleaning equipment;</p>
        </Typography>
        <Typography variant="li">
          <p>The use of effective and eco-friendly detergents.</p>
        </Typography>
      </ul>
      <li>
        <Typography variant="h3">10. How soon can I expect a cleaner to visit me?</Typography>
        <Typography variant="body">We will attempt to schedule your appointment as soon as possible. We are usually completely booked three days in advance, although there are occasional exceptions.
          <br></br>
          However, if you are in a hurry, we suggest you use the same day carpet cleaning that we offer. Call us, and we will send you professionals as soon as possible.</Typography></li>
      <li>
        <Typography variant="h3">11. What is next day carpet cleaning?</Typography>
        <Typography variant="body">Next day carpet cleaning is an excellent option for situations where accidents happen and you need your carpets right away. We offer carpet cleaning in London, which can be on the same day, the following day, or whenever it is convenient for you. It is a good choice in case of unexpected spills or stains, preparing for guests, or moving out. If you need routine cleaning, we suggest you choose from some of our cleaning services in London and schedule a standard appointment.</Typography></li>
      <li>
        <Typography variant="h3">12. Can I schedule carpet cleaning today?</Typography>
        <Typography variant="body">Absolutely! We offer emergency carpet cleaning services. Contact us as soon as the stain appears. Tell us more details about the carpet situation, and we will discuss the potential solutions to your problem. Hurry up to check availability and book your appointment.</Typography></li>
      <li>
        <Typography variant="h3">13. I spilled coffee on the white, fluffy carpet. Is it possible to send me a technician for this morning carpet cleaning?</Typography>
        <Typography variant="body">Yes, usually it is possible. We offer same day carpet cleaning service for cases like this. You have to just make sure to contact us in order to check our availability.
          <br></br>
          Contact us online or by phone, and we will make an appointment at the most convenient time for you. Booking a carpet cleaning company like us is simple and convenient, resulting in an efficient and quick experience.</Typography></li>
      <li>
        <Typography variant="h3">14. Do you offer any kind of instant carpet cleaning service?</Typography>
        <Typography variant="body">We cannot clean your carpet instantly. But yes, we do offer instant carpet cleaning services. While availability depends on our current timetable, we try to respond to urgent requests. Please contact us as soon as possible to discuss your urgent needs, and we will do our best to give you a fast and effective service.</Typography></li>
      <li>
        <Typography variant="h3">15. Can you provide last minute carpet cleaning services on short notice?</Typography>
        <Typography variant="body">For sure, we are people as well, and we know that unexpected situations arise. The availability of our urgent carpet cleaning depends on the scheduling program. But don’t worry,  we provide flexible scheduling choices and a dedicated customer support team that responds quickly and prioritises emergencies. Your happiness is our first priority, and we are dedicated to providing rapid and efficient service to satisfy your needs. No matter what happens, contact us, and we will find a solution together.</Typography></li>
      <li>
        <Typography variant="h3">16. What is the price of carpet cleaning in London?</Typography>
        <Typography variant="body">The London carpet cleaning price varies depending on the size of the area, the type of carpet, and special cleaning procedures. Pricing can be affected by factors such as dirt level, stain type, and carpet material. Please contact us for further information and an exact estimate of your carpet cleaning needs. Our staff will offer you an accurate price based on your individual needs, providing pricing transparency and clarity.</Typography></li>
    </Entry>
  </Container>
}

export default function Page() {
  return (
    <>
      <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Same day carpet cleaning services</h1>
      <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full" src="/assets/service-pics/same-day/emergency-carpet-cleaning.jpg" alt="emergency-carpet-cleaning" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Why to use same day carpet cleaning services</h2>
      <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <h3>Benefits:</h3>
        <p>At Fine Carpet Cleaning London, we know that accidents happen, and you may need your carpets cleaned immediately. We offer the perfect option for people who do not have time to schedule everything. Same day carpet cleaning allows you to book an appointment for later the same day. Using this type of service has the following benefits:</p>

        <ul>
          <li class="ml--5">
            <p>Convenient booking process;</p>
          </li>
          <li class="ml--5">
            <p>Extra fast carpet cleaning service;</p>
          </li>
          <li class="ml--5">
            <p>Fresh and clean carpet in the shortest possible time;</p>
          </li>
          <li class="ml--5">
            <p>Better hygiene and a safer living environment;</p>
          </li>
        </ul>
        <h3>Simple booking process:</h3>
        <p>The usual process for booking our same day carpet cleaning in London is as follows:</p>

        <ul>
          <li class="ml--5">
            <p>You contact us.</p>
          </li>
          <li class="ml--5">
            <p>We will ask you for more details about your carpet problem to know what equipment and solutions we need for your situation.</p>
          </li>
          <li class="ml--5">
            <p>We will provide you with a quote for the carpet cleaning.</p>
          </li>
          <li class="ml--5">
            <p>If you are satisfied with our terms, we will make an appointment for you.</p>
          </li>
          <li class="ml--5">
            <p>One of our specialists will then come to you and clean your carpets.</p>
          </li>
        </ul>
        <h3>What do we offer:</h3>
        <p>If the situation is more complicated, we recommend that you take a look at our professional carpet cleaning services:</p>

        <ul>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/steam">Professional carpet steam cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/dry">Dry carpet cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/eco-friendly">Eco-friendly carpet cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/professional-carpet-cleaning-services/fast-dry">Fast dry carpet cleaning services</a></li>
          <li class="ml--5"><a class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04" href="/services">All of our services</a></li>
        </ul>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Equipment and products we use</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Advanced extractors</h3>
            <Typography variant="body">The machines we use for emergency carpet cleaning service are the result of a careful selection process. First, we researched all the leading brands in the global market. Then we went with “<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/" target="_blank" rel="noopener">Mytee</a>”, the top company within the US, along with “<a class="color-paper-link hover-color-paper-link-hover:hover" href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank" rel="noopener">Airflex</a>”, the top manufacturer within the UK, as the most suitable choices. Our engineers then went on to improve the productivity of the devices.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Powerful dual-motor cleaners</h3>
            <Typography variant="body">We use a high-filtration dual-motor hoover, which we believe to be the best on the market. It is intended for high-performance carpet cleaning the same day. One of the dual engines pounds on the carpet while the other sucks up any loose dirt, dry soil, or dust.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning products</h3>
            <Typography variant="body">In terms of cleaning solutions, we employ over 20 different detergents since we understand that each case requires a different approach. We have analysed practically all the cleaning solutions on the market and selected those that give the best results. These include "Alltec", "Prochem", "Chemspec", "Solution World of Clean", "TMF", and so on.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Pictures from our same day carpet cleaning services in London</h2>

      <FacebookLikeGallery imgs={[
        { src: "/assets/service-pics/same-day/1-instant-carpet-cleaning.jpg", alt: "1-instant-carpet-cleaning" },
        { src: "/assets/service-pics/same-day/2-carpet-cleaning-today.jpg", alt: "2-carpet-cleaning-today" },
        { src: "/assets/service-pics/same-day/3-last-minute-carpet-cleaning.jpg", alt: "3-last-minute-carpet-cleaning" },
        { src: "/assets/service-pics/same-day/4-this-morning-carpet-cleaning-1.jpg", alt: "4-this-morning-carpet-cleaning-1" },
        { src: "/assets/service-pics/same-day/5-next-day-carpet-cleaning.jpg", alt: "5-next-day-carpet-cleaning" },
        { src: "/assets/service-pics/same-day/6-last-minute-carpet-cleaning-1.jpg", alt: "6-last-minute-carpet-cleaning-1" },
        { src: "/assets/service-pics/same-day/7-same-day-carpet-cleaning-1.jpg", alt: "7-same-day-carpet-cleaning-1" },
        { src: "/assets/service-pics/same-day/8-this-morning-carpet-cleaning.jpg", alt: "8-this-morning-carpet-cleaning" },

      ]} />

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Video from our same day carpet cleaning services in London</h2>

      <VideoPlayer></VideoPlayer>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Prices of our professional carpet cleaning services</h2>

      <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
        style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
        <br></br>
        Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
        charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
        delays for the technicians and messes up the schedule.
        <br></br>
        <strong>Deising - Free of charge - just notify us when booking.</strong></div>

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
            <td class="b-rd-lb-3 b-rd-rb-3 bg-#2e5c47" colspan="3" style="box-shadow: 0px 20px 20px 1px rgb(247 247 247/ 100%);"><p class="font-size-3.5 md-font-size-4 px-5 md-my-7 c-paper line-height-6 word-spacing-0.5">*All prices depend on the quantity of the order, degree of contamination and access.
              <br></br>**Final price after contacting us.</p></td>
          </tr>
        </tbody>
      </table>

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

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Our carpet cleaning specialist advises:</h2>
      <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ol style="counter-reset: ordered; list-style: none;">
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Quick action for Fresh Stains</h3>
            <Typography variant="body">Accidents happen! With same day carpet cleaning, the quicker you act, the better.
              <br></br>
              Reach out to us right after a spill happens to prevent the stain from becoming permanent. If you treat new stains as quickly as possible, it is possible to remove them completely with just a few cleaning products. If there are already stains, you should inform us in advance so that our experts can assess the problem and bring any special stain removal that may be required.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Tell us more about the carpet</h3>
            <Typography variant="body">Before the professionals arrive, please let us know what the problem with the carpet is. This includes facts such as the type of stain, heavily soiled areas, unexpected spillages or pet accidents. It is important to tell us about the material of the carpet so that we can use the right cleaning solutions. With this information the experts can tailor the cleaning method to your specific needs, ensuring a safe and effective cleaning of your home.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Plan Ahead (a little)</h3>
            <Typography variant="body">Same day carpet cleaning appointments book up quickly, especially during peak hours. To ensure your preferred time slot, call us as soon as possible once a cleaning requirement occurs. The earlier you contact us, the more scheduling options we can offer you for later that day.</Typography>
            <Typography variant="body">Before you call us, take a few minutes to gather important information about your carpets. We need to know what material the carpet is made of, what type of stain it is, and how long it has been there. This will help us prepare for the cleaning and ensure the best results.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Save money and time</h3>
            <Typography variant="body">Enjoy the variety of services that can save both time and money. <a class="color-paper-link hover-color-paper-link-hover:hover" href="/services">Check out our wide range of carpet cleaning services</a> so you can make informed decisions regarding your carpets. We have specialised solutions for deep cleaning, stain removal, and odour treatment.</Typography>
            <Typography variant="body">By combining our same day carpet cleaning with other services, such as upholstery cleaning or specialised stain treatment, you will not only improve the cleanliness of your home or workplace, but also save you time and money. By completing numerous cleaning requirements in one visit, you can avoid multiple appointments and scheduling issues. In addition, combining services generally gets  you lower prices, making it an affordable option for a complete carpet cleaning.</Typography>
          </li>
          <li class="ml--5">
            <h3 class="ml--5 font-size-6 md-font-size-7">Create a healthier indoor environment</h3>
            <Typography variant="body">Carpets and rugs are some of the things that collect a lot of dust, bacteria, and dirt particles in your home. They are harmful for your health, and they're definitely not something you want to have around.</Typography>
            <Typography variant="body">If you do not take measures for prevention, you are at a higher risk of various problems, such as skin issues and allergies. Therefore, our carpet cleaning specialist recommends you think about using the services of a cleaning carpet company once a year, depending on how much use your rugs, carpets, and upholstery receive.</Typography>
          </li>
        </ol>
      </div>

      <FleurDivider></FleurDivider>

      <h2 class="line-height-12 md-line-height-14">Reviews from our same day carpet cleaning</h2>

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

      <h2 class="line-height-12 md-line-height-14">FAQ regarding our carpet cleaning services</h2>

      <FaqSection />

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
