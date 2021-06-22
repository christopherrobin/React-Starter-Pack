import { render, screen } from '@testing-library/react';
import Header from '.././components/Header';

test('Renders Header component with GitHub link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/GitHub/i);
  expect(linkElement).toBeInTheDocument();
});
