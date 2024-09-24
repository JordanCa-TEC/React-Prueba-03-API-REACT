import React from 'react';
import { Link } from 'react-router-dom';
import useFetchPokemon from '../hooks/useFetchPokemon';
import '../styles/styles.css';

// Definir la estructura de los datos del listado de Pokémon
interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListResponse {
  results: Pokemon[];
}

interface UseFetchPokemonReturn {
  data: PokemonListResponse | null; // Permitir que data sea null
  loading: boolean;
  error: Error | null; // Mejorar el tipo de error
}

const PokemonList: React.FC = () => {
  const { data, loading, error }: UseFetchPokemonReturn = useFetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10');

  if (loading) return <p className='pokemon__info'>Loading...</p>;
  if (error) return <p className='pokemon__info'>Error loading Pokémon</p>;
  if (!data) return <p className='pokemon__info'>No data available</p>; // Manejo de caso cuando no hay datos

  return (
    <ul className='pokemon__list_style'>
      {data.results.map((pokemon) => (
        <li key={pokemon.name}> {/* Usar name como clave */}
          <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;
