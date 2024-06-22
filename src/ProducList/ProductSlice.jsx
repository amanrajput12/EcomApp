import { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";


 function Product({products}) {
 
  useEffect(()=>{

  },[])
  console.log("in product comp",products);
const navigate = useNavigate()
  function handleDetail(id){
        navigate(`/Ecom/product-detail/${id}`)
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <div onClick={()=>handleDetail(product._id)} key={product._id} className="group relative">
              <div className=" w-[200px] overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.productImg[0]}
                  alt={product.title}
                  className="h-full w-full p-4  object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default memo(Product)