import RiArrowRightSLine from '~icons/ri/arrow-right-s-line';
import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line';
import RiCloseFill from '~icons/ri/close-fill';
import "solid-slider/slider.css";
import { createSignal, Show } from 'solid-js';
import RiYoutubeFill from '~icons/ri/youtube-fill';


function FleurDivider () {
	return (
		<div class="m-auto my-36 position-relative w-80%">
			<div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
			<div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="assets/output-onlinepngtools.png" /></div>
		</div>
	);
}







function FullScreenImageGallerySecond(props: {src:string, alt:string, class:string }) {

	return (
	  <div class="relative">


        <div class="max-w-1000px m-auto position-relative">
          <div class="img_container flex flex-col">

            <img src="/assets/Професионално почистване на заведения.jpg" alt="" class="cursor-pointer max-w-full max-h-full block m-auto"/>      

            <div class="flex flex-gap-1 mt-1">
              <img src="/assets/Професионално почистване на заведения.jpg" alt="" class="cursor-pointer max-w-100% max-h-100% block m-auto"/>      
              <img src="/assets/Професионално почистване на заведения.jpg" alt="" class="cursor-pointer max-w-100% max-h-100% block m-auto"/>      
              <div class="flex flex-justify-center flex-items-center"><span class="z-1 c-paper font-size-12 position-absolute">+3</span><img src="/assets/Професионално почистване на заведения.jpg" alt="" class="cursor-pointer max-w-100% max-h-100% block m-auto filter-brightness-40" onClick={handleClick}/></div>      
              <img src="/assets/Професионално почистване на заведения.jpg" alt="" class="hidden"/>      
              <img src="/assets/Професионално почистване на заведения.jpg" alt="" class="hidden"/>      
            </div>
          </div>
              <div class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-85 z-9999">
              <RiCloseFill class="z-2 w-16 h-16 absolute top-0 right-0 mr-8 mt-8 p-2 text-white bg-transparent color-paper cursor-pointer hover-color-brand:hover"/>
              <img src={props.src} alt={props.alt} class="filter-brightness-100 max-w-100% max-h-100%"/>
              </div>
        </div>
	  </div>
	);
}








export default function Page() {
  return (
    <>
      <h1 class="mt-17">Prices of our cleaning services</h1>
      
      
<h2>Carpet cleaning</h2>








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
		<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
		</tr>
		<tr>
		<td class="bg-paper pl-5 py-2 font-500">Tuesday</td>
		<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
		</tr>
		<tr>
		<td class="bg-paper pl-5 py-2 font-500">Wednesday</td>
		<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
		</tr>
		<tr>
		<td class="bg-paper pl-5 py-2 font-500">Thursday</td>
		<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
		</tr>
		<tr>
		<td class="bg-paper pl-5 py-2 font-500">Friday</td>
		<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
		</tr>
		<tr>
		<td class="bg-paper pl-5 py-2 font-500">Saturday</td>
		<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
		</tr>
		<tr>
		<td class="bg-paper pl-5 py-2 font-500">Sunday</td>
		<td class="bg-paper pl-5 py-2 font-500">9:00 - 18:00</td>
		</tr>
		<tr>
		<td class="b-rd-lb-3 b-rd-rb-3 bg-#2e5c47" colspan="3"><p class="font-size-4 pl-5 my-2 c-paper">*We also offer performing services out of working hours and at night, which will be included in the final price.</p></td>
		</tr>
		</tbody>
		</table>








<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Carpet steam cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Dry carpet cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Eco-friendly carpet cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Same day carpet cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Fast dry carpet cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Carpet stain removal</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Carpet stain protection</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Commercial carpet cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Residential carpet cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Office carpet cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Sofa cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Leather sofa cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Furniture cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Mattress cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Pillow cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Upholstery stain removal</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Upholstery stain protection</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Rug steam cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Dry rug cleaning</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Rug stain removal</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Rug stain protection</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<h2>Antiviral sanitisation</h2>

<table id="tableprices-1" class="tableprices tableprices-id-1 dataTable no-footer" style="width: 100%; margin: 0 auto;">
<thead>
<tr class="row-1 odd">
<td class="top-row-of-price-table" style="background: #1A6142; color: #fff;" align="center" width="40%"><strong>Room type</strong></td>
<td class="top-row-of-price-table-two" style="background: #1A6142; color: #fff;" align="center" width="20%"><strong>Price</strong></td>
</tr>
</thead>
<tbody class="row-hover">
<tr>
<td class="price-table-body-row">Single Bedroom</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr>
<td class="price-table-body-row">Double Bedroom</td>
<td class="price-table-body-row">from £35.00</td>
</tr>
<tr>
<td class="price-table-body-row">Master Bedroom</td>
<td class="price-table-body-row">from £40.00</td>
</tr>
<tr>
<td class="price-table-body-row">Living Room</td>
<td class="price-table-body-row">from £43.00</td>
</tr>
<tr>
<td class="price-table-body-row">Through Lounge</td>
<td class="price-table-body-row">from £69.00</td>
</tr>
<tr>
<td class="price-table-body-row">Hallway</td>
<td class="price-table-body-row">from £21.00</td>
</tr>
<tr>
<td class="price-table-body-row">Flight of Stairs</td>
<td class="price-table-body-row">from £34.00</td>
</tr>
<tr>
<td class="price-table-body-row">Landing</td>
<td class="price-table-body-row">from £15.00</td>
</tr>
<tr>
<td class="price-table-body-row">Bathroom</td>
<td class="price-table-body-row">from £6.00</td>
</tr>
<tr>
<td class="price-table-body-row">Small rug</td>
<td class="price-table-body-row">from £14.00</td>
</tr>
<tr>
<td class="price-table-body-row">Medium rug</td>
<td class="price-table-body-row">from £20.00</td>
</tr>
<tr>
<td class="price-table-body-row">Large rug</td>
<td class="price-table-body-row">from £31.00</td>
</tr>
<tr class="row-1 odd">
<td class="rnd_b_l rnd_b_r" style="background: #1A6142; color: #fff;" colspan="3">*All prices depend on the quantity of the order, degree of contamination and access.
**Final price after contacting us.</td>
</tr>
</tbody>
</table>

<button class="greenbutton"><a href="/">GO TO SERVICE</a></button>

<FleurDivider></FleurDivider>

<div class="buttoncontainer"><button class="greenbutton"><a>SERVICES</a></button>
<button class="otherbutton"><a>GET A QUOTE</a></button></div>
    </>
  );
}
