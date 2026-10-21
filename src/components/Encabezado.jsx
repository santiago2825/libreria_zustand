import { useCarritoStore } from "../store/useCarritoStore";

function Encabezado(){
    const items = useCarritoStore((state)=>state.items)
    const totalUnidades = items.reduce((suma, item)=>suma + item.cantidad, 0)

    return(
        <header className="site-header">
            <div className="header-inner">
                <a className="brand-mark" href="#inicio" aria-label="Tienda local, inicio">
                    <span className="brand-icon">T</span>
                    <span>tienda<span className="brand-period">.</span></span>
                </a>
                <div className="header-status">
                    <span className="status-label"><span className="status-dot" /> NUEVA SELECCIÓN</span>
                    <span className="header-bag"><span>Bolsa</span><span className="bag-count">{totalUnidades}</span></span>
                </div>
            </div>
        </header>
    )
}
export default Encabezado;