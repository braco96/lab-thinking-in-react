import ProductRow from './ProductRow';

// Tabla de productos que agrupa por categoría
function ProductTable({ products }) {
  const rows = []; // Almacenará las filas que se renderearán
  let lastCategory = null; // Seguimos la categoría previa para agrupar

  // Recorremos todos los productos filtrados
  products.forEach((product) => {
    // Si la categoría cambia, añadimos una fila de cabecera de categoría
    if (product.category !== lastCategory) {
      // Fila de categoría con clave única por producto
      rows.push(
        <tr key={`${product.category}-${product.id}`}>
          <th colSpan="2">{product.category}</th>
        </tr>
      );
      lastCategory = product.category;
    }

    // Añadimos una fila de producto para cada elemento
    rows.push(<ProductRow product={product} key={product.id} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
