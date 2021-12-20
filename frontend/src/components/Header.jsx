import { Link, NavLink } from "react-router-dom"

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Mini Projet</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link" activeClassName="active"  to="/home">Produits</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/users">Utilisateurs</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="py-5 bg-light border-bottom mb-4">
        <div className="container">
          <div className="text-center">
            <h1 className="fw-bolder">Bienvenue dans mon mini projet!</h1>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
