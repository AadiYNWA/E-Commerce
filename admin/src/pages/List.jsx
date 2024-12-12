import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from "../App"
import { toast } from 'react-toastify';

const List = ({ token }) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.product);
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers : {token}});

      if(response.data.success){
        toast.success(response.data.message);
        await fetchList();
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b className='text-center w-[20px] md:w-auto'>Image</b>
          <b className='text-center w-[20px] md:w-auto'>Name</b>
          <b className='text-center w-[20px] md:w-auto'>Category</b>
          <b className='text-center w-[20px] md:w-auto'>Price</b>
          <b className='text-center w-[20px] md:w-auto'>Action</b>
        </div>

        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
              <img className='w-12 mx-auto' src={item.image[0]} alt="" />
              <p className='text-center w-[20px] md:w-auto'>{item.name}</p>
              <p className='text-center w-[20px] md:w-auto'>{item.category}</p>
              <p className='text-center w-[20px] md:w-auto'>{currency}{ item.price}</p>
              <p onClick={() => removeProduct(item._id)} className='text-center w-[20px] md:w-auto cursor-pointer text-large'>X</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List