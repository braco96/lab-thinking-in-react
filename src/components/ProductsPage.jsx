import { useState } from 'react';
import data from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

// Componente principal que contiene la lógica de la página
// Maneja el estado de la búsqueda y el filtro de productos en stock
function ProductsPage() {
  // Estado para el texto de búsqueda
  const [search, setSearch] = useState('');
  // Estado para el checkbox que muestra solo productos en stock
  const [onlyInStock, setOnlyInStock] = useState(false);

  // Filtramos los productos por nombre y por disponibilidad
  const filteredProducts = data.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesStock = !onlyInStock || product.inStock;
    return matchesSearch && matchesStock;
  });

  return (
    <div>
      <h1>IronStore</h1>
      {/* La SearchBar actualiza el estado de búsqueda y del checkbox */}
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        onlyInStock={onlyInStock}
        onStockChange={setOnlyInStock}
      />
      {/* La ProductTable recibe los productos ya filtrados */}
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
