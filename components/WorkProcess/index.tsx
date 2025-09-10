import { Component, JSX } from "solid-js";
import { AnimatedComponent } from "../AnimateOnView";

interface Step {
    id: number;
    title: JSX.Element | string;
    color: string;
    image: string;
}

const steps: Step[] = [
    {
        id: 1,
        title: <>ОРГАНИЗИРАМЕ<br />първоначална консултация</>,
        color: "bg-brand-blue/70",
        image: "/assets/home/семейство-на-дете-с-нарушения-в-развитието.webp",
    },
    {
        id: 2,
        title: <>Определяме терапевтичен<br />подход спрямо нуждите</>,
        color: "bg-brand/70",
        image: "/assets/detsa-s-autizam/поставяне-диагноза-дете-аутизъм.webp",
    },
    {
        id: 3,
        title: <>Изготвяме индивидуален<br />терапевтичен план</>,
        color: "bg-brand-purple/70",
        image: "/assets/detsa-s-autizam/терапия-на-дете-с-аутизъм.webp",
    },
    {
        id: 4,
        title: <>ПРОВЕЖДАМЕ<br />терапевтични сесии</>,
        color: "bg-brand-orange/70",
        image: "/assets/home/терапия-чрез-игра-център-за-детско-развитие.webp",
    },
    {
        id: 5,
        title: <>Проследяваме<br />напредъка</>,
        color: "bg-brand-blue/70",
        image: "/assets/home/заедно-напред-в-център-за-деца-с-нарушения-в-развитието.webp",
    },
];

export const WorkProcess: Component = () => {
    return (
        <section class="w-full max-w-lg xl:max-w-1500px mx-auto pb-5 lg:py-10 lg:px-4 xl:px-0">
            <AnimatedComponent class="flex flex-col xl:flex-row justify-center gap-4">
                {steps.map((step) => (
                    <div
                        class="relative rounded-2xl shadow-md overflow-hidden text-white text-lg font-semibold xl:w-300px"
                        style={{
                            "background-image": `url(${step.image})`,
                            "background-size": "cover",
                            "background-position": "center",
                        }}>
                        <div class={`absolute inset-0 ${step.color}`}></div>
                        <div class="flex flex-items-start c-paper px-5 pt-10 pb-9 xl:pt-16 xl:pb-14">
                            <p class="mt-1.2 xl:mt-0.6 mr-2 c-paper font-[MyriadPro-SemiboldCond] flex flex-self-start font-size-7.5">{step.id}.</p>
                            <div class="relative c-paper font-[MyriadPro-SemiboldCond] tracking-0.3 font-size-7.5 leading-8 uppercase">
                                {step.title}
                            </div>
                        </div>
                    </div>
                ))}
            </AnimatedComponent>
        </section>
    );
};