import { Head } from "vike-solid/Head";

function FleurDivider() {
    return (
        <div class="m-auto my-30 md-my-36 position-relative w-80%">
            <div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
            <div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="/assets/output-onlinepngtools.png" /></div>
        </div>
    );
}

function AllServicesButton(props: { href: string; src: string; alt: string; children: HTMLElement | any; description: string }) {
    return (
        <a href={props.href}>
            <div class="flex md-flex-row flex-col my-15 border-style-solid b-gray-2 py-10" style="border-width: 1px 0px 1px 0px;">
                <img class="md-max-w-400px max-w-300px mx-auto b-rd-0 md-mr-8" src={props.src} alt={props.alt} style="height:200px; width:400px;"/>
                <div class="mb-2 max-w-350px md-max-w-800px b-rd-3 px-3 md-px-7 flex flex-col flex-justify-center">
                    <div class="flex flex-justify-left font-sans font-800 font-size-3 c-brand" style="letter-spacing: 1px;">BLOG</div>
                    <h3 class="flex flex-justify-center flex-content-center flex-wrap flex-items-center important-line-height-8 font-size-5 md-font-size-7 important-my-11 font-500 h-60px md-w-500px hover-c-brand:hover text-center mx-auto" style="letter-spacing: 0px;">
                        {props.children}
                    </h3>
                    <div class="font-sans font-size-4.2">{props.description}</div>
                </div>
            </div>
        </a>
    )
}

export default function Page() {
    return (
        <>
            <Head><meta name="robots" content="noindex"/></Head>

            <h1 class="md-mt-20 mt-10 md-mb-25 mb-0">Blog</h1>

            <AllServicesButton
                href="/professional-sofa-cleaning-services-the-ultimate-choice-for-homes-with-pets"
                src="/assets/blog/sofa-cleaning-services-02.jpg"
                alt="sofa-cleaning-services-02"
                description="Does your kitty love to spend the night on the couch? Or does your dog enjoy taking most of its resting time on your sofa? Having a pet is the …"
            >Professional sofa cleaning services: the ultimate choice for homes with pets
            </AllServicesButton>

            <AllServicesButton
                href="/does-steam-carpet-cleaning-neutralize-dog-smell"
                src="/assets/blog/steam-carpet-cleaning-1-.jpg"
                alt="steam-carpet-cleaning-1-"
                description="Getting rid of pet urine and residual dog smell is a common challenge among both professional carpet cleaners and their customers. Today, we are here to explain everything you need …"
            >Does steam carpet cleaning neutralize dog smell?
            </AllServicesButton>

            <AllServicesButton
                href="/do-carpets-get-dirty-faster-after-professional-carpet-cleaning-london"
                src="/assets/blog/carpet-cleaning-London-2.jpg"
                alt="carpet-cleaning-London-2"
                description="We’d love to say that faster dirt accumulation on carpets after cleaning is a hollow and ridiculous myth. Anyway, many people had reportedly experienced such issues, and we are here …"
            >Do carpets get dirty faster after professional carpet cleaning London?
            </AllServicesButton>

            <AllServicesButton
                href="/3-different-ways-to-handle-carpet-tiles-cleaning"
                src="/assets/blog/carpet-tiles-cleaning-2.jpg"
                alt="carpet-tiles-cleaning-2"
                description="Carpet tiles are a smart and widely adopted flooring alternative common among both residential and commercial users around the UK. They allow adaptable space management in rooms with non-standard shapes …"
            >3 Different Ways To Handle Carpet Tiles Cleaning
            </AllServicesButton>

            <AllServicesButton
                href="/what-are-carpet-allergies-and-how-can-steam-carpet-cleaning-prevent-them"
                src="/assets/blog/steam-carpet-cleaning-4-.jpg"
                alt="steam-carpet-cleaning-4-"
                description="You don’t need to be a medical professional in order to realize that allergies are among the most widespread health conditions nowadays. One study finds out that around 80% of …"
            >What are carpet allergies, and how can steam carpet cleaning prevent them?
            </AllServicesButton>

            <AllServicesButton
                href="/what-are-the-differences-between-conventional-carpet-cleaning-and-eco-friendly-carpet-cleaning"
                src="/assets/blog/eco-friendly-carpet-cleaning-4.jpg"
                alt="eco-friendly-carpet-cleaning-4"
                description="The most important thing to keep in mind when deciding between conventional carpet cleaning and eco-friendly carpet cleaning is that none of them can easily be labeled better or worse. …"
            >What are the differences between conventional carpet cleaning and eco-friendly carpet cleaning?
            </AllServicesButton>

            <AllServicesButton
                href="/how-to-clean-a-carpet-with-bicarbonate-of-soda"
                src="/assets/blog/carpet-tiles-cleaning-3.jpg"
                alt="carpet-tiles-cleaning-3"
                description="The abundance of carpet cleaning methods is great, but among the most successful techniques are those that use baking soda. The various detergents containing soda can successfully revive the freshness …"
            >How To Clean A Carpet With Bicarbonate Of Soda
            </AllServicesButton>

            <AllServicesButton
                href="/how-to-use-white-vinegar-to-clean-carpet-stains"
                src="/assets/blog/carpet-cleaning-London-4.jpg"
                alt="carpet-cleaning-London-4"
                description="The fact is that everyone would like to have a carpet in their home that adds extra contrast to the interior. However, what happens when an unpleasant cleanup occurs? Do …"
            >How To Use White Vinegar To Clean Carpet Stains
            </AllServicesButton>

            <AllServicesButton
                href="/milk-stains-on-the-carpet-how-to-cope-with-them"
                src="/assets/blog/Milk-Stains-On-The-Carpet-–-How-To-Cope-With-Them.png"
                alt="Milk-Stains-On-The-Carpet-–-How-To-Cope-With-Them"
                description="No stain is preferred, but in the case of a spill of milk on the carpet, you can even call yourself lucky. The dirt is white in color and one …"
            >Milk Stains On The Carpet – How To Cope With Them
            </AllServicesButton>

            <AllServicesButton
                href="/carpet-cleaning-kills-fleas"
                src="/assets/blog/Main3_ss.jpg"
                alt="Main3_ss"
                description="Fleas are those little enemies who constantly jump off the street on pets and then back home. They can cause slight irritations to the skin of a person and “settle …"
            >Carpet Cleaning Kills Fleas
            </AllServicesButton>

            <AllServicesButton
                href="/how-to-clean-carpet-dog-poop"
                src="/assets/blog/carpet-cleaning-barnet-1.jpg"
                alt="carpet-cleaning-barnet-1"
                description="Animals are defined as man’s best friends, but let’s not forget that they are not human beings. Homeowners most often choose a dog to raise in their home, at the …"
            >How To Clean Carpet Dog Poop
            </AllServicesButton>

            <AllServicesButton
                href="/how-to-clean-wool-carpets-yourself"
                src="/assets/blog/home-carpet-.jpg"
                alt="home-carpet-"
                description="Wool is a natural material preferred by consumers for warm clothing and socks in winter. Wool carpets are one of the most sought after accessories, albeit at a higher price, …"
            >How To Clean Wool Carpets Yourself
            </AllServicesButton>

            <AllServicesButton
                href="/should-you-scotchgard-after-carpet-cleaning"
                src="/assets/blog/3M-scotchgard-small1.jpg"
                alt="3M-scotchgard-small1"
                description="Do you want to reduce your costs for professional cleaning, or stop taking risks by applying any method to your carpet? Can you imagine that this is possible? Some households …"
            >Should You Scotchgard After Carpet Cleaning
            </AllServicesButton>

            <AllServicesButton
                href="/what-is-carpet-bonnet-cleaning"
                src="/assets/blog/cleaning-slider2.jpg"
                alt="cleaning-slider2"
                description="The home, villa, office and commercial premises are in constant need of cleaning. It’s nice if you have a housemaid, but in case you can’t afford such a service, then …"
            >What Is Carpet Bonnet Cleaning
            </AllServicesButton>

            <AllServicesButton
                href="/what-is-the-best-carpet-spot-cleaner-solution"
                src="/assets/blog/IMG_0486.jpg"
                alt="IMG_0486"
                description="The biggest disaster for a carpet is the spills of bright liquids, animal urine, grease, etc. However, many households do not give up on soft flooring. They invest in this …"
            >What Is The Best Carpet Spot Cleaner Solution
            </AllServicesButton>

            <AllServicesButton
                href="/what-vacuum-cleaner-is-best-for-frieze-carpet"
                src="/assets/blog/Hepa-Filter-Vacuum-Cleaner1.jpg"
                alt="Hepa-Filter-Vacuum-Cleaner1"
                description="The variety of carpet types is too large, but lately, there has been a strong interest in frieze carpets. Some users are unfamiliar with their appearance and are often confused …"
            >What Vacuum Cleaner Is Best For Frieze Carpet
            </AllServicesButton>

            <AllServicesButton
                href="/carpet-cleaning-spray-do-they-really-work"
                src="/assets/blog/Spray.jpg"
                alt="Spray"
                description="Carpet is a relatively expensive investment that is easy to be ruined if not maintained on a regular basis. Otherwise, it is a great accessory that brings warmth and comfort …"
            >Carpet Cleaning Spray – Do They Really Work
            </AllServicesButton>

            <AllServicesButton
                href="/best-carpet-steam-cleaner-machines"
                src="/assets/blog/rug-cleaning-London-on-site-2-1.jpg"
                alt="rug-cleaning-London-on-site-2-1"
                description="It is well known that cleaning carpets is quite a difficult task, so traditionally carpet cleaning companies take care of this activity. But things have changed a bit recently. There …"
            >Best Carpet Steam Cleaner Machines For Your Home
            </AllServicesButton>

            <AllServicesButton
                href="/how-to-get-milk-out-of-carpet"
                src="/assets/blog/carpet-milk-stain.jpg"
                alt="carpet-milk-stain"
                description="So… How To Get Milk Out of Carpet ? We all want to have a nice and clean carpet. We are trying our best to keep it clean, but this …"
            >How To Get Milk Out of Carpet
            </AllServicesButton>

            <AllServicesButton
                href="/best-way-to-clean-carpet"
                src="/assets/blog/carpet-cleaning.jpg"
                alt="carpet-cleaning"
                description="It is important of course to choose the right cleaning method for you carpet when you decide to do it. There are methods that you need to be careful with, …"
            >Best Way to Clean Carpet
            </AllServicesButton>

            <FleurDivider></FleurDivider>

            <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
                <a href="/prices"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">PRICES</button></a>
                <a href="/services"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
            </div>

        </>
    );
}
