import { render, screen } from '@testing-library/react';
import App from './App';

test('animal', () => {
  render(<App />);
  const linkElement = screen.getByText(/animal/i);
  expect(linkElement).toBeInTheDocument();
});
