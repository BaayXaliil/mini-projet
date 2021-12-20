import React from 'react'
import { Link } from 'react-router-dom'

function Post({date, title, quantity}) {
  return (
    <div className="card mb-4">
      <a href="#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
      <div className="card-body text-center">
        <div className="small text-muted">{new Date(date).toLocaleDateString() }</div>
        <h2 className="card-title h4">{ title }</h2>
        <p className="card-text">Quantité: { quantity }</p>
        <Link className="btn btn-primary" to="/product">Read more →</Link>
      </div>
    </div>
  )
}

export default Post
