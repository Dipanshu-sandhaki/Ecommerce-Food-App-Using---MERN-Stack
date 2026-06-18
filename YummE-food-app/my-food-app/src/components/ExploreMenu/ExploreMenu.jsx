import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setcategory }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredList = menu_list.filter(item =>
    item.menu_name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className='explore-menu' id='explore-menu'>
      <div className='explore-menu-header'>
        <div className='explore-menu-title'>
          <span className='explore-eyebrow'>Our Categories</span>
          <h2>Explore Our Menu</h2>
          <p>Hand-picked categories crafted to satisfy every craving, delivered fresh to your door.</p>
        </div>
        <div className='explore-search'>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type='text'
            placeholder='Search category...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className='search-clear' onClick={() => setSearchTerm('')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          )}
        </div>
      </div>

      {filteredList.length > 0 ? (
        <div className='explore-menu-list'>
          {filteredList.map((item, index) => (
            <div
              key={index}
              className={`explore-menu-item ${category === item.menu_name ? 'active' : ''}`}
              onClick={() => setcategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
            >
              <div className='explore-img-wrap'>
                <img src={item.menu_image} alt={item.menu_name} />
              </div>
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className='explore-empty'>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <p>No results for <strong>"{searchTerm}"</strong></p>
        </div>
      )}

      {category !== 'All' && (
        <div className='active-filter-pill'>
          <span>Browsing:</span>
          <strong>{category}</strong>
          <button onClick={() => setcategory('All')}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      )}
    </section>
  )
}

export default ExploreMenu