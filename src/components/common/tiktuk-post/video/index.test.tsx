import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TIKTUKS from 'mocks/tiktuks';
import Video from './index';

describe('testing tiktuk video component', () => {
  const tiktuk = TIKTUKS[0];
  const video = tiktuk.videoUrl;

  it('check if video displaying works', () => {
    render(<Video video={video} />);

    expect(screen.getByRole('button').getAttribute('src')).toBe(
      tiktuk.videoUrl,
    );
  });
});
