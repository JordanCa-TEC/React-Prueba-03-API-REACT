import React from 'react';
import useFetchPokemon from '../hooks/useFetchPokemon';
import { useParams } from 'react-router-dom';
import '../styles/styles.css';

// Definir el tipo para los datos de Pokémon
interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  base_experience: number;
}

interface UseFetchPokemonReturn {
  data: PokemonData | null; // Permitir que data sea null
  loading: boolean;
  error: any;
}

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>(); // Tipar useParams para que devuelva el nombre como string
  const { data, loading, error }: UseFetchPokemonReturn = useFetchPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (loading) return <p className='pokemon__info'>Loading...</p>;
  if (error) return <p className='pokemon__info'>Error loading Pokémon details</p>;
  if (!data) return <p className='pokemon__info'>No data found</p>; // Manejo de caso cuando no hay datos

  return (
    <div className='pokemon__data'>
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
      <p>Base experience: {data.base_experience}</p>
    </div>
  );
}

export default PokemonDetail;

