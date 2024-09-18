import React, { useState } from 'react';

export default function Form() {

  // Form validation states
  const [name, Setname] = useState('');
  const [nameErr, setnameErr] = useState('');

  const [number, setnumber] = useState('');
  const [numberErr, setnumberErr] = useState('');

  const [Mail, setMail] = useState('');
  const [MailErr, setMailErr] = useState('');

  const [category, setCategory] = useState(''); // State to track selected category
  const [categoryErr, setCategoryErr] = useState('');

  const [isValid, setIsValid] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // Validation for Name
    if (!name) {
      setnameErr("Name required....!");
      isValid = false;
    } else if (!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)) {
      setnameErr("Please Enter Valid name");
      isValid = false;
    } else {
      setnameErr("");
    }

    // Validation for Number
    if (!number) {
      setnumberErr("Number required....!");
      isValid = false;
    } else if (!/^\d{10}$/.test(number)) {
      setnumberErr("Please Enter Valid Number");
      isValid = false;
    } else {
      setnumberErr("");
    }

    // Validation for Email
    if (!Mail) {
      setMailErr("Email required....");
      isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Mail)) {
      setMailErr("Please Enter Valid Email");
      isValid = false;
    } else {
      setMailErr("");
    }

    // Validation for Category
    if (!category) {
      setCategoryErr("Category required....");
      isValid = false;
    } else {
      setCategoryErr("");
    }

    
    

    if (isValid && category === "Mobile") {
      alert("Form submitted successfully!");
      setIsValid(isValid); 
      setShowForm(false); // Hide the form when mobile div is shown
    }
  



  };

  return (
    <div>
      <div className="main">

      {showForm && (

        <form className="form" onSubmit={handleSubmit}>
            <center>
              <h1>Registration Form</h1>
            </center>
            <br />

            <label htmlFor="name">Name: </label> <br />
            <input
              type="text"
              placeholder="Enter Your name"
              onChange={(e) => Setname(e.target.value)}
            /> <br />
            <span>{nameErr}</span>

            <br /><br />

            <label htmlFor="number">Contact no.: </label> <br />
            <input
              type="text"
              placeholder="Enter Your number"
              onChange={(e) => setnumber(e.target.value)}
            /> <br />
            <span>{numberErr}</span>

            <br /><br />

            <label htmlFor="email">Email Id: </label> <br />
            <input
              type="text"
              placeholder="Enter Your Email Id"
              onChange={(e) => setMail(e.target.value)}
            /> <br />
            <span>{MailErr}</span>

            <br /><br />

            <label htmlFor="category">Category: </label> <br />
            <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select a category</option>
              <option value="Mobile">Mobile</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Medicines">Medicines</option>
              <option value="Clothes">Clothes</option> <br />
              <span>{categoryErr}</span>
            </select>

            <center>
              <button type="submit">Submit</button>
            </center>
        </form>

      )}
      

        {isValid && category === "Mobile" && (

          <div className="mobile">

            <center> <label htmlFor="mobileInput">--- Mobile ---</label> </center> <br />

            <div style={{display:"flex", justifyContent:"space-evenly"}}>

                    <div className="mobile1">
                        <div className="image">
                            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbiISkzk0prGmRe69QquWMtpWBM0-zxoe6bkFkSYguOBQrG7XEoGPIGYQIjf7cnE-DrTtHmzzyPd_7Q_yM9MqKVtHJCzdTD0U1AGaXM2U" alt="" />
                            <h3>Apple iPhone 16 Plus</h3>
                            <h5>₹1,10,000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"grey", fontWeight:"lighter"}}>Color: White</span></h5>
                            <p>Free delivery</p>

                            <select name="storage" id="storage">
                              <option value="">Select Storage</option>
                              <option value="">128GB</option>
                              <option value="">256GB</option>
                              <option value="">512GB</option>
                            </select> &nbsp;&nbsp;&nbsp;&nbsp;

                            <select name="RAM" id="RAM">
                              <option value="">Select RAM</option>
                              <option value="">1GB</option>
                              <option value="">2GB</option>
                              <option value="">6GB</option>
                              <option value="">8GB</option>
                            </select>

                        </div>

                    </div>

                    <div className="mobile1">
                        <div className="image">
                            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-S-jQKyRpmNqXHeAf5gAfzBi65Kfha-BfIwVFYknFmMgoJ-hsI1pQ1Ucq7Ns7J1zb6kmIe54hM4tE7ThjdRCHTljB-sPSpBU0YosqoN2U0EnN7ceBBeBNgA&usqp=CAE" alt="" />
                            <h3>Apple iPhone 16 Plus</h3>
                            <h5>₹1,10,000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"grey", fontWeight:"lighter"}}>Color: Ultramarine</span></h5>
                            <p>Free delivery</p>

                            <select name="storage" id="storage">
                              <option value="">Select Storage</option>
                              <option value="">128GB</option>
                              <option value="">256GB</option>
                              <option value="">512GB</option>
                            </select> &nbsp;&nbsp;&nbsp;&nbsp;

                            <select name="RAM" id="RAM">
                              <option value="">Select RAM</option>
                              <option value="">1GB</option>
                              <option value="">2GB</option>
                              <option value="">6GB</option>
                              <option value="">8GB</option>
                            </select>

                        </div>

                    </div>

                    <div className="mobile1">
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/712SeOsnKUL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                            <h3>Apple iPhone 16 Plus</h3>
                            <h5>₹1,10,000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"grey", fontWeight:"lighter"}}>Color: Teal</span></h5>
                            <p>Free delivery</p>

                            <select name="storage" id="storage">
                              <option value="">Select Storage</option>
                              <option value="">128GB</option>
                              <option value="">256GB</option>
                              <option value="">512GB</option>
                            </select> &nbsp;&nbsp;&nbsp;&nbsp;

                            <select name="RAM" id="RAM">
                              <option value="">Select RAM</option>
                              <option value="">1GB</option>
                              <option value="">2GB</option>
                              <option value="">6GB</option>
                              <option value="">8GB</option>
                            </select>

                        </div>

                    </div>

                    <div className="mobile1">
                        <div className="image">
                            <img src="https://m.media-amazon.com/images/I/615O-NFQKdL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                            <h3>Apple iPhone 16 Plus</h3>
                            <h5>₹1,10,000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"grey", fontWeight:"lighter"}}>Color: Black</span></h5>
                            <p>Free delivery</p>

                            <select name="storage" id="storage">
                              <option value="">Select Storage</option>
                              <option value="">128GB</option>
                              <option value="">256GB</option>
                              <option value="">512GB</option>
                            </select> &nbsp;&nbsp;&nbsp;&nbsp;

                            <select name="RAM" id="RAM">
                              <option value="">Select RAM</option>
                              <option value="">1GB</option>
                              <option value="">2GB</option>
                              <option value="">6GB</option>
                              <option value="">8GB</option>
                            </select>

                        </div>

                    </div>

            </div> 
                
            <br /><br />

            <div style={{display:"flex", justifyContent:"space-evenly"}}>

              <div className="mobile1">
                  <div className="image">
                      <img src="https://m.media-amazon.com/images/I/61qV17Px4NL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                      <h3>Apple iPhone 16 Pro Max</h3>
                      <h5>₹1,69,900 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"grey", fontWeight:"lighter"}}>Color: Natural Titanium</span></h5>
                      <p>Free delivery</p>

                      <select name="storage" id="storage">
                        <option value="">Select Storage</option>
                        <option value="">256GB</option>
                        <option value="">512GB</option>
                        <option value="">1TB</option>
                        <option value="">2TB</option>
                      </select> &nbsp;&nbsp;&nbsp;&nbsp;

                      <select name="RAM" id="RAM">
                        <option value="">Select RAM</option>
                        <option value="">1GB</option>
                        <option value="">2GB</option>
                        <option value="">6GB</option>
                        <option value="">8GB</option>
                      </select>

                  </div>

              </div>

              <div className="mobile1">
                  <div className="image">
                      <img src="https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                      <h3>Apple iPhone 16 Pro Max</h3>
                      <h5>₹1,69,900 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"grey", fontWeight:"lighter"}}>Color: Black Titanium</span></h5>
                      <p>Free delivery</p>

                      <select name="storage" id="storage">
                        <option value="">Select Storage</option>
                        <option value="">256GB</option>
                        <option value="">512GB</option>
                        <option value="">1TB</option>
                        <option value="">2TB</option>
                      </select> &nbsp;&nbsp;&nbsp;&nbsp;

                      <select name="RAM" id="RAM">
                        <option value="">Select RAM</option>
                        <option value="">1GB</option>
                        <option value="">2GB</option>
                        <option value="">6GB</option>
                        <option value="">8GB</option>
                      </select>

                  </div>

              </div>

              <div className="mobile1">
                  <div className="image">
                      <img src="https://m.media-amazon.com/images/I/61xJlx-3KDL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                      <h3>Apple iPhone 16 Pro Max</h3>
                      <h5>₹1,69,900 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"grey", fontWeight:"lighter"}}>Color: White Titanium</span></h5>
                      <p>Free delivery</p>

                      <select name="storage" id="storage">
                        <option value="">Select Storage</option>
                        <option value="">256GB</option>
                        <option value="">512GB</option>
                        <option value="">1TB</option>
                        <option value="">2TB</option>
                      </select> &nbsp;&nbsp;&nbsp;&nbsp;

                      <select name="RAM" id="RAM">
                        <option value="">Select RAM</option>
                        <option value="">1GB</option>
                        <option value="">2GB</option>
                        <option value="">6GB</option>
                        <option value="">8GB</option>
                      </select>

                  </div>

              </div>

              <div className="mobile1">
                  <div className="image">
                      <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1725959941/Croma%20Assets/Communication/Mobiles/Images/309746_0_rnf9jw.png?tr=w-640" alt="" />
                      <h3>Apple iPhone 16 Pro Max</h3>
                      <h5>₹1,69,900 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"grey", fontWeight:"lighter"}}>Color: Desert Titanium</span></h5>
                      <p>Free delivery</p>

                      <select name="storage" id="storage">
                        <option value="">Select Storage</option>
                        <option value="">256GB</option>
                        <option value="">512GB</option>
                        <option value="">1TB</option>
                        <option value="">1TB</option>
                      </select> &nbsp;&nbsp;&nbsp;&nbsp;

                      <select name="RAM" id="RAM">
                        <option value="">Select RAM</option>
                        <option value="">1GB</option>
                        <option value="">2GB</option>
                        <option value="">6GB</option>
                        <option value="">8GB</option>
                      </select>

                  </div>

              </div>

            </div>

            <br /><br /><br /><br /><br /><br /><br /><br />

          </div> 
  
        )}

      </div>
    </div>
  );
}
