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
                <Typography variant="body">To ensure the safety of your belongings and for insurance purposes, we request that you move any small, delicate, or valuable furniture items, like lamps and ornaments, prior to our arrival. If feasible, please place them in an area that will not be affected by the cleaning process. We prefer to have the floors clear of any obstructions. Our team will assist in moving lighter furniture, such as chairs, armchairs, and tables, during the cleaning and will return them to their original positions. However, if heavy furniture (like sofas, beds, wardrobes, or cupboards) needs to be moved, we will charge an additional fee. This is because it will demand extra time and effort from our technician, who will be compensated accordingly. Our goal is to make the entire process as stress-free as possible for you.</Typography></li>
            <li>
                <Typography variant="h3">4. What if I live on the 4th floor or higher and I have no lift?</Typography>
                <Typography variant="body">Because our equipment weighs more than 50kg, we need to charge an additional fee for every extra floor our technician has to carry it by hand. The reason for this is that it usually takes a lot of time and makes our technicians tire out more quickly, which means they can't do as much work as they typically would that day.</Typography></li>
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
                <Typography variant="h3">7. How long does the process of professional carpet cleaning service take?</Typography>
                <Typography variant="body">The professional carpet cleaning process depends on how soiled the carpet is and if it needs any stain removal treatments. It takes from 20 to 60 minutes per room.</Typography>
            </li>
            <li>
                <Typography variant="h3">8. Can you give me a carpet cleaning quote over the phone or do you need to visit my property?</Typography>
                <Typography variant="body">Yes, we can give you an estimate over the phone, there is no need for us to visit your property. Commercial properties however may require a site visit. You can also get a carpet cleaning quote online.</Typography>
            </li>
            <li>
                <Typography variant="h3">9. Are you qualified?</Typography>
                <Typography variant="body">Yes, we are qualified and fully trained members of <a
                    class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank"
                    rel="noopener">NCCA (National Carpet Cleaners Association)</a> – the UK’s recognised industry qualification.</Typography>
            </li>
            <li>
                <Typography variant="h3">10. In which wards of Lambeth do you do carpet cleaning?</Typography>
                <Typography variant="body">We do:</Typography>
            </li>
            <li>
                <ul class="ml--5" style="list-style: initial;">
                    <Typography variant="li">
                        <p>carpet cleaning in Brixton Acre Lane;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Brixton North;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Brixton Rush Common;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Brixton Windrush;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Clapham Common & Abbeville;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Clapham East;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Clapham Park;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Clapham Town;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Gipsy Hill;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Herne Hill & Loughborough Junction;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Kennington;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Knight's Hill;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Myatt's Fields;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Oval;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in St Martin's;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Stockwell East;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Stockwell West & Larkhall;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Streatham Common & Vale;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Streatham Hill East;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Streatham Hill West & Thornton;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Streatham St Leonard's;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Streatham Wells;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Vauxhall;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Waterloo & South Bank;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in West Dulwich;</p>
                    </Typography>
                </ul>
            </li>
            <li>
                <Typography variant="h3">11. In which postcodes of Lambeth do you do carpet cleaning?</Typography>
                <Typography variant="body">We perform:</Typography>
                <ul class="ml--5" style="list-style: initial;">
                    <Typography variant="li">
                        <p>carpet cleaning in CR4;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SE1;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SE11;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SE19;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SE21;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SE24;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SE27;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SE5;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SW12;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SW16;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SW2;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SW3;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SW4;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SW8;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SW9;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SW95;</p>
                    </Typography>
                </ul>
                <Typography variant="body">Anyhow, no matter in which borough of Lambeth you are located, our local carpet, rug and upholstery cleaning teams are available to respond quickly to your needs, tailoring the services to your personal preferences.</Typography>
            </li>
        </Entry>
    </Container>
}

export default function Page() {

    return (
        <>
            <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Carpet cleaning Lambeth</h1>
            <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full"
                src="/assets/location-pages/lambeth/carpet-cleaning-loughborough.png" alt="carpet-cleaning-loughborough"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Why to use professional carpet cleaning services in Lambeth</h2>
            <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
                <h3>Benefits</h3>
                <p>Fine Carpet Cleaning London provides a variety of skilled carpet cleaning services. The utilisation of these kinds of services has the following benefits:</p>
                <ul>
                    <li class="ml--5">
                        <p>It is much cheaper to do routine maintenance than purchasing a new rug.</p>
                    </li>
                    <li class="ml--5">
                        <p>It will prolong the lifespan of your carpet.</p>
                    </li>
                    <li class="ml--5">
                        <p>It will maintain the appearance of your carpet.</p>
                    </li>
                    <li class="ml--5">
                        <p>It will keep the hygiene of your carpet (which offers you health benefits).</p>
                    </li>
                </ul>
                <h3>Simple booking process:</h3>
                <p>The common process for scheduling our skilled carpet cleaning services in London:</p>
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
                <p>The skilled carpet cleaning services we provide in Lambeth comprise:</p>
                <ul>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/professional-carpet-cleaning-services/steam">Expert carpet steam cleaning services</a></li>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/professional-carpet-cleaning-services/dry">Dry carpet cleaning services</a></li>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/professional-carpet-cleaning-services/eco-friendly">Eco-friendly carpet cleaning services</a></li>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/professional-carpet-cleaning-services/fast-dry">Rapid-dry carpet cleaning services</a></li>
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
                        <Typography variant="body">The machines we use are the result of an uncompromising selection process. We began by putting all the major UK brands through their paces. Then, we handpicked the most effective ones: "<a
                            class="color-paper-link hover-color-paper-link-hover:hover"
                            href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/"
                            target="_blank" rel="noopener">Mytee</a>" from the US and "<a
                                class="color-paper-link hover-color-paper-link-hover:hover"
                                href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank"
                                rel="noopener">Airflex</a>" from the UK. But we didn't stop there. Our engineer got to work, fine-tuning these machines to ensure they operate at their absolute best.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
                        <Typography variant="body">We rely on a state-of-the-art, high-filtration vacuum cleaner with twin motors, which we believe to be the most effective solution on the market. This powerful machine is purpose-built for expert carpet cleaning and delivers outstanding performance. While one of the twin motors vigorously agitates the carpet, the other motor works in tandem to remove any loose dirt, dry soil, and dust, leaving your carpets thoroughly cleaned.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning products</h3>
                        <Typography variant="body">We understand that effective cleaning often requires a customised solution, which is why we have an arsenal of over 20 different detergents at our disposal. After subjecting nearly all available detergents on the market to rigorous testing, we have selected those that consistently deliver the best possible results. Among our chosen products are those from reputable brands such as Alltec, Prochem, Chemspec, Solution World of Clean, TMF, and more.</Typography>
                    </li>
                </ol>
            </div>

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Pictures from our professional carpet cleaning services in Lambeth</h2>

            <FacebookLikeGallery imgs={[
                { src: "/assets/location-pages/lambeth/carpet-cleaning-in-vauxhall.jpg", alt: "carpet-cleaning-in-vauxhall" },
                { src: "/assets/location-pages/lambeth/carpet-cleaning-loughborough-junction.jpg", alt: "carpet-cleaning-loughborough-junction" },
                { src: "/assets/location-pages/lambeth/carpet-cleaning-in-loughborough-junction.jpg", alt: "carpet-cleaning-in-loughborough-junction" },
                { src: "/assets/location-pages/lambeth/carpet-cleaning-se5.jpg", alt: "carpet-cleaning-se5" },
                { src: "/assets/location-pages/lambeth/carpet-cleaning-sw8.jpg", alt: "carpet-cleaning-sw8" },
                { src: "/assets/location-pages/lambeth/carpet-cleaning-sw12.jpg", alt: "carpet-cleaning-sw12" },
                { src: "/assets/location-pages/lambeth/carpet-cleaning-thornton.jpg", alt: "carpet-cleaning-thornton" },
                { src: "/assets/location-pages/lambeth/carpet-cleaning-vauxhall.jpg", alt: "carpet-cleaning-vauxhall" },
                { src: "/assets/location-pages/lambeth/carpet-cleaning-west-dulwich.jpg", alt: "carpet-cleaning-west-dulwich" },
                { src: "/assets/location-pages/lambeth/thornton-carpet-cleaning.jpg", alt: "thornton-carpet-cleaning" },
            ]} />

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Video from our professional carpet cleaning services in Lambeth</h2>

            <VideoPlayer src='https://www.youtube.com/embed/TzLnwvx-JaI?enablejsapi=1&mute=1' />

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Prices of our professional carpet cleaning services in Lambeth</h2>


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
                        <Typography variant="body">Our carpet cleaning specialist highly recommends adding a stain protector to your carpet and upholstery whenever possible. This investment can save you a considerable amount of money on professional stain removal services down the line. Stain protectors function as a barrier, stopping liquids from seeping into the fabric and causing stubborn stains or irreversible damage to your carpet and upholstery. To learn more about the advantages of using <a
                            class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection services</a>, keep reading.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Use a professional stain removal service</h3>
                        <Typography variant="body">Our carpet cleaning expert recommends that if you've found a stain on your carpet or upholstery, your best bet is to find a professional stain removal company. Attempting to clean the stain on your own or letting it dry can harm the fibres and significantly decrease the likelihood of the stain being completely removed. When you try to clean the stain yourself, you're more likely to seal it in rather than eliminate it, making it more challenging or even impossible for a professional carpet cleaning company to tackle afterwards. Therefore, booking a <a class="color-paper-link hover-color-paper-link-hover:hover"
                            href="/professional-stain-removal-services">professional stain removal service</a> today from an expert carpet cleaning company can rescue your valuable carpet or upholstery.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Take informed decisions</h3>
                        <Typography variant="body">Our carpet cleaning specialist encourages you to check out the <a
                            class="color-paper-link hover-color-paper-link-hover:hover" href="/services">other services</a> we offer. By acquainting yourself with all of our services, you'll be in a better position to make informed decisions about what else you may require. This gives you the chance to recall any specific services you might have overlooked or come across new ones that you weren't even aware of.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Combine different services</h3>
                        <Typography variant="body">It's smart to combine different services rather than having them done separately. Why? Because it'll result in hefty savings for you. The starting cost of professional carpet cleaning is steep, and you'll have to pay a little extra each time our technicians come to your home (due to travel time, parking costs, lugging heavy equipment, etc.). So, once you've covered the initial expense, adding extra services becomes much more cost-effective.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy health benefits</h3>
                        <Typography variant="body">Rugs, carpets, and upholstered furniture are prone to collecting substantial amounts of dust, microbes, and dirt particles, which can potentially cause health concerns. These substances may trigger a range of reactions, skin problems, and allergies, and the risk increases if they are not regularly maintained. Our carpet cleaning expert suggests that, based on the level of foot traffic your rugs, carpets, and upholstery experience, you should consider employing professional carpet cleaning services in London once a year. However, if the traffic is exceptionally heavy, it's advisable to have them cleaned more frequently for your own well-being.</Typography>
                    </li>
                </ol>
            </div>

            <FleurDivider />

            <h2 class="line-height-12 md-line-height-14">Reviews from our professional carpet cleaning in Lambeth</h2>

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

            <h2 class="line-height-12 md-line-height-14">FAQ regarding our carpet cleaning services in Lambeth</h2>

            <FaqSection />

            <FleurDivider />

            <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
                <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
                <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
            </div>

        </>
    );
}
