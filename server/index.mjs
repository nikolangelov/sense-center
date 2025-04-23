import express from "express";
import cors from "cors";
import reviewsRouter from "./reviews.mjs";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors()); // Allow CORS from your Solid frontend
app.use("/api", reviewsRouter);

app.listen(PORT, () => {
	console.log(`🚀 Server running at http://localhost:${PORT}`);
});
