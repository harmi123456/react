import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, updateCartQuantity, clearCart, FetchApi, updateCartItem } from "../Feature/Slice";
import { Link } from 'react-router-dom'

export default function Gift() {
    const dispatch = useDispatch();

    const record = useSelector((state) => state.apiKey)

    const gift = record.data.filter(item => item.category === "gifts")

    const [editingItemId, setEditingItemId] = useState(null);
    const [newItemDetails, setNewItemDetails] = useState({ title: "", quantity: 1, image: "" });


    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };


    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateCartQuantity({ id, quantity }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
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
            <h1>Gift</h1>
            <nav>
                <Link to='/' >All Products</Link> &nbsp;&nbsp;
                <Link to='/car'>Cars</Link> &nbsp;&nbsp;
                <Link to='/cosmetics'>Cosmetics</Link> &nbsp;&nbsp;
                <Link to='/bag'>Bags</Link> &nbsp;&nbsp;
                <Link to='/mobile'>Mobile</Link> &nbsp;&nbsp;
                <Link to='/gift'>Gift</Link>
            </nav>

            {
                gift.map((e) => (
                    <div>
                        <ul>
                            <li>Title: {e.title}</li>
                            <li>Views: {e.views}</li>
                            <li>Accessories: {e.accessories}</li>
                            {e.image && <img src={e.image} alt="Car" />}
                            <button onClick={() => handleAddToCart(e)}>Add To Cart</button>
                        </ul>
                    </div>
                ))
            }

             {/* Cart Section on the Left Side */}
             <div style={{
                position: "fixed",
                top: "20px",
                right: "0",
                width: "500px",
                border: '1px solid',
                background: "white",
                padding: "10px",
                borderRight: "1px solid #ddd",
                maxHeight: "100vh",
                overflowY: "auto"
            }}>
                <h2>Cart Items</h2>
                {record.cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    record.cart.map((e, i) => (
                        <div key={i} style={{ marginBottom: "10px" }}>
                            {editingItemId === e.id ? (
                                <div>
                                    <p>
                                        Title:
                                        <input
                                            type="text"
                                            name="title"
                                            value={newItemDetails.title}
                                            onChange={handleChangeDetail}
                                            style={{ width: "100%" }}
                                        />
                                    </p>
                                    <p>
                                        Quantity:
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={newItemDetails.quantity}
                                            onChange={handleChangeDetail}
                                            style={{ width: "50px" }}
                                        />
                                    </p>
                                    <p>
                                        Image URL:
                                        <input
                                            type="text"
                                            name="image"
                                            value={newItemDetails.image}
                                            onChange={handleChangeDetail}
                                            style={{ width: "100%" }}
                                        />
                                    </p>
                                    <button
                                        onClick={() => handleSaveClick(e.id)}
                                        style={{ background: "green", color: "white" }}
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <p>Title: {e.title}</p>
                                    <p>Quantity: {e.quantity}</p>
                                    <img src={e.image} alt="" style={{ width: "50px" }} />
                                    <button
                                        onClick={() => handleEditClick(e.id, { title: e.title, quantity: e.quantity, image: e.image })}
                                        style={{ background: "blue", color: "white" }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleRemoveFromCart(e.id)}
                                        style={{ background: "red", color: "white", marginTop: "5px" }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                )}
                {record.cart.length > 0 && (
                    <button
                        onClick={handleClearCart}
                        style={{ marginTop: "10px", background: "red", color: "white" }}
                    >
                        Clear Cart
                    </button>
                )}
            </div>

        </div>
    )
}
