import { JSX, Match, Switch } from 'solid-js';

export function Typography({ variant, children }: { variant: "body" | "h3", children: JSX.Element }) {
    return (
        <Switch>
            <Match when={variant === "h3"}>
                <h3>{children}</h3>
            </Match>
            <Match when={variant === "body"}>
                <p class="ml--5">{children}</p>
            </Match>
        </Switch>
    );
}