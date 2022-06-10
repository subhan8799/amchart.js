// import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Charts from "./Charts";
function App() {
  const [data,setData] =useState([]);
  useEffect(() => {
    rendata()
  },[]);
  const rendata = async () =>{
    try{
      console.log("data",data);
      setData(data)

      }catch(err){console.log("err", err);
    }
  }
  return (
    <div>
        <Charts/>
    </div>
  );
}
export default App;