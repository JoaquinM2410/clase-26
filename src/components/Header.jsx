const Header = () => {
  return (
    <header >
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="Imagen de logo" />
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/registrate">Registrate</a></li>
          <button>Cerrar sesion</button>
        </ul>
      </nav>
    </header>
  )
}

export { Header }