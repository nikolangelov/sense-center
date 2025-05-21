import 'uno.css'
import "./style.css";
import { children, createEffect, createSignal, JSX, onCleanup, onMount, Show } from "solid-js";
import RiArrowDropUpFill from '~icons/ri/arrow-drop-up-fill';
import RiCloseLine from '~icons/ri/close-line';

export default function LayoutDefault(props: { children?: JSX.Element }) {
  const childrenMemo = children(() => props.children)

  return (
    <div class="flex flex-col">
      <Topbar>
        <a href="/" class="md:w-33% flex whitespace-nowrap justify-center items-center font-semibold lg:gap-8 xl:gap-18 my-auto md:mb-0 md:mt-1">
          <img src="/assets/zhen-shan-ren-logo.png" class="lg-w-35 w-20" alt="zhen-shan-ren-art-logo" />
        </a>

        <div class="hidden sm:flex w-full md:w-33% whitespace-nowrap justify-center md:justify-end items-center font-semibold gap-2 lg:gap-8 xl:gap-12 md:pr-10 md:pl-5 xl:pl-10">
          <MenuItem href="#info-section">Информация</MenuItem>

          <MenuItem href="#art-section">Картини</MenuItem>

          <MenuItem href="#artists-section">Художници</MenuItem>

          <MenuItem href="#reviews-section">Отзиви</MenuItem>

          <MenuItem href="#tour-section">Градове</MenuItem>
        </div>
      </Topbar>
      <Content>{childrenMemo()}</Content>
      <BackToTopArrow></BackToTopArrow>
      <MainFooter>
        <div class="flex flex-col gap-5 flex-wrap line-height-0 mx-auto w-full">
          <div class="flex flex-col justify-center items-center md:gap-2 lg-gap-5 xl-gap-0 py-10 px-3">
            <img src="/assets/lotus-icon.png" class="c-brand w-10 h-10" />
            <p class="text-center">Всички права запазени © Copyright Zhen-Shan-Ren-Art.bg</p>
            <a
              href="mailto:contact@zhen-shan-ren-art.bg"
              class="text-center c-brand-dark hover-c-paper-inv transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@zhen-shan-ren-art.bg
            </a>
          </div>
        </div>
      </MainFooter>
    </div>
  );
}

function MenuItem(props: { href: string, children: JSX.Element }) {
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

  return <div class="relative group"><a href={props.href} style="font-family: 'Lora', serif" class={`block relative py-1 font-ui lg-flex ${isScrolled() ? "c-paper-inv" : "c-paper"} text-center font-size-3.3 md:font-size-3.8 tracking-0.3 hover-c-brand font-500 transition-all after:content-empty after:absolute after:bottom-0 after:left-0 after:right-0 after:w-0 after:h-0.5 after:bg-brand after:transition-all group-hover:after:w-full`}>{props.children}</a></div>
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
      class={`h-50px sm:h-80px w-full z-35 fixed top-0 flex-content-center lg-p-40px p-0px transition-all duration-300 ease-in-out ${isScrolled() ? "bg-paper" : "bg-transparent"}`}>
      <div class="mx-auto max-w-full flex md:flex-row flex-col justify-start sm:justify-center md:justify-between flex-items-center h-full">
        {props.children}
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

function MainFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex flex-col flex-justify-center md-flex-justify-center flex-shrink-0 flex-items-center flex-wrap b-t-solid b-t-1px" style="border-top-color: rgba(209, 157, 100, 0.3); background-position: center center; background-repeat: no-repeat; background-size: cover; filter: grayscale(0%);">
      {props.children}
    </div>
  );
}

function BackToTopButton(props: { onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined; children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <button
      class="flex items-center justify-between cursor-pointer b-solid b-2px c-brand hover-c-#d1934f b-brand hover-b-#d1934f bg-transparent md-w-12 md-h-12 w-10 h-10 b-rd-50% transition-colors"
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
    <div class="block z-1 position-fixed right-2 bottom-2 md-right-4 md-bottom-4"
      classList={{
        'back-to-top-arrow': true,
        'visible': isVisible(),
      }}
    >
      <BackToTopButton onClick={handleScrollToTop}>
        <RiArrowDropUpFill class="mx-auto w-10 h-10" />
      </BackToTopButton>
    </div>
  );
}
