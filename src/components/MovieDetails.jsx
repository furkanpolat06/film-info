// src/components/MovieDetails.jsx
import React from 'react';
import StarRank from './StarRank';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MovieDetails = ({ yearItem }) => {
  return (
    <div>
      {yearItem && (
        <Card sx={{backgroundColor:"beige", maxWidth: 550, minHeight: 240, margin: '10px '  }}>
          <CardActionArea>
            <CardContent >
              <Typography  gutterBottom variant="h4" component="div">
                {yearItem.title}
              </Typography>
              <Typography variant="body2">{yearItem.body}</Typography>
              <Typography sx={{marginTop: '15px'}}  variant="body2" color="red">
                {yearItem.tags.join(' / ')}
              </Typography>
              <Typography spacing={5} variant="body2" color="red" sx={{ display: 'flex', alignItems: 'center'  }}>
                <StarRank filmRate={yearItem.rate} />
                <Typography sx={{ fontSize: 'h5.fontSize', margin: '15px' }}>
                  {' '}
                  {yearItem.rate.toFixed(2)} / 10{' '}
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};

export default MovieDetails;
