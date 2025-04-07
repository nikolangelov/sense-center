const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Google Places API configuration
const API_KEY = "AIzaSyD44Rdqe0dqpwYjbff67D-IRNHsbmnkt9Q";
const PLACE_ID = "ChIJ1989dMyFqkARI0_UjNv72g8";

app.get("/api/reviews", async (req, res) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result?.reviews) {
      res.json(data.result.reviews);
    } else {
      res.status(404).json({ message: "No reviews found" });
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});