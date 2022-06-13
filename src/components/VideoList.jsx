/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Box from '@mui/material/Box';

import VideoItem from './VideoItem';

function VideoList({ videos, onSelectVideo }) {
  const videoList = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      detail={video.snippet}
      onSelectVideo={() => onSelectVideo(video.id.videoId)}
    />
  ));

  return (
    <Box css={css`
      display: flex;
      flex-direction: column;
    `}>
      {videoList}
    </Box>
  );
}

export default VideoList;