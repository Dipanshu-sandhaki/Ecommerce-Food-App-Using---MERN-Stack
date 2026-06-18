import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

  return (
    <div className='food-card'>
      <div className='food-card-img'>
        <img src={`${url}/images/${image}`} alt={name} />
        <div className='food-card-rating'>
          <img src={assets.rating_starts} alt='rating' />
        </div>
        {!cartItems[id] ? (
          <button className='food-card-add' onClick={() => addToCart(id)} aria-label={`Add ${name} to cart`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </button>
        ) : (
          <div className='food-card-counter'>
            <button onClick={() => removeFromCart(id)} aria-label='Remove one'>
              <img src={assets.remove_icon_red} alt='-' />
            </button>
            <span>{cartItems[id]}</span>
            <button onClick={() => addToCart(id)} aria-label='Add one'>
              <img src={assets.add_icon_green} alt='+' />
            </button>
          </div>
        )}
      </div>

      <div className='food-card-body'>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className='food-card-footer'>
          <span className='food-card-price'>${price}</span>
        </div>
      </div>
    </div>
  )
}

export default Fooditem