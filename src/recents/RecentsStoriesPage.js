import React from 'react';
import Recents from './Recents';
import { useParams } from 'react-router-dom';
const RecentStoriesPage = () => {
  const { id } = useParams();
  return (
    <div>
      <Recents id ={id} />
    </div>
  );
};

export default RecentStoriesPage;