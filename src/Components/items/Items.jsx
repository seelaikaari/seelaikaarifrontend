import img1 from "../../assets/images/products/product-1.jpg";
import './items.css';
const Items = ({prdts}) => {
 
  return (
    <div className="col-lg-3 col-md-4 col-6 pb-3">
    <div className="product-card">
      <div className="product-img">
        <img
          src={prdts?.images[0]?.url}
          alt="Aila organza"
          loading="lazy"
          className="img-fluid"
        />
      </div>
      <div className="product-info">
        <h3 className="product-title popup_cart_title">{prdts.name}</h3>
        <div>
          <p className="truncate">{prdts.description}</p>
        </div>
        <div className="product-price">
        <span className="normal-price">{prdts.price}</span>
        <span className="offer-price">{prdts.price}</span>
       <span className="discount">50%</span>
        </div>
        <div className="product-size">
          {prdts?.size?.map((siz,index)=>{
          return  <span key={index}>{siz.name}</span>
          })}
        </div>
        <div className="product-colors">
          {prdts?.color?.map((clr,index)=>{
           return <span className="color-swatch" key={index} style={{backgroundColor:clr.name}}></span>
          })}
          
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
