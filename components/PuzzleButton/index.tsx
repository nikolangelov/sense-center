import { JSXElement } from "solid-js";
import { AnimatedComponent } from "../AnimateOnView";

export const PuzzleButton = () => {
    return (
        <>
            <AnimatedComponent class="flex justify-center items-center">
                <a href="/"
                    class="group relative rounded-8px shadow-md overflow-hidden text-white text-lg font-[MyriadPro-SemiboldCond] px-7 pb-1.5 pt-2 w-180px h-60px flex justify-center items-center"
                    style={{
                        "background-image": `url(/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp)`,
                        "background-size": "cover",
                        "background-position": "center",
                    }}>
                    <div class="absolute inset-0 bg-brand/80 group-hover-bg-brand-hover/80 transition-all"></div>
                    <div class="flex justify-center items-center c-paper">
                        <div class="text-white font-[MyriadPro-SemiboldCond] text-center leading-4 md:leading-4.5 font-size-14px md:font-size-16px uppercase">
                            ЗАПАЗЕТЕ ЧАС ЗА<br />ПЪРВИЧНА ОЦЕНКА
                        </div>
                    </div>
                </a>
            </AnimatedComponent>
        </>
    );
};

export const PuzzleButton2 = (props: { href: string; text: string | JSXElement; class?: string; }) => {
    return (
        <>
            <AnimatedComponent class="flex justify-center items-center">
                <a href={props.href}
                    class={`group relative rounded-8px shadow-md overflow-hidden text-white text-lg font-[MyriadPro-SemiboldCond] px-7 pb-1.5 pt-2 w-180px h-60px flex justify-center items-center ${props.class ?? ''}`}
                    style={{
                        "background-image": `url(/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp)`,
                        "background-size": "cover",
                        "background-position": "center",
                    }}>
                    <div class="absolute inset-0 bg-brand-orange/80 group-hover-bg-brand-orange-hover/80 transition-all"></div>
                    <div class="flex justify-center items-center c-paper pb-0.4 w-full h-full">
                        <div class="text-white font-[MyriadPro-SemiboldCond] text-center leading-4 md:leading-4.5 font-size-14px md:font-size-16px uppercase">
                            {props.text}
                        </div>
                    </div>
                </a>
            </AnimatedComponent>
        </>
    );
};