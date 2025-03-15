import 'uno.css'
import "./style.css";
import { children, createEffect, createSignal, JSX, onCleanup, onMount, Show, For } from "solid-js";
import RiArrowDropUpFill from '~icons/ri/arrow-drop-up-fill?width=192px&height=192px';
import MdiDot from '~icons/mdi/dot?width=192px&height=192px';
import RiFacebookFill from '~icons/ri/facebook-fill?width=192px&height=192px';
import RiInstagramLine from '~icons/ri/instagram-line?width=192px&height=192px';
import RiScissorsLine from '~icons/ri/scissors-line?width=24px&height=24px';
import { AnimatedComponent } from '../components/AnimateOnView';
import MdiBank from '~icons/mdi/bank';
import MdiPhoneClassic from '~icons/mdi/phone-classic';
import RiTimerFill from '~icons/ri/timer-fill';
import MdiCommentCheckOutline from '~icons/mdi/comment-check-outline';
import MdiEmailMultipleOutline from '~icons/mdi/email-multiple-outline';
import MdiBankOutline from '~icons/mdi/bank-outline';
import MdiAccountFileTextOutline from '~icons/mdi/account-file-text-outline';
import MdiAccountGroupOutline from '~icons/mdi/account-group-outline';
import MdiDiamondOutline from '~icons/mdi/diamond-outline';

export default function LayoutDefault(props: { children?: JSX.Element }) {
  const childrenMemo = children(() => props.children)

  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const [servicesMenuOpen, setServicesMenuOpen] = createSignal(false);
  const [aboutMenuOpen, setAboutMenuOpen] = createSignal(false);

  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);
  const closeMenu = () => setIsMenuOpen(false);
  const [menuOpen, setMenuOpen] = createSignal(false);

  return (
    <div class="flex flex-col">
      <Topbar>
        <div class="flex items-center justify-center lg-pl-4 pl-0 z-99">
          <a href="/" class="hidden lg-block" onClick={closeMenu}>
            <img src="/assets/the-barber-shop-logo1000-x-400-px.webp" class="lg-w-30 w-20 lg-ml-10 lg-mt-4" alt="the-barber-shop-logo" />
          </a>
        </div>
        
    <div class="flex whitespace-nowrap justify-end items-center font-semibold gap-5 xl:gap-12 md:pr-10 md:pl-5 xl:pl-10 pr-6">
      <div
        class="relative"
        onMouseEnter={() => setServicesMenuOpen(true)}
        onMouseLeave={() => setServicesMenuOpen(false)}
      >
        <ServiceMenuItem href="/uslugi">Услуги</ServiceMenuItem>
        <DropDownMenuDesktop
          isVisible={servicesMenuOpen()}
          href="/mazhko-podstrigvane"
          title="МЪЖКО ПОДСТРИГВАНЕ"
        />
      </div>

      <MenuItem href="/">Цени</MenuItem>
      <MenuItem href="/">Отзиви</MenuItem>

      <div
        class="relative"
        onMouseEnter={() => setAboutMenuOpen(true)}
        onMouseLeave={() => setAboutMenuOpen(false)}
      >
        <ServiceMenuItem href="/za-nas">За нас</ServiceMenuItem>
        <DropDownMenuDesktop
          isVisible={aboutMenuOpen()}
          href="/za-nas/kris"
          title="КРИС"
        />
      </div>
      <MenuItem href="/karieri">Кариери</MenuItem>
      <MenuItem href="/">Магазин</MenuItem>
      <MenuItem href="/kontakti">Контакти</MenuItem>
    </div>

        <a href="/test#test-id-page" class="hidden lg-block mr-10">
          <button onClick={closeMenu}
            class="cursor-pointer bg-#d19d64 c-black b-solid b-2px b-#d19d64 uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors b-rd-3px lg-block hidden" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;"
          >
            Запазете час
          </button>
        </a>
        <HamburgerMenu />
      </Topbar>
      <Content>{childrenMemo()}</Content>
      <BackToTopArrow></BackToTopArrow>
      <TopFooter />
      <MainFooter>
        <div class="flex flex-col gap-5 flex-wrap line-height-0 mx-auto w-full bg-#14100c" style="">
          <div class="flex flex-col lg-flex-row flex-justify-evenly gap-5 lg-gap-5 xl-gap-0 md-mx-8 xl-mx-30 pb-2 pb-10 pt-5 md-pt-10 sm-pt-15 lg-pt-25">
            <div class="block md-hidden w-100% xl-w-500px lg-w-450px px-5">
              <GoogleMapIframe />
            </div>

            <AnimatedComponent class="md-hidden flex flex-justify-center lg-flex-justify-center lg-mt-10 w-full gap-5 lg-gap-15 py-10">
              <a href="/" class="text-center w-32 lg-w-42 bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
              <a href="/" class="text-center w-32 lg-w-42 bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Цени</a>
            </AnimatedComponent>

            <div class="flex flex-col flex-justify-start flex-items-center py-2 md-gap-0 gap-1">
              <h3 class="c-brand font-600 mt-0 uppercase">Най-популярните<br></br>ни услуги</h3>
              <MainFooterMenuItem href="/">Мъжко подстригване</MainFooterMenuItem>
              <div>
                <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
              </div>
              <MainFooterMenuItem href="/">Оформяне на брада</MainFooterMenuItem>
              <div>
                <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
              </div>
              <MainFooterMenuItem href="/">Комбо</MainFooterMenuItem>
              <div>
                <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
              </div>
              <MainFooterMenuItem href="/">Тониране</MainFooterMenuItem>
            </div>

            <div class="hidden md-flex flex-col flex-justify-start flex-items-center py-2 md-gap-0 gap-1" style="border-right-color: rgba(255, 255, 255, 0.12); border-left-color: rgba(255, 255, 255, 0.2);">
              <h3 class="c-brand font-600 mt-0 uppercase">Полезни връзки</h3>
              <MainFooterMenuItem href="/">Магазин</MainFooterMenuItem>
              <div>
                <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
              </div>
              <MainFooterMenuItem href="/">Контакти</MainFooterMenuItem>
              <div>
                <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
              </div>
              <MainFooterMenuItem href="/">Кариери</MainFooterMenuItem>
              <div>
                <MdiDot class="w-4 c-paper pt-2px mx-5 block" />
              </div>
              <MainFooterMenuItem href="/">За нас</MainFooterMenuItem>

            </div>

            <div class="md-block hidden w-100% xl-w-500px lg-w-450px">
              <GoogleMapIframe />
            </div>
          </div>

          <div class="flex flex-justify-center pt-11 pb-2 gap-3 b-t-solid b-t-0.5px mx-5 sm-mx-10 lg-mx-30" style="border-top-color: rgba(255, 255, 255, 0.12);">
            <a href="/">
              <RiFacebookFill class="w-10 h-10 bg-brand hover-c-#07111c transition-colors p-1.5 c-paper" />
            </a>
            <a href="/">
              <RiInstagramLine class="w-10 h-10 bg-brand hover-c-#07111c transition-colors p-1.5 c-paper" />
            </a>
          </div>

          {/* <div class="b-t-solid b-t-0.5px mx-30 py-8" style="border-top-color: rgba(255, 255, 255, 0.12);">
            <p class="text-center c-paper lg-font-size-4 md-font-size-3 font-size-3.7 font-400 line-height-6 font-sans mb-0">Copyright &copy; <CurrentYear /> TheBarberShop</p>
            <div class="flex flex-col md-flex-row md-gap-5 flex-items-center flex-justify-center">
              <BottomFooterMenuItem href="/">Общи условия</BottomFooterMenuItem>
              <div class="hidden md-block c-paper">┃</div>
              <BottomFooterMenuItem href="/">Политика за поверителност</BottomFooterMenuItem>
              <div class="hidden md-block c-paper">┃</div>
              <BottomFooterMenuItem href="/">Карта на сайта</BottomFooterMenuItem>
            </div>
            <div class="flex flex-justify-center">
              <a class="c-paper hover:c-brand transition-colors font-normal lg-font-size-4 md-font-size-4 font-size-4" href="/sitemap">Cookie Policy</a>
            </div>
          </div> */}

          <div class="b-t-solid b-t-0.5px mx-5 sm-mx-10 lg-mx-30 py-8 font-100 flex md-flex-row flex-col flex-justify-between flex-items-center" style="border-top-color: rgba(255, 255, 255, 0.12);">
            <p class="text-center c-paper lg-font-size-3.5 md-font-size-3.3 font-size-3.2 line-height-6 font-sans">Copyright &copy; <CurrentYear /> <span class="c-brand">TheBarberShop</span></p>
            <div class="flex flex-col md-flex-row md-gap-2 lg-gap-5 flex-items-center flex-justify-end">
              <BottomFooterMenuItem href="/">Общи условия</BottomFooterMenuItem>
              <BottomFooterMenuItem href="/">Политика за поверителност</BottomFooterMenuItem>
              <BottomFooterMenuItem href="/">Карта на сайта</BottomFooterMenuItem>
              <BottomFooterMenuItem href="/">Cookie Policy</BottomFooterMenuItem>
            </div>
          </div>
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
      <div class="" style="background-position: center top; background-repeat: no-repeat; background-size: cover; height: auto;">
        <div class="px-2 gap-15 lg-h-80vh h-100% lg-py-0 py-15 flex flex-col flex-justify-center flex-items-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(/assets/20.jpg); background-position: 50% 50% ; background-repeat: no-repeat; background-size: cover;" role="img" aria-label="">
          <AnimatedComponent class="flex flex-col flex-justify-center">
            <h2 class="c-paper important-my-0">Свържете се с нас</h2>
            <img class="mx-auto pt-2" src="/assets/heading-ic.png" />
          </AnimatedComponent>

          <div class="flex lg-flex-row flex-col lg-gap-0 gap-10 w-full flex-justify-center">
            <AnimatedComponent class="flex flex-col text-center lg-w-25%">
              <MdiBank class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 pl-2.3 mx-auto lg-mb-6 mb-3" />
              <div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                Адрес:
              </div>
              <div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                София, ул. "Николай Хайтов" 2
              </div>
            </AnimatedComponent>

            <AnimatedComponent class="flex flex-col text-center lg-w-25%">
              <RiTimerFill class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 mx-auto lg-mb-6 mb-3" />
              <div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                Работно време:
              </div>
              <div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                Понеделник - Петък: 09.00 - 17.00
              </div>
            </AnimatedComponent>

            <AnimatedComponent class="flex flex-col text-center lg-w-25%">
              <MdiPhoneClassic class="c-paper-inv bg-paper b-rd-50% font-size-10 p-2 mx-auto lg-mb-6 mb-3" />
              <div class="c-brand mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                Телефон:
              </div>
              <div class="c-paper mx-auto font-size-4.5 lg-font-size-4.8" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">
                0882 820 331
              </div>
            </AnimatedComponent>
          </div>

          <AnimatedComponent class="hidden md-flex flex-justify-evenly lg-flex-justify-center lg-mt-10 w-full lg-gap-15 max-w-90% lg-max-w-1200px border-t-solid b-paper b-1px pt-16 lg-pt-22">
            <a href="/" class="text-center w-32 lg-w-42 bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-4.5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Запазете час</a>
            <a href="/" class="text-center w-32 lg-w-42 bg-brand c-black b-solid b-2px b-brand uppercase font-size-4 lg-font-size-4.5 font-500 py-3 hover-c-paper transition-colors" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;">Цени</a>
          </AnimatedComponent>
        </div>
      </div>
    </>
  )
}

function ServiceMenuItem(props: { href: string; children: any }) {

  return (
    <a
      href={props.href}
      class="hidden lg-block relative dropdown font-ui lg:flex c-paper text-center font-size-5 uppercase font-sans hover:c-brand-hover tracking-wide font-500 transition-all desktop-menu-item"
      style="font-family: 'Oswald', sans-serif; letter-spacing: 0.5px;"
    >
      {props.children}
    </a>
  );
}

function DropdownMenuItem(props: { href: string; children: any }) {

  return (
    <a href={props.href} class="flex justify-center items-center p-2 hover:bg-#d19d64 hover:bg-opacity-40 transition-all">
      <div class="text-center c-#10203b uppercase tracking-wider font-500 leading-normal font-size-4"
      style="font-family: 'Oswald', sans-serif !important">
        {props.children}
      </div>
    </a>
  );
}

function DropDownMenuDesktop(props: { isVisible: boolean; href: string; title: string }) {

  return (
    <div
      class={`absolute top-full left-0 w-55 bg-white shadow-lg z-10 py-4 px-4 rounded-lg transition-all duration-300 ease-out ${
        props.isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 invisible"
      }`}>
      <DropdownMenuItem href={props.href}>{props.title}</DropdownMenuItem>
    </div>
  );
}

function MenuItem(props: { href: string, children: JSX.Element }) {

  return <a href={props.href} style="font-family: 'Oswald', sans-serif !important; letter-spacing: 0.5px;" class="relative py-2 dropdown hidden font-ui lg-flex c-paper text-center font-size-5 uppercase font-sans hover-c-brand-hover:hover tracking-wide font-500 transition-all desktop-menu-item">{props.children}</a>
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
      class={`h-${isScrolled() ? "92px" : "172px"} w-full z-3 fixed top-0 flex-content-center ${isScrolled() ? "lg-p-0px" : "lg-p-40px"} p-0px transition-all duration-300 ease-in-out ${isScrolled() ? "bg-#14100c" : "bg-transparent"
        }`}
    >
      <div
        style={`${isScrolled() ? "border-bottom: none;" : "border-bottom-color: rgba(255, 255, 255, 0.1);"} `}
        class={`header-border block lg-b-rd-4px lg-b-#dedede lg-b-2px border-b-solid border-b-1px ${isScrolled() ? "lg-b-none" : "lg-b-solid"} w-full relative line-height-92px ${isScrolled() ? "h-72px" : "h-92px"
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
          <img src="/assets/The Barber Shop (2).png" class="w-23 ml--5 mr--4 mt-4" alt="fine-carpet-cleaning-logo" />
        </a>
      </div>
      <a href="/test">
        <button
          onClick={closeMenu}
          class="cursor-pointer bg-#d19d64 c-black b-solid b-2px b-#d19d64 uppercase font-size-3.5 font-500 px-7 py-2 hover-c-paper transition-colors b-rd-3px block lg-hidden"
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
          class="fixed w-screen h-screen left-0 top-0 px-15 pt-15 transition-all transition-duration-400"
          style={`
            height: 100vh;
            opacity: ${opacity()};
            transform: translateY(${translateY()});
            overflow-y: auto;
            transition: transform 0.6s ease-in-out, opacity 0.3s ease-in-out;
            background: linear-gradient(180deg, #f5a574 0%, #423429 100%);
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
import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';

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
          <span onClick={toggleSubMenu} class="p-1 cursor-pointer ml-auto transition-transform duration-300 flex items-center" style={{ transform: open() ? "rotate(90deg)" : "rotate(0)" }}>
            <RiArrowRightSLine />
          </span>
        )}
      </div>
      
      {props.subMenu && open() && (
        <div class="pl-6 transition-all duration-300">
          {props.subMenu.map((item) => (
            <a 
              href={item.href} 
              onClick={props.closeMenu} 
              class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-5 font-400 uppercase active:bg-paper active:bg-opacity-15 active:c-paper hover:bg-paper hover-bg-opacity-10 hover:c-paper p-3 b-rd-2 transition-all cursor-pointer"
              style="font-family: 'Oswald', sans-serif"
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
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
            href="/"
            icon={<RiScissorsLine />}
            subMenu={[
              { href: "/mazhko-podstrigvane", text: "Мъжко подстригване" },
            ]}
          />
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Цени"
            icon={<MdiDiamondOutline />}
            href="/"
          />
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Отзиви"
            icon={<MdiCommentCheckOutline />}
            href="/"
          />
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="За нас"
            href="/"
            icon={<MdiAccountGroupOutline />}
            subMenu={[
              { href: "/za-nas/kris", text: "Крис" },
            ]}
          />
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Кариери"
            icon={<MdiAccountFileTextOutline />}
            href="/karieri"
          />
          <MobileDropdownMenuItem
            closeMenu={props.closeMenu}
            text="Магазин"
            icon={<MdiBankOutline />}
            href="/"
          />
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
      class="flex flex-col flex-justify-center md-flex-justify-center bg-#14100c flex-shrink-0 flex-items-center flex-wrap b-t-solid b-t-1px" style="border-top-color: rgba(209, 157, 100, 0.3); background-image: url(/assets/1313131.png); background-position: center center; background-repeat: no-repeat; background-size: cover; filter: grayscale(0%);">
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
      class="flex items-center justify-between cursor-pointer b-solid b-2px c-brand hover-c-#b56b1b b-brand hover-b-#b56b1b bg-transparent md-w-12 md-h-12 w-10 h-10 b-rd-50% transition-colors"
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
        <RiArrowDropUpFill class="mx-auto" />
      </BackToTopButton>
    </div>
  );
}