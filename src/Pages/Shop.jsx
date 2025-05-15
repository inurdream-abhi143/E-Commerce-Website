import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollection from '../Components/NewCollections/Newcollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import ShipingMethod from '../Components/ShipingMethod/ShipingMethod'

const Shop = () => {
  return (
    <>
    <Hero />
    <Popular />  
    <Offers />
    <Newcollection />
    <NewsLetter />
    <ShipingMethod />
    </>
  )
}

export default Shop
