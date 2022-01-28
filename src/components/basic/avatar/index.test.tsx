import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Avatar from './index';

describe('testing basic avatar component', () => {
  const imagePath = '%path%';

  it('check if specified image is rendered', () => {
    render(<Avatar image={imagePath} />);

    expect(screen.getByRole('img').getAttribute('src')).toBe(imagePath);
  });

  it('check if click handler works', () => {
    const clickHandler = jest.fn();

    render(<Avatar image={imagePath} onClick={clickHandler} />);
    userEvents.click(screen.getByRole('img'));

    expect(clickHandler).toBeCalledTimes(1);
  });

  it('check if alt prop works', () => {
    const altName = '%alt%';

    render(<Avatar image={imagePath} alt={altName} />);

    expect(screen.queryByAltText(altName)).not.toBeNull();
  });

  it('chech if className prop works', () => {
    const className = '%className%';

    render(<Avatar image={imagePath} className={className} />);

    expect(screen.getByRole('link')).toHaveClass(className);
  });
});
