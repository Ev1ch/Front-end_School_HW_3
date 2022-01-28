import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TIKTUKS from 'mocks/tiktuks';
import { renderWithRouter } from 'tests';
import TrendingPage from './index';

describe('testing trending page', () => {
  it('test if tiktuks render works', () => {
    renderWithRouter(<TrendingPage tiktuks={TIKTUKS} />);

    expect(screen.getAllByTestId('tiktuk')).toHaveLength(TIKTUKS.length);
  });
});
