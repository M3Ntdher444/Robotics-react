import roboticsImage from "../Img/p1.png";

export default function Products() {
  return (
    <section>
      <div className="products   text-alian">
        <h1>Featured Robotics Products to show</h1>
        <p>who are in extremely love with eco friendly system</p>
        <div className="container d-flex align-items-conter justify-content-conter justify-content-between">
          <div className="product">
            <div className="img">
              <img src={roboticsImage} alt="" />
            </div>
            <div className="product-contnet">
              <h5>The upper Eye</h5>
              <p>who are in extremely love <br /> with eco friendly system</p>
              <button className="text-transform ">view more</button>
            </div>
          </div>
          <div className="product">
            <div className="img">
              <img src={roboticsImage} alt="" />
            </div>
            <div className="product-contnet">
              <h5>The upper Eye</h5>
              <p>who are in extremely love <br /> with eco friendly system</p>
              <button className="text-transform ">view more</button>
            </div>
          </div>
          <div className="product">
            <div className="img">
              <img src={roboticsImage} alt="" />
            </div>
            <div className="product-contnet">
              <h5>The upper Eye</h5>
              <p>who are in extremely love <br /> with eco friendly system</p>
              <button className="text-transform ">view more</button>
            </div>
          </div>
          <div className="product">
            <div className="img">
              <img src={roboticsImage} alt="" />
            </div>
            <div className="product-contnet">
              <h5>The upper Eye</h5>
              <p>who are in extremely love <br /> with eco friendly system</p>
              <button className="text-transform ">view more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
