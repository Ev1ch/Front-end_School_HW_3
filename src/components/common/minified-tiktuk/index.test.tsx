import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import USER_FEED from 'mocks/user-feed';
import MinifiedTikTuk from './index';

describe('testing common minified tiktuk component', () => {
  const tiktuk = USER_FEED.itemList[0];

  it('check if logo navigation works', () => {
    render(<MinifiedTikTuk tiktuk={tiktuk} />);

    expect(screen.getByRole('button').getAttribute('src')).toBe(
      tiktuk.video.playAddr,
    );
  });
});
