import React, { useContext } from "react";
import { Context } from "../Context";

const Favoritos = () => {
  const { data } = useContext(Context);
  return (
    
    <div className="container-images">
      <div>
    <h1>Fotos Favoritas</h1>
    </div>
      {data
        .filter((a) => a.favorite === true)
        .map((item) => (
         
            <img
              className="image-favorite"
              key={item.id}
              src={item.src.tiny}
              alt={item.alt}
          />
          
        
          
        ))}
    </div>
  );
};

export default Favoritos;
