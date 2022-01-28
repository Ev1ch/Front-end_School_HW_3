import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import USER from 'mocks/user';
import Information from './index';

describe('testing user page information component', () => {
  const { user, stats } = USER;

  it('test if className prop works', () => {
    const className = '%className%';

    render(<Information className={className} user={user} stats={stats} />);

    expect(screen.queryByRole('main')).toHaveClass(className);
  });

  it('test if unique id is shown', () => {
    render(<Information user={user} stats={stats} />);

    expect(screen.queryByText(user.uniqueId)).not.toBeNull();
  });

  it('test if nickname is shown', () => {
    render(<Information user={user} stats={stats} />);

    expect(screen.queryByText(user.nickname)).not.toBeNull();
  });
});
