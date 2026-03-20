import { Link, NavLink } from "react-router-dom";

function AppHeader() {

  return (
    <>
      <h1>HOMEPAGE</h1>
      <ul>
        <li>
          <NavLink to='/'>HomePage</NavLink>
        </li>
        <li>
          <NavLink to='/Prodotti'>Prodotti</NavLink>
        </li>
        <li>
          <NavLink to='/ChiSiamo'>ChiSiamo</NavLink>
        </li>
      </ul>
    </>
  )
}

export default AppHeader