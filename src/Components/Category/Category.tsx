import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Category.css'  

type CategoryProps = {
  title: string;
  image: string;
  price: string;
  promotion?:string 
};
 
const Category = ({ title , image , price , promotion }: CategoryProps) => {
   
  const [heartbg , setHeartbg] =  useState<boolean>(false);
  
    const heartStyle = {
      color: heartbg ? 'red' : ''
    }
 
  return (
    <div className="product-wrapper">
        <div className='product-img'>
               <img src={image} width="100%"/>
               <FavoriteIcon className='heart-icon' onClick={e => setHeartbg(!heartbg)}  style={heartStyle}/>
        </div>  
        <div className='product-body'>
           <h2>{title}</h2>
           <ShoppingCartIcon />
        </div>
        <div className='product-price'>  
            {promotion ? <span className='price'>{promotion } DT</span> : ''}
            <span className={promotion ? 'linethrough' : ''}>{price} DT</span>
        </div>
    </div>
  )
}

export default Category