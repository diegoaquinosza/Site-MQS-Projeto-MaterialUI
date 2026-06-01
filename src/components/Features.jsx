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
        <Typography variant="h4" component="h2" align="center" gutterBottom fontWeight="bold">
          Funcionalidades Inteligentes
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Tudo que você precisa, estruturado com HTML5 Semântico e Vanilla JS.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="570"
                image="assets/images/acesso_rapido2.PNG"
                alt="Acesso Rápido"
                sx={{ objectFit: 'contain' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h3" fontWeight="bold">
                  📶 Acesso Rápido
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Salve seus horários e locais favoritos no dispositivo para consultas offline instantâneas.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="570"
                image="assets/images/busca_direcionada2.PNG"
                alt="Busca Direcionada"
                sx={{ objectFit: 'contain' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h3" fontWeight="bold">
                  🧭 Busca Direcionada
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Encontre rapidamente o local exato da sua aula através de filtros inteligentes por curso, período e turno.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="570"
                image="assets/images/grade_personalizada2.PNG"
                alt="Grade Personalizada"
                sx={{ objectFit: 'contain' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h3" fontWeight="bold">
                  📅 Grade Personalizada
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Monte e visualize seu quadro de horários semanal de forma intuitiva, adaptada à sua rotina acadêmica.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
