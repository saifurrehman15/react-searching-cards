function Cards({elem,images,getResult}) {
  return (
    <div className="card" key={elem.id}>
      <div className="left">
        <img src={images[getResult.indexOf(elem)] || elem.image} alt="shoe" />
      </div>
      <div className="right">
        <div className="product-info">
          <div className="product-name">
            <div>
              <h1>Airmax</h1>
            </div>
            <div className="icons">
              <i className="fa fa-search" style={{ color: "white" }}></i>
              <i className="fa fa-user" style={{ color: "white" }}></i>
              <i className="fa fa-shopping-cart" style={{ color: "white" }}></i>
            </div>
          </div>
          <div className="details">
            <h3>
              {new Date().getMonth() + 1 < 8
                ? "SUMMER COLLECTION"
                : "WINTER COLLECTION"}
            </h3>
            <h2>{elem.title.slice(0, 15)}</h2>
            <h4>
              <span className="fa fa-dollar"></span>
              {elem.price}
            </h4>
            <h4 className="dis">
              <span className="fa fa-dollar"></span>
              {(elem.price + 50).toFixed(2)}
            </h4>
          </div>
          <ul>
            <li>SIZE</li>
            <li className="bg">7</li>
            <li className="bg">8</li>
            <li className="bg">9</li>
            <li className="bg">10</li>
            <li className="bg">11</li>
          </ul>
          <ul>
            <li>COLOR</li>
            <li className="yellow"></li>
            <li className="black"></li>
            <li className="blue"></li>
          </ul>
          <div className="footer">
            <span className="foot-icon flex gap-3">
              <i className="fa fa-shopping-bag"></i>Buy Now
            </span>
            <span className="foot-icon">
              <i className="fa fa-shopping-cart"></i>Add to Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
