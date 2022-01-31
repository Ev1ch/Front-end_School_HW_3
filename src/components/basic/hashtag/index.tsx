import React from 'react';
import clsx from 'clsx';
import { IHashtag } from 'domain/tiktuk';
import styles from './hashtag.module.scss';

interface IHashtagProps {
  hashtag: IHashtag;
  className?: string;
}

const Hashtag = function Hashtag({
  hashtag,
  className,
}: IHashtagProps): JSX.Element {
  return (
    <div className={clsx(styles.hashtag, className)} role="link">
      <span>{hashtag.name}</span>
    </div>
  );
};

export default Hashtag;
