// import React, { useRef, useState } from 'react'

// export default function Redux_mny() {

//     const [showInput, setShowInput] = useState(false);
//     const [inputValue, setInputValue] = useState("");
//     const [Wallet, setWallet] = useState("0")

//     const [product, setProduct] = useState("");
//     const [price, setPrice] = useState("");
//     const [productList, setProductList] = useState([]);

//     const InputRef = useRef();

//     const show_Input = () => {
//         setShowInput(true)
//     }

//     const handleAddData = () => {

//         const newWallet = parseFloat(inputValue); 
//         if (!isNaN(newWallet)) {
//             setWallet(+Wallet + +newWallet)
//         }

//         setInputValue("")
//         setShowInput(false)

//         InputRef.current.focus();

//     }

//     const Product_Add = () => {
        
//         const priceValue = parseFloat(price);

//         if (product && !isNaN(priceValue) && Wallet >= priceValue) {
//             setProductList([...productList, { product, price: priceValue }])
//             setWallet(Wallet - priceValue)

//             setProduct("")
//             setPrice("")
//         } else {
//             alert("Invalid product or insufficient balance!")
//         }

//         let Product_Data = (product + price)
//         console.log(Product_Data)
        
//         InputRef.current.focus();

//     }

//     const calculate_Price = () => {
//         return productList.reduce((total, item) => total + item.price, 0);
//     }


//   return (
//     <div className='main'>

//         <div className="left">

//             <h1>Redux_mny</h1>
//             <h2>{Wallet}</h2>
//             <button onClick={show_Input}>Add Money</button>

//             {
//                 showInput && 
//                 (   
//                     <div>
//                         <input type="text" placeholder='Enter amount' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//                         <button onClick={handleAddData}>Add Data</button>
//                     </div>
//                 )
//             }

//         </div>

//         <div className="right">
//             <input type="text" ref={InputRef} placeholder='Enter Product Name' value={product} onChange={(e) => setProduct(e.target.value)} />
//             <input type="number" placeholder='Enter Your Amount' value={price} onChange={(e) => setPrice(e.target.value)} />
//             <button onClick={Product_Add} >Add Product</button> <br /><br />


//             {
//                 productList.length > 0 && (
//                     <table border='1' width='80%'>
//                         <thead>
//                             <tr>
//                                 <th>Product name</th>
//                                 <th>Price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 productList.map((e, i) => {
//                                     return (
//                                         <>
//                                             <tr key={i} >
//                                                 <th>{e.product}</th>
//                                                 <th>{e.price}</th>
//                                             </tr>
//                                         </>                                        
//                                     )
//                                 })
//                             }
//                             <tr>
//                                 <th>Payble Amount : </th>
//                                 <th>{calculate_Price()}</th>
//                             </tr>

//                         </tbody>
//                     </table>
//                 )
//             }



//         </div>


//     </div>
//   )
// }














import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Feature/Slice';


export default function Redux_mny() {

    const [wallet,setWallet] = useState("")
    const [showInput, setShowInput] = useState(false);
    const [showWallet, setShowWallet] = useState(true);
    const [cartMoney, setCartMoney] = useState("")
    const [cartName, setCartName] = useState("")

    const [productList, setProductList] = useState([]);
    const [choco, setChoco] = useState([]);
    const [matchedChocolate, setMatchedChocolate] = useState(null); 

    // const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);

    const InputRef = useRef();

    const dispatch = useDispatch()

    const count_money = useSelector((state) => state.productKey.count_money)

    const add_balance = () => {
        setShowInput(true);
        setShowWallet(false)
    }

    const handleWallet = () => {
        const amount = Number(wallet)
        if(amount) {
            dispatch(increment(amount))
            setWallet("")
            setShowInput(false)
            setShowWallet(true)
        }

        InputRef.current.focus();

    } 

    const delete_mny = () => {

        const amount = Number(cartMoney)

        const trimmedCartName = cartName.trim();

        console.log("Trimmed Cart Name:", trimmedCartName); 
        console.log("Available chocolates:", choco); 


        if (amount && trimmedCartName) {  

            if (count_money >= amount) {

                const matched = choco.find(choco => choco.name.toLowerCase() === trimmedCartName.toLowerCase())
                // dispatch(decrement(amount));             
                // setProductList([...productList, { cartMoney: amount, cartName }]);  
              

                if(matched) {

                    dispatch(decrement(amount));             
                    setProductList([...productList, { cartMoney: amount, cartName: trimmedCartName }]);  
                    setMatchedChocolate(matched);

                    setCartMoney("");             
                    setCartName("");   
                } else  {
                    alert("Product not found..!")
                }
                      
            } else  {
                alert("Insufficient balance...!");
            } 
        } else {
            alert("Please enter a valid product name and amount!");
        }
        
        InputRef.current.focus();

    }

    const calculate_Price = () => {
        return productList.reduce((total, item) => total + item.cartMoney, 0);
    }


    //fetchApi

    useEffect(() => {
        const chocolate = [
            { name: "Dark Chocolate", image: "data:image/jpeg;base64,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", description: "Rich and bittersweet dark chocolate with 70% cocoa." },
            { name: "Milk Chocolate", image: "https://cdn.pixabay.com/photo/2019/11/03/14/29/milk-4598823_1280.jpg", description: "Creamy milk chocolate with a smooth, sweet flavor." },
            { name: "White Chocolate", image: "https://cdn.pixabay.com/photo/2020/06/10/13/29/white-chocolate-5282713_640.jpg", description: "Smooth and sweet white chocolate made with cocoa butter." },
            { name: "Hazelnut Chocolate", image: "https://cdn.pixabay.com/photo/2020/07/18/11/20/chia-5416921_640.jpg", description: "Milk chocolate with crunchy hazelnut pieces." },
            { name: "Mint Chocolate", image: "https://cdn.pixabay.com/photo/2015/03/26/23/09/cake-pops-693645_640.jpg", description: "Dark chocolate infused with a refreshing mint flavor." },
            { name: "Almond Chocolate", image: "https://cdn.pixabay.com/photo/2020/09/18/21/14/dessert-5582984_640.jpg", description: "Milk chocolate with roasted almond chunks." },
            { name: "Caramel Chocolate", image: "https://cdn.pixabay.com/photo/2016/11/09/06/42/figures-1810135_640.jpg", description: "Milk chocolate filled with gooey caramel." },
            { name: "Raspberry Chocolate", image: "https://cdn.pixabay.com/photo/2023/04/11/16/04/berries-7917661_640.jpg", description: "Dark chocolate infused with a hint of raspberry flavor." },
            { name: "Cupcake", image: "https://cdn.pixabay.com/photo/2024/01/08/18/44/cupcake-8496102_640.jpg", description: "A rich, moist cupcake infused with dark chocolate and a hint of raspberry flavor." },
            { name: "Donut", image: "https://cdn.pixabay.com/photo/2020/02/11/10/02/donut-4838997_640.jpg", description: "A soft, fluffy donut filled with dark chocolate and a touch of raspberry essence." },
            { name: "Oreo Silk Chocolate", image: "https://www.bigbasket.com/media/uploads/p/l/40097871_16-cadbury-dairy-milk-silk-oreo.jpg", description: "Creamy Oreo silk blended with dark chocolate and a subtle hint of raspberry." },
            { name: "Kitkat Chocolate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLoo-kNIp5B5nDeg4d_Y1PzgL6GSq2cXKinYdf4GZwedl8_CK8mQpEc8gTMZLV_YqOo0&usqp=CAU", description: "Crispy KitKat wafers coated in smooth dark chocolate with a delicate raspberry twist." }
        ];  

        setChoco(chocolate);
    }, []);

    
    useEffect(() => {
        FetchApi();
    },[])

    const FetchApi = async () => {
       
    };

    useEffect(() => {
        setTimeout(() => {
            document.getElementById("Welcome_msg").classList.add("hide");
        }, 4000); 

            
    }, []);


  return (

    <div className='main'>

        <div className="welcome" id='Welcome_msg'> 
            <center>
                <h1>Celebrate Diwali with Sweet Surprises!</h1>
                <h3>Indulge in the finest collection of rich and creamy chocolates, crafted to delight your senses.</h3>   
                <h2>Welcome to Choco Bliss!</h2>
                <h3>Brighten your festivities with our exclusive range of Diwali chocolates and gifts. <br /> Perfectly crafted to bring joy, sweetness, and a touch of luxury to your celebrations!</h3>    
            </center>
            <div>
                <img className='left_img' src="./public/img-1.png" alt="" />
                {/* <img src="./public/img-2.png" alt="" />
                <img src="./public/img-3.png" alt="" /> */}
                <img className='right_img' src="./public/img-4.png" alt="" />
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpVz90k3-HGcr4jQtBiLvj5RbQLKmVxzhDP7egOMhMATs6EK_" alt="" /> */}
                {/* <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnw2cYrbUtHFRtAzTDiNQZELKanu8SSY22j66ttkXU5GmdcO_C" alt="" /> */}
                {/* <img src="data:image/jpeg;base64,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" alt="" /> */}
            </div>
        </div>

        
        <div className="left">

            {
                showWallet && (
                    <div className="wallet">
                        <h2>Check your wallet..👜</h2>
                        <h3>{count_money} ₹ </h3>
                        <button onClick={add_balance} >Add balance</button>
                    </div>
    
                )
            }

            {
                showInput && (
                    <div id='show_Input' className='show'>
                        <input type="number" placeholder='Enter Your Wallet Balance' value={wallet} onChange={(e) => setWallet(e.target.value)} />
                        <button onClick={handleWallet} >Add Money</button>
                    </div>    
                )
            }

        </div>

        
        <div className="right">

            <div>

                <div className="pro">

                    {/* <input type="text" ref={InputRef} placeholder='Enter Product Name' value={cartName} onChange={(e) => setCartName(e.target.value)} /> */} <br /><br />
                        <label htmlFor="">Select Products</label> <br />
                        <select ref={InputRef} value={cartName} onChange={(e) => setCartName(e.target.value)} name="products" id="products">
                            <option value="">Select Products</option>
                            <option value="Dark Chocolate">Dark Chocolate</option>
                            <option value="Milk Chocolate">Milk Chocolate</option>
                            <option value="White Chocolate">White Chocolate</option>
                            <option value="Hazelnut Chocolate">Hazelnut Chocolate</option>
                            <option value="Mint Chocolate">Mint Chocolate</option>
                            <option value="Almond Chocolate">Almond Chocolate</option>
                            <option value="Caramel Chocolate">Caramel Chocolate</option>
                            <option value="Raspberry Chocolate">Raspberry Chocolate</option>
                            <option value="Kitkat Chocolate">Kitkat Chocolate</option>
                            <option value="Cupcake">Cupcake</option>
                            <option value="Donut">Donut</option>
                            <option value="Oreo Silk Chocolate">Oreo Silk Chocolate</option>
                        </select>    

                        <input type="number" placeholder='Enter price' value={cartMoney} onChange={(e) => setCartMoney(e.target.value)} /> <br /> 
                        <button onClick={delete_mny}>Add Products</button>
                </div> <br />


            </div>


            {
                matchedChocolate && (
                
                    <div className='selected_choco'>
                        <h2>Selected Chocolate: {matchedChocolate.name}</h2>
                        <img src={matchedChocolate.image} width='200' alt="" />
                        <p>{matchedChocolate.description}</p>
                    </div>
              
                )
            }


            {
                <div className='table'>

                    {
                        productList.length > 0 &&
                            <table width='70%' border='1' style={{borderColor:'rgba(255, 255, 255, 0.35)'}}>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        productList.map((e, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th>{e.cartName}</th>
                                                    <th>{e.cartMoney}</th>
                                                </tr>
                                            )
                                        })
                                    }

                                    <tr style={{color:'rgb(152, 190, 138)'}}>
                                        <th>Payble Amount : </th>
                                        <th>{calculate_Price()}</th>
                                    </tr>
                                </tbody>

                            </table>

                    }
                </div>
            }


        </div>


    </div>
  )
}
