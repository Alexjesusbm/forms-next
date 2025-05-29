import React from 'react'
import { ProductCardInfo } from '../components/product-card-info'
import { Header } from '../components/header'

export default function Dashboard() {
  return (
    <div>
      <Header/>
    <div className="grid grid-cols-9 grid-rows-6 gap-5 py-4 w-full h-full">
      <ProductCardInfo
        name="Moletom Never Stop Learning"
        price="R$ 20"
        image="moletom-never-stop-learning.png"
        className="col-span-6 row-span-6"
        size="lg"
      />
      <ProductCardInfo
        name="Moletom AI Side"
        price="R$ 20"
        image="moletom-ai-side.png"
        className="col-span-3 row-span-3"
        size="sm"
      />
      <ProductCardInfo
        name="Camiseta Expand Your Mind"
        price="R$ 20"
        image="camiseta-dowhile-2022.png"
        className="col-span-3 row-span-3"
        size="sm"
      />
    </div>
    </div>
  )
}