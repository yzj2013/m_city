import React from 'react';
import Featured from './featured';
import MatchesHome from './matches';
import MeetPlayers from './meetplayers';

const Home = () => {
  return (
    <div className='bck_blue'>
      <Featured></Featured>
      <MatchesHome></MatchesHome>
      <MeetPlayers></MeetPlayers>
    </div>
  );
};

export default Home;
