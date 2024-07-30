import "solid-slider/slider.css";
import { JSX } from 'solid-js/jsx-runtime';

function FleurDivider() {
	return (
		<div class="m-auto my-30 md-my-36 position-relative w-80%">
			<div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
			<div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="/assets/output-onlinepngtools.png" /></div>
		</div>
	);
}

function PriceTable(props: { class: string, children: HTMLElement | any }) {

	return (

		<div class="">

			<table class="w-full m-auto font-sans">
				<thead style="box-shadow: 0px 20px 20px 1px rgb(84 89 95 / 10%);">
					<tr class="h-20">
						<td class="c-paper bg-#2e5c47 font-size-7 pl-5 b-rd-lt-3"><strong>Room type</strong></td>
						<td class="c-paper bg-#2e5c47 font-size-7 pl-5 b-rd-rt-3"><strong>Price</strong></td>
					</tr>
				</thead>
				<tbody style="box-shadow: 0px 20px 20px 1px rgb(84 89 95 / 10%);">
					{props.children}
					<tr>
						<td class="b-rd-lb-3 b-rd-rb-3 bg-#2e5c47" colspan="3" style="box-shadow: 0px 20px 20px 1px rgb(247 247 247/ 100%);"><p class="font-size-3.5 md-font-size-4 px-5 md-my-7 c-paper md-line-height-0 line-height-6 word-spacing-0.5">*We also offer performing services out of working hours and at night, which will be included in the final price.</p></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default function Page() {
	return (
		<>
			<h1 class="font-size-14 md-font-size-16 md-line-height-18 line-height-16">Prices of our cleaning services</h1>

			<h2 class="mb-10 md-mb-20">Carpet cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Carpet steam cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Dry carpet cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Eco-friendly carpet cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Same day carpet cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Fast dry carpet cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Carpet stain removal</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Carpet stain protection</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Commercial carpet cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Residential carpet cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Office carpet cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Sofa cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Leather sofa cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Furniture cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Mattress cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Pillow cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Upholstery stain removal</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Upholstery stain protection</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Rug steam cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Dry rug cleaning</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Rug stain removal</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Rug stain protection</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Antiviral sanitisation</h2>

			<PriceTable>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Double Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Master Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £43.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through Lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £69.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of Stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £34.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Small rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Medium rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Large rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
				<button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">SERVICES</a></button>
				<button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a class="c-paper font-size-5">GET A QUOTE</a></button>
			</div>
		</>
	);
}
