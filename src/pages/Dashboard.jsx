import { Layout } from "../components/Layout"

const Dashboard = () => {
  return (
    <Layout>
      <h1>Panel de Administración</h1>
      <h2>Agregar nuevo producto</h2>

      <form>
        <div>
          <label htmlFor="nombre">Nombre del producto:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ej: Camiseta Rosa"
          />
        </div>

        <div>
          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            id="precio"
            name="precio"
            placeholder="Ej: 1999.99"
          />
        </div>

        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Ej: Camiseta de algodón, color rosa pastel..."
            rows="4"
          />
        </div>

        <button>Guardar producto</button>
      </form>
    </Layout>
  )
}

export { Dashboard }