import { useParams } from 'react-router-dom';
import productData from '../Data/Productdata.json';
import { useState } from 'react';
import Fullscreenimage  from './Fullscreenimage'

function Detail() {
    const { productId } = useParams();
    console.log('URL productId:', productId);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    

  // Find the product with the matching productId in your data
  const product = productData.products.find((p) => p.id.toString() === productId);
  
  if (!product) {
    // Handle the case when the product with the given ID is not found
    return <div>Product not found</div>;
    
  }

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
      <div className="pt-8">
        {/* <div className="flex items-center">
          <ol className="flex w-full items-center overflow-hidden">
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <a href="#">Home</a>
            </li>
            <li className="text-body mt-0.5 text-base">/</li>
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <a className="capitalize" href="#">
                products
              </a>
            </li>
            <li className="text-body mt-0.5 text-base">/</li>
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <a className="capitalize" href="#" >
                {product.title}
              </a>
            </li>
          </ol>
        </div> */}
      </div>
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        <div className="col-span-5 grid grid-cols-2 gap-2.5">
        {product.images.map((image, index) => (
            <div key={index} className="col-span-1 transition duration-150 ease-in hover:opacity-90"
            onClick={() => openModal(image)}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
          {isModalOpen && (
        <Fullscreenimage imageUrl={modalImageUrl} onClose={closeModal} />
      )}
        </div>
        <div className="col-span-4 pt-8 lg:pt-0">
          <div className="mb-7 border-b border-gray-300 pb-7">
            <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
              {product.title} By You
            </h2>
            <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
              {product.description}
            </p>
            <div className="mt-5 flex items-center ">
              <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                ${product.price}
              </div>
              
            </div>
          </div>
       
          <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
            <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
              <button
                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
                +
              </button>
              <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                1
              </span>
              <button className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
                -
              </button>
            </div>
            <button
              type="button"
              className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to cart
            </button>
          </div>
          
          <div className="">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Additional Information
              </h2>
            </header>
          </div>
          <div className="">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Customer Reviews & Rating{product.rating}
              </h2>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;