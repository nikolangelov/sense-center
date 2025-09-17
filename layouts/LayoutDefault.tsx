import 'uno.css'
import "./style.css";
import { children, createEffect, createSignal, JSX, onCleanup, onMount, Show } from "solid-js";
import RiArrowDropUpFill from '~icons/ri/arrow-drop-up-fill';
import MdiArrowUp from '~icons/mdi/arrow-up';
import RiFacebookFill from '~icons/ri/facebook-fill';
import RiInstagramLine from '~icons/ri/instagram-line';
import RiPhoneFill from '~icons/ri/phone-fill';
import MdiMagnify from '~icons/mdi/magnify';
import RiCopyrightLine from '~icons/ri/copyright-line';
import { PuzzleButton2 } from '../components/PuzzleButton';
import MdiEmail from '~icons/mdi/email';

export default function LayoutDefault(props: { children?: JSX.Element }) {
  const childrenMemo = children(() => props.children);

  const menuItems = [
    { href: "/na-kogo-pomagame", label: "НА КОГО ПОМАГАМЕ" },
    { href: "/kak-pomagame", label: "КАК ПОМАГАМЕ" },
    { href: "/tseni", label: "ЦЕНИ" },
    { href: "/za-nas", label: "ЗА НАС" },
    { href: "/otzivi", label: "ОТЗИВИ" },
    { href: "/karieri", label: "КАРИЕРИ" },
    { href: "/kontakti", label: "КОНТАКТИ" },
  ];

  const [showSearch, setShowSearch] = createSignal(false);

  return (
    <div class="flex flex-col">
      {/* <div class="fixed top-0 left-0 w-full h-[53px] bg-brand z-50 flex items-center justify-center c-paper text-center text-sm md:text-lg">
        По случай деня на детето можете да се възползвате от безплатна първична оценка!
      </div> */}
      <Topbar>
        <>
          <a href="/" class="flex items-center">
            <img
              src="/assets/sense_logo_heart_text.webp"
              class="w-20 md:w-25 pb-2 z-99"
              alt="sense-center-sofia-logo"
            />
          </a>

          <div class="hidden lg:flex flex-row xl:gap-6 gap-3 text-white font-semibold">
            {menuItems.map((item) => (
              <MenuItem href={item.href}>{item.label}</MenuItem>
            ))}
          </div>

          <div class="flex items-center gap-1">
            <a href="/"
              class="group relative rounded-8px shadow-md overflow-hidden text-white text-lg font-[MyriadPro-SemiboldCond] px-7 pb-1.5 pt-2 xl:mr-12"
              style={{
                "background-image": `url(/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp)`,
                "background-size": "cover",
                "background-position": "center",
              }}>
              <div class="absolute inset-0 bg-brand/80 group-hover-bg-brand-hover/80 transition-all"></div>
              <div class="flex justify-center items-center c-paper">
                <div class="text-white font-[MyriadPro-SemiboldCond] text-center leading-4.5 md:leading-5.5 font-size-14px md:font-size-16px">
                  ЗАПАЗЕТЕ ЧАС ЗА<br />ПЪРВИЧНА ОЦЕНКА
                </div>
              </div>
            </a>
            <a
              href="tel:+359000000000"
              class="hidden md:block text-white text-5 md:text-7 hover:text-brand transition-all pt-1.5"
            >
              <RiPhoneFill />
            </a>
            <button
              onClick={() => setShowSearch(!showSearch())}
              class="hidden md:block cursor-pointer text-white text-5 md:text-7 hover:text-brand transition-all bg-transparent b-none pt-1.5"
            >
              <MdiMagnify />
            </button>
          </div>
          <HamburgerMenu items={menuItems} />
        </>
      </Topbar>
      <Show when={showSearch()}>
        <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div class="bg-white rounded-lg p-4 w-3/4 max-w-md flex flex-col gap-2">
            <input
              type="text"
              placeholder="Търсене..."
              class="border border-gray-300 rounded p-2 w-full"
            />
            <button
              class="bg-brand transition-all text-white px-4 py-2 rounded-lg"
              onClick={() => setShowSearch(false)}
            >
              Затвори
            </button>
          </div>
        </div>
      </Show>
      <Content>{childrenMemo()}</Content>
      <CookieConsentModal />
      <MainFooter />
      <div class="bg-brand-purple flex flex-col justify-center items-center gap-0 py-1.5">
        <div class="flex">
          <a
            href="/politika-za-poveritelnost"
            class="relative important-tracking-0.2 mr-2 text-shadow-[4px_4px_10px_rgba(0,0,0,0.3)] font-[MYRIADPRO-Light] font-size-11px md:font-size-14px md:text-lg tracking-tight text-white hover:text-brand-hover transition-all">
            Политика за поверителност
          </a>
          <a
            href="/obshti-uslovia"
            class="relative important-tracking-0.2 mr-2 text-shadow-[4px_4px_10px_rgba(0,0,0,0.3)] font-[MYRIADPRO-Light] font-size-11px md:font-size-14px md:text-lg tracking-tight text-white hover:text-brand-hover transition-all">
            Общи условия
          </a>
          <a
            href="/politika-za-biskvitki"
            class="relative important-tracking-0.2 mr-2 text-shadow-[4px_4px_10px_rgba(0,0,0,0.3)] font-[MYRIADPRO-Light] font-size-11px md:font-size-14px md:text-lg tracking-tight text-white hover:text-brand-hover transition-all">
            Политика за бисквитки
          </a>
        </div>
        <div class="flex ">
          <p class="my-0 important-tracking-0.2 mr-2 text-shadow-[4px_4px_10px_rgba(0,0,0,0.3)] font-[MYRIADPRO-Light] font-size-11px md:font-size-14px md:text-lg tracking-tight text-white">Всички права запазени <span><RiCopyrightLine class="w-4 h-4 pt-1.3" /></span> <CurrentYear /></p>
        </div>
      </div>
      <BackToTopArrow />
    </div>
  );
}

function MenuItem2(props: { href: string; children: string }) {
  return (
    <a
      href={props.href}
      class="relative important-tracking-0.2 mr-2 text-shadow-[4px_4px_10px_rgba(0,0,0,0.3)] font-[MyriadPro-Regular] md:font-size-16px xl:font-size-18px md:text-lg tracking-tight text-white hover:text-brand-hover transition-all after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-hover after:transition-all hover:after:w-full">
      {props.children}
    </a>
  );
}

function MenuItem(props: { href: string; children: string }) {
  return (
    <a
      href={props.href}
      class="relative important-tracking-0.2 text-shadow-[4px_4px_10px_rgba(0,0,0,0.3)] font-[MyriadPro-SemiboldCond] md:font-size-16px xl:font-size-18px md:text-lg tracking-tight text-white hover:text-brand-hover transition-all after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-hover after:transition-all hover:after:w-full">
      {props.children}
    </a>
  );
}

function HamburgerMenu(props: { items: { href: string; label: string }[] }) {
  const [open, setOpen] = createSignal(false);

  return (
    <div class="lg:hidden relative z-50">
      <button
        class="relative w-10 h-10 flex items-center justify-center group bg-transparent b-none cursor-pointer"
        onClick={() => setOpen(!open())}
      >
        <span
          class={`block absolute h-1 w-7 bg-#fa4652 rounded transition-all duration-500 ease-in-out
            ${open() ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
        ></span>
        <span
          class={`block absolute h-1 w-7 bg-brand-orange rounded transition-all duration-500 ease-in-out
            ${open() ? "opacity-0 scale-50" : "opacity-100"}`}
        ></span>
        <span
          class={`block absolute h-1 w-7 bg-brand-yellow rounded transition-all duration-500 ease-in-out
            ${open() ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
        ></span>
      </button>
      <Show when={open()}>
        <div class="w-full mx-auto flex justify-end">
          <div class="fixed mt-69px mx-auto b-rd-8px top-[53px] left-0 w-full bg-brand-blue/95 flex flex-col items-center gap-4 p-4 z-40 animate-bounce-in">
            {props.items.map((item) => (
              <MenuItem href={item.href}>{item.label}</MenuItem>
            ))}
          </div>
        </div>
      </Show>
    </div>
  );
}

function Topbar(props: { children: JSX.Element }) {
  const [isScrolled, setIsScrolled] = createSignal(false);

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  onMount(() => {
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    onCleanup(() => window.removeEventListener("scroll", checkScroll));
  });

  return (
    <div
      class="h-70px sm:h-100px w-full z-40 fixed top-[0] flex-content-center transition-all duration-300 ease-in-out">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style={{ "background-image": "url('/assets/turqouise-gradient3.webp')" }}
      ></div>
      <div class="mx-auto w-full flex flex-row justify-between items-center px-4 md:px-10">
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
            <RiArrowDropUpFill />
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

const CurrentYear = () => {
  const [year, setYear] = createSignal<number>(new Date().getFullYear());

  onMount(() => {
    setYear(new Date().getFullYear());
  });

  return (
    <span id="year">{year()}</span>
  );
};

function BackToTopArrow() {
  const [visible, setVisible] = createSignal(false);
  const [mounted, setMounted] = createSignal(false);
  const [exitAnim, setExitAnim] = createSignal(false);

  createEffect(() => {
    const footer = document.getElementById("gradient-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          setExitAnim(false);
          setVisible(true);
        } else {
          setVisible(false);
          setExitAnim(true);

          setTimeout(() => {
            setMounted(false);
            setExitAnim(false);
          }, 600);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    onCleanup(() => observer.disconnect());
  });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {mounted() && (
        <div
          class={`fixed bottom-15 right-0 md:bottom-2 md:right-16 z-50 flex justify-center items-center cursor-pointer
            ${visible() ? 'animate-enterPuzzle' : ''}
            ${exitAnim() ? 'animate-exitPuzzle' : ''}
          `}
        >
          <div class="animate-slowSpin relative mb-1 mr-2">
            <div onClick={handleScrollToTop}>
              <img src="/assets/sun.png" class="w-18 h-18 lg:w-25 lg:h-25" />
            </div>
          </div>
          <div onClick={handleScrollToTop}>
            <MdiArrowUp class="absolute w-6 h-6 lg:w-8 lg:h-8 c-brand-purple z-10 top-5.7 left-6.1 lg:top-8.5 lg:left-8.5" />
          </div>
        </div>
      )}
      <style>
        {`
          @keyframes enterPuzzle {
            0% {
              opacity: 0;
              transform: translateX(-100px) rotate(0deg);
            }
            100% {
              opacity: 1;
              transform: translateX(0) rotate(360deg);
            }
          }

          @keyframes exitPuzzle {
            0% {
              opacity: 1;
              transform: translateX(0) rotate(0deg);
            }
            100% {
              opacity: 0;
              transform: translateX(-100px) rotate(360deg);
            }
          }

          @keyframes slowSpin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .animate-enterPuzzle {
            animation: enterPuzzle 0.6s ease-out forwards;
          }

          .animate-exitPuzzle {
            animation: exitPuzzle 0.6s ease-in forwards;
          }

          .animate-slowSpin {
            animation: slowSpin 20s linear infinite;
          }
        `}
      </style>
    </>
  );
}

function MainFooter() {
  return (
    <div id="gradient-footer" class="relative">
      <footer class="relative px-6 pt-25 md:pt-35 pb-10 mt--0.2">
        <div
          class="absolute inset-0 bg-cover bg-center"
          style={{
            "background-image": "url('/assets/detsa-s-autizam/наблюдение-дете-аутизъм.webp')",
          }}
        ></div>
        <div class="absolute inset-0 bg-pink-600/70"></div>

        <div class="absolute top-0 left-0 w-full h-60 bg-gradient-to-t from-transparent to-white" />

        <div
          class="absolute top-0 left-0 w-full h-60
          [mask-image:linear-gradient(to_bottom,
            rgba(255,255,255,1) 0%,
            rgba(255,255,255,1) 30%,
            rgba(255,255,255,0) 100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,
            rgba(255,255,255,1) 0%,
            rgba(255,255,255,1) 30%,
            rgba(255,255,255,0) 100%)]"
        />

        <div class="relative max-w-6xl mx-auto hidden md:flex justify-center items-center md:mt-5 mb-20">
          <div class="w-full flex justify-center items-center">
            <div class="md:w-1/3 flex flex-col justify-between">
              <div class="flex justify-center items-center gap-2">
                <RiPhoneFill class="c-paper w-11 h-11" />
                <div class="flex flex-col">
                  <div class="flex justify-start items-center gap-2 mt--20px">
                    <p class="font-[MyriadPro-SemiboldCond] c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-5">+359 879 800 013</p>
                  </div>
                  <div class="flex justify-start items-center gap-2 mt--10">
                    <p class="font-[MyriadPro-SemiboldCond] c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-5 mb-0">+359 877 800 770</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:w-1/3 flex flex-col justify-between">
              <div>
                <div class="flex justify-center items-center gap-">
                  <MdiEmail class="c-paper w-11 h-11 mr-3" />
                  <p class="font-[MYRIADPRO-BOLDCOND] c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-5">contact@sense-center.bg</p>
                </div>
              </div>
            </div>
            <div class="md:w-1/3 flex flex-col justify-between">
              <div class="">
                <PuzzleButton2
                  class="important-bg-brand-blue/80 important-group-hover-bg-brand-blue-hover/80"
                  href=""
                  text={
                    <>
                      Вижте успешни<br />истории
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div class="relative max-w-6xl mx-auto flex md:flex-row flex-col justify-center mb-5 md:mb-10 px-8 md:px-0">
          <div class="md:hidden block mb-10">
            <img src="/assets/sense_logo_heart_text.webp" class="w-40 mb-10" alt="sense-center-sofia-text-logo" />
            <h2 class="c-paper important-leading-10 md:px-30 important-font-[MYRIADPRO-BOLDCOND] text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] important-font-size-40px">Център за деца с нарушения в развитието</h2>
          </div>
          <div class="mb-35 md:mb-20 h-450px md:h-350px md:px-25 py-6 md:p-0 w-full md:hidden block">
            <GoogleMapIframe />
            <p class="mt-2 md:mt-0 text-left text-5 leading-6 important-font-[MYRIADPRO-SemiboldCond] uppercase c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)]">Кв. Карпузица,<br />бул. Никола Петков 95А</p>

            <div class="flex items-center">
              <RiPhoneFill class="c-paper w-9 h-9 mr-4.5" />
              <div class="flex flex-col">
                <div class="flex justify-start items-center gap-2 mt--20px">
                  <p class="font-[MyriadPro-SemiboldCond] c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-5">+359 879 800 013</p>
                </div>
                <div class="flex justify-start items-center gap-2 mt--10">
                  <p class="font-[MyriadPro-SemiboldCond] c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-5 mb-0">+359 877 800 770</p>
                </div>
              </div>
            </div>

            <div>
              <div class="flex justify-start items-center gap-2">
                <MdiEmail class="c-paper w-9 h-9 mr-3" />
                <p class="font-[MyriadPro-SemiboldCond] c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-5">contact@sense-center.bg</p>
              </div>
            </div>
          </div>

          <div class="w-full flex justify-center items-stretch">
            <div class="md:w-1/3 flex flex-col justify-between h-full">
              <h3 class="text-center important-font-size-8 important-md:font-size-9 important-leading-10 important-md:leading-11 important-font-[MYRIADPRO-BOLDCOND] mt-0 mb-7 md:mb-9 uppercase c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)]">Най-популярните<br />терапии</h3>
              <ul class="flex flex-col gap-3 justify-between items-center h-full">
                <FooterMenuItem>Практически занимания за<br />деца с аутизъм</FooterMenuItem>
                <FooterMenuItem>Детски логопед</FooterMenuItem>
                <FooterMenuItem>Детски психолог</FooterMenuItem>
                <FooterMenuItem>Ерготерапия</FooterMenuItem>
                <FooterMenuItem>Психомоторика</FooterMenuItem>
              </ul>
            </div>

            <div class="md:w-1/3 hidden md:flex flex-col justify-stretch h-full">
              <h3 class="text-center important-font-size-8 important-md:font-size-9 important-leading-10 important-md:leading-11 important-font-[MYRIADPRO-BOLDCOND] mt-0 mb-7 md:mb-9 uppercase c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)]">Полезни<br />връзки</h3>
              <ul class="flex flex-col gap-3 justify-between items-center h-full">
                <FooterMenuItem>Цени</FooterMenuItem>
                <FooterMenuItem>Контакти</FooterMenuItem>
                <FooterMenuItem>Кариери</FooterMenuItem>
                <FooterMenuItem>За нас</FooterMenuItem>
              </ul>
              <div class="w-full flex flex-col md:flex-row justify-center items-center mt-8">
                <div class="flex gap-2 md:gap-4 text-8">
                  <a href="#" aria-label="Facebook" class="c-paper hover-c-brand-yellow transition-all">
                    <RiFacebookFill />
                  </a>
                  <a href="#" aria-label="Instagram" class="c-paper hover-c-brand-yellow transition-all">
                    <RiInstagramLine />
                  </a>
                </div>
              </div>
            </div>

            <div class="md:w-1/3 h-500px px-10 md:px-10 w-full hidden md:flex flex-col justify-between h-full">
              <GoogleMapIframe />
              <p class="mt-0 text-center text-5 leading-6 important-font-[MYRIADPRO-SemiboldCond] uppercase c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)]">Кв. Карпузица, бул. Никола Петков 95А</p>
              <div class="ml-1">
                <p class="mt-0 text-6 leading-11 important-font-[MYRIADPRO-SemiboldCond] uppercase c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] mb--2">Работно време:</p>
                <div class="flex flex-col">
                  <div class="flex justify-between items-center">
                    <p class="mt-0 text-6 leading-11 important-font-[Myriad-Pro-Light-Condensed] capitalize c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] my-0">Понеделник - Петък</p>
                    <p class="mt-0 text-6 leading-11 important-font-[Myriad-Pro-Light-Condensed] capitalize c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] my-0">09:00 - 20:00</p>
                  </div>
                  <div class="flex justify-between items-center mt--4">
                    <p class="mt-0 text-6 leading-11 important-font-[Myriad-Pro-Light-Condensed] capitalize c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] my-0">Събота</p>
                    <p class="mt-0 text-6 leading-11 important-font-[Myriad-Pro-Light-Condensed] capitalize c-paper text-shadow-[4px_4px_10px_rgba(0,0,0,0.2)] my-0">09:00 - 15:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="md:hidden w-full mt-15 flex flex-col md:flex-row justify-center items-center mb-3">
            <div class="flex gap-2 md:gap-4 text-10 mr-3">
              <a href="#" aria-label="Facebook" class="c-paper hover-c-brand-yellow transition-all">
                <RiFacebookFill />
              </a>
              <a href="#" aria-label="Instagram" class="c-paper hover-c-brand-yellow transition-all">
                <RiInstagramLine />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function GoogleMapIframe() {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.749670548677!2d23.25135671550783!3d42.6696015791651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9be9899f1247%3A0x9c53f8ec4847cb64!2zU0VOU0Ug0L3QsNGD0YHRgtC-INCf0L7QvdC40LrQsA!5e0!3m2!1sen!2sbg!4v1719513278453!5m2!1sen!2sbg`;

  return (
    <iframe
      src={mapSrc}
      width="100%"
      height="280"
      style="border: 0; border-radius: 12px;"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

function FooterMenuItem(props: { href?: string, children?: JSX.Element }) {
  return (
    <div class="text-center">
      <a href={props.href} class="c-paper important-text-center font-size-4.5 md:font-size-5 tracking-0.3 transition-all cursor-pointer hover-c-brand-yellow uppercase font-[Myriad-Pro-Light-Condensed] text-shadow-[4px_4px_10px_rgba(0,0,0,0.4)]">
        {props.children}
      </a>
    </div>
  );
}

export type CookieConsent = "accepted" | "rejected" | "custom";

export type CookieSettings = {
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
  socialMedia: boolean;
  personalization: boolean;
  partner: boolean;
};

const COOKIE_KEY = "senscenter_cookie_consent";
const SETTINGS_KEY = "senscenter_cookie_settings";

const cookieCategories: Record<
  string,
  {
    title: string;
    description: string;
    cookies: { name: string; source: string; duration: string; description: string }[];
  }
> = {
  functional: {
    title: "Функционални (задължителни)",
    description: "Необходими за функционирането на сайта и не могат да бъдат деактивирани.",
    cookies: [],
  },
  analytics: {
    title: "Аналитични (GA4)",
    description: "Помагат да разберем как посетителите използват сайта.",
    cookies: [],
  },
  advertising: {
    title: "Маркетингови (Ads & Pixel)",
    description: "Използват се за показване на подходящи реклами.",
    cookies: [],
  },
  socialMedia: {
    title: "Социални медии",
    description: "За интеграция на съдържание от социални мрежи.",
    cookies: [],
  },
  personalization: {
    title: "Персонализация",
    description: "За персонализирано съдържание и препоръки.",
    cookies: [],
  },
  partner: {
    title: "Партньорски (трети страни)",
    description: "Бисквитки от външни услуги и партньори.",
    cookies: [],
  },
};

const pushDataLayer = (data: Record<string, any>) => {
  const w = window as typeof window & { dataLayer?: any[] };
  if (!w.dataLayer) w.dataLayer = [];
  w.dataLayer.push(data);
};

function CookieConsentModal() {
  const [consent, setConsent] = createSignal<CookieConsent>("accepted");
  const [showSettings, setShowSettings] = createSignal(false);

  const [settings, setSettings] = createSignal<CookieSettings>({
    functional: true,
    analytics: true,
    advertising: true,
    socialMedia: false,
    personalization: false,
    partner: false,
  });

  const applyConsent = (value: CookieConsent) => {
    const s = settings();
    const data = {
      event: "cookie_consent_update",
      functional: true,
      analytics: value === "rejected" ? false : s.analytics,
      advertising: value === "rejected" ? false : s.advertising,
      socialMedia: value === "rejected" ? false : s.socialMedia,
      personalization: value === "rejected" ? false : s.personalization,
      partner: value === "rejected" ? false : s.partner,
    };
    pushDataLayer(data);
  };

  onMount(() => {
    const savedConsent = localStorage.getItem(COOKIE_KEY) as CookieConsent;
    const savedSettings = localStorage.getItem(SETTINGS_KEY);

    if (savedConsent) {
      setConsent(savedConsent);
      if (savedSettings) setSettings(JSON.parse(savedSettings));
      applyConsent(savedConsent);
    } else {
      applyConsent("accepted");
    }
  });

  const handleAcceptAll = () => {
    setConsent("accepted");
    const acceptedSettings = {
      functional: true,
      analytics: true,
      advertising: true,
      socialMedia: true,
      personalization: true,
      partner: true,
    };
    setSettings(acceptedSettings);
    localStorage.setItem(COOKIE_KEY, "accepted");
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(acceptedSettings));
    applyConsent("accepted");
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    setConsent("rejected");
    const rejectedSettings = {
      functional: true,
      analytics: false,
      advertising: false,
      socialMedia: false,
      personalization: false,
      partner: false,
    };
    setSettings(rejectedSettings);
    localStorage.setItem(COOKIE_KEY, "rejected");
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(rejectedSettings));
    applyConsent("rejected");
    setShowSettings(false);
  };

  const handleSaveSettings = () => {
    setConsent("custom");
    localStorage.setItem(COOKIE_KEY, "custom");
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings()));
    applyConsent("accepted");
    setShowSettings(false);
  };

  const toggleSetting = (key: keyof CookieSettings) => {
    if (key === "functional" || key === "analytics" || key === "advertising") return;
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <button
        class="fixed bottom-1 right-3 text-white p-3 b-none bg-transparent z-50"
        title="Управление на бисквитки"
        onClick={() => setShowSettings(true)}
      >
        <img src="/assets/home/cookie.png" class="w-9 h-9 md:w-10 md:h-10 cursor-pointer" />
      </button>
      <Show when={showSettings()}>
        <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div class="bg-white rounded-2 shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto py-6 px-6 md:px-8">
            <h2 class="important-text-8 important-md:text-12 important-leading-10 mb-4 c-brand">Настройки на бисквитки</h2>
            <div class="space-y-4 py-4">
              {Object.entries(cookieCategories).map(([key, cat]) => (
                <div>
                  <label class="flex items-center gap-2">
                    {(key === "functional" || key === "analytics" || key === "advertising") ? (
                      <input type="checkbox" checked disabled class="h-4 w-4" />
                    ) : (
                      <input
                        type="checkbox"
                        checked={settings()[key as keyof CookieSettings]}
                        onChange={() => toggleSetting(key as keyof CookieSettings)}
                        class="h-4 w-4"
                      />
                    )}
                    <span class="font-medium">{cat.title}</span>
                  </label>
                  <p class="text-sm text-gray-600 ml-6">{cat.description}</p>
                </div>
              ))}
            </div>
            <div class="flex justify-end justify-center md:justify-end flex-wrap gap-2 mt-2 md:mt-8 mb-2">
              <button class="b-rd-5px b-solid b-2px b-gray-400 c-gray-500 cursor-pointer px-5 py-2.5 md:px-5 md:py-3 font-size-11px important-font-size-13px bg-transparent hover:bg-gray-400 hover-c-paper transition-all font-[MYRIADPRO-Semibold] uppercase tracking-0.15" onClick={() => setShowSettings(false)}>Затвори</button>
              <button class="b-rd-5px b-solid b-2px b-brand-blue c-brand-blue cursor-pointer px-5 py-2.5 md:px-5 md:py-3 font-size-11px important-font-size-13px bg-transparent hover:bg-brand-blue hover-c-paper transition-all font-[MYRIADPRO-Semibold] uppercase tracking-0.15" onClick={handleRejectAll}>Отказвам</button>
              <button class="b-rd-5px b-solid b-2px b-brand-purple c-brand-purple cursor-pointer px-5 py-2.5 md:px-5 md:py-3 font-size-11px important-font-size-13px bg-transparent hover:bg-brand-purple hover-c-paper transition-all font-[MYRIADPRO-Semibold] uppercase tracking-0.15" onClick={handleSaveSettings}>Запази</button>
              <button class="b-rd-5px b-solid b-2px b-brand hover-c-brand cursor-pointer px-5 py-2.5 md:px-5 md:py-3 font-size-11px important-font-size-13px hover-bg-transparent bg-brand c-paper transition-all font-[MYRIADPRO-Semibold] uppercase tracking-0.15" onClick={handleAcceptAll}>Приемам всички</button>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
}
