import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { data } from "../helper/data";
import { useState } from "react";
import StarRank from "../components/StarRank";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Main = () => {
  const [yearItem, setYearItem] = useState("");

  const handleClick = (item) => {
    setYearItem(item);
  };
  console.log(yearItem);

  return (
    <Stack  sx={{ display: "flex" }} spacing={2}>
      <div>
      {data.map((item) => (
          <Button key={item.id} onClick={() => handleClick(item)} variant="outlined">
        {item.date}
      </Button>
      ))}
      </div>
      <div>

      {yearItem && (
        <Card sx={{ maxWidth: 500 }} >
          <CardActionArea >
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                {yearItem.title}
              </Typography>
              <Typography variant="body2">
                {yearItem.body}
              </Typography>
              <Typography variant="body2" color="red">
                {yearItem.tags.join(" / ")}
              </Typography>
              <Typography spacing={2} variant="body2" color="red" sx={{ display: "flex", alignItems: "center" }}>
                <StarRank  filmRate={yearItem.rate} />  
                <Typography sx={{fontSize:"h5.fontSize", marginLeft: "15px" } }> {yearItem.rate.toFixed(2)} / 10 </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
      </div>
    </Stack>
  );
};

export default Main;
