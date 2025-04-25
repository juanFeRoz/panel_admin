import './BarraNavegacion.css';

export default function BarraNavegacion() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Panel Admin
        </a>  
        <i className="fas fa-user"></i>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/clientes">Clientes</a>
          </li>
          <li>
            <a href="/proveedor">Proveedor</a>
          </li>
          <li>
            <a href="/usuarios">Usuarios</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/logout" className="logout-icon">
          Logout
          <i className="fas fa-user"></i>
        </a>
      </div>
    </nav>
  );
}
