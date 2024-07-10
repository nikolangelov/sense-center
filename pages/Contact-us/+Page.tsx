import "solid-slider/slider.css";
import { createSignal, Show } from 'solid-js';
import RiCloseFill from '~icons/ri/close-fill';

function FleurDivider () {
	return (
		<div class="m-auto my-36 position-relative w-80%">
			<div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
			<div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="assets/output-onlinepngtools.png" /></div>
		</div>
	);
}

export default function Page() {
  return (
    <>
      <h1 class="mt-25">Contacts</h1>

      <table class="w-full font-sans" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 5%);">
      <tbody>
      <tr>
      <td class="bg-paper pl-5 py-2 font-500 pt-8">Call landline:</td>
      <td class="bg-paper pl-5 py-2 font-500 pt-8">-</td>
      </tr>
      <tr>
      <td class="bg-paper pl-5 py-2 font-500">Call mobile:</td>
      <td class="bg-paper pl-5 py-2 font-500">-</td>
      </tr>
      <tr>
      <td class="bg-paper pl-5 py-2 font-500">Call Whatsapp:</td>
      <td class="bg-paper pl-5 py-2 font-500">-</td>
      </tr>
      <tr>
      <td class="bg-paper pl-5 py-2 font-500">Email us:</td>
      <td class="bg-paper pl-5 py-2 font-500">-</td>
      </tr>
      <tr>
      <td class="bg-paper pl-5 py-2 font-500">Message Whatsapp</td>
      <td class="bg-paper pl-5 py-2 font-500">-</td>
      </tr>
      </tbody>
      </table>

      <table class="w-full mt--0.5" style="box-shadow: 0px 10px 20px 5px rgb(84 89 95 / 5%);">
      <tbody>
      <tr class="">
      <td class="bg-paper pl-5 py-2 font-500 flex flex-col">
        <p class="mx-auto my-4 font-sans">Message Whatsapp</p>
        <img src="/assets/QR_Code_example.png" alt="QR code" class="w-15% mx-auto mb-8"/>
      </td>
      </tr>
      </tbody>
      </table>

      <FleurDivider></FleurDivider>

      <h2>Book directly</h2>

      <div class="mt-20 py-8 px-14 bg-paper b-rd-3 mx-auto" style="box-shadow: 0px 0px 20px 5px rgb(84 89 95 / 18%);">
        <form action="/my-handling-form-page" method="post">
          
          <p class="">
            <span class="" data-name="your-name">
              <input class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" aria-required="true" aria-invalid="false" placeholder="Name:" value="" type="text" name="your-name"/>
            </span>
          </p>

          <p class="">
            <span class="" data-name="your-email">
              <input class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" aria-required="true" aria-invalid="false" placeholder="E-mail:" value="" type="email" name="your-email"/>
            </span>
          </p>

          <p class="">
            <span class="" data-name="post-code">
              <input class="bg-gray-1 b-none w-full p-3 b-rd-1 c-paper-inv font-serif font-size-4" style="box-shadow: 0 1px 2px rgba(0, 0, 0, .12) inset;" aria-invalid="false" placeholder="Post code" value="" type="text" name="post-code"/>
            </span>
          </p>

          <p class="">
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

          <a href="mailto:masteryoda@starwars.com">
            <p>
            <input class="cursor-pointer py-4 px-10 bg-brand b-none c-paper b-rd-2 w-full uppercase font-800 font-size-5" style="letter-spacing: 1px;" type="submit" value="send"/>
            <span class="">
            </span>
            </p>
          </a>

        </form>
      </div>

      <FleurDivider></FleurDivider>

      <h2>Working hours</h2>

      <table class="w-full m-auto font-sans">
      <thead>
      <tr class="h-20">
      <td class="c-paper bg-#2e5c47 font-size-7 pl-5 b-rd-lt-3"><strong>Day</strong></td>
      <td class="c-paper bg-#2e5c47 font-size-7 pl-5 b-rd-rt-3"><strong>Time</strong></td>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td class="bg-paper pl-5 py-2 font-500">Monday</td>
      <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
      </tr>
      <tr>
      <td class="bg-paper pl-5 py-2 font-500">Tuesday</td>
      <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
      </tr>
      <tr>
      <td class="bg-paper pl-5 py-2 font-500">Wednesday</td>
      <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
      </tr>
      <tr>
      <td class="bg-paper pl-5 py-2 font-500">Thursday</td>
      <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
      </tr>
      <tr>
      <td class="bg-paper pl-5 py-2 font-500">Friday</td>
      <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
      </tr>
      <tr>
      <td class="bg-paper pl-5 py-2 font-500">Saturday</td>
      <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
      </tr>
      <tr>
      <td class="bg-paper pl-5 py-2 font-500">Sunday</td>
      <td class="bg-paper pl-5 py-2 font-500">from 9:00 - 18:00</td>
      </tr>
      <tr>
      <td class="b-rd-lb-3 b-rd-rb-3 bg-#2e5c47 h-6" colspan="3"><p class="font-size-4 pl-5 my-2 c-paper">*We also offer performing services out of working hours and at night, which will be included in the final price.</p></td>
      </tr>
      </tbody>
      </table>

      <FleurDivider></FleurDivider>

		  <a href="/"><img class="max-w-full block mla mra md-mt-30 md-mb-18 mt-20 mb-10" src="/assets/ShenYunZuoPin- Orange-Desktop-ZaDimo.png"></img></a>

    </>
  );
}
