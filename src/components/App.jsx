/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { useState } from "react";

import { css } from "@emotion/react";
import Box from "@mui/material/Box";

import VideoDetail from "./VideoDetail";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import { fetchVideos } from "../utils";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTermSubmit = async (e) => {
    const options = {
      q: searchTerm,
      maxResults: 10,
      type: "video",
      part: "snippet",
      key: YOUTUBE_API_KEY,
    };
    e.preventDefault();

    const response = await fetchVideos(options);
    const videos = response.data.items;
    setVideos(videos);
  };

  const handleVideoSelect = id => {
    const video = videos.find(video => video.id.videoId === id);
    setSelectedVideo(video);
  }

  return (
    <Box
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
      `}
    >
      <SearchBar
        term={searchTerm}
        onChange={handleTermChange}
        onSubmit={handleTermSubmit}
      />
      <Box
        css={css`
          display: flex;
        `}
      >
        <VideoDetail video={selectedVideo} />
        <VideoList videos={videos} onSelectVideo={handleVideoSelect} />
      </Box>
    </Box>
  );
}

export default App;
