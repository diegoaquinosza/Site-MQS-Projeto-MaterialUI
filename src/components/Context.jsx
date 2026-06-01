import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

/**
 * Componente de Contexto (Context).
 * Apresenta a visão e os diferenciais da aplicação (Fim da Fricção Tecnológica),
 * exibindo os pilares do sistema através de uma lista iconográfica.
 * 
 * @returns {JSX.Element} Seção de texto e lista de benefícios.
 */
export default function Context() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
              O Fim da Fricção Tecnológica
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Acreditamos que a tecnologia no ambiente acadêmico deve simplificar a sua vida, não adicionar novas barreiras. É por isso que o MQS foi desenhado para ser direto ao ponto.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Typography variant="h5">⚡</Typography>
                </ListItemIcon>
                <ListItemText primary="Acesso Imediato" secondary="Sem necessidade de logins ou cadastros demorados." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Typography variant="h5">📱</Typography>
                </ListItemIcon>
                <ListItemText primary="Mobile-First" secondary="Interface perfeitamente otimizada para o seu celular." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Typography variant="h5">💾</Typography>
                </ListItemIcon>
                <ListItemText primary="Persistência Local" secondary="Suas preferências ficam salvas no seu próprio aparelho." />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
