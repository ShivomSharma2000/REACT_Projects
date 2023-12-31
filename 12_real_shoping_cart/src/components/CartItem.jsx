import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item}) => {

    const dispatch = useDispatch();             // fetching all the functions from 'CartSlice'

    const removeCart = () =>{
        dispatch(remove(item.id))               //call remove function from 'CartSlice' and will be take care of the rest work himself
        toast.error('Item removed Sucessfully')
    }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-4 md:mx-5 border-b-4 border-black ">
        <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
            <div className="w-[30%]">
              <img className="object-cover" src={item.image} />
            </div>

   
            <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
              <h3 className="text-xl text-slate-700 font-semibold">{item.title}</h3>
              <h4 className="text-base text-slate-700 font-medium">{item.description}</h4>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-bold text-lg text-green-600">${item.price}</p>
              <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
               onClick={removeCart}>
                    <RiDeleteBin6Fill />    
              </div>         
            </div>
            
        </div>
    </div>
  )
}

export default CartItem