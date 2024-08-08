import { Container, Typography, Box } from '@mui/material';

export const HistoryPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          History Page
        </Typography>
      </Box>
    </Container>
  );
};