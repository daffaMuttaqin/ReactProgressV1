import React, { useState } from "react";
import {
  handleTambah,
  handleKurang,
  handleKali,
  handleBagi,
} from "../service/KalkulatorService";

function Kalkulator() {
  const [angkaPertama, setAngkaPertama] = useState(2);
  const [angkaKedua, setAngkaKedua] = useState(3);
  const [hasil, setHasil] = useState(null);

  // const handleTambah = (e) => {
  //   e.preventDefault();
  //   setHasil(parseInt(angkaPertama) + parseInt(angkaKedua));
  // };

  // const handleKurang = (e) => {
  //   e.preventDefault();
  //   setHasil(parseInt(angkaPertama) - parseInt(angkaKedua));
  // };

  // const handleKali = (e) => {
  //   e.preventDefault();
  //   setHasil(parseInt(angkaPertama) * parseInt(angkaKedua));
  // };

  // const handleBagi = (e) => {
  //   e.preventDefault();
  //   setHasil(parseInt(angkaPertama) / parseInt(angkaKedua));
  // };

  const handleClick = (operation) => (e) => {
    e.preventDefault();
    let result;
    switch (operation) {
      case "tambah":
        result = handleTambah(angkaPertama, angkaKedua);
        break;
      case "kurang":
        result = handleKurang(angkaPertama, angkaKedua);
        break;
      case "kali":
        result = handleKali(angkaPertama, angkaKedua);
        break;
      case "bagi":
        result = handleBagi(angkaPertama, angkaKedua);
        break;
      default:
        result = null;
    }
    setHasil(result);
  };

  return (
    <div className="w-full h-full flex justify-center ">
      <div className="shadow-lg bg-gray-200 p-10 rounded-lg">
        <form>
          <div className="flex flex-col">
            <label htmlFor="">Angka Pertama</label>
            <input
              className="rounded-lg"
              type="number"
              value={angkaPertama}
              onChange={(e) => setAngkaPertama(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Angka Kedua</label>
            <input
              className="rounded-lg"
              type="number"
              value={angkaKedua}
              onChange={(e) => setAngkaKedua(e.target.value)}
            />
          </div>
          <div className="w-full text-center mt-3 grid grid-cols-4 gap-x-1">
            <button
              onClick={handleClick("tambah")}
              className="py-3 w-full bg-blue-300 rounded-lg text-center font-semibold"
            >
              +
            </button>
            <button
              onClick={handleClick("kurang")}
              className="py-3 w-full bg-blue-300 rounded-lg text-center font-semibold"
            >
              -
            </button>
            <button
              onClick={handleClick("kali")}
              className="py-3 w-full bg-blue-300 rounded-lg text-center font-semibold"
            >
              x
            </button>
            <button
              onClick={handleClick("bagi")}
              className="py-3 w-full bg-blue-300 rounded-lg text-center font-semibold"
            >
              /
            </button>
          </div>
        </form>

        {hasil !== null && (
          <div className="mt-4 text-center">
            <p>Hasil: {hasil}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Kalkulator;
