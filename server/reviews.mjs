import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const API_KEY = "AIzaSyD44Rdqe0dqpwYjbff67D-IRNHsbmnkt9Q";
const PLACE_ID = "ChIJ1989dMyFqkARI0_UjNv72g8";

router.get("/reviews", async (req, res) => {
	try {
		const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
		const response = await fetch(url);
		const data = (await response.json());

		if (data.status !== "OK") {
			console.error("Google API error:", data.status);
			return res.status(500).json({ error: "Failed to fetch reviews" });
		}

		const reviews = data.result.reviews.map((r) => ({
			name: r.author_name,
			src: r.profile_photo_url,
			reviewText: r.text,
			stars: r.rating,
			date: new Date(r.time * 1000).toLocaleDateString("bg-BG", {
				month: "long",
				year: "numeric",
			}),
			hrefGoogleReview: r.author_url,
		}));

		res.json(reviews);
	} catch (err) {
		console.error("Server error:", err);
		res.status(500).json({ error: "Internal server error" });
	}
});

export default router;
