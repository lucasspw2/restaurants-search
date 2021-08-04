export const Types = {
  SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS', // retorno da busca
  SET_RESTAURANT: 'restaurants/SET_RESTAURANT', // p modal
};

const initialState = {
  // valor inicial
  restaurants: [],
  restaurantSelected: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    case Types.SET_RESTAURANT:
      return { ...state, restaurantSelected: action.payload };
    default:
      return state; // caso nenhum case atenda retorna o initialState
  }
}

export function setRestaurants(restaurants) {
  // funcao q busca todos os restaurants
  return {
    type: Types.SET_RESTAURANTS,
    payload: restaurants,
  };
}

export function setRestaurant(restaurant) {
  // funcao q busca 1 restaurant
  return {
    type: Types.SET_RESTAURANT,
    payload: restaurant,
  };
}
