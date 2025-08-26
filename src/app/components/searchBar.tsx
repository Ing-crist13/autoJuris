// components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Chama a função de busca passada como prop
  };

  return (
    <input
      type="text"
      placeholder="Pesquisar..."
      value={searchTerm}
      onChange={handleChange}
      className="border rounded-2xl p-2 w-60 h-10 text-gray-600 font-black font-light p-4"
    />
  );
};

export default SearchBar;