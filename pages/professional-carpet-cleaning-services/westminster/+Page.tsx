
import "solid-slider/slider.css";
import { FacebookLikeGallery } from '../../../components/FacebookLikeGallery';
import { RotatingBanners } from '../../../components/RotatingBanners';
import { createCollapsable } from "../../../components/Collapsable";
import { Typography } from '../../../components/Typography';
import { ReviewSlider, StarReview } from '../../../components/ReviewSlider';
import { FOTSlider, FOTSliderContainer } from '../../../components/FrequentlyOrderedTogether';

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
                    src="/assets/service-pics/professional-carpet-cleaning-services-video.MP4"
                    type="video/mp4"
                />
            </video>
        </div>
    );
};

function FleurDivider() {
    return (
        <div class="m-auto my-30 md-my-36 position-relative w-80%">
            <div
                class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
            <div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img
                class="position-absolute max-w-7 mx-1.8" src="/assets/output-onlinepngtools.png" /></div>
        </div>
    );
}

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
                <Typography variant="body">We would appreciate it if you would move small, fragile, or valuable items of furniture for insurance reasons, such as lamps and ornaments. If possible, please put them well out of the way before we arrive in an area that is not going to be disturbed by cleaning. We would like to have floors free from any obstructions. We will assist with moving other light furniture such as chairs, armchairs, and tables during the cleaning and put them back in place. If heavy furniture needs to be moved (such as sofas, beds, wardrobes, cupboards, etc.), we will charge you extra. The reason is that this will require additional time and effort by our technician, and he will receive an additional reward for it. Our aim is for the whole process to be as stress-free for you as possible.</Typography></li>
            <li>
                <Typography variant="h3">4. What if I live on the 4th floor or higher and I have no lift?</Typography>
                <Typography variant="body">Since our equipment is very heavy (50kg+), when our technician has to carry it manually, we charge extra for every additional floor. The reason is that this will usually take a lot of time, and our technicians tire faster, therefore that day they can not do as much work as they usually do.</Typography></li>
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
                <Typography variant="h3">7. Does professional carpet cleaning really work?</Typography>
                <Typography variant="body">Yes, professional carpet cleaning definitely works, thanks to the expertise, equipment, products and methods provided by professional carpet cleaning companies. Such carpet cleaning companies like Fine Carpet Cleaning London will provide quality carpet cleaning services and will be very effective in removing tough stains, odours and germ buildup, which cannot be eliminated with regular cleaning.</Typography>
            </li>
            <li>
                <Typography variant="h3">8. Do you offer cheap carpet cleaning?</Typography>
                <Typography variant="body">The truth is that we, from Fine Carpet Cleaning London, do not offer cheap carpet cleaning. The reason is that we want to ensure high-quality of our carpet cleaning services which involves higher expenses for us.</Typography>
            </li>
            <li>
                <Typography variant="h3">9. Is it possible to book carpet cleaning online?</Typography>
                <Typography variant="body">Yes, professional carpet cleaning definitely works, thanks to the expertise, equipment, products and methods provided by professional carpet cleaning companies. Such carpet cleaning companies like Fine Carpet Cleaning London will provide quality carpet cleaning services and will be very effective in removing tough stains, odours and germ buildup, which cannot be eliminated with regular cleaning.</Typography>
            </li>
            <li>
                <Typography variant="h3">10. Does carpet cleaning kill bed bugs?</Typography>
                <Typography variant="body">The short answer is yes, because the special equipment used for steam cleaning can eliminate bed bugs due to the high temperature it produces. However if your carpet is infested with bed bugs, hiring a good carpet cleaning company to steam clean your carpets does not guarantee their complete extinction. The reason is that it's very likely that the bed bugs do not reside only in the carpet but also in beds, mattresses, other furnishings and so on.</Typography>
                <Typography variant="body">In case you have bed bug infestation in your property we highly recommend you to call a pest control company first. Once they perform a complete disinfestation of your property you are good to go with a professional carpet cleaning service.</Typography>
            </li>
            <li>
                <Typography variant="h3">11. Does carpet cleaning ruin carpets?</Typography>
                <Typography variant="body">No, professional carpet cleaning in London will not damage the carpet. Despite popular belief, you cannot clean your carpets too often, and steam cleaning them frequently will not dry them out or break the carpet fibres. What will harm your carpets or rugs, however, is regular cleaning with improper methods, as well as products and chemicals being used that are not tried-and-true. Some companies offer cheap carpet cleaning services and in order to provide such a low price, they might decide to decrease the quality of the service or the quality of the products they use for cleaning. But if the chemicals used for the cleaning are safe, like ours in Fine Carpet Cleaning London, then you should not worry that this might cause any damage to your carpets.</Typography>
                <Typography variant="body">While improper cleaning can harm your carpets, frequent hot water extraction will not. A good steam cleaning can prolong the lifespan of your carpets. Here are a few advantages of the regular use of steam cleaning and other carpet cleaning services:</Typography>
                <ul class="ml--5" style="list-style: initial;">
                    <Typography variant="li">
                        <p>Carpet cleaning makes your carpet healthier;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>Steam cleaning keeps the carpet hygienic;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>Cleaning helps carpet fibres maintain their shape;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>Cleaning maintains the carpet warranty;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>Steam cleaning restores the colour of carpets.</p>
                    </Typography>
                </ul>
                <Typography variant="body">Routine cleaning has many benefits for your carpet. In addition to making your house beautiful, regular affordable carpet cleaning like the one we offer helps extend the lifespan of one of your home's most valuable assets.</Typography>
                <Typography variant="body">However, in special cases when the carpet is made of natural fibres (such as sisal, jute, seagrass etc.) we do not recommend steam cleaning, but dry cleaning, as the heat and steam will damage the carpet.</Typography>
                <Typography variant="body">If you are not sure what type of cleaning method is most appropriate for your carpet, feel free to contact us to get professional advice.</Typography>
            </li>
            <li>
                <Typography variant="h3">12. In which wards of Westminster do you do carpet cleaning?</Typography>
                <Typography variant="body">We do:</Typography>
                <ul class="ml--5" style="list-style: initial;">
                    <Typography variant="li">
                        <p>carpet cleaning in Abbey Road;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Bayswater;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Church Street;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Harrow Road;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Hyde Park;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Knightsbridge & Belgravia;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Lancaster Gate;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Little Venice;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Maida Vale;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Marylebone;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Pimlico North;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Pimlico South;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Queen's Park;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Regent's Park;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in St James's;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Vincent Square;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in West End;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in Westbourne;</p>
                    </Typography>
                </ul>
            </li>
            <li>
                <Typography variant="h3">13. In which postcodes of Westminster do you do carpet cleaning?</Typography>
                <Typography variant="body">We perform:</Typography>
                <ul class="ml--5" style="list-style: initial;">
                    <Typography variant="li">
                        <p>carpet cleaning in SW1;</p>
                    </Typography>
                    <Typography variant="li">
                        <p>carpet cleaning in SW95;</p>
                    </Typography>
                </ul>
                <Typography variant="body">Anyhow, no matter in which borough of Westminster you are located, our local carpet, rug and upholstery cleaning teams are available to respond quickly to your needs, tailoring the services to your personal preferences.</Typography>
            </li>
        </Entry>
    </Container>
}

export default function Page() {

    return (
        <>
            <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Carpet cleaning Westminster</h1>
            <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full"
                src="/assets/Професионално почистване на заведения.jpg" alt=""
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">Why to use professional carpet cleaning services in Westminster</h2>
            <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
                <h3>Benefits</h3>
                <p>Fine Carpet Cleaning London provides a variety of skilled carpet cleaning services. The utilisation of these kinds of solutions has the following benefits:</p>
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
                <p>The standard process for booking our skilled carpet cleaning services in Westminster:</p>
                <ul>
                    <li class="ml--5">
                        <p>You contact us.</p>
                    </li>
                    <li class="ml--5">
                        <p>We advise you on the most appropriate services based on your needs.</p>
                    </li>
                    <li class="ml--5">
                        <p>We offer you a carpet cleaning estimate.</p>
                    </li>
                    <li class="ml--5">
                        <p>If you accept our conditions, we schedule a visit.</p>
                    </li>
                    <li class="ml--5">
                        <p>Our technician will come to your home and clean your carpets.</p>
                    </li>
                </ul>
                <h3>What do we offer:</h3>
                <p>The professional carpet cleaning services that we provide in Westminster include:</p>
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
                        href="/professional-carpet-cleaning-services/fast-dry">Fast dry carpet cleaning services</a></li>
                    <li class="ml--5"><a
                        class="color-paper-link-hover hover-color-paper-link:hover font-size-17.5px line-height-8 word-spacing--0.12 tracking--0.04"
                        href="/services">All of our services</a></li>
                </ul>
            </div>

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">Equipment and products we use</h2>
            <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
                <ol style="counter-reset: ordered; list-style: none;">
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Highly-efficient extractors</h3>
                        <Typography variant="body">The machines we utilise have been picked after an uncompromising process. First, we assessed all major brands available on the UK market. Second, we chose the most effective ones among them - "<a
                            class="color-paper-link hover-color-paper-link-hover:hover"
                            href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/"
                            target="_blank" rel="noopener">Mytee</a>" (leading US manufacturer) and "<a
                                class="color-paper-link hover-color-paper-link-hover:hover"
                                href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank"
                                rel="noopener">Airflex</a>" (top UK manufacturer). Third, our engineer further improved them to maximise their performance.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
                        <Typography variant="body">We employ a high-filtration dual engine vacuum cleaner, which we consider the top choice on the market. It's engineered for high-performance professional carpet cleaning. One of the double-motors pounds at the carpet while the other one removes any loose dirt, dry soil, and dust.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning products</h3>
                        <Typography variant="body">When it comes to cleaning products, we utilise more than 20 various detergents, because we understand that every scenario demands an individual approach. We have assessed almost all detergents available on the market and chose those giving the best results. Among them are items from the brands "Alltec", "Prochem", "Chemspec", "Solution World of Clean", "TMF", etc.</Typography>
                    </li>
                </ol>
            </div>

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">Pictures from our professional carpet cleaning services in Westminster</h2>

            <FacebookLikeGallery imgs={[
                { src: "/assets/service-pics/carpet-cleaning-specialists-3.jpg", alt: "carpet-cleaning-specialists-1" },
                { src: "/assets/service-pics/carpet-cleaning-specialists-1.jpg", alt: "carpet-cleaning-specialists-3" },
                { src: "/assets/service-pics/carpet-cleaning-specialists-2.jpg", alt: "carpet-cleaning-specialists-2" },
                { src: "/assets/service-pics/professional-carpet-cleaning-services-ba-1.jpeg", alt: "professional-carpet-cleaning-services-ba-1" },
                { src: "/assets/service-pics/professional-carpet-cleaning-services-ba-2.jpg", alt: "professional-carpet-cleaning-services-ba-2" },
                { src: "/assets/service-pics/professional-carpet-cleaning-services-ba-3.jpg", alt: "professional-carpet-cleaning-services-ba-3" },
                { src: "/assets/service-pics/professional-carpet-cleaning-services-ba-4.jpg", alt: "professional-carpet-cleaning-services-ba-4" },
                { src: "/assets/service-pics/professional-carpet-cleaning-services-ba-5.jpg", alt: "professional-carpet-cleaning-services-ba-5" },
            ]} />

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">Video from our professional carpet cleaning services in Westminster</h2>

            <VideoPlayer></VideoPlayer>

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">Prices of our professional carpet cleaning services in Westminster</h2>


            <div class="my-20 pt-8 pb-6 px-8 md-px-14 b-rd-3 bg-paper line-height-7.5 md-line-height-8 text-justify font-size-4 md-font-size-4.4"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
                <div class="mb--3 font-size-5.5"><strong>Are you pissed off by the pet hair?</strong></div>
                <br></br>
                Now you can request pet hair removal as an additional service to the booked cleaning for a small extra
                charge. Don't forget to request it when booking because telling us at the moment of cleaning causes
                delays for the technicians and messes up the schedule.
                <br></br>
                <strong id="price_table">Deodorising - Free of charge - just notify us when booking.</strong></div>

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
                        <td class="b-rd-lb-3 b-rd-rb-3 bg-#2e5c47" colspan="3"
                            style="box-shadow: 0px 20px 20px 1px rgb(247 247 247/ 100%);"><p
                                class="font-size-3.5 md-font-size-4 px-5 md-my-7 c-paper line-height-6 word-spacing-0.5">*All
                                prices depend on the quantity of the order, degree of contamination and access.
                                <br></br>**Final price after contacting us.</p></td>
                    </tr>
                </tbody>
            </table>

            <button
                class="outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-250px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9 my-20 mx-auto"
                style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">
                <a href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">Frequently ordered together</h2>

            <FOTSlider>
                <FOTSliderContainer
                    img="/assets/Професионално почистване на заведения.jpg"
                    alt=""
                    title="Professional carpet steam cleaning"
                    href=""
                    description=""
                />
                <FOTSliderContainer
                    img="/assets/Професионално почистване на заведения.jpg"
                    alt=""
                    title="Professional leather sofa cleaning"
                    href=""
                    description=""
                />
                <FOTSliderContainer
                    img="/assets/Професионално почистване на заведения.jpg"
                    alt=""
                    title="Upholstery stain protection"
                    href=""
                    description=""
                />
            </FOTSlider>

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">Our carpet cleaning specialists advise:</h2>
            <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
                <ol style="counter-reset: ordered; list-style: none;">
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Use a stain protector</h3>
                        <Typography variant="body">Our carpet cleaning expert recommends always adding stain protector to your carpet and upholstery if you can manage it. It saves a lot of money on professional stain removal services. Why? Because it protects the fabric against penetration of liquids that cause lasting stains and permanent damage to the carpet and furniture. Discover more about the advantages of using <a
                            class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">stain protection services</a>.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Use a professional stain removal service</h3>
                        <Typography variant="body">Our carpet cleaning expert recommends that if your carpet or upholstery has been stained, it's best to look for a professional stain removal company. The reason is that when you try to clean it yourself or leave the stain to dry, the fibres might get damaged and the stain probably won't come off completely. Attempting to clean the stain yourself will likely seal it in, rather than remove it. This will then make it harder or even impossible for a professional carpet cleaning company to get rid of it. So, booking a <a class="color-paper-link hover-color-paper-link-hover:hover"
                            href="/professional-stain-removal-services">professional stain removal service</a> today from an expert carpet cleaning company can save your carpet or furniture that's worth a lot of money.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Take informed decisions</h3>
                        <Typography variant="body">Our carpet cleaning expert recommends you take a look at the other services we provide. By getting to know <a
                            class="color-paper-link hover-color-paper-link-hover:hover" href="/services">all of our services</a>, you can make informed choices about what else you might need. This lets you remember any specific services you may have forgotten about or discover new services that you didn't even know were available.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Combine different services</h3>
                        <Typography variant="body">It's in your best interest to combine different services instead of having them done separately. Why? Because this will save you a lot of money. The reason is that the initial professional carpet cleaning cost is high and you'll have to pay some extra money for each visit of our technicians (due to time and cost of travel, parking, carrying of heavy machinery etc.). So once you pay the initial cost, adding extra services is much cheaper.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy health benefits</h3>
                        <Typography variant="body">Your rug, carpet floor covering, and upholstery are some of those items that collect lots of dust, microorganisms, and particles of dirt that are potential causes for health problems. They might provoke different reactions, skin issues, and allergies, and the risk gets higher if they are not taken care of. So depending on how much traffic you have on your rugs, carpets, and upholstery, our carpet cleaning expert recommends considering using professional carpet cleaning services in Westminster once a year. If the traffic is really, really heavy, it's best to do it more often.</Typography>
                    </li>
                </ol>
            </div>

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">Reviews from our professional carpet cleaning in Westminster</h2>

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

            <h2 class="line-height-12 md-line-height-14">FAQ regarding our carpet cleaning services in Westminster</h2>

            <FaqSection />

            <FleurDivider></FleurDivider>

            <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
                <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
                <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
            </div>

        </>
    );
}
