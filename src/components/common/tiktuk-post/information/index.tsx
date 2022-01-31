import React from 'react';
import { useNavigate } from 'react-router';
import { Avatar, Hashtag } from 'components';
import { IAuthorMeta, IHashtag, IMusicMeta } from 'domain/tiktuk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { Routes } from 'common';
import styles from './information.module.scss';

interface IInfromationProps {
  description: {
    text: string;
    hashtags: IHashtag[];
  };
  author: IAuthorMeta;
  music: IMusicMeta;
}

const Information = function Information({
  description,
  author,
  music,
}: IInfromationProps): JSX.Element {
  const navigate = useNavigate();
  const getHashtagKey = (hashtag: IHashtag) => +hashtag.id * Math.random();

  const onAuthorClick = () => {
    navigate(Routes.USERS(author.name));
  };

  return (
    <div className={styles.information}>
      <Avatar
        image={author.avatar}
        className={styles.authorAvatar}
        onClick={onAuthorClick}
      />
      <div>
        <div className={styles.author}>
          <p
            className={styles.nick}
            onClick={onAuthorClick}
            role="link"
            tabIndex={0}
          >
            {author.nickName}
          </p>
          <p
            className={styles.name}
            onClick={onAuthorClick}
            role="link"
            tabIndex={0}
          >
            {author.name}
          </p>
          {author.verified && (
            <FontAwesomeIcon
              icon={faCheck}
              className={styles.icon}
              role="status"
              aria-hidden={false}
            />
          )}
        </div>
        <div className={styles.description}>
          <p className={styles.text}>{description.text}</p>
          <ul className={styles.hashtags}>
            {description.hashtags.map((hashtag) => (
              <li key={getHashtagKey(hashtag)}>
                <Hashtag hashtag={hashtag} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.music}>
          <p className={styles.description}>
            <FontAwesomeIcon icon={faCompactDisc} className={styles.icon} />
            {`${music.musicAuthor} - ${music.musicName}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
