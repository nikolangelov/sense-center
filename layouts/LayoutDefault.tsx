import 'uno.css'
import "./style.css";

import { Link } from "../components/Link";
import type { JSX } from "solid-js";

function MenuItem(props: {href:string, children: JSX.Element }) {
return <a href={props.href}class="c-white">{props.children}</a>
}

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <div class="flex flex-col"
    >
      <Topbar>
        <Logo />
        <div class="flex flex-justify-end flex-items-center">
          <MenuItem href="/">Welcome</MenuItem>
          <MenuItem href="/star-wars">Data Fetching</MenuItem>
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
      class="flex p-4 flex-shrink-0 line-height-7 border-b-2 bg-blue-9 flex-justify-between"
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
        "margin-top": "20px",
        "margin-bottom": "10px",
      }}
    >
      <a href="/">
        <img src="/assets/logo.png" width={150} height={43} />
      </a>
    </div>
  );
}
