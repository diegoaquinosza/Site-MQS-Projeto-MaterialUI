import { Box, Container, Typography, Button } from '@mui/material';

/**
 * Componente "Call To Action" (CTA).
 * Seção de conversão focada em direcionar o usuário 
 * para a plataforma principal ou ambiente de login externo.
 * 
 * @returns {JSX.Element} Seção de encerramento com botão de link externo.
 */
export default function Cta() {
  return (
    <Box sx={{ py: 8, textAlign: 'center', backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
          Chega de sufoco em todo início de semestre!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          A pergunta 'Mano, Qual é a Sala?!' agora tem uma resposta definitiva e instantânea na palma da sua mão.
        </Typography>
        <Button variant="contained" size="large" href="https://mqsapp.com.br/" target="_blank" sx={{ mt: 2 }}>
          Acesse e use o MQS agora!
        </Button>
      </Container>
    </Box>
  );
}
