export const H2WithImage = (props: { class?: string | string; title: string; style?: string }) => {

    return (
      <>
        <h2 class={props.class}>{props.title}</h2>
      </>
    );
  };