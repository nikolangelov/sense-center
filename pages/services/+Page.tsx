import { FleurDivider } from "../../components/FleurDivider";
import { Head } from 'vike-solid/Head';

function AllServicesButton(props: { href: string; src: string; alt: string; children: HTMLElement | any }) {
  return (
    <a href={props.href}>
      <div class="bg-paper mt-7 mb-2 max-w-320px md-max-w-450px b-rd-3 md-px-7 pt-7 pb-2 flex flex-col flex-justify-center " style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%); ">
        <img class="md-max-w-400px max-w-full mx-7" src={props.src} alt={props.alt} />
        <h3 class="flex flex-justify-center flex-content-center flex-wrap flex-items-center font-size-7 md-font-size-8 h-60px mx-auto w-200px md-w-400px hover-c-brand:hover text-center">{props.children}</h3>
      </div>
    </a>
  )
}

function AllServicesButtonContainer(props: { children: HTMLElement | any }) {
  return (
    <div class="flex flex-justify-evenly flex-wrap gap-5 mb-5">
      {props.children}
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Head><meta name="robots" content="noindex" /></Head>
      <h1 class="md-mt-20 mt-10 md-mb-25 mb-0">All services we offer</h1>
      <a href="/professional-carpet-cleaning-services"><h2 class="hover-c-brand:hover md-mb-15 mb-5">Carpet cleaning services</h2></a>

      <AllServicesButtonContainer>
        <AllServicesButton
          href="/professional-carpet-cleaning-services/steam"
          src="/assets/service-page-images/steam-clean-carpet-company.jpg"
          alt="steam-clean-carpet-company"
        >Carpet steam cleaning
        </AllServicesButton>

        <AllServicesButton
          href="/professional-carpet-cleaning-services/dry"
          src="/assets/service-page-images/professional-dry-carpet-cleaning.jpg"
          alt="professional-dry-carpet-cleaning"
        >Dry carpet cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>
 
      <AllServicesButtonContainer>
        <AllServicesButton
          href="/professional-carpet-cleaning-services/eco-friendly"
          src="/assets/service-page-images/eco-friendly-carpet-cleaning-service.jpg"
          alt="eco-friendly-carpet-cleaning-service"
        >Eco-friendly carpet cleaning
        </AllServicesButton>
        <AllServicesButton
          href="/professional-carpet-cleaning-services/same-day"
          src="/assets/service-page-images/emergency-carpet-cleaning.jpg"
          alt="emergency-carpet-cleaning"
        >Same day carpet cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
          href="/professional-carpet-cleaning-services/fast-dry"
          src="/assets/service-page-images/fast-dry-carpet-cleaning-service.jpg"
          alt="fast-dry-carpet-cleaning-service"
        >Fast dry carpet cleaning
        </AllServicesButton>
        <AllServicesButton
          href="/professional-stain-removal-services"
          src="/assets/service-page-images/professional-stain-removal-service.jpg"
          alt="professional-stain-removal-service"
        >Carpet stain removal
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
          href="/stain-protection-services"
          src="/assets/service-page-images/stain-protection-services.jpg"
          alt="stain-protection-services"
        >Carpet stain protection
        </AllServicesButton>
        <AllServicesButton
          href="/professional-carpet-cleaning-services/commercial"
          src="/assets/service-page-images/commercial-carpet-cleaning-services.jpg"
          alt="commercial-carpet-cleaning-services"
        >Commercial carpet cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
          href="/professional-carpet-cleaning-services/residential"
          src="/assets/service-page-images/residential-carpet-cleaning-services.jpg"
          alt="residential-carpet-cleaning-services"
        >Residential carpet cleaning
        </AllServicesButton>

        <AllServicesButton
          href="/professional-carpet-cleaning-services/commercial/office"
          src="/assets/service-page-images/commercial-office-carpet-cleaning.jpg"
          alt="commercial-office-carpet-cleaning"
        >Office carpet cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <FleurDivider />

      <a href="/professional-upholstery-cleaning-services"><h2 class="hover-c-brand:hover md-mb-15 mb-5">Upholstery cleaning services</h2></a>

      <AllServicesButtonContainer>
        <AllServicesButton
          href="/professional-upholstery-cleaning-services/sofa"
          src="/assets/service-page-images/sofa-upholstery-cleaning-service.jpg"
          alt="sofa-upholstery-cleaning-service"
        >Sofa cleaning
        </AllServicesButton>

        <AllServicesButton
          href="/professional-upholstery-cleaning-services/sofa/leather"
          src="/assets/service-page-images/leather-sofa-cleaning-services-1.jpg"
          alt="leather-sofa-cleaning-services-1"
        >Leather sofa cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
          href="/professional-upholstery-cleaning-services/furniture"
          src="/assets/service-page-images/steam-cleaning-furniture-services.jpg"
          alt="steam-cleaning-furniture-services"
        >Furniture cleaning
        </AllServicesButton>

        <AllServicesButton
          href="/professional-upholstery-cleaning-services/mattress"
          src="/assets/service-page-images/mattress-cleaning-services.jpg"
          alt="mattress-cleaning-services"
        >Mattress cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
          href="/professional-upholstery-cleaning-services/pillow"
          src="/assets/service-page-images/pillow-cleaning-service.jpg"
          alt="pillow-cleaning-service"
        >Pillow cleaning
        </AllServicesButton>
        <AllServicesButton
          href="/professional-stain-removal-services"
          src="/assets/service-page-images/professional-stain-removal-service.jpg"
          alt="professional-stain-removal-service"
        >Upholstery stain removal
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
          href="/stain-protection-services"
          src="/assets/service-page-images/stain-protection-services.jpg"
          alt="stain-protection-services"
        >Upholstery stain protection
        </AllServicesButton>
      </AllServicesButtonContainer>

      <FleurDivider />

      <a href="/professional-rug-cleaning-services"><h2 class="hover-c-brand:hover md-mb-15 mb-5">Rug cleaning services</h2></a>

      <AllServicesButtonContainer>
        <AllServicesButton
          href="/professional-rug-cleaning-services/steam"
          src="/assets/service-page-images/rug-steam-cleaning-service.jpg"
          alt="rug-steam-cleaning-service"
        >Rug steam cleaning
        </AllServicesButton>
        <AllServicesButton
          href="/professional-rug-cleaning-services/dry"
          src="/assets/service-page-images/dry-rug-cleaning-service.jpg"
          alt="dry-rug-cleaning-service"
        >Dry rug cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
          href="/professional-stain-removal-services"
          src="/assets/service-page-images/professional-stain-removal-service.jpg"
          alt="professional-stain-removal-service"
        >Rug stain removal
        </AllServicesButton>
        <AllServicesButton
          href="/stain-protection-services"
          src="/assets/service-page-images/stain-protection-services.jpg"
          alt="stain-protection-services"
        >Rug stain protection
        </AllServicesButton>
      </AllServicesButtonContainer>

      <FleurDivider />

      <h2>Other services</h2>

      <AllServicesButtonContainer>
        <AllServicesButton
          href="/antiviral-sanitisation-services"
          src="/assets/service-page-images/antiviral-sanitisation-services2.webp"
          alt="antiviral-sanitisation-services2"
        >Antiviral sanitisation
        </AllServicesButton>
      </AllServicesButtonContainer>

      <FleurDivider />

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/prices"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">PRICES</button></a>
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
      </div>
    </>
  );
}
