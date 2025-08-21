import { JSXElement } from "solid-js";
import { AnimatedComponent } from "../AnimateOnView";

export const PuzzleButton = () => {

    return (
        <>
            <div class="flex justify-center">
                <AnimatedComponent class="float-left md:pr-5px relative text-center w-70">
                    <a href="/">
                        <div class="flex bg-brand hover:bg-brand-hover transition-all b-rd-100 max-w-100 w-full px-2 py-2 md:py-8px">
                            <div class="flex justify-center items-center bg-paper b-rd-100 w-10 h-10">
                                <img src="/assets/sense-puzzle-piece.svg" alt="puzzle piece" class="m-auto w-7 h-7 object-cover" />
                            </div>
                            <div class="m-auto">
                                <div class="relative min-h-1px px-8px lg-px-10px c-paper flex text-center flex-justify-center tracking-1.2px font-size-3.5 lg:font-size-3.5 font-500 leading-4.5 important:font-roboto">
                                    Запазете час за<br />първична оценка
                                </div>
                            </div>
                        </div>
                    </a>
                </AnimatedComponent>
            </div>
        </>
    );
};

export const PuzzleButton2 = (props: { href: string; text: string | JSXElement; img: string; style2?: string; class?: string; class2?: string;}) => {

    return (
        <>
            <div class="flex justify-center">
                <AnimatedComponent class={`float-left md:pr-5px relative text-center w-70 ${props.class2 ?? ''}`}>
                    <a href={props.href}>
                        <div class={`flex bg-brand-orange hover:bg-brand-orange-hover transition-all b-rd-100 max-w-100 w-full px-2 py-2 md:py-8px ${props.class ?? ''}`}>
                            <div class="flex justify-center items-center bg-paper b-rd-100 w-10 h-10">
                                <img src={props.img} alt="puzzle piece" class="m-auto w-7 h-7 object-cover" />
                            </div>
                            <div class="m-auto">
                                <div class="relative min-h-1px pr-4 lg-px-10px c-paper align-self-center flex text-center flex-justify-center tracking-1.2px font-size-3.5 lg:font-size-3.5 font-500 leading-4.5 important:font-roboto" style={props.style2}>
                                    {props.text}
                                </div>
                            </div>
                        </div>
                    </a>
                </AnimatedComponent>
            </div>
        </>
    );
};