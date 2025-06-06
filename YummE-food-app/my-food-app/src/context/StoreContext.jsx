import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
    const [food_list, setFoodList] = useState([])
    const [token, setToken] = useState("")
    const url = "http://localhost:4000"

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 1) - 1, 0),
        }))
    }

    const getTotalCartAmount = () => {
        return Object.keys(cartItems).reduce((totalAmount, item) => {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find((product) => product._id === item)
                return totalAmount + (itemInfo ? itemInfo.price * cartItems[item] : 0)
            }
            return totalAmount
        }, 0)
    }

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`)
            setFoodList(response.data.data)
        } catch (error) {
            console.error("Error fetching food list:", error)
        }
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList()
            const storedToken = localStorage.getItem("token")
            console.log("Fetched token from localStorage:", storedToken)
            if (storedToken) {
                setToken(storedToken)
            } else {
                console.warn("No token found in localStorage")
            }
        }
        loadData()
    }, [])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
