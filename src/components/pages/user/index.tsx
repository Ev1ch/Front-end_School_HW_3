import React from 'react';
import { IUser } from 'domain/user';
import { IFeedTikTuk } from 'domain/feed';
import { Header, MinifiedTikTuk } from 'components';
import Information from './information';
import styles from './user.module.scss';

interface IUserProps {
  information: IUser;
  feed: IFeedTikTuk[];
}

const UserPage = function UserPage({
  information,
  feed,
}: IUserProps): JSX.Element {
  return (
    <div className="user-page">
      <Header />
      <main className={styles.main}>
        <div className="container">
          <Information
            user={information.user}
            stats={information.stats}
            className={styles.information}
          />
          <ul className={styles.feed}>
            {feed.map((tiktuk) => (
              <li key={tiktuk.id} data-testid="tiktuk">
                <MinifiedTikTuk tiktuk={tiktuk} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default UserPage;
