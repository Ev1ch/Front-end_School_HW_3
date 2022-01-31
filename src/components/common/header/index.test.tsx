import React from 'react';
import { screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Routes } from 'common';
import { renderWithRouter } from 'tests';
import Header from './index';

describe('testing common header component', () => {
  it('check if logo navigation works', () => {
    renderWithRouter(<Header />);

    userEvents.click(screen.getByRole('img'));

    expect(window.location.pathname).toBe(Routes.TRENDING);
  });
});
