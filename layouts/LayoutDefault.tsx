import 'uno.css'
import "./style.css";
import {children, createEffect, createSignal, JSX, onCleanup, onMount, Show} from "solid-js";
import RiPhoneFill from '~icons/ri/phone-fill';
import MdiClock from '~icons/mdi/clock';
import MdiEmail from '~icons/mdi/email';
import MdiVacuum from '~icons/mdi/vacuum';
import RiMoneyPoundCircleLine from '~icons/ri/money-pound-circle-line';
import MdiAccountGroupOutline from '~icons/mdi/account-group-outline';
import MdiPlaceOutline from '~icons/mdi/place-outline';
import MdiEmailEditOutline from '~icons/mdi/email-edit-outline';
import MdiPhoneOutline from '~icons/mdi/phone-outline';
import MdiCommentAccountOutline from '~icons/mdi/comment-account-outline';
import Cookies from 'js-cookie';
import RiArrowUpDoubleFill from '~icons/ri/arrow-up-double-fill';
import MdiBookOpenPageVariantOutline from '~icons/mdi/book-open-page-variant-outline';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-PWPSS6VWF1'; // Replace with your actual GA4 Measurement ID

const CookieConsent = () => {
  console.log("CookieConsent component initialized");

  const [hasMadeChoice, setHasMadeChoice] = createSignal(false);
  const [showBanner, setShowBanner] = createSignal(false); // Start with false to keep it hidden
  const [showSettings, setShowSettings] = createSignal(false);
  const [cookiePreferences, setCookiePreferences] = createSignal({
    necessary: true,
    functional: false,
    analytics: false,
    advertising: false,
    thirdParty: false,
  });

  const loadGoogleAnalytics = () => {
    console.log("Loading Google Analytics...");
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      console.log("Google Analytics loaded");
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
    };
  };

  const removeGoogleAnalytics = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
    window.gtag &&
      window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
    const gaScript = document.querySelector(
      `script[src^="https://www.googletagmanager.com/gtag/js"]`
    );
    if (gaScript) {
      gaScript.remove();
    }
  };

  onMount(() => {
    console.log("CookieConsent component mounted");
    const savedPreferences = Cookies.get("cookiePreferences");
    const bannerClosed = Cookies.get("bannerClosed");

    if (savedPreferences) {
      console.log("Saved preferences found:", savedPreferences);
      const preferences = JSON.parse(savedPreferences);
      setCookiePreferences(preferences);
      setHasMadeChoice(true);
      applyPreferences();
    }

    if (bannerClosed !== "true" && !savedPreferences) {
      setShowBanner(true);
    }

    console.log(
      "Initial showBanner value:",
      showBanner(),
      "hasMadeChoice:",
      hasMadeChoice()
    );
  });

  const savePreferences = () => {
    console.log("Saving preferences:", cookiePreferences());
    Cookies.set("cookiePreferences", JSON.stringify(cookiePreferences()), {
      expires: 365,
      path: "/",
    });
    Cookies.set("bannerClosed", "true", { expires: 365, path: "/" });
    console.log("Cookies set");
    setHasMadeChoice(true);
    setShowBanner(false);
    setShowSettings(false);
    applyPreferences();
    console.log(
      "After saving, showBanner:",
      showBanner(),
      "hasMadeChoice:",
      hasMadeChoice()
    );
  };

  const closeBanner = () => {
    console.log("Closing banner without saving preferences");
    Cookies.set("bannerClosed", "true", { expires: 365, path: "/" });
    setShowBanner(false);
  };

  const acceptAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
      thirdParty: true,
    });
    savePreferences();
  };

  const applyPreferences = () => {
    const preferences = cookiePreferences();
    Cookies.set("necessary_cookie", "true", { expires: 30 });

    if (preferences.functional) {
      Cookies.set("functional_cookie", "true", { expires: 30 });
    } else {
      Cookies.remove("functional_cookie");
    }

    if (preferences.analytics) {
      Cookies.set("analytics_cookie", "true", { expires: 30 });
      loadGoogleAnalytics();
    } else {
      Cookies.remove("analytics_cookie");
      removeGoogleAnalytics();
    }

    if (preferences.advertising) {
      Cookies.set("advertising_cookie", "true", { expires: 30 });
    } else {
      Cookies.remove("advertising_cookie");
    }

    if (preferences.thirdParty) {
      Cookies.set("third_party_cookie", "true", { expires: 30 });
    } else {
      Cookies.remove("third_party_cookie");
    }
  };

  const CookieCategory = (props: {
    title: string;
    description: string;
    name:
    | "necessary"
    | "functional"
    | "analytics"
    | "advertising"
    | "thirdParty";
  }) => (
    <div class="flex flex-col">
      <h4 class="mb-1 mt-2 line-height-6 sm-line-height-6 md-line-height-8 font-size-4 md-font-size-4.5">
        {props.title}
      </h4>
      <div class="flex flex-row flex-items-center">
        <input
          class="mr-4 mb-0 flex flex-items-center"
          type="checkbox"
          checked={cookiePreferences()[props.name]}
          disabled={props.name === "necessary"}
          onChange={(e) =>
            setCookiePreferences({
              ...cookiePreferences(),
              [props.name]: e.target.checked,
            })
          }
        />
        <p class="text-left word-spacing-widest mb-0 mt-0 flex flex-items-center line-height-5 sm-line-height-6 md-line-height-8 md-font-size-4 font-size-3.2">
          {props.description}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <Show when={showBanner()}>
        <div
          class={`fixed bottom-0 left-0 right-0 justify-center items-center z-100 transition-opacity duration-500 ease-in-out ${showBanner() ? "opacity-100" : "opacity-0 hidden"
            }`}
        >
          <div class="fixed bg-paper w-full flex flex-col md-flex-row flex-justify-evenly md-flex-justify-between flex-items-center h-40 md-h-16 relative" style="box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);">
            <p
              class="mb-0 mt-0 font-size-3.8 mx-3 md-ml-8 md-mr-0 text-left word-spacing-1 line-height-5.5"
              style="font-family:'Roboto'"
            >
              We use cookies tp improve your experience on this website. By continuing to use our site, you accept our use of cookies.
            </p>
            <div class="flex flex-justify-between flex-items-center md-mr-8 md-gap-0 gap-2">
              <button
                class="b-solid b-2 b-brand b-rd-1 bg-brand hover-bg-brand-action-hover:hover transition-colors hover-b-brand-action-hover:hover font-700 font-size-3.5 uppercase c-paper cursor-pointer mr-2 py-1.5 px-5 line-height-normal"
                onClick={savePreferences}
              >
                Close
              </button>
              <a
                href="/cookie-policy"
                target="_blank"
                class="b-solid b-2 b-brand b-rd-1 bg-paper hover-b-brand-action-hover:hover hover-c-brand-action-hover:hover transition-colors font-700 font-size-3.5 uppercase c-brand cursor-pointer py-1.5 px-5 font-sans line-height-normal text-center"
                style="font-family:'Arial'"
              >
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </Show>

      <Show when={showSettings()}>
        <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 mt-20 botom-0">
          <div class="bg-paper px-10 pt-8 pb-6 w-11/12 md:w-3/4 lg:w-2/3">
            <h2 class="mb-0 md-mb-8 md-mt-3 mt-0 line-height-7 sm-line-height-6 md-line-height-8 font-size-6 md-font-size-10">Настройки на бисквитките</h2>

            <CookieCategory
              name="necessary"
              title="Строго необходими бисквитки"
              description="Тези бисквитки са необходими за функционирането на сайта и не могат да бъдат изключени."
            />

            <CookieCategory
              name="functional"
              title="Функционални бисквитки"
              description="Тези бисквитки позволяват на уебсайта да предостави подобрена функционалност и персонализация."
            />

            <CookieCategory
              name="analytics"
              title="Аналитични бисквитки"
              description="Тези бисквитки ни помагат да разберем как посетителите взаимодействат с уебсайта."
            />

            <CookieCategory
              name="advertising"
              title="Рекламни бисквитки"
              description="Тези бисквитки се използват за показване на релевантни реклами."
            />

            <CookieCategory
              name="thirdParty"
              title="Бисквитки на трети страни"
              description="Тези бисквитки се задават от външни услуги, които добавяме към страниците."
            />

            <div class="flex justify-center md-justify-end gap-3 mt-1 md-mt-0 pt-0">
              <button class="b-solid b-2 b-brand b-rd-1 bg-brand hover-bg-brand-second-action-hover:hover transition-colors hover-b-brand-second-action-hover:hover font-700 font-size-2.7 md-font-size-4 uppercase c-paper cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={savePreferences}>Save settings</button>
              <button class="b-solid b-2 b-brand b-rd-1 bg-paper hover-c-brand-second-action-hover:hover transition-colors hover-b-brand-second-action-hover:hover font-700 font-size-2.7 md-font-size-4 uppercase c-brand cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={acceptAll}>Accept all</button>
              <button class="b-solid b-2 b-brand b-rd-1 bg-paper hover-c-brand-second-action-hover:hover transition-colors hover-b-brand-second-action-hover:hover font-700 font-size-2.7 md-font-size-4 uppercase c-brand cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={() => setShowSettings(false)}>Close</button>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
};

const MyDropdown = (props: { closeMenu: () => void; }) => {
  const [isDropdownOpen, setDropdownOpen] = createSignal(false);

  const handleLinkClick = () => {
    props.closeMenu();
  };

  return (
    <div class="w-full overflow-y-auto max-h-770px sticky">
      <div class="py-5 b-b-solid b-b border-brand-second-action">
        <a onClick={handleLinkClick} href="/services" class="flex flex-items-center flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <MdiVacuum class="mr-3" />Services
        </a>
      </div>

      <div class="py-5 b-b-solid b-b border-brand-second-action">
        <a onClick={handleLinkClick} href="/prices" class="flex flex-items-center flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <RiMoneyPoundCircleLine class="mr-3" />Prices
        </a>
      </div>

      <div class="py-5 b-b-solid b-b border-brand-second-action">
        <a onClick={handleLinkClick} href="/reviews" class="flex flex-items-center flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <MdiCommentAccountOutline class="mr-3" />Reviews
        </a>
      </div>
      <div class="py-5 b-b-solid b-b border-brand-second-action">
        <a onClick={handleLinkClick} href="/about-us" class="flex flex-items-center flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <MdiAccountGroupOutline class="mr-3" />About us
        </a>
      </div>
      <div class="py-5 b-b-solid b-b border-brand-second-action">
        <a onClick={handleLinkClick} href="/areas-we-cover" class="flex flex-items-center flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <MdiPlaceOutline class="mr-3" />Areas we cover
        </a>
      </div>
      <div class="py-5 b-b-solid b-b border-brand-second-action">
        <a onClick={handleLinkClick} href="/blog" class="flex flex-items-center flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <MdiBookOpenPageVariantOutline class="mr-3" />Blog
        </a>
      </div>
      <div class="py-5 b-b-solid b-b border-brand-second-action">
        <a onClick={handleLinkClick} href="/contact-us" class="flex flex-items-center flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <MdiPhoneOutline class="mr-3" />Contact us
        </a>
      </div>
      <div class="py-5 b-b-solid b-b border-brand-second-action">
        <a onClick={handleLinkClick} href="/feedback" class="flex flex-items-center flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <MdiEmailEditOutline class="mr-3" />Feedback
        </a>
      </div>
    </div>
  );
};

function MenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} class="py-6 dropdown hidden font-ui lg-flex c-paper-inv text-center font-size-3.5 uppercase font-sans hover-c-paper-link-hover:hover tracking-wide">{props.children}</a>
}

function ServiceMenuItem(props: { href: string, children: JSX.Element, closeMenu: () => void }) {
  const handleClick = () => {
    props.closeMenu(); // Close the menu when this link is clicked
  };

  return (
    <a
      href={props.href}
      onClick={handleClick}
      class="py-6 dropdown hidden font-ui lg-flex c-paper-inv text-center font-size-3.5 uppercase font-sans hover-c-paper-link-hover:hover tracking-wide"
    >
      {props.children}
    </a>
  );
}

function DropdownMenuItem(props: { href: string, children: JSX.Element, src: string, alt: string, closeMenu: () => void }) {
  const handleClick = () => {
    props.closeMenu()
  };

  return (
    <a href={props.href} onClick={handleClick} class="hidden flex flex-justify-center flex-items-center">
      <div class="flex-col flex-justify-center flex-items-center w-30 h-32 mt-2 mb-2">
        <img class="w-18 h-18 block mx-auto b-rd-100% b-rd-2" src={props.src} alt={props.alt} />
        <p class="font-size-3 whitespace-normal mx-auto c-paper-inv text-center whitespace-normal uppercase font-sans hover-c-paper-link-hover:hover tracking-wide font-700 line-height-normal">
          {props.children}
        </p>
      </div>
    </a>
  );
}

function DropDownMenuDesktop(props: { closeMenu: () => void }) {
  const handleClick = () => {
    props.closeMenu()
  };

  return (
    <div class="flex top-19.7 w-full flex-justify-center left-0 flex-row hidden gap-15 absolute bg-paper z-1 m-0 py-4 px-6 flex-wrap" style="box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);">
      <div class="flex flex-col flex-justify-center">
        <a href="/professional-carpet-cleaning-services" onClick={handleClick}><h3 class="whitespace-normal text-center hover-c-brand:hover">Carpet cleaning services</h3></a>
        <div class="flex flex-row flex-wrap hidden flex-items-center flex-content-center">
          <DropdownMenuItem href="/professional-carpet-cleaning-services/steam" src="/assets/desktop-menu-images/steam-clean-carpet-company.jpg" alt="steam-clean-carpet-company" closeMenu={props.closeMenu}>Carpet steam cleaning</DropdownMenuItem>
          <DropdownMenuItem href="/professional-carpet-cleaning-services/dry" src="/assets/desktop-menu-images/professional-dry-carpet-cleaning.jpg" alt="professional-dry-carpet-cleaning" closeMenu={props.closeMenu}>Dry carpet cleaning</DropdownMenuItem>
          <DropdownMenuItem href="/professional-carpet-cleaning-services/eco-friendly" src="/assets/desktop-menu-images/eco-friendly-carpet-cleaning-service.jpg" alt="eco-friendly-carpet-cleaning-service" closeMenu={props.closeMenu}>Eco-friendly carpet cleaning</DropdownMenuItem>
        </div>
        <div class="flex flex-row flex-wrap hidden flex-items-center flex-content-center">
          <DropdownMenuItem href="/professional-carpet-cleaning-services/same-day" src="/assets/desktop-menu-images/emergency-carpet-cleaning.jpg" alt="emergency-carpet-cleaning" closeMenu={props.closeMenu}>Same day carpet cleaning</DropdownMenuItem>
          <DropdownMenuItem href="/professional-carpet-cleaning-services/fast-dry" src="/assets/desktop-menu-images/fast-dry-carpet-cleaning-service.jpg" alt="fast-dry-carpet-cleaning-service" closeMenu={props.closeMenu}>Fast dry carpet cleaning</DropdownMenuItem>
          <DropdownMenuItem href="/professional-stain-removal-services" src="/assets/desktop-menu-images/professional-stain-removal-service.jpg" alt="professional-stain-removal-service" closeMenu={props.closeMenu}>Carpet stain removal</DropdownMenuItem>
        </div>
        <div class="flex flex-row flex-wrap hidden flex-items-center flex-content-center">
          <DropdownMenuItem href="/stain-protection-services" src="/assets/desktop-menu-images/stain-protection-services.jpg" alt="stain-protection-services" closeMenu={props.closeMenu}>Carpet stain protection</DropdownMenuItem>
          <DropdownMenuItem href="/professional-carpet-cleaning-services/commercial" src="/assets/desktop-menu-images/commercial-carpet-cleaning-services.jpg" alt="commercial-carpet-cleaning-services" closeMenu={props.closeMenu}>Commercial carpet cleaning</DropdownMenuItem>
          <DropdownMenuItem href="/professional-carpet-cleaning-services/residential" src="/assets/desktop-menu-images/residential-carpet-cleaning-services.jpg" alt="residential-carpet-cleaning-services" closeMenu={props.closeMenu}>Residential carpet cleaning</DropdownMenuItem>
        </div>
        <div class="flex flex-row flex-wrap hidden flex-items-center flex-content-center flex-justify-center">
          <DropdownMenuItem href="/professional-carpet-cleaning-services/commercial/office" src="/assets/desktop-menu-images/commercial-office-carpet-cleaning.jpg" alt="commercial-office-carpet-cleaning" closeMenu={props.closeMenu}>Office carpet cleaning</DropdownMenuItem>
        </div>
      </div>
      <div class="flex flex-col flex-wrap">
        <a href="/professional-upholstery-cleaning-services" onClick={handleClick}><h3 class="whitespace-normal text-center hover-c-brand:hover">Upholstery cleaning services</h3></a>
        <div class="flex flex-row flex-wrap hidden flex-items-center flex-content-center">
          <DropdownMenuItem href="/professional-upholstery-cleaning-services/sofa" src="/assets/desktop-menu-images/sofa-upholstery-cleaning-service.jpg" alt="sofa-upholstery-cleaning-service" closeMenu={props.closeMenu}>Sofa cleaning</DropdownMenuItem>
          <DropdownMenuItem href="/professional-upholstery-cleaning-services/sofa/leather" src="/assets/desktop-menu-images/leather-sofa-cleaning-services-1.jpg" alt="leather-sofa-cleaning-services-1" closeMenu={props.closeMenu}>Leather sofa cleaning</DropdownMenuItem>
          <DropdownMenuItem href="/professional-upholstery-cleaning-services/furniture" src="/assets/desktop-menu-images/steam-cleaning-furniture-services.jpg" alt="steam-cleaning-furniture-services" closeMenu={props.closeMenu}>Furniture cleaning</DropdownMenuItem>
        </div>
        <div class="flex flex-row flex-wrap hidden flex-items-center flex-content-center">
          <DropdownMenuItem href="/professional-upholstery-cleaning-services/mattress" src="/assets/desktop-menu-images/mattress-cleaning-services.jpg" alt="mattress-cleaning-services" closeMenu={props.closeMenu}>Mattress cleaning</DropdownMenuItem>
          <DropdownMenuItem href="/professional-upholstery-cleaning-services/pillow" src="/assets/desktop-menu-images/pillow-cleaning-service.jpg" alt="pillow-cleaning-service" closeMenu={props.closeMenu}>Pillow cleaning</DropdownMenuItem>
          <DropdownMenuItem href="/professional-stain-removal-services" src="/assets/desktop-menu-images/professional-stain-removal-service.jpg" alt="professional-stain-removal-service" closeMenu={props.closeMenu}>Upholstery stain removal</DropdownMenuItem>
        </div>
        <div class="flex flex-row flex-wrap hidden flex-items-center flex-content-center flex-justify-center">
          <DropdownMenuItem href="/stain-protection-services" src="/assets/desktop-menu-images/stain-protection-services.jpg" alt="stain-protection-services" closeMenu={props.closeMenu}>Upholstery stain protection</DropdownMenuItem>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-col flex-wrap">
          <a href="/professional-rug-cleaning-services" onClick={handleClick}><h3 class="whitespace-normal text-center hover-c-brand:hover">Rug cleaning services</h3></a>
          <div class="flex flex-row flex-wrap hidden flex-items-center flex-content-center">
            <DropdownMenuItem href="/professional-rug-cleaning-services/steam" src="/assets/desktop-menu-images/rug-steam-cleaning-service.jpg" alt="rug-steam-cleaning-service" closeMenu={props.closeMenu}>Rug steam cleaning</DropdownMenuItem>
            <DropdownMenuItem href="/professional-rug-cleaning-services/dry" src="/assets/desktop-menu-images/dry-rug-cleaning-service.jpg" alt="dry-rug-cleaning-service" closeMenu={props.closeMenu}>Dry rug cleaning</DropdownMenuItem>
            <DropdownMenuItem href="/professional-stain-removal-services" src="/assets/desktop-menu-images/professional-stain-removal-service.jpg" alt="professional-stain-removal-service" closeMenu={props.closeMenu}>Rug stain removal</DropdownMenuItem>
          </div>
          <div class="flex flex-row flex-wrap hidden flex-items-center flex-content-center flex-justify-center">
            <DropdownMenuItem href="/stain-protection-services" src="/assets/desktop-menu-images/stain-protection-services.jpg" alt="stain-protection-services" closeMenu={props.closeMenu}>Rug stain protection</DropdownMenuItem>
          </div>
        </div>
        <div class="flex flex-col flex-wrap">
          <h3 class="whitespace-normal text-center">Other cleaning services</h3>
          <div class="flex flex-row flex-wrap hidden flex-items-center flex-content-center flex-justify-center">
            <DropdownMenuItem href="/antiviral-sanitisation-services" src="/assets/desktop-menu-images/antiviral-sanitisation-services2.jpg" alt="antiviral-sanitisation-services2" closeMenu={props.closeMenu}>Antiviral sanitisation</DropdownMenuItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LayoutDefault(props: { children?: JSX.Element }) {
  const childrenMemo = children(() => props.children)

  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
      <div class="flex flex-col">
        <Topbar>
          <Logo />
          <a href="/contact-us">
            <button
              class="get-a-quote-button whitespace-nowrap md-ml-2 xl-ml-10 font-serif uppercase font-500 c-paper overflow-hidden relative bg-paper b-double b-rd-1 b-4 b-transparent h-13 w-45 cursor-pointer font-size-3.5 tracking-wide"
              style="  font-family: DM Sans !important; min-width: fit-content; background-origin: border-box; background-clip: padding-box, border-box; box-shadow: 0 0 0 2.5px rgba(255, 255, 255, 1) inset; background-image: linear-gradient(90deg, rgb(13, 46, 41) 0%, rgb(26, 135, 94) 50%), radial-gradient(circle at left top, rgb(13, 46, 41), rgb(26, 135, 94));"
            >
              Request a quote
            </button>
          </a>
          <div class="flex whitespace-nowrap flex-nowrap flex-justify-end flex-items-end font-semibold gap-5 xl-gap-5xl md-pr-10 md-pl-5 xl-pl-10 pr-6 flex-content-center flex-items-center">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                {/* Pass closeMenu to ensure it closes when clicked */}
                <ServiceMenuItem closeMenu={closeMenu} href="/services">Services</ServiceMenuItem>

                {isMenuOpen() && <DropDownMenuDesktop closeMenu={closeMenu} />}
              </div>
            </div>
            <MenuItem href="/prices">Prices</MenuItem>
            <MenuItem href="/reviews">Reviews</MenuItem>
            <MenuItem href="/about-us">About us</MenuItem>
            <MenuItem href="/areas-we-cover">Areas we cover</MenuItem>
            <MenuItem href="/blog">Blog</MenuItem>
            <MenuItem href="/contact-us">Contact us</MenuItem>
            <MenuItem href="/feedback">Feedback</MenuItem>
          </div>
          <HamburgerMenu />
        </Topbar>
        <Content>{childrenMemo()}</Content>
        <CookieConsent />
        <BackToTopArrow></BackToTopArrow>
        <MainFooter>
          <div class="flex flex-col gap-5 flex-wrap line-height-0 my-5">
            <h3 class="important-font-size-4.5 md-font-size-4.5 uppercase font-letter tracking-widest mt-0 mb-2 c-paper font-600">Contacts</h3>
            <div class="flex flex-items-center gap-2">
              <RiPhoneFill class="w-10 h-10 c-paper" />
              <div class="flex flex-col line-height-none">
                <PhoneMailMenuItem href="tel:07874 333 356">07874 333 356</PhoneMailMenuItem>
                <PhoneMailMenuItem href="tel:07874 333 356">02036 370 033</PhoneMailMenuItem>
              </div>
            </div>
            <div class="flex flex-items-center gap-2">
              <MdiEmail class="w-10 h-10 c-paper" />
              <PhoneMailMenuItem href="mailto:office@finecarpetcleaning.co.uk">office@finecarpetcleaning.co.uk</PhoneMailMenuItem>
            </div>
            <div class="flex flex-items-center gap-2">
              <MdiClock class="w-10 h-10 c-paper" />
              <div class="flex flex-col line-height-none">
                <div class="c-paper font-normal lg-font-size-4 md-font-size-4 font-size-4.5 font-sans line-height-6">Monday - Sunday</div>
                <div class="c-paper font-normal lg-font-size-4 md-font-size-4 font-size-4.5 font-sans line-height-6">9:00 - 18:00</div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-5 md-gap-7 flex-wrap line-height-0 my-5">
            <h3 class="important-font-size-4.5 md-font-size-4.5 uppercase font-letter tracking-widest mt-0 mb-2 c-paper font-600">Our most popular services</h3>
            <MainFooterMenuItem href="/professional-carpet-cleaning-services">Professional Carpet Cleaning Services</MainFooterMenuItem>
            <MainFooterMenuItem href="/professional-upholstery-cleaning-services">Professional Upholstery Cleaning Services</MainFooterMenuItem>
            <MainFooterMenuItem href="/professional-rug-cleaning-services">Professional Rug Cleaning Services</MainFooterMenuItem>
            <MainFooterMenuItem href="/professional-carpet-cleaning-services/steam">Professional Steam Carpet Cleaning Services</MainFooterMenuItem>
            <MainFooterMenuItem href="/professional-stain-removal-services">Professional Stain Removal Services</MainFooterMenuItem>
          </div>
          <div class="flex flex-col gap-2 flex-wrap line-height-0 my-5">
            <h3 class="important-font-size-4.5 md-font-size-4.5 uppercase font-letter tracking-widest mt-0 mb-2 c-paper font-600">Menu</h3>
            <MainFooterMenuItem href="/">Home</MainFooterMenuItem>
            <MainFooterMenuItem href="/services">Services</MainFooterMenuItem>
            <MainFooterMenuItem href="/prices">Prices</MainFooterMenuItem>
            <MainFooterMenuItem href="/reviews">Reviews</MainFooterMenuItem>
            <MainFooterMenuItem href="/about-us">About us</MainFooterMenuItem>
            <MainFooterMenuItem href="/areas-we-cover">Areas we cover</MainFooterMenuItem>
            <MainFooterMenuItem href="/blog">Blog</MainFooterMenuItem>
            <MainFooterMenuItem href="/contact-us">Contact us</MainFooterMenuItem>
            <MainFooterMenuItem href="/feedback">Feedback</MainFooterMenuItem>
          </div>
        </MainFooter>
        <BottomFooter>
          <p class="text-center lg-font-size-4 md-font-size-3 font-size-3.7 font-400 line-height-6 font-sans mb-0">Copyright &copy; 2024 Fine Carpet Cleaning London</p>
          <div class="flex flex-col md-flex-row md-gap-5 flex-items-center flex-justify-center">
          <BottomFooterMenuItem href="/terms-and-conditions">Terms and conditions</BottomFooterMenuItem>
          <div class="hidden md-block">┃</div>
          <BottomFooterMenuItem href="/sitemap">Sitemap</BottomFooterMenuItem>
          <div class="hidden md-block">┃</div>
          <BottomFooterMenuItem href="/cookie-policy">Privacy policy</BottomFooterMenuItem>
          </div>
        </BottomFooter>
      </div>
  );
}

function Topbar(props: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      class="flex sticky lg-py-6 lg-h-20 h-20 position-sticky top-0 border-b-2 border-t-1 bg-#f7f7f7 flex-justify-between lg-flex-justify-center gap-2 flex-items-center z-9998" style="box-shadow: 0 0px 10px 0 rgba(50, 50, 50, 0.5);">
      {props.children}
    </div>
  );
}

function Content(props: { children: JSX.Element }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        style={{
          padding: "20px",
          "padding-bottom": "50px",
          "min-height": "100vh",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div class="flex items-center justify-center md-pl-4 pl-0 z-99">
      <a href="/">
        <img src="/assets/FCC_2024_png.png" class="lg-w-22 w-20 md-ml-10 ml-3 mt-7" alt="fine-carpet-cleaning-logo" />
      </a>
    </div>
  );
}

function HamburgerMenu() {
  const [open, setOpen] = createSignal(false);
  const [menuHeight, setMenuHeight] = createSignal('0px');

  const handleToggle = () => {
    if (open()) {
      // Closing the menu
      setMenuHeight('0px');
      setTimeout(() => setOpen(false), 400); // Match the duration of the CSS transition
    } else {
      // Opening the menu
      setOpen(true);
      setMenuHeight('3000px'); // Set the desired height for the menu when open
    }
  };

  const closeMenu = () => {
    setMenuHeight('0px');
    setTimeout(() => setOpen(false), 400); // Match the duration of the CSS transition
  };

  return (
    <div class="lg-hidden flex flex-content-center flex-items-center flex-justify-between">
      <input type="checkbox" id="menu-checkbox" class="hidden" />
      <label
        id="burger-menu"
        for="menu-checkbox"
        onClick={handleToggle}
        class="relative cursor-pointer flex flex-justify-between flex-col w-10 h-7 right-6"
      >
        <div></div>
        <div></div>
        <div></div>
      </label>

      <Show when={open()}>
        <div
          class="fixed w-screen bg-#f7f7f7 left-0 top-19.6 px-10 transition-all transition-duration-400"
          style={{ height: menuHeight(), overflow: 'hidden' }}
        >
          <div class="py-15 text-left">
            <MyDropdown closeMenu={closeMenu} />
          </div>
        </div>
      </Show>
    </div>
  );
}

function MainFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex flex-justify-start md-flex-justify-evenly bg-brand-dark lg-p-10 p-6 md-p-5 flex-shrink-0 flex-items-start flex-wrap">
      {props.children}
    </div>
  );
}

function MainFooterMenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} class="line-height-7 text-left c-#9fcdb0 hover-color-paper:hover font-normal font-size-4 font-sans">{props.children}</a>
}

function BottomFooterMenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} class="c-paper-inv hover-color-brand-second-action:hover font-normal lg-font-size-4 md-font-size-4 font-size-4 lg-py-1 md-py-2 font-sans">{props.children}</a>
}

function PhoneMailMenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} target="_blank" rel="noopener" class="c-#9fcdb0 hover-color-paper:hover font-normal lg-font-size-4 md-font-size-4 font-size-4.5 lg-py-1 md-py-2 py-1 font-sans">{props.children}</a>
}

function BottomFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex flex-col gap-0 bg-#d6d6d6 py-1 flex-shrink-0 flex-justify-center flex-items-center">
      {props.children}
    </div>
  );
}

function BackToTopButton(props: { onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined; children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <button
      class="flex items-center justify-between cursor-pointer b-none color-paper bg-brand-second-action hover-bg-brand w-11 h-11 b-rd-1"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

function BackToTopArrow() {
  const [isVisible, setIsVisible] = createSignal(false);

  createEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0); // Set isVisible to true if user has scrolled down
    };

    window.addEventListener('scroll', handleScroll);
    onCleanup(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Scroll smoothly to the top
    });
  };

  return (
    <div class="block z-99 position-fixed right-4 bottom-4"
      classList={{
        'back-to-top-arrow': true,
        'visible': isVisible(),
      }}
    >
      <BackToTopButton onClick={handleScrollToTop}>
        <RiArrowUpDoubleFill class="w-full h-full ma" />
      </BackToTopButton>
    </div>
  );
}