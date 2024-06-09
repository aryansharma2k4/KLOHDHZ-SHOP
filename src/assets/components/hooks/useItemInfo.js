import React from 'react'
import { useState, useEffect } from 'react'

function useItemInfo() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fakeStore = async() => {
            const response = await fetch('https://fakestoreapi.com/products')
            const jsonData = await response.json()
            setData(jsonData)
        }
        fakeStore()
    }, [])
  return data;
}

export default useItemInfo