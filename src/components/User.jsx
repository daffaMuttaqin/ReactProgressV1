import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function User() {
  const [data, setData] = useState("");
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
      <div>{data.id}</div>
    </div>
  );
}

export default User;
