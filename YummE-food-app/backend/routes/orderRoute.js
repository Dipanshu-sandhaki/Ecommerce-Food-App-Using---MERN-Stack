import express from "express"
import authmiddleware from "../middleware/auth.js"
import { placeOrder } from "../controlers/orderControler.js"

const orderRouter = express.Router();

orderRouter.post("/place",authmiddleware,placeOrder);


export default orderRouter;