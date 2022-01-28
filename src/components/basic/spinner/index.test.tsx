import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from './index';

describe('testing basic spinner component', () => {
  it('check if className prop works', () => {
    const className = '%className%';

    render(<Spinner className={className} />);

    expect(screen.getByRole('status')).toHaveClass(className);
  });
});
