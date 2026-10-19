import logo from "./assets/Logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import {removeFromCart} from '../rtk/slices/cart-slice';
import {setSearchTerm}from '../rtk/slices/search-slice';
function Header() {
  const cartList = useSelector((state) => state.cart);
   const searchTerm = useSelector((state) => state.search);
  const dispatch = useDispatch();

  console.log(cartList);
  return (
    <>
      <header id="header" className="site-header sticky-top d-flex flex-column">
        <div className="header-top py-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md">
                <Link className="navbar-brand" to="/">
                  <img src={logo} />
                </Link>
              </div>
              <div className="col-12 col-md-6">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    id="searchKey"
                    placeholder="Search for Product"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e)=>dispatch(setSearchTerm(e.target.value))}
                  />
                </form>
              </div>
              <div className="col-12 col-md">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
                  <li className="nav-item  d-flex align-items-center px-2 ">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>
                    <Link className="nav-link px-2" to="/watchList">
                      watchlist
                    </Link>
                  </li>
                  <li className="nav-item  d-flex align-items-center px-2 ">
                    <span>
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                    <button
                      type="button"
                      className="nav-link px-2 border-0 bg-transparent text-white"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      cart <span className="badge bg-light text-dark">{cartList.length}</span>
                    </button>
                    <div
                      className="dropdown-menu p-2"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <ul className="list-group list-group-flush">
                        {cartList.map((product) => {
                          return (
                            <>
                              <li
                                key={product.id}
                                style={{justifyContent:' space-between'}}
                                className="list-group-item d-flex p-1  font-small text-capitalize mb-1 bg-transparent"
                              >
                                <span className="text-center w-25">
                                  <img
                                    className="card-img"
                                    alt="cart item"
                                    style={{height:50}}
                                    src={
                                      product.thumbnail
                                        ? product.thumbnail
                                        : product.images[0]
                                    }
                                  />
                                </span>

                                <div className="d-flex flex-column px-2">
                                  {product.title}
                                </div>
                                <span className="text-danger" onClick={()=>dispatch(removeFromCart(product))}>
                                  <i className="fas  fa-trash text-danger"></i>
                                </span>
                              </li>
                            </>
                          );
                        })}
                      </ul>

                      {cartList.length > 0 && (
                       <p>
                           <Link to="/cart" className="checkout-link text-primary">
                                  checkout
                                </Link>
                       </p>
                      )}

                      {cartList.length == 0 && (
                        <p className="lead text-center text-primary font-small px-1 mb-0">
                          No Product Added
                        </p>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg header-bottom py-0">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
