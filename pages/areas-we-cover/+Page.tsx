import "solid-slider/slider.css";
import { createSignal, Show } from 'solid-js';
import RiCloseFill from '~icons/ri/close-fill';
import { MetaProvider, Meta } from "solid-meta";

function FleurDivider() {
  return (
    <div class="m-auto my-30 md-my-36 position-relative w-80%">
      <div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
      <div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="/assets/output-onlinepngtools.png" /></div>
    </div>
  );
}

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

function AreaButton(props: { href: string, buttontitle: string }) {
  return (
    <a href={props.href}><button class="outline-none bg-brand-second-action font-size-6 font-600 w-230px h-110px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action whitespace-normal line-height-6 word-spacing-0.5" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.0rem;">{props.buttontitle}</button></a>
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
        <h1 class="mt-17 font-size-14 md-font-size-16 md-line-height-18 line-height-16">Areas we cover</h1>

        <FullScreenImageGallery />

        <p class="md-max-w-80% font-size-4 line-height-5.5 md-line-height-6 m-auto mt-5 ">*Fine Carpet Cleaning London operates in all of London. The map below shows all of the London postcodes we cover.<br></br>
          **Transport surcharge may apply for all other post codes.</p>

        <FleurDivider></FleurDivider>

        <h2>Fine carpet cleaning operates in all London boroughs</h2>

        <ButtonContainer>
          <AreaButton
            href=""
            buttontitle="Carpet cleaning City of London"
          />
          <AreaButton
            href="/professional-carpet-cleaning-services/westminster"
            buttontitle="Carpet cleaning Westminster"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Kensington and Chelsea"
          />
        </ButtonContainer>

        <ButtonContainer>
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Hammersmith and Fulham"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Wandsworth"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Lambeth"
          />
        </ButtonContainer>

        <ButtonContainer>
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Southwark"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Tower Hamlets"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Hackney"
          />
        </ButtonContainer>

        <ButtonContainer>
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Islington"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Camden"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Brent"
          />
        </ButtonContainer>

        <ButtonContainer>
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Ealing"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Hounslow"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Richmond upon Thames"
          />
        </ButtonContainer>

        <ButtonContainer>
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Kingston upon Thames"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Merton"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Sutton"
          />
        </ButtonContainer>

        <ButtonContainer>
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Croydon"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Bromley"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Lewisham"
          />
        </ButtonContainer>

        <ButtonContainer>
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Greenwich"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Bexley"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Havering"
          />
        </ButtonContainer>

        <ButtonContainer>
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Barking and Dagenham"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Redbridge"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Newham"
          />
        </ButtonContainer>

        <ButtonContainer>
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Waltham Forest"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Haringey"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Enfield"
          />
        </ButtonContainer>

        <ButtonContainer>
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Barnet"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Harrow"
          />
          <AreaButton
            href=""
            buttontitle="Carpet cleaning Hillingdon"
          />
        </ButtonContainer>

        <FleurDivider></FleurDivider>

        <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
          <a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
          <a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
        </div>

    </>
  );
}
