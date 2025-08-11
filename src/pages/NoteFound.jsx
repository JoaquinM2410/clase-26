import { Layout } from "../components/Layout"
import { Link } from "react-router-dom"

const NoteFound = () => {
  return (
    <Layout>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
      <Link to="/">Volver al inicio </Link>
    </Layout>
  )
}

export { NoteFound }