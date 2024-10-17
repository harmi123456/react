import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Web() {
    const navigate = useNavigate();
    
    const handleSignInClick = () => {
        navigate('/redux-task');
    };

  return (
    <div>

        <div className="left2">
            <nav>
                <img src="https://elstar.themenate.net/img/logo/logo-light-streamline.png" alt="" />
            </nav>
            <center>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>                
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg>                
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>                
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>                
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"></path></svg>                
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </center>
        </div>

        <div className="left l1">
        <nav>
            <img src="https://elstar.themenate.net/img/logo/logo-light-full.png" alt="" />
        </nav>

        {/* <!-- apps --> */}

        <div className="a1">
        {/* style="margin-left: 10px;margin-bottom: 10px;margin-top:10px;font-size: 17px;color: #5b6471;" */}
            <p style={{marginLeft:'10px', marginBottom:'10px', marginTop:'10px', fontSize:'17px', color:'#5b6471'}} >APPS</p>
            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <p>Project</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Dashboard</p>
                </div>
                <div className="aaa">
                    <p>Project List</p>
                </div>
                <div className="aaa">
                    <p>Scrum Board</p>
                </div>
                <div className="aaa">
                    <p>Issue</p>
                </div>
            </div>

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <p>CRM</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Dashboard</p>
                </div>
                <div className="aaa">
                    <p>Calender</p>
                </div>
                <div className="aaa">
                    <p>Customers</p>
                </div>
                <div className="aaa">
                    <p>Customer Details</p>
                </div>
                <div className="aaa">
                    <p>Mail</p>
                </div>
            </div>

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                <p>Sales</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Dashboard</p>
                </div>
                <div className="aaa">
                    <p>Product List</p>
                </div>
                <div className="aaa">
                    <p>Product Edit</p>
                </div>
                <div className="aaa">
                    <p>New Product</p>
                </div>
                <div className="aaa">
                    <p>Order List</p>
                </div>
                <div className="aaa">
                    <p>Order Details</p>
                </div>
            </div>

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p>Crypto</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Dashboard</p>
                </div>
                <div className="aaa">
                    <p>Portfolio</p>
                </div>
                <div className="aaa">
                    <p>Market</p>
                </div>
                <div className="aaa">
                    <p>Wellets</p>
                </div>
            </div>

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                <p>Knowledge Base</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Help Center</p>
                </div>
                <div className="aaa">
                    <p>Article</p>
                </div>
                <div className="aaa">
                    <p>Manage Article</p>
                </div>
                <div className="aaa">
                    <p>Edit Article</p>
                </div>
            </div>

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p>Account</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Settings</p>
                </div>
                <div className="aaa">
                    <p>invoice</p>
                </div>
                <div className="aaa">
                    <p>Activity Log</p>
                </div>
                <div className="aaa">
                    <p>KYC form</p>
                </div>
            </div>
        </div>

        {/* <!-- ui --> */}

        <div className="a1">
            <p style={{marginLeft:'10px', marginBottom:'10px', marginTop:'10px', fontSize:'17px', color:'#5b6471'}} >UI COMPONENENTS</p>
            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>                
                <p>Common</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Dashboard</p>
                </div>
                <div className="aaa">
                    <p>Project List</p>
                </div>
                <div className="aaa">
                    <p>Scrum Board</p>
                </div>
                <div className="aaa">
                    <p>Issue</p>
                </div>
            </div>

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                <p>Feedback</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Common</p>
                </div>
                <div className="aaa">
                    <p>Calender</p>
                </div>
                <div className="aaa">
                    <p>Customers</p>
                </div>
                <div className="aaa">
                    <p>Customer Details</p>
                </div>
                <div className="aaa">
                    <p>Mail</p>
                </div>
            </div>

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <p>Data Display</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Dashboard</p>
                </div>
                <div className="aaa">
                    <p>Product List</p>
                </div>
                <div className="aaa">
                    <p>Product Edit</p>
                </div>
                <div className="aaa">
                    <p>New Product</p>
                </div>
                <div className="aaa">
                    <p>Order List</p>
                </div>
                <div className="aaa">
                    <p>Order Details</p>
                </div>
            </div>

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <p>Forms</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Dashboard</p>
                </div>
                <div className="aaa">
                    <p>Portfolio</p>
                </div>
                <div className="aaa">
                    <p>Market</p>
                </div>
                <div className="aaa">
                    <p>Wellets</p>
                </div>
            </div>

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                <p>Navigation</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Help Center</p>
                </div>
                <div className="aaa">
                    <p>Article</p>
                </div>
                <div className="aaa">
                    <p>Manage Article</p>
                </div>
                <div className="aaa">
                    <p>Edit Article</p>
                </div>
            </div>

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                <p>Graph</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Settings</p>
                </div>
                <div className="aaa">
                    <p>invoice</p>
                </div>
                <div className="aaa">
                    <p>Activity Log</p>
                </div>
                <div className="aaa">
                    <p>KYC form</p>
                </div>
            </div>
        </div>

        {/* <!-- pages --> */}
        
        <div className="a1">
            <p style={{marginLeft:'10px', marginBottom:'10px', marginTop:'10px', fontSize:'17px', color:'#5b6471'}} >PAGES</p>
            <div className="b">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path></svg>                
                <p>Welcome</p>
                {/* <!-- <i className="fa-solid fa-angle-down"></i> --> */}
            </div>

            <div className="b">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                <p>Access Denied</p>
                {/* <!-- <i className="fa-solid fa-angle-down"></i> --> */}
            </div>
        </div>

        {/* <!-- authentication --> */}

        <div className="a1">
            <p style={{marginLeft:'10px', marginBottom:'10px', marginTop:'10px', fontSize:'17px', color: '#5b6471'}} >AUTHENTICATION</p>
            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>                
                <p onClick={handleSignInClick} style={{ cursor: 'pointer', textDecoration: 'underline' }} >Sign In</p>
                {/* <i className="fa-solid fa-angle-down i"></i> */}
            </div>

            {/* <div className="aa">
                <div className="aaa">
                    <p>Simple</p>
                </div>
                <div className="aaa">
                    <p>Side</p>
                </div>
                <div className="aaa">
                    <p>Cover</p>
                </div>
            </div> */}

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                <p>Sign Up</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Simple</p>
                </div>
                <div className="aaa">
                    <p>Side</p>
                </div>
                <div className="aaa">
                    <p>Cover</p>
                </div>
            </div>

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                <p>Forgot Password</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Simple</p>
                </div>
                <div className="aaa">
                    <p>Side</p>
                </div>
                <div className="aaa">
                    <p>Cover</p>
                </div>
            </div>

            <div className="a">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                <p>Reset Password</p>
                <i className="fa-solid fa-angle-down i"></i>
            </div>
            <div className="aa">
                <div className="aaa">
                    <p>Simple</p>
                </div>
                <div className="aaa">
                    <p>Side</p>
                </div>
                <div className="aaa">
                    <p>Cover</p>
                </div>
            </div>
        </div>

        {/* <!-- GUIDE --> */}

        <div className="a1">
            <p style={{marginLeft:'10px', marginBottom:'10px', marginTop:'10px', fontSize:'17px', color:'#5b6471'}} >GUIDE</p>
            <div className="b">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>                
                <p>Documentation</p>
                {/* <!-- <i className="fa-solid fa-angle-down"></i> --> */}
            </div>

            <div className="b">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                <p>Shared Component</p>
                {/* <!-- <i className="fa-solid fa-angle-down"></i> --> */}
            </div>

            <div className="b">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"></path></svg>                
                <p>Utilities</p>
                {/* <!-- <i className="fa-solid fa-angle-down"></i> --> */}
            </div>

            <div className="b">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                <p>Changelog</p>
                {/* <!-- <i className="fa-solid fa-angle-down"></i> --> */}
            </div>
        </div>

        </div>


        <div className="right">
        <nav>
            <div className="a">
                <i id="bar" className="fa-solid fa-bars"></i>
                <i id="search" className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="b">
                <img src="https://elstar.themenate.net/img/countries/us.png" alt="" />
                <i id="bell" className="fa-regular fa-bell"></i>
                <i id="gear" className="fa-solid fa-gear"></i>
                <img src="https://elstar.themenate.net/img/avatars/thumb-1.jpg" alt="" />
                <div className="bb">
                    <p>Admin</p>
                    <p>Carolyn Perkins</p>
                </div>
            </div>
        </nav>






        <div className="b1">
            <h1>Sales Overview</h1>
            
            <p>View your current sales & summary
  
            </p>
  
           <div className="box4">
              <input type="text" placeholder="September 27,2023~Dec 27,2023" />
              <div className="con">
                  Filter
              </div>
           </div>
          </div>
          
          <div className="box3">
              <div>
                  <h4>Revenue</h4>
                  <br />
                  <h1>$21,827.13</h1>
                  <p>vs. 3 months prior to <b>20 Jan</b></p>
                  <button className="btn1"><i className="fa-solid fa-arrow-up" style={{color:'#0ada07'}}></i><b>11.4%</b></button>
              </div>
              <div>
                  <h4>Orders</h4>
                  <br />
                  <h1>1,758</h1>
                  <p>vs. 3 months prior to <b>20 Jan</b></p>
                  <button className="btn1"><i className="fa-solid fa-arrow-up" style={{color: '#0ada07'}} ></i><b>11.4%</b></button>
  
              </div>
              <div>
                  <h4>Purchases</h4>
                  <br />
                  <h1>$7,249.31</h1>
                  <p>vs. 3 months prior to <b>20 Jan</b></p>
                  <button className="btn1"><i className="fa-solid fa-arrow-up" style={{color: '#0ada07'}}></i><b>11.4%</b></button>
  
              </div>
          </div>


          <div className="sec2">
                <h1>Line Chart <span style={{marginLeft:'330px'}}>Line Chart</span><span style={{marginLeft: '330px'}} >Pie Chart</span></h1>
                <div id="chart"></div>
                <div id="chart1"></div>
                <div id='lineChart'></div>
          </div>
  
          
          <div className="main2">
          <div className="table" >
                  <h1>Latest Orders</h1>
                  <button>View Orders</button>
              <table className="tb1" cellspacing="0">
                  <tr>
                      <th>ORDER</th>
                      <th>STATUS</th>
                      <th>DATE</th>
                      <th>CUSTOMER</th>
                      <th>PROFILE PROGRESS</th>
                  </tr>
                  <tr>
                      <td style={{fontWeight: 'bold'}}>#95954</td>
                      <td style={{fontWeight:'bold', color:'#50be83'}} >paid</td>
                      <td>10/08/2022</td>
                      <td>Ron Vargas</td>
                      <td>$168.00</td>
                  </tr>
                  <tr>
                      <td style={{fontWeight: 'bold'}}>#95423</td>
                      <td style={{fontWeight:'bold', color:'#50be83'}}>paid</td>
                      <td>30/07/2022</td>
                      <td>Carolyn Hanso</td>
                      <td>$523.00</td>
                  </tr>
                  <tr>
                      <td style={{fontWeight: 'bold'}}>#92903</td>
                      <td style={{color: '#f6a10b', fontWeight: 'bold' ,fontWeight:'bold'}} >pending</td>
                      <td>18/07/2022</td>
                      <td>Gabriella May</td>
                      <td>$81.00</td>
                  </tr>
                  <tr>
                      <td style={{fontWeight:'bold'}}>#92627</td>
                      <td style={{color: '#f6a10b', fontWeight: 'bold' ,fontWeight:'bold'}}>Failed</td>
                      <td>09/07/2022</td>
                      <td>Tara Fletcher</td>
                      <td>$279.00</td>
                  </tr>
                  <tr>
                      <td style={{fontWeight: 'bold'}}>#89332</td>
                      <td style={{color: '#50be83', fontWeight:'bold'}}>paid</td>
                      <td>02/06/2022</td>
                      <td>Eileen Horton</td>
                      <td>$597.00</td>
                  </tr>
                  <tr>
                      <td style={{fontWeight: 'bold'}}>#86497</td>
                      <td style={{color: '#f06761', fontWeight: 'bold'}} >Failed</td>
                      <td>13/03/2022</td>
                      <td>Lloyd Obrien</td>
                      <td>$189.00</td>
                  </tr>
                  <tr>
                      <td style={{fontWeight: 'bold'}}>#86212</td>
                      <td style={{color:'#50be83', fontWeight:'bold'}}>paid</td>
                      <td>09/083/2022</td>
                      <td>Lloyd Obrien</td>
                      <td>$672.00</td>
                  </tr>
              </table>
  
  
          </div>
  
  
          <div className="table2">
              <h1>Top Selling</h1>
              <button>View Products</button>
          <table className="tb" cellspacing="0">
              <tr>
                  <th>PRODUCT</th>
                  <th>SOLD</th>
              
              </tr>
              <tr>
                  <td style={{fontWeight: 'bold'}}><img src="public/1.jpg" alt="" /><b>Luminaire Giotto Headphones</b></td>
                  <td style={{fontWeight: 'bold'}}>252</td>
                  
               
              </tr>
              <tr>
                  <td style={{fontWeight: 'bold'}}><img src="public/3.jpg" alt="" />Black Sneaker</td>
                  <td style={{fontWeight: 'bold'}}>186</td>
                 
              
              </tr>
              <tr>
                  <td style={{fontWeight: 'bold'}}><img src="public/4.jpg" alt="" />Gray Hoodies</td>
                  <td style={{fontWeight: 'bold'}}>166</td>
                  
                
              </tr>
              <tr>
                  <td style={{fontWeight: 'bold'}}><img src="public/5.jpg" alt="" />Blue Backpack</td>
                  <td style={{fontWeight: 'bold'}}>93</td>
                  
                 
              </tr>
              <tr>
                  <td style={{fontWeight: 'bold'}}><img src="public/7.jpg" alt="" />Strip Analog Watch</td>
                  <td style={{fontWeight: 'bold'}}>81</td>         
              
              </tr>
             
          </table>
          </div>
  
      </div>
  
  
  
  
      <div className="footer">
        <p style={{width:'850px'}}>Copyright © 2023 Elstar All rights reserved.</p>
        <p style={{width: '300px', textAlign:'right'}} >Term & Conditions | Privacy & Policy</p>
      </div> <br /><br /><br />
        </div> 

    </div>

  )
}
