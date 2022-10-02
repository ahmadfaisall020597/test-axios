import "./App.css";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [datas, setDatas] = useState([]);
  const [userSelect, setUserSelect] = useState("");
  const [isShow, setIsShow] = useState(true);

  // const getBerries = async () => {
  //   const berries = await fetch("https://pokeapi.co/api/v2/berry/");
  //   const value = await berries.json();
  //   const result = value.results.map((data) => {
  //     return {
  //       value: data.name,
  //       label: data.name,
  //     };
  //   });
  //   setDatas(result.sort((a, b) => a.label.localeCompare(b.label)));
  // };
  // useEffect(() => {
  //   getBerries();
  // }, []);

  useEffect(() => {
    const getBerries = async () => {
      try {
        const berries = await axios.get("https://pokeapi.co/api/v2/berry/");
        const value = await berries.json()
        const result = value.results.map((data) => {
          console.log(data)
        })
      } catch (err) {
        console.log(err);
      }
    };
    getBerries();
  },[]);

  const handleSubmit = () => {
    setIsShow((state) => !state);
  };

  const handleChange = (value) => {
    setUserSelect(value);
  };

  return (
    <div className="App">
      <h1
        style={{
          fontSize: 72,
          margin: 10,
        }}
      >
        {isShow ? userSelect : ""}
      </h1>
      <button
        style={{
          color: "blue",
          padding: 10,
          margin: 20,
        }}
        onClick={handleSubmit}
        disabled={!userSelect}
      >
        {isShow ? "Hide Button" : "Show Values"}
      </button>
      <Select options={datas} onChange={(e) => handleChange(e.value)} />
    </div>
  );
}

export default App;
