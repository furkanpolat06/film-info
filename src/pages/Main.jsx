import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { data } from "../helper/data";
import { useState } from "react";

const Main = () => {
  const [yearItem, setYearItem] = useState("");

  const handleClick = (item) => {
    setYearItem(item);
  };

  return (
    <Stack spacing={2}>
      {data.map((item) => (
        <Button key={item.id} onClick={() => handleClick(item)} variant="outlined">
          {item.date}
        </Button>
      ))}
    </Stack>
  );
};

export default Main;
