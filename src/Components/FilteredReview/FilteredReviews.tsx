import React from 'react' 
import StarIcon from '@mui/icons-material/Star';
import './FilteredReviews.css'
const FilteredReviews = () => {
    const [activeFilter , setActiveFilter] =  React.useState<string>('five-stars');
  return (
    <div>
        <h3>Reviews</h3> 
        <ul className='reviews-filter'>
        
            <li className={activeFilter === 'five-stars' ? 'active' : ''} onClick={e => setActiveFilter('five-stars')}>5 <StarIcon sx={{ color: '#f5b235' , fontSize:'20px',marginLeft:'3px' }}  /></li>
            <li className={activeFilter === 'four-stars' ? 'active' : ''} onClick={e => setActiveFilter('four-stars')}>4 <StarIcon sx={{ color: '#f5b235' , fontSize:'20px' ,marginLeft:'3px' }}/></li>
            <li className={activeFilter === 'three-stars' ? 'active' : ''} onClick={e => setActiveFilter('three-stars')}>3 <StarIcon sx={{ color: '#f5b235', fontSize:'20px' ,marginLeft:'3px'  }} /> </li>
            <li className={activeFilter === 'two-stars' ? 'active' : ''} onClick={e => setActiveFilter('two-stars')}>2 <StarIcon sx={{ color: '#f5b235' , fontSize:'20px' ,marginLeft:'3px' }}/></li>
            <li className={activeFilter === 'one-stars' ? 'active' : ''} onClick={e => setActiveFilter('one-stars')}>1<StarIcon sx={{ color: '#f5b235', fontSize:'20px'  ,marginLeft:'3px' }}  /></li> 
        </ul>
    </div>
  )
}

export default FilteredReviews