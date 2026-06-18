import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  const normalizedCategory = category?.toLowerCase().trim()

  const filteredItems = food_list.filter(item => {
    const itemCategory = item?.category?.toLowerCase().trim()
    return normalizedCategory === 'all' || itemCategory === normalizedCategory
  })

  return (
    <section className='food-display' id='food-display'>
      <div className='food-display-header'>
        <div>
          <span className='food-display-eyebrow'>Fresh & Delicious</span>
          <h2>Top Dishes Near You</h2>
        </div>
        <span className='food-display-count'>{filteredItems.length} items</span>
      </div>

      {filteredItems.length > 0 ? (
        <div className='food-display-grid'>
          {filteredItems.map((item, index) => (
            <Fooditem
              key={item._id || index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <div className='food-display-empty'>
          <span className='empty-plate'>🍽️</span>
          <h3>No dishes found</h3>
          <p>Try browsing a different category</p>
        </div>
      )}
    </section>
  )
}

export default FoodDisplay