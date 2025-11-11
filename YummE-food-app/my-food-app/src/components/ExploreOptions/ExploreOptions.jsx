import React, { useState } from 'react';
import './ExploreOptions.css';

// Compact, professional English content for each option
const optionsData = [
  {
    title: 'Popular Cuisines Near Me',
    content: (
      <div>
        <p>
          Explore the most loved cuisines people enjoy around you. From timeless
          classics to trending flavors, here are some must-try picks:
        </p>
        <ul>
          <li><strong>North Indian</strong> — Butter Chicken, Paneer Tikka, Dal Makhani, Tandoori delights.</li>
          <li><strong>South Indian</strong> — Masala Dosa, Idli, Sambar, Uttapam, Filter Coffee.</li>
          <li><strong>Chinese / Indo-Chinese</strong> — Hakka Noodles, Chilli Chicken, Manchurian, Fried Rice.</li>
          <li><strong>Fast Food & Pizza</strong> — Burgers, Fries, Wraps, Classic Veg & Non-Veg Pizzas.</li>
          <li><strong>Biryani & Kebabs</strong> — Hyderabadi Biryani, Kolkata Biryani, Seekh & Shami Kebabs.</li>
          <li><strong>Street & Regional</strong> — Chaat, Momos, Parathas, and iconic local favorites.</li>
        </ul>
        <p>
          Tip: Can’t decide what to eat? Check the “Popular Near You” filter for trending dishes in your area.
        </p>
      </div>
    ),
  },
  {
    title: 'Popular Restaurant Types Near Me',
    content: (
      <div>
        <p>
          Discover restaurants based on your mood and dining style. Whether you
          want to grab a coffee or celebrate an occasion, there’s something for everyone:
        </p>
        <ul>
          <li><strong>Cafés</strong> — Coffee, sandwiches, and comfort bites in a cozy space.</li>
          <li><strong>Bakeries</strong> — Fresh breads, pastries, desserts, and light breakfast options.</li>
          <li><strong>Casual Dining</strong> — Family-friendly spots with complete menus for group meals.</li>
          <li><strong>Fine Dining</strong> — Premium ambience, curated menus, and great service for special days.</li>
          <li><strong>Quick Bites / QSR</strong> — Fast delivery and take-away meals like burgers and wraps.</li>
          <li><strong>Street Food</strong> — Local stalls serving authentic regional snacks and flavors.</li>
        </ul>
        <p>
          Need a quick lunch? Go for cafés or QSRs. Planning a celebration? Choose Casual or Fine Dining.
        </p>
      </div>
    ),
  },
  {
    title: 'Top Restaurant Chains',
    content: (
      <div>
        <p>
          Discover trusted restaurant chains known for consistency, quick delivery,
          and reliable taste across major cities:
        </p>
        <ul>
          <li><strong>Pizza Chains:</strong> Domino’s, Pizza Hut, Papa John’s.</li>
          <li><strong>Burgers & Fast Food:</strong> McDonald’s, Burger King, Wendy’s.</li>
          <li><strong>Coffee & Cafés:</strong> Starbucks, Barista, Café Coffee Day.</li>
          <li><strong>Multi-Cuisine Chains:</strong> Mainland China, Sagar Ratna, Absolute Barbecues.</li>
        </ul>
        <p>
          Looking for familiar taste and quick service? Try these top chains, or explore highly-rated local gems nearby.
        </p>
      </div>
    ),
  },
  {
    title: 'Cities We Deliver To',
    content: (
      <div>
        <p>
          Our delivery network keeps growing! Here are some of the cities where
          you can enjoy fast and fresh food delivery:
        </p>
        <ul>
          <li><strong>Metro / Tier-1:</strong> Delhi NCR, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata.</li>
          <li><strong>Tier-2 & Tier-3:</strong> Pune, Ahmedabad, Jaipur, Lucknow, Chandigarh, Dehradun, Indore.</li>
        </ul>
        <p>
          Tip: Enter your pin code on the app to view exact delivery availability — some restaurants serve limited zones only.
        </p>
      </div>
    ),
  },
  {
    title: 'Popular Dishes Near Me',
    content: (
      <div>
        <p>
          Craving something specific? Check out the most-ordered and top-rated dishes people love near you:
        </p>
        <ul>
          <li><strong>Vegetarian:</strong> Paneer Butter Masala, Dal Tadka, Chole Bhature, Veg Biryani, Masala Dosa.</li>
          <li><strong>Non-Vegetarian:</strong> Chicken Biryani, Butter Chicken, Tandoori Chicken, Chicken Tikka.</li>
          <li><strong>Snacks & Street Food:</strong> Momos, Pav Bhaji, Samosa, Pani Puri, Chaat.</li>
          <li><strong>Desserts:</strong> Gulab Jamun, Kulfi, Brownie, Cheesecake, Ice Cream Sundae.</li>
        </ul>
        <p>
          Pro Tip: Look for “Bestseller” or “Most Ordered” tags on restaurant menus — those dishes are top favorites among locals.
        </p>
      </div>
    ),
  },
];

const ExploreOptions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="explore-options">
      <h2>Explore Options Near Me</h2>
      <div className="accordion-list">
        {optionsData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className="accordion-header"
              onClick={() => handleItemClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleItemClick(index);
                }
              }}
            >
              <p>{item.title}</p>
              <span
                className={openIndex === index ? 'arrow open' : 'arrow'}
                aria-hidden="true"
              ></span>
            </div>

            <div
              className={
                openIndex === index
                  ? 'accordion-content open'
                  : 'accordion-content'
              }
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreOptions;
