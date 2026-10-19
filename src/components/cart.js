
import {useSelector,useDispatch} from "react-redux";
import {removeFromCart,clearCart} from '../rtk/slices/cart-slice'
function Cart(){

    const cartList = useSelector((state)=> state.cart);
    const dispatch = useDispatch();
    const totalPrice = cartList.reduce((acc,product)=>{
       return  acc += product.price*product.qty

    },0)
    console.log(cartList);
    return (
      <>
        <div className="container">
            <h4>welcome to  cart </h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((cartItem) => {
                return (
                  <>
                    <tr key={cartItem.id}>
                      <th scope="row">{cartItem.id}</th>
                      <td>
                        <img style={{height:50}} alt="cart-img" src=
                        {cartItem.thumbnail
                          ? cartItem.thumbnail
                          : cartItem.images[0]}/>
                      </td>
                      <td>{cartItem.title}</td>
                      <td>{cartItem.qty}</td>
                      <td>{cartItem.price}EGP</td>
                      <td>
                        {" "}
                        <span
                          className="text-danger"
                          onClick={() => dispatch(removeFromCart(cartItem))}
                        >
                          <i className="fas  fa-trash text-danger"></i>
                        </span>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>

          <div className="d-flex my-4 justify-content-between">
            <h4>Cart Total Price :<b className="text-primary">{totalPrice.toFixed(2)} EGP</b></h4>
            <button className="btn btn-danger" onClick={()=>dispatch(clearCart())}>clear all </button>
          </div>
        </div>
      </>
    );

}
export default Cart