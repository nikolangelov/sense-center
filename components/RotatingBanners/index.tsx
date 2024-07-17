import { makePersisted } from "@solid-primitives/storage";
import { createEffect, createSignal, Show } from "solid-js";



const [index, setIndex] = makePersisted(createSignal(0), { name: "RotatingBannersIndex" });

let hasBeenIncreased = false
export function RotatingBanners(props: { class: string, imgs: { src: string, alt: string, url: string }[] }) {

    const [isHidden, setIsHidden]=createSignal(true)

    createEffect(() => {
        if (!hasBeenIncreased) {
            hasBeenIncreased = true
            setIndex((index() + 1) % props.imgs.length)
    
        }
        setIsHidden(false)
    }
)

    return (
        <Show when={!isHidden()}><a href={props.imgs[index()].url} target="_blank">
            <img src={props.imgs[index()].src} alt={props.imgs[index()].alt} class={props.class} />
        </a></Show>
    )
}
