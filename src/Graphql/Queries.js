import { gql } from "@apollo/client";
export const GET_POKEMON_LIST = gql `
query pokemons($first: Int!){
    pokemons(first: $first){
      id
      number
      name
      types
      image
    }
  }`


export const GET_POKEMON_ID = gql`
query pokemon($id: String){
  pokemon(id: $id){
    id
    number
    name
    weight{
      minimum
      maximum
    }
    height{
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
}
`

export const GET_EVALUTION = gql`
query pokemon($id: String,){
  pokemon(id: $id, ){
    id
    name
    evolutions{
      id
      number
      name
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
}

`