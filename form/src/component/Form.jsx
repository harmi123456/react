import React, { useState } from 'react';

const BillForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    meal: '',
    quantity: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const [isvisible,setisvisible] = useState(false)

  return (
    <div className="main">
      <div className="form-container">
        <h1>Basic Information</h1>

        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Enter Your Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="contact">Contact No: </label>
          <input type="number" name="contact" value={formData.contact} onChange={handleChange} required />

          <div id="select">

            <div style={{width: '70%'}}>
              <label htmlFor="meal">Select Your Meal</label>
              <select name="meal" value={formData.meal} onChange={handleChange} required>
                <option value="">Select your Meal</option>
                <option value="Panipuri">Panipuri</option>
                <option value="Samosa">Samosa</option>
                <option value="Dhosa">Dhosa</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Chinese">Chinese</option>
              </select>
            </div>

            <div>
              <label htmlFor="quantity" style={{marginLeft: '30px'}}>Quality : </label>
              <input type="number" name='quantity' value={formData.quantity} onChange={handleChange} required className='quantity' />
            </div>

          </div>

          <input type="submit" className="submit-button" value="Submit" onClick={()=>setisvisible(!isvisible)}/>

        </form>
      </div>

      {submittedData && (
      
          <div className="submitted-data">
            <h1>Bill <span style={{fontSize:'12px', marginLeft: '200px'}}>Bill No : 50</span> </h1> 
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Contact No:</strong> {submittedData.contact}</p>
            <p><strong>Meal:</strong> {submittedData.meal}</p>
            <p><strong>Quantity:</strong> {submittedData.quantity}</p>
            <p className="gst"><strong>GST:</strong> 24AADCS2086A4ZQ</p>
            <p className="price"><strong>Price:</strong> ₹850</p>
          </div>
       
      )}
      
    </div>
  );
};

export default BillForm;
