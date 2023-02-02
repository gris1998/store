import './navbar.css'
import pulvirenti from'../../assets/pulvirenti.png'
import carrito from '../../assets/carrito.png'
export function 
Navbar() {
  return (
    <div className="menu">
      <header className="header">
        <nav className="nav">
          <a href="" className="logo"><img src={pulvirenti} alt="" /></a>
          <ul className="lista">
            <li className="item"><a href="#" className="link">INICIO</a></li>
            <li className="item"><a href="#" className="link">DIRECCION</a></li>
            <li className="item"><a href="#" className="link">CONTACTANOS</a></li>
            <li className="item"><img src={carrito} alt="" /></li>
          </ul>
        </nav>
        <div className='bg'></div>
      </header>
    </div>
  )
}