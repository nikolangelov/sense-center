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
return <a href={props.href} class="hidden font-ui lg-flex top-bar-meniitem h-11.5 c-paper text-center font-size-4 xl-font-size-4 uppercase">{props.children}</a>
}

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <div class="flex flex-col">
      <Topbar>
        <Logo />
        <div class="flex whitespace-nowrap flex-nowrap flex-justify-end flex-items-end font-semibold gap-5 xl-gap-4xl md-pr-10 md-pl-10 pr-6 flex-content-center flex-items-center">
          <MenuItem href="/WhatIsFalunDafa">Какво е Фалун Дафа</MenuItem>
          <MenuItem href="/">Защо е преследван</MenuItem>
          <MenuItem href="/">Отнемане на органи</MenuItem>
          <MenuItem href="/">По света</MenuItem>
          <MenuItem href="/Falun-Dafa-v-Bulgaria">В България</MenuItem>
          <MenuItem href="/">Видеа</MenuItem>
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
            <SearchBar></SearchBar>
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
        <div class="flex pt-2 -mb-4 flex-wrap justify-center">
          <a class="block c-gray-3 py-2 pl-2 font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 hover-color-brand:hover" rel="noopener" target="_blank" href="https://faluninfo.net">English</a>
          <div class="flex c-gray-3 lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 lg-px-5 md-px-4 px-2.5"> | </div>
          <a class="block c-gray-3 py-2 pl-2 font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 hover-color-brand:hover" rel="noopener" target="_blank" href="https://fr.faluninfo.net">Français</a>
          <div class="flex c-gray-3 lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 lg-px-5 md-px-4 px-2.5"> | </div>
          <a class="block c-gray-3 py-2 pl-2 font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 hover-color-brand:hover" rel="noopener" target="_blank" href="https://il.faluninfo.net">עִברִית</a>
          <div class="flex c-gray-3 lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 lg-px-5 md-px-4 px-2.5"> | </div>
          <a class="block c-gray-3 py-2 pl-2 font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 hover-color-brand:hover" rel="noopener" target="_blank" href="https://pl.faluninfo.net">Polska</a>
          <div class="flex c-gray-3 lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 lg-px-5 md-px-4 px-2.5"> | </div>
          <a class="block c-gray-3 py-2 pl-2 font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 hover-color-brand:hover" rel="noopener" target="_blank" href="https://es.faluninfo.net">Español</a>
          <div class="flex c-gray-3 lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 lg-px-5 md-px-4 px-2.5"> | </div>
          <a class="block c-gray-3 py-1.5 pl-2 font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 hover-color-brand:hover" rel="noopener" target="_blank" href="https://jp.faluninfo.net">日本語</a>
        </div>
        <div class="flex pb-1 flex-wrap justify-center">
          <a class="block c-gray-3 py-2 pl-2 font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 hover-color-brand:hover" rel="noopener" target="_blank" href="https://faluninfo.net">Italian</a>
          <div class="flex c-gray-3 lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 lg-px-5 md-px-4 px-2.5"> | </div>
          <a class="block c-gray-3 py-2 pl-2 font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 hover-color-brand:hover" rel="noopener" target="_blank" href="https://fr.faluninfo.net">Swedish</a>
          <div class="flex c-gray-3 lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 lg-px-5 md-px-4 px-2.5"> | </div>
          <a class="block c-gray-3 py-2 pl-2 font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 hover-color-brand:hover" rel="noopener" target="_blank" href="https://il.faluninfo.net">Macedonian</a>
          <div class="flex c-gray-3 lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 lg-px-5 md-px-4 px-2.5"> | </div>
          <a class="block c-gray-3 py-2 pl-2 font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 hover-color-brand:hover" rel="noopener" target="_blank" href="https://pl.faluninfo.net">Greek</a>
          <div class="flex c-gray-3 lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 lg-px-5 md-px-4 px-2.5"> | </div>
          <a class="block c-gray-3 py-2 pl-2 font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 hover-color-brand:hover" rel="noopener" target="_blank" href="https://es.faluninfo.net">Turkish</a>
          <div class="flex c-gray-3 lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-1 lg-px-5 md-px-4 px-2.5"> | </div>
          <a class="block c-gray-3 py-1.5 pl-2 font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 hover-color-brand:hover" rel="noopener" target="_blank" href="https://jp.faluninfo.net">Korean</a>
        </div>
        <hr class="w-85% h-0.4 bg-gray-6 my-4 b-none"></hr>
        <div class="flex flex-row justify-center">
            <BottomFooterMenuItem href="/">Политика за поверителност</BottomFooterMenuItem>
            <div class="flex c-paper lg-font-size-5 md-font-size-5 font-size-5 lg-py-1 md-py-1 md-pt-2 pt-3 lg-px-5 md-px-4 pl-3 pr-4"> | </div>
            <BottomFooterMenuItem href="/">За нас</BottomFooterMenuItem>
            <div class="flex c-paper lg-font-size-5 font-size-5 md-font-size-5 lg-py-1 md-py-1 md-pt-2 pt-3 lg-px-5 md-px-4 pl-4 pr-3"> | </div>
            <BottomFooterMenuItem href="/">Условия за ползване</BottomFooterMenuItem>
        </div>
        <p class="c-gray-3 text-center lg-font-size-3.5 md-font-size-3 font-size-3.5 font-400 line-height-6 -mt-2">Copyright &copy; 2000-2024 - Фалун Дафа информационен център - Всички права запазени.</p>
      </BottomFooter>
    </div>
  );
}

function Topbar(props: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      class="flex lg-py-6 lg-h-20 h-20 position-sticky -top-0.1 border-b-2 border-t-1 bg-brand flex-justify-between flex-items-center z-9999">
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
        <img src="/assets/logo.png" class="lg-w-42 w-40 pl-8"/>
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

function SearchBar(props: any) {
  const [isSearchVisible, setIsSearchVisible] = createSignal(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible());
  };

  return (
    <div class="">
      <MdiMagnify class={`c-paper-inv cursor-pointer hover-color-brand-light ml-30 ${isSearchVisible() ? 'opacity-0' : ''}`} onClick={toggleSearch} />
      <div class={`transition-all fixed top-20 left-0 w-full z-50 flex justify-center ${isSearchVisible() ? '' : 'pointer-events-none'}`}>
        <div class={`bg-paper-border h-30 px-100.4 z-50 flex justify-center items-center transition-all ease-in-out duration-300 ${isSearchVisible() ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
          <RiCloseFill class="c-paper-inv cursor-pointer hover-color-brand-light mt-0.6 mr-2 font-size-6" onClick={toggleSearch} />
          
          <form action="" class="flex items-center w-150 h-12 border-solid border-2 border-paper bg-transparent rounded-4 justify-between">
            <input
              type="search"
              class="border-none focus:border-none focus:outline-none bg-transparent w-140 h-12 ml-5"
              name="search"
              placeholder=""
              pattern=".*\S.*"
              required
            />
            <button
              type="submit"
              class="w-13 h-12 border-2 border-paper border-solid border-r-none c-paper-inv font-size-4.5 bg-transparent cursor-pointer hover-color-brand-light rounded-r-4 flex justify-center flex-items-center"
              name="submit"
            >
              <MdiMagnify class=""/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}




function LogoInFooter() {
  return (
    <div class="flex items-center justify-center">
      <a href="/">
        <img src="/assets/logo11.png" class="lg-w-35 w-30"/>
      </a>
    </div>
  );
}

  