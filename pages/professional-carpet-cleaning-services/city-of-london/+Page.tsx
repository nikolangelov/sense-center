import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { createCollapsable } from "../../../components/Collapsable";
import { Typography } from '../../../components/Typography';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../../components/FrequentlyOrderedTogether';
import { FleurDivider } from "../../../components/FleurDivider";
import { VideoPlayer } from '../../../components/VideoPlayer';
import { PriceTable } from '../../../components/PriceTable';

function FaqSection() {
    const { Container, Entry } = createCollapsable()
    return <Container>
        <Entry>
            <li>
                <Typography variant="h3">1. Do you have a cancellation fee?</Typography>
                <Typography variant="body">Yes, if you cancel on the day of the cleaning you will lose your deposit.</Typography>
            </li>
            <li>
                <Typography variant="h3">2. Do I need to pay for congestion / parking charges?</Typography>
                <Typography variant="body">Yes, the client is requested to arrange suitable parking space for our vehicles within close proximity of the property and to cover any parking/congestion expenses if applicable.</Typography></li>
            <li>
                <Typography variant="h3">3. Do carpet cleaning services move furniture?</Typography>
                <Typography variant="body">We would appreciate it if you would move small, delicate, or valuable items of furniture for insurance reasons, such as lamps and ornaments. If you can, please put them well out of the way before we arrive in an area that won't be disturbed by cleaning. We would like to have floors free from any obstacles. We will help with moving other light furniture such as chairs, armchairs, and tables during the cleaning and put them back in place. If heavy furniture has to be moved (such as sofas, beds, wardrobes, cupboards, etc.), we will charge you extra. The reason is that this will require additional time and effort by our technician, and he will receive an additional reward for it. Our goal is for the whole process to be as stress-free for you as possible.</Typography></li>
            <li>
                <Typography variant="h3">4. What if I live on the 4th floor or higher and I have no lift?</Typography>
                <Typography variant="body">Since our equipment is very heavy (50kg+), when our technician has to carry it by hand, we charge extra for every additional floor. The reason is that this will usually take a lot of time, and our technicians tire faster, therefore that day they can not do as much work as they usually do.</Typography></li>
            <li>
                <Typography variant="h3">5. Are you insured?</Typography>
                <Typography variant="body">Yes, we are fully insured.</Typography></li>
        </Entry>
        <Entry>
            <li>
                <Typography variant="h3">6. What happens if your cleaner damages anything while performing professional carpet cleaning services?</Typography>
                <Typography variant="body">We are fully insured and if an accident happens we have full coverage.</Typography>
            </li>
            <li>
                <Typography variant="h3">7. What is professional carpet cleaning?</Typography>
                <Typography variant="body">Professional carpet cleaning is performed by experts using special products and professional equipment and offers special carpet washing services (such as steam cleaning). By hiring professionals, the carpet also dries as quickly as possible after cleaning, thanks to the quality of the equipment used.</Typography>
                <Typography variant="body">By having an affordable carpet cleaning like the one we provide, you are ensuring that your carpets are going to receive state-of-the-art cleaning techniques and quality cleaning solutions with thorough drying. DIY carpet cleaning almost always leaves out the crucial drying techniques that can help prevent the growth of mould or mildew.</Typography>
                <Typography variant="body">Professional carpet cleaners are well-qualified in their field and know exactly which products to use on different types of carpets. The cleaning technician will also be able to clean your carpet without damaging its fibres, so your carpet looks as new without losing any of its thickness. The fibres won't be damaged in the process either.</Typography>
            </li>
            <li>
                <Typography variant="h3">8. How much does a professional carpet cleaning cost?</Typography>
                <Typography variant="body">The cost of professional carpet cleaning depends on the quantity and size of the carpets, how soiled they are, the type of the carpets and how easy the access to the carpets is. For more detailed information check out our <a
                    class="color-paper-link hover-color-paper-link-hover:hover" href="/prices">carpet cleaning price list</a>.</Typography>
            </li>
            <li>
                <Typography variant="h3">9. Do you think that your company is doing the best carpet cleaning in London?</Typography>
                <Typography variant="body">We, from Fine Carpet Cleaning London, believe that we are bound to be among the best carpet cleaning companies in London. The reason is that we strongly believe in the principle "No pain, no gain" and try to follow it when doing business. When we combine this with another principle that we try to follow - "think about others first" - this guarantees strive for constant improvement and delivery of better and better results. All of the above gives us confidence that we definitely have a chance in the foreseeable future to offer the best carpet cleaning in London.</Typography>
            </li>
            <li>
                <Typography variant="h3">10. Do you offer berber carpet cleaning service?</Typography>
                <Typography variant="body">Yes, we offer berber carpet cleaning service. If you need more information about this service you have to <a
                    class="color-paper-link hover-color-paper-link-hover:hover" href="/contact-us">contact us</a>.</Typography>
            </li>
            <li>
                <Typography variant="h3">11. Can professional carpet cleaning remove coffee stains?</Typography>
                <Typography variant="body">Yes, high-quality carpet cleaning services can absolutely remove coffee stains. In cases like stains from coffee with sugar, the carpet will have a growth of certain microbial activities. Some cleaning methods that a professional carpet cleaning company provides, such as steam carpet cleaning, effectively kill all those germs along with removing 100% of the coffee stain.</Typography>
                <Typography variant="body">Unfortunately, we can't guarantee that we will be able to eliminate every coffee stain. The reason is that the coffee stain might be more difficult to remove if it has been incorrectly treated before or if it has been left to completely dry out. However, we will inform you beforehand whether we think we can get a coffee stain out or not.</Typography>
            </li>
            <li>
                <Typography variant="h3">12. In which wards of City of London do you do carpet cleaning?</Typography>
                <Typography variant="body">We do:</Typography>
                <ul class="ml--5" style="list-style: initial;">
                    <Typography variant="li">
                        <p>carpet cleaning in Farringdon Without;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Castle Baynard;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Farringdon Within;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Queenhithe;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Bread Street;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Cheap;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Aldersgate;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Cripplegate;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Bassishaw;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Coleman Street;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Broad Street;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Walbrook;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Cordwainer;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Vintry;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Dowgate;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Bridge;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Candlewick;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Langbourn;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Cornhill;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Lime Street;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Bishopsgate;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Aldgate;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Portsoken;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Tower;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Billingsgate;</p>
                    </Typography>
                </ul>
            </li>
            <li>
                <Typography variant="h3">13. In which postcodes of City of London do you do carpet cleaning?</Typography>
                <Typography variant="body">We perform:</Typography>
                <ul class="ml--5" style="list-style: initial;">
                    <Typography variant="li">
                        <p>carpet cleaning in EC1;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in EC2;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in EC3;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in EC4;</p>
                    </Typography>
                </ul>
                <Typography variant="body">Anyhow, no matter in which borough of City of London you are located, our local carpet, rug and upholstery cleaning teams are available to respond quickly to your needs, tailoring the services to your personal preferences.</Typography>
            </li>
        </Entry>
    </Container>
}

export default function Page() {

    return (
        <>
            <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Carpet cleaning City of London</h1>
            <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full"
                src="/assets/location-pages/city-of-london/tower-carpet-cleaing.png" alt="tower-carpet-cleaing"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Why to use professional carpet cleaning services in City of London</h2>
            <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
                <h3>Benefits</h3>
                <p>Fine Carpet Cleaning City of London provides various expert carpet cleaning solutions. Utilising these kinds of services has the following advantages:</p>
                <ul>
                    <li class="ml--5">
                        <p>It is much more affordable to perform routine upkeep than purchasing a new rug.</p>
                    </li>
                    <li class="ml--5">
                        <p>It will extend the lifespan of your carpet.</p>
                    </li>
                    <li class="ml--5">
                        <p>It will preserve the appearance of your carpet.</p>
                    </li>
                    <li class="ml--5">
                        <p>It will maintain the cleanliness of your carpet (which offers you health benefits).</p>
                    </li>
                </ul>
                <h3>Simple booking process:</h3>
                <p>The typical steps for reserving our expert carpet cleaning services in City of London:</p>
                <ul>
                    <li class="ml--5">
                        <p>You reach out to us.</p>
                    </li>
                    <li class="ml--5">
                        <p>We recommend the most suitable services for your needs.</p>
                    </li>
                    <li class="ml--5">
                        <p>We provide you with a carpet cleaning estimate.</p>
                    </li>
                    <li class="ml--5">
                        <p>If you're happy with our conditions, we arrange a visit.</p>
                    </li>
                    <li class="ml--5">
                        <p>Our technician will come to your home and clean your carpets.</p>
                    </li>
                </ul>
                <h3>What do we offer:</h3>
                <p>The expert carpet cleaning services we provide in City of London include:</p>
                <ul>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/professional-carpet-cleaning-services/steam">Professional carpet steam cleaning services</a></li>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/professional-carpet-cleaning-services/dry">Dry carpet cleaning services</a></li>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/professional-carpet-cleaning-services/eco-friendly">Eco-friendly carpet cleaning services</a></li>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/professional-carpet-cleaning-services/fast-dry">Quick-dry carpet cleaning services</a></li>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/services">All of our services</a></li>
                </ul>
            </div>

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Equipment and products we use</h2>
            <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
                <ol style="counter-reset: ordered; list-style: none;">
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Highly-efficient extractors</h3>
                        <Typography variant="body">The machines we employ have been selected after an uncompromising process. First, we evaluated all major brands available on the UK market. Second, we picked the most effective ones among them - "<a
                            class="color-paper-link hover-color-paper-link-hover:hover"
                            href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/"
                            target="_blank" rel="noopener">Mytee</a>" (leading US manufacturer) and "<a
                                class="color-paper-link hover-color-paper-link-hover:hover"
                                href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank"
                                rel="noopener">Airflex</a>" (top UK manufacturer). Third, our engineer further improved them to maximise their performance.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
                        <Typography variant="body">We utilise a high-filtration twin engine vacuum cleaner, which we believe is the best one on the market. It's designed for high-performance professional carpet cleaning. One of the dual-motors pounds at the carpet while the other one sucks out any loose dirt, dry soil, and dust.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning products</h3>
                        <Typography variant="body">In terms of cleaning products, we employ more than 20 various detergents, because we know that every scenario requires an individual approach. We have evaluated almost all detergents available on the market and chose those giving the best results. Among them are items from the brands Alltec, Prochem, Chemspec, Solution World of Clean, TMF, etc.</Typography>
                    </li>
                </ol>
            </div>

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Pictures from our professional carpet cleaning services in City of London</h2>

            <FacebookLikeGallery imgs={[
                { src: "/assets/location-pages/city-of-london/carpet-cleaning-city-of-london.jpg", alt: "carpet-cleaning-city-of-london" },
                { src: "/assets/location-pages/city-of-london/farringdon-within.jpg", alt: "farringdon-within" },
                { src: "/assets/location-pages/city-of-london/carpet-cleaning-ec1.jpg", alt: "carpet-cleaning-ec1" },
                { src: "/assets/location-pages/city-of-london/carpet-cleaning-aldgate.jpg", alt: "carpet-cleaning-aldgate" },
                { src: "/assets/location-pages/city-of-london/carpet-cleaning-ec2.jpg", alt: "carpet-cleaning-ec2" },
                { src: "/assets/location-pages/city-of-london/carpet-cleaning-ec3.jpg", alt: "carpet-cleaning-ec3" },
                { src: "/assets/location-pages/city-of-london/carpet-cleaning-ec4.jpg", alt: "carpet-cleaning-ec4" },
                { src: "/assets/location-pages/city-of-london/carpet-cleaning-london-bridge.jpg", alt: "carpet-cleaning-london-bridge" },
                { src: "/assets/location-pages/city-of-london/castle-baynard.jpg", alt: "castle-baynard" },
                { src: "/assets/location-pages/city-of-london/farringdon-without.jpg", alt: "farringdon-without" },
            ]} />

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Video from our professional carpet cleaning services in City of London</h2>

            <VideoPlayer src='https://www.youtube.com/embed/BHjPSM_B54E?enablejsapi=1&mute=1' />

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Prices of our professional carpet cleaning services in City of London</h2>


            <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
                <div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
                <br></br>
                Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
                charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
                delays for the technicians and messes up the schedule.
                <br></br>
                <strong id="price_table">Deodorising - Free of charge - just notify us when booking.</strong></div>

            <PriceTable
                title="Room type"
                items={[
                    { label: "Hallway", value: "from £13.00" },
                    { label: "Landing", value: "from £7.00" },
                    { label: "Living Room", value: "from £44.00" },
                    { label: "Bedroom", value: "from £31.00" },
                    { label: "Flight of stairs", value: "from £33.00" },
                    { label: "Single step", value: "from £2.50" },
                    { label: "Office room", value: "from £31.00" },
                    { label: "Hotel room", value: "from £45.00" },
                    { label: "Loft room", value: "from £35.00" },
                    { label: "Through lounge", value: "from £71.00" },
                    { label: "Box room", value: "from £31.00" },
                    { label: "Bathroom", value: "from £9.00" },
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

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Our carpet cleaning specialists advise:</h2>
            <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
                <ol style="counter-reset: ordered; list-style: none;">
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Use a stain protector</h3>
                        <Typography variant="body">Our carpet cleaning expert recommends always adding a stain protector to your carpet and upholstery if you can afford it. It saves a lot of money on professional stain removal services. Why? Because it shields the fabric against penetration of liquids that cause lasting stains and permanent damage to the carpet and upholstery. Discover more about the advantages of using <a
                            class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection services</a>.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Use a professional stain removal service</h3>
                        <Typography variant="body">Our carpet cleaning expert recommends that if your carpet or upholstery has been stained, it's best to look for a professional stain removal company. The reason is that when you try to clean it yourself or leave the stain to dry, the fibres might get damaged and the stain probably won't come off completely. Trying to clean the stain yourself will likely seal it in, rather than remove it. This will then make it harder or even impossible for a professional carpet cleaning company to get rid of it. So, booking a <a class="color-paper-link hover-color-paper-link-hover:hover"
                            href="/professional-stain-removal-services">professional stain removal service</a> today from an expert carpet cleaning company can save your carpet or upholstery that's worth a lot of money.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Take informed decisions</h3>
                        <Typography variant="body">Our carpet cleaning expert recommends you take a look at the <a
                            class="color-paper-link hover-color-paper-link-hover:hover" href="/services">other services</a> we provide. By getting to know all of our services, you can make informed choices about what else you might need. This lets you remember any specific services you may have forgotten about or discover new services that you didn't even know were available.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Combine different services</h3>
                        <Typography variant="body">It's in your best interest to combine different services rather than having them performed separately. Why? Because this will save you a significant amount of money. The reason is that the initial professional carpet cleaning cost is high and you will have to pay some extra money for every visit of our technicians (due to time and cost of travel, parking, carrying of heavy machinery etc.). So once you pay the initial cost, adding extra services is significantly cheaper.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy health benefits</h3>
                        <Typography variant="body">Your rug, carpet floor covering, and upholstery are some of those items that accumulate lots of dust, microorganisms, and particles of dirt that are potential causes for health problems. They might provoke different reactions, skin problems, and allergies, and the risk gets higher if they are not taken care of. So depending on how much traffic you have on your rugs, carpets, and upholstery, our carpet cleaning expert recommends considering using professional carpet cleaning services in City of London once a year. If the traffic is really, really heavy, it's best to do it more often.</Typography>
                    </li>
                </ol>
            </div>

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Reviews from our professional carpet cleaning in City of London</h2>

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

            <h2 class="line-height-12 md-line-height-14">FAQ regarding our carpet cleaning services in City of London</h2>

            <FaqSection />

            <FleurDivider />

            <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
                <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
                <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
            </div>

        </>
    );
}
