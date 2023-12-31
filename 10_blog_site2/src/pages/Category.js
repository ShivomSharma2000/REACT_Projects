import React from 'react'
import {Header}  from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom'
import {Blogs} from '../components/Blogs'
import  {Pagination}  from '../components/Pagination';

const Category = () => {
 
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split('/').at(-1);
    console.log('Category is :');
    console.log(category);
  
    return (
      <div>
  
          <Header />
          <div className='mt-20'>
            <button onClick={()=>navigation(-1)} >Back</button>
            <h2>Blogs On <span>{category}</span></h2>
          </div>
  
          <Blogs />
          <Pagination />
  
      </div>
    )
  
}

export default Category