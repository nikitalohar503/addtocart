import React, { useEffect, useState } from 'react'

const Cart = ({cartdata}) => {
    const[cart,setCart]=useState(cartdata)
    useEffect(()=>{
        setCart(cartdata)
    },[cartdata])

    const delitem=(key)=>{
        const updatecart=[...cart]
        updatecart.splice(key,1)
        localStorage.setItem('cart',JSON.stringify(updatecart))
        setCart(updatecart)
    }

    const calculatedtotal =()=>{
        return cart.reduce((total,item)=>total + item.price)
    }
  return (
    <div>
    <div className="cartSection">
        <h1>Your List</h1>
        <div>
            {
                cart.map((item,index)=>
                <div key={index} className='cartitem'>
                    <span>{item.title}</span>
                    <span>{item.price}</span>
                    <span>
                        <button onClick={()=>delitem(index)}>remove</button>
                    </span>
                </div>
                )
            }
        </div>
        <p className='totalprice'>Total price:{calculatedtotal()}</p>
    </div>
      
    </div>
  )
}

export default Cart
