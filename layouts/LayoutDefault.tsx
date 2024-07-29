import 'uno.css'
import "./style.css";
import { createEffect, JSX, onCleanup } from "solid-js";
import { createSignal, Show } from "solid-js";
import HamburgerMenuIcon from '~icons/mdi/hamburger-menu';
import MdiKeyboardArrowUp from '~icons/mdi/keyboard-arrow-up';
import RiPhoneFill from '~icons/ri/phone-fill';
import MdiClock from '~icons/mdi/clock';
import MdiEmail from '~icons/mdi/email';
import MdiVacuum from '~icons/mdi/vacuum';
import RiMoneyPoundCircleLine from '~icons/ri/money-pound-circle-line';
import MdiAccountGroupOutline from '~icons/mdi/account-group-outline';
import MdiPlaceOutline from '~icons/mdi/place-outline';
import MdiEmailEditOutline from '~icons/mdi/email-edit-outline';
import MdiPhoneOutline from '~icons/mdi/phone-outline';
import MdiCommentAccountOutline from '~icons/mdi/comment-account-outline';
import { Button, ButtonProps, Dropdown, DropdownToggleProps } from "solid-bootstrap-core";
import RiCloseFill from '~icons/ri/close-fill';
import RiArrowDownSLine from '~icons/ri/arrow-down-s-line';

function DropownMenuLink(props: { href: string | undefined; children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <a href={props.href}>
      <div class="left-0 w-full my-3 flex flex-nowrap c-paper-inv hover-c-brand:hover font-size-4.5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
        {props.children}
      </div>
    </a>
  );
}

const MyDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = createSignal(false);

  const handleArrowClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setDropdownOpen(!isDropdownOpen());
  };

  return (
    <div class="dropdown-menu show w-full overflow-y-auto max-h-600px sticky">
      <Dropdown show={isDropdownOpen()}>
        <Dropdown.Toggle>
          {(props) => (
            <div {...props} class="b-none outline-none bg-transparent w-full">
              <div class="flex flex-justify-evenly w-full">
                <div class="py-5 flex flex-content-center flex-justify-between w-full">
                  <a
                    href="/services"
                    class="w-full flex flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500"
                    style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;"
                  >
                    <MdiVacuum class="mr-3 hover-c-brand-second-action:hover" />Services
                  </a>
                  <RiArrowDownSLine class="w-10 h-auto cursor-pointer" onClick={handleArrowClick} />
                </div>
              </div>
            </div>
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu flip offset={[0, 4]}>
          {(menuProps, meta) => (
            <div
              {...menuProps}
              class="dropdown-menu show w-full max-h-1000px"
              style={{
                transition: 'visibility 500ms, opacity 500ms',
                visibility: meta.show ? 'visible' : 'hidden',
                opacity: meta.show ? '1' : '0',
                ...menuProps.style,
              }}
            >
              <DropownMenuLink href="//steam">Carpet steam cleaning</DropownMenuLink>
              <DropownMenuLink href="/dry">Dry carpet cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Eco-friendly carpet cleaning</DropownMenuLink>
              <DropownMenuLink href="/same-day">Same day carpet cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Fast dry carpet cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Carpet stain removal</DropownMenuLink>
              <DropownMenuLink href="/">Carpet stain protection</DropownMenuLink>
              <DropownMenuLink href="/">Commercial carpet cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Residential carpet cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Office carpet cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Sofa cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Leather sofa cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Furniture cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Mattress cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Pillow cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Upholstery stain removal</DropownMenuLink>
              <DropownMenuLink href="/">Upholstery stain protection</DropownMenuLink>
              <DropownMenuLink href="/">Rug steam cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Dry rug cleaning</DropownMenuLink>
              <DropownMenuLink href="/">Rug stain removal</DropownMenuLink>
              <DropownMenuLink href="/">Rug stain protection</DropownMenuLink>
              <DropownMenuLink href="/">Antiviral sanitisation</DropownMenuLink>
              <hr class="b-none bg-brand-second-action h-1px my-0"></hr>
            </div>
          )}
        </Dropdown.Menu>
        <hr class="b-none bg-brand-second-action h-1px my-0"></hr>
        <div
          class={`py-5 b-b-solid b-b border-brand-second-action transition-all duration-500 ${isDropdownOpen() ? 'mt-245' : 'mt-0'}`}
        >
          <a href="/Prices" class="flex flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
            <RiMoneyPoundCircleLine class="mr-3" />Prices
          </a>
        </div>

        <div class="py-5 b-b-solid b-b border-brand-second-action">
          <a href="/Reviews" class="flex flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
            <MdiCommentAccountOutline class="mr-3" />Reviews
          </a>
        </div>
        <div class="py-5 b-b-solid b-b border-brand-second-action">
          <a href="/About-us" class="flex flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
            <MdiAccountGroupOutline class="mr-3" />About us
          </a>
        </div>
        <div class="py-5 b-b-solid b-b border-brand-second-action">
          <a href="/Areas-we-cover" class="flex flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
            <MdiPlaceOutline class="mr-3" />Areas we cover
          </a>
        </div>
        <div class="py-5 b-b-solid b-b border-brand-second-action">
          <a href="/Contact-us" class="flex flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
            <MdiPhoneOutline class="mr-3" />Contact us
          </a>
        </div>
        <div class="py-5 b-b-solid b-b border-brand-second-action">
          <a href="/Feedback" class="flex flex-nowrap c-paper-inv hover-c-brand:hover font-size-5 font-500" style="font-family: Open Sans, sans-serif; letter-spacing: 0.6px;">
            <MdiEmailEditOutline class="mr-3" />Feedback
          </a>
        </div>
      </Dropdown>
    </div>
  );
};

function MenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} class="py-6 dropdown hidden font-ui lg-flex c-paper-inv text-center font-size-3.5 uppercase font-sans hover-c-paper-link-hover:hover tracking-wide">{props.children}</a>
}

function DropdownMenuItem(props: { href: string, children: JSX.Element, src: string }) {
  return <a href={props.href} class="hidden flex flex-justify-center flex-items-center"><div class="flex-col flex-justify-center flex-items-center w-30 h-32 mt-3 mb-3"><img class="w-20 h-20 block mx-auto b-rd-100%" src={props.src} /><p class="font-size-3 whitespace-normal mx-auto c-paper-inv text-center whitespace-normal uppercase font-sans hover-c-paper-link-hover:hover tracking-wide font-700 line-height-normal">{props.children}</p></div></a>
}

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (

    <div class="flex flex-col">

      <Topbar>
        <Logo />
        <button class="get-a-quote-button whitespace-nowrap md-ml-2 xl-ml-10 font-serif uppercase font-500 c-paper overflow-hidden relative bg-paper b-double b-rd-1 b-4 b-transparent h-13 w-45 cursor-pointer font-size-3.5 tracking-wide" style="min-width: fit-content; background-origin: border-box; background-clip: padding-box, border-box; box-shadow: 0 0 0 2.5px rgba(255, 255, 255, 1) inset; background-image: linear-gradient(90deg, rgb(13, 46, 41) 0%, rgb(26, 135, 94) 50%), radial-gradient(circle at left top, rgb(13, 46, 41), rgb(26, 135, 94));">Request a quote</button>
        <div class="flex whitespace-nowrap flex-nowrap flex-justify-end flex-items-end font-semibold gap-5 xl-gap-5xl md-pr-10 md-pl-5 xl-pl-10 pr-6 flex-content-center flex-items-center">
          <div class="dropdown">
            <MenuItem href="/services">Services</MenuItem>
            <div class="dropdown-content top-19.7 w-full flex-justify-center left-0 flex-row hidden gap-15 absolute bg-paper z-1 m-0 py-4 px-6 flex-wrap" style="box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);">
              <div class="flex flex-col flex-justify-center">
                <a href="/professional-carpet-cleaning-services"><h3 class="whitespace-normal text-center hover-c-brand:hover">Carpet cleaning services</h3></a>
                <div class="dropdown-content flex-row flex-wrap hidden flex-items-center flex-content-center">
                  <DropdownMenuItem href="/steam" src="/assets/Професионално почистване на заведения.jpg">Carpet steam cleaning</DropdownMenuItem>
                  <DropdownMenuItem href="/dry" src="/assets/Професионално почистване на заведения.jpg">Dry carpet cleaning</DropdownMenuItem>
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Eco-friendly carpet cleaning</DropdownMenuItem>
                </div>
                <div class="dropdown-content flex-row flex-wrap hidden flex-items-center flex-content-center">
                  <DropdownMenuItem href="/same-day" src="/assets/Професионално почистване на заведения.jpg">Same day carpet cleaning</DropdownMenuItem>
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Fast dry carpet cleaning</DropdownMenuItem>
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Carpet stain removal</DropdownMenuItem>
                </div>
                <div class="dropdown-content flex-row flex-wrap hidden flex-items-center flex-content-center">
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Carpet stain protection</DropdownMenuItem>
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Commercial carpet cleaning</DropdownMenuItem>
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Residential carpet cleaning</DropdownMenuItem>
                </div>
                <div class="dropdown-content flex-row flex-wrap hidden flex-items-center flex-content-center flex-justify-center">
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Office carpet cleaning</DropdownMenuItem>
                </div>
              </div>
              <div class="flex flex-col flex-wrap">
              <a href="/professional-carpet-cleaning-services"><h3 class="whitespace-normal text-center hover-c-brand:hover">Upholstery cleaning services</h3></a>
                <div class="dropdown-content flex-row flex-wrap hidden flex-items-center flex-content-center">
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Carpet stain protection</DropdownMenuItem>
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Commercial carpet cleaning</DropdownMenuItem>
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Residential carpet cleaning</DropdownMenuItem>
                </div>
                <div class="dropdown-content flex-row flex-wrap hidden flex-items-center flex-content-center">
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Carpet stain protection</DropdownMenuItem>
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Commercial carpet cleaning</DropdownMenuItem>
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Residential carpet cleaning</DropdownMenuItem>
                </div>
                <div class="dropdown-content flex-row flex-wrap hidden flex-items-center flex-content-center flex-justify-center">
                  <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Carpet stain protection</DropdownMenuItem>
                </div>
              </div>
              <div class="flex flex-col">
                <div class="flex flex-col flex-wrap">
                <a href="/professional-carpet-cleaning-services"><h3 class="whitespace-normal text-center hover-c-brand:hover">Rug cleaning services</h3></a>
                  <div class="dropdown-content flex-row flex-wrap hidden flex-items-center flex-content-center">
                    <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Carpet stain protection</DropdownMenuItem>
                    <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Commercial carpet cleaning</DropdownMenuItem>
                    <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Residential carpet cleaning</DropdownMenuItem>
                  </div>
                  <div class="dropdown-content flex-row flex-wrap hidden flex-items-center flex-content-center flex-justify-center">
                    <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Office carpet cleaning</DropdownMenuItem>
                  </div>
                </div>
                <div class="flex flex-col flex-wrap">
                <a href="/professional-carpet-cleaning-services"><h3 class="whitespace-normal text-center hover-c-brand:hover">Other cleaning services</h3></a>
                  <div class="dropdown-content flex-row flex-wrap hidden flex-items-center flex-content-center flex-justify-center">
                    <DropdownMenuItem href="/" src="/assets/Професионално почистване на заведения.jpg">Office carpet cleaning</DropdownMenuItem>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MenuItem href="/Prices">Prices</MenuItem>
          <MenuItem href="/Reviews">Reviews</MenuItem>
          <MenuItem href="/About-us">About us</MenuItem>
          <MenuItem href="/Areas-we-cover">Areas we cover</MenuItem>
          <MenuItem href="/Contact-us">Contact us</MenuItem>
          <MenuItem href="/Feedback">Feedback</MenuItem>
          <HamburgerMenu />
        </div>
      </Topbar>
      <Content>{props.children}</Content>
      <BackToTopArrow></BackToTopArrow>
      <MainFooter>

        <div class="flex flex-col gap-5 flex-wrap line-height-0 my-5">
          <h3 class="font-size-4.5 uppercase font-letter tracking-widest mt-0 mb-2 c-paper font-600">Contacts</h3>
          <div class="flex flex-items-center gap-2">
            <RiPhoneFill class="w-10 h-10 c-paper" />
            <div class="flex flex-col line-height-none">
              <MainFooterMenuItem href="/">07874 333 356</MainFooterMenuItem>
              <MainFooterMenuItem href="/">02036 370 033</MainFooterMenuItem>
            </div>
          </div>
          <div class="flex flex-items-center gap-2">
            <MdiEmail class="w-10 h-10 c-paper" />
            <MainFooterMenuItem href="/">office@finecarpetcleaning.co.uk</MainFooterMenuItem>
          </div>
          <div class="flex flex-items-center gap-2">
            <MdiClock class="w-10 h-10 c-paper" />
            <div class="flex flex-col line-height-none">
              <div class="c-paper font-normal lg-font-size-4 md-font-size-4 font-size-4.5 font-sans">Monday - Sunday</div>
              <div class="c-paper font-normal lg-font-size-4 md-font-size-4 font-size-4.5 font-sans">9:00 - 18:00</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5 flex-wrap line-height-0 my-5">
          <h3 class="font-size-4.5 uppercase font-letter tracking-widest mt-0 mb-2 c-paper font-600">Our most popular services</h3>
          <MainFooterMenuItem href="/kakvo-e-falun-dafa">Carpet Cleaning London</MainFooterMenuItem>
          <MainFooterMenuItem href="/">Rug Cleaning</MainFooterMenuItem>
          <MainFooterMenuItem href="/">Upholstery Cleaning London</MainFooterMenuItem>
          <MainFooterMenuItem href="/">Steam Carpet Cleaning London</MainFooterMenuItem>
          <MainFooterMenuItem href="/">Carpet Stain Removal</MainFooterMenuItem>
          <MainFooterMenuItem href="/">Antiviral sanitisation</MainFooterMenuItem>
          <MainFooterMenuItem href="/">Coronavirus Disinfection</MainFooterMenuItem>
        </div>
        <div class="flex flex-col gap-5 flex-wrap line-height-0 my-5">
          <h3 class="font-size-4.5 uppercase font-letter tracking-widest mt-0 mb-2 c-paper font-600">Menu</h3>
          <MainFooterMenuItem href="/">Home</MainFooterMenuItem>
          <MainFooterMenuItem href="/">Prices</MainFooterMenuItem>
          <MainFooterMenuItem href="/">Areas we cover</MainFooterMenuItem>
        </div>

      </MainFooter>
      <BottomFooter>
        <p class="text-center lg-font-size-4 md-font-size-3 font-size-3.7 font-400 line-height-6 font-sans">Copyright &copy; 2024 Fine Carpet Cleaning London</p>
      </BottomFooter>
    </div>
  );
}

function Topbar(props: { children: JSX.Element }) {
  return (
    <div
      id="sidebar"
      class="flex sticky lg-py-6 lg-h-20 h-20 position-sticky top-0 border-b-2 border-t-1 bg-#f7f7f7 flex-justify-between lg-flex-justify-center flex-items-center z-9998" style="box-shadow: 0 0px 10px 0 rgba(50, 50, 50, 0.5);">
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
    <div class="flex items-center justify-center md-pl-4 pl-0 z-99">
      <a href="/">
        <img src="/assets/FCC_2024_png.png" class="lg-w-22 w-20 md-ml-10 ml-3 mt-7" />
      </a>
    </div>
  );
}

function HamburgerMenu() {
  const [open, setOpen] = createSignal(false);

  const handleToggle = () => {
    setOpen(!open());
  };

  return (
    <div class="flex flex-content-center flex-justify-between">
      <button class="bg-transparent cursor-pointer border-style-none lg-hidden" onClick={handleToggle} style="position: relative;">
        <HamburgerMenuIcon
          class="w-10 h-10 color-brand hover-color-brand-second-action"
          style={{
            opacity: open() ? 0 : 1,
            transform: open() ? "rotate(90deg)" : "rotate(0deg)",
            transition: "opacity 0.3s, transform 0.3s",
            position: "relative",
          }}
        />
        <RiCloseFill
          class="w-10 h-10 color-brand hover-color-brand-second-action right-8"
          style={{
            opacity: open() ? 1 : 0,
            transform: open() ? "rotate(0deg)" : "rotate(90deg)",
            transition: "opacity 0.3s, transform 0.3s",
            position: "fixed",
          }}
        />
      </button>
      <Show when={open()}>
        <div class="fixed w-screen h-3000px bg-#f7f7f7 left-0 top-19.6 px-10">
          <div class="py-15 text-left">
            <MyDropdown />
          </div>
        </div>
      </Show>
    </div>
  );
}


function MainFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex flex-justify-start md-flex-justify-evenly bg-brand-dark lg-p-10 p-6 md-p-5 flex-shrink-0 flex-items-start flex-wrap">
      {props.children}
    </div>
  );
}

function MainFooterMenuItem(props: { href: string, children: JSX.Element }) {
  return <a href={props.href} class="c-#9fcdb0 hover-color-paper:hover font-normal lg-font-size-4 md-font-size-4 font-size-4.5 lg-py-1 md-py-2 py-1 font-sans">{props.children}</a>
}

function BottomFooter(props: { children: JSX.Element }) {
  return (
    <div
      class="flex bg-#d6d6d6 py-1 flex-shrink-0 flex-justify-center flex-items-center">
      {props.children}
    </div>
  );
}

function BackToTopButton(props: { onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined; children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) {
  return (
    <button
      class="flex items-center justify-between cursor-pointer b-none color-paper bg-brand-second-action hover-bg-brand w-10 h-10"
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