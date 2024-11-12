function SitemapMenuItem(props: { href: string, text: string }) {
    return <a href={props.href} class="b-solid b-2px c-paper-inv hover-color-brand-second-action:hover font-normal lg-font-size-4 md-font-size-4 font-size-4.5 font-sans">{props.text}</a>
}

export default function Page() {

    return (
        <>
            <h1>Sitemap</h1>
            <div class="sitemap">
                <nav class="primaryNav">
                    <ul>
                        <li class="has-submenu"><a href="/">Home Page</a>
                        <ul class="first-menu">
                        <li><a href="/services">Services</a></li>
                        <li><a href="/prices">Prices</a></li>
                        <li><a href="/reviews">Reviews</a></li>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="/areas-we-cover">Areas we cover</a></li>
                        <li><a href="/contact-us">Contact us</a></li>
                        <li><a href="/feedback">Feedback</a></li>
                        <li class="has-submenu">
                            <a href="/professional-carpet-cleaning-services">Professional carpet cleaning services</a>
                            <ul class="submenu">
                                <li><a href="/professional-carpet-cleaning-services/steam">Steam Cleaning</a></li>
                                <li><a href="/professional-carpet-cleaning-services/dry">Dry Cleaning</a></li>
                                <li><a href="/professional-carpet-cleaning-services/eco-friendly">Eco-Friendly Cleaning</a></li>
                                <li><a href="/professional-carpet-cleaning-services/same-day">Same Day Cleaning</a></li>
                                <li><a href="/professional-carpet-cleaning-services/residential">Residential Cleaning</a></li>
                                <li><a href="/professional-carpet-cleaning-services/fast-dry">Fast Dry Cleaning</a></li>
                                <li class="has-submenu">
                                    <a href="/professional-carpet-cleaning-services/commercial">Commercial</a>
                                    <ul class="sub-submenu">
                                        <li><a href="/professional-carpet-cleaning-services/commercial/office">Office Cleaning</a></li>
                                    </ul>
                                </li>
                                <li><a href="/professional-carpet-cleaning-services/city-of-london">City of London Cleaning</a></li>
                                <li><a href="/professional-carpet-cleaning-services/westminster">Westminster Cleaning</a></li>
                                <li class="collapsed_item"><a href="/professional-carpet-cleaning-services/hammersmith-fulham">Carpet cleaning Hammersmith and Fulham</a></li>
                                <li class="collapsed_item"><a href="/professional-carpet-cleaning-services/kensington-chelsea">Carpet cleaning Kensington and Chelsea</a></li>
                                <li class="collapsed_item"><a href="/professional-carpet-cleaning-services/wandsworth">Carpet cleaning Wandsworth</a></li>
                                <li class="collapsed_item"><a href="/professional-carpet-cleaning-services/lambeth">Carpet cleaning Lambeth</a></li>
                                <li class="collapsed_item"><a href="/professional-carpet-cleaning-services/tower-hamlets">Carpet cleaning Tower Hamlets</a></li>
                                <li class="collapsed_item"><a href="/professional-carpet-cleaning-services/southwark">Carpet cleaning Southwark</a></li>
                            </ul>
                        </li>
                        <li class="has-submenu">
                            <a href="professional-upholstery-cleaning-services">Professional upholstery cleaning services</a>
                            <ul class="submenu">
                                <li><a href="/professional-upholstery-cleaning-services/furniture">Professional furniture cleaning services</a></li>
                                <li><a href="/professional-upholstery-cleaning-services/mattress">Mattress cleaning services</a></li>
                                <li><a href="/professional-upholstery-cleaning-services/pillow">Pillow cleaning services</a></li>
                                <li class="has-submenu">
                                    <a href="/professional-upholstery-cleaning-services/sofa">Sofa</a>
                                    <ul class="sub-submenu">
                                        <li><a href="/professional-upholstery-cleaning-services/sofa/leather">Professional leather sofa cleaning services</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="has-submenu">
                            <a href="/professional-upholstery-cleaning-services">Professional upholstery cleaning services</a>
                            <ul class="submenu">
                                <li><a href="/professional-rug-cleaning-services/steam">Rug steam cleaning service</a></li>
                                <li><a href="/professional-rug-cleaning-services/dry">Dry rug cleaning service</a></li>
                            </ul>
                        </li>
                        <li><a href="/professional-stain-removal-services">Professional stain removal services</a></li>
                        <li><a href="/stain-protection-services">Stain protection services</a></li>
                        <li><a href="/antiviral-sanitisation-services">Antiviral sanitisation services</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/professional-sofa-cleaning-services-the-ultimate-choice-for-homes-with-pets">Professional sofa cleaning services: the ultimate choice for homes with pets</a></li>
                        <li><a href="/does-steam-carpet-cleaning-neutralize-dog-smell">Does steam carpet cleaning neutralize dog smell?</a></li>
                        <li><a href="/3-different-ways-to-handle-carpet-tiles-cleaning">3 Different Ways To Handle Carpet Tiles Cleaning</a></li>
                        <li><a href="/do-carpets-get-dirty-faster-after-professional-carpet-cleaning-london">Do carpets get dirty faster after professional carpet cleaning London?</a></li>
                        <li><a href="/what-are-the-differences-between-conventional-carpet-cleaning-and-eco-friendly-carpet-cleaning">What are the differences between conventional carpet cleaning and eco-friendly carpet cleaning?</a></li>
                        <li><a href="/what-are-carpet-allergies-and-how-can-steam-carpet-cleaning-prevent-them">What are carpet allergies, and how can steam carpet cleaning prevent them?</a></li>
                        <li><a href="/how-to-use-white-vinegar-to-clean-carpet-stains">How To Use White Vinegar To Clean Carpet Stains</a></li>
                        <li><a href="/how-to-clean-a-carpet-with-bicarbonate-of-soda">How To Clean A Carpet With Bicarbonate Of Soda</a></li>
                        <li><a href="/milk-stains-on-the-carpet-how-to-cope-with-them">Milk Stains On The Carpet — How To Cope With Them</a></li>
                        <li><a href="/carpet-cleaning-kills-fleas">Carpet Cleaning Kills Fleas</a></li>
                        <li><a href="/how-to-clean-wool-carpets-yourself">How To Clean Wool Carpets Yourself</a></li>
                        <li><a href="/should-you-scotchgard-after-carpet-cleaning">Should You Scotchgard After Carpet Cleaning</a></li>
                        <li><a href="/how-to-clean-carpet-dog-poop">How To Clean Carpet Dog Poop</a></li>
                        <li><a href="/what-is-the-best-carpet-spot-cleaner-solution">What Is The Best Carpet Spot Cleaner Solution</a></li>
                        <li><a href="/what-is-carpet-bonnet-cleaning">What Is Carpet Bonnet Cleaning</a></li>
                        <li><a href="/carpet-cleaning-spray-do-they-really-work">Carpet Cleaning Spray — Do They Really Work</a></li>
                        <li><a href="/what-vacuum-cleaner-is-best-for-frieze-carpet">What Vacuum Cleaner Is Best For Frieze Carpet</a></li>
                        <li><a href="/best-carpet-steam-cleaner-machines">Best Carpet Steam Cleaner Machines For Your Home</a></li>
                        <li><a href="/how-to-get-milk-out-of-carpet">How To Get Milk Out of Carpet</a></li>
                        <li><a href="/best-way-to-clean-carpet">Best Way to Clean Carpet</a></li>
                        <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                        <li><a href="/sitemap">Sitemap</a></li>
                        <li><a href="/cookie-policy">Cookie and Privacy Policy</a></li>
                        </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}