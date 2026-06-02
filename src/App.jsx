import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Context from './components/Context';
import Features from './components/Features';
import Cta from './components/Cta';
import Footer from './components/Footer';

/**
 * Componente principal da aplicação.
 * Responsável por gerenciar os estados de tema (claro/escuro) e fonte (padrão/acessível),
 * sincronizando as preferências do usuário com o localStorage.
 * 
 * @returns {JSX.Element} Provedor de tema envolvendo o CssBaseline e a estrutura da aplicação.
 */
export default function App() {
  const [tema, setTema] = useState(() => localStorage.getItem('tema') || 'light');
  const [fonte, setFonte] = useState(() => localStorage.getItem('fonte') || 'padrao');

  const theme = createTheme({
    palette: {
      mode: tema === 'dark' ? 'dark' : 'light',
      primary: {
        main: '#00897B',
      },
    },
    typography: {
      fontFamily:
        fonte === 'acessivel'
          ? 'Verdana, Comic Sans MS, sans-serif'
          : 'Roboto, Helvetica, Arial, sans-serif',
    },
    shape: {
      borderRadius: 12, // Aumenta a suavidade de todos os botões, cards e inputs do site de uma só vez!
    },
  });

  /**
   * Alterna entre o modo claro e escuro.
   * Atualiza o estado do React e salva a nova preferência no localStorage para persistência.
   */
  const toggleTema = () => {
    const novoTema = tema === 'light' ? 'dark' : 'light';
    setTema(novoTema);
    localStorage.setItem('tema', novoTema);
  };

  /**
   * Alterna entre a fonte padrão e a fonte de alta legibilidade (acessível).
   * Atualiza o estado do React e salva a nova preferência no localStorage para persistência.
   */
  const toggleFonte = () => {
    const novaFonte = fonte === 'padrao' ? 'acessivel' : 'padrao';
    setFonte(novaFonte);
    localStorage.setItem('fonte', novaFonte);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header toggleTema={toggleTema} toggleFonte={toggleFonte} />
        <Hero />
        <Context />
        <Features />
        <Cta />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
