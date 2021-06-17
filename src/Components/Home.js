import React from 'react';
import style from './Home.module.css';
import Feed from './Feed/Feed';

const Home = () => {
  return (
    <section className={`${style.home} container mainContainer`}>
      <Feed />
    </section>
  );
};

export default Home;
