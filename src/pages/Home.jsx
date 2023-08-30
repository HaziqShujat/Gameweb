import React, { useEffect,  useState } from "react";
import Genrelist from "../Components/Genrelist";
import Globelapi from "../Services/Globelapi";
import Banner from "../Components/Banner";
import Trendinggames from "../Components/Trendinggames";
import Gamesbyid from "../Components/Gamesbyid";


function Home() {
  const [first, setfirst] = useState([]);
  const [gamesgserelist ,setGamesgserelist]=useState([])




  useEffect(() => {
    getGenregames();
    Getgrereidlist(4);
  }, []);

  const getGenregames = () => {
    Globelapi.getAllGames()
      .then((resp) => {
        setfirst(resp.data.results);
       
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Getgrereidlist=(id)=>{
    Globelapi.getgerelistid(id) .then((resp) => {
      setGamesgserelist(resp.data.results)
    })
    .catch((error) => {
      console.error(error);
    });
  }



  // const result = useMemo(
    
  //   (id) =>
    
  //     Globelapi.getAllGames()
      
  //       .then((resp) => {
  //         setfirst(resp.data.results);
  //         console.log(id)
  //       })
  //       .catch(() => {
  //         return [];
  //       }),
  //   []
    
    
  // );
  

  
  return (
    <div className="grid grid-cols-4 px-8 hs">
      <div className="hidden md:block">
        <Genrelist setGenreid={(Genreid)=>Getgrereidlist(Genreid)} />
      </div>
      <div className="col-span-4 md:col-span-3">
        {first?.length > 0 ?
<div>
         <Banner gamebanner={first[0]} />
         <Trendinggames gamelist={first} />
         <Gamesbyid gamesbyid={gamesgserelist} />

</div>
          : null}
      </div>
    </div>
  );
}

export default Home;
