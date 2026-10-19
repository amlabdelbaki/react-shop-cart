import FilterOptions from './filterOptions';
import ProductList from './productList';

function  Home(){

    return (
      <>
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
                <FilterOptions />
              </div>
              <div className="col-12 col-md-9">
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      </>
    );


}
export default Home;