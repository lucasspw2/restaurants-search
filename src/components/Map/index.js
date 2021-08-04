import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);

  const [map, setMap] = useState(null);
  const { google, query, placeId } = props;
  useEffect(() => {
    if (query) {
      searchByQuery(query);
    }
  }, [query]);

  useEffect(() => {
    if (placeId) {
      getRestaurantById(placeId);
    }
  }, [placeId]);

  function getRestaurantById() {
    // funcao p/ buscar info detalhada do local p/ exibir modal
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurant(null)); // p/ limpar antes de pesquisar

    const request = {
      placeId,
      fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
    };

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurant(place));
      }
    });
  }

  function searchByQuery(query) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));

    const request = {
      // busca restaurant pelo input.
      location: map.center,
      radius: '2000',
      type: ['restaurant'],
      query,
    };

    service.textSearch(request, (results, status) => {
      // funcao textSearch da lib - busca por texto
      // funcao recebe obj request de configuracao. (dentro do results esta os restaurants)

      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
      }
    });
  }

  function searchNearby(map, center) {
    // recebe o mapa e onde e p/ centralizar
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));

    const request = {
      location: center,
      radius: '2000', // 2000 metros com base no center -busca nas proximidades
      type: ['restaurant'], // buscar somente por lugares restaurant
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results)); // passando o resultado da busca p/ estado global
      }
    });
  }

  function onMapReady(_, map) {
    // primeiro paramentro é evento(nao sera utilizado)
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      {...props}>
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
