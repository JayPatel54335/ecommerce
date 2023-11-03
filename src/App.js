import './App.css';
import Filter from './Components/Filter/Filter';
import productData from './Components/Data/Productdata.json';
import Detail from './Components/ProductList/Detail';
import Productlist from './Components/ProductList/Productlist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(productData.products);

  // Callback function to update the filtered products
  const handleFilterChange = (filteredProducts) => {
    console.log('Filter change detected', filteredProducts);
    setFilteredProducts(filteredProducts);
  };
  useEffect(() => {
    // Simulate loading data with a setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time to simulate your actual data loading

    // You can load actual data here and set isLoading to false when data is ready
  }, []);
  
  return (
    <Router>
      {/* Include the Filter component here, outside the Route */}
      <Filter products={productData.products} onFilterChange={handleFilterChange} />
      {isLoading ? ( // Render loading animation while loading
        <Loading />
        ) : (
          <Routes>
          <Route path="/" element={<Productlist filteredProducts={filteredProducts} />} />
          <Route path="/Productlist/Detail/:productId" element={<Detail />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;