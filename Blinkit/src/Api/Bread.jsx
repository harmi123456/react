import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity, FetchApi, removeQuantity } from '../Feature/Slice';

export default function Bread() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchApi());
  }, [dispatch]);

  const record = useSelector((state) => state.apiKey);

  const Product = record.data ? record.data.filter(item => item.category === "Bread") : [];


 const addItem = (id) => {
    dispatch(addQuantity(id))
  }

  const removeItem = (id) => {
    dispatch(removeQuantity(id))
  }



  return (
    <div>
      <div className="headline">
        <h2>Buy Bread Online</h2>
      </div>

      <div className="milk-container">

        {Product &&
          Product.map((e, i) => (
            <div key={i} className="milk-product">
              <img src={e.image} alt={e.title} />
              <div className="milk-content">
                <h1>{e.title}</h1>
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
            </div>
          ))}

      </div>


    </div>
  );
}

