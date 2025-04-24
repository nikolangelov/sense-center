import 'uno.css'
import "./style.css";
import { children, createEffect, createSignal, JSX, onCleanup, onMount, Show } from "solid-js";
import MdiDot from '~icons/mdi/dot';
import RiFacebookFill from '~icons/ri/facebook-fill';
import RiInstagramLine from '~icons/ri/instagram-line';
import RiScissorsLine from '~icons/ri/scissors-line';
import RiArrowDropUpFill from '~icons/ri/arrow-drop-up-fill';
import { AnimatedComponent } from '../components/AnimateOnView';
import MdiBank from '~icons/mdi/bank';
import MdiPhoneClassic from '~icons/mdi/phone-classic';
import RiTimerFill from '~icons/ri/timer-fill';
import MdiCommentCheckOutline from '~icons/mdi/comment-check-outline';
import MdiEmailMultipleOutline from '~icons/mdi/email-multiple-outline';
import MdiBankOutline from '~icons/mdi/bank-outline';
import MdiAccountFileTextOutline from '~icons/mdi/account-file-text-outline';
import MdiAccountGroupOutline from '~icons/mdi/account-group-outline';
import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import { H2WithImage } from '../components/H2WithImage';
import Cookies from 'js-cookie';
import MdiCookie from '~icons/mdi/cookie';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA measurement ID

const CookieConsent = () => {

  const [hasMadeChoice, setHasMadeChoice] = createSignal(false);
  const [showBanner, setShowBanner] = createSignal(false);
  const [showSettings, setShowSettings] = createSignal(false);
  const [cookiePreferences, setCookiePreferences] = createSignal({
    necessary: true,
    functional: false,
    analytics: false,
    advertising: false,
    thirdParty: false,
  });

  const loadGoogleAnalytics = () => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
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

  const applyPreferences = () => {
    const preferences = cookiePreferences();
    console.log("[CookieConsent] Applying preferences:", preferences);
  
    Cookies.set("necessary_cookie", "true", { expires: 30 });
  
    if (preferences.functional) {
      Cookies.set("functional_cookie", "true", { expires: 30 });
    } else {
      Cookies.remove("functional_cookie");
    }
  
    if (preferences.analytics) {
      Cookies.set("analytics_cookie", "true", { expires: 30 });
      console.log("[CookieConsent] Loading Google Analytics");
      loadGoogleAnalytics();
    } else {
      Cookies.remove("analytics_cookie");
      console.log("[CookieConsent] Removing Google Analytics");
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

  onMount(() => {
    const savedPreferences = Cookies.get("cookiePreferences");
    const bannerClosed = Cookies.get("bannerClosed");
  
    console.log("[CookieConsent] onMount called");
  
    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
      console.log("[CookieConsent] Loaded saved preferences:", preferences);
      setCookiePreferences(preferences);
      setHasMadeChoice(true);
      applyPreferences();
    } else {
      const initialPrefs = {
        necessary: true,
        functional: true,
        analytics: true,
        advertising: true,
        thirdParty: false,
      };
      console.log("[CookieConsent] No saved preferences, auto-applying initialPrefs:", initialPrefs);
  
      setCookiePreferences(initialPrefs);
      Cookies.set("cookiePreferences", JSON.stringify(initialPrefs), {
        expires: 365,
        path: "/",
      });
      Cookies.set("bannerClosed", "true", { expires: 365, path: "/" });
      setHasMadeChoice(true);
      applyPreferences();
    }
  
    if (bannerClosed !== "true" && !savedPreferences) {
      setShowBanner(true);
    }
  });
  
  const closeBanner = () => {
    Cookies.set("bannerClosed", "true", { expires: 365, path: "/" });
    setShowBanner(false);
  };

const savePreferences = () => {
  const preferences = cookiePreferences();
  Cookies.set("cookiePreferences", JSON.stringify(preferences), {
    expires: 365,
    path: "/",
  });
  Cookies.set("bannerClosed", "true", { expires: 365, path: "/" });
  setHasMadeChoice(true);
  applyPreferences();
  setShowSettings(false);
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

  const CookieCategory = (props: {
    title: string;
    description: string;
    name:
    | "necessary"
    | "functional"
    | "analytics"
    | "advertising"
    | "thirdParty";
  }) => {
    const isChecked = () => cookiePreferences()[props.name];

    const toggle = () => {
      if (props.name === "necessary") return;
      setCookiePreferences({
        ...cookiePreferences(),
        [props.name]: !isChecked(),
      });
    };

    return (
      <div class="flex flex-col my-3">
        <h4 class="mb-1 mt-2 text-lg font-semibold">{props.title}</h4>
        <div class="flex flex-row items-center justify-between gap-4">
          <p class="text-left text-sm sm:text-base">{props.description}</p>
          <button
            onClick={toggle}
            disabled={props.name === "necessary"}
            class={`relative min-w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 b-none ${isChecked() ? "bg-brand-compliment" : "bg-gray-300"
              } ${props.name === "necessary" ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
          >
            <span
              class={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isChecked() ? "translate-x-6" : "translate-x-0"
                }`}
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Show when={showBanner()}>
        <div
          class={`fixed bottom-0 left-0 right-0 justify-center items-center z-100 transition-opacity duration-500 ease-in-out ${showBanner() ? "opacity-100" : "opacity-0 hidden"}`}
        >
          <div class="flex flex-justify-between flex-items-center md-mr-8 md-gap-0 gap-2">
            <div
              class="font-size-10 cursor-pointer c-brand-dark mb-1 ml-2"
              onClick={() => setShowSettings(true)}
            >
              <MdiCookie />
            </div>
          </div>
        </div>
      </Show>

      <Show when={showSettings()}>
        <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-9 botom-0">
          <div class="bg-paper px-10 pt-10 pb-8 w-11/12 md:w-3/4 lg:w-2/3">
            <h2 class="mb-0 md-mb-8 md-mt-3 mt-0 line-height-7 sm-line-height-6 md-line-height-8 font-size-6 md-font-size-10">Cookie Settings</h2>

            <CookieCategory
              name="necessary"
              title="Strictly Necessary Cookies"
              description="These cookies are necessary for the website to function and cannot be disabled."
            />

            <CookieCategory
              name="functional"
              title="Functional Cookies"
              description="These cookies allow the website to provide enhanced functionality and personalization."
            />

            <CookieCategory
              name="analytics"
              title="Analytics Cookies"
              description="These cookies help us understand how visitors interact with the website."
            />

            <CookieCategory
              name="advertising"
              title="Advertising Cookies"
              description="These cookies are used to display relevant advertisements."
            />

            <CookieCategory
              name="thirdParty"
              title="Third-Party Cookies"
              description="These cookies are set by external services that we add to the website."
            />

            <div class="flex justify-center md-justify-end gap-3 mt-1 md-mt-0 pt-0">
              <button class="b-solid b-2 b-brand-compliment bg-brand-compliment hover-bg-brand transition-colors hover-b-brand font-700 font-size-2.7 md-font-size-4 uppercase c-paper cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;" onClick={acceptAll}>Accept all</button> 
              <button class="b-solid b-2 b-brand-compliment bg-paper hover-c-brand transition-colors hover-b-brand font-700 font-size-2.7 md-font-size-4 uppercase c-brand-compliment cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;" onClick={savePreferences}>Save settings</button>
              <button class="b-solid b-2 b-brand-compliment bg-paper hover-c-brand transition-colors hover-b-brand font-700 font-size-2.7 md-font-size-4 uppercase c-brand-compliment cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;" onClick={() => setShowSettings(false)}>Close</button>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
};

export default function LayoutDefault(props: { children?: JSX.Element }) {
  const childrenMemo = children(() => props.children)

  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [servicesMenuOpen, setServicesMenuOpen] = createSignal(false);
  const [aboutMenuOpen, setAboutMenuOpen] = createSignal(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div class="flex flex-col">
      <Topbar>
        <div class="flex items-center justify-center lg-pl-4 pl-0 z-99">
          <a href="/" class="hidden lg-block" onClick={closeMenu}>
            <img src="/assets/the-barber-shop-logo1000-x-400-px.webp" class="lg-w-30 w-20 lg-ml-10 lg-mt-4" alt="the-barber-shop-logo" />
          </a>
        </div>

        <div class="flex whitespace-nowrap justify-end items-center font-semibold lg:gap-8 xl:gap-18 md:pr-10 md:pl-5 xl:pl-10 pr-6">
          <div
            class="relative"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <ServiceMenuItem href="/uslugi">Услуги</ServiceMenuItem>
            <DropDownMenuDesktop
              isVisible={servicesMenuOpen()}
              items={[
                { href: "/uslugi/mazhko-podstrigvane", title: "МЪЖКО ПОДСТРИГВАНЕ" },
                { href: "/uslugi/oformiane-na-brada", title: "ОФОРМЯНЕ НА БРАДА" },
                { href: "/uslugi/mazhko-podstrigvane-i-oformiane-na-brada", title: "МЪЖКО ПОДСТРИГВАНЕ И ОФОРМЯНЕ НА БРАДА" },
                { href: "/uslugi/klasichesko-mokro-brasnene", title: "КЛАСИЧЕСКО МОКРО БРЪСНЕНЕ" },
                { href: "/uslugi/profesionalno-tonirane-na-mazhka-kosa", title: "ПРОФЕСИОНАЛНО ТОНИРАНЕ НА МЪЖКА КОСА" },
                { href: "/uslugi/brasnene-na-glava-s-brasnach", title: "БРЪСНЕНЕ НА ГЛАВА С БРЪСНАЧ" },
                { href: "/uslugi/detsko-podstrigvane-momche", title: "ДЕТСКО ПОДСТРИГВАНЕ" },
                { href: "/uslugi/podstrigvane-na-bashta-i-sin", title: "ПОДСТРИГВАНЕ НА БАЩА И СИН" },
              ]}
            />
          </div>

          <MenuItem href="/otzivi">Отзиви</MenuItem>

          <div
            class="relative"
            onMouseEnter={() => setAboutMenuOpen(true)}
            onMouseLeave={() => setAboutMenuOpen(false)}
          >
            <ServiceMenuItem href="/za-nas">За нас</ServiceMenuItem>
            <DropDownMenuDesktop
              isVisible={aboutMenuOpen()}
              items={[
                { href: "/za-nas/kris", title: "Кристиан" },
                { href: "/za-nas/mario", title: "МАРИО" },
                { href: "/za-nas/blago", title: "Благовест" },
                { href: "/za-nas/denis", title: "ДЕНИС" },
              ]}
            />
          </div>
          <MenuItem href="/karieri">Кариери</MenuItem>
          <div class="hidden">
            <MenuItem href="/">Магазин</MenuItem>
          </div>
          <MenuItem href="/kontakti">Контакти</MenuItem>
        </div>

        <a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="hidden lg-block mr-10">
          <button onClick={closeMenu}
            class="cursor-pointer bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-4 font-500 px-7 py-2 hover-c-paper-inv transition-colors lg-block hidden" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;"
          >
            Запазете час
          </button>
        </a>
        <HamburgerMenu />
      </Topbar>
      <Content>{childrenMemo()}</Content>
      <CookieConsent />
      <BackToTopArrow></BackToTopArrow>
      <TopFooter />
      <MainFooter>
        <div class="flex flex-col gap-5 flex-wrap line-height-0 mx-auto w-full bg-#14100c" style="">
          <div class="flex flex-col lg-flex-row flex-justify-evenly gap-5 lg-gap-5 xl-gap-0 md-mx-8 xl-mx-30 pb-2 pb-10 pt-5 md-pt-10 sm-pt-15 lg-pt-25">
            <div class="block md-hidden w-100% xl-w-500px lg-w-450px px-5">
              <GoogleMapIframe />
            </div>

            <AnimatedComponent class="hidden  flex-justify-center lg-flex-justify-center lg-mt-10 w-full gap-5 lg-gap-15 py-10">
              <a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="text-center w-32 lg-w-42 bg-brand c-paper-inv b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
              <a href="/uslugi" class="text-center w-32 lg-w-42 bg-brand c-paper-inv b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Услуги</a>
            </AnimatedComponent>

            <div class="flex flex-col flex-justify-start flex-items-center py-2 md-gap-0 gap-1 mt-5 md-mt-0">
              <h3 class="c-brand font-600 mt-0 uppercase">Най-популярните<br></br>ни услуги</h3>
              <MainFooterMenuItem href="/uslugi/mazhko-podstrigvane">Мъжко подстригване</MainFooterMenuItem>
              <div>
                <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
              </div>
              <MainFooterMenuItem href="/uslugi/oformiane-na-brada">Оформяне на брада</MainFooterMenuItem>
              <div>
                <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
              </div>
              <MainFooterMenuItem href="/uslugi/mazhko-podstrigvane-i-oformiane-na-brada">Комбо</MainFooterMenuItem>
              <div>
                <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
              </div>
              <MainFooterMenuItem href="/uslugi/profesionalno-tonirane-na-mazhka-kosa">Тониране</MainFooterMenuItem>
            </div>

            <div class="hidden md-flex flex-col flex-justify-start flex-items-center py-2 md-gap-0 gap-1" style="border-right-color: rgba(255, 255, 255, 0.12); border-left-color: rgba(255, 255, 255, 0.2);">
              <h3 class="c-brand font-600 mt-0 uppercase">Полезни връзки</h3>
              <div class="hidden">
                <MainFooterMenuItem href="/">Магазин</MainFooterMenuItem>
                <div>
                  <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
                </div>
              </div>
              <MainFooterMenuItem href="/kontakti">Контакти</MainFooterMenuItem>
              <div>
                <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
              </div>
              <MainFooterMenuItem href="/karieri">Кариери</MainFooterMenuItem>
              <div>
                <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
              </div>
              <MainFooterMenuItem href="/za-nas">За нас</MainFooterMenuItem>

            </div>

            <div class="md-block hidden w-100% xl-w-500px lg-w-450px">
              <GoogleMapIframe />
            </div>
          </div>

          <div class="flex flex-justify-center pt-11 pb-2 gap-3 b-t-solid b-t-0.5px mx-5 sm-mx-10 lg-mx-30" style="border-top-color: rgba(255, 255, 255, 0.12);">
            <a href="https://www.facebook.com/TheBarberShopSofia/?locale=en_GB" target="_blank" rel="noopener">
              <RiFacebookFill class="w-10 h-10 bg-brand-compliment hover-c-paper-inv transition-colors p-1.5 c-paper" />
            </a>
            <a href="https://www.instagram.com/the.barber.shop.sofia/?__d=1%3Futm_source%3Dig_embed" target="_blank" rel="noopener">
              <RiInstagramLine class="w-10 h-10 bg-brand-compliment hover-c-paper-inv transition-colors p-1.5 c-paper" />
            </a>
          </div>

          {/* <div class="b-t-solid b-t-0.5px mx-5 sm-mx-10 lg-mx-30 py-8 font-100 flex md-flex-row flex-col flex-justify-between flex-items-center" style="border-top-color: rgba(255, 255, 255, 0.12);">
            <p class="text-center c-paper lg-font-size-3.5 md-font-size-3.3 font-size-3.2 line-height-6 font-sans">Copyright &copy; <CurrentYear /> <span class="c-brand"><BottomFooterMenuItem href="/">TheBarberShop</BottomFooterMenuItem></span></p>
            <div class="flex flex-col md-flex-row md-gap-2 lg-gap-5 flex-items-center flex-justify-end">
              <BottomFooterMenuItem href="/obshti-uslovia">Общи условия</BottomFooterMenuItem>
              <BottomFooterMenuItem href="/politika-za-poveritelnost">Политика за поверителност</BottomFooterMenuItem>
              <BottomFooterMenuItem href="/karta-na-saita">Карта на сайта</BottomFooterMenuItem>
              <BottomFooterMenuItem href="/politika-za-biskvitki">Cookie Policy</BottomFooterMenuItem>
            </div>
          </div> */}
        </div>
      </MainFooter>
    </div>
  );
}

function GoogleMapIframe() {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2933.53860479928!2d23.352789!3d42.671132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cc743ddfd7%3A0xfdafbdb8cd44f23!2sThe%20Barber%20Shop%20Sofia!5e0!3m2!1sen!2sbg!4v1741095880781!5m2!1sen!2sbg`;

  return (
    <iframe
      src={mapSrc}
      width="100%"
      height="350"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

function TopFooter() {

  return (
    <>
      <div style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(/assets/20.jpg); background-position: 50% 50% ; background-repeat: no-repeat; background-size: cover;" role="img" aria-label="">
        <div class="px-2 gap-15 h-100% lg-py-0 pb-12 flex flex-col flex-justify-center flex-items-center">
          <AnimatedComponent class="flex flex-col flex-justify-center">
            <H2WithImage class="c-paper important-mb-0" title="Свържете се с нас" />
          </AnimatedComponent>

          <div class="flex lg-flex-row flex-col lg-gap-0 gap-10 w-full flex-justify-center">
            <AnimatedComponent class="flex flex-col text-center lg-w-22%">
              <MdiBank class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 pl-2.3 mx-auto lg-mb-6 mb-3" />
              <div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                Адрес:
              </div>
              <div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                София, ул. "Николай Хайтов" 2
              </div>
            </AnimatedComponent>

            <AnimatedComponent class="flex flex-col text-center lg-w-22%">
              <MdiPhoneClassic class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 mx-auto lg-mb-6 mb-3" />
              <div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                Телефон:
              </div>
              <div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                +359 882 820 331
              </div>
            </AnimatedComponent>

            <AnimatedComponent class="flex flex-col text-center lg-w-22%">
              <RiTimerFill class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 mx-auto lg-mb-6 mb-3" />
              <div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                Работно време:
              </div>
              <div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8 text-center" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                Понеделник - Петък: 10:00 - 20:00
              </div>
            </AnimatedComponent>
          </div>
        </div>
        <AnimatedComponent class="flex flex-justify-center pb-20">
          <div class="flex flex-justify-evenly lg-flex-justify-center lg-mt-5 w-full lg-gap-15 max-w-80% lg-max-w-1100px lg:border-t-solid b-paper b-1px b-op-60% pt-5 lg-pt-20">
          <a href="https://book.thebarbershop.bg/reservations/start?site=1" target="_blank" rel="noopener noreferrer" class="text-center w-32 lg-w-42 bg-brand c-paper-inv b-solid b-2px b-brand uppercase font-size-4 lg-font-size-4.5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
            <a href="/uslugi" class="text-center w-32 lg-w-42 bg-brand c-paper-inv b-solid b-2px b-brand uppercase font-size-4 lg-font-size-4.5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Услуги</a>
          </div>
        </AnimatedComponent>
      </div>
    </>
  )
}

function ServiceMenuItem(props: { href: string; children: any }) {

  return (
    <div class="relative group">
      <a
        href={props.href}
        class="hidden lg-block relative dropdown font-ui lg:flex c-paper text-center font-size-5 uppercase font-sans hover:c-brand-dark tracking-wide font-500 transition-all after:content-empty after:absolute after:bottom-0 after:left-0 after:right-0 after:w-0 after:h-0.5 after:bg-brand-dark after:transition-all group-hover:after:w-full"
        style="font-family: 'Oswald', sans-serif; letter-spacing: 0.5px;"
      >
        {props.children}
      </a>
    </div>
  );
}

function DropdownMenuItem(props: { href: string; children: any }) {
  return (
    <a
      href={props.href}
      class="flex items-center p-2.5 hover:bg-#d19d64 hover:bg-opacity-40 transition-all last:b-b-none b-b-solid b-b-1px b-b-#d19d64 b-b-opacity-30"
    >
      <div
        class="c-#10203b uppercase tracking-wider important-font-500 leading-normal font-size-3.4 max-w-60 whitespace-normal"
        style="font-family: 'Roboto', sans-serif !important"
      >
        {props.children}
      </div>
    </a>
  );
}

function DropDownMenuDesktop(props: { isVisible: boolean; items: { href: string; title: string }[] }) {
  return (
    <div
      class={`absolute top-full left-0 w-60 bg-white shadow-lg z-10 py-4.5 px-4 transition-all duration-300 ease-out ${props.isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 invisible"
        }`}
    >
      {props.items.map((item) => (
        <DropdownMenuItem href={item.href}>{item.title}</DropdownMenuItem>
      ))}
    </div>
  );
}

function MenuItem(props: { href: string, children: JSX.Element }) {

  return <div class="relative group"><a href={props.href} style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.5px;" class="relative py-2 dropdown hidden font-ui lg-flex c-paper text-center font-size-5 uppercase font-sans hover-c-brand-dark tracking-wide font-500 transition-all after:content-empty after:absolute after:bottom-0 after:left-0 after:right-0 after:w-0 after:h-0.5 after:bg-brand-dark after:transition-all group-hover:after:w-full">{props.children}</a></div>
}

const CurrentYear = () => {
  const [year, setYear] = createSignal<number>(new Date().getFullYear());

  onMount(() => {
    setYear(new Date().getFullYear());
  });

  return (
    <span id="year">{year()}</span>
  );
};

function Topbar(props: { children: JSX.Element }) {
  const [isScrolled, setIsScrolled] = createSignal(false);

  const checkScroll = () => {
    const isScrolledNow = window.scrollY > 0;
    setIsScrolled(isScrolledNow);
  };

  onMount(() => {
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    onCleanup(() => window.removeEventListener("scroll", checkScroll));
  });

  return (
    <div
      class={`h-${isScrolled() ? "92px" : "172px"} w-full z-4 fixed top-0 flex-content-center ${isScrolled() ? "lg-p-0px" : "lg-p-40px"} p-0px transition-all duration-300 ease-in-out ${isScrolled() ? "bg-#14100c" : "bg-transparent"
        }`}
    >
      <div
        style={`${isScrolled() ? "border-bottom: none;" : "border-bottom-color: rgba(255, 255, 255, 0.1);"} `}
        class={`header-border block lg-b-rd-0px lg-b-#dedede lg-b-2px border-b-solid border-b-1px ${isScrolled() ? "lg-b-none" : "lg-b-solid"} w-full relative line-height-92px ${isScrolled() ? "h-72px" : "h-92px"
          } bg-${isScrolled() ? "#333" : "#fff"} text-${isScrolled() ? "#fff" : "#000"}`}
      >
        <div class="mx-auto max-w-full flex flex-justify-between flex-items-center h-full">
          {props.children}
        </div>
      </div>
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

function HamburgerMenu() {
  const [open, setOpen] = createSignal(false);
  const [opacity, setOpacity] = createSignal(0);
  const [translateY, setTranslateY] = createSignal("-100%");

  const handleToggle = () => {
    if (open()) {
      setOpacity(0);
      setTranslateY("-100%");
      setTimeout(() => setOpen(false), 400);
    } else {
      setOpen(true);
      setTimeout(() => {
        setTranslateY("0");
        setOpacity(1);
      }, 10);
    }
  };

  const closeMenu = () => {
    setOpacity(0);
    setTranslateY("-100%");
    setTimeout(() => setOpen(false), 400);
  };

  return (
    <div class="lg-hidden flex flex-content-center flex-items-center flex-justify-between w-full">
      <div class="flex flex-items-center flex-justify-center lg-pl-4 pl-0">
        <a href="/" onClick={closeMenu}>
          <img src="/assets/logo-mobile.png" class="w-13 mr--4 mt-4" alt="fine-carpet-cleaning-logo" />
        </a>
      </div>
      <a href="/test">
        <button
          onClick={closeMenu}
          class="cursor-pointer bg-brand-compliment c-paper b-solid b-2px b-brand-compliment uppercase font-size-3.5 font-500 px-7 py-2 hover-c-paper-inv transition-colors block lg-hidden"
          style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.2px;"
        >
          Запазете час
        </button>
      </a>
      <div class="ml-6 md-mr-10 z-99">
        <input type="checkbox" id="menu-checkbox" class="hidden" />
        <label
          id="burger-menu"
          for="menu-checkbox"
          onClick={handleToggle}
          class="relative cursor-pointer flex flex col flex-justify-between flex-col w-33px h-23px right-6 hamburger"
        >
          <div class={`line ${open() ? "open" : ""}`}></div>
          <div class={`line ${open() ? "open" : ""}`}></div>
          <div class={`line ${open() ? "open" : ""}`}></div>
        </label>
      </div>
      <Show when={open()}>
        <div
          class="fixed w-full h-full left-0 top-0 px-15 pt-10 transition-all transition-duration-400"
          style={`
            height: 100vh;
            opacity: ${opacity()};
            transform: translateY(${translateY()});
            overflow-y: auto;
            transition: transform 0.6s ease-in-out, opacity 0.3s ease-in-out;
            background: linear-gradient(180deg, #eba65b 0%, #423429 100%);
          `}
        >
          <div class="py-10 text-left">
            <MyDropdown closeMenu={closeMenu} />
          </div>
        </div>
      </Show>
    </div>
  );
}

function MobileDropdownMenuItem(props: {
  closeMenu: () => void;
  href?: string;
  text: string;
  icon: JSX.Element;
  subMenu?: { href: string; text: string }[];
}) {
  const [open, setOpen] = createSignal(false);

  const toggleSubMenu = (e: Event) => {
    e.preventDefault();
    setOpen(!open());
  };

  return (
    <div>
      <div
        class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-6.5 font-400 uppercase active:bg-paper active:bg-opacity-15 active:c-paper hover:bg-paper hover-bg-opacity-10 hover:c-paper p-4 my-1 b-rd-2 transition-all cursor-pointer"
      >
        {props.icon && <span class="mr-3 c-paper flex items-center w-7">{props.icon}</span>}
        {props.href ? (
          <a href={props.href} onClick={props.closeMenu} class="flex-grow flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-6.5 font-400 uppercase active:bg-paper active:bg-opacity-15 active:c-paper hover:bg-paper hover-bg-opacity-10 hover:c-paper p-2 b-rd-2 transition-all cursor-pointer" style="font-family: 'Oswald', sans-serif">{props.text}</a>
        ) : (
          <span class="flex-grow" style="font-family: 'Oswald', sans-serif">{props.text}</span>
        )}
        {props.subMenu && (
          <span onClick={toggleSubMenu} class="p-3 cursor-pointer ml-auto transition-transform duration-300 flex items-center" style={{ transform: open() ? "rotate(90deg)" : "rotate(0)" }}>
            <RiArrowRightSLine />
          </span>
        )}
      </div>

      <div
        class={`pl-2 overflow-auto transition-all duration-300 ease-in-out ${open() ? "max-h-200 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {props.subMenu?.map((item) => (
          <a
            href={item.href}
            onClick={props.closeMenu}
            class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-5 font-400 uppercase active:bg-paper active:bg-opacity-15 active:c-paper hover:bg-paper hover-bg-opacity-10 py-3.3 hover:c-paper b-rd-2 transition-all cursor-pointer"
            style="font-family: 'Oswald', sans-serif"
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
}

const MyDropdown = (props: { closeMenu: () => void; }) => {
  return (
    <div class="w-full overflow-y-auto sticky">
      <div class="py-1.5 tracking-1px">
        <div class="text-left">
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Услуги"
            href="/uslugi"
            icon={<RiScissorsLine />}
            subMenu={[
              { href: "/uslugi/mazhko-podstrigvane", text: "Мъжко подстригване" },
              { href: "/uslugi/oformiane-na-brada", text: "ОФОРМЯНЕ НА БРАДА" },
              { href: "/uslugi/mazhko-podstrigvane-i-oformiane-na-brada", text: "МЪЖКО ПОДСТРИГВАНЕ И ОФОРМЯНЕ НА БРАДА" },
              { href: "/uslugi/klasichesko-mokro-brasnene", text: "КЛАСИЧЕСКО МОКРО БРЪСНЕНЕ" },
              { href: "/uslugi/profesionalno-tonirane-na-mazhka-kosa", text: "ПРОФЕСИОНАЛНО ТОНИРАНЕ НА МЪЖКА КОСА" },
              { href: "/uslugi/brasnene-na-glava-s-brasnach", text: "БРЪСНЕНЕ НА ГЛАВА С БРЪСНАЧ" },
              { href: "/uslugi/detsko-podstrigvane-momche", text: "ДЕТСКО ПОДСТРИГВАНЕ" },
              { href: "/uslugi/podstrigvane-na-bashta-i-sin", text: "ПОДСТРИГВАНЕ НА БАЩА И СИН" },
            ]}
          />
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Отзиви"
            icon={<MdiCommentCheckOutline />}
            href="/otzivi"
          />
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="За нас"
            href="/za-nas"
            icon={<MdiAccountGroupOutline />}
            subMenu={[
              { href: "/za-nas/kris", text: "Кристиан" },
              { href: "/za-nas/mario", text: "МАРИО" },
              { href: "/za-nas/blago", text: "Благовест" },
              { href: "/za-nas/denis", text: "ДЕНИС" },
            ]}
          />
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Кариери"
            icon={<MdiAccountFileTextOutline />}
            href="/karieri"
          />
          <div class="hidden">
            <MobileDropdownMenuItem
              closeMenu={props.closeMenu}
              text="Магазин"
              icon={<MdiBankOutline />}
              href="/"
            />
          </div>
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Контакти"
            icon={<MdiEmailMultipleOutline />}
            href="/kontakti"
          />
        </div>
      </div>
    </div>
  );
};

function MainFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex flex-col flex-justify-center md-flex-justify-center bg-#14100c flex-shrink-0 flex-items-center flex-wrap b-t-solid b-t-1px" style="border-top-color: rgba(209, 157, 100, 0.3); background-position: center center; background-repeat: no-repeat; background-size: cover; filter: grayscale(0%);">
      {props.children}
    </div>
  );
}

function BottomFooterMenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} class="transition-colors c-brand hover-color-paper:hover font-400 lg-font-size-3.5 md-font-size-3.3 font-size-3.2 lg-py-1 md-py-2 font-sans line-height-6">{props.children}</a>
}

function MainFooterMenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} class="line-height-7 text-left c-#a1a1a1 hover-color-brand:hover font-normal font-size-4 font-sans uppercase important-font-400 transition-colors" style="font-family: 'Oswald', sans-serif">{props.children}</a>
}

function BackToTopButton(props: { onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined; children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <button
      class="flex items-center justify-between cursor-pointer b-solid b-2px c-brand-dark hover-c-#d1934f b-brand-dark hover-b-#d1934f bg-transparent md-w-12 md-h-12 w-10 h-10 b-rd-50% transition-colors"
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
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    onCleanup(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div class="block z-1 position-fixed right-2 bottom-2 md-right-4 md-bottom-4"
      classList={{
        'back-to-top-arrow': true,
        'visible': isVisible(),
      }}
    >
      <BackToTopButton onClick={handleScrollToTop}>
        <RiArrowDropUpFill class="mx-auto w-10 h-10" />
      </BackToTopButton>
    </div>
  );
}
