

import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {

  const {page, handlePageChange, totalPages} = useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center border-2 py-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[670px] '>
        <div className='flex gap-x-2'>
        { page > 1 &&
        <button
        className='rounded-md border-2 px-4 py-1'
        onClick={ () => handlePageChange(page-1)}>
          Previous
        </button>
      }
