import 'uno.css'
import "./style.css";

import { Link } from "../components/Link";
import type { JSX } from "solid-js";


import { render } from "solid-js/web";
import { createSignal,Show } from "solid-js";

function MenuItem(props: {href:string, children: JSX.Element }) {
return <a href={props.href}class="flex sm-hidden lg-flex top-bar-meniitem h-10 c-white text-center  font-size-4 uppercase">{props.children}</a>
}

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <div class="flex flex-col"
    >
      <Blackbar> 
        <div>
          <a class="hover-color-white color-gray-4 font-size-3" href="/">Faluninfo.net</a>
          <span class="c-white"> | </span>
          <a class="hover-color-white color-gray-4 font-size-3" href="/">Фалунинфо ТВ</a>
          <span class="c-white"> | </span>
          <a class="hover-color-white color-gray-4 font-size-3" href="/">Фалунинфо ГАЛЕРИЯ</a>
          <span class="c-white"> | </span>
          <Counter></Counter>
        </div>
      </Blackbar>
      <Topbar>
        <Logo />
        <div class="flex whitespace-nowrap flex-nowrap flex-justify-end flex-items-end font-size-14px font-semibold font-sans gap-1 xl-gap-4">
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

function Counter() {
  const [open,setOpen] = createSignal(false);

  return (
    <>
      <Show when={!open()}>
        <button class="hover-color-white cursor-pointer color-gray-4 bg-transparent b-none" onClick={() => setOpen(true)}>&#128269;</button>
      </Show>
        <Show when={open()}>
            <input type="text" />
            <button class="bg-black c-white font-extrabold b-none cursor-pointer" type="submit">GO</button>
        </Show>
        <Show when={open()}>
          <button class="hover-color-white cursor-pointer color-gray-4 bg-transparent b-none" onClick={()=>setOpen(false)}>&#10006;</button>
        </Show>
    </>
  );
}

function Topbar(props: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      class="flex p-8 flex-shrink-0 line-height-5 border-b-2 bg-blue-9 flex-justify-between sm-flex-items-center lg-flex-items-end"
    >
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

function Blackbar(props: { children: JSX.Element }) {
  return (
    <div 
    class="flex p-2 bg-gray-9 justify-end"
    >
      {props.children}
    </div>
  )
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
