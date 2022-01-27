import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Loader, UserPage, ErrorPage } from 'components';
import { useAppDispatch } from 'store';
import { useUserSelector } from 'store/user';
import * as actions from 'store/user/actions';

const UserContainer = function UserContainer(): JSX.Element {
  const dispatch = useAppDispatch();
  const { nick } = useParams<{ nick: string }>();
  const {
    information: { item: information },
    isLoading,
    isError,
    feed: { items: feed },
  } = useUserSelector((state) => state);

  useEffect(() => {
    if (nick) {
      dispatch(actions.getUser({ nick }));
    }
  }, []);

  if (isError) {
    return (
      <ErrorPage title="Loading error. Try to reload page or contact the support service" />
    );
  }

  if ((!isError && !information && !feed) || isLoading) {
    return <Loader />;
  }

  return <UserPage information={information} feed={feed} />;
};

export default UserContainer;
