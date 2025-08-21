import { Match, Switch } from "solid-js";
import { AnimatedComponent } from "../AnimateOnView";

export const DoodleDecor = (props: { style?: string; variant: "pink" | "pink2" | "purple" | "purple2" | "blue" | "blue2"; children?: any }) => {

    return (
        <>
            <AnimatedComponent>
                <Switch>
                    <Match when={props.variant === "pink"}>
                        <img src="/assets/pink-bg-decor.svg" class="md:mb--10 md:mt-5 w-full flex justify-start h-auto mr--130px w-full max-w-650px" style={props.style} alt="Decorative doodle" />
                    </Match>
                    <Match when={props.variant === "pink2"}>
                        <img src="/assets/pink-bg-decor.svg" class="md:mb--10 md:mt-5 w-full flex justify-end h-auto ml--130px w-full max-w-650px" style={props.style} alt="Decorative doodle" />
                    </Match>
                    <Match when={props.variant === "purple"}>
                        <img src="/assets/purple-bg-decor.svg" class="md:mb--10 md:mt-5 w-full flex justify-start h-auto ml--150px w-full max-w-650px" style={props.style} alt="Decorative doodle" />
                    </Match>
                    <Match when={props.variant === "purple2"}>
                        <img src="/assets/purple-bg-decor.svg" class="md:mb--10 md:mt-5 w-full flex justify-end h-auto md:mr--150px mr--80px w-full max-w-650px" style={props.style} alt="Decorative doodle" />
                    </Match>
                    <Match when={props.variant === "blue"}>
                        <img src="/assets/blue-bg-decor2.svg" class="md:mb--10 md:mt-5 w-full flex justify-start h-auto ml--130px w-full max-w-650px" style={props.style} alt="Decorative doodle" />
                    </Match>
                    <Match when={props.variant === "blue2"}>
                        <img src="/assets/blue-bg-decor2.svg" class="md:mb--10 md:mt-5 w-full flex justify-end h-auto mr--130px w-full max-w-650px -scale-x-100" style={props.style} alt="Decorative doodle" />
                    </Match>
                </Switch>
            </AnimatedComponent>
        </>
    );
};