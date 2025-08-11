import { Layout } from "../components/Layout"

const Login = () => {
  return (
    <Layout>
      <h1>Inicia Sesion</h1>

      <section>
        <h2> Hola, bienvenido de nuevo</h2>
        <form>
          <div>
            <label>Correo electronico</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Contraseña</label>
            <input type="password" name="contraseña" />
          </div>
          <button>Ingresar</button>
        </form>
      </section>
    </Layout>
  )
}

export { Login }