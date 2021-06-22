import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Header component with GitHub link', () => {
	render(<App />);
	const linkElement = screen.getByText(/GitHub/i);
	expect(linkElement).toBeInTheDocument();
});

test('Renders Landing Page component <H1>', () => {
	render(<App />);
	const headerElement = screen.getByText(/Hello!/i);
	expect(headerElement).toBeInTheDocument();
});
