import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3200");
      console.log(response.data);
      setData(response.data);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <p>{isLoading === true ? "Chargement..." : data.restaurant.name}</p>
    </>
  );
}

export default App;
