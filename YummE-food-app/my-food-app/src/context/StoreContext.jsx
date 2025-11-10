import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({})
  const [food_list, setFoodList] = useState([])
  const [token, setToken] = useState(null) // canonical empty state is null
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

  const fetchFoodList = async (signal) => {
    // axios supports AbortController's signal in modern versions
    const resp = await axios.get(`${url}/api/food/list`, { signal })
    return resp.data?.data ?? []
  }

  useEffect(() => {
    let mounted = true
    const controller = new AbortController()
    const { signal } = controller

    const loadData = async () => {
      try {
        // fetch food list
        const list = await fetchFoodList(signal)
        if (!mounted) return
        setFoodList(list)

        // read token safely (localStorage is sync)
        if (typeof window !== "undefined") {
          const storedToken = localStorage.getItem("token")
          // only set token if still mounted
          if (mounted) setToken(storedToken ?? null)

          // optional dev-only logging
          if (process.env.NODE_ENV === "development") {
            console.info("StoreContext: token from localStorage:", storedToken)
            if (!storedToken) console.info("StoreContext: no token found")
          }
        }
      } catch (err) {
        // ignore abort errors; surface other errors
        if (axios.isCancel?.(err) || err?.name === "CanceledError") {
          if (process.env.NODE_ENV === "development") console.info("StoreContext: fetch aborted")
          return
        }
        console.error("StoreContext: loadData failed:", err)
      }
    }

    loadData()

    return () => {
      mounted = false
      controller.abort()
    }
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
