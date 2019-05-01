import { render, screen } from '@testing-library/react';
import App from './App';

// Test básico que verifica que el título principal se renderiza
// Nos asegura que la estructura inicial de la página es correcta
it('muestra el título IronStore', () => {
  render(<App />);
  const header = screen.getByText(/IronStore/i);
  expect(header).toBeInTheDocument();
});
