import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  //component q envolve o container p/ dividir o elemento em 2 aside e o mapa
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  height: 100vh; // medida responsiva - de acordo com a tela do usuario
  width: 360px;
  background-color: ${(props) => props.theme.colors.background}; //propriedade do arquivo de theme
  overflow-y: auto; //se o conteudo passar do container nao ocultar
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  width: 150px; // imagem estava grande
  margin: 0 auto;
  margin-bottom: 15px;
`;

export const Map = styled.div`
  background-color: red;
  width: 500px;
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

export const Carousel = styled(Slider)`
  //ao estilizar components importados usar ()

  .slick-slide {
    margin-right: 30px;
  }
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-weight: normal;
  line-height: 19px;
  font-size: 16px;
`;
