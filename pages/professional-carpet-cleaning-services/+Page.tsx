import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import "solid-slider/slider.css";
import { createSignal } from 'solid-js';
import RiYoutubeFill from '~icons/ri/youtube-fill';
import { FacebookLikeGallery } from '../../components/FacebookLikeGallery';
import { createSlider, Slider, SliderButton, SliderProvider } from 'solid-slider';
import { RotatingBanners } from '../../components/RotatingBanners';
import { createCollapsable } from "../../components/Collapsable";
import { Typography } from '../../components/Typography';

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
                <SliderButton
                    class="cursor-pointer position-absolute top-41% left-0 bg-paper-inv bg-op-50 b-rd-bl-1 b-rd-tl-1 b-none px-0 py-1.5"
                    prev><RiArrowLeftSLine
                        class="-ml-1 font-size-10 c-paper hover-c-brand-light:hover transition-colors" /></SliderButton>
                <SliderButton
                    class="cursor-pointer position-absolute top-41% right-0 bg-paper-inv bg-op-50 b-rd-br-1 b-rd-tr-1 b-none px-0 py-1.5"
                    next><RiArrowRightSLine
                        class="-mr-1 font-size-10 c-paper hover-c-brand-light:hover transition-colors" /></SliderButton>
            </div>
        </SliderProvider>
    );
};

const GallerySliderMobile = () => {
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
                <SliderButton
                    class="cursor-pointer position-absolute top-41% left-0 bg-paper-inv bg-op-50 b-rd-bl-1 b-rd-tl-1 b-none px-0 py-1.5"
                    prev><RiArrowLeftSLine
                        class="-ml-1 font-size-10 c-paper hover-c-brand-light:hover transition-colors" /></SliderButton>
                <SliderButton
                    class="cursor-pointer position-absolute top-41% right-0 bg-paper-inv bg-op-50 b-rd-br-1 b-rd-tr-1 b-none px-0 py-1.5"
                    next><RiArrowRightSLine
                        class="-mr-1 font-size-10 c-paper hover-c-brand-light:hover transition-colors" /></SliderButton>
            </div>
        </SliderProvider>
    );
};

const VideoPlayer = () => {
    const [isStarted, setIsStarted] = createSignal(false);
    let videoRef: HTMLVideoElement;

    const startVideo = () => {
        videoRef.play();
        setIsStarted(true);
    };

    return (
        <div class="flex flex-justify-center flex-items-center">
            {!isStarted() && (
                <button
                    class="z-1 c-paper font-size-12 position-absolute cursor-pointer b-none bg-transparent"
                    onClick={startVideo}
                >
                    <RiYoutubeFill class="c-#ff0000 md-w-20 mt-5 md-mt-0 md-h-20 w-15 h-15" />
                </button>
            )}
            <video
                ref={(el) => (videoRef = el)}
                class="mt-10 b-rd-3"
                style="width: 100%; width: -moz-available; width: -webkit-fill-available; width: fill-available;"
                controls
                muted
            >
                <div class="vertical-top max-w-full font-size-4 color-paper-inv block">
                    <a
                        class="color-paper-inv block"
                        href="https://www.youtube.com/watch?v=zedTK_cCobY"
                        target="_blank"
                        rel="noopener"
                    >
                        Professional Carpet Cleaning London - Fine Carpet Cleaning
                    </a>
                </div>
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
            <div
                class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
            <div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img
                class="position-absolute max-w-7 mx-1.8" src="/assets/output-onlinepngtools.png" /></div>
        </div>
    );
}

export function FaqSection() {
    const { Container, Entry } = createCollapsable()
    return <Container>
        <Entry>
            <ul>
                <li>
                    <Typography variant="h3">Do you have a cancellation fee?</Typography>
                    <Typography variant="body">Yes, if you cancel on the day of the cleaning you will lose your deposit.</Typography>
                </li>
                <li>
                    <Typography variant="h3">Do I need to pay for congestion / parking charges?</Typography>
                    <Typography variant="body">Yes, the client is requested to arrange suitable parking space for our vehicles
                        within close proximity of the property and to cover any parking / congestion expenses if
                        applicable.</Typography></li>
                <li>
                    <Typography variant="h3">Do carpet cleaning services move furniture?</Typography>
                    <Typography variant="body">We would appreciate it if you would move small, fragile or valuable items of
                        furniture for insurance reasons, such as lamps and ornaments. If you can, please put them
                        well out of the way before we arrive in an area that is not going to be disturbed by
                        cleaning. We would like to have floors free from any obstructions. We will help with moving
                        other light furniture such as chairs, armchairs and tables, during the cleaning and put them
                        back in place. If heavy furniture has to be moved (such as sofas, beds, wardrobes, cupboards
                        etc.) we will charge you extra.The reason is that this will require additional time and
                        effort by our technician and he will receive an additional reward for it. Our goal is the
                        whole process to be as stress-free for you as possible.</Typography></li>
                <li>
                    <Typography variant="h3">What if I live on the 4th floor or higher and I have no lift?</Typography>
                    <Typography variant="body">Since our equipment is very heavy (50kg+), when our technician has to carry it
                        by hand we charge extra for every additional floor. The reason is that this will usually
                        take a lot of time and our technicians tire faster, therefore that day they can not do as
                        much work as they usually do.</Typography></li>
                <li>
                    <Typography variant="h3">Are you insured?</Typography>
                    <Typography variant="body">Yes, we are fully insured.</Typography></li>
            </ul>
        </Entry>
        <Entry>
            <ul>
                <li>
                    <Typography variant="h3">What happens if your cleaner damages anything while performing professional carpet cleaning
                        services?</Typography>
                    <Typography variant="body">We are fully insured and if an accident happens we have full coverage.</Typography>
                </li>
                <li>
                    <Typography variant="h3">How long does the process of professional carpet cleaning service take?</Typography>
                    <Typography variant="body">The professional carpet cleaning process depends on how soiled the carpet
                        is
                        and if it needs any stain removal treatments. It takes from 20 to 60 minutes per room.</Typography>
                </li>
                <li>
                    <Typography variant="h3">How long does it take for the carpet to get dry?</Typography>
                    <Typography variant="body">It depends on many factors like the type of the carpet, how dirty it is,
                        how
                        thick the pile is and if it needs a stain removal service or not.</Typography>

                    <Typography variant="body">Wool carpets absorb more water and dry slowly, between 10 and 12 hours. If
                        the
                        carpet is very dirty and we have to treat the carpet several times, the drying time might be
                        even longer.</Typography>

                    <Typography variant="body">Synthetic carpets dry faster, between 7 and 10 hours, and the above is
                        still
                        valid (it depends on how dirty it is and the number of required treatments).</Typography></li>
                <li>
                    <Typography variant="h3">Do you guarantee that after cleaning my carpet all stains will be removed?</Typography>
                    <Typography variant="body">No, because there are factors involved which are out of our control. Among
                        these factors are:</Typography></li>
                <li>
                    <p>How old are the stains?</p>
                </li>
                <li>
                    <p>What is the polluting agent that caused the stains?</p>
                </li>
                <li>
                    <p>What is the carpet made of?</p>
                </li>
                <li>
                    <p>Have the stains been treated improperly in the past?</p>
                </li>
                <li>
                    <p>Nevertheless, we can guarantee that we will do our best in order to eliminate all of the
                        stains on your carpet. This includes:</p>
                </li>
                <li>
                    <p>The use of high-end cleaning equipment;</p>
                </li>
                <li>
                    <p>The use of top-notch specially selected detergents;</p>
                </li>
                <li>
                    <p>Individual approach according to the different types of carpets and polluting agents.</p>
                </li>
                <li>
                    <Typography variant="h3">How soon can I expect a cleaner to visit me?</Typography>
                    <Typography variant="body">We will try to get you an appointment as soon as possible. Usually, we are
                        fully booked for 3 days ahead, but sometimes there are exceptions.</Typography></li>
                <li>
                    <Typography variant="h3">Can you give me a carpet cleaning quote over the phone or do you need to visit my
                        property?</Typography>
                    <Typography variant="body">Yes, we can give you an estimate over the phone, there is no need for us to
                        visit your property. Commercial properties however may require a site visit. You can also
                        get a carpet cleaning quote online.</Typography></li>
                <li>
                    <Typography variant="h3">What payment methods do you accept for your professional carpet cleaning service?</Typography>
                    <Typography variant="body">We accept debit / credit cards, bank transfer, and cash payments directly to
                        our
                        team.</Typography></li>
                <li>
                    <Typography variant="h3">Can you provide me with an invoice for your professional carpet cleaning services?</Typography>
                    <Typography variant="body">Yes, we will send you a receipt via email.</Typography></li>
                <li>
                    <Typography variant="h3">Are you qualified?</Typography>
                    <Typography variant="body">Yes, we are qualified and fully trained members of <a
                        class="color-paper-link hover-color-paper-link-hover:hover" href="https://trustedlocalcleaners.ncca.co.uk/listing/fine-carpet-cleaning-ltd/" target="_blank"
                        rel="noopener">NCCA (National Carpet Cleaners Association)</a> – the UK’s recognised
                        industry qualification.</Typography></li>
                <li>
                    <Typography variant="h3">How long have you been in the carpet cleaning business?</Typography>
                    <Typography variant="body">We have been operating since 2012. We have years of experience dealing with
                        residential and commercial customers and various types of carpets, rugs, upholstery and
                        stains. Through the years we have been striving to improve our services by:</Typography></li>
                <li>
                    <p>Upgrading our machines with better ones;</p>
                </li>
                <li>
                    <p>Frequently testing and selecting new detergents;</p>
                </li>
                <li>
                    <p>Always searching to improve our expertise by attending professional courses.</p>
                </li>
            </ul>
        </Entry>
        <Entry>
            <ul>
                <li>
                    <Typography variant="h3">Can you give me a discount?</Typography>
                    <Typography variant="body">Based on the fact that we provide high-quality carpet cleaning services, by
                        using the best machinery and over 20 different top-notch detergents, our carpet cleaning
                        prices are already the most competitive and the best on the market. In order to get the best
                        price we advise you to check out our price calculator. Then you will find out that combining
                        all the services you need at once will be cheaper than having them performed separately. The
                        reason is that the initial cost is high and you will have to pay extra for every single
                        visit of the technician since there are factors in place like time of travel, parking,
                        loading and unloading of heavy machinery etc.</Typography>
                </li>
                <li>
                    <Typography variant="h3">How often should a carpet be professionally cleaned?</Typography>
                    <Typography variant="body">Deep cleaning depends mainly on factors like how fast the carpet soils. On
                        average, a carpet should be cleaned at 12-month intervals. However, if you have pets,
                        children, high traffic on the carpet, a smoking habit or if you stain it a lot we recommend
                        using an expert carpet cleaning in London more often. You can contact us to get the best
                        professional carpet cleaning service in London or to seek expert advice.</Typography></li>
                <li>
                    <Typography variant="h3">How much does a professional carpet cleaning cost?</Typography>
                    <Typography variant="body">The cost of professional carpet cleaning depends on the quantity and size
                        of
                        the carpets, how soiled they are, the type of the carpets and how easy the access to the
                        carpets is. For more detailed information check out <a
                            class="color-paper-link hover-color-paper-link-hover:hover" href="/prices">carpet cleaning price list</a>.</Typography>
                </li>
                <li>
                    <Typography variant="h3">Do you offer cheap carpet cleaning?</Typography>
                    <Typography variant="body">The truth is that we, from Fine Carpet Cleaning London, do not offer cheap
                        carpet cleaning. The reason is that we want to ensure high-quality of our carpet cleaning
                        services which involves higher expenses for us.</Typography>
                </li>
                <li>
                    <Typography variant="h3">Do you think that your company is doing the best carpet cleaning in London?</Typography>
                    <Typography variant="body">We, from Fine Carpet Cleaning London, believe that we are bound to be among
                        the
                        best carpet cleaning companies in London. The reason is that we strongly believe in the
                        principle “No loss, no gain” and try to follow it when doing business. When we combine this
                        with another principle that we try to follow - “think about others first” - this guarantees
                        strive for constant improvement and delivery of better and better results. All of the above
                        gives us confidence that we definitely have a chance in the foreseeable future to offer the
                        best carpet cleaning in London.</Typography>
                </li>
                <li>
                    <Typography variant="h3">Do you offer stairs carpet cleaning services?</Typography>
                    <Typography variant="body">Yes, we do. You can check the prices for stairs carpet cleaning services in
                        our <a class="color-paper-link hover-color-paper-link-hover:hover" href="/prices"
                        >price list</a> or alternatively you can use our price calculator. If
                        you need more details regarding our stairs carpet cleaning services feel free to <a
                            class="color-paper-link hover-color-paper-link-hover:hover" href="/contact-us">contact us</a>.</Typography>
                </li>
                <li>
                    <Typography variant="h3">Do you offer luxury carpet cleaning in London?</Typography>
                    <Typography variant="body">Yes, we do. But as luxury carpet cleaning in London is a high-end service,
                        which deserves an individual approach to every client, you need to contact us in order to
                        obtain more information about it.</Typography>
                </li>
                <li>
                    <Typography variant="h3">Do you offer carpet cleaning and deodorising service?</Typography>
                    <Typography variant="body">Yes, we do offer carpet cleaning and deodorising service. Our company
                        culture
                        is to provide the best service we are capable of. That’s why we have put the extra effort
                        required to deodorise your carpets in our basic offer for you. </Typography>
                    <Typography variant="body">We recommend when you book our professional carpet cleaning services to
                        notify
                        us in advance that you would like to add deodorising service. Because of the strong smell
                        and allergic people, we do not deodorise all carpets. We perform the service at the request
                        of the client, and it is free of charge.</Typography>
                </li>
            </ul>
        </Entry>
        <Entry>
            <ul>
                <li>
                    <Typography variant="h3">Do you offer carpet odour removal services?</Typography>
                    <Typography variant="body">Yes, we offer carpet odour removal service. Each additional service will
                        cost
                        you a small extra charge because we pay over time to the cleaning staff. We advise you to
                        add carpet odour removal service to your cleaning appointment if you wish when booking. The
                        additional services discussed at the time of cleaning will slow down the work of the
                        technicians and they will not be able to keep to the work schedule. We cannot guarantee that
                        the odour will be 100% removed.
                    </Typography>
                </li>
                <li>
                    <Typography variant="h3">Do you offer berber carpet cleaning service?</Typography>
                    <Typography variant="body">Yes, we offer berber carpet cleaning service. If you need more information
                        about this service you have to <a
                            class="color-paper-link hover-color-paper-link-hover:hover" href="/contact-us">contact us</a>.
                    </Typography>
                </li>
                <li>
                    <Typography variant="h3">Does carpet cleaning remove scotchgard?</Typography>
                    <Typography variant="body">Yes, indeed, carpet cleaning services do remove Scotchgard and it should be
                        applied again afterwards. Stain protection wears out even from walking, so according to the
                        room and the amount of traffic the carpet receives the Scotchgard protection will last
                        between six months and a year and a half.
                    </Typography>
                </li>
                <li>
                    <Typography variant="h3">Does carpet cleaning remove dents?</Typography>
                    <Typography variant="body">No, the regular professional carpet cleaning does not remove dents.
                        Removing
                        dents requires the use of special equipment and it is a completely different service from
                        carpet cleaning. We at Fine Carpet Cleaning London do have the required equipment and we
                        offer carpet dent removal service.
                    </Typography>
                </li>
                <li>
                    <Typography variant="h3">Will cleaning a carpet make it fluffy again?</Typography>
                    <Typography variant="body">The short answer is "it depends".</Typography>
                    <Typography variant="body">In respect of the fluffiness the carpets can be segregated in two
                        categories:
                    </Typography>
                </li>
                <li>
                    <p>Those that are just not fluffy by design;</p>
                </li>
                <li>
                    <p>Carpets that used to be fluffy but now they are not (due to various reasons).</p>
                </li>
                <li>
                    <p>If your carpet belongs to the first category the question of restoring its fluffiness is not
                        applicable.</p>
                    <p class="ml--5">If your carpet belongs to the second category, we
                        are
                        able to offer a solution. We can restore the fluffiness of such a carpet by using a special
                        machine called CRB (counter-rotating brush). It’s fair to know that the use of this machine
                        requires extra effort and therefore is charged extra.</p>
                    <p class="ml--5">In case you are not sure in which category your
                        carpet belongs to, feel free to contact us for advice.</p>
                    <p class="ml--5">As restoring the fluffiness of a carpet is a very
                        niche thing to do, you need to ask specifically for it when you reach out to us.</p>
                </li>
                <li>
                    <Typography variant="h3">Can professional carpet cleaning remove stains?</Typography>
                    <Typography variant="body">Professional carpet washing service is indeed successful in removing stains
                        from your carpet. With years of experience and some of the best equipment in the industry,
                        we have high rates of success in stain removal. Unfortunately, we cannot guarantee that we
                        will be able to remove every stain. The reason is that the stain might be harder to remove
                        if it has been improperly treated previously or if it has been left to completely dry out.
                        However, we will let you know in advance whether we believe we can get a stain out or
                        not.
                    </Typography>
                </li>
                <li>
                    <Typography variant="h3">Does professional carpet cleaning lift the pile?</Typography>
                    <Typography variant="body">Yes, it does. Although it is not permanent, quality carpet cleaning
                        services
                        can help lift piles by removing dirt and debris and restoring the fibres to their original
                        state. The regular use of professional carpet washing services helps to maintain carpets’
                        appearance, comfort, and durability. Hot water extraction lifts the pile because the final
                        stage of the hot water extraction process is applying an extreme vacuum to the carpet to
                        extract the water that has been flushed through the fibres to clean them. During that
                        process, the pile will be raised.</Typography>
                    <Typography variant="body">In case your carpet is extremely matted we will have to use a special
                        machine
                        called CRB (counter-rotating brush) in order to be able to lift the pile. It’s fair to know
                        that the use of this machine requires extra effort and therefore is charged extra.
                    </Typography>
                </li>
                <li>
                    <Typography variant="h3">Does carpet cleaning ruin carpets?</Typography>
                    <Typography variant="body">No, expert carpet cleaning in London will not ruin the carpet. Despite
                        common
                        belief, you cannot clean your carpets too frequently, and steam cleaning them often will not
                        dry them out or break the carpet fibres. What will damage your carpets or rugs, however, is
                        routine cleaning with improper methods, as well as products and chemicals being used that
                        are not tried-and-true. Some companies offer cheap carpet cleaning services and in order to
                        provide such a low price, they might decide to decrease the quality of the service or the
                        quality of the products they use for cleaning. But if the chemicals used for the cleaning
                        are safe, like ours in Fine Carpet Cleaning London, then you should not worry that this
                        might cause any damage to your carpets.</Typography>

                    <Typography variant="body">While improper cleaning can damage your carpets, frequent hot water
                        extraction
                        will not. A good steam cleaning can extend the lifespan of your carpets. Here are a few
                        benefits of the regular use of steam cleaning and other carpet cleaning services:
                    </Typography>
                </li>
                <li>
                    <p>Carpet cleaning makes your carpet healthier.</p>
                </li>
                <li>
                    <p>Steam cleaning keeps the carpet hygienic.</p>
                </li>
                <li>
                    <p>Cleaning helps carpet fibres maintain their shape.</p>
                </li>
                <li>
                    <p>Cleaning maintains the carpet warranty.</p>
                </li>
                <li>
                    <p>Steam cleaning restores the colour of carpets.</p>
                </li>
                <li>
                    <p>Routine cleaning has many benefits for your carpet. In addition to making your house
                        beautiful, regular affordable carpet cleaning like the one we offer helps extend the
                        lifespan of one of your home’s most valuable assets.</p>
                    <p class="ml--5">However, in special cases when the carpet is made
                        of
                        natural fibres ( such as sisal, jute, seagrass etc.) we do not recommend steam cleaning, but
                        dry cleaning, as the heat and steam will damage the carpet.</p>
                    <p class="ml--5">If you are not sure what type of cleaning method
                        is
                        most appropriate for your carpet, feel free to contact us to get professional advice.</p>
                </li>
            </ul>
        </Entry>
        <Entry>
            <ul>
                <li>
                    <Typography variant="h3">Is it possible to book carpet cleaning online?</Typography>
                    <Typography variant="body">Yes, you can easily book a carpet cleaning service online through <a
                        class="color-paper-link hover-color-paper-link-hover:hover" href="/contact-us">our contact page</a>.</Typography>

                    <Typography variant="body">If you have any questions please do not hesitate to contact our operators
                        at
                        any time directly on our phone numbers or leave a callback request, so that they can call
                        you at a convenient time.</Typography></li>
                <li>
                    <Typography variant="h3">Can carpet cleaning cause allergies?</Typography>
                    <Typography variant="body">Any cleaning process can stir up particles and aggravate allergy symptoms.
                        Having a professional carpet cleaning agency clean for you can reduce increased exposure to
                        particulates.</Typography>

                    <Typography variant="body">Carpet cleaning is important for allergy sufferers for several reasons.
                        First,
                        carpets can trap dust, pollen, and other allergens that can trigger an allergic reaction.
                        Second, carpets can also harbour pet dander, mould, and other allergens that can be a
                        nightmare for allergy sufferers. Carpets that are not regularly cleaned can become breeding
                        grounds for dust mites, which are tiny creatures that thrive in warm, humid environments and
                        can cause serious allergic reactions in some people.</Typography>

                    <Typography variant="body">Anti-allergy carpet cleaning, at a minimum, requires some sort of steam or
                        chemical agent to loosen and remove debris from deep within the carpet fibres. Steam
                        cleaning, also known as the hot water extraction method, has been proven to reduce allergens
                        in carpets. However, the primary issue with steam cleaning is that it can be a problem when
                        not done properly. For example, if someone doesn’t properly remove all the water from the
                        carpet after cleaning, there could be issues related to moisture. Some allergy sufferers
                        claim that wet-cleaning methods could cause issues since dust mites and moulds thrive in
                        humid and warm conditions, but that happens if it takes a long time for the carpet to get
                        dry. Our steam carpet cleaning will leave the carpets completely dry in 7-14 hours
                        (depending on the type of carpet and the degree of pollution).</Typography>

                    <Typography variant="body">People who suffer from allergies should therefore make sure to have their
                        carpets cleaned on a regular basis, preferably by companies that professionally clean
                        carpets. Carpet cleaning companies like Fine Carpet Cleaning London use special machines and
                        solutions that can effectively remove allergens much better than regular carpet cleaning.
                        Vacuuming regularly is also important, as it can help to remove allergens from the
                        carpet.</Typography></li>
                <li>
                    <Typography variant="h3">Can professional carpet cleaning remove coffee stains?</Typography>
                    <Typography variant="body">Yes, quality carpet cleaning services can definitely remove coffee stains.
                        In
                        cases like stains from coffee with sugar, the carpet will have a growth of certain microbial
                        activities. Some cleaning methods that a professional carpet cleaning company provides, such
                        as steam carpet cleaning, effectively kill all those germs along with removing 100% of the
                        coffee stain.</Typography>

                    <Typography variant="body">Unfortunately, we cannot guarantee that we will be able to remove every
                        coffee
                        stain. The reason is that the coffee stain might be harder to remove if it has been
                        improperly treated previously or if it has been left to completely dry out. However, we will
                        let you know in advance whether we believe we can get a coffee stain out or not.</Typography></li>
                <li>
                    <Typography variant="h3">Is it worth getting carpets professionally cleaned?</Typography>
                    <Typography variant="body">Yes, without a doubt having your carpets cleaned by a carpet cleaning
                        agency
                        can have a massive impact on the look and the cleanliness of your house and also helps to
                        eliminate dirt, germ buildup and bacteria such as E. coli, Salmonella and many others.</Typography>

                    <Typography variant="body">There are many reasons why you should get a carpet cleaning in London at
                        least
                        once a year, such as prolonging the life of your carpet, health benefits and maintaining the
                        look of your carpet or rug.</Typography></li>
                <li>
                    <Typography variant="h3">What is professional carpet cleaning?</Typography>
                    <Typography variant="body">Professional carpet cleaning is performed by experts using special products
                        and
                        professional equipment and offers special carpet washing services (such as steam cleaning).
                        By hiring professionals, the carpet also dries as quickly as possible after cleaning, thanks
                        to the quality of the equipment used.</Typography>

                    <Typography variant="body">By having an affordable carpet cleaning like the one we provide, you are
                        ensuring that your carpets are going to receive state-of-the-art cleaning techniques and
                        quality cleaning solutions with thorough drying. “DIY” carpet cleaning almost always leaves
                        out the crucial drying techniques that can help prevent the growth of mould or mildew. </Typography>

                    <Typography variant="body">Professional carpet cleaners are well-qualified in their field and know
                        exactly
                        which products to use on different types of carpets. The cleaning technician will also be
                        able to clean your carpet without damaging its fibres, so your carpet looks as new without
                        losing any of its thickness. The fibres won’t be damaged in the process either.</Typography></li>
                <li>
                    <Typography variant="h3">Does professional carpet cleaning really work?</Typography>
                    <Typography variant="body">Yes, professional carpet cleaning definitely works, thanks to the
                        experience,
                        equipment, products and methods provided by professional carpet cleaning companies. Such
                        carpet cleaning companies like Fine Carpet Cleaning London will provide quality carpet
                        cleaning services and will be very effective in removing tough stains, odours and germ
                        buildup, which cannot be eliminated with regular cleaning.</Typography></li>
                <li>
                    <Typography variant="h3">What to do if my carpet is still dirty after a professional cleaning?</Typography>
                    <Typography variant="body">Some stains, like very old stains or ones that have been treated
                        improperly,
                        are very hard to eliminate, even with professional help. With years of experience and some
                        of the best equipment in the industry, we have high rates of success at stain removal.
                        Unfortunately, we cannot guarantee that we will be able to remove every stain, however, we
                        will let you know whether we believe we can get a stain out when giving you our
                        quotation.</Typography></li>
                <li>
                    <Typography variant="h3">Does carpet cleaning kill bacteria?</Typography>
                    <Typography variant="body">A professional carpet cleaning service from carpet cleaning companies can
                        kill
                        bacteria and other illness-causing germs that may be lurking in your carpet and rugs.</Typography>
                </li>
                <li>
                    <Typography variant="h3">Does carpet cleaning kill bed bugs?</Typography>
                    <Typography variant="body">The short answer is yes, because the special equipment used for steam
                        cleaning
                        can kill bed bugs due to the high temperature it produces. However if your carpet is
                        infested with bed bugs, hiring a good carpet cleaning company to steam clean your carpets
                        does not guarantee their complete extinction. The reason is that it’s very likely that the
                        bed bugs do not reside only in the carpet but also in beds, mattresses, other furnishings
                        and so on.</Typography>

                    <Typography variant="body">In case you have bed bug infestation in your property we highly recommend
                        you
                        to call a pest control company first. Once they perform a complete disinfestation of your
                        property you are good to go with a professional carpet cleaning service.</Typography></li>
            </ul>
        </Entry>
    </Container>
}

export default function Page() {

    return (
        <>
            <h1 class="mt-10 md-mt-17 font-size-12.5 md-font-size-16 md-line-height-18 line-height-16">Professional
                carpet cleaning services</h1>
            <div class="flex flex-justify-center"><img class="b-rd-3 md-mt-10 mt-2 max-w-full"
                src="/assets/Професионално почистване на заведения.jpg" alt=""
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 30%);" /></div>

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">Why to use professional carpet cleaning services</h2>
            <div class="mt-20 py-8 px-8 md-px-14 bg-paper b-rd-3"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
                <h3>Benefits</h3>
                <p>Fine Carpet Cleaning London offers a variety of professional carpet cleaning services. The use of
                    these types of services has the following benefits:</p>

                <ul>
                    <li class="ml--5">
                        <p>It is significantly cheaper to do regular maintenance than buying a new carpet.</p>
                    </li>
                    <li class="ml--5">
                        <p>It will prolong the life of your carpet.</p>
                    </li>
                    <li class="ml--5">
                        <p>It will maintain the look of your carpet.</p>
                    </li>
                    <li class="ml--5">
                        <p>It will maintain the hygiene of your carpet (which brings you health benefits).</p>
                    </li>
                </ul>
                <h3>Simple booking process:</h3>
                <p>The usual process of booking our professional carpet cleaning services in London:</p>

                <ul>
                    <li class="ml--5">
                        <p>You contact us.</p>
                    </li>
                    <li class="ml--5">
                        <p>We advise you which services will be best for you, based on your situation.</p>
                    </li>
                    <li class="ml--5">
                        <p>We give you a carpet cleaning quote.</p>
                    </li>
                    <li class="ml--5">
                        <p>If you are satisfied with our terms we schedule an appointment for you.</p>
                    </li>
                    <li class="ml--5">
                        <p>One of our technicians will visit your property and will clean your carpets.</p>
                    </li>
                </ul>
                <h3>What do we offer:</h3>
                <p>We are able to offer a variety of individual solutions for cleaning your carpet according to its
                    specific needs. Some of them are:</p>

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
                        <Typography variant="body">The machines we use have been chosen after a process of uncompromising
                            selection. First, we tested all major brands available on the UK market. Second, we selected
                            the most effective ones among them - “<a
                                class="color-paper-link hover-color-paper-link-hover:hover"
                                href="https://www.mytee.com/products/1003dx-speedster-deluxe-carpet-extractor/"
                                target="_blank" rel="noopener">Mytee</a>” (leading US manufacturer) and “<a
                                    class="color-paper-link hover-color-paper-link-hover:hover"
                                    href="https://www.clean-smart.co.uk/store/airflex-storm" target="_blank"
                                    rel="noopener">Airflex</a>” (top UK manufacturer). Third, our engineer further improved
                            them in order to maximise their performance.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Powerful vacuum cleaners</h3>
                        <Typography variant="body">We use a high-filtration twin motor vacuum cleaner, which we believe is the
                            best one on the market. It is designed for high-performance expert carpet cleaning. One of
                            the twin-motors pounds at the carpet while the other one sucks out any loose dirt, dry soil
                            and dust.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Carefully selected cleaning products</h3>
                        <Typography variant="body">In regard to cleaning products, we are using more than 20 different detergents,
                            because we know that every situation requires an individual approach. We have tested almost
                            all detergents available on the market and chose those giving the best results. Among them
                            are products of the brands “Alltec”, “Prochem”, “Chemspec”, “Solution World of Clean”,“TMF”
                            etc.</Typography>
                    </li>
                </ol>
            </div>

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">Pictures from our professional carpet cleaning services in
                London</h2>

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

            <h2 class="line-height-12 md-line-height-14">Video from our professional carpet cleaning services in
                London</h2>

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
                <strong>Deodorising - Free of charge - just notify us when booking.</strong></div>

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

            <GalerrySliderDesktop />
            <GallerySliderMobile />

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">Our carpet cleaning specialist advises:</h2>
            <div class="mt-20 py-8 px-12 md-px-14 bg-paper b-rd-3"
                style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
                <ol style="counter-reset: ordered; list-style: none;">
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Use a stain protector</h3>
                        <Typography variant="body">Our carpet cleaning specialist advises you to always add stain protector to
                            your carpet and upholstery if you can afford it. It saves a lot of money from professional
                            stain removal services. Why? Because it guards the fabric against penetration of liquids
                            that lead to lasting stains and permanent damage to the carpet and upholstery. <a
                                class="color-paper-link hover-color-paper-link-hover:hover" href="/stain-protection-services">Learn more about
                                the benefits of using stain protection services.</a></Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Use a professional stain removal service</h3>
                        <Typography variant="body">Our carpet cleaning specialist advises that if your carpet or upholstery has
                            been stained, it is in your best interest to search for a professional stain removal
                            company. The reason is that in the process of self-cleaning or leaving the stain to dry, the
                            fibres might be damaged and the stain is very likely to not entirely come off ever. The
                            attempt to clean the stain yourself will very likely seal off the stain, rather than remove
                            it. This will then make it harder or even impossible for a professional carpet cleaning
                            company to remove it. Thus, a <a class="color-paper-link hover-color-paper-link-hover:hover"
                                href="/professional-stain-removal-services">professional stain removal service</a> booked
                            today from an expert carpet cleaning company can rescue your carpet or upholstery that is
                            worth thousands.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Take informed decisions</h3>
                        <Typography variant="body">Our carpet cleaning specialist advises you to check out <a
                            class="color-paper-link hover-color-paper-link-hover:hover" href="/services">the other
                            services we offer.</a> By familiarising yourself with all of our services, you can make
                            informed decisions about what else you may need. This allows you to remember any particular
                            services you may have forgotten about or discover new services that you didn't even know
                            existed.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Combine different services</h3>
                        <Typography variant="body">It’s in your best interest to combine different services rather than having
                            them performed separately. Why? Because this will save you a significant amount of money.
                            The reason is that the initial professional carpet cleaning cost is high and you will have
                            to pay some extra money for every visit of our technicians (due to time and cost of travel,
                            parking, carrying of heavy machinery etc.). So once you pay the initial cost adding extra
                            services is significantly cheaper.</Typography>
                    </li>
                    <li class="ml--5">
                        <h3 class="ml--5 font-size-6 md-font-size-7">Enjoy health benefits</h3>
                        <Typography variant="body">Your rug, carpet floor covering and upholstery are some of those items that
                            accumulate lots of dust, microorganisms and particles of dirt that are potential causes for
                            health problems. They might provoke different reactions, skin problems and allergies and the
                            risk is getting higher if they are not taken care of. So depending on the amount of traffic
                            that you have on your rugs, carpets and upholstery, our carpet cleaning specialist advises
                            you to consider using professional carpet cleaning services in London once a year. In case
                            the traffic is really, really heavy it is in your best interest to do it more
                            frequently.</Typography>
                    </li>
                </ol>
            </div>

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">Reviews from our professional carpet cleaning</h2>

            <GalerrySliderDesktop />
            <GallerySliderMobile />

            <FleurDivider></FleurDivider>

            <h2 class="line-height-12 md-line-height-14">FAQ regarding our carpet cleaning services</h2>

            <FaqSection />

            <FleurDivider></FleurDivider>

            <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
                <button
                    class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9"
                    style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a
                        href="/services" class="c-paper font-size-5">SERVICES</a></button>
                <button
                    class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9"
                    style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a
                        href="/contact-us" class="c-paper font-size-5">REQUEST A QUOTE</a></button>
            </div>

            <RotatingBanners
                class="block md-hidden max-w-full mx-auto mt-20 mb-10"
                imgs={[
                    {
                        src: "https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/ShenYun-Orange-Desktop-ZaDimo.png",
                        alt: "",
                        url: ""
                    },
                    {
                        src: "https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/FalunDafa.org-Statue-Desktop-Ready950-250.png",
                        alt: "",
                        url: ""
                    },
                    {
                        src: "https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/ShenYunZuoPin-Orange-Desktop-ZaDimo.png",
                        alt: "",
                        url: ""
                    },
                    {
                        src: "https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/EpochTimes-Paper-Desktop-Ready950-250.png",
                        alt: "",
                        url: ""
                    },
                ]}
            />

            <RotatingBanners
                class="hidden md-block max-w-full mx-auto mt-30 mb-15"
                imgs={[
                    {
                        src: "https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/FalunDafa.org-BlueMan-Desktop_ZaDimo.png",
                        alt: "",
                        url: ""
                    },
                    {
                        src: "https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/ShenYunZuoPin-Boat-Desktop-ZaDimo.png",
                        alt: "",
                        url: ""
                    },
                    {
                        src: "https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/EpochTimes-Gradient-Desktop-Ready950-250.png",
                        alt: "",
                        url: ""
                    },
                    {
                        src: "https://finecarpetcleaning.co.uk/wp-content/uploads/2024/01/EpochTimes-Gradient-Desktop-Ready950-250.png",
                        alt: "",
                        url: ""
                    },
                ]}
            />

        </>
    );
}
