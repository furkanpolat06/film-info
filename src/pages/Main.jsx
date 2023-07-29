import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { data } from "../helper/data";
import { useState } from "react";
import StarRank from "../components/StarRank";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, ButtonBase, CardActionArea } from "@mui/material";

const Main = () => {
  const [yearItem, setYearItem] = useState("");
  const [clickedButtonId, setClickedButtonId] = useState(null);


  const handleClick = (item) => {
    setYearItem(item);
    setClickedButtonId(item.id)
    
  };
  console.log(yearItem);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", marginLeft:"20vw",  marginTop:"10vw",  }} spacing={2}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {data.map((item) => (
          <Button 
            sx={{ maxWidth: 70, marginBottom: "12px",  marginRight: "15px",  marginTop: "15px",
             
            "&:hover": {backgroundColor: "lightgray", border:"none"} ,
            
            border:"none",
            backgroundColor:"lightgray",
            fontWeight:"bold",
            fontSize:"1rem",
            
            borderBottom: clickedButtonId === item.id ? '3px solid red' : 'initial' ,
            color: clickedButtonId === item.id ? 
            'red' : 'initial',
            

          }} 
            key={item.id}
            onClick={() => handleClick(item)}
            variant="outlined"
          >
            {item.date}
          </Button>
        ))}
      </Box>

      <Box >
        {yearItem && (
          <Card sx={{ maxWidth: 800, minHeight:240, margin: "10px" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {yearItem.title}
                </Typography>
                <Typography variant="body2">{yearItem.body}</Typography>
                <Typography variant="body2" color="red">
                  {yearItem.tags.join(" / ")}
                </Typography>
                <Typography
                  spacing={2}
                  variant="body2"
                  color="red"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <StarRank filmRate={yearItem.rate} />
                  <Typography
                    sx={{ fontSize: "h5.fontSize", marginLeft: "15px" }}
                  >
                    {" "}
                    {yearItem.rate.toFixed(2)} / 10{" "}
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default Main;
