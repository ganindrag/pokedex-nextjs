import { useState } from "react";
import image404 from "@/assets/images/image404.png";

const PokemonCard = ({ name, image }) => {
  const [sourceImage, setSourceImage] = useState(image);
  return (
    <div className="pokemon-card">
      <div className="frame-image bg-gray-400">
        <img
          src={sourceImage}
          className="w-full h-full object-contain object-center"
          onError={() => setSourceImage(image404.src)}
        />
      </div>
      <div className="p-1 capitalize">{name}</div>
    </div>
  );
};

export default PokemonCard;
