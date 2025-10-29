import React, { useState } from 'react';
import './ExploreOptions.css';

// Yeh data hai jo hum list mein dikhayenge
// Asli app mein yeh data API se aa sakta hai
const optionsData = [
  {
    title: 'Popular cuisines near me',
    content: 'Aap yahan content daal sakte hain, jaise: North Indian, Chinese, South Indian, Pizza, Fast Food, Biryani...',
  },
  {
    title: 'Popular restaurant types near me',
    content: 'Aap yahan content daal sakte hain, jaise: Bakeries, Cafés, Casual Dining, Quick Bites, Dessert Parlors...',
  },
  {
    title: 'Top restaurant chains',
    content: 'Aap yahan content daal sakte hain, jaise: Domino\'s Pizza, McDonald\'s, Burger King, Pizza Hut...',
  },
  {
    title: 'Cities we deliver to',
    content: 'Aap yahan content daal sakte hain, jaise: Dehradun, Delhi, Mumbai, Bangalore, Pune, Chandigarh...',
  },
  {
    title: 'Popular Dishes Near Me',
    content: 'Aap yahan content daal sakte hain, jaise: Paneer Butter Masala, Chicken Biryani, Momos, Masala Dosa...',
  },
];

const ExploreOptions = () => {
  // Yeh state track karega ki kaun sa item khula hai
  // 'null' matlab sab band hain
  const [openIndex, setOpenIndex] = useState(null);

  // Yeh function click par call hoga
  const handleItemClick = (index) => {
    // Agar pehle se khula hai toh band kar do (null set karke)
    // Varna naya waala index set kar do
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
            >
              <p>{item.title}</p>
              {/* Yeh arrow hai jo open/close par rotate hoga */}
              <span className={openIndex === index ? 'arrow open' : 'arrow'}></span>
            </div>

            {/* Yeh content area hai jo open/close hoga */}
            <div
              className={
                openIndex === index ? 'accordion-content open' : 'accordion-content'
              }
            >
              <p>{item.content}</p>
              {/* Note: Aap is <p> ki jagah links ki list bhi daal sakte ho */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreOptions;