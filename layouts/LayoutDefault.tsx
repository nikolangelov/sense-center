import 'uno.css'
import "./style.css";
import { children, createEffect, createSignal, JSX, onCleanup, onMount, Show } from "solid-js";
import RiArrowDropUpFill from '~icons/ri/arrow-drop-up-fill';
import { AnimatedComponent } from '../components/AnimateOnView';
import MdiEmail from '~icons/mdi/email';
import MdiClockTimeTwo from '~icons/mdi/clock-time-two';
import MdiPhone from '~icons/mdi/phone';
import { PuzzleButton, PuzzleButton2 } from '../components/PuzzleButton';
import MdiArrowUp from '~icons/mdi/arrow-up';

export default function LayoutDefault(props: { children?: JSX.Element }) {
  const childrenMemo = children(() => props.children)

  return (
    <div class="flex flex-col">
      <div class="fixed top-0 left-0 w-full h-[53px] bg-brand z-50 flex items-center justify-center text-white text-center text-sm md:text-lg">
        По случай деня на детето можете да се възползвате от безплатна първична оценка!
      </div>
      <Topbar>
        <div class="md:block hidden md:w-33% md:my-0">
          <a href="/">
            <img src="/assets/sense-head-logo.svg" class="w-15 md:w-18 md:ml-20" alt="sense-center-sofia-logo" />
          </a>
        </div>

        <div class="md:block hidden md:w-33% md:my-0">
          <img src="/assets/SENSE-text-purple-logo.svg" class="w-25" alt="sense-center-sofia-text-logo" />
        </div>

        <div class="hidden sm:flex w-full md:w-53% whitespace-nowrap flex-wrap justify-center md:justify-end items-center gap-1 font-semibold md:pr-10 md:pl-5 xl:pl-10 mr-6">
          <MenuItem href="/detsa-s-autizam">Аутизъм</MenuItem>
          <MenuItem href="/detski-logoped">Детски логопед</MenuItem>
          <MenuItem href="/kak-pomagame">Как помагаме</MenuItem>
          <MenuItem href="/na-kogo-pomagame">На кого помагаме</MenuItem>
          <MenuItem href="/za-nas">За нас</MenuItem>
          <MenuItem href="/karieri">Кариери</MenuItem>
          <MenuItem href="/otzivi">Отзиви</MenuItem>
          <MenuItem href="/detsa-s-razstroistvo-s-defitsit-na-vnimanieto-i-hiperaktivnost/">ХАДВ</MenuItem>
          <MenuItem href="/detsa-sas-sindrom-na-daun">Синдром на Даун</MenuItem>
          <MenuItem href="/pozitsia-logoped">Логопед-позиция</MenuItem>
          <MenuItem href="/detsa-s-umstvena-izostanalost">Деца с умствена изостаналост</MenuItem>
          <MenuItem href="/detsa-sas-spetsialni-obrazovatelni-potrebnosti">Деца със СОП</MenuItem>
        </div>
        <HamburgerMenu />
      </Topbar >
      <Content>{childrenMemo()}</Content>
      <div id="footer-sentinel" class="h-1"></div>
      <GradientFooter />
      <BackToTopArrow />
    </div>
  );
}

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
      class={`h-50px sm:h-80px w-full z-40 fixed top-53px flex-content-center transition-all duration-300 ease-in-out ${isScrolled() ? "bg-paper" : "bg-transparent"}`}>
      <div class="mx-auto max-w-full flex flex-row justify-center md:justify-between items-center h-full">
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

function HamburgerMenu() {
  const [open, setOpen] = createSignal(false);
  const [opacity, setOpacity] = createSignal(0);
  const [translateY, setTranslateY] = createSignal("-100%");

  const handleToggle = () => {
    if (open()) {
      setOpacity(0);
      setTranslateY("-100%");
      setTimeout(() => setOpen(false), 400);
    } else {
      setOpen(true);
      setTimeout(() => {
        setTranslateY("0");
        setOpacity(1);
      }, 10);
    }
  };

  const closeMenu = () => {
    setOpacity(0);
    setTranslateY("-100%");
    setTimeout(() => setOpen(false), 400);
  };

  return (
    <div class="z-99 lg-hidden flex flex-content-center flex-items-center flex-justify-between w-full">
      <div class="flex flex-items-center flex-justify-center lg-pl-4 pl-0">
        <a href="/" onClick={closeMenu}>
          <img width="52" height="52" loading="lazy" src="/assets/sense-head-logo.svg" class="w-11 ml-20px md:mt-2" alt="sense-center-sofia-logo" />
        </a>
      </div>
      <div class="flex justify-center items-center md:mt-2">
        <img src="/assets/SENSE-text-purple-logo.svg" class="w-18" alt="sense-center-sofia-text-logo" />
      </div>
      <div class="ml-6 md-mr-10 z-93">
        <input type="checkbox" id="menu-checkbox" class="hidden" />
        <label
          id="burger-menu"
          for="menu-checkbox"
          onClick={handleToggle}
          class="relative cursor-pointer flex flex col flex-justify-between flex-col w-30px h-18px right-6 hamburger"
        >
          <div class={`line ${open() ? "open" : ""}`}></div>
          <div class={`line ${open() ? "open" : ""}`}></div>
          <div class={`line ${open() ? "open" : ""}`}></div>
        </label>
      </div>
      <Show when={open()}>
        <div
          class="z-92 fixed w-full h-full left-0 top-0 px-10 pt-10 
          
          "
        // style={`
        //   height: 100vh;
        //   opacity: ${opacity()};
        //   transform: translateY(${translateY()});
        //   overflow-y: auto;
        //   transition: transform 0.6s ease-in-out, opacity 0.3s ease-in-out;
        // `}
        // transition-all transition-duration-400 bg-#15151599 backdrop-blur-[10px] border border-[rgba(235,166,91,0.3)]
        >
          {/* <div class="py-10 text-left">
            <MyDropdown closeMenu={closeMenu} />
          </div> */}
        </div>
      </Show>
    </div>
  );
}

function MobileDropdownMenuItem(props: {
  closeMenu: () => void;
  href?: string;
  text: string;
  icon: JSX.Element;
  subMenu?: { href: string; text: string }[];
}) {
  const [open, setOpen] = createSignal(false);

  const toggleSubMenu = (e: Event) => {
    e.preventDefault();
    setOpen(!open());
  };

  return (
    <div>
      <div
        class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-6.5 font-400 uppercase active:bg-paper active:bg-opacity-15 active:c-paper hover:bg-paper hover-bg-opacity-10 hover:c-paper p-4 my-1 b-rd-2 transition-all cursor-pointer"
      >
        {props.icon && <span class="mr-3 c-paper flex items-center w-7">{props.icon}</span>}
        {props.href ? (
          <a href={props.href} onClick={props.closeMenu} class="flex-grow flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-6.5 font-400 uppercase active:bg-paper active:bg-opacity-15 active:c-paper hover:bg-paper hover-bg-opacity-10 hover:c-paper p-2 b-rd-2 transition-all cursor-pointer" style="font-family: 'Oswald', sans-serif">{props.text}</a>
        ) : (
          <span class="flex-grow" style="font-family: 'Oswald', sans-serif">{props.text}</span>
        )}
        {props.subMenu && (
          <span onClick={toggleSubMenu} class="p-3 cursor-pointer ml-auto transition-transform duration-300 flex items-center" style={{ transform: open() ? "rotate(90deg)" : "rotate(0)" }}>
            <RiArrowDropUpFill />
          </span>
        )}
      </div>

      <div
        class={`pl-4 overflow-auto transition-all duration-300 ease-in-out ${open() ? "max-h-200 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {props.subMenu?.map((item) => (
          <a
            href={item.href}
            onClick={props.closeMenu}
            class="flex flex-items-center flex-nowrap c-paper hover-c-brand:hover font-size-5 font-400 uppercase active:bg-paper active:bg-opacity-15 active:c-paper hover:bg-paper hover-bg-opacity-10 py-3.3 hover:c-paper b-rd-2 transition-all cursor-pointer"
            style="font-family: 'Oswald', sans-serif"
          >
            {item.text}
          </a>
        ))}
      </div>
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

  return <div class="relative group"><a href={props.href} class={`block relative font-ui lg-flex ${isScrolled() ? "c-paper-inv" : "c-paper"} text-center font-size-3.3 md:font-size-3.8 tracking-0.3 hover-c-brand font-500 transition-all after:content-empty after:absolute after:bottom-0 after:left-0 after:right-0 after:w-0 after:h-0.5 after:bg-brand after:transition-all group-hover:after:w-full`}>{props.children}</a></div>
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

function BackToTopArrow() {
  const [visible, setVisible] = createSignal(false);
  const [mounted, setMounted] = createSignal(false);
  const [exitAnim, setExitAnim] = createSignal(false);

  createEffect(() => {
    const footer = document.getElementById("gradient-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          setExitAnim(false);
          setVisible(true);
        } else {
          setVisible(false);
          setExitAnim(true);

          setTimeout(() => {
            setMounted(false);
            setExitAnim(false);
          }, 600);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    onCleanup(() => observer.disconnect());
  });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {mounted() && (
        <div
          class={`fixed bottom-1 right-0 md:bottom-4 md:right-5 z-50 flex justify-center items-center cursor-pointer
            ${visible() ? 'animate-enterPuzzle' : ''}
            ${exitAnim() ? 'animate-exitPuzzle' : ''}
          `}
        >
          <div class="animate-slowSpin relative mb-1 mr-2">
            <div onClick={handleScrollToTop}>
              <img src="/assets/sun.png" class="w-14 h-14 lg:w-25 lg:h-25" />
            </div>
          </div>
          <div onClick={handleScrollToTop}>
            <MdiArrowUp class="absolute w-5 h-5 lg:w-8 lg:h-8 c-brand-purple z-10 top-4.3 left-4.62 lg:top-8.5 lg:left-8.5" />
          </div>
        </div>
      )}
      <style>
        {`
          @keyframes enterPuzzle {
            0% {
              opacity: 0;
              transform: translateX(-100px) rotate(0deg);
            }
            100% {
              opacity: 1;
              transform: translateX(0) rotate(360deg);
            }
          }

          @keyframes exitPuzzle {
            0% {
              opacity: 1;
              transform: translateX(0) rotate(0deg);
            }
            100% {
              opacity: 0;
              transform: translateX(-100px) rotate(360deg);
            }
          }

          @keyframes slowSpin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .animate-enterPuzzle {
            animation: enterPuzzle 0.6s ease-out forwards;
          }

          .animate-exitPuzzle {
            animation: exitPuzzle 0.6s ease-in forwards;
          }

          .animate-slowSpin {
            animation: slowSpin 20s linear infinite;
          }
        `}
      </style>
    </>
  );
}

function GradientFooter() {
  return (
    <div id="gradient-footer">
      <div class="[background-color:#fcfcfc]">
        <div class="
					
					relative 
					h-[100vh] 
					bg-gradient-to-b from-brand-yellow to-#db3985 
					bg-[position:right_55%_top_100%] 
					bg-no-repeat 
					bg-cover 
					[mask-image:linear-gradient(to_top,_rgba(252,252,252,1)_60%,_rgba(252,252,252,0.9)_70%,_rgba(252,252,252,0.5)_85%,_rgba(252,252,252,0)_100%)] 
					[-webkit-mask-image:linear-gradient(to_top,_rgba(252,252,252,1)_60%,_rgba(252,252,252,0.9)_70%,_rgba(252,252,252,0.5)_85%,_rgba(252,252,252,0)_100%)]
					"
          role="img"
          aria-label=""
        >

        </div>
        <div class="flex flex-col justify-center items-center mx-auto relative w-full" style="">
          <div class="z-99 md:mt--850px mt--730px">
            <AnimatedComponent>
              <h3 class="md:hidden block c-paper uppercase text-center important-mb-6">Свържете<br />се с нас</h3>
              <h3 class="hidden md:block c-paper uppercase text-center pb-15">Свържете се с нас</h3>
            </AnimatedComponent>
            <AnimatedComponent class="flex md:flex-row flex-col justify-between items-between md:gap-70 gap-7 md:mb-30 mb-10 md:ml-0 ml--3">
              <div class="flex flex-col gap-7 md:gap-15">
                <div class="flex flex-row gap-5 justify-start items-center">
                  <div class="mb--9 mt--9 mx--4.5 md:mx--6 bg-[position:right_55%_bottom_50%] bg-no-repeat bg-cover bg-[url(/assets/house-bg.svg)] w-25 h-25 md:w-38 md:h-38 flex justify-center items-center" >
                    <img class="mx-0 pt-2 md:w-20 w-13" src="/assets/sense-logo-100px.webp" />
                  </div>
                  <div class="flex flex-col mt-3">
                    <p class="c-paper my-0 font-300">Адрес:</p>
                    <p class="c-paper my-0 font-500">Гр. София, кв. Карпузица</p>
                    <p class="c-paper my-0 font-500">бул. Никола Петков 95А</p>
                  </div>
                </div>
                <div class="flex flex-row gap-5 justify-start items-center">
                  <div class="md:w-25 md:h-25 w-15 h-15 flex justify-center items-center bg-paper b-rd-12px">
                    <MdiPhone class="c-brand md:font-size-12 font-size-9" />
                  </div>
                  <div class="flex flex-col">
                    <p class="c-paper my-0 font-300">Телефон:</p>
                    <p class="c-paper my-0 font-500">+359 879 800 013</p>
                    <p class="c-paper my-0 font-500">+359 877 800 770</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-7 md:gap-15">
                <div class="flex flex-row gap-5 justify-start items-center">
                  <div class="md:w-25 md:h-25 w-15 h-15 flex justify-center items-center bg-paper b-rd-12px">
                    <MdiEmail class="c-brand-blue md:font-size-12 font-size-9" />
                  </div>
                  <div class="flex flex-col">
                    <p class="c-paper my-0 font-300">Имейл:</p>
                    <p class="c-paper my-0 font-500">+359 879 800 013</p>
                    <p class="c-paper my-0 font-500">+359 877 800 770</p>
                  </div>
                </div>
                <div class="flex flex-row gap-5 justify-start items-center">
                  <div class="md:w-25 md:h-25 w-15 h-15 flex justify-center items-center bg-paper b-rd-12px">
                    <MdiClockTimeTwo class="c-brand-purple md:font-size-12 font-size-9" />
                  </div>
                  <div class="flex flex-col">
                    <p class="c-paper my-0 font-500">Пн - Пт: 09:00 - 20:00</p>
                    <p class="c-paper my-0 font-500">Събота: 09:00 - 12:00</p>
                    <p class="c-paper my-0 font-500">Неделя: Почивен ден</p>
                  </div>
                </div>
              </div>
            </AnimatedComponent>
            <div>
              <PuzzleButton />
              <PuzzleButton2
                class="important-bg-brand-yellow important-hover:bg-brand-yellow-hover important-mt-15px"
                style2="margin-left:-25px !important; font-weight:500; font-size:17px !important;"
                img="/assets/sense-yellow-puzzle-piece.svg"
                href=""
                text="Услуги"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}