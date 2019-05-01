// Fila de la tabla que representa un producto individual
// Muestra el nombre del producto en rojo si no hay stock disponible
function ProductRow({ product }) {
  // Si el producto no está en stock, aplicamos un estilo rojo al nombre
  const name = product.inStock ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
