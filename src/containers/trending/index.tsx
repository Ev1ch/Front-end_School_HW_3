import React, { useEffect } from 'react';
import { Loader, TrendingPage, ErrorPage } from 'components';
import { useAppDispatch } from 'store';
import { useTikTuksSelector } from 'store/trending';
import * as actions from 'store/trending/actions';

const TrendingContainer = function TrendingContainer(): JSX.Element {
  const {
    items: tiktuks,
    isError,
    isLoading,
  } = useTikTuksSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getTrending({ toSet: true }));
  }, []);

  if (isError) {
    return (
      <ErrorPage title="Loading error. Try to reload page or contact the support service" />
    );
  }

  if ((!isError && !tiktuks) || isLoading) {
    return <Loader />;
  }

  return <TrendingPage tiktuks={tiktuks} />;
};

export default TrendingContainer;
