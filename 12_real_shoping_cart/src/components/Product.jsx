import { prepareAutoBatched } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice'
import toast from 'react-hot-toast'

const Product = ({post}) => {

    const {cart} = useSelector((state) => state)        //fetching all the values of 'initialState' from 'CartSlice'
    const dispatch = useDispatch()                      // fetching all the functions from 'CartSlice'

    const removeCart = () =>{
        dispatch(remove(post.id))
        toast.error('Item removed from Cart')
    }

    const addCart = () =>{
        dispatch(add(post))
        toast.success('Item added to Cart')
    }

  return (
    <div className="flex flex-col items-center justify-between 
    hover:lg:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
        <div>
            <h2 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</h2>
        </div>
        <div>
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left" >{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div className="h-[180px]">
            <img src={post.image} className="h-full w-full " />
        </div>

        <div className="flex justify-between gap-12 items-center w-full mt-5">
            <div>
                <h4 className="text-green-600 font-semibold">${post.price}</h4>
            </div>
            
                {
                cart.some((p) => p.id===post.id) ?             //this is targeting cart which is exist in 'CartSlice'
                <button
                 className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in"
                onClick={removeCart}
                >Remove Cart
                </button> 
                : 
                <button
                 className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                 text-[12px] p-1 px-3 uppercase 
               hover:bg-gray-700
               hover:text-white transition duration-300 ease-in"
                onClick={addCart}
                >Add to Cart
                </button>
                }
       </div>
    </div>
  )
}

export default Product