import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MaterialIcon from '@material/react-material-icon';
import TextField, { Input } from '@material/react-text-field';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Card, Restaurant, Modal, Map, Loader, Skeleton } from '../../components'; // index do components tem todas as exportacoes centralizadas

import {
  Container,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel,
  ModalTitle,
  ModalContent,
} from './styles';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false); // controlar o abrir e fechar da modal
  const [placeId, setPlaceId] = useState(null);

  const [query, setQuery] = useState(null);

  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    // configuração do carousel
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4, // quantidade de itens por slide
    slidesToScroll: 4,
    adaptiveHeight: true, // adaptacao da altura do conteudo
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      // funcao escuta tecla Enter e add inputValue dentro da state query
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    // fun recebe id do local e abre modal
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo do restaurante" />
          <TextField
            label="Pesquisar"
            outlined
            // onTrailingIconSelect={() => {}}
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          {/* renderizando animacao enquando busca restaurants */}
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua Área</CarouselTitle>
              <Carousel {...settings}>
                {/* repassando as configuracoes criadas */}
                {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <Restaurant
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {restaurantSelected?.opening_hours?.open_now
                ? 'Aberto agora'
                : 'Fechado neste momento'}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
}
