import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Post() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    category: 0,
    price: 0,
    quantity: 0,
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = values.name ? "" : "Name is required";
    tempErrors.category = values.category ? "" : "Category is required";
    tempErrors.price = values.price ? "" : "Price is required";
    tempErrors.quantity = values.quantity ? "" : "Quantity is required";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .post("http://192.168.123.6:8080/product", values)
        .then((res) => {
          console.log(res);
          navigate("/get");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="w-full h-full flex justify-center ">
      <div className="shadow-lg bg-gray-200 p-10 rounded-lg">
        <h1 className="text-3xl">Tambah Data</h1>
        <br />

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <input
              className="rounded-lg"
              type="text"
              name="name"
              onChange={handleInput}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Category</label>
            <input
              className="rounded-lg"
              type="number"
              name="category"
              onChange={handleInput}
            />
            {errors.category && (
              <span className="text-red-500">{errors.category}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Price</label>
            <input
              className="rounded-lg"
              type="number"
              name="price"
              onChange={handleInput}
            />
            {errors.price && (
              <span className="text-red-500">{errors.price}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Quantity</label>
            <input
              className="rounded-lg"
              type="number"
              name="quantity"
              onChange={handleInput}
            />
            {errors.quantity && (
              <span className="text-red-500">{errors.quantity}</span>
            )}
          </div>

          {/* Btn Submit */}
          <div className="w-full text-center mt-3">
            <button className="py-3 w-full bg-blue-300 rounded-lg text-center font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Post;
