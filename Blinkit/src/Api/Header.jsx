import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity, removeQuantity } from '../Feature/Slice';

export default function Header() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const dispatch = useDispatch();


  const record = useSelector((state) => state.apiKey);

  const addItem = (id) => {
    dispatch(addQuantity(id))
  }

  const removeItem = (id) => {
    dispatch(removeQuantity(id))
  }


  return (
    <div>

      <header>
        <div className="logo">
          <img src="/img/logo.png" alt="" />
        </div>

        <div className="location">
          <h3>Delivery in 8 minutes</h3>
          <p>B62, Pocket B, South City I, Sec..</p>
        </div>

        <div className="search">
          <div className='nav'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search for Dairy Products....' />
          </div>
        </div>

        <div className='login'>
          Login
        </div>

        <div className="cart" onClick={openCart}>
          <img src="/img/cart.gif" alt="" />
          <h3>My Cart</h3>
        </div>

        {/* Cart Section */}

        <div className={`cart-section ${isCartOpen ? "open" : ""}`}>
          <div className="cart-header">
            <h2>Your Cart</h2>
            <button className="close-btn" onClick={closeCart}>✖</button>
          </div>

          <div className="cart-content">
            {
              record.data.map((e, i) => (
                e.quantity > 0 && (
                  <div key={i} className='cart-sec'>
                    <div className="cart-img">
                      <img src={e.image} alt={e.title} />
                      <h1>{e.title}</h1>
                    </div>
                    
                    <p>{e.Quantity}</p>

                    <div className='milk-add'>
                      <p>{e.price}</p>
                      {
                        e.quantity === 0
                          ? (
                            <button onClick={() => addItem(e.id)}> ADD </button>
                          )
                          : (
                            <div className="counter">
                              <button onClick={() => removeItem(e.id)}>-</button>
                              {e.quantity}
                              <button onClick={() => addItem(e.id)}>+</button>
                            </div>
                          )
                      }
                    </div>

                  </div>
                )
              ))
            }

          </div>

        </div>




      </header>

    </div>
  )
}
