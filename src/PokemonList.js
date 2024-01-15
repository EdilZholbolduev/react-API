import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard'

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        setPokemonList(response.data.results)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      }
    }

    fetchPokemon()
  }, [])

  return (
    <div className="pokemon-container">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  )
}

export default PokemonList
