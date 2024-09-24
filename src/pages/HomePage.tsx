import React from 'react';
import '../styles/styles.css';

const HomePage: React.FC = () => {
  return (
    <div className='pokemon__body'>
      <img src="./images/logo-poke.png" alt="logo-pokemon" />
      <h1 className='pokemon__title'>Welcome to the Pokémon App + typescript 2</h1>
      <p className='pokemon__text'>Explore various Pokémon from the API.</p>
    </div>
  );
}

export default HomePage;
