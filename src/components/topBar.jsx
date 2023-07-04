import "../styles/topBar.css";

export default function TopBar() {
    return (
        <>
            <div>
				<a href="/">Dansalma</a>
			</div>
			<nav>
                <ul className="navBar" >
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Sesiones</a></li>
                    <li><a href="/">Sobre Mi</a></li>
                    <li><a href="/">Media</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </nav>
			<div>
				<button>Hola</button>
			</div>
        </>
    );
}