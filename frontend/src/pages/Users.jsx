import React, { useEffect, useState } from 'react'

function Users() {
  const [users, setusers] = useState([])
  useEffect(async () => {
    const response = await fetch("http://localhost:5000/users", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    })
    response.json().then(data => {
      setusers(data)
    })
  }, [])
  return (
    <div className='container min-height'>
      <h1>Liste des utiisateurs</h1>
      <div className="row">
        {users.map(user => <div className="card mb-4" key={user._id}>
          <div className="card-body text-center">
            <h2 className="card-title">Nom: {user.firstname} { user.lastname }</h2>
            <p className="card-text">Adresse: {user.address}</p>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Users
