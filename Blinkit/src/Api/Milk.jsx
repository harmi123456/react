import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity, FetchApi, removeQuantity } from '../Feature/Slice';

export default function Milk() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchApi());
  }, [dispatch]);

  const record = useSelector((state) => state.apiKey);

  const Product =  record.data.filter(item => item.category === "Milk");

  const addItem = (id) => {
    dispatch(addQuantity(id))
  }

  const removeItem = (id) => {
    dispatch(removeQuantity(id))
  }



  //quantity
  // const [showCounter, setShowCounter] = useState(false);
  // const [quantity, setQuantity] = useState(1);

  // const handleAddClick = () => {
  //   setShowCounter(true);
  // };

  // const handleIncrement = () => {
  //   setQuantity(prevQuantity => prevQuantity + 1);
  // };

  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(prevQuantity => prevQuantity - 1);
  //   } else {
  //     setShowCounter(false);
  //   }
  // };




  // const [quantities, setQuantities] = useState({});

  // const handleAddClick = (id) => {
  //   setQuantities((prev) => ({ ...prev, [id]: 1 }));
  // };

  // const handleIncrement = (id) => {
  //   setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  // };

  // const handleDecrement = (id) => {
  //   setQuantities((prev) => {
  //     const updatedQuantity = prev[id] - 1;
  //     if (updatedQuantity <= 0) {
  //       const { [id]: _, ...rest } = prev;
  //       return rest;
  //     }
  //     return { ...prev, [id]: updatedQuantity };
  //   });
  // };



  return (
    <div>
      <div className="headline">
        <h2>Buy Milk Online</h2>
      </div>

      <div className="milk-container">

        {Product &&
          Product.map((e, i) => (
            <div key={i} className="milk-product">
              <img src={e.image} alt={e.title} />
              <div className="milk-content">
                <h1>{e.title}</h1>
                <p>{e.Quantity}</p>

                {/* code 1 */}

                {/* <div className="milk-add">
                  <p>{e.price}</p>
                  {!showCounter ? (
                    <>

                      <button onClick={handleAddClick}>ADD</button>
                    </>
                  ) : (
                    <div className="counter">
                      <button onClick={handleDecrement}>-</button>
                      <span>{quantity}</span>
                      <button onClick={handleIncrement}>+</button>
                    </div>
                  )}
                </div> */}


                {/* code 2 */}

                {/* <div key={e.id} className="milk-add">
                    <p>{e.price}</p>
                    {quantities[e.id] == null ? ( 
                      <button onClick={() => handleAddClick(e.id)}>ADD</button>
                    ) : (
                      <div className="counter">
                        <button onClick={() => handleDecrement(e.id)}>-</button>
                        <span>{quantities[e.id]}</span>
                        <button onClick={() => handleIncrement(e.id)}>+</button>
                      </div>
                    )}
                  </div>*/}

                  {/* code 3 */}
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





