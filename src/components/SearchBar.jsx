// Componente de barra de búsqueda controlada
// Permite filtrar productos por nombre y disponibilidad en stock
function SearchBar({ search, onSearchChange, onlyInStock, onStockChange }) {
  return (
    <div className="SearchBar">
      {/* Input controlado para el texto de búsqueda */}
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div>
        {/* Checkbox controlado para mostrar solo productos en stock */}
        <input
          type="checkbox"
          id="stock"
          checked={onlyInStock}
          onChange={(e) => onStockChange(e.target.checked)}
        />
        <label htmlFor="stock">Solo mostrar productos en stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
