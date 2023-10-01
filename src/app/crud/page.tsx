'use client'
import React from 'react'
import useProductData from '@/hooks/useProductData'

const crud = () => {

  useProductData();

  return (
    <div>crud</div>
  )
}

export default crud