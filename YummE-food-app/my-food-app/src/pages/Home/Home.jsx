import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import ExploreOptions from '../../components/ExploreOptions/ExploreOptions'

// 1. 'setMenu' ko props mein receive kiya
const Home = ({ setMenu }) => {

  const[category,setcategory] = useState("All");

  return (
    <div>
      {/* 2. 'setMenu' ko Header component ko pass kiya */}
      <Header setMenu={setMenu} />
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay  category={category}/>
      <ExploreOptions />
      <AppDownload/>
    </div>
  )
}

export default Home
