import "solid-slider/slider.css";
import { MetaProvider, Meta } from "solid-meta";
import { PriceTable } from '../../components/PriceTable';

function FleurDivider() {
	return (
		<div class="m-auto my-30 md-my-36 position-relative w-80%">
			<div class="divider-shadow overflow-hidden h-0.5 after-block::after after-w-full::after after-h-6::after after-mx-auto::after after-mt--6::after"></div>
			<div class="w-11 h-11 position-absolute position-bottom--6 left-47% bg-#f7f7f7"><img class="position-absolute max-w-7 mx-1.8" src="/assets/output-onlinepngtools.png" /></div>
		</div>
	);
}

export default function Page() {
	return (
		<>
			<h1 class="font-size-14 md-font-size-16 md-line-height-18 line-height-16">Prices of our cleaning services</h1>

			<h2 class="mb-10 md-mb-20">Carpet cleaning (Carpet steam cleaning)</h2>

			<PriceTable title="Room type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £11.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £39.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £27.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £29.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single step</td>
					<td class="bg-paper pl-5 py-2 font-500">from £2.20</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Office room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £27.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hotel room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Loft room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £63.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Box room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £27.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £8.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/steam" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Dry carpet cleaning</h2>

			<PriceTable title="Room type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £16.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £8.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £48.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £32.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Office room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £32.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hotel room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £50.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Loft room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £76.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Box room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £32.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £11.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/dry" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			{ /* <h2 class="mb-10 md-mb-20">Eco-friendly carpet cleaning</h2>

				<PriceTable title="Room type">
					<tr></tr>
				</PriceTable>

				<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
					<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/eco-friendly" class="c-paper font-size-5">GO TO SERVICE</a></button>
				</div>

				<FleurDivider></FleurDivider>

				<h2 class="mb-10 md-mb-20">Same day carpet cleaning</h2>

				<PriceTable title="Room type">
					<tr></tr>
				</PriceTable>

				<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
					<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/same-day" class="c-paper font-size-5">GO TO SERVICE</a></button>
				</div>

				<FleurDivider></FleurDivider>

				<h2 class="mb-10 md-mb-20">Fast dry carpet cleaning</h2>

				<PriceTable title="Room type">
					<tr></tr>
				</PriceTable>

				<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
					<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/fast-dry" class="c-paper font-size-5">GO TO SERVICE</a></button>
				</div>

				<FleurDivider></FleurDivider> */ }

			<h2 class="mb-10 md-mb-20">Carpet stain removal</h2>

			<PriceTable title="Service type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Stain removal</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-stain-removal-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Carpet stain protection</h2>

			<PriceTable title="Room type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Commercial stain protector</td>
					<td class="bg-paper pl-5 py-2 font-500">from £1.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £3.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living Room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £11.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £10.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Office room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £11.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hotel room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Loft room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £13.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £35.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Box room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £11.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £5.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/stain-protection-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Commercial carpet cleaning</h2>

			<PriceTable title="Area size">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Per square metre - from 0 up to 200m²</td>
					<td class="bg-paper pl-5 py-2 font-500">£2.20</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Per square metre - from 200 up to 1000m²</td>
					<td class="bg-paper pl-5 py-2 font-500">£2.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/commercial" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Residential carpet cleaning</h2>

			<PriceTable title="Room type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hallway</td>
					<td class="bg-paper pl-5 py-2 font-500">from £11.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Landing</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Living room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £39.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bedroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £27.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Flight of stairs</td>
					<td class="bg-paper pl-5 py-2 font-500">from £29.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single step</td>
					<td class="bg-paper pl-5 py-2 font-500">from £2.20</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Office room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £27.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Hotel room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £40.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Loft room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Through lounge</td>
					<td class="bg-paper pl-5 py-2 font-500">from £63.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Box room</td>
					<td class="bg-paper pl-5 py-2 font-500">from £27.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bathroom</td>
					<td class="bg-paper pl-5 py-2 font-500">from £8.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/residential" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Office carpet cleaning</h2>

			<PriceTable title="Area size">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Per square metre - from 0 up to 200m²</td>
					<td class="bg-paper pl-5 py-2 font-500">£2.20</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Per square metre - from 200 up to 1000m²</td>
					<td class="bg-paper pl-5 py-2 font-500">£2.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/commercial/office" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Upholstery cleaning</h2>

			<h2 class="mb-10 md-mb-20">Sofa cleaning</h2>

			<PriceTable title="Sofa type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Footstool (Puff)</td>
					<td class="bg-paper pl-5 py-2 font-500">from £10.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Two seated sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £44.20</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Two seated L shaped sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £52.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Three seated sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £52.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Three seated L shaped sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £65.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Four seated sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £65.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Four seated L shaped sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £76.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Five seated sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £76.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Five seated L shaped sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £95.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">For others, please contact us</td>
					<td class="bg-paper pl-5 py-2 font-500">-</td>
				</tr>
				<h3>Velvet sofa cleaning</h3>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Footstool (Puff)</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Two seated velvet sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £54.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Two seated L shaped velvet sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £65.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Three seated velvet sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £65.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Three seated L shaped velvet sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £84.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Four seated velvet sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £84.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Four seated L shaped velvet sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £95.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Five seated velvet sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £95.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Five seated L shaped velvet sofa</td>
					<td class="bg-paper pl-5 py-2 font-500">from £106.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">For others, please contact us</td>
					<td class="bg-paper pl-5 py-2 font-500">-</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-upholstery-cleaning-services/sofa" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Leather sofa cleaning</h2>

			<PriceTable title="Sofa type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Footstool (Puff)</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Two seated</td>
					<td class="bg-paper pl-5 py-2 font-500">from £54.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Two seated L shaped</td>
					<td class="bg-paper pl-5 py-2 font-500">from £65.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Three seated</td>
					<td class="bg-paper pl-5 py-2 font-500">from £65.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Three seated L shaped</td>
					<td class="bg-paper pl-5 py-2 font-500">from £84.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Four seated</td>
					<td class="bg-paper pl-5 py-2 font-500">from £84.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Four seated L shaped</td>
					<td class="bg-paper pl-5 py-2 font-500">from £95.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Five seated</td>
					<td class="bg-paper pl-5 py-2 font-500">from £95.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Five seated L shaped</td>
					<td class="bg-paper pl-5 py-2 font-500">from £106.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">For others, please contact us</td>
					<td class="bg-paper pl-5 py-2 font-500">-</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-upholstery-cleaning-services/sofa/leather" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Furniture cleaning</h2>

			<PriceTable title="Furniture type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Armchair</td>
					<td class="bg-paper pl-5 py-2 font-500">from £30.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Pair of curtains</td>
					<td class="bg-paper pl-5 py-2 font-500">from £25.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bed base</td>
					<td class="bg-paper pl-5 py-2 font-500">from £22.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Headboard</td>
					<td class="bg-paper pl-5 py-2 font-500">from £15.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Office chair - seat</td>
					<td class="bg-paper pl-5 py-2 font-500">from £8.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Office chair - seat & back</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Dining chair - seat</td>
					<td class="bg-paper pl-5 py-2 font-500">from £7.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Dining chair - seat & back</td>
					<td class="bg-paper pl-5 py-2 font-500">from £13.00</td>
				</tr>
				<h3>Velvet furniture cleaning</h3>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Bed base - Velvet</td>
					<td class="bg-paper pl-5 py-2 font-500">from £26.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Headboard - Velvet/Leather</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Office chair - seat - Velvet</td>
					<td class="bg-paper pl-5 py-2 font-500">from £10.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Office chair - seat & back - Velvet</td>
					<td class="bg-paper pl-5 py-2 font-500">from £24.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Dining chair - seat - Velvet</td>
					<td class="bg-paper pl-5 py-2 font-500">from £7.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Dining chair - seat & back - Velvet</td>
					<td class="bg-paper pl-5 py-2 font-500">from £13.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-upholstery-cleaning-services/furniture" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Mattress cleaning</h2>

			<PriceTable title="Mattress type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Mattress single</td>
					<td class="bg-paper pl-5 py-2 font-500">from £26.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Mattress double</td>
					<td class="bg-paper pl-5 py-2 font-500">from £38.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Mattress king size</td>
					<td class="bg-paper pl-5 py-2 font-500">from £47.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Mattress super king size</td>
					<td class="bg-paper pl-5 py-2 font-500">from £57.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-upholstery-cleaning-services/mattress" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Pillow cleaning</h2>

			<PriceTable title="Pillow type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Single pillow</td>
					<td class="bg-paper pl-5 py-2 font-500">from £10.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-upholstery-cleaning-services/pillow" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Upholstery stain removal</h2>

			<PriceTable title="Service type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Stain removal</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-stain-removal-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Upholstery stain protection</h2>

			<PriceTable title="Upholtery type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Footstool (Puff)</td>
					<td class="bg-paper pl-5 py-2 font-500">from £4.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Two seated</td>
					<td class="bg-paper pl-5 py-2 font-500">from £9.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Two seated L shaped</td>
					<td class="bg-paper pl-5 py-2 font-500">from £11.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Three seated</td>
					<td class="bg-paper pl-5 py-2 font-500">from £11.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Three seated L shaped</td>
					<td class="bg-paper pl-5 py-2 font-500">from £13.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Four seated</td>
					<td class="bg-paper pl-5 py-2 font-500">from £13.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Four seated L shaped</td>
					<td class="bg-paper pl-5 py-2 font-500">from £17.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Five seated</td>
					<td class="bg-paper pl-5 py-2 font-500">from £17.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Five seated L shaped</td>
					<td class="bg-paper pl-5 py-2 font-500">from £21.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Dining chair</td>
					<td class="bg-paper pl-5 py-2 font-500">from £3.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Office chair</td>
					<td class="bg-paper pl-5 py-2 font-500">from £4.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Armchair</td>
					<td class="bg-paper pl-5 py-2 font-500">from £8.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">For others, please contact us</td>
					<td class="bg-paper pl-5 py-2 font-500">-</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/stain-protection-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Rug steam cleaning</h2>

			<PriceTable title="Rug type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Rug - small</td>
					<td class="bg-paper pl-5 py-2 font-500">from £11.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Rug - medium</td>
					<td class="bg-paper pl-5 py-2 font-500">from £17.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Rug - large</td>
					<td class="bg-paper pl-5 py-2 font-500">from £31.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Rug - extra large</td>
					<td class="bg-paper pl-5 py-2 font-500">from £50.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-rug-cleaning-services/steam" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Dry rug cleaning</h2>

			<PriceTable title="Rug type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Rug - small</td>
					<td class="bg-paper pl-5 py-2 font-500">from £14.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Rug - medium</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Rug - large</td>
					<td class="bg-paper pl-5 py-2 font-500">from £37.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Rug - extra large</td>
					<td class="bg-paper pl-5 py-2 font-500">from £60.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-rug-cleaning-services/dry" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Rug stain removal</h2>

			<PriceTable title="Service type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Stain removal</td>
					<td class="bg-paper pl-5 py-2 font-500">from £20.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-stain-removal-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Rug stain protection</h2>

			<PriceTable title="Rug type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Rug</td>
					<td class="bg-paper pl-5 py-2 font-500">from £6.00</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/stain-protection-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<h2 class="mb-10 md-mb-20">Antiviral sanitisation</h2>

			<PriceTable title="Room type">
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Studio flat</td>
					<td class="bg-paper pl-5 py-2 font-500">from £80.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">One bedroom flat</td>
					<td class="bg-paper pl-5 py-2 font-500">from £100.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Two bedroom flat</td>
					<td class="bg-paper pl-5 py-2 font-500">from £120.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Two bedroom house</td>
					<td class="bg-paper pl-5 py-2 font-500">from £140.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Three bedroom house</td>
					<td class="bg-paper pl-5 py-2 font-500">from £180.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Four bedroom house</td>
					<td class="bg-paper pl-5 py-2 font-500">from £200.00</td>
				</tr>
				<tr>
					<td class="bg-paper pl-5 py-2 font-500">Office** m²</td>
					<td class="bg-paper pl-5 py-2 font-500">from £1.50</td>
				</tr>
			</PriceTable>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/antiviral-sanitisation-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider></FleurDivider>

			<div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
				<a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
				<a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
			</div>
		</>
	);
}
