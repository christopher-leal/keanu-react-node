import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetImage } from "../graphql";
import { Container, Box, Typography, Alert, Button } from "@mui/material";

export const ImagePage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const id = params.get("id");
  const width = params.get("width");
  const height = params.get("height");
  const greyscale = params.get("greyscale") === "true";
  const young = params.get("young") === "true";

  const { url, loading, error } = useGetImage({
    width: width!,
    height,
    greyscale,
    young,
    id,
  });
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 200px)",
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
            <Typography>There was an error requesting the image</Typography>
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
    <Container component="main">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: url }}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: "500px",
            p: 2,
            mt: 2,
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "background.primary",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Image Properties
          </Typography>
          <Typography>
            <strong>Width:</strong> {width}
          </Typography>
          <Typography>
            <strong>Height:</strong> {height}
          </Typography>
          <Typography>
            <strong>Greyscale:</strong> {greyscale ? "Yes" : "No"}
          </Typography>
          <Typography>
            <strong>Young:</strong> {young ? "Yes" : "No"}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
