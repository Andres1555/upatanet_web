import "./App.css"
import logo from './assets/logo-min-row.svg';
import people from './assets/people-row.svg';
import group from './assets/group-people.svg';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleInicio=()=>{
         navigate('/HomeJornadas');
    };

    const handleHome=()=>{
         navigate('/');
    };

  return (
    <div className="home-container">
        
        <nav id="header-home">
            <img src={logo} alt="logo" onClick={handleHome} />
            <ul>
                <li><a id="button-register" onClick={handleInicio}>REGISTRARSE</a></li>
                <li><a id="button-login" onClick={handleInicio}>INICIAR SESIÓN</a></li>
            </ul>
        </nav>

        <section>
            <div className="landscape-container">  
                <p id="introduction-home">
                    <h1>¿Deseas hacer llegar tu ayuda a las comunidades del Amazonas?</h1>
                    Si perteneces a un centro médico y realizan jornadas de vacunación, chequeos y demás, permite que las comunicades aborígenes se enteren.
                </p>
                <img id="introduction-img-home" src={group} alt="Ilustración de Cogni-AI" />
            </div>
        </section>

        <section>
            <div className="landscape-container">  
                 <img id="introduction-img-home" src={people} alt="Ilustración de Cogni-AI" />
                <p id="introduction-home">
                    <h1>Upatanet, disminuyendo las brechas</h1>
                    Upatanet es un proyecto realizado con el fin de hacer llegar la información hacia los rincones más lejanos del Amazonas. Registra tu jornada y permite que las comunicades indígenas se enteren y mejore su calidad de vida.                
                </p>
            </div>
        </section>
    <div id="space"></div>
    </div>

  )
}

export default Home