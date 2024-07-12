function FleurDivider () {
	return (
		<div class="m-auto my-36 position-relative w-80%">
			<div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
			<div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="assets/output-onlinepngtools.png" /></div>
		</div>
	);
}

function AllServicesButton(props: {href: string; src: string; alt: string; children: HTMLElement | any}) {
  return (
    <a href={props.href}>
      <div class="bg-paper mt-7 mb-2 max-w-800px b-rd-3 px-7 pt-7 pb-2" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <img class="mx-auto w-400px" src={props.src} alt={props.alt} />
        <h3 class="main-services-h3 flex flex-justify-center flex-items-center font-size-9 h-60px w-400px hover-c-brand:hover text-center">{props.children}</h3>
      </div>
    </a>
  )
}

function AllServicesButtonContainer(props: {children: HTMLElement | any}) { 
  return (
    <div class="flex flex-justify-evenly flex-wrap gap-5 mb-5">
      {props.children}
    </div>
  )
}

export default function Page() {
  return (
    <>
 
      <h1 class="mt-20 mb-30">All services we offer</h1>

      <a href="/"><h2 class="hover-c-brand:hover mb-15">Carpet cleaning services</h2></a>

      <AllServicesButtonContainer>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Carpet steam cleaning
        </AllServicesButton>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Dry carpet cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Eco-friendly carpet cleaning
        </AllServicesButton>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Same day carpet cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Fast dry carpet cleaning
        </AllServicesButton>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Carpet stain removal
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Carpet stain protection
        </AllServicesButton>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Commercial carpet cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Residential carpet cleaning
        </AllServicesButton>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Office carpet cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <FleurDivider></FleurDivider>

      <a href="/"><h2 class="hover-c-brand:hover mb-15">Upholstery cleaning services</h2></a>

      <AllServicesButtonContainer>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Sofa cleaning
        </AllServicesButton>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Leather sofa cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Furniture cleaning
        </AllServicesButton>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Mattress cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Pillow cleaning
        </AllServicesButton>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Upholstery stain removal
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Upholstery stain protection
        </AllServicesButton>
      </AllServicesButtonContainer>

      <FleurDivider></FleurDivider>

      <a href="/"><h2 class="hover-c-brand:hover mb-15">Rug cleaning services</h2></a>

      <AllServicesButtonContainer>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Rug steam cleaning
        </AllServicesButton>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Dry rug cleaning
        </AllServicesButton>
      </AllServicesButtonContainer>

      <AllServicesButtonContainer>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Rug stain removal
        </AllServicesButton>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Rug stain protection
        </AllServicesButton>
      </AllServicesButtonContainer>

      <FleurDivider></FleurDivider>

      <a href="/"><h2 class="hover-c-brand:hover mb-15">Other services</h2></a>

      <AllServicesButtonContainer>
        <AllServicesButton
        href="/"
        src="/assets/Професионално почистване на заведения.jpg"
        alt=""
        >Antiviral sanitisation
        </AllServicesButton>
      </AllServicesButtonContainer>

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center gap-15">
      <button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">PRICES</a></button>
			<button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">GET A QUOTE</a></button>
		  </div>

		  <a href="/"><img class="max-w-full block mla mra md-mt-30 md-mb-18 mt-20 mb-10" src="/assets/ShenYunZuoPin- Orange-Desktop-ZaDimo.png"></img></a>

    </>
  );
}
