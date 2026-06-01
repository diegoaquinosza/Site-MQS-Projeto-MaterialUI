import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

/**
 * Componente de cabeçalho (Header) da aplicação MQS.
 * Exibe o título principal e as ações globais (botões de acessibilidade).
 * 
 * @param {Object} props - Propriedades do componente.
 * @param {Function} props.toggleTema - Função para alternar o modo claro/escuro.
 * @param {Function} props.toggleFonte - Função para alternar a fonte (padrão/acessível).
 * @returns {JSX.Element} Barra superior estrutural do Material UI.
 */
export default function Header({ toggleTema, toggleFonte }) {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar>
        <Typography variant="h6" color="primary" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          MQS
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="outlined" size="small" onClick={toggleTema}>
            🌓 Tema
          </Button>
          <Button variant="outlined" size="small" onClick={toggleFonte}>
            👁️ Fonte
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
