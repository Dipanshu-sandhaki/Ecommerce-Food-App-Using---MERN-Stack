import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App config
const app = express();

// IMPORTANT: Render will give a dynamic port
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Allow CORS (for now allow all origins — later we will restrict to Vercel domain)
app.use(cors({
    origin: true,
    credentials: true
}));

// Database connection
connectDB();

// Static file hosting (uploads)
app.use("/images", express.static("uploads"));

// API endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Health check route (VERY IMPORTANT for Render)
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        time: new Date().toISOString()
    });
});

// Default route
app.get("/", (req, res) => {
    res.send("API working");
});

// Server listen
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
