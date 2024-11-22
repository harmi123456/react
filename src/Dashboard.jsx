import React from 'react'

export default function Dashboard({ user}) {


  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h1 className="dashboard-title">Welcome to the Dashboard</h1>
        <div className="dashboard-profile">
          <p className="dashboard-username">Hello, {user}!</p>
        </div>
      </div>
    </div>
  )
}
