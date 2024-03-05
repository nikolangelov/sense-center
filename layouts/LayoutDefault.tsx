import 'uno.css'
import "./style.css";
import type { JSX } from "solid-js";
import { createSignal,Show } from "solid-js";

function MenuItem(props: {href:string, children: JSX.Element }) {
return <a href={props.href} class="flex sm-hidden lg-flex top-bar-meniitem h-14 c-paper text-center font-size-4 xl-font-size-4.8 uppercase">{props.children}</a>
}

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <div class="flex flex-col"
    >
      <Topbar>
        <Logo />
        <div class="flex whitespace-nowrap flex-nowrap flex-justify-end flex-items-end font-semibold gap-1 xl-gap-7xl flex-content-center flex-items-center">
          <MenuItem href="/">Какво е Фалун Дафа</MenuItem>
          <MenuItem href="/">Защо е преследван</MenuItem>
          <MenuItem href="/">Отнемане на органи</MenuItem>
          <MenuItem href="/">По света</MenuItem>
          <MenuItem href="/">В България</MenuItem>
          <MenuItem href="/">Видеа</MenuItem>
          <HamburgerMenu>
          </HamburgerMenu>
        </div>
      </Topbar>
      <Content>{props.children}</Content>
      <MainFooter>
        <MainFooterSocialIcons></MainFooterSocialIcons>
        <MainFooterMenuItem href="/">Какво е Фалун Дафа</MainFooterMenuItem>
        <MainFooterMenuItem href="/">Защо е преследван</MainFooterMenuItem>
        <MainFooterMenuItem href="/">Отнемане на органи</MainFooterMenuItem>
        <MainFooterMenuItem href="/">По света</MainFooterMenuItem>
        <MainFooterMenuItem href="/">В България</MainFooterMenuItem>
        <MainFooterMenuItem href="/">Видеа</MainFooterMenuItem>
      </MainFooter>
      <BottomFooter>
        <div class="flex flex-row">
          <BottomFooterMenuItem href="/">Политика за поверителност</BottomFooterMenuItem>
          <div class="flex c-paper lg-font-size-5 font-size-13 lg-py-1.5 pt-5 lg-px-15 pr-8"> │ </div>
          <BottomFooterMenuItem href="/">За нас</BottomFooterMenuItem>
          <div class="flex c-paper lg-font-size-5 font-size-13 lg-py-1.5 pt-5 lg-px-15 pl-8"> │ </div>
          <BottomFooterMenuItem href="/">Условия за ползване</BottomFooterMenuItem>
        </div>
        <p class="c-paper text-center lg-font-size-3.5 font-size-8 font-400 lg-py-0 py-5" style="font-family: Open Sans, sans-serif;">Copyright &copy; 2000-2024 - Фалун Дафа информационен център - Всички права запазени.</p>
      </BottomFooter>
    </div>
  );
}

function Topbar(props: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      class="flex lg-p-5 p-12 position-sticky top-0 flex-shrink-0 line-height-5 border-b-2 bg-brand flex-justify-between flex-items-center">
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
    <div
      style={{
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
      }}
    >
      <a href="/">
        <img src="/assets/logo.png" class="lg-w-34 lg-h-10 w-85 h-20"/>
      </a>
    </div>
  );
}

function HamburgerMenu(props: { children: JSX.Element }) {
  const [open,setOpen] = createSignal(false);
  return (
    <button class="bg-transparent cursor-pointer border-style-none lg-hidden" onClick={() => setOpen(true)}>
      <img src="/assets/burger-menu.svg"></img>
       <Show when={open()}>
        <div class="fixed w-screen h-screen bg-pink left-0 top-0" onClick={() => setOpen(false)}>
          {props.children}
        </div>
      </Show>
    </button>
  )
}

function MainFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex flex-col bg-brand-dark lg-p-4 p-10 flex-shrink-0 flex-justify-between flex-items-center">
      {props.children}
    </div>
  );
}

function MainFooterMenuItem(props: {href:string, children: JSX.Element }) {
  return <a href={props.href} class="flex c-paper text-center font-normal lg-font-size-4.2 font-size-10 lg-py-1 py-3 hover-color-paper-link-hover:hover" style="font-family: Open Sans, sans-serif;">{props.children}</a>
  }

    function MainFooterSocialIcons() {
      return (
        <div class="flex flex-items-center lg-mb-6 mb-10 lg-mt-5 mt-9"
        >
          <a class="lg-mx-7 mx-10 lg-my-0" href="/">
            <img src="\assets\SVG Icons\youtube.svg" class="lg-w-13 lg-h-13 w-20 h-20"/>
          </a>
          <a class="lg-mx-7 mx-10 lg-my-0" href="/">
            <img src="\assets\SVG Icons\facebook.svg" class="lg-w-11 lg-h-11 w-18 h-18"/>
          </a>
          <a class="lg-mx-7 mx-10 lg-my-0" href="/">
            <img src="\assets\SVG Icons\instagram.svg" class="lg-w-12 lg-h-12 w-19 h-19"/>
          </a>
          <a class="lg-mx-7 mx-10 lg-my-0" href="/">
            <img src="\assets\SVG Icons\square-x-twitter.svg" class="lg-w-12 lg-h-12 w-19 h-19"/>
          </a>
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" class="lg-w-11 lg-h-11 w-18 h-18" viewBox="0 0 512 512"><path fill="#fafafa" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
          </a>
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
      return <a href={props.href} class="flex c-paper text-center font-normal lg-font-size-3.5 font-size-9 py-1.5  hover-color-brand:hover" style="font-family: Open Sans, sans-serif;">{props.children}</a>
    }
