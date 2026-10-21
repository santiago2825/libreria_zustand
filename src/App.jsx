import Carrito from "./components/Carrito"
import Encabezado from "./components/Encabezado"
import ListaProductos from "./components/ListaProductos"
import "./App.css"

const App = () => {
  return (
    <div className="storefront">
      <Encabezado/>
      <main className="store-layout">
        <section className="catalog-section">
          <div className="catalog-intro">
            <p className="eyebrow"><span className="eyebrow-mark" /> OBJETOS PARA EL DÍA A DÍA</p>
            <h2>Vestirse bien,<br /><em>sentirse mejor.</em></h2>
            <p className="intro-copy">Piezas esenciales, elegidas con intención.</p>
          </div>
          <ListaProductos/>
        </section>
        <aside className="cart-column" aria-label="Resumen de la bolsa">
          <Carrito/>
        </aside>
      </main>
      <footer className="store-footer"><span>HECHO PARA DURAR</span><span>TIENDA LOCAL · 2026</span></footer>
    </div>
  )
}

export default App
