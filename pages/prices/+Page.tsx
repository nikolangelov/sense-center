import "solid-slider/slider.css";
import { PriceTable } from '../../components/PriceTable';
import { FleurDivider } from "../../components/FleurDivider";
import { Head } from 'vike-solid/Head';

export default function Page() {
	return (
		<>
			<Head><meta name="robots" content="noindex" /></Head>
			<h1 class="font-size-14 md-font-size-16 md-line-height-18 line-height-16">Prices of our cleaning services</h1>

			<h2 class="mb-10 md-mb-20">Carpet cleaning (also known as Carpet steam cleaning)</h2>

			<PriceTable
				title="Room type"
				items={[
					{ label: "Hallway", value: "from £13.00" },
					{ label: "Landing", value: "from £7.00" },
					{ label: "Living Room", value: "from £44.00" },
					{ label: "Bedroom", value: "from £31.00" },
					{ label: "Flight of stairs", value: "from £33.00" },
					{ label: "Single step", value: "from £2.50" },
					{ label: "Office room", value: "from £31.00" },
					{ label: "Hotel room", value: "from £45.00" },
					{ label: "Loft room", value: "from £35.00" },
					{ label: "Through lounge", value: "from £71.00" },
					{ label: "Box room", value: "from £31.00" },
					{ label: "Bathroom", value: "from £9.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/steam" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Dry carpet cleaning</h2>

			<PriceTable
				title="Room type"
				items={[
					{ label: "Hallway", value: "from £18.00" },
					{ label: "Landing", value: "from £9.00" },
					{ label: "Living room", value: "from £54.00" },
					{ label: "Bedroom", value: "from £36.00" },
					{ label: "Flight of stairs", value: "from £39.00" },
					{ label: "Office room", value: "from £36.00" },
					{ label: "Hotel room", value: "from £56.00" },
					{ label: "Loft room", value: "from £39.00" },
					{ label: "Through lounge", value: "from £85.00" },
					{ label: "Box room", value: "from £36.00" },
					{ label: "Bathroom", value: "from £13.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/dry" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			 <h2 class="mb-10 md-mb-20">Eco-friendly carpet cleaning</h2>

			<PriceTable
				title="Room type"
				items={[
					{ label: "Hallway", value: "from £18.00" },
					{ label: "Landing", value: "from £9.00" },
					{ label: "Living room", value: "from £54.00" },
					{ label: "Bedroom", value: "from £36.00" },
					{ label: "Flight of stairs", value: "from £39.00" },
					{ label: "Office room", value: "from £36.00" },
					{ label: "Hotel room", value: "from £56.00" },
					{ label: "Loft room", value: "from £39.00" },
					{ label: "Through lounge", value: "from £85.00" },
					{ label: "Box room", value: "from £36.00" },
					{ label: "Bathroom", value: "from £13.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/eco-friendly" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

				<h2 class="mb-10 md-mb-20">Same day carpet cleaning</h2>

				<PriceTable
				title="Service type"
				items={[
					{ label: "Same day carpet cleaning", value: "additional charge from £60.00 - £100.00" }
				]}
			/>

				<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
					<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/same-day" class="c-paper font-size-5">GO TO SERVICE</a></button>
				</div>

				<FleurDivider/>

				<h2 class="mb-10 md-mb-20">Fast dry carpet cleaning</h2>

				<PriceTable
				title="Room type"
				items={[
					{ label: "Per room", value: "£20.00 - £30.00" }
				]}
			/>

				<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
					<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/fast-dry" class="c-paper font-size-5">GO TO SERVICE</a></button>
				</div>

				<FleurDivider/>

			<h2 class="mb-10 md-mb-20">Carpet stain removal</h2>

			<PriceTable
				title="Service type"
				items={[
					{ label: "Stain removal", value: "from £23.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-stain-removal-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Carpet stain protection</h2>

			<PriceTable
				title="Room type"
				items={[
					{ label: "Commercial stain protector - per square metre", value: "from £1.50" },
					{ label: "Hallway", value: "from £7.00" },
					{ label: "Landing", value: "from £3.00" },
					{ label: "Living Room", value: "from £23.00" },
					{ label: "Bedroom", value: "from £13.00" },
					{ label: "Flight of stairs", value: "from £12.00" },
					{ label: "Office room", value: "from £13.00" },
					{ label: "Hotel room", value: "from £23.00" },
					{ label: "Loft room", value: "from £15.00" },
					{ label: "Through lounge", value: "from £39.00" },
					{ label: "Box room", value: "from £13.00" },
					{ label: "Bathroom", value: "from £6.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/stain-protection-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Commercial carpet cleaning</h2>

			<PriceTable
				title="Area size"
				items={[
					{ label: "Per square metre - from 0 up to 200m²", value: "£2.20 + VAT" },
					{ label: "Per square metre - from 200 up to 1000m²", value: "£2.00 + VAT" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/commercial" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Office carpet cleaning</h2>

			<PriceTable
				title="Area size"
				items={[
					{ label: "Per square metre - from 0 up to 200m²", value: "£2.20 + VAT" },
					{ label: "Per square metre - from 200 up to 1000m²", value: "£2.00 + VAT" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-carpet-cleaning-services/commercial/office" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Upholstery cleaning</h2>

			<h2 class="mb-10 md-mb-20">Sofa cleaning</h2>

			<PriceTable
				title="Sofa type"
				items={[
					{ label: "Footstool (Puff)", value: "from £12.00" }, 
					{ label: "Two seated sofa", value: "from £49.00" },
					{ label: "Two seated L shaped sofa", value: "from £59.00" },
					{ label: "Three seated sofa", value: "from £59.00" },
					{ label: "Three seated L shaped sofa", value: "from £73.00" },
					{ label: "Four seated sofa", value: "from £73.00" },
					{ label: "Four seated L shaped sofa", value: "from £86.00" },
					{ label: "Five seated sofa", value: "from £86.00" },
					{ label: "Five seated L shaped sofa", value: "from £107.00" },
					{ label: "For others, please contact us", value: "-" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-upholstery-cleaning-services/sofa" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Velvet sofa cleaning</h2>

			<PriceTable
				title="Velvet sofa type"
				items={[
					{ label: "Footstool (Puff)", value: "from £17.00" },
					{ label: "Two seated velvet sofa", value: "from £61.00" },
					{ label: "Two seated L shaped velvet sofa", value: "from £73.00" },
					{ label: "Three seated velvet sofa", value: "from £73.00" },
					{ label: "Three seated L shaped velvet sofa", value: "from £95.00" },
					{ label: "Four seated velvet sofa", value: "from £95.00" },
					{ label: "Four seated L shaped velvet sofa", value: "from £107.00" },
					{ label: "Five seated velvet sofa", value: "from £107.00" },
					{ label: "Five seated L shaped velvet sofa", value: "from £119.00" },
					{ label: "For others, please contact us", value: "-" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-upholstery-cleaning-services/sofa" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Leather sofa cleaning</h2>

			<PriceTable
				title="Sofa type"
				items={[
					{ label: "Footstool (Puff)", value: "from £17.00" },
					{ label: "Two seated sofa", value: "from £61.00" },
					{ label: "Two seated L shaped", value: "from £73.00" },
					{ label: "Three seated sofa", value: "from £73.00" },
					{ label: "Three seated L shaped", value: "from £95.00" },
					{ label: "Four seated sofa", value: "from £95.00" },
					{ label: "Four seated L shaped", value: "from £107.00" },
					{ label: "Five seated sofa", value: "from £107.00" },
					{ label: "Five seated L shaped", value: "from £119.00" },
					{ label: "For others, please contact us", value: "-" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-upholstery-cleaning-services/sofa/leather" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Furniture cleaning</h2>

			<PriceTable
				title="Furniture type"
				items={[
					{ label: "Armchair", value: "from £34.00" },
					{ label: "Pair of curtains", value: "from £28.00" },
					{ label: "Bed base", value: "from £25.00" },
					{ label: "Headboard", value: "from £17.00" },
					{ label: "Office chair - seat", value: "from £9.00" },
					{ label: "Office chair - seat & back", value: "from £16.00" },
					{ label: "Dining chair - seat", value: "from £8.00" },
					{ label: "Dining chair - seat & back", value: "from £15.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-upholstery-cleaning-services/furniture" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Velvet furniture cleaning</h2>

			<PriceTable
				title="Velvet furniture type"
				items={[
					{ label: "Bed base - Velvet", value: "from £29.00" },
					{ label: "Headboard - Velvet/Leather", value: "from £23.00" },
					{ label: "Office chair - seat - Velvet", value: "from £12.00" },
					{ label: "Office chair - seat & back - Velvet", value: "from £27.00" },
					{ label: "Dining chair - seat - Velvet", value: "from £8.00" },
					{ label: "Dining chair - seat & back - Velvet", value: "from £15.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-upholstery-cleaning-services/furniture" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Mattress cleaning</h2>

			<PriceTable
				title="Mattress type"
				items={[
					{ label: "Mattress single", value: "from £29.00" },
					{ label: "Mattress double", value: "from £43.00" },
					{ label: "Mattress king size", value: "from £53.00" },
					{ label: "Mattress super king size", value: "from £64.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-upholstery-cleaning-services/mattress" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Pillow cleaning</h2>

			<PriceTable
				title="Pillow type"
				items={[
					{ label: "Single pillow", value: "from £11.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-upholstery-cleaning-services/pillow" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Upholstery stain removal</h2>

			<PriceTable
				title="Service type"
				items={[
					{ label: "Stain removal", value: "from £23.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-stain-removal-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Upholstery stain protection</h2>

			<PriceTable
				title="Upholstery type"
				items={[
					{ label: "Footstool (Puff)", value: "from £5.00" },
					{ label: "Two seated", value: "from £11.00" },
					{ label: "Two seated L shaped", value: "from £13.00" },
					{ label: "Three seated", value: "from £13.00" },
					{ label: "Three seated L shaped", value: "from £15.00" },
					{ label: "Four seated", value: "from £15.00" },
					{ label: "Four seated L shaped", value: "from £19.00" },
					{ label: "Five seated", value: "from £19.00" },
					{ label: "Five seated L shaped", value: "from £24.00" },
					{ label: "Dining chair", value: "from £3.00" },
					{ label: "Office chair", value: "from £5.00" },
					{ label: "Armchair", value: "from £9.00" },
					{ label: "For others, please contact us", value: "-" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/stain-protection-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Rug steam cleaning</h2>

			<PriceTable
				title="Rug type"
				items={[
					{ label: "Rug - small", value: "from £15.00" },
					{ label: "Rug - medium", value: "from £24.00" },
					{ label: "Rug - large", value: "from £42.00" },
					{ label: "Rug - extra large", value: "from £56.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-rug-cleaning-services/steam" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Dry rug cleaning</h2>

			<PriceTable
				title="Rug type"
				items={[
					{ label: "Rug - small", value: "from £18.00" },
					{ label: "Rug - medium", value: "from £27.00" },
					{ label: "Rug - large", value: "from £44.00" },
					{ label: "Rug - extra large", value: "from £68.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-rug-cleaning-services/dry" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Rug stain removal</h2>

			<PriceTable
				title="Service type"
				items={[
					{ label: "Stain removal", value: "from £23.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/professional-stain-removal-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Rug stain protection</h2>

			<PriceTable
				title="Rug type"
				items={[
					{ label: "Rug", value: "from £7.00" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/stain-protection-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<h2 class="mb-10 md-mb-20">Antiviral sanitisation</h2>

			<PriceTable
				title="Room type"
				items={[
					{ label: "Studio flat", value: "from £90.00" },
					{ label: "One bedroom flat", value: "from £112.00" },
					{ label: "Two bedroom flat", value: "from £135.00" },
					{ label: "Two bedroom house", value: "from £157.00" },
					{ label: "Three bedroom house", value: "from £200.00" },
					{ label: "Four bedroom house", value: "from £225.00" },
					{ label: "Office** m²", value: "from £1.70" },
				]}
			/>

			<div class="m-10%  mt-12% flex flex-wrap flex-justify-center">
				<button class="outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-6 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;"><a href="/antiviral-sanitisation-services" class="c-paper font-size-5">GO TO SERVICE</a></button>
			</div>

			<FleurDivider />

			<div class="m-10% mb-3% flex flex-wrap flex-justify-center md-gap-15 gap-10">
				<a href="/services"><button class="cursor-pointer outline-none bg-brand-second-action hover-bg-brand-second-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-second-action hover-b-brand-second-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">SERVICES</button></a>
				<a href="/contact-us"><button class="cursor-pointer outline-none bg-brand-action hover-bg-brand-action-hover:hover font-size-5 font-600 w-200px h-60px c-paper flex flex-items-center flex-justify-center relative b-solid b-rd-3 b-4 b-brand-action hover-b-brand-action-hover:hover whitespace-normal line-height-6 word-spacing-0.5 py-9" style="box-shadow: 0 0 0 3px rgba(255, 255, 255, .9) inset; letter-spacing: 0.05rem;">REQUEST A QUOTE</button></a>
			</div>
		</>
	);
}
