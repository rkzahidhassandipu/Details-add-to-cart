import React from 'react'
import Banner from '../../Components/Banner/Banner'
import { useLoaderData } from 'react-router'
import Products from '../../Components/Product/Products'

const Home = () => {
  const data = useLoaderData()
  return (
    <div>
      <Banner />
      <Products data={data} />
    </div>
  )
}

export default Home
