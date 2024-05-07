import 'uno.css'
import "./style.css";
import { createEffect, JSX, onCleanup } from "solid-js";
import { createSignal,Show } from "solid-js";
import HamburgerMenuIcon from '~icons/mdi/hamburger-menu';
import FacebookIcon from '~icons/mdi/facebook';
import YoutubeIcon from '~icons/ri/youtube-fill';
import InstagramIcon from '~icons/mdi/instagram';
import TwitterXLineIcon from '~icons/ri/twitter-x-line';
import MdiKeyboardArrowUp from '~icons/mdi/keyboard-arrow-up';
import MdiMagnify from '~icons/mdi/magnify';
import RiCloseFill from '~icons/ri/close-fill';

function MenuItem(props: {href:string, children: JSX.Element }) {
return <a href={props.href} class="hidden font-ui lg-flex c-paper-inv text-center font-size-4 xl-font-size-3.5 uppercase font-sans hover-c-paper-link-hover:hover tracking-wide">{props.children}</a>
}

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <div class="flex flex-col">
      <Topbar>
        <Logo />
        <button class="whitespace-nowrap md-ml-10 font-serif uppercase font-500 c-paper overflow-hidden relative bg-paper b-double b-rd-1 b-4 b-transparent h-13 w-35 cursor-pointer font-size-3.5 tracking-wide" style="background-origin: border-box; background-clip: padding-box, border-box; box-shadow: 0 0 0 2.5px rgba(255, 255, 255, 1) inset; background-image: linear-gradient(90deg, rgb(13, 46, 41) 0%, rgb(26, 135, 94) 50%), radial-gradient(circle at left top, rgb(13, 46, 41), rgb(26, 135, 94));">Get a quote</button>
        <div class="flex whitespace-nowrap flex-nowrap flex-justify-end flex-items-end font-semibold gap-5 xl-gap-5xl md-pr-10 md-pl-10 pr-6 flex-content-center flex-items-center">
          <MenuItem href="/WhatIsFalunDafa">Services</MenuItem>
          <MenuItem href="/">Prices</MenuItem>
          <MenuItem href="/">Reviews</MenuItem>
          <MenuItem href="/">About us</MenuItem>
          <MenuItem href="/Falun-Dafa-v-Bulgaria">Areas we cover</MenuItem>
          <MenuItem href="/">Contact us</MenuItem>
          <MenuItem href="/">Feedback</MenuItem>
          <HamburgerMenu/>
        </div>
      </Topbar>
      <Content>{props.children}</Content>
      <BackToTopArrow></BackToTopArrow>
      <MainFooter>
        <div class="flex flex-col gap-14 my-10">
        <div class="flex justify-between">
            <LogoInFooter/>
            <MainFooterSocialIcons></MainFooterSocialIcons>
          </div>
          <div class="flex flex-row gap-5 flex-wrap line-height-0 flex-items-center">
            <MainFooterMenuItem href="/kakvo-e-falun-dafa">Какво е Фалун Дафа</MainFooterMenuItem>
            <div class="flex c-paper-inv lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 px-0"> | </div>
            <MainFooterMenuItem href="/">Защо е преследван</MainFooterMenuItem>
            <div class="flex c-paper-inv lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 px-0"> | </div>
            <MainFooterMenuItem href="/">Отнемане на органи</MainFooterMenuItem>
            <div class="flex c-paper-inv lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 px-0"> | </div>
            <MainFooterMenuItem href="/">По света</MainFooterMenuItem>
            <div class="flex c-paper-inv lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 px-0"> | </div>
            <MainFooterMenuItem href="/">В България</MainFooterMenuItem>
            <div class="flex c-paper-inv lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 px-0"> | </div>
            <MainFooterMenuItem href="/">Видеа</MainFooterMenuItem>
          </div>
        </div>
      </MainFooter>
      <BottomFooter>
        <p class="c-gray-3 text-center lg-font-size-3.5 md-font-size-3 font-size-3.5 font-400 line-height-6 font-sans">Copyright &copy; 2024 Fine Carpet Cleaning London</p>
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
      class="flex justify-center bg-paper-border lg-p-4 p-6 md-p-5 flex-shrink-0 flex-items-center">
      {props.children}
    </div>
  );
}

function MainFooterMenuItem(props: {href:string, children: JSX.Element }) {
  return <a href={props.href} class="flex c-paper-inv text-center font-medium lg-font-size-4.2 md-font-size-4 font-size-4.5 lg-py-1 md-py-2 py-1 hover-color-paper-link-hover:hover">{props.children}</a>
  }

function FooterSocialIcon(props: { children: JSX.Element, url: string }) {
  return <a class="flex flex-items-center justify-between color-paper-inv hover-color-brand-light lg-w-10 lg-h-10 md-w-10 md-h-10 w-10 h-10" href={props.url}>
    {props.children}
  </a>
}

function MainFooterSocialIcons() {
  return (
    <div class="flex items-center gap-lg"
    >
      <FooterSocialIcon url='/'>
        <FacebookIcon class='w-95% h-95%'/>
      </FooterSocialIcon>
      <FooterSocialIcon url='/'>
        <YoutubeIcon class='w-full h-full'/>
      </FooterSocialIcon>
      <FooterSocialIcon url='/'>
        <InstagramIcon class='w-90% h-90%'/>
      </FooterSocialIcon>
      <FooterSocialIcon url='/'>
        <TwitterXLineIcon class='w-80% h-80%'/>
      </FooterSocialIcon>
    </div>
  );
}

function BottomFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex flex-col gap-3 bg-#00152b py-9 flex-shrink-0 flex-justify-between flex-items-center">
      {props.children}
    </div>
  );
}

function BottomFooterMenuItem(props: {href:string, children: JSX.Element }) {
  return <a href={props.href} class="flex c-gray-3 text-center font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 py-1.5 hover-color-brand:hover line-height-5">{props.children}</a>
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

  