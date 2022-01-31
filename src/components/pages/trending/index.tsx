import React from 'react';
import { Header, TikTukPost } from 'components';
import { ITikTuk } from 'domain/tiktuk';
import styles from './trending.module.scss';

interface ITrendingPageProps {
  tiktuks: ITikTuk[];
}

const TrendingPage = function TrendingPage({
  tiktuks,
}: ITrendingPageProps): JSX.Element {
  return (
    <div className="trending-page">
      <Header />
      <main className={styles.main}>
        <div className="container">
          <ul className={styles.tiktuks}>
            {tiktuks.map((tiktuk: ITikTuk) => (
              <li key={tiktuk.id} data-testid="tiktuk">
                <TikTukPost tiktuk={tiktuk} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TrendingPage;
