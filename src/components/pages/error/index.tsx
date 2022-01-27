import React from 'react';
import styles from './error.module.scss';

interface IErrorPageProps {
  title: string;
  message?: string;
}

const ErrorPage = function ErrorPage({
  title,
  message,
}: IErrorPageProps): JSX.Element {
  return (
    <div className="error-page">
      <main className={styles.main}>
        <div className={styles.information}>
          <h1 className={styles.title}>{title}</h1>
          {message && <p className={styles.message}>{message}</p>}
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
