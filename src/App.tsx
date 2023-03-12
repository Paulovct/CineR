import { useEffect, useState } from "react";


type Movie = {
  titulo:string;
  avatar:string;
};

const App = ()=>{
  
  const [movies,setMovies] = useState<Movie[]>([]);
  
  useEffect(()=>{
    req();
  },[])

  const req = async ()=>{
    
    const response = await fetch("https://api.b7web.com.br/cinema/");
    
    const json:[] = await response.json(); 
    
    setMovies(json);
  }



  return (
    <div className="bg-slate-800">

      <header className="flex items-center justify-center w-full  bg-slate-900 h-20 shadow-black shadow-2xl"><h1 className="text-zinc-50 font-mono font-extrabold  text-5xl">CineR</h1></header>

      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full gap-x-4 gap-y-10 mt-10 ">
        {movies.map((item , index)=>{
          return(
            <div className="transition max-w-xs ease-in-out delay-75 mx-auto flex flex-col p-0 pt-2 bg-slate-600 shadow-black shadow-xl justify-center items-center rounded-xl hover:bg-slate-700" key={index}>

              <img src={item.avatar} className="w-48 h-60 mb-0 mt-0 rounded-xl" alt="" />
            
              <div  className="flex justify-center mt-3 mb-0 mx-auto font-serif text-sm text-center text-zinc-50">{item.titulo}</div>
            
            </div>
            )
        })}</div>
      </div>
  )
};

export default App;