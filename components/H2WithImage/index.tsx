import { JSXElement, Match, Switch } from "solid-js";
import { AnimatedComponent } from "../AnimateOnView";

export const H3Blue = (props: { title: string; variant?: "h2" | "h3"; }) => {
  const { variant = "h3" } = props;

  return (
    <Switch>
      <Match when={variant === "h2"}>
        <AnimatedComponent>
          <h2
            class="text-left leading-[1.4] font-bold inline-block case-normal important-font-size-36px important-lg:font-size-55px important-leading-40px important-lg:leading-60px important-mb-40px important-lg:my-55px"
            style={{
              'background-image': 'linear-gradient(to right, #0f626b, #abe6ed)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              display: 'inline-block',
              'padding-bottom': '0.2em',
            }}
          >
            {props.title}
          </h2>
        </AnimatedComponent>
      </Match>
      <Match when={variant === "h3"}>
        <AnimatedComponent>
          <h3
            class="text-left leading-[1.4] font-bold inline-block"
            style={{
              'background-image': 'linear-gradient(to right, #0f626b, #abe6ed)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              display: 'inline-block',
              'padding-bottom': '0.2em',
            }}
          >
            {props.title}
          </h3>
        </AnimatedComponent>
      </Match>
    </Switch>
  );
};

export const H3Pink = (props: { title: string; variant?: "h2" | "h3"; }) => {
  const { variant = "h3" } = props;

  return (
    <Switch>
      <Match when={variant === "h2"}>
        <AnimatedComponent>
          <h2
            class="text-left leading-[1.4] font-bold inline-block case-normal important-font-size-36px important-lg:font-size-55px important-leading-40px important-lg:leading-60px important-mb-40px important-lg:my-55px"
            style={{
              'background-image': 'linear-gradient(to right, #E11172, #FFAE01',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              display: 'inline-block',
              'padding-bottom': '0.2em',
            }}
          >
            {props.title}
          </h2>
        </AnimatedComponent>
      </Match>
      <Match when={variant === "h3"}>
        <AnimatedComponent>
          <h3
            class="text-left leading-[1.4] font-bold inline-block"
            style={{
              'background-image': 'linear-gradient(to right, #E11172, #FFAE01',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              display: 'inline-block',
              'padding-bottom': '0.2em',
            }}
          >
            {props.title}
          </h3>
        </AnimatedComponent>
      </Match>
    </Switch>
  );
};

export const H3SolidPink = (props: { title: string | JSXElement; variant?: "h2" | "h3"; }) => {
  const { variant = "h3" } = props;

  return (
    <Switch>
      <Match when={variant === "h2"}>
        <AnimatedComponent>
          <h2
            class="text-left c-brand leading-[1.4] font-bold inline-block case-normal important-font-size-36px important-lg:font-size-55px important-leading-40px important-lg:leading-60px important-mb-40px important-lg:my-55px"
            style={{
              'padding-bottom': '0.2em',
            }}
          >
            {props.title}
          </h2>
        </AnimatedComponent>
      </Match>
      <Match when={variant === "h3"}>
        <AnimatedComponent>
          <h3
            class="text-left c-brand leading-[1.4] font-bold inline-block"
            style={{
              'padding-bottom': '0.2em',
            }}
          >
            {props.title}
          </h3>
        </AnimatedComponent>
      </Match>
    </Switch>
  );
};

export const H2Echo = (props: {
  title: string;
  maintitle: string | JSXElement;
  bgImage?: string;
  bgPosition?: string;
  bgSize?: string;
  class?: string;
}) => {
  const backgroundImage = props.bgImage ?? '/assets/home-bg-h1.png';
  const backgroundPosition = props.bgPosition ?? 'center';
  const backgroundSize = props.bgSize ?? 'cover';

  const commonStyle = {
    'background-image': `url(${backgroundImage})`,
    'background-position': `${backgroundPosition}`,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    'background-size': `${backgroundSize}`,
    'background-repeat': 'no-repeat',
    'padding-bottom': '0.2em',
  };

  return (
    <AnimatedComponent class="flex flex-col items-center gap-0 md:gap-1 relative">
      <h2 class="text-transparent bg-clip-text bg-cover bg-center opacity-10 scale-30 md:scale-50 bg-right bg-top mb--9" style={commonStyle}>
        {props.title}
      </h2>
      <h2 class="text-transparent bg-clip-text bg-cover bg-center opacity-10 scale-40 md:scale-60 bg-right bg-top mb--8" style={commonStyle}>
        {props.title}
      </h2>
      <h2 class="text-transparent bg-clip-text bg-cover bg-center opacity-20 scale-50 md:scale-70 bg-right bg-top mb--5" style={commonStyle}>
        {props.title}
      </h2>
      <h2 class={`text-transparent bg-clip-text bg-cover bg-center font-bold bg-right bg-top ${props.class ?? ''}`} style={commonStyle}>
        {props.maintitle}
      </h2>
      <h2 class="text-transparent bg-clip-text bg-cover bg-center opacity-20 scale-50 md:scale-70 bg-right bg-top mt--5" style={commonStyle}>
        {props.title}
      </h2>
      <h2 class="text-transparent bg-clip-text bg-cover bg-center opacity-10 scale-40 md:scale-60 bg-right bg-top mt--8" style={commonStyle}>
        {props.title}
      </h2>
    </AnimatedComponent>
  );
};
