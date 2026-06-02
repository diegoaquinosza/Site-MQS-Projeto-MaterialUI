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
        <Button
          variant="contained"
          size="large"
          href="https://mqsapp.com.br/"
          target="_blank"
          sx={{
            mt: 2,
            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 6px 20px rgba(0, 137, 123, 0.4)',
            },
          }}
        >
          Acesse e use o MQS agora!
        </Button>
      </Container>
    </Box>
  );
}
