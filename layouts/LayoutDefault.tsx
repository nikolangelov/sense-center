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
          <MainFooterMenuItem href="/">За нас</MainFooterMenuItem>
          <MainFooterMenuItem href="/">Политика за поверителност</MainFooterMenuItem>
          <MainFooterMenuItem href="/">Условия за ползване</MainFooterMenuItem>
        </div>
        <p class="c-paper">Copyright &copy; 2000-2024 - Фалун Дафа информационен център - Всички права запазени.</p>
      </BottomFooter>
    </div>
  );
}

function Topbar(props: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      class="flex p-5 position-sticky top-0 flex-shrink-0 line-height-5 border-b-2 bg-brand flex-justify-between flex-items-center">
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
        <img src="/assets/logo.png" width={150} height={43} />
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
      class="flex flex-col bg-brand-dark p-10 flex-shrink-0 flex-justify-between flex-items-center">
      {props.children}
    </div>
  );
}

function MainFooterMenuItem(props: {href:string, children: JSX.Element }) {
  return <a href={props.href} class="flex c-paper text-center font-normal font-size-4.5 py-1.5 hover-color-paper-link-hover:hover" style="font-family: Open Sans, sans-serif;">{props.children}</a>
  }

    function MainFooterSocialIcons() {
      return (
        <div class="flex grid-items-center mb-7"
        >
          <a class="mr-7 ml-7" href="/">
            <img src="\assets\SVG Icons\youtube.svg" width={50} height={50} />
          </a>
          <a class="mr-7 ml-7" href="/">
            <img src="\assets\SVG Icons\facebook.svg" width={40} height={40} />
          </a>
          <a class="mr-7 ml-7" href="/">
            <img src="\assets\SVG Icons\instagram.svg" width={45} height={45} />
          </a>
          <a class="mr-7 ml-7" href="/">
            <img src="\assets\SVG Icons\square-x-twitter.svg" width={45} height={45} />
          </a>
        </div>
      );
    }

    function BottomFooter(props: { children: JSX.Element }) {
      return (
        <div
          class="flex flex-col bg-brand p-10 flex-shrink-0 flex-justify-between flex-items-center">
          {props.children}
        </div>
      );
    }