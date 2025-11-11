import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setcategory }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredList = menu_list.filter(item =>
    item.menu_name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes.  
        Our mission is to satisfy your cravings and elevate your dining experience,  
        one delicious meal at a time.
      </p>

      {/* 🔍 Search Bar */}
      <div className='menu-search-bar'>
        <input
          type='text'
          placeholder='Search for a category...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 🧭 Active Category Indicator */}
      {category !== 'All' && (
        <p className='active-category'>
          Active Category: <span>{category}</span>
        </p>
      )}

      {/* 🍽️ Category Cards */}
      <div className='explore-menu-grid'>
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => (
            <div
              key={index}
              className={`explore-card ${category === item.menu_name ? 'active' : ''}`}
              onClick={() =>
                setcategory(prev =>
                  prev === item.menu_name ? 'All' : item.menu_name
                )
              }
            >
              <div className='explore-card-img'>
                <img src={item.menu_image} alt={item.menu_name} />
              </div>
              <div className='explore-card-overlay'>
                <p>{item.menu_name}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='no-results'>No categories found.</p>
        )}
      </div>

      <hr />
    </div>
  )
}

export default ExploreMenu
