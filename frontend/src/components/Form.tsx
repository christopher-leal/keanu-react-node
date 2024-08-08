import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../utils/validateForm";

export const Form = () => {
  const [errors, setErrors] = useState<{ [key: string]: string[] } | null>(
    null
  );
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const width = Number(formData.get("width"));
    const height = formData.get("height")
      ? Number(formData.get("height"))
      : undefined;
    const greyscale = formData.get("greyscale") === "on";
    const young = formData.get("young") === "on";

    const validationErrors = validateForm({ width, height, greyscale, young });
    if (validationErrors) {
      const formattedErrors: { [key: string]: string[] } = {};
      validationErrors.forEach((error) => {
        if (error.instancePath) {
          const field = error.instancePath.replace("/", "");
          if (!formattedErrors[field]) {
            formattedErrors[field] = [];
          }
          formattedErrors[field].push(error.message!);
        }
      });
      setErrors(formattedErrors);
      return;
    }
    setErrors(null);
    const queryParams = new URLSearchParams({
      width: width.toString(),
      height: height?.toString() || "",
      greyscale: greyscale.toString(),
      young: young.toString(),
    }).toString();
    navigate(`/image?${queryParams}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Request Keanu Reaves Image
        </Typography>
        {errors && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {Object.entries(errors).flat().join(", ")}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            name="width"
            label="Width"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors?.width}
            helperText={errors?.width?.join(", ")}
          />
          <TextField
            name="height"
            label="Height (Optional)"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!errors?.height}
            helperText={errors?.height?.join(", ")}
          />
          <FormControlLabel
            control={<Checkbox name="greyscale" />}
            label="Greyscale"
          />
          <FormControlLabel control={<Checkbox name="young" />} label="Young" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
