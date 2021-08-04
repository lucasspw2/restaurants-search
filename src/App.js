import React from 'react';
import { Provider } from 'react-redux'; // biblioteca auxilia ultilizar redux
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset'; // reseta todos os estilos padroes do browser
import Home from './pages/Home';
import store from './redux/store';
import theme from './theme'; // importação do theme p/ ser usado de forma global

export default function App() {
  return (
    // envolvendo a aplicacao com store criado
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* recebe atributo theme, que recebe o arquivo theme.js */}
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}
