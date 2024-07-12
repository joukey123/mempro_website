import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Cards({ title, img, link }) {
  return (
    <Card
      sx={{ maxWidth: 200, width: 200, minWidth: 200, height: 300, margin: 1 }}
    >
      <CardMedia
        sx={{
          height: "130px",
          width: "100%",
          maxWidth: "200px",
          bgcolor: "#f5f5f5",
        }}
        image={img}
        alt={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: 400 }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/semi/parts/${link}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Cards;
