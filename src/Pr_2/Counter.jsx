
import React, { useState } from 'react';

export default function Counter() {

    const [count, setCount] = useState(246);
    const [isFollowing, setIsFollowing] = useState(false);

    const increase = () => {
        setCount(count + 1);
        setIsFollowing(true); // Set the state to following when the button is clicked
    };

    const unfollow = () => {
        setCount(count - 1); // Decrease the count when unfollowing
        setIsFollowing(false); // Set the state to unfollow
    };

    const reset = () => {
        setCount(0)
    }

    const fetch = () => {
        setCount(246)
    }


    //following

    const [plus, setPlus] = useState(212);

    const following = () => {
        setPlus(0);
    };

    const plus_following = () => {
        setPlus(plus + 1)
    }


    //hide section
    const [showSettings, setShowSettings] = useState(false);

    const toggleSettings = () => {
        setShowSettings(!showSettings);
    };



    return (

        <div className='main'>

            <div className="first">

                <div className="profile">

                    <div className="pic">
                        <img src="profile.jpg" alt="Profile" />
                    </div>


                    <div className="settings-icon"  onClick={toggleSettings}>
                        <i class="fa-solid fa-gear"></i>
                    </div>

                    {/* //hide section */}
                    {showSettings && (
                        <div className="settings-section">
                            <i class="fa-solid fa-xmark" onClick={toggleSettings}></i>
                            <h3>Settings</h3>
                            <button className="increase_follower" onClick={increase}>Increase follower</button>
                            <button className="decrease_follower" onClick={unfollow}>decrease follower</button>
                            <button className="reset" onClick={reset}>Remove All Followers</button>
                            <button className="fetch_again" onClick={fetch}>Fetch All Follower Again</button>
                            <button className="remove_following" onClick={following}>Remove Following</button>
                        </div>
                    )}


                </div>


                <div className="content">

                    <div className="name">
                        <h4>hxrmii__.04</h4>
                        <div className="edit_profile">Edit Profile</div>
                        {/* <div className="archive">View Archive</div> */}
                    </div>

                    <div className="post">
                        <h4 style={{fontSize: '10px'}}>0 Posts</h4>
                        <div className="follower" id='follow'><b>{count}</b> Followers</div>
                        <div className="following" id='following'><b>{plus}</b> Following</div>
                    </div>

                    <div className="bio">
                        <h5>
                            <b>U П P R Σ D I C T Λ B L Σ</b> <br />
                            𐋅AR𐌌ii ¹⁷ 🧚🏼‍♀️<br />
                            하미🫶🏻<br />
                            . <br />
                            ᴄʜᴇʀɪꜱʜᴇᴅ 🌟 <br />
                            FORTUNATE ✨ <br />
                        </h5>
                    </div>
                    
                    {/* //follow react */}

                    <div className="Foll">
                        {!isFollowing ? (
                            <button onClick={increase} className="follow">
                                Follow
                            </button>
                        ) : (
                            <div>
                                <button className="following" onClick={plus_following}>Following</button>
                                <button onClick={unfollow} className="unfollow">
                                    Unfollow
                                </button>
                            </div>
                        )}
                    </div>

                </div>

            </div>
            
            <div className="second">

                <div className="hilight">

                    <div className="round">
                        <img src="one.jpg" alt="" />
                    </div>
                    <div className="round">
                        <img src="two.jpg" alt="" />
                    </div>
                    <div className="round">
                        <img src="three.jpg" alt="" />
                    </div>
                    <div className="round">
                        <img src="four.jpg" alt="" />
                    </div>
                    <div className="round">
                        <img src="five.jpg" alt="" />
                    </div>

                </div>

                {/* <hr style={{width:'90%', color: 'grey'}} /> */}

                {/* <div className="save">

                    <div className="squre">
                        <svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="15" role="img" viewBox="0 0 18 18" width="30"><title></title><rect fill="none" height="17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>                
                        <span>Posts</span>
                    </div>

                    <div className="saved">
                        <i class="fa-regular fa-bookmark"></i> &nbsp;
                        <span>Saved</span>
                    </div>

                    <div className="tag">
                        <svg aria-label="" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="15" role="img" viewBox="0 0 18 18" width="30"><title></title><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path><circle cx="12.072" cy="12.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                        <span>Tagged</span>
                    </div>


                </div> */}
                
                <div className="no_post">
                    <img src="no_post.png" alt="" />
                </div>

            </div>

        </div>

    );
}
