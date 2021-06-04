import "./App.css";
import Noticies from "./Noticies";
import Blog from "./Blog";
import Productes from "./Productes";
import Tallers from "./Tallers";
import Contacte from "./Contacte";
import Nosaltres from "./Nosaltres";
import Footer from "./Footer";
import noun_Location_1755669 from "./Icon/noun_Location_1755669.svg";
import mathildelangevinIZB7W07TvxQunsplash from "./Photos/mathilde-langevin-IZB7W07TvxQ-unsplash.jpg";

export default function App() {
  return (
    <div className="Container">
      <div className="row">
        <div className="Navbar">
          <ol>
            <li>
              <Noticies />
            </li>
            <li>
              <Blog />
            </li>
            <li>
              <Productes />
            </li>
            <li>
              <Tallers />
            </li>
            <li>
              <Contacte />
            </li>
            <li>
              <Nosaltres />
            </li>
          </ol>
        </div>
      </div>
      <div className="Main">
        <div className="row">
          <div className="col">
            <h1>
              El celler <br />
              Cavavi
            </h1>
            <div className="Adress">
              <img
                className="LocationIcon"
                src={noun_Location_1755669}
                alt="null"
              />
              <a href="#" className="StreetLink">
                Carrer del Carme 76, Malgrat de Mar
              </a>
            </div>
            <p className="Timetables">
              Hi som de dilluns a dissabte <br />
              Matí: 09:30 - 13:30 <br />
              Tarda: 17:30 - 20:00 <br />
              Diumenges i festius: tancat
            </p>
            <div className="ShopButton">
              <button type="button" className="btn btn-primary">
                Botiga online
              </button>
            </div>
          </div>
          <div className="col MainImg">
            <img src={mathildelangevinIZB7W07TvxQunsplash} alt="null" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
