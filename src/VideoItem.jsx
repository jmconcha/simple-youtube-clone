/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

function VideoItem() {
  return (
    <Card css={css`
      margin-top: 16px;
      width: 400px;
      height: 100px;
      display: flex;
      align-items: center;
    `}>
      <Avatar
        src="/cat.jpg"
        alt="cat"
        css={css`
          width: 60px;
          height: 60px;
          margin: 16px;
        `}
      />
      <CardContent>
        <Typography variant="h6" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default VideoItem;