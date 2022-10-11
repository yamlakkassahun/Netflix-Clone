import React from 'react'
import Banner from '../../components/banner/Banner';
import Navbar from '../../components/navbar/Navbar';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      {/* nav */}
      <Navbar/>
      {/* banner */}
      <Banner/>

      {/* rows */}
    </div>
  )
}

export default HomeScreen