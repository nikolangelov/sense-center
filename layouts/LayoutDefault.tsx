import 'uno.css'
import "./style.css";
import { children, createEffect, createSignal, JSX, JSXElement, onCleanup, onMount, Show } from "solid-js";
import RiFacebookFill from '~icons/ri/facebook-fill';
import RiInstagramLine from '~icons/ri/instagram-line';
import RiScissorsLine from '~icons/ri/scissors-line';
import RiArrowDropUpFill from '~icons/ri/arrow-drop-up-fill';
import { AnimatedComponent } from '../components/AnimateOnView';
import MdiCommentCheckOutline from '~icons/mdi/comment-check-outline';
import MdiEmailMultipleOutline from '~icons/mdi/email-multiple-outline';
import MdiBankOutline from '~icons/mdi/bank-outline';
import MdiAccountFileTextOutline from '~icons/mdi/account-file-text-outline';
import MdiAccountGroupOutline from '~icons/mdi/account-group-outline';
import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import Cookies from 'js-cookie';
import MdiCookie from '~icons/mdi/cookie';
import MdiPlus from '~icons/mdi/plus';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA measurement ID

const cookies = [
  {
    label: "Задължителни",
    key: "mandatory",
    cookies: [
      { name: "_ga", source: "Google Analytics", duration: "2 години", description: "Разпознава потребителя с уникален ID." },
      { name: "_gid", source: "Google Analytics", duration: "24 часа", description: "Разграничава потребителите." },
      { name: "_gcl_au", source: "Google Ads", duration: "3 месеца", description: "Проследява конверсии чрез Google Ads." },
      { name: "_ga_*", source: "Google Analytics 4", duration: "2 години", description: "Събира данни за взаимодействия със сайта." },
      { name: "_fbp", source: "Meta Pixel", duration: "3 месеца", description: "Проследява посещенията за Facebook реклами." },
      { name: "booking_session", source: "Онлайн резервации", duration: "сесия", description: "Поддържа потребителската сесия за резервации." },
      { name: "cart_id", source: "Онлайн магазин", duration: "30 дни", description: "Съхранява количката на клиента." },
    ]
  },
  {
    label: "Аналитични",
    key: "analytics",
    cookies: [
      { name: "_hjSessionUser_*", source: "Hotjar", duration: "1 година", description: "Идентифицира уникален потребител за сайта." },
      { name: "_hjSession_*", source: "Hotjar", duration: "30 минути", description: "Поддържа сесия на потребителя." },
      { name: "cluid", source: "Microsoft Clarity", duration: "1 година", description: "За топлинни карти и сесии." },
      { name: "_pk_id.*", source: "Matomo", duration: "13 месеца", description: "Анонимна статистика за потребителите." },
      { name: "_pk_ses.*", source: "Matomo", duration: "30 минути", description: "Следи сесиите на потребителите." },
    ]
  },
  {
    label: "Маркетингови",
    key: "marketing",
    cookies: [
      { name: "_tt_enable_cookie", source: "TikTok", duration: "13 месеца", description: "Проследява действия след реклама." },
      { name: "fr", source: "Facebook", duration: "3 месеца", description: "Подобрява релевантността на рекламите." },
      { name: "IDE", source: "Google DoubleClick", duration: "13 месеца", description: "Показва персонализирани реклами." },
      { name: "anj", source: "AppNexus", duration: "3 месеца", description: "Ремаркетинг и профилиране." },
      { name: "MUID", source: "Bing", duration: "1 година", description: "Проследява действия на потребителя." },
    ]
  },
  {
    label: "Функционални",
    key: "functional",
    cookies: [
      { name: "intercom-id-*", source: "Intercom", duration: "9 месеца", description: "Поддържа потребителски чат сесии." },
      { name: "zabUserId", source: "Zendesk", duration: "1 година", description: "Проследява поддръжка на клиентите." },
      { name: "pll_language", source: "Polylang", duration: "1 година", description: "Запомня избора на език." },
      { name: "cookieconsent_status", source: "CookieConsent", duration: "1 година", description: "Запомня съгласието за бисквитки." },
      { name: "theme_preference", source: "Custom", duration: "1 година", description: "Запомня предпочитания за тема." },
    ]
  }
];

export const CookieConsent = () => {
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
  const [showCookieIcon, setShowCookieIcon] = createSignal(true);

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
      'script[src^="https://www.googletagmanager.com/gtag/js"]'
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

    if (savedPreferences) {
      const preferences = JSON.parse(savedPreferences);
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
      setCookiePreferences(initialPrefs);
      Cookies.set("cookiePreferences", JSON.stringify(initialPrefs), {
        expires: 365,
        path: "/",
      });
      Cookies.set("bannerClosed", "true", { expires: 365, path: "/" });
      setHasMadeChoice(true);
      applyPreferences();
    }

    setShowBanner(false);

    const shouldShowIcon = sessionStorage.getItem("showCookieIcon") !== "false";
    setShowCookieIcon(shouldShowIcon);
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

    sessionStorage.setItem("showCookieIcon", "false");
    setShowCookieIcon(false);
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
    name: "necessary" | "functional" | "analytics" | "advertising" | "thirdParty";
    cookies?: {
      name: string;
      source: string;
      duration: string;
      description: string;
    }[];
  }) => {
    const [isExpanded, setIsExpanded] = createSignal(false);
    const isChecked = () => cookiePreferences()[props.name];

    const toggle = () => {
      if (props.name === "necessary") return;
      setCookiePreferences({
        ...cookiePreferences(),
        [props.name]: !isChecked(),
      });
    };

    return (
      <div class="flex flex-col my-6 md:my-8">
        <h4 class="mb-1 mt-2 text-lg font-semibold text-left md:text-center">{props.title}</h4>
        <div class="flex flex-row items-center justify-between gap-4">
          <p class="text-left text-sm sm:text-base">{props.description}</p>
          <button
            onClick={toggle}
            disabled={props.name === "necessary"}
            class={`relative min-w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 b-none ${isChecked() ? "bg-brand-compliment" : "bg-gray-300"} ${props.name === "necessary" ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
          >
            <span
              class={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isChecked() ? "translate-x-6" : "translate-x-0"}`}
            />
          </button>
        </div>

        {props.cookies && props.cookies.length > 0 && (
          <div class="mt-3">
            <div
              class="flex items-center justify-between w-full py-2 px-4 text-left transition-all cursor-pointer b-solid b-2px b-gray-500"
              onClick={() => setIsExpanded(!isExpanded())}
            >
              <span class="text-sm font-semibold uppercase text-gray-700">
                {isExpanded() ? "Скрий детайли" : "Виж всички бисквитки"}
              </span>
              <div class={`transform transition-transform duration-300 ${isExpanded() ? "rotate-45" : ""}`}>
                <MdiPlus class="w-5 h-5 mt-2 text-gray-700" />
              </div>
            </div>

            <div
              class={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded() ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div class="mt-3 md:pl-4 pl-1">
                {props.cookies.map((cookie) => (
                  <div class="mb-3 text-gray-600">
                    <div class="text-3 md:text-3.5 h-5 line-height-1rem">Име: {cookie.name}</div>
                    <div class="text-3 md:text-3.5 h-5 line-height-1rem">Източник: {cookie.source}</div>
                    <div class="text-3 md:text-3.5 h-5 line-height-1rem">Продължителност: {cookie.duration}</div>
                    <div class="text-3 md:text-3.5 h-5 line-height-1rem">Описание: {cookie.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Show when={showCookieIcon()}>
        <div
          class="fixed bottom-0 left-4 z-100 cursor-pointer c-brand-dark"
          onClick={() => setShowSettings(true)}
        >
          <MdiCookie class="font-size-8" />
        </div>
      </Show>

      <Show when={showSettings()}>
        <div class="fixed inset-0 bg-gray-800 bg-opacity-50 z-9">
          <div class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div class="relative bg-paper shadow-lg max-h-[90vh] overflow-auto w-11/12 md:w-3/4 lg:w-2/3 pt-8 p-5 md:p-10">
              <h2 class="important-mb-0 important-md-mb-12 md-mt-10 mt-0 line-height-7 sm-line-height-6 md-line-height-8 font-size-6 md-font-size-10">
                Настройки на бисквитки
              </h2>

              <CookieCategory
                name="necessary"
                title="Задължителни бисквитки"
                description="Тези „бисквитки“ са необходими за функционирането на уебсайта и не могат да бъдат деактивирани."
                cookies={cookies.find(c => c.key === "mandatory")?.cookies}
              />

              <CookieCategory
                name="functional"
                title="Функционални бисквитки"
                description="Тези „бисквитки“ позволяват на уебсайта да предоставя подобрена функционалност и персонализация."
                cookies={cookies.find(c => c.key === "functional")?.cookies}
              />

              <CookieCategory
                name="analytics"
                title="Аналитични бисквитки"
                description="Тези „бисквитки“ ни помагат да разберем как посетителите взаимодействат с уебсайта."
                cookies={cookies.find(c => c.key === "analytics")?.cookies}
              />

              <CookieCategory
                name="advertising"
                title="Маркетингови бисквитки"
                description="Тези „бисквитки“ се използват за показване на подходящи реклами."
                cookies={cookies.find(c => c.key === "marketing")?.cookies}
              />

              <CookieCategory
                name="thirdParty"
                title="Бисквитки на трети страни"
                description="Тези „бисквитки“ се задават от външни услуги, които добавяме към уебсайта."
                cookies={[]}
              />

              <div class="flex justify-center md-justify-end gap-3 mt-1 md-mt-0 pt-0">
                <button class="b-solid b-2 b-brand-compliment bg-brand-compliment hover-bg-brand transition-colors hover-b-brand font-700 font-size-2.7 md-font-size-4 uppercase c-paper cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={acceptAll}>Приеми всички</button>
                <button class="b-solid b-2 b-brand-compliment bg-paper hover-c-brand transition-colors hover-b-brand font-700 font-size-2.7 md-font-size-4 uppercase c-brand-compliment cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={savePreferences}>Запази настройки</button>
                <button class="b-solid b-2 b-brand-compliment bg-paper hover-c-brand transition-colors hover-b-brand font-700 font-size-2.7 md-font-size-4 uppercase c-brand-compliment cursor-pointer py-1.5 md-py-3.5 px-4 md-px-5 mt-4 md-mt-10 line-height-4" onClick={() => setShowSettings(false)}>Затвори</button>
              </div>
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
        <a href="/" class="md:w-33% flex whitespace-nowrap justify-center items-center font-semibold lg:gap-8 xl:gap-18 my-auto md:mb-0 md:mt-1">
          <img src="/assets/zhen-shan-ren-logo.png" class="lg-w-35 w-20" alt="zhen-shan-ren-art-logo" />
        </a>

        {/* <div class="md:w-33% flex items-center justify-center lg-pl-4 z-99">
          <a href="/" class="block w-40px h-40px lg-mb-4" onClick={closeMenu}>
            <img src="/assets/lotus-icon.png" class="lg-w-15 w-10" alt="zhen-shan-ren-art-logo" />
          </a>
        </div> */}

        <div class="hidden sm:flex w-full md:w-33% whitespace-nowrap justify-center md:justify-end items-center font-semibold gap-2 lg:gap-8 xl:gap-12 md:pr-10 md:pl-5 xl:pl-10">
          <MenuItem href="#info-section">Информация</MenuItem>

          <MenuItem href="#art-section">Картини</MenuItem>

          <MenuItem href="#artists-section">Художници</MenuItem>

          <MenuItem href="#reviews-section">Отзиви</MenuItem>

          <MenuItem href="#tour-section">Градове</MenuItem>
        </div>
      </Topbar>
      <Content>{childrenMemo()}</Content>
      {/* <CookieConsent /> */}
      <BackToTopArrow></BackToTopArrow>
      <MainFooter>
        <div class="flex flex-col gap-5 flex-wrap line-height-0 mx-auto w-full">
          <div class="flex flex-col justify-center items-center md:gap-2 lg-gap-5 xl-gap-0 pb-5 py-10 px-3">
            <img src="/assets/lotus-icon.png" class="c-brand w-10 h-10" />
            <p class="text-center">Всички права запазени © Copyright Zhen-Shan-Ren-Art.bg</p>
          </div>
        </div>
      </MainFooter>
    </div>
  );
}

function MenuItem(props: { href: string, children: JSX.Element }) {
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

  return <div class="relative group"><a href={props.href} style="font-family: 'Lora', serif" class={`block relative py-1 font-ui lg-flex ${isScrolled() ? "c-paper-inv" : "c-paper"} text-center font-size-3.3 md:font-size-3.8 tracking-0.3 hover-c-brand font-500 transition-all after:content-empty after:absolute after:bottom-0 after:left-0 after:right-0 after:w-0 after:h-0.5 after:bg-brand after:transition-all group-hover:after:w-full`}>{props.children}</a></div>
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
      class={`h-50px sm:h-80px w-full z-35 fixed top-0 flex-content-center lg-p-40px p-0px transition-all duration-300 ease-in-out ${isScrolled() ? "bg-paper" : "bg-transparent"}`}>
      <div class="mx-auto max-w-full flex md:flex-row flex-col justify-start sm:justify-center md:justify-between flex-items-center h-full">
        {props.children}
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
        class={`pl-4 overflow-auto transition-all duration-300 ease-in-out ${open() ? "max-h-200 opacity-100" : "max-h-0 opacity-0"}`}
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
      class="flex flex-col flex-justify-center md-flex-justify-center flex-shrink-0 flex-items-center flex-wrap b-t-solid b-t-1px" style="border-top-color: rgba(209, 157, 100, 0.3); background-position: center center; background-repeat: no-repeat; background-size: cover; filter: grayscale(0%);">
      {props.children}
    </div>
  );
}

function MainFooterMenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} class="line-height-7 text-left c-#a1a1a1 hover-color-brand:hover font-normal font-size-4 font-sans uppercase important-font-400 transition-colors" style="font-family: 'Oswald', sans-serif">{props.children}</a>
}

function BackToTopButton(props: { onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined; children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <button
      class="flex items-center justify-between cursor-pointer b-solid b-2px c-brand hover-c-#d1934f b-brand hover-b-#d1934f bg-transparent md-w-12 md-h-12 w-10 h-10 b-rd-50% transition-colors"
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
