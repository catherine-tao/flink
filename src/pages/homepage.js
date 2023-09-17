import {Link} from 'react-router-dom'
import Logo from "../assets/Logo.svg"
import Flowers from "../assets/Flowers.png"

function App() {
  return (
      <>
        <div className="d-flex justify-content-center" style={{ marginTop: "10%"}}>
          <img className="w-25" src={Logo}/>
        </div>
        <p className="d-flex justify-content-center mt-1">Your unique AI landing page generator.</p>
        <div className="d-flex justify-content-center mt-5">
          <Link to="/login">
            <button className="category-button me-5">Login</button>
          </Link>
          <Link to="/signup">
            <button className="category-button">Sign Up</button>
          </Link>
        </div>
        <img className="flower-image-panel" style={{left: "-5%"}} src={Flowers}/>
        <img className="flower-image-panel" style={{marginLeft: "50%"}} src={Flowers}/>
        <div>
      </div>
      </> 
  );
}

export default App;
