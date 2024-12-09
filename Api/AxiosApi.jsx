// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// export default function AxiosApi() {
//     const [data, setData] = useState("")

//     const FetchApi = async () => {   
//         // axios.get("http://localhost:5001/cars")
//         // .then((response) => {
//         //     console.log(response.data);
//         //     setData(response.data);
//         // })
//         const response = await axios.get("http://localhost:5001/cars")
//         console.log(response.data)  
//         setData(response.data)
//     }

//     useEffect(() => {
//         FetchApi()
//     }, [])

//     return (
//         <div>
//             <h1>AxiosApi</h1>

//             {/* Display Data */}
//             {data.length > 0 ? (
//                 data.map((e, i) => (
//                     <ul key={i}>
//                         <li>Title: {e.title}</li>
//                         <li>Views: {e.views}</li>
//                         <li>Accessories: {e.accessories}</li>
//                         {e.image && <img className="img" src={e.image} alt="Car" />}
//                     </ul>
//                 ))
//             ) : (
//                 <p>Loading data or no data available...</p>
//             )}

//         </div>

//     )
// }



















import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateCartQuantity, clearCart, FetchApi, updateCartItem } from "../Feature/Slice";
import { Link } from "react-router-dom";

export default function AxiosApi() {
    const dispatch = useDispatch();
    const record = useSelector((state) => state.apiKey);

    const [editingItemId, setEditingItemId] = useState(null);
    const [newItemDetails, setNewItemDetails] = useState({ title: "", quantity: 1, image: "" });
    const [cartVisible, setCartVisible] = useState(false);

    useEffect(() => {
        dispatch(FetchApi());
    }, []);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        setCartVisible(true);
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateCartQuantity({ id, quantity }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
        setCartVisible(false);
    };

    const handleEditClick = (itemId, currentDetails) => {
        setEditingItemId(itemId);
        setNewItemDetails(currentDetails);
    };

    const handleSaveClick = (itemId) => {
        dispatch(updateCartItem({
            id: itemId,
            title: newItemDetails.title,
            image: newItemDetails.image,
            quantity: newItemDetails.quantity,
        }));
        setEditingItemId(null)
    };

    const handleChangeDetail = (e) => {
        const { name, value } = e.target;
        setNewItemDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    return (
        <div>
            {/* <h1>AxiosApi</h1> */}

            <nav>
                <Link to='/' >All Products</Link> &nbsp;&nbsp;
                <Link to='/car'>Cars</Link> &nbsp;&nbsp;
                <Link to='/cosmetics'>Cosmetics</Link> &nbsp;&nbsp;
                <Link to='/bag'>Bags</Link> &nbsp;&nbsp;
                <Link to='/mobile'>Mobile</Link> &nbsp;&nbsp;
                <Link to='/gift'>Gift</Link>
            </nav>

            {/* Product List */}
            <div className="product-container">
                {record.data &&
                    record.data.map((e, i) => (
                        <div className="product-card" key={i}>
                            <img src={e.image} alt="Product" />
                            <h3>{e.title}</h3>
                            <p>Views: {e.views}</p>
                            <p> {e.accessories + " , "}</p>
                            {/* <p>{e.description || "No description available"}</p> */}

                            <button onClick={() => handleAddToCart(e)}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>

            {/* Cart Section on the Left Side */}
            {
                cartVisible && (
                    <div className={`cart-section ${cartVisible ? "active" : ""}`}>
                        <h2>Cart Items</h2>
                        {record.cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            record.cart.map((e, i) => (
                                <div key={i} className="cart-item">
                                    {editingItemId === e.id ? (
                                        <div className="edit-item-container">
                                            <p>
                                                Title:
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={newItemDetails.title}
                                                    onChange={handleChangeDetail}
                                                />
                                            </p>
                                            <p>
                                                Quantity:
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    value={newItemDetails.quantity}
                                                    onChange={handleChangeDetail}
                                                />
                                            </p>
                                            <p>
                                                Image URL:
                                                <input
                                                    type="text"
                                                    name="image"
                                                    value={newItemDetails.image}
                                                    onChange={handleChangeDetail}
                                                />
                                            </p>
                                            <button onClick={() => handleSaveClick(e.id)} style={{ background: "green" }}>
                                                Save
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <p>Title: {e.title}</p>
                                            <p>Quantity: {e.quantity}</p>
                                            <img src={e.image} alt="" />
                                            <button
                                                onClick={() => handleEditClick(e.id, { title: e.title, quantity: e.quantity, image: e.image })}
                                                style={{ background: "blue" }}
                                            >
                                                Edit
                                            </button>
                                            <button onClick={() => handleRemoveFromCart(e.id)} style={{ background: "red" }}>
                                                Remove
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                        {record.cart.length > 0 && (
                            <button className="clear-cart-button" onClick={handleClearCart}>
                                Clear Cart
                            </button>
                        )}
                    </div>
                )
            }



        </div>
    );
}
