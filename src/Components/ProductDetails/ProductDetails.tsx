import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import './ProductDetails.css'
 
type ProductTypes = {
    title:string  ;
    reference:string ;
    price:string | number
  };
   
 
const ProductDetails = ({ title , reference , price }: ProductTypes) => {
  return (
    <div className='product-details'>
         <div className='product-header'>
               <h2>{title}</h2>
               <ShareIcon className="shareIcon"/>
         </div>
         <div className='product-reference'>
             <b>Ref : </b>{reference}
        </div>
        <div className='product-price'>
            <h4>{price} DT</h4>
        </div>
    
        
    </div>
  )
}

export default ProductDetails