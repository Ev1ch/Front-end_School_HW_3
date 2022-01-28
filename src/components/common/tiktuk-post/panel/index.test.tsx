import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Panel from './index';

describe('testing tiktuk panel component', () => {
  const likes = 51;
  const comments = 52;
  const shares = 53;

  it('check if likes diplaying works', () => {
    render(<Panel likes={likes} comments={comments} shares={shares} />);

    expect(screen.queryByText(likes)).not.toBeNull();
  });

  it('check if likes diplaying works', () => {
    render(<Panel likes={likes} comments={comments} shares={shares} />);

    expect(screen.queryByText(comments)).not.toBeNull();
  });

  it('check if likes diplaying works', () => {
    render(<Panel likes={likes} comments={comments} shares={shares} />);

    expect(screen.queryByText(shares)).not.toBeNull();
  });
});
