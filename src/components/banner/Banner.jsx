import React from 'react'
import './Banner.css';

const Banner = () => {
  const tractate = (string, n) => {
    return string?.length > n ? string.substring(0, n-1) + "..." : string;
  }
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://gmedia.playstation.com/is/image/SIEPDC/netflix-page-banner-desktop-02-en-10nov20?$native--t$")`,
    }}>
    <div className="banner_contains">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h1 className="banner_description">{tractate("Movie Description Download the perfect netflix pictures. Find over 100+ of the best free netflix images. Free for commercial use ✓ No attribution required ✓ Copyright-free.",150 )}</h1>

    </div>
    <div className="banner_fadeBottom"/>
    </header>
  )
}

export default Banner