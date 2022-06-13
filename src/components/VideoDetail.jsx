/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";

function VideDetail({ video }) {
  let cardMedia;
  let cardContent;
  if (video !== null) {
    const snippet = video.snippet;
    const title =
      snippet.title.length > 50 ? snippet.title.slice(0, 50) : snippet.title;
    const description = snippet.description;
    const videoId = video.id.videoId;

    cardMedia = (
      <CardMedia
        component="iframe"
        src={`//www.youtube.com/embed/${videoId}`}
        alt="Cat"
        css={css`
          height: auto;
          width: 100%;
          height: 270px;
        `}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );

    cardContent = (
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    );
  } else {
    cardMedia = (
      <Box
        css={css`
          width: 480px;
          height: 270px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #666666;
        `}
      >
        <CircularProgress
          size={100}
          css={css`
            circle.MuiCircularProgress-circleIndeterminate {
              color: #333333;
            }
          `}
        />
      </Box>
    );

    cardContent = (
      <Box
        css={css`
          padding: 12px;
        `}
      >
        <LinearProgress
          css={css`
            height: 14px;
            width: 70%;
            background: #999999;

            span.MuiLinearProgress-bar {
              background: #666666;
            }
          `}
        />
        <LinearProgress
          css={css`
            margin-top: 18px;
            height: 12px;
            width: 50%;
            background: #999999;

            span.MuiLinearProgress-bar {
              background: #666666;
            }
          `}
        />
      </Box>
    );
  }

  return (
    <Box
      css={css`
        margin-right: 16px;
      `}
    >
      <Card
        css={css`
          width: 480px;
          margin-top: 16px;
        `}
      >
        {cardMedia}
        {cardContent}
      </Card>
    </Box>
  );
}

export default VideDetail;
