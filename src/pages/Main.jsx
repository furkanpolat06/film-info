import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { data } from "../helper/data";
import { useState } from "react";

const Main = () => {
  const [yearItem, setYearItem] = useState("");

  const handleClick = (item) => {
    setYearItem(item);
  };
console.log(yearItem);
  return (

    <Stack spacing={2}>
      {data.map((item) => (
        <Button key={item.id} onClick={() => handleClick(item)} variant="outlined">
          {item.date}
        </Button>
      ))}

      <p>{yearItem.body}</p>
    </Stack>
    
  );
};

export default Main;
