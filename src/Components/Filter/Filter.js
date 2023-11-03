import React, { useState, useEffect } from 'react';
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react';
import'./Filter.css';

function Filter({ products, onFilterChange }) {
    const [selectedFilters, setSelectedFilters] = useState({
        category: '',
        priceRange: {}, // Change this to an empty object
        
        brand: '',
    });

    // Define arrays to store unique filter options
    const categories = [...new Set(products.map((product) => product.category))];
    
    const priceRanges = [
        { min: 0, max: 0 },
        { min: 1, max: 50 },
        { min: 50, max: 500 },
        { min: 500, max: 100000 },
        // Add more price ranges as needed
    ];

    const brands = [...new Set(products.map((product) => product.brand))];

    // Function to apply filters and update the product list
    const applyFilters = () => {
        console.log('Selected Filters:', selectedFilters);
        const filteredProducts = products.filter((product) => {
            // Filter by category
            if (selectedFilters.category && product.category !== selectedFilters.category) {
                return false;
            }

            // Filter by price range
            if (
                selectedFilters.priceRange &&
                (product.price < selectedFilters.priceRange.min || product.price > selectedFilters.priceRange.max)
            ) {
                return false;
            }

            

            // Filter by brand
            if (selectedFilters.brand && product.brand !== selectedFilters.brand) {
                return false;
            }

            return true; // Include the product in the filtered list
        });
        console.log('Filtered Products:', filteredProducts);
        // Call the callback function to pass the filtered products to the parent component
        onFilterChange(filteredProducts);
    };

    // Use useEffect to ensure the filter dropdowns are updated when products change
    useEffect(() => {
        setSelectedFilters({
            category: '', // Empty string
            priceRange: {}, // Empty string
            
            brand: '', // Empty string
        });
    }, [products]);

    return (
        <div className="mx-auto w-full max-w-4xl">
            <div className="px-2 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="mb-4 text-2xl font-bold md:mb-0 animate-charcter">Ecommerce</p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 text-center">
                            <span className="text-sm font-semibold">Category</span>
                            
                            <select
                                value={selectedFilters.category}
                                onChange={(e) =>
                                    setSelectedFilters({
                                        ...selectedFilters,
                                        category: e.target.value,
                                    })
                                }
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex items-center justify-center text-sm font-semibold">
                            Price

                            <select
                                value={selectedFilters.priceRange}
                                onChange={(e) =>
                                    setSelectedFilters({
                                        ...selectedFilters,
                                        priceRange: JSON.parse(e.target.value), // Parse the string back to an object
                                    })
                                }
                            >
                                {priceRanges.map((priceRange) => (
                                    <option key={`${priceRange.min}-${priceRange.max}`} value={JSON.stringify(priceRange)}>
                                        ${priceRange.min} - ${priceRange.max}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex items-center justify-center text-sm font-semibold">
                            Brand
                            
                            <select
                                value={selectedFilters.brand}
                                onChange={(e) =>
                                    setSelectedFilters({
                                        ...selectedFilters,
                                        brand: e.target.value,
                                    })
                                }
                            >
                                {brands.map((brand) => (
                                    <option key={brand} value={brand}>
                                        {brand}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-md bg-gray-100 px-2 py-6 md:px-8">
                <div className="space-y-4 md:flex md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-3 md:space-y-0">
                        <span className="font-semibold">Filters:</span>
                        {selectedFilters.category && (
                            <div className="flex items-center justify-center rounded-md bg-white px-3 py-1 font-medium">
                                {selectedFilters.category}{' '}
                                <X
                                    className="ml-1 h-4 w-4 cursor-pointer"
                                    onClick={() =>
                                        setSelectedFilters({
                                            ...selectedFilters,
                                            category: '',
                                        })
                                    }
                                />
                            </div>
                        )}
                        {selectedFilters.brand && (
                            <div className="flex items-center justify-center rounded-md bg-white px-3 py-1 font-medium">
                                {selectedFilters.brand}{' '}
                                <X
                                    className="ml-1 h-4 w-4 cursor-pointer"
                                    onClick={() =>
                                        setSelectedFilters({
                                            ...selectedFilters,
                                            brand: '',
                                        })
                                    }
                                />
                            </div>
                        )}
                        {selectedFilters.priceRange && (
                            <div className="flex items-center justify-center rounded-md bg-white px-3 py-1 font-medium">
                                ${selectedFilters.priceRange.min} - ${selectedFilters.priceRange.max}{' '}
                                <X
                                    className="ml-1 h-4 w-4 cursor-pointer"
                                    onClick={() =>
                                        setSelectedFilters({
                                            ...selectedFilters,
                                            priceRange: '',
                                        })
                                    }
                                />
                            </div>
                        )}
                       
                    </div>
                    <div className="">
                        <button
                            type="button"
                            className="block w-full rounded-md bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
                            onClick={applyFilters}
                        >
                            Filter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
