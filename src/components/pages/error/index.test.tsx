import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorPage from './index';

describe('testing error page', () => {
  const title = '%title%';

  it('test if title prop works', () => {
    render(<ErrorPage title={title} />);

    expect(screen.queryByText(title)).not.toBeNull();
  });

  it('test if message prop works', () => {
    const message = '%message%';

    render(<ErrorPage title={title} message={message} />);

    expect(screen.queryByText(message)).not.toBeNull();
  });
});
