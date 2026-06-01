import { Box, Typography } from '@mui/material';

/**
 * Componente de Rodapé (Footer).
 * Encerra a página exibindo os créditos de desenvolvimento e orientações institucionais.
 * Utiliza o conceito de "Sticky Footer" para permanecer na base da tela caso o conteúdo seja curto.
 * 
 * @returns {JSX.Element} Rodapé com informações de Copyright e Equipe.
 */
export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'background.paper', 
        py: 4, 
        mt: 'auto', 
        textAlign: 'center', 
        borderTop: 1, 
        borderColor: 'divider' 
      }}
    >
      <Typography variant="body2" color="text.secondary" gutterBottom>
        &copy; {new Date().getFullYear()} MQS - Mano, Qual é a Sala?!
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Desenvolvido sob orientação do Prof. Wilson Wolf.
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Equipe: Diego, Paulo e Luiza.
      </Typography>
    </Box>
  );
}
