import React, { useState } from 'react'
import './SortBy.css'

const SortBy = () => {
    const [activeFilter , setActiveFilter] =  useState<string>('none');
   
  return (
    <div className='sortby'>
      <h3>Sort By</h3>
        <ul >
            <li className={activeFilter === 'none' ? 'active' : ''} onClick={e => setActiveFilter('none')}>None</li>
            <li className={activeFilter === 'Newest first' ? 'active' : ''} onClick={e => setActiveFilter('Newest first')}>Newest first</li>
            <li className={activeFilter === 'Top rated' ? 'active' : ''} onClick={e => setActiveFilter('Top rated')}>Top rated</li>
            <li className={activeFilter === 'Price: low to hight' ? 'active' : ''} onClick={e => setActiveFilter('Price: low to hight')}>Price: low to hight</li>
            <li className={activeFilter === 'Price: hight to low' ? 'active' : ''} onClick={e => setActiveFilter('Price: hight to low')}>Price: hight to low</li>
        </ul>
    </div>
  )
}

export default SortBy