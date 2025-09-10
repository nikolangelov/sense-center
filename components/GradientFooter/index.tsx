import { AnimatedComponent } from "../AnimateOnView";
import MdiEmail from '~icons/mdi/email';
import MdiClockTimeTwo from '~icons/mdi/clock-time-two';
import MdiPhone from '~icons/mdi/phone';
import { PuzzleButton, PuzzleButton2 } from '../PuzzleButton';

export function GradientFooter() {
    return (
        <div id="gradient-footer">
            <div class="[background-color:#fcfcfc]">
                <div class="relative h-[100vh] bg-gradient-to-b from-brand-yellow to-#db3985 bg-[position:right_55%_top_100%] bg-no-repeat bg-cover 
					[mask-image:linear-gradient(to_top,_rgba(252,252,252,1)_60%,_rgba(252,252,252,0.9)_70%,_rgba(252,252,252,0.5)_85%,_rgba(252,252,252,0)_100%)] 
					[-webkit-mask-image:linear-gradient(to_top,_rgba(252,252,252,1)_60%,_rgba(252,252,252,0.9)_70%,_rgba(252,252,252,0.5)_85%,_rgba(252,252,252,0)_100%)]" role="img" aria-label="">
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
