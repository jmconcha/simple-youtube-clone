/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

function VideoItem({ detail }) {
  const title = detail.title.length > 50 ? detail.title.slice(0, 50) : detail.title;
  const description = detail.description;
  const thumbnail = detail.thumbnails.medium.url;

  return (
    <Card css={css`
      margin-top: 16px;
      width: 400px;
      height: 100px;
      display: flex;
      align-items: center;
    `}>
      <Avatar
        src={thumbnail}
        alt={description}
        css={css`
          width: 60px;
          height: 60px;
          margin: 16px;
        `}
      />
      <CardContent>
        <Typography
          variant="body1"
          component="div"
          css={css}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default VideoItem;