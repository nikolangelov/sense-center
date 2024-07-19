function FleurDivider () {
	return (
    <div class="m-auto my-30 md-my-36 position-relative w-80%">
      <div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
      <div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="assets/output-onlinepngtools.png" /></div>
    </div>
	);
}

export default function Page() {
  return (
    <>
      <h1 class="mt-17 font-size-14 md-font-size-16 md-line-height-18 line-height-16">Feedback</h1>

      <div class="mt-20 py-8 px-8 md-px-14 b-rd-3 bg-paper line-height-8 text-justify font-size-4.4" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">If you have suggestions on how we can improve, please do not hesitate to leave us feedback! Your opinion is very valuable to us and it will be read directly by the owner.</div>
      
      <div class="mt-20 py-8 px-5 md-px-14 bg-paper b-rd-3 mx-auto" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 10%);">
        <form onsubmit="emailSend(); reset(); return false;">
          
          <p>
            <span class="" data-name="your-name">
              <input class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" aria-required="true" aria-invalid="false" placeholder="Name:" value="" type="text" name="your-name"/>
            </span>
          </p>

          <p>
            <span class="" data-name="your-email">
              <input class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" aria-required="true" aria-invalid="false" placeholder="E-mail:" value="" type="email" name="your-email"/>
            </span>
          </p>

          <p>
            <span class="" data-name="post-code">
              <input class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" aria-invalid="false" placeholder="Post code" value="" type="text" name="post-code"/>
            </span>
          </p>

          <p>
            <span class="" data-name="your-phone">
              <input class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" aria-invalid="false" placeholder="Phone:" value="" type="text" name="your-phone"/>
            </span>
          </p>

          <h4 class="mb-2">Choose Service Required</h4>
          <span data-name="menu-490">
            <select class="bg-gray-1 b-none w-full p-3 b-rd-1 c-gray-5 font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" aria-required="true" aria-invalid="false" name="menu-490">
              <option value="Carpet cleaning">Carpet cleaning</option>
              <option value="Rug cleaning">Rug cleaning</option>
              <option value="Upholstery cleaning">Upholstery cleaning</option>
              <option value="Steam cleaning">Steam cleaning</option>
              <option value="Stain removal">Stain removal</option>
              <option value="Corona Virus Disinfection">Corona Virus Disinfection</option>
            </select>
          </span>

          <h4 class="mb-2">How did you find us</h4>
          <span data-name="menu-238">
            <select class="bg-gray-1 b-none w-full p-3 b-rd-1 c-gray-5 font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" aria-invalid="false" name="menu-238">
              <option value="Google">Google</option>
              <option value="Gumtree">Gumtree</option>
              <option value="Yahoo">Yahoo</option>
              <option value="Bing">Bing</option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="Fine Carpet Cleaning vehicle">Fine Carpet Cleaning vehicle</option>
              <option value="Recommendation">Recommendation</option>
              <option value="I've used Fine Carpet Cleaning before">I've used Fine Carpet Cleaning before</option>
            </select>
          </span>

          <p>
            <span data-name="your-message">
              <textarea cols="40" rows="10" class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" aria-invalid="false" placeholder="Message:" name="your-message">
              </textarea>
            </span>
          </p>

            <p>
            <input class="cursor-pointer py-4 px-10 bg-brand-second hover-bg-brand-second-action-hover:hover b-none c-paper b-rd-2 w-full uppercase font-800 font-size-5" style="letter-spacing: 1px;" type="submit" value="send"/>
            <span class="">
            </span>
            </p>

        </form>
      </div>

      <script src="https://smtpjs.com/v3/smtp.js"></script>

      <script src="send-email.js"></script>

      <FleurDivider></FleurDivider>

      <div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
			  <button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">GET A QUOTE</a></button>
			  <button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">SERVICES</a></button>
		  </div>
    </>
  );
}
