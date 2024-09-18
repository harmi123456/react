import React, { useRef, useState } from 'react'

export default function Form() {
  
  //Form validation
  const [name,Setname] = useState();
  const [nameErr,setnameErr] = useState();

  const [number,setnumber] = useState();
  const [numberErr,setnumberErr] = useState();

  const [Mail,setMail] = useState();
  const [MailErr,setMailErr] = useState();

  const [category, setCategory] = useState(''); 
  const [categoryErr, setCategoryErr] = useState('');

  const [isValid, setIsValid] = useState(false);
  const [showForm, setShowForm] = useState(true);



  const handleSubmit = (e) => {
    e.preventDefault()

    let isValid = true;

    if(!name) {
      setnameErr("name required....!")
      isValid = false;
    } else if(!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)) {
      setnameErr("Please Enter Valid name")
      isValid = false;
    } else{
      setnameErr("")
    }


    if(!number) {
      setnumberErr("Number required....!")
      isValid = false;
    } else if (!/^\d{10}$/.test(number)) {
      setnumberErr("Please Enter Valid Number")
      isValid = false;
    } else {
      setnumberErr("")
    }

    if(!Mail) {
      setMailErr("Email required....")
      isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Mail)) {
      setMailErr("Please Enter Valid Email")
      isValid = false;
    } else {
      setMailErr("")
    }

    if (!category) {
      setCategoryErr("Category required....")
      isValid = false;
    } else {
      setCategoryErr("")
    }

    //Final Form Submission

    //for mobile
    if (isValid && category === "Mobile") {
      alert("Form submitted successfully!")
      setIsValid(isValid); 
      setShowForm(false);
    }

    //For Cosmetics
    if (isValid && category === "Cosmetics") {
      alert("Form submitted successfully!")
      setIsValid(isValid); 
      setShowForm(false);
    }

    //For Medicines
    if(isValid && category === "Toys") {
      alert("Form submitted successfully!")
      setIsValid(isValid); 
      setShowForm(false);
    }


  }



  return (
    <div>

        <div className="main">

        {showForm && (

          <form className="form" onSubmit={(e) => handleSubmit(e)}>

            <center>
              <h1>Registration Form</h1>
            </center> <br />

                <label htmlFor="">Name : </label> <br />
                <input type="text" placeholder='Enter Your name' onChange={(e) => Setname(e.target.value)} /> <br />
                <span>{nameErr}</span>

                <br /><br />

                <label htmlFor="">Contact no. : </label>
                <input type="text" placeholder='Enter Your number' onChange={(e) => setnumber(e.target.value)} /> <br />
                <span>{numberErr}</span>

                <br /><br />

                <label htmlFor="">Email Id : </label>
                <input type="text" placeholder='Enter Your Email Id' onChange={(e) => setMail(e.target.value)} /> <br />
                <span>{MailErr}</span>

                <br /><br />

                <label htmlFor="category">Category: </label> <br />
                <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Select a category</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Cosmetics">Cosmetics</option>
                  <option value="Toys">Toys</option>
                  {/* <option value="Clothes">Clothes</option> */}
                </select> <br />
                <span>{categoryErr}</span>

                <center>
                  <button>submit</button>
                </center>
          </form>

        )}

        {/* //For Mobile */}

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


        {/* //For Cosmetics */}

        {isValid && category === "Cosmetics" && (

          <div className="cosmetic">

            <center> <label htmlFor="">--- Cosmetics ---</label> </center> <br /> <br />

            <div className="cos1">

              <div className="product">

                <div className="image">
                  <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/sugar-cosmetics/972326/0/-6tRkGdWir-972326_1.jpeg" alt="" />
                </div>
                <p>SUGAR Cosmetics</p>
                <h5>Kohl Of Honour Intense Kajal</h5>
                <h4>₹231  <strike style={{color:"grey", fontWeight:"lighter"}}>₹249</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"red"}}>(7% Off)</span></h4>
                <select name="shade" id="shade">
                  <option value="">Select Shade</option>
                  <option value="">Black</option>
                  <option value="">Classic Brown</option>
                  <option value="">Forest Green</option>
                  <option value="">Turquoise</option>
                </select>

              </div>

              <div className="product">
                
                <div className="image">
                  <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/sugar-cosmetics/COMBO_240111064532-1ET/0/XbSixBp9G2-972947_Combo_18-1.jpg" alt="" />
                </div>
                <p>SUGAR Cosmetics</p>
                <h5>Tipsy lips Moisturizing Balm</h5>
                <h4>₹398 </h4>
                <select name="shade" id="shade">
                  <option value="">Select Shade</option>
                  <option value="">Cherry</option>
                  <option value="">Peach</option>
                  <option value="">Coffe Bean</option>
                  <option value="">Pomegranate</option>
                </select>

              </div>

              <div className="product">
                
                <div className="image">
                  <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/sugar-cosmetics/972693/0/-QD4bhQQ29-f283-1Xhvs-972693_1.jpg" alt="" />
                </div>
                <p>SUGAR Cosmetics</p>
                <h5>Powder Play Translucent Compact - (6g)</h5>
                <h4>₹603  <strike style={{color:"grey", fontWeight:"lighter"}}>₹649</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"red"}}>(7% Off)</span></h4>
                <select name="shade" id="shade">
                  <option value="">Select Shade</option>
                  <option value="">Black</option>
                  <option value="">Classic Brown</option>
                  <option value="">Forest Green</option>
                  <option value="">Turquoise</option>
                </select>

              </div>

              <div className="product">
                
                <div className="image">
                  <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/sugar-cosmetics/972670/0/Bmxn852duI-RFoksQHPnH-972670_1.jpg" alt="" />
                </div>
                <p>SUGAR Cosmetics</p>
                <h5>Matte Attack Transferproof Lipstick</h5>
                <h4>₹696  <strike style={{color:"grey", fontWeight:"lighter"}}>₹749</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"red"}}>(7% Off)</span></h4>
                <select name="shade" id="shade">
                  <option value="">Select Type</option>
                  <option value="">Matte</option>
                  <option value="">Glossy</option>
                  <option value="">Super Glossy</option>
                </select>

              </div>

            </div>

            <br /><br />

            <div className="cos1">

              <div className="product">

                <div className="image">
                  <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/lakme/949643/0/z9aAASrKQf-949643_1.jpg" alt="" />
                </div>
                <p>Lakmé Cosmetics</p>
                <h5>9 to 5 Powerplay Priming Matte Lipstick</h5>
                <h4>₹479  <strike style={{color:"grey", fontWeight:"lighter"}}>₹599</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"red"}}>(20% Off)</span></h4>
                <select name="shade" id="shade">
                  <option value="">Select Shade</option>
                  <option value="">Black</option>
                  <option value="">Classic Brown</option>
                  <option value="">Forest Green</option>
                  <option value="">Turquoise</option>
                </select>

              </div>

              <div className="product">
                
                <div className="image">
                  <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/lakme/949250/0/qtgmsmT_yr-3mWrDkaeEp-2.png" alt="" />
                </div>
                <p>Lakmé Cosmetics</p>
                <h5> Mousse Foundation - Rose Ivory (25 g)</h5>
                <h4>₹398 </h4>
                <select name="shade" id="shade">
                  <option value="">Select Shade</option>
                  <option value="">Beige Caramel</option>
                  <option value="">Beige Vanilla</option>
                  <option value="">Rose Ivory</option>
                  <option value="">Rose Honey</option>
                </select>

              </div>

              <div className="product">
                
                <div className="image">
                  <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/lakme/COMBO_240712123006-GF0/0/UWc84bSFNr-891942_combo_14_1.jpg" alt="" />
                </div>
                <p>Lakmé Cosmetics</p>
                <h5>Made To Last Setting Spray & Blur </h5>
                <h4>₹1,140  <strike style={{color:"grey", fontWeight:"lighter"}}>₹1,425</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"red"}}>(7% Off)</span></h4>
                <select name="shade" id="shade">
                  <option value="">Select Shade</option>
                  <option value="">Black</option>
                  <option value="">Classic Brown</option>
                  <option value="">Forest Green</option>
                  <option value="">Turquoise</option>
                </select>

              </div>

              <div className="product">
                
                <div className="image">
                  <img src="https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/891950/d3XOAXkjwq-891950_1.jpg" alt="" />
                </div>
                <p>Lakmé Cosmetics</p>
                <h5>Xtraordin-airy Mousse Foundation</h5>
                <h4>₹674  <strike style={{color:"grey", fontWeight:"lighter"}}>₹899</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:"red"}}>(7% Off)</span></h4>
                <select name="shade" id="shade">
                  <option value="">Select Shade</option>
                  <option value="">Almond Honey</option>
                  <option value="">Golden Medium</option>
                  <option value="">Golden Light</option>
                  <option value="">Rose Fair</option>
                </select>

              </div>

              
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br />

          </div>

        )}


        {/* //For Toys */}

        {isValid && category === "Toys" && (

          <div className="toys">

            <center> <label htmlFor="">--- Toys ---</label> </center> 
            <br /><br />

            <div className='med'>

              <div className="toy">

                <div className="image">
                  <img src="https://cdn.fcglcdn.com/brainbees/images/products/219x265/10305360a.webp" alt="" />
                </div>
                <h3>Babyhug</h3>
                <p>Baby Elephant Soft Toy with Attached Monkey - Height 30 cm</p>
                <h5>₹606  &nbsp;&nbsp;&nbsp;<span style={{color:'grey', fontWeight:'lighter'}}>MRP: ₹ <strike>995</strike></span>  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"green"}}>39% Off</span></h5>
                <p>Free Delivery</p>
                <select name="Color" id="Color">
                  <option value="">Select color</option>
                  <option value="">Pink</option>
                  <option value="">Grey</option>
                  <option value="">Red</option>
                  <option value="">Green</option>
                </select>
              </div>
              
              <div className="toy">

                <div className="image">
                  <img src="https://cdn.fcglcdn.com/brainbees/images/products/280x338/9180391a.webp" alt="" />
                </div>
                <h3>Babyhug</h3>
                <p>Baby Penguin Soft Toy - Height 31 cm</p>
                <h5>₹555  &nbsp;&nbsp;&nbsp;<span style={{color:'grey', fontWeight:'lighter'}}>MRP: ₹ <strike>975</strike></span>  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"green"}}>43% Off</span></h5>
                <p>Free Delivery</p>
                <select name="Color" id="Color">
                  <option value="">Select color</option>
                  <option value="">Pink</option>
                  <option value="">Grey</option>
                  <option value="">Red</option>
                  <option value="">Green</option>
                </select>
              </div>

              <div className="toy">

                <div className="image">
                  <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/9021868a.webp" alt="" />
                </div>
                <h3>Babyhug</h3>
                <p>Baby Rabbit Soft Toy Grey - Height 32 cm</p>
                <h5>₹523  &nbsp;&nbsp;&nbsp;<span style={{color:'grey', fontWeight:'lighter'}}>MRP: ₹ <strike>845</strike></span>  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"green"}}>38% Off</span></h5>
                <p>Free Delivery</p>
                <select name="Color" id="Color">
                  <option value="">Select color</option>
                  <option value="">Pink</option>
                  <option value="">Grey</option>
                  <option value="">Red</option>
                  <option value="">Green</option>
                </select>
              </div>

              <div className="toy">

                <div className="image">
                  <img src="https://cdn.fcglcdn.com/brainbees/images/products/280x338/9021865a.webp" alt="" />
                </div>
                <h3>Babyhug</h3>
                <p>Baby Elephant Soft Toy with Attached Monkey - Height 30 cm</p>
                <h5>₹606  &nbsp;&nbsp;&nbsp;<span style={{color:'grey', fontWeight:'lighter'}}>MRP: ₹ <strike>995</strike></span>  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"green"}}>39% Off</span></h5>
                <p>Free Delivery</p>
                <select name="Color" id="Color">
                  <option value="">Select color</option>
                  <option value="">Pink</option>
                  <option value="">Grey</option>
                  <option value="">Red</option>
                  <option value="">Green</option>
                </select>
              </div>


            </div>
            <br /><br />

            <div className='med'>

              <div className="toy">

                <div className="image">
                  <img src="https://cdn.fcglcdn.com/brainbees/images/products/280x338/9436809a.webp" alt="" />
                </div>
                <h3>Babyhug</h3>
                <p>Birds Themed Soft Ball Multicolor - Height 13 cm</p>
                <h5>₹139  &nbsp;&nbsp;&nbsp;<span style={{color:'grey', fontWeight:'lighter'}}>MRP: ₹ <strike>245</strike></span>  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"green"}}>43% Off</span></h5>
                <p>Free Delivery</p>
                <select name="Color" id="Color">
                  <option value="">Select color</option>
                  <option value="">Pink</option>
                  <option value="">Grey</option>
                  <option value="">Red</option>
                  <option value="">Green</option>
                </select>
              </div>

              <div className="toy">

                <div className="image">
                  <img src="https://cdn.fcglcdn.com/brainbees/images/products/280x338/9436793a.webp" alt="" />
                </div>
                <h3>Babyhug</h3>
                <p>Smiley Soft Toy Balls Pack of 7 - Multicolour (Color May Vary)</p>
                <h5>₹555  &nbsp;&nbsp;&nbsp;<span style={{color:'grey', fontWeight:'lighter'}}>MRP: ₹ <strike>975</strike></span>  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"green"}}>43% Off</span></h5>
                <p>Free Delivery</p>
                <select name="Color" id="Color">
                  <option value="">Select color</option>
                  <option value="">Pink</option>
                  <option value="">Grey</option>
                  <option value="">Red</option>
                  <option value="">Green</option>
                </select>
              </div>

              <div className="toy">

                <div className="image">
                  <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/13195316a.webp" alt="" />
                </div>
                <h3>Bonfino</h3>
                <p>Premium My Little Zoo House with Carry Handle</p>
                <h5>₹1296 &nbsp;&nbsp;&nbsp;<span style={{color:'grey', fontWeight:'lighter'}}>MRP: ₹ <strike>1385</strike></span>  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"green"}}>38% Off</span></h5>
                <p>Free Delivery</p>
                <select name="Color" id="Color">
                  <option value="">Select color</option>
                  <option value="">Pink</option>
                  <option value="">Grey</option>
                  <option value="">Red</option>
                  <option value="">Green</option>
                </select>
              </div>

              <div className="toy">

                <div className="image">
                  <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/11384335a.webp" alt="" />
                </div>
                <h3>Babyhug</h3>
                <p> Premium Tiger Free Wheel Car Cum Orange Rattle Toy</p>
                <h5>₹606  &nbsp;&nbsp;&nbsp;<span style={{color:'grey', fontWeight:'lighter'}}>MRP: ₹ <strike>995</strike></span>  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"green"}}>39% Off</span></h5>
                <p>Free Delivery</p>
                <select name="Color" id="Color">
                  <option value="">Select color</option>
                  <option value="">Pink</option>
                  <option value="">Grey</option>
                  <option value="">Red</option>
                  <option value="">Green</option>
                </select>
              </div>


            </div>
              <br /><br /><br /><br /><br /><br />


          </div>          
        )}

        </div>
    </div>
  )
}
