import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  // Normalize category name for consistent comparison
  const normalizedCategory = category?.toLowerCase().trim()

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list
          .filter(item => {
            // Normalize item category safely
            const itemCategory = item?.category?.toLowerCase().trim()
            return (
              normalizedCategory === 'all' ||
              itemCategory === normalizedCategory
            )
          })
          .map((item, index) => (
            <Fooditem
              key={item._id || index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        }
      </div>
    </div>
  )
}

export default FoodDisplay
