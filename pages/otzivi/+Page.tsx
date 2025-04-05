import "solid-slider/slider.css";
import { AnimatedComponent } from '../../components/AnimateOnView';
import { createSignal, onMount } from "solid-js";

async function getReviews() {
	const url = `https://serpapi.com/search.json?engine=google_local_reviews&place_id=PLACE_ID`;
  
	try {
	  const response = await fetch(url);
	  const data = await response.json();
	  console.log(data.reviews); // Reviews data
	} catch (error) {
	  console.error("Error fetching reviews:", error);
	}
  }

  
type Review = {
	text?: string;
	rating?: number;
	author_name?: string;
	time?: number;
};

function ReviewList() {
	const [reviews, setReviews] = createSignal<Review[]>([]);

	async function getReviews() {
		const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
		const placeId = "0x40aa85cc743ddfd7:0xfdafbdb8cd44f23";
		const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data.result?.reviews) {
				setReviews(data.result.reviews);
			} else {
				console.warn("No reviews found");
			}
		} catch (error) {
			console.error("Error fetching reviews:", error);
		}
	}

	onMount(() => {
		getReviews();
	});

	return (
		<div>
			<h2>Customer Reviews</h2>
			{reviews().length === 0 ? (
				<p>No reviews available.</p>
			) : (
				reviews().map((review, index) => (
					<div class="p-4 border-b" data-key={review.time || index}>
						<p class="text-lg font-semibold">{review.text || "No review text available."}</p>
						<p class="text-sm">⭐ {review.rating || "N/A"}</p>
						<p class="text-sm text-gray-500">By {review.author_name || "Anonymous"}</p>
					</div>
				))
			)}
		</div>
	);
}

export default function Page() {
	return (
		<>
			<section class="lg-pt-55 pb-20 pt-30 px-2 md:px-4 w-full">

				<AnimatedComponent class="w-full mb-30">
					<h1 class="uppercase md:important-mb-10 pt-0 mt-10">Отзиви</h1>
				</AnimatedComponent>

				<div class="flex flex-col lg:flex-row items-center justify-center gap-20 md:gap-20 mx-2 md:mx-20 lg:mx-10 xl:mx-45">
					<ReviewList />
				</div>
			</section>
		</>
	);
}