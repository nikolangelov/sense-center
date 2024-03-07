import 'uno.css'
import "./style.css";
import type { JSX } from "solid-js";
import { createSignal,Show } from "solid-js";
import HamburgerMenuIcon from '~icons/mdi/hamburger-menu';
import FacebookIcon from '~icons/mdi/facebook';
import YoutubeIcon from '~icons/ri/youtube-fill';
import InstagramIcon from '~icons/mdi/instagram';
import TwitterXLineIcon from '~icons/ri/twitter-x-line';

function MenuItem(props: {href:string, children: JSX.Element }) {
return <a href={props.href} class="hidden font-ui lg-flex top-bar-meniitem h-12 c-paper text-center font-size-4 xl-font-size-4.8 uppercase">{props.children}</a>
}

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <div class="flex flex-col">
      <Topbar>
        <Logo />
        <div class="flex whitespace-nowrap flex-nowrap flex-justify-end flex-items-end font-semibold gap-7 xl-gap-9xl md-pr-12 pr-6 flex-content-center flex-items-center">
          <MenuItem href="/kakvo-e-falun-dafa">Какво е Фалун Дафа</MenuItem>
          <MenuItem href="/">Защо е преследван</MenuItem>
          <MenuItem href="/">Отнемане на органи</MenuItem>
          <MenuItem href="/">По света</MenuItem>
          <MenuItem href="/">В България</MenuItem>
          <MenuItem href="/">Видеа</MenuItem>
          <HamburgerMenu/>
        </div>
      </Topbar>
      <Content>{props.children}</Content>
      <MainFooter>
        <MainFooterSocialIcons></MainFooterSocialIcons>
        <MainFooterMenuItem href="/kakvo-e-falun-dafa">Какво е Фалун Дафа</MainFooterMenuItem>
        <MainFooterMenuItem href="/">Защо е преследван</MainFooterMenuItem>
        <MainFooterMenuItem href="/">Отнемане на органи</MainFooterMenuItem>
        <MainFooterMenuItem href="/">По света</MainFooterMenuItem>
        <MainFooterMenuItem href="/">В България</MainFooterMenuItem>
        <MainFooterMenuItem href="/">Видеа</MainFooterMenuItem>
      </MainFooter>
      <BottomFooter>
        <div class="flex flex-row">
          <BottomFooterMenuItem href="/">Политика за поверителност</BottomFooterMenuItem>
          <div class="flex c-paper lg-font-size-5 md-font-size-5 font-size-5 lg-py-1.5 md-py-1 pt-3.5 lg-px-15 md-px-4 pr-3"> │ </div>
          <BottomFooterMenuItem href="/">За нас</BottomFooterMenuItem>
          <div class="flex c-paper lg-font-size-5 font-size-5 md-font-size-5 lg-py-1.5 md-py-1 pt-3.5 lg-px-15 md-px-4 pl-3"> │ </div>
          <BottomFooterMenuItem href="/">Условия за ползване</BottomFooterMenuItem>
        </div>
        <p class="c-paper text-center lg-font-size-3.5 md-font-size-3 font-size-3 font-400 lg-py-0 py-2" style="font-family: Open Sans, sans-serif;">Copyright &copy; 2000-2024 - Фалун Дафа информационен център - Всички права запазени.</p>
      </BottomFooter>
    </div>
  );
}

function Topbar(props: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      class="flex lg-py-6 lg-h-9 h-20 position-sticky top-0 border-b-2 bg-brand flex-justify-between flex-items-center">
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
        <img src="/assets/logo.png" class="lg-w-34 w-30 pl-8"/>
      </a>
    </div>
  );
}

function HamburgerMenu() {
  const [open,setOpen] = createSignal(false);
  return (
    <button class="bg-transparent cursor-pointer border-style-none lg-hidden" onClick={() => setOpen(true)}>
      <HamburgerMenuIcon class="w-10 h-10 color-brand-inv hover-color-brand-light"/>
       <Show when={open()}>
        <div class="fixed w-screen h-screen bg-pink left-0 top-0" onClick={() => setOpen(false)}/>
      </Show>
    </button>
  )
}

function MainFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex flex-col bg-brand-dark lg-p-4 p-6 md-p-5 flex-shrink-0 flex-justify-between flex-items-center">
      {props.children}
    </div>
  );
}

function MainFooterMenuItem(props: {href:string, children: JSX.Element }) {
  return <a href={props.href} class="flex c-paper text-center font-normal lg-font-size-4.2 md-font-size-4 font-size-4.5 lg-py-1 md-py-2 py-1 hover-color-paper-link-hover:hover" style="font-family: Open Sans, sans-serif;">{props.children}</a>
  }

  function FooterSocialIcon(props: { children: JSX.Element, url: string }) {
    return <a class="flex items-center justify-between color-brand-inv hover-color-brand-light lg-w-13 lg-h-13 md-w-12 md-h-12 w-12 h-12" href={props.url}>
      {props.children}
    </a>
  }

    function MainFooterSocialIcons() {
      return (
        <div class="flex items-center justify-center lg-mb-6 mb-7 lg-mt-5 mt-4 md-mt-5 md-mb-6 gap-lg"
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
          class="flex flex-col bg-#00152b p-3 flex-shrink-0 flex-justify-between flex-items-center">
          {props.children}
        </div>
      );
    }

    function BottomFooterMenuItem(props: {href:string, children: JSX.Element }) {
      return <a href={props.href} class="flex c-paper text-center font-normal lg-font-size-3.5 md-font-size-3.5 font-size-3.7 py-1.5  hover-color-brand:hover" style="font-family: Open Sans, sans-serif;">{props.children}</a>
    }
