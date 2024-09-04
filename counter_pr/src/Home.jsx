import React, { useState } from 'react'
import Counter from './Pr_2/Counter';

export default function Home() {
    const [showCounter, setShowCounter] = useState(false);

    const handleClick = () => {
        setShowCounter(true); // Show the Counter component when the button is clicked
    };

  return (

    <div className='home'>

        <div className="mobile">
            {/* <img className='screen' src="screen2.png" alt="" /> */}

            {/* <button onClick={handleClick} className="insta"></button>
            {showCounter && <Counter />} Conditionally render the Counter component */}

            <div style={{ display: showCounter ? 'none' : 'block' }} className='home'>
                <div className="mobile">
                    <img className='screen' src="screen2.png" alt="Screen" />
                    <button onClick={handleClick} className="insta"></button>
                </div>
           </div>
           {showCounter && <Counter />}


        </div>

    </div>

  )
}

