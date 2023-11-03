import React from 'react'
import { useEffect, useState } from 'react'
import productData from '../Data/Productdata.json';
import { useNavigate } from 'react-router-dom';
import Filter from '../Filter/Filter';

function Productlist({ filteredProducts }) {
    console.log("Productlist re-rendered with filteredProducts:", filteredProducts);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
  const handleReadMore = (product) => {
    navigate(`/Productlist/Detail/${product.id}`);
  };

    useEffect(() => {
        // The data is already loaded via import, no need to use fetch
        console.log(productData);
        setData(productData.products); // Assuming 'products' is an array in your JSON
        setIsLoading(false);
    }, [filteredProducts]);
    
  return (
    <>
        
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {isLoading
        ? <p>Loading...</p>
        : filteredProducts.map((product) => (
            <div key={product.id} className="rounded-md border">
              <img
            src={product.thumbnail}
            alt={product.title}
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"/>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">{product.title}</h1>
            <p className="mt-3 text-sm text-gray-600 break-words">
              {/* {product.description} */}
            </p>
            
            <button
              type="button"
              className="text-blue-500"
              onClick={() => handleReadMore(product)}
              >
              Read More
            </button>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                {product.brand}
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                {product.rating}
              </span>
             
            </div>
            <div className="mt-5 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Rating : </span>
              <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                {product.rating}
              </span>
              
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Price : ${product.price} </span>
              
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
    
      </>
  )
}

export default Productlist;
