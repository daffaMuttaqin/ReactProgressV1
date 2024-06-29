function handleTambah(angkaPertama, angkaKedua) {
  return parseInt(angkaPertama) + parseInt(angkaKedua);
}

function handleKurang(angkaPertama, angkaKedua) {
  return parseInt(angkaPertama) - parseInt(angkaKedua);
}

function handleKali(angkaPertama, angkaKedua) {
  return parseInt(angkaPertama) * parseInt(angkaKedua);
}

function handleBagi(angkaPertama, angkaKedua) {
  return parseInt(angkaPertama) / parseInt(angkaKedua);
}

export { handleTambah, handleKurang, handleKali, handleBagi };
