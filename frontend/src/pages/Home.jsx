import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

function Home() {
  const [produits, setProduits] = useState([])
  useEffect(async () => {
    const response = await fetch("http://localhost:5000/produits", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    })
    response.json().then(data => {
      setProduits(data)
    })
  }, [])
  return (
    <>
      <div className="container ">
        <div className="row">
          {/* Blog entries */}
          <div className="col-lg-12">
            {/* Nested row for non-featured blog posts */}
            <div className="row">
              {produits.map(produit => <div className="col-lg-3 col-md-4 col-sm-6" key={produit._id}>
                <Post date={produit.updatedAt} title={produit.name} quantity={produit.quantity} />
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
