import {createSignal, JSX, Show} from "solid-js"

type CollapsableComponents = {
  Container: (props: { children: JSX.Element[] }) => JSX.Element
  Entry: (props: { children: JSX.Element }) => JSX.Element
}
export function createCollapsable(): CollapsableComponents {
  const [shown, setShown] = createSignal(0)
  let globalIndex = 0

  function Container(props: { children: JSX.Element[] }) {
    return <>
      {props.children}
      <Show when={shown() < props.children.length - 1}>
        <button
          onClick={() => setShown(shown() + 1)}
          class="flex my-6 mx-auto uppercase b-none b-rd-1 py-3 px-7 bg-paper hover-bg-#f7f7f7:hover font-600 font-size-5 whitespace-nowrap"
          style="letter-spacing: 0.02rem; box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">
          Read more
        </button>
      </Show>
    </>
  }

  function Entry(props: { children: JSX.Element }) {
    const idx = globalIndex++
    return <Show when={idx <= shown()}>
      <div class="mt-5 py-8 px-10 md-pr-12 md-pl-8 bg-paper b-rd-3"
        style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <ul style="list-style-type: none;">
          {props.children}
        </ul>
      </div>
    </Show>
  }

  return { Container, Entry }
}