import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Get() {
  const [data, setData] = useState([]);
  //   const axios = require("axios");

  //   axios.get("http://localhost:3000/").then((res) => setData(res.data));

  useEffect(() => {
    axios
      .get("http://192.168.123.6:8080/product")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div>
        {/* Mapping Data */}
        {data.map((result, index) => {
          return (
            <div key={index}>
              <div>
                {result.name} {result.category}
                {result.price}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Get;
