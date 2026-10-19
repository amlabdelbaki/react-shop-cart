
import { useDispatch } from 'react-redux';
import {addToCart} from '../rtk/slices/cart-slice'
function Product(props){

    const product = props.product;

    const dispatch = useDispatch();
 

    return (
      <>
        <div className=" product-card col-sm-6 col-md-3 d-flex flex-column mb-3 ">
          <div className="item-img p-2 text-center">
            <img
              src={product.images[0]}
              className="card-img"
              alt="product-picture"
            />
          </div>
          <div className="item-content p-2">
            <p className="item-desc">{product.description}</p>
            <div className="item-price d-flex justify-content-between ">
              <span>
                <span className="currency px-1">EGB</span> <strong>{product.price}</strong>
              </span>
              <span className="badge bg-light text-dark d-flex align-items-center">
                <i className="fa fa-star "></i>
                {product.rating}
                <span className="stock px-1">({product.stock})</span>
              </span>
         
          
            </div>
            <div className="">
                    <button className="btn btn-primary mx-1 cart-btn" onClick={()=>dispatch(addToCart(product))}> add to cart</button>
            </div>
          </div>
        </div>
      </>
    );

}
export default Product;