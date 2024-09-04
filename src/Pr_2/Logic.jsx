import React, { useState } from 'react'

export default function Logic() {
    const [count,setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

  return (
    <div className='main'>
        <h1>{count}</h1>
        <button onClick={increase} >Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}


//follow unfollow button

// import React, { useState } from 'react';

// function FollowButton() {
//   // State to track if the user is following
//   const [isFollowing, setIsFollowing] = useState(false);

//   // Function to handle follow button click
//   const increase = () => {
//     setIsFollowing(true); // Set the state to following
//   };

//   // Function to handle unfollow button click
//   const unfollow = () => {
//     setIsFollowing(false); // Set the state to unfollow
//   };

//   return (
//     <div>
//       {!isFollowing ? (
//         <button onClick={increase} className="follow">
//           Follow
//         </button>
//       ) : (
//         <div>
//           <button className="following">Following</button>
//           <button onClick={unfollow} className="unfollow">
//             Unfollow
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FollowButton;
