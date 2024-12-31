"use client";
import React, { useEffect, useState } from "react";
interface Clientfetch {
    id:number;
    title: string;
    price:string;
    description:string;
    category:string;
    image:string;
   rating:{rate:number;count:number};
    
  }
  

const Clientdata = () => {

    const [data, setData] = useState<Clientfetch[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            "https://fakestoreapi.com/products"
          );
          const parsedResponse: Clientfetch[] = await response.json();
          console.log("clientftech ", parsedResponse);
          setData(parsedResponse);
        };
        fetchData();
      }, []);

  return (
    <div className="grid grid-cols gird-cols-1  sm:grid-cols-2 md:grid-clos-3 lg: grid-clos-4 gap-6 p-10 bg-amber-100">
      {data.map((fetch, index) => (
        <div key={index} className="flex flex-col gap-5 border border-black ">
          <p>Id: {fetch.id}</p>
          <p>title: {fetch.title}</p>
          <p>price: {fetch.price}</p>
          <p>description: {`${fetch.description}`}</p>
          <p>category: {`${fetch.category}`}</p>
          <div><strong>image:</strong>
          <img src={fetch.image} alt={fetch.title } className="w-full h-48 object-contain mt-3"></img>
          </div>
          <p><strong>Rating:</strong>
          {fetch.rating.rate}({fetch.rating.count}reviews)
          </p>
        </div>
      ))}
    </div>
  )
}

export default Clientdata
