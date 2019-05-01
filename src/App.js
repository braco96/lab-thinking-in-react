import logo from './logo.svg';
import './App.css';
import ProductsPage from './components/ProductsPage';

// Componente raíz de la aplicación
// Renderiza la página principal con la lista de productos
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* Página principal de productos */}
      <ProductsPage />
    </div>
  );
}

export default App;
