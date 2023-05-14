import serviceImage from "../Img/P 2.jpg";
import serviceImg from "../Img/P 1.jpg";
export default function Services() {
  return (
    <section>
      <div className="services w-100 ">
        <div className="container d-flex align-items-conter justify-content-conter">
          <div className="service-img w-50 ">
            <img src={serviceImage} alt="" />
          </div>
          <div className="service-contnet w-50">
            <h1>Globally Connected By Large Network</h1>
            <h5>We Are here to listen from you deliver exellence</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              autem quisquam odio adipisci dolor ad veniam fuga? Ipsum doloribus
              ab, vel inventore perspiciatis est, corporis illum blanditiis ipsa
              similique aut?
            </p>
            <button>Get Details</button>
          </div>
        </div>
        <div className="container d-flex align-items-conter justify-content-conter">
          <div className="service-contnet w-50">
            <h1>Globally Connected By Large Network</h1>
            <h5>We Are here to listen from you deliver exellence</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              autem quisquam odio adipisci dolor ad veniam fuga? Ipsum doloribus
              ab, vel inventore perspiciatis est, corporis illum blanditiis ipsa
              similique aut?
            </p>
            <button>Get Details</button>
          </div>
          <div className="service-img w-50 ">
            <img src={serviceImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
