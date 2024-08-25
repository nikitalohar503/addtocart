import React, { useEffect, useState } from 'react'
import Data from './Data'
import './Style.css'
import Cart from './Cart'

const Shop = () => {
    useEffect(()=>{
        const existingProduct =JSON.parse(localStorage.getItem('cart')) || []
        setMyProduct(existingProduct)
    })

    const [myProduct,setMyProduct] = useState([])
    const addProduct=(product)=>{
        const newProducts={
            ...product,
            count:1
        }

        setMyProduct((preProducts)=>[...preProducts,newProducts])
        localStorage.setItem('cart',JSON.stringify([...myProduct,newProducts]))
        alert('')


    }
  return (
    <div>
    <section className='shop'>
       <div className="conntainer">
        <h1>this is my shop</h1>

        <div className='shop'>
            {Data.map((item,key)=>(
                <div  className='item'  key={key}>
                    <h2>{item.title}</h2>
                    
                    <p>{item.desc}</p>
                    <span>Price :${item.price}</span>
                    <button onClick={()=>addProduct(item)}>add to cart</button>
                </div>
            ))}
        </div>
       </div>
    </section>

    {myProduct.length > 0 && <Cart  cartdata={myProduct}/>}
      
    </div>
  )
}

export default Shop
