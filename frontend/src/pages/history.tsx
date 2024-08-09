import { Container, Typography, Box, Alert, Button, Grid } from "@mui/material";
import { useGetHistory } from "../graphql";
import { useNavigate, useSearchParams } from "react-router-dom";
import { HistoryItem } from "../components/HistoryItem";

export const HistoryPage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const limit = params.get("limit") ? Number(params.get("limit")) : undefined;
  const { data, loading, error } = useGetHistory(limit);
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Typography variant="body1">Loading...</Typography>
      </Box>
    );
  }
  if (error) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 200px)",
            flexDirection: "column",
          }}
        >
          <Alert severity="error">
            <Typography>There was an error retrieving the history</Typography>
            <Typography>{error.cause?.message}</Typography>
          </Alert>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              navigate("/");
            }}
          >
            Request a new image
          </Button>
        </Box>
      </Container>
    );
  }
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.length !== 0 && (
          <Typography variant="h5" component="h1" gutterBottom my={4}>
            Recent search history
          </Typography>
        )}
        {data.length === 0 ? (
          <>
            <Typography variant="h5" component="h1" gutterBottom my={4}>
              There are no items in your history
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                navigate("/");
              }}
            >
              Request a new image
            </Button>
          </>
        ) : (
          <Grid container spacing={3}>
            {data.map((item) => (
              <HistoryItem item={item} />
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};
