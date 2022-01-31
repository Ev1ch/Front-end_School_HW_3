import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Button from './index';

describe('testing basic button component', () => {
  it('check if className prop works', () => {
    const className = '%className%';

    render(<Button className={className} />);

    expect(screen.getByRole('button')).toHaveClass(className);
  });

  it('check if click handler works', () => {
    const clickHandler = jest.fn();

    render(<Button onClick={clickHandler} />);
    userEvents.click(screen.getByRole('button'));

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it('check if text prop works', () => {
    const text = '%text%';

    render(<Button text={text} />);

    expect(screen.queryByText(text)).not.toBeNull();
  });
});
