import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hashtag from './index';

describe('testing basic button component', () => {
  const hashtag = {
    cover: '%cover%',
    id: '%id%',
    name: '%name%',
    title: '%title%',
  };

  it('check if className prop works', () => {
    const className = '%className%';

    render(<Hashtag hashtag={hashtag} className={className} />);

    expect(screen.getByRole('link')).toHaveClass(className);
  });

  it('check if hashtag prop works', () => {
    render(<Hashtag hashtag={hashtag} />);

    expect(screen.queryByText(hashtag.name)).not.toBeNull();
  });
});
