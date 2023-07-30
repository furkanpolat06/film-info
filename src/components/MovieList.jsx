// src/components/MovieList.jsx
import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const MovieList = ({ data, handleClick, clickedButtonId }) => {
  return (
    <Box sx={{ margin: '14px ', display:"grid", justifyContent:"center", gridTemplateColumns:"repeat(6, 1fr)" }}> 
      {data.map((item) => (
        <Button
          key={item.id}
          onClick={() => handleClick(item)}
          variant="outlined"
          sx={{
            maxWidth: 70,
            marginBottom: '12px',
            marginRight: '15px',
            marginTop: '15px',
            '&:hover': { backgroundColor: 'lightgray', border: 'none',              borderBottom: clickedButtonId === item.id ? '3px solid red' : 'initial',
          },
            border: 'none',
            backgroundColor: 'lightgray',
            fontWeight: 'bold',
            fontSize: '1rem',
            borderBottom: clickedButtonId === item.id ? '3px solid red' : 'initial',
            color: clickedButtonId === item.id ? 'red' : 'initial',
          }}
        >
          {item.date}
        </Button>
      ))}
    </Box>
  );
};

export default MovieList;
