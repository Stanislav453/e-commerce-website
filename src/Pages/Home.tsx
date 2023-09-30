import React from 'react'
import { Header } from '../component/Header'
import { ProductCard } from '../component/ProductCard'
import { ProductContainer } from '../component/ProductContainer'

export const Home = () => {
  return (
    <React.Fragment>
        <Header />
        <ProductContainer/>
    </React.Fragment>
  )
}
