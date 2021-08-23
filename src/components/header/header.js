import './header.css';
import {Link} from 'react-router-dom';
function Header(){
    return(           
            <div className = "d-flex">
             <h3>
                 <a href ="#/">Section</a>
             </h3>
                <p>
                  <Link to="/vehicle">Vehicle</Link>
                </p>
                <p>
                  <Link to="/train">Train</Link>
                </p>
                <p>
                    <Link to= "/plane">Plane</Link>
                </p>
            </div>
     )
}
export default Header;