function SitemapMenuItem(props: { href: string, text: string }) {
    return <a href={props.href} class="c-paper-inv hover-color-brand-second-action:hover font-normal lg-font-size-4 md-font-size-4 font-size-4.5 lg-py-1 md-py-2 py-1 font-sans">{props.text}</a>
}

export default function Page() {

    return (
        <>
            <div class="entry-content">
                <div class="flex flex-col">

                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/about-us/" text="Fine carpet cleaning"></SitemapMenuItem>
                    <div class="flex flex-row flex-items-center">
                        <SitemapMenuItem href="/index" text="Services"></SitemapMenuItem>
                        <ul id="services">
                            <li><SitemapMenuItem href="https://finecarpetcleaning.co.uk/corona-virus-disinfection/" text="Carpet cleaning services"></SitemapMenuItem></li>
                            <li><SitemapMenuItem href="https://finecarpetcleaning.co.uk/carpet-cleaning-london/" text="Upholstery cleaning services"></SitemapMenuItem></li>
                            <li><SitemapMenuItem href="https://finecarpetcleaning.co.uk/upholstery-cleaning-london/" text="Rug cleaning services"></SitemapMenuItem></li>
                            <li><SitemapMenuItem href="https://finecarpetcleaning.co.uk/rug-cleaning-london/" text="Antiviral sanitisation"></SitemapMenuItem></li>
                            <li><SitemapMenuItem href="https://finecarpetcleaning.co.uk/stain-removal-london/" text="Carpet stain protection"></SitemapMenuItem></li>
                            <li><SitemapMenuItem href="https://finecarpetcleaning.co.uk/steam-eco-cleaning-london/" text="Carpet stain removal"></SitemapMenuItem></li>
                        </ul>
                    </div>
                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/carpet-upholstery-steam-cleaning-prices-london/" text="Prices" ></SitemapMenuItem>
                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/reviews/" text="Reviews"></SitemapMenuItem>
                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/areas-we-cover/" text="About us"></SitemapMenuItem>
                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/carpet-cleaning-articles/" text="Areas we cover"></SitemapMenuItem>
                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/contact-us/" text="Blog"></SitemapMenuItem>
                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/terms-and-conditions/" text="Contact us"></SitemapMenuItem>
                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/privacy-policy/" text="Feedback"></SitemapMenuItem>
                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/faq/" text="Cookie policy"></SitemapMenuItem>
                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/faq/" text="Terms and conditions"></SitemapMenuItem>
                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/faq/" text="Sitemap"></SitemapMenuItem>
                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/faq/" text="Privacy policy"></SitemapMenuItem>
                    <SitemapMenuItem href="https://finecarpetcleaning.co.uk/faq/" text="Cookie policy"></SitemapMenuItem>

                </div>
            </div>
        </>
    );
}
