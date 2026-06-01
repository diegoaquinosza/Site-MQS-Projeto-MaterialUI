import { Box, Container, Typography, Button } from '@mui/material';

/**
 * Componente da seção "Herói" (Hero).
 * A primeira área visual de grande impacto da Landing Page, 
 * apresentando o título principal e o convite de ação inicial.
 * 
 * @returns {JSX.Element} Seção principal contendo o título e botão de rolagem.
 */
export default function Hero() {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" color="primary">
          Mano, Qual é a Sala?!
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Encontre sua sala de aula de forma rápida e direta.
        </Typography>
        <Button variant="contained" size="large" href="#funcionalidades" sx={{ mt: 2 }}>
          Ver Funcionalidades
        </Button>
      </Container>
    </Box>
  );
}
