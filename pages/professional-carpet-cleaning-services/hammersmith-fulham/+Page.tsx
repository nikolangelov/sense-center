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
                <Typography variant="body">Since our equipment is very weighty (50kg+), when our technician has to transport it by hand, we charge extra for every additional floor. The reason is that this will usually take a lot of time, and our technicians fatigue faster, therefore that day they can not do as much work as they usually do.</Typography></li>
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
                <Typography variant="h3">7. How long does it take for the carpet to get dry?</Typography>
                <Typography variant="body">It depends on many factors like the type of the carpet, how dirty it is, how thick the pile is and if it needs a stain removal service or not.</Typography>
                <Typography variant="body">Wool carpets absorb more water and dry slowly, between 10 and 12 hours. If the carpet is very dirty and we have to treat the carpet several times, the drying time might be even longer.</Typography>
                <Typography variant="body">Synthetic carpets dry faster, between 7 and 10 hours, and the above is still valid (it depends on how dirty it is and the number of required treatments).</Typography>
            </li>
            <li>
                <Typography variant="h3">8. What payment methods do you accept for your professional carpet cleaning service?</Typography>
                <Typography variant="body">We accept debit / credit cards, bank transfer, and cash payments directly to our team.</Typography>
            </li>
            <li>
                <Typography variant="h3">9. How long have you been in the carpet cleaning business?</Typography>
                <Typography variant="body">We have been operating since 2012. We have years of experience dealing with residential and commercial customers and various types of carpets, rugs, upholstery, and stains. Through the years, we have been working to enhance our services by:</Typography>
            </li>
            <ul class="ml--5" style="list-style: initial;">
                <Typography variant="li">
                    <p>Upgrading our machines with better ones;</p>
                </Typography>
                <Typography variant="li">
                    <p>Frequently testing and selecting new cleaning agents;</p>
                </Typography>
                <Typography variant="li">
                    <p>Always searching to improve our expertise by attending professional courses.</p>
                </Typography>
            </ul>
            <li>
                <Typography variant="h3">10. Do you offer luxury carpet cleaning in London?</Typography>
                <Typography variant="body">Yes, we do. But as luxury carpet cleaning in London is a high-end service, which deserves an individual approach to every client, you need to <a
                    class="color-paper-link hover-color-paper-link-hover:hover" href="/contact-us">contact us</a> in order to obtain more information about it.</Typography>
            </li>
            <li>
                <Typography variant="h3">11. Does carpet cleaning remove dents?</Typography>
                <Typography variant="body">No, the standard expert carpet cleaning doesn't eliminate indentations. Getting rid of dents necessitates the utilisation of particular tools and it is an entirely separate service from carpet cleaning. We at Fine Carpet Cleaning London possess the necessary equipment and we provide carpet dent removal service.</Typography>
            </li>
            <li>
                <Typography variant="h3">12. In which wards of Hammersmith and Fulham do you do carpet cleaning?</Typography>
                <Typography variant="body">We do:</Typography>
                <ul class="ml--5" style="list-style: initial;">
                    <Typography variant="li">
                        <p>carpet cleaning in Addison;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Avonmore;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Brook Green;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in College Park & Old Oak;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Coningham;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Fulham Reach;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Fulham Town;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Grove;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Hammersmith Broadway;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Lillie;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Munster;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Palace and Hurlingham;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Parsons Green & Sandford;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Ravenscourt;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Sands End;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Shepherd's Bush Green;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Walham Green;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Wendell Park;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in West Kensington;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in White City;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Wormholt;</p>
                    </Typography>
                </ul>
            </li>
            <li>
                <Typography variant="h3">13. In which districts of Hammersmith and Fulham do you do carpet cleaning?</Typography>
                <Typography variant="body">We do:</Typography>
                <ul class="ml--5" style="list-style: initial;">
                    <Typography variant="li">
                        <p>carpet cleaning in Chelsea Harbour;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in East Acton;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Fulham;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Hammersmith;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Sands End;</p>
                    </Typography>
                </ul>
            </li>
            <li>
                <Typography variant="h3">14. In which postcodes of Hammersmith and Fulham do you do carpet cleaning?</Typography>
                <Typography variant="body">We perform:</Typography>
                <ul class="ml--5" style="list-style: initial;">
                    <Typography variant="li">
                        <p>carpet cleaning in NW10;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SW10;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SW6;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in W10;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in W11;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in W12;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in W14;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in W3;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in W4;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in W6;</p>
                    </Typography>
                </ul>
                <Typography variant="body">Anyhow, no matter in which borough of Hammersmith and Fulham you are located, our local carpet, rug and upholstery cleaning teams are available to respond quickly to your needs, tailoring the services to your personal preferences.</Typography>
            </li>
        </Entry>
    </Container>
}

export default function Page() {

    return (
        <>
            <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Carpet cleaning Hammersmith and Fulham</h1>
            <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full"
                src="/assets/location-pages/hammersmith-fulham/carpet-cleaning-fulham.png" alt="carpet-cleaning-fulham"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Why to use professional carpet cleaning services in Hammersmith and Fulham</h2>
            <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
                <h3>Benefits</h3>
                <p>Fine Carpet Cleaning London offers a variety of skilled carpet cleaning options. The utilisation of these types of solutions has the following advantages:</p>
                <ul>
                    <li class="ml--5">
                        <p>It is significantly cheaper to perform regular upkeep than buying a new carpet.</p>
                    </li>
                    <li class="ml--5">
                        <p>It will prolong the life of your carpet.</p>
                    </li>
                    <li class="ml--5">
                        <p>It will preserve the look of your carpet.</p>
                    </li>
                    <li class="ml--5">
                        <p>It will keep the hygiene of your carpet (which brings you health advantages).</p>
                    </li>
                </ul>
                <h3>Simple booking process:</h3>
                <p>The common process for scheduling our skilled carpet cleaning services in Hammersmith and Fulham:</p>
                <ul>
                    <li class="ml--5">
                        <p>You contact us.</p>
                    </li>
                    <li class="ml--5">
                        <p>We advise you on the most appropriate services for your situation.</p>
                    </li>
                    <li class="ml--5">
                        <p>We offer you a carpet cleaning quotation.</p>
                    </li>
                    <li class="ml--5">
                        <p>If you accept our terms, we schedule an appointment.</p>
                    </li>
                    <li class="ml--5">
                        <p>One of our experts will come to your property and clean your carpets.</p>
                    </li>
                </ul>
                <h3>What do we offer:</h3>
                <p>The professional carpet cleaning services that we offer in Hammersmith and Fulham include:</p>
                <ul>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/professional-carpet-cleaning-services/steam">Professional carpet steam cleaning services</a></li>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/professional-carpet-cleaning-services/dry">Dry carpet cleaning services</a></li>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/professional-carpet-cleaning-services/eco-friendly">Green carpet cleaning services</a></li>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/professional-carpet-cleaning-services/fast-dry">Fast dry carpet cleaning services</a></li>
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
                        <Typography variant="body">The equipment we utilise has been picked after a rigorous selection process. Initially, we assessed all major brands accessible in the UK market. Next, we chose the most efficient ones among them - "<a
                            class="color-paper-link hover-color-paper-link-hover:hover"
                            href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/"
                            target="_blank" rel="noopener">Mytee</a>" (top US manufacturer) and "<a
                                class="color-paper-link hover-color-paper-link-hover:hover"
                                href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank"
                                rel="noopener">Airflex</a>" (leading UK manufacturer). Finally, our technician further enhanced them to optimise their performance.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
                        <Typography variant="body">We employ a high-filtration dual motor vacuum cleaner, which we consider the top choice available. It's engineered for superior expert carpet cleaning. One of the double-motors beats at the carpet while the other one removes any loose debris, dry soil, and dust.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning products</h3>
                        <Typography variant="body">When it comes to cleaning solutions, we utilise over 20 different detergents, as we understand that each situation demands a unique approach. We have assessed nearly all detergents accessible on the market and selected those providing the best outcomes. Among them are products from brands such as Alltec, Prochem, Chemspec, Solution World of Clean, TMF, and more.</Typography>
                    </li>
                </ol>
            </div>

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Pictures from our professional carpet cleaning services in Hammersmith and Fulham</h2>

            <FacebookLikeGallery imgs={[
                { src: "/assets/location-pages/hammersmith-fulham/carpet-cleaning-brook-green.jpg", alt: "carpet-cleaning-brook-green" },
                { src: "/assets/location-pages/hammersmith-fulham/carpet-cleaning-fulham-london.jpg", alt: "carpet-cleaning-fulham-london" },
                { src: "/assets/location-pages/hammersmith-fulham/carpet-cleaning-in-fulham.jpg", alt: "carpet-cleaning-in-fulham" },
                { src: "/assets/location-pages/hammersmith-fulham/carpet-cleaning-hammersmith.jpg", alt: "carpet-cleaning-hammersmith" },
                { src: "/assets/location-pages/hammersmith-fulham/carpet-cleaning-parsons-green.jpg", alt: "carpet-cleaning-parsons-green" },
                { src: "/assets/location-pages/hammersmith-fulham/carpet-cleaning-services-fulham.jpg", alt: "carpet-cleaning-services-fulham" },
                { src: "/assets/location-pages/hammersmith-fulham/carpet-cleaning-sw6.jpg", alt: "carpet-cleaning-sw6" },
                { src: "/assets/location-pages/hammersmith-fulham/carpet-cleaning-w6.jpg", alt: "carpet-cleaning-w6" },
                { src: "/assets/location-pages/hammersmith-fulham/carpet-cleaning-west-kensington.jpg", alt: "carpet-cleaning-west-kensington" },
                { src: "/assets/location-pages/hammersmith-fulham/hammersmith-carpet-cleaning.jpg", alt: "hammersmith-carpet-cleaning" },
            ]} />

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Video from our professional carpet cleaning services in Hammersmith and Fulham</h2>

            <VideoPlayer src='https://www.youtube.com/embed/TlR_aog_52A?enablejsapi=1&mute=1' />

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Prices of our professional carpet cleaning services in Hammersmith and Fulham</h2>


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
                        <Typography variant="body">Our carpet cleaning specialist advises you to always apply stain protector to your carpet and upholstery if you can afford it. It saves a significant amount of money from professional stain removal services. Why? Because it protects the fabric against penetration of liquids that lead to persistent stains and permanent harm to the carpet and furniture. Learn more about the benefits of using <a
                            class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection services</a>.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Use a professional stain removal service</h3>
                        <Typography variant="body">Our carpet cleaning specialist advises that if your carpet or upholstery has been stained, it is in your best interest to search for a professional stain removal company. The reason is that in the process of self-cleaning or leaving the stain to dry, the fibres might be damaged and the stain is very likely to not entirely come off ever. Attempting to clean the stain yourself will very likely seal off the stain, rather than remove it. This will then make it harder or even impossible for a professional carpet cleaning company to eliminate it. Thus, a <a class="color-paper-link hover-color-paper-link-hover:hover"
                            href="/professional-stain-removal-services">professional stain removal service</a> booked today from an expert carpet cleaning company can rescue your carpet or furniture that is worth thousands.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Take informed decisions</h3>
                        <Typography variant="body">Our carpet cleaning specialist advises you to check out the <a
                            class="color-paper-link hover-color-paper-link-hover:hover" href="/services">other services</a> we offer. By familiarising yourself with all of our services, you can make informed decisions about what else you may require. This allows you to recall any particular services you may have forgotten about or uncover new services that you didn't even know existed.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Combine different services</h3>
                        <Typography variant="body">It's to your advantage to combine different services rather than having them performed separately. Why? Because this will save you a lot of money. The reason is that the initial professional carpet cleaning cost is high and you will have to pay some additional money for every visit of our technicians (due to time and cost of travel, parking, carrying of heavy equipment etc.). So once you pay the initial cost, adding extra services is significantly more affordable.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy health benefits</h3>
                        <Typography variant="body">Your rug, carpet floor covering, and furniture are some of those items that accumulate lots of dust, microbes, and particles of dirt that are potential causes for health issues. They might provoke different reactions, skin problems, and allergies, and the risk is getting higher if they are not taken care of. So depending on the amount of traffic that you have on your rugs, carpets, and upholstery, our carpet cleaning specialist advises you to consider using professional carpet cleaning services in London once a year. In case the traffic is really, really heavy, it is in your best interest to do it more frequently.</Typography>
                    </li>
                </ol>
            </div>

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Reviews from our professional carpet cleaning in Hammersmith and Fulham</h2>

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

            <h2 class="line-height-12 md-line-height-14">FAQ regarding our carpet cleaning services in Hammersmith and Fulham</h2>

            <FaqSection />

            <FleurDivider />

            <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
                <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
                <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
            </div>

        </>
    );
}
