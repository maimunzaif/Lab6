import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

test('renders navigation links with proper accessibility', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByLabelText('Home page')).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toHaveAttribute('href', '/about');
});