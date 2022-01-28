import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logotype from './index';

describe('testing basic logotype component', () => {
  it('check if className prop works', () => {
    const className = '%className%';

    render(<Logotype className={className} />);

    expect(screen.getByRole('img')).toHaveClass(className);
  });
});
