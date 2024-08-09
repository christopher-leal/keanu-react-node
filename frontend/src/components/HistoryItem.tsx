import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { HistoryType } from "../types/history.type";

export const HistoryItem = ({ item }: { item: HistoryType }) => {
  const { width, height, greyscale, young } = item;
  const queryParams = new URLSearchParams({
    width: width.toString(),
    height: height?.toString() || "",
    greyscale: greyscale.toString(),
    young: young.toString(),
    id: item.id,
  }).toString();

  return (
    <Grid item xs={12} sm={6} md={4} key={item.id}>
      <Card>
        <CardContent>
          <Typography variant="body1">{`Width: ${item.width}px`}</Typography>
          <Typography variant="body1">{`Height: ${item.height}px`}</Typography>
          <Typography variant="body1">{`Greyscale: ${
            item.greyscale ? "Yes" : "No"
          }`}</Typography>
          <Typography variant="body1">{`Young: ${
            item.young ? "Yes" : "No"
          }`}</Typography>
          <div
            dangerouslySetInnerHTML={{ __html: item.url }}
            style={{
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #ddd",
              overflow: "hidden",
            }}
          />
        </CardContent>
        <CardActions sx={{ mb: 2 }}>
          <Button
            variant="outlined"
            fullWidth
            component={Link}
            to={`/image?${queryParams}`}
          >
            See full image
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
