import React from 'react';
import logo from './logo.svg';
import './App.css';

import Category from './Components/Category/Category';
import Cart from './Components/Cart/Cart';
import CategoriesList from './Components/CategoriesList/CategoriesList';
import SortBy from './Components/SortBy/SortBy';
import Decription from './Components/Decription/Decription';
import Colors from './Components/Colors/Colors'; 
import Reviews from './Components/Reviews/Reviews';
import FilteredReviews from './Components/FilteredReview/FilteredReviews';
import PriceFilter from './Components/PriceFilter/PriceFilter';
import Popup from './Components/Popup/Popup';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import SingleProductReviews from './Components/SingleProductReviews/SingleProductReviews';

function App() {
  return (
    <div className="App">
       <Popup />
            <SortBy />
            <Category title="dfdfdfd dfd"  image="https://placehold.co/600x400" price="100" promotion="50" /> 
            <Colors />
            <Cart count={3}/>
            <CategoriesList name="Jackets"  image="https://placehold.co/600x400"  />
            <Decription  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

"/>
            <Reviews />
            <FilteredReviews />
            <PriceFilter />
            <ProductDetails title="product title" reference="205/245/10" price="119"/>
            <SingleProductReviews img="https://placehold.co/80x80" name="patrick luis" stars={4} review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"  date="December 10,2018" />
    </div>
  );
}

export default App;
