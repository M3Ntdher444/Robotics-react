import imageLogo from "../Img/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="w-100 ">
      <div className="container d-flex align-items-conter justify-content-conter">
        <div className="nav-log w-50">
          <img src={imageLogo} alt="" />
        </div>
        <div className="nav-content w-50">
          <ul className=" text-transform d-flex align-items-conter justify-content-between">
            <li>
              {" "}
              <Link to="/" className="text-white">{"<home/>"}</Link>
            </li>
            <li>
              <Link to="/product" className="text-white">Products</Link>
            </li>
            <li>
              <Link to="/service" className="text-white">services</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
