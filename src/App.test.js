import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Marquee', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/brian.fish/i);
  expect(linkElement).toBeInTheDocument();
});

test('respects tautologies', () => {
    expect(true).toEqual(true);
});
