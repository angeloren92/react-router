import { Link, NavLink } from "react-router-dom";
import Logo from '../../public/LogoAnazon.png'

function AppHeader() {

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={Logo} alt="Logo Anazon" className="img-fluid mx-5"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item">
                <NavLink className="nav-link" to='/'>HomePage</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/Prodotti'>Prodotti</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to='/ChiSiamo'>Chi Siamo</NavLink>
              </li>
            </ul>
            <form className="d-flex mx-5" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader