import { Box, Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

/**
 * Componente de Funcionalidades (Features).
 * Seção que demonstra os recursos inteligentes da plataforma,
 * utilizando cards com imagens de demonstração e descrições diretas.
 * 
 * @returns {JSX.Element} Grade responsiva com os cartões de funcionalidades.
 */
export default function Features() {
  return (
    <Box id="funcionalidades" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" align="center" gutterBottom fontWeight="bold" sx={{ mb: 6 }}>
          Funcionalidades Inteligentes
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="180"
                image="assets/images/acesso_rapido2.PNG"
                alt="Acesso Rápido"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h3" fontWeight="bold">
                  Acesso Rápido
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Encontre sua sala imediatamente logo na primeira tela, sem distrações.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="180"
                image="assets/images/tema_escuro.PNG"
                alt="Modo Noturno"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h3" fontWeight="bold">
                  Modo Noturno
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Proteja sua visão com um tema escuro integrado perfeitamente ao sistema.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="180"
                image="assets/images/acessibilidade.PNG"
                alt="Acessibilidade"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h3" fontWeight="bold">
                  Acessibilidade Plena
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fontes especiais para dislexia e alto contraste para todos os públicos.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
