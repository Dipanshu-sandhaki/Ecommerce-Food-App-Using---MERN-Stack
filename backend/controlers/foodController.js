import foodModel from "../models/foodModel.js"
import fs from 'fs'

// add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`
    
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        Image: image_filename
    })

    try {
        await food.save()
        res.json({success: true, message: "Food added"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        // Map the Image field to image
        const formattedFoods = foods.map(food => ({
            _id: food._id,
            name: food.name,
            description: food.description,
            price: food.price,
            image: food.Image,  // Correct casing here
            category: food.category
        }))
        res.json({success: true, data: formattedFoods})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}

// remove food items
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.Image}`, () => {})

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: "Food Removed"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}

export { addFood, listFood, removeFood }
