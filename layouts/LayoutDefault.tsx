import 'uno.css'
import "./style.css";
import { children, createEffect, createSignal, JSX, onCleanup, onMount, Show } from "solid-js";
import RiArrowDropUpFill from '~icons/ri/arrow-drop-up-fill?width=192px&height=192px';
import MdiDot from '~icons/mdi/dot?width=192px&height=192px';
import RiFacebookFill from '~icons/ri/facebook-fill?width=192px&height=192px';
import RiInstagramLine from '~icons/ri/instagram-line?width=192px&height=192px';
import RiScissorsLine from '~icons/ri/scissors-line?width=24px&height=24px';

export default function LayoutDefault(props: { children?: JSX.Element }) {
  const childrenMemo = children(() => props.children)

  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div class="flex flex-col">
      <Topbar>
        <div class="flex items-center justify-center lg-pl-4 pl-0 z-99">
          <a href="/" class="hidden lg-block" onClick={closeMenu}>
            <img src="/assets/the-barber-shop-logo1000-x-400-px.webp" class="lg-w-30 w-20 lg-ml-10 lg-mt-4" alt="the-barber-shop-logo" />
          </a>
        </div>
        <div class="flex whitespace-nowrap flex-nowrap flex-justify-end flex-items-end font-semibold gap-5 xl-gap-12 md-pr-10 md-pl-5 xl-pl-10 pr-6 flex-content-center flex-items-center">
          <MenuItem href="/mazhko-podstrigvane">Услуги</MenuItem>
          <MenuItem href="/">Цени</MenuItem>
          <MenuItem href="/">Отзиви</MenuItem>
          <MenuItem href="/">За нас</MenuItem>
          <MenuItem href="/">Кариери</MenuItem>
          <MenuItem href="/">Магазин</MenuItem>
          <MenuItem href="/">Контакти</MenuItem>
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
      <MainFooter>
        <div class="flex flex-col gap-5 flex-wrap line-height-0 my-5 mx-auto w-full">
          <div class="w-full flex flex-jusify-center">
            <img class="mx-auto w-70% md-w-30%" src="/assets/the-barber-shop-logo1000-x-400-px.webp" alt="thebarbershop-logo" />
          </div>
          <div class="flex flex-col md-flex-row flex-justify-center flex-items-center my-2 md-gap-0 gap-1">
            <MainFooterMenuItem href="/">Услуги</MainFooterMenuItem>
            <MdiDot class="w-4 c-paper pt-2px mx-5 md-block hidden" />
            <MainFooterMenuItem href="/">Цени</MainFooterMenuItem>
            <MdiDot class="w-4 c-paper pt-2px mx-5 md-block hidden" />
            <MainFooterMenuItem href="/">Отзиви</MainFooterMenuItem>
            <MdiDot class="w-4 c-paper pt-2px mx-5 md-block hidden" />
            <MainFooterMenuItem href="/">За нас</MainFooterMenuItem>
            <MdiDot class="w-4 c-paper pt-2px mx-5 md-block hidden" />
            <MainFooterMenuItem href="/">Кариери</MainFooterMenuItem>
            <MdiDot class="w-4 c-paper pt-2px mx-5 md-block hidden" />
            <MainFooterMenuItem href="/">Магазин</MainFooterMenuItem>
            <MdiDot class="w-4 c-paper pt-2px mx-5 md-block hidden" />
            <MainFooterMenuItem href="/">Контакти</MainFooterMenuItem>
          </div>
          <div class="flex flex-justify-center mt-5 gap-2">
            <a href="/">
              <RiFacebookFill class="w-10 h-10 bg-brand hover-c-#07111c transition-colors p-1.5 c-paper" />
            </a>
            <a href="/">
              <RiInstagramLine class="w-10 h-10 bg-brand hover-c-#07111c transition-colors p-1.5 c-paper" />
            </a>
          </div>
        </div>
      </MainFooter>
      <BottomFooter>
        <p class="text-center lg-font-size-4 md-font-size-3 font-size-3.7 font-400 line-height-6 font-sans mb-0">Copyright &copy; <CurrentYear /> Fine Carpet Cleaning London</p>
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
      class={`h-${isScrolled() ? "92px" : "172px"} w-full z-3 fixed top-0 flex-content-center ${isScrolled() ? "lg-p-0px" : "lg-p-40px"} p-0px transition-all duration-300 ease-in-out ${
        isScrolled() ? "bg-#14100c" : "bg-transparent"
      }`}
    >
      <div
        style={`${isScrolled() ? "border-bottom: none;" : "border-bottom-color: rgba(255, 255, 255, 0.1);"} `}
        class={`header-border block lg-b-rd-4px lg-b-#dedede lg-b-2px border-b-solid border-b-1px ${isScrolled() ? "lg-b-none" : "lg-b-solid"} w-full relative line-height-92px ${
          isScrolled() ? "h-72px" : "h-92px"
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
  const [menuHeight, setMenuHeight] = createSignal("0px");

  const handleToggle = () => {
    if (open()) {
      setMenuHeight("0px");
      setTimeout(() => setOpen(false), 400);
    } else {
      setOpen(true);
      setMenuHeight("3500px");
    }
  };

  const closeMenu = () => {
    setMenuHeight("0px");
    setTimeout(() => setOpen(false), 400);
  };

  return (
    <div class="lg-hidden flex flex-content-center flex-items-center flex-justify-between w-full">
      <div class="flex flex-items-center flex-justify-center lg-pl-4 pl-0 z-99">
        <a href="/" onClick={closeMenu}>
          <img src="/assets/the-barber-shop-logo1000-x-400-px.webp" class="w-27 ml--2 mt-4" alt="fine-carpet-cleaning-logo" />
        </a>
      </div>
      <a href="/test">
        <button onClick={closeMenu}
          class="cursor-pointer bg-#d19d64 c-black b-solid b-2px b-#d19d64 uppercase font-size-4 font-500 px-7 py-2 hover-c-paper transition-colors b-rd-3px block lg-hidden" style="font-family: 'Oswald', sans-serif !important; letter-spacing: 1px;"
        >
          Запазете час
        </button>
      </a>
      <div class="ml-10 md-mr-10">
        <input type="checkbox" id="menu-checkbox" class="hidden" />
        <label
          id="burger-menu"
          for="menu-checkbox"
          onClick={handleToggle}
          class="relative cursor-pointer flex flex col flex-justify-between flex-col w-30px h-20px right-6 hamburger"
        >
          <div class={`line ${open() ? "open" : ""}`}></div>
          <div class={`line ${open() ? "open" : ""}`}></div>
          <div class={`line ${open() ? "open" : ""}`}></div>
        </label>
      </div>
      <Show when={open()}>
        <div
          class="fixed w-screen bg-#14100c left-0 top-19.6 px-10 transition-all transition-duration-400"
          style={{ height: menuHeight(), overflow: "hidden" }}
        >
          <div class="py-10 text-left">
            <MyDropdown closeMenu={closeMenu} />
          </div>
        </div>
      </Show>
    </div>
  );
}


const MyDropdown = (props: { closeMenu: () => void; }) => {
  const [isDropdownOpen, setDropdownOpen] = createSignal(false);

  const handleLinkClick = () => {
    props.closeMenu();
  };

  return (
    <div class="w-full overflow-y-auto max-h-770px sticky">
      <div class="py-4 b-b-solid b-b border-brand-action">
        <a onClick={handleLinkClick} href="/" class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <RiScissorsLine class="mr-3 c-brand" />Услуги
        </a>
      </div>
      <div class="py-4 b-b-solid b-b border-brand-action">
        <a onClick={handleLinkClick} href="/" class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <RiScissorsLine class="mr-3 c-brand" />Цени
        </a>
      </div>
      <div class="py-4 b-b-solid b-b border-brand-action">
        <a onClick={handleLinkClick} href="/" class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <RiScissorsLine class="mr-3 c-brand" />Отзиви
        </a>
      </div>
      <div class="py-4 b-b-solid b-b border-brand-action">
        <a onClick={handleLinkClick} href="/" class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <RiScissorsLine class="mr-3 c-brand" />За нас
        </a>
      </div>
      <div class="py-4 b-b-solid b-b border-brand-action">
        <a onClick={handleLinkClick} href="/" class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <RiScissorsLine class="mr-3 c-brand" />Кариери
        </a>
      </div>
      <div class="py-4 b-b-solid b-b border-brand-action">
        <a onClick={handleLinkClick} href="/" class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <RiScissorsLine class="mr-3 c-brand" />Магазин
        </a>
      </div>
      <div class="py-4 b-b-solid b-b border-brand-action">
        <a onClick={handleLinkClick} href="/" class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
          <RiScissorsLine class="mr-3 c-brand" />Контакти
        </a>
      </div>
    </div>
  );
};

function MainFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex flex-col flex-justify-center md-flex-justify-center bg-#14100c lg-p-10 p-6 md-p-5 flex-shrink-0 flex-items-center flex-wrap border-t-solid border-t-1px border-t-brand">
      {props.children}
    </div>
  );
}

function MainFooterMenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} class="line-height-7 text-left c-#8a8a8a hover-color-brand:hover font-normal font-size-4 font-sans uppercase important-font-400 transition-colors" style="font-family: 'Oswald', sans-serif">{props.children}</a>
}

function BottomFooterMenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} class="c-paper-inv hover-color-brand-second-action:hover font-normal lg-font-size-4 md-font-size-4 font-size-4 lg-py-1 md-py-2 font-sans">{props.children}</a>
}

function BottomFooter(props: { children: JSX.Element }) {
  return (
    <div
      class=" flex-col gap-0 bg-brand hidden py-1 flex-shrink-0 flex-justify-center flex-items-center">
      {props.children}
    </div>
  );
}

function BackToTopButton(props: { onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined; children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <button
      class="flex items-center justify-between cursor-pointer b-solid b-2px c-brand hover-c-#b56b1b b-brand hover-b-#b56b1b bg-transparent w-12 h-12 b-rd-50% transition-colors"
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
    <div class="block z-99 position-fixed right-4 bottom-4"
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