import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  // Le state Data contiendra le data reçu dans la réponse du serveur
  const [data, setData] = useState();
  // le state isLoading permet de savoir si la réponse du serveur est arrivé
  const [isLoading, setIsLoading] = useState(true);

  // Le hook useEffect permet de faire ma requête une seule fois à la naissance de mon composant App
  // Il prend 2 arguments :
  // - une fonction, qui sera exécutée
  // - un tableau vide qui permet de dire que la callback précédente doit être appelée une seule fois à la naissance de mon composant
  useEffect(() => {
    // Je déclare une fonction async
    const fetchData = async () => {
      // Je fais une requête en utilisant await pour attendre la réponse du serveur

      const response = await axios.get("http://localhost:3200");
      console.log(response.data);
      // Je stocke la réponse du serveur dans le state data
      setData(response.data);
      // Je fais passer isLoading à false

      setIsLoading(false);
    };
    // J'appelle cette focntion directement après l'avoir déclarée
    fetchData();
  }, []);

  // Tant que isLoading vaut true j'affiche Chargement..., si il vaut false, c'est que le data est dans le state, je peux afficher mon site
  return (
    <>
      <p>{isLoading === true ? "Chargement..." : data.Ratings[0].Source}</p>
    </>
  );
}

export default App;
