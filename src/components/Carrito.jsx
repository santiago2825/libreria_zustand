import { useCarritoStore } from "../store/useCarritoStore";
function Carrito(){
    const items =useCarritoStore((state)=>state.items)
    const eliminarProducto = useCarritoStore((state)=>state.eliminarProducto)
    const vaciarCarrito = useCarritoStore((state)=>state.vaciarCarrito)

    const total =items.reduce(
        (suma, item)=> suma + item.precio * item.cantidad, 0
    )
    if (items.length ===0){
        return(
            <section className="cart-panel">
                <div className="cart-heading">
                    <div>
                        <p className="eyebrow">TU SELECCIÓN</p>
                        <h2>La bolsa</h2>
                    </div>
                    <span className="cart-item-count">00</span>
                </div>
                <div className="empty-cart">
                    <span className="empty-bag-icon" aria-hidden="true">+</span>
                    <p>Tu bolsa está esperando<br />algo especial.</p>
                </div>
                <div className="cart-total">
                    <span>Total</span>
                    <strong>$0</strong>
                </div>
            </section>
        )
    }
    return(
        <section className="cart-panel">
            <div className="cart-heading">
                <div>
                    <p className="eyebrow">TU SELECCIÓN</p>
                    <h2>La bolsa</h2>
                </div>
                <span className="cart-item-count">{String(items.reduce((suma, item) => suma + item.cantidad, 0)).padStart(2, "0")}</span>
            </div>
            {items.map((item)=>(
                <div className="cart-line" key={item.id}>
                    <div className="cart-line-copy">
                        <p className="cart-product-name">{item.nombre}</p>
                        <p className="cart-product-meta">{item.cantidad} × ${item.precio.toLocaleString("es-CO")}</p>
                    </div>
                    <button className="remove-button" onClick={()=>eliminarProducto(item.id)} aria-label={`Quitar ${item.nombre} de la bolsa`}>×</button>
                </div>
            ))}
            <div className="cart-total">
                <span>total</span>
                <strong>${total.toLocaleString("es-CO")}</strong>
            </div>
            <button className="clear-cart-button" onClick={vaciarCarrito}>Vaciar bolsa</button>
        </section>
    )
}
export default Carrito;