/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function VideDetail() {
  return (
    <Box css={css`
      margin-right: 16px;
    `}>
      <Card css={css`
          width: 700px;
          margin-top: 16px;
        `}>
        <CardMedia
          component="img"
          src="/cat.jpg"
          alt="Cat"
          width="3961"
          height="5546"
          css={css`
              height: auto;
              width: 100%;
              aspect-ratio: 16 / 9;
        `} />
        <CardContent>
          <Typography variant="h5" component="div">
            What if programming is an anime!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos autem consectetur similique ipsam dicta velit placeat vel, sapiente nisi.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default VideDetail;