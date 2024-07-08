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

      <table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
      <thead>
      <tr class="row-1 odd">
      <td class="top-row-of-price-table" style="background: #1A6142; color: #fff;"><strong>Day</strong></td>
      <td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;"><strong>Time</strong></td>
      </tr>
      </thead>
      <tbody class="row-hover">
      <tr>
      <td class="price-table-body-row">Call landline:</td>
      <td class="price-table-body-row">-</td>
      </tr>
      <tr>
      <td class="price-table-body-row">Call mobile:</td>
      <td class="price-table-body-row">-</td>
      </tr>
      <tr>
      <td class="price-table-body-row">Call Whatsapp:</td>
      <td class="price-table-body-row">-</td>
      </tr>
      <tr>
      <td class="price-table-body-row">Email us:</td>
      <td class="price-table-body-row">-</td>
      </tr>
      <tr>
      <td class="price-table-body-row">Message Whatsapp</td>
      <td class="price-table-body-row">-</td>
      </tr>
      <tr>
      <td class="price-table-body-row">Message Whatsapp</td>
      <td class="price-table-body-row">-</td>
      </tr>
      <tr class="row-1 odd">
      <td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">
      &nbsp;
      </td>
      </tr>
      </tbody>
      </table>

      <FleurDivider></FleurDivider>

      <h2>Book directly</h2>

      <div class="contact-form-container-box">[contact-form-7 id="8cca1ec" title="Cherry contact form"]</div>

      <FleurDivider></FleurDivider>

      <h2>Working hours</h2>

      <table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
      <thead>
      <tr class="row-1 odd">
      <td class="top-row-of-price-table" style="background: #1A6142; color: #fff;"><strong>Day</strong></td>
      <td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;"><strong>Time</strong></td>
      </tr>
      </thead>
      <tbody class="row-hover">
      <tr>
      <td class="price-table-body-row">Monday</td>
      <td class="price-table-body-row">from -</td>
      </tr>
      <tr>
      <td class="price-table-body-row">Tuesday</td>
      <td class="price-table-body-row">from -</td>
      </tr>
      <tr>
      <td class="price-table-body-row">Wednesday</td>
      <td class="price-table-body-row">from -</td>
      </tr>
      <tr>
      <td class="price-table-body-row">Thursday</td>
      <td class="price-table-body-row">from -</td>
      </tr>
      <tr>
      <td class="price-table-body-row">Friday</td>
      <td class="price-table-body-row">from -</td>
      </tr>
      <tr>
      <td class="price-table-body-row">Saturday</td>
      <td class="price-table-body-row">from -</td>
      </tr>
      <tr>
      <td class="price-table-body-row">Sunday</td>
      <td class="price-table-body-row">from -</td>
      </tr>
      <tr class="row-1 odd">
      <td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3"><p class="text-after-areaswecover-and-workinghours">*We also offer performing services out of working hours and at night, which will be included in the final price.</p></td>
      </tr>
      </tbody>
      </table>

      <FleurDivider></FleurDivider>

		  <a href="/"><img class="max-w-full block mla mra md-mt-30 md-mb-18 mt-20 mb-10" src="/assets/ShenYunZuoPin- Orange-Desktop-ZaDimo.png"></img></a>

    </>
  );
}
