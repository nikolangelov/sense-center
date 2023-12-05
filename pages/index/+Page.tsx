import { Counter } from "./Counter";

export default function Page() {
  return (
    <>
      <h1 class="c-green">My vike-solid app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
