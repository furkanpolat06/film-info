// src/pages/Main.jsx
import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';
import { data } from '../helper/data';
import Box from '@mui/material/Box';

const Main = () => {
  const [yearItem, setYearItem] = useState('');
  const [clickedButtonId, setClickedButtonId] = useState(null);

  const handleClick = (item) => {
    setYearItem(item);
    setClickedButtonId(item.id);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: '20vw', marginTop: '10vw' }} spacing={2}>
      
      <MovieList  data={data} handleClick={handleClick} clickedButtonId={clickedButtonId} />
      <MovieDetails yearItem={yearItem} />
    </Box>
  );
};

export default Main;
