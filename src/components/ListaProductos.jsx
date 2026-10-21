import { Products } from "../data/productos";
import { useCarritoStore } from "../store/useCarritoStore";

function ListaProductos(){
    const agregarProducto = useCarritoStore((state) => state.agregarProducto)

    return(
        <section className="product-list" aria-labelledby="products-heading">
            <div className="list-heading">
                <h2 id="products-heading">La colección</h2>
                <span>{String(Products.length).padStart(2, "0")} PIEZAS</span>
            </div>
            <div className="product-grid">
                {Products.map((producto)=>(
                <article className={`product-card product-card-${producto.id}`} key={producto.id}>
                    <div className="product-art" aria-hidden="true">
                        <span className="product-index">EDICIÓN / {String(producto.id).padStart(2, "0")}</span>
                        <span className="product-art-name">{producto.nombre}</span>
                        <span className="product-art-mark">T.</span>
                    </div>
                    <div className="product-details">
                        <div>
                            <h3>{producto.nombre}</h3>
                            <p className="product-price">${producto.precio.toLocaleString("es-CO")}</p>
                        </div>
                        <button className="add-button" onClick={()=>agregarProducto(producto)} aria-label={`Agregar ${producto.nombre} a la bolsa`}>
                            <span aria-hidden="true">+</span>
                        </button>
                    </div>
                </article>
                ))}
            </div>
        </section>
    )
}
export default ListaProductos;