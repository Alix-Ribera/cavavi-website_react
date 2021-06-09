import "./App.css";
import Noticies from "./Noticies";
import Blog from "./Blog";
import Productes from "./Productes";
import Tallers from "./Tallers";
import Contacte from "./Contacte";
import Nosaltres from "./Nosaltres";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import mathildelangevinIZB7W07TvxQunsplash from "./Photos/mathilde-langevin-IZB7W07TvxQ-unsplash.jpg";

export default function App() {
  return (
    <div className="Container">
      <div className="Navbar">
        <ol>
          <li>
            <link to="/Noticies"></link>
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
      <div className="Main">
        <div className="col">
          <h1>
            El celler <br />
            CavaVi
          </h1>
          <a
            className="locationLink"
            href="https://www.google.es/maps/place/Carrer+del+Carme,+76,+08380+Malgrat+de+Mar,+Barcelona/@41.6449617,2.7373193,17z/data=!3m1!4b1!4m5!3m4!1s0x12bb3e7e40f6cfb5:0xe565ac40ba895bb3!8m2!3d41.6449617!4d2.739508"
          >
            Carrer del Carme 76, Malgrat de Mar
          </a>
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
          <div className="col">
            <div className="MainImg">
              <img src={mathildelangevinIZB7W07TvxQunsplash} alt="null" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
