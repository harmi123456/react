
//click event

import React, { useState } from 'react'
import Counter from './Pr_2/Counter';

export default function Home() {
    const [showCounter, setShowCounter] = useState(false);

    const handleClick = () => {
        setShowCounter(true); // Show the Counter component when the button is clicked
    };

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {showCounter && <Counter />} {/* Conditionally render the Counter component */}
        </div>
    );

}