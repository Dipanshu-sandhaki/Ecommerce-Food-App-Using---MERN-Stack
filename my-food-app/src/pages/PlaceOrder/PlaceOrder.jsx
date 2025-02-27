import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {
    const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
    })

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setData((prevData) => ({ ...prevData, [name]: value }))
    }

    const placeOrder = async (event) => {
        event.preventDefault()

        if (!token) {
            console.error("Token is missing")
            alert("Authentication error. Please log in.")
            return
        }

        const orderItems = food_list
            .filter((item) => cartItems[item._id] > 0)
            .map((item) => ({
                ...item,
                quantity: cartItems[item._id],
            }))

        const orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 20, // Adding delivery fee
        }

        try {
            console.log("Token:", token)
            console.log("URL:", url)
            console.log("Order Data:", orderData)

            const response = await axios.post(`${url}/api/order/place`, orderData, {
                headers: { Authorization: `Bearer ${token}` },
            })

            console.log("Response:", response)

            if (response.data.success) {
                const { session_url } = response.data
                console.log("Redirecting to:", session_url)
                window.location.replace(session_url)
            } else {
                console.error("Error in response:", response.data.message)
                alert(response.data.message || "Error placing the order")
            }
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message)
            alert("Failed to place the order. Please try again.")
        }
    }

    console.log("Token in PlaceOrder component:", token)

    return (
        <form onSubmit={placeOrder} className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-fields">
                    <input
                        required
                        name='firstName'
                        onChange={onChangeHandler}
                        value={data.firstName}
                        type="text"
                        placeholder='First name'
                    />
                    <input
                        required
                        name='lastName'
                        onChange={onChangeHandler}
                        value={data.lastName}
                        type="text"
                        placeholder='Last name'
                    />
                </div>
                <input
                    required
                    name='email'
                    onChange={onChangeHandler}
                    value={data.email}
                    type="email"
                    placeholder='Email address'
                />
                <input
                    required
                    name='street'
                    onChange={onChangeHandler}
                    value={data.street}
                    type="text"
                    placeholder='Street'
                />
                <div className="multi-fields">
                    <input
                        required
                        name='city'
                        onChange={onChangeHandler}
                        value={data.city}
                        type="text"
                        placeholder='City'
                    />
                    <input
                        required
                        name='state'
                        onChange={onChangeHandler}
                        value={data.state}
                        type="text"
                        placeholder='State'
                    />
                </div>
                <div className="multi-fields">
                    <input
                        required
                        name='zipcode'
                        onChange={onChangeHandler}
                        value={data.zipcode}
                        type="text"
                        placeholder='Zip code'
                    />
                    <input
                        required
                        name='country'
                        onChange={onChangeHandler}
                        value={data.country}
                        type="text"
                        placeholder='Country'
                    />
                </div>
                <input
                    required
                    name='phone'
                    onChange={onChangeHandler}
                    value={data.phone}
                    type="text"
                    placeholder='Phone'
                />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${20}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount() + 20}</b>
                        </div>
                    </div>
                    <button type='submit'>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
