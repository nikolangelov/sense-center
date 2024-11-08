import "solid-slider/slider.css";
import { createSignal, Show } from 'solid-js';
import RiCloseFill from '~icons/ri/close-fill';
import { AnimatedH2 } from '../../components/TransitionH2';
import { FleurDivider } from "../../components/FleurDivider";
import { Head } from 'vike-solid/Head';

function FullScreenImageGallery() {
  const [open, setOpen] = createSignal(false);

  const handleClick = () => {
    setOpen(!open());
  };

  return (
    <div class="relative">
      <img class="cursor-pointer max-w-full md-max-w-80% md-max-h-80% block m-auto" src="/assets/map2.png" alt="" onClick={handleClick} />
      <Show when={open()}>
        <div class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-85 z-9999" onClick={handleClick}>
          <RiCloseFill class="w-16 h-16 absolute top-0 right-0 mr-20 mt-14 p-2 text-white bg-transparent color-paper cursor-pointer hover-color-brand:hover" />
          <img src="/assets/map2.png" alt="" class="max-w-full max-h-full" />
        </div>
      </Show>
    </div>
  );
}

function AreaButton(props: { buttontitle: string, href?: string, class?: string, }) {
  return (
    <a href={props.href}><button class={props.class} class="outline-none bg-brand-second-action font-size-6 font-600 w-230px h-110px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action whitespace-normal line-height-6 word-spacing-0.5" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.0rem;">{props.buttontitle}</button></a>
  )
}
function ButtonContainer(props: { children: HTMLElement | any }) {
  return (
    <div class="flex flex-justify-around flex-wrap mt-10 gap-10 md-gap-0">
      {props.children}
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Head><meta name="robots" content="noindex" /></Head>
      <h1 class="mt-17 font-size-14 md-font-size-16 md-line-height-18 line-height-16">Areas we cover</h1>

      <FullScreenImageGallery />

      <p class="md-max-w-80% font-size-4 line-height-5.5 md-line-height-6 m-auto mt-5 ">*Fine Carpet Cleaning London operates in all of London. The map above shows all of the London postcodes we cover.<br></br>
        **Transport surcharge may apply for all other post codes.</p>

      <FleurDivider />

      <AnimatedH2>Fine carpet cleaning operates in all London boroughs</AnimatedH2>

      <ButtonContainer>
        <AreaButton
          buttontitle="Carpet cleaning City of London"
        />
        <AreaButton
        class="cursor-pointer"
          href="/professional-carpet-cleaning-services/westminster"
          buttontitle="Carpet cleaning Westminster"
        />
        <AreaButton
          class="cursor-pointer"
          href="/professional-carpet-cleaning-services/kensington-chelsea"
          buttontitle="Carpet cleaning Kensington and Chelsea"
        />
      </ButtonContainer>

      <ButtonContainer>
        <AreaButton
          href="/professional-carpet-cleaning-services/kensington-chelsea"
          buttontitle="Carpet cleaning Hammersmith and Fulham"
        />
        <AreaButton
          
          buttontitle="Carpet cleaning Wandsworth"
        />
        <AreaButton
          
          buttontitle="Carpet cleaning Lambeth"
        />
      </ButtonContainer>

      <ButtonContainer>
        <AreaButton
          
          buttontitle="Carpet cleaning Southwark"
        />
        <AreaButton
          
          buttontitle="Carpet cleaning Tower Hamlets"
        />
        <AreaButton
          
          buttontitle="Carpet cleaning Hackney"
        />
      </ButtonContainer>

      <ButtonContainer>
        <AreaButton
          
          buttontitle="Carpet cleaning Islington"
        />
        <AreaButton
          
          buttontitle="Carpet cleaning Camden"
        />
        <AreaButton
          
          buttontitle="Carpet cleaning Brent"
        />
      </ButtonContainer>

      <ButtonContainer>
        <AreaButton
          
          buttontitle="Carpet cleaning Ealing"
        />
        <AreaButton
          
          buttontitle="Carpet cleaning Hounslow"
        />
        <AreaButton
          
          buttontitle="Carpet cleaning Richmond upon Thames"
        />
      </ButtonContainer>

      <ButtonContainer>
        <AreaButton
          
          buttontitle="Carpet cleaning Kingston upon Thames"
        />
        <AreaButton
          
          buttontitle="Carpet cleaning Merton"
        />
        <AreaButton
          
          buttontitle="Carpet cleaning Sutton"
        />
      </ButtonContainer>

      <ButtonContainer>
        <AreaButton
          

          buttontitle="Carpet cleaning Croydon"
        />
        <AreaButton
          

          buttontitle="Carpet cleaning Bromley"
        />
        <AreaButton
          

          buttontitle="Carpet cleaning Lewisham"
        />
      </ButtonContainer>

      <ButtonContainer>
        <AreaButton
          

          buttontitle="Carpet cleaning Greenwich"
        />
        <AreaButton
          

          buttontitle="Carpet cleaning Bexley"
        />
        <AreaButton
          

          buttontitle="Carpet cleaning Havering"
        />
      </ButtonContainer>

      <ButtonContainer>
        <AreaButton
          

          buttontitle="Carpet cleaning Barking and Dagenham"
        />
        <AreaButton
          

          buttontitle="Carpet cleaning Redbridge"
        />
        <AreaButton
          

          buttontitle="Carpet cleaning Newham"
        />
      </ButtonContainer>

      <ButtonContainer>
        <AreaButton
          

          buttontitle="Carpet cleaning Waltham Forest"
        />
        <AreaButton
          

          buttontitle="Carpet cleaning Haringey"
        />
        <AreaButton
          

          buttontitle="Carpet cleaning Enfield"
        />
      </ButtonContainer>

      <ButtonContainer>
        <AreaButton
          

          buttontitle="Carpet cleaning Barnet"
        />
        <AreaButton
          

          buttontitle="Carpet cleaning Harrow"
        />
        <AreaButton
          

          buttontitle="Carpet cleaning Hillingdon"
        />
      </ButtonContainer>

      <FleurDivider />

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
        <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
        <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
      </div>
    </>
  );
}
