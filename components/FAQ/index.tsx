import {createSignal, JSX, Show} from "solid-js"

export function FaqCollapse({ pages }: { pages: JSX.Element[] }) {
  const [shown, setShown] = createSignal(0)

  return <>
    {pages.map((page, idx) => (
        <Show when={idx <= shown()}>
          {page}
        </Show>))}

    <Show when={shown() < 1}>
      <button
          onClick={() => setShown(shown() + 1)}
          class="my-6 mx-auto uppercase b-none b-rd-1 py-3 px-7 bg-paper hover-bg-#f7f7f7:hover font-600 font-size-5 whitespace-nowrap"
          style="letter-spacing: 0.02rem; box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">
        Read more
      </button>
    </Show>
  </>
}
