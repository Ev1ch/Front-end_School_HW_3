import React from 'react';
import { screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Routes } from 'common';
import { renderWithRouter } from 'tests';
import TIKTUKS from 'mocks/tiktuks';
import Information from './index';

describe('testing tiktuk information component', () => {
  const tiktuk = TIKTUKS[0];
  const author = tiktuk.authorMeta;
  const description = { text: tiktuk.text, hashtags: tiktuk.hashtags };
  const music = tiktuk.musicMeta;

  it('check if avatar navigation works', () => {
    renderWithRouter(
      <Information author={author} description={description} music={music} />,
    );

    userEvents.click(screen.getByRole('img'));

    expect(window.location.pathname).toBe(Routes.USERS(author.name));
  });

  it('check if nickname navigation works', () => {
    renderWithRouter(
      <Information author={author} description={description} music={music} />,
    );

    userEvents.click(screen.getByText(author.nickName));

    expect(window.location.pathname).toBe(Routes.USERS(author.name));
  });

  it('check if official icon works', () => {
    renderWithRouter(
      <Information
        author={{ ...author, verified: true }}
        description={description}
        music={music}
      />,
    );

    expect(screen.queryByRole('status')).not.toBeNull();
  });

  it('check if official icon not showing by default', () => {
    renderWithRouter(
      <Information
        author={{ ...author, verified: false }}
        description={description}
        music={music}
      />,
    );

    expect(screen.queryByRole('status')).toBeNull();
  });
});
