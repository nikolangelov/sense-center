import 'uno.css'
import "./style.css";
import type { JSX } from "solid-js";
import { createSignal,Show } from "solid-js";

function MenuItem(props: {href:string, children: JSX.Element }) {
return <a href={props.href} class="flex sm-hidden lg-flex top-bar-meniitem h-13 c-paper text-center font-size-4 xl-font-size-4.5 uppercase">{props.children}</a>
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
    </div>
  );
}

function Topbar(props: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      class="flex p-8 flex-shrink-0 line-height-5 border-b-2 bg-brand flex-justify-between flex-items-center">
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