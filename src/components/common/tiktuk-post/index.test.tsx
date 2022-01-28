import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TIKTUKS from 'mocks/tiktuks';
import { renderWithRouter } from 'tests';
import TikTukPost from './index';

describe('testing common tiktuk component', () => {
  const tiktuk = TIKTUKS[0];

  it('check if className prop works', () => {
    const className = '%className%';

    renderWithRouter(<TikTukPost tiktuk={tiktuk} className={className} />);

    expect(screen.getByRole('feed')).toHaveClass(className);
  });
});
