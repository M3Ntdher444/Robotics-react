
import headerImg from "../Img/banner-img.png";

export default function Header() {
  return (
    <header className=" w-100  text-white">
      <div className="container text-transform d-flex align-items-conter justify-content-between">
        <div className="header-content w-50">
          <h1>everyone wants the innovation through robotics</h1>
          <button className="text-transform text-white"> viwe details</button>
        </div>
        <div className="header-img w-50">
          <img src={headerImg} alt="" />
        </div>
      </div>
    </header>
  );
}
