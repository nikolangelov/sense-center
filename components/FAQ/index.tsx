import { JSX, Show } from "solid-js"


export function FaqColapse({ idx, shown, children }: { idx: number, shown: number, children: JSX.Element }) {
  console.log(idx, shown)
  return <Show when={idx <= shown}>
    {children}
  </Show>
}
