import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './index';

describe('Header component', () => {
  it('checking the title of the search field', () => {
    render(<Header/>);
    expect(screen.getByText(/search for characters or select a house./i)).toBeInTheDocument(); 
  });
});
