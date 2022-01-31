import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import USER_FEED from 'mocks/user-feed';
import USER from 'mocks/user';
import { renderWithRouter } from 'tests';
import UserPage from './index';

describe('testing user page', () => {
  const feed = USER_FEED.itemList;

  it('test if tiktuks render works', () => {
    renderWithRouter(<UserPage information={USER} feed={feed} />);

    expect(screen.getAllByTestId('tiktuk')).toHaveLength(feed.length);
  });
});
