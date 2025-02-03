import img1 from "../../assets/images/products/product-1.jpg";
import './items.css';
const Items = () => {
  return (
    <div className="col-lg-3 col-md-4 col-6 pb-3">
    <div className="product-card">
      <div className="product-img">
        <img
          src={img1}
          alt="Aila organza"
          loading="lazy"
          className="img-fluid"
        />
      </div>
      <div className="product-info">
        <h3 className="product-title popup_cart_title">Aila organza</h3>
        <div>
          <p>Blue Muslin Blend Bandhani Print Suit Set With Sequins</p>
        </div>
        <div className="product-price">
        <span class="normal-price">₹ 1,500.00</span>
        <span class="offer-price">₹ 1,200.00</span>
       <span class="discount">50%</span>
        </div>
        <div className="product-size">
          <span>s</span>
          <span>m</span>
          <span>l</span>
          <span>xl</span>
        </div>
        <div className="product-colors">
          <span className="color-swatch" style={{backgroundColor:"#ff0000"}}></span>
          <span className="color-swatch" style={{backgroundColor:"#00ff00"}}></span>
          <span className="color-swatch" style={{backgroundColor: "#0000ff"}}></span>
          <span className="color-swatch" style={{backgroundColor: "#ffff00"}}></span>
        </div>
        <div>
          <button className="add-to-cart-btn">view more</button>
        </div>
      </div>
    </div>
  </div>
  
  );
};
export default Items;
