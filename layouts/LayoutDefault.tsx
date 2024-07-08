import 'uno.css'
import "./style.css";
import { createEffect, JSX, onCleanup } from "solid-js";
import { createSignal,Show } from "solid-js";
import HamburgerMenuIcon from '~icons/mdi/hamburger-menu';
import MdiKeyboardArrowUp from '~icons/mdi/keyboard-arrow-up';
import RiPhoneFill from '~icons/ri/phone-fill';
import MdiClock from '~icons/mdi/clock';
import MdiEmail from '~icons/mdi/email';

function MenuItem(props: {href:string, children: JSX.Element }) {
return <a href={props.href} class="hidden font-ui lg-flex c-paper-inv text-center font-size-4 xl-font-size-3.5 uppercase font-sans hover-c-paper-link-hover:hover tracking-wide">{props.children}</a>
}

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <div class="flex flex-col">
      <Topbar>
        <Logo />
        <button class="get-a-quote-button whitespace-nowrap md-ml-10 font-serif uppercase font-500 c-paper overflow-hidden relative bg-paper b-double b-rd-1 b-4 b-transparent h-13 w-35 cursor-pointer font-size-3.5 tracking-wide" style="background-origin: border-box; background-clip: padding-box, border-box; box-shadow: 0 0 0 2.5px rgba(255, 255, 255, 1) inset; background-image: linear-gradient(90deg, rgb(13, 46, 41) 0%, rgb(26, 135, 94) 50%), radial-gradient(circle at left top, rgb(13, 46, 41), rgb(26, 135, 94));">Get a quote</button>
        <div class="flex whitespace-nowrap flex-nowrap flex-justify-end flex-items-end font-semibold gap-5 xl-gap-5xl md-pr-10 md-pl-10 pr-6 flex-content-center flex-items-center">
          <MenuItem href="/Carpet-cleaning-London">Services</MenuItem>
          <MenuItem href="/Prices">Prices</MenuItem>
          <MenuItem href="/Reviews">Reviews</MenuItem>
          <MenuItem href="/About-us">About us</MenuItem>
          <MenuItem href="/Areas-we-cover">Areas we cover</MenuItem>
          <MenuItem href="/Contact-us">Contact us</MenuItem>
          <MenuItem href="/">Feedback</MenuItem>
          <HamburgerMenu/>
        </div>
      </Topbar>
      <Content>{props.children}</Content>
      <BackToTopArrow></BackToTopArrow>
      <MainFooter>

            <div class="flex flex-col gap-5 flex-wrap line-height-0 my-5">
              <h3 class="font-size-4.5 uppercase font-letter tracking-widest mt-0 mb-2 c-paper font-600">Contacts</h3>
              <div class="flex flex-items-center gap-2">
                <RiPhoneFill class="w-10 h-10 c-paper"/>
                <div class="flex flex-col line-height-none">
                  <MainFooterMenuItem href="/">07874 333 356</MainFooterMenuItem>
                  <MainFooterMenuItem href="/">02036 370 033</MainFooterMenuItem>
                </div>
              </div>
              <div class="flex flex-items-center gap-2">
                <MdiEmail class="w-10 h-10 c-paper"/>
                <MainFooterMenuItem href="/">office@finecarpetcleaning.co.uk</MainFooterMenuItem>
              </div>
              <div class="flex flex-items-center gap-2">
                <MdiClock class="w-10 h-10 c-paper"/>
                <div class="flex flex-col line-height-none">
                  <div class="c-paper font-normal lg-font-size-4 md-font-size-4 font-size-4.5 font-sans">Monday - Sunday</div>
                  <div class="c-paper font-normal lg-font-size-4 md-font-size-4 font-size-4.5 font-sans">9:00 - 18:00</div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-5 flex-wrap line-height-0 my-5">
              <h3 class="font-size-4.5 uppercase font-letter tracking-widest mt-0 mb-2 c-paper font-600">Our most popular services</h3>
              <MainFooterMenuItem href="/kakvo-e-falun-dafa">Carpet Cleaning London</MainFooterMenuItem>
              <MainFooterMenuItem href="/">Rug Cleaning</MainFooterMenuItem>
              <MainFooterMenuItem href="/">Upholstery Cleaning London</MainFooterMenuItem>
              <MainFooterMenuItem href="/">Steam Carpet Cleaning London</MainFooterMenuItem>
              <MainFooterMenuItem href="/">Carpet Stain Removal</MainFooterMenuItem>
              <MainFooterMenuItem href="/">Antiviral sanitisation</MainFooterMenuItem>
              <MainFooterMenuItem href="/">Coronavirus Disinfection</MainFooterMenuItem>
            </div>
            <div class="flex flex-col gap-5 flex-wrap line-height-0 my-5">
              <h3 class="font-size-4.5 uppercase font-letter tracking-widest mt-0 mb-2 c-paper font-600">Menu</h3>
              <MainFooterMenuItem href="/">Home</MainFooterMenuItem>
              <MainFooterMenuItem href="/">Prices</MainFooterMenuItem>
              <MainFooterMenuItem href="/">Areas we cover</MainFooterMenuItem>
            </div>

      </MainFooter>
      <BottomFooter>
        <p class="text-center lg-font-size-4 md-font-size-3 font-size-3.7 font-400 line-height-6 font-sans">Copyright &copy; 2024 Fine Carpet Cleaning London</p>
      </BottomFooter>
    </div>
  );
}

function Topbar(props: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      class="flex lg-py-6 lg-h-20 h-20 position-sticky -top-0.1 border-b-2 border-t-1 bg-#f7f7f7 flex-justify-center flex-items-center z-9998" style="box-shadow: 0 0px 10px 0 rgba(50, 50, 50, 0.5);">
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
    <div class="flex items-center justify-center md-pl-4 pl-0">
      <a href="/">
        <img src="/assets/FCC_2024_png.png" class="lg-w-22 w-20 ml-10 mt-7"/>
      </a>
    </div>
  );
}

function HamburgerMenu() {
  const [open, setOpen] = createSignal(false);

  const handleClick = () => {
    setOpen(!open());
  };

  return (
    <button class="bg-transparent cursor-pointer border-style-none lg-hidden" onClick={handleClick}>
      <HamburgerMenuIcon class="w-10 h-10 color-brand-inv hover-color-brand-light"/>
      <Show when={open()}>
        <div class="fixed w-screen h-screen bg-brand left-0 top-19.6 px-10">
          <div class="py-15 text-left">
            <div class="py-5 b-b-solid b-b border-brand-light"><a href="/WhatIsFalunDafa" class="c-paper font-size-6 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">Какво е Фалун Дафа</a></div>
            <div class="py-5 b-b-solid b-b border-brand-light"><a href="/" class="c-paper font-size-6 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">Защо е преследван</a></div>
            <div class="py-5 b-b-solid b-b border-brand-light"><a href="/" class="c-paper font-size-6 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">Отнемане на органи</a></div>
            <div class="py-5 b-b-solid b-b border-brand-light"><a href="/" class="c-paper font-size-6 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">По света</a></div>
            <div class="py-5 b-b-solid b-b border-brand-light"><a href="/" class="c-paper font-size-6 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">В България</a></div>
            <div class="py-5 b-b-solid b-b border-brand-light"><a href="/" class="c-paper font-size-6 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">Видеа</a></div>
          </div>
        </div>
      </Show>
    </button>
  );
}

function MainFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex flex-justify-evenly bg-brand-dark lg-p-10 p-6 md-p-5 flex-shrink-0 flex-items-start flex-wrap">
      {props.children}
    </div>
  );
}

function MainFooterMenuItem(props: {href:string, children: JSX.Element }) {
  return <a href={props.href} class="c-#9fcdb0 hover-color-paper:hover font-normal lg-font-size-4 md-font-size-4 font-size-4.5 lg-py-1 md-py-2 py-1 font-sans">{props.children}</a>
  }

function BottomFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex bg-#d6d6d6 py-1 flex-shrink-0 flex-justify-center flex-items-center">
      {props.children}
    </div>
  );
}

function BackToTopButton(props: { onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined; children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <button
      class="flex items-center justify-between cursor-pointer b-none color-brand-inv bg-brand-light hover-bg-brand w-10 h-10"
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
    <div class="block z-9999 position-fixed right-3 bottom-5"
      classList={{
        'back-to-top-arrow': true,
        'visible': isVisible(),
      }}
    >
      <BackToTopButton onClick={handleScrollToTop}>
        <MdiKeyboardArrowUp class="w-full h-full ma" />
      </BackToTopButton>
    </div>
  );
}






function LogoInFooter() {
  return (
    <div class="flex items-center justify-center">
      <a href="/">
        <img src="/assets/FCC_2024_png.png" class="lg-w-22 w-20"/>
      </a>
    </div>
  );
}

  