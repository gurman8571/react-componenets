import React, { useEffect, useState } from 'react'

export default function Search() {

const [search, setsearch] = useState("");
const [suggestions, setsuggestions] = useState([]);

useEffect(() => {
    //FetchSuggestions()
 //make api call after 200ms
   const timer=setTimeout(()=>{FetchSuggestions()}, 200);
//if the user clicks other key before 200 ms then clear previous timer and start new timer with the new string
  return () => {
    clearTimeout(timer)};
}, [search])

const FetchSuggestions=async()=>{
    console.log(`api called -${search}`);
    const res=await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${search}`)
    const data=await res.json();
    console.log(data[1]);
    setsuggestions(data[1]);
    }
    return (
    <div>

       <h2 className='mx-4 my-6  font-bold text-xl text-gray-900'>Debounce search bar</h2>
    <div className='flex justify-center m-4'>
    <div className>
        <div className="inline-flex flex-col justify-center relative text-gray-500">
          <div className="relative">
            <input 
            onChange={(e)=>{setsearch(e.target.value)}}
            type="text" className="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" placeholder="search..." defaultValue="Gar" />
            <svg className="w-4 h-4 absolute left-2.5 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="mt-2 text-sm">Gevonden:</h3>
          <ul className="bg-white border border-gray-100 w-full mt-2 ">
           
            
               {suggestions?.map((item,i)=>{
return( <li key={i} className="pl-8 pr-2 py-1 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
<svg className="stroke-current absolute w-4 h-4 left-2 top-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
<b>{item}</b>
</li>
)

               })}
          </ul>
        </div>
      </div>
          </div>
    </div>
  )
}
