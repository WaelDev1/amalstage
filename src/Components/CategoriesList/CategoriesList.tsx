import React from 'react'
import './CategoriesList.css'

type CategoriesListProps = {
    name: string;
    image: string; 
  };
   

const CategoriesList = ({ name , image }: CategoriesListProps) => {
  return (
    <div className='categories-list-wrapper'>
          <h3>{name}</h3>
          <img src={`${image}`} /> 
    </div>
  )
} 
export default CategoriesList