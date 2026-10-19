import {useEffect,useState} from 'react'

function FilterOptions(){

      const [categories, setCategories] = useState([]);

    useEffect(()=>{

        fetchCategories();

    },[]);

  const fetchCategories = () =>{
   const api = "https://dummyjson.com/products/categories";
        fetch(api)
        .then((res)=>res.json())
        .then((data)=>setCategories(data));

  }
    return (<>
    <div className="filter-sec py-3">
   <div className="filter-title  my-3">
     <h6 >Category</h6>
   </div>
  <ul className="list-group list-group-flush ">
    {categories.map((cat,index)=>{
        return (<>
             <li  className="list-group-item list-group-item-action font-weight-light text-capitalize" key={index}> {cat?.name}</li>
        </>)
    })}


    </ul>
    </div>
    
    </>)

}

export default FilterOptions