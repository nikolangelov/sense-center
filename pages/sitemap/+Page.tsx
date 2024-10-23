function SitemapMenuItem(props: { href: string, text: string }) {
    return <a href={props.href} class="c-paper-inv hover-color-brand-second-action:hover font-normal lg-font-size-4 md-font-size-4 font-size-4.5 lg-py-1 md-py-2 py-1 font-sans">{props.text}</a>
}

export default function Page() {

    return (
        <>
            <div class="entry-content">
                <div class="flex flex-col">
                    <SitemapMenuItem href="/" text="Fine carpet cleaning"></SitemapMenuItem>
                    <div class="flex flex-row flex-items-center">
                        <SitemapMenuItem href="/services" text="Services"></SitemapMenuItem>
                        <ul id="services">
                            <li><SitemapMenuItem href="/professional-carpet-cleaning-services" text="Carpet Cleaning" />
                            </li>
                            <li><SitemapMenuItem href="/professional-upholstery-cleaning-services"
                                text="Upholstery Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-rug-cleaning-services" text="Rug Cleaning" /></li>
                            <li><SitemapMenuItem href="/antiviral-sanitisation-services" text="Antiviral Sanitisation" />
                            </li>
                            <li><SitemapMenuItem href="/professional-stain-removal-services" text="Stain Removal" /></li>
                            <li><SitemapMenuItem href="/stain-protection-services" text="Stain Protection" /></li>
                            <li><SitemapMenuItem href="/professional-carpet-cleaning-services/steam"
                                text="Carpet Steam Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-carpet-cleaning-services/dry"
                                text="Dry Carpet Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-carpet-cleaning-services/eco-friendly"
                                text="Eco-friendly Carpet Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-carpet-cleaning-services/same-day"
                                text="Same Day Carpet Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-carpet-cleaning-services/fast-dry"
                                text="Fast Dry Carpet Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-carpet-cleaning-services/commercial"
                                text="Commercial Carpet Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-carpet-cleaning-services/residential"
                                text="Residential Carpet Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-carpet-cleaning-services/commercial/office"
                                text="Office Carpet Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-upholstery-cleaning-services/sofa"
                                text="Sofa Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-upholstery-cleaning-services/sofa/leather"
                                text="Leather Sofa Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-upholstery-cleaning-services/furniture"
                                text="Furniture Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-upholstery-cleaning-services/mattress"
                                text="Mattress Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-upholstery-cleaning-services/pillow"
                                text="Pillow Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-rug-cleaning-services/steam"
                                text="Rug Steam Cleaning" /></li>
                            <li><SitemapMenuItem href="/professional-rug-cleaning-services/dry"
                                text="Dry Rug Cleaning" /></li>
                        </ul>
                    </div>
                    <SitemapMenuItem href="/prices" text="Prices" />
                    <SitemapMenuItem href="/reviews" text="Reviews" />
                    <SitemapMenuItem href="/about-us" text="About us" />
                    <SitemapMenuItem href="/areas-we-cover" text="Areas we cover" />
                    <SitemapMenuItem href="/blog" text="Blog" />
                    <SitemapMenuItem href="/contact-us" text="Contact us" />
                    <SitemapMenuItem href="/feedback" text="Feedback" />
                    <SitemapMenuItem href="/terms-and-conditions" text="Terms and conditions" />
                    <SitemapMenuItem href="/sitemap" text="Sitemap" />
                    <SitemapMenuItem href="/cookie-policy" text="Privacy policy" />
                </div>
            </div>
        </>
    );
}