interface Bookdata {
    id:number;
    name: string;
    type:string;
    available:boolean;
   
    
  }
  
const Serverside=async ()=>{
    const response= await fetch("https://simple-books-api.glitch.me/books/");
    
    const parsedResponse:Bookdata[]=await response.json();
    console.log(parsedResponse);

return (
    
    <div className="grid grid-cols gird-cols-1  sm:grid-cols-2 md:grid-clos-3 lg: grid-clos-4 gap-6 p-10">
     
      {parsedResponse.map((data, index) => (
        <div key={index} className="flex flex-col gap-5 border border-black ">
          <p className="text-black">Id: {data.id}</p>
          <p className="text-red-600">name: {data.name}</p>
          <p className="text-red-600">type: {data.type}</p>
          <p className="text-yellow-400"> available: {data.available}</p>
          
          
        </div>
      ))}
    </div>
  )};


export default Serverside