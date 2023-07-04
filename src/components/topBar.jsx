import "../styles/topBar.css";

export default function TopBar() {
    return (
        <>
            <div class="flex flex-grow basis-0">
				<a href="/">Dansalma</a>
			</div>
			<nav>
                <ul className="topBar" >
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Sesiones</a></li>
                    <li><a href="/">Sobre Mi</a></li>
                    <li><a href="/">Media</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </nav>
            <div class="flex flex-grow justify-end basis-0">
                <button class="cssbuttons-io-button"> Apuntate a una sesión
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2rem" height="1.5rem"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                    </div>
                </button>
            </div>
        </>
    );
}