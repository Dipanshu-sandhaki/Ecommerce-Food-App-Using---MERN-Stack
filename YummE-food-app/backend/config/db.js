import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

export const connectDB = async () => {
    await mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log("Database connected"))
        .catch((err) => console.log("DB Error:", err.message));
};