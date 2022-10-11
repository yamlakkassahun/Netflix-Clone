import React from 'react'
import Banner from '../../components/banner/Banner';
import MovieRow from '../../components/movieRow/MovieRow';
import Navbar from '../../components/navbar/Navbar';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      {/* nav */}
      <Navbar />
      {/* banner */}
      <Banner />
      {/* rows */}
      <MovieRow
        title="Netflix Ordinals"
        fetchUrl="asdasd"
        isLarger="true"
      />

      <MovieRow
        title="Trending Now"
        fetchUrl="asdasd"
        isLarger="false"
      />

      <MovieRow
        title="Top Rated"
        fetchUrl="asdasd"
        isLarger="true"
      />

      <MovieRow
        title="Netflix Ordinals"
        fetchUrl="asdasd"
        isLarger="false"
      />

      <MovieRow
        title="Netflix Ordinals"
        fetchUrl="asdasd"
        isLarger="true"
      />
    </div>
  )
}

export default HomeScreen