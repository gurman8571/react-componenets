import React, { useEffect, useState } from 'react'
//import {product_list} from './'
export default function Body() {
    const [products, setproducts] = useState([]);
const [page, setpage] = useState(1)

    const fetchproducts=async()=>{
        const data= await fetch('https://dummyjson.com/products?limit=100')
        const json=await data.json()
        setproducts(json.products);
        //.then(res => res.json())
        //.then(console.log);
    }
    useEffect(() => {
    fetchproducts()
    }, [])
    
    return (
   
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pagination componenet</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.slice(page*10-10,page*10).map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img
                    src={product.images[0]}
                    alt={product.brand}
                    className=" h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      
                   
                     
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.title}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full mt-16 flex justify-center
          '>
            {products.length>0 && <div>


{
    page>1?
    <span className='h-12 w-12 cursor-pointer' onClick={()=>setpage(page-1)}>{"<"}</span>
    :
    <span className='h-12 w-12 cursor-not-allowed'>{"<"}</span>
}

{
    Array(products.length/10).fill("").map((item,index)=>{
return <span
onClick={()=>{setpage(index+1)}}
className={

`px-4
py-2 mx-1
 border border-gray-500 rounded-full cursor-pointer
 ${index+1===page? `bg-blue-400 text-white border-none`:``}
 `

}
 >{index+1}</span>
    })
}
{
page !== products.length/10?
    <span className='h-12 w-12 cursor-pointer' onClick={()=>setpage(page+1)}>{">"}</span>
    :
    <span className='h-12 w-12 cursor-not-allowed'>{">"}</span>
}         
                      </div>

                
            }
        </div>
        </div>
        
      </div>
    )
  }
