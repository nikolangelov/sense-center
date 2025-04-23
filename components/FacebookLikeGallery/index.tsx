import { createSignal } from "solid-js";

export function FacebookLikeGallery(props: { imgs: { src: string; alt: string; name: string; reviewtext: string }[] }) {
    const [currentIndex, setCurrentIndex] = createSignal(0);

    return (
        <div class="relative flex flex-col items-center">
            <div class="mb-4 text-center">
                <img
                    src={props.imgs[currentIndex()].src}
                    alt={props.imgs[currentIndex()].alt}
                    class="max-w-full max-h-[550px] mb-2 border-2 border-white shadow-md"
                />
                <div class="max-w-550px h-180px">
                    <p class="c-paper text-center mb-1">{props.imgs[currentIndex()].name}</p>
                    <div class="flex justify-center items-center gap-1.5 pb-1">
                        <img class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
                        <img class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
                        <img class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
                        <img class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
                        <img class="w-5 h-5" src="/assets/output-onlinepngtools.png" />
                    </div>
                    <p class="c-paper font-size-4 md:font-size-4.5 leading-6">{props.imgs[currentIndex()].reviewtext}</p>
                </div>
            </div>

            <div class="flex gap-2 md:gap-6 mt-4 sm:mt-6 lg:mt-10 items-center h-35">
                {props.imgs.map((img, index) => (
                    <img
                        src={img.src}
                        alt={img.alt}
                        class={`object-cover cursor-pointer transition-all ${currentIndex() === index
                            ? 'w-22 h-22 md:w-32 md:h-32 outline-solid outline-4 md:outline-8 outline-paper'
                            : 'w-20 h-20 md:w-28 md:h-28 filter-brightness-50'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}