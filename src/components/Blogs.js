B

import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import "./Blogs.css";

const Blogs = () => {
  //consuming
  const {posts, loading} = useContext(AppContext);



  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] felx justify-center items-center'>

    {
      loading ? 

      (<Spinner/>) : 
      (
        posts.length === 0 ? 
