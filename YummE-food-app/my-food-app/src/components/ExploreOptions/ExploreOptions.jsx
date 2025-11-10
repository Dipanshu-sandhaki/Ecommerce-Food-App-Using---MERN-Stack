import React, { useState } from 'react';
import './ExploreOptions.css';

// Rich, user-friendly content (JSX) for each option
const optionsData = [
  {
    title: 'Popular cuisines near me',
    content: (
      <div>
        <p>
          Yahan commonly ordered aur locally popular cuisines ki list di gayi hai. 
          Agar aap quick idea chahte ho to in cuisines ko try karo:
        </p>
        <ul>
          <li><strong>North Indian</strong> — Butter chicken, Paneer dishes, Dal makhani, Tandoori items.</li>
          <li><strong>South Indian</strong> — Dosa, Idli, Sambar, Rava dishes, Filter coffee.</li>
          <li><strong>Chinese/Indo-Chinese</strong> — Hakka noodles, Manchurian, Chilli chicken, Fried rice.</li>
          <li><strong>Fast Food & Pizza</strong> — Burgers, Fries, Veg/Non-veg Pizzas, Wraps.</li>
          <li><strong>Biryani & Kebabs</strong> — Hyderabadi/Calcutta style biryani, Seekh kebab.</li>
          <li><strong>Street & Regional</strong> — Chaat, Momos, Parathas, Regional specialities (e.g., Kolkata rolls).</li>
        </ul>
        <p>
          Tip: agar mood nahin decide ho raha toh “Popular near you” filter apply karo — local favourites dikhenge.
        </p>
      </div>
    ),
  },
  {
    title: 'Popular restaurant types near me',
    content: (
      <div>
        <p>Alag-alag dining experiences ke hisaab se restaurants ke typical types:</p>
        <ul>
          <li><strong>Cafés</strong> — Coffee, sandwiches, light meals; relaxed vibe (work-friendly).</li>
          <li><strong>Bakeries</strong> — Fresh breads, pastries, quick breakfasts and desserts.</li>
          <li><strong>Casual Dining</strong> — Family friendly, full menu, good for group meals.</li>
          <li><strong>Fine Dining</strong> — Special occasion restaurants with curated menus and higher pricing.</li>
          <li><strong>Quick Bites / QSR</strong> — Fast delivery & pickup (burgers, wraps, pizzas).</li>
          <li><strong>Street Food / Stalls</strong> — Local street vendors offering authentic regional snacks.</li>
        </ul>
        <p>
          Use case: agar quick lunch chahiye to QSR ya cafés dekhho; agar celebration hai to Casual/Fine dining prefer karo.
        </p>
      </div>
    ),
  },
  {
    title: 'Top restaurant chains',
    content: (
      <div>
        <p>
          Nationwide aur international chains jo aksar har city mein mil jaate hain — reliable quality aur fast delivery:
        </p>
        <ul>
          <li><strong>Pizza chains:</strong> Domino’s, Pizza Hut, Papa John’s (regional variants may apply).</li>
          <li><strong>Burgers & Fast Food:</strong> McDonald’s, Burger King, Wendy’s (city-specific brands also common).</li>
          <li><strong>Coffee & Cafés:</strong> Barista, Starbucks (selected cities), CCD (India).</li>
          <li><strong>Multi-cuisine chains:</strong> Mainland China, Sagar Ratna, Absolute Barbecues (depending on region).</li>
        </ul>
        <p>
          Note: chains are good for consistent taste; for local specialties, try independent or highly-rated local restaurants.
        </p>
      </div>
    ),
  },
  {
    title: 'Cities we deliver to',
    content: (
      <div>
        <p>
          Humari delivery coverage frequently expand hoti rehti hai. Common service cities (example list — update per your app data):
        </p>
        <ul>
          <li><strong>Metro / Tier-1:</strong> Delhi NCR (Gurgaon, Noida), Mumbai, Bangalore, Chennai, Hyderabad, Kolkata.</li>
          <li><strong>Tier-2 & 3:</strong> Pune, Ahmedabad, Lucknow, Chandigarh, Dehradun, Indore, Jaipur.</li>
        </ul>
        <p>
          Tip: Enter your pin code on the site/app to see exact availability — kuch restaurants sirf selected areas mein deliver karte hain.
        </p>
      </div>
    ),
  },
  {
    title: 'Popular dishes near me',
    content: (
      <div>
        <p>
          Local favourites jo aksar top orders mein hote hain — agar decide nahin kar pa rahe ho to inme se try karo:
        </p>
        <ul>
          <li><strong>Vegetarian:</strong> Paneer Butter Masala, Dal Tadka, Chole Bhature, Veg Biryani, Masala Dosa.</li>
          <li><strong>Non-vegetarian:</strong> Chicken Biryani, Butter Chicken, Tandoori Chicken, Chicken Tikka.</li>
          <li><strong>Snacks & Street:</strong> Momos, Pav Bhaji, Samosa, Pani Puri/Chaat.</li>
          <li><strong>Desserts:</strong> Gulab Jamun, Kulfi, Cheesecake, Brownie.</li>
        </ul>
        <p>
          Pro tip: check “most ordered” or “bestsellers” badge on each restaurant card — wo dish local customers se highly rated hoti hai.
        </p>
      </div>
    ),
  },
];

const ExploreOptions = () => {
  // kaun sa item khula hai (null means all closed)
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="explore-options">
      <h2>Explore options near me</h2>
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
              <span className={openIndex === index ? 'arrow open' : 'arrow'} aria-hidden="true"></span>
            </div>

            <div className={openIndex === index ? 'accordion-content open' : 'accordion-content'}>
              {/* content is JSX node */}
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreOptions;
